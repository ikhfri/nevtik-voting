var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
/*!
 * Chart.js v4.1.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */
!function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Chart = e();
}(globalThis, function() {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2, _j, _k;
  var t = Object.freeze({ __proto__: null, get Colors() {
    return Ho;
  }, get Decimation() {
    return Yo;
  }, get Filler() {
    return la;
  }, get Legend() {
    return ua;
  }, get SubTitle() {
    return ma;
  }, get Title() {
    return ga;
  }, get Tooltip() {
    return Ta;
  } });
  function e() {
  }
  const i = (() => {
    let t2 = 0;
    return () => t2++;
  })();
  function s(t2) {
    return null == t2;
  }
  function n(t2) {
    if (Array.isArray && Array.isArray(t2))
      return true;
    const e2 = Object.prototype.toString.call(t2);
    return "[object" === e2.slice(0, 7) && "Array]" === e2.slice(-6);
  }
  function o(t2) {
    return null !== t2 && "[object Object]" === Object.prototype.toString.call(t2);
  }
  function a(t2) {
    return ("number" == typeof t2 || t2 instanceof Number) && isFinite(+t2);
  }
  function r(t2, e2) {
    return a(t2) ? t2 : e2;
  }
  function l(t2, e2) {
    return void 0 === t2 ? e2 : t2;
  }
  const h = (t2, e2) => "string" == typeof t2 && t2.endsWith("%") ? parseFloat(t2) / 100 : +t2 / e2, c = (t2, e2) => "string" == typeof t2 && t2.endsWith("%") ? parseFloat(t2) / 100 * e2 : +t2;
  function d(t2, e2, i2) {
    if (t2 && "function" == typeof t2.call)
      return t2.apply(i2, e2);
  }
  function u(t2, e2, i2, s2) {
    let a2, r2, l2;
    if (n(t2))
      if (r2 = t2.length, s2)
        for (a2 = r2 - 1; a2 >= 0; a2--)
          e2.call(i2, t2[a2], a2);
      else
        for (a2 = 0; a2 < r2; a2++)
          e2.call(i2, t2[a2], a2);
    else if (o(t2))
      for (l2 = Object.keys(t2), r2 = l2.length, a2 = 0; a2 < r2; a2++)
        e2.call(i2, t2[l2[a2]], l2[a2]);
  }
  function f(t2, e2) {
    let i2, s2, n2, o2;
    if (!t2 || !e2 || t2.length !== e2.length)
      return false;
    for (i2 = 0, s2 = t2.length; i2 < s2; ++i2)
      if (n2 = t2[i2], o2 = e2[i2], n2.datasetIndex !== o2.datasetIndex || n2.index !== o2.index)
        return false;
    return true;
  }
  function g(t2) {
    if (n(t2))
      return t2.map(g);
    if (o(t2)) {
      const e2 = /* @__PURE__ */ Object.create(null), i2 = Object.keys(t2), s2 = i2.length;
      let n2 = 0;
      for (; n2 < s2; ++n2)
        e2[i2[n2]] = g(t2[i2[n2]]);
      return e2;
    }
    return t2;
  }
  function p(t2) {
    return -1 === ["__proto__", "prototype", "constructor"].indexOf(t2);
  }
  function m(t2, e2, i2, s2) {
    if (!p(t2))
      return;
    const n2 = e2[t2], a2 = i2[t2];
    o(n2) && o(a2) ? b(n2, a2, s2) : e2[t2] = g(a2);
  }
  function b(t2, e2, i2) {
    const s2 = n(e2) ? e2 : [e2], a2 = s2.length;
    if (!o(t2))
      return t2;
    const r2 = (i2 = i2 || {}).merger || m;
    let l2;
    for (let e3 = 0; e3 < a2; ++e3) {
      if (l2 = s2[e3], !o(l2))
        continue;
      const n2 = Object.keys(l2);
      for (let e4 = 0, s3 = n2.length; e4 < s3; ++e4)
        r2(n2[e4], t2, l2, i2);
    }
    return t2;
  }
  function x(t2, e2) {
    return b(t2, e2, { merger: _ });
  }
  function _(t2, e2, i2) {
    if (!p(t2))
      return;
    const s2 = e2[t2], n2 = i2[t2];
    o(s2) && o(n2) ? x(s2, n2) : Object.prototype.hasOwnProperty.call(e2, t2) || (e2[t2] = g(n2));
  }
  const y = { "": (t2) => t2, x: (t2) => t2.x, y: (t2) => t2.y };
  function v(t2) {
    const e2 = t2.split("."), i2 = [];
    let s2 = "";
    for (const t3 of e2)
      s2 += t3, s2.endsWith("\\") ? s2 = s2.slice(0, -1) + "." : (i2.push(s2), s2 = "");
    return i2;
  }
  function M(t2, e2) {
    const i2 = y[e2] || (y[e2] = function(t3) {
      const e3 = v(t3);
      return (t4) => {
        for (const i3 of e3) {
          if ("" === i3)
            break;
          t4 = t4 && t4[i3];
        }
        return t4;
      };
    }(e2));
    return i2(t2);
  }
  function w(t2) {
    return t2.charAt(0).toUpperCase() + t2.slice(1);
  }
  const k = (t2) => void 0 !== t2, S = (t2) => "function" == typeof t2, P = (t2, e2) => {
    if (t2.size !== e2.size)
      return false;
    for (const i2 of t2)
      if (!e2.has(i2))
        return false;
    return true;
  };
  function D(t2) {
    return "mouseup" === t2.type || "click" === t2.type || "contextmenu" === t2.type;
  }
  const C = Math.PI, O = 2 * C, A = O + C, T = Number.POSITIVE_INFINITY, L = C / 180, E = C / 2, R = C / 4, I = 2 * C / 3, z = Math.log10, F = Math.sign;
  function V(t2, e2, i2) {
    return Math.abs(t2 - e2) < i2;
  }
  function B(t2) {
    const e2 = Math.round(t2);
    t2 = V(t2, e2, t2 / 1e3) ? e2 : t2;
    const i2 = Math.pow(10, Math.floor(z(t2))), s2 = t2 / i2;
    return (s2 <= 1 ? 1 : s2 <= 2 ? 2 : s2 <= 5 ? 5 : 10) * i2;
  }
  function N(t2) {
    const e2 = [], i2 = Math.sqrt(t2);
    let s2;
    for (s2 = 1; s2 < i2; s2++)
      t2 % s2 == 0 && (e2.push(s2), e2.push(t2 / s2));
    return i2 === (0 | i2) && e2.push(i2), e2.sort((t3, e3) => t3 - e3).pop(), e2;
  }
  function W(t2) {
    return !isNaN(parseFloat(t2)) && isFinite(t2);
  }
  function H(t2, e2) {
    const i2 = Math.round(t2);
    return i2 - e2 <= t2 && i2 + e2 >= t2;
  }
  function j(t2, e2, i2) {
    let s2, n2, o2;
    for (s2 = 0, n2 = t2.length; s2 < n2; s2++)
      o2 = t2[s2][i2], isNaN(o2) || (e2.min = Math.min(e2.min, o2), e2.max = Math.max(e2.max, o2));
  }
  function $(t2) {
    return t2 * (C / 180);
  }
  function Y(t2) {
    return t2 * (180 / C);
  }
  function U(t2) {
    if (!a(t2))
      return;
    let e2 = 1, i2 = 0;
    for (; Math.round(t2 * e2) / e2 !== t2; )
      e2 *= 10, i2++;
    return i2;
  }
  function X(t2, e2) {
    const i2 = e2.x - t2.x, s2 = e2.y - t2.y, n2 = Math.sqrt(i2 * i2 + s2 * s2);
    let o2 = Math.atan2(s2, i2);
    return o2 < -0.5 * C && (o2 += O), { angle: o2, distance: n2 };
  }
  function q(t2, e2) {
    return Math.sqrt(Math.pow(e2.x - t2.x, 2) + Math.pow(e2.y - t2.y, 2));
  }
  function K(t2, e2) {
    return (t2 - e2 + A) % O - C;
  }
  function G(t2) {
    return (t2 % O + O) % O;
  }
  function Z(t2, e2, i2, s2) {
    const n2 = G(t2), o2 = G(e2), a2 = G(i2), r2 = G(o2 - n2), l2 = G(a2 - n2), h2 = G(n2 - o2), c2 = G(n2 - a2);
    return n2 === o2 || n2 === a2 || s2 && o2 === a2 || r2 > l2 && h2 < c2;
  }
  function J(t2, e2, i2) {
    return Math.max(e2, Math.min(i2, t2));
  }
  function Q(t2) {
    return J(t2, -32768, 32767);
  }
  function tt(t2, e2, i2, s2 = 1e-6) {
    return t2 >= Math.min(e2, i2) - s2 && t2 <= Math.max(e2, i2) + s2;
  }
  function et(t2, e2, i2) {
    i2 = i2 || ((i3) => t2[i3] < e2);
    let s2, n2 = t2.length - 1, o2 = 0;
    for (; n2 - o2 > 1; )
      s2 = o2 + n2 >> 1, i2(s2) ? o2 = s2 : n2 = s2;
    return { lo: o2, hi: n2 };
  }
  const it = (t2, e2, i2, s2) => et(t2, i2, s2 ? (s3) => {
    const n2 = t2[s3][e2];
    return n2 < i2 || n2 === i2 && t2[s3 + 1][e2] === i2;
  } : (s3) => t2[s3][e2] < i2), st = (t2, e2, i2) => et(t2, i2, (s2) => t2[s2][e2] >= i2);
  function nt(t2, e2, i2) {
    let s2 = 0, n2 = t2.length;
    for (; s2 < n2 && t2[s2] < e2; )
      s2++;
    for (; n2 > s2 && t2[n2 - 1] > i2; )
      n2--;
    return s2 > 0 || n2 < t2.length ? t2.slice(s2, n2) : t2;
  }
  const ot = ["push", "pop", "shift", "splice", "unshift"];
  function at(t2, e2) {
    t2._chartjs ? t2._chartjs.listeners.push(e2) : (Object.defineProperty(t2, "_chartjs", { configurable: true, enumerable: false, value: { listeners: [e2] } }), ot.forEach((e3) => {
      const i2 = "_onData" + w(e3), s2 = t2[e3];
      Object.defineProperty(t2, e3, { configurable: true, enumerable: false, value(...e4) {
        const n2 = s2.apply(this, e4);
        return t2._chartjs.listeners.forEach((t3) => {
          "function" == typeof t3[i2] && t3[i2](...e4);
        }), n2;
      } });
    }));
  }
  function rt(t2, e2) {
    const i2 = t2._chartjs;
    if (!i2)
      return;
    const s2 = i2.listeners, n2 = s2.indexOf(e2);
    -1 !== n2 && s2.splice(n2, 1), s2.length > 0 || (ot.forEach((e3) => {
      delete t2[e3];
    }), delete t2._chartjs);
  }
  function lt(t2) {
    const e2 = /* @__PURE__ */ new Set();
    let i2, s2;
    for (i2 = 0, s2 = t2.length; i2 < s2; ++i2)
      e2.add(t2[i2]);
    return e2.size === s2 ? t2 : Array.from(e2);
  }
  const ht = "undefined" == typeof window ? function(t2) {
    return t2();
  } : window.requestAnimationFrame;
  function ct(t2, e2) {
    let i2 = [], s2 = false;
    return function(...n2) {
      i2 = n2, s2 || (s2 = true, ht.call(window, () => {
        s2 = false, t2.apply(e2, i2);
      }));
    };
  }
  function dt(t2, e2) {
    let i2;
    return function(...s2) {
      return e2 ? (clearTimeout(i2), i2 = setTimeout(t2, e2, s2)) : t2.apply(this, s2), e2;
    };
  }
  const ut = (t2) => "start" === t2 ? "left" : "end" === t2 ? "right" : "center", ft = (t2, e2, i2) => "start" === t2 ? e2 : "end" === t2 ? i2 : (e2 + i2) / 2, gt = (t2, e2, i2, s2) => t2 === (s2 ? "left" : "right") ? i2 : "center" === t2 ? (e2 + i2) / 2 : e2;
  function pt(t2, e2, i2) {
    const s2 = e2.length;
    let n2 = 0, o2 = s2;
    if (t2._sorted) {
      const { iScale: a2, _parsed: r2 } = t2, l2 = a2.axis, { min: h2, max: c2, minDefined: d2, maxDefined: u2 } = a2.getUserBounds();
      d2 && (n2 = J(Math.min(it(r2, a2.axis, h2).lo, i2 ? s2 : it(e2, l2, a2.getPixelForValue(h2)).lo), 0, s2 - 1)), o2 = u2 ? J(Math.max(it(r2, a2.axis, c2, true).hi + 1, i2 ? 0 : it(e2, l2, a2.getPixelForValue(c2), true).hi + 1), n2, s2) - n2 : s2 - n2;
    }
    return { start: n2, count: o2 };
  }
  function mt(t2) {
    const { xScale: e2, yScale: i2, _scaleRanges: s2 } = t2, n2 = { xmin: e2.min, xmax: e2.max, ymin: i2.min, ymax: i2.max };
    if (!s2)
      return t2._scaleRanges = n2, true;
    const o2 = s2.xmin !== e2.min || s2.xmax !== e2.max || s2.ymin !== i2.min || s2.ymax !== i2.max;
    return Object.assign(s2, n2), o2;
  }
  class bt {
    constructor() {
      this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = false, this._lastDate = void 0;
    }
    _notify(t2, e2, i2, s2) {
      const n2 = e2.listeners[s2], o2 = e2.duration;
      n2.forEach((s3) => s3({ chart: t2, initial: e2.initial, numSteps: o2, currentStep: Math.min(i2 - e2.start, o2) }));
    }
    _refresh() {
      this._request || (this._running = true, this._request = ht.call(window, () => {
        this._update(), this._request = null, this._running && this._refresh();
      }));
    }
    _update(t2 = Date.now()) {
      let e2 = 0;
      this._charts.forEach((i2, s2) => {
        if (!i2.running || !i2.items.length)
          return;
        const n2 = i2.items;
        let o2, a2 = n2.length - 1, r2 = false;
        for (; a2 >= 0; --a2)
          o2 = n2[a2], o2._active ? (o2._total > i2.duration && (i2.duration = o2._total), o2.tick(t2), r2 = true) : (n2[a2] = n2[n2.length - 1], n2.pop());
        r2 && (s2.draw(), this._notify(s2, i2, t2, "progress")), n2.length || (i2.running = false, this._notify(s2, i2, t2, "complete"), i2.initial = false), e2 += n2.length;
      }), this._lastDate = t2, 0 === e2 && (this._running = false);
    }
    _getAnims(t2) {
      const e2 = this._charts;
      let i2 = e2.get(t2);
      return i2 || (i2 = { running: false, initial: true, items: [], listeners: { complete: [], progress: [] } }, e2.set(t2, i2)), i2;
    }
    listen(t2, e2, i2) {
      this._getAnims(t2).listeners[e2].push(i2);
    }
    add(t2, e2) {
      e2 && e2.length && this._getAnims(t2).items.push(...e2);
    }
    has(t2) {
      return this._getAnims(t2).items.length > 0;
    }
    start(t2) {
      const e2 = this._charts.get(t2);
      e2 && (e2.running = true, e2.start = Date.now(), e2.duration = e2.items.reduce((t3, e3) => Math.max(t3, e3._duration), 0), this._refresh());
    }
    running(t2) {
      if (!this._running)
        return false;
      const e2 = this._charts.get(t2);
      return !!(e2 && e2.running && e2.items.length);
    }
    stop(t2) {
      const e2 = this._charts.get(t2);
      if (!e2 || !e2.items.length)
        return;
      const i2 = e2.items;
      let s2 = i2.length - 1;
      for (; s2 >= 0; --s2)
        i2[s2].cancel();
      e2.items = [], this._notify(t2, e2, Date.now(), "complete");
    }
    remove(t2) {
      return this._charts.delete(t2);
    }
  }
  var xt = new bt();
  /*!
   * @kurkle/color v0.3.0
   * https://github.com/kurkle/color#readme
   * (c) 2022 Jukka Kurkela
   * Released under the MIT License
   */
  function _t(t2) {
    return t2 + 0.5 | 0;
  }
  const yt = (t2, e2, i2) => Math.max(Math.min(t2, i2), e2);
  function vt(t2) {
    return yt(_t(2.55 * t2), 0, 255);
  }
  function Mt(t2) {
    return yt(_t(255 * t2), 0, 255);
  }
  function wt(t2) {
    return yt(_t(t2 / 2.55) / 100, 0, 1);
  }
  function kt(t2) {
    return yt(_t(100 * t2), 0, 100);
  }
  const St = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Pt = [..."0123456789ABCDEF"], Dt = (t2) => Pt[15 & t2], Ct = (t2) => Pt[(240 & t2) >> 4] + Pt[15 & t2], Ot = (t2) => (240 & t2) >> 4 == (15 & t2);
  function At(t2) {
    var e2 = ((t3) => Ot(t3.r) && Ot(t3.g) && Ot(t3.b) && Ot(t3.a))(t2) ? Dt : Ct;
    return t2 ? "#" + e2(t2.r) + e2(t2.g) + e2(t2.b) + ((t3, e3) => t3 < 255 ? e3(t3) : "")(t2.a, e2) : void 0;
  }
  const Tt = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
  function Lt(t2, e2, i2) {
    const s2 = e2 * Math.min(i2, 1 - i2), n2 = (e3, n3 = (e3 + t2 / 30) % 12) => i2 - s2 * Math.max(Math.min(n3 - 3, 9 - n3, 1), -1);
    return [n2(0), n2(8), n2(4)];
  }
  function Et(t2, e2, i2) {
    const s2 = (s3, n2 = (s3 + t2 / 60) % 6) => i2 - i2 * e2 * Math.max(Math.min(n2, 4 - n2, 1), 0);
    return [s2(5), s2(3), s2(1)];
  }
  function Rt(t2, e2, i2) {
    const s2 = Lt(t2, 1, 0.5);
    let n2;
    for (e2 + i2 > 1 && (n2 = 1 / (e2 + i2), e2 *= n2, i2 *= n2), n2 = 0; n2 < 3; n2++)
      s2[n2] *= 1 - e2 - i2, s2[n2] += e2;
    return s2;
  }
  function It(t2) {
    const e2 = t2.r / 255, i2 = t2.g / 255, s2 = t2.b / 255, n2 = Math.max(e2, i2, s2), o2 = Math.min(e2, i2, s2), a2 = (n2 + o2) / 2;
    let r2, l2, h2;
    return n2 !== o2 && (h2 = n2 - o2, l2 = a2 > 0.5 ? h2 / (2 - n2 - o2) : h2 / (n2 + o2), r2 = function(t3, e3, i3, s3, n3) {
      return t3 === n3 ? (e3 - i3) / s3 + (e3 < i3 ? 6 : 0) : e3 === n3 ? (i3 - t3) / s3 + 2 : (t3 - e3) / s3 + 4;
    }(e2, i2, s2, h2, n2), r2 = 60 * r2 + 0.5), [0 | r2, l2 || 0, a2];
  }
  function zt(t2, e2, i2, s2) {
    return (Array.isArray(e2) ? t2(e2[0], e2[1], e2[2]) : t2(e2, i2, s2)).map(Mt);
  }
  function Ft(t2, e2, i2) {
    return zt(Lt, t2, e2, i2);
  }
  function Vt(t2) {
    return (t2 % 360 + 360) % 360;
  }
  function Bt(t2) {
    const e2 = Tt.exec(t2);
    let i2, s2 = 255;
    if (!e2)
      return;
    e2[5] !== i2 && (s2 = e2[6] ? vt(+e2[5]) : Mt(+e2[5]));
    const n2 = Vt(+e2[2]), o2 = +e2[3] / 100, a2 = +e2[4] / 100;
    return i2 = "hwb" === e2[1] ? function(t3, e3, i3) {
      return zt(Rt, t3, e3, i3);
    }(n2, o2, a2) : "hsv" === e2[1] ? function(t3, e3, i3) {
      return zt(Et, t3, e3, i3);
    }(n2, o2, a2) : Ft(n2, o2, a2), { r: i2[0], g: i2[1], b: i2[2], a: s2 };
  }
  const Nt = { x: "dark", Z: "light", Y: "re", X: "blu", W: "gr", V: "medium", U: "slate", A: "ee", T: "ol", S: "or", B: "ra", C: "lateg", D: "ights", R: "in", Q: "turquois", E: "hi", P: "ro", O: "al", N: "le", M: "de", L: "yello", F: "en", K: "ch", G: "arks", H: "ea", I: "ightg", J: "wh" }, Wt = { OiceXe: "f0f8ff", antiquewEte: "faebd7", aqua: "ffff", aquamarRe: "7fffd4", azuY: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "0", blanKedOmond: "ffebcd", Xe: "ff", XeviTet: "8a2be2", bPwn: "a52a2a", burlywood: "deb887", caMtXe: "5f9ea0", KartYuse: "7fff00", KocTate: "d2691e", cSO: "ff7f50", cSnflowerXe: "6495ed", cSnsilk: "fff8dc", crimson: "dc143c", cyan: "ffff", xXe: "8b", xcyan: "8b8b", xgTMnPd: "b8860b", xWay: "a9a9a9", xgYF: "6400", xgYy: "a9a9a9", xkhaki: "bdb76b", xmagFta: "8b008b", xTivegYF: "556b2f", xSange: "ff8c00", xScEd: "9932cc", xYd: "8b0000", xsOmon: "e9967a", xsHgYF: "8fbc8f", xUXe: "483d8b", xUWay: "2f4f4f", xUgYy: "2f4f4f", xQe: "ced1", xviTet: "9400d3", dAppRk: "ff1493", dApskyXe: "bfff", dimWay: "696969", dimgYy: "696969", dodgerXe: "1e90ff", fiYbrick: "b22222", flSOwEte: "fffaf0", foYstWAn: "228b22", fuKsia: "ff00ff", gaRsbSo: "dcdcdc", ghostwEte: "f8f8ff", gTd: "ffd700", gTMnPd: "daa520", Way: "808080", gYF: "8000", gYFLw: "adff2f", gYy: "808080", honeyMw: "f0fff0", hotpRk: "ff69b4", RdianYd: "cd5c5c", Rdigo: "4b0082", ivSy: "fffff0", khaki: "f0e68c", lavFMr: "e6e6fa", lavFMrXsh: "fff0f5", lawngYF: "7cfc00", NmoncEffon: "fffacd", ZXe: "add8e6", ZcSO: "f08080", Zcyan: "e0ffff", ZgTMnPdLw: "fafad2", ZWay: "d3d3d3", ZgYF: "90ee90", ZgYy: "d3d3d3", ZpRk: "ffb6c1", ZsOmon: "ffa07a", ZsHgYF: "20b2aa", ZskyXe: "87cefa", ZUWay: "778899", ZUgYy: "778899", ZstAlXe: "b0c4de", ZLw: "ffffe0", lime: "ff00", limegYF: "32cd32", lRF: "faf0e6", magFta: "ff00ff", maPon: "800000", VaquamarRe: "66cdaa", VXe: "cd", VScEd: "ba55d3", VpurpN: "9370db", VsHgYF: "3cb371", VUXe: "7b68ee", VsprRggYF: "fa9a", VQe: "48d1cc", VviTetYd: "c71585", midnightXe: "191970", mRtcYam: "f5fffa", mistyPse: "ffe4e1", moccasR: "ffe4b5", navajowEte: "ffdead", navy: "80", Tdlace: "fdf5e6", Tive: "808000", TivedBb: "6b8e23", Sange: "ffa500", SangeYd: "ff4500", ScEd: "da70d6", pOegTMnPd: "eee8aa", pOegYF: "98fb98", pOeQe: "afeeee", pOeviTetYd: "db7093", papayawEp: "ffefd5", pHKpuff: "ffdab9", peru: "cd853f", pRk: "ffc0cb", plum: "dda0dd", powMrXe: "b0e0e6", purpN: "800080", YbeccapurpN: "663399", Yd: "ff0000", Psybrown: "bc8f8f", PyOXe: "4169e1", saddNbPwn: "8b4513", sOmon: "fa8072", sandybPwn: "f4a460", sHgYF: "2e8b57", sHshell: "fff5ee", siFna: "a0522d", silver: "c0c0c0", skyXe: "87ceeb", UXe: "6a5acd", UWay: "708090", UgYy: "708090", snow: "fffafa", sprRggYF: "ff7f", stAlXe: "4682b4", tan: "d2b48c", teO: "8080", tEstN: "d8bfd8", tomato: "ff6347", Qe: "40e0d0", viTet: "ee82ee", JHt: "f5deb3", wEte: "ffffff", wEtesmoke: "f5f5f5", Lw: "ffff00", LwgYF: "9acd32" };
  let Ht;
  function jt(t2) {
    Ht || (Ht = function() {
      const t3 = {}, e3 = Object.keys(Wt), i2 = Object.keys(Nt);
      let s2, n2, o2, a2, r2;
      for (s2 = 0; s2 < e3.length; s2++) {
        for (a2 = r2 = e3[s2], n2 = 0; n2 < i2.length; n2++)
          o2 = i2[n2], r2 = r2.replace(o2, Nt[o2]);
        o2 = parseInt(Wt[a2], 16), t3[r2] = [o2 >> 16 & 255, o2 >> 8 & 255, 255 & o2];
      }
      return t3;
    }(), Ht.transparent = [0, 0, 0, 0]);
    const e2 = Ht[t2.toLowerCase()];
    return e2 && { r: e2[0], g: e2[1], b: e2[2], a: 4 === e2.length ? e2[3] : 255 };
  }
  const $t = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
  const Yt = (t2) => t2 <= 31308e-7 ? 12.92 * t2 : 1.055 * Math.pow(t2, 1 / 2.4) - 0.055, Ut = (t2) => t2 <= 0.04045 ? t2 / 12.92 : Math.pow((t2 + 0.055) / 1.055, 2.4);
  function Xt(t2, e2, i2) {
    if (t2) {
      let s2 = It(t2);
      s2[e2] = Math.max(0, Math.min(s2[e2] + s2[e2] * i2, 0 === e2 ? 360 : 1)), s2 = Ft(s2), t2.r = s2[0], t2.g = s2[1], t2.b = s2[2];
    }
  }
  function qt(t2, e2) {
    return t2 ? Object.assign(e2 || {}, t2) : t2;
  }
  function Kt(t2) {
    var e2 = { r: 0, g: 0, b: 0, a: 255 };
    return Array.isArray(t2) ? t2.length >= 3 && (e2 = { r: t2[0], g: t2[1], b: t2[2], a: 255 }, t2.length > 3 && (e2.a = Mt(t2[3]))) : (e2 = qt(t2, { r: 0, g: 0, b: 0, a: 1 })).a = Mt(e2.a), e2;
  }
  function Gt(t2) {
    return "r" === t2.charAt(0) ? function(t3) {
      const e2 = $t.exec(t3);
      let i2, s2, n2, o2 = 255;
      if (e2) {
        if (e2[7] !== i2) {
          const t4 = +e2[7];
          o2 = e2[8] ? vt(t4) : yt(255 * t4, 0, 255);
        }
        return i2 = +e2[1], s2 = +e2[3], n2 = +e2[5], i2 = 255 & (e2[2] ? vt(i2) : yt(i2, 0, 255)), s2 = 255 & (e2[4] ? vt(s2) : yt(s2, 0, 255)), n2 = 255 & (e2[6] ? vt(n2) : yt(n2, 0, 255)), { r: i2, g: s2, b: n2, a: o2 };
      }
    }(t2) : Bt(t2);
  }
  class Zt {
    constructor(t2) {
      if (t2 instanceof Zt)
        return t2;
      const e2 = typeof t2;
      let i2;
      var s2, n2, o2;
      "object" === e2 ? i2 = Kt(t2) : "string" === e2 && (o2 = (s2 = t2).length, "#" === s2[0] && (4 === o2 || 5 === o2 ? n2 = { r: 255 & 17 * St[s2[1]], g: 255 & 17 * St[s2[2]], b: 255 & 17 * St[s2[3]], a: 5 === o2 ? 17 * St[s2[4]] : 255 } : 7 !== o2 && 9 !== o2 || (n2 = { r: St[s2[1]] << 4 | St[s2[2]], g: St[s2[3]] << 4 | St[s2[4]], b: St[s2[5]] << 4 | St[s2[6]], a: 9 === o2 ? St[s2[7]] << 4 | St[s2[8]] : 255 })), i2 = n2 || jt(t2) || Gt(t2)), this._rgb = i2, this._valid = !!i2;
    }
    get valid() {
      return this._valid;
    }
    get rgb() {
      var t2 = qt(this._rgb);
      return t2 && (t2.a = wt(t2.a)), t2;
    }
    set rgb(t2) {
      this._rgb = Kt(t2);
    }
    rgbString() {
      return this._valid ? (t2 = this._rgb) && (t2.a < 255 ? `rgba(${t2.r}, ${t2.g}, ${t2.b}, ${wt(t2.a)})` : `rgb(${t2.r}, ${t2.g}, ${t2.b})`) : void 0;
      var t2;
    }
    hexString() {
      return this._valid ? At(this._rgb) : void 0;
    }
    hslString() {
      return this._valid ? function(t2) {
        if (!t2)
          return;
        const e2 = It(t2), i2 = e2[0], s2 = kt(e2[1]), n2 = kt(e2[2]);
        return t2.a < 255 ? `hsla(${i2}, ${s2}%, ${n2}%, ${wt(t2.a)})` : `hsl(${i2}, ${s2}%, ${n2}%)`;
      }(this._rgb) : void 0;
    }
    mix(t2, e2) {
      if (t2) {
        const i2 = this.rgb, s2 = t2.rgb;
        let n2;
        const o2 = e2 === n2 ? 0.5 : e2, a2 = 2 * o2 - 1, r2 = i2.a - s2.a, l2 = ((a2 * r2 == -1 ? a2 : (a2 + r2) / (1 + a2 * r2)) + 1) / 2;
        n2 = 1 - l2, i2.r = 255 & l2 * i2.r + n2 * s2.r + 0.5, i2.g = 255 & l2 * i2.g + n2 * s2.g + 0.5, i2.b = 255 & l2 * i2.b + n2 * s2.b + 0.5, i2.a = o2 * i2.a + (1 - o2) * s2.a, this.rgb = i2;
      }
      return this;
    }
    interpolate(t2, e2) {
      return t2 && (this._rgb = function(t3, e3, i2) {
        const s2 = Ut(wt(t3.r)), n2 = Ut(wt(t3.g)), o2 = Ut(wt(t3.b));
        return { r: Mt(Yt(s2 + i2 * (Ut(wt(e3.r)) - s2))), g: Mt(Yt(n2 + i2 * (Ut(wt(e3.g)) - n2))), b: Mt(Yt(o2 + i2 * (Ut(wt(e3.b)) - o2))), a: t3.a + i2 * (e3.a - t3.a) };
      }(this._rgb, t2._rgb, e2)), this;
    }
    clone() {
      return new Zt(this.rgb);
    }
    alpha(t2) {
      return this._rgb.a = Mt(t2), this;
    }
    clearer(t2) {
      return this._rgb.a *= 1 - t2, this;
    }
    greyscale() {
      const t2 = this._rgb, e2 = _t(0.3 * t2.r + 0.59 * t2.g + 0.11 * t2.b);
      return t2.r = t2.g = t2.b = e2, this;
    }
    opaquer(t2) {
      return this._rgb.a *= 1 + t2, this;
    }
    negate() {
      const t2 = this._rgb;
      return t2.r = 255 - t2.r, t2.g = 255 - t2.g, t2.b = 255 - t2.b, this;
    }
    lighten(t2) {
      return Xt(this._rgb, 2, t2), this;
    }
    darken(t2) {
      return Xt(this._rgb, 2, -t2), this;
    }
    saturate(t2) {
      return Xt(this._rgb, 1, t2), this;
    }
    desaturate(t2) {
      return Xt(this._rgb, 1, -t2), this;
    }
    rotate(t2) {
      return function(t3, e2) {
        var i2 = It(t3);
        i2[0] = Vt(i2[0] + e2), i2 = Ft(i2), t3.r = i2[0], t3.g = i2[1], t3.b = i2[2];
      }(this._rgb, t2), this;
    }
  }
  function Jt(t2) {
    if (t2 && "object" == typeof t2) {
      const e2 = t2.toString();
      return "[object CanvasPattern]" === e2 || "[object CanvasGradient]" === e2;
    }
    return false;
  }
  function Qt(t2) {
    return Jt(t2) ? t2 : new Zt(t2);
  }
  function te(t2) {
    return Jt(t2) ? t2 : new Zt(t2).saturate(0.5).darken(0.1).hexString();
  }
  const ee = ["x", "y", "borderWidth", "radius", "tension"], ie = ["color", "borderColor", "backgroundColor"];
  const se = /* @__PURE__ */ new Map();
  function ne(t2, e2, i2) {
    return function(t3, e3) {
      e3 = e3 || {};
      const i3 = t3 + JSON.stringify(e3);
      let s2 = se.get(i3);
      return s2 || (s2 = new Intl.NumberFormat(t3, e3), se.set(i3, s2)), s2;
    }(e2, i2).format(t2);
  }
  const oe = { values: (t2) => n(t2) ? t2 : "" + t2, numeric(t2, e2, i2) {
    if (0 === t2)
      return "0";
    const s2 = this.chart.options.locale;
    let n2, o2 = t2;
    if (i2.length > 1) {
      const e3 = Math.max(Math.abs(i2[0].value), Math.abs(i2[i2.length - 1].value));
      (e3 < 1e-4 || e3 > 1e15) && (n2 = "scientific"), o2 = function(t3, e4) {
        let i3 = e4.length > 3 ? e4[2].value - e4[1].value : e4[1].value - e4[0].value;
        Math.abs(i3) >= 1 && t3 !== Math.floor(t3) && (i3 = t3 - Math.floor(t3));
        return i3;
      }(t2, i2);
    }
    const a2 = z(Math.abs(o2)), r2 = Math.max(Math.min(-1 * Math.floor(a2), 20), 0), l2 = { notation: n2, minimumFractionDigits: r2, maximumFractionDigits: r2 };
    return Object.assign(l2, this.options.ticks.format), ne(t2, s2, l2);
  }, logarithmic(t2, e2, i2) {
    if (0 === t2)
      return "0";
    const s2 = i2[e2].significand || t2 / Math.pow(10, Math.floor(z(t2)));
    return [1, 2, 3, 5, 10, 15].includes(s2) || e2 > 0.8 * i2.length ? oe.numeric.call(this, t2, e2, i2) : "";
  } };
  var ae = { formatters: oe };
  const re = /* @__PURE__ */ Object.create(null), le = /* @__PURE__ */ Object.create(null);
  function he(t2, e2) {
    if (!e2)
      return t2;
    const i2 = e2.split(".");
    for (let e3 = 0, s2 = i2.length; e3 < s2; ++e3) {
      const s3 = i2[e3];
      t2 = t2[s3] || (t2[s3] = /* @__PURE__ */ Object.create(null));
    }
    return t2;
  }
  function ce(t2, e2, i2) {
    return "string" == typeof e2 ? b(he(t2, e2), i2) : b(he(t2, ""), e2);
  }
  class de {
    constructor(t2, e2) {
      this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (t3) => t3.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = { family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", size: 12, style: "normal", lineHeight: 1.2, weight: null }, this.hover = {}, this.hoverBackgroundColor = (t3, e3) => te(e3.backgroundColor), this.hoverBorderColor = (t3, e3) => te(e3.borderColor), this.hoverColor = (t3, e3) => te(e3.color), this.indexAxis = "x", this.interaction = { mode: "nearest", intersect: true, includeInvisible: false }, this.maintainAspectRatio = true, this.onHover = null, this.onClick = null, this.parsing = true, this.plugins = {}, this.responsive = true, this.scale = void 0, this.scales = {}, this.showLine = true, this.drawActiveElementsOnTop = true, this.describe(t2), this.apply(e2);
    }
    set(t2, e2) {
      return ce(this, t2, e2);
    }
    get(t2) {
      return he(this, t2);
    }
    describe(t2, e2) {
      return ce(le, t2, e2);
    }
    override(t2, e2) {
      return ce(re, t2, e2);
    }
    route(t2, e2, i2, s2) {
      const n2 = he(this, t2), a2 = he(this, i2), r2 = "_" + e2;
      Object.defineProperties(n2, { [r2]: { value: n2[e2], writable: true }, [e2]: { enumerable: true, get() {
        const t3 = this[r2], e3 = a2[s2];
        return o(t3) ? Object.assign({}, e3, t3) : l(t3, e3);
      }, set(t3) {
        this[r2] = t3;
      } } });
    }
    apply(t2) {
      t2.forEach((t3) => t3(this));
    }
  }
  var ue = new de({ _scriptable: (t2) => !t2.startsWith("on"), _indexable: (t2) => "events" !== t2, hover: { _fallback: "interaction" }, interaction: { _scriptable: false, _indexable: false } }, [function(t2) {
    t2.set("animation", { delay: void 0, duration: 1e3, easing: "easeOutQuart", fn: void 0, from: void 0, loop: void 0, to: void 0, type: void 0 }), t2.describe("animation", { _fallback: false, _indexable: false, _scriptable: (t3) => "onProgress" !== t3 && "onComplete" !== t3 && "fn" !== t3 }), t2.set("animations", { colors: { type: "color", properties: ie }, numbers: { type: "number", properties: ee } }), t2.describe("animations", { _fallback: "animation" }), t2.set("transitions", { active: { animation: { duration: 400 } }, resize: { animation: { duration: 0 } }, show: { animations: { colors: { from: "transparent" }, visible: { type: "boolean", duration: 0 } } }, hide: { animations: { colors: { to: "transparent" }, visible: { type: "boolean", easing: "linear", fn: (t3) => 0 | t3 } } } });
  }, function(t2) {
    t2.set("layout", { autoPadding: true, padding: { top: 0, right: 0, bottom: 0, left: 0 } });
  }, function(t2) {
    t2.set("scale", { display: true, offset: false, reverse: false, beginAtZero: false, bounds: "ticks", grace: 0, grid: { display: true, lineWidth: 1, drawOnChartArea: true, drawTicks: true, tickLength: 8, tickWidth: (t3, e2) => e2.lineWidth, tickColor: (t3, e2) => e2.color, offset: false }, border: { display: true, dash: [], dashOffset: 0, width: 1 }, title: { display: false, text: "", padding: { top: 4, bottom: 4 } }, ticks: { minRotation: 0, maxRotation: 50, mirror: false, textStrokeWidth: 0, textStrokeColor: "", padding: 3, display: true, autoSkip: true, autoSkipPadding: 3, labelOffset: 0, callback: ae.formatters.values, minor: {}, major: {}, align: "center", crossAlign: "near", showLabelBackdrop: false, backdropColor: "rgba(255, 255, 255, 0.75)", backdropPadding: 2 } }), t2.route("scale.ticks", "color", "", "color"), t2.route("scale.grid", "color", "", "borderColor"), t2.route("scale.border", "color", "", "borderColor"), t2.route("scale.title", "color", "", "color"), t2.describe("scale", { _fallback: false, _scriptable: (t3) => !t3.startsWith("before") && !t3.startsWith("after") && "callback" !== t3 && "parser" !== t3, _indexable: (t3) => "borderDash" !== t3 && "tickBorderDash" !== t3 && "dash" !== t3 }), t2.describe("scales", { _fallback: "scale" }), t2.describe("scale.ticks", { _scriptable: (t3) => "backdropPadding" !== t3 && "callback" !== t3, _indexable: (t3) => "backdropPadding" !== t3 });
  }]);
  function fe() {
    return "undefined" != typeof window && "undefined" != typeof document;
  }
  function ge(t2) {
    let e2 = t2.parentNode;
    return e2 && "[object ShadowRoot]" === e2.toString() && (e2 = e2.host), e2;
  }
  function pe(t2, e2, i2) {
    let s2;
    return "string" == typeof t2 ? (s2 = parseInt(t2, 10), -1 !== t2.indexOf("%") && (s2 = s2 / 100 * e2.parentNode[i2])) : s2 = t2, s2;
  }
  const me = (t2) => t2.ownerDocument.defaultView.getComputedStyle(t2, null);
  function be(t2, e2) {
    return me(t2).getPropertyValue(e2);
  }
  const xe = ["top", "right", "bottom", "left"];
  function _e(t2, e2, i2) {
    const s2 = {};
    i2 = i2 ? "-" + i2 : "";
    for (let n2 = 0; n2 < 4; n2++) {
      const o2 = xe[n2];
      s2[o2] = parseFloat(t2[e2 + "-" + o2 + i2]) || 0;
    }
    return s2.width = s2.left + s2.right, s2.height = s2.top + s2.bottom, s2;
  }
  function ye(t2, e2) {
    if ("native" in t2)
      return t2;
    const { canvas: i2, currentDevicePixelRatio: s2 } = e2, n2 = me(i2), o2 = "border-box" === n2.boxSizing, a2 = _e(n2, "padding"), r2 = _e(n2, "border", "width"), { x: l2, y: h2, box: c2 } = function(t3, e3) {
      const i3 = t3.touches, s3 = i3 && i3.length ? i3[0] : t3, { offsetX: n3, offsetY: o3 } = s3;
      let a3, r3, l3 = false;
      if (((t4, e4, i4) => (t4 > 0 || e4 > 0) && (!i4 || !i4.shadowRoot))(n3, o3, t3.target))
        a3 = n3, r3 = o3;
      else {
        const t4 = e3.getBoundingClientRect();
        a3 = s3.clientX - t4.left, r3 = s3.clientY - t4.top, l3 = true;
      }
      return { x: a3, y: r3, box: l3 };
    }(t2, i2), d2 = a2.left + (c2 && r2.left), u2 = a2.top + (c2 && r2.top);
    let { width: f2, height: g2 } = e2;
    return o2 && (f2 -= a2.width + r2.width, g2 -= a2.height + r2.height), { x: Math.round((l2 - d2) / f2 * i2.width / s2), y: Math.round((h2 - u2) / g2 * i2.height / s2) };
  }
  const ve = (t2) => Math.round(10 * t2) / 10;
  function Me(t2, e2, i2, s2) {
    const n2 = me(t2), o2 = _e(n2, "margin"), a2 = pe(n2.maxWidth, t2, "clientWidth") || T, r2 = pe(n2.maxHeight, t2, "clientHeight") || T, l2 = function(t3, e3, i3) {
      let s3, n3;
      if (void 0 === e3 || void 0 === i3) {
        const o3 = ge(t3);
        if (o3) {
          const t4 = o3.getBoundingClientRect(), a3 = me(o3), r3 = _e(a3, "border", "width"), l3 = _e(a3, "padding");
          e3 = t4.width - l3.width - r3.width, i3 = t4.height - l3.height - r3.height, s3 = pe(a3.maxWidth, o3, "clientWidth"), n3 = pe(a3.maxHeight, o3, "clientHeight");
        } else
          e3 = t3.clientWidth, i3 = t3.clientHeight;
      }
      return { width: e3, height: i3, maxWidth: s3 || T, maxHeight: n3 || T };
    }(t2, e2, i2);
    let { width: h2, height: c2 } = l2;
    if ("content-box" === n2.boxSizing) {
      const t3 = _e(n2, "border", "width"), e3 = _e(n2, "padding");
      h2 -= e3.width + t3.width, c2 -= e3.height + t3.height;
    }
    h2 = Math.max(0, h2 - o2.width), c2 = Math.max(0, s2 ? h2 / s2 : c2 - o2.height), h2 = ve(Math.min(h2, a2, l2.maxWidth)), c2 = ve(Math.min(c2, r2, l2.maxHeight)), h2 && !c2 && (c2 = ve(h2 / 2));
    return (void 0 !== e2 || void 0 !== i2) && s2 && l2.height && c2 > l2.height && (c2 = l2.height, h2 = ve(Math.floor(c2 * s2))), { width: h2, height: c2 };
  }
  function we(t2, e2, i2) {
    const s2 = e2 || 1, n2 = Math.floor(t2.height * s2), o2 = Math.floor(t2.width * s2);
    t2.height = Math.floor(t2.height), t2.width = Math.floor(t2.width);
    const a2 = t2.canvas;
    return a2.style && (i2 || !a2.style.height && !a2.style.width) && (a2.style.height = `${t2.height}px`, a2.style.width = `${t2.width}px`), (t2.currentDevicePixelRatio !== s2 || a2.height !== n2 || a2.width !== o2) && (t2.currentDevicePixelRatio = s2, a2.height = n2, a2.width = o2, t2.ctx.setTransform(s2, 0, 0, s2, 0, 0), true);
  }
  const ke = function() {
    let t2 = false;
    try {
      const e2 = { get passive() {
        return t2 = true, false;
      } };
      window.addEventListener("test", null, e2), window.removeEventListener("test", null, e2);
    } catch (t3) {
    }
    return t2;
  }();
  function Se(t2, e2) {
    const i2 = be(t2, e2), s2 = i2 && i2.match(/^(\d+)(\.\d+)?px$/);
    return s2 ? +s2[1] : void 0;
  }
  function Pe(t2) {
    return !t2 || s(t2.size) || s(t2.family) ? null : (t2.style ? t2.style + " " : "") + (t2.weight ? t2.weight + " " : "") + t2.size + "px " + t2.family;
  }
  function De(t2, e2, i2, s2, n2) {
    let o2 = e2[n2];
    return o2 || (o2 = e2[n2] = t2.measureText(n2).width, i2.push(n2)), o2 > s2 && (s2 = o2), s2;
  }
  function Ce(t2, e2, i2, s2) {
    let o2 = (s2 = s2 || {}).data = s2.data || {}, a2 = s2.garbageCollect = s2.garbageCollect || [];
    s2.font !== e2 && (o2 = s2.data = {}, a2 = s2.garbageCollect = [], s2.font = e2), t2.save(), t2.font = e2;
    let r2 = 0;
    const l2 = i2.length;
    let h2, c2, d2, u2, f2;
    for (h2 = 0; h2 < l2; h2++)
      if (u2 = i2[h2], null != u2 && true !== n(u2))
        r2 = De(t2, o2, a2, r2, u2);
      else if (n(u2))
        for (c2 = 0, d2 = u2.length; c2 < d2; c2++)
          f2 = u2[c2], null == f2 || n(f2) || (r2 = De(t2, o2, a2, r2, f2));
    t2.restore();
    const g2 = a2.length / 2;
    if (g2 > i2.length) {
      for (h2 = 0; h2 < g2; h2++)
        delete o2[a2[h2]];
      a2.splice(0, g2);
    }
    return r2;
  }
  function Oe(t2, e2, i2) {
    const s2 = t2.currentDevicePixelRatio, n2 = 0 !== i2 ? Math.max(i2 / 2, 0.5) : 0;
    return Math.round((e2 - n2) * s2) / s2 + n2;
  }
  function Ae(t2, e2) {
    (e2 = e2 || t2.getContext("2d")).save(), e2.resetTransform(), e2.clearRect(0, 0, t2.width, t2.height), e2.restore();
  }
  function Te(t2, e2, i2, s2) {
    Le(t2, e2, i2, s2, null);
  }
  function Le(t2, e2, i2, s2, n2) {
    let o2, a2, r2, l2, h2, c2, d2, u2;
    const f2 = e2.pointStyle, g2 = e2.rotation, p2 = e2.radius;
    let m2 = (g2 || 0) * L;
    if (f2 && "object" == typeof f2 && (o2 = f2.toString(), "[object HTMLImageElement]" === o2 || "[object HTMLCanvasElement]" === o2))
      return t2.save(), t2.translate(i2, s2), t2.rotate(m2), t2.drawImage(f2, -f2.width / 2, -f2.height / 2, f2.width, f2.height), void t2.restore();
    if (!(isNaN(p2) || p2 <= 0)) {
      switch (t2.beginPath(), f2) {
        default:
          n2 ? t2.ellipse(i2, s2, n2 / 2, p2, 0, 0, O) : t2.arc(i2, s2, p2, 0, O), t2.closePath();
          break;
        case "triangle":
          c2 = n2 ? n2 / 2 : p2, t2.moveTo(i2 + Math.sin(m2) * c2, s2 - Math.cos(m2) * p2), m2 += I, t2.lineTo(i2 + Math.sin(m2) * c2, s2 - Math.cos(m2) * p2), m2 += I, t2.lineTo(i2 + Math.sin(m2) * c2, s2 - Math.cos(m2) * p2), t2.closePath();
          break;
        case "rectRounded":
          h2 = 0.516 * p2, l2 = p2 - h2, a2 = Math.cos(m2 + R) * l2, d2 = Math.cos(m2 + R) * (n2 ? n2 / 2 - h2 : l2), r2 = Math.sin(m2 + R) * l2, u2 = Math.sin(m2 + R) * (n2 ? n2 / 2 - h2 : l2), t2.arc(i2 - d2, s2 - r2, h2, m2 - C, m2 - E), t2.arc(i2 + u2, s2 - a2, h2, m2 - E, m2), t2.arc(i2 + d2, s2 + r2, h2, m2, m2 + E), t2.arc(i2 - u2, s2 + a2, h2, m2 + E, m2 + C), t2.closePath();
          break;
        case "rect":
          if (!g2) {
            l2 = Math.SQRT1_2 * p2, c2 = n2 ? n2 / 2 : l2, t2.rect(i2 - c2, s2 - l2, 2 * c2, 2 * l2);
            break;
          }
          m2 += R;
        case "rectRot":
          d2 = Math.cos(m2) * (n2 ? n2 / 2 : p2), a2 = Math.cos(m2) * p2, r2 = Math.sin(m2) * p2, u2 = Math.sin(m2) * (n2 ? n2 / 2 : p2), t2.moveTo(i2 - d2, s2 - r2), t2.lineTo(i2 + u2, s2 - a2), t2.lineTo(i2 + d2, s2 + r2), t2.lineTo(i2 - u2, s2 + a2), t2.closePath();
          break;
        case "crossRot":
          m2 += R;
        case "cross":
          d2 = Math.cos(m2) * (n2 ? n2 / 2 : p2), a2 = Math.cos(m2) * p2, r2 = Math.sin(m2) * p2, u2 = Math.sin(m2) * (n2 ? n2 / 2 : p2), t2.moveTo(i2 - d2, s2 - r2), t2.lineTo(i2 + d2, s2 + r2), t2.moveTo(i2 + u2, s2 - a2), t2.lineTo(i2 - u2, s2 + a2);
          break;
        case "star":
          d2 = Math.cos(m2) * (n2 ? n2 / 2 : p2), a2 = Math.cos(m2) * p2, r2 = Math.sin(m2) * p2, u2 = Math.sin(m2) * (n2 ? n2 / 2 : p2), t2.moveTo(i2 - d2, s2 - r2), t2.lineTo(i2 + d2, s2 + r2), t2.moveTo(i2 + u2, s2 - a2), t2.lineTo(i2 - u2, s2 + a2), m2 += R, d2 = Math.cos(m2) * (n2 ? n2 / 2 : p2), a2 = Math.cos(m2) * p2, r2 = Math.sin(m2) * p2, u2 = Math.sin(m2) * (n2 ? n2 / 2 : p2), t2.moveTo(i2 - d2, s2 - r2), t2.lineTo(i2 + d2, s2 + r2), t2.moveTo(i2 + u2, s2 - a2), t2.lineTo(i2 - u2, s2 + a2);
          break;
        case "line":
          a2 = n2 ? n2 / 2 : Math.cos(m2) * p2, r2 = Math.sin(m2) * p2, t2.moveTo(i2 - a2, s2 - r2), t2.lineTo(i2 + a2, s2 + r2);
          break;
        case "dash":
          t2.moveTo(i2, s2), t2.lineTo(i2 + Math.cos(m2) * (n2 ? n2 / 2 : p2), s2 + Math.sin(m2) * p2);
          break;
        case false:
          t2.closePath();
      }
      t2.fill(), e2.borderWidth > 0 && t2.stroke();
    }
  }
  function Ee(t2, e2, i2) {
    return i2 = i2 || 0.5, !e2 || t2 && t2.x > e2.left - i2 && t2.x < e2.right + i2 && t2.y > e2.top - i2 && t2.y < e2.bottom + i2;
  }
  function Re(t2, e2) {
    t2.save(), t2.beginPath(), t2.rect(e2.left, e2.top, e2.right - e2.left, e2.bottom - e2.top), t2.clip();
  }
  function Ie(t2) {
    t2.restore();
  }
  function ze(t2, e2, i2, s2, n2) {
    if (!e2)
      return t2.lineTo(i2.x, i2.y);
    if ("middle" === n2) {
      const s3 = (e2.x + i2.x) / 2;
      t2.lineTo(s3, e2.y), t2.lineTo(s3, i2.y);
    } else
      "after" === n2 != !!s2 ? t2.lineTo(e2.x, i2.y) : t2.lineTo(i2.x, e2.y);
    t2.lineTo(i2.x, i2.y);
  }
  function Fe(t2, e2, i2, s2) {
    if (!e2)
      return t2.lineTo(i2.x, i2.y);
    t2.bezierCurveTo(s2 ? e2.cp1x : e2.cp2x, s2 ? e2.cp1y : e2.cp2y, s2 ? i2.cp2x : i2.cp1x, s2 ? i2.cp2y : i2.cp1y, i2.x, i2.y);
  }
  function Ve(t2, e2, i2, o2, a2, r2 = {}) {
    const l2 = n(e2) ? e2 : [e2], h2 = r2.strokeWidth > 0 && "" !== r2.strokeColor;
    let c2, d2;
    for (t2.save(), t2.font = a2.string, function(t3, e3) {
      e3.translation && t3.translate(e3.translation[0], e3.translation[1]);
      s(e3.rotation) || t3.rotate(e3.rotation);
      e3.color && (t3.fillStyle = e3.color);
      e3.textAlign && (t3.textAlign = e3.textAlign);
      e3.textBaseline && (t3.textBaseline = e3.textBaseline);
    }(t2, r2), c2 = 0; c2 < l2.length; ++c2)
      d2 = l2[c2], r2.backdrop && Ne(t2, r2.backdrop), h2 && (r2.strokeColor && (t2.strokeStyle = r2.strokeColor), s(r2.strokeWidth) || (t2.lineWidth = r2.strokeWidth), t2.strokeText(d2, i2, o2, r2.maxWidth)), t2.fillText(d2, i2, o2, r2.maxWidth), Be(t2, i2, o2, d2, r2), o2 += a2.lineHeight;
    t2.restore();
  }
  function Be(t2, e2, i2, s2, n2) {
    if (n2.strikethrough || n2.underline) {
      const o2 = t2.measureText(s2), a2 = e2 - o2.actualBoundingBoxLeft, r2 = e2 + o2.actualBoundingBoxRight, l2 = i2 - o2.actualBoundingBoxAscent, h2 = i2 + o2.actualBoundingBoxDescent, c2 = n2.strikethrough ? (l2 + h2) / 2 : h2;
      t2.strokeStyle = t2.fillStyle, t2.beginPath(), t2.lineWidth = n2.decorationWidth || 2, t2.moveTo(a2, c2), t2.lineTo(r2, c2), t2.stroke();
    }
  }
  function Ne(t2, e2) {
    const i2 = t2.fillStyle;
    t2.fillStyle = e2.color, t2.fillRect(e2.left, e2.top, e2.width, e2.height), t2.fillStyle = i2;
  }
  function We(t2, e2) {
    const { x: i2, y: s2, w: n2, h: o2, radius: a2 } = e2;
    t2.arc(i2 + a2.topLeft, s2 + a2.topLeft, a2.topLeft, -E, C, true), t2.lineTo(i2, s2 + o2 - a2.bottomLeft), t2.arc(i2 + a2.bottomLeft, s2 + o2 - a2.bottomLeft, a2.bottomLeft, C, E, true), t2.lineTo(i2 + n2 - a2.bottomRight, s2 + o2), t2.arc(i2 + n2 - a2.bottomRight, s2 + o2 - a2.bottomRight, a2.bottomRight, E, 0, true), t2.lineTo(i2 + n2, s2 + a2.topRight), t2.arc(i2 + n2 - a2.topRight, s2 + a2.topRight, a2.topRight, 0, -E, true), t2.lineTo(i2 + a2.topLeft, s2);
  }
  function He(t2, e2 = [""], i2 = t2, s2, n2 = () => t2[0]) {
    k(s2) || (s2 = Qe("_fallback", t2));
    const o2 = { [Symbol.toStringTag]: "Object", _cacheable: true, _scopes: t2, _rootScopes: i2, _fallback: s2, _getTarget: n2, override: (n3) => He([n3, ...t2], e2, i2, s2) };
    return new Proxy(o2, { deleteProperty: (e3, i3) => (delete e3[i3], delete e3._keys, delete t2[0][i3], true), get: (i3, s3) => Xe(i3, s3, () => function(t3, e3, i4, s4) {
      let n3;
      for (const o3 of e3)
        if (n3 = Qe(Ye(o3, t3), i4), k(n3))
          return Ue(t3, n3) ? Ze(i4, s4, t3, n3) : n3;
    }(s3, e2, t2, i3)), getOwnPropertyDescriptor: (t3, e3) => Reflect.getOwnPropertyDescriptor(t3._scopes[0], e3), getPrototypeOf: () => Reflect.getPrototypeOf(t2[0]), has: (t3, e3) => ti(t3).includes(e3), ownKeys: (t3) => ti(t3), set(t3, e3, i3) {
      const s3 = t3._storage || (t3._storage = n2());
      return t3[e3] = s3[e3] = i3, delete t3._keys, true;
    } });
  }
  function je(t2, e2, i2, s2) {
    const a2 = { _cacheable: false, _proxy: t2, _context: e2, _subProxy: i2, _stack: /* @__PURE__ */ new Set(), _descriptors: $e(t2, s2), setContext: (e3) => je(t2, e3, i2, s2), override: (n2) => je(t2.override(n2), e2, i2, s2) };
    return new Proxy(a2, { deleteProperty: (e3, i3) => (delete e3[i3], delete t2[i3], true), get: (t3, e3, i3) => Xe(t3, e3, () => function(t4, e4, i4) {
      const { _proxy: s3, _context: a3, _subProxy: r2, _descriptors: l2 } = t4;
      let h2 = s3[e4];
      S(h2) && l2.isScriptable(e4) && (h2 = function(t5, e5, i5, s4) {
        const { _proxy: n2, _context: o2, _subProxy: a4, _stack: r3 } = i5;
        if (r3.has(t5))
          throw new Error("Recursion detected: " + Array.from(r3).join("->") + "->" + t5);
        r3.add(t5), e5 = e5(o2, a4 || s4), r3.delete(t5), Ue(t5, e5) && (e5 = Ze(n2._scopes, n2, t5, e5));
        return e5;
      }(e4, h2, t4, i4));
      n(h2) && h2.length && (h2 = function(t5, e5, i5, s4) {
        const { _proxy: n2, _context: a4, _subProxy: r3, _descriptors: l3 } = i5;
        if (k(a4.index) && s4(t5))
          e5 = e5[a4.index % e5.length];
        else if (o(e5[0])) {
          const i6 = e5, s5 = n2._scopes.filter((t6) => t6 !== i6);
          e5 = [];
          for (const o2 of i6) {
            const i7 = Ze(s5, n2, t5, o2);
            e5.push(je(i7, a4, r3 && r3[t5], l3));
          }
        }
        return e5;
      }(e4, h2, t4, l2.isIndexable));
      Ue(e4, h2) && (h2 = je(h2, a3, r2 && r2[e4], l2));
      return h2;
    }(t3, e3, i3)), getOwnPropertyDescriptor: (e3, i3) => e3._descriptors.allKeys ? Reflect.has(t2, i3) ? { enumerable: true, configurable: true } : void 0 : Reflect.getOwnPropertyDescriptor(t2, i3), getPrototypeOf: () => Reflect.getPrototypeOf(t2), has: (e3, i3) => Reflect.has(t2, i3), ownKeys: () => Reflect.ownKeys(t2), set: (e3, i3, s3) => (t2[i3] = s3, delete e3[i3], true) });
  }
  function $e(t2, e2 = { scriptable: true, indexable: true }) {
    const { _scriptable: i2 = e2.scriptable, _indexable: s2 = e2.indexable, _allKeys: n2 = e2.allKeys } = t2;
    return { allKeys: n2, scriptable: i2, indexable: s2, isScriptable: S(i2) ? i2 : () => i2, isIndexable: S(s2) ? s2 : () => s2 };
  }
  const Ye = (t2, e2) => t2 ? t2 + w(e2) : e2, Ue = (t2, e2) => o(e2) && "adapters" !== t2 && (null === Object.getPrototypeOf(e2) || e2.constructor === Object);
  function Xe(t2, e2, i2) {
    if (Object.prototype.hasOwnProperty.call(t2, e2))
      return t2[e2];
    const s2 = i2();
    return t2[e2] = s2, s2;
  }
  function qe(t2, e2, i2) {
    return S(t2) ? t2(e2, i2) : t2;
  }
  const Ke = (t2, e2) => true === t2 ? e2 : "string" == typeof t2 ? M(e2, t2) : void 0;
  function Ge(t2, e2, i2, s2, n2) {
    for (const o2 of e2) {
      const e3 = Ke(i2, o2);
      if (e3) {
        t2.add(e3);
        const o3 = qe(e3._fallback, i2, n2);
        if (k(o3) && o3 !== i2 && o3 !== s2)
          return o3;
      } else if (false === e3 && k(s2) && i2 !== s2)
        return null;
    }
    return false;
  }
  function Ze(t2, e2, i2, s2) {
    const a2 = e2._rootScopes, r2 = qe(e2._fallback, i2, s2), l2 = [...t2, ...a2], h2 = /* @__PURE__ */ new Set();
    h2.add(s2);
    let c2 = Je(h2, l2, i2, r2 || i2, s2);
    return null !== c2 && ((!k(r2) || r2 === i2 || (c2 = Je(h2, l2, r2, c2, s2), null !== c2)) && He(Array.from(h2), [""], a2, r2, () => function(t3, e3, i3) {
      const s3 = t3._getTarget();
      e3 in s3 || (s3[e3] = {});
      const a3 = s3[e3];
      if (n(a3) && o(i3))
        return i3;
      return a3 || {};
    }(e2, i2, s2)));
  }
  function Je(t2, e2, i2, s2, n2) {
    for (; i2; )
      i2 = Ge(t2, e2, i2, s2, n2);
    return i2;
  }
  function Qe(t2, e2) {
    for (const i2 of e2) {
      if (!i2)
        continue;
      const e3 = i2[t2];
      if (k(e3))
        return e3;
    }
  }
  function ti(t2) {
    let e2 = t2._keys;
    return e2 || (e2 = t2._keys = function(t3) {
      const e3 = /* @__PURE__ */ new Set();
      for (const i2 of t3)
        for (const t4 of Object.keys(i2).filter((t5) => !t5.startsWith("_")))
          e3.add(t4);
      return Array.from(e3);
    }(t2._scopes)), e2;
  }
  function ei(t2, e2, i2, s2) {
    const { iScale: n2 } = t2, { key: o2 = "r" } = this._parsing, a2 = new Array(s2);
    let r2, l2, h2, c2;
    for (r2 = 0, l2 = s2; r2 < l2; ++r2)
      h2 = r2 + i2, c2 = e2[h2], a2[r2] = { r: n2.parse(M(c2, o2), h2) };
    return a2;
  }
  const ii = Number.EPSILON || 1e-14, si = (t2, e2) => e2 < t2.length && !t2[e2].skip && t2[e2], ni = (t2) => "x" === t2 ? "y" : "x";
  function oi(t2, e2, i2, s2) {
    const n2 = t2.skip ? e2 : t2, o2 = e2, a2 = i2.skip ? e2 : i2, r2 = q(o2, n2), l2 = q(a2, o2);
    let h2 = r2 / (r2 + l2), c2 = l2 / (r2 + l2);
    h2 = isNaN(h2) ? 0 : h2, c2 = isNaN(c2) ? 0 : c2;
    const d2 = s2 * h2, u2 = s2 * c2;
    return { previous: { x: o2.x - d2 * (a2.x - n2.x), y: o2.y - d2 * (a2.y - n2.y) }, next: { x: o2.x + u2 * (a2.x - n2.x), y: o2.y + u2 * (a2.y - n2.y) } };
  }
  function ai(t2, e2 = "x") {
    const i2 = ni(e2), s2 = t2.length, n2 = Array(s2).fill(0), o2 = Array(s2);
    let a2, r2, l2, h2 = si(t2, 0);
    for (a2 = 0; a2 < s2; ++a2)
      if (r2 = l2, l2 = h2, h2 = si(t2, a2 + 1), l2) {
        if (h2) {
          const t3 = h2[e2] - l2[e2];
          n2[a2] = 0 !== t3 ? (h2[i2] - l2[i2]) / t3 : 0;
        }
        o2[a2] = r2 ? h2 ? F(n2[a2 - 1]) !== F(n2[a2]) ? 0 : (n2[a2 - 1] + n2[a2]) / 2 : n2[a2 - 1] : n2[a2];
      }
    !function(t3, e3, i3) {
      const s3 = t3.length;
      let n3, o3, a3, r3, l3, h3 = si(t3, 0);
      for (let c2 = 0; c2 < s3 - 1; ++c2)
        l3 = h3, h3 = si(t3, c2 + 1), l3 && h3 && (V(e3[c2], 0, ii) ? i3[c2] = i3[c2 + 1] = 0 : (n3 = i3[c2] / e3[c2], o3 = i3[c2 + 1] / e3[c2], r3 = Math.pow(n3, 2) + Math.pow(o3, 2), r3 <= 9 || (a3 = 3 / Math.sqrt(r3), i3[c2] = n3 * a3 * e3[c2], i3[c2 + 1] = o3 * a3 * e3[c2])));
    }(t2, n2, o2), function(t3, e3, i3 = "x") {
      const s3 = ni(i3), n3 = t3.length;
      let o3, a3, r3, l3 = si(t3, 0);
      for (let h3 = 0; h3 < n3; ++h3) {
        if (a3 = r3, r3 = l3, l3 = si(t3, h3 + 1), !r3)
          continue;
        const n4 = r3[i3], c2 = r3[s3];
        a3 && (o3 = (n4 - a3[i3]) / 3, r3[`cp1${i3}`] = n4 - o3, r3[`cp1${s3}`] = c2 - o3 * e3[h3]), l3 && (o3 = (l3[i3] - n4) / 3, r3[`cp2${i3}`] = n4 + o3, r3[`cp2${s3}`] = c2 + o3 * e3[h3]);
      }
    }(t2, o2, e2);
  }
  function ri(t2, e2, i2) {
    return Math.max(Math.min(t2, i2), e2);
  }
  function li(t2, e2, i2, s2, n2) {
    let o2, a2, r2, l2;
    if (e2.spanGaps && (t2 = t2.filter((t3) => !t3.skip)), "monotone" === e2.cubicInterpolationMode)
      ai(t2, n2);
    else {
      let i3 = s2 ? t2[t2.length - 1] : t2[0];
      for (o2 = 0, a2 = t2.length; o2 < a2; ++o2)
        r2 = t2[o2], l2 = oi(i3, r2, t2[Math.min(o2 + 1, a2 - (s2 ? 0 : 1)) % a2], e2.tension), r2.cp1x = l2.previous.x, r2.cp1y = l2.previous.y, r2.cp2x = l2.next.x, r2.cp2y = l2.next.y, i3 = r2;
    }
    e2.capBezierPoints && function(t3, e3) {
      let i3, s3, n3, o3, a3, r3 = Ee(t3[0], e3);
      for (i3 = 0, s3 = t3.length; i3 < s3; ++i3)
        a3 = o3, o3 = r3, r3 = i3 < s3 - 1 && Ee(t3[i3 + 1], e3), o3 && (n3 = t3[i3], a3 && (n3.cp1x = ri(n3.cp1x, e3.left, e3.right), n3.cp1y = ri(n3.cp1y, e3.top, e3.bottom)), r3 && (n3.cp2x = ri(n3.cp2x, e3.left, e3.right), n3.cp2y = ri(n3.cp2y, e3.top, e3.bottom)));
    }(t2, i2);
  }
  const hi = (t2) => 0 === t2 || 1 === t2, ci = (t2, e2, i2) => -Math.pow(2, 10 * (t2 -= 1)) * Math.sin((t2 - e2) * O / i2), di = (t2, e2, i2) => Math.pow(2, -10 * t2) * Math.sin((t2 - e2) * O / i2) + 1, ui = { linear: (t2) => t2, easeInQuad: (t2) => t2 * t2, easeOutQuad: (t2) => -t2 * (t2 - 2), easeInOutQuad: (t2) => (t2 /= 0.5) < 1 ? 0.5 * t2 * t2 : -0.5 * (--t2 * (t2 - 2) - 1), easeInCubic: (t2) => t2 * t2 * t2, easeOutCubic: (t2) => (t2 -= 1) * t2 * t2 + 1, easeInOutCubic: (t2) => (t2 /= 0.5) < 1 ? 0.5 * t2 * t2 * t2 : 0.5 * ((t2 -= 2) * t2 * t2 + 2), easeInQuart: (t2) => t2 * t2 * t2 * t2, easeOutQuart: (t2) => -((t2 -= 1) * t2 * t2 * t2 - 1), easeInOutQuart: (t2) => (t2 /= 0.5) < 1 ? 0.5 * t2 * t2 * t2 * t2 : -0.5 * ((t2 -= 2) * t2 * t2 * t2 - 2), easeInQuint: (t2) => t2 * t2 * t2 * t2 * t2, easeOutQuint: (t2) => (t2 -= 1) * t2 * t2 * t2 * t2 + 1, easeInOutQuint: (t2) => (t2 /= 0.5) < 1 ? 0.5 * t2 * t2 * t2 * t2 * t2 : 0.5 * ((t2 -= 2) * t2 * t2 * t2 * t2 + 2), easeInSine: (t2) => 1 - Math.cos(t2 * E), easeOutSine: (t2) => Math.sin(t2 * E), easeInOutSine: (t2) => -0.5 * (Math.cos(C * t2) - 1), easeInExpo: (t2) => 0 === t2 ? 0 : Math.pow(2, 10 * (t2 - 1)), easeOutExpo: (t2) => 1 === t2 ? 1 : 1 - Math.pow(2, -10 * t2), easeInOutExpo: (t2) => hi(t2) ? t2 : t2 < 0.5 ? 0.5 * Math.pow(2, 10 * (2 * t2 - 1)) : 0.5 * (2 - Math.pow(2, -10 * (2 * t2 - 1))), easeInCirc: (t2) => t2 >= 1 ? t2 : -(Math.sqrt(1 - t2 * t2) - 1), easeOutCirc: (t2) => Math.sqrt(1 - (t2 -= 1) * t2), easeInOutCirc: (t2) => (t2 /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t2 * t2) - 1) : 0.5 * (Math.sqrt(1 - (t2 -= 2) * t2) + 1), easeInElastic: (t2) => hi(t2) ? t2 : ci(t2, 0.075, 0.3), easeOutElastic: (t2) => hi(t2) ? t2 : di(t2, 0.075, 0.3), easeInOutElastic(t2) {
    const e2 = 0.1125;
    return hi(t2) ? t2 : t2 < 0.5 ? 0.5 * ci(2 * t2, e2, 0.45) : 0.5 + 0.5 * di(2 * t2 - 1, e2, 0.45);
  }, easeInBack(t2) {
    const e2 = 1.70158;
    return t2 * t2 * ((e2 + 1) * t2 - e2);
  }, easeOutBack(t2) {
    const e2 = 1.70158;
    return (t2 -= 1) * t2 * ((e2 + 1) * t2 + e2) + 1;
  }, easeInOutBack(t2) {
    let e2 = 1.70158;
    return (t2 /= 0.5) < 1 ? t2 * t2 * ((1 + (e2 *= 1.525)) * t2 - e2) * 0.5 : 0.5 * ((t2 -= 2) * t2 * ((1 + (e2 *= 1.525)) * t2 + e2) + 2);
  }, easeInBounce: (t2) => 1 - ui.easeOutBounce(1 - t2), easeOutBounce(t2) {
    const e2 = 7.5625, i2 = 2.75;
    return t2 < 1 / i2 ? e2 * t2 * t2 : t2 < 2 / i2 ? e2 * (t2 -= 1.5 / i2) * t2 + 0.75 : t2 < 2.5 / i2 ? e2 * (t2 -= 2.25 / i2) * t2 + 0.9375 : e2 * (t2 -= 2.625 / i2) * t2 + 0.984375;
  }, easeInOutBounce: (t2) => t2 < 0.5 ? 0.5 * ui.easeInBounce(2 * t2) : 0.5 * ui.easeOutBounce(2 * t2 - 1) + 0.5 };
  function fi(t2, e2, i2, s2) {
    return { x: t2.x + i2 * (e2.x - t2.x), y: t2.y + i2 * (e2.y - t2.y) };
  }
  function gi(t2, e2, i2, s2) {
    return { x: t2.x + i2 * (e2.x - t2.x), y: "middle" === s2 ? i2 < 0.5 ? t2.y : e2.y : "after" === s2 ? i2 < 1 ? t2.y : e2.y : i2 > 0 ? e2.y : t2.y };
  }
  function pi(t2, e2, i2, s2) {
    const n2 = { x: t2.cp2x, y: t2.cp2y }, o2 = { x: e2.cp1x, y: e2.cp1y }, a2 = fi(t2, n2, i2), r2 = fi(n2, o2, i2), l2 = fi(o2, e2, i2), h2 = fi(a2, r2, i2), c2 = fi(r2, l2, i2);
    return fi(h2, c2, i2);
  }
  const mi = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, bi = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
  function xi(t2, e2) {
    const i2 = ("" + t2).match(mi);
    if (!i2 || "normal" === i2[1])
      return 1.2 * e2;
    switch (t2 = +i2[2], i2[3]) {
      case "px":
        return t2;
      case "%":
        t2 /= 100;
    }
    return e2 * t2;
  }
  function _i(t2, e2) {
    const i2 = {}, s2 = o(e2), n2 = s2 ? Object.keys(e2) : e2, a2 = o(t2) ? s2 ? (i3) => l(t2[i3], t2[e2[i3]]) : (e3) => t2[e3] : () => t2;
    for (const t3 of n2)
      i2[t3] = +a2(t3) || 0;
    return i2;
  }
  function yi(t2) {
    return _i(t2, { top: "y", right: "x", bottom: "y", left: "x" });
  }
  function vi(t2) {
    return _i(t2, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
  }
  function Mi(t2) {
    const e2 = yi(t2);
    return e2.width = e2.left + e2.right, e2.height = e2.top + e2.bottom, e2;
  }
  function wi(t2, e2) {
    t2 = t2 || {}, e2 = e2 || ue.font;
    let i2 = l(t2.size, e2.size);
    "string" == typeof i2 && (i2 = parseInt(i2, 10));
    let s2 = l(t2.style, e2.style);
    s2 && !("" + s2).match(bi) && (console.warn('Invalid font style specified: "' + s2 + '"'), s2 = void 0);
    const n2 = { family: l(t2.family, e2.family), lineHeight: xi(l(t2.lineHeight, e2.lineHeight), i2), size: i2, style: s2, weight: l(t2.weight, e2.weight), string: "" };
    return n2.string = Pe(n2), n2;
  }
  function ki(t2, e2, i2, s2) {
    let o2, a2, r2, l2 = true;
    for (o2 = 0, a2 = t2.length; o2 < a2; ++o2)
      if (r2 = t2[o2], void 0 !== r2 && (void 0 !== e2 && "function" == typeof r2 && (r2 = r2(e2), l2 = false), void 0 !== i2 && n(r2) && (r2 = r2[i2 % r2.length], l2 = false), void 0 !== r2))
        return s2 && !l2 && (s2.cacheable = false), r2;
  }
  function Si(t2, e2, i2) {
    const { min: s2, max: n2 } = t2, o2 = c(e2, (n2 - s2) / 2), a2 = (t3, e3) => i2 && 0 === t3 ? 0 : t3 + e3;
    return { min: a2(s2, -Math.abs(o2)), max: a2(n2, o2) };
  }
  function Pi(t2, e2) {
    return Object.assign(Object.create(t2), e2);
  }
  function Di(t2, e2, i2) {
    return t2 ? function(t3, e3) {
      return { x: (i3) => t3 + t3 + e3 - i3, setWidth(t4) {
        e3 = t4;
      }, textAlign: (t4) => "center" === t4 ? t4 : "right" === t4 ? "left" : "right", xPlus: (t4, e4) => t4 - e4, leftForLtr: (t4, e4) => t4 - e4 };
    }(e2, i2) : { x: (t3) => t3, setWidth(t3) {
    }, textAlign: (t3) => t3, xPlus: (t3, e3) => t3 + e3, leftForLtr: (t3, e3) => t3 };
  }
  function Ci(t2, e2) {
    let i2, s2;
    "ltr" !== e2 && "rtl" !== e2 || (i2 = t2.canvas.style, s2 = [i2.getPropertyValue("direction"), i2.getPropertyPriority("direction")], i2.setProperty("direction", e2, "important"), t2.prevTextDirection = s2);
  }
  function Oi(t2, e2) {
    void 0 !== e2 && (delete t2.prevTextDirection, t2.canvas.style.setProperty("direction", e2[0], e2[1]));
  }
  function Ai(t2) {
    return "angle" === t2 ? { between: Z, compare: K, normalize: G } : { between: tt, compare: (t3, e2) => t3 - e2, normalize: (t3) => t3 };
  }
  function Ti({ start: t2, end: e2, count: i2, loop: s2, style: n2 }) {
    return { start: t2 % i2, end: e2 % i2, loop: s2 && (e2 - t2 + 1) % i2 == 0, style: n2 };
  }
  function Li(t2, e2, i2) {
    if (!i2)
      return [t2];
    const { property: s2, start: n2, end: o2 } = i2, a2 = e2.length, { compare: r2, between: l2, normalize: h2 } = Ai(s2), { start: c2, end: d2, loop: u2, style: f2 } = function(t3, e3, i3) {
      const { property: s3, start: n3, end: o3 } = i3, { between: a3, normalize: r3 } = Ai(s3), l3 = e3.length;
      let h3, c3, { start: d3, end: u3, loop: f3 } = t3;
      if (f3) {
        for (d3 += l3, u3 += l3, h3 = 0, c3 = l3; h3 < c3 && a3(r3(e3[d3 % l3][s3]), n3, o3); ++h3)
          d3--, u3--;
        d3 %= l3, u3 %= l3;
      }
      return u3 < d3 && (u3 += l3), { start: d3, end: u3, loop: f3, style: t3.style };
    }(t2, e2, i2), g2 = [];
    let p2, m2, b2, x2 = false, _2 = null;
    const y2 = () => x2 || l2(n2, b2, p2) && 0 !== r2(n2, b2), v2 = () => !x2 || 0 === r2(o2, p2) || l2(o2, b2, p2);
    for (let t3 = c2, i3 = c2; t3 <= d2; ++t3)
      m2 = e2[t3 % a2], m2.skip || (p2 = h2(m2[s2]), p2 !== b2 && (x2 = l2(p2, n2, o2), null === _2 && y2() && (_2 = 0 === r2(p2, n2) ? t3 : i3), null !== _2 && v2() && (g2.push(Ti({ start: _2, end: t3, loop: u2, count: a2, style: f2 })), _2 = null), i3 = t3, b2 = p2));
    return null !== _2 && g2.push(Ti({ start: _2, end: d2, loop: u2, count: a2, style: f2 })), g2;
  }
  function Ei(t2, e2) {
    const i2 = [], s2 = t2.segments;
    for (let n2 = 0; n2 < s2.length; n2++) {
      const o2 = Li(s2[n2], t2.points, e2);
      o2.length && i2.push(...o2);
    }
    return i2;
  }
  function Ri(t2, e2) {
    const i2 = t2.points, s2 = t2.options.spanGaps, n2 = i2.length;
    if (!n2)
      return [];
    const o2 = !!t2._loop, { start: a2, end: r2 } = function(t3, e3, i3, s3) {
      let n3 = 0, o3 = e3 - 1;
      if (i3 && !s3)
        for (; n3 < e3 && !t3[n3].skip; )
          n3++;
      for (; n3 < e3 && t3[n3].skip; )
        n3++;
      for (n3 %= e3, i3 && (o3 += n3); o3 > n3 && t3[o3 % e3].skip; )
        o3--;
      return o3 %= e3, { start: n3, end: o3 };
    }(i2, n2, o2, s2);
    if (true === s2)
      return Ii(t2, [{ start: a2, end: r2, loop: o2 }], i2, e2);
    return Ii(t2, function(t3, e3, i3, s3) {
      const n3 = t3.length, o3 = [];
      let a3, r3 = e3, l2 = t3[e3];
      for (a3 = e3 + 1; a3 <= i3; ++a3) {
        const i4 = t3[a3 % n3];
        i4.skip || i4.stop ? l2.skip || (s3 = false, o3.push({ start: e3 % n3, end: (a3 - 1) % n3, loop: s3 }), e3 = r3 = i4.stop ? a3 : null) : (r3 = a3, l2.skip && (e3 = a3)), l2 = i4;
      }
      return null !== r3 && o3.push({ start: e3 % n3, end: r3 % n3, loop: s3 }), o3;
    }(i2, a2, r2 < a2 ? r2 + n2 : r2, !!t2._fullLoop && 0 === a2 && r2 === n2 - 1), i2, e2);
  }
  function Ii(t2, e2, i2, s2) {
    return s2 && s2.setContext && i2 ? function(t3, e3, i3, s3) {
      const n2 = t3._chart.getContext(), o2 = zi(t3.options), { _datasetIndex: a2, options: { spanGaps: r2 } } = t3, l2 = i3.length, h2 = [];
      let c2 = o2, d2 = e3[0].start, u2 = d2;
      function f2(t4, e4, s4, n3) {
        const o3 = r2 ? -1 : 1;
        if (t4 !== e4) {
          for (t4 += l2; i3[t4 % l2].skip; )
            t4 -= o3;
          for (; i3[e4 % l2].skip; )
            e4 += o3;
          t4 % l2 != e4 % l2 && (h2.push({ start: t4 % l2, end: e4 % l2, loop: s4, style: n3 }), c2 = n3, d2 = e4 % l2);
        }
      }
      for (const t4 of e3) {
        d2 = r2 ? d2 : t4.start;
        let e4, o3 = i3[d2 % l2];
        for (u2 = d2 + 1; u2 <= t4.end; u2++) {
          const r3 = i3[u2 % l2];
          e4 = zi(s3.setContext(Pi(n2, { type: "segment", p0: o3, p1: r3, p0DataIndex: (u2 - 1) % l2, p1DataIndex: u2 % l2, datasetIndex: a2 }))), Fi(e4, c2) && f2(d2, u2 - 1, t4.loop, c2), o3 = r3, c2 = e4;
        }
        d2 < u2 - 1 && f2(d2, u2 - 1, t4.loop, c2);
      }
      return h2;
    }(t2, e2, i2, s2) : e2;
  }
  function zi(t2) {
    return { backgroundColor: t2.backgroundColor, borderCapStyle: t2.borderCapStyle, borderDash: t2.borderDash, borderDashOffset: t2.borderDashOffset, borderJoinStyle: t2.borderJoinStyle, borderWidth: t2.borderWidth, borderColor: t2.borderColor };
  }
  function Fi(t2, e2) {
    return e2 && JSON.stringify(t2) !== JSON.stringify(e2);
  }
  var Vi = Object.freeze({ __proto__: null, easingEffects: ui, isPatternOrGradient: Jt, color: Qt, getHoverColor: te, noop: e, uid: i, isNullOrUndef: s, isArray: n, isObject: o, isFinite: a, finiteOrDefault: r, valueOrDefault: l, toPercentage: h, toDimension: c, callback: d, each: u, _elementsEqual: f, clone: g, _merger: m, merge: b, mergeIf: x, _mergerIf: _, _deprecated: function(t2, e2, i2, s2) {
    void 0 !== e2 && console.warn(t2 + ': "' + i2 + '" is deprecated. Please use "' + s2 + '" instead');
  }, _splitKey: v, resolveObjectKey: M, _capitalize: w, defined: k, isFunction: S, setsEqual: P, _isClickEvent: D, toFontString: Pe, _measureText: De, _longestText: Ce, _alignPixel: Oe, clearCanvas: Ae, drawPoint: Te, drawPointLegend: Le, _isPointInArea: Ee, clipArea: Re, unclipArea: Ie, _steppedLineTo: ze, _bezierCurveTo: Fe, renderText: Ve, addRoundedRectPath: We, _lookup: et, _lookupByKey: it, _rlookupByKey: st, _filterBetween: nt, listenArrayEvents: at, unlistenArrayEvents: rt, _arrayUnique: lt, _createResolver: He, _attachContext: je, _descriptors: $e, _parseObjectDataRadialScale: ei, splineCurve: oi, splineCurveMonotone: ai, _updateBezierControlPoints: li, _isDomSupported: fe, _getParentNode: ge, getStyle: be, getRelativePosition: ye, getMaximumSize: Me, retinaScale: we, supportsEventListenerOptions: ke, readUsedSize: Se, fontString: function(t2, e2, i2) {
    return e2 + " " + t2 + "px " + i2;
  }, requestAnimFrame: ht, throttled: ct, debounce: dt, _toLeftRightCenter: ut, _alignStartEnd: ft, _textX: gt, _getStartAndCountOfVisiblePoints: pt, _scaleRangesChanged: mt, _pointInLine: fi, _steppedInterpolation: gi, _bezierInterpolation: pi, formatNumber: ne, toLineHeight: xi, _readValueToProps: _i, toTRBL: yi, toTRBLCorners: vi, toPadding: Mi, toFont: wi, resolve: ki, _addGrace: Si, createContext: Pi, PI: C, TAU: O, PITAU: A, INFINITY: T, RAD_PER_DEG: L, HALF_PI: E, QUARTER_PI: R, TWO_THIRDS_PI: I, log10: z, sign: F, almostEquals: V, niceNum: B, _factorize: N, isNumber: W, almostWhole: H, _setMinAndMaxByKey: j, toRadians: $, toDegrees: Y, _decimalPlaces: U, getAngleFromPoint: X, distanceBetweenPoints: q, _angleDiff: K, _normalizeAngle: G, _angleBetween: Z, _limitValue: J, _int16Range: Q, _isBetween: tt, getRtlAdapter: Di, overrideTextDirection: Ci, restoreTextDirection: Oi, _boundSegment: Li, _boundSegments: Ei, _computeSegments: Ri });
  function Bi(t2, e2, i2, s2) {
    const { controller: n2, data: o2, _sorted: a2 } = t2, r2 = n2._cachedMeta.iScale;
    if (r2 && e2 === r2.axis && "r" !== e2 && a2 && o2.length) {
      const t3 = r2._reversePixels ? st : it;
      if (!s2)
        return t3(o2, e2, i2);
      if (n2._sharedOptions) {
        const s3 = o2[0], n3 = "function" == typeof s3.getRange && s3.getRange(e2);
        if (n3) {
          const s4 = t3(o2, e2, i2 - n3), a3 = t3(o2, e2, i2 + n3);
          return { lo: s4.lo, hi: a3.hi };
        }
      }
    }
    return { lo: 0, hi: o2.length - 1 };
  }
  function Ni(t2, e2, i2, s2, n2) {
    const o2 = t2.getSortedVisibleDatasetMetas(), a2 = i2[e2];
    for (let t3 = 0, i3 = o2.length; t3 < i3; ++t3) {
      const { index: i4, data: r2 } = o2[t3], { lo: l2, hi: h2 } = Bi(o2[t3], e2, a2, n2);
      for (let t4 = l2; t4 <= h2; ++t4) {
        const e3 = r2[t4];
        e3.skip || s2(e3, i4, t4);
      }
    }
  }
  function Wi(t2, e2, i2, s2, n2) {
    const o2 = [];
    if (!n2 && !t2.isPointInArea(e2))
      return o2;
    return Ni(t2, i2, e2, function(i3, a2, r2) {
      (n2 || Ee(i3, t2.chartArea, 0)) && i3.inRange(e2.x, e2.y, s2) && o2.push({ element: i3, datasetIndex: a2, index: r2 });
    }, true), o2;
  }
  function Hi(t2, e2, i2, s2, n2, o2) {
    let a2 = [];
    const r2 = function(t3) {
      const e3 = -1 !== t3.indexOf("x"), i3 = -1 !== t3.indexOf("y");
      return function(t4, s3) {
        const n3 = e3 ? Math.abs(t4.x - s3.x) : 0, o3 = i3 ? Math.abs(t4.y - s3.y) : 0;
        return Math.sqrt(Math.pow(n3, 2) + Math.pow(o3, 2));
      };
    }(i2);
    let l2 = Number.POSITIVE_INFINITY;
    return Ni(t2, i2, e2, function(i3, h2, c2) {
      const d2 = i3.inRange(e2.x, e2.y, n2);
      if (s2 && !d2)
        return;
      const u2 = i3.getCenterPoint(n2);
      if (!(!!o2 || t2.isPointInArea(u2)) && !d2)
        return;
      const f2 = r2(e2, u2);
      f2 < l2 ? (a2 = [{ element: i3, datasetIndex: h2, index: c2 }], l2 = f2) : f2 === l2 && a2.push({ element: i3, datasetIndex: h2, index: c2 });
    }), a2;
  }
  function ji(t2, e2, i2, s2, n2, o2) {
    return o2 || t2.isPointInArea(e2) ? "r" !== i2 || s2 ? Hi(t2, e2, i2, s2, n2, o2) : function(t3, e3, i3, s3) {
      let n3 = [];
      return Ni(t3, i3, e3, function(t4, i4, o3) {
        const { startAngle: a2, endAngle: r2 } = t4.getProps(["startAngle", "endAngle"], s3), { angle: l2 } = X(t4, { x: e3.x, y: e3.y });
        Z(l2, a2, r2) && n3.push({ element: t4, datasetIndex: i4, index: o3 });
      }), n3;
    }(t2, e2, i2, n2) : [];
  }
  function $i(t2, e2, i2, s2, n2) {
    const o2 = [], a2 = "x" === i2 ? "inXRange" : "inYRange";
    let r2 = false;
    return Ni(t2, i2, e2, (t3, s3, l2) => {
      t3[a2](e2[i2], n2) && (o2.push({ element: t3, datasetIndex: s3, index: l2 }), r2 = r2 || t3.inRange(e2.x, e2.y, n2));
    }), s2 && !r2 ? [] : o2;
  }
  var Yi = { evaluateInteractionItems: Ni, modes: { index(t2, e2, i2, s2) {
    const n2 = ye(e2, t2), o2 = i2.axis || "x", a2 = i2.includeInvisible || false, r2 = i2.intersect ? Wi(t2, n2, o2, s2, a2) : ji(t2, n2, o2, false, s2, a2), l2 = [];
    return r2.length ? (t2.getSortedVisibleDatasetMetas().forEach((t3) => {
      const e3 = r2[0].index, i3 = t3.data[e3];
      i3 && !i3.skip && l2.push({ element: i3, datasetIndex: t3.index, index: e3 });
    }), l2) : [];
  }, dataset(t2, e2, i2, s2) {
    const n2 = ye(e2, t2), o2 = i2.axis || "xy", a2 = i2.includeInvisible || false;
    let r2 = i2.intersect ? Wi(t2, n2, o2, s2, a2) : ji(t2, n2, o2, false, s2, a2);
    if (r2.length > 0) {
      const e3 = r2[0].datasetIndex, i3 = t2.getDatasetMeta(e3).data;
      r2 = [];
      for (let t3 = 0; t3 < i3.length; ++t3)
        r2.push({ element: i3[t3], datasetIndex: e3, index: t3 });
    }
    return r2;
  }, point: (t2, e2, i2, s2) => Wi(t2, ye(e2, t2), i2.axis || "xy", s2, i2.includeInvisible || false), nearest(t2, e2, i2, s2) {
    const n2 = ye(e2, t2), o2 = i2.axis || "xy", a2 = i2.includeInvisible || false;
    return ji(t2, n2, o2, i2.intersect, s2, a2);
  }, x: (t2, e2, i2, s2) => $i(t2, ye(e2, t2), "x", i2.intersect, s2), y: (t2, e2, i2, s2) => $i(t2, ye(e2, t2), "y", i2.intersect, s2) } };
  const Ui = ["left", "top", "right", "bottom"];
  function Xi(t2, e2) {
    return t2.filter((t3) => t3.pos === e2);
  }
  function qi(t2, e2) {
    return t2.filter((t3) => -1 === Ui.indexOf(t3.pos) && t3.box.axis === e2);
  }
  function Ki(t2, e2) {
    return t2.sort((t3, i2) => {
      const s2 = e2 ? i2 : t3, n2 = e2 ? t3 : i2;
      return s2.weight === n2.weight ? s2.index - n2.index : s2.weight - n2.weight;
    });
  }
  function Gi(t2, e2) {
    const i2 = function(t3) {
      const e3 = {};
      for (const i3 of t3) {
        const { stack: t4, pos: s3, stackWeight: n3 } = i3;
        if (!t4 || !Ui.includes(s3))
          continue;
        const o3 = e3[t4] || (e3[t4] = { count: 0, placed: 0, weight: 0, size: 0 });
        o3.count++, o3.weight += n3;
      }
      return e3;
    }(t2), { vBoxMaxWidth: s2, hBoxMaxHeight: n2 } = e2;
    let o2, a2, r2;
    for (o2 = 0, a2 = t2.length; o2 < a2; ++o2) {
      r2 = t2[o2];
      const { fullSize: a3 } = r2.box, l2 = i2[r2.stack], h2 = l2 && r2.stackWeight / l2.weight;
      r2.horizontal ? (r2.width = h2 ? h2 * s2 : a3 && e2.availableWidth, r2.height = n2) : (r2.width = s2, r2.height = h2 ? h2 * n2 : a3 && e2.availableHeight);
    }
    return i2;
  }
  function Zi(t2, e2, i2, s2) {
    return Math.max(t2[i2], e2[i2]) + Math.max(t2[s2], e2[s2]);
  }
  function Ji(t2, e2) {
    t2.top = Math.max(t2.top, e2.top), t2.left = Math.max(t2.left, e2.left), t2.bottom = Math.max(t2.bottom, e2.bottom), t2.right = Math.max(t2.right, e2.right);
  }
  function Qi(t2, e2, i2, s2) {
    const { pos: n2, box: a2 } = i2, r2 = t2.maxPadding;
    if (!o(n2)) {
      i2.size && (t2[n2] -= i2.size);
      const e3 = s2[i2.stack] || { size: 0, count: 1 };
      e3.size = Math.max(e3.size, i2.horizontal ? a2.height : a2.width), i2.size = e3.size / e3.count, t2[n2] += i2.size;
    }
    a2.getPadding && Ji(r2, a2.getPadding());
    const l2 = Math.max(0, e2.outerWidth - Zi(r2, t2, "left", "right")), h2 = Math.max(0, e2.outerHeight - Zi(r2, t2, "top", "bottom")), c2 = l2 !== t2.w, d2 = h2 !== t2.h;
    return t2.w = l2, t2.h = h2, i2.horizontal ? { same: c2, other: d2 } : { same: d2, other: c2 };
  }
  function ts(t2, e2) {
    const i2 = e2.maxPadding;
    function s2(t3) {
      const s3 = { left: 0, top: 0, right: 0, bottom: 0 };
      return t3.forEach((t4) => {
        s3[t4] = Math.max(e2[t4], i2[t4]);
      }), s3;
    }
    return s2(t2 ? ["left", "right"] : ["top", "bottom"]);
  }
  function es(t2, e2, i2, s2) {
    const n2 = [];
    let o2, a2, r2, l2, h2, c2;
    for (o2 = 0, a2 = t2.length, h2 = 0; o2 < a2; ++o2) {
      r2 = t2[o2], l2 = r2.box, l2.update(r2.width || e2.w, r2.height || e2.h, ts(r2.horizontal, e2));
      const { same: a3, other: d2 } = Qi(e2, i2, r2, s2);
      h2 |= a3 && n2.length, c2 = c2 || d2, l2.fullSize || n2.push(r2);
    }
    return h2 && es(n2, e2, i2, s2) || c2;
  }
  function is(t2, e2, i2, s2, n2) {
    t2.top = i2, t2.left = e2, t2.right = e2 + s2, t2.bottom = i2 + n2, t2.width = s2, t2.height = n2;
  }
  function ss(t2, e2, i2, s2) {
    const n2 = i2.padding;
    let { x: o2, y: a2 } = e2;
    for (const r2 of t2) {
      const t3 = r2.box, l2 = s2[r2.stack] || { count: 1, placed: 0, weight: 1 }, h2 = r2.stackWeight / l2.weight || 1;
      if (r2.horizontal) {
        const s3 = e2.w * h2, o3 = l2.size || t3.height;
        k(l2.start) && (a2 = l2.start), t3.fullSize ? is(t3, n2.left, a2, i2.outerWidth - n2.right - n2.left, o3) : is(t3, e2.left + l2.placed, a2, s3, o3), l2.start = a2, l2.placed += s3, a2 = t3.bottom;
      } else {
        const s3 = e2.h * h2, a3 = l2.size || t3.width;
        k(l2.start) && (o2 = l2.start), t3.fullSize ? is(t3, o2, n2.top, a3, i2.outerHeight - n2.bottom - n2.top) : is(t3, o2, e2.top + l2.placed, a3, s3), l2.start = o2, l2.placed += s3, o2 = t3.right;
      }
    }
    e2.x = o2, e2.y = a2;
  }
  var ns = { addBox(t2, e2) {
    t2.boxes || (t2.boxes = []), e2.fullSize = e2.fullSize || false, e2.position = e2.position || "top", e2.weight = e2.weight || 0, e2._layers = e2._layers || function() {
      return [{ z: 0, draw(t3) {
        e2.draw(t3);
      } }];
    }, t2.boxes.push(e2);
  }, removeBox(t2, e2) {
    const i2 = t2.boxes ? t2.boxes.indexOf(e2) : -1;
    -1 !== i2 && t2.boxes.splice(i2, 1);
  }, configure(t2, e2, i2) {
    e2.fullSize = i2.fullSize, e2.position = i2.position, e2.weight = i2.weight;
  }, update(t2, e2, i2, s2) {
    if (!t2)
      return;
    const n2 = Mi(t2.options.layout.padding), o2 = Math.max(e2 - n2.width, 0), a2 = Math.max(i2 - n2.height, 0), r2 = function(t3) {
      const e3 = function(t4) {
        const e4 = [];
        let i4, s4, n4, o4, a4, r4;
        for (i4 = 0, s4 = (t4 || []).length; i4 < s4; ++i4)
          n4 = t4[i4], { position: o4, options: { stack: a4, stackWeight: r4 = 1 } } = n4, e4.push({ index: i4, box: n4, pos: o4, horizontal: n4.isHorizontal(), weight: n4.weight, stack: a4 && o4 + a4, stackWeight: r4 });
        return e4;
      }(t3), i3 = Ki(e3.filter((t4) => t4.box.fullSize), true), s3 = Ki(Xi(e3, "left"), true), n3 = Ki(Xi(e3, "right")), o3 = Ki(Xi(e3, "top"), true), a3 = Ki(Xi(e3, "bottom")), r3 = qi(e3, "x"), l3 = qi(e3, "y");
      return { fullSize: i3, leftAndTop: s3.concat(o3), rightAndBottom: n3.concat(l3).concat(a3).concat(r3), chartArea: Xi(e3, "chartArea"), vertical: s3.concat(n3).concat(l3), horizontal: o3.concat(a3).concat(r3) };
    }(t2.boxes), l2 = r2.vertical, h2 = r2.horizontal;
    u(t2.boxes, (t3) => {
      "function" == typeof t3.beforeLayout && t3.beforeLayout();
    });
    const c2 = l2.reduce((t3, e3) => e3.box.options && false === e3.box.options.display ? t3 : t3 + 1, 0) || 1, d2 = Object.freeze({ outerWidth: e2, outerHeight: i2, padding: n2, availableWidth: o2, availableHeight: a2, vBoxMaxWidth: o2 / 2 / c2, hBoxMaxHeight: a2 / 2 }), f2 = Object.assign({}, n2);
    Ji(f2, Mi(s2));
    const g2 = Object.assign({ maxPadding: f2, w: o2, h: a2, x: n2.left, y: n2.top }, n2), p2 = Gi(l2.concat(h2), d2);
    es(r2.fullSize, g2, d2, p2), es(l2, g2, d2, p2), es(h2, g2, d2, p2) && es(l2, g2, d2, p2), function(t3) {
      const e3 = t3.maxPadding;
      function i3(i4) {
        const s3 = Math.max(e3[i4] - t3[i4], 0);
        return t3[i4] += s3, s3;
      }
      t3.y += i3("top"), t3.x += i3("left"), i3("right"), i3("bottom");
    }(g2), ss(r2.leftAndTop, g2, d2, p2), g2.x += g2.w, g2.y += g2.h, ss(r2.rightAndBottom, g2, d2, p2), t2.chartArea = { left: g2.left, top: g2.top, right: g2.left + g2.w, bottom: g2.top + g2.h, height: g2.h, width: g2.w }, u(r2.chartArea, (e3) => {
      const i3 = e3.box;
      Object.assign(i3, t2.chartArea), i3.update(g2.w, g2.h, { left: 0, top: 0, right: 0, bottom: 0 });
    });
  } };
  class os {
    acquireContext(t2, e2) {
    }
    releaseContext(t2) {
      return false;
    }
    addEventListener(t2, e2, i2) {
    }
    removeEventListener(t2, e2, i2) {
    }
    getDevicePixelRatio() {
      return 1;
    }
    getMaximumSize(t2, e2, i2, s2) {
      return e2 = Math.max(0, e2 || t2.width), i2 = i2 || t2.height, { width: e2, height: Math.max(0, s2 ? Math.floor(e2 / s2) : i2) };
    }
    isAttached(t2) {
      return true;
    }
    updateConfig(t2) {
    }
  }
  class as extends os {
    acquireContext(t2) {
      return t2 && t2.getContext && t2.getContext("2d") || null;
    }
    updateConfig(t2) {
      t2.options.animation = false;
    }
  }
  const rs = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout" }, ls = (t2) => null === t2 || "" === t2;
  const hs = !!ke && { passive: true };
  function cs(t2, e2, i2) {
    t2.canvas.removeEventListener(e2, i2, hs);
  }
  function ds(t2, e2) {
    for (const i2 of t2)
      if (i2 === e2 || i2.contains(e2))
        return true;
  }
  function us(t2, e2, i2) {
    const s2 = t2.canvas, n2 = new MutationObserver((t3) => {
      let e3 = false;
      for (const i3 of t3)
        e3 = e3 || ds(i3.addedNodes, s2), e3 = e3 && !ds(i3.removedNodes, s2);
      e3 && i2();
    });
    return n2.observe(document, { childList: true, subtree: true }), n2;
  }
  function fs(t2, e2, i2) {
    const s2 = t2.canvas, n2 = new MutationObserver((t3) => {
      let e3 = false;
      for (const i3 of t3)
        e3 = e3 || ds(i3.removedNodes, s2), e3 = e3 && !ds(i3.addedNodes, s2);
      e3 && i2();
    });
    return n2.observe(document, { childList: true, subtree: true }), n2;
  }
  const gs = /* @__PURE__ */ new Map();
  let ps = 0;
  function ms() {
    const t2 = window.devicePixelRatio;
    t2 !== ps && (ps = t2, gs.forEach((e2, i2) => {
      i2.currentDevicePixelRatio !== t2 && e2();
    }));
  }
  function bs(t2, e2, i2) {
    const s2 = t2.canvas, n2 = s2 && ge(s2);
    if (!n2)
      return;
    const o2 = ct((t3, e3) => {
      const s3 = n2.clientWidth;
      i2(t3, e3), s3 < n2.clientWidth && i2();
    }, window), a2 = new ResizeObserver((t3) => {
      const e3 = t3[0], i3 = e3.contentRect.width, s3 = e3.contentRect.height;
      0 === i3 && 0 === s3 || o2(i3, s3);
    });
    return a2.observe(n2), function(t3, e3) {
      gs.size || window.addEventListener("resize", ms), gs.set(t3, e3);
    }(t2, o2), a2;
  }
  function xs(t2, e2, i2) {
    i2 && i2.disconnect(), "resize" === e2 && function(t3) {
      gs.delete(t3), gs.size || window.removeEventListener("resize", ms);
    }(t2);
  }
  function _s(t2, e2, i2) {
    const s2 = t2.canvas, n2 = ct((e3) => {
      null !== t2.ctx && i2(function(t3, e4) {
        const i3 = rs[t3.type] || t3.type, { x: s3, y: n3 } = ye(t3, e4);
        return { type: i3, chart: e4, native: t3, x: void 0 !== s3 ? s3 : null, y: void 0 !== n3 ? n3 : null };
      }(e3, t2));
    }, t2);
    return function(t3, e3, i3) {
      t3.addEventListener(e3, i3, hs);
    }(s2, e2, n2), n2;
  }
  class ys extends os {
    acquireContext(t2, e2) {
      const i2 = t2 && t2.getContext && t2.getContext("2d");
      return i2 && i2.canvas === t2 ? (function(t3, e3) {
        const i3 = t3.style, s2 = t3.getAttribute("height"), n2 = t3.getAttribute("width");
        if (t3.$chartjs = { initial: { height: s2, width: n2, style: { display: i3.display, height: i3.height, width: i3.width } } }, i3.display = i3.display || "block", i3.boxSizing = i3.boxSizing || "border-box", ls(n2)) {
          const e4 = Se(t3, "width");
          void 0 !== e4 && (t3.width = e4);
        }
        if (ls(s2))
          if ("" === t3.style.height)
            t3.height = t3.width / (e3 || 2);
          else {
            const e4 = Se(t3, "height");
            void 0 !== e4 && (t3.height = e4);
          }
      }(t2, e2), i2) : null;
    }
    releaseContext(t2) {
      const e2 = t2.canvas;
      if (!e2.$chartjs)
        return false;
      const i2 = e2.$chartjs.initial;
      ["height", "width"].forEach((t3) => {
        const n3 = i2[t3];
        s(n3) ? e2.removeAttribute(t3) : e2.setAttribute(t3, n3);
      });
      const n2 = i2.style || {};
      return Object.keys(n2).forEach((t3) => {
        e2.style[t3] = n2[t3];
      }), e2.width = e2.width, delete e2.$chartjs, true;
    }
    addEventListener(t2, e2, i2) {
      this.removeEventListener(t2, e2);
      const s2 = t2.$proxies || (t2.$proxies = {}), n2 = { attach: us, detach: fs, resize: bs }[e2] || _s;
      s2[e2] = n2(t2, e2, i2);
    }
    removeEventListener(t2, e2) {
      const i2 = t2.$proxies || (t2.$proxies = {}), s2 = i2[e2];
      if (!s2)
        return;
      ({ attach: xs, detach: xs, resize: xs }[e2] || cs)(t2, e2, s2), i2[e2] = void 0;
    }
    getDevicePixelRatio() {
      return window.devicePixelRatio;
    }
    getMaximumSize(t2, e2, i2, s2) {
      return Me(t2, e2, i2, s2);
    }
    isAttached(t2) {
      const e2 = ge(t2);
      return !(!e2 || !e2.isConnected);
    }
  }
  function vs(t2) {
    return !fe() || "undefined" != typeof OffscreenCanvas && t2 instanceof OffscreenCanvas ? as : ys;
  }
  var Ms = Object.freeze({ __proto__: null, _detectPlatform: vs, BasePlatform: os, BasicPlatform: as, DomPlatform: ys });
  const ws = "transparent", ks = { boolean: (t2, e2, i2) => i2 > 0.5 ? e2 : t2, color(t2, e2, i2) {
    const s2 = Qt(t2 || ws), n2 = s2.valid && Qt(e2 || ws);
    return n2 && n2.valid ? n2.mix(s2, i2).hexString() : e2;
  }, number: (t2, e2, i2) => t2 + (e2 - t2) * i2 };
  class Ss {
    constructor(t2, e2, i2, s2) {
      const n2 = e2[i2];
      s2 = ki([t2.to, s2, n2, t2.from]);
      const o2 = ki([t2.from, n2, s2]);
      this._active = true, this._fn = t2.fn || ks[t2.type || typeof o2], this._easing = ui[t2.easing] || ui.linear, this._start = Math.floor(Date.now() + (t2.delay || 0)), this._duration = this._total = Math.floor(t2.duration), this._loop = !!t2.loop, this._target = e2, this._prop = i2, this._from = o2, this._to = s2, this._promises = void 0;
    }
    active() {
      return this._active;
    }
    update(t2, e2, i2) {
      if (this._active) {
        this._notify(false);
        const s2 = this._target[this._prop], n2 = i2 - this._start, o2 = this._duration - n2;
        this._start = i2, this._duration = Math.floor(Math.max(o2, t2.duration)), this._total += n2, this._loop = !!t2.loop, this._to = ki([t2.to, e2, s2, t2.from]), this._from = ki([t2.from, s2, e2]);
      }
    }
    cancel() {
      this._active && (this.tick(Date.now()), this._active = false, this._notify(false));
    }
    tick(t2) {
      const e2 = t2 - this._start, i2 = this._duration, s2 = this._prop, n2 = this._from, o2 = this._loop, a2 = this._to;
      let r2;
      if (this._active = n2 !== a2 && (o2 || e2 < i2), !this._active)
        return this._target[s2] = a2, void this._notify(true);
      e2 < 0 ? this._target[s2] = n2 : (r2 = e2 / i2 % 2, r2 = o2 && r2 > 1 ? 2 - r2 : r2, r2 = this._easing(Math.min(1, Math.max(0, r2))), this._target[s2] = this._fn(n2, a2, r2));
    }
    wait() {
      const t2 = this._promises || (this._promises = []);
      return new Promise((e2, i2) => {
        t2.push({ res: e2, rej: i2 });
      });
    }
    _notify(t2) {
      const e2 = t2 ? "res" : "rej", i2 = this._promises || [];
      for (let t3 = 0; t3 < i2.length; t3++)
        i2[t3][e2]();
    }
  }
  class Ps {
    constructor(t2, e2) {
      this._chart = t2, this._properties = /* @__PURE__ */ new Map(), this.configure(e2);
    }
    configure(t2) {
      if (!o(t2))
        return;
      const e2 = Object.keys(ue.animation), i2 = this._properties;
      Object.getOwnPropertyNames(t2).forEach((s2) => {
        const a2 = t2[s2];
        if (!o(a2))
          return;
        const r2 = {};
        for (const t3 of e2)
          r2[t3] = a2[t3];
        (n(a2.properties) && a2.properties || [s2]).forEach((t3) => {
          t3 !== s2 && i2.has(t3) || i2.set(t3, r2);
        });
      });
    }
    _animateOptions(t2, e2) {
      const i2 = e2.options, s2 = function(t3, e3) {
        if (!e3)
          return;
        let i3 = t3.options;
        if (!i3)
          return void (t3.options = e3);
        i3.$shared && (t3.options = i3 = Object.assign({}, i3, { $shared: false, $animations: {} }));
        return i3;
      }(t2, i2);
      if (!s2)
        return [];
      const n2 = this._createAnimations(s2, i2);
      return i2.$shared && function(t3, e3) {
        const i3 = [], s3 = Object.keys(e3);
        for (let e4 = 0; e4 < s3.length; e4++) {
          const n3 = t3[s3[e4]];
          n3 && n3.active() && i3.push(n3.wait());
        }
        return Promise.all(i3);
      }(t2.options.$animations, i2).then(() => {
        t2.options = i2;
      }, () => {
      }), n2;
    }
    _createAnimations(t2, e2) {
      const i2 = this._properties, s2 = [], n2 = t2.$animations || (t2.$animations = {}), o2 = Object.keys(e2), a2 = Date.now();
      let r2;
      for (r2 = o2.length - 1; r2 >= 0; --r2) {
        const l2 = o2[r2];
        if ("$" === l2.charAt(0))
          continue;
        if ("options" === l2) {
          s2.push(...this._animateOptions(t2, e2));
          continue;
        }
        const h2 = e2[l2];
        let c2 = n2[l2];
        const d2 = i2.get(l2);
        if (c2) {
          if (d2 && c2.active()) {
            c2.update(d2, h2, a2);
            continue;
          }
          c2.cancel();
        }
        d2 && d2.duration ? (n2[l2] = c2 = new Ss(d2, t2, l2, h2), s2.push(c2)) : t2[l2] = h2;
      }
      return s2;
    }
    update(t2, e2) {
      if (0 === this._properties.size)
        return void Object.assign(t2, e2);
      const i2 = this._createAnimations(t2, e2);
      return i2.length ? (xt.add(this._chart, i2), true) : void 0;
    }
  }
  function Ds(t2, e2) {
    const i2 = t2 && t2.options || {}, s2 = i2.reverse, n2 = void 0 === i2.min ? e2 : 0, o2 = void 0 === i2.max ? e2 : 0;
    return { start: s2 ? o2 : n2, end: s2 ? n2 : o2 };
  }
  function Cs(t2, e2) {
    const i2 = [], s2 = t2._getSortedDatasetMetas(e2);
    let n2, o2;
    for (n2 = 0, o2 = s2.length; n2 < o2; ++n2)
      i2.push(s2[n2].index);
    return i2;
  }
  function Os(t2, e2, i2, s2 = {}) {
    const n2 = t2.keys, o2 = "single" === s2.mode;
    let r2, l2, h2, c2;
    if (null !== e2) {
      for (r2 = 0, l2 = n2.length; r2 < l2; ++r2) {
        if (h2 = +n2[r2], h2 === i2) {
          if (s2.all)
            continue;
          break;
        }
        c2 = t2.values[h2], a(c2) && (o2 || 0 === e2 || F(e2) === F(c2)) && (e2 += c2);
      }
      return e2;
    }
  }
  function As(t2, e2) {
    const i2 = t2 && t2.options.stacked;
    return i2 || void 0 === i2 && void 0 !== e2.stack;
  }
  function Ts(t2, e2, i2) {
    const s2 = t2[e2] || (t2[e2] = {});
    return s2[i2] || (s2[i2] = {});
  }
  function Ls(t2, e2, i2, s2) {
    for (const n2 of e2.getMatchingVisibleMetas(s2).reverse()) {
      const e3 = t2[n2.index];
      if (i2 && e3 > 0 || !i2 && e3 < 0)
        return n2.index;
    }
    return null;
  }
  function Es(t2, e2) {
    const { chart: i2, _cachedMeta: s2 } = t2, n2 = i2._stacks || (i2._stacks = {}), { iScale: o2, vScale: a2, index: r2 } = s2, l2 = o2.axis, h2 = a2.axis, c2 = function(t3, e3, i3) {
      return `${t3.id}.${e3.id}.${i3.stack || i3.type}`;
    }(o2, a2, s2), d2 = e2.length;
    let u2;
    for (let t3 = 0; t3 < d2; ++t3) {
      const i3 = e2[t3], { [l2]: o3, [h2]: d3 } = i3;
      u2 = (i3._stacks || (i3._stacks = {}))[h2] = Ts(n2, c2, o3), u2[r2] = d3, u2._top = Ls(u2, a2, true, s2.type), u2._bottom = Ls(u2, a2, false, s2.type);
      (u2._visualValues || (u2._visualValues = {}))[r2] = d3;
    }
  }
  function Rs(t2, e2) {
    const i2 = t2.scales;
    return Object.keys(i2).filter((t3) => i2[t3].axis === e2).shift();
  }
  function Is(t2, e2) {
    const i2 = t2.controller.index, s2 = t2.vScale && t2.vScale.axis;
    if (s2) {
      e2 = e2 || t2._parsed;
      for (const t3 of e2) {
        const e3 = t3._stacks;
        if (!e3 || void 0 === e3[s2] || void 0 === e3[s2][i2])
          return;
        delete e3[s2][i2], void 0 !== e3[s2]._visualValues && void 0 !== e3[s2]._visualValues[i2] && delete e3[s2]._visualValues[i2];
      }
    }
  }
  const zs = (t2) => "reset" === t2 || "none" === t2, Fs = (t2, e2) => e2 ? t2 : Object.assign({}, t2);
  class Vs {
    constructor(t2, e2) {
      this.chart = t2, this._ctx = t2.ctx, this.index = e2, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = false, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = false, this.supportsDecimation = false, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
    }
    initialize() {
      const t2 = this._cachedMeta;
      this.configure(), this.linkScales(), t2._stacked = As(t2.vScale, t2), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
    }
    updateIndex(t2) {
      this.index !== t2 && Is(this._cachedMeta), this.index = t2;
    }
    linkScales() {
      const t2 = this.chart, e2 = this._cachedMeta, i2 = this.getDataset(), s2 = (t3, e3, i3, s3) => "x" === t3 ? e3 : "r" === t3 ? s3 : i3, n2 = e2.xAxisID = l(i2.xAxisID, Rs(t2, "x")), o2 = e2.yAxisID = l(i2.yAxisID, Rs(t2, "y")), a2 = e2.rAxisID = l(i2.rAxisID, Rs(t2, "r")), r2 = e2.indexAxis, h2 = e2.iAxisID = s2(r2, n2, o2, a2), c2 = e2.vAxisID = s2(r2, o2, n2, a2);
      e2.xScale = this.getScaleForId(n2), e2.yScale = this.getScaleForId(o2), e2.rScale = this.getScaleForId(a2), e2.iScale = this.getScaleForId(h2), e2.vScale = this.getScaleForId(c2);
    }
    getDataset() {
      return this.chart.data.datasets[this.index];
    }
    getMeta() {
      return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(t2) {
      return this.chart.scales[t2];
    }
    _getOtherScale(t2) {
      const e2 = this._cachedMeta;
      return t2 === e2.iScale ? e2.vScale : e2.iScale;
    }
    reset() {
      this._update("reset");
    }
    _destroy() {
      const t2 = this._cachedMeta;
      this._data && rt(this._data, this), t2._stacked && Is(t2);
    }
    _dataCheck() {
      const t2 = this.getDataset(), e2 = t2.data || (t2.data = []), i2 = this._data;
      if (o(e2))
        this._data = function(t3) {
          const e3 = Object.keys(t3), i3 = new Array(e3.length);
          let s2, n2, o2;
          for (s2 = 0, n2 = e3.length; s2 < n2; ++s2)
            o2 = e3[s2], i3[s2] = { x: o2, y: t3[o2] };
          return i3;
        }(e2);
      else if (i2 !== e2) {
        if (i2) {
          rt(i2, this);
          const t3 = this._cachedMeta;
          Is(t3), t3._parsed = [];
        }
        e2 && Object.isExtensible(e2) && at(e2, this), this._syncList = [], this._data = e2;
      }
    }
    addElements() {
      const t2 = this._cachedMeta;
      this._dataCheck(), this.datasetElementType && (t2.dataset = new this.datasetElementType());
    }
    buildOrUpdateElements(t2) {
      const e2 = this._cachedMeta, i2 = this.getDataset();
      let s2 = false;
      this._dataCheck();
      const n2 = e2._stacked;
      e2._stacked = As(e2.vScale, e2), e2.stack !== i2.stack && (s2 = true, Is(e2), e2.stack = i2.stack), this._resyncElements(t2), (s2 || n2 !== e2._stacked) && Es(this, e2._parsed);
    }
    configure() {
      const t2 = this.chart.config, e2 = t2.datasetScopeKeys(this._type), i2 = t2.getOptionScopes(this.getDataset(), e2, true);
      this.options = t2.createResolver(i2, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
    }
    parse(t2, e2) {
      const { _cachedMeta: i2, _data: s2 } = this, { iScale: a2, _stacked: r2 } = i2, l2 = a2.axis;
      let h2, c2, d2, u2 = 0 === t2 && e2 === s2.length || i2._sorted, f2 = t2 > 0 && i2._parsed[t2 - 1];
      if (false === this._parsing)
        i2._parsed = s2, i2._sorted = true, d2 = s2;
      else {
        d2 = n(s2[t2]) ? this.parseArrayData(i2, s2, t2, e2) : o(s2[t2]) ? this.parseObjectData(i2, s2, t2, e2) : this.parsePrimitiveData(i2, s2, t2, e2);
        const a3 = () => null === c2[l2] || f2 && c2[l2] < f2[l2];
        for (h2 = 0; h2 < e2; ++h2)
          i2._parsed[h2 + t2] = c2 = d2[h2], u2 && (a3() && (u2 = false), f2 = c2);
        i2._sorted = u2;
      }
      r2 && Es(this, d2);
    }
    parsePrimitiveData(t2, e2, i2, s2) {
      const { iScale: n2, vScale: o2 } = t2, a2 = n2.axis, r2 = o2.axis, l2 = n2.getLabels(), h2 = n2 === o2, c2 = new Array(s2);
      let d2, u2, f2;
      for (d2 = 0, u2 = s2; d2 < u2; ++d2)
        f2 = d2 + i2, c2[d2] = { [a2]: h2 || n2.parse(l2[f2], f2), [r2]: o2.parse(e2[f2], f2) };
      return c2;
    }
    parseArrayData(t2, e2, i2, s2) {
      const { xScale: n2, yScale: o2 } = t2, a2 = new Array(s2);
      let r2, l2, h2, c2;
      for (r2 = 0, l2 = s2; r2 < l2; ++r2)
        h2 = r2 + i2, c2 = e2[h2], a2[r2] = { x: n2.parse(c2[0], h2), y: o2.parse(c2[1], h2) };
      return a2;
    }
    parseObjectData(t2, e2, i2, s2) {
      const { xScale: n2, yScale: o2 } = t2, { xAxisKey: a2 = "x", yAxisKey: r2 = "y" } = this._parsing, l2 = new Array(s2);
      let h2, c2, d2, u2;
      for (h2 = 0, c2 = s2; h2 < c2; ++h2)
        d2 = h2 + i2, u2 = e2[d2], l2[h2] = { x: n2.parse(M(u2, a2), d2), y: o2.parse(M(u2, r2), d2) };
      return l2;
    }
    getParsed(t2) {
      return this._cachedMeta._parsed[t2];
    }
    getDataElement(t2) {
      return this._cachedMeta.data[t2];
    }
    applyStack(t2, e2, i2) {
      const s2 = this.chart, n2 = this._cachedMeta, o2 = e2[t2.axis];
      return Os({ keys: Cs(s2, true), values: e2._stacks[t2.axis]._visualValues }, o2, n2.index, { mode: i2 });
    }
    updateRangeFromParsed(t2, e2, i2, s2) {
      const n2 = i2[e2.axis];
      let o2 = null === n2 ? NaN : n2;
      const a2 = s2 && i2._stacks[e2.axis];
      s2 && a2 && (s2.values = a2, o2 = Os(s2, n2, this._cachedMeta.index)), t2.min = Math.min(t2.min, o2), t2.max = Math.max(t2.max, o2);
    }
    getMinMax(t2, e2) {
      const i2 = this._cachedMeta, s2 = i2._parsed, n2 = i2._sorted && t2 === i2.iScale, o2 = s2.length, r2 = this._getOtherScale(t2), l2 = ((t3, e3, i3) => t3 && !e3.hidden && e3._stacked && { keys: Cs(i3, true), values: null })(e2, i2, this.chart), h2 = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY }, { min: c2, max: d2 } = function(t3) {
        const { min: e3, max: i3, minDefined: s3, maxDefined: n3 } = t3.getUserBounds();
        return { min: s3 ? e3 : Number.NEGATIVE_INFINITY, max: n3 ? i3 : Number.POSITIVE_INFINITY };
      }(r2);
      let u2, f2;
      function g2() {
        f2 = s2[u2];
        const e3 = f2[r2.axis];
        return !a(f2[t2.axis]) || c2 > e3 || d2 < e3;
      }
      for (u2 = 0; u2 < o2 && (g2() || (this.updateRangeFromParsed(h2, t2, f2, l2), !n2)); ++u2)
        ;
      if (n2) {
        for (u2 = o2 - 1; u2 >= 0; --u2)
          if (!g2()) {
            this.updateRangeFromParsed(h2, t2, f2, l2);
            break;
          }
      }
      return h2;
    }
    getAllParsedValues(t2) {
      const e2 = this._cachedMeta._parsed, i2 = [];
      let s2, n2, o2;
      for (s2 = 0, n2 = e2.length; s2 < n2; ++s2)
        o2 = e2[s2][t2.axis], a(o2) && i2.push(o2);
      return i2;
    }
    getMaxOverflow() {
      return false;
    }
    getLabelAndValue(t2) {
      const e2 = this._cachedMeta, i2 = e2.iScale, s2 = e2.vScale, n2 = this.getParsed(t2);
      return { label: i2 ? "" + i2.getLabelForValue(n2[i2.axis]) : "", value: s2 ? "" + s2.getLabelForValue(n2[s2.axis]) : "" };
    }
    _update(t2) {
      const e2 = this._cachedMeta;
      this.update(t2 || "default"), e2._clip = function(t3) {
        let e3, i2, s2, n2;
        return o(t3) ? (e3 = t3.top, i2 = t3.right, s2 = t3.bottom, n2 = t3.left) : e3 = i2 = s2 = n2 = t3, { top: e3, right: i2, bottom: s2, left: n2, disabled: false === t3 };
      }(l(this.options.clip, function(t3, e3, i2) {
        if (false === i2)
          return false;
        const s2 = Ds(t3, i2), n2 = Ds(e3, i2);
        return { top: n2.end, right: s2.end, bottom: n2.start, left: s2.start };
      }(e2.xScale, e2.yScale, this.getMaxOverflow())));
    }
    update(t2) {
    }
    draw() {
      const t2 = this._ctx, e2 = this.chart, i2 = this._cachedMeta, s2 = i2.data || [], n2 = e2.chartArea, o2 = [], a2 = this._drawStart || 0, r2 = this._drawCount || s2.length - a2, l2 = this.options.drawActiveElementsOnTop;
      let h2;
      for (i2.dataset && i2.dataset.draw(t2, n2, a2, r2), h2 = a2; h2 < a2 + r2; ++h2) {
        const e3 = s2[h2];
        e3.hidden || (e3.active && l2 ? o2.push(e3) : e3.draw(t2, n2));
      }
      for (h2 = 0; h2 < o2.length; ++h2)
        o2[h2].draw(t2, n2);
    }
    getStyle(t2, e2) {
      const i2 = e2 ? "active" : "default";
      return void 0 === t2 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i2) : this.resolveDataElementOptions(t2 || 0, i2);
    }
    getContext(t2, e2, i2) {
      const s2 = this.getDataset();
      let n2;
      if (t2 >= 0 && t2 < this._cachedMeta.data.length) {
        const e3 = this._cachedMeta.data[t2];
        n2 = e3.$context || (e3.$context = function(t3, e4, i3) {
          return Pi(t3, { active: false, dataIndex: e4, parsed: void 0, raw: void 0, element: i3, index: e4, mode: "default", type: "data" });
        }(this.getContext(), t2, e3)), n2.parsed = this.getParsed(t2), n2.raw = s2.data[t2], n2.index = n2.dataIndex = t2;
      } else
        n2 = this.$context || (this.$context = function(t3, e3) {
          return Pi(t3, { active: false, dataset: void 0, datasetIndex: e3, index: e3, mode: "default", type: "dataset" });
        }(this.chart.getContext(), this.index)), n2.dataset = s2, n2.index = n2.datasetIndex = this.index;
      return n2.active = !!e2, n2.mode = i2, n2;
    }
    resolveDatasetElementOptions(t2) {
      return this._resolveElementOptions(this.datasetElementType.id, t2);
    }
    resolveDataElementOptions(t2, e2) {
      return this._resolveElementOptions(this.dataElementType.id, e2, t2);
    }
    _resolveElementOptions(t2, e2 = "default", i2) {
      const s2 = "active" === e2, n2 = this._cachedDataOpts, o2 = t2 + "-" + e2, a2 = n2[o2], r2 = this.enableOptionSharing && k(i2);
      if (a2)
        return Fs(a2, r2);
      const l2 = this.chart.config, h2 = l2.datasetElementScopeKeys(this._type, t2), c2 = s2 ? [`${t2}Hover`, "hover", t2, ""] : [t2, ""], d2 = l2.getOptionScopes(this.getDataset(), h2), u2 = Object.keys(ue.elements[t2]), f2 = l2.resolveNamedOptions(d2, u2, () => this.getContext(i2, s2, e2), c2);
      return f2.$shared && (f2.$shared = r2, n2[o2] = Object.freeze(Fs(f2, r2))), f2;
    }
    _resolveAnimations(t2, e2, i2) {
      const s2 = this.chart, n2 = this._cachedDataOpts, o2 = `animation-${e2}`, a2 = n2[o2];
      if (a2)
        return a2;
      let r2;
      if (false !== s2.options.animation) {
        const s3 = this.chart.config, n3 = s3.datasetAnimationScopeKeys(this._type, e2), o3 = s3.getOptionScopes(this.getDataset(), n3);
        r2 = s3.createResolver(o3, this.getContext(t2, i2, e2));
      }
      const l2 = new Ps(s2, r2 && r2.animations);
      return r2 && r2._cacheable && (n2[o2] = Object.freeze(l2)), l2;
    }
    getSharedOptions(t2) {
      if (t2.$shared)
        return this._sharedOptions || (this._sharedOptions = Object.assign({}, t2));
    }
    includeOptions(t2, e2) {
      return !e2 || zs(t2) || this.chart._animationsDisabled;
    }
    _getSharedOptions(t2, e2) {
      const i2 = this.resolveDataElementOptions(t2, e2), s2 = this._sharedOptions, n2 = this.getSharedOptions(i2), o2 = this.includeOptions(e2, n2) || n2 !== s2;
      return this.updateSharedOptions(n2, e2, i2), { sharedOptions: n2, includeOptions: o2 };
    }
    updateElement(t2, e2, i2, s2) {
      zs(s2) ? Object.assign(t2, i2) : this._resolveAnimations(e2, s2).update(t2, i2);
    }
    updateSharedOptions(t2, e2, i2) {
      t2 && !zs(e2) && this._resolveAnimations(void 0, e2).update(t2, i2);
    }
    _setStyle(t2, e2, i2, s2) {
      t2.active = s2;
      const n2 = this.getStyle(e2, s2);
      this._resolveAnimations(e2, i2, s2).update(t2, { options: !s2 && this.getSharedOptions(n2) || n2 });
    }
    removeHoverStyle(t2, e2, i2) {
      this._setStyle(t2, i2, "active", false);
    }
    setHoverStyle(t2, e2, i2) {
      this._setStyle(t2, i2, "active", true);
    }
    _removeDatasetHoverStyle() {
      const t2 = this._cachedMeta.dataset;
      t2 && this._setStyle(t2, void 0, "active", false);
    }
    _setDatasetHoverStyle() {
      const t2 = this._cachedMeta.dataset;
      t2 && this._setStyle(t2, void 0, "active", true);
    }
    _resyncElements(t2) {
      const e2 = this._data, i2 = this._cachedMeta.data;
      for (const [t3, e3, i3] of this._syncList)
        this[t3](e3, i3);
      this._syncList = [];
      const s2 = i2.length, n2 = e2.length, o2 = Math.min(n2, s2);
      o2 && this.parse(0, o2), n2 > s2 ? this._insertElements(s2, n2 - s2, t2) : n2 < s2 && this._removeElements(n2, s2 - n2);
    }
    _insertElements(t2, e2, i2 = true) {
      const s2 = this._cachedMeta, n2 = s2.data, o2 = t2 + e2;
      let a2;
      const r2 = (t3) => {
        for (t3.length += e2, a2 = t3.length - 1; a2 >= o2; a2--)
          t3[a2] = t3[a2 - e2];
      };
      for (r2(n2), a2 = t2; a2 < o2; ++a2)
        n2[a2] = new this.dataElementType();
      this._parsing && r2(s2._parsed), this.parse(t2, e2), i2 && this.updateElements(n2, t2, e2, "reset");
    }
    updateElements(t2, e2, i2, s2) {
    }
    _removeElements(t2, e2) {
      const i2 = this._cachedMeta;
      if (this._parsing) {
        const s2 = i2._parsed.splice(t2, e2);
        i2._stacked && Is(i2, s2);
      }
      i2.data.splice(t2, e2);
    }
    _sync(t2) {
      if (this._parsing)
        this._syncList.push(t2);
      else {
        const [e2, i2, s2] = t2;
        this[e2](i2, s2);
      }
      this.chart._dataChanges.push([this.index, ...t2]);
    }
    _onDataPush() {
      const t2 = arguments.length;
      this._sync(["_insertElements", this.getDataset().data.length - t2, t2]);
    }
    _onDataPop() {
      this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
    }
    _onDataShift() {
      this._sync(["_removeElements", 0, 1]);
    }
    _onDataSplice(t2, e2) {
      e2 && this._sync(["_removeElements", t2, e2]);
      const i2 = arguments.length - 2;
      i2 && this._sync(["_insertElements", t2, i2]);
    }
    _onDataUnshift() {
      this._sync(["_insertElements", 0, arguments.length]);
    }
  }
  __publicField(Vs, "defaults", {});
  __publicField(Vs, "datasetElementType", null);
  __publicField(Vs, "dataElementType", null);
  class Bs {
    constructor() {
      __publicField(this, "active", false);
    }
    tooltipPosition(t2) {
      const { x: e2, y: i2 } = this.getProps(["x", "y"], t2);
      return { x: e2, y: i2 };
    }
    hasValue() {
      return W(this.x) && W(this.y);
    }
    getProps(t2, e2) {
      const i2 = this.$animations;
      if (!e2 || !i2)
        return this;
      const s2 = {};
      return t2.forEach((t3) => {
        s2[t3] = i2[t3] && i2[t3].active() ? i2[t3]._to : this[t3];
      }), s2;
    }
  }
  __publicField(Bs, "defaults", {});
  __publicField(Bs, "defaultRoutes");
  function Ns(t2, e2) {
    const i2 = t2.options.ticks, n2 = function(t3) {
      const e3 = t3.options.offset, i3 = t3._tickSize(), s2 = t3._length / i3 + (e3 ? 0 : 1), n3 = t3._maxLength / i3;
      return Math.floor(Math.min(s2, n3));
    }(t2), o2 = Math.min(i2.maxTicksLimit || n2, n2), a2 = i2.major.enabled ? function(t3) {
      const e3 = [];
      let i3, s2;
      for (i3 = 0, s2 = t3.length; i3 < s2; i3++)
        t3[i3].major && e3.push(i3);
      return e3;
    }(e2) : [], r2 = a2.length, l2 = a2[0], h2 = a2[r2 - 1], c2 = [];
    if (r2 > o2)
      return function(t3, e3, i3, s2) {
        let n3, o3 = 0, a3 = i3[0];
        for (s2 = Math.ceil(s2), n3 = 0; n3 < t3.length; n3++)
          n3 === a3 && (e3.push(t3[n3]), o3++, a3 = i3[o3 * s2]);
      }(e2, c2, a2, r2 / o2), c2;
    const d2 = function(t3, e3, i3) {
      const s2 = function(t4) {
        const e4 = t4.length;
        let i4, s3;
        if (e4 < 2)
          return false;
        for (s3 = t4[0], i4 = 1; i4 < e4; ++i4)
          if (t4[i4] - t4[i4 - 1] !== s3)
            return false;
        return s3;
      }(t3), n3 = e3.length / i3;
      if (!s2)
        return Math.max(n3, 1);
      const o3 = N(s2);
      for (let t4 = 0, e4 = o3.length - 1; t4 < e4; t4++) {
        const e5 = o3[t4];
        if (e5 > n3)
          return e5;
      }
      return Math.max(n3, 1);
    }(a2, e2, o2);
    if (r2 > 0) {
      let t3, i3;
      const n3 = r2 > 1 ? Math.round((h2 - l2) / (r2 - 1)) : null;
      for (Ws(e2, c2, d2, s(n3) ? 0 : l2 - n3, l2), t3 = 0, i3 = r2 - 1; t3 < i3; t3++)
        Ws(e2, c2, d2, a2[t3], a2[t3 + 1]);
      return Ws(e2, c2, d2, h2, s(n3) ? e2.length : h2 + n3), c2;
    }
    return Ws(e2, c2, d2), c2;
  }
  function Ws(t2, e2, i2, s2, n2) {
    const o2 = l(s2, 0), a2 = Math.min(l(n2, t2.length), t2.length);
    let r2, h2, c2, d2 = 0;
    for (i2 = Math.ceil(i2), n2 && (r2 = n2 - s2, i2 = r2 / Math.floor(r2 / i2)), c2 = o2; c2 < 0; )
      d2++, c2 = Math.round(o2 + d2 * i2);
    for (h2 = Math.max(o2, 0); h2 < a2; h2++)
      h2 === c2 && (e2.push(t2[h2]), d2++, c2 = Math.round(o2 + d2 * i2));
  }
  const Hs = (t2, e2, i2) => "top" === e2 || "left" === e2 ? t2[e2] + i2 : t2[e2] - i2;
  function js(t2, e2) {
    const i2 = [], s2 = t2.length / e2, n2 = t2.length;
    let o2 = 0;
    for (; o2 < n2; o2 += s2)
      i2.push(t2[Math.floor(o2)]);
    return i2;
  }
  function $s(t2, e2, i2) {
    const s2 = t2.ticks.length, n2 = Math.min(e2, s2 - 1), o2 = t2._startPixel, a2 = t2._endPixel, r2 = 1e-6;
    let l2, h2 = t2.getPixelForTick(n2);
    if (!(i2 && (l2 = 1 === s2 ? Math.max(h2 - o2, a2 - h2) : 0 === e2 ? (t2.getPixelForTick(1) - h2) / 2 : (h2 - t2.getPixelForTick(n2 - 1)) / 2, h2 += n2 < e2 ? l2 : -l2, h2 < o2 - r2 || h2 > a2 + r2)))
      return h2;
  }
  function Ys(t2) {
    return t2.drawTicks ? t2.tickLength : 0;
  }
  function Us(t2, e2) {
    if (!t2.display)
      return 0;
    const i2 = wi(t2.font, e2), s2 = Mi(t2.padding);
    return (n(t2.text) ? t2.text.length : 1) * i2.lineHeight + s2.height;
  }
  function Xs(t2, e2, i2) {
    let s2 = ut(t2);
    return (i2 && "right" !== e2 || !i2 && "right" === e2) && (s2 = ((t3) => "left" === t3 ? "right" : "right" === t3 ? "left" : t3)(s2)), s2;
  }
  class qs extends Bs {
    constructor(t2) {
      super(), this.id = t2.id, this.type = t2.type, this.options = void 0, this.ctx = t2.ctx, this.chart = t2.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = { left: 0, right: 0, top: 0, bottom: 0 }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = false, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = false, this.$context = void 0;
    }
    init(t2) {
      this.options = t2.setContext(this.getContext()), this.axis = t2.axis, this._userMin = this.parse(t2.min), this._userMax = this.parse(t2.max), this._suggestedMin = this.parse(t2.suggestedMin), this._suggestedMax = this.parse(t2.suggestedMax);
    }
    parse(t2, e2) {
      return t2;
    }
    getUserBounds() {
      let { _userMin: t2, _userMax: e2, _suggestedMin: i2, _suggestedMax: s2 } = this;
      return t2 = r(t2, Number.POSITIVE_INFINITY), e2 = r(e2, Number.NEGATIVE_INFINITY), i2 = r(i2, Number.POSITIVE_INFINITY), s2 = r(s2, Number.NEGATIVE_INFINITY), { min: r(t2, i2), max: r(e2, s2), minDefined: a(t2), maxDefined: a(e2) };
    }
    getMinMax(t2) {
      let e2, { min: i2, max: s2, minDefined: n2, maxDefined: o2 } = this.getUserBounds();
      if (n2 && o2)
        return { min: i2, max: s2 };
      const a2 = this.getMatchingVisibleMetas();
      for (let r2 = 0, l2 = a2.length; r2 < l2; ++r2)
        e2 = a2[r2].controller.getMinMax(this, t2), n2 || (i2 = Math.min(i2, e2.min)), o2 || (s2 = Math.max(s2, e2.max));
      return i2 = o2 && i2 > s2 ? s2 : i2, s2 = n2 && i2 > s2 ? i2 : s2, { min: r(i2, r(s2, i2)), max: r(s2, r(i2, s2)) };
    }
    getPadding() {
      return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 };
    }
    getTicks() {
      return this.ticks;
    }
    getLabels() {
      const t2 = this.chart.data;
      return this.options.labels || (this.isHorizontal() ? t2.xLabels : t2.yLabels) || t2.labels || [];
    }
    getLabelItems(t2 = this.chart.chartArea) {
      return this._labelItems || (this._labelItems = this._computeLabelItems(t2));
    }
    beforeLayout() {
      this._cache = {}, this._dataLimitsCached = false;
    }
    beforeUpdate() {
      d(this.options.beforeUpdate, [this]);
    }
    update(t2, e2, i2) {
      const { beginAtZero: s2, grace: n2, ticks: o2 } = this.options, a2 = o2.sampleSize;
      this.beforeUpdate(), this.maxWidth = t2, this.maxHeight = e2, this._margins = i2 = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i2), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i2.left + i2.right : this.height + i2.top + i2.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Si(this, n2, s2), this._dataLimitsCached = true), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
      const r2 = a2 < this.ticks.length;
      this._convertTicksToLabels(r2 ? js(this.ticks, a2) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), o2.display && (o2.autoSkip || "auto" === o2.source) && (this.ticks = Ns(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), r2 && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
    }
    configure() {
      let t2, e2, i2 = this.options.reverse;
      this.isHorizontal() ? (t2 = this.left, e2 = this.right) : (t2 = this.top, e2 = this.bottom, i2 = !i2), this._startPixel = t2, this._endPixel = e2, this._reversePixels = i2, this._length = e2 - t2, this._alignToPixels = this.options.alignToPixels;
    }
    afterUpdate() {
      d(this.options.afterUpdate, [this]);
    }
    beforeSetDimensions() {
      d(this.options.beforeSetDimensions, [this]);
    }
    setDimensions() {
      this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
    }
    afterSetDimensions() {
      d(this.options.afterSetDimensions, [this]);
    }
    _callHooks(t2) {
      this.chart.notifyPlugins(t2, this.getContext()), d(this.options[t2], [this]);
    }
    beforeDataLimits() {
      this._callHooks("beforeDataLimits");
    }
    determineDataLimits() {
    }
    afterDataLimits() {
      this._callHooks("afterDataLimits");
    }
    beforeBuildTicks() {
      this._callHooks("beforeBuildTicks");
    }
    buildTicks() {
      return [];
    }
    afterBuildTicks() {
      this._callHooks("afterBuildTicks");
    }
    beforeTickToLabelConversion() {
      d(this.options.beforeTickToLabelConversion, [this]);
    }
    generateTickLabels(t2) {
      const e2 = this.options.ticks;
      let i2, s2, n2;
      for (i2 = 0, s2 = t2.length; i2 < s2; i2++)
        n2 = t2[i2], n2.label = d(e2.callback, [n2.value, i2, t2], this);
    }
    afterTickToLabelConversion() {
      d(this.options.afterTickToLabelConversion, [this]);
    }
    beforeCalculateLabelRotation() {
      d(this.options.beforeCalculateLabelRotation, [this]);
    }
    calculateLabelRotation() {
      const t2 = this.options, e2 = t2.ticks, i2 = this.ticks.length, s2 = e2.minRotation || 0, n2 = e2.maxRotation;
      let o2, a2, r2, l2 = s2;
      if (!this._isVisible() || !e2.display || s2 >= n2 || i2 <= 1 || !this.isHorizontal())
        return void (this.labelRotation = s2);
      const h2 = this._getLabelSizes(), c2 = h2.widest.width, d2 = h2.highest.height, u2 = J(this.chart.width - c2, 0, this.maxWidth);
      o2 = t2.offset ? this.maxWidth / i2 : u2 / (i2 - 1), c2 + 6 > o2 && (o2 = u2 / (i2 - (t2.offset ? 0.5 : 1)), a2 = this.maxHeight - Ys(t2.grid) - e2.padding - Us(t2.title, this.chart.options.font), r2 = Math.sqrt(c2 * c2 + d2 * d2), l2 = Y(Math.min(Math.asin(J((h2.highest.height + 6) / o2, -1, 1)), Math.asin(J(a2 / r2, -1, 1)) - Math.asin(J(d2 / r2, -1, 1)))), l2 = Math.max(s2, Math.min(n2, l2))), this.labelRotation = l2;
    }
    afterCalculateLabelRotation() {
      d(this.options.afterCalculateLabelRotation, [this]);
    }
    afterAutoSkip() {
    }
    beforeFit() {
      d(this.options.beforeFit, [this]);
    }
    fit() {
      const t2 = { width: 0, height: 0 }, { chart: e2, options: { ticks: i2, title: s2, grid: n2 } } = this, o2 = this._isVisible(), a2 = this.isHorizontal();
      if (o2) {
        const o3 = Us(s2, e2.options.font);
        if (a2 ? (t2.width = this.maxWidth, t2.height = Ys(n2) + o3) : (t2.height = this.maxHeight, t2.width = Ys(n2) + o3), i2.display && this.ticks.length) {
          const { first: e3, last: s3, widest: n3, highest: o4 } = this._getLabelSizes(), r2 = 2 * i2.padding, l2 = $(this.labelRotation), h2 = Math.cos(l2), c2 = Math.sin(l2);
          if (a2) {
            const e4 = i2.mirror ? 0 : c2 * n3.width + h2 * o4.height;
            t2.height = Math.min(this.maxHeight, t2.height + e4 + r2);
          } else {
            const e4 = i2.mirror ? 0 : h2 * n3.width + c2 * o4.height;
            t2.width = Math.min(this.maxWidth, t2.width + e4 + r2);
          }
          this._calculatePadding(e3, s3, c2, h2);
        }
      }
      this._handleMargins(), a2 ? (this.width = this._length = e2.width - this._margins.left - this._margins.right, this.height = t2.height) : (this.width = t2.width, this.height = this._length = e2.height - this._margins.top - this._margins.bottom);
    }
    _calculatePadding(t2, e2, i2, s2) {
      const { ticks: { align: n2, padding: o2 }, position: a2 } = this.options, r2 = 0 !== this.labelRotation, l2 = "top" !== a2 && "x" === this.axis;
      if (this.isHorizontal()) {
        const a3 = this.getPixelForTick(0) - this.left, h2 = this.right - this.getPixelForTick(this.ticks.length - 1);
        let c2 = 0, d2 = 0;
        r2 ? l2 ? (c2 = s2 * t2.width, d2 = i2 * e2.height) : (c2 = i2 * t2.height, d2 = s2 * e2.width) : "start" === n2 ? d2 = e2.width : "end" === n2 ? c2 = t2.width : "inner" !== n2 && (c2 = t2.width / 2, d2 = e2.width / 2), this.paddingLeft = Math.max((c2 - a3 + o2) * this.width / (this.width - a3), 0), this.paddingRight = Math.max((d2 - h2 + o2) * this.width / (this.width - h2), 0);
      } else {
        let i3 = e2.height / 2, s3 = t2.height / 2;
        "start" === n2 ? (i3 = 0, s3 = t2.height) : "end" === n2 && (i3 = e2.height, s3 = 0), this.paddingTop = i3 + o2, this.paddingBottom = s3 + o2;
      }
    }
    _handleMargins() {
      this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
    }
    afterFit() {
      d(this.options.afterFit, [this]);
    }
    isHorizontal() {
      const { axis: t2, position: e2 } = this.options;
      return "top" === e2 || "bottom" === e2 || "x" === t2;
    }
    isFullSize() {
      return this.options.fullSize;
    }
    _convertTicksToLabels(t2) {
      let e2, i2;
      for (this.beforeTickToLabelConversion(), this.generateTickLabels(t2), e2 = 0, i2 = t2.length; e2 < i2; e2++)
        s(t2[e2].label) && (t2.splice(e2, 1), i2--, e2--);
      this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
      let t2 = this._labelSizes;
      if (!t2) {
        const e2 = this.options.ticks.sampleSize;
        let i2 = this.ticks;
        e2 < i2.length && (i2 = js(i2, e2)), this._labelSizes = t2 = this._computeLabelSizes(i2, i2.length);
      }
      return t2;
    }
    _computeLabelSizes(t2, e2) {
      const { ctx: i2, _longestTextCache: o2 } = this, a2 = [], r2 = [];
      let l2, h2, c2, d2, f2, g2, p2, m2, b2, x2, _2, y2 = 0, v2 = 0;
      for (l2 = 0; l2 < e2; ++l2) {
        if (d2 = t2[l2].label, f2 = this._resolveTickFontOptions(l2), i2.font = g2 = f2.string, p2 = o2[g2] = o2[g2] || { data: {}, gc: [] }, m2 = f2.lineHeight, b2 = x2 = 0, s(d2) || n(d2)) {
          if (n(d2))
            for (h2 = 0, c2 = d2.length; h2 < c2; ++h2)
              _2 = d2[h2], s(_2) || n(_2) || (b2 = De(i2, p2.data, p2.gc, b2, _2), x2 += m2);
        } else
          b2 = De(i2, p2.data, p2.gc, b2, d2), x2 = m2;
        a2.push(b2), r2.push(x2), y2 = Math.max(b2, y2), v2 = Math.max(x2, v2);
      }
      !function(t3, e3) {
        u(t3, (t4) => {
          const i3 = t4.gc, s2 = i3.length / 2;
          let n2;
          if (s2 > e3) {
            for (n2 = 0; n2 < s2; ++n2)
              delete t4.data[i3[n2]];
            i3.splice(0, s2);
          }
        });
      }(o2, e2);
      const M2 = a2.indexOf(y2), w2 = r2.indexOf(v2), k2 = (t3) => ({ width: a2[t3] || 0, height: r2[t3] || 0 });
      return { first: k2(0), last: k2(e2 - 1), widest: k2(M2), highest: k2(w2), widths: a2, heights: r2 };
    }
    getLabelForValue(t2) {
      return t2;
    }
    getPixelForValue(t2, e2) {
      return NaN;
    }
    getValueForPixel(t2) {
    }
    getPixelForTick(t2) {
      const e2 = this.ticks;
      return t2 < 0 || t2 > e2.length - 1 ? null : this.getPixelForValue(e2[t2].value);
    }
    getPixelForDecimal(t2) {
      this._reversePixels && (t2 = 1 - t2);
      const e2 = this._startPixel + t2 * this._length;
      return Q(this._alignToPixels ? Oe(this.chart, e2, 0) : e2);
    }
    getDecimalForPixel(t2) {
      const e2 = (t2 - this._startPixel) / this._length;
      return this._reversePixels ? 1 - e2 : e2;
    }
    getBasePixel() {
      return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
      const { min: t2, max: e2 } = this;
      return t2 < 0 && e2 < 0 ? e2 : t2 > 0 && e2 > 0 ? t2 : 0;
    }
    getContext(t2) {
      const e2 = this.ticks || [];
      if (t2 >= 0 && t2 < e2.length) {
        const i2 = e2[t2];
        return i2.$context || (i2.$context = function(t3, e3, i3) {
          return Pi(t3, { tick: i3, index: e3, type: "tick" });
        }(this.getContext(), t2, i2));
      }
      return this.$context || (this.$context = Pi(this.chart.getContext(), { scale: this, type: "scale" }));
    }
    _tickSize() {
      const t2 = this.options.ticks, e2 = $(this.labelRotation), i2 = Math.abs(Math.cos(e2)), s2 = Math.abs(Math.sin(e2)), n2 = this._getLabelSizes(), o2 = t2.autoSkipPadding || 0, a2 = n2 ? n2.widest.width + o2 : 0, r2 = n2 ? n2.highest.height + o2 : 0;
      return this.isHorizontal() ? r2 * i2 > a2 * s2 ? a2 / i2 : r2 / s2 : r2 * s2 < a2 * i2 ? r2 / i2 : a2 / s2;
    }
    _isVisible() {
      const t2 = this.options.display;
      return "auto" !== t2 ? !!t2 : this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(t2) {
      const e2 = this.axis, i2 = this.chart, s2 = this.options, { grid: n2, position: a2, border: r2 } = s2, h2 = n2.offset, c2 = this.isHorizontal(), d2 = this.ticks.length + (h2 ? 1 : 0), u2 = Ys(n2), f2 = [], g2 = r2.setContext(this.getContext()), p2 = g2.display ? g2.width : 0, m2 = p2 / 2, b2 = function(t3) {
        return Oe(i2, t3, p2);
      };
      let x2, _2, y2, v2, M2, w2, k2, S2, P2, D2, C2, O2;
      if ("top" === a2)
        x2 = b2(this.bottom), w2 = this.bottom - u2, S2 = x2 - m2, D2 = b2(t2.top) + m2, O2 = t2.bottom;
      else if ("bottom" === a2)
        x2 = b2(this.top), D2 = t2.top, O2 = b2(t2.bottom) - m2, w2 = x2 + m2, S2 = this.top + u2;
      else if ("left" === a2)
        x2 = b2(this.right), M2 = this.right - u2, k2 = x2 - m2, P2 = b2(t2.left) + m2, C2 = t2.right;
      else if ("right" === a2)
        x2 = b2(this.left), P2 = t2.left, C2 = b2(t2.right) - m2, M2 = x2 + m2, k2 = this.left + u2;
      else if ("x" === e2) {
        if ("center" === a2)
          x2 = b2((t2.top + t2.bottom) / 2 + 0.5);
        else if (o(a2)) {
          const t3 = Object.keys(a2)[0], e3 = a2[t3];
          x2 = b2(this.chart.scales[t3].getPixelForValue(e3));
        }
        D2 = t2.top, O2 = t2.bottom, w2 = x2 + m2, S2 = w2 + u2;
      } else if ("y" === e2) {
        if ("center" === a2)
          x2 = b2((t2.left + t2.right) / 2);
        else if (o(a2)) {
          const t3 = Object.keys(a2)[0], e3 = a2[t3];
          x2 = b2(this.chart.scales[t3].getPixelForValue(e3));
        }
        M2 = x2 - m2, k2 = M2 - u2, P2 = t2.left, C2 = t2.right;
      }
      const A2 = l(s2.ticks.maxTicksLimit, d2), T2 = Math.max(1, Math.ceil(d2 / A2));
      for (_2 = 0; _2 < d2; _2 += T2) {
        const t3 = this.getContext(_2), e3 = n2.setContext(t3), s3 = r2.setContext(t3), o2 = e3.lineWidth, a3 = e3.color, l2 = s3.dash || [], d3 = s3.dashOffset, u3 = e3.tickWidth, g3 = e3.tickColor, p3 = e3.tickBorderDash || [], m3 = e3.tickBorderDashOffset;
        y2 = $s(this, _2, h2), void 0 !== y2 && (v2 = Oe(i2, y2, o2), c2 ? M2 = k2 = P2 = C2 = v2 : w2 = S2 = D2 = O2 = v2, f2.push({ tx1: M2, ty1: w2, tx2: k2, ty2: S2, x1: P2, y1: D2, x2: C2, y2: O2, width: o2, color: a3, borderDash: l2, borderDashOffset: d3, tickWidth: u3, tickColor: g3, tickBorderDash: p3, tickBorderDashOffset: m3 }));
      }
      return this._ticksLength = d2, this._borderValue = x2, f2;
    }
    _computeLabelItems(t2) {
      const e2 = this.axis, i2 = this.options, { position: s2, ticks: a2 } = i2, r2 = this.isHorizontal(), l2 = this.ticks, { align: h2, crossAlign: c2, padding: d2, mirror: u2 } = a2, f2 = Ys(i2.grid), g2 = f2 + d2, p2 = u2 ? -d2 : g2, m2 = -$(this.labelRotation), b2 = [];
      let x2, _2, y2, v2, M2, w2, k2, S2, P2, D2, C2, O2, A2 = "middle";
      if ("top" === s2)
        w2 = this.bottom - p2, k2 = this._getXAxisLabelAlignment();
      else if ("bottom" === s2)
        w2 = this.top + p2, k2 = this._getXAxisLabelAlignment();
      else if ("left" === s2) {
        const t3 = this._getYAxisLabelAlignment(f2);
        k2 = t3.textAlign, M2 = t3.x;
      } else if ("right" === s2) {
        const t3 = this._getYAxisLabelAlignment(f2);
        k2 = t3.textAlign, M2 = t3.x;
      } else if ("x" === e2) {
        if ("center" === s2)
          w2 = (t2.top + t2.bottom) / 2 + g2;
        else if (o(s2)) {
          const t3 = Object.keys(s2)[0], e3 = s2[t3];
          w2 = this.chart.scales[t3].getPixelForValue(e3) + g2;
        }
        k2 = this._getXAxisLabelAlignment();
      } else if ("y" === e2) {
        if ("center" === s2)
          M2 = (t2.left + t2.right) / 2 - g2;
        else if (o(s2)) {
          const t3 = Object.keys(s2)[0], e3 = s2[t3];
          M2 = this.chart.scales[t3].getPixelForValue(e3);
        }
        k2 = this._getYAxisLabelAlignment(f2).textAlign;
      }
      "y" === e2 && ("start" === h2 ? A2 = "top" : "end" === h2 && (A2 = "bottom"));
      const T2 = this._getLabelSizes();
      for (x2 = 0, _2 = l2.length; x2 < _2; ++x2) {
        y2 = l2[x2], v2 = y2.label;
        const t3 = a2.setContext(this.getContext(x2));
        S2 = this.getPixelForTick(x2) + a2.labelOffset, P2 = this._resolveTickFontOptions(x2), D2 = P2.lineHeight, C2 = n(v2) ? v2.length : 1;
        const e3 = C2 / 2, i3 = t3.color, o2 = t3.textStrokeColor, h3 = t3.textStrokeWidth;
        let d3, f3 = k2;
        if (r2 ? (M2 = S2, "inner" === k2 && (f3 = x2 === _2 - 1 ? this.options.reverse ? "left" : "right" : 0 === x2 ? this.options.reverse ? "right" : "left" : "center"), O2 = "top" === s2 ? "near" === c2 || 0 !== m2 ? -C2 * D2 + D2 / 2 : "center" === c2 ? -T2.highest.height / 2 - e3 * D2 + D2 : -T2.highest.height + D2 / 2 : "near" === c2 || 0 !== m2 ? D2 / 2 : "center" === c2 ? T2.highest.height / 2 - e3 * D2 : T2.highest.height - C2 * D2, u2 && (O2 *= -1), 0 === m2 || t3.showLabelBackdrop || (M2 += D2 / 2 * Math.sin(m2))) : (w2 = S2, O2 = (1 - C2) * D2 / 2), t3.showLabelBackdrop) {
          const e4 = Mi(t3.backdropPadding), i4 = T2.heights[x2], s3 = T2.widths[x2];
          let n2 = O2 - e4.top, o3 = 0 - e4.left;
          switch (A2) {
            case "middle":
              n2 -= i4 / 2;
              break;
            case "bottom":
              n2 -= i4;
          }
          switch (k2) {
            case "center":
              o3 -= s3 / 2;
              break;
            case "right":
              o3 -= s3;
          }
          d3 = { left: o3, top: n2, width: s3 + e4.width, height: i4 + e4.height, color: t3.backdropColor };
        }
        b2.push({ label: v2, font: P2, textOffset: O2, options: { rotation: m2, color: i3, strokeColor: o2, strokeWidth: h3, textAlign: f3, textBaseline: A2, translation: [M2, w2], backdrop: d3 } });
      }
      return b2;
    }
    _getXAxisLabelAlignment() {
      const { position: t2, ticks: e2 } = this.options;
      if (-$(this.labelRotation))
        return "top" === t2 ? "left" : "right";
      let i2 = "center";
      return "start" === e2.align ? i2 = "left" : "end" === e2.align ? i2 = "right" : "inner" === e2.align && (i2 = "inner"), i2;
    }
    _getYAxisLabelAlignment(t2) {
      const { position: e2, ticks: { crossAlign: i2, mirror: s2, padding: n2 } } = this.options, o2 = t2 + n2, a2 = this._getLabelSizes().widest.width;
      let r2, l2;
      return "left" === e2 ? s2 ? (l2 = this.right + n2, "near" === i2 ? r2 = "left" : "center" === i2 ? (r2 = "center", l2 += a2 / 2) : (r2 = "right", l2 += a2)) : (l2 = this.right - o2, "near" === i2 ? r2 = "right" : "center" === i2 ? (r2 = "center", l2 -= a2 / 2) : (r2 = "left", l2 = this.left)) : "right" === e2 ? s2 ? (l2 = this.left + n2, "near" === i2 ? r2 = "right" : "center" === i2 ? (r2 = "center", l2 -= a2 / 2) : (r2 = "left", l2 -= a2)) : (l2 = this.left + o2, "near" === i2 ? r2 = "left" : "center" === i2 ? (r2 = "center", l2 += a2 / 2) : (r2 = "right", l2 = this.right)) : r2 = "right", { textAlign: r2, x: l2 };
    }
    _computeLabelArea() {
      if (this.options.ticks.mirror)
        return;
      const t2 = this.chart, e2 = this.options.position;
      return "left" === e2 || "right" === e2 ? { top: 0, left: this.left, bottom: t2.height, right: this.right } : "top" === e2 || "bottom" === e2 ? { top: this.top, left: 0, bottom: this.bottom, right: t2.width } : void 0;
    }
    drawBackground() {
      const { ctx: t2, options: { backgroundColor: e2 }, left: i2, top: s2, width: n2, height: o2 } = this;
      e2 && (t2.save(), t2.fillStyle = e2, t2.fillRect(i2, s2, n2, o2), t2.restore());
    }
    getLineWidthForValue(t2) {
      const e2 = this.options.grid;
      if (!this._isVisible() || !e2.display)
        return 0;
      const i2 = this.ticks.findIndex((e3) => e3.value === t2);
      if (i2 >= 0) {
        return e2.setContext(this.getContext(i2)).lineWidth;
      }
      return 0;
    }
    drawGrid(t2) {
      const e2 = this.options.grid, i2 = this.ctx, s2 = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t2));
      let n2, o2;
      const a2 = (t3, e3, s3) => {
        s3.width && s3.color && (i2.save(), i2.lineWidth = s3.width, i2.strokeStyle = s3.color, i2.setLineDash(s3.borderDash || []), i2.lineDashOffset = s3.borderDashOffset, i2.beginPath(), i2.moveTo(t3.x, t3.y), i2.lineTo(e3.x, e3.y), i2.stroke(), i2.restore());
      };
      if (e2.display)
        for (n2 = 0, o2 = s2.length; n2 < o2; ++n2) {
          const t3 = s2[n2];
          e2.drawOnChartArea && a2({ x: t3.x1, y: t3.y1 }, { x: t3.x2, y: t3.y2 }, t3), e2.drawTicks && a2({ x: t3.tx1, y: t3.ty1 }, { x: t3.tx2, y: t3.ty2 }, { color: t3.tickColor, width: t3.tickWidth, borderDash: t3.tickBorderDash, borderDashOffset: t3.tickBorderDashOffset });
        }
    }
    drawBorder() {
      const { chart: t2, ctx: e2, options: { border: i2, grid: s2 } } = this, n2 = i2.setContext(this.getContext()), o2 = i2.display ? n2.width : 0;
      if (!o2)
        return;
      const a2 = s2.setContext(this.getContext(0)).lineWidth, r2 = this._borderValue;
      let l2, h2, c2, d2;
      this.isHorizontal() ? (l2 = Oe(t2, this.left, o2) - o2 / 2, h2 = Oe(t2, this.right, a2) + a2 / 2, c2 = d2 = r2) : (c2 = Oe(t2, this.top, o2) - o2 / 2, d2 = Oe(t2, this.bottom, a2) + a2 / 2, l2 = h2 = r2), e2.save(), e2.lineWidth = n2.width, e2.strokeStyle = n2.color, e2.beginPath(), e2.moveTo(l2, c2), e2.lineTo(h2, d2), e2.stroke(), e2.restore();
    }
    drawLabels(t2) {
      if (!this.options.ticks.display)
        return;
      const e2 = this.ctx, i2 = this._computeLabelArea();
      i2 && Re(e2, i2);
      const s2 = this.getLabelItems(t2);
      for (const t3 of s2) {
        const i3 = t3.options, s3 = t3.font;
        Ve(e2, t3.label, 0, t3.textOffset, s3, i3);
      }
      i2 && Ie(e2);
    }
    drawTitle() {
      const { ctx: t2, options: { position: e2, title: i2, reverse: s2 } } = this;
      if (!i2.display)
        return;
      const a2 = wi(i2.font), r2 = Mi(i2.padding), l2 = i2.align;
      let h2 = a2.lineHeight / 2;
      "bottom" === e2 || "center" === e2 || o(e2) ? (h2 += r2.bottom, n(i2.text) && (h2 += a2.lineHeight * (i2.text.length - 1))) : h2 += r2.top;
      const { titleX: c2, titleY: d2, maxWidth: u2, rotation: f2 } = function(t3, e3, i3, s3) {
        const { top: n2, left: a3, bottom: r3, right: l3, chart: h3 } = t3, { chartArea: c3, scales: d3 } = h3;
        let u3, f3, g2, p2 = 0;
        const m2 = r3 - n2, b2 = l3 - a3;
        if (t3.isHorizontal()) {
          if (f3 = ft(s3, a3, l3), o(i3)) {
            const t4 = Object.keys(i3)[0], s4 = i3[t4];
            g2 = d3[t4].getPixelForValue(s4) + m2 - e3;
          } else
            g2 = "center" === i3 ? (c3.bottom + c3.top) / 2 + m2 - e3 : Hs(t3, i3, e3);
          u3 = l3 - a3;
        } else {
          if (o(i3)) {
            const t4 = Object.keys(i3)[0], s4 = i3[t4];
            f3 = d3[t4].getPixelForValue(s4) - b2 + e3;
          } else
            f3 = "center" === i3 ? (c3.left + c3.right) / 2 - b2 + e3 : Hs(t3, i3, e3);
          g2 = ft(s3, r3, n2), p2 = "left" === i3 ? -E : E;
        }
        return { titleX: f3, titleY: g2, maxWidth: u3, rotation: p2 };
      }(this, h2, e2, l2);
      Ve(t2, i2.text, 0, 0, a2, { color: i2.color, maxWidth: u2, rotation: f2, textAlign: Xs(l2, e2, s2), textBaseline: "middle", translation: [c2, d2] });
    }
    draw(t2) {
      this._isVisible() && (this.drawBackground(), this.drawGrid(t2), this.drawBorder(), this.drawTitle(), this.drawLabels(t2));
    }
    _layers() {
      const t2 = this.options, e2 = t2.ticks && t2.ticks.z || 0, i2 = l(t2.grid && t2.grid.z, -1), s2 = l(t2.border && t2.border.z, 0);
      return this._isVisible() && this.draw === qs.prototype.draw ? [{ z: i2, draw: (t3) => {
        this.drawBackground(), this.drawGrid(t3), this.drawTitle();
      } }, { z: s2, draw: () => {
        this.drawBorder();
      } }, { z: e2, draw: (t3) => {
        this.drawLabels(t3);
      } }] : [{ z: e2, draw: (t3) => {
        this.draw(t3);
      } }];
    }
    getMatchingVisibleMetas(t2) {
      const e2 = this.chart.getSortedVisibleDatasetMetas(), i2 = this.axis + "AxisID", s2 = [];
      let n2, o2;
      for (n2 = 0, o2 = e2.length; n2 < o2; ++n2) {
        const o3 = e2[n2];
        o3[i2] !== this.id || t2 && o3.type !== t2 || s2.push(o3);
      }
      return s2;
    }
    _resolveTickFontOptions(t2) {
      return wi(this.options.ticks.setContext(this.getContext(t2)).font);
    }
    _maxDigits() {
      const t2 = this._resolveTickFontOptions(0).lineHeight;
      return (this.isHorizontal() ? this.width : this.height) / t2;
    }
  }
  class Ks {
    constructor(t2, e2, i2) {
      this.type = t2, this.scope = e2, this.override = i2, this.items = /* @__PURE__ */ Object.create(null);
    }
    isForType(t2) {
      return Object.prototype.isPrototypeOf.call(this.type.prototype, t2.prototype);
    }
    register(t2) {
      const e2 = Object.getPrototypeOf(t2);
      let i2;
      (function(t3) {
        return "id" in t3 && "defaults" in t3;
      })(e2) && (i2 = this.register(e2));
      const s2 = this.items, n2 = t2.id, o2 = this.scope + "." + n2;
      if (!n2)
        throw new Error("class does not have id: " + t2);
      return n2 in s2 || (s2[n2] = t2, function(t3, e3, i3) {
        const s3 = b(/* @__PURE__ */ Object.create(null), [i3 ? ue.get(i3) : {}, ue.get(e3), t3.defaults]);
        ue.set(e3, s3), t3.defaultRoutes && function(t4, e4) {
          Object.keys(e4).forEach((i4) => {
            const s4 = i4.split("."), n3 = s4.pop(), o3 = [t4].concat(s4).join("."), a2 = e4[i4].split("."), r2 = a2.pop(), l2 = a2.join(".");
            ue.route(o3, n3, l2, r2);
          });
        }(e3, t3.defaultRoutes);
        t3.descriptors && ue.describe(e3, t3.descriptors);
      }(t2, o2, i2), this.override && ue.override(t2.id, t2.overrides)), o2;
    }
    get(t2) {
      return this.items[t2];
    }
    unregister(t2) {
      const e2 = this.items, i2 = t2.id, s2 = this.scope;
      i2 in e2 && delete e2[i2], s2 && i2 in ue[s2] && (delete ue[s2][i2], this.override && delete re[i2]);
    }
  }
  class Gs {
    constructor() {
      this.controllers = new Ks(Vs, "datasets", true), this.elements = new Ks(Bs, "elements"), this.plugins = new Ks(Object, "plugins"), this.scales = new Ks(qs, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements];
    }
    add(...t2) {
      this._each("register", t2);
    }
    remove(...t2) {
      this._each("unregister", t2);
    }
    addControllers(...t2) {
      this._each("register", t2, this.controllers);
    }
    addElements(...t2) {
      this._each("register", t2, this.elements);
    }
    addPlugins(...t2) {
      this._each("register", t2, this.plugins);
    }
    addScales(...t2) {
      this._each("register", t2, this.scales);
    }
    getController(t2) {
      return this._get(t2, this.controllers, "controller");
    }
    getElement(t2) {
      return this._get(t2, this.elements, "element");
    }
    getPlugin(t2) {
      return this._get(t2, this.plugins, "plugin");
    }
    getScale(t2) {
      return this._get(t2, this.scales, "scale");
    }
    removeControllers(...t2) {
      this._each("unregister", t2, this.controllers);
    }
    removeElements(...t2) {
      this._each("unregister", t2, this.elements);
    }
    removePlugins(...t2) {
      this._each("unregister", t2, this.plugins);
    }
    removeScales(...t2) {
      this._each("unregister", t2, this.scales);
    }
    _each(t2, e2, i2) {
      [...e2].forEach((e3) => {
        const s2 = i2 || this._getRegistryForType(e3);
        i2 || s2.isForType(e3) || s2 === this.plugins && e3.id ? this._exec(t2, s2, e3) : u(e3, (e4) => {
          const s3 = i2 || this._getRegistryForType(e4);
          this._exec(t2, s3, e4);
        });
      });
    }
    _exec(t2, e2, i2) {
      const s2 = w(t2);
      d(i2["before" + s2], [], i2), e2[t2](i2), d(i2["after" + s2], [], i2);
    }
    _getRegistryForType(t2) {
      for (let e2 = 0; e2 < this._typedRegistries.length; e2++) {
        const i2 = this._typedRegistries[e2];
        if (i2.isForType(t2))
          return i2;
      }
      return this.plugins;
    }
    _get(t2, e2, i2) {
      const s2 = e2.get(t2);
      if (void 0 === s2)
        throw new Error('"' + t2 + '" is not a registered ' + i2 + ".");
      return s2;
    }
  }
  var Zs = new Gs();
  class Js {
    constructor() {
      this._init = [];
    }
    notify(t2, e2, i2, s2) {
      "beforeInit" === e2 && (this._init = this._createDescriptors(t2, true), this._notify(this._init, t2, "install"));
      const n2 = s2 ? this._descriptors(t2).filter(s2) : this._descriptors(t2), o2 = this._notify(n2, t2, e2, i2);
      return "afterDestroy" === e2 && (this._notify(n2, t2, "stop"), this._notify(this._init, t2, "uninstall")), o2;
    }
    _notify(t2, e2, i2, s2) {
      s2 = s2 || {};
      for (const n2 of t2) {
        const t3 = n2.plugin;
        if (false === d(t3[i2], [e2, s2, n2.options], t3) && s2.cancelable)
          return false;
      }
      return true;
    }
    invalidate() {
      s(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
    }
    _descriptors(t2) {
      if (this._cache)
        return this._cache;
      const e2 = this._cache = this._createDescriptors(t2);
      return this._notifyStateChanges(t2), e2;
    }
    _createDescriptors(t2, e2) {
      const i2 = t2 && t2.config, s2 = l(i2.options && i2.options.plugins, {}), n2 = function(t3) {
        const e3 = {}, i3 = [], s3 = Object.keys(Zs.plugins.items);
        for (let t4 = 0; t4 < s3.length; t4++)
          i3.push(Zs.getPlugin(s3[t4]));
        const n3 = t3.plugins || [];
        for (let t4 = 0; t4 < n3.length; t4++) {
          const s4 = n3[t4];
          -1 === i3.indexOf(s4) && (i3.push(s4), e3[s4.id] = true);
        }
        return { plugins: i3, localIds: e3 };
      }(i2);
      return false !== s2 || e2 ? function(t3, { plugins: e3, localIds: i3 }, s3, n3) {
        const o2 = [], a2 = t3.getContext();
        for (const r2 of e3) {
          const e4 = r2.id, l2 = Qs(s3[e4], n3);
          null !== l2 && o2.push({ plugin: r2, options: tn(t3.config, { plugin: r2, local: i3[e4] }, l2, a2) });
        }
        return o2;
      }(t2, n2, s2, e2) : [];
    }
    _notifyStateChanges(t2) {
      const e2 = this._oldCache || [], i2 = this._cache, s2 = (t3, e3) => t3.filter((t4) => !e3.some((e4) => t4.plugin.id === e4.plugin.id));
      this._notify(s2(e2, i2), t2, "stop"), this._notify(s2(i2, e2), t2, "start");
    }
  }
  function Qs(t2, e2) {
    return e2 || false !== t2 ? true === t2 ? {} : t2 : null;
  }
  function tn(t2, { plugin: e2, local: i2 }, s2, n2) {
    const o2 = t2.pluginScopeKeys(e2), a2 = t2.getOptionScopes(s2, o2);
    return i2 && e2.defaults && a2.push(e2.defaults), t2.createResolver(a2, n2, [""], { scriptable: false, indexable: false, allKeys: true });
  }
  function en(t2, e2) {
    const i2 = ue.datasets[t2] || {};
    return ((e2.datasets || {})[t2] || {}).indexAxis || e2.indexAxis || i2.indexAxis || "x";
  }
  function sn(t2, e2) {
    if ("x" === t2 || "y" === t2 || "r" === t2)
      return t2;
    var i2;
    if (t2 = e2.axis || ("top" === (i2 = e2.position) || "bottom" === i2 ? "x" : "left" === i2 || "right" === i2 ? "y" : void 0) || t2.length > 1 && sn(t2[0].toLowerCase(), e2))
      return t2;
    throw new Error(`Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`);
  }
  function nn(t2) {
    const e2 = t2.options || (t2.options = {});
    e2.plugins = l(e2.plugins, {}), e2.scales = function(t3, e3) {
      const i2 = re[t3.type] || { scales: {} }, s2 = e3.scales || {}, n2 = en(t3.type, e3), a2 = /* @__PURE__ */ Object.create(null);
      return Object.keys(s2).forEach((t4) => {
        const e4 = s2[t4];
        if (!o(e4))
          return console.error(`Invalid scale configuration for scale: ${t4}`);
        if (e4._proxy)
          return console.warn(`Ignoring resolver passed as options for scale: ${t4}`);
        const r2 = sn(t4, e4), l2 = function(t5, e5) {
          return t5 === e5 ? "_index_" : "_value_";
        }(r2, n2), h2 = i2.scales || {};
        a2[t4] = x(/* @__PURE__ */ Object.create(null), [{ axis: r2 }, e4, h2[r2], h2[l2]]);
      }), t3.data.datasets.forEach((i3) => {
        const n3 = i3.type || t3.type, o2 = i3.indexAxis || en(n3, e3), r2 = (re[n3] || {}).scales || {};
        Object.keys(r2).forEach((t4) => {
          const e4 = function(t5, e5) {
            let i4 = t5;
            return "_index_" === t5 ? i4 = e5 : "_value_" === t5 && (i4 = "x" === e5 ? "y" : "x"), i4;
          }(t4, o2), n4 = i3[e4 + "AxisID"] || e4;
          a2[n4] = a2[n4] || /* @__PURE__ */ Object.create(null), x(a2[n4], [{ axis: e4 }, s2[n4], r2[t4]]);
        });
      }), Object.keys(a2).forEach((t4) => {
        const e4 = a2[t4];
        x(e4, [ue.scales[e4.type], ue.scale]);
      }), a2;
    }(t2, e2);
  }
  function on(t2) {
    return (t2 = t2 || {}).datasets = t2.datasets || [], t2.labels = t2.labels || [], t2;
  }
  const an = /* @__PURE__ */ new Map(), rn = /* @__PURE__ */ new Set();
  function ln(t2, e2) {
    let i2 = an.get(t2);
    return i2 || (i2 = e2(), an.set(t2, i2), rn.add(i2)), i2;
  }
  const hn = (t2, e2, i2) => {
    const s2 = M(e2, i2);
    void 0 !== s2 && t2.add(s2);
  };
  class cn {
    constructor(t2) {
      this._config = function(t3) {
        return (t3 = t3 || {}).data = on(t3.data), nn(t3), t3;
      }(t2), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
    }
    get platform() {
      return this._config.platform;
    }
    get type() {
      return this._config.type;
    }
    set type(t2) {
      this._config.type = t2;
    }
    get data() {
      return this._config.data;
    }
    set data(t2) {
      this._config.data = on(t2);
    }
    get options() {
      return this._config.options;
    }
    set options(t2) {
      this._config.options = t2;
    }
    get plugins() {
      return this._config.plugins;
    }
    update() {
      const t2 = this._config;
      this.clearCache(), nn(t2);
    }
    clearCache() {
      this._scopeCache.clear(), this._resolverCache.clear();
    }
    datasetScopeKeys(t2) {
      return ln(t2, () => [[`datasets.${t2}`, ""]]);
    }
    datasetAnimationScopeKeys(t2, e2) {
      return ln(`${t2}.transition.${e2}`, () => [[`datasets.${t2}.transitions.${e2}`, `transitions.${e2}`], [`datasets.${t2}`, ""]]);
    }
    datasetElementScopeKeys(t2, e2) {
      return ln(`${t2}-${e2}`, () => [[`datasets.${t2}.elements.${e2}`, `datasets.${t2}`, `elements.${e2}`, ""]]);
    }
    pluginScopeKeys(t2) {
      const e2 = t2.id;
      return ln(`${this.type}-plugin-${e2}`, () => [[`plugins.${e2}`, ...t2.additionalOptionScopes || []]]);
    }
    _cachedScopes(t2, e2) {
      const i2 = this._scopeCache;
      let s2 = i2.get(t2);
      return s2 && !e2 || (s2 = /* @__PURE__ */ new Map(), i2.set(t2, s2)), s2;
    }
    getOptionScopes(t2, e2, i2) {
      const { options: s2, type: n2 } = this, o2 = this._cachedScopes(t2, i2), a2 = o2.get(e2);
      if (a2)
        return a2;
      const r2 = /* @__PURE__ */ new Set();
      e2.forEach((e3) => {
        t2 && (r2.add(t2), e3.forEach((e4) => hn(r2, t2, e4))), e3.forEach((t3) => hn(r2, s2, t3)), e3.forEach((t3) => hn(r2, re[n2] || {}, t3)), e3.forEach((t3) => hn(r2, ue, t3)), e3.forEach((t3) => hn(r2, le, t3));
      });
      const l2 = Array.from(r2);
      return 0 === l2.length && l2.push(/* @__PURE__ */ Object.create(null)), rn.has(e2) && o2.set(e2, l2), l2;
    }
    chartOptionScopes() {
      const { options: t2, type: e2 } = this;
      return [t2, re[e2] || {}, ue.datasets[e2] || {}, { type: e2 }, ue, le];
    }
    resolveNamedOptions(t2, e2, i2, s2 = [""]) {
      const o2 = { $shared: true }, { resolver: a2, subPrefixes: r2 } = dn(this._resolverCache, t2, s2);
      let l2 = a2;
      if (function(t3, e3) {
        const { isScriptable: i3, isIndexable: s3 } = $e(t3);
        for (const o3 of e3) {
          const e4 = i3(o3), a3 = s3(o3), r3 = (a3 || e4) && t3[o3];
          if (e4 && (S(r3) || un(r3)) || a3 && n(r3))
            return true;
        }
        return false;
      }(a2, e2)) {
        o2.$shared = false;
        l2 = je(a2, i2 = S(i2) ? i2() : i2, this.createResolver(t2, i2, r2));
      }
      for (const t3 of e2)
        o2[t3] = l2[t3];
      return o2;
    }
    createResolver(t2, e2, i2 = [""], s2) {
      const { resolver: n2 } = dn(this._resolverCache, t2, i2);
      return o(e2) ? je(n2, e2, void 0, s2) : n2;
    }
  }
  function dn(t2, e2, i2) {
    let s2 = t2.get(e2);
    s2 || (s2 = /* @__PURE__ */ new Map(), t2.set(e2, s2));
    const n2 = i2.join();
    let o2 = s2.get(n2);
    if (!o2) {
      o2 = { resolver: He(e2, i2), subPrefixes: i2.filter((t3) => !t3.toLowerCase().includes("hover")) }, s2.set(n2, o2);
    }
    return o2;
  }
  const un = (t2) => o(t2) && Object.getOwnPropertyNames(t2).reduce((e2, i2) => e2 || S(t2[i2]), false);
  const fn = ["top", "bottom", "left", "right", "chartArea"];
  function gn(t2, e2) {
    return "top" === t2 || "bottom" === t2 || -1 === fn.indexOf(t2) && "x" === e2;
  }
  function pn(t2, e2) {
    return function(i2, s2) {
      return i2[t2] === s2[t2] ? i2[e2] - s2[e2] : i2[t2] - s2[t2];
    };
  }
  function mn(t2) {
    const e2 = t2.chart, i2 = e2.options.animation;
    e2.notifyPlugins("afterRender"), d(i2 && i2.onComplete, [t2], e2);
  }
  function bn(t2) {
    const e2 = t2.chart, i2 = e2.options.animation;
    d(i2 && i2.onProgress, [t2], e2);
  }
  function xn(t2) {
    return fe() && "string" == typeof t2 ? t2 = document.getElementById(t2) : t2 && t2.length && (t2 = t2[0]), t2 && t2.canvas && (t2 = t2.canvas), t2;
  }
  const _n = {}, yn = (t2) => {
    const e2 = xn(t2);
    return Object.values(_n).filter((t3) => t3.canvas === e2).pop();
  };
  function vn(t2, e2, i2) {
    const s2 = Object.keys(t2);
    for (const n2 of s2) {
      const s3 = +n2;
      if (s3 >= e2) {
        const o2 = t2[n2];
        delete t2[n2], (i2 > 0 || s3 > e2) && (t2[s3 + i2] = o2);
      }
    }
  }
  class Mn {
    static register(...t2) {
      Zs.add(...t2), wn();
    }
    static unregister(...t2) {
      Zs.remove(...t2), wn();
    }
    constructor(t2, e2) {
      const s2 = this.config = new cn(e2), n2 = xn(t2), o2 = yn(n2);
      if (o2)
        throw new Error("Canvas is already in use. Chart with ID '" + o2.id + "' must be destroyed before the canvas with ID '" + o2.canvas.id + "' can be reused.");
      const a2 = s2.createResolver(s2.chartOptionScopes(), this.getContext());
      this.platform = new (s2.platform || vs(n2))(), this.platform.updateConfig(s2);
      const r2 = this.platform.acquireContext(n2, a2.aspectRatio), l2 = r2 && r2.canvas, h2 = l2 && l2.height, c2 = l2 && l2.width;
      this.id = i(), this.ctx = r2, this.canvas = l2, this.width = c2, this.height = h2, this._options = a2, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Js(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = false, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = dt((t3) => this.update(t3), a2.resizeDelay || 0), this._dataChanges = [], _n[this.id] = this, r2 && l2 ? (xt.listen(this, "complete", mn), xt.listen(this, "progress", bn), this._initialize(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item");
    }
    get aspectRatio() {
      const { options: { aspectRatio: t2, maintainAspectRatio: e2 }, width: i2, height: n2, _aspectRatio: o2 } = this;
      return s(t2) ? e2 && o2 ? o2 : n2 ? i2 / n2 : null : t2;
    }
    get data() {
      return this.config.data;
    }
    set data(t2) {
      this.config.data = t2;
    }
    get options() {
      return this._options;
    }
    set options(t2) {
      this.config.options = t2;
    }
    get registry() {
      return Zs;
    }
    _initialize() {
      return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : we(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
    }
    clear() {
      return Ae(this.canvas, this.ctx), this;
    }
    stop() {
      return xt.stop(this), this;
    }
    resize(t2, e2) {
      xt.running(this) ? this._resizeBeforeDraw = { width: t2, height: e2 } : this._resize(t2, e2);
    }
    _resize(t2, e2) {
      const i2 = this.options, s2 = this.canvas, n2 = i2.maintainAspectRatio && this.aspectRatio, o2 = this.platform.getMaximumSize(s2, t2, e2, n2), a2 = i2.devicePixelRatio || this.platform.getDevicePixelRatio(), r2 = this.width ? "resize" : "attach";
      this.width = o2.width, this.height = o2.height, this._aspectRatio = this.aspectRatio, we(this, a2, true) && (this.notifyPlugins("resize", { size: o2 }), d(i2.onResize, [this, o2], this), this.attached && this._doResize(r2) && this.render());
    }
    ensureScalesHaveIDs() {
      u(this.options.scales || {}, (t2, e2) => {
        t2.id = e2;
      });
    }
    buildOrUpdateScales() {
      const t2 = this.options, e2 = t2.scales, i2 = this.scales, s2 = Object.keys(i2).reduce((t3, e3) => (t3[e3] = false, t3), {});
      let n2 = [];
      e2 && (n2 = n2.concat(Object.keys(e2).map((t3) => {
        const i3 = e2[t3], s3 = sn(t3, i3), n3 = "r" === s3, o2 = "x" === s3;
        return { options: i3, dposition: n3 ? "chartArea" : o2 ? "bottom" : "left", dtype: n3 ? "radialLinear" : o2 ? "category" : "linear" };
      }))), u(n2, (e3) => {
        const n3 = e3.options, o2 = n3.id, a2 = sn(o2, n3), r2 = l(n3.type, e3.dtype);
        void 0 !== n3.position && gn(n3.position, a2) === gn(e3.dposition) || (n3.position = e3.dposition), s2[o2] = true;
        let h2 = null;
        if (o2 in i2 && i2[o2].type === r2)
          h2 = i2[o2];
        else {
          h2 = new (Zs.getScale(r2))({ id: o2, type: r2, ctx: this.ctx, chart: this }), i2[h2.id] = h2;
        }
        h2.init(n3, t2);
      }), u(s2, (t3, e3) => {
        t3 || delete i2[e3];
      }), u(i2, (t3) => {
        ns.configure(this, t3, t3.options), ns.addBox(this, t3);
      });
    }
    _updateMetasets() {
      const t2 = this._metasets, e2 = this.data.datasets.length, i2 = t2.length;
      if (t2.sort((t3, e3) => t3.index - e3.index), i2 > e2) {
        for (let t3 = e2; t3 < i2; ++t3)
          this._destroyDatasetMeta(t3);
        t2.splice(e2, i2 - e2);
      }
      this._sortedMetasets = t2.slice(0).sort(pn("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const { _metasets: t2, data: { datasets: e2 } } = this;
      t2.length > e2.length && delete this._stacks, t2.forEach((t3, i2) => {
        0 === e2.filter((e3) => e3 === t3._dataset).length && this._destroyDatasetMeta(i2);
      });
    }
    buildOrUpdateControllers() {
      const t2 = [], e2 = this.data.datasets;
      let i2, s2;
      for (this._removeUnreferencedMetasets(), i2 = 0, s2 = e2.length; i2 < s2; i2++) {
        const s3 = e2[i2];
        let n2 = this.getDatasetMeta(i2);
        const o2 = s3.type || this.config.type;
        if (n2.type && n2.type !== o2 && (this._destroyDatasetMeta(i2), n2 = this.getDatasetMeta(i2)), n2.type = o2, n2.indexAxis = s3.indexAxis || en(o2, this.options), n2.order = s3.order || 0, n2.index = i2, n2.label = "" + s3.label, n2.visible = this.isDatasetVisible(i2), n2.controller)
          n2.controller.updateIndex(i2), n2.controller.linkScales();
        else {
          const e3 = Zs.getController(o2), { datasetElementType: s4, dataElementType: a2 } = ue.datasets[o2];
          Object.assign(e3, { dataElementType: Zs.getElement(a2), datasetElementType: s4 && Zs.getElement(s4) }), n2.controller = new e3(this, i2), t2.push(n2.controller);
        }
      }
      return this._updateMetasets(), t2;
    }
    _resetElements() {
      u(this.data.datasets, (t2, e2) => {
        this.getDatasetMeta(e2).controller.reset();
      }, this);
    }
    reset() {
      this._resetElements(), this.notifyPlugins("reset");
    }
    update(t2) {
      const e2 = this.config;
      e2.update();
      const i2 = this._options = e2.createResolver(e2.chartOptionScopes(), this.getContext()), s2 = this._animationsDisabled = !i2.animation;
      if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), false === this.notifyPlugins("beforeUpdate", { mode: t2, cancelable: true }))
        return;
      const n2 = this.buildOrUpdateControllers();
      this.notifyPlugins("beforeElementsUpdate");
      let o2 = 0;
      for (let t3 = 0, e3 = this.data.datasets.length; t3 < e3; t3++) {
        const { controller: e4 } = this.getDatasetMeta(t3), i3 = !s2 && -1 === n2.indexOf(e4);
        e4.buildOrUpdateElements(i3), o2 = Math.max(+e4.getMaxOverflow(), o2);
      }
      o2 = this._minPadding = i2.layout.autoPadding ? o2 : 0, this._updateLayout(o2), s2 || u(n2, (t3) => {
        t3.reset();
      }), this._updateDatasets(t2), this.notifyPlugins("afterUpdate", { mode: t2 }), this._layers.sort(pn("z", "_idx"));
      const { _active: a2, _lastEvent: r2 } = this;
      r2 ? this._eventHandler(r2, true) : a2.length && this._updateHoverStyles(a2, a2, true), this.render();
    }
    _updateScales() {
      u(this.scales, (t2) => {
        ns.removeBox(this, t2);
      }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const t2 = this.options, e2 = new Set(Object.keys(this._listeners)), i2 = new Set(t2.events);
      P(e2, i2) && !!this._responsiveListeners === t2.responsive || (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: t2 } = this, e2 = this._getUniformDataChanges() || [];
      for (const { method: i2, start: s2, count: n2 } of e2) {
        vn(t2, s2, "_removeElements" === i2 ? -n2 : n2);
      }
    }
    _getUniformDataChanges() {
      const t2 = this._dataChanges;
      if (!t2 || !t2.length)
        return;
      this._dataChanges = [];
      const e2 = this.data.datasets.length, i2 = (e3) => new Set(t2.filter((t3) => t3[0] === e3).map((t3, e4) => e4 + "," + t3.splice(1).join(","))), s2 = i2(0);
      for (let t3 = 1; t3 < e2; t3++)
        if (!P(s2, i2(t3)))
          return;
      return Array.from(s2).map((t3) => t3.split(",")).map((t3) => ({ method: t3[1], start: +t3[2], count: +t3[3] }));
    }
    _updateLayout(t2) {
      if (false === this.notifyPlugins("beforeLayout", { cancelable: true }))
        return;
      ns.update(this, this.width, this.height, t2);
      const e2 = this.chartArea, i2 = e2.width <= 0 || e2.height <= 0;
      this._layers = [], u(this.boxes, (t3) => {
        i2 && "chartArea" === t3.position || (t3.configure && t3.configure(), this._layers.push(...t3._layers()));
      }, this), this._layers.forEach((t3, e3) => {
        t3._idx = e3;
      }), this.notifyPlugins("afterLayout");
    }
    _updateDatasets(t2) {
      if (false !== this.notifyPlugins("beforeDatasetsUpdate", { mode: t2, cancelable: true })) {
        for (let t3 = 0, e2 = this.data.datasets.length; t3 < e2; ++t3)
          this.getDatasetMeta(t3).controller.configure();
        for (let e2 = 0, i2 = this.data.datasets.length; e2 < i2; ++e2)
          this._updateDataset(e2, S(t2) ? t2({ datasetIndex: e2 }) : t2);
        this.notifyPlugins("afterDatasetsUpdate", { mode: t2 });
      }
    }
    _updateDataset(t2, e2) {
      const i2 = this.getDatasetMeta(t2), s2 = { meta: i2, index: t2, mode: e2, cancelable: true };
      false !== this.notifyPlugins("beforeDatasetUpdate", s2) && (i2.controller._update(e2), s2.cancelable = false, this.notifyPlugins("afterDatasetUpdate", s2));
    }
    render() {
      false !== this.notifyPlugins("beforeRender", { cancelable: true }) && (xt.has(this) ? this.attached && !xt.running(this) && xt.start(this) : (this.draw(), mn({ chart: this })));
    }
    draw() {
      let t2;
      if (this._resizeBeforeDraw) {
        const { width: t3, height: e3 } = this._resizeBeforeDraw;
        this._resize(t3, e3), this._resizeBeforeDraw = null;
      }
      if (this.clear(), this.width <= 0 || this.height <= 0)
        return;
      if (false === this.notifyPlugins("beforeDraw", { cancelable: true }))
        return;
      const e2 = this._layers;
      for (t2 = 0; t2 < e2.length && e2[t2].z <= 0; ++t2)
        e2[t2].draw(this.chartArea);
      for (this._drawDatasets(); t2 < e2.length; ++t2)
        e2[t2].draw(this.chartArea);
      this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(t2) {
      const e2 = this._sortedMetasets, i2 = [];
      let s2, n2;
      for (s2 = 0, n2 = e2.length; s2 < n2; ++s2) {
        const n3 = e2[s2];
        t2 && !n3.visible || i2.push(n3);
      }
      return i2;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(true);
    }
    _drawDatasets() {
      if (false === this.notifyPlugins("beforeDatasetsDraw", { cancelable: true }))
        return;
      const t2 = this.getSortedVisibleDatasetMetas();
      for (let e2 = t2.length - 1; e2 >= 0; --e2)
        this._drawDataset(t2[e2]);
      this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(t2) {
      const e2 = this.ctx, i2 = t2._clip, s2 = !i2.disabled, n2 = function(t3) {
        const { xScale: e3, yScale: i3 } = t3;
        if (e3 && i3)
          return { left: e3.left, right: e3.right, top: i3.top, bottom: i3.bottom };
      }(t2) || this.chartArea, o2 = { meta: t2, index: t2.index, cancelable: true };
      false !== this.notifyPlugins("beforeDatasetDraw", o2) && (s2 && Re(e2, { left: false === i2.left ? 0 : n2.left - i2.left, right: false === i2.right ? this.width : n2.right + i2.right, top: false === i2.top ? 0 : n2.top - i2.top, bottom: false === i2.bottom ? this.height : n2.bottom + i2.bottom }), t2.controller.draw(), s2 && Ie(e2), o2.cancelable = false, this.notifyPlugins("afterDatasetDraw", o2));
    }
    isPointInArea(t2) {
      return Ee(t2, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(t2, e2, i2, s2) {
      const n2 = Yi.modes[e2];
      return "function" == typeof n2 ? n2(this, t2, i2, s2) : [];
    }
    getDatasetMeta(t2) {
      const e2 = this.data.datasets[t2], i2 = this._metasets;
      let s2 = i2.filter((t3) => t3 && t3._dataset === e2).pop();
      return s2 || (s2 = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null, order: e2 && e2.order || 0, index: t2, _dataset: e2, _parsed: [], _sorted: false }, i2.push(s2)), s2;
    }
    getContext() {
      return this.$context || (this.$context = Pi(null, { chart: this, type: "chart" }));
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(t2) {
      const e2 = this.data.datasets[t2];
      if (!e2)
        return false;
      const i2 = this.getDatasetMeta(t2);
      return "boolean" == typeof i2.hidden ? !i2.hidden : !e2.hidden;
    }
    setDatasetVisibility(t2, e2) {
      this.getDatasetMeta(t2).hidden = !e2;
    }
    toggleDataVisibility(t2) {
      this._hiddenIndices[t2] = !this._hiddenIndices[t2];
    }
    getDataVisibility(t2) {
      return !this._hiddenIndices[t2];
    }
    _updateVisibility(t2, e2, i2) {
      const s2 = i2 ? "show" : "hide", n2 = this.getDatasetMeta(t2), o2 = n2.controller._resolveAnimations(void 0, s2);
      k(e2) ? (n2.data[e2].hidden = !i2, this.update()) : (this.setDatasetVisibility(t2, i2), o2.update(n2, { visible: i2 }), this.update((e3) => e3.datasetIndex === t2 ? s2 : void 0));
    }
    hide(t2, e2) {
      this._updateVisibility(t2, e2, false);
    }
    show(t2, e2) {
      this._updateVisibility(t2, e2, true);
    }
    _destroyDatasetMeta(t2) {
      const e2 = this._metasets[t2];
      e2 && e2.controller && e2.controller._destroy(), delete this._metasets[t2];
    }
    _stop() {
      let t2, e2;
      for (this.stop(), xt.remove(this), t2 = 0, e2 = this.data.datasets.length; t2 < e2; ++t2)
        this._destroyDatasetMeta(t2);
    }
    destroy() {
      this.notifyPlugins("beforeDestroy");
      const { canvas: t2, ctx: e2 } = this;
      this._stop(), this.config.clearCache(), t2 && (this.unbindEvents(), Ae(t2, e2), this.platform.releaseContext(e2), this.canvas = null, this.ctx = null), delete _n[this.id], this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...t2) {
      return this.canvas.toDataURL(...t2);
    }
    bindEvents() {
      this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = true;
    }
    bindUserEvents() {
      const t2 = this._listeners, e2 = this.platform, i2 = (i3, s3) => {
        e2.addEventListener(this, i3, s3), t2[i3] = s3;
      }, s2 = (t3, e3, i3) => {
        t3.offsetX = e3, t3.offsetY = i3, this._eventHandler(t3);
      };
      u(this.options.events, (t3) => i2(t3, s2));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const t2 = this._responsiveListeners, e2 = this.platform, i2 = (i3, s3) => {
        e2.addEventListener(this, i3, s3), t2[i3] = s3;
      }, s2 = (i3, s3) => {
        t2[i3] && (e2.removeEventListener(this, i3, s3), delete t2[i3]);
      }, n2 = (t3, e3) => {
        this.canvas && this.resize(t3, e3);
      };
      let o2;
      const a2 = () => {
        s2("attach", a2), this.attached = true, this.resize(), i2("resize", n2), i2("detach", o2);
      };
      o2 = () => {
        this.attached = false, s2("resize", n2), this._stop(), this._resize(0, 0), i2("attach", a2);
      }, e2.isAttached(this.canvas) ? a2() : o2();
    }
    unbindEvents() {
      u(this._listeners, (t2, e2) => {
        this.platform.removeEventListener(this, e2, t2);
      }), this._listeners = {}, u(this._responsiveListeners, (t2, e2) => {
        this.platform.removeEventListener(this, e2, t2);
      }), this._responsiveListeners = void 0;
    }
    updateHoverStyle(t2, e2, i2) {
      const s2 = i2 ? "set" : "remove";
      let n2, o2, a2, r2;
      for ("dataset" === e2 && (n2 = this.getDatasetMeta(t2[0].datasetIndex), n2.controller["_" + s2 + "DatasetHoverStyle"]()), a2 = 0, r2 = t2.length; a2 < r2; ++a2) {
        o2 = t2[a2];
        const e3 = o2 && this.getDatasetMeta(o2.datasetIndex).controller;
        e3 && e3[s2 + "HoverStyle"](o2.element, o2.datasetIndex, o2.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t2) {
      const e2 = this._active || [], i2 = t2.map(({ datasetIndex: t3, index: e3 }) => {
        const i3 = this.getDatasetMeta(t3);
        if (!i3)
          throw new Error("No dataset found at index " + t3);
        return { datasetIndex: t3, element: i3.data[e3], index: e3 };
      });
      !f(i2, e2) && (this._active = i2, this._lastEvent = null, this._updateHoverStyles(i2, e2));
    }
    notifyPlugins(t2, e2, i2) {
      return this._plugins.notify(this, t2, e2, i2);
    }
    isPluginEnabled(t2) {
      return 1 === this._plugins._cache.filter((e2) => e2.plugin.id === t2).length;
    }
    _updateHoverStyles(t2, e2, i2) {
      const s2 = this.options.hover, n2 = (t3, e3) => t3.filter((t4) => !e3.some((e4) => t4.datasetIndex === e4.datasetIndex && t4.index === e4.index)), o2 = n2(e2, t2), a2 = i2 ? t2 : n2(t2, e2);
      o2.length && this.updateHoverStyle(o2, s2.mode, false), a2.length && s2.mode && this.updateHoverStyle(a2, s2.mode, true);
    }
    _eventHandler(t2, e2) {
      const i2 = { event: t2, replay: e2, cancelable: true, inChartArea: this.isPointInArea(t2) }, s2 = (e3) => (e3.options.events || this.options.events).includes(t2.native.type);
      if (false === this.notifyPlugins("beforeEvent", i2, s2))
        return;
      const n2 = this._handleEvent(t2, e2, i2.inChartArea);
      return i2.cancelable = false, this.notifyPlugins("afterEvent", i2, s2), (n2 || i2.changed) && this.render(), this;
    }
    _handleEvent(t2, e2, i2) {
      const { _active: s2 = [], options: n2 } = this, o2 = e2, a2 = this._getActiveElements(t2, s2, i2, o2), r2 = D(t2), l2 = function(t3, e3, i3, s3) {
        return i3 && "mouseout" !== t3.type ? s3 ? e3 : t3 : null;
      }(t2, this._lastEvent, i2, r2);
      i2 && (this._lastEvent = null, d(n2.onHover, [t2, a2, this], this), r2 && d(n2.onClick, [t2, a2, this], this));
      const h2 = !f(a2, s2);
      return (h2 || e2) && (this._active = a2, this._updateHoverStyles(a2, s2, e2)), this._lastEvent = l2, h2;
    }
    _getActiveElements(t2, e2, i2, s2) {
      if ("mouseout" === t2.type)
        return [];
      if (!i2)
        return e2;
      const n2 = this.options.hover;
      return this.getElementsAtEventForMode(t2, n2.mode, n2, s2);
    }
  }
  __publicField(Mn, "defaults", ue);
  __publicField(Mn, "instances", _n);
  __publicField(Mn, "overrides", re);
  __publicField(Mn, "registry", Zs);
  __publicField(Mn, "version", "4.1.1");
  __publicField(Mn, "getChart", yn);
  function wn() {
    return u(Mn.instances, (t2) => t2._plugins.invalidate());
  }
  function kn() {
    throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
  }
  class Sn {
    static override(t2) {
      Object.assign(Sn.prototype, t2);
    }
    constructor(t2) {
      this.options = t2 || {};
    }
    init() {
    }
    formats() {
      return kn();
    }
    parse() {
      return kn();
    }
    format() {
      return kn();
    }
    add() {
      return kn();
    }
    diff() {
      return kn();
    }
    startOf() {
      return kn();
    }
    endOf() {
      return kn();
    }
  }
  var Pn = { _date: Sn };
  function Dn(t2) {
    const e2 = t2.iScale, i2 = function(t3, e3) {
      if (!t3._cache.$bar) {
        const i3 = t3.getMatchingVisibleMetas(e3);
        let s3 = [];
        for (let e4 = 0, n3 = i3.length; e4 < n3; e4++)
          s3 = s3.concat(i3[e4].controller.getAllParsedValues(t3));
        t3._cache.$bar = lt(s3.sort((t4, e4) => t4 - e4));
      }
      return t3._cache.$bar;
    }(e2, t2.type);
    let s2, n2, o2, a2, r2 = e2._length;
    const l2 = () => {
      32767 !== o2 && -32768 !== o2 && (k(a2) && (r2 = Math.min(r2, Math.abs(o2 - a2) || r2)), a2 = o2);
    };
    for (s2 = 0, n2 = i2.length; s2 < n2; ++s2)
      o2 = e2.getPixelForValue(i2[s2]), l2();
    for (a2 = void 0, s2 = 0, n2 = e2.ticks.length; s2 < n2; ++s2)
      o2 = e2.getPixelForTick(s2), l2();
    return r2;
  }
  function Cn(t2, e2, i2, s2) {
    return n(t2) ? function(t3, e3, i3, s3) {
      const n2 = i3.parse(t3[0], s3), o2 = i3.parse(t3[1], s3), a2 = Math.min(n2, o2), r2 = Math.max(n2, o2);
      let l2 = a2, h2 = r2;
      Math.abs(a2) > Math.abs(r2) && (l2 = r2, h2 = a2), e3[i3.axis] = h2, e3._custom = { barStart: l2, barEnd: h2, start: n2, end: o2, min: a2, max: r2 };
    }(t2, e2, i2, s2) : e2[i2.axis] = i2.parse(t2, s2), e2;
  }
  function On(t2, e2, i2, s2) {
    const n2 = t2.iScale, o2 = t2.vScale, a2 = n2.getLabels(), r2 = n2 === o2, l2 = [];
    let h2, c2, d2, u2;
    for (h2 = i2, c2 = i2 + s2; h2 < c2; ++h2)
      u2 = e2[h2], d2 = {}, d2[n2.axis] = r2 || n2.parse(a2[h2], h2), l2.push(Cn(u2, d2, o2, h2));
    return l2;
  }
  function An(t2) {
    return t2 && void 0 !== t2.barStart && void 0 !== t2.barEnd;
  }
  function Tn(t2, e2, i2, s2) {
    let n2 = e2.borderSkipped;
    const o2 = {};
    if (!n2)
      return void (t2.borderSkipped = o2);
    if (true === n2)
      return void (t2.borderSkipped = { top: true, right: true, bottom: true, left: true });
    const { start: a2, end: r2, reverse: l2, top: h2, bottom: c2 } = function(t3) {
      let e3, i3, s3, n3, o3;
      return t3.horizontal ? (e3 = t3.base > t3.x, i3 = "left", s3 = "right") : (e3 = t3.base < t3.y, i3 = "bottom", s3 = "top"), e3 ? (n3 = "end", o3 = "start") : (n3 = "start", o3 = "end"), { start: i3, end: s3, reverse: e3, top: n3, bottom: o3 };
    }(t2);
    "middle" === n2 && i2 && (t2.enableBorderRadius = true, (i2._top || 0) === s2 ? n2 = h2 : (i2._bottom || 0) === s2 ? n2 = c2 : (o2[Ln(c2, a2, r2, l2)] = true, n2 = h2)), o2[Ln(n2, a2, r2, l2)] = true, t2.borderSkipped = o2;
  }
  function Ln(t2, e2, i2, s2) {
    var n2, o2, a2;
    return s2 ? (a2 = i2, t2 = En(t2 = (n2 = t2) === (o2 = e2) ? a2 : n2 === a2 ? o2 : n2, i2, e2)) : t2 = En(t2, e2, i2), t2;
  }
  function En(t2, e2, i2) {
    return "start" === t2 ? e2 : "end" === t2 ? i2 : t2;
  }
  function Rn(t2, { inflateAmount: e2 }, i2) {
    t2.inflateAmount = "auto" === e2 ? 1 === i2 ? 0.33 : 0 : e2;
  }
  class In extends Vs {
    constructor(t2, e2) {
      super(t2, e2), this.enableOptionSharing = true, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
    }
    linkScales() {
    }
    parse(t2, e2) {
      const i2 = this.getDataset().data, s2 = this._cachedMeta;
      if (false === this._parsing)
        s2._parsed = i2;
      else {
        let n2, a2, r2 = (t3) => +i2[t3];
        if (o(i2[t2])) {
          const { key: t3 = "value" } = this._parsing;
          r2 = (e3) => +M(i2[e3], t3);
        }
        for (n2 = t2, a2 = t2 + e2; n2 < a2; ++n2)
          s2._parsed[n2] = r2(n2);
      }
    }
    _getRotation() {
      return $(this.options.rotation - 90);
    }
    _getCircumference() {
      return $(this.options.circumference);
    }
    _getRotationExtents() {
      let t2 = O, e2 = -O;
      for (let i2 = 0; i2 < this.chart.data.datasets.length; ++i2)
        if (this.chart.isDatasetVisible(i2) && this.chart.getDatasetMeta(i2).type === this._type) {
          const s2 = this.chart.getDatasetMeta(i2).controller, n2 = s2._getRotation(), o2 = s2._getCircumference();
          t2 = Math.min(t2, n2), e2 = Math.max(e2, n2 + o2);
        }
      return { rotation: t2, circumference: e2 - t2 };
    }
    update(t2) {
      const e2 = this.chart, { chartArea: i2 } = e2, s2 = this._cachedMeta, n2 = s2.data, o2 = this.getMaxBorderWidth() + this.getMaxOffset(n2) + this.options.spacing, a2 = Math.max((Math.min(i2.width, i2.height) - o2) / 2, 0), r2 = Math.min(h(this.options.cutout, a2), 1), l2 = this._getRingWeight(this.index), { circumference: d2, rotation: u2 } = this._getRotationExtents(), { ratioX: f2, ratioY: g2, offsetX: p2, offsetY: m2 } = function(t3, e3, i3) {
        let s3 = 1, n3 = 1, o3 = 0, a3 = 0;
        if (e3 < O) {
          const r3 = t3, l3 = r3 + e3, h2 = Math.cos(r3), c2 = Math.sin(r3), d3 = Math.cos(l3), u3 = Math.sin(l3), f3 = (t4, e4, s4) => Z(t4, r3, l3, true) ? 1 : Math.max(e4, e4 * i3, s4, s4 * i3), g3 = (t4, e4, s4) => Z(t4, r3, l3, true) ? -1 : Math.min(e4, e4 * i3, s4, s4 * i3), p3 = f3(0, h2, d3), m3 = f3(E, c2, u3), b3 = g3(C, h2, d3), x3 = g3(C + E, c2, u3);
          s3 = (p3 - b3) / 2, n3 = (m3 - x3) / 2, o3 = -(p3 + b3) / 2, a3 = -(m3 + x3) / 2;
        }
        return { ratioX: s3, ratioY: n3, offsetX: o3, offsetY: a3 };
      }(u2, d2, r2), b2 = (i2.width - o2) / f2, x2 = (i2.height - o2) / g2, _2 = Math.max(Math.min(b2, x2) / 2, 0), y2 = c(this.options.radius, _2), v2 = (y2 - Math.max(y2 * r2, 0)) / this._getVisibleDatasetWeightTotal();
      this.offsetX = p2 * y2, this.offsetY = m2 * y2, s2.total = this.calculateTotal(), this.outerRadius = y2 - v2 * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - v2 * l2, 0), this.updateElements(n2, 0, n2.length, t2);
    }
    _circumference(t2, e2) {
      const i2 = this.options, s2 = this._cachedMeta, n2 = this._getCircumference();
      return e2 && i2.animation.animateRotate || !this.chart.getDataVisibility(t2) || null === s2._parsed[t2] || s2.data[t2].hidden ? 0 : this.calculateCircumference(s2._parsed[t2] * n2 / O);
    }
    updateElements(t2, e2, i2, s2) {
      const n2 = "reset" === s2, o2 = this.chart, a2 = o2.chartArea, r2 = o2.options.animation, l2 = (a2.left + a2.right) / 2, h2 = (a2.top + a2.bottom) / 2, c2 = n2 && r2.animateScale, d2 = c2 ? 0 : this.innerRadius, u2 = c2 ? 0 : this.outerRadius, { sharedOptions: f2, includeOptions: g2 } = this._getSharedOptions(e2, s2);
      let p2, m2 = this._getRotation();
      for (p2 = 0; p2 < e2; ++p2)
        m2 += this._circumference(p2, n2);
      for (p2 = e2; p2 < e2 + i2; ++p2) {
        const e3 = this._circumference(p2, n2), i3 = t2[p2], o3 = { x: l2 + this.offsetX, y: h2 + this.offsetY, startAngle: m2, endAngle: m2 + e3, circumference: e3, outerRadius: u2, innerRadius: d2 };
        g2 && (o3.options = f2 || this.resolveDataElementOptions(p2, i3.active ? "active" : s2)), m2 += e3, this.updateElement(i3, p2, o3, s2);
      }
    }
    calculateTotal() {
      const t2 = this._cachedMeta, e2 = t2.data;
      let i2, s2 = 0;
      for (i2 = 0; i2 < e2.length; i2++) {
        const n2 = t2._parsed[i2];
        null === n2 || isNaN(n2) || !this.chart.getDataVisibility(i2) || e2[i2].hidden || (s2 += Math.abs(n2));
      }
      return s2;
    }
    calculateCircumference(t2) {
      const e2 = this._cachedMeta.total;
      return e2 > 0 && !isNaN(t2) ? O * (Math.abs(t2) / e2) : 0;
    }
    getLabelAndValue(t2) {
      const e2 = this._cachedMeta, i2 = this.chart, s2 = i2.data.labels || [], n2 = ne(e2._parsed[t2], i2.options.locale);
      return { label: s2[t2] || "", value: n2 };
    }
    getMaxBorderWidth(t2) {
      let e2 = 0;
      const i2 = this.chart;
      let s2, n2, o2, a2, r2;
      if (!t2) {
        for (s2 = 0, n2 = i2.data.datasets.length; s2 < n2; ++s2)
          if (i2.isDatasetVisible(s2)) {
            o2 = i2.getDatasetMeta(s2), t2 = o2.data, a2 = o2.controller;
            break;
          }
      }
      if (!t2)
        return 0;
      for (s2 = 0, n2 = t2.length; s2 < n2; ++s2)
        r2 = a2.resolveDataElementOptions(s2), "inner" !== r2.borderAlign && (e2 = Math.max(e2, r2.borderWidth || 0, r2.hoverBorderWidth || 0));
      return e2;
    }
    getMaxOffset(t2) {
      let e2 = 0;
      for (let i2 = 0, s2 = t2.length; i2 < s2; ++i2) {
        const t3 = this.resolveDataElementOptions(i2);
        e2 = Math.max(e2, t3.offset || 0, t3.hoverOffset || 0);
      }
      return e2;
    }
    _getRingWeightOffset(t2) {
      let e2 = 0;
      for (let i2 = 0; i2 < t2; ++i2)
        this.chart.isDatasetVisible(i2) && (e2 += this._getRingWeight(i2));
      return e2;
    }
    _getRingWeight(t2) {
      return Math.max(l(this.chart.data.datasets[t2].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
      return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
  }
  __publicField(In, "id", "doughnut");
  __publicField(In, "defaults", { datasetElementType: false, dataElementType: "arc", animation: { animateRotate: true, animateScale: false }, animations: { numbers: { type: "number", properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"] } }, cutout: "50%", rotation: 0, circumference: 360, radius: "100%", spacing: 0, indexAxis: "r" });
  __publicField(In, "descriptors", { _scriptable: (t2) => "spacing" !== t2, _indexable: (t2) => "spacing" !== t2 });
  __publicField(In, "overrides", { aspectRatio: 1, plugins: { legend: { labels: { generateLabels(t2) {
    const e2 = t2.data;
    if (e2.labels.length && e2.datasets.length) {
      const { labels: { pointStyle: i2, color: s2 } } = t2.legend.options;
      return e2.labels.map((e3, n2) => {
        const o2 = t2.getDatasetMeta(0).controller.getStyle(n2);
        return { text: e3, fillStyle: o2.backgroundColor, strokeStyle: o2.borderColor, fontColor: s2, lineWidth: o2.borderWidth, pointStyle: i2, hidden: !t2.getDataVisibility(n2), index: n2 };
      });
    }
    return [];
  } }, onClick(t2, e2, i2) {
    i2.chart.toggleDataVisibility(e2.index), i2.chart.update();
  } } } });
  class zn extends Vs {
    constructor(t2, e2) {
      super(t2, e2), this.innerRadius = void 0, this.outerRadius = void 0;
    }
    getLabelAndValue(t2) {
      const e2 = this._cachedMeta, i2 = this.chart, s2 = i2.data.labels || [], n2 = ne(e2._parsed[t2].r, i2.options.locale);
      return { label: s2[t2] || "", value: n2 };
    }
    parseObjectData(t2, e2, i2, s2) {
      return ei.bind(this)(t2, e2, i2, s2);
    }
    update(t2) {
      const e2 = this._cachedMeta.data;
      this._updateRadius(), this.updateElements(e2, 0, e2.length, t2);
    }
    getMinMax() {
      const t2 = this._cachedMeta, e2 = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
      return t2.data.forEach((t3, i2) => {
        const s2 = this.getParsed(i2).r;
        !isNaN(s2) && this.chart.getDataVisibility(i2) && (s2 < e2.min && (e2.min = s2), s2 > e2.max && (e2.max = s2));
      }), e2;
    }
    _updateRadius() {
      const t2 = this.chart, e2 = t2.chartArea, i2 = t2.options, s2 = Math.min(e2.right - e2.left, e2.bottom - e2.top), n2 = Math.max(s2 / 2, 0), o2 = (n2 - Math.max(i2.cutoutPercentage ? n2 / 100 * i2.cutoutPercentage : 1, 0)) / t2.getVisibleDatasetCount();
      this.outerRadius = n2 - o2 * this.index, this.innerRadius = this.outerRadius - o2;
    }
    updateElements(t2, e2, i2, s2) {
      const n2 = "reset" === s2, o2 = this.chart, a2 = o2.options.animation, r2 = this._cachedMeta.rScale, l2 = r2.xCenter, h2 = r2.yCenter, c2 = r2.getIndexAngle(0) - 0.5 * C;
      let d2, u2 = c2;
      const f2 = 360 / this.countVisibleElements();
      for (d2 = 0; d2 < e2; ++d2)
        u2 += this._computeAngle(d2, s2, f2);
      for (d2 = e2; d2 < e2 + i2; d2++) {
        const e3 = t2[d2];
        let i3 = u2, g2 = u2 + this._computeAngle(d2, s2, f2), p2 = o2.getDataVisibility(d2) ? r2.getDistanceFromCenterForValue(this.getParsed(d2).r) : 0;
        u2 = g2, n2 && (a2.animateScale && (p2 = 0), a2.animateRotate && (i3 = g2 = c2));
        const m2 = { x: l2, y: h2, innerRadius: 0, outerRadius: p2, startAngle: i3, endAngle: g2, options: this.resolveDataElementOptions(d2, e3.active ? "active" : s2) };
        this.updateElement(e3, d2, m2, s2);
      }
    }
    countVisibleElements() {
      const t2 = this._cachedMeta;
      let e2 = 0;
      return t2.data.forEach((t3, i2) => {
        !isNaN(this.getParsed(i2).r) && this.chart.getDataVisibility(i2) && e2++;
      }), e2;
    }
    _computeAngle(t2, e2, i2) {
      return this.chart.getDataVisibility(t2) ? $(this.resolveDataElementOptions(t2, e2).angle || i2) : 0;
    }
  }
  __publicField(zn, "id", "polarArea");
  __publicField(zn, "defaults", { dataElementType: "arc", animation: { animateRotate: true, animateScale: true }, animations: { numbers: { type: "number", properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"] } }, indexAxis: "r", startAngle: 0 });
  __publicField(zn, "overrides", { aspectRatio: 1, plugins: { legend: { labels: { generateLabels(t2) {
    const e2 = t2.data;
    if (e2.labels.length && e2.datasets.length) {
      const { labels: { pointStyle: i2, color: s2 } } = t2.legend.options;
      return e2.labels.map((e3, n2) => {
        const o2 = t2.getDatasetMeta(0).controller.getStyle(n2);
        return { text: e3, fillStyle: o2.backgroundColor, strokeStyle: o2.borderColor, fontColor: s2, lineWidth: o2.borderWidth, pointStyle: i2, hidden: !t2.getDataVisibility(n2), index: n2 };
      });
    }
    return [];
  } }, onClick(t2, e2, i2) {
    i2.chart.toggleDataVisibility(e2.index), i2.chart.update();
  } } }, scales: { r: { type: "radialLinear", angleLines: { display: false }, beginAtZero: true, grid: { circular: true }, pointLabels: { display: false }, startAngle: 0 } } });
  var Fn = Object.freeze({ __proto__: null, BarController: (_a2 = class extends Vs {
    parsePrimitiveData(t2, e2, i2, s2) {
      return On(t2, e2, i2, s2);
    }
    parseArrayData(t2, e2, i2, s2) {
      return On(t2, e2, i2, s2);
    }
    parseObjectData(t2, e2, i2, s2) {
      const { iScale: n2, vScale: o2 } = t2, { xAxisKey: a2 = "x", yAxisKey: r2 = "y" } = this._parsing, l2 = "x" === n2.axis ? a2 : r2, h2 = "x" === o2.axis ? a2 : r2, c2 = [];
      let d2, u2, f2, g2;
      for (d2 = i2, u2 = i2 + s2; d2 < u2; ++d2)
        g2 = e2[d2], f2 = {}, f2[n2.axis] = n2.parse(M(g2, l2), d2), c2.push(Cn(M(g2, h2), f2, o2, d2));
      return c2;
    }
    updateRangeFromParsed(t2, e2, i2, s2) {
      super.updateRangeFromParsed(t2, e2, i2, s2);
      const n2 = i2._custom;
      n2 && e2 === this._cachedMeta.vScale && (t2.min = Math.min(t2.min, n2.min), t2.max = Math.max(t2.max, n2.max));
    }
    getMaxOverflow() {
      return 0;
    }
    getLabelAndValue(t2) {
      const e2 = this._cachedMeta, { iScale: i2, vScale: s2 } = e2, n2 = this.getParsed(t2), o2 = n2._custom, a2 = An(o2) ? "[" + o2.start + ", " + o2.end + "]" : "" + s2.getLabelForValue(n2[s2.axis]);
      return { label: "" + i2.getLabelForValue(n2[i2.axis]), value: a2 };
    }
    initialize() {
      this.enableOptionSharing = true, super.initialize();
      this._cachedMeta.stack = this.getDataset().stack;
    }
    update(t2) {
      const e2 = this._cachedMeta;
      this.updateElements(e2.data, 0, e2.data.length, t2);
    }
    updateElements(t2, e2, i2, n2) {
      const o2 = "reset" === n2, { index: a2, _cachedMeta: { vScale: r2 } } = this, l2 = r2.getBasePixel(), h2 = r2.isHorizontal(), c2 = this._getRuler(), { sharedOptions: d2, includeOptions: u2 } = this._getSharedOptions(e2, n2);
      for (let f2 = e2; f2 < e2 + i2; f2++) {
        const e3 = this.getParsed(f2), i3 = o2 || s(e3[r2.axis]) ? { base: l2, head: l2 } : this._calculateBarValuePixels(f2), g2 = this._calculateBarIndexPixels(f2, c2), p2 = (e3._stacks || {})[r2.axis], m2 = { horizontal: h2, base: i3.base, enableBorderRadius: !p2 || An(e3._custom) || a2 === p2._top || a2 === p2._bottom, x: h2 ? i3.head : g2.center, y: h2 ? g2.center : i3.head, height: h2 ? g2.size : Math.abs(i3.size), width: h2 ? Math.abs(i3.size) : g2.size };
        u2 && (m2.options = d2 || this.resolveDataElementOptions(f2, t2[f2].active ? "active" : n2));
        const b2 = m2.options || t2[f2].options;
        Tn(m2, b2, p2, a2), Rn(m2, b2, c2.ratio), this.updateElement(t2[f2], f2, m2, n2);
      }
    }
    _getStacks(t2, e2) {
      const { iScale: i2 } = this._cachedMeta, n2 = i2.getMatchingVisibleMetas(this._type).filter((t3) => t3.controller.options.grouped), o2 = i2.options.stacked, a2 = [], r2 = (t3) => {
        const i3 = t3.controller.getParsed(e2), n3 = i3 && i3[t3.vScale.axis];
        if (s(n3) || isNaN(n3))
          return true;
      };
      for (const i3 of n2)
        if ((void 0 === e2 || !r2(i3)) && ((false === o2 || -1 === a2.indexOf(i3.stack) || void 0 === o2 && void 0 === i3.stack) && a2.push(i3.stack), i3.index === t2))
          break;
      return a2.length || a2.push(void 0), a2;
    }
    _getStackCount(t2) {
      return this._getStacks(void 0, t2).length;
    }
    _getStackIndex(t2, e2, i2) {
      const s2 = this._getStacks(t2, i2), n2 = void 0 !== e2 ? s2.indexOf(e2) : -1;
      return -1 === n2 ? s2.length - 1 : n2;
    }
    _getRuler() {
      const t2 = this.options, e2 = this._cachedMeta, i2 = e2.iScale, s2 = [];
      let n2, o2;
      for (n2 = 0, o2 = e2.data.length; n2 < o2; ++n2)
        s2.push(i2.getPixelForValue(this.getParsed(n2)[i2.axis], n2));
      const a2 = t2.barThickness;
      return { min: a2 || Dn(e2), pixels: s2, start: i2._startPixel, end: i2._endPixel, stackCount: this._getStackCount(), scale: i2, grouped: t2.grouped, ratio: a2 ? 1 : t2.categoryPercentage * t2.barPercentage };
    }
    _calculateBarValuePixels(t2) {
      const { _cachedMeta: { vScale: e2, _stacked: i2, index: n2 }, options: { base: o2, minBarLength: a2 } } = this, r2 = o2 || 0, l2 = this.getParsed(t2), h2 = l2._custom, c2 = An(h2);
      let d2, u2, f2 = l2[e2.axis], g2 = 0, p2 = i2 ? this.applyStack(e2, l2, i2) : f2;
      p2 !== f2 && (g2 = p2 - f2, p2 = f2), c2 && (f2 = h2.barStart, p2 = h2.barEnd - h2.barStart, 0 !== f2 && F(f2) !== F(h2.barEnd) && (g2 = 0), g2 += f2);
      const m2 = s(o2) || c2 ? g2 : o2;
      let b2 = e2.getPixelForValue(m2);
      if (d2 = this.chart.getDataVisibility(t2) ? e2.getPixelForValue(g2 + p2) : b2, u2 = d2 - b2, Math.abs(u2) < a2) {
        u2 = function(t4, e3, i3) {
          return 0 !== t4 ? F(t4) : (e3.isHorizontal() ? 1 : -1) * (e3.min >= i3 ? 1 : -1);
        }(u2, e2, r2) * a2, f2 === r2 && (b2 -= u2 / 2);
        const t3 = e2.getPixelForDecimal(0), s2 = e2.getPixelForDecimal(1), o3 = Math.min(t3, s2), h3 = Math.max(t3, s2);
        b2 = Math.max(Math.min(b2, h3), o3), d2 = b2 + u2, i2 && !c2 && (l2._stacks[e2.axis]._visualValues[n2] = e2.getValueForPixel(d2) - e2.getValueForPixel(b2));
      }
      if (b2 === e2.getPixelForValue(r2)) {
        const t3 = F(u2) * e2.getLineWidthForValue(r2) / 2;
        b2 += t3, u2 -= t3;
      }
      return { size: u2, base: b2, head: d2, center: d2 + u2 / 2 };
    }
    _calculateBarIndexPixels(t2, e2) {
      const i2 = e2.scale, n2 = this.options, o2 = n2.skipNull, a2 = l(n2.maxBarThickness, 1 / 0);
      let r2, h2;
      if (e2.grouped) {
        const i3 = o2 ? this._getStackCount(t2) : e2.stackCount, l2 = "flex" === n2.barThickness ? function(t3, e3, i4, s2) {
          const n3 = e3.pixels, o3 = n3[t3];
          let a3 = t3 > 0 ? n3[t3 - 1] : null, r3 = t3 < n3.length - 1 ? n3[t3 + 1] : null;
          const l3 = i4.categoryPercentage;
          null === a3 && (a3 = o3 - (null === r3 ? e3.end - e3.start : r3 - o3)), null === r3 && (r3 = o3 + o3 - a3);
          const h3 = o3 - (o3 - Math.min(a3, r3)) / 2 * l3;
          return { chunk: Math.abs(r3 - a3) / 2 * l3 / s2, ratio: i4.barPercentage, start: h3 };
        }(t2, e2, n2, i3) : function(t3, e3, i4, n3) {
          const o3 = i4.barThickness;
          let a3, r3;
          return s(o3) ? (a3 = e3.min * i4.categoryPercentage, r3 = i4.barPercentage) : (a3 = o3 * n3, r3 = 1), { chunk: a3 / n3, ratio: r3, start: e3.pixels[t3] - a3 / 2 };
        }(t2, e2, n2, i3), c2 = this._getStackIndex(this.index, this._cachedMeta.stack, o2 ? t2 : void 0);
        r2 = l2.start + l2.chunk * c2 + l2.chunk / 2, h2 = Math.min(a2, l2.chunk * l2.ratio);
      } else
        r2 = i2.getPixelForValue(this.getParsed(t2)[i2.axis], t2), h2 = Math.min(a2, e2.min * e2.ratio);
      return { base: r2 - h2 / 2, head: r2 + h2 / 2, center: r2, size: h2 };
    }
    draw() {
      const t2 = this._cachedMeta, e2 = t2.vScale, i2 = t2.data, s2 = i2.length;
      let n2 = 0;
      for (; n2 < s2; ++n2)
        null !== this.getParsed(n2)[e2.axis] && i2[n2].draw(this._ctx);
    }
  }, __publicField(_a2, "id", "bar"), __publicField(_a2, "defaults", { datasetElementType: false, dataElementType: "bar", categoryPercentage: 0.8, barPercentage: 0.9, grouped: true, animations: { numbers: { type: "number", properties: ["x", "y", "base", "width", "height"] } } }), __publicField(_a2, "overrides", { scales: { _index_: { type: "category", offset: true, grid: { offset: true } }, _value_: { type: "linear", beginAtZero: true } } }), _a2), BubbleController: (_b = class extends Vs {
    initialize() {
      this.enableOptionSharing = true, super.initialize();
    }
    parsePrimitiveData(t2, e2, i2, s2) {
      const n2 = super.parsePrimitiveData(t2, e2, i2, s2);
      for (let t3 = 0; t3 < n2.length; t3++)
        n2[t3]._custom = this.resolveDataElementOptions(t3 + i2).radius;
      return n2;
    }
    parseArrayData(t2, e2, i2, s2) {
      const n2 = super.parseArrayData(t2, e2, i2, s2);
      for (let t3 = 0; t3 < n2.length; t3++) {
        const s3 = e2[i2 + t3];
        n2[t3]._custom = l(s3[2], this.resolveDataElementOptions(t3 + i2).radius);
      }
      return n2;
    }
    parseObjectData(t2, e2, i2, s2) {
      const n2 = super.parseObjectData(t2, e2, i2, s2);
      for (let t3 = 0; t3 < n2.length; t3++) {
        const s3 = e2[i2 + t3];
        n2[t3]._custom = l(s3 && s3.r && +s3.r, this.resolveDataElementOptions(t3 + i2).radius);
      }
      return n2;
    }
    getMaxOverflow() {
      const t2 = this._cachedMeta.data;
      let e2 = 0;
      for (let i2 = t2.length - 1; i2 >= 0; --i2)
        e2 = Math.max(e2, t2[i2].size(this.resolveDataElementOptions(i2)) / 2);
      return e2 > 0 && e2;
    }
    getLabelAndValue(t2) {
      const e2 = this._cachedMeta, i2 = this.chart.data.labels || [], { xScale: s2, yScale: n2 } = e2, o2 = this.getParsed(t2), a2 = s2.getLabelForValue(o2.x), r2 = n2.getLabelForValue(o2.y), l2 = o2._custom;
      return { label: i2[t2] || "", value: "(" + a2 + ", " + r2 + (l2 ? ", " + l2 : "") + ")" };
    }
    update(t2) {
      const e2 = this._cachedMeta.data;
      this.updateElements(e2, 0, e2.length, t2);
    }
    updateElements(t2, e2, i2, s2) {
      const n2 = "reset" === s2, { iScale: o2, vScale: a2 } = this._cachedMeta, { sharedOptions: r2, includeOptions: l2 } = this._getSharedOptions(e2, s2), h2 = o2.axis, c2 = a2.axis;
      for (let d2 = e2; d2 < e2 + i2; d2++) {
        const e3 = t2[d2], i3 = !n2 && this.getParsed(d2), u2 = {}, f2 = u2[h2] = n2 ? o2.getPixelForDecimal(0.5) : o2.getPixelForValue(i3[h2]), g2 = u2[c2] = n2 ? a2.getBasePixel() : a2.getPixelForValue(i3[c2]);
        u2.skip = isNaN(f2) || isNaN(g2), l2 && (u2.options = r2 || this.resolveDataElementOptions(d2, e3.active ? "active" : s2), n2 && (u2.options.radius = 0)), this.updateElement(e3, d2, u2, s2);
      }
    }
    resolveDataElementOptions(t2, e2) {
      const i2 = this.getParsed(t2);
      let s2 = super.resolveDataElementOptions(t2, e2);
      s2.$shared && (s2 = Object.assign({}, s2, { $shared: false }));
      const n2 = s2.radius;
      return "active" !== e2 && (s2.radius = 0), s2.radius += l(i2 && i2._custom, n2), s2;
    }
  }, __publicField(_b, "id", "bubble"), __publicField(_b, "defaults", { datasetElementType: false, dataElementType: "point", animations: { numbers: { type: "number", properties: ["x", "y", "borderWidth", "radius"] } } }), __publicField(_b, "overrides", { scales: { x: { type: "linear" }, y: { type: "linear" } } }), _b), DoughnutController: In, LineController: (_c = class extends Vs {
    initialize() {
      this.enableOptionSharing = true, this.supportsDecimation = true, super.initialize();
    }
    update(t2) {
      const e2 = this._cachedMeta, { dataset: i2, data: s2 = [], _dataset: n2 } = e2, o2 = this.chart._animationsDisabled;
      let { start: a2, count: r2 } = pt(e2, s2, o2);
      this._drawStart = a2, this._drawCount = r2, mt(e2) && (a2 = 0, r2 = s2.length), i2._chart = this.chart, i2._datasetIndex = this.index, i2._decimated = !!n2._decimated, i2.points = s2;
      const l2 = this.resolveDatasetElementOptions(t2);
      this.options.showLine || (l2.borderWidth = 0), l2.segment = this.options.segment, this.updateElement(i2, void 0, { animated: !o2, options: l2 }, t2), this.updateElements(s2, a2, r2, t2);
    }
    updateElements(t2, e2, i2, n2) {
      const o2 = "reset" === n2, { iScale: a2, vScale: r2, _stacked: l2, _dataset: h2 } = this._cachedMeta, { sharedOptions: c2, includeOptions: d2 } = this._getSharedOptions(e2, n2), u2 = a2.axis, f2 = r2.axis, { spanGaps: g2, segment: p2 } = this.options, m2 = W(g2) ? g2 : Number.POSITIVE_INFINITY, b2 = this.chart._animationsDisabled || o2 || "none" === n2, x2 = e2 + i2, _2 = t2.length;
      let y2 = e2 > 0 && this.getParsed(e2 - 1);
      for (let i3 = 0; i3 < _2; ++i3) {
        const g3 = t2[i3], _3 = b2 ? g3 : {};
        if (i3 < e2 || i3 >= x2) {
          _3.skip = true;
          continue;
        }
        const v2 = this.getParsed(i3), M2 = s(v2[f2]), w2 = _3[u2] = a2.getPixelForValue(v2[u2], i3), k2 = _3[f2] = o2 || M2 ? r2.getBasePixel() : r2.getPixelForValue(l2 ? this.applyStack(r2, v2, l2) : v2[f2], i3);
        _3.skip = isNaN(w2) || isNaN(k2) || M2, _3.stop = i3 > 0 && Math.abs(v2[u2] - y2[u2]) > m2, p2 && (_3.parsed = v2, _3.raw = h2.data[i3]), d2 && (_3.options = c2 || this.resolveDataElementOptions(i3, g3.active ? "active" : n2)), b2 || this.updateElement(g3, i3, _3, n2), y2 = v2;
      }
    }
    getMaxOverflow() {
      const t2 = this._cachedMeta, e2 = t2.dataset, i2 = e2.options && e2.options.borderWidth || 0, s2 = t2.data || [];
      if (!s2.length)
        return i2;
      const n2 = s2[0].size(this.resolveDataElementOptions(0)), o2 = s2[s2.length - 1].size(this.resolveDataElementOptions(s2.length - 1));
      return Math.max(i2, n2, o2) / 2;
    }
    draw() {
      const t2 = this._cachedMeta;
      t2.dataset.updateControlPoints(this.chart.chartArea, t2.iScale.axis), super.draw();
    }
  }, __publicField(_c, "id", "line"), __publicField(_c, "defaults", { datasetElementType: "line", dataElementType: "point", showLine: true, spanGaps: false }), __publicField(_c, "overrides", { scales: { _index_: { type: "category" }, _value_: { type: "linear" } } }), _c), PolarAreaController: zn, PieController: (_d = class extends In {
  }, __publicField(_d, "id", "pie"), __publicField(_d, "defaults", { cutout: 0, rotation: 0, circumference: 360, radius: "100%" }), _d), RadarController: (_e2 = class extends Vs {
    getLabelAndValue(t2) {
      const e2 = this._cachedMeta.vScale, i2 = this.getParsed(t2);
      return { label: e2.getLabels()[t2], value: "" + e2.getLabelForValue(i2[e2.axis]) };
    }
    parseObjectData(t2, e2, i2, s2) {
      return ei.bind(this)(t2, e2, i2, s2);
    }
    update(t2) {
      const e2 = this._cachedMeta, i2 = e2.dataset, s2 = e2.data || [], n2 = e2.iScale.getLabels();
      if (i2.points = s2, "resize" !== t2) {
        const e3 = this.resolveDatasetElementOptions(t2);
        this.options.showLine || (e3.borderWidth = 0);
        const o2 = { _loop: true, _fullLoop: n2.length === s2.length, options: e3 };
        this.updateElement(i2, void 0, o2, t2);
      }
      this.updateElements(s2, 0, s2.length, t2);
    }
    updateElements(t2, e2, i2, s2) {
      const n2 = this._cachedMeta.rScale, o2 = "reset" === s2;
      for (let a2 = e2; a2 < e2 + i2; a2++) {
        const e3 = t2[a2], i3 = this.resolveDataElementOptions(a2, e3.active ? "active" : s2), r2 = n2.getPointPositionForValue(a2, this.getParsed(a2).r), l2 = o2 ? n2.xCenter : r2.x, h2 = o2 ? n2.yCenter : r2.y, c2 = { x: l2, y: h2, angle: r2.angle, skip: isNaN(l2) || isNaN(h2), options: i3 };
        this.updateElement(e3, a2, c2, s2);
      }
    }
  }, __publicField(_e2, "id", "radar"), __publicField(_e2, "defaults", { datasetElementType: "line", dataElementType: "point", indexAxis: "r", showLine: true, elements: { line: { fill: "start" } } }), __publicField(_e2, "overrides", { aspectRatio: 1, scales: { r: { type: "radialLinear" } } }), _e2), ScatterController: (_f = class extends Vs {
    getLabelAndValue(t2) {
      const e2 = this._cachedMeta, i2 = this.chart.data.labels || [], { xScale: s2, yScale: n2 } = e2, o2 = this.getParsed(t2), a2 = s2.getLabelForValue(o2.x), r2 = n2.getLabelForValue(o2.y);
      return { label: i2[t2] || "", value: "(" + a2 + ", " + r2 + ")" };
    }
    update(t2) {
      const e2 = this._cachedMeta, { data: i2 = [] } = e2, s2 = this.chart._animationsDisabled;
      let { start: n2, count: o2 } = pt(e2, i2, s2);
      if (this._drawStart = n2, this._drawCount = o2, mt(e2) && (n2 = 0, o2 = i2.length), this.options.showLine) {
        const { dataset: n3, _dataset: o3 } = e2;
        n3._chart = this.chart, n3._datasetIndex = this.index, n3._decimated = !!o3._decimated, n3.points = i2;
        const a2 = this.resolveDatasetElementOptions(t2);
        a2.segment = this.options.segment, this.updateElement(n3, void 0, { animated: !s2, options: a2 }, t2);
      }
      this.updateElements(i2, n2, o2, t2);
    }
    addElements() {
      const { showLine: t2 } = this.options;
      !this.datasetElementType && t2 && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements();
    }
    updateElements(t2, e2, i2, n2) {
      const o2 = "reset" === n2, { iScale: a2, vScale: r2, _stacked: l2, _dataset: h2 } = this._cachedMeta, c2 = this.resolveDataElementOptions(e2, n2), d2 = this.getSharedOptions(c2), u2 = this.includeOptions(n2, d2), f2 = a2.axis, g2 = r2.axis, { spanGaps: p2, segment: m2 } = this.options, b2 = W(p2) ? p2 : Number.POSITIVE_INFINITY, x2 = this.chart._animationsDisabled || o2 || "none" === n2;
      let _2 = e2 > 0 && this.getParsed(e2 - 1);
      for (let c3 = e2; c3 < e2 + i2; ++c3) {
        const e3 = t2[c3], i3 = this.getParsed(c3), p3 = x2 ? e3 : {}, y2 = s(i3[g2]), v2 = p3[f2] = a2.getPixelForValue(i3[f2], c3), M2 = p3[g2] = o2 || y2 ? r2.getBasePixel() : r2.getPixelForValue(l2 ? this.applyStack(r2, i3, l2) : i3[g2], c3);
        p3.skip = isNaN(v2) || isNaN(M2) || y2, p3.stop = c3 > 0 && Math.abs(i3[f2] - _2[f2]) > b2, m2 && (p3.parsed = i3, p3.raw = h2.data[c3]), u2 && (p3.options = d2 || this.resolveDataElementOptions(c3, e3.active ? "active" : n2)), x2 || this.updateElement(e3, c3, p3, n2), _2 = i3;
      }
      this.updateSharedOptions(d2, n2, c2);
    }
    getMaxOverflow() {
      const t2 = this._cachedMeta, e2 = t2.data || [];
      if (!this.options.showLine) {
        let t3 = 0;
        for (let i3 = e2.length - 1; i3 >= 0; --i3)
          t3 = Math.max(t3, e2[i3].size(this.resolveDataElementOptions(i3)) / 2);
        return t3 > 0 && t3;
      }
      const i2 = t2.dataset, s2 = i2.options && i2.options.borderWidth || 0;
      if (!e2.length)
        return s2;
      const n2 = e2[0].size(this.resolveDataElementOptions(0)), o2 = e2[e2.length - 1].size(this.resolveDataElementOptions(e2.length - 1));
      return Math.max(s2, n2, o2) / 2;
    }
  }, __publicField(_f, "id", "scatter"), __publicField(_f, "defaults", { datasetElementType: false, dataElementType: "point", showLine: false, fill: false }), __publicField(_f, "overrides", { interaction: { mode: "point" }, scales: { x: { type: "linear" }, y: { type: "linear" } } }), _f) });
  function Vn(t2, e2, i2, s2) {
    const n2 = _i(t2.options.borderRadius, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
    const o2 = (i2 - e2) / 2, a2 = Math.min(o2, s2 * e2 / 2), r2 = (t3) => {
      const e3 = (i2 - Math.min(o2, t3)) * s2 / 2;
      return J(t3, 0, Math.min(o2, e3));
    };
    return { outerStart: r2(n2.outerStart), outerEnd: r2(n2.outerEnd), innerStart: J(n2.innerStart, 0, a2), innerEnd: J(n2.innerEnd, 0, a2) };
  }
  function Bn(t2, e2, i2, s2) {
    return { x: i2 + t2 * Math.cos(e2), y: s2 + t2 * Math.sin(e2) };
  }
  function Nn(t2, e2, i2, s2, n2, o2) {
    const { x: a2, y: r2, startAngle: l2, pixelMargin: h2, innerRadius: c2 } = e2, d2 = Math.max(e2.outerRadius + s2 + i2 - h2, 0), u2 = c2 > 0 ? c2 + s2 + i2 + h2 : 0;
    let f2 = 0;
    const g2 = n2 - l2;
    if (s2) {
      const t3 = ((c2 > 0 ? c2 - s2 : 0) + (d2 > 0 ? d2 - s2 : 0)) / 2;
      f2 = (g2 - (0 !== t3 ? g2 * t3 / (t3 + s2) : g2)) / 2;
    }
    const p2 = (g2 - Math.max(1e-3, g2 * d2 - i2 / C) / d2) / 2, m2 = l2 + p2 + f2, b2 = n2 - p2 - f2, { outerStart: x2, outerEnd: _2, innerStart: y2, innerEnd: v2 } = Vn(e2, u2, d2, b2 - m2), M2 = d2 - x2, w2 = d2 - _2, k2 = m2 + x2 / M2, S2 = b2 - _2 / w2, P2 = u2 + y2, D2 = u2 + v2, O2 = m2 + y2 / P2, A2 = b2 - v2 / D2;
    if (t2.beginPath(), o2) {
      const e3 = (k2 + S2) / 2;
      if (t2.arc(a2, r2, d2, k2, e3), t2.arc(a2, r2, d2, e3, S2), _2 > 0) {
        const e4 = Bn(w2, S2, a2, r2);
        t2.arc(e4.x, e4.y, _2, S2, b2 + E);
      }
      const i3 = Bn(D2, b2, a2, r2);
      if (t2.lineTo(i3.x, i3.y), v2 > 0) {
        const e4 = Bn(D2, A2, a2, r2);
        t2.arc(e4.x, e4.y, v2, b2 + E, A2 + Math.PI);
      }
      const s3 = (b2 - v2 / u2 + (m2 + y2 / u2)) / 2;
      if (t2.arc(a2, r2, u2, b2 - v2 / u2, s3, true), t2.arc(a2, r2, u2, s3, m2 + y2 / u2, true), y2 > 0) {
        const e4 = Bn(P2, O2, a2, r2);
        t2.arc(e4.x, e4.y, y2, O2 + Math.PI, m2 - E);
      }
      const n3 = Bn(M2, m2, a2, r2);
      if (t2.lineTo(n3.x, n3.y), x2 > 0) {
        const e4 = Bn(M2, k2, a2, r2);
        t2.arc(e4.x, e4.y, x2, m2 - E, k2);
      }
    } else {
      t2.moveTo(a2, r2);
      const e3 = Math.cos(k2) * d2 + a2, i3 = Math.sin(k2) * d2 + r2;
      t2.lineTo(e3, i3);
      const s3 = Math.cos(S2) * d2 + a2, n3 = Math.sin(S2) * d2 + r2;
      t2.lineTo(s3, n3);
    }
    t2.closePath();
  }
  function Wn(t2, e2, i2, s2, n2) {
    const { fullCircles: o2, startAngle: a2, circumference: r2, options: l2 } = e2, { borderWidth: h2, borderJoinStyle: c2 } = l2, d2 = "inner" === l2.borderAlign;
    if (!h2)
      return;
    d2 ? (t2.lineWidth = 2 * h2, t2.lineJoin = c2 || "round") : (t2.lineWidth = h2, t2.lineJoin = c2 || "bevel");
    let u2 = e2.endAngle;
    if (o2) {
      Nn(t2, e2, i2, s2, u2, n2);
      for (let e3 = 0; e3 < o2; ++e3)
        t2.stroke();
      isNaN(r2) || (u2 = a2 + (r2 % O || O));
    }
    d2 && function(t3, e3, i3) {
      const { startAngle: s3, pixelMargin: n3, x: o3, y: a3, outerRadius: r3, innerRadius: l3 } = e3;
      let h3 = n3 / r3;
      t3.beginPath(), t3.arc(o3, a3, r3, s3 - h3, i3 + h3), l3 > n3 ? (h3 = n3 / l3, t3.arc(o3, a3, l3, i3 + h3, s3 - h3, true)) : t3.arc(o3, a3, n3, i3 + E, s3 - E), t3.closePath(), t3.clip();
    }(t2, e2, u2), o2 || (Nn(t2, e2, i2, s2, u2, n2), t2.stroke());
  }
  function Hn(t2, e2, i2 = e2) {
    t2.lineCap = l(i2.borderCapStyle, e2.borderCapStyle), t2.setLineDash(l(i2.borderDash, e2.borderDash)), t2.lineDashOffset = l(i2.borderDashOffset, e2.borderDashOffset), t2.lineJoin = l(i2.borderJoinStyle, e2.borderJoinStyle), t2.lineWidth = l(i2.borderWidth, e2.borderWidth), t2.strokeStyle = l(i2.borderColor, e2.borderColor);
  }
  function jn(t2, e2, i2) {
    t2.lineTo(i2.x, i2.y);
  }
  function $n(t2, e2, i2 = {}) {
    const s2 = t2.length, { start: n2 = 0, end: o2 = s2 - 1 } = i2, { start: a2, end: r2 } = e2, l2 = Math.max(n2, a2), h2 = Math.min(o2, r2), c2 = n2 < a2 && o2 < a2 || n2 > r2 && o2 > r2;
    return { count: s2, start: l2, loop: e2.loop, ilen: h2 < l2 && !c2 ? s2 + h2 - l2 : h2 - l2 };
  }
  function Yn(t2, e2, i2, s2) {
    const { points: n2, options: o2 } = e2, { count: a2, start: r2, loop: l2, ilen: h2 } = $n(n2, i2, s2), c2 = function(t3) {
      return t3.stepped ? ze : t3.tension || "monotone" === t3.cubicInterpolationMode ? Fe : jn;
    }(o2);
    let d2, u2, f2, { move: g2 = true, reverse: p2 } = s2 || {};
    for (d2 = 0; d2 <= h2; ++d2)
      u2 = n2[(r2 + (p2 ? h2 - d2 : d2)) % a2], u2.skip || (g2 ? (t2.moveTo(u2.x, u2.y), g2 = false) : c2(t2, f2, u2, p2, o2.stepped), f2 = u2);
    return l2 && (u2 = n2[(r2 + (p2 ? h2 : 0)) % a2], c2(t2, f2, u2, p2, o2.stepped)), !!l2;
  }
  function Un(t2, e2, i2, s2) {
    const n2 = e2.points, { count: o2, start: a2, ilen: r2 } = $n(n2, i2, s2), { move: l2 = true, reverse: h2 } = s2 || {};
    let c2, d2, u2, f2, g2, p2, m2 = 0, b2 = 0;
    const x2 = (t3) => (a2 + (h2 ? r2 - t3 : t3)) % o2, _2 = () => {
      f2 !== g2 && (t2.lineTo(m2, g2), t2.lineTo(m2, f2), t2.lineTo(m2, p2));
    };
    for (l2 && (d2 = n2[x2(0)], t2.moveTo(d2.x, d2.y)), c2 = 0; c2 <= r2; ++c2) {
      if (d2 = n2[x2(c2)], d2.skip)
        continue;
      const e3 = d2.x, i3 = d2.y, s3 = 0 | e3;
      s3 === u2 ? (i3 < f2 ? f2 = i3 : i3 > g2 && (g2 = i3), m2 = (b2 * m2 + e3) / ++b2) : (_2(), t2.lineTo(e3, i3), u2 = s3, b2 = 0, f2 = g2 = i3), p2 = i3;
    }
    _2();
  }
  function Xn(t2) {
    const e2 = t2.options, i2 = e2.borderDash && e2.borderDash.length;
    return !(t2._decimated || t2._loop || e2.tension || "monotone" === e2.cubicInterpolationMode || e2.stepped || i2) ? Un : Yn;
  }
  const qn = "function" == typeof Path2D;
  function Kn(t2, e2, i2, s2) {
    qn && !e2.options.segment ? function(t3, e3, i3, s3) {
      let n2 = e3._path;
      n2 || (n2 = e3._path = new Path2D(), e3.path(n2, i3, s3) && n2.closePath()), Hn(t3, e3.options), t3.stroke(n2);
    }(t2, e2, i2, s2) : function(t3, e3, i3, s3) {
      const { segments: n2, options: o2 } = e3, a2 = Xn(e3);
      for (const r2 of n2)
        Hn(t3, o2, r2.style), t3.beginPath(), a2(t3, e3, r2, { start: i3, end: i3 + s3 - 1 }) && t3.closePath(), t3.stroke();
    }(t2, e2, i2, s2);
  }
  class Gn extends Bs {
    constructor(t2) {
      super(), this.animated = true, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = false, this._pointsUpdated = false, this._datasetIndex = void 0, t2 && Object.assign(this, t2);
    }
    updateControlPoints(t2, e2) {
      const i2 = this.options;
      if ((i2.tension || "monotone" === i2.cubicInterpolationMode) && !i2.stepped && !this._pointsUpdated) {
        const s2 = i2.spanGaps ? this._loop : this._fullLoop;
        li(this._points, i2, t2, s2, e2), this._pointsUpdated = true;
      }
    }
    set points(t2) {
      this._points = t2, delete this._segments, delete this._path, this._pointsUpdated = false;
    }
    get points() {
      return this._points;
    }
    get segments() {
      return this._segments || (this._segments = Ri(this, this.options.segment));
    }
    first() {
      const t2 = this.segments, e2 = this.points;
      return t2.length && e2[t2[0].start];
    }
    last() {
      const t2 = this.segments, e2 = this.points, i2 = t2.length;
      return i2 && e2[t2[i2 - 1].end];
    }
    interpolate(t2, e2) {
      const i2 = this.options, s2 = t2[e2], n2 = this.points, o2 = Ei(this, { property: e2, start: s2, end: s2 });
      if (!o2.length)
        return;
      const a2 = [], r2 = function(t3) {
        return t3.stepped ? gi : t3.tension || "monotone" === t3.cubicInterpolationMode ? pi : fi;
      }(i2);
      let l2, h2;
      for (l2 = 0, h2 = o2.length; l2 < h2; ++l2) {
        const { start: h3, end: c2 } = o2[l2], d2 = n2[h3], u2 = n2[c2];
        if (d2 === u2) {
          a2.push(d2);
          continue;
        }
        const f2 = r2(d2, u2, Math.abs((s2 - d2[e2]) / (u2[e2] - d2[e2])), i2.stepped);
        f2[e2] = t2[e2], a2.push(f2);
      }
      return 1 === a2.length ? a2[0] : a2;
    }
    pathSegment(t2, e2, i2) {
      return Xn(this)(t2, this, e2, i2);
    }
    path(t2, e2, i2) {
      const s2 = this.segments, n2 = Xn(this);
      let o2 = this._loop;
      e2 = e2 || 0, i2 = i2 || this.points.length - e2;
      for (const a2 of s2)
        o2 &= n2(t2, this, a2, { start: e2, end: e2 + i2 - 1 });
      return !!o2;
    }
    draw(t2, e2, i2, s2) {
      const n2 = this.options || {};
      (this.points || []).length && n2.borderWidth && (t2.save(), Kn(t2, this, i2, s2), t2.restore()), this.animated && (this._pointsUpdated = false, this._path = void 0);
    }
  }
  __publicField(Gn, "id", "line");
  __publicField(Gn, "defaults", { borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", borderWidth: 3, capBezierPoints: true, cubicInterpolationMode: "default", fill: false, spanGaps: false, stepped: false, tension: 0 });
  __publicField(Gn, "defaultRoutes", { backgroundColor: "backgroundColor", borderColor: "borderColor" });
  __publicField(Gn, "descriptors", { _scriptable: true, _indexable: (t2) => "borderDash" !== t2 && "fill" !== t2 });
  function Zn(t2, e2, i2, s2) {
    const n2 = t2.options, { [i2]: o2 } = t2.getProps([i2], s2);
    return Math.abs(e2 - o2) < n2.radius + n2.hitRadius;
  }
  function Jn(t2, e2) {
    const { x: i2, y: s2, base: n2, width: o2, height: a2 } = t2.getProps(["x", "y", "base", "width", "height"], e2);
    let r2, l2, h2, c2, d2;
    return t2.horizontal ? (d2 = a2 / 2, r2 = Math.min(i2, n2), l2 = Math.max(i2, n2), h2 = s2 - d2, c2 = s2 + d2) : (d2 = o2 / 2, r2 = i2 - d2, l2 = i2 + d2, h2 = Math.min(s2, n2), c2 = Math.max(s2, n2)), { left: r2, top: h2, right: l2, bottom: c2 };
  }
  function Qn(t2, e2, i2, s2) {
    return t2 ? 0 : J(e2, i2, s2);
  }
  function to(t2) {
    const e2 = Jn(t2), i2 = e2.right - e2.left, s2 = e2.bottom - e2.top, n2 = function(t3, e3, i3) {
      const s3 = t3.options.borderWidth, n3 = t3.borderSkipped, o2 = yi(s3);
      return { t: Qn(n3.top, o2.top, 0, i3), r: Qn(n3.right, o2.right, 0, e3), b: Qn(n3.bottom, o2.bottom, 0, i3), l: Qn(n3.left, o2.left, 0, e3) };
    }(t2, i2 / 2, s2 / 2), a2 = function(t3, e3, i3) {
      const { enableBorderRadius: s3 } = t3.getProps(["enableBorderRadius"]), n3 = t3.options.borderRadius, a3 = vi(n3), r2 = Math.min(e3, i3), l2 = t3.borderSkipped, h2 = s3 || o(n3);
      return { topLeft: Qn(!h2 || l2.top || l2.left, a3.topLeft, 0, r2), topRight: Qn(!h2 || l2.top || l2.right, a3.topRight, 0, r2), bottomLeft: Qn(!h2 || l2.bottom || l2.left, a3.bottomLeft, 0, r2), bottomRight: Qn(!h2 || l2.bottom || l2.right, a3.bottomRight, 0, r2) };
    }(t2, i2 / 2, s2 / 2);
    return { outer: { x: e2.left, y: e2.top, w: i2, h: s2, radius: a2 }, inner: { x: e2.left + n2.l, y: e2.top + n2.t, w: i2 - n2.l - n2.r, h: s2 - n2.t - n2.b, radius: { topLeft: Math.max(0, a2.topLeft - Math.max(n2.t, n2.l)), topRight: Math.max(0, a2.topRight - Math.max(n2.t, n2.r)), bottomLeft: Math.max(0, a2.bottomLeft - Math.max(n2.b, n2.l)), bottomRight: Math.max(0, a2.bottomRight - Math.max(n2.b, n2.r)) } } };
  }
  function eo(t2, e2, i2, s2) {
    const n2 = null === e2, o2 = null === i2, a2 = t2 && !(n2 && o2) && Jn(t2, s2);
    return a2 && (n2 || tt(e2, a2.left, a2.right)) && (o2 || tt(i2, a2.top, a2.bottom));
  }
  function io(t2, e2) {
    t2.rect(e2.x, e2.y, e2.w, e2.h);
  }
  function so(t2, e2, i2 = {}) {
    const s2 = t2.x !== i2.x ? -e2 : 0, n2 = t2.y !== i2.y ? -e2 : 0, o2 = (t2.x + t2.w !== i2.x + i2.w ? e2 : 0) - s2, a2 = (t2.y + t2.h !== i2.y + i2.h ? e2 : 0) - n2;
    return { x: t2.x + s2, y: t2.y + n2, w: t2.w + o2, h: t2.h + a2, radius: t2.radius };
  }
  var no = Object.freeze({ __proto__: null, ArcElement: (_g = class extends Bs {
    constructor(t2) {
      super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t2 && Object.assign(this, t2);
    }
    inRange(t2, e2, i2) {
      const s2 = this.getProps(["x", "y"], i2), { angle: n2, distance: o2 } = X(s2, { x: t2, y: e2 }), { startAngle: a2, endAngle: r2, innerRadius: h2, outerRadius: c2, circumference: d2 } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], i2), u2 = this.options.spacing / 2, f2 = l(d2, r2 - a2) >= O || Z(n2, a2, r2), g2 = tt(o2, h2 + u2, c2 + u2);
      return f2 && g2;
    }
    getCenterPoint(t2) {
      const { x: e2, y: i2, startAngle: s2, endAngle: n2, innerRadius: o2, outerRadius: a2 } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], t2), { offset: r2, spacing: l2 } = this.options, h2 = (s2 + n2) / 2, c2 = (o2 + a2 + l2 + r2) / 2;
      return { x: e2 + Math.cos(h2) * c2, y: i2 + Math.sin(h2) * c2 };
    }
    tooltipPosition(t2) {
      return this.getCenterPoint(t2);
    }
    draw(t2) {
      const { options: e2, circumference: i2 } = this, s2 = (e2.offset || 0) / 4, n2 = (e2.spacing || 0) / 2, o2 = e2.circular;
      if (this.pixelMargin = "inner" === e2.borderAlign ? 0.33 : 0, this.fullCircles = i2 > O ? Math.floor(i2 / O) : 0, 0 === i2 || this.innerRadius < 0 || this.outerRadius < 0)
        return;
      t2.save();
      const a2 = (this.startAngle + this.endAngle) / 2;
      t2.translate(Math.cos(a2) * s2, Math.sin(a2) * s2);
      const r2 = s2 * (1 - Math.sin(Math.min(C, i2 || 0)));
      t2.fillStyle = e2.backgroundColor, t2.strokeStyle = e2.borderColor, function(t3, e3, i3, s3, n3) {
        const { fullCircles: o3, startAngle: a3, circumference: r3 } = e3;
        let l2 = e3.endAngle;
        if (o3) {
          Nn(t3, e3, i3, s3, l2, n3);
          for (let e4 = 0; e4 < o3; ++e4)
            t3.fill();
          isNaN(r3) || (l2 = a3 + (r3 % O || O));
        }
        Nn(t3, e3, i3, s3, l2, n3), t3.fill();
      }(t2, this, r2, n2, o2), Wn(t2, this, r2, n2, o2), t2.restore();
    }
  }, __publicField(_g, "id", "arc"), __publicField(_g, "defaults", { borderAlign: "center", borderColor: "#fff", borderJoinStyle: void 0, borderRadius: 0, borderWidth: 2, offset: 0, spacing: 0, angle: void 0, circular: true }), __publicField(_g, "defaultRoutes", { backgroundColor: "backgroundColor" }), _g), LineElement: Gn, PointElement: (_h = class extends Bs {
    constructor(t2) {
      super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t2 && Object.assign(this, t2);
    }
    inRange(t2, e2, i2) {
      const s2 = this.options, { x: n2, y: o2 } = this.getProps(["x", "y"], i2);
      return Math.pow(t2 - n2, 2) + Math.pow(e2 - o2, 2) < Math.pow(s2.hitRadius + s2.radius, 2);
    }
    inXRange(t2, e2) {
      return Zn(this, t2, "x", e2);
    }
    inYRange(t2, e2) {
      return Zn(this, t2, "y", e2);
    }
    getCenterPoint(t2) {
      const { x: e2, y: i2 } = this.getProps(["x", "y"], t2);
      return { x: e2, y: i2 };
    }
    size(t2) {
      let e2 = (t2 = t2 || this.options || {}).radius || 0;
      e2 = Math.max(e2, e2 && t2.hoverRadius || 0);
      return 2 * (e2 + (e2 && t2.borderWidth || 0));
    }
    draw(t2, e2) {
      const i2 = this.options;
      this.skip || i2.radius < 0.1 || !Ee(this, e2, this.size(i2) / 2) || (t2.strokeStyle = i2.borderColor, t2.lineWidth = i2.borderWidth, t2.fillStyle = i2.backgroundColor, Te(t2, i2, this.x, this.y));
    }
    getRange() {
      const t2 = this.options || {};
      return t2.radius + t2.hitRadius;
    }
  }, __publicField(_h, "id", "point"), __publicField(_h, "defaults", { borderWidth: 1, hitRadius: 1, hoverBorderWidth: 1, hoverRadius: 4, pointStyle: "circle", radius: 3, rotation: 0 }), __publicField(_h, "defaultRoutes", { backgroundColor: "backgroundColor", borderColor: "borderColor" }), _h), BarElement: (_i2 = class extends Bs {
    constructor(t2) {
      super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t2 && Object.assign(this, t2);
    }
    draw(t2) {
      const { inflateAmount: e2, options: { borderColor: i2, backgroundColor: s2 } } = this, { inner: n2, outer: o2 } = to(this), a2 = (r2 = o2.radius).topLeft || r2.topRight || r2.bottomLeft || r2.bottomRight ? We : io;
      var r2;
      t2.save(), o2.w === n2.w && o2.h === n2.h || (t2.beginPath(), a2(t2, so(o2, e2, n2)), t2.clip(), a2(t2, so(n2, -e2, o2)), t2.fillStyle = i2, t2.fill("evenodd")), t2.beginPath(), a2(t2, so(n2, e2)), t2.fillStyle = s2, t2.fill(), t2.restore();
    }
    inRange(t2, e2, i2) {
      return eo(this, t2, e2, i2);
    }
    inXRange(t2, e2) {
      return eo(this, t2, null, e2);
    }
    inYRange(t2, e2) {
      return eo(this, null, t2, e2);
    }
    getCenterPoint(t2) {
      const { x: e2, y: i2, base: s2, horizontal: n2 } = this.getProps(["x", "y", "base", "horizontal"], t2);
      return { x: n2 ? (e2 + s2) / 2 : e2, y: n2 ? i2 : (i2 + s2) / 2 };
    }
    getRange(t2) {
      return "x" === t2 ? this.width / 2 : this.height / 2;
    }
  }, __publicField(_i2, "id", "bar"), __publicField(_i2, "defaults", { borderSkipped: "start", borderWidth: 0, borderRadius: 0, inflateAmount: "auto", pointStyle: void 0 }), __publicField(_i2, "defaultRoutes", { backgroundColor: "backgroundColor", borderColor: "borderColor" }), _i2) });
  function oo(t2, e2, i2, s2) {
    const n2 = t2.indexOf(e2);
    if (-1 === n2)
      return ((t3, e3, i3, s3) => ("string" == typeof e3 ? (i3 = t3.push(e3) - 1, s3.unshift({ index: i3, label: e3 })) : isNaN(e3) && (i3 = null), i3))(t2, e2, i2, s2);
    return n2 !== t2.lastIndexOf(e2) ? i2 : n2;
  }
  function ao(t2) {
    const e2 = this.getLabels();
    return t2 >= 0 && t2 < e2.length ? e2[t2] : t2;
  }
  function ro(t2, e2, { horizontal: i2, minRotation: s2 }) {
    const n2 = $(s2), o2 = (i2 ? Math.sin(n2) : Math.cos(n2)) || 1e-3, a2 = 0.75 * e2 * ("" + t2).length;
    return Math.min(e2 / o2, a2);
  }
  class lo extends qs {
    constructor(t2) {
      super(t2), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
    }
    parse(t2, e2) {
      return s(t2) || ("number" == typeof t2 || t2 instanceof Number) && !isFinite(+t2) ? null : +t2;
    }
    handleTickRangeOptions() {
      const { beginAtZero: t2 } = this.options, { minDefined: e2, maxDefined: i2 } = this.getUserBounds();
      let { min: s2, max: n2 } = this;
      const o2 = (t3) => s2 = e2 ? s2 : t3, a2 = (t3) => n2 = i2 ? n2 : t3;
      if (t2) {
        const t3 = F(s2), e3 = F(n2);
        t3 < 0 && e3 < 0 ? a2(0) : t3 > 0 && e3 > 0 && o2(0);
      }
      if (s2 === n2) {
        let e3 = 0 === n2 ? 1 : Math.abs(0.05 * n2);
        a2(n2 + e3), t2 || o2(s2 - e3);
      }
      this.min = s2, this.max = n2;
    }
    getTickLimit() {
      const t2 = this.options.ticks;
      let e2, { maxTicksLimit: i2, stepSize: s2 } = t2;
      return s2 ? (e2 = Math.ceil(this.max / s2) - Math.floor(this.min / s2) + 1, e2 > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s2} would result generating up to ${e2} ticks. Limiting to 1000.`), e2 = 1e3)) : (e2 = this.computeTickLimit(), i2 = i2 || 11), i2 && (e2 = Math.min(i2, e2)), e2;
    }
    computeTickLimit() {
      return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
      const t2 = this.options, e2 = t2.ticks;
      let i2 = this.getTickLimit();
      i2 = Math.max(2, i2);
      const n2 = function(t3, e3) {
        const i3 = [], { bounds: n3, step: o2, min: a2, max: r2, precision: l2, count: h2, maxTicks: c2, maxDigits: d2, includeBounds: u2 } = t3, f2 = o2 || 1, g2 = c2 - 1, { min: p2, max: m2 } = e3, b2 = !s(a2), x2 = !s(r2), _2 = !s(h2), y2 = (m2 - p2) / (d2 + 1);
        let v2, M2, w2, k2, S2 = B((m2 - p2) / g2 / f2) * f2;
        if (S2 < 1e-14 && !b2 && !x2)
          return [{ value: p2 }, { value: m2 }];
        k2 = Math.ceil(m2 / S2) - Math.floor(p2 / S2), k2 > g2 && (S2 = B(k2 * S2 / g2 / f2) * f2), s(l2) || (v2 = Math.pow(10, l2), S2 = Math.ceil(S2 * v2) / v2), "ticks" === n3 ? (M2 = Math.floor(p2 / S2) * S2, w2 = Math.ceil(m2 / S2) * S2) : (M2 = p2, w2 = m2), b2 && x2 && o2 && H((r2 - a2) / o2, S2 / 1e3) ? (k2 = Math.round(Math.min((r2 - a2) / S2, c2)), S2 = (r2 - a2) / k2, M2 = a2, w2 = r2) : _2 ? (M2 = b2 ? a2 : M2, w2 = x2 ? r2 : w2, k2 = h2 - 1, S2 = (w2 - M2) / k2) : (k2 = (w2 - M2) / S2, k2 = V(k2, Math.round(k2), S2 / 1e3) ? Math.round(k2) : Math.ceil(k2));
        const P2 = Math.max(U(S2), U(M2));
        v2 = Math.pow(10, s(l2) ? P2 : l2), M2 = Math.round(M2 * v2) / v2, w2 = Math.round(w2 * v2) / v2;
        let D2 = 0;
        for (b2 && (u2 && M2 !== a2 ? (i3.push({ value: a2 }), M2 < a2 && D2++, V(Math.round((M2 + D2 * S2) * v2) / v2, a2, ro(a2, y2, t3)) && D2++) : M2 < a2 && D2++); D2 < k2; ++D2)
          i3.push({ value: Math.round((M2 + D2 * S2) * v2) / v2 });
        return x2 && u2 && w2 !== r2 ? i3.length && V(i3[i3.length - 1].value, r2, ro(r2, y2, t3)) ? i3[i3.length - 1].value = r2 : i3.push({ value: r2 }) : x2 && w2 !== r2 || i3.push({ value: w2 }), i3;
      }({ maxTicks: i2, bounds: t2.bounds, min: t2.min, max: t2.max, precision: e2.precision, step: e2.stepSize, count: e2.count, maxDigits: this._maxDigits(), horizontal: this.isHorizontal(), minRotation: e2.minRotation || 0, includeBounds: false !== e2.includeBounds }, this._range || this);
      return "ticks" === t2.bounds && j(n2, this, "value"), t2.reverse ? (n2.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), n2;
    }
    configure() {
      const t2 = this.ticks;
      let e2 = this.min, i2 = this.max;
      if (super.configure(), this.options.offset && t2.length) {
        const s2 = (i2 - e2) / Math.max(t2.length - 1, 1) / 2;
        e2 -= s2, i2 += s2;
      }
      this._startValue = e2, this._endValue = i2, this._valueRange = i2 - e2;
    }
    getLabelForValue(t2) {
      return ne(t2, this.chart.options.locale, this.options.ticks.format);
    }
  }
  class ho extends lo {
    determineDataLimits() {
      const { min: t2, max: e2 } = this.getMinMax(true);
      this.min = a(t2) ? t2 : 0, this.max = a(e2) ? e2 : 1, this.handleTickRangeOptions();
    }
    computeTickLimit() {
      const t2 = this.isHorizontal(), e2 = t2 ? this.width : this.height, i2 = $(this.options.ticks.minRotation), s2 = (t2 ? Math.sin(i2) : Math.cos(i2)) || 1e-3, n2 = this._resolveTickFontOptions(0);
      return Math.ceil(e2 / Math.min(40, n2.lineHeight / s2));
    }
    getPixelForValue(t2) {
      return null === t2 ? NaN : this.getPixelForDecimal((t2 - this._startValue) / this._valueRange);
    }
    getValueForPixel(t2) {
      return this._startValue + this.getDecimalForPixel(t2) * this._valueRange;
    }
  }
  __publicField(ho, "id", "linear");
  __publicField(ho, "defaults", { ticks: { callback: ae.formatters.numeric } });
  const co = (t2) => Math.floor(z(t2)), uo = (t2, e2) => Math.pow(10, co(t2) + e2);
  function fo(t2) {
    return 1 === t2 / Math.pow(10, co(t2));
  }
  function go(t2, e2, i2) {
    const s2 = Math.pow(10, i2), n2 = Math.floor(t2 / s2);
    return Math.ceil(e2 / s2) - n2;
  }
  function po(t2, { min: e2, max: i2 }) {
    e2 = r(t2.min, e2);
    const s2 = [], n2 = co(e2);
    let o2 = function(t3, e3) {
      let i3 = co(e3 - t3);
      for (; go(t3, e3, i3) > 10; )
        i3++;
      for (; go(t3, e3, i3) < 10; )
        i3--;
      return Math.min(i3, co(t3));
    }(e2, i2), a2 = o2 < 0 ? Math.pow(10, Math.abs(o2)) : 1;
    const l2 = Math.pow(10, o2), h2 = n2 > o2 ? Math.pow(10, n2) : 0, c2 = Math.round((e2 - h2) * a2) / a2, d2 = Math.floor((e2 - h2) / l2 / 10) * l2 * 10;
    let u2 = Math.floor((c2 - d2) / Math.pow(10, o2)), f2 = r(t2.min, Math.round((h2 + d2 + u2 * Math.pow(10, o2)) * a2) / a2);
    for (; f2 < i2; )
      s2.push({ value: f2, major: fo(f2), significand: u2 }), u2 >= 10 ? u2 = u2 < 15 ? 15 : 20 : u2++, u2 >= 20 && (o2++, u2 = 2, a2 = o2 >= 0 ? 1 : a2), f2 = Math.round((h2 + d2 + u2 * Math.pow(10, o2)) * a2) / a2;
    const g2 = r(t2.max, f2);
    return s2.push({ value: g2, major: fo(g2), significand: u2 }), s2;
  }
  class mo extends qs {
    constructor(t2) {
      super(t2), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
    }
    parse(t2, e2) {
      const i2 = lo.prototype.parse.apply(this, [t2, e2]);
      if (0 !== i2)
        return a(i2) && i2 > 0 ? i2 : null;
      this._zero = true;
    }
    determineDataLimits() {
      const { min: t2, max: e2 } = this.getMinMax(true);
      this.min = a(t2) ? Math.max(0, t2) : null, this.max = a(e2) ? Math.max(0, e2) : null, this.options.beginAtZero && (this._zero = true), this._zero && this.min !== this._suggestedMin && !a(this._userMin) && (this.min = t2 === uo(this.min, 0) ? uo(this.min, -1) : uo(this.min, 0)), this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
      const { minDefined: t2, maxDefined: e2 } = this.getUserBounds();
      let i2 = this.min, s2 = this.max;
      const n2 = (e3) => i2 = t2 ? i2 : e3, o2 = (t3) => s2 = e2 ? s2 : t3;
      i2 === s2 && (i2 <= 0 ? (n2(1), o2(10)) : (n2(uo(i2, -1)), o2(uo(s2, 1)))), i2 <= 0 && n2(uo(s2, -1)), s2 <= 0 && o2(uo(i2, 1)), this.min = i2, this.max = s2;
    }
    buildTicks() {
      const t2 = this.options, e2 = po({ min: this._userMin, max: this._userMax }, this);
      return "ticks" === t2.bounds && j(e2, this, "value"), t2.reverse ? (e2.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), e2;
    }
    getLabelForValue(t2) {
      return void 0 === t2 ? "0" : ne(t2, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
      const t2 = this.min;
      super.configure(), this._startValue = z(t2), this._valueRange = z(this.max) - z(t2);
    }
    getPixelForValue(t2) {
      return void 0 !== t2 && 0 !== t2 || (t2 = this.min), null === t2 || isNaN(t2) ? NaN : this.getPixelForDecimal(t2 === this.min ? 0 : (z(t2) - this._startValue) / this._valueRange);
    }
    getValueForPixel(t2) {
      const e2 = this.getDecimalForPixel(t2);
      return Math.pow(10, this._startValue + e2 * this._valueRange);
    }
  }
  __publicField(mo, "id", "logarithmic");
  __publicField(mo, "defaults", { ticks: { callback: ae.formatters.logarithmic, major: { enabled: true } } });
  function bo(t2) {
    const e2 = t2.ticks;
    if (e2.display && t2.display) {
      const t3 = Mi(e2.backdropPadding);
      return l(e2.font && e2.font.size, ue.font.size) + t3.height;
    }
    return 0;
  }
  function xo(t2, e2, i2, s2, n2) {
    return t2 === s2 || t2 === n2 ? { start: e2 - i2 / 2, end: e2 + i2 / 2 } : t2 < s2 || t2 > n2 ? { start: e2 - i2, end: e2 } : { start: e2, end: e2 + i2 };
  }
  function _o(t2) {
    const e2 = { l: t2.left + t2._padding.left, r: t2.right - t2._padding.right, t: t2.top + t2._padding.top, b: t2.bottom - t2._padding.bottom }, i2 = Object.assign({}, e2), s2 = [], o2 = [], a2 = t2._pointLabels.length, r2 = t2.options.pointLabels, l2 = r2.centerPointLabels ? C / a2 : 0;
    for (let u2 = 0; u2 < a2; u2++) {
      const a3 = r2.setContext(t2.getPointLabelContext(u2));
      o2[u2] = a3.padding;
      const f2 = t2.getPointPosition(u2, t2.drawingArea + o2[u2], l2), g2 = wi(a3.font), p2 = (h2 = t2.ctx, c2 = g2, d2 = n(d2 = t2._pointLabels[u2]) ? d2 : [d2], { w: Ce(h2, c2.string, d2), h: d2.length * c2.lineHeight });
      s2[u2] = p2;
      const m2 = G(t2.getIndexAngle(u2) + l2), b2 = Math.round(Y(m2));
      yo(i2, e2, m2, xo(b2, f2.x, p2.w, 0, 180), xo(b2, f2.y, p2.h, 90, 270));
    }
    var h2, c2, d2;
    t2.setCenterPoint(e2.l - i2.l, i2.r - e2.r, e2.t - i2.t, i2.b - e2.b), t2._pointLabelItems = function(t3, e3, i3) {
      const s3 = [], n2 = t3._pointLabels.length, o3 = t3.options, a3 = bo(o3) / 2, r3 = t3.drawingArea, l3 = o3.pointLabels.centerPointLabels ? C / n2 : 0;
      for (let o4 = 0; o4 < n2; o4++) {
        const n3 = t3.getPointPosition(o4, r3 + a3 + i3[o4], l3), h3 = Math.round(Y(G(n3.angle + E))), c3 = e3[o4], d3 = wo(n3.y, c3.h, h3), u2 = vo(h3), f2 = Mo(n3.x, c3.w, u2);
        s3.push({ x: n3.x, y: d3, textAlign: u2, left: f2, top: d3, right: f2 + c3.w, bottom: d3 + c3.h });
      }
      return s3;
    }(t2, s2, o2);
  }
  function yo(t2, e2, i2, s2, n2) {
    const o2 = Math.abs(Math.sin(i2)), a2 = Math.abs(Math.cos(i2));
    let r2 = 0, l2 = 0;
    s2.start < e2.l ? (r2 = (e2.l - s2.start) / o2, t2.l = Math.min(t2.l, e2.l - r2)) : s2.end > e2.r && (r2 = (s2.end - e2.r) / o2, t2.r = Math.max(t2.r, e2.r + r2)), n2.start < e2.t ? (l2 = (e2.t - n2.start) / a2, t2.t = Math.min(t2.t, e2.t - l2)) : n2.end > e2.b && (l2 = (n2.end - e2.b) / a2, t2.b = Math.max(t2.b, e2.b + l2));
  }
  function vo(t2) {
    return 0 === t2 || 180 === t2 ? "center" : t2 < 180 ? "left" : "right";
  }
  function Mo(t2, e2, i2) {
    return "right" === i2 ? t2 -= e2 : "center" === i2 && (t2 -= e2 / 2), t2;
  }
  function wo(t2, e2, i2) {
    return 90 === i2 || 270 === i2 ? t2 -= e2 / 2 : (i2 > 270 || i2 < 90) && (t2 -= e2), t2;
  }
  function ko(t2, e2, i2, s2) {
    const { ctx: n2 } = t2;
    if (i2)
      n2.arc(t2.xCenter, t2.yCenter, e2, 0, O);
    else {
      let i3 = t2.getPointPosition(0, e2);
      n2.moveTo(i3.x, i3.y);
      for (let o2 = 1; o2 < s2; o2++)
        i3 = t2.getPointPosition(o2, e2), n2.lineTo(i3.x, i3.y);
    }
  }
  class So extends lo {
    constructor(t2) {
      super(t2), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
    }
    setDimensions() {
      const t2 = this._padding = Mi(bo(this.options) / 2), e2 = this.width = this.maxWidth - t2.width, i2 = this.height = this.maxHeight - t2.height;
      this.xCenter = Math.floor(this.left + e2 / 2 + t2.left), this.yCenter = Math.floor(this.top + i2 / 2 + t2.top), this.drawingArea = Math.floor(Math.min(e2, i2) / 2);
    }
    determineDataLimits() {
      const { min: t2, max: e2 } = this.getMinMax(false);
      this.min = a(t2) && !isNaN(t2) ? t2 : 0, this.max = a(e2) && !isNaN(e2) ? e2 : 0, this.handleTickRangeOptions();
    }
    computeTickLimit() {
      return Math.ceil(this.drawingArea / bo(this.options));
    }
    generateTickLabels(t2) {
      lo.prototype.generateTickLabels.call(this, t2), this._pointLabels = this.getLabels().map((t3, e2) => {
        const i2 = d(this.options.pointLabels.callback, [t3, e2], this);
        return i2 || 0 === i2 ? i2 : "";
      }).filter((t3, e2) => this.chart.getDataVisibility(e2));
    }
    fit() {
      const t2 = this.options;
      t2.display && t2.pointLabels.display ? _o(this) : this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(t2, e2, i2, s2) {
      this.xCenter += Math.floor((t2 - e2) / 2), this.yCenter += Math.floor((i2 - s2) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t2, e2, i2, s2));
    }
    getIndexAngle(t2) {
      return G(t2 * (O / (this._pointLabels.length || 1)) + $(this.options.startAngle || 0));
    }
    getDistanceFromCenterForValue(t2) {
      if (s(t2))
        return NaN;
      const e2 = this.drawingArea / (this.max - this.min);
      return this.options.reverse ? (this.max - t2) * e2 : (t2 - this.min) * e2;
    }
    getValueForDistanceFromCenter(t2) {
      if (s(t2))
        return NaN;
      const e2 = t2 / (this.drawingArea / (this.max - this.min));
      return this.options.reverse ? this.max - e2 : this.min + e2;
    }
    getPointLabelContext(t2) {
      const e2 = this._pointLabels || [];
      if (t2 >= 0 && t2 < e2.length) {
        const i2 = e2[t2];
        return function(t3, e3, i3) {
          return Pi(t3, { label: i3, index: e3, type: "pointLabel" });
        }(this.getContext(), t2, i2);
      }
    }
    getPointPosition(t2, e2, i2 = 0) {
      const s2 = this.getIndexAngle(t2) - E + i2;
      return { x: Math.cos(s2) * e2 + this.xCenter, y: Math.sin(s2) * e2 + this.yCenter, angle: s2 };
    }
    getPointPositionForValue(t2, e2) {
      return this.getPointPosition(t2, this.getDistanceFromCenterForValue(e2));
    }
    getBasePosition(t2) {
      return this.getPointPositionForValue(t2 || 0, this.getBaseValue());
    }
    getPointLabelPosition(t2) {
      const { left: e2, top: i2, right: s2, bottom: n2 } = this._pointLabelItems[t2];
      return { left: e2, top: i2, right: s2, bottom: n2 };
    }
    drawBackground() {
      const { backgroundColor: t2, grid: { circular: e2 } } = this.options;
      if (t2) {
        const i2 = this.ctx;
        i2.save(), i2.beginPath(), ko(this, this.getDistanceFromCenterForValue(this._endValue), e2, this._pointLabels.length), i2.closePath(), i2.fillStyle = t2, i2.fill(), i2.restore();
      }
    }
    drawGrid() {
      const t2 = this.ctx, e2 = this.options, { angleLines: i2, grid: n2, border: o2 } = e2, a2 = this._pointLabels.length;
      let r2, l2, h2;
      if (e2.pointLabels.display && function(t3, e3) {
        const { ctx: i3, options: { pointLabels: n3 } } = t3;
        for (let o3 = e3 - 1; o3 >= 0; o3--) {
          const e4 = n3.setContext(t3.getPointLabelContext(o3)), a3 = wi(e4.font), { x: r3, y: l3, textAlign: h3, left: c2, top: d2, right: u2, bottom: f2 } = t3._pointLabelItems[o3], { backdropColor: g2 } = e4;
          if (!s(g2)) {
            const t4 = vi(e4.borderRadius), s2 = Mi(e4.backdropPadding);
            i3.fillStyle = g2;
            const n4 = c2 - s2.left, o4 = d2 - s2.top, a4 = u2 - c2 + s2.width, r4 = f2 - d2 + s2.height;
            Object.values(t4).some((t5) => 0 !== t5) ? (i3.beginPath(), We(i3, { x: n4, y: o4, w: a4, h: r4, radius: t4 }), i3.fill()) : i3.fillRect(n4, o4, a4, r4);
          }
          Ve(i3, t3._pointLabels[o3], r3, l3 + a3.lineHeight / 2, a3, { color: e4.color, textAlign: h3, textBaseline: "middle" });
        }
      }(this, a2), n2.display && this.ticks.forEach((t3, e3) => {
        if (0 !== e3) {
          l2 = this.getDistanceFromCenterForValue(t3.value);
          const i3 = this.getContext(e3), s2 = n2.setContext(i3), r3 = o2.setContext(i3);
          !function(t4, e4, i4, s3, n3) {
            const o3 = t4.ctx, a3 = e4.circular, { color: r4, lineWidth: l3 } = e4;
            !a3 && !s3 || !r4 || !l3 || i4 < 0 || (o3.save(), o3.strokeStyle = r4, o3.lineWidth = l3, o3.setLineDash(n3.dash), o3.lineDashOffset = n3.dashOffset, o3.beginPath(), ko(t4, i4, a3, s3), o3.closePath(), o3.stroke(), o3.restore());
          }(this, s2, l2, a2, r3);
        }
      }), i2.display) {
        for (t2.save(), r2 = a2 - 1; r2 >= 0; r2--) {
          const s2 = i2.setContext(this.getPointLabelContext(r2)), { color: n3, lineWidth: o3 } = s2;
          o3 && n3 && (t2.lineWidth = o3, t2.strokeStyle = n3, t2.setLineDash(s2.borderDash), t2.lineDashOffset = s2.borderDashOffset, l2 = this.getDistanceFromCenterForValue(e2.ticks.reverse ? this.min : this.max), h2 = this.getPointPosition(r2, l2), t2.beginPath(), t2.moveTo(this.xCenter, this.yCenter), t2.lineTo(h2.x, h2.y), t2.stroke());
        }
        t2.restore();
      }
    }
    drawBorder() {
    }
    drawLabels() {
      const t2 = this.ctx, e2 = this.options, i2 = e2.ticks;
      if (!i2.display)
        return;
      const s2 = this.getIndexAngle(0);
      let n2, o2;
      t2.save(), t2.translate(this.xCenter, this.yCenter), t2.rotate(s2), t2.textAlign = "center", t2.textBaseline = "middle", this.ticks.forEach((s3, a2) => {
        if (0 === a2 && !e2.reverse)
          return;
        const r2 = i2.setContext(this.getContext(a2)), l2 = wi(r2.font);
        if (n2 = this.getDistanceFromCenterForValue(this.ticks[a2].value), r2.showLabelBackdrop) {
          t2.font = l2.string, o2 = t2.measureText(s3.label).width, t2.fillStyle = r2.backdropColor;
          const e3 = Mi(r2.backdropPadding);
          t2.fillRect(-o2 / 2 - e3.left, -n2 - l2.size / 2 - e3.top, o2 + e3.width, l2.size + e3.height);
        }
        Ve(t2, s3.label, 0, -n2, l2, { color: r2.color });
      }), t2.restore();
    }
    drawTitle() {
    }
  }
  __publicField(So, "id", "radialLinear");
  __publicField(So, "defaults", { display: true, animate: true, position: "chartArea", angleLines: { display: true, lineWidth: 1, borderDash: [], borderDashOffset: 0 }, grid: { circular: false }, startAngle: 0, ticks: { showLabelBackdrop: true, callback: ae.formatters.numeric }, pointLabels: { backdropColor: void 0, backdropPadding: 2, display: true, font: { size: 10 }, callback: (t2) => t2, padding: 5, centerPointLabels: false } });
  __publicField(So, "defaultRoutes", { "angleLines.color": "borderColor", "pointLabels.color": "color", "ticks.color": "color" });
  __publicField(So, "descriptors", { angleLines: { _fallback: "grid" } });
  const Po = { millisecond: { common: true, size: 1, steps: 1e3 }, second: { common: true, size: 1e3, steps: 60 }, minute: { common: true, size: 6e4, steps: 60 }, hour: { common: true, size: 36e5, steps: 24 }, day: { common: true, size: 864e5, steps: 30 }, week: { common: false, size: 6048e5, steps: 4 }, month: { common: true, size: 2628e6, steps: 12 }, quarter: { common: false, size: 7884e6, steps: 4 }, year: { common: true, size: 3154e7 } }, Do = Object.keys(Po);
  function Co(t2, e2) {
    return t2 - e2;
  }
  function Oo(t2, e2) {
    if (s(e2))
      return null;
    const i2 = t2._adapter, { parser: n2, round: o2, isoWeekday: r2 } = t2._parseOpts;
    let l2 = e2;
    return "function" == typeof n2 && (l2 = n2(l2)), a(l2) || (l2 = "string" == typeof n2 ? i2.parse(l2, n2) : i2.parse(l2)), null === l2 ? null : (o2 && (l2 = "week" !== o2 || !W(r2) && true !== r2 ? i2.startOf(l2, o2) : i2.startOf(l2, "isoWeek", r2)), +l2);
  }
  function Ao(t2, e2, i2, s2) {
    const n2 = Do.length;
    for (let o2 = Do.indexOf(t2); o2 < n2 - 1; ++o2) {
      const t3 = Po[Do[o2]], n3 = t3.steps ? t3.steps : Number.MAX_SAFE_INTEGER;
      if (t3.common && Math.ceil((i2 - e2) / (n3 * t3.size)) <= s2)
        return Do[o2];
    }
    return Do[n2 - 1];
  }
  function To(t2, e2, i2) {
    if (i2) {
      if (i2.length) {
        const { lo: s2, hi: n2 } = et(i2, e2);
        t2[i2[s2] >= e2 ? i2[s2] : i2[n2]] = true;
      }
    } else
      t2[e2] = true;
  }
  function Lo(t2, e2, i2) {
    const s2 = [], n2 = {}, o2 = e2.length;
    let a2, r2;
    for (a2 = 0; a2 < o2; ++a2)
      r2 = e2[a2], n2[r2] = a2, s2.push({ value: r2, major: false });
    return 0 !== o2 && i2 ? function(t3, e3, i3, s3) {
      const n3 = t3._adapter, o3 = +n3.startOf(e3[0].value, s3), a3 = e3[e3.length - 1].value;
      let r3, l2;
      for (r3 = o3; r3 <= a3; r3 = +n3.add(r3, 1, s3))
        l2 = i3[r3], l2 >= 0 && (e3[l2].major = true);
      return e3;
    }(t2, s2, n2, i2) : s2;
  }
  class Eo extends qs {
    constructor(t2) {
      super(t2), this._cache = { data: [], labels: [], all: [] }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = false, this._parseOpts = void 0;
    }
    init(t2, e2 = {}) {
      const i2 = t2.time || (t2.time = {}), s2 = this._adapter = new Pn._date(t2.adapters.date);
      s2.init(e2), x(i2.displayFormats, s2.formats()), this._parseOpts = { parser: i2.parser, round: i2.round, isoWeekday: i2.isoWeekday }, super.init(t2), this._normalized = e2.normalized;
    }
    parse(t2, e2) {
      return void 0 === t2 ? null : Oo(this, t2);
    }
    beforeLayout() {
      super.beforeLayout(), this._cache = { data: [], labels: [], all: [] };
    }
    determineDataLimits() {
      const t2 = this.options, e2 = this._adapter, i2 = t2.time.unit || "day";
      let { min: s2, max: n2, minDefined: o2, maxDefined: r2 } = this.getUserBounds();
      function l2(t3) {
        o2 || isNaN(t3.min) || (s2 = Math.min(s2, t3.min)), r2 || isNaN(t3.max) || (n2 = Math.max(n2, t3.max));
      }
      o2 && r2 || (l2(this._getLabelBounds()), "ticks" === t2.bounds && "labels" === t2.ticks.source || l2(this.getMinMax(false))), s2 = a(s2) && !isNaN(s2) ? s2 : +e2.startOf(Date.now(), i2), n2 = a(n2) && !isNaN(n2) ? n2 : +e2.endOf(Date.now(), i2) + 1, this.min = Math.min(s2, n2 - 1), this.max = Math.max(s2 + 1, n2);
    }
    _getLabelBounds() {
      const t2 = this.getLabelTimestamps();
      let e2 = Number.POSITIVE_INFINITY, i2 = Number.NEGATIVE_INFINITY;
      return t2.length && (e2 = t2[0], i2 = t2[t2.length - 1]), { min: e2, max: i2 };
    }
    buildTicks() {
      const t2 = this.options, e2 = t2.time, i2 = t2.ticks, s2 = "labels" === i2.source ? this.getLabelTimestamps() : this._generate();
      "ticks" === t2.bounds && s2.length && (this.min = this._userMin || s2[0], this.max = this._userMax || s2[s2.length - 1]);
      const n2 = this.min, o2 = nt(s2, n2, this.max);
      return this._unit = e2.unit || (i2.autoSkip ? Ao(e2.minUnit, this.min, this.max, this._getLabelCapacity(n2)) : function(t3, e3, i3, s3, n3) {
        for (let o3 = Do.length - 1; o3 >= Do.indexOf(i3); o3--) {
          const i4 = Do[o3];
          if (Po[i4].common && t3._adapter.diff(n3, s3, i4) >= e3 - 1)
            return i4;
        }
        return Do[i3 ? Do.indexOf(i3) : 0];
      }(this, o2.length, e2.minUnit, this.min, this.max)), this._majorUnit = i2.major.enabled && "year" !== this._unit ? function(t3) {
        for (let e3 = Do.indexOf(t3) + 1, i3 = Do.length; e3 < i3; ++e3)
          if (Po[Do[e3]].common)
            return Do[e3];
      }(this._unit) : void 0, this.initOffsets(s2), t2.reverse && o2.reverse(), Lo(this, o2, this._majorUnit);
    }
    afterAutoSkip() {
      this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t2) => +t2.value));
    }
    initOffsets(t2 = []) {
      let e2, i2, s2 = 0, n2 = 0;
      this.options.offset && t2.length && (e2 = this.getDecimalForValue(t2[0]), s2 = 1 === t2.length ? 1 - e2 : (this.getDecimalForValue(t2[1]) - e2) / 2, i2 = this.getDecimalForValue(t2[t2.length - 1]), n2 = 1 === t2.length ? i2 : (i2 - this.getDecimalForValue(t2[t2.length - 2])) / 2);
      const o2 = t2.length < 3 ? 0.5 : 0.25;
      s2 = J(s2, 0, o2), n2 = J(n2, 0, o2), this._offsets = { start: s2, end: n2, factor: 1 / (s2 + 1 + n2) };
    }
    _generate() {
      const t2 = this._adapter, e2 = this.min, i2 = this.max, s2 = this.options, n2 = s2.time, o2 = n2.unit || Ao(n2.minUnit, e2, i2, this._getLabelCapacity(e2)), a2 = l(s2.ticks.stepSize, 1), r2 = "week" === o2 && n2.isoWeekday, h2 = W(r2) || true === r2, c2 = {};
      let d2, u2, f2 = e2;
      if (h2 && (f2 = +t2.startOf(f2, "isoWeek", r2)), f2 = +t2.startOf(f2, h2 ? "day" : o2), t2.diff(i2, e2, o2) > 1e5 * a2)
        throw new Error(e2 + " and " + i2 + " are too far apart with stepSize of " + a2 + " " + o2);
      const g2 = "data" === s2.ticks.source && this.getDataTimestamps();
      for (d2 = f2, u2 = 0; d2 < i2; d2 = +t2.add(d2, a2, o2), u2++)
        To(c2, d2, g2);
      return d2 !== i2 && "ticks" !== s2.bounds && 1 !== u2 || To(c2, d2, g2), Object.keys(c2).sort((t3, e3) => t3 - e3).map((t3) => +t3);
    }
    getLabelForValue(t2) {
      const e2 = this._adapter, i2 = this.options.time;
      return i2.tooltipFormat ? e2.format(t2, i2.tooltipFormat) : e2.format(t2, i2.displayFormats.datetime);
    }
    _tickFormatFunction(t2, e2, i2, s2) {
      const n2 = this.options, o2 = n2.ticks.callback;
      if (o2)
        return d(o2, [t2, e2, i2], this);
      const a2 = n2.time.displayFormats, r2 = this._unit, l2 = this._majorUnit, h2 = r2 && a2[r2], c2 = l2 && a2[l2], u2 = i2[e2], f2 = l2 && c2 && u2 && u2.major;
      return this._adapter.format(t2, s2 || (f2 ? c2 : h2));
    }
    generateTickLabels(t2) {
      let e2, i2, s2;
      for (e2 = 0, i2 = t2.length; e2 < i2; ++e2)
        s2 = t2[e2], s2.label = this._tickFormatFunction(s2.value, e2, t2);
    }
    getDecimalForValue(t2) {
      return null === t2 ? NaN : (t2 - this.min) / (this.max - this.min);
    }
    getPixelForValue(t2) {
      const e2 = this._offsets, i2 = this.getDecimalForValue(t2);
      return this.getPixelForDecimal((e2.start + i2) * e2.factor);
    }
    getValueForPixel(t2) {
      const e2 = this._offsets, i2 = this.getDecimalForPixel(t2) / e2.factor - e2.end;
      return this.min + i2 * (this.max - this.min);
    }
    _getLabelSize(t2) {
      const e2 = this.options.ticks, i2 = this.ctx.measureText(t2).width, s2 = $(this.isHorizontal() ? e2.maxRotation : e2.minRotation), n2 = Math.cos(s2), o2 = Math.sin(s2), a2 = this._resolveTickFontOptions(0).size;
      return { w: i2 * n2 + a2 * o2, h: i2 * o2 + a2 * n2 };
    }
    _getLabelCapacity(t2) {
      const e2 = this.options.time, i2 = e2.displayFormats, s2 = i2[e2.unit] || i2.millisecond, n2 = this._tickFormatFunction(t2, 0, Lo(this, [t2], this._majorUnit), s2), o2 = this._getLabelSize(n2), a2 = Math.floor(this.isHorizontal() ? this.width / o2.w : this.height / o2.h) - 1;
      return a2 > 0 ? a2 : 1;
    }
    getDataTimestamps() {
      let t2, e2, i2 = this._cache.data || [];
      if (i2.length)
        return i2;
      const s2 = this.getMatchingVisibleMetas();
      if (this._normalized && s2.length)
        return this._cache.data = s2[0].controller.getAllParsedValues(this);
      for (t2 = 0, e2 = s2.length; t2 < e2; ++t2)
        i2 = i2.concat(s2[t2].controller.getAllParsedValues(this));
      return this._cache.data = this.normalize(i2);
    }
    getLabelTimestamps() {
      const t2 = this._cache.labels || [];
      let e2, i2;
      if (t2.length)
        return t2;
      const s2 = this.getLabels();
      for (e2 = 0, i2 = s2.length; e2 < i2; ++e2)
        t2.push(Oo(this, s2[e2]));
      return this._cache.labels = this._normalized ? t2 : this.normalize(t2);
    }
    normalize(t2) {
      return lt(t2.sort(Co));
    }
  }
  __publicField(Eo, "id", "time");
  __publicField(Eo, "defaults", { bounds: "data", adapters: {}, time: { parser: false, unit: false, round: false, isoWeekday: false, minUnit: "millisecond", displayFormats: {} }, ticks: { source: "auto", callback: false, major: { enabled: false } } });
  function Ro(t2, e2, i2) {
    let s2, n2, o2, a2, r2 = 0, l2 = t2.length - 1;
    i2 ? (e2 >= t2[r2].pos && e2 <= t2[l2].pos && ({ lo: r2, hi: l2 } = it(t2, "pos", e2)), { pos: s2, time: o2 } = t2[r2], { pos: n2, time: a2 } = t2[l2]) : (e2 >= t2[r2].time && e2 <= t2[l2].time && ({ lo: r2, hi: l2 } = it(t2, "time", e2)), { time: s2, pos: o2 } = t2[r2], { time: n2, pos: a2 } = t2[l2]);
    const h2 = n2 - s2;
    return h2 ? o2 + (a2 - o2) * (e2 - s2) / h2 : o2;
  }
  var Io = Object.freeze({ __proto__: null, CategoryScale: (_j = class extends qs {
    constructor(t2) {
      super(t2), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
    }
    init(t2) {
      const e2 = this._addedLabels;
      if (e2.length) {
        const t3 = this.getLabels();
        for (const { index: i2, label: s2 } of e2)
          t3[i2] === s2 && t3.splice(i2, 1);
        this._addedLabels = [];
      }
      super.init(t2);
    }
    parse(t2, e2) {
      if (s(t2))
        return null;
      const i2 = this.getLabels();
      return ((t3, e3) => null === t3 ? null : J(Math.round(t3), 0, e3))(e2 = isFinite(e2) && i2[e2] === t2 ? e2 : oo(i2, t2, l(e2, t2), this._addedLabels), i2.length - 1);
    }
    determineDataLimits() {
      const { minDefined: t2, maxDefined: e2 } = this.getUserBounds();
      let { min: i2, max: s2 } = this.getMinMax(true);
      "ticks" === this.options.bounds && (t2 || (i2 = 0), e2 || (s2 = this.getLabels().length - 1)), this.min = i2, this.max = s2;
    }
    buildTicks() {
      const t2 = this.min, e2 = this.max, i2 = this.options.offset, s2 = [];
      let n2 = this.getLabels();
      n2 = 0 === t2 && e2 === n2.length - 1 ? n2 : n2.slice(t2, e2 + 1), this._valueRange = Math.max(n2.length - (i2 ? 0 : 1), 1), this._startValue = this.min - (i2 ? 0.5 : 0);
      for (let i3 = t2; i3 <= e2; i3++)
        s2.push({ value: i3 });
      return s2;
    }
    getLabelForValue(t2) {
      return ao.call(this, t2);
    }
    configure() {
      super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
    }
    getPixelForValue(t2) {
      return "number" != typeof t2 && (t2 = this.parse(t2)), null === t2 ? NaN : this.getPixelForDecimal((t2 - this._startValue) / this._valueRange);
    }
    getPixelForTick(t2) {
      const e2 = this.ticks;
      return t2 < 0 || t2 > e2.length - 1 ? null : this.getPixelForValue(e2[t2].value);
    }
    getValueForPixel(t2) {
      return Math.round(this._startValue + this.getDecimalForPixel(t2) * this._valueRange);
    }
    getBasePixel() {
      return this.bottom;
    }
  }, __publicField(_j, "id", "category"), __publicField(_j, "defaults", { ticks: { callback: ao } }), _j), LinearScale: ho, LogarithmicScale: mo, RadialLinearScale: So, TimeScale: Eo, TimeSeriesScale: (_k = class extends Eo {
    constructor(t2) {
      super(t2), this._table = [], this._minPos = void 0, this._tableRange = void 0;
    }
    initOffsets() {
      const t2 = this._getTimestampsForTable(), e2 = this._table = this.buildLookupTable(t2);
      this._minPos = Ro(e2, this.min), this._tableRange = Ro(e2, this.max) - this._minPos, super.initOffsets(t2);
    }
    buildLookupTable(t2) {
      const { min: e2, max: i2 } = this, s2 = [], n2 = [];
      let o2, a2, r2, l2, h2;
      for (o2 = 0, a2 = t2.length; o2 < a2; ++o2)
        l2 = t2[o2], l2 >= e2 && l2 <= i2 && s2.push(l2);
      if (s2.length < 2)
        return [{ time: e2, pos: 0 }, { time: i2, pos: 1 }];
      for (o2 = 0, a2 = s2.length; o2 < a2; ++o2)
        h2 = s2[o2 + 1], r2 = s2[o2 - 1], l2 = s2[o2], Math.round((h2 + r2) / 2) !== l2 && n2.push({ time: l2, pos: o2 / (a2 - 1) });
      return n2;
    }
    _getTimestampsForTable() {
      let t2 = this._cache.all || [];
      if (t2.length)
        return t2;
      const e2 = this.getDataTimestamps(), i2 = this.getLabelTimestamps();
      return t2 = e2.length && i2.length ? this.normalize(e2.concat(i2)) : e2.length ? e2 : i2, t2 = this._cache.all = t2, t2;
    }
    getDecimalForValue(t2) {
      return (Ro(this._table, t2) - this._minPos) / this._tableRange;
    }
    getValueForPixel(t2) {
      const e2 = this._offsets, i2 = this.getDecimalForPixel(t2) / e2.factor - e2.end;
      return Ro(this._table, i2 * this._tableRange + this._minPos, true);
    }
  }, __publicField(_k, "id", "timeseries"), __publicField(_k, "defaults", Eo.defaults), _k) });
  const zo = ["rgb(54, 162, 235)", "rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"], Fo = zo.map((t2) => t2.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
  function Vo(t2) {
    return zo[t2 % zo.length];
  }
  function Bo(t2) {
    return Fo[t2 % Fo.length];
  }
  function No(t2) {
    let e2 = 0;
    return (i2, s2) => {
      const n2 = t2.getDatasetMeta(s2).controller;
      n2 instanceof In ? e2 = function(t3, e3) {
        return t3.backgroundColor = t3.data.map(() => Vo(e3++)), e3;
      }(i2, e2) : n2 instanceof zn ? e2 = function(t3, e3) {
        return t3.backgroundColor = t3.data.map(() => Bo(e3++)), e3;
      }(i2, e2) : n2 && (e2 = function(t3, e3) {
        return t3.borderColor = Vo(e3), t3.backgroundColor = Bo(e3), ++e3;
      }(i2, e2));
    };
  }
  function Wo(t2) {
    let e2;
    for (e2 in t2)
      if (t2[e2].borderColor || t2[e2].backgroundColor)
        return true;
    return false;
  }
  var Ho = { id: "colors", defaults: { enabled: true, forceOverride: false }, beforeLayout(t2, e2, i2) {
    if (!i2.enabled)
      return;
    const { options: { elements: s2 }, data: { datasets: n2 } } = t2.config;
    if (!i2.forceOverride && (Wo(n2) || s2 && Wo(s2)))
      return;
    const o2 = No(t2);
    n2.forEach(o2);
  } };
  function jo(t2) {
    if (t2._decimated) {
      const e2 = t2._data;
      delete t2._decimated, delete t2._data, Object.defineProperty(t2, "data", { value: e2 });
    }
  }
  function $o(t2) {
    t2.data.datasets.forEach((t3) => {
      jo(t3);
    });
  }
  var Yo = { id: "decimation", defaults: { algorithm: "min-max", enabled: false }, beforeElementsUpdate: (t2, e2, i2) => {
    if (!i2.enabled)
      return void $o(t2);
    const n2 = t2.width;
    t2.data.datasets.forEach((e3, o2) => {
      const { _data: a2, indexAxis: r2 } = e3, l2 = t2.getDatasetMeta(o2), h2 = a2 || e3.data;
      if ("y" === ki([r2, t2.options.indexAxis]))
        return;
      if (!l2.controller.supportsDecimation)
        return;
      const c2 = t2.scales[l2.xAxisID];
      if ("linear" !== c2.type && "time" !== c2.type)
        return;
      if (t2.options.parsing)
        return;
      let { start: d2, count: u2 } = function(t3, e4) {
        const i3 = e4.length;
        let s2, n3 = 0;
        const { iScale: o3 } = t3, { min: a3, max: r3, minDefined: l3, maxDefined: h3 } = o3.getUserBounds();
        return l3 && (n3 = J(it(e4, o3.axis, a3).lo, 0, i3 - 1)), s2 = h3 ? J(it(e4, o3.axis, r3).hi + 1, n3, i3) - n3 : i3 - n3, { start: n3, count: s2 };
      }(l2, h2);
      if (u2 <= (i2.threshold || 4 * n2))
        return void jo(e3);
      let f2;
      switch (s(a2) && (e3._data = h2, delete e3.data, Object.defineProperty(e3, "data", { configurable: true, enumerable: true, get: function() {
        return this._decimated;
      }, set: function(t3) {
        this._data = t3;
      } })), i2.algorithm) {
        case "lttb":
          f2 = function(t3, e4, i3, s2, n3) {
            const o3 = n3.samples || s2;
            if (o3 >= i3)
              return t3.slice(e4, e4 + i3);
            const a3 = [], r3 = (i3 - 2) / (o3 - 2);
            let l3 = 0;
            const h3 = e4 + i3 - 1;
            let c3, d3, u3, f3, g2, p2 = e4;
            for (a3[l3++] = t3[p2], c3 = 0; c3 < o3 - 2; c3++) {
              let s3, n4 = 0, o4 = 0;
              const h4 = Math.floor((c3 + 1) * r3) + 1 + e4, m2 = Math.min(Math.floor((c3 + 2) * r3) + 1, i3) + e4, b2 = m2 - h4;
              for (s3 = h4; s3 < m2; s3++)
                n4 += t3[s3].x, o4 += t3[s3].y;
              n4 /= b2, o4 /= b2;
              const x2 = Math.floor(c3 * r3) + 1 + e4, _2 = Math.min(Math.floor((c3 + 1) * r3) + 1, i3) + e4, { x: y2, y: v2 } = t3[p2];
              for (u3 = f3 = -1, s3 = x2; s3 < _2; s3++)
                f3 = 0.5 * Math.abs((y2 - n4) * (t3[s3].y - v2) - (y2 - t3[s3].x) * (o4 - v2)), f3 > u3 && (u3 = f3, d3 = t3[s3], g2 = s3);
              a3[l3++] = d3, p2 = g2;
            }
            return a3[l3++] = t3[h3], a3;
          }(h2, d2, u2, n2, i2);
          break;
        case "min-max":
          f2 = function(t3, e4, i3, n3) {
            let o3, a3, r3, l3, h3, c3, d3, u3, f3, g2, p2 = 0, m2 = 0;
            const b2 = [], x2 = e4 + i3 - 1, _2 = t3[e4].x, y2 = t3[x2].x - _2;
            for (o3 = e4; o3 < e4 + i3; ++o3) {
              a3 = t3[o3], r3 = (a3.x - _2) / y2 * n3, l3 = a3.y;
              const e5 = 0 | r3;
              if (e5 === h3)
                l3 < f3 ? (f3 = l3, c3 = o3) : l3 > g2 && (g2 = l3, d3 = o3), p2 = (m2 * p2 + a3.x) / ++m2;
              else {
                const i4 = o3 - 1;
                if (!s(c3) && !s(d3)) {
                  const e6 = Math.min(c3, d3), s2 = Math.max(c3, d3);
                  e6 !== u3 && e6 !== i4 && b2.push({ ...t3[e6], x: p2 }), s2 !== u3 && s2 !== i4 && b2.push({ ...t3[s2], x: p2 });
                }
                o3 > 0 && i4 !== u3 && b2.push(t3[i4]), b2.push(a3), h3 = e5, m2 = 0, f3 = g2 = l3, c3 = d3 = u3 = o3;
              }
            }
            return b2;
          }(h2, d2, u2, n2);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${i2.algorithm}'`);
      }
      e3._decimated = f2;
    });
  }, destroy(t2) {
    $o(t2);
  } };
  function Uo(t2, e2, i2, s2) {
    if (s2)
      return;
    let n2 = e2[t2], o2 = i2[t2];
    return "angle" === t2 && (n2 = G(n2), o2 = G(o2)), { property: t2, start: n2, end: o2 };
  }
  function Xo(t2, e2, i2) {
    for (; e2 > t2; e2--) {
      const t3 = i2[e2];
      if (!isNaN(t3.x) && !isNaN(t3.y))
        break;
    }
    return e2;
  }
  function qo(t2, e2, i2, s2) {
    return t2 && e2 ? s2(t2[i2], e2[i2]) : t2 ? t2[i2] : e2 ? e2[i2] : 0;
  }
  function Ko(t2, e2) {
    let i2 = [], s2 = false;
    return n(t2) ? (s2 = true, i2 = t2) : i2 = function(t3, e3) {
      const { x: i3 = null, y: s3 = null } = t3 || {}, n2 = e3.points, o2 = [];
      return e3.segments.forEach(({ start: t4, end: e4 }) => {
        e4 = Xo(t4, e4, n2);
        const a2 = n2[t4], r2 = n2[e4];
        null !== s3 ? (o2.push({ x: a2.x, y: s3 }), o2.push({ x: r2.x, y: s3 })) : null !== i3 && (o2.push({ x: i3, y: a2.y }), o2.push({ x: i3, y: r2.y }));
      }), o2;
    }(t2, e2), i2.length ? new Gn({ points: i2, options: { tension: 0 }, _loop: s2, _fullLoop: s2 }) : null;
  }
  function Go(t2) {
    return t2 && false !== t2.fill;
  }
  function Zo(t2, e2, i2) {
    let s2 = t2[e2].fill;
    const n2 = [e2];
    let o2;
    if (!i2)
      return s2;
    for (; false !== s2 && -1 === n2.indexOf(s2); ) {
      if (!a(s2))
        return s2;
      if (o2 = t2[s2], !o2)
        return false;
      if (o2.visible)
        return s2;
      n2.push(s2), s2 = o2.fill;
    }
    return false;
  }
  function Jo(t2, e2, i2) {
    const s2 = function(t3) {
      const e3 = t3.options, i3 = e3.fill;
      let s3 = l(i3 && i3.target, i3);
      void 0 === s3 && (s3 = !!e3.backgroundColor);
      if (false === s3 || null === s3)
        return false;
      if (true === s3)
        return "origin";
      return s3;
    }(t2);
    if (o(s2))
      return !isNaN(s2.value) && s2;
    let n2 = parseFloat(s2);
    return a(n2) && Math.floor(n2) === n2 ? function(t3, e3, i3, s3) {
      "-" !== t3 && "+" !== t3 || (i3 = e3 + i3);
      if (i3 === e3 || i3 < 0 || i3 >= s3)
        return false;
      return i3;
    }(s2[0], e2, n2, i2) : ["origin", "start", "end", "stack", "shape"].indexOf(s2) >= 0 && s2;
  }
  function Qo(t2, e2, i2) {
    const s2 = [];
    for (let n2 = 0; n2 < i2.length; n2++) {
      const o2 = i2[n2], { first: a2, last: r2, point: l2 } = ta(o2, e2, "x");
      if (!(!l2 || a2 && r2)) {
        if (a2)
          s2.unshift(l2);
        else if (t2.push(l2), !r2)
          break;
      }
    }
    t2.push(...s2);
  }
  function ta(t2, e2, i2) {
    const s2 = t2.interpolate(e2, i2);
    if (!s2)
      return {};
    const n2 = s2[i2], o2 = t2.segments, a2 = t2.points;
    let r2 = false, l2 = false;
    for (let t3 = 0; t3 < o2.length; t3++) {
      const e3 = o2[t3], s3 = a2[e3.start][i2], h2 = a2[e3.end][i2];
      if (tt(n2, s3, h2)) {
        r2 = n2 === s3, l2 = n2 === h2;
        break;
      }
    }
    return { first: r2, last: l2, point: s2 };
  }
  class ea {
    constructor(t2) {
      this.x = t2.x, this.y = t2.y, this.radius = t2.radius;
    }
    pathSegment(t2, e2, i2) {
      const { x: s2, y: n2, radius: o2 } = this;
      return e2 = e2 || { start: 0, end: O }, t2.arc(s2, n2, o2, e2.end, e2.start, true), !i2.bounds;
    }
    interpolate(t2) {
      const { x: e2, y: i2, radius: s2 } = this, n2 = t2.angle;
      return { x: e2 + Math.cos(n2) * s2, y: i2 + Math.sin(n2) * s2, angle: n2 };
    }
  }
  function ia(t2) {
    const { chart: e2, fill: i2, line: s2 } = t2;
    if (a(i2))
      return function(t3, e3) {
        const i3 = t3.getDatasetMeta(e3);
        return i3 && t3.isDatasetVisible(e3) ? i3.dataset : null;
      }(e2, i2);
    if ("stack" === i2)
      return function(t3) {
        const { scale: e3, index: i3, line: s3 } = t3, n3 = [], o2 = s3.segments, a2 = s3.points, r2 = function(t4, e4) {
          const i4 = [], s4 = t4.getMatchingVisibleMetas("line");
          for (let t5 = 0; t5 < s4.length; t5++) {
            const n4 = s4[t5];
            if (n4.index === e4)
              break;
            n4.hidden || i4.unshift(n4.dataset);
          }
          return i4;
        }(e3, i3);
        r2.push(Ko({ x: null, y: e3.bottom }, s3));
        for (let t4 = 0; t4 < o2.length; t4++) {
          const e4 = o2[t4];
          for (let t5 = e4.start; t5 <= e4.end; t5++)
            Qo(n3, a2[t5], r2);
        }
        return new Gn({ points: n3, options: {} });
      }(t2);
    if ("shape" === i2)
      return true;
    const n2 = function(t3) {
      if ((t3.scale || {}).getPointPositionForValue)
        return function(t4) {
          const { scale: e3, fill: i3 } = t4, s3 = e3.options, n3 = e3.getLabels().length, a2 = s3.reverse ? e3.max : e3.min, r2 = function(t5, e4, i4) {
            let s4;
            return s4 = "start" === t5 ? i4 : "end" === t5 ? e4.options.reverse ? e4.min : e4.max : o(t5) ? t5.value : e4.getBaseValue(), s4;
          }(i3, e3, a2), l2 = [];
          if (s3.grid.circular) {
            const t5 = e3.getPointPositionForValue(0, a2);
            return new ea({ x: t5.x, y: t5.y, radius: e3.getDistanceFromCenterForValue(r2) });
          }
          for (let t5 = 0; t5 < n3; ++t5)
            l2.push(e3.getPointPositionForValue(t5, r2));
          return l2;
        }(t3);
      return function(t4) {
        const { scale: e3 = {}, fill: i3 } = t4, s3 = function(t5, e4) {
          let i4 = null;
          return "start" === t5 ? i4 = e4.bottom : "end" === t5 ? i4 = e4.top : o(t5) ? i4 = e4.getPixelForValue(t5.value) : e4.getBasePixel && (i4 = e4.getBasePixel()), i4;
        }(i3, e3);
        if (a(s3)) {
          const t5 = e3.isHorizontal();
          return { x: t5 ? s3 : null, y: t5 ? null : s3 };
        }
        return null;
      }(t3);
    }(t2);
    return n2 instanceof ea ? n2 : Ko(n2, s2);
  }
  function sa(t2, e2, i2) {
    const s2 = ia(e2), { line: n2, scale: o2, axis: a2 } = e2, r2 = n2.options, l2 = r2.fill, h2 = r2.backgroundColor, { above: c2 = h2, below: d2 = h2 } = l2 || {};
    s2 && n2.points.length && (Re(t2, i2), function(t3, e3) {
      const { line: i3, target: s3, above: n3, below: o3, area: a3, scale: r3 } = e3, l3 = i3._loop ? "angle" : e3.axis;
      t3.save(), "x" === l3 && o3 !== n3 && (na(t3, s3, a3.top), oa(t3, { line: i3, target: s3, color: n3, scale: r3, property: l3 }), t3.restore(), t3.save(), na(t3, s3, a3.bottom));
      oa(t3, { line: i3, target: s3, color: o3, scale: r3, property: l3 }), t3.restore();
    }(t2, { line: n2, target: s2, above: c2, below: d2, area: i2, scale: o2, axis: a2 }), Ie(t2));
  }
  function na(t2, e2, i2) {
    const { segments: s2, points: n2 } = e2;
    let o2 = true, a2 = false;
    t2.beginPath();
    for (const r2 of s2) {
      const { start: s3, end: l2 } = r2, h2 = n2[s3], c2 = n2[Xo(s3, l2, n2)];
      o2 ? (t2.moveTo(h2.x, h2.y), o2 = false) : (t2.lineTo(h2.x, i2), t2.lineTo(h2.x, h2.y)), a2 = !!e2.pathSegment(t2, r2, { move: a2 }), a2 ? t2.closePath() : t2.lineTo(c2.x, i2);
    }
    t2.lineTo(e2.first().x, i2), t2.closePath(), t2.clip();
  }
  function oa(t2, e2) {
    const { line: i2, target: s2, property: n2, color: o2, scale: a2 } = e2, r2 = function(t3, e3, i3) {
      const s3 = t3.segments, n3 = t3.points, o3 = e3.points, a3 = [];
      for (const t4 of s3) {
        let { start: s4, end: r3 } = t4;
        r3 = Xo(s4, r3, n3);
        const l2 = Uo(i3, n3[s4], n3[r3], t4.loop);
        if (!e3.segments) {
          a3.push({ source: t4, target: l2, start: n3[s4], end: n3[r3] });
          continue;
        }
        const h2 = Ei(e3, l2);
        for (const e4 of h2) {
          const s5 = Uo(i3, o3[e4.start], o3[e4.end], e4.loop), r4 = Li(t4, n3, s5);
          for (const t5 of r4)
            a3.push({ source: t5, target: e4, start: { [i3]: qo(l2, s5, "start", Math.max) }, end: { [i3]: qo(l2, s5, "end", Math.min) } });
        }
      }
      return a3;
    }(i2, s2, n2);
    for (const { source: e3, target: l2, start: h2, end: c2 } of r2) {
      const { style: { backgroundColor: r3 = o2 } = {} } = e3, d2 = true !== s2;
      t2.save(), t2.fillStyle = r3, aa(t2, a2, d2 && Uo(n2, h2, c2)), t2.beginPath();
      const u2 = !!i2.pathSegment(t2, e3);
      let f2;
      if (d2) {
        u2 ? t2.closePath() : ra(t2, s2, c2, n2);
        const e4 = !!s2.pathSegment(t2, l2, { move: u2, reverse: true });
        f2 = u2 && e4, f2 || ra(t2, s2, h2, n2);
      }
      t2.closePath(), t2.fill(f2 ? "evenodd" : "nonzero"), t2.restore();
    }
  }
  function aa(t2, e2, i2) {
    const { top: s2, bottom: n2 } = e2.chart.chartArea, { property: o2, start: a2, end: r2 } = i2 || {};
    "x" === o2 && (t2.beginPath(), t2.rect(a2, s2, r2 - a2, n2 - s2), t2.clip());
  }
  function ra(t2, e2, i2, s2) {
    const n2 = e2.interpolate(i2, s2);
    n2 && t2.lineTo(n2.x, n2.y);
  }
  var la = { id: "filler", afterDatasetsUpdate(t2, e2, i2) {
    const s2 = (t2.data.datasets || []).length, n2 = [];
    let o2, a2, r2, l2;
    for (a2 = 0; a2 < s2; ++a2)
      o2 = t2.getDatasetMeta(a2), r2 = o2.dataset, l2 = null, r2 && r2.options && r2 instanceof Gn && (l2 = { visible: t2.isDatasetVisible(a2), index: a2, fill: Jo(r2, a2, s2), chart: t2, axis: o2.controller.options.indexAxis, scale: o2.vScale, line: r2 }), o2.$filler = l2, n2.push(l2);
    for (a2 = 0; a2 < s2; ++a2)
      l2 = n2[a2], l2 && false !== l2.fill && (l2.fill = Zo(n2, a2, i2.propagate));
  }, beforeDraw(t2, e2, i2) {
    const s2 = "beforeDraw" === i2.drawTime, n2 = t2.getSortedVisibleDatasetMetas(), o2 = t2.chartArea;
    for (let e3 = n2.length - 1; e3 >= 0; --e3) {
      const i3 = n2[e3].$filler;
      i3 && (i3.line.updateControlPoints(o2, i3.axis), s2 && i3.fill && sa(t2.ctx, i3, o2));
    }
  }, beforeDatasetsDraw(t2, e2, i2) {
    if ("beforeDatasetsDraw" !== i2.drawTime)
      return;
    const s2 = t2.getSortedVisibleDatasetMetas();
    for (let e3 = s2.length - 1; e3 >= 0; --e3) {
      const i3 = s2[e3].$filler;
      Go(i3) && sa(t2.ctx, i3, t2.chartArea);
    }
  }, beforeDatasetDraw(t2, e2, i2) {
    const s2 = e2.meta.$filler;
    Go(s2) && "beforeDatasetDraw" === i2.drawTime && sa(t2.ctx, s2, t2.chartArea);
  }, defaults: { propagate: true, drawTime: "beforeDatasetDraw" } };
  const ha = (t2, e2) => {
    let { boxHeight: i2 = e2, boxWidth: s2 = e2 } = t2;
    return t2.usePointStyle && (i2 = Math.min(i2, e2), s2 = t2.pointStyleWidth || Math.min(s2, e2)), { boxWidth: s2, boxHeight: i2, itemHeight: Math.max(e2, i2) };
  };
  class ca extends Bs {
    constructor(t2) {
      super(), this._added = false, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = false, this.chart = t2.chart, this.options = t2.options, this.ctx = t2.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
    }
    update(t2, e2, i2) {
      this.maxWidth = t2, this.maxHeight = e2, this._margins = i2, this.setDimensions(), this.buildLabels(), this.fit();
    }
    setDimensions() {
      this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
    }
    buildLabels() {
      const t2 = this.options.labels || {};
      let e2 = d(t2.generateLabels, [this.chart], this) || [];
      t2.filter && (e2 = e2.filter((e3) => t2.filter(e3, this.chart.data))), t2.sort && (e2 = e2.sort((e3, i2) => t2.sort(e3, i2, this.chart.data))), this.options.reverse && e2.reverse(), this.legendItems = e2;
    }
    fit() {
      const { options: t2, ctx: e2 } = this;
      if (!t2.display)
        return void (this.width = this.height = 0);
      const i2 = t2.labels, s2 = wi(i2.font), n2 = s2.size, o2 = this._computeTitleHeight(), { boxWidth: a2, itemHeight: r2 } = ha(i2, n2);
      let l2, h2;
      e2.font = s2.string, this.isHorizontal() ? (l2 = this.maxWidth, h2 = this._fitRows(o2, n2, a2, r2) + 10) : (h2 = this.maxHeight, l2 = this._fitCols(o2, s2, a2, r2) + 10), this.width = Math.min(l2, t2.maxWidth || this.maxWidth), this.height = Math.min(h2, t2.maxHeight || this.maxHeight);
    }
    _fitRows(t2, e2, i2, s2) {
      const { ctx: n2, maxWidth: o2, options: { labels: { padding: a2 } } } = this, r2 = this.legendHitBoxes = [], l2 = this.lineWidths = [0], h2 = s2 + a2;
      let c2 = t2;
      n2.textAlign = "left", n2.textBaseline = "middle";
      let d2 = -1, u2 = -h2;
      return this.legendItems.forEach((t3, f2) => {
        const g2 = i2 + e2 / 2 + n2.measureText(t3.text).width;
        (0 === f2 || l2[l2.length - 1] + g2 + 2 * a2 > o2) && (c2 += h2, l2[l2.length - (f2 > 0 ? 0 : 1)] = 0, u2 += h2, d2++), r2[f2] = { left: 0, top: u2, row: d2, width: g2, height: s2 }, l2[l2.length - 1] += g2 + a2;
      }), c2;
    }
    _fitCols(t2, e2, i2, s2) {
      const { ctx: n2, maxHeight: o2, options: { labels: { padding: a2 } } } = this, r2 = this.legendHitBoxes = [], l2 = this.columnSizes = [], h2 = o2 - t2;
      let c2 = a2, d2 = 0, u2 = 0, f2 = 0, g2 = 0;
      return this.legendItems.forEach((t3, o3) => {
        const { itemWidth: p2, itemHeight: m2 } = function(t4, e3, i3, s3, n3) {
          const o4 = function(t5, e4, i4, s4) {
            let n4 = t5.text;
            n4 && "string" != typeof n4 && (n4 = n4.reduce((t6, e5) => t6.length > e5.length ? t6 : e5));
            return e4 + i4.size / 2 + s4.measureText(n4).width;
          }(s3, t4, e3, i3), a3 = function(t5, e4, i4) {
            let s4 = t5;
            "string" != typeof e4.text && (s4 = da(e4, i4));
            return s4;
          }(n3, s3, e3.lineHeight);
          return { itemWidth: o4, itemHeight: a3 };
        }(i2, e2, n2, t3, s2);
        o3 > 0 && u2 + m2 + 2 * a2 > h2 && (c2 += d2 + a2, l2.push({ width: d2, height: u2 }), f2 += d2 + a2, g2++, d2 = u2 = 0), r2[o3] = { left: f2, top: u2, col: g2, width: p2, height: m2 }, d2 = Math.max(d2, p2), u2 += m2 + a2;
      }), c2 += d2, l2.push({ width: d2, height: u2 }), c2;
    }
    adjustHitBoxes() {
      if (!this.options.display)
        return;
      const t2 = this._computeTitleHeight(), { legendHitBoxes: e2, options: { align: i2, labels: { padding: s2 }, rtl: n2 } } = this, o2 = Di(n2, this.left, this.width);
      if (this.isHorizontal()) {
        let n3 = 0, a2 = ft(i2, this.left + s2, this.right - this.lineWidths[n3]);
        for (const r2 of e2)
          n3 !== r2.row && (n3 = r2.row, a2 = ft(i2, this.left + s2, this.right - this.lineWidths[n3])), r2.top += this.top + t2 + s2, r2.left = o2.leftForLtr(o2.x(a2), r2.width), a2 += r2.width + s2;
      } else {
        let n3 = 0, a2 = ft(i2, this.top + t2 + s2, this.bottom - this.columnSizes[n3].height);
        for (const r2 of e2)
          r2.col !== n3 && (n3 = r2.col, a2 = ft(i2, this.top + t2 + s2, this.bottom - this.columnSizes[n3].height)), r2.top = a2, r2.left += this.left + s2, r2.left = o2.leftForLtr(o2.x(r2.left), r2.width), a2 += r2.height + s2;
      }
    }
    isHorizontal() {
      return "top" === this.options.position || "bottom" === this.options.position;
    }
    draw() {
      if (this.options.display) {
        const t2 = this.ctx;
        Re(t2, this), this._draw(), Ie(t2);
      }
    }
    _draw() {
      const { options: t2, columnSizes: e2, lineWidths: i2, ctx: s2 } = this, { align: n2, labels: o2 } = t2, a2 = ue.color, r2 = Di(t2.rtl, this.left, this.width), h2 = wi(o2.font), { padding: c2 } = o2, d2 = h2.size, u2 = d2 / 2;
      let f2;
      this.drawTitle(), s2.textAlign = r2.textAlign("left"), s2.textBaseline = "middle", s2.lineWidth = 0.5, s2.font = h2.string;
      const { boxWidth: g2, boxHeight: p2, itemHeight: m2 } = ha(o2, d2), b2 = this.isHorizontal(), x2 = this._computeTitleHeight();
      f2 = b2 ? { x: ft(n2, this.left + c2, this.right - i2[0]), y: this.top + c2 + x2, line: 0 } : { x: this.left + c2, y: ft(n2, this.top + x2 + c2, this.bottom - e2[0].height), line: 0 }, Ci(this.ctx, t2.textDirection);
      const _2 = m2 + c2;
      this.legendItems.forEach((y2, v2) => {
        s2.strokeStyle = y2.fontColor, s2.fillStyle = y2.fontColor;
        const M2 = s2.measureText(y2.text).width, w2 = r2.textAlign(y2.textAlign || (y2.textAlign = o2.textAlign)), k2 = g2 + u2 + M2;
        let S2 = f2.x, P2 = f2.y;
        r2.setWidth(this.width), b2 ? v2 > 0 && S2 + k2 + c2 > this.right && (P2 = f2.y += _2, f2.line++, S2 = f2.x = ft(n2, this.left + c2, this.right - i2[f2.line])) : v2 > 0 && P2 + _2 > this.bottom && (S2 = f2.x = S2 + e2[f2.line].width + c2, f2.line++, P2 = f2.y = ft(n2, this.top + x2 + c2, this.bottom - e2[f2.line].height));
        if (function(t3, e3, i3) {
          if (isNaN(g2) || g2 <= 0 || isNaN(p2) || p2 < 0)
            return;
          s2.save();
          const n3 = l(i3.lineWidth, 1);
          if (s2.fillStyle = l(i3.fillStyle, a2), s2.lineCap = l(i3.lineCap, "butt"), s2.lineDashOffset = l(i3.lineDashOffset, 0), s2.lineJoin = l(i3.lineJoin, "miter"), s2.lineWidth = n3, s2.strokeStyle = l(i3.strokeStyle, a2), s2.setLineDash(l(i3.lineDash, [])), o2.usePointStyle) {
            const a3 = { radius: p2 * Math.SQRT2 / 2, pointStyle: i3.pointStyle, rotation: i3.rotation, borderWidth: n3 }, l2 = r2.xPlus(t3, g2 / 2);
            Le(s2, a3, l2, e3 + u2, o2.pointStyleWidth && g2);
          } else {
            const o3 = e3 + Math.max((d2 - p2) / 2, 0), a3 = r2.leftForLtr(t3, g2), l2 = vi(i3.borderRadius);
            s2.beginPath(), Object.values(l2).some((t4) => 0 !== t4) ? We(s2, { x: a3, y: o3, w: g2, h: p2, radius: l2 }) : s2.rect(a3, o3, g2, p2), s2.fill(), 0 !== n3 && s2.stroke();
          }
          s2.restore();
        }(r2.x(S2), P2, y2), S2 = gt(w2, S2 + g2 + u2, b2 ? S2 + k2 : this.right, t2.rtl), function(t3, e3, i3) {
          Ve(s2, i3.text, t3, e3 + m2 / 2, h2, { strikethrough: i3.hidden, textAlign: r2.textAlign(i3.textAlign) });
        }(r2.x(S2), P2, y2), b2)
          f2.x += k2 + c2;
        else if ("string" != typeof y2.text) {
          const t3 = h2.lineHeight;
          f2.y += da(y2, t3);
        } else
          f2.y += _2;
      }), Oi(this.ctx, t2.textDirection);
    }
    drawTitle() {
      const t2 = this.options, e2 = t2.title, i2 = wi(e2.font), s2 = Mi(e2.padding);
      if (!e2.display)
        return;
      const n2 = Di(t2.rtl, this.left, this.width), o2 = this.ctx, a2 = e2.position, r2 = i2.size / 2, l2 = s2.top + r2;
      let h2, c2 = this.left, d2 = this.width;
      if (this.isHorizontal())
        d2 = Math.max(...this.lineWidths), h2 = this.top + l2, c2 = ft(t2.align, c2, this.right - d2);
      else {
        const e3 = this.columnSizes.reduce((t3, e4) => Math.max(t3, e4.height), 0);
        h2 = l2 + ft(t2.align, this.top, this.bottom - e3 - t2.labels.padding - this._computeTitleHeight());
      }
      const u2 = ft(a2, c2, c2 + d2);
      o2.textAlign = n2.textAlign(ut(a2)), o2.textBaseline = "middle", o2.strokeStyle = e2.color, o2.fillStyle = e2.color, o2.font = i2.string, Ve(o2, e2.text, u2, h2, i2);
    }
    _computeTitleHeight() {
      const t2 = this.options.title, e2 = wi(t2.font), i2 = Mi(t2.padding);
      return t2.display ? e2.lineHeight + i2.height : 0;
    }
    _getLegendItemAt(t2, e2) {
      let i2, s2, n2;
      if (tt(t2, this.left, this.right) && tt(e2, this.top, this.bottom)) {
        for (n2 = this.legendHitBoxes, i2 = 0; i2 < n2.length; ++i2)
          if (s2 = n2[i2], tt(t2, s2.left, s2.left + s2.width) && tt(e2, s2.top, s2.top + s2.height))
            return this.legendItems[i2];
      }
      return null;
    }
    handleEvent(t2) {
      const e2 = this.options;
      if (!function(t3, e3) {
        if (("mousemove" === t3 || "mouseout" === t3) && (e3.onHover || e3.onLeave))
          return true;
        if (e3.onClick && ("click" === t3 || "mouseup" === t3))
          return true;
        return false;
      }(t2.type, e2))
        return;
      const i2 = this._getLegendItemAt(t2.x, t2.y);
      if ("mousemove" === t2.type || "mouseout" === t2.type) {
        const o2 = this._hoveredItem, a2 = (n2 = i2, null !== (s2 = o2) && null !== n2 && s2.datasetIndex === n2.datasetIndex && s2.index === n2.index);
        o2 && !a2 && d(e2.onLeave, [t2, o2, this], this), this._hoveredItem = i2, i2 && !a2 && d(e2.onHover, [t2, i2, this], this);
      } else
        i2 && d(e2.onClick, [t2, i2, this], this);
      var s2, n2;
    }
  }
  function da(t2, e2) {
    return e2 * (t2.text ? t2.text.length + 0.5 : 0);
  }
  var ua = { id: "legend", _element: ca, start(t2, e2, i2) {
    const s2 = t2.legend = new ca({ ctx: t2.ctx, options: i2, chart: t2 });
    ns.configure(t2, s2, i2), ns.addBox(t2, s2);
  }, stop(t2) {
    ns.removeBox(t2, t2.legend), delete t2.legend;
  }, beforeUpdate(t2, e2, i2) {
    const s2 = t2.legend;
    ns.configure(t2, s2, i2), s2.options = i2;
  }, afterUpdate(t2) {
    const e2 = t2.legend;
    e2.buildLabels(), e2.adjustHitBoxes();
  }, afterEvent(t2, e2) {
    e2.replay || t2.legend.handleEvent(e2.event);
  }, defaults: { display: true, position: "top", align: "center", fullSize: true, reverse: false, weight: 1e3, onClick(t2, e2, i2) {
    const s2 = e2.datasetIndex, n2 = i2.chart;
    n2.isDatasetVisible(s2) ? (n2.hide(s2), e2.hidden = true) : (n2.show(s2), e2.hidden = false);
  }, onHover: null, onLeave: null, labels: { color: (t2) => t2.chart.options.color, boxWidth: 40, padding: 10, generateLabels(t2) {
    const e2 = t2.data.datasets, { labels: { usePointStyle: i2, pointStyle: s2, textAlign: n2, color: o2, useBorderRadius: a2, borderRadius: r2 } } = t2.legend.options;
    return t2._getSortedDatasetMetas().map((t3) => {
      const l2 = t3.controller.getStyle(i2 ? 0 : void 0), h2 = Mi(l2.borderWidth);
      return { text: e2[t3.index].label, fillStyle: l2.backgroundColor, fontColor: o2, hidden: !t3.visible, lineCap: l2.borderCapStyle, lineDash: l2.borderDash, lineDashOffset: l2.borderDashOffset, lineJoin: l2.borderJoinStyle, lineWidth: (h2.width + h2.height) / 4, strokeStyle: l2.borderColor, pointStyle: s2 || l2.pointStyle, rotation: l2.rotation, textAlign: n2 || l2.textAlign, borderRadius: a2 && (r2 || l2.borderRadius), datasetIndex: t3.index };
    }, this);
  } }, title: { color: (t2) => t2.chart.options.color, display: false, position: "center", text: "" } }, descriptors: { _scriptable: (t2) => !t2.startsWith("on"), labels: { _scriptable: (t2) => !["generateLabels", "filter", "sort"].includes(t2) } } };
  class fa extends Bs {
    constructor(t2) {
      super(), this.chart = t2.chart, this.options = t2.options, this.ctx = t2.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
    }
    update(t2, e2) {
      const i2 = this.options;
      if (this.left = 0, this.top = 0, !i2.display)
        return void (this.width = this.height = this.right = this.bottom = 0);
      this.width = this.right = t2, this.height = this.bottom = e2;
      const s2 = n(i2.text) ? i2.text.length : 1;
      this._padding = Mi(i2.padding);
      const o2 = s2 * wi(i2.font).lineHeight + this._padding.height;
      this.isHorizontal() ? this.height = o2 : this.width = o2;
    }
    isHorizontal() {
      const t2 = this.options.position;
      return "top" === t2 || "bottom" === t2;
    }
    _drawArgs(t2) {
      const { top: e2, left: i2, bottom: s2, right: n2, options: o2 } = this, a2 = o2.align;
      let r2, l2, h2, c2 = 0;
      return this.isHorizontal() ? (l2 = ft(a2, i2, n2), h2 = e2 + t2, r2 = n2 - i2) : ("left" === o2.position ? (l2 = i2 + t2, h2 = ft(a2, s2, e2), c2 = -0.5 * C) : (l2 = n2 - t2, h2 = ft(a2, e2, s2), c2 = 0.5 * C), r2 = s2 - e2), { titleX: l2, titleY: h2, maxWidth: r2, rotation: c2 };
    }
    draw() {
      const t2 = this.ctx, e2 = this.options;
      if (!e2.display)
        return;
      const i2 = wi(e2.font), s2 = i2.lineHeight / 2 + this._padding.top, { titleX: n2, titleY: o2, maxWidth: a2, rotation: r2 } = this._drawArgs(s2);
      Ve(t2, e2.text, 0, 0, i2, { color: e2.color, maxWidth: a2, rotation: r2, textAlign: ut(e2.align), textBaseline: "middle", translation: [n2, o2] });
    }
  }
  var ga = { id: "title", _element: fa, start(t2, e2, i2) {
    !function(t3, e3) {
      const i3 = new fa({ ctx: t3.ctx, options: e3, chart: t3 });
      ns.configure(t3, i3, e3), ns.addBox(t3, i3), t3.titleBlock = i3;
    }(t2, i2);
  }, stop(t2) {
    const e2 = t2.titleBlock;
    ns.removeBox(t2, e2), delete t2.titleBlock;
  }, beforeUpdate(t2, e2, i2) {
    const s2 = t2.titleBlock;
    ns.configure(t2, s2, i2), s2.options = i2;
  }, defaults: { align: "center", display: false, font: { weight: "bold" }, fullSize: true, padding: 10, position: "top", text: "", weight: 2e3 }, defaultRoutes: { color: "color" }, descriptors: { _scriptable: true, _indexable: false } };
  const pa = /* @__PURE__ */ new WeakMap();
  var ma = { id: "subtitle", start(t2, e2, i2) {
    const s2 = new fa({ ctx: t2.ctx, options: i2, chart: t2 });
    ns.configure(t2, s2, i2), ns.addBox(t2, s2), pa.set(t2, s2);
  }, stop(t2) {
    ns.removeBox(t2, pa.get(t2)), pa.delete(t2);
  }, beforeUpdate(t2, e2, i2) {
    const s2 = pa.get(t2);
    ns.configure(t2, s2, i2), s2.options = i2;
  }, defaults: { align: "center", display: false, font: { weight: "normal" }, fullSize: true, padding: 0, position: "top", text: "", weight: 1500 }, defaultRoutes: { color: "color" }, descriptors: { _scriptable: true, _indexable: false } };
  const ba = { average(t2) {
    if (!t2.length)
      return false;
    let e2, i2, s2 = 0, n2 = 0, o2 = 0;
    for (e2 = 0, i2 = t2.length; e2 < i2; ++e2) {
      const i3 = t2[e2].element;
      if (i3 && i3.hasValue()) {
        const t3 = i3.tooltipPosition();
        s2 += t3.x, n2 += t3.y, ++o2;
      }
    }
    return { x: s2 / o2, y: n2 / o2 };
  }, nearest(t2, e2) {
    if (!t2.length)
      return false;
    let i2, s2, n2, o2 = e2.x, a2 = e2.y, r2 = Number.POSITIVE_INFINITY;
    for (i2 = 0, s2 = t2.length; i2 < s2; ++i2) {
      const s3 = t2[i2].element;
      if (s3 && s3.hasValue()) {
        const t3 = q(e2, s3.getCenterPoint());
        t3 < r2 && (r2 = t3, n2 = s3);
      }
    }
    if (n2) {
      const t3 = n2.tooltipPosition();
      o2 = t3.x, a2 = t3.y;
    }
    return { x: o2, y: a2 };
  } };
  function xa(t2, e2) {
    return e2 && (n(e2) ? Array.prototype.push.apply(t2, e2) : t2.push(e2)), t2;
  }
  function _a(t2) {
    return ("string" == typeof t2 || t2 instanceof String) && t2.indexOf("\n") > -1 ? t2.split("\n") : t2;
  }
  function ya(t2, e2) {
    const { element: i2, datasetIndex: s2, index: n2 } = e2, o2 = t2.getDatasetMeta(s2).controller, { label: a2, value: r2 } = o2.getLabelAndValue(n2);
    return { chart: t2, label: a2, parsed: o2.getParsed(n2), raw: t2.data.datasets[s2].data[n2], formattedValue: r2, dataset: o2.getDataset(), dataIndex: n2, datasetIndex: s2, element: i2 };
  }
  function va(t2, e2) {
    const i2 = t2.chart.ctx, { body: s2, footer: n2, title: o2 } = t2, { boxWidth: a2, boxHeight: r2 } = e2, l2 = wi(e2.bodyFont), h2 = wi(e2.titleFont), c2 = wi(e2.footerFont), d2 = o2.length, f2 = n2.length, g2 = s2.length, p2 = Mi(e2.padding);
    let m2 = p2.height, b2 = 0, x2 = s2.reduce((t3, e3) => t3 + e3.before.length + e3.lines.length + e3.after.length, 0);
    if (x2 += t2.beforeBody.length + t2.afterBody.length, d2 && (m2 += d2 * h2.lineHeight + (d2 - 1) * e2.titleSpacing + e2.titleMarginBottom), x2) {
      m2 += g2 * (e2.displayColors ? Math.max(r2, l2.lineHeight) : l2.lineHeight) + (x2 - g2) * l2.lineHeight + (x2 - 1) * e2.bodySpacing;
    }
    f2 && (m2 += e2.footerMarginTop + f2 * c2.lineHeight + (f2 - 1) * e2.footerSpacing);
    let _2 = 0;
    const y2 = function(t3) {
      b2 = Math.max(b2, i2.measureText(t3).width + _2);
    };
    return i2.save(), i2.font = h2.string, u(t2.title, y2), i2.font = l2.string, u(t2.beforeBody.concat(t2.afterBody), y2), _2 = e2.displayColors ? a2 + 2 + e2.boxPadding : 0, u(s2, (t3) => {
      u(t3.before, y2), u(t3.lines, y2), u(t3.after, y2);
    }), _2 = 0, i2.font = c2.string, u(t2.footer, y2), i2.restore(), b2 += p2.width, { width: b2, height: m2 };
  }
  function Ma(t2, e2, i2, s2) {
    const { x: n2, width: o2 } = i2, { width: a2, chartArea: { left: r2, right: l2 } } = t2;
    let h2 = "center";
    return "center" === s2 ? h2 = n2 <= (r2 + l2) / 2 ? "left" : "right" : n2 <= o2 / 2 ? h2 = "left" : n2 >= a2 - o2 / 2 && (h2 = "right"), function(t3, e3, i3, s3) {
      const { x: n3, width: o3 } = s3, a3 = i3.caretSize + i3.caretPadding;
      return "left" === t3 && n3 + o3 + a3 > e3.width || "right" === t3 && n3 - o3 - a3 < 0 || void 0;
    }(h2, t2, e2, i2) && (h2 = "center"), h2;
  }
  function wa(t2, e2, i2) {
    const s2 = i2.yAlign || e2.yAlign || function(t3, e3) {
      const { y: i3, height: s3 } = e3;
      return i3 < s3 / 2 ? "top" : i3 > t3.height - s3 / 2 ? "bottom" : "center";
    }(t2, i2);
    return { xAlign: i2.xAlign || e2.xAlign || Ma(t2, e2, i2, s2), yAlign: s2 };
  }
  function ka(t2, e2, i2, s2) {
    const { caretSize: n2, caretPadding: o2, cornerRadius: a2 } = t2, { xAlign: r2, yAlign: l2 } = i2, h2 = n2 + o2, { topLeft: c2, topRight: d2, bottomLeft: u2, bottomRight: f2 } = vi(a2);
    let g2 = function(t3, e3) {
      let { x: i3, width: s3 } = t3;
      return "right" === e3 ? i3 -= s3 : "center" === e3 && (i3 -= s3 / 2), i3;
    }(e2, r2);
    const p2 = function(t3, e3, i3) {
      let { y: s3, height: n3 } = t3;
      return "top" === e3 ? s3 += i3 : s3 -= "bottom" === e3 ? n3 + i3 : n3 / 2, s3;
    }(e2, l2, h2);
    return "center" === l2 ? "left" === r2 ? g2 += h2 : "right" === r2 && (g2 -= h2) : "left" === r2 ? g2 -= Math.max(c2, u2) + n2 : "right" === r2 && (g2 += Math.max(d2, f2) + n2), { x: J(g2, 0, s2.width - e2.width), y: J(p2, 0, s2.height - e2.height) };
  }
  function Sa(t2, e2, i2) {
    const s2 = Mi(i2.padding);
    return "center" === e2 ? t2.x + t2.width / 2 : "right" === e2 ? t2.x + t2.width - s2.right : t2.x + s2.left;
  }
  function Pa(t2) {
    return xa([], _a(t2));
  }
  function Da(t2, e2) {
    const i2 = e2 && e2.dataset && e2.dataset.tooltip && e2.dataset.tooltip.callbacks;
    return i2 ? t2.override(i2) : t2;
  }
  const Ca = { beforeTitle: e, title(t2) {
    if (t2.length > 0) {
      const e2 = t2[0], i2 = e2.chart.data.labels, s2 = i2 ? i2.length : 0;
      if (this && this.options && "dataset" === this.options.mode)
        return e2.dataset.label || "";
      if (e2.label)
        return e2.label;
      if (s2 > 0 && e2.dataIndex < s2)
        return i2[e2.dataIndex];
    }
    return "";
  }, afterTitle: e, beforeBody: e, beforeLabel: e, label(t2) {
    if (this && this.options && "dataset" === this.options.mode)
      return t2.label + ": " + t2.formattedValue || t2.formattedValue;
    let e2 = t2.dataset.label || "";
    e2 && (e2 += ": ");
    const i2 = t2.formattedValue;
    return s(i2) || (e2 += i2), e2;
  }, labelColor(t2) {
    const e2 = t2.chart.getDatasetMeta(t2.datasetIndex).controller.getStyle(t2.dataIndex);
    return { borderColor: e2.borderColor, backgroundColor: e2.backgroundColor, borderWidth: e2.borderWidth, borderDash: e2.borderDash, borderDashOffset: e2.borderDashOffset, borderRadius: 0 };
  }, labelTextColor() {
    return this.options.bodyColor;
  }, labelPointStyle(t2) {
    const e2 = t2.chart.getDatasetMeta(t2.datasetIndex).controller.getStyle(t2.dataIndex);
    return { pointStyle: e2.pointStyle, rotation: e2.rotation };
  }, afterLabel: e, afterBody: e, beforeFooter: e, footer: e, afterFooter: e };
  function Oa(t2, e2, i2, s2) {
    const n2 = t2[e2].call(i2, s2);
    return void 0 === n2 ? Ca[e2].call(i2, s2) : n2;
  }
  class Aa extends Bs {
    constructor(t2) {
      super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t2.chart, this.options = t2.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
    }
    initialize(t2) {
      this.options = t2, this._cachedAnimations = void 0, this.$context = void 0;
    }
    _resolveAnimations() {
      const t2 = this._cachedAnimations;
      if (t2)
        return t2;
      const e2 = this.chart, i2 = this.options.setContext(this.getContext()), s2 = i2.enabled && e2.options.animation && i2.animations, n2 = new Ps(this.chart, s2);
      return s2._cacheable && (this._cachedAnimations = Object.freeze(n2)), n2;
    }
    getContext() {
      return this.$context || (this.$context = (t2 = this.chart.getContext(), e2 = this, i2 = this._tooltipItems, Pi(t2, { tooltip: e2, tooltipItems: i2, type: "tooltip" })));
      var t2, e2, i2;
    }
    getTitle(t2, e2) {
      const { callbacks: i2 } = e2, s2 = Oa(i2, "beforeTitle", this, t2), n2 = Oa(i2, "title", this, t2), o2 = Oa(i2, "afterTitle", this, t2);
      let a2 = [];
      return a2 = xa(a2, _a(s2)), a2 = xa(a2, _a(n2)), a2 = xa(a2, _a(o2)), a2;
    }
    getBeforeBody(t2, e2) {
      return Pa(Oa(e2.callbacks, "beforeBody", this, t2));
    }
    getBody(t2, e2) {
      const { callbacks: i2 } = e2, s2 = [];
      return u(t2, (t3) => {
        const e3 = { before: [], lines: [], after: [] }, n2 = Da(i2, t3);
        xa(e3.before, _a(Oa(n2, "beforeLabel", this, t3))), xa(e3.lines, Oa(n2, "label", this, t3)), xa(e3.after, _a(Oa(n2, "afterLabel", this, t3))), s2.push(e3);
      }), s2;
    }
    getAfterBody(t2, e2) {
      return Pa(Oa(e2.callbacks, "afterBody", this, t2));
    }
    getFooter(t2, e2) {
      const { callbacks: i2 } = e2, s2 = Oa(i2, "beforeFooter", this, t2), n2 = Oa(i2, "footer", this, t2), o2 = Oa(i2, "afterFooter", this, t2);
      let a2 = [];
      return a2 = xa(a2, _a(s2)), a2 = xa(a2, _a(n2)), a2 = xa(a2, _a(o2)), a2;
    }
    _createItems(t2) {
      const e2 = this._active, i2 = this.chart.data, s2 = [], n2 = [], o2 = [];
      let a2, r2, l2 = [];
      for (a2 = 0, r2 = e2.length; a2 < r2; ++a2)
        l2.push(ya(this.chart, e2[a2]));
      return t2.filter && (l2 = l2.filter((e3, s3, n3) => t2.filter(e3, s3, n3, i2))), t2.itemSort && (l2 = l2.sort((e3, s3) => t2.itemSort(e3, s3, i2))), u(l2, (e3) => {
        const i3 = Da(t2.callbacks, e3);
        s2.push(Oa(i3, "labelColor", this, e3)), n2.push(Oa(i3, "labelPointStyle", this, e3)), o2.push(Oa(i3, "labelTextColor", this, e3));
      }), this.labelColors = s2, this.labelPointStyles = n2, this.labelTextColors = o2, this.dataPoints = l2, l2;
    }
    update(t2, e2) {
      const i2 = this.options.setContext(this.getContext()), s2 = this._active;
      let n2, o2 = [];
      if (s2.length) {
        const t3 = ba[i2.position].call(this, s2, this._eventPosition);
        o2 = this._createItems(i2), this.title = this.getTitle(o2, i2), this.beforeBody = this.getBeforeBody(o2, i2), this.body = this.getBody(o2, i2), this.afterBody = this.getAfterBody(o2, i2), this.footer = this.getFooter(o2, i2);
        const e3 = this._size = va(this, i2), a2 = Object.assign({}, t3, e3), r2 = wa(this.chart, i2, a2), l2 = ka(i2, a2, r2, this.chart);
        this.xAlign = r2.xAlign, this.yAlign = r2.yAlign, n2 = { opacity: 1, x: l2.x, y: l2.y, width: e3.width, height: e3.height, caretX: t3.x, caretY: t3.y };
      } else
        0 !== this.opacity && (n2 = { opacity: 0 });
      this._tooltipItems = o2, this.$context = void 0, n2 && this._resolveAnimations().update(this, n2), t2 && i2.external && i2.external.call(this, { chart: this.chart, tooltip: this, replay: e2 });
    }
    drawCaret(t2, e2, i2, s2) {
      const n2 = this.getCaretPosition(t2, i2, s2);
      e2.lineTo(n2.x1, n2.y1), e2.lineTo(n2.x2, n2.y2), e2.lineTo(n2.x3, n2.y3);
    }
    getCaretPosition(t2, e2, i2) {
      const { xAlign: s2, yAlign: n2 } = this, { caretSize: o2, cornerRadius: a2 } = i2, { topLeft: r2, topRight: l2, bottomLeft: h2, bottomRight: c2 } = vi(a2), { x: d2, y: u2 } = t2, { width: f2, height: g2 } = e2;
      let p2, m2, b2, x2, _2, y2;
      return "center" === n2 ? (_2 = u2 + g2 / 2, "left" === s2 ? (p2 = d2, m2 = p2 - o2, x2 = _2 + o2, y2 = _2 - o2) : (p2 = d2 + f2, m2 = p2 + o2, x2 = _2 - o2, y2 = _2 + o2), b2 = p2) : (m2 = "left" === s2 ? d2 + Math.max(r2, h2) + o2 : "right" === s2 ? d2 + f2 - Math.max(l2, c2) - o2 : this.caretX, "top" === n2 ? (x2 = u2, _2 = x2 - o2, p2 = m2 - o2, b2 = m2 + o2) : (x2 = u2 + g2, _2 = x2 + o2, p2 = m2 + o2, b2 = m2 - o2), y2 = x2), { x1: p2, x2: m2, x3: b2, y1: x2, y2: _2, y3: y2 };
    }
    drawTitle(t2, e2, i2) {
      const s2 = this.title, n2 = s2.length;
      let o2, a2, r2;
      if (n2) {
        const l2 = Di(i2.rtl, this.x, this.width);
        for (t2.x = Sa(this, i2.titleAlign, i2), e2.textAlign = l2.textAlign(i2.titleAlign), e2.textBaseline = "middle", o2 = wi(i2.titleFont), a2 = i2.titleSpacing, e2.fillStyle = i2.titleColor, e2.font = o2.string, r2 = 0; r2 < n2; ++r2)
          e2.fillText(s2[r2], l2.x(t2.x), t2.y + o2.lineHeight / 2), t2.y += o2.lineHeight + a2, r2 + 1 === n2 && (t2.y += i2.titleMarginBottom - a2);
      }
    }
    _drawColorBox(t2, e2, i2, s2, n2) {
      const a2 = this.labelColors[i2], r2 = this.labelPointStyles[i2], { boxHeight: l2, boxWidth: h2, boxPadding: c2 } = n2, d2 = wi(n2.bodyFont), u2 = Sa(this, "left", n2), f2 = s2.x(u2), g2 = l2 < d2.lineHeight ? (d2.lineHeight - l2) / 2 : 0, p2 = e2.y + g2;
      if (n2.usePointStyle) {
        const e3 = { radius: Math.min(h2, l2) / 2, pointStyle: r2.pointStyle, rotation: r2.rotation, borderWidth: 1 }, i3 = s2.leftForLtr(f2, h2) + h2 / 2, o2 = p2 + l2 / 2;
        t2.strokeStyle = n2.multiKeyBackground, t2.fillStyle = n2.multiKeyBackground, Te(t2, e3, i3, o2), t2.strokeStyle = a2.borderColor, t2.fillStyle = a2.backgroundColor, Te(t2, e3, i3, o2);
      } else {
        t2.lineWidth = o(a2.borderWidth) ? Math.max(...Object.values(a2.borderWidth)) : a2.borderWidth || 1, t2.strokeStyle = a2.borderColor, t2.setLineDash(a2.borderDash || []), t2.lineDashOffset = a2.borderDashOffset || 0;
        const e3 = s2.leftForLtr(f2, h2 - c2), i3 = s2.leftForLtr(s2.xPlus(f2, 1), h2 - c2 - 2), r3 = vi(a2.borderRadius);
        Object.values(r3).some((t3) => 0 !== t3) ? (t2.beginPath(), t2.fillStyle = n2.multiKeyBackground, We(t2, { x: e3, y: p2, w: h2, h: l2, radius: r3 }), t2.fill(), t2.stroke(), t2.fillStyle = a2.backgroundColor, t2.beginPath(), We(t2, { x: i3, y: p2 + 1, w: h2 - 2, h: l2 - 2, radius: r3 }), t2.fill()) : (t2.fillStyle = n2.multiKeyBackground, t2.fillRect(e3, p2, h2, l2), t2.strokeRect(e3, p2, h2, l2), t2.fillStyle = a2.backgroundColor, t2.fillRect(i3, p2 + 1, h2 - 2, l2 - 2));
      }
      t2.fillStyle = this.labelTextColors[i2];
    }
    drawBody(t2, e2, i2) {
      const { body: s2 } = this, { bodySpacing: n2, bodyAlign: o2, displayColors: a2, boxHeight: r2, boxWidth: l2, boxPadding: h2 } = i2, c2 = wi(i2.bodyFont);
      let d2 = c2.lineHeight, f2 = 0;
      const g2 = Di(i2.rtl, this.x, this.width), p2 = function(i3) {
        e2.fillText(i3, g2.x(t2.x + f2), t2.y + d2 / 2), t2.y += d2 + n2;
      }, m2 = g2.textAlign(o2);
      let b2, x2, _2, y2, v2, M2, w2;
      for (e2.textAlign = o2, e2.textBaseline = "middle", e2.font = c2.string, t2.x = Sa(this, m2, i2), e2.fillStyle = i2.bodyColor, u(this.beforeBody, p2), f2 = a2 && "right" !== m2 ? "center" === o2 ? l2 / 2 + h2 : l2 + 2 + h2 : 0, y2 = 0, M2 = s2.length; y2 < M2; ++y2) {
        for (b2 = s2[y2], x2 = this.labelTextColors[y2], e2.fillStyle = x2, u(b2.before, p2), _2 = b2.lines, a2 && _2.length && (this._drawColorBox(e2, t2, y2, g2, i2), d2 = Math.max(c2.lineHeight, r2)), v2 = 0, w2 = _2.length; v2 < w2; ++v2)
          p2(_2[v2]), d2 = c2.lineHeight;
        u(b2.after, p2);
      }
      f2 = 0, d2 = c2.lineHeight, u(this.afterBody, p2), t2.y -= n2;
    }
    drawFooter(t2, e2, i2) {
      const s2 = this.footer, n2 = s2.length;
      let o2, a2;
      if (n2) {
        const r2 = Di(i2.rtl, this.x, this.width);
        for (t2.x = Sa(this, i2.footerAlign, i2), t2.y += i2.footerMarginTop, e2.textAlign = r2.textAlign(i2.footerAlign), e2.textBaseline = "middle", o2 = wi(i2.footerFont), e2.fillStyle = i2.footerColor, e2.font = o2.string, a2 = 0; a2 < n2; ++a2)
          e2.fillText(s2[a2], r2.x(t2.x), t2.y + o2.lineHeight / 2), t2.y += o2.lineHeight + i2.footerSpacing;
      }
    }
    drawBackground(t2, e2, i2, s2) {
      const { xAlign: n2, yAlign: o2 } = this, { x: a2, y: r2 } = t2, { width: l2, height: h2 } = i2, { topLeft: c2, topRight: d2, bottomLeft: u2, bottomRight: f2 } = vi(s2.cornerRadius);
      e2.fillStyle = s2.backgroundColor, e2.strokeStyle = s2.borderColor, e2.lineWidth = s2.borderWidth, e2.beginPath(), e2.moveTo(a2 + c2, r2), "top" === o2 && this.drawCaret(t2, e2, i2, s2), e2.lineTo(a2 + l2 - d2, r2), e2.quadraticCurveTo(a2 + l2, r2, a2 + l2, r2 + d2), "center" === o2 && "right" === n2 && this.drawCaret(t2, e2, i2, s2), e2.lineTo(a2 + l2, r2 + h2 - f2), e2.quadraticCurveTo(a2 + l2, r2 + h2, a2 + l2 - f2, r2 + h2), "bottom" === o2 && this.drawCaret(t2, e2, i2, s2), e2.lineTo(a2 + u2, r2 + h2), e2.quadraticCurveTo(a2, r2 + h2, a2, r2 + h2 - u2), "center" === o2 && "left" === n2 && this.drawCaret(t2, e2, i2, s2), e2.lineTo(a2, r2 + c2), e2.quadraticCurveTo(a2, r2, a2 + c2, r2), e2.closePath(), e2.fill(), s2.borderWidth > 0 && e2.stroke();
    }
    _updateAnimationTarget(t2) {
      const e2 = this.chart, i2 = this.$animations, s2 = i2 && i2.x, n2 = i2 && i2.y;
      if (s2 || n2) {
        const i3 = ba[t2.position].call(this, this._active, this._eventPosition);
        if (!i3)
          return;
        const o2 = this._size = va(this, t2), a2 = Object.assign({}, i3, this._size), r2 = wa(e2, t2, a2), l2 = ka(t2, a2, r2, e2);
        s2._to === l2.x && n2._to === l2.y || (this.xAlign = r2.xAlign, this.yAlign = r2.yAlign, this.width = o2.width, this.height = o2.height, this.caretX = i3.x, this.caretY = i3.y, this._resolveAnimations().update(this, l2));
      }
    }
    _willRender() {
      return !!this.opacity;
    }
    draw(t2) {
      const e2 = this.options.setContext(this.getContext());
      let i2 = this.opacity;
      if (!i2)
        return;
      this._updateAnimationTarget(e2);
      const s2 = { width: this.width, height: this.height }, n2 = { x: this.x, y: this.y };
      i2 = Math.abs(i2) < 1e-3 ? 0 : i2;
      const o2 = Mi(e2.padding), a2 = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
      e2.enabled && a2 && (t2.save(), t2.globalAlpha = i2, this.drawBackground(n2, t2, s2, e2), Ci(t2, e2.textDirection), n2.y += o2.top, this.drawTitle(n2, t2, e2), this.drawBody(n2, t2, e2), this.drawFooter(n2, t2, e2), Oi(t2, e2.textDirection), t2.restore());
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t2, e2) {
      const i2 = this._active, s2 = t2.map(({ datasetIndex: t3, index: e3 }) => {
        const i3 = this.chart.getDatasetMeta(t3);
        if (!i3)
          throw new Error("Cannot find a dataset at index " + t3);
        return { datasetIndex: t3, element: i3.data[e3], index: e3 };
      }), n2 = !f(i2, s2), o2 = this._positionChanged(s2, e2);
      (n2 || o2) && (this._active = s2, this._eventPosition = e2, this._ignoreReplayEvents = true, this.update(true));
    }
    handleEvent(t2, e2, i2 = true) {
      if (e2 && this._ignoreReplayEvents)
        return false;
      this._ignoreReplayEvents = false;
      const s2 = this.options, n2 = this._active || [], o2 = this._getActiveElements(t2, n2, e2, i2), a2 = this._positionChanged(o2, t2), r2 = e2 || !f(o2, n2) || a2;
      return r2 && (this._active = o2, (s2.enabled || s2.external) && (this._eventPosition = { x: t2.x, y: t2.y }, this.update(true, e2))), r2;
    }
    _getActiveElements(t2, e2, i2, s2) {
      const n2 = this.options;
      if ("mouseout" === t2.type)
        return [];
      if (!s2)
        return e2;
      const o2 = this.chart.getElementsAtEventForMode(t2, n2.mode, n2, i2);
      return n2.reverse && o2.reverse(), o2;
    }
    _positionChanged(t2, e2) {
      const { caretX: i2, caretY: s2, options: n2 } = this, o2 = ba[n2.position].call(this, t2, e2);
      return false !== o2 && (i2 !== o2.x || s2 !== o2.y);
    }
  }
  __publicField(Aa, "positioners", ba);
  var Ta = { id: "tooltip", _element: Aa, positioners: ba, afterInit(t2, e2, i2) {
    i2 && (t2.tooltip = new Aa({ chart: t2, options: i2 }));
  }, beforeUpdate(t2, e2, i2) {
    t2.tooltip && t2.tooltip.initialize(i2);
  }, reset(t2, e2, i2) {
    t2.tooltip && t2.tooltip.initialize(i2);
  }, afterDraw(t2) {
    const e2 = t2.tooltip;
    if (e2 && e2._willRender()) {
      const i2 = { tooltip: e2 };
      if (false === t2.notifyPlugins("beforeTooltipDraw", { ...i2, cancelable: true }))
        return;
      e2.draw(t2.ctx), t2.notifyPlugins("afterTooltipDraw", i2);
    }
  }, afterEvent(t2, e2) {
    if (t2.tooltip) {
      const i2 = e2.replay;
      t2.tooltip.handleEvent(e2.event, i2, e2.inChartArea) && (e2.changed = true);
    }
  }, defaults: { enabled: true, external: null, position: "average", backgroundColor: "rgba(0,0,0,0.8)", titleColor: "#fff", titleFont: { weight: "bold" }, titleSpacing: 2, titleMarginBottom: 6, titleAlign: "left", bodyColor: "#fff", bodySpacing: 2, bodyFont: {}, bodyAlign: "left", footerColor: "#fff", footerSpacing: 2, footerMarginTop: 6, footerFont: { weight: "bold" }, footerAlign: "left", padding: 6, caretPadding: 2, caretSize: 5, cornerRadius: 6, boxHeight: (t2, e2) => e2.bodyFont.size, boxWidth: (t2, e2) => e2.bodyFont.size, multiKeyBackground: "#fff", displayColors: true, boxPadding: 0, borderColor: "rgba(0,0,0,0)", borderWidth: 0, animation: { duration: 400, easing: "easeOutQuart" }, animations: { numbers: { type: "number", properties: ["x", "y", "width", "height", "caretX", "caretY"] }, opacity: { easing: "linear", duration: 200 } }, callbacks: Ca }, defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" }, descriptors: { _scriptable: (t2) => "filter" !== t2 && "itemSort" !== t2 && "external" !== t2, _indexable: false, callbacks: { _scriptable: false, _indexable: false }, animation: { _fallback: false }, animations: { _fallback: "animation" } }, additionalOptionScopes: ["interaction"] };
  return Mn.register(Fn, Io, no, t), Mn.helpers = { ...Vi }, Mn._adapters = Pn, Mn.Animation = Ss, Mn.Animations = Ps, Mn.animator = xt, Mn.controllers = Zs.controllers.items, Mn.DatasetController = Vs, Mn.Element = Bs, Mn.elements = no, Mn.Interaction = Yi, Mn.layouts = ns, Mn.platforms = Ms, Mn.Scale = qs, Mn.Ticks = ae, Object.assign(Mn, Fn, Io, no, t, Ms), Mn.Chart = Mn, "undefined" != typeof window && (window.Chart = Mn), Mn;
});
