(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.cdx-list{margin:0;padding:0;outline:none;display:grid;counter-reset:item;gap:var(--spacing-s);padding:var(--spacing-xs);--spacing-s: 8px;--spacing-xs: 6px;--list-counter-type: numeric;--radius-border: 5px;--checkbox-background: #fff;--color-border: #C9C9C9;--color-bg-checked: #369FFF;--line-height: 1.45em;--color-bg-checked-hover: #0059AB;--color-tick: #fff;--size-checkbox: 1.2em}.cdx-list__item{line-height:var(--line-height);display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;grid-template-areas:"checkbox content" ". child"}.cdx-list__item-children{display:grid;grid-area:child;gap:var(--spacing-s);padding-top:var(--spacing-s);counter-reset:item}.cdx-list__item [contenteditable]{outline:none}.cdx-list__item-content{word-break:break-word;white-space:pre-wrap;grid-area:content;padding-left:var(--spacing-s)}.cdx-list__item:before{counter-increment:item;white-space:nowrap}.cdx-list-ordered .cdx-list__item:before{content:counter(item,var(--list-counter-type)) "."}.cdx-list-ordered{counter-reset:item}.cdx-list-unordered .cdx-list__item:before{content:"•"}.cdx-list-checklist .cdx-list__item:before{content:""}.cdx-list__settings .cdx-settings-button{width:50%}.cdx-list__checkbox{padding-top:calc((var(--line-height) - var(--size-checkbox)) / 2);grid-area:checkbox;width:var(--size-checkbox);height:var(--size-checkbox);display:flex;cursor:pointer}.cdx-list__checkbox svg{opacity:0;height:var(--size-checkbox);width:var(--size-checkbox);left:-1px;top:-1px;position:absolute}@media (hover: hover){.cdx-list__checkbox:not(.cdx-list__checkbox--no-hover):hover .cdx-list__checkbox-check svg{opacity:1}}.cdx-list__checkbox--checked{line-height:var(--line-height)}@media (hover: hover){.cdx-list__checkbox--checked:not(.cdx-list__checkbox--checked--no-hover):hover .cdx-checklist__checkbox-check{background:var(--color-bg-checked-hover);border-color:var(--color-bg-checked-hover)}}.cdx-list__checkbox--checked .cdx-list__checkbox-check{background:var(--color-bg-checked);border-color:var(--color-bg-checked)}.cdx-list__checkbox--checked .cdx-list__checkbox-check svg{opacity:1}.cdx-list__checkbox--checked .cdx-list__checkbox-check svg path{stroke:var(--color-tick)}.cdx-list__checkbox--checked .cdx-list__checkbox-check:before{opacity:0;visibility:visible;transform:scale(2.5)}.cdx-list__checkbox-check{cursor:pointer;display:inline-block;position:relative;margin:0 auto;width:var(--size-checkbox);height:var(--size-checkbox);box-sizing:border-box;border-radius:var(--radius-border);border:1px solid var(--color-border);background:var(--checkbox-background)}.cdx-list__checkbox-check:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:100%;background-color:var(--color-bg-checked);visibility:hidden;pointer-events:none;transform:scale(1);transition:transform .4s ease-out,opacity .4s}.cdx-list-start-with-field{background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-list-start-with-field--invalid{background:#FFECED;border:1px solid #E13F3F}.cdx-list-start-with-field--invalid .cdx-list-start-with-field__input{color:#e13f3f}.cdx-list-start-with-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - var(--toolbox-buttons-size) - var(--icon-margin-right))}.cdx-list-start-with-field__input::placeholder{color:var(--grayText);font-weight:500}')),document.head.appendChild(e)}}catch(c){console.error("vite-plugin-css-injected-by-js",c)}})();
const gt = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 12L10.4884 15.8372C10.5677 15.9245 10.705 15.9245 10.7844 15.8372L17 9"/></svg>', we = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>', vt = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>';
var L = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ht(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var d = {}, z = {}, K = {};
Object.defineProperty(K, "__esModule", { value: !0 });
K.allInputsSelector = bt;
function bt() {
  var e = ["text", "password", "email", "number", "search", "tel", "url"];
  return "[contenteditable=true], textarea, input:not([type]), " + e.map(function(t) {
    return 'input[type="'.concat(t, '"]');
  }).join(", ");
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.allInputsSelector = void 0;
  var t = K;
  Object.defineProperty(e, "allInputsSelector", { enumerable: !0, get: function() {
    return t.allInputsSelector;
  } });
})(z);
var I = {}, X = {};
Object.defineProperty(X, "__esModule", { value: !0 });
X.isNativeInput = yt;
function yt(e) {
  var t = [
    "INPUT",
    "TEXTAREA"
  ];
  return e && e.tagName ? t.includes(e.tagName) : !1;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isNativeInput = void 0;
  var t = X;
  Object.defineProperty(e, "isNativeInput", { enumerable: !0, get: function() {
    return t.isNativeInput;
  } });
})(I);
var $e = {}, V = {};
Object.defineProperty(V, "__esModule", { value: !0 });
V.append = Ct;
function Ct(e, t) {
  Array.isArray(t) ? t.forEach(function(n) {
    e.appendChild(n);
  }) : e.appendChild(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.append = void 0;
  var t = V;
  Object.defineProperty(e, "append", { enumerable: !0, get: function() {
    return t.append;
  } });
})($e);
var Y = {}, J = {};
Object.defineProperty(J, "__esModule", { value: !0 });
J.blockElements = St;
function St() {
  return [
    "address",
    "article",
    "aside",
    "blockquote",
    "canvas",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "noscript",
    "ol",
    "output",
    "p",
    "pre",
    "ruby",
    "section",
    "table",
    "tbody",
    "thead",
    "tr",
    "tfoot",
    "ul",
    "video"
  ];
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.blockElements = void 0;
  var t = J;
  Object.defineProperty(e, "blockElements", { enumerable: !0, get: function() {
    return t.blockElements;
  } });
})(Y);
var Ae = {}, Q = {};
Object.defineProperty(Q, "__esModule", { value: !0 });
Q.calculateBaseline = Ot;
function Ot(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.fontSize), r = parseFloat(t.lineHeight) || n * 1.2, i = parseFloat(t.paddingTop), a = parseFloat(t.borderTopWidth), l = parseFloat(t.marginTop), s = n * 0.8, u = (r - n) / 2, c = l + a + i + u + s;
  return c;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.calculateBaseline = void 0;
  var t = Q;
  Object.defineProperty(e, "calculateBaseline", { enumerable: !0, get: function() {
    return t.calculateBaseline;
  } });
})(Ae);
var Be = {}, Z = {}, x = {}, ee = {};
Object.defineProperty(ee, "__esModule", { value: !0 });
ee.isContentEditable = _t;
function _t(e) {
  return e.contentEditable === "true";
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isContentEditable = void 0;
  var t = ee;
  Object.defineProperty(e, "isContentEditable", { enumerable: !0, get: function() {
    return t.isContentEditable;
  } });
})(x);
Object.defineProperty(Z, "__esModule", { value: !0 });
Z.canSetCaret = kt;
var Et = I, It = x;
function kt(e) {
  var t = !0;
  if ((0, Et.isNativeInput)(e))
    switch (e.type) {
      case "file":
      case "checkbox":
      case "radio":
      case "hidden":
      case "submit":
      case "button":
      case "image":
      case "reset":
        t = !1;
        break;
    }
  else
    t = (0, It.isContentEditable)(e);
  return t;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.canSetCaret = void 0;
  var t = Z;
  Object.defineProperty(e, "canSetCaret", { enumerable: !0, get: function() {
    return t.canSetCaret;
  } });
})(Be);
var M = {}, te = {};
function Pt(e, t, n) {
  const r = n.value !== void 0 ? "value" : "get", i = n[r], a = `#${t}Cache`;
  if (n[r] = function(...l) {
    return this[a] === void 0 && (this[a] = i.apply(this, l)), this[a];
  }, r === "get" && n.set) {
    const l = n.set;
    n.set = function(s) {
      delete e[a], l.apply(this, s);
    };
  }
  return n;
}
function De() {
  const e = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, t = Object.keys(e).find((n) => window.navigator.appVersion.toLowerCase().indexOf(n) !== -1);
  return t !== void 0 && (e[t] = !0), e;
}
function ne(e) {
  return e != null && e !== "" && (typeof e != "object" || Object.keys(e).length > 0);
}
function jt(e) {
  return !ne(e);
}
const Tt = () => typeof window < "u" && window.navigator !== null && ne(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function Nt(e) {
  const t = De();
  return e = e.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, "+"), t.mac ? e = e.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : e = e.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), e;
}
function wt(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function Lt(e) {
  const t = document.createElement("div");
  t.style.position = "absolute", t.style.left = "-999px", t.style.bottom = "-999px", t.innerHTML = e, document.body.appendChild(t);
  const n = window.getSelection(), r = document.createRange();
  if (r.selectNode(t), n === null)
    throw new Error("Cannot copy text to clipboard");
  n.removeAllRanges(), n.addRange(r), document.execCommand("copy"), document.body.removeChild(t);
}
function Mt(e, t, n) {
  let r;
  return (...i) => {
    const a = this, l = () => {
      r = void 0, n !== !0 && e.apply(a, i);
    }, s = n === !0 && r !== void 0;
    window.clearTimeout(r), r = window.setTimeout(l, t), s && e.apply(a, i);
  };
}
function _(e) {
  return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function $t(e) {
  return _(e) === "boolean";
}
function We(e) {
  return _(e) === "function" || _(e) === "asyncfunction";
}
function At(e) {
  return We(e) && /^\s*class\s+/.test(e.toString());
}
function Bt(e) {
  return _(e) === "number";
}
function N(e) {
  return _(e) === "object";
}
function Dt(e) {
  return Promise.resolve(e) === e;
}
function Wt(e) {
  return _(e) === "string";
}
function Ht(e) {
  return _(e) === "undefined";
}
function U(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (N(e) && N(n))
    for (const r in n)
      N(n[r]) ? (e[r] === void 0 && Object.assign(e, { [r]: {} }), U(e[r], n[r])) : Object.assign(e, { [r]: n[r] });
  return U(e, ...t);
}
function Ft(e, t, n) {
  const r = `«${t}» is deprecated and will be removed in the next major release. Please use the «${n}» instead.`;
  e && console.warn(r);
}
function Rt(e) {
  try {
    return new URL(e).href;
  } catch {
  }
  return e.substring(0, 2) === "//" ? window.location.protocol + e : window.location.origin + e;
}
function qt(e) {
  return e > 47 && e < 58 || e === 32 || e === 13 || e === 229 || e > 64 && e < 91 || e > 95 && e < 112 || e > 185 && e < 193 || e > 218 && e < 223;
}
const Gt = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191
}, Ut = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
class zt {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   * @param operation - promise should be added to queue
   */
  add(t) {
    return new Promise((n, r) => {
      this.completed = this.completed.then(t).then(n).catch(r);
    });
  }
}
function Kt(e, t, n = void 0) {
  let r, i, a, l = null, s = 0;
  n || (n = {});
  const u = function() {
    s = n.leading === !1 ? 0 : Date.now(), l = null, a = e.apply(r, i), l === null && (r = i = null);
  };
  return function() {
    const c = Date.now();
    !s && n.leading === !1 && (s = c);
    const o = t - (c - s);
    return r = this, i = arguments, o <= 0 || o > t ? (l && (clearTimeout(l), l = null), s = c, a = e.apply(r, i), l === null && (r = i = null)) : !l && n.trailing !== !1 && (l = setTimeout(u, o)), a;
  };
}
const Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PromiseQueue: zt,
  beautifyShortcut: Nt,
  cacheable: Pt,
  capitalize: wt,
  copyTextToClipboard: Lt,
  debounce: Mt,
  deepMerge: U,
  deprecationAssert: Ft,
  getUserOS: De,
  getValidUrl: Rt,
  isBoolean: $t,
  isClass: At,
  isEmpty: jt,
  isFunction: We,
  isIosDevice: Tt,
  isNumber: Bt,
  isObject: N,
  isPrintableKey: qt,
  isPromise: Dt,
  isString: Wt,
  isUndefined: Ht,
  keyCodes: Gt,
  mouseButtons: Ut,
  notEmpty: ne,
  throttle: Kt,
  typeOf: _
}, Symbol.toStringTag, { value: "Module" })), re = /* @__PURE__ */ ht(Xt);
Object.defineProperty(te, "__esModule", { value: !0 });
te.containsOnlyInlineElements = Jt;
var Vt = re, Yt = Y;
function Jt(e) {
  var t;
  (0, Vt.isString)(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
  var n = function(r) {
    return !(0, Yt.blockElements)().includes(r.tagName.toLowerCase()) && Array.from(r.children).every(n);
  };
  return Array.from(t.children).every(n);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.containsOnlyInlineElements = void 0;
  var t = te;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return t.containsOnlyInlineElements;
  } });
})(M);
var He = {}, ie = {}, $ = {}, ae = {};
Object.defineProperty(ae, "__esModule", { value: !0 });
ae.make = Qt;
function Qt(e, t, n) {
  var r;
  t === void 0 && (t = null), n === void 0 && (n = {});
  var i = document.createElement(e);
  if (Array.isArray(t)) {
    var a = t.filter(function(s) {
      return s !== void 0;
    });
    (r = i.classList).add.apply(r, a);
  } else
    t !== null && i.classList.add(t);
  for (var l in n)
    Object.prototype.hasOwnProperty.call(n, l) && (i[l] = n[l]);
  return i;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.make = void 0;
  var t = ae;
  Object.defineProperty(e, "make", { enumerable: !0, get: function() {
    return t.make;
  } });
})($);
Object.defineProperty(ie, "__esModule", { value: !0 });
ie.fragmentToString = xt;
var Zt = $;
function xt(e) {
  var t = (0, Zt.make)("div");
  return t.appendChild(e), t.innerHTML;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.fragmentToString = void 0;
  var t = ie;
  Object.defineProperty(e, "fragmentToString", { enumerable: !0, get: function() {
    return t.fragmentToString;
  } });
})(He);
var Fe = {}, le = {};
Object.defineProperty(le, "__esModule", { value: !0 });
le.getContentLength = tn;
var en = I;
function tn(e) {
  var t, n;
  return (0, en.isNativeInput)(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : (n = (t = e.textContent) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getContentLength = void 0;
  var t = le;
  Object.defineProperty(e, "getContentLength", { enumerable: !0, get: function() {
    return t.getContentLength;
  } });
})(Fe);
var se = {}, oe = {}, Le = L && L.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
};
Object.defineProperty(oe, "__esModule", { value: !0 });
oe.getDeepestBlockElements = Re;
var nn = M;
function Re(e) {
  return (0, nn.containsOnlyInlineElements)(e) ? [e] : Array.from(e.children).reduce(function(t, n) {
    return Le(Le([], t, !0), Re(n), !0);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getDeepestBlockElements = void 0;
  var t = oe;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return t.getDeepestBlockElements;
  } });
})(se);
var qe = {}, ue = {}, A = {}, ce = {};
Object.defineProperty(ce, "__esModule", { value: !0 });
ce.isLineBreakTag = rn;
function rn(e) {
  return [
    "BR",
    "WBR"
  ].includes(e.tagName);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isLineBreakTag = void 0;
  var t = ce;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: !0, get: function() {
    return t.isLineBreakTag;
  } });
})(A);
var B = {}, de = {};
Object.defineProperty(de, "__esModule", { value: !0 });
de.isSingleTag = an;
function an(e) {
  return [
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR"
  ].includes(e.tagName);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isSingleTag = void 0;
  var t = de;
  Object.defineProperty(e, "isSingleTag", { enumerable: !0, get: function() {
    return t.isSingleTag;
  } });
})(B);
Object.defineProperty(ue, "__esModule", { value: !0 });
ue.getDeepestNode = Ge;
var ln = I, sn = A, on = B;
function Ge(e, t) {
  t === void 0 && (t = !1);
  var n = t ? "lastChild" : "firstChild", r = t ? "previousSibling" : "nextSibling";
  if (e.nodeType === Node.ELEMENT_NODE && e[n]) {
    var i = e[n];
    if ((0, on.isSingleTag)(i) && !(0, ln.isNativeInput)(i) && !(0, sn.isLineBreakTag)(i))
      if (i[r])
        i = i[r];
      else if (i.parentNode !== null && i.parentNode[r])
        i = i.parentNode[r];
      else
        return i.parentNode;
    return Ge(i, t);
  }
  return e;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getDeepestNode = void 0;
  var t = ue;
  Object.defineProperty(e, "getDeepestNode", { enumerable: !0, get: function() {
    return t.getDeepestNode;
  } });
})(qe);
var Ue = {}, fe = {}, j = L && L.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
};
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.findAllInputs = pn;
var un = M, cn = se, dn = z, fn = I;
function pn(e) {
  return Array.from(e.querySelectorAll((0, dn.allInputsSelector)())).reduce(function(t, n) {
    return (0, fn.isNativeInput)(n) || (0, un.containsOnlyInlineElements)(n) ? j(j([], t, !0), [n], !1) : j(j([], t, !0), (0, cn.getDeepestBlockElements)(n), !0);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.findAllInputs = void 0;
  var t = fe;
  Object.defineProperty(e, "findAllInputs", { enumerable: !0, get: function() {
    return t.findAllInputs;
  } });
})(Ue);
var ze = {}, pe = {};
Object.defineProperty(pe, "__esModule", { value: !0 });
pe.isCollapsedWhitespaces = mn;
function mn(e) {
  return !/[^\t\n\r ]/.test(e);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isCollapsedWhitespaces = void 0;
  var t = pe;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return t.isCollapsedWhitespaces;
  } });
})(ze);
var me = {}, ge = {};
Object.defineProperty(ge, "__esModule", { value: !0 });
ge.isElement = vn;
var gn = re;
function vn(e) {
  return (0, gn.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.ELEMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isElement = void 0;
  var t = ge;
  Object.defineProperty(e, "isElement", { enumerable: !0, get: function() {
    return t.isElement;
  } });
})(me);
var Ke = {}, ve = {}, he = {}, be = {};
Object.defineProperty(be, "__esModule", { value: !0 });
be.isLeaf = hn;
function hn(e) {
  return e === null ? !1 : e.childNodes.length === 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isLeaf = void 0;
  var t = be;
  Object.defineProperty(e, "isLeaf", { enumerable: !0, get: function() {
    return t.isLeaf;
  } });
})(he);
var ye = {}, Ce = {};
Object.defineProperty(Ce, "__esModule", { value: !0 });
Ce.isNodeEmpty = On;
var bn = A, yn = me, Cn = I, Sn = B;
function On(e, t) {
  var n = "";
  return (0, Sn.isSingleTag)(e) && !(0, bn.isLineBreakTag)(e) ? !1 : ((0, yn.isElement)(e) && (0, Cn.isNativeInput)(e) ? n = e.value : e.textContent !== null && (n = e.textContent.replace("​", "")), t !== void 0 && (n = n.replace(new RegExp(t, "g"), "")), n.trim().length === 0);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isNodeEmpty = void 0;
  var t = Ce;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: !0, get: function() {
    return t.isNodeEmpty;
  } });
})(ye);
Object.defineProperty(ve, "__esModule", { value: !0 });
ve.isEmpty = In;
var _n = he, En = ye;
function In(e, t) {
  e.normalize();
  for (var n = [e]; n.length > 0; ) {
    var r = n.shift();
    if (r) {
      if (e = r, (0, _n.isLeaf)(e) && !(0, En.isNodeEmpty)(e, t))
        return !1;
      n.push.apply(n, Array.from(e.childNodes));
    }
  }
  return !0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isEmpty = void 0;
  var t = ve;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return t.isEmpty;
  } });
})(Ke);
var Xe = {}, Se = {};
Object.defineProperty(Se, "__esModule", { value: !0 });
Se.isFragment = Pn;
var kn = re;
function Pn(e) {
  return (0, kn.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isFragment = void 0;
  var t = Se;
  Object.defineProperty(e, "isFragment", { enumerable: !0, get: function() {
    return t.isFragment;
  } });
})(Xe);
var Ve = {}, Oe = {};
Object.defineProperty(Oe, "__esModule", { value: !0 });
Oe.isHTMLString = Tn;
var jn = $;
function Tn(e) {
  var t = (0, jn.make)("div");
  return t.innerHTML = e, t.childElementCount > 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isHTMLString = void 0;
  var t = Oe;
  Object.defineProperty(e, "isHTMLString", { enumerable: !0, get: function() {
    return t.isHTMLString;
  } });
})(Ve);
var Ye = {}, _e = {};
Object.defineProperty(_e, "__esModule", { value: !0 });
_e.offset = Nn;
function Nn(e) {
  var t = e.getBoundingClientRect(), n = window.pageXOffset || document.documentElement.scrollLeft, r = window.pageYOffset || document.documentElement.scrollTop, i = t.top + r, a = t.left + n;
  return {
    top: i,
    left: a,
    bottom: i + t.height,
    right: a + t.width
  };
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.offset = void 0;
  var t = _e;
  Object.defineProperty(e, "offset", { enumerable: !0, get: function() {
    return t.offset;
  } });
})(Ye);
var Je = {}, Ee = {};
Object.defineProperty(Ee, "__esModule", { value: !0 });
Ee.prepend = wn;
function wn(e, t) {
  Array.isArray(t) ? (t = t.reverse(), t.forEach(function(n) {
    return e.prepend(n);
  })) : e.prepend(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.prepend = void 0;
  var t = Ee;
  Object.defineProperty(e, "prepend", { enumerable: !0, get: function() {
    return t.prepend;
  } });
})(Je);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.prepend = e.offset = e.make = e.isLineBreakTag = e.isSingleTag = e.isNodeEmpty = e.isLeaf = e.isHTMLString = e.isFragment = e.isEmpty = e.isElement = e.isContentEditable = e.isCollapsedWhitespaces = e.findAllInputs = e.isNativeInput = e.allInputsSelector = e.getDeepestNode = e.getDeepestBlockElements = e.getContentLength = e.fragmentToString = e.containsOnlyInlineElements = e.canSetCaret = e.calculateBaseline = e.blockElements = e.append = void 0;
  var t = z;
  Object.defineProperty(e, "allInputsSelector", { enumerable: !0, get: function() {
    return t.allInputsSelector;
  } });
  var n = I;
  Object.defineProperty(e, "isNativeInput", { enumerable: !0, get: function() {
    return n.isNativeInput;
  } });
  var r = $e;
  Object.defineProperty(e, "append", { enumerable: !0, get: function() {
    return r.append;
  } });
  var i = Y;
  Object.defineProperty(e, "blockElements", { enumerable: !0, get: function() {
    return i.blockElements;
  } });
  var a = Ae;
  Object.defineProperty(e, "calculateBaseline", { enumerable: !0, get: function() {
    return a.calculateBaseline;
  } });
  var l = Be;
  Object.defineProperty(e, "canSetCaret", { enumerable: !0, get: function() {
    return l.canSetCaret;
  } });
  var s = M;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return s.containsOnlyInlineElements;
  } });
  var u = He;
  Object.defineProperty(e, "fragmentToString", { enumerable: !0, get: function() {
    return u.fragmentToString;
  } });
  var c = Fe;
  Object.defineProperty(e, "getContentLength", { enumerable: !0, get: function() {
    return c.getContentLength;
  } });
  var o = se;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return o.getDeepestBlockElements;
  } });
  var p = qe;
  Object.defineProperty(e, "getDeepestNode", { enumerable: !0, get: function() {
    return p.getDeepestNode;
  } });
  var g = Ue;
  Object.defineProperty(e, "findAllInputs", { enumerable: !0, get: function() {
    return g.findAllInputs;
  } });
  var C = ze;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return C.isCollapsedWhitespaces;
  } });
  var h = x;
  Object.defineProperty(e, "isContentEditable", { enumerable: !0, get: function() {
    return h.isContentEditable;
  } });
  var it = me;
  Object.defineProperty(e, "isElement", { enumerable: !0, get: function() {
    return it.isElement;
  } });
  var at = Ke;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return at.isEmpty;
  } });
  var lt = Xe;
  Object.defineProperty(e, "isFragment", { enumerable: !0, get: function() {
    return lt.isFragment;
  } });
  var st = Ve;
  Object.defineProperty(e, "isHTMLString", { enumerable: !0, get: function() {
    return st.isHTMLString;
  } });
  var ot = he;
  Object.defineProperty(e, "isLeaf", { enumerable: !0, get: function() {
    return ot.isLeaf;
  } });
  var ut = ye;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: !0, get: function() {
    return ut.isNodeEmpty;
  } });
  var ct = A;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: !0, get: function() {
    return ct.isLineBreakTag;
  } });
  var dt = B;
  Object.defineProperty(e, "isSingleTag", { enumerable: !0, get: function() {
    return dt.isSingleTag;
  } });
  var ft = $;
  Object.defineProperty(e, "make", { enumerable: !0, get: function() {
    return ft.make;
  } });
  var pt = Ye;
  Object.defineProperty(e, "offset", { enumerable: !0, get: function() {
    return pt.offset;
  } });
  var mt = Je;
  Object.defineProperty(e, "prepend", { enumerable: !0, get: function() {
    return mt.prepend;
  } });
})(d);
const v = "cdx-list", m = {
  wrapper: v,
  item: `${v}__item`,
  itemContent: `${v}__item-content`,
  itemChildren: `${v}__item-children`
};
class b {
  /**
   * Getter for all CSS classes used in unordered list rendering
   */
  static get CSS() {
    return {
      ...m,
      orderedList: `${v}-ordered`
    };
  }
  /**
   * Assign passed readonly mode and config to relevant class properties
   * @param readonly - read-only mode flag
   * @param config - user config for Tool
   */
  constructor(t, n) {
    this.config = n, this.readOnly = t;
  }
  /**
   * Renders ol wrapper for list
   * @param isRoot - boolean variable that represents level of the wrappre (root or childList)
   * @returns - created html ol element
   */
  renderWrapper(t) {
    let n;
    return t === !0 ? n = d.make("ol", [b.CSS.wrapper, b.CSS.orderedList]) : n = d.make("ol", [b.CSS.orderedList, b.CSS.itemChildren]), n;
  }
  /**
   * Redners list item element
   * @param content - content used in list item rendering
   * @param _meta - meta of the list item unused in rendering of the ordered list
   * @returns - created html list item element
   */
  renderItem(t, n) {
    const r = d.make("li", b.CSS.item), i = d.make("div", b.CSS.itemContent, {
      innerHTML: t,
      contentEditable: (!this.readOnly).toString()
    });
    return r.appendChild(i), r;
  }
  /**
   * Return the item content
   * @param item - item wrapper (<li>)
   * @returns - item content string
   */
  getItemContent(t) {
    const n = t.querySelector(`.${b.CSS.itemContent}`);
    return !n || d.isEmpty(n) ? "" : n.innerHTML;
  }
  /**
   * Returns item meta, for ordered list
   * @returns item meta object
   */
  getItemMeta() {
    return {};
  }
  /**
   * Returns default item meta used on creation of the new item
   */
  composeDefaultMeta() {
    return {};
  }
}
class y {
  /**
   * Getter for all CSS classes used in unordered list rendering
   */
  static get CSS() {
    return {
      ...m,
      unorderedList: `${v}-unordered`
    };
  }
  /**
   * Assign passed readonly mode and config to relevant class properties
   * @param readonly - read-only mode flag
   * @param config - user config for Tool
   */
  constructor(t, n) {
    this.config = n, this.readOnly = t;
  }
  /**
   * Renders ol wrapper for list
   * @param isRoot - boolean variable that represents level of the wrappre (root or childList)
   * @returns - created html ul element
   */
  renderWrapper(t) {
    let n;
    return t === !0 ? n = d.make("ul", [y.CSS.wrapper, y.CSS.unorderedList]) : n = d.make("ul", [y.CSS.unorderedList, y.CSS.itemChildren]), n;
  }
  /**
   * Redners list item element
   * @param content - content used in list item rendering
   * @param _meta - meta of the list item unused in rendering of the unordered list
   * @returns - created html list item element
   */
  renderItem(t, n) {
    const r = d.make("li", y.CSS.item), i = d.make("div", y.CSS.itemContent, {
      innerHTML: t,
      contentEditable: (!this.readOnly).toString()
    });
    return r.appendChild(i), r;
  }
  /**
   * Return the item content
   * @param item - item wrapper (<li>)
   * @returns - item content string
   */
  getItemContent(t) {
    const n = t.querySelector(`.${y.CSS.itemContent}`);
    return !n || d.isEmpty(n) ? "" : n.innerHTML;
  }
  /**
   * Returns item meta, for unordered list
   * @returns Item meta object
   */
  getItemMeta() {
    return {};
  }
  /**
   * Returns default item meta used on creation of the new item
   */
  composeDefaultMeta() {
    return {};
  }
}
function E(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
var P = {}, Ie = {}, D = {}, W = {};
Object.defineProperty(W, "__esModule", { value: !0 });
W.getContenteditableSlice = Mn;
var Ln = d;
function Mn(e, t, n, r, i) {
  var a;
  i === void 0 && (i = !1);
  var l = document.createRange();
  if (r === "left" ? (l.setStart(e, 0), l.setEnd(t, n)) : (l.setStart(t, n), l.setEnd(e, e.childNodes.length)), i === !0) {
    var s = l.extractContents();
    return (0, Ln.fragmentToString)(s);
  }
  var u = l.cloneContents(), c = document.createElement("div");
  c.appendChild(u);
  var o = (a = c.textContent) !== null && a !== void 0 ? a : "";
  return o;
}
Object.defineProperty(D, "__esModule", { value: !0 });
D.checkContenteditableSliceForEmptiness = Bn;
var $n = d, An = W;
function Bn(e, t, n, r) {
  var i = (0, An.getContenteditableSlice)(e, t, n, r);
  return (0, $n.isCollapsedWhitespaces)(i);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.checkContenteditableSliceForEmptiness = void 0;
  var t = D;
  Object.defineProperty(e, "checkContenteditableSliceForEmptiness", { enumerable: !0, get: function() {
    return t.checkContenteditableSliceForEmptiness;
  } });
})(Ie);
var Qe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getContenteditableSlice = void 0;
  var t = W;
  Object.defineProperty(e, "getContenteditableSlice", { enumerable: !0, get: function() {
    return t.getContenteditableSlice;
  } });
})(Qe);
var Ze = {}, ke = {};
Object.defineProperty(ke, "__esModule", { value: !0 });
ke.focus = Wn;
var Dn = d;
function Wn(e, t) {
  var n, r;
  if (t === void 0 && (t = !0), (0, Dn.isNativeInput)(e)) {
    e.focus();
    var i = t ? 0 : e.value.length;
    e.setSelectionRange(i, i);
  } else {
    var a = document.createRange(), l = window.getSelection();
    if (!l)
      return;
    var s = function(g, C) {
      C === void 0 && (C = !1);
      var h = document.createTextNode("");
      C ? g.insertBefore(h, g.firstChild) : g.appendChild(h), a.setStart(h, 0), a.setEnd(h, 0);
    }, u = function(g) {
      return g != null;
    }, c = e.childNodes, o = t ? c[0] : c[c.length - 1];
    if (u(o)) {
      for (; u(o) && o.nodeType !== Node.TEXT_NODE; )
        o = t ? o.firstChild : o.lastChild;
      if (u(o) && o.nodeType === Node.TEXT_NODE) {
        var p = (r = (n = o.textContent) === null || n === void 0 ? void 0 : n.length) !== null && r !== void 0 ? r : 0, i = t ? 0 : p;
        a.setStart(o, i), a.setEnd(o, i);
      } else
        s(e, t);
    } else
      s(e);
    l.removeAllRanges(), l.addRange(a);
  }
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.focus = void 0;
  var t = ke;
  Object.defineProperty(e, "focus", { enumerable: !0, get: function() {
    return t.focus;
  } });
})(Ze);
var Pe = {}, H = {};
Object.defineProperty(H, "__esModule", { value: !0 });
H.getCaretNodeAndOffset = Hn;
function Hn() {
  var e = window.getSelection();
  if (e === null)
    return [null, 0];
  var t = e.focusNode, n = e.focusOffset;
  return t === null ? [null, 0] : (t.nodeType !== Node.TEXT_NODE && t.childNodes.length > 0 && (t.childNodes[n] !== void 0 ? (t = t.childNodes[n], n = 0) : (t = t.childNodes[n - 1], t.textContent !== null && (n = t.textContent.length))), [t, n]);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getCaretNodeAndOffset = void 0;
  var t = H;
  Object.defineProperty(e, "getCaretNodeAndOffset", { enumerable: !0, get: function() {
    return t.getCaretNodeAndOffset;
  } });
})(Pe);
var xe = {}, F = {};
Object.defineProperty(F, "__esModule", { value: !0 });
F.getRange = Fn;
function Fn() {
  var e = window.getSelection();
  return e && e.rangeCount ? e.getRangeAt(0) : null;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getRange = void 0;
  var t = F;
  Object.defineProperty(e, "getRange", { enumerable: !0, get: function() {
    return t.getRange;
  } });
})(xe);
var et = {}, je = {};
Object.defineProperty(je, "__esModule", { value: !0 });
je.isCaretAtEndOfInput = Gn;
var Me = d, Rn = Pe, qn = Ie;
function Gn(e) {
  var t = (0, Me.getDeepestNode)(e, !0);
  if (t === null)
    return !0;
  if ((0, Me.isNativeInput)(t))
    return t.selectionEnd === t.value.length;
  var n = (0, Rn.getCaretNodeAndOffset)(), r = n[0], i = n[1];
  return r === null ? !1 : (0, qn.checkContenteditableSliceForEmptiness)(e, r, i, "right");
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isCaretAtEndOfInput = void 0;
  var t = je;
  Object.defineProperty(e, "isCaretAtEndOfInput", { enumerable: !0, get: function() {
    return t.isCaretAtEndOfInput;
  } });
})(et);
var tt = {}, Te = {};
Object.defineProperty(Te, "__esModule", { value: !0 });
Te.isCaretAtStartOfInput = Kn;
var T = d, Un = H, zn = D;
function Kn(e) {
  var t = (0, T.getDeepestNode)(e);
  if (t === null || (0, T.isEmpty)(e))
    return !0;
  if ((0, T.isNativeInput)(t))
    return t.selectionEnd === 0;
  if ((0, T.isEmpty)(e))
    return !0;
  var n = (0, Un.getCaretNodeAndOffset)(), r = n[0], i = n[1];
  return r === null ? !1 : (0, zn.checkContenteditableSliceForEmptiness)(e, r, i, "left");
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isCaretAtStartOfInput = void 0;
  var t = Te;
  Object.defineProperty(e, "isCaretAtStartOfInput", { enumerable: !0, get: function() {
    return t.isCaretAtStartOfInput;
  } });
})(tt);
var nt = {}, Ne = {};
Object.defineProperty(Ne, "__esModule", { value: !0 });
Ne.save = Yn;
var Xn = d, Vn = F;
function Yn() {
  var e = (0, Vn.getRange)(), t = (0, Xn.make)("span");
  if (t.id = "cursor", t.hidden = !0, !!e)
    return e.insertNode(t), function() {
      var r = window.getSelection();
      r && (e.setStartAfter(t), e.setEndAfter(t), r.removeAllRanges(), r.addRange(e), setTimeout(function() {
        t.remove();
      }, 150));
    };
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.save = void 0;
  var t = Ne;
  Object.defineProperty(e, "save", { enumerable: !0, get: function() {
    return t.save;
  } });
})(nt);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.save = e.isCaretAtStartOfInput = e.isCaretAtEndOfInput = e.getRange = e.getCaretNodeAndOffset = e.focus = e.getContenteditableSlice = e.checkContenteditableSliceForEmptiness = void 0;
  var t = Ie;
  Object.defineProperty(e, "checkContenteditableSliceForEmptiness", { enumerable: !0, get: function() {
    return t.checkContenteditableSliceForEmptiness;
  } });
  var n = Qe;
  Object.defineProperty(e, "getContenteditableSlice", { enumerable: !0, get: function() {
    return n.getContenteditableSlice;
  } });
  var r = Ze;
  Object.defineProperty(e, "focus", { enumerable: !0, get: function() {
    return r.focus;
  } });
  var i = Pe;
  Object.defineProperty(e, "getCaretNodeAndOffset", { enumerable: !0, get: function() {
    return i.getCaretNodeAndOffset;
  } });
  var a = xe;
  Object.defineProperty(e, "getRange", { enumerable: !0, get: function() {
    return a.getRange;
  } });
  var l = et;
  Object.defineProperty(e, "isCaretAtEndOfInput", { enumerable: !0, get: function() {
    return l.isCaretAtEndOfInput;
  } });
  var s = tt;
  Object.defineProperty(e, "isCaretAtStartOfInput", { enumerable: !0, get: function() {
    return s.isCaretAtStartOfInput;
  } });
  var u = nt;
  Object.defineProperty(e, "save", { enumerable: !0, get: function() {
    return u.save;
  } });
})(P);
class f {
  /**
   * Getter for all CSS classes used in unordered list rendering
   */
  static get CSS() {
    return {
      ...m,
      checklist: `${v}-checklist`,
      itemChecked: `${v}__checkbox--checked`,
      noHover: `${v}__checkbox--no-hover`,
      checkbox: `${v}__checkbox-check`,
      checkboxContainer: `${v}__checkbox`
    };
  }
  /**
   * Assign passed readonly mode and config to relevant class properties
   * @param readonly - read-only mode flag
   * @param config - user config for Tool
   */
  constructor(t, n) {
    this.config = n, this.readOnly = t;
  }
  /**
   * Renders ul wrapper for list
   * @param isRoot - boolean variable that represents level of the wrappre (root or childList)
   * @returns - created html ul element
   */
  renderWrapper(t) {
    let n;
    return t === !0 ? (n = d.make("ul", [f.CSS.wrapper, f.CSS.checklist]), n.addEventListener("click", (r) => {
      const i = r.target;
      if (i) {
        const a = i.closest(`.${f.CSS.checkboxContainer}`);
        a && a.contains(i) && this.toggleCheckbox(a);
      }
    })) : n = d.make("ul", [f.CSS.checklist, f.CSS.itemChildren]), n;
  }
  /**
   * Redners list item element
   * @param content - content used in list item rendering
   * @param meta - meta of the list item used in rendering of the checklist
   * @returns - created html list item element
   */
  renderItem(t, n) {
    const r = d.make("li", [f.CSS.item, f.CSS.item]), i = d.make("div", f.CSS.itemContent, {
      innerHTML: t,
      contentEditable: (!this.readOnly).toString()
    }), a = d.make("span", f.CSS.checkbox), l = d.make("div", f.CSS.checkboxContainer);
    return n.checked === !0 && l.classList.add(f.CSS.itemChecked), a.innerHTML = gt, l.appendChild(a), r.appendChild(l), r.appendChild(i), r;
  }
  /**
   * Return the item content
   * @param item - item wrapper (<li>)
   * @returns - item content string
   */
  getItemContent(t) {
    const n = t.querySelector(`.${f.CSS.itemContent}`);
    return !n || d.isEmpty(n) ? "" : n.innerHTML;
  }
  /**
   * Return meta object of certain element
   * @param item - will be returned meta information of this item
   * @returns Item meta object
   */
  getItemMeta(t) {
    const n = t.querySelector(`.${f.CSS.checkboxContainer}`);
    return {
      checked: n ? n.classList.contains(f.CSS.itemChecked) : !1
    };
  }
  /**
   * Returns default item meta used on creation of the new item
   */
  composeDefaultMeta() {
    return { checked: !1 };
  }
  /**
   * Toggle checklist item state
   * @param checkbox - checkbox element to be toggled
   */
  toggleCheckbox(t) {
    t.classList.toggle(f.CSS.itemChecked), t.classList.add(f.CSS.noHover), t.addEventListener("mouseleave", () => this.removeSpecialHoverBehavior(t), { once: !0 });
  }
  /**
   * Removes class responsible for special hover behavior on an item
   * @param el - item wrapper
   */
  removeSpecialHoverBehavior(t) {
    t.classList.remove(f.CSS.noHover);
  }
}
function R(e, t = "after") {
  const n = [];
  let r;
  function i(a) {
    switch (t) {
      case "after":
        return a.nextElementSibling;
      case "before":
        return a.previousElementSibling;
    }
  }
  for (r = i(e); r !== null; )
    n.push(r), r = i(r);
  return n.length !== 0 ? n : null;
}
function S(e, t = !0) {
  let n = e;
  return e.classList.contains(m.item) && (n = e.querySelector(`.${m.itemChildren}`)), n === null ? [] : t ? Array.from(n.querySelectorAll(`:scope > .${m.item}`)) : Array.from(n.querySelectorAll(`.${m.item}`));
}
function Jn(e) {
  return e.nextElementSibling === null;
}
function Qn(e) {
  return e.querySelector(`.${m.itemChildren}`) !== null;
}
function O(e) {
  return e.querySelector(`.${m.itemChildren}`);
}
function q(e) {
  let t = e;
  e.classList.contains(m.item) && (t = O(e)), t !== null && S(t).length === 0 && t.remove();
}
function w(e) {
  return e.querySelector(`.${m.itemContent}`);
}
function k(e, t = !0) {
  const n = w(e);
  n && P.focus(n, t);
}
class G {
  /**
   * Getter method to get current item
   * @returns current list item or null if caret position is not undefined
   */
  get currentItem() {
    const t = window.getSelection();
    if (!t)
      return null;
    let n = t.anchorNode;
    return !n || (E(n) || (n = n.parentNode), !n) || !E(n) ? null : n.closest(`.${m.item}`);
  }
  /**
   * Method that returns nesting level of the current item, null if there is no selection
   */
  get currentItemLevel() {
    const t = this.currentItem;
    if (t === null)
      return null;
    let n = t.parentNode, r = 0;
    for (; n !== null && n !== this.listWrapper; )
      E(n) && n.classList.contains(m.item) && (r += 1), n = n.parentNode;
    return r + 1;
  }
  /**
   * Assign all passed params and renderer to relevant class properties
   * @param params - tool constructor options
   * @param params.data - previously saved data
   * @param params.config - user config for Tool
   * @param params.api - Editor.js API
   * @param params.readOnly - read-only mode flag
   * @param renderer - renderer instance initialized in tool class
   */
  constructor({ data: t, config: n, api: r, readOnly: i, block: a }, l) {
    this.config = n, this.data = t, this.readOnly = i, this.api = r, this.block = a, this.renderer = l;
  }
  /**
   * Function that is responsible for rendering list with contents
   * @returns Filled with content wrapper element of the list
   */
  render() {
    return this.listWrapper = this.renderer.renderWrapper(!0), this.data.items.length ? this.appendItems(this.data.items, this.listWrapper) : this.appendItems(
      [
        {
          content: "",
          meta: {},
          items: []
        }
      ],
      this.listWrapper
    ), this.readOnly || this.listWrapper.addEventListener(
      "keydown",
      (t) => {
        switch (t.key) {
          case "Enter":
            this.enterPressed(t);
            break;
          case "Backspace":
            this.backspace(t);
            break;
          case "Tab":
            t.shiftKey ? this.shiftTab(t) : this.addTab(t);
            break;
        }
      },
      !1
    ), "start" in this.data.meta && this.data.meta.start !== void 0 && this.changeStartWith(this.data.meta.start), "counterType" in this.data.meta && this.data.meta.counterType !== void 0 && this.changeCounters(this.data.meta.counterType), this.listWrapper;
  }
  /**
   * Function that is responsible for list content saving
   * @param wrapper - optional argument wrapper
   * @returns whole list saved data if wrapper not passes, otherwise will return data of the passed wrapper
   */
  save(t) {
    const n = t ?? this.listWrapper, r = (l) => S(l).map((u) => {
      const c = O(u), o = this.renderer.getItemContent(u), p = this.renderer.getItemMeta(u), g = c ? r(c) : [];
      return {
        content: o,
        meta: p,
        items: g
      };
    }), i = n ? r(n) : [];
    let a = {
      style: this.data.style,
      meta: {},
      items: i
    };
    return this.data.style === "ordered" && (a.meta = {
      start: this.data.meta.start,
      counterType: this.data.meta.counterType
    }), a;
  }
  /**
   * On paste sanitzation config. Allow only tags that are allowed in the Tool.
   * @returns - config that determines tags supposted by paste handler
   * @todo - refactor and move to list instance
   */
  static get pasteConfig() {
    return {
      tags: ["OL", "UL", "LI"]
    };
  }
  /**
   * Method that specified hot to merge two List blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * Content of the first item of the next List would be merged with deepest item in current list
   * Other items of the next List would be appended to the current list without any changes in nesting levels
   * @param data - data of the second list to be merged with current
   */
  merge(t) {
    const n = this.block.holder.querySelectorAll(`.${m.item}`), r = n[n.length - 1], i = w(r);
    if (r === null || i === null || (i.insertAdjacentHTML("beforeend", t.items[0].content), this.listWrapper === void 0))
      return;
    const a = S(this.listWrapper);
    if (a.length === 0)
      return;
    const l = a[a.length - 1];
    let s = O(l);
    const u = t.items.shift();
    u !== void 0 && (u.items.length !== 0 && (s === null && (s = this.renderer.renderWrapper(!1)), this.appendItems(u.items, s)), t.items.length > 0 && this.appendItems(t.items, this.listWrapper));
  }
  /**
   * On paste callback that is fired from Editor.
   * @param event - event with pasted data
   * @todo - refactor and move to list instance
   */
  onPaste(t) {
    const n = t.detail.data;
    this.data = this.pasteHandler(n);
    const r = this.listWrapper;
    r && r.parentNode && r.parentNode.replaceChild(this.render(), r);
  }
  /**
   * Handle UL, OL and LI tags paste and returns List data
   * @param element - html element that contains whole list
   * @todo - refactor and move to list instance
   */
  pasteHandler(t) {
    const { tagName: n } = t;
    let r = "unordered", i = "";
    switch (n) {
      case "OL":
        r = "ordered", i = "ol";
        break;
      case "UL":
      case "LI":
        r = "unordered", i = "ul";
        break;
      default:
        i = "ul";
    }
    const a = {
      style: r,
      meta: {},
      items: []
    };
    r === "ordered" && (a.meta.counterType = "numeric", a.meta.start = 1);
    const l = (c) => {
      let o = [];
      return Array.from(c.querySelectorAll(`:scope > li, :scope > ${i}`)).forEach((g) => {
        if (g.tagName === n) {
          const C = u(c), h = o.pop();
          h && (h.items = C, o.push(h));
        } else {
          const C = s(g);
          o.push(C);
        }
      }), o;
    }, s = (c) => {
      const o = u(c);
      return {
        content: c.firstChild && c.firstChild.textContent || "",
        meta: {},
        items: o
      };
    }, u = (c) => {
      let o = [];
      return Array.from(c.querySelectorAll(`:scope > ${i}`)).forEach((g) => {
        o = o.concat(l(g));
      }), o;
    };
    return a.items = l(t), a;
  }
  /**
   * Changes ordered list start property value
   * @param index - new value of the start property
   */
  changeStartWith(t) {
    this.listWrapper.style.setProperty("counter-reset", `item ${t - 1}`), this.data.meta.start = t;
  }
  /**
   * Changes ordered list counterType property value
   * @param counterType - new value of the counterType value
   */
  changeCounters(t) {
    this.listWrapper.style.setProperty("--list-counter-type", t), this.data.meta.counterType = t;
  }
  /**
   * Handles Enter keypress
   * @param event - keydown
   */
  enterPressed(t) {
    var s;
    const n = this.currentItem;
    if (t.stopPropagation(), t.preventDefault(), t.isComposing || n === null)
      return;
    const r = ((s = this.renderer) == null ? void 0 : s.getItemContent(n).trim().length) === 0, i = n.parentNode === this.listWrapper, a = n.previousElementSibling === null, l = this.api.blocks.getCurrentBlockIndex();
    if (i && r)
      if (Jn(n) && !Qn(n)) {
        a ? this.convertItemToDefaultBlock(l, !0) : this.convertItemToDefaultBlock();
        return;
      } else {
        this.splitList(n);
        return;
      }
    else if (r) {
      this.unshiftItem(n);
      return;
    } else
      this.splitItem(n);
  }
  /**
   * Handle backspace
   * @param event - keydown
   */
  backspace(t) {
    var r;
    const n = this.currentItem;
    if (n !== null && P.isCaretAtStartOfInput(n) && ((r = window.getSelection()) == null ? void 0 : r.isCollapsed) !== !1) {
      if (t.stopPropagation(), n.parentNode === this.listWrapper && n.previousElementSibling === null) {
        this.convertFirstItemToDefaultBlock();
        return;
      }
      t.preventDefault(), this.mergeItemWithPrevious(n);
    }
  }
  /**
   * Reduce indentation for current item
   * @param event - keydown
   */
  shiftTab(t) {
    t.stopPropagation(), t.preventDefault(), this.currentItem !== null && this.unshiftItem(this.currentItem);
  }
  /**
   * Decrease indentation of the passed item
   * @param item - list item to be unshifted
   */
  unshiftItem(t) {
    if (!t.parentNode || !E(t.parentNode))
      return;
    const n = t.parentNode.closest(`.${m.item}`);
    if (!n)
      return;
    let r = O(t);
    if (t.parentElement === null)
      return;
    const i = R(t);
    i !== null && (r === null && (r = this.renderer.renderWrapper(!1)), i.forEach((a) => {
      r.appendChild(a);
    }), t.appendChild(r)), n.after(t), k(t, !1), q(n);
  }
  /**
   * Method that is used for list splitting and moving trailing items to the new separated list
   * @param item - current item html element
   */
  splitList(t) {
    const n = S(t), r = this.block, i = this.api.blocks.getCurrentBlockIndex();
    if (n.length !== 0) {
      const u = n[0];
      this.unshiftItem(u), k(t, !1);
    }
    if (t.previousElementSibling === null && t.parentNode === this.listWrapper) {
      this.convertItemToDefaultBlock(i);
      return;
    }
    const a = R(t);
    if (a === null)
      return;
    const l = this.renderer.renderWrapper(!0);
    a.forEach((u) => {
      l.appendChild(u);
    });
    const s = this.save(l);
    s.meta.start = this.data.style == "ordered" ? 1 : void 0, this.api.blocks.insert(r == null ? void 0 : r.name, s, this.config, i + 1), this.convertItemToDefaultBlock(i + 1), l.remove();
  }
  /**
   * Method that is used for splitting item content and moving trailing content to the new sibling item
   * @param currentItem - current item html element
   */
  splitItem(t) {
    const [n, r] = P.getCaretNodeAndOffset();
    if (n === null)
      return;
    const i = w(t);
    let a;
    i === null ? a = "" : a = P.getContenteditableSlice(i, n, r, "right", !0);
    const l = O(t), s = this.renderItem(a);
    t == null || t.after(s), l && s.appendChild(l), k(s);
  }
  /**
   * Method that is used for merging current item with previous one
   * Content of the current item would be appended to the previous item
   * Current item children would not change nesting level
   * @param item - current item html element
   */
  mergeItemWithPrevious(t) {
    const n = t.previousElementSibling, r = t.parentNode;
    if (r === null || !E(r))
      return;
    const i = r.closest(`.${m.item}`);
    if (!n && !i || n && !E(n))
      return;
    let a;
    if (n) {
      const p = S(n, !1);
      p.length !== 0 && p.length !== 0 ? a = p[p.length - 1] : a = n;
    } else
      a = i;
    const l = this.renderer.getItemContent(t);
    if (!a)
      return;
    k(a, !1);
    const s = w(a);
    if (s === null)
      return;
    s.insertAdjacentHTML("beforeend", l);
    const u = S(t);
    if (u.length === 0) {
      t.remove(), q(a);
      return;
    }
    const c = n || i, o = O(c) ?? this.renderer.renderWrapper(!1);
    n ? u.forEach((p) => {
      o.appendChild(p);
    }) : u.forEach((p) => {
      o.prepend(p);
    }), O(c) === null && a.appendChild(o), t.remove();
  }
  /**
   * Add indentation to current item
   * @param event - keydown
   */
  addTab(t) {
    var a;
    t.stopPropagation(), t.preventDefault();
    const n = this.currentItem;
    if (!n)
      return;
    if (((a = this.config) == null ? void 0 : a.maxLevel) !== void 0) {
      const l = this.currentItemLevel;
      if (l !== null && l === this.config.maxLevel)
        return;
    }
    const r = n.previousSibling;
    if (r === null || !E(r))
      return;
    const i = O(r);
    if (i)
      i.appendChild(n), S(n).forEach((s) => {
        i.appendChild(s);
      });
    else {
      const l = this.renderer.renderWrapper(!1);
      l.appendChild(n), S(n).forEach((u) => {
        l.appendChild(u);
      }), r.appendChild(l);
    }
    q(n), k(n, !1);
  }
  /**
   * Convert current item to default block with passed index
   * @param newBloxkIndex - optional parameter represents index, where would be inseted default block
   * @param removeList - optional parameter, that represents condition, if List should be removed
   */
  convertItemToDefaultBlock(t, n) {
    let r;
    const i = this.currentItem, a = i !== null ? this.renderer.getItemContent(i) : "";
    n === !0 && this.api.blocks.delete(), t !== void 0 ? r = this.api.blocks.insert(void 0, { text: a }, void 0, t) : r = this.api.blocks.insert(), i == null || i.remove(), this.api.caret.setToBlock(r, "start");
  }
  /**
   * Convert first item of the list to default block
   * This method could be called when backspace button pressed at start of the first item of the list
   * First item of the list would be converted to the paragraph and first item children would be unshifted
   */
  convertFirstItemToDefaultBlock() {
    const t = this.currentItem;
    if (t === null)
      return;
    const n = S(t);
    if (n.length !== 0) {
      const l = n[0];
      this.unshiftItem(l), k(t);
    }
    const r = R(t), i = this.api.blocks.getCurrentBlockIndex(), a = r === null;
    this.convertItemToDefaultBlock(i, a);
  }
  /**
   * Method that calls render function of the renderer with a necessary item meta cast
   * @param itemContent - content to be rendered in new item
   * @param meta - meta used in list item rendering
   * @returns html element of the rendered item
   */
  renderItem(t, n) {
    const r = n ?? this.renderer.composeDefaultMeta();
    switch (!0) {
      case this.renderer instanceof b:
        return this.renderer.renderItem(t, r);
      case this.renderer instanceof y:
        return this.renderer.renderItem(t, r);
      default:
        return this.renderer.renderItem(t, r);
    }
  }
  /**
   * Renders children list
   * @param items - list data used in item rendering
   * @param parentElement - where to append passed items
   */
  appendItems(t, n) {
    t.forEach((r) => {
      var a;
      const i = this.renderItem(r.content, r.meta);
      if (n.appendChild(i), r.items.length) {
        const l = (a = this.renderer) == null ? void 0 : a.renderWrapper(!1);
        this.appendItems(r.items, l), i.appendChild(l);
      }
    });
  }
}
function Zn(e) {
  return typeof e.items[0] == "string";
}
function xn(e) {
  return !("meta" in e);
}
function er(e) {
  return typeof e.items[0] != "string" && "text" in e.items[0] && "checked" in e.items[0] && typeof e.items[0].text == "string" && typeof e.items[0].checked == "boolean";
}
function tr(e) {
  const t = [];
  return Zn(e) ? (e.items.forEach((n) => {
    t.push({
      content: n,
      meta: {},
      items: []
    });
  }), {
    style: e.style,
    meta: {},
    items: t
  }) : er(e) ? (e.items.forEach((n) => {
    t.push({
      content: n.text,
      meta: {
        checked: n.checked
      },
      items: []
    });
  }), {
    style: "checklist",
    meta: {},
    items: t
  }) : xn(e) ? {
    style: e.style,
    meta: {},
    items: e.items
  } : e;
}
class rt {
  /**
   * Notify core that read-only mode is supported
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Allow to use native Enter behaviour
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   */
  static get toolbox() {
    return [
      {
        icon: we,
        title: "List",
        data: {
          style: "unordered"
        }
      }
      // {
      //   icon: IconListNumbered,
      //   title: 'Ordered List',
      //   data: {
      //     style: 'ordered',
      //   },
      // },
    ];
  }
  /**
   * On paste sanitzation config. Allow only tags that are allowed in the Tool.
   * @returns - paste config object used in editor
   */
  static get pasteConfig() {
    return {
      tags: ["OL", "UL", "LI"]
    };
  }
  /**
   * Convert from text to list with import and export list to text
   */
  static get conversionConfig() {
    return {
      import: (t, n) => ({
        meta: {},
        items: [
          {
            content: t,
            meta: {},
            items: []
          }
        ],
        style: (n == null ? void 0 : n.defaultStyle) !== void 0 ? n.defaultStyle : "unordered"
      })
    };
  }
  /**
   * Get list style name
   */
  get listStyle() {
    return this.data.style || this.defaultListStyle;
  }
  /**
   * Set list style
   * @param style - new style to set
   */
  set listStyle(t) {
    var r;
    this.data.style = t, this.changeTabulatorByStyle();
    const n = this.list.render();
    (r = this.listElement) == null || r.replaceWith(n), this.listElement = n;
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   * @param params - tool constructor options
   * @param params.data - previously saved data
   * @param params.config - user config for Tool
   * @param params.api - Editor.js API
   * @param params.readOnly - read-only mode flag
   */
  constructor({ data: t, config: n, api: r, readOnly: i, block: a }) {
    var s;
    this.api = r, this.readOnly = i, this.config = n, this.block = a, this.defaultListStyle = ((s = this.config) == null ? void 0 : s.defaultStyle) || "unordered";
    const l = {
      style: this.defaultListStyle,
      meta: {},
      items: []
    };
    this.data = Object.keys(t).length ? tr(t) : l, this.listStyle === "ordered" && this.data.meta.counterType === void 0 && (this.data.meta.counterType = "numeric"), this.changeTabulatorByStyle();
  }
  /**
   * Convert from list to text for conversionConfig
   * @param data - current data of the list
   * @returns - string of the recursively merged contents of the items of the list
   */
  static joinRecursive(t) {
    return t.items.map((n) => `${n.content} ${rt.joinRecursive(n)}`).join("");
  }
  /**
   * Function that is responsible for content rendering
   * @returns rendered list wrapper with all contents
   */
  render() {
    return this.listElement = this.list.render(), this.listElement;
  }
  /**
   * Function that is responsible for content saving
   * @returns formatted content used in editor
   */
  save() {
    return this.data = this.list.save(), this.data;
  }
  /**
   * Function that is responsible for mergind two lists into one
   * @param data - data of the next standing list, that should be merged with current
   */
  merge(t) {
    this.list.merge(t);
  }
  /**
   * Creates Block Tune allowing to change the list style
   * @returns array of tune configs
   */
  renderSettings() {
    return [
      {
        label: this.api.i18n.t("Unordered"),
        icon: we,
        closeOnActivate: !0,
        isActive: this.listStyle == "unordered",
        onActivate: () => {
          this.listStyle = "unordered";
        }
      },
      {
        label: this.api.i18n.t("Ordered"),
        icon: vt,
        closeOnActivate: !0,
        isActive: this.listStyle == "ordered",
        onActivate: () => {
          this.listStyle = "ordered";
        }
      }
    ];
  }
  /**
   * On paste callback that is fired from Editor.
   * @param event - event with pasted data
   */
  onPaste(t) {
    const { tagName: n } = t.detail.data;
    switch (n) {
      case "OL":
        this.listStyle = "ordered";
        break;
      case "UL":
      case "LI":
        this.listStyle = "unordered";
    }
    this.list.onPaste(t);
  }
  /**
   * Handle UL, OL and LI tags paste and returns List data
   * @param element - html element that contains whole list
   */
  pasteHandler(t) {
    return this.list.pasteHandler(t);
  }
  /**
   * Changes ordered list counterType property value
   * @param counterType - new value of the counterType value
   */
  changeCounters(t) {
    var n;
    (n = this.list) == null || n.changeCounters(t), this.data.meta.counterType = t;
  }
  /**
   * Changes ordered list start property value
   * @param index - new value of the start property
   */
  changeStartWith(t) {
    var n;
    (n = this.list) == null || n.changeStartWith(t), this.data.meta.start = t;
  }
  /**
   * This method allows changing tabulator respectfully to passed style
   */
  changeTabulatorByStyle() {
    switch (this.listStyle) {
      case "ordered":
        this.list = new G(
          {
            data: this.data,
            readOnly: this.readOnly,
            api: this.api,
            config: this.config,
            block: this.block
          },
          new b(this.readOnly, this.config)
        );
        break;
      case "unordered":
        this.list = new G(
          {
            data: this.data,
            readOnly: this.readOnly,
            api: this.api,
            config: this.config,
            block: this.block
          },
          new y(this.readOnly, this.config)
        );
        break;
      case "checklist":
        this.list = new G(
          {
            data: this.data,
            readOnly: this.readOnly,
            api: this.api,
            config: this.config,
            block: this.block
          },
          new f(this.readOnly, this.config)
        );
        break;
    }
  }
}
export {
  rt as default
};
