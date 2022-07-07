/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.5.1 (2020-10-01)
 */
// Create plugin titlecase
tinymce.PluginManager.add('titlecase', function(editor, url) {
    // Add icon
    editor.ui.registry.addIcon('titlecase', '<svg width="24" height="24"><path d="M18.4 18.2v-.6c-.5.8-1.3 1.2-2.4 1.2-2.2 0-3.3-1.6-3.3-4.8 0-3.1 1-4.7 3.3-4.7 1.1 0 1.8.3 2.4 1.1v-.6c0-.5.4-.8.8-.8s.8.3.8.8v8.4c0 .5-.4.8-.8.8a.8.8 0 01-.8-.8zm-2-7.4c-1.3 0-1.8.9-1.8 3.2 0 2.4.5 3.3 1.7 3.3 1.3 0 1.8-.9 1.8-3.2 0-2.4-.5-3.3-1.7-3.3zM10 15.7H5.5l-.8 2.6a1 1 0 01-1 .7h-.2a.7.7 0 01-.7-1l4-12a1 1 0 012 0l4 12a.7.7 0 01-.8 1h-.2a1 1 0 01-1-.7l-.8-2.6zm-.3-1.5l-2-6.5-1.9 6.5h3.9z" fill-rule="evenodd"></path></svg>');
    // Add a button that opens a window
    editor.ui.registry.addMenuButton('titlecase', {
        tooltip: 'Chuyển chữ hoa chữ thường',
        icon: 'titlecase',
        fetch: function(callback) {
            var items = [{
                type: 'menuitem',
                text: 'lovercase',
                onAction: function() {
                    var sel = editor.dom.decode(editor.selection.getContent());
                    sel = sel.toLowerCase();
                    editor.selection.setContent(sel);
                    editor.save();
                    editor.isNotDirty = true;
                }
            }, {
                type: 'menuitem',
                text: 'UPPERCASE',
                onAction: function() {
                    var sel = editor.dom.decode(editor.selection.getContent());
                    sel = sel.toUpperCase();
                    editor.selection.setContent(sel);
                    editor.save();
                    editor.isNotDirty = true;
                }
            }, {
                type: 'menuitem',
                text: 'Title Case',
                onAction: function() {
                    var sel = editor.dom.decode(editor.selection.getContent());
                    sel = sel.titleCase();
                    editor.selection.setContent(sel);
                    editor.save();
                    editor.isNotDirty = true;
                }
            }, ];
            callback(items);
        }
    });
    // Adds a menu item to the tools menu
    // editor.addMenuItem('example', {
    //     text: 'Example plugin',
    //     context: 'tools',
    //     onclick: function() {
    //         // Open window with a specific url
    //         editor.windowManager.open({
    //             title: 'TinyMCE site',
    //             url: 'https://www.tinymce.com',
    //             width: 800,
    //             height: 600,
    //             buttons: [{
    //                 text: 'Close',
    //                 onclick: 'close'
    //             }]
    //         });
    //     }
    // });
    return {
        // getMetadata: function() {
        //     return {
        //         name: "Example plugin",
        //         url: "http://exampleplugindocsurl.com"
        //     };
        // }
    };
});