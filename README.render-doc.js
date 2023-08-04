var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import require2 from "./dist/__require.js";
var Ne = Object.create, Te = Object.defineProperty, Me = Object.getOwnPropertyDescriptor, Ve = Object.getOwnPropertyNames, Ue = Object.getPrototypeOf, Be = Object.prototype.hasOwnProperty, re = (t, e) => () => (t && (e = t(t = 0)), e), C = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports), ze = (t, e, r, n) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let a of Ve(e))
      !Be.call(t, a) && a !== r && Te(t, a, { get: () => e[a], enumerable: !(n = Me(e, a)) || n.enumerable });
  return t;
}, J = (t, e, r) => (r = t != null ? Ne(Ue(t)) : {}, ze(e || !t || !t.__esModule ? Te(r, "default", { value: t, enumerable: true }) : r, t)), b = re(() => {
}), m = re(() => {
}), g = re(() => {
}), h = re(() => {
}), _ = re(() => {
}), Ke = C((t, e) => {
  b(), m(), g(), h(), _();
  function r(n, a, u, c) {
    var l = -1, f = n == null ? 0 : n.length;
    for (c && f && (u = n[++l]); ++l < f; )
      u = a(u, n[l], l, n);
    return u;
  }
  e.exports = r;
}), Ze = C((t, e) => {
  b(), m(), g(), h(), _();
  function r(n) {
    return function(a) {
      return n == null ? void 0 : n[a];
    };
  }
  e.exports = r;
}), He = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = Ze(), n = { \u00C0: "A", \u00C1: "A", \u00C2: "A", \u00C3: "A", \u00C4: "A", \u00C5: "A", \u00E0: "a", \u00E1: "a", \u00E2: "a", \u00E3: "a", \u00E4: "a", \u00E5: "a", \u00C7: "C", \u00E7: "c", \u00D0: "D", \u00F0: "d", \u00C8: "E", \u00C9: "E", \u00CA: "E", \u00CB: "E", \u00E8: "e", \u00E9: "e", \u00EA: "e", \u00EB: "e", \u00CC: "I", \u00CD: "I", \u00CE: "I", \u00CF: "I", \u00EC: "i", \u00ED: "i", \u00EE: "i", \u00EF: "i", \u00D1: "N", \u00F1: "n", \u00D2: "O", \u00D3: "O", \u00D4: "O", \u00D5: "O", \u00D6: "O", \u00D8: "O", \u00F2: "o", \u00F3: "o", \u00F4: "o", \u00F5: "o", \u00F6: "o", \u00F8: "o", \u00D9: "U", \u00DA: "U", \u00DB: "U", \u00DC: "U", \u00F9: "u", \u00FA: "u", \u00FB: "u", \u00FC: "u", \u00DD: "Y", \u00FD: "y", \u00FF: "y", \u00C6: "Ae", \u00E6: "ae", \u00DE: "Th", \u00FE: "th", \u00DF: "ss", \u0100: "A", \u0102: "A", \u0104: "A", \u0101: "a", \u0103: "a", \u0105: "a", \u0106: "C", \u0108: "C", \u010A: "C", \u010C: "C", \u0107: "c", \u0109: "c", \u010B: "c", \u010D: "c", \u010E: "D", \u0110: "D", \u010F: "d", \u0111: "d", \u0112: "E", \u0114: "E", \u0116: "E", \u0118: "E", \u011A: "E", \u0113: "e", \u0115: "e", \u0117: "e", \u0119: "e", \u011B: "e", \u011C: "G", \u011E: "G", \u0120: "G", \u0122: "G", \u011D: "g", \u011F: "g", \u0121: "g", \u0123: "g", \u0124: "H", \u0126: "H", \u0125: "h", \u0127: "h", \u0128: "I", \u012A: "I", \u012C: "I", \u012E: "I", \u0130: "I", \u0129: "i", \u012B: "i", \u012D: "i", \u012F: "i", \u0131: "i", \u0134: "J", \u0135: "j", \u0136: "K", \u0137: "k", \u0138: "k", \u0139: "L", \u013B: "L", \u013D: "L", \u013F: "L", \u0141: "L", \u013A: "l", \u013C: "l", \u013E: "l", \u0140: "l", \u0142: "l", \u0143: "N", \u0145: "N", \u0147: "N", \u014A: "N", \u0144: "n", \u0146: "n", \u0148: "n", \u014B: "n", \u014C: "O", \u014E: "O", \u0150: "O", \u014D: "o", \u014F: "o", \u0151: "o", \u0154: "R", \u0156: "R", \u0158: "R", \u0155: "r", \u0157: "r", \u0159: "r", \u015A: "S", \u015C: "S", \u015E: "S", \u0160: "S", \u015B: "s", \u015D: "s", \u015F: "s", \u0161: "s", \u0162: "T", \u0164: "T", \u0166: "T", \u0163: "t", \u0165: "t", \u0167: "t", \u0168: "U", \u016A: "U", \u016C: "U", \u016E: "U", \u0170: "U", \u0172: "U", \u0169: "u", \u016B: "u", \u016D: "u", \u016F: "u", \u0171: "u", \u0173: "u", \u0174: "W", \u0175: "w", \u0176: "Y", \u0177: "y", \u0178: "Y", \u0179: "Z", \u017B: "Z", \u017D: "Z", \u017A: "z", \u017C: "z", \u017E: "z", \u0132: "IJ", \u0133: "ij", \u0152: "Oe", \u0153: "oe", \u0149: "'n", \u017F: "s" }, a = r(n);
  e.exports = a;
}), Ge = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
  e.exports = r;
}), Ye = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = Ge(), n = typeof self == "object" && self && self.Object === Object && self, a = r || n || Function("return this")();
  e.exports = a;
}), de = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = Ye(), n = r.Symbol;
  e.exports = n;
}), Je = C((t, e) => {
  b(), m(), g(), h(), _();
  function r(n, a) {
    for (var u = -1, c = n == null ? 0 : n.length, l = Array(c); ++u < c; )
      l[u] = a(n[u], u, n);
    return l;
  }
  e.exports = r;
}), We = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = Array.isArray;
  e.exports = r;
}), Xe = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = de(), n = Object.prototype, a = n.hasOwnProperty, u = n.toString, c = r ? r.toStringTag : void 0;
  function l(f) {
    var O = a.call(f, c), w = f[c];
    try {
      f[c] = void 0;
      var $ = true;
    } catch {
    }
    var P = u.call(f);
    return $ && (O ? f[c] = w : delete f[c]), P;
  }
  e.exports = l;
}), qe = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = Object.prototype, n = r.toString;
  function a(u) {
    return n.call(u);
  }
  e.exports = a;
}), Qe = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = de(), n = Xe(), a = qe(), u = "[object Null]", c = "[object Undefined]", l = r ? r.toStringTag : void 0;
  function f(O) {
    return O == null ? O === void 0 ? c : u : l && l in Object(O) ? n(O) : a(O);
  }
  e.exports = f;
}), et = C((t, e) => {
  b(), m(), g(), h(), _();
  function r(n) {
    return n != null && typeof n == "object";
  }
  e.exports = r;
}), tt = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = Qe(), n = et(), a = "[object Symbol]";
  function u(c) {
    return typeof c == "symbol" || n(c) && r(c) == a;
  }
  e.exports = u;
}), rt = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = de(), n = Je(), a = We(), u = tt(), c = 1 / 0, l = r ? r.prototype : void 0, f = l ? l.toString : void 0;
  function O(w) {
    if (typeof w == "string")
      return w;
    if (a(w))
      return n(w, O) + "";
    if (u(w))
      return f ? f.call(w) : "";
    var $ = w + "";
    return $ == "0" && 1 / w == -c ? "-0" : $;
  }
  e.exports = O;
}), ye = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = rt();
  function n(a) {
    return a == null ? "" : r(a);
  }
  e.exports = n;
}), nt = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = He(), n = ye(), a = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, u = "\\u0300-\\u036f", c = "\\ufe20-\\ufe2f", l = "\\u20d0-\\u20ff", f = u + c + l, O = "[" + f + "]", w = RegExp(O, "g");
  function $(P) {
    return P = n(P), P && P.replace(a, r).replace(w, "");
  }
  e.exports = $;
}), ot = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
  function n(a) {
    return a.match(r) || [];
  }
  e.exports = n;
}), at = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
  function n(a) {
    return r.test(a);
  }
  e.exports = n;
}), ut = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = "\\ud800-\\udfff", n = "\\u0300-\\u036f", a = "\\ufe20-\\ufe2f", u = "\\u20d0-\\u20ff", c = n + a + u, l = "\\u2700-\\u27bf", f = "a-z\\xdf-\\xf6\\xf8-\\xff", O = "\\xac\\xb1\\xd7\\xf7", w = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", $ = "\\u2000-\\u206f", P = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", N = "A-Z\\xc0-\\xd6\\xd8-\\xde", L = "\\ufe0e\\ufe0f", R2 = O + w + $ + P, k = "['\u2019]", K2 = "[" + R2 + "]", v = "[" + c + "]", x = "\\d+", T = "[" + l + "]", F = "[" + f + "]", M = "[^" + r + R2 + x + l + f + N + "]", V = "\\ud83c[\\udffb-\\udfff]", Z = "(?:" + v + "|" + V + ")", A = "[^" + r + "]", D = "(?:\\ud83c[\\udde6-\\uddff]){2}", j = "[\\ud800-\\udbff][\\udc00-\\udfff]", z2 = "[" + N + "]", G = "\\u200d", o = "(?:" + F + "|" + M + ")", i = "(?:" + z2 + "|" + M + ")", s = "(?:" + k + "(?:d|ll|m|re|s|t|ve))?", p = "(?:" + k + "(?:D|LL|M|RE|S|T|VE))?", y = Z + "?", d2 = "[" + L + "]?", S2 = "(?:" + G + "(?:" + [A, D, j].join("|") + ")" + d2 + y + ")*", I = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Y = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", E = d2 + y + S2, H2 = "(?:" + [T, D, j].join("|") + ")" + E, q2 = RegExp([z2 + "?" + F + "+" + s + "(?=" + [K2, z2, "$"].join("|") + ")", i + "+" + p + "(?=" + [K2, z2 + o, "$"].join("|") + ")", z2 + "?" + o + "+" + s, z2 + "+" + p, Y, I, x, H2].join("|"), "g");
  function U2(Q) {
    return Q.match(q2) || [];
  }
  e.exports = U2;
}), it = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = ot(), n = at(), a = ye(), u = ut();
  function c(l, f, O) {
    return l = a(l), f = O ? void 0 : f, f === void 0 ? n(l) ? u(l) : r(l) : l.match(f) || [];
  }
  e.exports = c;
}), ct = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = Ke(), n = nt(), a = it(), u = "['\u2019]", c = RegExp(u, "g");
  function l(f) {
    return function(O) {
      return r(a(n(O).replace(c, "")), f, "");
    };
  }
  e.exports = l;
}), st = C((t, e) => {
  b(), m(), g(), h(), _();
  function r(n, a, u) {
    var c = -1, l = n.length;
    a < 0 && (a = -a > l ? 0 : l + a), u = u > l ? l : u, u < 0 && (u += l), l = a > u ? 0 : u - a >>> 0, a >>>= 0;
    for (var f = Array(l); ++c < l; )
      f[c] = n[c + a];
    return f;
  }
  e.exports = r;
}), lt = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = st();
  function n(a, u, c) {
    var l = a.length;
    return c = c === void 0 ? l : c, !u && c >= l ? a : r(a, u, c);
  }
  e.exports = n;
}), $e = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = "\\ud800-\\udfff", n = "\\u0300-\\u036f", a = "\\ufe20-\\ufe2f", u = "\\u20d0-\\u20ff", c = n + a + u, l = "\\ufe0e\\ufe0f", f = "\\u200d", O = RegExp("[" + f + r + c + l + "]");
  function w($) {
    return O.test($);
  }
  e.exports = w;
}), pt = C((t, e) => {
  b(), m(), g(), h(), _();
  function r(n) {
    return n.split("");
  }
  e.exports = r;
}), ft = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = "\\ud800-\\udfff", n = "\\u0300-\\u036f", a = "\\ufe20-\\ufe2f", u = "\\u20d0-\\u20ff", c = n + a + u, l = "\\ufe0e\\ufe0f", f = "[" + r + "]", O = "[" + c + "]", w = "\\ud83c[\\udffb-\\udfff]", $ = "(?:" + O + "|" + w + ")", P = "[^" + r + "]", N = "(?:\\ud83c[\\udde6-\\uddff]){2}", L = "[\\ud800-\\udbff][\\udc00-\\udfff]", R2 = "\\u200d", k = $ + "?", K2 = "[" + l + "]?", v = "(?:" + R2 + "(?:" + [P, N, L].join("|") + ")" + K2 + k + ")*", x = K2 + k + v, T = "(?:" + [P + O + "?", O, N, L, f].join("|") + ")", F = RegExp(w + "(?=" + w + ")|" + T + x, "g");
  function M(V) {
    return V.match(F) || [];
  }
  e.exports = M;
}), dt = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = pt(), n = $e(), a = ft();
  function u(c) {
    return n(c) ? a(c) : r(c);
  }
  e.exports = u;
}), yt = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = lt(), n = $e(), a = dt(), u = ye();
  function c(l) {
    return function(f) {
      f = u(f);
      var O = n(f) ? a(f) : void 0, w = O ? O[0] : f.charAt(0), $ = O ? r(O, 1).join("") : f.slice(1);
      return w[l]() + $;
    };
  }
  e.exports = c;
}), vt = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = yt(), n = r("toUpperCase");
  e.exports = n;
}), bt = C((t, e) => {
  b(), m(), g(), h(), _();
  var r = ct(), n = vt(), a = r(function(u, c, l) {
    return u + (l ? " " : "") + n(c);
  });
  e.exports = a;
}), mt = C(() => {
  b(), m(), g(), h(), _();
}), gt = C((t) => {
  b(), m(), g(), h(), _(), Object.defineProperty(t, "__esModule", { value: true });
  var e = mt();
  Object.keys(e).forEach(function(r) {
    r === "default" || r === "__esModule" || Object.defineProperty(t, r, { enumerable: true, get: function() {
      return e[r];
    } });
  });
}), W = C((t) => {
  b(), m(), g(), h(), _(), Object.defineProperty(t, "__esModule", { value: true });
  var e = { sanitize: true, toId: true, storyNameFromExport: true, isExportStory: true, parseKind: true };
  t.isExportStory = k, t.parseKind = t.storyNameFromExport = t.toId = t.sanitize = void 0;
  var r = a(bt()), n = gt();
  Object.keys(n).forEach(function(v) {
    v === "default" || v === "__esModule" || Object.prototype.hasOwnProperty.call(e, v) || Object.defineProperty(t, v, { enumerable: true, get: function() {
      return n[v];
    } });
  });
  function a(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function u(v, x) {
    return w(v) || O(v, x) || l(v, x) || c();
  }
  function c() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function l(v, x) {
    if (v) {
      if (typeof v == "string")
        return f(v, x);
      var T = Object.prototype.toString.call(v).slice(8, -1);
      if (T === "Object" && v.constructor && (T = v.constructor.name), T === "Map" || T === "Set")
        return Array.from(T);
      if (T === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))
        return f(v, x);
    }
  }
  function f(v, x) {
    (x == null || x > v.length) && (x = v.length);
    for (var T = 0, F = new Array(x); T < x; T++)
      F[T] = v[T];
    return F;
  }
  function O(v, x) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(v)))) {
      var T = [], F = true, M = false, V = void 0;
      try {
        for (var Z = v[Symbol.iterator](), A; !(F = (A = Z.next()).done) && (T.push(A.value), !(x && T.length === x)); F = true)
          ;
      } catch (D) {
        M = true, V = D;
      } finally {
        try {
          !F && Z.return != null && Z.return();
        } finally {
          if (M)
            throw V;
        }
      }
      return T;
    }
  }
  function w(v) {
    if (Array.isArray(v))
      return v;
  }
  var $ = function(v) {
    return v.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-").replace(/-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
  };
  t.sanitize = $;
  var P = function(v, x) {
    var T = $(v);
    if (T === "")
      throw new Error("Invalid ".concat(x, " '").concat(v, "', must include alphanumeric characters"));
    return T;
  }, N = function(v, x) {
    return "".concat(P(v, "kind")).concat(x ? "--".concat(P(x, "name")) : "");
  };
  t.toId = N;
  var L = function(v) {
    return (0, r.default)(v);
  };
  t.storyNameFromExport = L;
  function R2(v, x) {
    return Array.isArray(x) ? x.includes(v) : v.match(x);
  }
  function k(v, x) {
    var T = x.includeStories, F = x.excludeStories;
    return v !== "__esModule" && (!T || R2(v, T)) && (!F || !R2(v, F));
  }
  var K2 = function(v, x) {
    var T = x.rootSeparator, F = x.groupSeparator, M = v.split(T, 2), V = u(M, 2), Z = V[0], A = V[1], D = (A || v).split(F).filter(function(j) {
      return !!j;
    });
    return { root: A ? Z : null, groups: D };
  };
  t.parseKind = K2;
}), ht = C((t, e) => {
  b(), m(), g(), h(), _();
  var r, n, a, u, c, l, f, O, w, $, P, N, L, R2, k, K2, v, x, T, F, M, V, Z, A, D;
  (function(j) {
    var z2 = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof this == "object" ? this : {};
    typeof define == "function" && define.amd ? define("tslib", ["exports"], function(o) {
      j(G(z2, G(o)));
    }) : typeof e == "object" && typeof e.exports == "object" ? j(G(z2, G(e.exports))) : j(G(z2));
    function G(o, i) {
      return o !== z2 && (typeof Object.create == "function" ? Object.defineProperty(o, "__esModule", { value: true }) : o.__esModule = true), function(s, p) {
        return o[s] = i ? i(s, p) : p;
      };
    }
  })(function(j) {
    var z2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, i) {
      o.__proto__ = i;
    } || function(o, i) {
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (o[s] = i[s]);
    };
    r = function(o, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
      z2(o, i);
      function s() {
        this.constructor = o;
      }
      o.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
    }, n = Object.assign || function(o) {
      for (var i, s = 1, p = arguments.length; s < p; s++) {
        i = arguments[s];
        for (var y in i)
          Object.prototype.hasOwnProperty.call(i, y) && (o[y] = i[y]);
      }
      return o;
    }, a = function(o, i) {
      var s = {};
      for (var p in o)
        Object.prototype.hasOwnProperty.call(o, p) && i.indexOf(p) < 0 && (s[p] = o[p]);
      if (o != null && typeof Object.getOwnPropertySymbols == "function")
        for (var y = 0, p = Object.getOwnPropertySymbols(o); y < p.length; y++)
          i.indexOf(p[y]) < 0 && Object.prototype.propertyIsEnumerable.call(o, p[y]) && (s[p[y]] = o[p[y]]);
      return s;
    }, u = function(o, i, s, p) {
      var y = arguments.length, d2 = y < 3 ? i : p === null ? p = Object.getOwnPropertyDescriptor(i, s) : p, S2;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        d2 = Reflect.decorate(o, i, s, p);
      else
        for (var I = o.length - 1; I >= 0; I--)
          (S2 = o[I]) && (d2 = (y < 3 ? S2(d2) : y > 3 ? S2(i, s, d2) : S2(i, s)) || d2);
      return y > 3 && d2 && Object.defineProperty(i, s, d2), d2;
    }, c = function(o, i) {
      return function(s, p) {
        i(s, p, o);
      };
    }, l = function(o, i) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, i);
    }, f = function(o, i, s, p) {
      function y(d2) {
        return d2 instanceof s ? d2 : new s(function(S2) {
          S2(d2);
        });
      }
      return new (s || (s = Promise))(function(d2, S2) {
        function I(H2) {
          try {
            E(p.next(H2));
          } catch (q2) {
            S2(q2);
          }
        }
        function Y(H2) {
          try {
            E(p.throw(H2));
          } catch (q2) {
            S2(q2);
          }
        }
        function E(H2) {
          H2.done ? d2(H2.value) : y(H2.value).then(I, Y);
        }
        E((p = p.apply(o, i || [])).next());
      });
    }, O = function(o, i) {
      var s = { label: 0, sent: function() {
        if (d2[0] & 1)
          throw d2[1];
        return d2[1];
      }, trys: [], ops: [] }, p, y, d2, S2;
      return S2 = { next: I(0), throw: I(1), return: I(2) }, typeof Symbol == "function" && (S2[Symbol.iterator] = function() {
        return this;
      }), S2;
      function I(E) {
        return function(H2) {
          return Y([E, H2]);
        };
      }
      function Y(E) {
        if (p)
          throw new TypeError("Generator is already executing.");
        for (; s; )
          try {
            if (p = 1, y && (d2 = E[0] & 2 ? y.return : E[0] ? y.throw || ((d2 = y.return) && d2.call(y), 0) : y.next) && !(d2 = d2.call(y, E[1])).done)
              return d2;
            switch (y = 0, d2 && (E = [E[0] & 2, d2.value]), E[0]) {
              case 0:
              case 1:
                d2 = E;
                break;
              case 4:
                return s.label++, { value: E[1], done: false };
              case 5:
                s.label++, y = E[1], E = [0];
                continue;
              case 7:
                E = s.ops.pop(), s.trys.pop();
                continue;
              default:
                if (d2 = s.trys, !(d2 = d2.length > 0 && d2[d2.length - 1]) && (E[0] === 6 || E[0] === 2)) {
                  s = 0;
                  continue;
                }
                if (E[0] === 3 && (!d2 || E[1] > d2[0] && E[1] < d2[3])) {
                  s.label = E[1];
                  break;
                }
                if (E[0] === 6 && s.label < d2[1]) {
                  s.label = d2[1], d2 = E;
                  break;
                }
                if (d2 && s.label < d2[2]) {
                  s.label = d2[2], s.ops.push(E);
                  break;
                }
                d2[2] && s.ops.pop(), s.trys.pop();
                continue;
            }
            E = i.call(o, s);
          } catch (H2) {
            E = [6, H2], y = 0;
          } finally {
            p = d2 = 0;
          }
        if (E[0] & 5)
          throw E[1];
        return { value: E[0] ? E[1] : void 0, done: true };
      }
    }, w = function(o, i) {
      for (var s in o)
        s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && D(i, o, s);
    }, D = Object.create ? function(o, i, s, p) {
      p === void 0 && (p = s);
      var y = Object.getOwnPropertyDescriptor(i, s);
      (!y || ("get" in y ? !i.__esModule : y.writable || y.configurable)) && (y = { enumerable: true, get: function() {
        return i[s];
      } }), Object.defineProperty(o, p, y);
    } : function(o, i, s, p) {
      p === void 0 && (p = s), o[p] = i[s];
    }, $ = function(o) {
      var i = typeof Symbol == "function" && Symbol.iterator, s = i && o[i], p = 0;
      if (s)
        return s.call(o);
      if (o && typeof o.length == "number")
        return { next: function() {
          return o && p >= o.length && (o = void 0), { value: o && o[p++], done: !o };
        } };
      throw new TypeError(i ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, P = function(o, i) {
      var s = typeof Symbol == "function" && o[Symbol.iterator];
      if (!s)
        return o;
      var p = s.call(o), y, d2 = [], S2;
      try {
        for (; (i === void 0 || i-- > 0) && !(y = p.next()).done; )
          d2.push(y.value);
      } catch (I) {
        S2 = { error: I };
      } finally {
        try {
          y && !y.done && (s = p.return) && s.call(p);
        } finally {
          if (S2)
            throw S2.error;
        }
      }
      return d2;
    }, N = function() {
      for (var o = [], i = 0; i < arguments.length; i++)
        o = o.concat(P(arguments[i]));
      return o;
    }, L = function() {
      for (var o = 0, i = 0, s = arguments.length; i < s; i++)
        o += arguments[i].length;
      for (var p = Array(o), y = 0, i = 0; i < s; i++)
        for (var d2 = arguments[i], S2 = 0, I = d2.length; S2 < I; S2++, y++)
          p[y] = d2[S2];
      return p;
    }, R2 = function(o, i, s) {
      if (s || arguments.length === 2)
        for (var p = 0, y = i.length, d2; p < y; p++)
          (d2 || !(p in i)) && (d2 || (d2 = Array.prototype.slice.call(i, 0, p)), d2[p] = i[p]);
      return o.concat(d2 || Array.prototype.slice.call(i));
    }, k = function(o) {
      return this instanceof k ? (this.v = o, this) : new k(o);
    }, K2 = function(o, i, s) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var p = s.apply(o, i || []), y, d2 = [];
      return y = {}, S2("next"), S2("throw"), S2("return"), y[Symbol.asyncIterator] = function() {
        return this;
      }, y;
      function S2(U2) {
        p[U2] && (y[U2] = function(Q) {
          return new Promise(function(ce, Re) {
            d2.push([U2, Q, ce, Re]) > 1 || I(U2, Q);
          });
        });
      }
      function I(U2, Q) {
        try {
          Y(p[U2](Q));
        } catch (ce) {
          q2(d2[0][3], ce);
        }
      }
      function Y(U2) {
        U2.value instanceof k ? Promise.resolve(U2.value.v).then(E, H2) : q2(d2[0][2], U2);
      }
      function E(U2) {
        I("next", U2);
      }
      function H2(U2) {
        I("throw", U2);
      }
      function q2(U2, Q) {
        U2(Q), d2.shift(), d2.length && I(d2[0][0], d2[0][1]);
      }
    }, v = function(o) {
      var i, s;
      return i = {}, p("next"), p("throw", function(y) {
        throw y;
      }), p("return"), i[Symbol.iterator] = function() {
        return this;
      }, i;
      function p(y, d2) {
        i[y] = o[y] ? function(S2) {
          return (s = !s) ? { value: k(o[y](S2)), done: y === "return" } : d2 ? d2(S2) : S2;
        } : d2;
      }
    }, x = function(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var i = o[Symbol.asyncIterator], s;
      return i ? i.call(o) : (o = typeof $ == "function" ? $(o) : o[Symbol.iterator](), s = {}, p("next"), p("throw"), p("return"), s[Symbol.asyncIterator] = function() {
        return this;
      }, s);
      function p(d2) {
        s[d2] = o[d2] && function(S2) {
          return new Promise(function(I, Y) {
            S2 = o[d2](S2), y(I, Y, S2.done, S2.value);
          });
        };
      }
      function y(d2, S2, I, Y) {
        Promise.resolve(Y).then(function(E) {
          d2({ value: E, done: I });
        }, S2);
      }
    }, T = function(o, i) {
      return Object.defineProperty ? Object.defineProperty(o, "raw", { value: i }) : o.raw = i, o;
    };
    var G = Object.create ? function(o, i) {
      Object.defineProperty(o, "default", { enumerable: true, value: i });
    } : function(o, i) {
      o.default = i;
    };
    F = function(o) {
      if (o && o.__esModule)
        return o;
      var i = {};
      if (o != null)
        for (var s in o)
          s !== "default" && Object.prototype.hasOwnProperty.call(o, s) && D(i, o, s);
      return G(i, o), i;
    }, M = function(o) {
      return o && o.__esModule ? o : { default: o };
    }, V = function(o, i, s, p) {
      if (s === "a" && !p)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof i == "function" ? o !== i || !p : !i.has(o))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return s === "m" ? p : s === "a" ? p.call(o) : p ? p.value : i.get(o);
    }, Z = function(o, i, s, p, y) {
      if (p === "m")
        throw new TypeError("Private method is not writable");
      if (p === "a" && !y)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof i == "function" ? o !== i || !y : !i.has(o))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return p === "a" ? y.call(o, s) : y ? y.value = s : i.set(o, s), s;
    }, A = function(o, i) {
      if (i === null || typeof i != "object" && typeof i != "function")
        throw new TypeError("Cannot use 'in' operator on non-object");
      return typeof o == "function" ? i === o : o.has(i);
    }, j("__extends", r), j("__assign", n), j("__rest", a), j("__decorate", u), j("__param", c), j("__metadata", l), j("__awaiter", f), j("__generator", O), j("__exportStar", w), j("__createBinding", D), j("__values", $), j("__read", P), j("__spread", N), j("__spreadArrays", L), j("__spreadArray", R2), j("__await", k), j("__asyncGenerator", K2), j("__asyncDelegator", v), j("__asyncValues", x), j("__makeTemplateObject", T), j("__importStar", F), j("__importDefault", M), j("__classPrivateFieldGet", V), j("__classPrivateFieldSet", Z), j("__classPrivateFieldIn", A);
  });
});
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
J(W());
function _t(t, e, r = 20) {
  if (e === "%grid%")
    t.setAttribute("style", `background-color: rgb(0, 102, 204); background-image: linear-gradient(rgba(255, 255, 255, 0.2) 2px, transparent 2px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 2px, transparent 1px), linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px); background-size: ${r * 5}px ${r * 5}px, ${r * 5}px ${r * 5}px, ${r}px ${r}px, ${r}px ${r}px; background-position: -1px -1px, -1px -1px, -1px -1px, -1px -1px; background-blend-mode: difference;`);
  else {
    let n;
    switch (e) {
      case void 0:
      case "light":
        n = "#FFF";
        break;
      case "dark":
        n = "#222";
        break;
      case "transparent":
        n = "#00000000";
        break;
      default:
        n = e;
        break;
    }
    t.setAttribute("style", `background: ${n}`);
  }
}
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
var ve = J(W(), 1);
b();
m();
g();
h();
_();
var Ot = Object.defineProperty, ae = Object.getOwnPropertySymbols, Ce = Object.prototype.hasOwnProperty, Ae = Object.prototype.propertyIsEnumerable, be = (t, e, r) => e in t ? Ot(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r, wt = (t, e) => {
  for (var r in e || (e = {}))
    Ce.call(e, r) && be(t, r, e[r]);
  if (ae)
    for (var r of ae(e))
      Ae.call(e, r) && be(t, r, e[r]);
  return t;
}, xt = (t, e) => {
  var r = {};
  for (var n in t)
    Ce.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && ae)
    for (var n of ae(t))
      e.indexOf(n) < 0 && Ae.call(t, n) && (r[n] = t[n]);
  return r;
}, jt = (t) => typeof t == "string" ? { name: t } : t, St = (t) => typeof t == "string" ? { type: t } : t, Et = (t, e) => {
  let r = t, { type: n, control: a } = r, u = xt(r, ["type", "control"]), c = wt({ name: e }, u);
  return n && (c.type = jt(n)), a ? c.control = St(a) : a === false && (c.control = { disable: true }), c;
}, Fe = (t) => Object.fromEntries(Object.entries(t).map(([e, r]) => [e, Et(r, e)])), Pt = Object.defineProperty, me = Object.getOwnPropertySymbols, Tt = Object.prototype.hasOwnProperty, $t = Object.prototype.propertyIsEnumerable, ge = (t, e, r) => e in t ? Pt(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r, X = (t, e) => {
  for (var r in e || (e = {}))
    Tt.call(e, r) && ge(t, r, e[r]);
  if (me)
    for (var r of me(e))
      $t.call(e, r) && ge(t, r, e[r]);
  return t;
};
function Ct(t, e, r) {
  let n, a;
  typeof e == "function" && (n = e), a = e;
  let { story: u } = a;
  u && console.warn("storyFn.story in now deprecated in StoryBook 6.0");
  let c = (0, ve.storyNameFromExport)(t), l = typeof a != "function" && a.name || a.storyName || (u == null ? void 0 : u.name) || c, f = [...a.decorators || [], ...(u == null ? void 0 : u.decorators) || []], O = X(X({}, u == null ? void 0 : u.parameters), a.parameters), w = X(X({}, u == null ? void 0 : u.args), a.args), $ = X(X({}, u == null ? void 0 : u.argTypes), a.argTypes), P = [...a.loaders || [], ...(u == null ? void 0 : u.loaders) || []], { render: N, play: L } = a, R2 = O.__id || (0, ve.toId)(r.id || r.title, c);
  return X(X(X({ id: R2, name: l, decorators: f, parameters: O, args: w, argTypes: Fe($), loaders: P }, N && { render: N }), n && { userStoryFn: n }), L && { play: L });
}
b();
m();
g();
h();
_();
var At = J(W(), 1), Ft = Object.defineProperty, Dt = Object.defineProperties, kt = Object.getOwnPropertyDescriptors, ue = Object.getOwnPropertySymbols, De = Object.prototype.hasOwnProperty, ke = Object.prototype.propertyIsEnumerable, he = (t, e, r) => e in t ? Ft(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r, se = (t, e) => {
  for (var r in e || (e = {}))
    De.call(e, r) && he(t, r, e[r]);
  if (ue)
    for (var r of ue(e))
      ke.call(e, r) && he(t, r, e[r]);
  return t;
}, _e = (t, e) => Dt(t, kt(e)), It = (t, e) => {
  var r = {};
  for (var n in t)
    De.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && ue)
    for (var n of ue(t))
      e.indexOf(n) < 0 && ke.call(t, n) && (r[n] = t[n]);
  return r;
};
function Lt(t, e, r) {
  let n = t, { id: a, argTypes: u } = n, c = It(n, ["id", "argTypes"]);
  return _e(se(_e(se({ id: (0, At.sanitize)(a || e) }, c), { title: e }), u && { argTypes: Fe(u) }), { parameters: se({ fileName: r }, t.parameters) });
}
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
var Rt = Object.defineProperty, ie = Object.getOwnPropertySymbols, Ie = Object.prototype.hasOwnProperty, Le = Object.prototype.propertyIsEnumerable, Oe = (t, e, r) => e in t ? Rt(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r, we = (t, e) => {
  for (var r in e || (e = {}))
    Ie.call(e, r) && Oe(t, r, e[r]);
  if (ie)
    for (var r of ie(e))
      Le.call(e, r) && Oe(t, r, e[r]);
  return t;
}, Nt = (t, e) => {
  var r = {};
  for (var n in t)
    Ie.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && ie)
    for (var n of ie(t))
      e.indexOf(n) < 0 && Le.call(t, n) && (r[n] = t[n]);
  return r;
};
function Mt(t, e, r) {
  let n = r(t);
  return (a) => e(n, a);
}
function Vt(t = {}) {
  var e = t, $ = Nt(e, ["componentId", "title", "kind", "id", "name", "story", "parameters", "initialArgs", "argTypes"]);
  return $;
}
function Ut(t, e) {
  let r = {}, n = (u) => (c) => (r.value = we(we({}, r.value), Vt(c)), u(r.value)), a = e.reduce((u, c) => Mt(u, c, n), t);
  return (u) => (r.value = u, a(u));
}
b();
m();
g();
h();
_();
var Bt = (t = {}) => Object.entries(t).reduce((e, [r, { defaultValue: n }]) => (typeof n < "u" && (e[r] = n), e), {}), zt = Object.defineProperty, Kt = Object.defineProperties, Zt = Object.getOwnPropertyDescriptors, xe = Object.getOwnPropertySymbols, Ht = Object.prototype.hasOwnProperty, Gt = Object.prototype.propertyIsEnumerable, je = (t, e, r) => e in t ? zt(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r, B = (t, e) => {
  for (var r in e || (e = {}))
    Ht.call(e, r) && je(t, r, e[r]);
  if (xe)
    for (var r of xe(e))
      Gt.call(e, r) && je(t, r, e[r]);
  return t;
}, te = (t, e) => Kt(t, Zt(e));
function Yt(t, e, r) {
  let { id: n, name: a } = t, { title: u } = e, c = B(B(B({}, r.parameters), e.parameters), t.parameters), l = [...t.decorators || [], ...e.decorators || [], ...r.decorators || []], { applyDecorators: f = Ut, argTypesEnhancers: O = [], argsEnhancers: w = [] } = r, $ = [...r.loaders || [], ...e.loaders || [], ...t.loaders || []], P = t.userStoryFn || t.render || e.render || r.render, N = B(B(B({}, r.argTypes), e.argTypes), t.argTypes), { passArgsFirst: L = true } = c;
  c.__isArgsStory = L && (!P || P.length > 0);
  let R2 = B(B(B({}, r.args), e.args), t.args), k = { componentId: e.id, title: u, kind: u, id: n, name: a, story: a, component: e.component, subcomponents: e.subcomponents, parameters: c, initialArgs: R2, argTypes: N };
  k.argTypes = O.reduce((A, D) => D(te(B({}, k), { argTypes: A })), k.argTypes);
  let K2 = Bt(k.argTypes);
  Object.keys(K2).length > 0 && console.warn("`argType.defaultValue` is deprecated and will be removed in Storybook 7.0.");
  let v = B(B({}, K2), R2);
  k.initialArgs = w.reduce((A, D) => B(B({}, A), D(te(B({}, k), { initialArgs: A }))), v);
  let x = async (A) => {
    let D = await Promise.all($.map((z2) => z2(A))), j = Object.assign({}, ...D);
    return te(B({}, A), { loaded: j });
  }, T = (A) => {
    let D = Object.entries(A.args).reduce((G, [o, i]) => {
      var s;
      let p = (s = A.argTypes[o]) == null ? void 0 : s.mapping;
      return G[o] = p && i in p ? p[i] : i, G;
    }, {}), j = te(B({}, A), { args: D }), { passArgsFirst: z2 = true } = A.parameters;
    return z2 ? P(j.args, j) : P(j);
  }, F = f(T, l), M = (A) => F(A), V = t.play, Z = t.renderToDOM || e.renderToDOM || r.renderToDOM;
  return Object.freeze(te(B({}, k), { originalStoryFn: P, undecoratedStoryFn: T, unboundStoryFn: M, applyLoaders: x, playFunction: V, renderToDOM: Z }));
}
b();
m();
g();
h();
_();
J(W(), 1);
b();
m();
g();
h();
_();
J(W(), 1);
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
function Jt(t) {
  let e = t.replace(/([^/])\.[^/.]*?$/, "$1").split("/").map((r) => r.replace(/\.stories$/, "")).filter((r) => r && r !== "stories" && r !== "index" && r !== "src" && r !== ".." && r !== ".");
  return e.filter((r, n) => r !== e[n - 1]).join("/");
}
J(W(), 1);
function Wt(t, e, r = {}, n, a = {}) {
  let u = Lt(r, r.title || Jt(n) || "Stories", n), c = Ct(e, t, u);
  return Yt(c, u, a);
}
b();
m();
g();
h();
_();
var Xt = Object.defineProperty, qt = Object.defineProperties, Qt = Object.getOwnPropertyDescriptors, Se = Object.getOwnPropertySymbols, er = Object.prototype.hasOwnProperty, tr = Object.prototype.propertyIsEnumerable, Ee = (t, e, r) => e in t ? Xt(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r, ee = (t, e) => {
  for (var r in e || (e = {}))
    er.call(e, r) && Ee(t, r, e[r]);
  if (Se)
    for (var r of Se(e))
      tr.call(e, r) && Ee(t, r, e[r]);
  return t;
}, le = (t, e) => qt(t, Qt(e));
async function rr(t, e, r, n, a) {
  let { applyLoaders: u } = t, c = ee(ee({}, t.initialArgs), a), l = le(ee({}, t), { args: c, globals: {}, hooks: null }), f = await u(le(ee({}, l), { viewMode: r }));
  return n != null && n.aborted ? {} : le(ee(ee({}, f), l), { abortSignal: n, canvasElement: e });
}
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
J(W(), 1);
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
J(W(), 1);
J(W(), 1);
J(W(), 1);
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
function ne(t) {
  let e = Object.prototype.toString.call(t).slice(8, -1);
  if (e === "Object")
    return t._$story_type$ !== void 0 ? t._$story_type$ : typeof t[Symbol.iterator] == "function" ? "Iterable" : String(t.$$typeof) === "Symbol(react.element)" ? "React" : t.$flags$ !== void 0 ? "Stencil" : t.constructor === void 0 ? "Preact" : t._$litType$ !== void 0 ? "TemplateResult" : "nodeName" in t && "children" in t ? "Omi" : "css" in t && "template" in t && "exports" in t && "name" in t ? "Riot" : "Component" in t && ne(t.Component) === "Riot" ? "RiotStory" : "Component" in t && ne(t.Component) === "Svelte" ? "SvelteStory" : "__v_isVNode" in t || "__scopeId" in t || "components" in t && ("template" in t || "render" in t) ? "Vue" : t.component && t.component.__annotations__ && t.component.__annotations__[0] && t.component.__annotations__[0].ngMetadataName === "Component" ? "Angular" : t.constructor.name;
  if (e === "Array") {
    let r = false;
    for (let n of t)
      if (!(n === null || typeof n == "boolean" || typeof n == "string" || typeof n == "number"))
        if (ne(n) === "Omi")
          r = true;
        else {
          r = false;
          break;
        }
    if (r)
      return "Omi";
  } else if (e === "Function") {
    if (t._$story_type$ !== void 0)
      return t._$story_type$;
    let r = t.toString();
    if ("CustomElementConstructor" in t)
      return "Lwc";
    if (r.includes("extends SvelteComponent") || r.includes("extends ProxyComponent"))
      return "Svelte";
    if (r.includes("_tmpl$.cloneNode(true)") || r.includes("_$createComponent("))
      return "Solid";
  } else if (t instanceof Element && t.nodeType === 1)
    return "Element";
  return e;
}
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
var nr = J(ht(), 1), { __extends: yr, __assign: vr, __rest: br, __decorate: pe, __param: mr, __metadata: Pe, __awaiter: gr, __generator: hr, __exportStar: _r, __createBinding: Or, __values: wr, __read: xr, __spread: jr, __spreadArrays: Sr, __spreadArray: Er, __await: Pr, __asyncGenerator: Tr, __asyncDelegator: $r, __asyncValues: Cr, __makeTemplateObject: Ar, __importStar: Fr, __importDefault: Dr, __classPrivateFieldGet: kr, __classPrivateFieldSet: Ir, __classPrivateFieldIn: Lr } = nr.default;
async function or(t, e, r, n) {
  var a, u;
  switch (r) {
    case "RenderFn":
      return e(n), true;
    case "RenderProp":
      return e.render(n), true;
    case "Lwc":
      return n.appendChild((await t("lwc")).createElement("c-story", { is: e })), true;
    case "TemplateResult":
      return (await t("lit-html")).render(e, n), true;
    case "ViewTemplate": {
      let c = e.render({}, n);
      return () => c.dispose();
    }
    case "Hole":
      return (await t("uhtml")).render(n, e), true;
    case "LighterHole":
      return (await t("lighterhtml")).render(n, e), true;
    case "Stencil": {
      let c = await t("@stencil/core/internal/client");
      return "BUILD" in c ? c.renderVdom({ $hostElement$: n, $cmpMeta$: {} }, e) : c.renderVdom(n, {}, {}, e), true;
    }
    case "React": {
      let c = await t("react-dom");
      return c.render(e, n), () => {
        c.unmountComponentAtNode(n);
      };
    }
    case "Preact":
      return (await t("preact")).render(e, n), true;
    case "Omi":
      return (await t("omi")).render(e, n), true;
    case "Riot":
      return (await t("riot")).component(e)(n, {}), true;
    case "RiotStory": {
      let { Component: c, props: l, options: f } = e;
      return (await t("riot")).component(c)(n, l, f), true;
    }
    case "Solid":
      return (await t("solid-js/web")).render(e, n), true;
    case "Svelte": {
      let c = new e({ target: n });
      return () => c.$destroy();
    }
    case "SvelteStory": {
      let _a = e, { Component: c } = _a, l = __objRest(_a, ["Component"]), f = new c(__spreadValues({ target: n }, l));
      return () => f.$destroy();
    }
    case "Vue": {
      let c = await t("vue"), l = e.app || n.__vue_app__, f;
      if (!l)
        f = c.createApp({ setup: () => () => c.h(e) }), f.mount(n);
      else {
        let O = c.h(e);
        O.appContext = l._context, c.render(O, n);
      }
      return () => {
        l ? l.unmount() : f.unmount();
      };
    }
    case "Element":
    case "DocumentFragment":
      return n.appendChild(e), true;
    case "Angular": {
      let { props: c, component: l } = e, { platformBrowserDynamic: f } = await t("@angular/platform-browser-dynamic"), { Component: O, NgModule: w, destroyPlatform: $, ComponentFactoryResolver: P, ViewChild: N, ViewContainerRef: L } = await t("@angular/core"), { BrowserModule: R2 } = await t("@angular/platform-browser"), { moduleMetadata: { imports: k = [], declarations: K2 = [], bootstrap: v = [], providers: x = [], schemas: T = [] } = {} } = e, F = class {
        constructor(V) {
          this.resolver = V;
        }
        ngAfterViewInit() {
          let V = this.resolver.resolveComponentFactory(l), Z = this.container.createComponent(V), A = l.__prop__metadata__;
          Object.keys(c).map((D) => {
            A[D] && A[D][0].ngMetadataName === "Output" ? Z.instance[D].subscribe(c[D]) : Z.instance[D] = c[D];
          });
        }
      };
      pe([N("container", { read: L }), Pe("design:type", typeof (a = typeof L < "u" && L) == "function" ? a : Object)], F.prototype, "vc", void 0), F = pe([O({ selector: n, template: "<ng-container #container></ng-container>" }), Pe("design:paramtypes", [typeof (u = typeof P < "u" && P) == "function" ? u : Object])], F);
      let M = class {
      };
      return M = pe([w({ imports: [R2, ...k], declarations: [F, l, ...K2], bootstrap: [F, ...v], entryComponents: [l], schemas: T, providers: x })], M), f().bootstrapModule(M), () => $();
    }
  }
  return false;
}
b();
m();
g();
h();
_();
var fe = { CLOSED: "closed", TOPONLY: "top-only", FULL: "full" }, oe = class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._value = {}, this.open = fe.CLOSED;
  }
  set value(t) {
    this._value = t, this.render();
  }
  get value() {
    return this._value;
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = `
    <style>
      ${oe.styles}
    </style>
    ${this.renderNode(void 0, this._value, 0)}`;
  }
  renderNode(t, e, r) {
    let n = oe.objType(e);
    switch (n) {
      case "Object":
      case "Array":
        return this.renderParent(n, t, e, r);
      default:
        return this.renderKeyValue(t, this.renderValue(n, e));
    }
  }
  renderValue(t, e) {
    switch (t) {
      case "Boolean":
        return `${e ? "true" : "false"}`;
      case "String":
        return `"${e}"`;
      case "Number":
        return `${e}`;
      case "Date":
        return `${e.toISOString()}`;
      case "Null":
        return "null";
      case "Undefined":
        return "undefined";
      case "Function":
      case "Symbol":
        return `${e.toString()}`;
      default:
        return "###unsupported yet###";
    }
  }
  renderParent(t, e, r, n) {
    let a = this.open === fe.FULL || this.open === fe.TOPONLY && n == 0, u = `<summary>${this.renderSummaryObject(t, e, r)}</summary>`, c = "", l = Reflect.ownKeys(r), f = n + 1;
    return l.forEach((O) => {
      c += this.renderNode(O, r[O], f);
    }), `<details${a ? " open" : ""}>${u}<div>${c}</div></details>`;
  }
  renderKeyValue(t, e) {
    return `<div>${this.renderSpanKey(t)}${this.renderSpanValue(e)}</div>`;
  }
  renderSpanKey(t) {
    return t ? `<span class="key">${t}: </span>` : "";
  }
  renderSpanValue(t) {
    return t ? `<pre class="value">${t}</pre>` : "";
  }
  renderSpanLessImportant(t) {
    return t ? `<span class="less">${t}</span>` : "";
  }
  renderSummaryObject(t, e, r) {
    let n = this.renderSpanKey(e), a = "", u = "", c = "";
    switch (t) {
      case "Object":
        a = "Object {", u = "}", c = Reflect.ownKeys(r).reduce((f, O, w) => {
          if (w > 5)
            return false;
          if (w == 5)
            return f + ` ${this.renderSpanLessImportant("...")}`;
          let $ = r[O];
          return f + ` ${this.renderSpanKey(O)}${this.renderSummaryValue($)}`;
        }, "");
        break;
      case "Array":
        a = `Array(${r.length}) [`, u = " ]";
        let l = r.slice(0, 5);
        l.forEach((f, O) => {
          c += ` ${this.renderSpanKey("" + O)}${this.renderSummaryValue(f)}`;
        }), l.length < r.length && (c += ` ${this.renderSpanLessImportant("...")}`);
        break;
    }
    return `${n}${a} <span class="show-when-closed">${c}</span> ${u}`;
  }
  renderSummaryValue(t) {
    let e = oe.objType(t);
    switch (e) {
      case "Object":
        return this.renderSpanLessImportant("{...}");
      case "Array":
        return this.renderSpanLessImportant("[...]");
      default:
        return this.renderSpanValue(this.renderValue(e, t));
    }
  }
  static objType(t) {
    let e = Object.prototype.toString.call(t).slice(8, -1);
    return e === "Object" ? typeof t[Symbol.iterator] == "function" ? "Iterable" : t.constructor.name : e;
  }
  static get styles() {
    return `
      :host {
        font-family: monospace;
      }

      pre {
        display: inline;
      }

      details > summary:focus {
        outline: none;
      }
      
      details > div {
        padding-left: 15px;
      }

      details[open=""] > summary > .show-when-closed {
        display : none;
      }

      .key {
        color: purple;
      }

      .value {
        color: green;
      }

      .less {
        color: grey;
      }

    `;
  }
};
try {
  customElements.define("json-element", oe);
} catch {
}
async function Rr(t, e, r) {
  let n = ne(e), a = await or(t, e, n, r);
  if (typeof a == "function") {
    r.ownerDocument.defaultView.addEventListener("unload", a);
    let u = new MutationObserver((c) => {
      for (let l of c)
        for (let f of Array.from(l.removedNodes || []))
          if (f == r) {
            a(), u.disconnect();
            return;
          }
    });
    return r.parentNode && u.observe(r.parentNode, { childList: true }), a;
  }
  if (!a)
    switch (n) {
      case "String": {
        let u = e.trim();
        if (u.match(/^<[^>]*>[\s\S]*<\/[^>]*>$/g)) {
          r.innerHTML = u;
          break;
        }
      }
      default: {
        let u = document.createElement("json-element");
        u.value = e, u.open = "full", r.insertAdjacentElement("beforeend", u);
        break;
      }
    }
}
async function ar(t, e, r, n) {
  if (!e)
    return () => "Missing 'framework' for CSF v3 story format, either add 'framework' to default export or add @storybook/react (or other) to dependencies";
  switch (e) {
    case "react":
      let a = await t("react");
      return (l, { component: f }) => a.createElement(f, l);
    case "preact":
      let u = await t("preact");
      return (l, { component: f }) => u.h(f, l);
    case "vue3":
      let c = await t("vue");
      return (l, { component: f }) => c.createVNode(f, l);
  }
  return () => `Unsupported story framework for CSF v3: ${e}`;
}
async function Nr(t, e, r, n, a, u, c, l, f) {
  let O = e.framework || (n == null ? void 0 : n.framework), w = Wt(e, r, n, c, { render: await ar(a, O) }), { unboundStoryFn: $ } = w, P = await rr(w, t, u, l, f), N = "padded";
  P.parameters.layout && (["padded", "centered", "fullscreen"].includes(P.parameters.layout) ? N = P.parameters.layout : console.error(`Unsupported layout: ${P.parameters.layout}`)), t.className = `story_${N}`;
  let { backgrounds: L, grid: R2 } = P.parameters;
  return (L || R2) && _t(t, L == null ? void 0 : L.default, R2 == null ? void 0 : R2.cellSize), { story: w, storyContext: P, storyFn: () => $(P) };
}
var CA = Object.create, iA = Object.defineProperty, EA = Object.getOwnPropertyDescriptor, cA = Object.getOwnPropertyNames, BA = Object.getPrototypeOf, uA = Object.prototype.hasOwnProperty, q = (A, e) => () => (A && (e = A(A = 0)), e), dA = (A, e) => () => (e || A((e = { exports: {} }).exports, e), e.exports), hA = (A, e, i, t) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let Q of cA(e))
      !uA.call(A, Q) && Q !== i && iA(A, Q, { get: () => e[Q], enumerable: !(t = EA(e, Q)) || t.enumerable });
  return A;
}, IA = (A, e, i) => (i = A != null ? CA(BA(A)) : {}, hA(e || !A || !A.__esModule ? iA(i, "default", { value: A, enumerable: true }) : i, A)), H = q(() => {
}), R = q(() => {
}), S = q(() => {
}), U = q(() => {
}), K = q(() => {
}), pA = dA((A, e) => {
  H(), R(), S(), U(), K();
  var i = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {}, t = function(Q) {
    var E = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, B2 = 0, I = {}, o = { manual: Q.Prism && Q.Prism.manual, disableWorkerMessageHandler: Q.Prism && Q.Prism.disableWorkerMessageHandler, util: { encode: function n(a) {
      return a instanceof p ? new p(a.type, n(a.content), a.alias) : Array.isArray(a) ? a.map(n) : a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(n) {
      return Object.prototype.toString.call(n).slice(8, -1);
    }, objId: function(n) {
      return n.__id || Object.defineProperty(n, "__id", { value: ++B2 }), n.__id;
    }, clone: function n(a, r) {
      r = r || {};
      var s, g2;
      switch (o.util.type(a)) {
        case "Object":
          if (g2 = o.util.objId(a), r[g2])
            return r[g2];
          s = {}, r[g2] = s;
          for (var C2 in a)
            a.hasOwnProperty(C2) && (s[C2] = n(a[C2], r));
          return s;
        case "Array":
          return g2 = o.util.objId(a), r[g2] ? r[g2] : (s = [], r[g2] = s, a.forEach(function(c, l) {
            s[l] = n(c, r);
          }), s);
        default:
          return a;
      }
    }, getLanguage: function(n) {
      for (; n; ) {
        var a = E.exec(n.className);
        if (a)
          return a[1].toLowerCase();
        n = n.parentElement;
      }
      return "none";
    }, setLanguage: function(n, a) {
      n.className = n.className.replace(RegExp(E, "gi"), ""), n.classList.add("language-" + a);
    }, currentScript: function() {
      if (typeof document > "u")
        return null;
      if ("currentScript" in document && 1 < 2)
        return document.currentScript;
      try {
        throw new Error();
      } catch (s) {
        var n = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(s.stack) || [])[1];
        if (n) {
          var a = document.getElementsByTagName("script");
          for (var r in a)
            if (a[r].src == n)
              return a[r];
        }
        return null;
      }
    }, isActive: function(n, a, r) {
      for (var s = "no-" + a; n; ) {
        var g2 = n.classList;
        if (g2.contains(a))
          return true;
        if (g2.contains(s))
          return false;
        n = n.parentElement;
      }
      return !!r;
    } }, languages: { plain: I, plaintext: I, text: I, txt: I, extend: function(n, a) {
      var r = o.util.clone(o.languages[n]);
      for (var s in a)
        r[s] = a[s];
      return r;
    }, insertBefore: function(n, a, r, s) {
      s = s || o.languages;
      var g2 = s[n], C2 = {};
      for (var c in g2)
        if (g2.hasOwnProperty(c)) {
          if (c == a)
            for (var l in r)
              r.hasOwnProperty(l) && (C2[l] = r[l]);
          r.hasOwnProperty(c) || (C2[c] = g2[c]);
        }
      var h2 = s[n];
      return s[n] = C2, o.languages.DFS(o.languages, function(m2, F) {
        F === h2 && m2 != n && (this[m2] = C2);
      }), C2;
    }, DFS: function n(a, r, s, g2) {
      g2 = g2 || {};
      var C2 = o.util.objId;
      for (var c in a)
        if (a.hasOwnProperty(c)) {
          r.call(a, c, a[c], s || c);
          var l = a[c], h2 = o.util.type(l);
          h2 === "Object" && !g2[C2(l)] ? (g2[C2(l)] = true, n(l, r, null, g2)) : h2 === "Array" && !g2[C2(l)] && (g2[C2(l)] = true, n(l, r, c, g2));
        }
    } }, plugins: {}, highlightAll: function(n, a) {
      o.highlightAllUnder(document, n, a);
    }, highlightAllUnder: function(n, a, r) {
      var s = { callback: r, container: n, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
      o.hooks.run("before-highlightall", s), s.elements = Array.prototype.slice.apply(s.container.querySelectorAll(s.selector)), o.hooks.run("before-all-elements-highlight", s);
      for (var g2 = 0, C2; C2 = s.elements[g2++]; )
        o.highlightElement(C2, a === true, s.callback);
    }, highlightElement: function(n, a, r) {
      var s = o.util.getLanguage(n), g2 = o.languages[s];
      o.util.setLanguage(n, s);
      var C2 = n.parentElement;
      C2 && C2.nodeName.toLowerCase() === "pre" && o.util.setLanguage(C2, s);
      var c = n.textContent, l = { element: n, language: s, grammar: g2, code: c };
      function h2(F) {
        l.highlightedCode = F, o.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, o.hooks.run("after-highlight", l), o.hooks.run("complete", l), r && r.call(l.element);
      }
      if (o.hooks.run("before-sanity-check", l), C2 = l.element.parentElement, C2 && C2.nodeName.toLowerCase() === "pre" && !C2.hasAttribute("tabindex") && C2.setAttribute("tabindex", "0"), !l.code) {
        o.hooks.run("complete", l), r && r.call(l.element);
        return;
      }
      if (o.hooks.run("before-highlight", l), !l.grammar) {
        h2(o.util.encode(l.code));
        return;
      }
      if (a && Q.Worker) {
        var m2 = new Worker(o.filename);
        m2.onmessage = function(F) {
          h2(F.data);
        }, m2.postMessage(JSON.stringify({ language: l.language, code: l.code, immediateClose: true }));
      } else
        h2(o.highlight(l.code, l.grammar, l.language));
    }, highlight: function(n, a, r) {
      var s = { code: n, grammar: a, language: r };
      if (o.hooks.run("before-tokenize", s), !s.grammar)
        throw new Error('The language "' + s.language + '" has no grammar.');
      return s.tokens = o.tokenize(s.code, s.grammar), o.hooks.run("after-tokenize", s), p.stringify(o.util.encode(s.tokens), s.language);
    }, tokenize: function(n, a) {
      var r = a.rest;
      if (r) {
        for (var s in r)
          a[s] = r[s];
        delete a.rest;
      }
      var g2 = new J2();
      return L(g2, g2.head, n), D(n, g2, a, g2.head, 0), G(g2);
    }, hooks: { all: {}, add: function(n, a) {
      var r = o.hooks.all;
      r[n] = r[n] || [], r[n].push(a);
    }, run: function(n, a) {
      var r = o.hooks.all[n];
      if (!(!r || !r.length))
        for (var s = 0, g2; g2 = r[s++]; )
          g2(a);
    } }, Token: p };
    Q.Prism = o;
    function p(n, a, r, s) {
      this.type = n, this.content = a, this.alias = r, this.length = (s || "").length | 0;
    }
    p.stringify = function n(a, r) {
      if (typeof a == "string")
        return a;
      if (Array.isArray(a)) {
        var s = "";
        return a.forEach(function(h2) {
          s += n(h2, r);
        }), s;
      }
      var g2 = { type: a.type, content: n(a.content, r), tag: "span", classes: ["token", a.type], attributes: {}, language: r }, C2 = a.alias;
      C2 && (Array.isArray(C2) ? Array.prototype.push.apply(g2.classes, C2) : g2.classes.push(C2)), o.hooks.run("wrap", g2);
      var c = "";
      for (var l in g2.attributes)
        c += " " + l + '="' + (g2.attributes[l] || "").replace(/"/g, "&quot;") + '"';
      return "<" + g2.tag + ' class="' + g2.classes.join(" ") + '"' + c + ">" + g2.content + "</" + g2.tag + ">";
    };
    function N(n, a, r, s) {
      n.lastIndex = a;
      var g2 = n.exec(r);
      if (g2 && s && g2[1]) {
        var C2 = g2[1].length;
        g2.index += C2, g2[0] = g2[0].slice(C2);
      }
      return g2;
    }
    function D(n, a, r, s, g2, C2) {
      for (var c in r)
        if (!(!r.hasOwnProperty(c) || !r[c])) {
          var l = r[c];
          l = Array.isArray(l) ? l : [l];
          for (var h2 = 0; h2 < l.length; ++h2) {
            if (C2 && C2.cause == c + "," + h2)
              return;
            var m2 = l[h2], F = m2.inside, Z = !!m2.lookbehind, V = !!m2.greedy, oA = m2.alias;
            if (V && !m2.pattern.global) {
              var gA = m2.pattern.toString().match(/[imsuy]*$/)[0];
              m2.pattern = RegExp(m2.pattern.source, gA + "g");
            }
            for (var W2 = m2.pattern || m2, k = s.next, v = g2; k !== a.tail && !(C2 && v >= C2.reach); v += k.value.length, k = k.next) {
              var x = k.value;
              if (a.length > n.length)
                return;
              if (!(x instanceof p)) {
                var M = 1, y;
                if (V) {
                  if (y = N(W2, v, n, Z), !y || y.index >= n.length)
                    break;
                  var $ = y.index, QA = y.index + y[0].length, b2 = v;
                  for (b2 += k.value.length; $ >= b2; )
                    k = k.next, b2 += k.value.length;
                  if (b2 -= k.value.length, v = b2, k.value instanceof p)
                    continue;
                  for (var Y = k; Y !== a.tail && (b2 < QA || typeof Y.value == "string"); Y = Y.next)
                    M++, b2 += Y.value.length;
                  M--, x = n.slice(v, b2), y.index -= v;
                } else if (y = N(W2, 0, x, Z), !y)
                  continue;
                var $ = y.index, j = y[0], P = x.slice(0, $), AA = x.slice($ + j.length), T = v + x.length;
                C2 && T > C2.reach && (C2.reach = T);
                var O = k.prev;
                P && (O = L(a, O, P), v += P.length), _2(a, O, M);
                var lA = new p(c, F ? o.tokenize(j, F) : j, oA, j);
                if (k = L(a, O, lA), AA && L(a, k, AA), M > 1) {
                  var X2 = { cause: c + "," + h2, reach: T };
                  D(n, a, r, k.prev, v, X2), C2 && X2.reach > C2.reach && (C2.reach = X2.reach);
                }
              }
            }
          }
        }
    }
    function J2() {
      var n = { value: null, prev: null, next: null }, a = { value: null, prev: n, next: null };
      n.next = a, this.head = n, this.tail = a, this.length = 0;
    }
    function L(n, a, r) {
      var s = a.next, g2 = { value: r, prev: a, next: s };
      return a.next = g2, s.prev = g2, n.length++, g2;
    }
    function _2(n, a, r) {
      for (var s = a.next, g2 = 0; g2 < r && s !== n.tail; g2++)
        s = s.next;
      a.next = s, s.prev = a, n.length -= g2;
    }
    function G(n) {
      for (var a = [], r = n.head.next; r !== n.tail; )
        a.push(r.value), r = r.next;
      return a;
    }
    if (!Q.document)
      return Q.addEventListener && (o.disableWorkerMessageHandler || Q.addEventListener("message", function(n) {
        var a = JSON.parse(n.data), r = a.language, s = a.code, g2 = a.immediateClose;
        Q.postMessage(o.highlight(s, o.languages[r], r)), g2 && Q.close();
      }, false)), o;
    var f = o.util.currentScript();
    f && (o.filename = f.src, f.hasAttribute("data-manual") && (o.manual = true));
    function u() {
      o.manual || o.highlightAll();
    }
    if (!o.manual) {
      var w = document.readyState;
      w === "loading" || w === "interactive" && f && f.defer ? document.addEventListener("DOMContentLoaded", u) : window.requestAnimationFrame ? window.requestAnimationFrame(u) : window.setTimeout(u, 16);
    }
    return o;
  }(i);
  typeof e < "u" && e.exports && (e.exports = t), typeof globalThis < "u" && (globalThis.Prism = t), t.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: true }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: true }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: true, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: true, greedy: true, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: true }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: true }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: true, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, t.languages.markup.tag.inside["attr-value"].inside.entity = t.languages.markup.entity, t.languages.markup.doctype.inside["internal-subset"].inside = t.languages.markup, t.hooks.add("wrap", function(Q) {
    Q.type === "entity" && (Q.attributes.title = Q.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(t.languages.markup.tag, "addInlined", { value: function(Q, E) {
    var B2 = {};
    B2["language-" + E] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: true, inside: t.languages[E] }, B2.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var I = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: B2 } };
    I["language-" + E] = { pattern: /[\s\S]+/, inside: t.languages[E] };
    var o = {};
    o[Q] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
      return Q;
    }), "i"), lookbehind: true, greedy: true, inside: I }, t.languages.insertBefore("markup", "cdata", o);
  } }), Object.defineProperty(t.languages.markup.tag, "addAttribute", { value: function(Q, E) {
    t.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + Q + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: true, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: true, alias: [E, "language-" + E], inside: t.languages[E] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
  } }), t.languages.html = t.languages.markup, t.languages.mathml = t.languages.markup, t.languages.svg = t.languages.markup, t.languages.xml = t.languages.extend("markup", {}), t.languages.ssml = t.languages.xml, t.languages.atom = t.languages.xml, t.languages.rss = t.languages.xml, function(Q) {
    var E = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    Q.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: true, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: true } } }, url: { pattern: RegExp("\\burl\\((?:" + E.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: true, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + E.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + E.source + ")*(?=\\s*\\{)"), lookbehind: true }, string: { pattern: E, greedy: true }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: true }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: true }, punctuation: /[(){};:,]/ }, Q.languages.css.atrule.inside.rest = Q.languages.css;
    var B2 = Q.languages.markup;
    B2 && (B2.tag.addInlined("style", "css"), B2.tag.addAttribute("style", "css"));
  }(t), t.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true, greedy: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ }, t.languages.javascript = t.languages.extend("clike", { "class-name": [t.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: true }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: true }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source), lookbehind: true }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), t.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, t.languages.insertBefore("javascript", "keyword", { regex: { pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source), lookbehind: true, greedy: true, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: true, alias: "language-regex", inside: t.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: true, inside: t.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: true, inside: t.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: true, inside: t.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: true, inside: t.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), t.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: true, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: true, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: true, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: t.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: true, greedy: true, alias: "property" } }), t.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: true, alias: "property" } }), t.languages.markup && (t.languages.markup.tag.addInlined("script", "javascript"), t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), t.languages.js = t.languages.javascript, function() {
    if (typeof t > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var Q = "Loading\u2026", E = function(f, u) {
      return "\u2716 Error " + f + " while fetching file: " + u;
    }, B2 = "\u2716 Error: File does not exist or is empty", I = { js: "javascript", py: "python", rb: "ruby", ps1: "powershell", psm1: "powershell", sh: "bash", bat: "batch", h: "c", tex: "latex" }, o = "data-src-status", p = "loading", N = "loaded", D = "failed", J2 = "pre[data-src]:not([" + o + '="' + N + '"]):not([' + o + '="' + p + '"])';
    function L(f, u, w) {
      var n = new XMLHttpRequest();
      n.open("GET", f, true), n.onreadystatechange = function() {
        n.readyState == 4 && (n.status < 400 && n.responseText ? u(n.responseText) : n.status >= 400 ? w(E(n.status, n.statusText)) : w(B2));
      }, n.send(null);
    }
    function _2(f) {
      var u = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(f || "");
      if (u) {
        var w = Number(u[1]), n = u[2], a = u[3];
        return n ? a ? [w, Number(a)] : [w, void 0] : [w, w];
      }
    }
    t.hooks.add("before-highlightall", function(f) {
      f.selector += ", " + J2;
    }), t.hooks.add("before-sanity-check", function(f) {
      var u = f.element;
      if (u.matches(J2)) {
        f.code = "", u.setAttribute(o, p);
        var w = u.appendChild(document.createElement("CODE"));
        w.textContent = Q;
        var n = u.getAttribute("data-src"), a = f.language;
        if (a === "none") {
          var r = (/\.(\w+)$/.exec(n) || [, "none"])[1];
          a = I[r] || r;
        }
        t.util.setLanguage(w, a), t.util.setLanguage(u, a);
        var s = t.plugins.autoloader;
        s && s.loadLanguages(a), L(n, function(g2) {
          u.setAttribute(o, N);
          var C2 = _2(u.getAttribute("data-range"));
          if (C2) {
            var c = g2.split(/\r\n?|\n/g), l = C2[0], h2 = C2[1] == null ? c.length : C2[1];
            l < 0 && (l += c.length), l = Math.max(0, Math.min(l - 1, c.length)), h2 < 0 && (h2 += c.length), h2 = Math.max(0, Math.min(h2, c.length)), g2 = c.slice(l, h2).join(`
`), u.hasAttribute("data-start") || u.setAttribute("data-start", String(l + 1));
          }
          w.textContent = g2, t.highlightElement(w);
        }, function(g2) {
          u.setAttribute(o, D), w.textContent = g2;
        });
      }
    }), t.plugins.fileHighlight = { highlight: function(f) {
      for (var u = (f || document).querySelectorAll(J2), w = 0, n; n = u[w++]; )
        t.highlightElement(n);
    } };
    var G = false;
    t.fileHighlight = function() {
      G || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), G = true), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
});
H();
R();
S();
U();
K();
H();
R();
S();
U();
K();
H();
R();
S();
U();
K();
function* fA(A) {
  let e = A.ownerDocument.getSelection(), i = e.rangeCount === 1 && e.getRangeAt(0), t = wA(A, i);
  yield t;
  let Q = mA(A, t);
  Q && (e.removeAllRanges(), e.addRange(Q));
}
function wA(A, e) {
  if (!e || !e.intersectsNode(A))
    return;
  let i = A.ownerDocument.createRange();
  if (i.selectNode(A), e.compareBoundaryPoints(Range.START_TO_START, i) !== -1 && e.compareBoundaryPoints(Range.END_TO_END, i) !== 1)
    return { start: eA(A, e.startContainer, e.startOffset), end: eA(A, e.endContainer, e.endOffset) };
}
function mA(A, e) {
  if (!e)
    return;
  let i = tA(A, e.start), t = tA(A, e.end);
  if (i && t) {
    let Q = A.ownerDocument.createRange();
    return Q.setStart(i[0], i[1]), Q.setEnd(t[0], t[1]), Q;
  }
}
function eA(A, e, i) {
  for (; e !== A; ) {
    let t = e;
    e = e.parentNode;
    for (let Q of e.childNodes)
      if (Q !== t)
        i += Q.textContent.length;
      else
        break;
  }
  return i;
}
function tA(A, e) {
  if (e > A.textContent.length)
    return;
  let i = A.childNodes[0];
  for (; i; ) {
    let t = i.textContent.length;
    if (t < e)
      e -= t, i = i.nextSibling;
    else {
      if (i.nodeType === 3)
        return [i, e];
      i = i.childNodes[0];
    }
  }
}
function kA() {
  let A, e = new Set();
  return i;
  function i(Q) {
    Q && e.add(Q), A === void 0 && e.size !== 0 && (A = requestAnimationFrame(t));
  }
  async function t() {
    let Q = e;
    e = new Set();
    for (let E of Q)
      await E();
    A = void 0, i();
  }
}
var yA = class {
  constructor(A, e = null) {
    this._duringUpdate = false, this._stack = [e], this._ctrl = document.createElement("div"), this._ctrl.setAttribute("aria-hidden", "true"), this._ctrl.style.opacity = 0, this._ctrl.style.position = "fixed", this._ctrl.style.top = "-1000px", this._ctrl.style.pointerEvents = "none", this._ctrl.tabIndex = -1, this._ctrl.contentEditable = true, this._ctrl.textContent = "0", this._ctrl.style.visibility = "hidden", this._ctrl.addEventListener("focus", (i) => {
      window.setTimeout(() => void this._ctrl.blur(), 0);
    }), this._ctrl.addEventListener("input", (i) => {
      this._duringUpdate || A(this.data);
      let t = window.getSelection();
      t.containsNode(this._ctrl, true) && t.removeAllRanges();
    });
  }
  get _depth() {
    return +this._ctrl.textContent || 0;
  }
  get data() {
    return this._stack[this._depth];
  }
  push(A, e) {
    this._ctrl.parentNode || (e || document.body).appendChild(this._ctrl);
    let i = this._depth + 1;
    this._stack.splice(i, this._stack.length - i, A);
    let t = document.activeElement;
    try {
      this._duringUpdate = true, this._ctrl.style.visibility = null, this._ctrl.focus(), document.execCommand("selectAll"), document.execCommand("insertText", false, i);
    } finally {
      this._duringUpdate = false, this._ctrl.style.visibility = "hidden";
    }
    t && t.focus();
  }
};
function nA(A, e, i, t) {
  _A(e, t), FA(A, e, i);
  let Q = t.events || vA, E = DA(Q, A, t);
  for (let B2 of Q.keys)
    e.addEventListener(B2, E);
  return () => {
    for (let B2 of Q.keys)
      e.removeEventListener(B2, E);
  };
}
var vA = Object.freeze({ keys: Object.freeze(["keydown", "keyup", "paste", "input", "blur"]), attrs: Object.freeze(["key"]), table: Object.freeze(__spreadProps(__spreadValues({}, LA()), { "evt:keydown,key:Tab"(A, e, i) {
  A.preventDefault(), document.execCommand("insertText", false, i.tabs || "    ");
}, "evt:paste"(A, e) {
  A.preventDefault();
  let i = A.clipboardData.getData("text/plain");
  i && (document.execCommand("insertText", false, i), e.dirty());
} })) });
function DA(A, ...e) {
  let { table: i, attrs: t } = A;
  return (Q) => {
    let E = [`evt:${Q.type}`, ...t.map((B2) => `${B2}:${Q[B2]}`).filter(Boolean)];
    for (let B2 = E.length; B2 > 0; B2--) {
      let I = i[E.slice(0, B2)];
      if (I)
        return I(Q, ...e);
    }
  };
}
function LA() {
  let A = new WeakSet();
  return { "evt:blur"(e, i) {
    A.has(i) ? e.preventDefault() : i._emit_code_change();
  }, async "evt:input"(e, i) {
    if (!A.has(i)) {
      A.add(i), await null;
      try {
        let t = i.src_code;
        for (let Q of i.with_selection())
          document.execCommand("undo", false), i.raw_src_code = t, i.dirty();
      } finally {
        A.delete(i);
      }
    }
  } };
}
function FA(A, e, i) {
  let t = new yA(Q, i);
  function Q(I) {
    let o = t;
    t = null;
    try {
      A._restore_state(I);
    } finally {
      t = o;
    }
  }
  let E = kA(), B2 = A._event_from_state(i);
  return Object.assign(A, { *with_selection() {
    for (let I of fA(e))
      yield;
  }, dirty() {
    E(A.refresh);
  }, refresh() {
    for (let I of A.with_selection())
      A.src_code = A.src_code + "";
  }, _emit_code_change() {
    aA(A, B2, "");
  }, _emit_src_code(I, o, p = ["lang", "src_code"]) {
    bA(o, i, p) || (i = o, t !== null && t.push(A._save_state(o), I), B2 = A._event_from_state(o), aA(A, B2, ":input"));
  } }), E(A._emit_code_change), A;
}
function aA(A, e, i) {
  if (e)
    return A.dispatchEvent(new CustomEvent("src_code" + i, { detail: e, bubbles: true }));
}
function bA(A, e, i) {
  for (let t of i)
    if (A[t] !== e[t])
      return false;
  return true;
}
var NA = { contentEditable: true, spellcheck: false }, JA = { outline: "none", overflowWrap: "break-word", overflowY: "auto", resize: "vertical", whiteSpace: "pre-wrap" };
function _A(A, e) {
  let i = __spreadValues(__spreadValues({}, NA), e.attrs || {});
  for (let t in i)
    A.setAttribute(t, i[t]);
  Object.assign(A.style, __spreadValues(__spreadValues({}, JA), e.style || {}));
}
var xA = class extends HTMLPreElement {
  static with_options(A = {}) {
    return class extends this {
      _dom_connect(e, i) {
        nA(this, e, i, A);
      }
    };
  }
  static define_as(A) {
    customElements.define(A, this);
  }
  connectedCallback() {
    let A = this.textContent.replace(/^\s*\r?\n/, "");
    this.textContent = "";
    let e = { src_code: A, lang: this.lang }, i = this._el_code = this._init_dom(this.ownerDocument);
    this._dom_connect(i, e), this.src_code = A;
  }
  _dom_connect(A, e) {
    nA(this, A, e, {});
  }
  disconnectedCallback() {
    this._dom_disconnect && this._dom_disconnect();
  }
  _init_dom(A) {
    let e = A.createElement("code"), i = A.createElement("pre");
    return i.appendChild(e), this.appendChild(i), e;
  }
  static get observedAttributes() {
    return ["lang"];
  }
  attributeChangedCallback() {
    this.dirty();
  }
  dirty() {
  }
  refresh() {
  }
  get lang() {
    return this.getAttribute("lang") || this.default_lang;
  }
  set lang(A) {
    this.setAttribute("lang", A);
  }
  get raw_src_code() {
    return this._el_code.textContent;
  }
  set raw_src_code(A) {
    let { _el_code: e, lang: i } = this;
    if (e.innerHTML = "", e.textContent = A, i) {
      let t = `language-${i}`;
      e.className = t || "", e.parentNode.className = t || "";
    }
    this._emit_src_code(this, { src_code: A, lang: i });
  }
  get src_code() {
    return this._el_code.textContent;
  }
  set src_code(A) {
    this.raw_src_code = A, this._highlight_src(A, this._el_code);
  }
  _save_state(A) {
    return A;
  }
  _restore_state({ lang: A, src_code: e }) {
    this.lang = A, this.src_code = e;
  }
  _event_from_state(A) {
    return __spreadValues({}, A);
  }
  _highlight_src(A, e) {
  }
}, HA = IA(pA()), RA = class extends xA {
  getCode() {
    return this.src_code;
  }
  set lang(A) {
  }
  get lang() {
    return Array.from(this.classList).find((A) => A.startsWith("language-")).replace("language-", "");
  }
  constructor() {
    super(), this.redispatchEvent = this.redispatchEvent.bind(this);
  }
  connectedCallback() {
    this.addEventListener("src_code", this.redispatchEvent), this.addEventListener("src_code:input", this.redispatchEvent), this._el_code = this.querySelector("code");
    let A = this._el_code.textContent, e = { src_code: A, lang: this.lang };
    this._dom_connect(this._el_code, e), this.src_code = A;
  }
  disconnectedCallback() {
    this.removeEventListener("src_code", this.redispatchEvent), this.removeEventListener("src_code:input", this.redispatchEvent), super.disconnectedCallback();
  }
  redispatchEvent(A) {
    A.stopImmediatePropagation(), A.type === "src_code:input" && this.dispatchEvent(new CustomEvent("update"));
  }
  _highlight_src(A, e) {
    HA.default.highlightElement(e);
  }
};
H();
R();
S();
U();
K();
H();
R();
S();
U();
K();
var SA = new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
function rA(A, e = "@") {
  if (!d)
    return sA.then(() => rA(A));
  let i = A.length + 1, t = (d.__heap_base.value || d.__heap_base) + 4 * i - d.memory.buffer.byteLength;
  t > 0 && d.memory.grow(Math.ceil(t / 65536));
  let Q = d.sa(i - 1);
  if ((SA ? KA : UA)(A, new Uint16Array(d.memory.buffer, Q, i)), !d.parse())
    throw Object.assign(new Error(`Parse error ${e}:${A.slice(0, d.e()).split(`
`).length}:${d.e() - A.lastIndexOf(`
`, d.e() - 1)}`), { idx: d.e() });
  let E = [], B2 = [];
  for (; d.ri(); ) {
    let o = d.is(), p = d.ie(), N = d.ai(), D = d.id(), J2 = d.ss(), L = d.se(), _2;
    d.ip() && (_2 = I(A.slice(D === -1 ? o - 1 : o, D === -1 ? p + 1 : p))), E.push({ n: _2, s: o, e: p, ss: J2, se: L, d: D, a: N });
  }
  for (; d.re(); ) {
    let o = A.slice(d.es(), d.ee()), p = o[0];
    B2.push(p === '"' || p === "'" ? I(o) : o);
  }
  function I(o) {
    try {
      return (0, eval)(o);
    } catch {
    }
  }
  return [E, B2, !!d.f()];
}
function UA(A, e) {
  let i = A.length, t = 0;
  for (; t < i; ) {
    let Q = A.charCodeAt(t);
    e[t++] = (255 & Q) << 8 | Q >>> 8;
  }
}
function KA(A, e) {
  let i = A.length, t = 0;
  for (; t < i; )
    e[t] = A.charCodeAt(t++);
}
var d, sA = WebAssembly.compile((z = "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", typeof Buffer < "u" ? Buffer.from(z, "base64") : Uint8Array.from(atob(z), (A) => A.charCodeAt(0)))).then(WebAssembly.instantiate).then(({ exports: A }) => {
  d = A;
}), z;
function YA(A, e) {
  let i;
  return () => {
    clearTimeout(i), i = window.setTimeout(A, e);
  };
}
function qA(A, ...e) {
  let i = A.raw[0];
  for (let t = 0; t < e.length; t++)
    i += e[t] + A.raw[t + 1];
  return URL.createObjectURL(new Blob([i], { type: "text/javascript" }));
}
var GA = class extends HTMLDivElement {
  constructor() {
    super(), this.onCodeUpdate = YA(this.onCodeUpdate.bind(this), 50);
  }
  connectedCallback() {
    this.$storyContainer = this.querySelector("[data-story-id]"), this.$codeEditor = this.querySelector("pre"), this.$codeEditor.addEventListener("update", this.onCodeUpdate);
  }
  disconnectedCallback() {
    this.$codeEditor.removeEventListener("update", this.onCodeUpdate);
  }
  onCodeUpdate() {
    this.renderCode();
  }
  async renderCode() {
    var A;
    let e = this.$codeEditor.getCode();
    if (e)
      try {
        ((A = this.firstElementChild) == null ? void 0 : A.tagName) === "PRE" && (this.removeChild(this.firstElementChild), this.$storyContainer.style.display = ""), typeof this.disposePreviousRender == "function" && (this.disposePreviousRender(), this.disposePreviousRender = void 0), this.language === "html" ? await this.renderHtml(e) : this.language === "js" && await this.renderJs(e);
      } catch (i) {
        this.$storyContainer.style.display = "none";
        let t = document.createElement("pre");
        t.textContent = `${i}`, this.prepend(t);
      }
  }
  async renderHtml(A) {
    this.$storyContainer.innerHTML = A;
  }
  async renderJs(A) {
    await sA;
    let e = await (await import(qA`
      ${this.getDefineScopeCode()}
      ${this.rewriteImportMaps(A)}
    `))[this.exportName];
    if (!e || typeof e != "function")
      throw `code must contain an export "${this.exportName}" with a story function`;
    return this.renderStoryFunction(e);
  }
  getDefineScopeCode() {
    if (!this.scope)
      return "";
    window.$$playgroundScope != null || (window.$$playgroundScope = {}), window.$$playgroundScope[this.exportName] = {};
    let e = [];
    for (let [i, t] of Object.entries(this.scope))
      window.$$playgroundScope[this.exportName][i] = t, e.push(`const ${i} = window.$$playgroundScope['${this.exportName}'].${i};`);
    return e.join(`
`);
  }
  rewriteImportMaps(A) {
    if (!this.importMaps)
      return A;
    let e = A, i = this.importMaps, [t] = rA(A);
    return [...t].reverse().forEach((Q) => {
      let E = A.substring(Q.s, Q.e);
      i[E] && (e = e.substring(0, Q.s) + i[E] + e.substring(Q.e));
    }), e;
  }
  async renderStoryFunction(A) {
    this.disposePreviousRender = await this.renderStory(A, this.$storyContainer) || void 0;
  }
};
customElements.define("private-divriots-preview-story-code-editor", RA, { extends: "pre" });
customElements.define("private-divriots-preview-story-playground", GA, { extends: "div" });
/**
* Prism: Lightweight, robust, elegant syntax highlighting
*
* @license MIT <https://opensource.org/licenses/MIT>
* @author Lea Verou <https://lea.verou.me>
* @namespace
* @public
*/
const base = "/";
const mapPageUrlToRenderModuleUrl = function mapPageUrlToRenderModuleUrl2(url) {
  const normalizeUrl = (url2) => new URL(url2, location.href).href;
  const normalizedUrl = normalizeUrl(url);
  for (const { url: url2, input } of pages) {
    if (normalizedUrl === normalizeUrl(base + url2)) {
      return normalizeUrl(base + input.replace(/\.(mdx?|svx)$/, ".render-doc.js"));
    }
  }
};
const pages = [];
const pagesGraph = [];
var _docContext = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base,
  mapPageUrlToRenderModuleUrl,
  pages,
  pagesGraph
}, Symbol.toStringTag, { value: "Module" }));
const __content$1 = '<h1 id="lit-starter-kit"><a aria-hidden="true" tabindex="-1" href="#lit-starter-kit"><span class="icon icon-link"></span></a>Lit Starter Kit</h1>\n<h3 id="links"><a aria-hidden="true" tabindex="-1" href="#links"><span class="icon icon-link"></span></a>Links</h3>\n<ul>\n<li><a href="https://lit.dev/" target="_blank" rel="nofollow noopener">Official website</a></li>\n<li><a href="https://join.slack.com/t/polymer/shared_invite/enQtNTAzNzg3NjU4ODM4LTkzZGVlOGIxMmNiMjMzZDM1YzYyMzdiYTk0YjQyOWZhZTMwN2RlNjM5ZDFmZjMxZWRjMWViMDA1MjNiYWFhZWM" target="_blank" rel="nofollow noopener">Chat</a></li>\n<li><a href="https://github.com/lit/lit" target="_blank" rel="nofollow noopener">GitHub</a></li>\n<li><a href="https://github.com/lit/lit/issues" target="_blank" rel="nofollow noopener">Issues</a></li>\n</ul>';
const __internals$1 = {};
var mdjs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __content: __content$1,
  __internals: __internals$1,
  __context: _docContext
}, Symbol.toStringTag, { value: "Module" }));
const _a = mdjs, { default: mdjsConfig = {}, __context, __content, __internals = {} } = _a, stories = __objRest(_a, ["default", "__context", "__content", "__internals"]);
const rootEl = document.querySelector("#root");
if (!rootEl) {
  throw new Error("Unable to find root element root");
}
const storiesCount = Object.keys(stories).length;
const hasStories = storiesCount > 0;
let storiesRenderedCount;
let storiesRenderingPromise;
let resolveStoriesRenderingPromise;
let storiesObserver;
let storiesQueue;
function scheduleStoriesRender() {
  storiesRenderedCount = storiesCount;
  storiesRenderingPromise = hasStories ? new Promise((resolve) => {
    resolveStoriesRenderingPromise = resolve;
  }) : null;
  storiesQueue = __spreadValues({}, stories);
  storiesObserver = new MutationObserver((mutations, observer) => {
    const childListMutations = mutations.filter((mutation) => mutation.type === "childList");
    const addedNodes = childListMutations.flatMap((mutation) => [...mutation.addedNodes]);
    if (addedNodes.length > 0) {
      renderStoryElements();
    }
  });
  storiesObserver.observe(rootEl.parentNode, {
    attributes: true,
    childList: true,
    subtree: true
  });
}
function getStoryFromQueue(storyNode, storyId) {
  const story = storiesQueue[storyId];
  if (story) {
    delete storiesQueue[storyId];
    if (Object.keys(storiesQueue).length === 0) {
      storiesObserver.disconnect();
    }
  }
  return story;
}
function renderStoryElements() {
  const mdjsStoryNodes = rootEl.querySelectorAll("div[data-story-id]");
  for (const node of mdjsStoryNodes) {
    const storyId = node.getAttribute("data-story-id");
    const story = getStoryFromQueue(node, storyId);
    if (!story) {
      return;
    }
    const $playground = node.parentElement.getAttribute("is") === "private-divriots-preview-story-playground" ? node.parentElement : void 0;
    if ($playground) {
      $playground.language = story.$$playgroundLanguage;
      $playground.renderStory = (story2, container) => Rr(require2, story2(), container);
      if (story.$$playgroundExportName) {
        $playground.exportName = story.$$playgroundExportName;
      }
      if (story.$$playgroundScope) {
        $playground.scope = story.$$playgroundScope;
      }
      if (story.$$playgroundImportMaps) {
        $playground.importMaps = story.$$playgroundImportMaps;
      }
    }
    Nr(node, story, storyId, mdjsConfig, require2, "docs", "/README.md?code").then(async ({ story: story2, storyContext, storyFn }) => {
      const dispose = await Rr(require2, storyFn(), node);
      if ($playground && typeof dispose === "function") {
        $playground.disposePreviousRender = dispose;
      }
      if (story2.playFunction)
        story2.playFunction(storyContext);
    }).then(() => updateStoryRenderingPromise());
  }
  const htmlStoryNodes = rootEl.querySelectorAll("div[id]");
  for (const node of htmlStoryNodes) {
    const storyId = node.id;
    const story = getStoryFromQueue(node, storyId);
    if (!story) {
      return;
    }
    Rr(require2, story, node).then(() => updateStoryRenderingPromise());
  }
}
function updateStoryRenderingPromise() {
  storiesRenderedCount--;
  if (storiesRenderedCount === 0) {
    resolveStoriesRenderingPromise();
  }
}
let layout;
if (mdjsConfig) {
  if (mdjsConfig.htmlParser) {
    __internals.htmlParser = mdjsConfig.htmlParser;
  }
  if (mdjsConfig.layout) {
    layout = mdjsConfig.layout;
  }
}
const renderDoc = async () => {
  if (hasStories) {
    scheduleStoriesRender();
  }
  if (layout) {
    await Rr(require2, layout(__content, __context), rootEl);
  } else {
    rootEl.innerHTML = __content;
  }
  if (hasStories) {
    await storiesRenderingPromise;
  }
};
export { renderDoc as default };
