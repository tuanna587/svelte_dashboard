/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.5.1 (2020-10-01)
 */
(function () {
    'use strict';

    var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

    var __assign = function () {
        __assign =
            Object.assign ||
            function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
        return __assign.apply(this, arguments);
    };

    var typeOf = function (x) {
        var t = typeof x;
        if (x === null) {
            return 'null';
        } else if (t === 'object' && (Array.prototype.isPrototypeOf(x) || (x.constructor && x.constructor.name === 'Array'))) {
            return 'array';
        } else if (t === 'object' && (String.prototype.isPrototypeOf(x) || (x.constructor && x.constructor.name === 'String'))) {
            return 'string';
        } else {
            return t;
        }
    };
    var isType = function (type) {
        return function (value) {
            return typeOf(value) === type;
        };
    };
    var isSimpleType = function (type) {
        return function (value) {
            return typeof value === type;
        };
    };
    var eq = function (t) {
        return function (a) {
            return t === a;
        };
    };
    var isString = isType('string');
    var isObject = isType('object');
    var isArray = isType('array');
    var isNull = eq(null);
    var isBoolean = isSimpleType('boolean');
    var isNumber = isSimpleType('number');

    var noop = function () {};
    var constant = function (value) {
        return function () {
            return value;
        };
    };
    var never = constant(false);
    var always = constant(true);

    var none = function () {
        return NONE;
    };
    var NONE = (function () {
        var eq = function (o) {
            return o.isNone();
        };
        var call = function (thunk) {
            return thunk();
        };
        var id = function (n) {
            return n;
        };
        var me = {
            fold: function (n, _s) {
                return n();
            },
            is: never,
            isSome: never,
            isNone: always,
            getOr: id,
            getOrThunk: call,
            getOrDie: function (msg) {
                throw new Error(msg || 'error: getOrDie called on none.');
            },
            getOrNull: constant(null),
            getOrUndefined: constant(undefined),
            or: id,
            orThunk: call,
            map: none,
            each: noop,
            bind: none,
            exists: never,
            forall: always,
            filter: none,
            equals: eq,
            equals_: eq,
            toArray: function () {
                return [];
            },
            toString: constant('none()'),
        };
        return me;
    })();
    var some = function (a) {
        var constant_a = constant(a);
        var self = function () {
            return me;
        };
        var bind = function (f) {
            return f(a);
        };
        var me = {
            fold: function (n, s) {
                return s(a);
            },
            is: function (v) {
                return a === v;
            },
            isSome: always,
            isNone: never,
            getOr: constant_a,
            getOrThunk: constant_a,
            getOrDie: constant_a,
            getOrNull: constant_a,
            getOrUndefined: constant_a,
            or: self,
            orThunk: self,
            map: function (f) {
                return some(f(a));
            },
            each: function (f) {
                f(a);
            },
            bind: bind,
            exists: bind,
            forall: bind,
            filter: function (f) {
                return f(a) ? me : NONE;
            },
            toArray: function () {
                return [a];
            },
            toString: function () {
                return 'some(' + a + ')';
            },
            equals: function (o) {
                return o.is(a);
            },
            equals_: function (o, elementEq) {
                return o.fold(never, function (b) {
                    return elementEq(a, b);
                });
            },
        };
        return me;
    };
    var from = function (value) {
        return value === null || value === undefined ? NONE : some(value);
    };
    var Optional = {
        some: some,
        none: none,
        from: from,
    };

    var nativePush = Array.prototype.push;
    var flatten = function (xs) {
        var r = [];
        for (var i = 0, len = xs.length; i < len; ++i) {
            if (!isArray(xs[i])) {
                throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
            }
            nativePush.apply(r, xs[i]);
        }
        return r;
    };
    var head = function (xs) {
        return xs.length === 0 ? Optional.none() : Optional.some(xs[0]);
    };
    var findMap = function (arr, f) {
        for (var i = 0; i < arr.length; i++) {
            var r = f(arr[i], i);
            if (r.isSome()) {
                return r;
            }
        }
        return Optional.none();
    };

    var Global = typeof window !== 'undefined' ? window : Function('return this;')();

    var rawSet = function (dom, key, value) {
        if (isString(value) || isBoolean(value) || isNumber(value)) {
            dom.setAttribute(key, value + '');
        } else {
            //console.error('Invalid call to Attribute.set. Key ', key, ':: Value ', value, ':: Element ', dom);
            throw new Error('Attribute value was not simple');
        }
    };
    var set = function (element, key, value) {
        rawSet(element.dom, key, value);
    };
    var remove = function (element, key) {
        element.dom.removeAttribute(key);
    };

    var fromHtml = function (html, scope) {
        var doc = scope || document;
        var div = doc.createElement('div');
        div.innerHTML = html;
        if (!div.hasChildNodes() || div.childNodes.length > 1) {
            //console.error('HTML does not have a single root node', html);
            throw new Error('HTML must have a single root node');
        }
        return fromDom(div.childNodes[0]);
    };
    var fromTag = function (tag, scope) {
        var doc = scope || document;
        var node = doc.createElement(tag);
        return fromDom(node);
    };
    var fromText = function (text, scope) {
        var doc = scope || document;
        var node = doc.createTextNode(text);
        return fromDom(node);
    };
    var fromDom = function (node) {
        if (node === null || node === undefined) {
            throw new Error('Node cannot be null or undefined');
        }
        return { dom: node };
    };
    var fromPoint = function (docElm, x, y) {
        return Optional.from(docElm.dom.elementFromPoint(x, y)).map(fromDom);
    };
    var SugarElement = {
        fromHtml: fromHtml,
        fromTag: fromTag,
        fromText: fromText,
        fromDom: fromDom,
        fromPoint: fromPoint,
    };

    var global$1 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

    var global$2 = tinymce.util.Tools.resolve('tinymce.util.Promise');

    var global$3 = tinymce.util.Tools.resolve('tinymce.util.XHR');

    var hasDimensions = function (editor) {
        return editor.getParam('image_dimensions', true, 'boolean');
    };
    var hasAdvTab = function (editor) {
        return editor.getParam('image_advtab', false, 'boolean');
    };
    var hasUploadTab = function (editor) {
        return editor.getParam('image_uploadtab', true, 'boolean');
    };
    var getPrependUrl = function (editor) {
        return editor.getParam('image_prepend_url', '', 'string');
    };
    var getClassList = function (editor) {
        return editor.getParam('image_class_list');
    };
    var getClassListDefault = function (editor) {
        return editor.getParam('image_class_list_default');
    };
    var hasDescription = function (editor) {
        return editor.getParam('image_description', true, 'boolean');
    };
    var hasImageTitle = function (editor) {
        return editor.getParam('image_title', false, 'boolean');
    };
    var hasImageCaption = function (editor) {
        return editor.getParam('image_caption', false, 'boolean');
    };
    var hasImageAllowAds = function (editor) {
        return editor.getParam('image_allow_ads', false, 'boolean');
    };
    var getImageList = function (editor) {
        return editor.getParam('image_list', false);
    };
    var hasUploadUrl = function (editor) {
        return !!getUploadUrl(editor);
    };
    var hasUploadHandler = function (editor) {
        return !!getUploadHandler(editor);
    };
    var getUploadUrl = function (editor) {
        return editor.getParam('images_upload_url', '', 'string');
    };
    var getUploadHandler = function (editor) {
        return editor.getParam('images_upload_handler', undefined, 'function');
    };
    var getUploadBasePath = function (editor) {
        return editor.getParam('images_upload_base_path', undefined, 'string');
    };
    var getUploadCredentials = function (editor) {
        return editor.getParam('images_upload_credentials', false, 'boolean');
    };
    var showAccessibilityOptions = function (editor) {
        return editor.getParam('a11y_advanced_options', false, 'boolean');
    };
    var isAutomaticUploadsEnabled = function (editor) {
        return editor.getParam('automatic_uploads', true, 'boolean');
    };

    var parseIntAndGetMax = function (val1, val2) {
        return Math.max(parseInt(val1, 10), parseInt(val2, 10));
    };
    var getImageSize = function (url) {
        return new global$2(function (callback) {
            var img = document.createElement('img');
            var done = function (dimensions) {
                if (img.parentNode) {
                    img.parentNode.removeChild(img);
                }
                callback(dimensions);
            };
            img.onload = function () {
                var width = parseIntAndGetMax(img.width, img.clientWidth);
                var height = parseIntAndGetMax(img.height, img.clientHeight);
                var dimensions = {
                    width: width,
                    height: height,
                };
                done(global$2.resolve(dimensions));
            };
            img.onerror = function () {
                done(global$2.reject('Failed to get image dimensions for: ' + url));
            };
            var style = img.style;
            style.visibility = 'hidden';
            style.position = 'fixed';
            style.bottom = style.left = '0px';
            style.width = style.height = 'auto';
            document.body.appendChild(img);
            img.src = url;
        });
    };
    var removePixelSuffix = function (value) {
        if (value) {
            value = value.replace(/px$/, '');
        }
        return value;
    };
    var addPixelSuffix = function (value) {
        if (value.length > 0 && /^[0-9]+$/.test(value)) {
            value += 'px';
        }
        return value;
    };
    var mergeMargins = function (css) {
        if (css.margin) {
            var splitMargin = String(css.margin).split(' ');
            switch (splitMargin.length) {
                case 1:
                    css['margin-top'] = css['margin-top'] || splitMargin[0];
                    css['margin-right'] = css['margin-right'] || splitMargin[0];
                    css['margin-bottom'] = css['margin-bottom'] || splitMargin[0];
                    css['margin-left'] = css['margin-left'] || splitMargin[0];
                    break;
                case 2:
                    css['margin-top'] = css['margin-top'] || splitMargin[0];
                    css['margin-right'] = css['margin-right'] || splitMargin[1];
                    css['margin-bottom'] = css['margin-bottom'] || splitMargin[0];
                    css['margin-left'] = css['margin-left'] || splitMargin[1];
                    break;
                case 3:
                    css['margin-top'] = css['margin-top'] || splitMargin[0];
                    css['margin-right'] = css['margin-right'] || splitMargin[1];
                    css['margin-bottom'] = css['margin-bottom'] || splitMargin[2];
                    css['margin-left'] = css['margin-left'] || splitMargin[1];
                    break;
                case 4:
                    css['margin-top'] = css['margin-top'] || splitMargin[0];
                    css['margin-right'] = css['margin-right'] || splitMargin[1];
                    css['margin-bottom'] = css['margin-bottom'] || splitMargin[2];
                    css['margin-left'] = css['margin-left'] || splitMargin[3];
            }
            delete css.margin;
        }
        return css;
    };
    var getClassData = function (key) {
        var all_size = {
            'image-400': { width: '400', height: '', align: 'align-center', style: 'display: block; margin-left: auto; margin-right: auto;' },
            'image-500': { width: '500', height: '', align: 'align-center', style: 'display: block; margin-left: auto; margin-right: auto;' },
            'image-600': { width: '600', height: '', align: 'align-center', style: 'display: block; margin-left: auto; margin-right: auto;' },
            'image-full': { width: '', height: '', align: 'align-center', style: 'display: block; margin-left: auto; margin-right: auto;' },
            'image-400-gray': { width: '400', height: '', align: 'align-center', style: 'display: block; margin-left: auto; margin-right: auto;' },
            'image-500-gray': { width: '500', height: '', align: 'align-center', style: 'display: block; margin-left: auto; margin-right: auto;' },
            'image-600-gray': { width: '600', height: '', align: 'align-center', style: 'display: block; margin-left: auto; margin-right: auto;' },
            'image-full-gray': { width: '', height: '', align: 'align-center', style: 'display: block; margin-left: auto; margin-right: auto;' },
            'image-custom-gray': { width: '', height: '', align: 'align-center', style: 'display: block; margin-left: auto; margin-right: auto;' },
        };
        return key != undefined ? all_size[key] : all_size;
    };
    var createImageList = function (editor, callback) {
        var imageList = getImageList(editor);
        if (typeof imageList === 'string') {
            global$3.send({
                url: imageList,
                success: function (text) {
                    callback(JSON.parse(text));
                },
            });
        } else if (typeof imageList === 'function') {
            imageList(callback);
        } else {
            callback(imageList);
        }
    };
    var waitLoadImage = function (editor, data, imgElm) {
        var selectImage = function () {
            imgElm.onload = imgElm.onerror = null;
            if (editor.selection) {
                editor.selection.select(imgElm);
                editor.nodeChanged();
            }
        };
        imgElm.onload = function () {
            if (!data.width && !data.height && hasDimensions(editor)) {
                // console.log('imgElm onload set dismension');
                editor.dom.setAttribs(imgElm, {
                    width: String(imgElm.clientWidth),
                    height: String(imgElm.clientHeight),
                });
            }
            selectImage();
        };
        imgElm.onerror = selectImage;
    };
    var resetImageDismension = function (editor, data, imgElm) {
        var selectImage = function () {
            imgElm.onload = imgElm.onerror = null;
            if (editor.selection) {
                editor.selection.select(imgElm);
                editor.nodeChanged();
            }
        };
        imgElm.onload = function () {
            editor.dom.setAttribs(imgElm, {
                width: String(imgElm.clientWidth),
                height: String(imgElm.clientHeight),
            });
            selectImage();
        };
        imgElm.onerror = selectImage;
    };

    var blobToDataUri = function (blob) {
        return new global$2(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function () {
                resolve(reader.result);
            };
            reader.onerror = function () {
                reject(reader.error.message);
            };
            reader.readAsDataURL(blob);
        });
    };
    var isPlaceholderImage = function (imgElm) {
        return imgElm.nodeName === 'IMG' && (imgElm.hasAttribute('data-mce-object') || imgElm.hasAttribute('data-mce-placeholder'));
    };

    var DOM = global$1.DOM;
    var getHspace = function (image) {
        if (image.style.marginLeft && image.style.marginRight && image.style.marginLeft === image.style.marginRight) {
            return removePixelSuffix(image.style.marginLeft);
        } else {
            return '';
        }
    };
    var getVspace = function (image) {
        if (image.style.marginTop && image.style.marginBottom && image.style.marginTop === image.style.marginBottom) {
            return removePixelSuffix(image.style.marginTop);
        } else {
            return '';
        }
    };
    var getBorder = function (image) {
        if (image.style.borderWidth) {
            return removePixelSuffix(image.style.borderWidth);
        } else {
            return '';
        }
    };
    var getAttrib = function (image, name) {
        if (image.hasAttribute(name)) {
            return image.getAttribute(name);
        } else {
            return '';
        }
    };
    var getStyle = function (image, name) {
        return image.style[name] ? image.style[name] : '';
    };
    var hasCaption = function (image) {
        return image.parentNode !== null && image.parentNode.nodeName === 'FIGURE';
    };
    var updateAttrib = function (image, name, value) {
        if (value === '') {
            image.removeAttribute(name);
        } else {
            image.setAttribute(name, value);
        }
    };
    var wrapInFigure = function (image, classes) {
        var main_class = classes != undefined ? 'image'.concat(' ', classes) : 'image';
        // console.log('wrapInFigure main_class=',main_class);

        var figureElm = DOM.create('figure', { class: main_class });
        DOM.insertAfter(figureElm, image);
        figureElm.appendChild(image);
        figureElm.appendChild(DOM.create('figcaption', { contentEditable: 'true' }, 'Caption'));
        figureElm.contentEditable = 'false';
        figureElm.setAttribute('copyright', window.location.host);
    };
    var removeFigure = function (image) {
        var figureElm = image.parentNode;
        DOM.insertAfter(image, figureElm);
        DOM.remove(figureElm);
    };
    var toggleCaption = function (image, classes) {
        // console.log('toggleCaption');
        if (hasCaption(image)) {
            removeFigure(image);
        } else {
            wrapInFigure(image, classes);
        }
    };
    var normalizeStyle = function (image, normalizeCss) {
        var attrValue = image.getAttribute('style');
        var value = normalizeCss(attrValue !== null ? attrValue : '');
        if (value.length > 0) {
            image.setAttribute('style', value);
            image.setAttribute('data-mce-style', value);
        } else {
            image.removeAttribute('style');
        }
    };
    var setSize = function (name, normalizeCss) {
        return function (image, name, value) {
            if (image.style[name]) {
                image.style[name] = addPixelSuffix(value);
                normalizeStyle(image, normalizeCss);
            } else {
                updateAttrib(image, name, value);
            }
        };
    };
    var getSize = function (image, name) {
        if (image.style[name]) {
            return removePixelSuffix(image.style[name]);
        } else {
            return getAttrib(image, name);
        }
    };
    var setHspace = function (image, value) {
        var pxValue = addPixelSuffix(value);
        image.style.marginLeft = pxValue;
        image.style.marginRight = pxValue;
    };
    var setVspace = function (image, value) {
        var pxValue = addPixelSuffix(value);
        image.style.marginTop = pxValue;
        image.style.marginBottom = pxValue;
    };
    var setBorder = function (image, value) {
        var pxValue = addPixelSuffix(value);
        image.style.borderWidth = pxValue;
    };
    var setBorderStyle = function (image, value) {
        image.style.borderStyle = value;
    };
    var getBorderStyle = function (image) {
        return getStyle(image, 'borderStyle');
    };
    var isFigure = function (elm) {
        return elm.nodeName === 'FIGURE';
    };
    var isImage = function (elm) {
        return elm.nodeName === 'IMG';
    };
    var getIsDecorative = function (image) {
        return DOM.getAttrib(image, 'alt').length === 0 && DOM.getAttrib(image, 'role') === 'presentation';
    };
    var getIsAllowAds = function (image) {
        return DOM.getAttrib(image, 'data-allow-ads').length === 0 ? false : true;
    };
    var getAlt = function (image) {
        if (getIsDecorative(image)) {
            return '';
        } else {
            return getAttrib(image, 'alt');
        }
    };
    var getCaptionText = function (image) {
        var figureElm = DOM.getParent(image, 'figure.image');
        var figcaption = figureElm != null ? figureElm.getElementsByTagName('figcaption') : null;
        var caption_text = figcaption != null && figcaption.length ? figcaption[0].textContent : '';
        return caption_text;
        // console.log('getCaptionText --> ', caption_text)
        // return DOM.getAttrib(image, 'data-caption').length === 0 ? '' : getAttrib(image, 'data-caption');
    };
    var defaultData = function () {
        return {
            src: '',
            alt: '',
            title: '',
            width: '',
            height: '',
            class: '',
            style: '',
            caption: true,
            caption_text: '',
            allow_ads: true,
            hspace: '',
            vspace: '',
            border: '',
            borderStyle: '',
            isDecorative: false,
            class_list_default: 'image-full-gray',
        };
    };
    var getStyleValue = function (normalizeCss, data) {
        var image = document.createElement('img');
        updateAttrib(image, 'style', data.style);
        if (getHspace(image) || data.hspace !== '') {
            setHspace(image, data.hspace);
        }
        if (getVspace(image) || data.vspace !== '') {
            setVspace(image, data.vspace);
        }
        if (getBorder(image) || data.border !== '') {
            setBorder(image, data.border);
        }
        if (getBorderStyle(image) || data.borderStyle !== '') {
            setBorderStyle(image, data.borderStyle);
        }
        return normalizeCss(image.getAttribute('style'));
    };
    var getFigureClass = function (data) {
        var figure_classes = 'align-none';
        var data_class = data.class == '' || data.class == undefined ? data.class_list_default : data.class;
        // console.log('data_class',data_class);
        if (data_class != undefined && data_class != '') {
            var cd = getClassData(data_class);
            if (typeof cd === 'object') {
                figure_classes = cd.align + ' ' + data_class;
            } else {
                figure_classes = data.class;
            }
        }
        figure_classes = figure_classes.trim();
        figure_classes = figure_classes.replace(/\s{2,}/g, ' ');
        // console.log('figure_classes',figure_classes, 'data.class', data.class);
        return figure_classes;
    };
    var create = function (normalizeCss, data) {
        var image = document.createElement('img');
        // Update style by class in classlist
        var cd = getClassData(data.class);
        if (typeof cd === 'object') {
            data.style = cd.style;
        }
        // Write data to image
        write(normalizeCss, __assign(__assign({}, data), { caption: false }), image);
        setAlt(image, data.alt, data.isDecorative);
        if (data.caption) {
            var figure = DOM.create('figure', { class: 'image' });
            var caption_text = data.caption_text == '' ? '' : data.caption_text;
            // console.log('create image-->', normalizeCss, data);
            figure.appendChild(image);
            figure.appendChild(DOM.create('figcaption', { contentEditable: 'true' }, caption_text));
            figure.contentEditable = 'false';
            figure.setAttribute('copyright', window.location.host);
            return figure;
        } else {
            return image;
        }
    };
    var read = function (normalizeCss, image) {
        // console.log('getIsAllowAds-->',getIsAllowAds(image))
        return {
            src: getAttrib(image, 'src'),
            alt: getAlt(image),
            title: getAttrib(image, 'title'),
            width: getSize(image, 'width'),
            height: getSize(image, 'height'),
            class: getAttrib(image, 'class'),
            style: normalizeCss(getAttrib(image, 'style')),
            caption: hasCaption(image),
            allow_ads: getIsAllowAds(image),
            caption_text: getCaptionText(image),
            hspace: getHspace(image),
            vspace: getVspace(image),
            border: getBorder(image),
            borderStyle: getStyle(image, 'borderStyle'),
            isDecorative: getIsDecorative(image),
        };
    };
    var updateProp = function (image, oldData, newData, name, set) {
        // console.log('updateProp',image, oldData, newData, name, set);
        if (newData[name] !== oldData[name]) {
            set(image, name, newData[name]);
        }
    };
    var updateFigCaption = function (figure, caption_text) {
        if (!isNull(caption_text)) {
            var child = figure.firstChild;
            while (child) {
                if (child.nodeName.toLowerCase() == 'figcaption') {
                    child.innerHTML = caption_text;
                }
                child = child.nextSibling;
            }
        }
    };
    var updateFigureClass = function (figure, figure_class, editor) {
        if (!isNull(figure_class)) {
            // console.log('getClassListDefault',getClassListDefault(editor));
            var current_class = DOM.getAttrib(figure, 'class');
            var class_list = getClassList(editor);
            if (class_list.length) {
                class_list.map(function (item) {
                    if (current_class.includes(item.value)) {
                        DOM.removeClass(figure, item.value);
                    }
                });
            }
            DOM.addClass(figure, figure_class);
        }
    };
    var setAlt = function (image, alt, isDecorative) {
        if (isDecorative) {
            DOM.setAttrib(image, 'role', 'presentation');
            var sugarImage = SugarElement.fromDom(image);
            set(sugarImage, 'alt', '');
        } else {
            if (isNull(alt)) {
                var sugarImage = SugarElement.fromDom(image);
                remove(sugarImage, 'alt');
            } else {
                var sugarImage = SugarElement.fromDom(image);
                set(sugarImage, 'alt', alt);
            }
            if (DOM.getAttrib(image, 'role') === 'presentation') {
                DOM.setAttrib(image, 'role', '');
            }
        }
    };
    var setCaptionText = function (image, caption_text, caption) {
        if (isNull(caption_text)) {
            DOM.setAttrib(image, 'data-caption', '');
        } else {
            DOM.setAttrib(image, 'data-caption', caption_text);
        }
    };
    var updateAllowAdsAttrib = function (image, oldData, newData) {
        if (newData.allow_ads) {
            DOM.setAttrib(image, 'data-allow-ads', 'true');
        } else {
            DOM.setAttrib(image, 'data-allow-ads', '');
        }
    };
    var updateAlt = function (image, oldData, newData) {
        if (newData.alt !== oldData.alt || newData.isDecorative !== oldData.isDecorative) {
            setAlt(image, newData.alt, newData.isDecorative);
        }
    };
    var updateCaptionText = function (image, oldData, newData) {
        //console.log('updateCaptionText ',oldData, newData);
        if (newData.caption_text !== oldData.caption_text) {
            // setCaptionText(image, newData.caption_text, newData.caption);
        }
    };
    var normalized = function (set, normalizeCss) {
        return function (image, name, value) {
            set(image, value);
            normalizeStyle(image, normalizeCss);
        };
    };
    var write = function (normalizeCss, newData, image) {
        var oldData = read(normalizeCss, image);
        // console.log('write --->', newData);

        updateProp(image, oldData, newData, 'caption', function (image, _name, _value) {
            // console.log('toggleCaption figure_class=',newData.figure_classes);
            toggleCaption(image, newData.figure_classes);
        });
        updateProp(image, oldData, newData, 'src', updateAttrib);
        updateProp(image, oldData, newData, 'title', updateAttrib);
        updateProp(image, oldData, newData, 'width', setSize('width', normalizeCss));
        updateProp(image, oldData, newData, 'height', setSize('height', normalizeCss));
        updateProp(
            image,
            oldData,
            newData,
            'class',
            normalized(function (image, value) {
                return updateAttrib(image, 'class', value);
            }, normalizeCss),
        );
        updateProp(
            image,
            oldData,
            newData,
            'style',
            normalized(function (image, value) {
                return updateAttrib(image, 'style', value);
            }, normalizeCss),
        );
        updateProp(image, oldData, newData, 'hspace', normalized(setHspace, normalizeCss));
        updateProp(image, oldData, newData, 'vspace', normalized(setVspace, normalizeCss));
        updateProp(image, oldData, newData, 'border', normalized(setBorder, normalizeCss));
        updateProp(image, oldData, newData, 'borderStyle', normalized(setBorderStyle, normalizeCss));
        updateAlt(image, oldData, newData);
        updateCaptionText(image, oldData, newData);
        updateAllowAdsAttrib(image, oldData, newData);
    };

    var normalizeCss = function (editor, cssText) {
        var css = editor.dom.styles.parse(cssText);
        var mergedCss = mergeMargins(css);
        var compressed = editor.dom.styles.parse(editor.dom.styles.serialize(mergedCss));
        return editor.dom.styles.serialize(compressed);
    };
    var getSelectedImage = function (editor) {
        var imgElm = editor.selection.getNode();
        var figureElm = editor.dom.getParent(imgElm, 'figure.image');
        if (figureElm) {
            return editor.dom.select('img', figureElm)[0];
        }
        if (imgElm && (imgElm.nodeName !== 'IMG' || isPlaceholderImage(imgElm))) {
            return null;
        }
        return imgElm;
    };
    var splitTextBlock = function (editor, figure) {
        var dom = editor.dom;
        var textBlock = dom.getParent(
            figure.parentNode,
            function (node) {
                return !!editor.schema.getTextBlockElements()[node.nodeName];
            },
            editor.getBody(),
        );
        if (textBlock) {
            return dom.split(textBlock, figure);
        } else {
            return figure;
        }
    };
    var readImageDataFromSelection = function (editor) {
        var image = getSelectedImage(editor);
        // console.trace();
        return image
            ? read(function (css) {
                  return normalizeCss(editor, css);
              }, image)
            : defaultData();
    };
    var insertImageAtCaret = function (editor, data) {
        // console.log('insertImageAtCaret data ---> ',data);
        var figure_class = getFigureClass(data);
        // console.log('insertImageAtCaret data',data,'figure_class',figure_class);
        var elm = create(function (css) {
            // console.log('normalizeCss(editor, css)-,',normalizeCss(editor, css))
            return normalizeCss(editor, css);
        }, data);
        editor.dom.setAttrib(elm, 'data-mce-id', '__mcenew');
        editor.focus();
        editor.selection.setContent(elm.outerHTML);
        var insertedElm = editor.dom.select('*[data-mce-id="__mcenew"]')[0];
        editor.dom.setAttrib(insertedElm, 'data-mce-id', null);
        // if(figure_class == 'align-none') {
        //   editor.dom.removeClass(insertedElm, 'align-center');
        //   editor.dom.removeClass(insertedElm, 'align-left');
        //   editor.dom.removeClass(insertedElm, 'align-right');
        // }else{
        //   editor.dom.addClass(insertedElm, figure_class, null);
        // }
        if (isFigure(insertedElm)) {
            if (figure_class == 'align-none') {
                editor.dom.removeClass(insertedElm, 'align-center');
                editor.dom.removeClass(insertedElm, 'align-left');
                editor.dom.removeClass(insertedElm, 'align-right');
            } else {
                editor.dom.addClass(insertedElm, figure_class, null);
            }
            var figure = splitTextBlock(editor, insertedElm);
            editor.selection.select(figure);
        } else {
            editor.selection.select(insertedElm);
        }
    };
    var syncSrcAttr = function (editor, image) {
        editor.dom.setAttrib(image, 'src', image.getAttribute('src'));
    };
    var deleteImage = function (editor, image) {
        if (image) {
            var elm = editor.dom.is(image.parentNode, 'figure.image') ? image.parentNode : image;
            editor.dom.remove(elm);
            editor.focus();
            editor.nodeChanged();
            if (editor.dom.isEmpty(editor.getBody())) {
                editor.setContent('');
                editor.selection.setCursorLocation();
            }
        }
    };
    var writeImageDataToSelection = function (editor, data) {
        // console.log('insertImageAtCaret data', data, 'figure_class', figure_class);
        var image = getSelectedImage(editor);
        write(
            function (css) {
                return normalizeCss(editor, css);
            },
            data,
            image,
        );
        syncSrcAttr(editor, image);
        if (isFigure(image.parentNode)) {
            var figure = image.parentNode;
            var figure_class = getFigureClass(data);
            // console.log('writeImageDataToSelection', data);
            updateFigCaption(figure, data.caption_text);
            updateFigureClass(figure, data.class, editor);
            splitTextBlock(editor, figure);
            if (figure_class == 'align-none') {
                editor.dom.removeClass(figure, 'align-center');
                editor.dom.removeClass(figure, 'align-left');
                editor.dom.removeClass(figure, 'align-right');
            } else {
                editor.dom.addClass(figure, figure_class, null);
            }
            editor.selection.select(image.parentNode);
        } else {
            var cd = getClassData(data.class);
            if (typeof cd === 'object') {
                image.classList.add(cd.align);
            }
            editor.selection.select(image);
            waitLoadImage(editor, data, image);
        }
    };
    var insertOrUpdateImage = function (editor, partialData) {
        var image = getSelectedImage(editor);
        if (image) {
            var selectedImageData = read(function (css) {
                return normalizeCss(editor, css);
            }, image);
            // console.log('insertOrUpdateImage', selectedImageData, partialData);

            var data = __assign(__assign({}, selectedImageData), partialData);
            if (data.src) {
                // console.log('writeImageDataToSelection');
                writeImageDataToSelection(editor, data);
            } else {
                deleteImage(editor, image);
            }
        } else if (partialData.src) {
            // console.log('insertImageAtCaret');
            insertImageAtCaret(editor, __assign(__assign({}, defaultData()), partialData));
        }
    };

    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var deep = function (old, nu) {
        var bothObjects = isObject(old) && isObject(nu);
        return bothObjects ? deepMerge(old, nu) : nu;
    };
    var baseMerge = function (merger) {
        return function () {
            var objects = new Array(arguments.length);
            for (var i = 0; i < objects.length; i++) {
                objects[i] = arguments[i];
            }
            if (objects.length === 0) {
                throw new Error("Can't merge zero objects");
            }
            var ret = {};
            for (var j = 0; j < objects.length; j++) {
                var curObject = objects[j];
                for (var key in curObject) {
                    if (hasOwnProperty.call(curObject, key)) {
                        ret[key] = merger(ret[key], curObject[key]);
                    }
                }
            }
            return ret;
        };
    };
    var deepMerge = baseMerge(deep);

    var global$4 = tinymce.util.Tools.resolve('tinymce.util.Tools');

    var getValue = function (item) {
        // console.log('getValue item ===> ', item);
        return isString(item.value) ? item.value : '';
    };
    var sanitizeList = function (list, extractValue) {
        var out = [];
        global$4.each(list, function (item) {
            var text = isString(item.text) ? item.text : isString(item.title) ? item.title : '';
            if (item.menu !== undefined) {
                var items = sanitizeList(item.menu, extractValue);
                out.push({
                    text: text,
                    items: items,
                });
            } else {
                var value = extractValue(item);
                // console.log('extractValue = ',value);
                out.push({
                    text: text,
                    value: value,
                });
            }
        });
        return out;
    };
    var sanitizer = function (extracter) {
        // console.log('sanitizer extracter ===> ',extracter);
        if (extracter === void 0) {
            extracter = getValue;
        }
        return function (list) {
            if (list) {
                return Optional.from(list).map(function (list) {
                    return sanitizeList(list, extracter);
                });
            } else {
                return Optional.none();
            }
        };
    };
    var sanitize = function (list) {
        return sanitizer(getValue)(list);
    };
    var isGroup = function (item) {
        return Object.prototype.hasOwnProperty.call(item, 'items');
    };
    var findEntryDelegate = function (list, value) {
        var value_arr = !isNull(value) ? value.split(' ') : [];
        // console.log(';findEntryDelegate', value_arr, value);
        return findMap(list, function (item) {
            if (isGroup(item)) {
                return findEntryDelegate(item.items, value);
            } else if (item.value === value) {
                return Optional.some(item);
            } else {
                if (value_arr.length && value_arr.includes(item.value)) {
                    Optional.some(item);
                } else {
                    return Optional.none();
                }
            }
        });
    };
    var findEntry = function (optList, value) {
        return optList.bind(function (list) {
            return findEntryDelegate(list, value);
        });
    };
    var ListUtils = {
        sanitizer: sanitizer,
        sanitize: sanitize,
        findEntry: findEntry,
        // onChange: onChange
    };

    var pathJoin = function (path1, path2) {
        if (path1) {
            return path1.replace(/\/$/, '') + '/' + path2.replace(/^\//, '');
        }
        return path2;
    };
    function Uploader(settings) {
        // console.log('Uploader --> settings',settings);
        var defaultHandler = function (blobInfo, success, failure, progress, description) {
            // console.log('defaultHandler handler', handler);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', settings.url);
            xhr.withCredentials = settings.credentials;
            xhr.upload.onprogress = function (e) {
                progress((e.loaded / e.total) * 100);
            };
            xhr.onerror = function () {
                failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
            };
            xhr.onload = function () {
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
        var uploadBlob = function (blobInfo, handler, description) {
            // console.log('uploadBlob handler', handler);
            return new global$2(function (resolve, reject) {
                try {
                    handler(blobInfo, resolve, reject, noop, description);
                } catch (ex) {
                    reject(ex.message);
                }
            });
        };
        var isDefaultHandler = function (handler) {
            return handler === defaultHandler;
        };
        var upload = function (blobInfo) {
            // console.log('upload ==> ', settings.handler);
            return !settings.url && isDefaultHandler(settings.handler) ? global$2.reject('Upload url missing from the settings.') : uploadBlob(blobInfo, settings.handler, settings.filedesc);
        };
        settings = global$4.extend(
            {
                credentials: false,
                handler: defaultHandler,
            },
            settings,
        );
        return { upload: upload };
    }

    var makeTab = function (_info) {
        return {
            title: 'Advanced',
            name: 'advanced',
            items: [
                {
                    type: 'input',
                    label: 'Style',
                    name: 'style',
                },
                {
                    type: 'grid',
                    columns: 2,
                    items: [
                        {
                            type: 'input',
                            label: 'Vertical space',
                            name: 'vspace',
                            inputMode: 'numeric',
                        },
                        {
                            type: 'input',
                            label: 'Horizontal space',
                            name: 'hspace',
                            inputMode: 'numeric',
                        },
                        {
                            type: 'input',
                            label: 'Border width',
                            name: 'border',
                            inputMode: 'numeric',
                        },
                        {
                            type: 'listbox',
                            name: 'borderstyle',
                            label: 'Border style',
                            items: [
                                {
                                    text: 'Select...',
                                    value: '',
                                },
                                {
                                    text: 'Solid',
                                    value: 'solid',
                                },
                                {
                                    text: 'Dotted',
                                    value: 'dotted',
                                },
                                {
                                    text: 'Dashed',
                                    value: 'dashed',
                                },
                                {
                                    text: 'Double',
                                    value: 'double',
                                },
                                {
                                    text: 'Groove',
                                    value: 'groove',
                                },
                                {
                                    text: 'Ridge',
                                    value: 'ridge',
                                },
                                {
                                    text: 'Inset',
                                    value: 'inset',
                                },
                                {
                                    text: 'Outset',
                                    value: 'outset',
                                },
                                {
                                    text: 'None',
                                    value: 'none',
                                },
                                {
                                    text: 'Hidden',
                                    value: 'hidden',
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'checkbox',
                    label: 'Allow Ads',
                    name: 'allow_ads',
                    checked: false,
                },
            ],
        };
    };
    var AdvTab = { makeTab: makeTab };

    var collect = function (editor) {
        var urlListSanitizer = ListUtils.sanitizer(function (item) {
            return editor.convertURL(item.value || item.url, 'src');
        });
        var futureImageList = new global$2(function (completer) {
            createImageList(editor, function (imageList) {
                completer(
                    urlListSanitizer(imageList).map(function (items) {
                        return flatten([
                            [
                                {
                                    text: 'None',
                                    value: '',
                                },
                            ],
                            items,
                        ]);
                    }),
                );
            });
        });
        var classList = ListUtils.sanitize(getClassList(editor));
        var classListDefault = getClassListDefault(editor);
        var hasAdvTab$1 = hasAdvTab(editor);
        var hasUploadTab$1 = hasUploadTab(editor);
        var hasUploadUrl$1 = hasUploadUrl(editor);
        var hasUploadHandler$1 = hasUploadHandler(editor);
        var image = readImageDataFromSelection(editor);
        var hasDescription$1 = hasDescription(editor);
        var hasImageTitle$1 = hasImageTitle(editor);
        var hasDimensions$1 = hasDimensions(editor);
        var hasImageCaption$1 = hasImageCaption(editor);
        var hasAccessibilityOptions = showAccessibilityOptions(editor);
        var hasImageAllowAds$1 = hasImageAllowAds(editor);
        var url = getUploadUrl(editor);
        var basePath = getUploadBasePath(editor);
        var credentials = getUploadCredentials(editor);
        var handler = getUploadHandler(editor);
        var automaticUploads = isAutomaticUploadsEnabled(editor);
        var prependURL = Optional.some(getPrependUrl(editor)).filter(function (preUrl) {
            return isString(preUrl) && preUrl.length > 0;
        });
        // console.log('classList', classList);
        return futureImageList.then(function (imageList) {
            // console.log(imageList);
            return {
                image: image,
                imageList: imageList,
                classList: classList,
                classListDefault: classListDefault,
                hasAdvTab: hasAdvTab$1,
                hasUploadTab: hasUploadTab$1,
                hasUploadUrl: hasUploadUrl$1,
                hasUploadHandler: hasUploadHandler$1,
                hasDescription: hasDescription$1,
                hasImageTitle: hasImageTitle$1,
                hasDimensions: hasDimensions$1,
                hasImageCaption: hasImageCaption$1,
                hasImageAllowAds: hasImageAllowAds$1,
                url: url,
                basePath: basePath,
                credentials: credentials,
                handler: handler,
                prependURL: prependURL,
                hasAccessibilityOptions: hasAccessibilityOptions,
                automaticUploads: automaticUploads,
            };
        });
    };

    var makeItems = function (info) {
        var imagePreview = {
            type: 'label',
            label: 'Hình ảnh',
            items: [
                {
                    type: 'htmlpanel',
                    html: '<div class="mce_image_preview" id="mce_image_preview" style="border: 1px solid #CCC; width: 100%; height: 200px;"><img src="" style="max-width:100%"/></div>',
                },
            ],
        };
        // var imagePreview = {
        //   type: 'htmlpanel',
        //   html: '<div class="mce_image_preview" style="border: 1px solid #CCC; width: 100%; height: 200px;"><img src="" style="max-width:100%"/></div>'
        // };
        var imageUrl = {
            name: 'src',
            type: 'urlinput',
            filetype: 'image',
            label: 'Source',
        };
        var imageList = info.imageList.map(function (items) {
            return {
                name: 'images',
                type: 'listbox',
                label: 'Image list',
                items: items,
            };
        });
        var imageDescription = {
            name: 'alt',
            type: 'input',
            label: 'Alternative description',
            disabled: info.hasAccessibilityOptions && info.image.isDecorative,
        };
        var imageCaptionText = {
            name: 'caption_text',
            type: 'input',
            label: 'Caption',
            disabled: info.hasAccessibilityOptions && info.image.isDecorative,
        };
        var imageTitle = {
            name: 'title',
            type: 'input',
            label: 'Image title',
        };
        var imageDimensions = {
            name: 'dimensions',
            type: 'sizeinput',
        };
        var imageRestoreSize = {
            type: 'button', // component type
            text: 'Restore original size',
            primary: false,
            name: 'restore_size',
        };
        var isDecorative = {
            type: 'label',
            label: 'Accessibility',
            items: [
                {
                    name: 'isDecorative',
                    type: 'checkbox',
                    label: 'Image is decorative',
                },
            ],
        };
        var classList = info.classList.map(function (items) {
            return {
                name: 'classes',
                type: 'listbox',
                label: 'Class',
                items: items,
            };
        });
        var caption = {
            type: 'label',
            label: 'Caption',
            items: [
                {
                    type: 'checkbox',
                    name: 'caption',
                    label: 'Show caption',
                },
            ],
        };
        var figure_class = {
            name: 'figure_class',
            type: 'hidden',
        };
        return flatten([
            // [imagePreview],
            [imageUrl],
            imageList.toArray(),
            info.hasAccessibilityOptions && info.hasDescription ? [isDecorative] : [],
            info.hasDescription ? [imageDescription] : [],
            info.hasImageCaption ? [imageCaptionText] : [],
            info.hasImageTitle ? [imageTitle] : [],
            info.hasDimensions ? [imageDimensions] : [],
            [imageRestoreSize],
            [
                {
                    type: 'grid',
                    columns: 2,
                    items: flatten([classList.toArray(), info.hasImageCaption ? [caption] : []]),
                },
            ],
        ]);
    };
    var makeTab$1 = function (info) {
        return {
            title: 'General',
            name: 'general',
            items: makeItems(info),
        };
    };
    var MainTab = {
        makeTab: makeTab$1,
        makeItems: makeItems,
    };
    var makeTab$2 = function (_info) {
        var items = [
            {
                type: 'textarea',
                name: 'filedesc',
                label: 'Mô tả ảnh',
            },
            {
                type: 'dropzone',
                name: 'fileinput',
            },
        ];
        return {
            title: 'Upload',
            name: 'upload',
            items: items,
        };
    };
    var UploadTab = { makeTab: makeTab$2 };

    var createState = function (info) {
        return {
            prevImage: ListUtils.findEntry(info.imageList, info.image.src),
            prevAlt: info.image.alt,
            prevCaptionText: info.image.caption_text,
            open: true,
        };
    };
    var fromImageData = function (image) {
        //remove image class not in classlist
        var img_class_arr = isString(image.class) ? image.class.split(' ') : [];
        if (img_class_arr.length) {
            var cd = getClassData();
            img_class_arr.forEach((item, index) => {
                if (Object.hasOwnProperty.call(cd, item)) {
                    image.class = item;
                }
            });
            // console.log('image.class->', image.class);
        }
        return {
            src: {
                value: image.src,
                meta: {},
            },
            images: image.src,
            alt: image.alt,
            title: image.title,
            dimensions: {
                width: image.width,
                height: image.height,
            },
            classes: image.class,
            caption: image.caption_text ? image.caption : false,
            caption_text: image.caption_text,
            style: image.style,
            vspace: image.vspace,
            border: image.border,
            hspace: image.hspace,
            borderstyle: image.borderStyle,
            fileinput: [],
            isDecorative: image.isDecorative,
            figure_class: image.figure_class,
            allow_ads: image.allow_ads,
            class_list_default: image.class_list_default,
        };
    };
    var toImageData = function (data, removeEmptyAlt) {
        // console.log(data);
        // console.trace();
        return {
            src: data.src.value,
            alt: data.alt.length === 0 && removeEmptyAlt ? null : data.alt,
            title: data.title,
            width: data.dimensions.width,
            height: data.dimensions.height,
            class: data.classes,
            style: data.style,
            caption: data.caption,
            caption_text: data.caption_text,
            hspace: data.hspace,
            vspace: data.vspace,
            border: data.border,
            borderStyle: data.borderstyle,
            isDecorative: data.isDecorative,
            figure_class: data.figure_class,
            allow_ads: data.allow_ads,
            class_list_default: data.class_list_default,
        };
    };
    var addPrependUrl2 = function (info, srcURL) {
        if (!/^(?:[a-zA-Z]+:)?\/\//.test(srcURL)) {
            return info.prependURL.bind(function (prependUrl) {
                if (srcURL.substring(0, prependUrl.length) !== prependUrl) {
                    return Optional.some(prependUrl + srcURL);
                }
                return Optional.none();
            });
        }
        return Optional.none();
    };
    var addPrependUrl = function (info, api) {
        var data = api.getData();
        addPrependUrl2(info, data.src.value).each(function (srcURL) {
            api.setData({
                src: {
                    value: srcURL,
                    meta: data.src.meta,
                },
            });
        });
    };
    var formFillFromMeta2 = function (info, data, meta) {
        // console.trace();
        // console.log('formFillFromMeta2 data,meta ===> ', data, meta);

        if (info.hasDescription && isString(meta.alt)) {
            data.alt = meta.alt;
        }
        if (info.hasImageCaption && isString(meta.caption_text)) {
            data.caption_text = meta.caption_text;
        }
        if (info.hasAccessibilityOptions) {
            data.isDecorative = meta.isDecorative || data.isDecorative || false;
        }
        if (info.hasImageTitle && isString(meta.title)) {
            data.title = meta.title;
        }
        if (info.hasDimensions) {
            if (isString(meta.width)) {
                data.dimensions.width = meta.width;
            }
            if (isString(meta.height)) {
                data.dimensions.height = meta.height;
            }
        }
        if (info.class_list_default && isString(meta.class_list_default)) {
            data.class = meta.class_list_default;
        }
        if (isString(meta.class)) {
            ListUtils.findEntry(info.classList, meta.class).each(function (entry) {
                data.classes = entry.value;
            });
        }

        if (info.hasImageCaption) {
            if (isBoolean(meta.caption)) {
                data.caption = meta.caption;
            }
        }
        if (info.hasAdvTab) {
            if (isString(meta.style)) {
                data.style = meta.style;
            }
            if (isString(meta.vspace)) {
                data.vspace = meta.vspace;
            }
            if (isString(meta.border)) {
                data.border = meta.border;
            }
            if (isString(meta.hspace)) {
                data.hspace = meta.hspace;
            }
            if (isString(meta.borderstyle)) {
                data.borderstyle = meta.borderstyle;
            }
            if (isString(meta.borderstyle)) {
                data.borderstyle = meta.borderstyle;
            }
        }
    };
    var formFillFromMeta = function (info, api) {
        var data = api.getData();
        var meta = data.src.meta;
        if (meta !== undefined) {
            var newData = deepMerge({}, data);
            formFillFromMeta2(info, newData, meta);
            // console.log(data, newData);
            api.setData(newData);
        }
    };
    var calculateImageSize = function (helpers, info, state, api) {
        var data = api.getData();
        var url = data.src.value;
        var meta = data.src.meta || {};
        if (!meta.width && !meta.height && info.hasDimensions) {
            // console.log('calculateImageSize');
            helpers.imageSize(url).then(function (size) {
                if (state.open) {
                    // console.log(size);
                    api.setData({ dimensions: size });
                }
            });
        }
    };
    var setOriginalSize = function (helpers, info, state, api) {
        var data = api.getData();
        var meta = data.src.meta || {};
        calculateImageSize(helpers, info, state, api);
        // console.log('setImageSize-->', helpers, info, state, api);
        // console.log('setImageSize-->data', helpers, info, state, api);
    };
    var updateImagesDropdown = function (info, state, api) {
        var data = api.getData();
        var image = ListUtils.findEntry(info.imageList, data.src.value);
        state.prevImage = image;
        api.setData({
            images: image
                .map(function (entry) {
                    return entry.value;
                })
                .getOr(''),
        });
    };
    var updateClassesDropdown = function (info, state, api) {
        var data = api.getData();
        var image = ListUtils.findEntry(info.classList, '');
        api.setData({
            classes: '',
        });
    };
    var changeSrc = function (helpers, info, state, api) {
        addPrependUrl(info, api);
        formFillFromMeta(info, api);
        calculateImageSize(helpers, info, state, api);
        updateImagesDropdown(info, state, api);
        updateClassesDropdown(info, state, api);
        api.showTab('general');
    };
    var changeImages = function (helpers, info, state, api) {
        var data = api.getData();
        var image = ListUtils.findEntry(info.imageList, data.images);
        // console.log('changeImages',  api.getData());
        image.each(function (img) {
            var updateAlt =
                data.alt === '' ||
                state.prevImage
                    .map(function (image) {
                        return image.text === data.alt;
                    })
                    .getOr(false);
            if (updateAlt) {
                if (img.value === '') {
                    api.setData({
                        src: img,
                        alt: state.prevAlt,
                    });
                } else {
                    api.setData({
                        src: img,
                        alt: img.text,
                    });
                }
            } else {
                api.setData({ src: img });
            }
        });
        state.prevImage = image;
        changeSrc(helpers, info, state, api);
    };
    var changeImageClass = function (helpers, info, state, api) {
        var data = api.getData();
        if (data.src.value != '') {
            // console.log('data.classes', data.classes);
            var size = getClassData(data.classes);
            var figure_classes = size == '' || size == undefined ? '' : 'align-center';
            api.setData({
                dimensions: {
                    width: size != undefined ? size.width : data.dimensions.width,
                    height: size != undefined ? size.height : data.dimensions.height,
                },
                caption: data.caption,
                caption_text: data.caption_text == '' && data.caption ? 'Chú thích ảnh' : data.caption_text,
                figure_classes: figure_classes,
            });
        }
        // console.log('changeImageClass =>', api.getData());
        // console.trace();
        formFillFromMeta(info, api);
    };

    var calcVSpace = function (css) {
        var matchingTopBottom = css['margin-top'] && css['margin-bottom'] && css['margin-top'] === css['margin-bottom'];
        return matchingTopBottom ? removePixelSuffix(String(css['margin-top'])) : '';
    };
    var calcHSpace = function (css) {
        var matchingLeftRight = css['margin-right'] && css['margin-left'] && css['margin-right'] === css['margin-left'];
        return matchingLeftRight ? removePixelSuffix(String(css['margin-right'])) : '';
    };
    var calcBorderWidth = function (css) {
        return css['border-width'] ? removePixelSuffix(String(css['border-width'])) : '';
    };
    var calcBorderStyle = function (css) {
        return css['border-style'] ? String(css['border-style']) : '';
    };
    var calcStyle = function (parseStyle, serializeStyle, css) {
        return serializeStyle(parseStyle(serializeStyle(css)));
    };
    var changeStyle2 = function (parseStyle, serializeStyle, data) {
        var css = mergeMargins(parseStyle(data.style));
        var dataCopy = deepMerge({}, data);
        dataCopy.vspace = calcVSpace(css);
        dataCopy.hspace = calcHSpace(css);
        dataCopy.border = calcBorderWidth(css);
        dataCopy.borderstyle = calcBorderStyle(css);
        dataCopy.style = calcStyle(parseStyle, serializeStyle, css);
        return dataCopy;
    };
    var changeStyle = function (helpers, api) {
        var data = api.getData();
        var newData = changeStyle2(helpers.parseStyle, helpers.serializeStyle, data);
        api.setData(newData);
    };
    var changeAStyle = function (helpers, info, api) {
        var data = deepMerge(fromImageData(info.image), api.getData());
        var style = getStyleValue(helpers.normalizeCss, toImageData(data, false));
        api.setData({ style: style });
    };
    var changeFileInput = function (helpers, info, state, api) {
        var data = api.getData();
        api.block('Uploading image');
        head(data.fileinput).fold(
            function () {
                api.unblock();
            },
            function (file) {
                var blobUri = URL.createObjectURL(file);
                var uploader = Uploader({
                    url: info.url,
                    basePath: info.basePath,
                    credentials: info.credentials,
                    handler: info.handler,
                    filedesc: data.filedesc,
                });
                var finalize = function () {
                    api.unblock();
                    api.setData({ filedesc: '' });
                    URL.revokeObjectURL(blobUri);
                };
                var updateSrcAndSwitchTab = function (url, filedesc) {
                    // console.trace();
                    // console.log('updateSrcAndSwitchTab ===> ',url,filedesc);
                    var filedesc = filedesc.replace(/(\r\n|\n|\r)/gm, '');
                    api.setData({
                        src: {
                            value: url,
                            meta: {
                                alt: filedesc,
                                caption_text: filedesc,
                                caption: true,
                            },
                        },
                    });
                    api.showTab('general');
                    changeSrc(helpers, info, state, api);
                };
                blobToDataUri(file).then(function (dataUrl) {
                    var blobInfo = helpers.createBlobCache(file, blobUri, dataUrl);
                    if (info.automaticUploads) {
                        // console.trace();
                        // console.log('blobInfo ==> ');
                        uploader
                            .upload(blobInfo)
                            .then(function (url, meta) {
                                // console.log(data.filedesc, meta);
                                updateSrcAndSwitchTab(url, data.filedesc);
                                finalize();
                            })
                            .catch(function (err) {
                                finalize();
                                helpers.alertErr(err);
                            });
                    } else {
                        helpers.addToBlobCache(blobInfo);
                        updateSrcAndSwitchTab(blobInfo.blobUri(), data.filedesc);
                        api.unblock();
                    }
                });
            },
        );
    };

    var changeFileDesc = function (helpers, info, state, api) {
        var data = api.getData();
        api.setData({ filedesc: data.filedesc });
    };
    var changeCaptionText = function (helpers, info, state, api) {
        var oldData = api.getData();
        api.setData({ caption_text: oldData.caption_text });
        api.setData({ caption: oldData.caption_text ? true : false });
        // setCaptionText(info.image, oldData.caption_text);
        var newData = api.getData();
        updateProp(info.image, oldData, newData, 'caption', function (image, _name, _value) {
            // toggleCaption(info.image, newData.figure_classes);
        });
    };

    var changeHandler = function (helpers, info, state) {
        return function (api, evt) {
            // console.log('changeHandler', evt.name);

            if (evt.name === 'src') {
                changeSrc(helpers, info, state, api);
            } else if (evt.name === 'images') {
                changeImages(helpers, info, state, api);
            } else if (evt.name === 'classes') {
                // changeImages(helpers, info, state, api);
                changeImageClass(helpers, info, state, api);
            } else if (evt.name === 'alt') {
                state.prevAlt = api.getData().alt;
            } else if (evt.name === 'caption_text') {
                state.prevCaptionText = api.getData().caption_text;
                changeCaptionText(helpers, info, state, api);
            } else if (evt.name === 'style') {
                changeStyle(helpers, api);
            } else if (evt.name === 'vspace' || evt.name === 'hspace' || evt.name === 'border' || evt.name === 'borderstyle') {
                changeAStyle(helpers, info, api);
            } else if (evt.name === 'fileinput') {
                changeFileInput(helpers, info, state, api);
            } else if (evt.name === 'filedesc') {
                changeFileDesc(helpers, info, state, api);
            } else if (evt.name === 'isDecorative') {
                if (api.getData().isDecorative) {
                    api.disable('alt');
                } else {
                    api.enable('alt');
                }
            }
        };
    };
    var closeHandler = function (state) {
        return function () {
            state.open = false;
        };
    };
    var makeDialogBody = function (info) {
        // console.log('makeDialogBody info=>>', info);
        if (info.hasAdvTab || info.hasUploadUrl || info.hasUploadHandler) {
            var tabPanel = {
                type: 'tabpanel',
                tabs: flatten([
                    [MainTab.makeTab(info)],
                    info.hasUploadTab && (info.hasUploadUrl || info.hasUploadHandler) ? [UploadTab.makeTab(info)] : [],
                    info.hasAdvTab ? [AdvTab.makeTab(info)] : [],
                ]),
            };
            return tabPanel;
        } else {
            var panel = {
                type: 'panel',
                items: MainTab.makeItems(info),
            };
            // console.log('makeDialogBody ===> ',panel);
            return panel;
        }
    };
    var makeDialog = function (helpers) {
        return function (info) {
            var state = createState(info);
            // console.log(info);
            return {
                title: 'Insert/Edit Image',
                size: 'normal',
                body: makeDialogBody(info),
                buttons: [
                    {
                        type: 'cancel',
                        name: 'cancel',
                        text: 'Cancel',
                    },
                    {
                        type: 'submit',
                        name: 'save',
                        text: 'Save',
                        primary: true,
                    },
                ],
                initialData: fromImageData(info.image),
                onSubmit: helpers.onSubmit(info),
                onChange: changeHandler(helpers, info, state),
                onAction: function (api, detail) {
                    if (detail.name == 'restore_size') {
                        setOriginalSize(helpers, info, state, api);
                    }
                },
                onClose: closeHandler(state),
            };
        };
    };
    var submitHandler = function (editor) {
        // console.trace();
        return function (info) {
            return function (api) {
                //console.log('submitHandler api data',api.getData(),info.image, fromImageData(info.image));
                var data = deepMerge(fromImageData(info.image), api.getData());
                // console.log('submitHandler  data', data);
                editor.execCommand('mceUpdateImage', false, toImageData(data, info.hasAccessibilityOptions));
                editor.editorUpload.uploadImagesAuto();
                api.close();
            };
        };
    };
    var imageSize = function (editor) {
        return function (url) {
            return getImageSize(editor.documentBaseURI.toAbsolute(url)).then(function (dimensions) {
                return {
                    width: String(dimensions.width),
                    height: String(dimensions.height),
                };
            });
        };
    };
    var createBlobCache = function (editor) {
        return function (file, blobUri, dataUrl) {
            return editor.editorUpload.blobCache.create({
                blob: file,
                blobUri: blobUri,
                name: file.name ? file.name.replace(/\.[^\.]+$/, '') : null,
                base64: dataUrl.split(',')[1],
            });
        };
    };
    var addToBlobCache = function (editor) {
        return function (blobInfo) {
            editor.editorUpload.blobCache.add(blobInfo);
        };
    };
    var alertErr = function (editor) {
        return function (message) {
            editor.windowManager.alert(message);
        };
    };
    var normalizeCss$1 = function (editor) {
        return function (cssText) {
            return normalizeCss(editor, cssText);
        };
    };
    var parseStyle = function (editor) {
        return function (cssText) {
            return editor.dom.parseStyle(cssText);
        };
    };
    var serializeStyle = function (editor) {
        return function (stylesArg, name) {
            return editor.dom.serializeStyle(stylesArg, name);
        };
    };
    var Dialog = function (editor) {
        var helpers = {
            onSubmit: submitHandler(editor),
            imageSize: imageSize(editor),
            addToBlobCache: addToBlobCache(editor),
            createBlobCache: createBlobCache(editor),
            alertErr: alertErr(editor),
            normalizeCss: normalizeCss$1(editor),
            parseStyle: parseStyle(editor),
            serializeStyle: serializeStyle(editor),
        };
        var open = function () {
            collect(editor).then(makeDialog(helpers)).then(editor.windowManager.open);
        };
        return { open: open };
    };

    var register = function (editor) {
        editor.addCommand('mceImage', Dialog(editor).open);
        editor.addCommand('mceUpdateImage', function (_ui, data) {
            editor.undoManager.transact(function () {
                return insertOrUpdateImage(editor, data);
            });
        });
    };

    var hasImageClass = function (node) {
        var className = node.attr('class');
        return className && /\bimage\b/.test(className);
    };
    var toggleContentEditableState = function (state) {
        return function (nodes) {
            var i = nodes.length;
            var toggleContentEditable = function (node) {
                node.attr('contenteditable', state ? 'true' : null);
            };
            while (i--) {
                var node = nodes[i];
                if (hasImageClass(node)) {
                    node.attr('contenteditable', state ? 'false' : null);
                    global$4.each(node.getAll('figcaption'), toggleContentEditable);
                }
            }
        };
    };
    var setup = function (editor) {
        editor.on('PreInit', function () {
            editor.parser.addNodeFilter('figure', toggleContentEditableState(true));
            editor.serializer.addNodeFilter('figure', toggleContentEditableState(false));
        });
    };

    var register$1 = function (editor) {
        editor.ui.registry.addToggleButton('image', {
            icon: 'image',
            tooltip: 'Insert/edit image',
            onAction: Dialog(editor).open,
            onSetup: function (buttonApi) {
                return editor.selection.selectorChangedWithUnbind('img:not([data-mce-object],[data-mce-placeholder]),figure.image', buttonApi.setActive).unbind;
            },
        });
        editor.ui.registry.addMenuItem('image', {
            icon: 'image',
            text: 'Image...',
            onAction: Dialog(editor).open,
        });
        editor.ui.registry.addContextMenu('image', {
            update: function (element) {
                return isFigure(element) || (isImage(element) && !isPlaceholderImage(element)) ? ['image'] : [];
            },
        });
    };

    function Plugin() {
        global.add('image', function (editor) {
            setup(editor);
            register$1(editor);
            register(editor);
        });
    }

    Plugin();
})();
