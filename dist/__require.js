var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __create = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp2(target, "__esModule", { value: true });
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, desc) => {
  if (module && typeof module == "object" || typeof module == "function")
    for (let key of __getOwnPropNames(module))
      !__hasOwnProp2.call(target, key) && key !== "default" && __defProp2(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  return target;
}, __toModule = (module) => __reExport(__markAsModule(__defProp2(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
var init_global = __esm({ "../node_modules/.pnpm/rollup-plugin-node-polyfills@0.2.1/node_modules/rollup-plugin-node-polyfills/polyfills/global.js"() {
  init_vite_shims();
} });
var init_vite_shims = __esm({ "../vite-shims.mjs"() {
  init_global();
  __toModule(require_browser());
} });
var require_browser = __commonJS({ "../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js"(exports, module) {
  init_vite_shims();
  var process2 = module.exports = {}, cachedSetTimeout, cachedClearTimeout;
  function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
  }
  function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      typeof setTimeout == "function" ? cachedSetTimeout = setTimeout : cachedSetTimeout = defaultSetTimout;
    } catch (e) {
      cachedSetTimeout = defaultSetTimout;
    }
    try {
      typeof clearTimeout == "function" ? cachedClearTimeout = clearTimeout : cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
      cachedClearTimeout = defaultClearTimeout;
    }
  })();
  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout)
      return setTimeout(fun, 0);
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout)
      return cachedSetTimeout = setTimeout, setTimeout(fun, 0);
    try {
      return cachedSetTimeout(fun, 0);
    } catch (e) {
      try {
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e2) {
        return cachedSetTimeout.call(this, fun, 0);
      }
    }
  }
  function runClearTimeout(marker3) {
    if (cachedClearTimeout === clearTimeout)
      return clearTimeout(marker3);
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout)
      return cachedClearTimeout = clearTimeout, clearTimeout(marker3);
    try {
      return cachedClearTimeout(marker3);
    } catch (e) {
      try {
        return cachedClearTimeout.call(null, marker3);
      } catch (e2) {
        return cachedClearTimeout.call(this, marker3);
      }
    }
  }
  var queue = [], draining = false, currentQueue, queueIndex = -1;
  function cleanUpNextTick() {
    !draining || !currentQueue || (draining = false, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, queue.length && drainQueue());
  }
  function drainQueue() {
    if (!draining) {
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
      for (var len = queue.length; len; ) {
        for (currentQueue = queue, queue = []; ++queueIndex < len; )
          currentQueue && currentQueue[queueIndex].run();
        queueIndex = -1, len = queue.length;
      }
      currentQueue = null, draining = false, runClearTimeout(timeout);
    }
  }
  process2.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var i = 1; i < arguments.length; i++)
        args[i - 1] = arguments[i];
    queue.push(new Item(fun, args)), queue.length === 1 && !draining && runTimeout(drainQueue);
  };
  function Item(fun, array) {
    this.fun = fun, this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process2.title = "browser";
  process2.browser = true;
  process2.env = {};
  process2.argv = [];
  process2.version = "";
  process2.versions = {};
  function noop() {
  }
  process2.on = noop;
  process2.addListener = noop;
  process2.once = noop;
  process2.off = noop;
  process2.removeListener = noop;
  process2.removeAllListeners = noop;
  process2.emit = noop;
  process2.prependListener = noop;
  process2.prependOnceListener = noop;
  process2.listeners = function(name) {
    return [];
  };
  process2.binding = function(name) {
    throw new Error("process.binding is not supported");
  };
  process2.cwd = function() {
    return "/";
  };
  process2.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
  };
  process2.umask = function() {
    return 0;
  };
} });
init_vite_shims();
init_vite_shims();
var _a$1, _b$1, _c$1, _d$1, _e$1, INTERNAL = true, issueWarning$1;
(_a$1 = globalThis.litIssuedWarnings) !== null && _a$1 !== void 0 || (globalThis.litIssuedWarnings = new Set()), issueWarning$1 = (code, warning) => {
  warning += code ? ` See https://lit.dev/msg/${code} for more information.` : "", globalThis.litIssuedWarnings.has(warning) || (console.warn(warning), globalThis.litIssuedWarnings.add(warning));
}, issueWarning$1("dev-mode", "Lit is in dev mode. Not recommended for production!");
var wrap$1 = ((_b$1 = window.ShadyDOM) === null || _b$1 === void 0 ? void 0 : _b$1.inUse) && ((_c$1 = window.ShadyDOM) === null || _c$1 === void 0 ? void 0 : _c$1.noPatch) === true ? window.ShadyDOM.wrap : (node) => node, trustedTypes$1 = globalThis.trustedTypes, policy$1 = trustedTypes$1 ? trustedTypes$1.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, identityFunction$1 = (value) => value, noopSanitizer$1 = (_node, _name, _type) => identityFunction$1, setSanitizer = (newSanitizer) => {
  {
    if (sanitizerFactoryInternal$1 !== noopSanitizer$1)
      throw new Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");
    sanitizerFactoryInternal$1 = newSanitizer;
  }
}, _testOnlyClearSanitizerFactoryDoNotCallOrElse = () => {
  sanitizerFactoryInternal$1 = noopSanitizer$1;
}, createSanitizer$1 = (node, name, type) => sanitizerFactoryInternal$1(node, name, type), boundAttributeSuffix$1 = "$lit$", marker$1 = `lit$${String(Math.random()).slice(9)}$`, markerMatch$1 = "?" + marker$1, nodeMarker$1 = `<${markerMatch$1}>`, d$1 = document, createMarker$1 = (v = "") => d$1.createComment(v), isPrimitive$1 = (value) => value === null || typeof value != "object" && typeof value != "function", isArray$1 = Array.isArray, isIterable$1 = (value) => {
  var _a22;
  return isArray$1(value) || typeof ((_a22 = value) === null || _a22 === void 0 ? void 0 : _a22[Symbol.iterator]) == "function";
}, SPACE_CHAR$1 = `[ 	
\f\r]`, ATTR_VALUE_CHAR$1 = `[^ 	
\f\r"'\`<>=]`, NAME_CHAR$1 = `[^\\s"'>=/]`, textEndRegex$1 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, COMMENT_START$1 = 1, TAG_NAME$1 = 2, DYNAMIC_TAG_NAME$1 = 3, commentEndRegex$1 = /-->/g, comment2EndRegex$1 = />/g, tagEndRegex$1 = new RegExp(`>|${SPACE_CHAR$1}(?:(${NAME_CHAR$1}+)(${SPACE_CHAR$1}*=${SPACE_CHAR$1}*(?:${ATTR_VALUE_CHAR$1}|("|')|))|$)`, "g"), ENTIRE_MATCH$1 = 0, ATTRIBUTE_NAME$1 = 1, SPACES_AND_EQUALS$1 = 2, QUOTE_CHAR$1 = 3, singleQuoteAttrEndRegex$1 = /'/g, doubleQuoteAttrEndRegex$1 = /"/g, rawTextElement$1 = /^(?:script|style|textarea)$/i, HTML_RESULT = 1, SVG_RESULT$1 = 2, ATTRIBUTE_PART$1 = 1, CHILD_PART$1 = 2, PROPERTY_PART$1 = 3, BOOLEAN_ATTRIBUTE_PART$1 = 4, EVENT_PART$1 = 5, ELEMENT_PART$1 = 6, COMMENT_PART$1 = 7, tag = (type) => (strings, ...values) => (strings.some((s) => s === void 0) && console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`), { _$litType$: type, strings, values }), html = tag(HTML_RESULT), svg = tag(SVG_RESULT$1), noChange$1 = Symbol.for("lit-noChange"), nothing$1 = Symbol.for("lit-nothing"), templateCache$1 = new WeakMap(), render = (value, container, options) => {
  var _a22, _b22, _c22;
  let partOwnerNode = (_a22 = options == null ? void 0 : options.renderBefore) !== null && _a22 !== void 0 ? _a22 : container, part = partOwnerNode._$litPart$;
  if (part === void 0) {
    let endNode = (_b22 = options == null ? void 0 : options.renderBefore) !== null && _b22 !== void 0 ? _b22 : null;
    if (((_c22 = options) === null || _c22 === void 0 ? void 0 : _c22.clearContainerForLit2MigrationOnly) === true) {
      let n = container.firstChild;
      for (; n && n !== endNode; ) {
        let next = n.nextSibling;
        n.remove(), n = next;
      }
    }
    partOwnerNode._$litPart$ = part = new ChildPart$1(container.insertBefore(createMarker$1(), endNode), endNode, void 0, options != null ? options : {});
  }
  return part._$setValue(value), part;
};
render.setSanitizer = setSanitizer, render.createSanitizer = createSanitizer$1, render._testOnlyClearSanitizerFactoryDoNotCallOrElse = _testOnlyClearSanitizerFactoryDoNotCallOrElse;
var walker$1 = d$1.createTreeWalker(d$1, 129, null, false), sanitizerFactoryInternal$1 = noopSanitizer$1, getTemplateHtml$1 = (strings, type) => {
  let l = strings.length - 1, attrNames = [], html22 = type === SVG_RESULT$1 ? "<svg>" : "", rawTextEndRegex, regex = textEndRegex$1;
  for (let i = 0; i < l; i++) {
    let s = strings[i], attrNameEndIndex = -1, attrName, lastIndex = 0, match;
    for (; lastIndex < s.length && (regex.lastIndex = lastIndex, match = regex.exec(s), match !== null); )
      if (lastIndex = regex.lastIndex, regex === textEndRegex$1) {
        if (match[COMMENT_START$1] === "!--")
          regex = commentEndRegex$1;
        else if (match[COMMENT_START$1] !== void 0)
          regex = comment2EndRegex$1;
        else if (match[TAG_NAME$1] !== void 0)
          rawTextElement$1.test(match[TAG_NAME$1]) && (rawTextEndRegex = new RegExp(`</${match[TAG_NAME$1]}`, "g")), regex = tagEndRegex$1;
        else if (match[DYNAMIC_TAG_NAME$1] !== void 0) {
          throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions");
        }
      } else
        regex === tagEndRegex$1 ? match[ENTIRE_MATCH$1] === ">" ? (regex = rawTextEndRegex != null ? rawTextEndRegex : textEndRegex$1, attrNameEndIndex = -1) : match[ATTRIBUTE_NAME$1] === void 0 ? attrNameEndIndex = -2 : (attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS$1].length, attrName = match[ATTRIBUTE_NAME$1], regex = match[QUOTE_CHAR$1] === void 0 ? tagEndRegex$1 : match[QUOTE_CHAR$1] === '"' ? doubleQuoteAttrEndRegex$1 : singleQuoteAttrEndRegex$1) : regex === doubleQuoteAttrEndRegex$1 || regex === singleQuoteAttrEndRegex$1 ? regex = tagEndRegex$1 : regex === commentEndRegex$1 || regex === comment2EndRegex$1 ? regex = textEndRegex$1 : (regex = tagEndRegex$1, rawTextEndRegex = void 0);
    console.assert(attrNameEndIndex === -1 || regex === tagEndRegex$1 || regex === singleQuoteAttrEndRegex$1 || regex === doubleQuoteAttrEndRegex$1, "unexpected parse state B");
    let end = regex === tagEndRegex$1 && strings[i + 1].startsWith("/>") ? " " : "";
    html22 += regex === textEndRegex$1 ? s + nodeMarker$1 : attrNameEndIndex >= 0 ? (attrNames.push(attrName), s.slice(0, attrNameEndIndex) + boundAttributeSuffix$1 + s.slice(attrNameEndIndex) + marker$1 + end) : s + marker$1 + (attrNameEndIndex === -2 ? (attrNames.push(void 0), i) : end);
  }
  let htmlResult = html22 + (strings[l] || "<?>") + (type === SVG_RESULT$1 ? "</svg>" : "");
  return [policy$1 !== void 0 ? policy$1.createHTML(htmlResult) : htmlResult, attrNames];
}, Template$1 = class {
  constructor({ strings, ["_$litType$"]: type }, options) {
    this.parts = [];
    let node, nodeIndex = 0, attrNameIndex = 0, partCount = strings.length - 1, parts = this.parts, [html22, attrNames] = getTemplateHtml$1(strings, type);
    if (this.el = Template$1.createElement(html22, options), walker$1.currentNode = this.el.content, type === SVG_RESULT$1) {
      let content = this.el.content, svgElement = content.firstChild;
      svgElement.remove(), content.append(...svgElement.childNodes);
    }
    for (; (node = walker$1.nextNode()) !== null && parts.length < partCount; ) {
      if (node.nodeType === 1) {
        {
          let tag22 = node.localName;
          if (/^(?:textarea|template)$/i.test(tag22) && node.innerHTML.includes(marker$1)) {
            let m = `Expressions are not supported inside \`${tag22}\` elements. See https://lit.dev/msg/expression-in-${tag22} for more information.`;
            if (tag22 === "template")
              throw new Error(m);
            issueWarning$1("", m);
          }
        }
        if (node.hasAttributes()) {
          let attrsToRemove = [];
          for (let name of node.getAttributeNames())
            if (name.endsWith(boundAttributeSuffix$1) || name.startsWith(marker$1)) {
              let realName = attrNames[attrNameIndex++];
              if (attrsToRemove.push(name), realName !== void 0) {
                let statics = node.getAttribute(realName.toLowerCase() + boundAttributeSuffix$1).split(marker$1), m = /([.?@])?(.*)/.exec(realName);
                parts.push({ type: ATTRIBUTE_PART$1, index: nodeIndex, name: m[2], strings: statics, ctor: m[1] === "." ? PropertyPart$1 : m[1] === "?" ? BooleanAttributePart$1 : m[1] === "@" ? EventPart$1 : AttributePart$1 });
              } else
                parts.push({ type: ELEMENT_PART$1, index: nodeIndex });
            }
          for (let name of attrsToRemove)
            node.removeAttribute(name);
        }
        if (rawTextElement$1.test(node.tagName)) {
          let strings2 = node.textContent.split(marker$1), lastIndex = strings2.length - 1;
          if (lastIndex > 0) {
            node.textContent = trustedTypes$1 ? trustedTypes$1.emptyScript : "";
            for (let i = 0; i < lastIndex; i++)
              node.append(strings2[i], createMarker$1()), walker$1.nextNode(), parts.push({ type: CHILD_PART$1, index: ++nodeIndex });
            node.append(strings2[lastIndex], createMarker$1());
          }
        }
      } else if (node.nodeType === 8)
        if (node.data === markerMatch$1)
          parts.push({ type: CHILD_PART$1, index: nodeIndex });
        else {
          let i = -1;
          for (; (i = node.data.indexOf(marker$1, i + 1)) !== -1; )
            parts.push({ type: COMMENT_PART$1, index: nodeIndex }), i += marker$1.length - 1;
        }
      nodeIndex++;
    }
  }
  static createElement(html22, _options) {
    let el = d$1.createElement("template");
    return el.innerHTML = html22, el;
  }
};
function resolveDirective$1(part, value, parent = part, attributeIndex) {
  var _a22, _b22, _c22, _d22;
  if (value === noChange$1)
    return value;
  let currentDirective = attributeIndex !== void 0 ? (_a22 = parent.__directives) === null || _a22 === void 0 ? void 0 : _a22[attributeIndex] : parent.__directive, nextDirectiveConstructor = isPrimitive$1(value) ? void 0 : value._$litDirective$;
  return (currentDirective == null ? void 0 : currentDirective.constructor) !== nextDirectiveConstructor && ((_b22 = currentDirective == null ? void 0 : currentDirective._$notifyDirectiveConnectionChanged) === null || _b22 === void 0 || _b22.call(currentDirective, false), nextDirectiveConstructor === void 0 ? currentDirective = void 0 : (currentDirective = new nextDirectiveConstructor(part), currentDirective._$initialize(part, parent, attributeIndex)), attributeIndex !== void 0 ? ((_c22 = (_d22 = parent).__directives) !== null && _c22 !== void 0 ? _c22 : _d22.__directives = [])[attributeIndex] = currentDirective : parent.__directive = currentDirective), currentDirective !== void 0 && (value = resolveDirective$1(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex)), value;
}
var TemplateInstance$1 = class {
  constructor(template, parent) {
    this._parts = [], this._$disconnectableChildren = void 0, this._$template = template, this._$parent = parent;
  }
  get parentNode() {
    return this._$parent.parentNode;
  }
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _clone(options) {
    var _a22;
    let { el: { content }, parts } = this._$template, fragment = ((_a22 = options == null ? void 0 : options.creationScope) !== null && _a22 !== void 0 ? _a22 : d$1).importNode(content, true);
    walker$1.currentNode = fragment;
    let node = walker$1.nextNode(), nodeIndex = 0, partIndex = 0, templatePart = parts[0];
    for (; templatePart !== void 0; ) {
      if (nodeIndex === templatePart.index) {
        let part;
        templatePart.type === CHILD_PART$1 ? part = new ChildPart$1(node, node.nextSibling, this, options) : templatePart.type === ATTRIBUTE_PART$1 ? part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options) : templatePart.type === ELEMENT_PART$1 && (part = new ElementPart$1(node, this, options)), this._parts.push(part), templatePart = parts[++partIndex];
      }
      nodeIndex !== (templatePart == null ? void 0 : templatePart.index) && (node = walker$1.nextNode(), nodeIndex++);
    }
    return fragment;
  }
  _update(values) {
    let i = 0;
    for (let part of this._parts)
      part !== void 0 && (part.strings !== void 0 ? (part._$setValue(values, part, i), i += part.strings.length - 2) : part._$setValue(values[i])), i++;
  }
}, ChildPart$1 = class {
  constructor(startNode, endNode, parent, options) {
    var _a22;
    this.type = CHILD_PART$1, this._$committedValue = nothing$1, this._$disconnectableChildren = void 0, this._$startNode = startNode, this._$endNode = endNode, this._$parent = parent, this.options = options, this.__isConnected = (_a22 = options == null ? void 0 : options.isConnected) !== null && _a22 !== void 0 ? _a22 : true, this._textSanitizer = void 0;
  }
  get _$isConnected() {
    var _a22, _b22;
    return (_b22 = (_a22 = this._$parent) === null || _a22 === void 0 ? void 0 : _a22._$isConnected) !== null && _b22 !== void 0 ? _b22 : this.__isConnected;
  }
  get parentNode() {
    let parentNode = wrap$1(this._$startNode).parentNode, parent = this._$parent;
    return parent !== void 0 && parentNode.nodeType === 11 && (parentNode = parent.parentNode), parentNode;
  }
  get startNode() {
    return this._$startNode;
  }
  get endNode() {
    return this._$endNode;
  }
  _$setValue(value, directiveParent = this) {
    if (this.parentNode === null)
      throw new Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");
    value = resolveDirective$1(this, value, directiveParent), isPrimitive$1(value) ? value === nothing$1 || value == null || value === "" ? (this._$committedValue !== nothing$1 && this._$clear(), this._$committedValue = nothing$1) : value !== this._$committedValue && value !== noChange$1 && this._commitText(value) : value._$litType$ !== void 0 ? this._commitTemplateResult(value) : value.nodeType !== void 0 ? this._commitNode(value) : isIterable$1(value) ? this._commitIterable(value) : this._commitText(value);
  }
  _insert(node, ref = this._$endNode) {
    return wrap$1(wrap$1(this._$startNode).parentNode).insertBefore(node, ref);
  }
  _commitNode(value) {
    var _a22;
    if (this._$committedValue !== value) {
      if (this._$clear(), sanitizerFactoryInternal$1 !== noopSanitizer$1) {
        let parentNodeName = (_a22 = this._$startNode.parentNode) === null || _a22 === void 0 ? void 0 : _a22.nodeName;
        if (parentNodeName === "STYLE" || parentNodeName === "SCRIPT") {
          let message = "Forbidden";
          throw parentNodeName === "STYLE" ? message = "Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and make do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets." : message = "Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.", new Error(message);
        }
      }
      this._$committedValue = this._insert(value);
    }
  }
  _commitText(value) {
    if (this._$committedValue !== nothing$1 && isPrimitive$1(this._$committedValue)) {
      let node = wrap$1(this._$startNode).nextSibling;
      this._textSanitizer === void 0 && (this._textSanitizer = createSanitizer$1(node, "data", "property")), value = this._textSanitizer(value), node.data = value;
    } else {
      let textNode = document.createTextNode("");
      this._commitNode(textNode), this._textSanitizer === void 0 && (this._textSanitizer = createSanitizer$1(textNode, "data", "property")), value = this._textSanitizer(value), textNode.data = value;
    }
    this._$committedValue = value;
  }
  _commitTemplateResult(result) {
    var _a22;
    let { values, ["_$litType$"]: type } = result, template = typeof type == "number" ? this._$getTemplate(result) : (type.el === void 0 && (type.el = Template$1.createElement(type.h, this.options)), type);
    if (((_a22 = this._$committedValue) === null || _a22 === void 0 ? void 0 : _a22._$template) === template)
      this._$committedValue._update(values);
    else {
      let instance = new TemplateInstance$1(template, this), fragment = instance._clone(this.options);
      instance._update(values), this._commitNode(fragment), this._$committedValue = instance;
    }
  }
  _$getTemplate(result) {
    let template = templateCache$1.get(result.strings);
    return template === void 0 && templateCache$1.set(result.strings, template = new Template$1(result)), template;
  }
  _commitIterable(value) {
    isArray$1(this._$committedValue) || (this._$committedValue = [], this._$clear());
    let itemParts = this._$committedValue, partIndex = 0, itemPart;
    for (let item of value)
      partIndex === itemParts.length ? itemParts.push(itemPart = new ChildPart$1(this._insert(createMarker$1()), this._insert(createMarker$1()), this, this.options)) : itemPart = itemParts[partIndex], itemPart._$setValue(item), partIndex++;
    partIndex < itemParts.length && (this._$clear(itemPart && wrap$1(itemPart._$endNode).nextSibling, partIndex), itemParts.length = partIndex);
  }
  _$clear(start = wrap$1(this._$startNode).nextSibling, from) {
    var _a22;
    for ((_a22 = this._$notifyConnectionChanged) === null || _a22 === void 0 || _a22.call(this, false, true, from); start && start !== this._$endNode; ) {
      let n = wrap$1(start).nextSibling;
      wrap$1(start).remove(), start = n;
    }
  }
  setConnected(isConnected) {
    var _a22;
    if (this._$parent === void 0)
      this.__isConnected = isConnected, (_a22 = this._$notifyConnectionChanged) === null || _a22 === void 0 || _a22.call(this, isConnected);
    else
      throw new Error("part.setConnected() may only be called on a RootPart returned from render().");
  }
}, AttributePart$1 = class {
  constructor(element, name, strings, parent, options) {
    this.type = ATTRIBUTE_PART$1, this._$committedValue = nothing$1, this._$disconnectableChildren = void 0, this.element = element, this.name = name, this._$parent = parent, this.options = options, strings.length > 2 || strings[0] !== "" || strings[1] !== "" ? (this._$committedValue = new Array(strings.length - 1).fill(new String()), this.strings = strings) : this._$committedValue = nothing$1, this._sanitizer = void 0;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _$setValue(value, directiveParent = this, valueIndex, noCommit) {
    let strings = this.strings, change = false;
    if (strings === void 0)
      value = resolveDirective$1(this, value, directiveParent, 0), change = !isPrimitive$1(value) || value !== this._$committedValue && value !== noChange$1, change && (this._$committedValue = value);
    else {
      let values = value;
      value = strings[0];
      let i, v;
      for (i = 0; i < strings.length - 1; i++)
        v = resolveDirective$1(this, values[valueIndex + i], directiveParent, i), v === noChange$1 && (v = this._$committedValue[i]), change || (change = !isPrimitive$1(v) || v !== this._$committedValue[i]), v === nothing$1 ? value = nothing$1 : value !== nothing$1 && (value += (v != null ? v : "") + strings[i + 1]), this._$committedValue[i] = v;
    }
    change && !noCommit && this._commitValue(value);
  }
  _commitValue(value) {
    value === nothing$1 ? wrap$1(this.element).removeAttribute(this.name) : (this._sanitizer === void 0 && (this._sanitizer = sanitizerFactoryInternal$1(this.element, this.name, "attribute")), value = this._sanitizer(value != null ? value : ""), wrap$1(this.element).setAttribute(this.name, value != null ? value : ""));
  }
}, PropertyPart$1 = class extends AttributePart$1 {
  constructor() {
    super(...arguments);
    this.type = PROPERTY_PART$1;
  }
  _commitValue(value) {
    this._sanitizer === void 0 && (this._sanitizer = sanitizerFactoryInternal$1(this.element, this.name, "property")), value = this._sanitizer(value), this.element[this.name] = value === nothing$1 ? void 0 : value;
  }
}, BooleanAttributePart$1 = class extends AttributePart$1 {
  constructor() {
    super(...arguments);
    this.type = BOOLEAN_ATTRIBUTE_PART$1;
  }
  _commitValue(value) {
    value && value !== nothing$1 ? wrap$1(this.element).setAttribute(this.name, "") : wrap$1(this.element).removeAttribute(this.name);
  }
}, EventPart$1 = class extends AttributePart$1 {
  constructor(element, name, strings, parent, options) {
    super(element, name, strings, parent, options);
    if (this.type = EVENT_PART$1, this.strings !== void 0)
      throw new Error(`A \`<${element.localName}>\` has a \`@${name}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`);
  }
  _$setValue(newListener, directiveParent = this) {
    var _a22;
    if (newListener = (_a22 = resolveDirective$1(this, newListener, directiveParent, 0)) !== null && _a22 !== void 0 ? _a22 : nothing$1, newListener === noChange$1)
      return;
    let oldListener = this._$committedValue, shouldRemoveListener = newListener === nothing$1 && oldListener !== nothing$1 || newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive, shouldAddListener = newListener !== nothing$1 && (oldListener === nothing$1 || shouldRemoveListener);
    shouldRemoveListener && this.element.removeEventListener(this.name, this, oldListener), shouldAddListener && this.element.addEventListener(this.name, this, newListener), this._$committedValue = newListener;
  }
  handleEvent(event) {
    var _a22, _b22;
    typeof this._$committedValue == "function" ? this._$committedValue.call((_b22 = (_a22 = this.options) === null || _a22 === void 0 ? void 0 : _a22.host) !== null && _b22 !== void 0 ? _b22 : this.element, event) : this._$committedValue.handleEvent(event);
  }
}, ElementPart$1 = class {
  constructor(element, parent, options) {
    this.element = element, this.type = ELEMENT_PART$1, this._$disconnectableChildren = void 0, this._$parent = parent, this.options = options;
  }
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _$setValue(value) {
    resolveDirective$1(this, value);
  }
}, _$LH$1 = { _boundAttributeSuffix: boundAttributeSuffix$1, _marker: marker$1, _markerMatch: markerMatch$1, _HTML_RESULT: HTML_RESULT, _getTemplateHtml: getTemplateHtml$1, _TemplateInstance: TemplateInstance$1, _isIterable: isIterable$1, _resolveDirective: resolveDirective$1, _ChildPart: ChildPart$1, _AttributePart: AttributePart$1, _BooleanAttributePart: BooleanAttributePart$1, _EventPart: EventPart$1, _PropertyPart: PropertyPart$1, _ElementPart: ElementPart$1 };
(_d$1 = globalThis.litHtmlPlatformSupport) === null || _d$1 === void 0 || _d$1.call(globalThis, Template$1, ChildPart$1);
((_e$1 = globalThis.litHtmlVersions) !== null && _e$1 !== void 0 ? _e$1 : globalThis.litHtmlVersions = []).push("2.0.0-rc.5");
globalThis.litHtmlVersions.length > 1 && issueWarning$1("multiple-versions", "Multiple versions of Lit loaded. Loading multiple versions is not recommended.");
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var __eager_import_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  INTERNAL,
  _$LH: _$LH$1,
  html,
  noChange: noChange$1,
  nothing: nothing$1,
  render,
  svg
}, Symbol.toStringTag, { value: "Module" }));
init_vite_shims();
init_vite_shims();
init_vite_shims();
init_vite_shims();
var NODE_MODE = false, global$1 = window, supportsAdoptingStyleSheets = global$1.ShadowRoot && (global$1.ShadyCSS === void 0 || global$1.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, constructionToken = Symbol(), cssTagCache = new WeakMap(), CSSResult = class {
  constructor(cssText, strings, safeToken) {
    if (this._$cssResult$ = true, safeToken !== constructionToken)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = cssText, this._strings = strings;
  }
  get styleSheet() {
    let styleSheet = this._styleSheet, strings = this._strings;
    if (supportsAdoptingStyleSheets && styleSheet === void 0) {
      let cacheable = strings !== void 0 && strings.length === 1;
      cacheable && (styleSheet = cssTagCache.get(strings)), styleSheet === void 0 && ((this._styleSheet = styleSheet = new CSSStyleSheet()).replaceSync(this.cssText), cacheable && cssTagCache.set(strings, styleSheet));
    }
    return styleSheet;
  }
  toString() {
    return this.cssText;
  }
}, textFromCSSResult = (value) => {
  if (value._$cssResult$ === true)
    return value.cssText;
  if (typeof value == "number")
    return value;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`);
}, unsafeCSS = (value) => new CSSResult(typeof value == "string" ? value : String(value), void 0, constructionToken), css = (strings, ...values) => {
  let cssText = strings.length === 1 ? strings[0] : values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
  return new CSSResult(cssText, strings, constructionToken);
}, adoptStyles = (renderRoot, styles) => {
  supportsAdoptingStyleSheets ? renderRoot.adoptedStyleSheets = styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet) : styles.forEach((s) => {
    let style = document.createElement("style"), nonce = global$1.litNonce;
    nonce !== void 0 && style.setAttribute("nonce", nonce), style.textContent = s.cssText, renderRoot.appendChild(style);
  });
}, cssResultFromStyleSheet = (sheet) => {
  let cssText = "";
  for (let rule of sheet.cssRules)
    cssText += rule.cssText;
  return unsafeCSS(cssText);
}, getCompatibleStyle = supportsAdoptingStyleSheets || NODE_MODE ? (s) => s : (s) => s instanceof CSSStyleSheet ? cssResultFromStyleSheet(s) : s;
var _b, _c, _d, _e, global2 = window;
var DEV_MODE = true, requestUpdateThenable, issueWarning, trustedTypes = global2.trustedTypes, emptyStringForBooleanAttribute = trustedTypes ? trustedTypes.emptyScript : "", polyfillSupport = global2.reactiveElementPolyfillSupportDevMode;
{
  let issuedWarnings = (_b = global2.litIssuedWarnings) !== null && _b !== void 0 ? _b : global2.litIssuedWarnings = new Set();
  issueWarning = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`, issuedWarnings.has(warning) || (console.warn(warning), issuedWarnings.add(warning));
  }, issueWarning("dev-mode", "Lit is in dev mode. Not recommended for production!"), ((_c = global2.ShadyDOM) === null || _c === void 0 ? void 0 : _c.inUse) && polyfillSupport === void 0 && issueWarning("polyfill-support-missing", "Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded."), requestUpdateThenable = (name) => ({ then: (onfulfilled, _onrejected) => {
    issueWarning("request-update-promise", `The \`requestUpdate\` method should no longer return a Promise but does so on \`${name}\`. Use \`updateComplete\` instead.`), onfulfilled !== void 0 && onfulfilled(false);
  } });
}
var debugLogEvent = (event) => {
  !global2.emitLitDebugLogEvents || global2.dispatchEvent(new CustomEvent("lit-debug", { detail: event }));
}, JSCompiler_renameProperty = (prop, _obj) => prop, defaultConverter = { toAttribute(value, type) {
  switch (type) {
    case Boolean:
      value = value ? emptyStringForBooleanAttribute : null;
      break;
    case Object:
    case Array:
      value = value == null ? value : JSON.stringify(value);
      break;
  }
  return value;
}, fromAttribute(value, type) {
  let fromValue = value;
  switch (type) {
    case Boolean:
      fromValue = value !== null;
      break;
    case Number:
      fromValue = value === null ? null : Number(value);
      break;
    case Object:
    case Array:
      try {
        fromValue = JSON.parse(value);
      } catch (e) {
        fromValue = null;
      }
      break;
  }
  return fromValue;
} }, notEqual = (value, old) => old !== value && (old === old || value === value), defaultPropertyDeclaration = { attribute: true, type: String, converter: defaultConverter, reflect: false, hasChanged: notEqual }, finalized = "finalized", ReactiveElement = class extends HTMLElement {
  constructor() {
    super();
    this.__instanceProperties = new Map(), this.isUpdatePending = false, this.hasUpdated = false, this.__reflectingProperty = null, this.__initialize();
  }
  static addInitializer(initializer) {
    var _a5;
    this.finalize(), ((_a5 = this._initializers) !== null && _a5 !== void 0 ? _a5 : this._initializers = []).push(initializer);
  }
  static get observedAttributes() {
    this.finalize();
    let attributes = [];
    return this.elementProperties.forEach((v, p) => {
      let attr = this.__attributeNameForProperty(p, v);
      attr !== void 0 && (this.__attributeToPropertyMap.set(attr, p), attributes.push(attr));
    }), attributes;
  }
  static createProperty(name, options = defaultPropertyDeclaration) {
    var _a5;
    if (options.state && (options.attribute = false), this.finalize(), this.elementProperties.set(name, options), !options.noAccessor && !this.prototype.hasOwnProperty(name)) {
      let key = typeof name == "symbol" ? Symbol() : `__${name}`, descriptor = this.getPropertyDescriptor(name, key, options);
      descriptor !== void 0 && (Object.defineProperty(this.prototype, name, descriptor), this.hasOwnProperty("__reactivePropertyKeys") || (this.__reactivePropertyKeys = new Set((_a5 = this.__reactivePropertyKeys) !== null && _a5 !== void 0 ? _a5 : [])), this.__reactivePropertyKeys.add(name));
    }
  }
  static getPropertyDescriptor(name, key, options) {
    return { get() {
      return this[key];
    }, set(value) {
      let oldValue = this[name];
      this[key] = value, this.requestUpdate(name, oldValue, options);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(name) {
    return this.elementProperties.get(name) || defaultPropertyDeclaration;
  }
  static finalize() {
    if (this.hasOwnProperty(finalized))
      return false;
    this[finalized] = true;
    let superCtor = Object.getPrototypeOf(this);
    if (superCtor.finalize(), superCtor._initializers !== void 0 && (this._initializers = [...superCtor._initializers]), this.elementProperties = new Map(superCtor.elementProperties), this.__attributeToPropertyMap = new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties"))) {
      let props = this.properties, propKeys = [...Object.getOwnPropertyNames(props), ...Object.getOwnPropertySymbols(props)];
      for (let p of propKeys)
        this.createProperty(p, props[p]);
    }
    if (this.elementStyles = this.finalizeStyles(this.styles), DEV_MODE) {
      let warnRemovedOrRenamed = (name, renamed = false) => {
        this.prototype.hasOwnProperty(name) && issueWarning(renamed ? "renamed-api" : "removed-api", `\`${name}\` is implemented on class ${this.name}. It has been ${renamed ? "renamed" : "removed"} in this version of LitElement.`);
      };
      warnRemovedOrRenamed("initialize"), warnRemovedOrRenamed("requestUpdateInternal"), warnRemovedOrRenamed("_getUpdateComplete", true);
    }
    return true;
  }
  static finalizeStyles(styles) {
    let elementStyles = [];
    if (Array.isArray(styles)) {
      let set = new Set(styles.flat(1 / 0).reverse());
      for (let s of set)
        elementStyles.unshift(getCompatibleStyle(s));
    } else
      styles !== void 0 && elementStyles.push(getCompatibleStyle(styles));
    return elementStyles;
  }
  static __attributeNameForProperty(name, options) {
    let attribute = options.attribute;
    return attribute === false ? void 0 : typeof attribute == "string" ? attribute : typeof name == "string" ? name.toLowerCase() : void 0;
  }
  __initialize() {
    var _a5;
    this.__updatePromise = new Promise((res) => this.enableUpdating = res), this._$changedProperties = new Map(), this.__saveInstanceProperties(), this.requestUpdate(), (_a5 = this.constructor._initializers) === null || _a5 === void 0 || _a5.forEach((i) => i(this));
  }
  addController(controller) {
    var _a5, _b5;
    ((_a5 = this.__controllers) !== null && _a5 !== void 0 ? _a5 : this.__controllers = []).push(controller), this.renderRoot !== void 0 && this.isConnected && ((_b5 = controller.hostConnected) === null || _b5 === void 0 || _b5.call(controller));
  }
  removeController(controller) {
    var _a5;
    (_a5 = this.__controllers) === null || _a5 === void 0 || _a5.splice(this.__controllers.indexOf(controller) >>> 0, 1);
  }
  __saveInstanceProperties() {
    this.constructor.elementProperties.forEach((_v, p) => {
      this.hasOwnProperty(p) && (this.__instanceProperties.set(p, this[p]), delete this[p]);
    });
  }
  createRenderRoot() {
    var _a5;
    let renderRoot = (_a5 = this.shadowRoot) !== null && _a5 !== void 0 ? _a5 : this.attachShadow(this.constructor.shadowRootOptions);
    return adoptStyles(renderRoot, this.constructor.elementStyles), renderRoot;
  }
  connectedCallback() {
    var _a5;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (_a5 = this.__controllers) === null || _a5 === void 0 || _a5.forEach((c) => {
      var _a6;
      return (_a6 = c.hostConnected) === null || _a6 === void 0 ? void 0 : _a6.call(c);
    });
  }
  enableUpdating(_requestedUpdate) {
  }
  disconnectedCallback() {
    var _a5;
    (_a5 = this.__controllers) === null || _a5 === void 0 || _a5.forEach((c) => {
      var _a6;
      return (_a6 = c.hostDisconnected) === null || _a6 === void 0 ? void 0 : _a6.call(c);
    });
  }
  attributeChangedCallback(name, _old, value) {
    this._$attributeToProperty(name, value);
  }
  __propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
    var _a5;
    let attr = this.constructor.__attributeNameForProperty(name, options);
    if (attr !== void 0 && options.reflect === true) {
      let attrValue = (((_a5 = options.converter) === null || _a5 === void 0 ? void 0 : _a5.toAttribute) !== void 0 ? options.converter : defaultConverter).toAttribute(value, options.type);
      this.constructor.enabledWarnings.indexOf("migration") >= 0 && attrValue === void 0 && issueWarning("undefined-attribute-value", `The attribute value for the ${name} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`), this.__reflectingProperty = name, attrValue == null ? this.removeAttribute(attr) : this.setAttribute(attr, attrValue), this.__reflectingProperty = null;
    }
  }
  _$attributeToProperty(name, value) {
    var _a5;
    let ctor = this.constructor, propName = ctor.__attributeToPropertyMap.get(name);
    if (propName !== void 0 && this.__reflectingProperty !== propName) {
      let options = ctor.getPropertyOptions(propName), converter = typeof options.converter == "function" ? { fromAttribute: options.converter } : ((_a5 = options.converter) === null || _a5 === void 0 ? void 0 : _a5.fromAttribute) !== void 0 ? options.converter : defaultConverter;
      this.__reflectingProperty = propName, this[propName] = converter.fromAttribute(value, options.type), this.__reflectingProperty = null;
    }
  }
  requestUpdate(name, oldValue, options) {
    let shouldRequestUpdate = true;
    return name !== void 0 && (options = options || this.constructor.getPropertyOptions(name), (options.hasChanged || notEqual)(this[name], oldValue) ? (this._$changedProperties.has(name) || this._$changedProperties.set(name, oldValue), options.reflect === true && this.__reflectingProperty !== name && (this.__reflectingProperties === void 0 && (this.__reflectingProperties = new Map()), this.__reflectingProperties.set(name, options))) : shouldRequestUpdate = false), !this.isUpdatePending && shouldRequestUpdate && (this.__updatePromise = this.__enqueueUpdate()), requestUpdateThenable(this.localName);
  }
  async __enqueueUpdate() {
    this.isUpdatePending = true;
    try {
      await this.__updatePromise;
    } catch (e) {
      Promise.reject(e);
    }
    let result = this.scheduleUpdate();
    return result != null && await result, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var _a5, _b5;
    if (!this.isUpdatePending)
      return;
    if (debugLogEvent == null || debugLogEvent({ kind: "update" }), !this.hasUpdated && DEV_MODE) {
      let shadowedProperties = [];
      if ((_a5 = this.constructor.__reactivePropertyKeys) === null || _a5 === void 0 || _a5.forEach((p) => {
        var _a6;
        this.hasOwnProperty(p) && !((_a6 = this.__instanceProperties) === null || _a6 === void 0 ? void 0 : _a6.has(p)) && shadowedProperties.push(p);
      }), shadowedProperties.length)
        throw new Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${shadowedProperties.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`);
    }
    this.__instanceProperties && (this.__instanceProperties.forEach((v, p) => this[p] = v), this.__instanceProperties = void 0);
    let shouldUpdate = false, changedProperties = this._$changedProperties;
    try {
      shouldUpdate = this.shouldUpdate(changedProperties), shouldUpdate ? (this.willUpdate(changedProperties), (_b5 = this.__controllers) === null || _b5 === void 0 || _b5.forEach((c) => {
        var _a6;
        return (_a6 = c.hostUpdate) === null || _a6 === void 0 ? void 0 : _a6.call(c);
      }), this.update(changedProperties)) : this.__markUpdated();
    } catch (e) {
      throw shouldUpdate = false, this.__markUpdated(), e;
    }
    shouldUpdate && this._$didUpdate(changedProperties);
  }
  willUpdate(_changedProperties) {
  }
  _$didUpdate(changedProperties) {
    var _a5;
    (_a5 = this.__controllers) === null || _a5 === void 0 || _a5.forEach((c) => {
      var _a6;
      return (_a6 = c.hostUpdated) === null || _a6 === void 0 ? void 0 : _a6.call(c);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(changedProperties)), this.updated(changedProperties), this.isUpdatePending && this.constructor.enabledWarnings.indexOf("change-in-update") >= 0 && issueWarning("change-in-update", `Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`);
  }
  __markUpdated() {
    this._$changedProperties = new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this.__updatePromise;
  }
  shouldUpdate(_changedProperties) {
    return true;
  }
  update(_changedProperties) {
    this.__reflectingProperties !== void 0 && (this.__reflectingProperties.forEach((v, k) => this.__propertyToAttribute(k, this[k], v)), this.__reflectingProperties = void 0), this.__markUpdated();
  }
  updated(_changedProperties) {
  }
  firstUpdated(_changedProperties) {
  }
};
_e = finalized;
ReactiveElement[_e] = true;
ReactiveElement.elementProperties = new Map();
ReactiveElement.elementStyles = [];
ReactiveElement.shadowRootOptions = { mode: "open" };
polyfillSupport == null || polyfillSupport({ ReactiveElement });
{
  ReactiveElement.enabledWarnings = ["change-in-update"];
  let ensureOwnWarnings = function(ctor) {
    ctor.hasOwnProperty(JSCompiler_renameProperty("enabledWarnings")) || (ctor.enabledWarnings = ctor.enabledWarnings.slice());
  };
  ReactiveElement.enableWarning = function(warning) {
    ensureOwnWarnings(this), this.enabledWarnings.indexOf(warning) < 0 && this.enabledWarnings.push(warning);
  }, ReactiveElement.disableWarning = function(warning) {
    ensureOwnWarnings(this);
    let i = this.enabledWarnings.indexOf(warning);
    i >= 0 && this.enabledWarnings.splice(i, 1);
  };
}
((_d = global2.reactiveElementVersions) !== null && _d !== void 0 ? _d : global2.reactiveElementVersions = []).push("1.6.3");
global2.reactiveElementVersions.length > 1 && issueWarning("multiple-versions", "Multiple versions of Lit loaded. Loading multiple versions is not recommended.");
init_vite_shims();
var _a2, _b2, _c2, _d2, global3 = window, debugLogEvent2 = (event) => {
  !global3.emitLitDebugLogEvents || global3.dispatchEvent(new CustomEvent("lit-debug", { detail: event }));
}, issueWarning2;
(_a2 = global3.litIssuedWarnings) !== null && _a2 !== void 0 || (global3.litIssuedWarnings = new Set()), issueWarning2 = (code, warning) => {
  warning += code ? ` See https://lit.dev/msg/${code} for more information.` : "", global3.litIssuedWarnings.has(warning) || (console.warn(warning), global3.litIssuedWarnings.add(warning));
}, issueWarning2("dev-mode", "Lit is in dev mode. Not recommended for production!");
var wrap = ((_b2 = global3.ShadyDOM) === null || _b2 === void 0 ? void 0 : _b2.inUse) && ((_c2 = global3.ShadyDOM) === null || _c2 === void 0 ? void 0 : _c2.noPatch) === true ? global3.ShadyDOM.wrap : (node) => node, trustedTypes2 = global3.trustedTypes, policy = trustedTypes2 ? trustedTypes2.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, identityFunction = (value) => value, noopSanitizer = (_node, _name, _type) => identityFunction, createSanitizer = (node, name, type) => sanitizerFactoryInternal(), boundAttributeSuffix = "$lit$", marker = `lit$${String(Math.random()).slice(9)}$`, markerMatch = "?" + marker, nodeMarker = `<${markerMatch}>`, d = document, createMarker = () => d.createComment(""), isPrimitive = (value) => value === null || typeof value != "object" && typeof value != "function", isArray = Array.isArray, isIterable = (value) => isArray(value) || typeof (value == null ? void 0 : value[Symbol.iterator]) == "function", SPACE_CHAR = `[ 	
\f\r]`, ATTR_VALUE_CHAR = `[^ 	
\f\r"'\`<>=]`, NAME_CHAR = `[^\\s"'>=/]`, textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, COMMENT_START = 1, TAG_NAME = 2, DYNAMIC_TAG_NAME = 3, commentEndRegex = /-->/g, comment2EndRegex = />/g, tagEndRegex = new RegExp(`>|${SPACE_CHAR}(?:(${NAME_CHAR}+)(${SPACE_CHAR}*=${SPACE_CHAR}*(?:${ATTR_VALUE_CHAR}|("|')|))|$)`, "g"), ENTIRE_MATCH = 0, ATTRIBUTE_NAME = 1, SPACES_AND_EQUALS = 2, QUOTE_CHAR = 3, singleQuoteAttrEndRegex = /'/g, doubleQuoteAttrEndRegex = /"/g, rawTextElement = /^(?:script|style|textarea|title)$/i, SVG_RESULT = 2, ATTRIBUTE_PART = 1, CHILD_PART = 2, PROPERTY_PART = 3, BOOLEAN_ATTRIBUTE_PART = 4, EVENT_PART = 5, ELEMENT_PART = 6, COMMENT_PART = 7, noChange = Symbol.for("lit-noChange"), nothing = Symbol.for("lit-nothing"), templateCache = new WeakMap(), walker = d.createTreeWalker(d, 129, null, false), sanitizerFactoryInternal = noopSanitizer;
function trustFromTemplateString(tsa, stringFromTSA) {
  if (!Array.isArray(tsa) || !tsa.hasOwnProperty("raw")) {
    let message = "invalid template strings array";
    throw message = `
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g, `
`), new Error(message);
  }
  return policy !== void 0 ? policy.createHTML(stringFromTSA) : stringFromTSA;
}
var getTemplateHtml = (strings, type) => {
  let l = strings.length - 1, attrNames = [], html3 = type === SVG_RESULT ? "<svg>" : "", rawTextEndRegex, regex = textEndRegex;
  for (let i = 0; i < l; i++) {
    let s = strings[i], attrNameEndIndex = -1, attrName, lastIndex = 0, match;
    for (; lastIndex < s.length && (regex.lastIndex = lastIndex, match = regex.exec(s), match !== null); )
      if (lastIndex = regex.lastIndex, regex === textEndRegex) {
        if (match[COMMENT_START] === "!--")
          regex = commentEndRegex;
        else if (match[COMMENT_START] !== void 0)
          regex = comment2EndRegex;
        else if (match[TAG_NAME] !== void 0)
          rawTextElement.test(match[TAG_NAME]) && (rawTextEndRegex = new RegExp(`</${match[TAG_NAME]}`, "g")), regex = tagEndRegex;
        else if (match[DYNAMIC_TAG_NAME] !== void 0) {
          throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions");
        }
      } else
        regex === tagEndRegex ? match[ENTIRE_MATCH] === ">" ? (regex = rawTextEndRegex != null ? rawTextEndRegex : textEndRegex, attrNameEndIndex = -1) : match[ATTRIBUTE_NAME] === void 0 ? attrNameEndIndex = -2 : (attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length, attrName = match[ATTRIBUTE_NAME], regex = match[QUOTE_CHAR] === void 0 ? tagEndRegex : match[QUOTE_CHAR] === '"' ? doubleQuoteAttrEndRegex : singleQuoteAttrEndRegex) : regex === doubleQuoteAttrEndRegex || regex === singleQuoteAttrEndRegex ? regex = tagEndRegex : regex === commentEndRegex || regex === comment2EndRegex ? regex = textEndRegex : (regex = tagEndRegex, rawTextEndRegex = void 0);
    console.assert(attrNameEndIndex === -1 || regex === tagEndRegex || regex === singleQuoteAttrEndRegex || regex === doubleQuoteAttrEndRegex, "unexpected parse state B");
    let end = regex === tagEndRegex && strings[i + 1].startsWith("/>") ? " " : "";
    html3 += regex === textEndRegex ? s + nodeMarker : attrNameEndIndex >= 0 ? (attrNames.push(attrName), s.slice(0, attrNameEndIndex) + boundAttributeSuffix + s.slice(attrNameEndIndex) + marker + end) : s + marker + (attrNameEndIndex === -2 ? (attrNames.push(void 0), i) : end);
  }
  let htmlResult = html3 + (strings[l] || "<?>") + (type === SVG_RESULT ? "</svg>" : "");
  return [trustFromTemplateString(strings, htmlResult), attrNames];
}, Template = class {
  constructor({ strings, ["_$litType$"]: type }, options) {
    this.parts = [];
    let node, nodeIndex = 0, attrNameIndex = 0, partCount = strings.length - 1, parts = this.parts, [html3, attrNames] = getTemplateHtml(strings, type);
    if (this.el = Template.createElement(html3, options), walker.currentNode = this.el.content, type === SVG_RESULT) {
      let content = this.el.content, svgElement = content.firstChild;
      svgElement.remove(), content.append(...svgElement.childNodes);
    }
    for (; (node = walker.nextNode()) !== null && parts.length < partCount; ) {
      if (node.nodeType === 1) {
        {
          let tag3 = node.localName;
          if (/^(?:textarea|template)$/i.test(tag3) && node.innerHTML.includes(marker)) {
            let m = `Expressions are not supported inside \`${tag3}\` elements. See https://lit.dev/msg/expression-in-${tag3} for more information.`;
            if (tag3 === "template")
              throw new Error(m);
            issueWarning2("", m);
          }
        }
        if (node.hasAttributes()) {
          let attrsToRemove = [];
          for (let name of node.getAttributeNames())
            if (name.endsWith(boundAttributeSuffix) || name.startsWith(marker)) {
              let realName = attrNames[attrNameIndex++];
              if (attrsToRemove.push(name), realName !== void 0) {
                let statics = node.getAttribute(realName.toLowerCase() + boundAttributeSuffix).split(marker), m = /([.?@])?(.*)/.exec(realName);
                parts.push({ type: ATTRIBUTE_PART, index: nodeIndex, name: m[2], strings: statics, ctor: m[1] === "." ? PropertyPart : m[1] === "?" ? BooleanAttributePart : m[1] === "@" ? EventPart : AttributePart });
              } else
                parts.push({ type: ELEMENT_PART, index: nodeIndex });
            }
          for (let name of attrsToRemove)
            node.removeAttribute(name);
        }
        if (rawTextElement.test(node.tagName)) {
          let strings2 = node.textContent.split(marker), lastIndex = strings2.length - 1;
          if (lastIndex > 0) {
            node.textContent = trustedTypes2 ? trustedTypes2.emptyScript : "";
            for (let i = 0; i < lastIndex; i++)
              node.append(strings2[i], createMarker()), walker.nextNode(), parts.push({ type: CHILD_PART, index: ++nodeIndex });
            node.append(strings2[lastIndex], createMarker());
          }
        }
      } else if (node.nodeType === 8)
        if (node.data === markerMatch)
          parts.push({ type: CHILD_PART, index: nodeIndex });
        else {
          let i = -1;
          for (; (i = node.data.indexOf(marker, i + 1)) !== -1; )
            parts.push({ type: COMMENT_PART, index: nodeIndex }), i += marker.length - 1;
        }
      nodeIndex++;
    }
    debugLogEvent2 == null || debugLogEvent2({ kind: "template prep", template: this, clonableTemplate: this.el, parts: this.parts, strings });
  }
  static createElement(html3, _options) {
    let el = d.createElement("template");
    return el.innerHTML = html3, el;
  }
};
function resolveDirective(part, value, parent = part, attributeIndex) {
  var _a5, _b5, _c5, _d4;
  if (value === noChange)
    return value;
  let currentDirective = attributeIndex !== void 0 ? (_a5 = parent.__directives) === null || _a5 === void 0 ? void 0 : _a5[attributeIndex] : parent.__directive, nextDirectiveConstructor = isPrimitive(value) ? void 0 : value._$litDirective$;
  return (currentDirective == null ? void 0 : currentDirective.constructor) !== nextDirectiveConstructor && ((_b5 = currentDirective == null ? void 0 : currentDirective._$notifyDirectiveConnectionChanged) === null || _b5 === void 0 || _b5.call(currentDirective, false), nextDirectiveConstructor === void 0 ? currentDirective = void 0 : (currentDirective = new nextDirectiveConstructor(part), currentDirective._$initialize(part, parent, attributeIndex)), attributeIndex !== void 0 ? ((_c5 = (_d4 = parent).__directives) !== null && _c5 !== void 0 ? _c5 : _d4.__directives = [])[attributeIndex] = currentDirective : parent.__directive = currentDirective), currentDirective !== void 0 && (value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex)), value;
}
var TemplateInstance = class {
  constructor(template, parent) {
    this._$parts = [], this._$disconnectableChildren = void 0, this._$template = template, this._$parent = parent;
  }
  get parentNode() {
    return this._$parent.parentNode;
  }
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _clone(options) {
    var _a5;
    let { el: { content }, parts } = this._$template, fragment = ((_a5 = options == null ? void 0 : options.creationScope) !== null && _a5 !== void 0 ? _a5 : d).importNode(content, true);
    walker.currentNode = fragment;
    let node = walker.nextNode(), nodeIndex = 0, partIndex = 0, templatePart = parts[0];
    for (; templatePart !== void 0; ) {
      if (nodeIndex === templatePart.index) {
        let part;
        templatePart.type === CHILD_PART ? part = new ChildPart(node, node.nextSibling, this, options) : templatePart.type === ATTRIBUTE_PART ? part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options) : templatePart.type === ELEMENT_PART && (part = new ElementPart(node, this, options)), this._$parts.push(part), templatePart = parts[++partIndex];
      }
      nodeIndex !== (templatePart == null ? void 0 : templatePart.index) && (node = walker.nextNode(), nodeIndex++);
    }
    return walker.currentNode = d, fragment;
  }
  _update(values) {
    let i = 0;
    for (let part of this._$parts)
      part !== void 0 && (debugLogEvent2 == null || debugLogEvent2({ kind: "set part", part, value: values[i], valueIndex: i, values, templateInstance: this }), part.strings !== void 0 ? (part._$setValue(values, part, i), i += part.strings.length - 2) : part._$setValue(values[i])), i++;
  }
}, ChildPart = class {
  constructor(startNode, endNode, parent, options) {
    var _a5;
    this.type = CHILD_PART, this._$committedValue = nothing, this._$disconnectableChildren = void 0, this._$startNode = startNode, this._$endNode = endNode, this._$parent = parent, this.options = options, this.__isConnected = (_a5 = options == null ? void 0 : options.isConnected) !== null && _a5 !== void 0 ? _a5 : true, this._textSanitizer = void 0;
  }
  get _$isConnected() {
    var _a5, _b5;
    return (_b5 = (_a5 = this._$parent) === null || _a5 === void 0 ? void 0 : _a5._$isConnected) !== null && _b5 !== void 0 ? _b5 : this.__isConnected;
  }
  get parentNode() {
    let parentNode = wrap(this._$startNode).parentNode, parent = this._$parent;
    return parent !== void 0 && (parentNode == null ? void 0 : parentNode.nodeType) === 11 && (parentNode = parent.parentNode), parentNode;
  }
  get startNode() {
    return this._$startNode;
  }
  get endNode() {
    return this._$endNode;
  }
  _$setValue(value, directiveParent = this) {
    var _a5;
    if (this.parentNode === null)
      throw new Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");
    if (value = resolveDirective(this, value, directiveParent), isPrimitive(value))
      value === nothing || value == null || value === "" ? (this._$committedValue !== nothing && (debugLogEvent2 == null || debugLogEvent2({ kind: "commit nothing to child", start: this._$startNode, end: this._$endNode, parent: this._$parent, options: this.options }), this._$clear()), this._$committedValue = nothing) : value !== this._$committedValue && value !== noChange && this._commitText(value);
    else if (value._$litType$ !== void 0)
      this._commitTemplateResult(value);
    else if (value.nodeType !== void 0) {
      if (((_a5 = this.options) === null || _a5 === void 0 ? void 0 : _a5.host) === value) {
        this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"), console.warn("Attempted to render the template host", value, "inside itself. This is almost always a mistake, and in dev mode ", "we render some warning text. In production however, we'll ", "render it, which will usually result in an error, and sometimes ", "in the element disappearing from the DOM.");
        return;
      }
      this._commitNode(value);
    } else
      isIterable(value) ? this._commitIterable(value) : this._commitText(value);
  }
  _insert(node) {
    return wrap(wrap(this._$startNode).parentNode).insertBefore(node, this._$endNode);
  }
  _commitNode(value) {
    var _a5;
    if (this._$committedValue !== value) {
      if (this._$clear(), sanitizerFactoryInternal !== noopSanitizer) {
        let parentNodeName = (_a5 = this._$startNode.parentNode) === null || _a5 === void 0 ? void 0 : _a5.nodeName;
        if (parentNodeName === "STYLE" || parentNodeName === "SCRIPT") {
          let message = "Forbidden";
          throw parentNodeName === "STYLE" ? message = "Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and make do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets." : message = "Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.", new Error(message);
        }
      }
      debugLogEvent2 == null || debugLogEvent2({ kind: "commit node", start: this._$startNode, parent: this._$parent, value, options: this.options }), this._$committedValue = this._insert(value);
    }
  }
  _commitText(value) {
    if (this._$committedValue !== nothing && isPrimitive(this._$committedValue)) {
      let node = wrap(this._$startNode).nextSibling;
      this._textSanitizer === void 0 && (this._textSanitizer = createSanitizer()), value = this._textSanitizer(value), debugLogEvent2 == null || debugLogEvent2({ kind: "commit text", node, value, options: this.options }), node.data = value;
    } else {
      let textNode = d.createTextNode("");
      this._commitNode(textNode), this._textSanitizer === void 0 && (this._textSanitizer = createSanitizer()), value = this._textSanitizer(value), debugLogEvent2 == null || debugLogEvent2({ kind: "commit text", node: textNode, value, options: this.options }), textNode.data = value;
    }
    this._$committedValue = value;
  }
  _commitTemplateResult(result) {
    var _a5;
    let { values, ["_$litType$"]: type } = result, template = typeof type == "number" ? this._$getTemplate(result) : (type.el === void 0 && (type.el = Template.createElement(trustFromTemplateString(type.h, type.h[0]), this.options)), type);
    if (((_a5 = this._$committedValue) === null || _a5 === void 0 ? void 0 : _a5._$template) === template)
      debugLogEvent2 == null || debugLogEvent2({ kind: "template updating", template, instance: this._$committedValue, parts: this._$committedValue._$parts, options: this.options, values }), this._$committedValue._update(values);
    else {
      let instance = new TemplateInstance(template, this), fragment = instance._clone(this.options);
      debugLogEvent2 == null || debugLogEvent2({ kind: "template instantiated", template, instance, parts: instance._$parts, options: this.options, fragment, values }), instance._update(values), debugLogEvent2 == null || debugLogEvent2({ kind: "template instantiated and updated", template, instance, parts: instance._$parts, options: this.options, fragment, values }), this._commitNode(fragment), this._$committedValue = instance;
    }
  }
  _$getTemplate(result) {
    let template = templateCache.get(result.strings);
    return template === void 0 && templateCache.set(result.strings, template = new Template(result)), template;
  }
  _commitIterable(value) {
    isArray(this._$committedValue) || (this._$committedValue = [], this._$clear());
    let itemParts = this._$committedValue, partIndex = 0, itemPart;
    for (let item of value)
      partIndex === itemParts.length ? itemParts.push(itemPart = new ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options)) : itemPart = itemParts[partIndex], itemPart._$setValue(item), partIndex++;
    partIndex < itemParts.length && (this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex), itemParts.length = partIndex);
  }
  _$clear(start = wrap(this._$startNode).nextSibling, from) {
    var _a5;
    for ((_a5 = this._$notifyConnectionChanged) === null || _a5 === void 0 || _a5.call(this, false, true, from); start && start !== this._$endNode; ) {
      let n = wrap(start).nextSibling;
      wrap(start).remove(), start = n;
    }
  }
  setConnected(isConnected) {
    var _a5;
    if (this._$parent === void 0)
      this.__isConnected = isConnected, (_a5 = this._$notifyConnectionChanged) === null || _a5 === void 0 || _a5.call(this, isConnected);
    else
      throw new Error("part.setConnected() may only be called on a RootPart returned from render().");
  }
}, AttributePart = class {
  constructor(element, name, strings, parent, options) {
    this.type = ATTRIBUTE_PART, this._$committedValue = nothing, this._$disconnectableChildren = void 0, this.element = element, this.name = name, this._$parent = parent, this.options = options, strings.length > 2 || strings[0] !== "" || strings[1] !== "" ? (this._$committedValue = new Array(strings.length - 1).fill(new String()), this.strings = strings) : this._$committedValue = nothing, this._sanitizer = void 0;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _$setValue(value, directiveParent = this, valueIndex, noCommit) {
    let strings = this.strings, change = false;
    if (strings === void 0)
      value = resolveDirective(this, value, directiveParent, 0), change = !isPrimitive(value) || value !== this._$committedValue && value !== noChange, change && (this._$committedValue = value);
    else {
      let values = value;
      value = strings[0];
      let i, v;
      for (i = 0; i < strings.length - 1; i++)
        v = resolveDirective(this, values[valueIndex + i], directiveParent, i), v === noChange && (v = this._$committedValue[i]), change || (change = !isPrimitive(v) || v !== this._$committedValue[i]), v === nothing ? value = nothing : value !== nothing && (value += (v != null ? v : "") + strings[i + 1]), this._$committedValue[i] = v;
    }
    change && !noCommit && this._commitValue(value);
  }
  _commitValue(value) {
    value === nothing ? wrap(this.element).removeAttribute(this.name) : (this._sanitizer === void 0 && (this._sanitizer = sanitizerFactoryInternal(this.element, this.name)), value = this._sanitizer(value != null ? value : ""), debugLogEvent2 == null || debugLogEvent2({ kind: "commit attribute", element: this.element, name: this.name, value, options: this.options }), wrap(this.element).setAttribute(this.name, value != null ? value : ""));
  }
}, PropertyPart = class extends AttributePart {
  constructor() {
    super(...arguments);
    this.type = PROPERTY_PART;
  }
  _commitValue(value) {
    this._sanitizer === void 0 && (this._sanitizer = sanitizerFactoryInternal(this.element, this.name)), value = this._sanitizer(value), debugLogEvent2 == null || debugLogEvent2({ kind: "commit property", element: this.element, name: this.name, value, options: this.options }), this.element[this.name] = value === nothing ? void 0 : value;
  }
}, emptyStringForBooleanAttribute2 = trustedTypes2 ? trustedTypes2.emptyScript : "", BooleanAttributePart = class extends AttributePart {
  constructor() {
    super(...arguments);
    this.type = BOOLEAN_ATTRIBUTE_PART;
  }
  _commitValue(value) {
    debugLogEvent2 == null || debugLogEvent2({ kind: "commit boolean attribute", element: this.element, name: this.name, value: !!(value && value !== nothing), options: this.options }), value && value !== nothing ? wrap(this.element).setAttribute(this.name, emptyStringForBooleanAttribute2) : wrap(this.element).removeAttribute(this.name);
  }
}, EventPart = class extends AttributePart {
  constructor(element, name, strings, parent, options) {
    super(element, name, strings, parent, options);
    if (this.type = EVENT_PART, this.strings !== void 0)
      throw new Error(`A \`<${element.localName}>\` has a \`@${name}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`);
  }
  _$setValue(newListener, directiveParent = this) {
    var _a5;
    if (newListener = (_a5 = resolveDirective(this, newListener, directiveParent, 0)) !== null && _a5 !== void 0 ? _a5 : nothing, newListener === noChange)
      return;
    let oldListener = this._$committedValue, shouldRemoveListener = newListener === nothing && oldListener !== nothing || newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive, shouldAddListener = newListener !== nothing && (oldListener === nothing || shouldRemoveListener);
    debugLogEvent2 == null || debugLogEvent2({ kind: "commit event listener", element: this.element, name: this.name, value: newListener, options: this.options, removeListener: shouldRemoveListener, addListener: shouldAddListener, oldListener }), shouldRemoveListener && this.element.removeEventListener(this.name, this, oldListener), shouldAddListener && this.element.addEventListener(this.name, this, newListener), this._$committedValue = newListener;
  }
  handleEvent(event) {
    var _a5, _b5;
    typeof this._$committedValue == "function" ? this._$committedValue.call((_b5 = (_a5 = this.options) === null || _a5 === void 0 ? void 0 : _a5.host) !== null && _b5 !== void 0 ? _b5 : this.element, event) : this._$committedValue.handleEvent(event);
  }
}, ElementPart = class {
  constructor(element, parent, options) {
    this.element = element, this.type = ELEMENT_PART, this._$disconnectableChildren = void 0, this._$parent = parent, this.options = options;
  }
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _$setValue(value) {
    debugLogEvent2 == null || debugLogEvent2({ kind: "commit to element binding", element: this.element, value, options: this.options }), resolveDirective(this, value);
  }
};
var polyfillSupport2 = global3.litHtmlPolyfillSupportDevMode;
polyfillSupport2 == null || polyfillSupport2(Template, ChildPart);
((_d2 = global3.litHtmlVersions) !== null && _d2 !== void 0 ? _d2 : global3.litHtmlVersions = []).push("2.8.0");
global3.litHtmlVersions.length > 1 && issueWarning2("multiple-versions", "Multiple versions of Lit loaded. Loading multiple versions is not recommended.");
init_vite_shims();
init_vite_shims();
var _a3, _b3, _c3, _d3, global4 = window, debugLogEvent3 = (event) => {
  !global4.emitLitDebugLogEvents || global4.dispatchEvent(new CustomEvent("lit-debug", { detail: event }));
}, debugLogRenderId2 = 0, issueWarning3;
(_a3 = global4.litIssuedWarnings) !== null && _a3 !== void 0 || (global4.litIssuedWarnings = new Set()), issueWarning3 = (code, warning) => {
  warning += code ? ` See https://lit.dev/msg/${code} for more information.` : "", global4.litIssuedWarnings.has(warning) || (console.warn(warning), global4.litIssuedWarnings.add(warning));
}, issueWarning3("dev-mode", "Lit is in dev mode. Not recommended for production!");
var wrap2 = ((_b3 = global4.ShadyDOM) === null || _b3 === void 0 ? void 0 : _b3.inUse) && ((_c3 = global4.ShadyDOM) === null || _c3 === void 0 ? void 0 : _c3.noPatch) === true ? global4.ShadyDOM.wrap : (node) => node, trustedTypes3 = global4.trustedTypes, policy2 = trustedTypes3 ? trustedTypes3.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, identityFunction2 = (value) => value, noopSanitizer2 = (_node, _name, _type) => identityFunction2, setSanitizer2 = (newSanitizer) => {
  {
    if (sanitizerFactoryInternal2 !== noopSanitizer2)
      throw new Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");
    sanitizerFactoryInternal2 = newSanitizer;
  }
}, _testOnlyClearSanitizerFactoryDoNotCallOrElse2 = () => {
  sanitizerFactoryInternal2 = noopSanitizer2;
}, createSanitizer2 = (node, name, type) => sanitizerFactoryInternal2(node, name, type), boundAttributeSuffix2 = "$lit$", marker2 = `lit$${String(Math.random()).slice(9)}$`, markerMatch2 = "?" + marker2, nodeMarker2 = `<${markerMatch2}>`, d2 = document, createMarker2 = () => d2.createComment(""), isPrimitive2 = (value) => value === null || typeof value != "object" && typeof value != "function", isArray2 = Array.isArray, isIterable2 = (value) => isArray2(value) || typeof (value == null ? void 0 : value[Symbol.iterator]) == "function", SPACE_CHAR2 = `[ 	
\f\r]`, ATTR_VALUE_CHAR2 = `[^ 	
\f\r"'\`<>=]`, NAME_CHAR2 = `[^\\s"'>=/]`, textEndRegex2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, COMMENT_START2 = 1, TAG_NAME2 = 2, DYNAMIC_TAG_NAME2 = 3, commentEndRegex2 = /-->/g, comment2EndRegex2 = />/g, tagEndRegex2 = new RegExp(`>|${SPACE_CHAR2}(?:(${NAME_CHAR2}+)(${SPACE_CHAR2}*=${SPACE_CHAR2}*(?:${ATTR_VALUE_CHAR2}|("|')|))|$)`, "g"), ENTIRE_MATCH2 = 0, ATTRIBUTE_NAME2 = 1, SPACES_AND_EQUALS2 = 2, QUOTE_CHAR2 = 3, singleQuoteAttrEndRegex2 = /'/g, doubleQuoteAttrEndRegex2 = /"/g, rawTextElement2 = /^(?:script|style|textarea|title)$/i, HTML_RESULT2 = 1, SVG_RESULT2 = 2, ATTRIBUTE_PART2 = 1, CHILD_PART2 = 2, PROPERTY_PART2 = 3, BOOLEAN_ATTRIBUTE_PART2 = 4, EVENT_PART2 = 5, ELEMENT_PART2 = 6, COMMENT_PART2 = 7, tag2 = (type) => (strings, ...values) => (strings.some((s) => s === void 0) && console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`), { _$litType$: type, strings, values }), html2 = tag2(HTML_RESULT2), svg2 = tag2(SVG_RESULT2), noChange2 = Symbol.for("lit-noChange"), nothing2 = Symbol.for("lit-nothing"), templateCache2 = new WeakMap(), walker2 = d2.createTreeWalker(d2, 129, null, false), sanitizerFactoryInternal2 = noopSanitizer2;
function trustFromTemplateString2(tsa, stringFromTSA) {
  if (!Array.isArray(tsa) || !tsa.hasOwnProperty("raw")) {
    let message = "invalid template strings array";
    throw message = `
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g, `
`), new Error(message);
  }
  return policy2 !== void 0 ? policy2.createHTML(stringFromTSA) : stringFromTSA;
}
var getTemplateHtml2 = (strings, type) => {
  let l = strings.length - 1, attrNames = [], html3 = type === SVG_RESULT2 ? "<svg>" : "", rawTextEndRegex, regex = textEndRegex2;
  for (let i = 0; i < l; i++) {
    let s = strings[i], attrNameEndIndex = -1, attrName, lastIndex = 0, match;
    for (; lastIndex < s.length && (regex.lastIndex = lastIndex, match = regex.exec(s), match !== null); )
      if (lastIndex = regex.lastIndex, regex === textEndRegex2) {
        if (match[COMMENT_START2] === "!--")
          regex = commentEndRegex2;
        else if (match[COMMENT_START2] !== void 0)
          regex = comment2EndRegex2;
        else if (match[TAG_NAME2] !== void 0)
          rawTextElement2.test(match[TAG_NAME2]) && (rawTextEndRegex = new RegExp(`</${match[TAG_NAME2]}`, "g")), regex = tagEndRegex2;
        else if (match[DYNAMIC_TAG_NAME2] !== void 0) {
          throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions");
        }
      } else
        regex === tagEndRegex2 ? match[ENTIRE_MATCH2] === ">" ? (regex = rawTextEndRegex != null ? rawTextEndRegex : textEndRegex2, attrNameEndIndex = -1) : match[ATTRIBUTE_NAME2] === void 0 ? attrNameEndIndex = -2 : (attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS2].length, attrName = match[ATTRIBUTE_NAME2], regex = match[QUOTE_CHAR2] === void 0 ? tagEndRegex2 : match[QUOTE_CHAR2] === '"' ? doubleQuoteAttrEndRegex2 : singleQuoteAttrEndRegex2) : regex === doubleQuoteAttrEndRegex2 || regex === singleQuoteAttrEndRegex2 ? regex = tagEndRegex2 : regex === commentEndRegex2 || regex === comment2EndRegex2 ? regex = textEndRegex2 : (regex = tagEndRegex2, rawTextEndRegex = void 0);
    console.assert(attrNameEndIndex === -1 || regex === tagEndRegex2 || regex === singleQuoteAttrEndRegex2 || regex === doubleQuoteAttrEndRegex2, "unexpected parse state B");
    let end = regex === tagEndRegex2 && strings[i + 1].startsWith("/>") ? " " : "";
    html3 += regex === textEndRegex2 ? s + nodeMarker2 : attrNameEndIndex >= 0 ? (attrNames.push(attrName), s.slice(0, attrNameEndIndex) + boundAttributeSuffix2 + s.slice(attrNameEndIndex) + marker2 + end) : s + marker2 + (attrNameEndIndex === -2 ? (attrNames.push(void 0), i) : end);
  }
  let htmlResult = html3 + (strings[l] || "<?>") + (type === SVG_RESULT2 ? "</svg>" : "");
  return [trustFromTemplateString2(strings, htmlResult), attrNames];
}, Template2 = class {
  constructor({ strings, ["_$litType$"]: type }, options) {
    this.parts = [];
    let node, nodeIndex = 0, attrNameIndex = 0, partCount = strings.length - 1, parts = this.parts, [html3, attrNames] = getTemplateHtml2(strings, type);
    if (this.el = Template2.createElement(html3, options), walker2.currentNode = this.el.content, type === SVG_RESULT2) {
      let content = this.el.content, svgElement = content.firstChild;
      svgElement.remove(), content.append(...svgElement.childNodes);
    }
    for (; (node = walker2.nextNode()) !== null && parts.length < partCount; ) {
      if (node.nodeType === 1) {
        {
          let tag3 = node.localName;
          if (/^(?:textarea|template)$/i.test(tag3) && node.innerHTML.includes(marker2)) {
            let m = `Expressions are not supported inside \`${tag3}\` elements. See https://lit.dev/msg/expression-in-${tag3} for more information.`;
            if (tag3 === "template")
              throw new Error(m);
            issueWarning3("", m);
          }
        }
        if (node.hasAttributes()) {
          let attrsToRemove = [];
          for (let name of node.getAttributeNames())
            if (name.endsWith(boundAttributeSuffix2) || name.startsWith(marker2)) {
              let realName = attrNames[attrNameIndex++];
              if (attrsToRemove.push(name), realName !== void 0) {
                let statics = node.getAttribute(realName.toLowerCase() + boundAttributeSuffix2).split(marker2), m = /([.?@])?(.*)/.exec(realName);
                parts.push({ type: ATTRIBUTE_PART2, index: nodeIndex, name: m[2], strings: statics, ctor: m[1] === "." ? PropertyPart2 : m[1] === "?" ? BooleanAttributePart2 : m[1] === "@" ? EventPart2 : AttributePart2 });
              } else
                parts.push({ type: ELEMENT_PART2, index: nodeIndex });
            }
          for (let name of attrsToRemove)
            node.removeAttribute(name);
        }
        if (rawTextElement2.test(node.tagName)) {
          let strings2 = node.textContent.split(marker2), lastIndex = strings2.length - 1;
          if (lastIndex > 0) {
            node.textContent = trustedTypes3 ? trustedTypes3.emptyScript : "";
            for (let i = 0; i < lastIndex; i++)
              node.append(strings2[i], createMarker2()), walker2.nextNode(), parts.push({ type: CHILD_PART2, index: ++nodeIndex });
            node.append(strings2[lastIndex], createMarker2());
          }
        }
      } else if (node.nodeType === 8)
        if (node.data === markerMatch2)
          parts.push({ type: CHILD_PART2, index: nodeIndex });
        else {
          let i = -1;
          for (; (i = node.data.indexOf(marker2, i + 1)) !== -1; )
            parts.push({ type: COMMENT_PART2, index: nodeIndex }), i += marker2.length - 1;
        }
      nodeIndex++;
    }
    debugLogEvent3 == null || debugLogEvent3({ kind: "template prep", template: this, clonableTemplate: this.el, parts: this.parts, strings });
  }
  static createElement(html3, _options) {
    let el = d2.createElement("template");
    return el.innerHTML = html3, el;
  }
};
function resolveDirective2(part, value, parent = part, attributeIndex) {
  var _a5, _b5, _c5, _d4;
  if (value === noChange2)
    return value;
  let currentDirective = attributeIndex !== void 0 ? (_a5 = parent.__directives) === null || _a5 === void 0 ? void 0 : _a5[attributeIndex] : parent.__directive, nextDirectiveConstructor = isPrimitive2(value) ? void 0 : value._$litDirective$;
  return (currentDirective == null ? void 0 : currentDirective.constructor) !== nextDirectiveConstructor && ((_b5 = currentDirective == null ? void 0 : currentDirective._$notifyDirectiveConnectionChanged) === null || _b5 === void 0 || _b5.call(currentDirective, false), nextDirectiveConstructor === void 0 ? currentDirective = void 0 : (currentDirective = new nextDirectiveConstructor(part), currentDirective._$initialize(part, parent, attributeIndex)), attributeIndex !== void 0 ? ((_c5 = (_d4 = parent).__directives) !== null && _c5 !== void 0 ? _c5 : _d4.__directives = [])[attributeIndex] = currentDirective : parent.__directive = currentDirective), currentDirective !== void 0 && (value = resolveDirective2(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex)), value;
}
var TemplateInstance2 = class {
  constructor(template, parent) {
    this._$parts = [], this._$disconnectableChildren = void 0, this._$template = template, this._$parent = parent;
  }
  get parentNode() {
    return this._$parent.parentNode;
  }
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _clone(options) {
    var _a5;
    let { el: { content }, parts } = this._$template, fragment = ((_a5 = options == null ? void 0 : options.creationScope) !== null && _a5 !== void 0 ? _a5 : d2).importNode(content, true);
    walker2.currentNode = fragment;
    let node = walker2.nextNode(), nodeIndex = 0, partIndex = 0, templatePart = parts[0];
    for (; templatePart !== void 0; ) {
      if (nodeIndex === templatePart.index) {
        let part;
        templatePart.type === CHILD_PART2 ? part = new ChildPart2(node, node.nextSibling, this, options) : templatePart.type === ATTRIBUTE_PART2 ? part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options) : templatePart.type === ELEMENT_PART2 && (part = new ElementPart2(node, this, options)), this._$parts.push(part), templatePart = parts[++partIndex];
      }
      nodeIndex !== (templatePart == null ? void 0 : templatePart.index) && (node = walker2.nextNode(), nodeIndex++);
    }
    return walker2.currentNode = d2, fragment;
  }
  _update(values) {
    let i = 0;
    for (let part of this._$parts)
      part !== void 0 && (debugLogEvent3 == null || debugLogEvent3({ kind: "set part", part, value: values[i], valueIndex: i, values, templateInstance: this }), part.strings !== void 0 ? (part._$setValue(values, part, i), i += part.strings.length - 2) : part._$setValue(values[i])), i++;
  }
}, ChildPart2 = class {
  constructor(startNode, endNode, parent, options) {
    var _a5;
    this.type = CHILD_PART2, this._$committedValue = nothing2, this._$disconnectableChildren = void 0, this._$startNode = startNode, this._$endNode = endNode, this._$parent = parent, this.options = options, this.__isConnected = (_a5 = options == null ? void 0 : options.isConnected) !== null && _a5 !== void 0 ? _a5 : true, this._textSanitizer = void 0;
  }
  get _$isConnected() {
    var _a5, _b5;
    return (_b5 = (_a5 = this._$parent) === null || _a5 === void 0 ? void 0 : _a5._$isConnected) !== null && _b5 !== void 0 ? _b5 : this.__isConnected;
  }
  get parentNode() {
    let parentNode = wrap2(this._$startNode).parentNode, parent = this._$parent;
    return parent !== void 0 && (parentNode == null ? void 0 : parentNode.nodeType) === 11 && (parentNode = parent.parentNode), parentNode;
  }
  get startNode() {
    return this._$startNode;
  }
  get endNode() {
    return this._$endNode;
  }
  _$setValue(value, directiveParent = this) {
    var _a5;
    if (this.parentNode === null)
      throw new Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");
    if (value = resolveDirective2(this, value, directiveParent), isPrimitive2(value))
      value === nothing2 || value == null || value === "" ? (this._$committedValue !== nothing2 && (debugLogEvent3 == null || debugLogEvent3({ kind: "commit nothing to child", start: this._$startNode, end: this._$endNode, parent: this._$parent, options: this.options }), this._$clear()), this._$committedValue = nothing2) : value !== this._$committedValue && value !== noChange2 && this._commitText(value);
    else if (value._$litType$ !== void 0)
      this._commitTemplateResult(value);
    else if (value.nodeType !== void 0) {
      if (((_a5 = this.options) === null || _a5 === void 0 ? void 0 : _a5.host) === value) {
        this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"), console.warn("Attempted to render the template host", value, "inside itself. This is almost always a mistake, and in dev mode ", "we render some warning text. In production however, we'll ", "render it, which will usually result in an error, and sometimes ", "in the element disappearing from the DOM.");
        return;
      }
      this._commitNode(value);
    } else
      isIterable2(value) ? this._commitIterable(value) : this._commitText(value);
  }
  _insert(node) {
    return wrap2(wrap2(this._$startNode).parentNode).insertBefore(node, this._$endNode);
  }
  _commitNode(value) {
    var _a5;
    if (this._$committedValue !== value) {
      if (this._$clear(), sanitizerFactoryInternal2 !== noopSanitizer2) {
        let parentNodeName = (_a5 = this._$startNode.parentNode) === null || _a5 === void 0 ? void 0 : _a5.nodeName;
        if (parentNodeName === "STYLE" || parentNodeName === "SCRIPT") {
          let message = "Forbidden";
          throw parentNodeName === "STYLE" ? message = "Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and make do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets." : message = "Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.", new Error(message);
        }
      }
      debugLogEvent3 == null || debugLogEvent3({ kind: "commit node", start: this._$startNode, parent: this._$parent, value, options: this.options }), this._$committedValue = this._insert(value);
    }
  }
  _commitText(value) {
    if (this._$committedValue !== nothing2 && isPrimitive2(this._$committedValue)) {
      let node = wrap2(this._$startNode).nextSibling;
      this._textSanitizer === void 0 && (this._textSanitizer = createSanitizer2(node, "data", "property")), value = this._textSanitizer(value), debugLogEvent3 == null || debugLogEvent3({ kind: "commit text", node, value, options: this.options }), node.data = value;
    } else {
      let textNode = d2.createTextNode("");
      this._commitNode(textNode), this._textSanitizer === void 0 && (this._textSanitizer = createSanitizer2(textNode, "data", "property")), value = this._textSanitizer(value), debugLogEvent3 == null || debugLogEvent3({ kind: "commit text", node: textNode, value, options: this.options }), textNode.data = value;
    }
    this._$committedValue = value;
  }
  _commitTemplateResult(result) {
    var _a5;
    let { values, ["_$litType$"]: type } = result, template = typeof type == "number" ? this._$getTemplate(result) : (type.el === void 0 && (type.el = Template2.createElement(trustFromTemplateString2(type.h, type.h[0]), this.options)), type);
    if (((_a5 = this._$committedValue) === null || _a5 === void 0 ? void 0 : _a5._$template) === template)
      debugLogEvent3 == null || debugLogEvent3({ kind: "template updating", template, instance: this._$committedValue, parts: this._$committedValue._$parts, options: this.options, values }), this._$committedValue._update(values);
    else {
      let instance = new TemplateInstance2(template, this), fragment = instance._clone(this.options);
      debugLogEvent3 == null || debugLogEvent3({ kind: "template instantiated", template, instance, parts: instance._$parts, options: this.options, fragment, values }), instance._update(values), debugLogEvent3 == null || debugLogEvent3({ kind: "template instantiated and updated", template, instance, parts: instance._$parts, options: this.options, fragment, values }), this._commitNode(fragment), this._$committedValue = instance;
    }
  }
  _$getTemplate(result) {
    let template = templateCache2.get(result.strings);
    return template === void 0 && templateCache2.set(result.strings, template = new Template2(result)), template;
  }
  _commitIterable(value) {
    isArray2(this._$committedValue) || (this._$committedValue = [], this._$clear());
    let itemParts = this._$committedValue, partIndex = 0, itemPart;
    for (let item of value)
      partIndex === itemParts.length ? itemParts.push(itemPart = new ChildPart2(this._insert(createMarker2()), this._insert(createMarker2()), this, this.options)) : itemPart = itemParts[partIndex], itemPart._$setValue(item), partIndex++;
    partIndex < itemParts.length && (this._$clear(itemPart && wrap2(itemPart._$endNode).nextSibling, partIndex), itemParts.length = partIndex);
  }
  _$clear(start = wrap2(this._$startNode).nextSibling, from) {
    var _a5;
    for ((_a5 = this._$notifyConnectionChanged) === null || _a5 === void 0 || _a5.call(this, false, true, from); start && start !== this._$endNode; ) {
      let n = wrap2(start).nextSibling;
      wrap2(start).remove(), start = n;
    }
  }
  setConnected(isConnected) {
    var _a5;
    if (this._$parent === void 0)
      this.__isConnected = isConnected, (_a5 = this._$notifyConnectionChanged) === null || _a5 === void 0 || _a5.call(this, isConnected);
    else
      throw new Error("part.setConnected() may only be called on a RootPart returned from render().");
  }
}, AttributePart2 = class {
  constructor(element, name, strings, parent, options) {
    this.type = ATTRIBUTE_PART2, this._$committedValue = nothing2, this._$disconnectableChildren = void 0, this.element = element, this.name = name, this._$parent = parent, this.options = options, strings.length > 2 || strings[0] !== "" || strings[1] !== "" ? (this._$committedValue = new Array(strings.length - 1).fill(new String()), this.strings = strings) : this._$committedValue = nothing2, this._sanitizer = void 0;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _$setValue(value, directiveParent = this, valueIndex, noCommit) {
    let strings = this.strings, change = false;
    if (strings === void 0)
      value = resolveDirective2(this, value, directiveParent, 0), change = !isPrimitive2(value) || value !== this._$committedValue && value !== noChange2, change && (this._$committedValue = value);
    else {
      let values = value;
      value = strings[0];
      let i, v;
      for (i = 0; i < strings.length - 1; i++)
        v = resolveDirective2(this, values[valueIndex + i], directiveParent, i), v === noChange2 && (v = this._$committedValue[i]), change || (change = !isPrimitive2(v) || v !== this._$committedValue[i]), v === nothing2 ? value = nothing2 : value !== nothing2 && (value += (v != null ? v : "") + strings[i + 1]), this._$committedValue[i] = v;
    }
    change && !noCommit && this._commitValue(value);
  }
  _commitValue(value) {
    value === nothing2 ? wrap2(this.element).removeAttribute(this.name) : (this._sanitizer === void 0 && (this._sanitizer = sanitizerFactoryInternal2(this.element, this.name, "attribute")), value = this._sanitizer(value != null ? value : ""), debugLogEvent3 == null || debugLogEvent3({ kind: "commit attribute", element: this.element, name: this.name, value, options: this.options }), wrap2(this.element).setAttribute(this.name, value != null ? value : ""));
  }
}, PropertyPart2 = class extends AttributePart2 {
  constructor() {
    super(...arguments);
    this.type = PROPERTY_PART2;
  }
  _commitValue(value) {
    this._sanitizer === void 0 && (this._sanitizer = sanitizerFactoryInternal2(this.element, this.name, "property")), value = this._sanitizer(value), debugLogEvent3 == null || debugLogEvent3({ kind: "commit property", element: this.element, name: this.name, value, options: this.options }), this.element[this.name] = value === nothing2 ? void 0 : value;
  }
}, emptyStringForBooleanAttribute3 = trustedTypes3 ? trustedTypes3.emptyScript : "", BooleanAttributePart2 = class extends AttributePart2 {
  constructor() {
    super(...arguments);
    this.type = BOOLEAN_ATTRIBUTE_PART2;
  }
  _commitValue(value) {
    debugLogEvent3 == null || debugLogEvent3({ kind: "commit boolean attribute", element: this.element, name: this.name, value: !!(value && value !== nothing2), options: this.options }), value && value !== nothing2 ? wrap2(this.element).setAttribute(this.name, emptyStringForBooleanAttribute3) : wrap2(this.element).removeAttribute(this.name);
  }
}, EventPart2 = class extends AttributePart2 {
  constructor(element, name, strings, parent, options) {
    super(element, name, strings, parent, options);
    if (this.type = EVENT_PART2, this.strings !== void 0)
      throw new Error(`A \`<${element.localName}>\` has a \`@${name}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`);
  }
  _$setValue(newListener, directiveParent = this) {
    var _a5;
    if (newListener = (_a5 = resolveDirective2(this, newListener, directiveParent, 0)) !== null && _a5 !== void 0 ? _a5 : nothing2, newListener === noChange2)
      return;
    let oldListener = this._$committedValue, shouldRemoveListener = newListener === nothing2 && oldListener !== nothing2 || newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive, shouldAddListener = newListener !== nothing2 && (oldListener === nothing2 || shouldRemoveListener);
    debugLogEvent3 == null || debugLogEvent3({ kind: "commit event listener", element: this.element, name: this.name, value: newListener, options: this.options, removeListener: shouldRemoveListener, addListener: shouldAddListener, oldListener }), shouldRemoveListener && this.element.removeEventListener(this.name, this, oldListener), shouldAddListener && this.element.addEventListener(this.name, this, newListener), this._$committedValue = newListener;
  }
  handleEvent(event) {
    var _a5, _b5;
    typeof this._$committedValue == "function" ? this._$committedValue.call((_b5 = (_a5 = this.options) === null || _a5 === void 0 ? void 0 : _a5.host) !== null && _b5 !== void 0 ? _b5 : this.element, event) : this._$committedValue.handleEvent(event);
  }
}, ElementPart2 = class {
  constructor(element, parent, options) {
    this.element = element, this.type = ELEMENT_PART2, this._$disconnectableChildren = void 0, this._$parent = parent, this.options = options;
  }
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _$setValue(value) {
    debugLogEvent3 == null || debugLogEvent3({ kind: "commit to element binding", element: this.element, value, options: this.options }), resolveDirective2(this, value);
  }
}, _$LH = { _boundAttributeSuffix: boundAttributeSuffix2, _marker: marker2, _markerMatch: markerMatch2, _HTML_RESULT: HTML_RESULT2, _getTemplateHtml: getTemplateHtml2, _TemplateInstance: TemplateInstance2, _isIterable: isIterable2, _resolveDirective: resolveDirective2, _ChildPart: ChildPart2, _AttributePart: AttributePart2, _BooleanAttributePart: BooleanAttributePart2, _EventPart: EventPart2, _PropertyPart: PropertyPart2, _ElementPart: ElementPart2 }, polyfillSupport3 = global4.litHtmlPolyfillSupportDevMode;
polyfillSupport3 == null || polyfillSupport3(Template2, ChildPart2);
((_d3 = global4.litHtmlVersions) !== null && _d3 !== void 0 ? _d3 : global4.litHtmlVersions = []).push("2.8.0");
global4.litHtmlVersions.length > 1 && issueWarning3("multiple-versions", "Multiple versions of Lit loaded. Loading multiple versions is not recommended.");
var render2 = (value, container, options) => {
  var _a5, _b5;
  if (container == null)
    throw new TypeError(`The container to render into may not be ${container}`);
  let renderId = debugLogRenderId2++, partOwnerNode = (_a5 = options == null ? void 0 : options.renderBefore) !== null && _a5 !== void 0 ? _a5 : container, part = partOwnerNode._$litPart$;
  if (debugLogEvent3 == null || debugLogEvent3({ kind: "begin render", id: renderId, value, container, options, part }), part === void 0) {
    let endNode = (_b5 = options == null ? void 0 : options.renderBefore) !== null && _b5 !== void 0 ? _b5 : null;
    partOwnerNode._$litPart$ = part = new ChildPart2(container.insertBefore(createMarker2(), endNode), endNode, void 0, options != null ? options : {});
  }
  return part._$setValue(value), debugLogEvent3 == null || debugLogEvent3({ kind: "end render", id: renderId, value, container, options, part }), part;
};
render2.setSanitizer = setSanitizer2, render2.createSanitizer = createSanitizer2, render2._testOnlyClearSanitizerFactoryDoNotCallOrElse = _testOnlyClearSanitizerFactoryDoNotCallOrElse2;
var _a4, _b4, _c4, UpdatingElement = ReactiveElement, issueWarning4;
{
  let issuedWarnings = (_a4 = globalThis.litIssuedWarnings) !== null && _a4 !== void 0 ? _a4 : globalThis.litIssuedWarnings = new Set();
  issueWarning4 = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`, issuedWarnings.has(warning) || (console.warn(warning), issuedWarnings.add(warning));
  };
}
var LitElement = class extends ReactiveElement {
  constructor() {
    super(...arguments);
    this.renderOptions = { host: this }, this.__childPart = void 0;
  }
  createRenderRoot() {
    var _a5, _b5;
    let renderRoot = super.createRenderRoot();
    return (_a5 = (_b5 = this.renderOptions).renderBefore) !== null && _a5 !== void 0 || (_b5.renderBefore = renderRoot.firstChild), renderRoot;
  }
  update(changedProperties) {
    let value = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(changedProperties), this.__childPart = render2(value, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var _a5;
    super.connectedCallback(), (_a5 = this.__childPart) === null || _a5 === void 0 || _a5.setConnected(true);
  }
  disconnectedCallback() {
    var _a5;
    super.disconnectedCallback(), (_a5 = this.__childPart) === null || _a5 === void 0 || _a5.setConnected(false);
  }
  render() {
    return noChange2;
  }
};
LitElement.finalized = true;
LitElement._$litElement$ = true;
(_b4 = globalThis.litElementHydrateSupport) === null || _b4 === void 0 || _b4.call(globalThis, { LitElement });
var polyfillSupport4 = globalThis.litElementPolyfillSupportDevMode;
polyfillSupport4 == null || polyfillSupport4({ LitElement });
LitElement.finalize = function() {
  if (!ReactiveElement.finalize.call(this))
    return false;
  let warnRemovedOrRenamed = (obj, name, renamed = false) => {
    if (obj.hasOwnProperty(name)) {
      let ctorName = (typeof obj == "function" ? obj : obj.constructor).name;
      issueWarning4(renamed ? "renamed-api" : "removed-api", `\`${name}\` is implemented on class ${ctorName}. It has been ${renamed ? "renamed" : "removed"} in this version of LitElement.`);
    }
  };
  return warnRemovedOrRenamed(this, "render"), warnRemovedOrRenamed(this, "getStyles", true), warnRemovedOrRenamed(this.prototype, "adoptStyles"), true;
};
var _$LE = { _$attributeToProperty: (el, name, value) => {
  el._$attributeToProperty(name, value);
}, _$changedProperties: (el) => el._$changedProperties };
((_c4 = globalThis.litElementVersions) !== null && _c4 !== void 0 ? _c4 : globalThis.litElementVersions = []).push("3.3.3");
globalThis.litElementVersions.length > 1 && issueWarning4("multiple-versions", "Multiple versions of Lit loaded. Loading multiple versions is not recommended.");
init_vite_shims();
var NODE_MODE5 = false, isServer = NODE_MODE5;
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __eager_import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CSSResult,
  LitElement,
  ReactiveElement,
  UpdatingElement,
  _$LE,
  _$LH,
  adoptStyles,
  css,
  defaultConverter,
  getCompatibleStyle,
  html: html2,
  isServer,
  noChange: noChange2,
  notEqual,
  nothing: nothing2,
  render: render2,
  supportsAdoptingStyleSheets,
  svg: svg2,
  unsafeCSS
}, Symbol.toStringTag, { value: "Module" }));
init_vite_shims();
init_vite_shims();
init_vite_shims();
var legacyCustomElement = (tagName, clazz) => (customElements.define(tagName, clazz), clazz), standardCustomElement = (tagName, descriptor) => {
  let { kind, elements } = descriptor;
  return { kind, elements, finisher(clazz) {
    customElements.define(tagName, clazz);
  } };
}, customElement = (tagName) => (classOrDescriptor) => typeof classOrDescriptor == "function" ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);
init_vite_shims();
var standardProperty = (options, element) => element.kind === "method" && element.descriptor && !("value" in element.descriptor) ? __spreadProps(__spreadValues({}, element), { finisher(clazz) {
  clazz.createProperty(element.key, options);
} }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: element.key, initializer() {
  typeof element.initializer == "function" && (this[element.key] = element.initializer.call(this));
}, finisher(clazz) {
  clazz.createProperty(element.key, options);
} }, legacyProperty = (options, proto, name) => {
  proto.constructor.createProperty(name, options);
};
function property(options) {
  return (protoOrDescriptor, name) => name !== void 0 ? legacyProperty(options, protoOrDescriptor, name) : standardProperty(options, protoOrDescriptor);
}
init_vite_shims();
function state(options) {
  return property(__spreadProps(__spreadValues({}, options), { state: true }));
}
init_vite_shims();
init_vite_shims();
var decorateProperty = ({ finisher, descriptor }) => (protoOrDescriptor, name) => {
  var _a22;
  if (name !== void 0) {
    let ctor = protoOrDescriptor.constructor;
    descriptor !== void 0 && Object.defineProperty(protoOrDescriptor, name, descriptor(name)), finisher == null || finisher(ctor, name);
  } else {
    let key = (_a22 = protoOrDescriptor.originalKey) !== null && _a22 !== void 0 ? _a22 : protoOrDescriptor.key, info = descriptor != null ? { kind: "method", placement: "prototype", key, descriptor: descriptor(protoOrDescriptor.key) } : __spreadProps(__spreadValues({}, protoOrDescriptor), { key });
    return finisher != null && (info.finisher = function(ctor) {
      finisher(ctor, key);
    }), info;
  }
};
function eventOptions(options) {
  return decorateProperty({ finisher: (ctor, name) => {
    Object.assign(ctor.prototype[name], options);
  } });
}
init_vite_shims();
function query(selector, cache) {
  return decorateProperty({ descriptor: (name) => {
    let descriptor = { get() {
      var _a22, _b5;
      return (_b5 = (_a22 = this.renderRoot) === null || _a22 === void 0 ? void 0 : _a22.querySelector(selector)) !== null && _b5 !== void 0 ? _b5 : null;
    }, enumerable: true, configurable: true };
    if (cache) {
      let key = typeof name == "symbol" ? Symbol() : `__${name}`;
      descriptor.get = function() {
        var _a22, _b5;
        return this[key] === void 0 && (this[key] = (_b5 = (_a22 = this.renderRoot) === null || _a22 === void 0 ? void 0 : _a22.querySelector(selector)) !== null && _b5 !== void 0 ? _b5 : null), this[key];
      };
    }
    return descriptor;
  } });
}
init_vite_shims();
function queryAll(selector) {
  return decorateProperty({ descriptor: (_name) => ({ get() {
    var _a22, _b5;
    return (_b5 = (_a22 = this.renderRoot) === null || _a22 === void 0 ? void 0 : _a22.querySelectorAll(selector)) !== null && _b5 !== void 0 ? _b5 : [];
  }, enumerable: true, configurable: true }) });
}
init_vite_shims();
function queryAsync(selector) {
  return decorateProperty({ descriptor: (_name) => ({ async get() {
    var _a22;
    return await this.updateComplete, (_a22 = this.renderRoot) === null || _a22 === void 0 ? void 0 : _a22.querySelector(selector);
  }, enumerable: true, configurable: true }) });
}
init_vite_shims();
var _a, global = window, slotAssignedElements = ((_a = global.HTMLSlotElement) === null || _a === void 0 ? void 0 : _a.prototype.assignedElements) != null ? (slot, opts) => slot.assignedElements(opts) : (slot, opts) => slot.assignedNodes(opts).filter((node) => node.nodeType === Node.ELEMENT_NODE);
function queryAssignedElements(options) {
  let { slot, selector } = options != null ? options : {};
  return decorateProperty({ descriptor: (_name) => ({ get() {
    var _a22;
    let slotSelector = `slot${slot ? `[name=${slot}]` : ":not([name])"}`, slotEl = (_a22 = this.renderRoot) === null || _a22 === void 0 ? void 0 : _a22.querySelector(slotSelector), elements = slotEl != null ? slotAssignedElements(slotEl, options) : [];
    return selector ? elements.filter((node) => node.matches(selector)) : elements;
  }, enumerable: true, configurable: true }) });
}
init_vite_shims();
function queryAssignedNodes(slotOrOptions, flatten, selector) {
  let slot = slotOrOptions, assignedNodesOptions;
  return typeof slotOrOptions == "object" ? (slot = slotOrOptions.slot, assignedNodesOptions = slotOrOptions) : assignedNodesOptions = { flatten }, selector ? queryAssignedElements({ slot, flatten, selector }) : decorateProperty({ descriptor: (_name) => ({ get() {
    var _a22, _b5;
    let slotSelector = `slot${slot ? `[name=${slot}]` : ":not([name])"}`, slotEl = (_a22 = this.renderRoot) === null || _a22 === void 0 ? void 0 : _a22.querySelector(slotSelector);
    return (_b5 = slotEl == null ? void 0 : slotEl.assignedNodes(assignedNodesOptions)) !== null && _b5 !== void 0 ? _b5 : [];
  }, enumerable: true, configurable: true }) });
}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __eager_import_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  customElement,
  eventOptions,
  property,
  query,
  queryAll,
  queryAssignedElements,
  queryAssignedNodes,
  queryAsync,
  state
}, Symbol.toStringTag, { value: "Module" }));
const modules = { "lit-html": () => __eager_import_0, "lit": () => __eager_import_1, "lit/decorators.js": () => __eager_import_2 };
const aliases = {};
function require2(library) {
  const exists = (aliases[library] || library) in modules;
  if (!exists) {
    const frameData = window.frameElement.dataset;
    const err = new Error("Missing library: " + library);
    import(
      /*@vite-ignore*/
      "/" + frameData.busid + "/vite/" + frameData.wcid + "/@vite/client"
    ).then(({ handleMessage }) => handleMessage({ type: "error", err }));
    throw err;
  }
  return modules[library]();
}
export { require2 as default };
