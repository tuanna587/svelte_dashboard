/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.5.1 (2020-10-01)
 */
// Create plugin iframe
tinymce.PluginManager.add('embediframe', function(editor, url) {
    String.prototype.titleCase = function() {
        //  return this.toLowerCase().replace(/(^|\s)([a-z])/g, function(m, p1, p2)
        return this.toLowerCase().replace(/(^|[^a-z])([a-z])/g, function(m, p1, p2) {
            return p1 + p2.toUpperCase();
        });
    }
    // Add icon
    editor.ui.registry.addIcon('embediframe', '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"/></svg>');
    // Add a button that opens a window
    editor.ui.registry.addMenuButton('embediframe', {
        tooltip: 'Mã nhúng Iframe',
        icon: 'embediframe',
    });
    editor.ui.registry.addButton('embediframe', {
        icon: 'embediframe',
        tooltip: 'Mã nhúng Iframe',
        disabled: true,
        onAction: function(_) {
            editor.insertContent(toTimeHtml(new Date()));
        },
        onSetup: function(buttonApi) {
            var editorEventCallback = function(eventApi) {
                buttonApi.setDisabled(eventApi.element.nodeName.toLowerCase() === 'time');
            };
            editor.on('NodeChange', editorEventCallback);
            /* onSetup should always return the unbind handlers */
            return function(buttonApi) {
                editor.off('NodeChange', editorEventCallback);
            };
        }
    });
},
return {
    // getMetadata: function() {
    //     return {
    //         name: "Example plugin",
    //         url: "http://exampleplugindocsurl.com"
    //     };
    // }
};
});