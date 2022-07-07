// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );
import $ from "jquery";

export function showMessage(message) {
    return alert(message);
  }
export function decodeHTMLEntities(text) {
    var entities = [
        ['amp', '&'],
        ['apos', "'"],
        ['#x27', "'"],
        ['#x2F', '/'],
        ['#39', "'"],
        ['#47', '/'],
        ['lt', '<'],
        ['gt', '>'],
        ['nbsp', ' '],
        ['quot', '"'],
    ];
    for (var i = 0, max = entities.length; i < max; ++i) text = text.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1]);
    return text;
}

export function getImages(string) {
    var imgRex = /<img.*?src="(.*?)"[^>]+>/g;
    var images = [];
    var img;
    while ((img = imgRex.exec(string))) {
        images.push(img[1]);
    }
    return images;
}

export function getDomain(url, subdomain) {
    subdomain = subdomain || false;

    url = url.replace(/(https?:\/\/)?(www.)?/i, '');

    if (!subdomain) {
        url = url.split('.');

        url = url.slice(url.length - 2).join('.');
    }

    if (url.indexOf('/') !== -1) {
        return url.split('/')[0];
    }

    return url;
}

export function checkExitsDomain(url, domain) {
    // var st = false;
    // var parseUrl = url.split(domain);
    // // console.log('url', parseUrl, parseUrl.length);
    // if (parseUrl.length > 1) st = true;
    // else st = false;
    // return st;
    var reg = new RegExp(domain);
    return reg.test(url);
}

export function editorDownloadImage(editor) {
    $('#form-list-img-download').modal({ backdrop: 'static', show: true });

    if (ajax_loading) {
        showMessage('Hệ thống đang xử lý vui lòng đợi trong giây lát');
        return;
    }

    var html = editor.getContent();
    //get image src original (not encoded)
    var images = getImages(html);
    var img_download = [];
    var rgx = new RegExp('(mediatech.vn)|(media.baoquangninh.com.vn)', 'g');
    var listHtml = '';
    var indexImg = 0;
    var indexImgDownload = [];
    window.editorDownloadImageXhr = [];
    $('#btnsave-image-download').show();
    $.each(images, function(k, image) {
        var imgdownloadstatus = '';
        if (image != undefined && image != '') {
            if (checkExitsDomain(image, 'media.baoquangninh.com.vn') || checkExitsDomain(image, 'mediatech.vn') || checkExitsDomain(image, '.local')) {
                imgdownloadstatus = `<a href="javascript:;" id="img-download-file-click${indexImg}"  class="btn btn-success"><i class="fa fa-check"></i></a>`;
            } else {
                imgdownloadstatus = `<a href="javascript:;" id="img-download-file-click${indexImg}" onclick="downloadFileImage('${image}',${indexImg})" class="btn btn-primary">Tải về</a>`;
                indexImgDownload.push(image);
                img_download.push(image);
            }
            listHtml += `<tr>
                            <td  style="padding:0px;">
                                <img src="${image}" class="img-responsive" style="max-width:100%;max-heigth:100%;" />
                                <input type="hidden" name="image[${indexImg}]" value="${image}" />
                            </td>
                            <td  style="padding:0px;" class="text-left myProgress">
                                <div class="progress progress-xs progress-striped" id="progress_bar_blank${indexImg}" style="margin-bottom: 0px">
                                    <div style="position: absolute;right: 5px; top: 5px; display: flex;">
                                        <div id="progress_bar_blank_pro${indexImg}" class="sr-active mr5">0% Hoàn thành</div>
                                        <div id="progress_abort${indexImg}" class="text-danger bold" style="display:none; padding: 0 5px; cursor: pointer;" onclick="abortDownloadImage(${indexImg});">X</div>
                                    </div>
                                    <div id="progress_bar_color${indexImg}" class="progress-bar progress-bar-success"> </div>
                                </div>
                                ${imgdownloadstatus}
                            </td>
                        </tr>`;
            indexImg++;
        }
    });

    if (indexImgDownload.length < 1) {
        $('#btnsave-image-download').hide();
    }
    $('#form-img-list-content').html(listHtml);
}

export function checkDownloadImage() {
    var data = $('#form-upload-image-content').serializeArray();
    var img_download = [];
    var index = 0;
    if (data.length) {
        $.each(data, function(k, item) {
            item.index = k;
            if (!checkExitsDomain(item.value, 'media.baoquangninh.com.vn') && !checkExitsDomain(item.value, 'mediatech.vn')) {
                img_download.push(item);
            }
        });
        // console.log(img_download)
    }
    data = null;

    $('#btnsave-image-download').hide();
    $('#data-download-loading-id').html(0);
    $('#data-download-loading-total').html(img_download.length);
    $('.data-download-loading').show();
    if (img_download.length) {
        downloadStep(img_download, index);
    }
}

export function downloadFileImage(img, index) {
    if (img != undefined && img != '') {
        // console.log("image", img);
        downloadImage([img], index, function(res) {
            if (res.errCode == 0) {
                showMessage(res.errMsg);
            }
        });
    }
}

export function abortDownloadImage(index) {
    if (window.editorDownloadImageXhr.length) {
        $.each(window.editorDownloadImageXhr, function(i, v) {
            if (this.index == index) {
                this.xhr.abort();
                $('#progress_bar_blank_pro' + index).html('Aborted');
                $('#progress_abort' + index).hide();
                $('#progress_bar_color' + index).css('width', '0%');
                $('#progress_bar_blank' + index).removeClass('active');
            }
        });
    }
}

export function downloadStep(data, index) {
    var state = data[index];
    if (state != undefined && state != '') {
        if (state.value != undefined && state.value != '') {
            // console.log("image", index, state.value);
            downloadImage([state.value], state.index, function(res) {
                if (res.errCode == 1) {
                    index++;
                    var countDownload = index;
                    if (countDownload > data.length) countDownload = data.length;
                    $('#data-download-loading-id').html(countDownload);

                    downloadStep(data, index);
                } else {
                    showMessage(res.errMsg);
                }
            });
        }
    }
}

export function downloadImage(img_download, index, cb) {
    var post_id = $('input[name="post_id"]').val();
    var post_type = $('input[name="post_type"]').val();
    // if (img_download.length) {
    var html = tinymce.activeEditor.getContent();
    var cleanup_html = $('<div/>').html(html);
    // decode html entities
    cleanup_html = cleanup_html.html();
    cleanup_html = decodeHTMLEntities(cleanup_html);

    var uploadProgressHandler = function(evt, index) {
        if (evt.lengthComputable) {
            $('#img-download-file-click' + index).hide();
            $('#progress_abort' + index).show();
            var percent = evt.loaded / evt.total;
            percent = parseInt(percent * 100);
            $('#progress_bar_blank' + index)
                .show()
                .addClass('active');
            $('#progress_bar_blank_pro' + index).text('Đang tải ảnh ...');
            $('#progress_bar_color' + index).css('width', percent + '%');
        }
    };

    var loadHandler = function(evt, index) {
        try {
            var jdata = JSON.parse(evt.target.responseText);
            $('#progress_bar_blank_pro' + index).html(jdata.errMsg);
            $('#progress_bar_color' + index).css('width', '0%');
        } catch (err) {
            showMessage('Không thể tải ảnh');
        }
    };

    var errorHandler = function(evt, index) {
        $('#progress_bar_blank_pro' + index).html('Failed');
        $('#progress_bar_color' + index).css('width', '0%');
    };

    var abortHandler = function(evt, index) {
        $('#progress_bar_blank_pro' + index).html('Aborted');
        $('#progress_bar_color' + index).css('width', '0%');
    };

    var finishHandler = function(index) {
        //hide abort button
        $('#progress_abort' + index).hide();
    };

    var xhr = $.ajax({
        url: '/admin/files/download-remote-image',
        type: 'post',
        data: {
            images: img_download,
            type: 'download_from_remote',
            post_type: post_type,
            post_id: post_id,
        },
        xhr: function() {
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener(
                'progress',
                function(evt) {
                    uploadProgressHandler(evt, index);
                },
                false,
            );
            xhr.addEventListener(
                'load',
                function(evt) {
                    loadHandler(evt, index);
                },
                false,
            );
            xhr.addEventListener(
                'error',
                function(evt) {
                    errorHandler(evt, index);
                },
                false,
            );
            xhr.addEventListener(
                'abort',
                function(evt) {
                    abortHandler(evt, index);
                },
                false,
            );

            return xhr;
        },
        success: function(res) {
            stopProgressBar();
            if (res.errCode == 1 && res.images) {
                $.each(res.images, function() {
                    cleanup_html = cleanup_html.replaceAll(this.image, this.replace_image);
                });
                tinymce.activeEditor.setContent(cleanup_html);
            }
            finishHandler(index);
            //showMessage(res.errMsg);
            if (typeof cb == 'function') cb(res);
        },
        error: function() {
            stopProgressBar();
        },
    });
    window.editorDownloadImageXhr.push({ index: index, xhr: xhr });
    // }
}

export function moveProcessBar(i, index, maxP) {
    let frame = function() {
        if (width >= 100) {
            clearInterval(id);
            i = 0;
            $('#img-download-file' + index).html('Đã tải xong....100%');
        } else {
            if (width < maxP) {
                width++;
            }
            elem.style.width = width + '%';
            $('#img-download-file' + index).html('Đang tải....' + width + '%');
            if (width >= 99) {
                clearInterval(id);
            }
        }
    }
    if (i == 0) {
        i = 1;
        $('#myBar' + index).removeAttr('style');
        var elem = document.getElementById('myBar' + index);
        var width = 1;
        $('#img-download-file-click' + index).hide();
        $('#img-download-file' + index).html('Đang tải....' + width + '%');
        var id = setInterval(frame, 10);
    }
}

export function editorCleanUpHtml(editor, html, allow) {
    // if(allow == undefined) {
    //     return showConfirm('Bạn có muốn xoá tất cả định dạng?', function(allow) {
    //         return editorCleanUpHtml(editor, html, allow);
    //     });
    // }
    var current_node_selected = editor.selection.getNode();
    try {
        if (allow) {
            //clean xss injection
            // html = html ? filterXSS(html) : '';
            // cleanup attribute style and class
            html = html.replace(/(<[^>]+) class=".*?"/gi, '$1');
            html = html.replace(/(<[^>]+) style=".*?"/gi, '$1');
            html = html.replace(/(<[^>]+) width=".*?"/gi, '$1');
            html = html.replace(/(<[^>]+) height=".*?"/gi, '$1');
            html = html.replace(/(<[^>]+) onclick=".*?"/gi, '$1');
            html = html.replace(/(<[^>]+) onmouseover=".*?"/gi, '$1');
            html = decodeHTMLEntities(html);

            var cleanup_html = $('<div/>').html(html);
            if (cleanup_html.find('table.plugins').length) {
                if (editor != undefined && editor != null) {
                    if (editor.selection.getContent() == '') {
                        editor.insertContent(html);
                    } else {
                        editor.selection.setContent(cleanup_html);
                    }
                    return true;
                }
                return html;
            }
            // move div tag to p
            cleanup_html.children('div').each(function(e, el) {
                $(this).replaceWith($(this).contents());
            });
            cleanup_html.find('div').each(function(k, el) {
                $(this).replaceWith($(this).contents());
            });
            // cleanup link
            cleanup_html.find('a').each(function(i, el) {
                $(this).contents().unwrap();
            });
            // cleanup figure image
            cleanup_html.find('figure').each(function(i, el) {
                //if not owner
                if ($(this).attr('copyright') == undefined || ($(this).attr('copyright') && !/(\.local|\.mediatech|baoquangninh\.com\.vn)/.test($(this).attr('copyright')))) {
                    var src = $(this).find('img').length ? $(this).find('img').attr('src') : '';
                    var caption_text = $(this).find('figcaption').length ? $(this).find('figcaption').text() : $(this).text();
                    var str = '<p class="image"><img src="' + src + '" data-allow-ads="true"></p>';
                    if (caption_text != '') {
                        str = '<figure class="image" contenteditable="false"><img src="' + src + '" data-allow-ads="true">';
                        str += '<figcaption>' + caption_text + '</figcaption>';
                        str += '</figure>';
                    }
                    //  new fixed
                    if (src) {
                        $(el).replaceWith(str);
                    } else {
                        $(el).replaceWith('');
                    }
                } else {
                    // console.log('not owner')
                }
            });

            // cleanup table image
            // anhtuan added at 10-11-2021
            cleanup_html.find('table').each(function(i, el) {
                //if not owner
                if ($(this).attr('copyright') == undefined || ($(this).attr('copyright') && !/(\.local|\.mediatech|baoquangninh\.com\.vn)/.test($(this).attr('copyright')))) {
                    var src = $(this).find('img').length ? $(this).find('img').attr('src') : '';
                    if (src != '' && src != undefined) {
                        var caption_text = $(this).text();
                        var str = '<p class="image"><img src="' + src + '" data-allow-ads="true"></p>';
                        if (caption_text != '') {
                            str = '<figure class="image" contenteditable="false"><img src="' + src + '" data-allow-ads="true">';
                            str += '<figcaption>' + caption_text + '</figcaption>';
                            str += '</figure>';
                        }
                        $(el).replaceWith(str);
                    }
                } else {
                    // console.log('not owner')
                }
            });
            cleanup_html.find('img').each(function(i, el) {
                if ($(this).attr('data-allow-ads') == undefined || $(this).attr('data-allow-ads') == false) {
                    $(this).attr('data-allow-ads', 'true');
                }
            });
            if ($(current_node_selected).is('figcaption')) {
                cleanup_html = cleanup_html.text();
            } else {
                cleanup_html = cleanup_html.html();
            }
            // console.log('after cleanup', cleanup_html);
        } else {
            cleanup_html = html;
        }
        //using for paste event
        if (editor != undefined && editor != null) {
            editor.selection.setContent(cleanup_html);
            return true;
        }
    } catch (e) {
        showMessage('Lỗi không thể xử lý bài viết: ' + e.message);
        cleanup_html = html;
    }
    //using for paste preprocess
    return typeof cleanup_html === 'string' || cleanup_html instanceof String ? cleanup_html : '';
}

export function getInputSelection(el) {
    var start = 0,
        end = 0,
        normalizedValue,
        range,
        textInputRange,
        len,
        endRange;
    if (typeof el.selectionStart == 'number' && typeof el.selectionEnd == 'number') {
        start = el.selectionStart;
        end = el.selectionEnd;
    } else {
        range = document.selection.createRange();
        if (range && range.parentElement() == el) {
            len = el.value.length;
            normalizedValue = el.value.replace(/\r\n/g, '\n');
            // Create a working TextRange that lives only in the input
            textInputRange = el.createTextRange();
            textInputRange.moveToBookmark(range.getBookmark());
            // Check if the start and end of the selection are at the very end
            // of the input, since moveStart/moveEnd doesn't return what we want
            // in those cases
            endRange = el.createTextRange();
            endRange.collapse(false);
            if (textInputRange.compareEndPoints('StartToEnd', endRange) > -1) {
                start = end = len;
            } else {
                start = -textInputRange.moveStart('character', -len);
                start += normalizedValue.slice(0, start).split('\n').length - 1;
                if (textInputRange.compareEndPoints('EndToEnd', endRange) > -1) {
                    end = len;
                } else {
                    end = -textInputRange.moveEnd('character', -len);
                    end += normalizedValue.slice(0, end).split('\n').length - 1;
                }
            }
        }
    }
    return {
        start: start,
        end: end,
    };
}

export function unicodeEscape(str) {
    return str.replace(/[\s\S]/g, function(escape) {
        return '\\u' + ('0000' + escape.charCodeAt().toString(16)).slice(-4);
    });
}

export function decodeUnicode(str) {
    return JSON.parse('"' + str + '"');
}

export function setSelectionRange(input, selectionStart, selectionEnd) {
    if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
    } else if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
    }
}

export function elfinderDialog(callback, value, meta) {
    // CSS class name of TinyMCE conntainer
    var cls = tinymce.majorVersion < 5 ? 'mce-container' : 'tox';
    var fm = $('<div/>')
        .dialogelfinder({
            debug: ['error', 'warning', 'event-destroy'],
            url: site_path + 'assets/js/plugins/elFinder/php/connector.minimal.php',
            // requestType: 'post',
            // lang: 'vi',
            width: '80%',
            height: 500,
            rememberLastDir: true,
            useBrowserHistory: true,
            destroyOnClose: true,
            customData: {
                ftp_user: $('#ftp_user').val(),
                ftp_pass: $('#ftp_pass').val(),
                ftp_path: $('#ftp_path').val(),
                ftp_root: $('#ftp_root').val(),
                ftp_host: $('#ftp_host').val(),
                upload_type: $('#upload_type').val(),
            },
            bootCallback: function(fm) {
                // set z-index
                $('.dialogelfinder').css('z-index', parseInt($('body>.' + cls + ':last').css('z-index')) + 100);
            },
            getFileCallback: function(file, fm) {
                var url, reg, info;
                // URL normalization
                url = fm.convAbsUrl(file.url);
                // Make file info
                info = file.name + ' (' + fm.formatSize(file.size) + ')';
                // Provide file and text for the link dialog
                if (meta.filetype == 'file') {
                    callback(url, {
                        text: info,
                        title: info,
                    });
                }
                // Provide image and alt text for the image dialog
                if (meta.filetype == 'image') {
                    callback(url, {
                        alt: info,
                    });
                }
                // Provide alternative source and posted for the media dialog
                if (meta.filetype == 'media') {
                    callback(url);
                }
            },
            commandsOptions: {
                getfile: {
                    oncomplete: 'close',
                    folders: false,
                },
            },
        })
        .dialogelfinder('instance');
}

export function editorUploadHandler(blobInfo, success, reject, progress, description) {
    // console.trace();
    // console.log('editorUploadHandler description --> ', description);
    var post_id = $('input[name="post_id"]').val();
    var post_type = $('input[name="post_type"]').val();
    if (typeof description === 'string') {
        description = description == undefined ? '' : description;
        description = description.replace(/(\r\n|\n|\r)/gm, '');
    } else {
        description = '';
    }
    var formData = new FormData();
    formData.append('image', blobInfo.blob(), blobInfo.filename());
    formData.append('description', description);
    formData.append('upload_type', 'editor_quick_upload');
    formData.append('post_id', post_id);
    formData.append('post_type', post_type);
    $.ajax({
        url: '/admin/files/upload',
        type: 'POST',
        dataType: 'json',
        data: formData,
        processData: false,
        contentType: false,
        beforeSend: function() {
            loadProgressBar();
        },
        success: function(res) {
            setTimeout(function() {
                stopProgressBar();
            }, 500);
            if (res.errCode && res.items.length) {
                success(res.items[0], {
                    alt: res.items[1],
                    caption_text: res.items[1],
                    caption: true,
                });
            }
        },
    });
}

export function editorFilesBrowser(callback, value, meta) {
    var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
    var y = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    // console.log(callback, value, meta);
    var file_in_content = [];
    var post_id = $('input[name="post_id"]').val();
    post_id = post_id == undefined ? '' : post_id;
    //get file in article
    var html = tinymce.get('info') != undefined ? tinymce.get('info').getContent() : '';
    var wrapper = $('<div/>').html(html);
    if (wrapper.find('img').length) {
        wrapper.find('img').each(function(i, el) {
            var src = $(this).attr('src');
            var pattern_query = new RegExp(/\?.+=.*/g);
            if (src != undefined && isValidURL(src) && !pattern_query.test(src)) {
                src = src.substring(src.lastIndexOf('/') + 1);
                src = src.lastIndexOf('?') >= 0 ? src.replace(src.substring(src.lastIndexOf('?')), '') : src;
                file_in_content.push(src);
            }
        });
        file_in_content = file_in_content.length ? file_in_content.join(',') : '';
    }
    var only_quality = $('input[name="only_quality"]').length ? $('input[name="only_quality"]').val() : 'all';
    var type = 'image' === meta.filetype ? 'image' : 'media' === meta.filetype ? 'media' : 'document',
        url = '/admin/files/' + type + '-manager?only_quality=' + only_quality + '&post_id=' + post_id + '&post_type=' + editor_post_type + '&quality=medium';
    var title = 'Quản lý Files';
    switch (type) {
        case 'image':
            title = 'Quản lý Hình ảnh';
            break;
        case 'media':
            title = 'Quản lý Media file';
            break;
        case 'image':
            title = 'Quản lý Tài liệu';
            break;
    }
    tinymce.activeEditor.windowManager.openUrl({
        url: url,
        title: title,
        width: x * 0.9,
        height: y * 0.9,
        onMessage: (api, message) => {
            // console.log(api, message);
            if (message.mceAction == 'FILES_ADD_IMAGE') {
                callback(message.data.file_url, {
                    // alt: message.data.file_name
                    alt: message.data.file_desc,
                    caption_text: message.data.file_desc,
                    caption: message.data.file_desc.length ? true : false,
                });
            }
            if (message.mceAction == 'FILES_ADD_MEDIA') {
                callback(message.data.file_url);
            }
            if (message.mceAction == 'FILES_ADD_DOCUMENT') {
                callback(message.data.file_url, {
                    text: message.data.file_name,
                });
            }
            tinymce.activeEditor.windowManager.close();
        },
    });
}

export function editorDocumentsBrowser(editor) {
    var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
    var y = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    // console.log(callback, value, meta);
    var file_in_content = [];
    var post_id = $('input[name="post_id"]').val();
    var type = 'document',
        url = '/admin/files/' + type + '-manager?post_id=' + post_id;
    var title = 'Quản lý tài liệu';
    tinymce.activeEditor.windowManager.openUrl({
        url: url,
        title: title,
        width: x * 0.9,
        height: y * 0.9,
        onMessage: (api, message) => {
            // console.log(message);
            if (message.mceAction == 'FILES_ADD_DOCUMENT') {
                editor.execCommand('mceInsertLink', false, message.data.file_url);
            }
            tinymce.activeEditor.windowManager.close();
        },
    });
}

export function collectFileInEditor() {}

export function quickSave(module, form_id) {
    if (ajax_loading) {
        showMessage('Hệ thống đang xử lý vui lòng đợi trong giây lát');
        return;
    }
    var formInstance = $('#' + form_id).parsley();
    formInstance.validate();

    if (!formInstance.isValid()) {
        showMessage('Vui lòng điền vào các ô bắt buộc nhập');
    } else {
        formInstance.$element[0].submit();
    }
}

export function quickPreview(module, form_id, is_preview, next_url, ajax_url, save_and_unlock, move_state) {
    if (window.quick_preview_state == true) {
        showMessage('Hệ thống đang xử lý vui lòng đợi trong giây lát');
        return;
    }
    // console.log(module, form_id, is_preview, next_url, ajax_url, save_and_unlock, move_state);
    is_preview = is_preview == undefined || is_preview == null ? false : is_preview;
    save_and_unlock = save_and_unlock == undefined ? false : save_and_unlock;
    move_state = move_state == undefined ? false : move_state;
    // console.log('save_and_unlock:'.$save_and_unlock);
    next_url = next_url == undefined || next_url == null ? false : next_url;
    ajax_url = ajax_url == undefined || ajax_url == null ? '/admin/' + module + '/preview' : ajax_url;
    //quick preview in News Module
    if (tinymce.activeEditor != null && tinymce.activeEditor != undefined) {
        tinymce.activeEditor.execCommand('mceSave');
    }
    var qs = parseUrlQuery(window.location.href);
    var redirect_back_url = $('meta[name="redirect_back_url"]').attr('content');
    var formInstance = $('#' + form_id).parsley();
    var status = $('#status').val();

    // validate all input has required attribute
    formInstance.validate();

    // console.log('ajax_url: '+ajax_url);
    if (!formInstance.isValid()) {
        showMessage('Vui lòng điền vào các ô bắt buộc nhập');
    } else {
        //check if press move_state button
        if (move_state) {
            // valid publish date empty if state is scheduling publish
            if (status == 8) {
                formInstance.destroy();
                var pub_input = $('#schedule_publish_date').parsley();
                var rs = pub_input.validate(true);
                // console.log('ssss', pub_input.isValid(), rs);
                if (pub_input.isValid() && rs !== true) {
                    $('#schedule_publish_date').focus();
                    return false;
                }
            }
            //valid if choose publish with anther date
            if ($('#allow_change_publish_date').prop('checked')) {
                var pub_input = $('#change_publish_date').parsley();
                var rs = pub_input.validate(true);
                if (pub_input.isValid() && rs !== true) {
                    $('#change_publish_date').focus();
                    return false;
                }
            }
            if ($('#allow_publish_expire_date').prop('checked')) {
                var pub_input = $('#publish_expire_date').parsley();
                var rs = pub_input.validate(true);
                if (pub_input.isValid() && rs !== true) {
                    $('#publish_expire_date').focus();
                    return false;
                }
            }
        }
        if (module && form_id) {
            var data = new FormData($('#' + form_id)[0]);
            data.append('move_state', move_state);
            data.append('save_and_unlock', save_and_unlock);
            data.append('is_preview', is_preview);
            $.ajax({
                url: ajax_url,
                method: 'POST',
                dataType: 'json',
                processData: false,
                contentType: false,
                data: data,
                beforeSend: function() {
                    window.quick_preview_state = true;
                    $('.btn_quick_save_form').prop('disabled', true);
                    loadProgressBar();
                },
                success: function(res) {
                    // console.log('redirect to '+next_url);
                    if (res.errCode && res.data) {
                        //reset form data
                        if (
                            $('#' + form_id).find('[name="post_id"]').length &&
                            $('#' + form_id)
                            .find('[name="post_id"]')
                            .val() == ''
                        ) {
                            $('#' + form_id + ' [name="name"]').val('');
                        }
                        if (is_preview) {
                            window.open(res.data.target, '_blank');
                            if (!$('#' + form_id).find('[name="post_id"]').length ||
                                $('#' + form_id)
                                .find('[name="post_id"]')
                                .val() == ''
                            ) {
                                window.location.href = res.data.update;
                            } else {}
                        } else {
                            if (move_state) {
                                window.location.href = redirect_back_url;
                            } else {
                                if (!$('#' + form_id).find('[name="post_id"]').length ||
                                    $('#' + form_id)
                                    .find('[name="post_id"]')
                                    .val() == ''
                                ) {
                                    if (res.data.update != undefined) {
                                        window.location.href = res.data.update;
                                    } else {
                                        if (allow_reload) window.location.reload();
                                    }
                                } else {
                                    showMessage(res.errMsg);
                                }
                            }
                        }
                    } else {
                        showMessage(res.errMsg);
                    }
                    setTimeout(function() {
                        window.quick_preview_state = false;
                        $('.btn_quick_save_form').prop('disabled', false);
                        stopProgressBar();
                    }, 1000);
                },
                error: function() {
                    if (
                        $('#' + form_id).find('[name="post_id"]').length &&
                        $('#' + form_id)
                        .find('[name="post_id"]')
                        .val() == ''
                    ) {
                        $('#' + form_id + ' [name="name"]').val($('#' + form_id + ' [name="name"]').val() + ' - Copy');
                    }
                    setTimeout(function() {
                        window.quick_preview_state = false;
                        $('.btn_quick_save_form').prop('disabled', false);
                        stopProgressBar();
                    }, 1000);
                },
            });
        } else {
            showMessage('Không đủ tham số!');
        }
    }
}

export function pullOrPushArticle(module, id, action) {
    action = action == undefined ? 'pull' : action;
    module = module == undefined ? 'news' : module;
    if (module && id) {
        $.ajax({
            url: '/admin/' + module + '/' + action,
            method: 'POST',
            dataType: 'json',
            data: {
                id: id,
            },
            success: function(res) {
                if (res.errCode) {
                    window.location.reload();
                } else {
                    showMessage(res.errMsg);
                }
            },
        });
    } else {
        showMessage('Không đủ tham số!');
    }
}

export function editorRemoveAllLink(context) {
    var html = context.html.get();
    var cleanup_html = $('<div/>').html(html);
    cleanup_html.find('a').each(function(i, el) {
        $(this).replaceWith($(this).html());
    });
    // decode html entities
    cleanup_html = cleanup_html.html();
    cleanup_html = decodeHTMLEntities(cleanup_html);
    context.html.set(cleanup_html);
}
//
export function checkDuplicatGetText(id, type, text) {
    var st = false;
    for (var i in html_content_insdel) {
        var state = html_content_insdel[i];
        if (state.type == type && id == state.id) {
            st = true;
            state.text = text;
        }
    }
    return st;
}
//
export function dataFormChange() {
    var dataarr = $('#post_form').serializeArray();
    var data = {};
    var cats = [],
        pos = [];
    //
    new_htmldiff_content = tinyMCE.activeEditor.getContent();
    var output = htmldiff(htmldiff_content, new_htmldiff_content);
    var $html = $('<div>').html(output);
    $html.find('ins').each(function(e) {
        //console.log("ins==>", e, $(this).text());
        var txt = $(this).text();
        var ins = { id: e, text: txt, tag: 'ins', type: 'ins' };
        if (!checkDuplicatGetText(e, 'ins', txt)) {
            html_content_insdel.push(ins);
        }
    });
    $html.find('del').each(function(e) {
        // console.log("del==>", e, $(this).text());
        var txts = $(this).text();
        var dels = { id: e, text: txts, tag: 'del', type: 'del' };
        if (!checkDuplicatGetText(e, 'del', txts)) {
            html_content_insdel.push(dels);
        }
    });
    //
    $(dataarr).each(function(index, obj) {
        // console.log("obj.name", obj.name);
        if (obj.name == 'category_ids[]') {
            if (!checkDuplicatArr(obj.value, cats)) cats.push(obj.value);
        } else if (obj.name == 'positions[]') {
            if (!checkDuplicatArr(obj.value, pos)) pos.push(obj.value);
        } else {
            data[obj.name] = obj.value;
        }
    });
    data.category_ids = cats;
    data.positions = pos;
    data.info = html_content_insdel;
    // console.log('data==>', data);
    data['pageurl'] = window.location.href;
    var params = { content: data };
    $.ajax({
        url: route('admin/activity/log-change-content'),
        method: 'POST',
        beforeSend: function() {
            ajax_loading = true;
        },
        data: params,
        success: function(res) {
            log('log==>', res.errMsg);
            ajax_loading = false;
        },
    });
}

export function checkDuplicatArr(val, list) {
    var st = false;
    for (var i in list) {
        var value = list[i];
        if (value == val) {
            st = true;
        }
    }
    return st;
}

