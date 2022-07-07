<script>
  import { location } from 'svelte-spa-router';
  import Breadcrumb from '@/components/Breadcrumb.svelte';
  import CardTable from '@/components/Cards/CardTable.svelte';
  import Editor from '@tinymce/tinymce-svelte';
  import { editorCleanUpHtml } from "@/libs/editor.custom";
  export let title;
  let breadcrumbs = [
    {
      title: title,
      link: $location,
    },
  ];
  let plugins =
    'insertkeepformat spellchecker titlecase print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons code '; //logomask
  let toolbar =
    'insertkeepformat undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | save print | insertfile image media link anchor | ';
  let tinymceConf = {
    language: 'vi',
    inline: false,
    hidden_input: true,
    height: 450,
    mobile: {
        menubar: false,
        // theme: 'mobile',
        // toolbar_mode: 'scrolling',
        // toolbar: toolbar,
        // plugins: plugins,
    },
    language_url: 'vendor/tinymce/langs/vi.js',
    plugins: plugins,
    browser_spellcheck: false,
    spellchecker_rpc_url: '',
    //using for dev
    external_plugins: {
        // image: 'vendor/tinymce/plugins/image/plugin.js?v=' + version,
        // imagetools: 'vendor/tinymce/plugins/imagetools/plugin.js?v=' + version,
        // media: 'vendor/tinymce/plugins/media/plugin.js?v=' + version,
    },
    imagetools_cors_hosts: ['webdev.local', 'ttqndev.mediatech.vn', '*.baoquangninh.com.vn', 'media.baoquangninh.com.vn'],
    imagetools_proxy: '/admin/files/store',
    menu: {
        edit: {
            title: 'Edit',
            items: 'undo redo | cut copy paste insertkeepformat | selectall | searchreplace',
        },
    },
    menubar: 'file edit view insert custom format tools table help',
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
    // images_upload_handler: editorUploadHandler,
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
    link_list: [],
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
    // file_picker_callback: editorFilesBrowser,
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
    skin: 'oxide',
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
        let html_copied = args.content;
        //not insert content before cleaned up
        args.content = '';
        //clean up content then insert to editor
        editorCleanUpHtml(window.tinymce.activeEditor, html_copied, true);
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
    }

  }
  let info = 'Hekkio';
</script>

<Breadcrumb {breadcrumbs} />
<div class="px-4 md:px-8 mx-auto w-full mt-[-7rem]">
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <CardTable />
    </div>
  </div>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <Editor 
      id="info_editor"
      scriptSrc="vendor/tinymce/tinymce.min.js" 
      conf={tinymceConf}
      modelEvents="input change undo redo"
      bind:value="{info}"
      />
    </div>
    <div class="w-full mb-12 px-4">{@html info}</div>
  </div>
</div>
