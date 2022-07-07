tinymce.PluginManager.add('logomask', function(editor, url) {
  var openDialog = function () {
    return editor.windowManager.open({
      title: 'Example plugin',
      body: {
        type: 'panel',
        items: [
          {
            type: 'input',
            name: 'title',
            label: 'Title'
          }
        ]
      },
      buttons: [
        {
          type: 'cancel',
          text: 'Close'
        },
        {
          type: 'submit',
          text: 'Save',
          primary: true
        }
      ],
      onSubmit: function (api) {
        var data = api.getData();
        // Insert content when the window form is submitted
        editor.insertContent('Title: ' + data.title);
        api.close();
      }
    });
  };

  editor.ui.registry.addIcon('logomask', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/></svg>');
  // Add a button that opens a window
  editor.ui.registry.addButton('example', {
    text: 'My button',
    icon: 'logomask',
    onAction: function () {
      // Open window
      openDialog();
    }
  });

  // Adds a menu item, which can then be included in any menu via the menu/menubar configuration
  editor.ui.registry.addMenuItem('example', {
    text: 'Example plugin',
    onAction: function() {
      // Open window
      openDialog();
    }
  });

  return {
    getMetadata: function () {
      return  {
        name: 'Example plugin',
        url: 'http://exampleplugindocsurl.com'
      };
    }
  };
});

// <div class="fr-line-breaker fr-visible" style="top: 235.543px; left: 474.167px; width: 844px;"><a class="fr-floating-btn fr-selected" role="button" tabindex="-1" title="Break"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="17" y="7" width="2" height="8"></rect><rect x="10" y="13" width="7" height="2"></rect><path d="M10.000,10.000 L10.000,18.013 L5.000,14.031 L10.000,10.000 Z"></path></svg></a></div>