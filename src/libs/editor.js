// overide config from global
/**
var editor_toolbar_simple = true;
var editor_menubar = '';
var editor_inline = false;
 */

var version = document.querySelector('[name="site_version"]').getAttribute('content');
var editor_post_type = document.querySelector('[name="app_control"]').getAttribute('content');
var useDarkMode = false; //window.matchMedia('(prefers-color-scheme: dark)').matches;
var plugins =
    'insertkeepformat spellchecker titlecase print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons code '; //logomask
var toolbar =
    'insertkeepformat undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | save print | insertfile image media link anchor | ';
// attach custom plugins
var plugin_toolbar = ' p_remove_all_link p_download_image p_spellcheck_toggle';
if (typeof editorLoadChartjs === 'function') {
    plugin_toolbar += ' p_chart';
}
if (typeof editorLoadTemplates === 'function') {
    plugin_toolbar += ' p_template';
}
if (typeof editorLoadNews === 'function') {
    plugin_toolbar += ' p_relate_news';
}
if (typeof editorLoadPoll === 'function') {
    plugin_toolbar += ' p_poll';
}
if (typeof editorLoadCompareImages === 'function') {
    plugin_toolbar += ' p_compare';
}
if (typeof editorLoadShare === 'function') {
    plugin_toolbar += ' p_sharelink';
}
if (typeof editorLoadCovid === 'function') {
    plugin_toolbar += ' p_covid';
}
toolbar = toolbar + plugin_toolbar + ' titlecase |  fullscreen preview code'; //logomask

if (typeof editor_toolbar_simple === 'boolean' && editor_toolbar_simple === true) {
    toolbar =
        'insertkeepformat titlecase bold italic underline strikethrough fontselect fontsizeselect formatselect alignleft aligncenter alignright alignjustify numlist bullist forecolor backcolor insertfile image media link preview code';
}
var htmldiff_content = [];
var html_content_insdel = [];
var new_htmldiff_content;
// console.log(typeof editorLoadTemplates);
tinymce.init({
    language: 'vi',
    selector: 'textarea.mce_editor',
    inline: typeof editor_inline === 'boolean' ? editor_inline : false,
    hidden_input: true,
    height: 450,
    mobile: {
        menubar: false,
        // theme: 'mobile',
        // toolbar_mode: 'scrolling',
        // toolbar: toolbar,
        // plugins: plugins,
    },
    language_url: '/assets/js/plugins/tinymce/langs/vi.js',
    plugins: plugins,
    browser_spellcheck: false,
    spellchecker_rpc_url: '',
    //using for dev
    external_plugins: {
        image: '/assets/js/plugins/tinymce/plugins/image/plugin.js?v=' + version,
        imagetools: '/assets/js/plugins/tinymce/plugins/imagetools/plugin.js?v=' + version,
        media: '/assets/js/plugins/tinymce/plugins/media/plugin.js?v=' + version,
    },
    imagetools_cors_hosts: ['webdev.local', 'ttqndev.mediatech.vn', '*.baoquangninh.com.vn', 'media.baoquangninh.com.vn'],
    imagetools_proxy: '/admin/files/store',
    menu: {
        edit: {
            title: 'Edit',
            items: 'undo redo | cut copy paste insertkeepformat | selectall | searchreplace',
        },
    },
    menubar: typeof editor_menubar === 'string' ? editor_menubar : 'file edit view insert custom format tools table help',
    toolbar: toolbar,
    quickbars_insert_toolbar: 'quicktable image media',
    paste_as_text: false,
    toolbar_sticky: false,
    autosave_ask_before_unload: false,
    autosave_interval: '5000s',
    autosave_prefix: '{path}{query}-{id}-',
    autosave_restore_when_empty: false,
    autosave_retention: '300m',
    image_title: false,
    image_advtab: true,
    // a11y_advanced_options: true,
    image_list: false,
    image_class_list: [
        { title: 'None', value: '' },
        { title: 'Rộng 400', value: 'image-400' },
        { title: 'Rộng 500', value: 'image-500' },
        { title: 'Rộng 600', value: 'image-600' },
        { title: 'Rộng full', value: 'image-full' },
        { title: 'Rộng tuỳ chỉnh', value: 'image-custom' },
        { title: 'Rộng 400 nền xám', value: 'image-400-gray' },
        { title: 'Rộng 500 nền xám', value: 'image-500-gray' },
        { title: 'Rộng 600 nền xám', value: 'image-600-gray' },
        { title: 'Rộng full nền xám', value: 'image-full-gray' },
        { title: 'Rộng tuỳ chỉnh nền xám', value: 'image-custom-gray' },
        { title: 'Ảnh bo viền 5', value: 'image-border-5' },
        { title: 'Ảnh bo viền 15', value: 'image-border-15' },
        { title: 'Ảnh tròn', value: 'image-circle' },
    ],
    image_class_list_default: 'image-full-gray',
    image_caption: true,
    automatic_uploads: true,
    image_description: true,
    images_upload_url: '/admin/files/upload',
    images_upload_handler: editorUploadHandler,
    images_reuse_filename: true, // using same file
    relative_urls: false, //donot use relative path
    convert_urls: false, //donot convert path
    table_default_styles: {},
    // table_appearance_options: false,
    table_default_attributes: { width: '100%' },
    table_class_list: [
        { title: 'None', value: '' },
        { title: 'Căn trái', value: 'table-left' },
        { title: 'Căn phải', value: 'table-right' },
        { title: 'Rộng 400', value: 'table-400' },
        { title: 'Rộng 500', value: 'table-500' },
        { title: 'Rộng 600', value: 'table-600' },
        { title: 'Rộng full', value: 'table-full' },
        { title: 'Rộng tuỳ chỉnh', value: 'table-custom' },
        { title: 'Rộng 400 nền xám', value: 'table-400-gray' },
        { title: 'Rộng 500 nền xám', value: 'table-500-gray' },
        { title: 'Rộng 600 nền xám', value: 'table-600-gray' },
        { title: 'Rộng full nền xám', value: 'table-full-gray' },
        { title: 'Rộng tuỳ chỉnh nền xám', value: 'table-custom-gray' },
    ],
    verify_html: false,
    extended_valid_elements: 'pre[*],link[*],script[*]',
    valid_children: '+body[style],+body[link],+body[script],+a[div],*[*]',
    invalid_styles: {
        table: 'height',
        tr: 'width height',
        td: 'height', //width
    },
    inline_styles: true,
    keep_styles: true,
    link_list: [
        {
            title: 'TTQN',
            value: 'https://baoquangninh.com.vn',
        },
    ],
    formats: {
        removeformat: [
            {
                selector: 'h1,h2,h3,h4,h5,b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins',
                remove: 'all',
                split: true,
                block_expand: true,
                expand: false,
                deep: true,
            },
            {
                selector: 'span',
                attributes: ['style', 'class'],
                remove: 'empty',
                split: true,
                expand: false,
                deep: true,
            },
            {
                selector: '*',
                attributes: ['style', 'class'],
                split: false,
                expand: false,
                deep: true,
            },
        ],
    },
    //doese not include br to emtpy tag
    force_br_newlines: false,
    force_p_newlines: true,
    forced_root_block: '',
    importcss_append: true,
    // using custom file browser
    file_picker_callback: editorFilesBrowser,
    // mediaembed_max_width: 450,
    templates: [
        {
            title: 'New Table',
            description: 'creates a new table',
            content:
                '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>',
        },
        {
            title: 'Starting my story',
            description: 'A cure for writers block',
            content: 'Once upon a time...',
        },
        {
            title: 'New list with dates',
            description: 'New List with dates',
            content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>',
        },
    ],
    template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
    template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
    noneditable_noneditable_class: 'mceNonEditable',
    toolbar_mode: 'wrap',
    contextmenu: 'link image imagetools media table',
    skin: useDarkMode ? 'oxide-dark' : 'oxide',
    save_onsavecallback: function () {
        // console.log('saved');
        // tinymce.activeEditor.notificationManager.open({
        //     text: 'Đã lưu',
        //     type: 'info',
        //     timeout: 1000,
        //     closeButton: true
        // });
    },
    paste_preprocess: function (plugin, args) {
        // console.log(args.content, plugin);
        html_copied = args.content;
        //not insert content before cleaned up
        args.content = '';
        //clean up content then insert to editor
        editorCleanUpHtml(tinymce.activeEditor, html_copied, true);
    },
    // content_style: 'html { padding: 15px; } body { font-family:Helvetica,Arial,sans-serif; font-size: 1.2rem; color: #000;} a {color: #044190;}',
    media_dimensions: false,
    // video_template_callback: function(data) {
    //     var w = data.width ==''? '100%' :  data.width;
    //     var h = data.height == ''? 'auto' :  data.height;
    //     var media_box = '<video class="mce-repsonsive-item" width="' + w + '" height="' + h + '"' + (data.poster ? ' poster="' + data.poster + '"' : '') + ' controls="controls">\n' + '<source src="' + data.source + '"' + (data.sourcemime ? ' type="' + data.sourcemime + '"' : '') + ' />\n' + (data.altsource ? '<source src="' + data.altsource + '"' + (data.altsourcemime ? ' type="' + data.altsourcemime + '"' : '') + ' />\n' : '') + '</video>';
    //         media_box = '<span class="mce-repsonsive mce-repsonsive-16by9" contenteditable="false">' + media_box + '</span>';
    //     return media_box;
    // },
    // media_url_resolver: function (data, resolve/*, reject*/) {
    //     console.log(data);
    //     if (data.url.indexOf('youtube') !== -1) {
    //         var embedHtml = '<span class="mce-repsonsive mce-repsonsive-16by9" contenteditable="false"><iframe class="mce-repsonsive-item" src="' + data.url +
    //         '" width="400" height="400" ></iframe></span>';
    //         resolve({html: embedHtml});
    //     } else {
    //         resolve({html: ''});
    //     }
    // },
    audio_template_callback: function (data) {
        return (
            '<audio controls width="' +
            data.width +
            '" height="' +
            data.height +
            '">' +
            '\n<source src="' +
            data.source +
            '"' +
            (data.sourcemime ? ' type="' + data.sourcemime + '"' : '') +
            ' />\n' +
            (data.altsource ? '<source src="' + data.altsource + '"' + (data.altsourcemime ? ' type="' + data.altsourcemime + '"' : '') + ' />\n' : '') +
            '</audio>'
        );
    },
    setup: function (editor) {
        /*
         * Add a custom icon to TinyMCE
         */
        editor.ui.registry.addIcon(
            'p_compare',
            '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2zm0 15H5l5-6v6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>',
        );
        editor.ui.registry.addIcon(
            'p_poll',
            '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>',
        );
        editor.ui.registry.addIcon(
            'p_chart',
            '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"/></svg>',
        );
        editor.ui.registry.addIcon(
            'p_template',
            '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>',
        );
        editor.ui.registry.addIcon(
            'p_relate_news',
            '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"/></svg>',
        );
        editor.ui.registry.addIcon(
            'p_sharelink',
            '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>',
        );
        editor.ui.registry.addIcon(
            'p_remove_all_link',
            '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27z"/><path d="M0 24V0" fill="none"/></svg>',
        );
        editor.ui.registry.addIcon(
            'p_download_image',
            '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/><path d="M12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8S7.59,4,12,4 M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10 c5.52,0,10-4.48,10-10C22,6.48,17.52,2,12,2L12,2z M13,12l0-4h-2l0,4H8l4,4l4-4H13z"/></g></svg>',
        );
        editor.ui.registry.addIcon(
            'p_spellcheck_toggle',
            '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"/></svg>',
        );

        editor.ui.registry.addIcon(
            'p_covid',
            '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M23,8c0,1.1-0.9,2-2,2c-0.18,0-0.35-0.02-0.51-0.07l-3.56,3.55C16.98,13.64,17,13.82,17,14c0,1.1-0.9,2-2,2s-2-0.9-2-2 c0-0.18,0.02-0.36,0.07-0.52l-2.55-2.55C10.36,10.98,10.18,11,10,11s-0.36-0.02-0.52-0.07l-4.55,4.56C4.98,15.65,5,15.82,5,16 c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2c0.18,0,0.35,0.02,0.51,0.07l4.56-4.55C8.02,9.36,8,9.18,8,9c0-1.1,0.9-2,2-2s2,0.9,2,2 c0,0.18-0.02,0.36-0.07,0.52l2.55,2.55C14.64,12.02,14.82,12,15,12s0.36,0.02,0.52,0.07l3.55-3.56C19.02,8.35,19,8.18,19,8 c0-1.1,0.9-2,2-2S23,6.9,23,8z"/></g></g></g></svg>',
        );

        editor.ui.registry.addButton('p_remove_all_link', {
            icon: 'p_remove_all_link',
            tooltip: 'Xoá tất cả các liên kết',
            onAction: function (_) {
                editorRemoveAllLink(editor);
            },
        });
        editor.ui.registry.addButton('p_download_image', {
            icon: 'p_download_image',
            tooltip: 'Tải về tất cả các ảnh',
            onAction: function (_) {
                editorDownloadImage(editor);
            },
        });
        editor.ui.registry.addButton('p_poll', {
            icon: 'p_poll',
            tooltip: 'Bình chọn',
            onAction: function (_) {
                editorLoadPoll(editor);
            },
        });
        editor.ui.registry.addButton('p_chart', {
            icon: 'p_chart',
            tooltip: 'Biểu đồ',
            onAction: function (_) {
                editorLoadChartjs(editor);
            },
        });
        editor.ui.registry.addButton('p_relate_news', {
            icon: 'p_relate_news',
            tooltip: 'Hộp tin liên quan',
            onAction: function (_) {
                editorLoadNews(editor);
            },
        });
        editor.ui.registry.addButton('p_compare', {
            icon: 'p_compare',
            tooltip: 'So sánh 2 ảnh',
            onAction: function (_) {
                editorLoadCompareImages(editor);
            },
        });
        editor.ui.registry.addButton('p_template', {
            icon: 'p_template',
            tooltip: 'Mẫu dựng sẵn',
            onAction: function (_) {
                editorLoadTemplates(editor);
            },
        });
        editor.ui.registry.addButton('p_sharelink', {
            icon: 'p_sharelink',
            tooltip: 'Chia sẻ bài viết',
            onAction: function (_) {
                editorLoadShare(editor);
            },
        });
        editor.ui.registry.addButton('p_files', {
            icon: 'p_sharelink',
            tooltip: 'Chia sẻ bài viết',
            onAction: function (_) {
                editorLoadShare(editor);
            },
        });
        editor.ui.registry.addButton('p_spellcheck_toggle', {
            icon: 'p_spellcheck_toggle',
            tooltip: 'Tắt mở kiểm tra chính tả',
            onAction: function (_) {
                var browser_spellcheck = !tinymce.activeEditor.settings.browser_spellcheck;
                var new_settings = Object.assign(tinymce.activeEditor.settings, { browser_spellcheck: browser_spellcheck });
                tinymce.activeEditor.dom.setAttrib(tinymce.activeEditor.dom.select('[data-id="' + tinymce.activeEditor.id + '"]'), 'spellcheck', browser_spellcheck);

                // Creates a new editor instance
                var ed = new tinymce.Editor(tinymce.activeEditor.id, new_settings, tinymce.EditorManager);
                ed.render();
            },
        });
        editor.ui.registry.addButton('p_covid', {
            icon: 'p_covid',
            tooltip: 'Biểu đồ Covid',
            onAction: function (_) {
                editorLoadCovid(editor);
            },
        });
        editor.settings.content_css = [
            '/assets/js/library/bootstrap/v4/css/bootstrap.min.css?v=' + version,
            '/app/Plugins/NewsRelationship/newsrelationship.css?v=' + version,
            '/app/Plugins/Poll/poll.css?v=' + version,
            '/app/Plugins/CompareImages/compareimagesApp.css?v=' + version,
            '/app/Plugins/ShareLink/sharelink.css?v=' + version,
            '/app/Plugins/CustomTemplates/templates.css?v=' + version,
            theme_path + 'Assets/css/editor.css?v=' + version,
        ];
        editor.settings.importcss_append = true;

        // editor.ui.registry.addMenuItem('insert_keep_format', {
        //     text: 'Chèn nội dung giữ nguyên định dạng',
        //     onAction: function() {
        //         alert('Menu item clicked');
        //     }
        // });
        editor.on('init', function (e) {});
    },
    init_instance_callback: function (editor) {
        // console.log('Editor: ' + editor.id + ' is now initialized.');
        // console.log('Editor: ' , tinyMCE.activeEditor.ui.registry.getAll().menuItems);

        if (typeof loadChartJs === 'function') {
            loadChartJs(this, editor);
        }
        if (typeof loadEventTemplates === 'function') {
            loadEventTemplates(this, editor);
        }
        if (typeof loadNewsrelation === 'function') {
            loadNewsrelation(this, editor);
        }
        if (typeof loadEventPoll === 'function') {
            loadEventPoll(this, editor);
        }
        if (typeof loadCovidJs === 'function') {
            loadCovidJs(this, editor);
        }

        //auto clear all link
        editor.on('paste', function (e) {
            e.preventDefault();
            return false;
        });

        //double click to edit image
        editor.on('dblclick', function (e) {
            if (e.target.nodeName == 'IMG') {
                tinyMCE.activeEditor.execCommand('mceImage');
            }
        });
    },
});

// var dfreeConfig = {
//     selector: '#editor_inline',
//     menubar: false,
//     inline: true,
//     plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
//     imagetools_cors_hosts: ['webdev.local', 'ttqndev.mediatech.vn', 'media.baoquangninh.com.vn'],
//     imagetools_proxy: '/test-edit-image',
//     toolbar: false,
//     quickbars_insert_toolbar: 'quicktable image media',
//     quickbars_selection_toolbar: 'bold italic underline | formatselect | blockquote quicklink',
//     contextmenu: 'link image imagetools table | undo redo | inserttable | cell row column deletetable | help',
//     powerpaste_word_import: 'clean',
//     powerpaste_html_import: 'clean',
// };
// tinymce.init(dfreeConfig);

//  Using Premium plugins + custom plugins
// tinymce.init({
//   selector: '#editor_premium_and_custom',
//   plugins: 'advlist autolink lists link media image charmap print preview hr anchor pagebreak',
//   toolbar_mode: 'floating',
//   external_plugins: {
//     'media': 'http://ttqndev.mediatech.vn/demo/tinymce/dev/tinymce/plugins/media/plugin.js'
//   }
// });
