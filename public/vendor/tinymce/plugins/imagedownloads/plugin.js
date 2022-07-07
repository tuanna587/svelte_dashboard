(function() {
    'use strict';
    var global = tinymce.util.Tools.resolve('tinymce.PluginManager');
    var global$1 = tinymce.util.Tools.resolve('tinymce.Env');
    var global$2 = tinymce.util.Tools.resolve('tinymce.util.Tools');
    var global$3 = tinymce.util.Tools.resolve('tinymce.util.Panel');
    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var keys = Object.keys;
    var hasOwnProperty = Object.hasOwnProperty;
    var each$1 = function(obj, f) {
        var props = keys(obj);
        for (var k = 0, len = props.length; k < len; k++) {
            var i = props[k];
            var x = obj[i];
            f(x, i);
        }
    };
    var get = function(obj, key) {
        return has(obj, key) ? Optional.from(obj[key]) : Optional.none();
    };
    var has = function(obj, key) {
        return hasOwnProperty.call(obj, key);
    };
    var getExceptPaths = function(editor) {
        return editor.getParam('imagedownloads_except_path');
    };
    var editorDownloadImage = function(editor) {
        if (ajax_loading) {
            showMessage('Hệ thống đang xử lý vui lòng đợi trong giây lát');
            return;
        }
        var post_id = $('input[name="post_id"]').val();
        var post_type = $('input[name="post_type"]').val();
        var html = editor.getContent();
        var $imgs = $(html).find('img');
        var img_download = [];
        var rgx = new RegExp('(mediatech.vn)|(media.baoquangninh.com.vn)', 'g');
        $imgs.each(function() {
            if (!rgx.test(this.src)) {
                var image = this.src;
                img_download.push(image);
            }
        });
        var cleanup_html = $('<div/>').html(html);
        cleanup_html.find('img').each(function(i, el) {
            $(this).removeAttr('srcset');
            $(this).removeAttr('data-src');
        });
        cleanup_html.find('source').each(function(d) {
            $(this).removeAttr('srcset');
            $(this).removeAttr('data-srcset');
        });
        // decode html entities
        cleanup_html = cleanup_html.html();
        cleanup_html = decodeHTMLEntities(cleanup_html);
        if (img_download.length) {
            $.ajax({
                url: '/admin/files/download-remote-image',
                type: 'post',
                data: {
                    images: img_download,
                    type: 'download_from_remote',
                    post_type: editor_post_type,
                    post_id: post_id,
                },
                success: function(res) {
                    if (res.errCode && res.images) {
                        $.each(res.images, function() {
                            cleanup_html = cleanup_html.replace(this.image, this.replace_image);
                        });
                        editor.setContent(cleanup_html);
                    }
                    showMessage(res.errMsg);
                },
            });
        }
    };
    var Uploader = function(settings) {
        // console.log('Uploader --> settings',settings);
        var defaultHandler = function(blobInfo, description, success, failure, progress) {
            console.log('defaultHandler handler', handler);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', settings.url);
            xhr.withCredentials = settings.credentials;
            xhr.upload.onprogress = function(e) {
                progress(e.loaded / e.total * 100);
            };
            xhr.onerror = function() {
                failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
            };
            xhr.onload = function() {
                if (xhr.status < 200 || xhr.status >= 300) {
                    failure('HTTP Error: ' + xhr.status);
                    return;
                }
                var json = JSON.parse(xhr.responseText);
                if (!json || typeof json.location !== 'string') {
                    failure('Invalid JSON: ' + xhr.responseText);
                    return;
                }
                success(pathJoin(settings.basePath, json.location));
            };
            var formData = new FormData();
            formData.append('file', blobInfo.blob(), blobInfo.filename());
            formData.append('filedesc', settings.filedesc);
            xhr.send(formData);
        };
        var uploadBlob = function(blobInfo, description, handler) {
            console.log('uploadBlob handler', handler);
            return new global$2(function(resolve, reject) {
                try {
                    handler(blobInfo, description, resolve, reject, noop);
                } catch (ex) {
                    reject(ex.message);
                }
            });
        };
        var isDefaultHandler = function(handler) {
            return handler === defaultHandler;
        };
        var upload = function(blobInfo) {
            console.log('upload ==> ', settings.handler);
            return !settings.url && isDefaultHandler(settings.handler) ? global$2.reject('Upload url missing from the settings.') : uploadBlob(blobInfo, settings.filedesc, settings.handler);
        };
        settings = global$4.extend({
            credentials: false,
            handler: defaultHandler
        }, settings);
        return {
            upload: upload
        };
    }
    var open = function(editor) {
        var dataApi = editor.windowManager.open({
            title: 'Download Remote Images',
            size: 'large',
            body: {
                type: 'panel',
                items: [{
                    type: 'htmlpanel',
                    html: '<div class="mce-imagedownloads" id="mce-imagedownloads-' + editor.id + '" style="width:100%;height:450px; overflow-y:auto; border:1px solid #ddd; padding: 15px;"></div>'
                }]
            },
            buttons: [{
                type: 'cancel',
                text: 'Close'
            }, {
                type: 'submit',
                text: 'Save',
                primary: true
            }],
            onSubmit: function(api) {
                var $ = tinymce.dom.DomQuery;
                var content = $('#mce-imagedownloads-' + tinymce.activeEditor.id).html();
                editor.selection.setContent(content);
                // console.log('editor.id', tinymce.activeEditor.id);
                api.close();
            }
        });
        // console.log('editor', editor);
        dataApi.focus('close');
    };
    var register = function(editor) {
        editor.ui.registry.addIcon('imagedownloads', '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/><path d="M12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8S7.59,4,12,4 M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10 c5.52,0,10-4.48,10-10C22,6.48,17.52,2,12,2L12,2z M13,12l0-4h-2l0,4H8l4,4l4-4H13z"/></g></svg>');
        editor.addCommand('insertRawHtml', function() {
            open(editor);
        });
    };
    var register$1 = function(editor) {
        editor.ui.registry.addButton('imagedownloads', {
            icon: 'imagedownloads',
            tooltip: 'Download Remote Images',
            onAction: function() {
                return editor.execCommand('insertRawHtml');
            },
        });
        editor.ui.registry.addMenuItem('imagedownloads', {
            icon: 'imagedownloads',
            text: 'Download Remote Images',
            onAction: function() {
                return editor.execCommand('insertRawHtml');
            }
        });
    };

    function Plugin() {
        global.add('imagedownloads', function(editor) {
            register(editor);
            register$1(editor);
        });
    }
    Plugin();
}());