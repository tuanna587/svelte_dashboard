let domElement = function (selector) {
  this.selector = selector || null;
  this.element = null;
};
domElement.prototype.stringToHTML = function (str) {
  var doc = new DOMParser().parseFromString(str, 'text/html');
  return doc.body;
};
domElement.prototype.wrap = function (selector, append_html) {
  // jQuery
  // $('.inner').wrap('<div class="wrapper"></div>');

  // Native
  Array.from(document.querySelectorAll(selector)).forEach((el) => {
    // const wrapper = document.createElement('div');
    // wrapper.className = 'wrapper';
    // el.parentNode.insertBefore(wrapper, el);
    // wrapper.appendChild(el);
    var doc = new DOMParser().parseFromString(append_html, 'text/html');
    let wrapper = doc.body;
    wrapper.appendChild(el);
  });
};
let $ = function (selector) {
  var el = new domElement(selector);
  el.init();
  return el;
};

export { $ };
