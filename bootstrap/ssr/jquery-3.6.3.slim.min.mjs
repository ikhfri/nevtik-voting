/*! jQuery v3.6.3 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function(e2) {
    if (!e2.document)
      throw new Error("jQuery requires a window with a document");
    return t(e2);
  } : t(e);
}("undefined" != typeof window ? window : globalThis, function(g, e) {
  var t = [], r = Object.getPrototypeOf, s = t.slice, v = t.flat ? function(e2) {
    return t.flat.call(e2);
  } : function(e2) {
    return t.concat.apply([], e2);
  }, u = t.push, i = t.indexOf, n = {}, o = n.toString, y = n.hasOwnProperty, a = y.toString, l = a.call(Object), m = {}, b = function(e2) {
    return "function" == typeof e2 && "number" != typeof e2.nodeType && "function" != typeof e2.item;
  }, x = function(e2) {
    return null != e2 && e2 === e2.window;
  }, w = g.document, c = { type: true, src: true, nonce: true, noModule: true };
  function C(e2, t2, n2) {
    var r2, i2, o2 = (n2 = n2 || w).createElement("script");
    if (o2.text = e2, t2)
      for (r2 in c)
        (i2 = t2[r2] || t2.getAttribute && t2.getAttribute(r2)) && o2.setAttribute(r2, i2);
    n2.head.appendChild(o2).parentNode.removeChild(o2);
  }
  function T(e2) {
    return null == e2 ? e2 + "" : "object" == typeof e2 || "function" == typeof e2 ? n[o.call(e2)] || "object" : typeof e2;
  }
  var f = "3.6.3 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector", E = function(e2, t2) {
    return new E.fn.init(e2, t2);
  };
  function d(e2) {
    var t2 = !!e2 && "length" in e2 && e2.length, n2 = T(e2);
    return !b(e2) && !x(e2) && ("array" === n2 || 0 === t2 || "number" == typeof t2 && 0 < t2 && t2 - 1 in e2);
  }
  E.fn = E.prototype = { jquery: f, constructor: E, length: 0, toArray: function() {
    return s.call(this);
  }, get: function(e2) {
    return null == e2 ? s.call(this) : e2 < 0 ? this[e2 + this.length] : this[e2];
  }, pushStack: function(e2) {
    var t2 = E.merge(this.constructor(), e2);
    return t2.prevObject = this, t2;
  }, each: function(e2) {
    return E.each(this, e2);
  }, map: function(n2) {
    return this.pushStack(E.map(this, function(e2, t2) {
      return n2.call(e2, t2, e2);
    }));
  }, slice: function() {
    return this.pushStack(s.apply(this, arguments));
  }, first: function() {
    return this.eq(0);
  }, last: function() {
    return this.eq(-1);
  }, even: function() {
    return this.pushStack(E.grep(this, function(e2, t2) {
      return (t2 + 1) % 2;
    }));
  }, odd: function() {
    return this.pushStack(E.grep(this, function(e2, t2) {
      return t2 % 2;
    }));
  }, eq: function(e2) {
    var t2 = this.length, n2 = +e2 + (e2 < 0 ? t2 : 0);
    return this.pushStack(0 <= n2 && n2 < t2 ? [this[n2]] : []);
  }, end: function() {
    return this.prevObject || this.constructor();
  }, push: u, sort: t.sort, splice: t.splice }, E.extend = E.fn.extend = function() {
    var e2, t2, n2, r2, i2, o2, a2 = arguments[0] || {}, s2 = 1, u2 = arguments.length, l2 = false;
    for ("boolean" == typeof a2 && (l2 = a2, a2 = arguments[s2] || {}, s2++), "object" == typeof a2 || b(a2) || (a2 = {}), s2 === u2 && (a2 = this, s2--); s2 < u2; s2++)
      if (null != (e2 = arguments[s2]))
        for (t2 in e2)
          r2 = e2[t2], "__proto__" !== t2 && a2 !== r2 && (l2 && r2 && (E.isPlainObject(r2) || (i2 = Array.isArray(r2))) ? (n2 = a2[t2], o2 = i2 && !Array.isArray(n2) ? [] : i2 || E.isPlainObject(n2) ? n2 : {}, i2 = false, a2[t2] = E.extend(l2, o2, r2)) : void 0 !== r2 && (a2[t2] = r2));
    return a2;
  }, E.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e2) {
    throw new Error(e2);
  }, noop: function() {
  }, isPlainObject: function(e2) {
    var t2, n2;
    return !(!e2 || "[object Object]" !== o.call(e2)) && (!(t2 = r(e2)) || "function" == typeof (n2 = y.call(t2, "constructor") && t2.constructor) && a.call(n2) === l);
  }, isEmptyObject: function(e2) {
    var t2;
    for (t2 in e2)
      return false;
    return true;
  }, globalEval: function(e2, t2, n2) {
    C(e2, { nonce: t2 && t2.nonce }, n2);
  }, each: function(e2, t2) {
    var n2, r2 = 0;
    if (d(e2)) {
      for (n2 = e2.length; r2 < n2; r2++)
        if (false === t2.call(e2[r2], r2, e2[r2]))
          break;
    } else
      for (r2 in e2)
        if (false === t2.call(e2[r2], r2, e2[r2]))
          break;
    return e2;
  }, makeArray: function(e2, t2) {
    var n2 = t2 || [];
    return null != e2 && (d(Object(e2)) ? E.merge(n2, "string" == typeof e2 ? [e2] : e2) : u.call(n2, e2)), n2;
  }, inArray: function(e2, t2, n2) {
    return null == t2 ? -1 : i.call(t2, e2, n2);
  }, merge: function(e2, t2) {
    for (var n2 = +t2.length, r2 = 0, i2 = e2.length; r2 < n2; r2++)
      e2[i2++] = t2[r2];
    return e2.length = i2, e2;
  }, grep: function(e2, t2, n2) {
    for (var r2 = [], i2 = 0, o2 = e2.length, a2 = !n2; i2 < o2; i2++)
      !t2(e2[i2], i2) !== a2 && r2.push(e2[i2]);
    return r2;
  }, map: function(e2, t2, n2) {
    var r2, i2, o2 = 0, a2 = [];
    if (d(e2))
      for (r2 = e2.length; o2 < r2; o2++)
        null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
    else
      for (o2 in e2)
        null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
    return v(a2);
  }, guid: 1, support: m }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e2, t2) {
    n["[object " + t2 + "]"] = t2.toLowerCase();
  });
  var p = function(n2) {
    var e2, p2, x2, o2, i2, h2, f2, g2, w2, u2, l2, C2, T2, a2, E2, v2, s2, c2, y2, S2 = "sizzle" + 1 * new Date(), d2 = n2.document, A2 = 0, r2 = 0, m2 = ue2(), b2 = ue2(), N2 = ue2(), k2 = ue2(), D2 = function(e3, t3) {
      return e3 === t3 && (l2 = true), 0;
    }, L2 = {}.hasOwnProperty, t2 = [], j2 = t2.pop, q2 = t2.push, O2 = t2.push, P2 = t2.slice, H2 = function(e3, t3) {
      for (var n3 = 0, r3 = e3.length; n3 < r3; n3++)
        if (e3[n3] === t3)
          return n3;
      return -1;
    }, I2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R2 = "[\\x20\\t\\r\\n\\f]", B2 = "(?:\\\\[\\da-fA-F]{1,6}" + R2 + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", M2 = "\\[" + R2 + "*(" + B2 + ")(?:" + R2 + "*([*^$|!~]?=)" + R2 + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + B2 + "))|)" + R2 + "*\\]", W2 = ":(" + B2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + M2 + ")*)|.*)\\)|)", F2 = new RegExp(R2 + "+", "g"), $2 = new RegExp("^" + R2 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R2 + "+$", "g"), z2 = new RegExp("^" + R2 + "*," + R2 + "*"), _2 = new RegExp("^" + R2 + "*([>+~]|" + R2 + ")" + R2 + "*"), U2 = new RegExp(R2 + "|>"), V2 = new RegExp(W2), X2 = new RegExp("^" + B2 + "$"), Q2 = { ID: new RegExp("^#(" + B2 + ")"), CLASS: new RegExp("^\\.(" + B2 + ")"), TAG: new RegExp("^(" + B2 + "|[*])"), ATTR: new RegExp("^" + M2), PSEUDO: new RegExp("^" + W2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R2 + "*(even|odd|(([+-]|)(\\d*)n|)" + R2 + "*(?:([+-]|)" + R2 + "*(\\d+)|))" + R2 + "*\\)|)", "i"), bool: new RegExp("^(?:" + I2 + ")$", "i"), needsContext: new RegExp("^" + R2 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R2 + "*((?:-\\d)?\\d*)" + R2 + "*\\)|)(?=[^-]|$)", "i") }, Y2 = /HTML$/i, G2 = /^(?:input|select|textarea|button)$/i, K2 = /^h\d$/i, J2 = /^[^{]+\{\s*\[native \w/, Z2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee2 = /[+~]/, te2 = new RegExp("\\\\[\\da-fA-F]{1,6}" + R2 + "?|\\\\([^\\r\\n\\f])", "g"), ne2 = function(e3, t3) {
      var n3 = "0x" + e3.slice(1) - 65536;
      return t3 || (n3 < 0 ? String.fromCharCode(n3 + 65536) : String.fromCharCode(n3 >> 10 | 55296, 1023 & n3 | 56320));
    }, re2 = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie2 = function(e3, t3) {
      return t3 ? "\0" === e3 ? "\uFFFD" : e3.slice(0, -1) + "\\" + e3.charCodeAt(e3.length - 1).toString(16) + " " : "\\" + e3;
    }, oe2 = function() {
      C2();
    }, ae2 = xe2(function(e3) {
      return true === e3.disabled && "fieldset" === e3.nodeName.toLowerCase();
    }, { dir: "parentNode", next: "legend" });
    try {
      O2.apply(t2 = P2.call(d2.childNodes), d2.childNodes), t2[d2.childNodes.length].nodeType;
    } catch (e3) {
      O2 = { apply: t2.length ? function(e4, t3) {
        q2.apply(e4, P2.call(t3));
      } : function(e4, t3) {
        var n3 = e4.length, r3 = 0;
        while (e4[n3++] = t3[r3++])
          ;
        e4.length = n3 - 1;
      } };
    }
    function se2(t3, e3, n3, r3) {
      var i3, o3, a3, s3, u3, l3, c3, f3 = e3 && e3.ownerDocument, d3 = e3 ? e3.nodeType : 9;
      if (n3 = n3 || [], "string" != typeof t3 || !t3 || 1 !== d3 && 9 !== d3 && 11 !== d3)
        return n3;
      if (!r3 && (C2(e3), e3 = e3 || T2, E2)) {
        if (11 !== d3 && (u3 = Z2.exec(t3)))
          if (i3 = u3[1]) {
            if (9 === d3) {
              if (!(a3 = e3.getElementById(i3)))
                return n3;
              if (a3.id === i3)
                return n3.push(a3), n3;
            } else if (f3 && (a3 = f3.getElementById(i3)) && y2(e3, a3) && a3.id === i3)
              return n3.push(a3), n3;
          } else {
            if (u3[2])
              return O2.apply(n3, e3.getElementsByTagName(t3)), n3;
            if ((i3 = u3[3]) && p2.getElementsByClassName && e3.getElementsByClassName)
              return O2.apply(n3, e3.getElementsByClassName(i3)), n3;
          }
        if (p2.qsa && !k2[t3 + " "] && (!v2 || !v2.test(t3)) && (1 !== d3 || "object" !== e3.nodeName.toLowerCase())) {
          if (c3 = t3, f3 = e3, 1 === d3 && (U2.test(t3) || _2.test(t3))) {
            (f3 = ee2.test(t3) && ye2(e3.parentNode) || e3) === e3 && p2.scope || ((s3 = e3.getAttribute("id")) ? s3 = s3.replace(re2, ie2) : e3.setAttribute("id", s3 = S2)), o3 = (l3 = h2(t3)).length;
            while (o3--)
              l3[o3] = (s3 ? "#" + s3 : ":scope") + " " + be2(l3[o3]);
            c3 = l3.join(",");
          }
          try {
            if (p2.cssSupportsSelector && !CSS.supports("selector(:is(" + c3 + "))"))
              throw new Error();
            return O2.apply(n3, f3.querySelectorAll(c3)), n3;
          } catch (e4) {
            k2(t3, true);
          } finally {
            s3 === S2 && e3.removeAttribute("id");
          }
        }
      }
      return g2(t3.replace($2, "$1"), e3, n3, r3);
    }
    function ue2() {
      var r3 = [];
      return function e3(t3, n3) {
        return r3.push(t3 + " ") > x2.cacheLength && delete e3[r3.shift()], e3[t3 + " "] = n3;
      };
    }
    function le2(e3) {
      return e3[S2] = true, e3;
    }
    function ce2(e3) {
      var t3 = T2.createElement("fieldset");
      try {
        return !!e3(t3);
      } catch (e4) {
        return false;
      } finally {
        t3.parentNode && t3.parentNode.removeChild(t3), t3 = null;
      }
    }
    function fe2(e3, t3) {
      var n3 = e3.split("|"), r3 = n3.length;
      while (r3--)
        x2.attrHandle[n3[r3]] = t3;
    }
    function de2(e3, t3) {
      var n3 = t3 && e3, r3 = n3 && 1 === e3.nodeType && 1 === t3.nodeType && e3.sourceIndex - t3.sourceIndex;
      if (r3)
        return r3;
      if (n3) {
        while (n3 = n3.nextSibling)
          if (n3 === t3)
            return -1;
      }
      return e3 ? 1 : -1;
    }
    function pe2(t3) {
      return function(e3) {
        return "input" === e3.nodeName.toLowerCase() && e3.type === t3;
      };
    }
    function he2(n3) {
      return function(e3) {
        var t3 = e3.nodeName.toLowerCase();
        return ("input" === t3 || "button" === t3) && e3.type === n3;
      };
    }
    function ge2(t3) {
      return function(e3) {
        return "form" in e3 ? e3.parentNode && false === e3.disabled ? "label" in e3 ? "label" in e3.parentNode ? e3.parentNode.disabled === t3 : e3.disabled === t3 : e3.isDisabled === t3 || e3.isDisabled !== !t3 && ae2(e3) === t3 : e3.disabled === t3 : "label" in e3 && e3.disabled === t3;
      };
    }
    function ve2(a3) {
      return le2(function(o3) {
        return o3 = +o3, le2(function(e3, t3) {
          var n3, r3 = a3([], e3.length, o3), i3 = r3.length;
          while (i3--)
            e3[n3 = r3[i3]] && (e3[n3] = !(t3[n3] = e3[n3]));
        });
      });
    }
    function ye2(e3) {
      return e3 && "undefined" != typeof e3.getElementsByTagName && e3;
    }
    for (e2 in p2 = se2.support = {}, i2 = se2.isXML = function(e3) {
      var t3 = e3 && e3.namespaceURI, n3 = e3 && (e3.ownerDocument || e3).documentElement;
      return !Y2.test(t3 || n3 && n3.nodeName || "HTML");
    }, C2 = se2.setDocument = function(e3) {
      var t3, n3, r3 = e3 ? e3.ownerDocument || e3 : d2;
      return r3 != T2 && 9 === r3.nodeType && r3.documentElement && (a2 = (T2 = r3).documentElement, E2 = !i2(T2), d2 != T2 && (n3 = T2.defaultView) && n3.top !== n3 && (n3.addEventListener ? n3.addEventListener("unload", oe2, false) : n3.attachEvent && n3.attachEvent("onunload", oe2)), p2.scope = ce2(function(e4) {
        return a2.appendChild(e4).appendChild(T2.createElement("div")), "undefined" != typeof e4.querySelectorAll && !e4.querySelectorAll(":scope fieldset div").length;
      }), p2.cssSupportsSelector = ce2(function() {
        return CSS.supports("selector(*)") && T2.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))");
      }), p2.attributes = ce2(function(e4) {
        return e4.className = "i", !e4.getAttribute("className");
      }), p2.getElementsByTagName = ce2(function(e4) {
        return e4.appendChild(T2.createComment("")), !e4.getElementsByTagName("*").length;
      }), p2.getElementsByClassName = J2.test(T2.getElementsByClassName), p2.getById = ce2(function(e4) {
        return a2.appendChild(e4).id = S2, !T2.getElementsByName || !T2.getElementsByName(S2).length;
      }), p2.getById ? (x2.filter.ID = function(e4) {
        var t4 = e4.replace(te2, ne2);
        return function(e5) {
          return e5.getAttribute("id") === t4;
        };
      }, x2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && E2) {
          var n4 = t4.getElementById(e4);
          return n4 ? [n4] : [];
        }
      }) : (x2.filter.ID = function(e4) {
        var n4 = e4.replace(te2, ne2);
        return function(e5) {
          var t4 = "undefined" != typeof e5.getAttributeNode && e5.getAttributeNode("id");
          return t4 && t4.value === n4;
        };
      }, x2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && E2) {
          var n4, r4, i3, o3 = t4.getElementById(e4);
          if (o3) {
            if ((n4 = o3.getAttributeNode("id")) && n4.value === e4)
              return [o3];
            i3 = t4.getElementsByName(e4), r4 = 0;
            while (o3 = i3[r4++])
              if ((n4 = o3.getAttributeNode("id")) && n4.value === e4)
                return [o3];
          }
          return [];
        }
      }), x2.find.TAG = p2.getElementsByTagName ? function(e4, t4) {
        return "undefined" != typeof t4.getElementsByTagName ? t4.getElementsByTagName(e4) : p2.qsa ? t4.querySelectorAll(e4) : void 0;
      } : function(e4, t4) {
        var n4, r4 = [], i3 = 0, o3 = t4.getElementsByTagName(e4);
        if ("*" === e4) {
          while (n4 = o3[i3++])
            1 === n4.nodeType && r4.push(n4);
          return r4;
        }
        return o3;
      }, x2.find.CLASS = p2.getElementsByClassName && function(e4, t4) {
        if ("undefined" != typeof t4.getElementsByClassName && E2)
          return t4.getElementsByClassName(e4);
      }, s2 = [], v2 = [], (p2.qsa = J2.test(T2.querySelectorAll)) && (ce2(function(e4) {
        var t4;
        a2.appendChild(e4).innerHTML = "<a id='" + S2 + "'></a><select id='" + S2 + "-\r\\' msallowcapture=''><option selected=''></option></select>", e4.querySelectorAll("[msallowcapture^='']").length && v2.push("[*^$]=" + R2 + `*(?:''|"")`), e4.querySelectorAll("[selected]").length || v2.push("\\[" + R2 + "*(?:value|" + I2 + ")"), e4.querySelectorAll("[id~=" + S2 + "-]").length || v2.push("~="), (t4 = T2.createElement("input")).setAttribute("name", ""), e4.appendChild(t4), e4.querySelectorAll("[name='']").length || v2.push("\\[" + R2 + "*name" + R2 + "*=" + R2 + `*(?:''|"")`), e4.querySelectorAll(":checked").length || v2.push(":checked"), e4.querySelectorAll("a#" + S2 + "+*").length || v2.push(".#.+[+~]"), e4.querySelectorAll("\\\f"), v2.push("[\\r\\n\\f]");
      }), ce2(function(e4) {
        e4.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t4 = T2.createElement("input");
        t4.setAttribute("type", "hidden"), e4.appendChild(t4).setAttribute("name", "D"), e4.querySelectorAll("[name=d]").length && v2.push("name" + R2 + "*[*^$|!~]?="), 2 !== e4.querySelectorAll(":enabled").length && v2.push(":enabled", ":disabled"), a2.appendChild(e4).disabled = true, 2 !== e4.querySelectorAll(":disabled").length && v2.push(":enabled", ":disabled"), e4.querySelectorAll("*,:x"), v2.push(",.*:");
      })), (p2.matchesSelector = J2.test(c2 = a2.matches || a2.webkitMatchesSelector || a2.mozMatchesSelector || a2.oMatchesSelector || a2.msMatchesSelector)) && ce2(function(e4) {
        p2.disconnectedMatch = c2.call(e4, "*"), c2.call(e4, "[s!='']:x"), s2.push("!=", W2);
      }), p2.cssSupportsSelector || v2.push(":has"), v2 = v2.length && new RegExp(v2.join("|")), s2 = s2.length && new RegExp(s2.join("|")), t3 = J2.test(a2.compareDocumentPosition), y2 = t3 || J2.test(a2.contains) ? function(e4, t4) {
        var n4 = 9 === e4.nodeType && e4.documentElement || e4, r4 = t4 && t4.parentNode;
        return e4 === r4 || !(!r4 || 1 !== r4.nodeType || !(n4.contains ? n4.contains(r4) : e4.compareDocumentPosition && 16 & e4.compareDocumentPosition(r4)));
      } : function(e4, t4) {
        if (t4) {
          while (t4 = t4.parentNode)
            if (t4 === e4)
              return true;
        }
        return false;
      }, D2 = t3 ? function(e4, t4) {
        if (e4 === t4)
          return l2 = true, 0;
        var n4 = !e4.compareDocumentPosition - !t4.compareDocumentPosition;
        return n4 || (1 & (n4 = (e4.ownerDocument || e4) == (t4.ownerDocument || t4) ? e4.compareDocumentPosition(t4) : 1) || !p2.sortDetached && t4.compareDocumentPosition(e4) === n4 ? e4 == T2 || e4.ownerDocument == d2 && y2(d2, e4) ? -1 : t4 == T2 || t4.ownerDocument == d2 && y2(d2, t4) ? 1 : u2 ? H2(u2, e4) - H2(u2, t4) : 0 : 4 & n4 ? -1 : 1);
      } : function(e4, t4) {
        if (e4 === t4)
          return l2 = true, 0;
        var n4, r4 = 0, i3 = e4.parentNode, o3 = t4.parentNode, a3 = [e4], s3 = [t4];
        if (!i3 || !o3)
          return e4 == T2 ? -1 : t4 == T2 ? 1 : i3 ? -1 : o3 ? 1 : u2 ? H2(u2, e4) - H2(u2, t4) : 0;
        if (i3 === o3)
          return de2(e4, t4);
        n4 = e4;
        while (n4 = n4.parentNode)
          a3.unshift(n4);
        n4 = t4;
        while (n4 = n4.parentNode)
          s3.unshift(n4);
        while (a3[r4] === s3[r4])
          r4++;
        return r4 ? de2(a3[r4], s3[r4]) : a3[r4] == d2 ? -1 : s3[r4] == d2 ? 1 : 0;
      }), T2;
    }, se2.matches = function(e3, t3) {
      return se2(e3, null, null, t3);
    }, se2.matchesSelector = function(e3, t3) {
      if (C2(e3), p2.matchesSelector && E2 && !k2[t3 + " "] && (!s2 || !s2.test(t3)) && (!v2 || !v2.test(t3)))
        try {
          var n3 = c2.call(e3, t3);
          if (n3 || p2.disconnectedMatch || e3.document && 11 !== e3.document.nodeType)
            return n3;
        } catch (e4) {
          k2(t3, true);
        }
      return 0 < se2(t3, T2, null, [e3]).length;
    }, se2.contains = function(e3, t3) {
      return (e3.ownerDocument || e3) != T2 && C2(e3), y2(e3, t3);
    }, se2.attr = function(e3, t3) {
      (e3.ownerDocument || e3) != T2 && C2(e3);
      var n3 = x2.attrHandle[t3.toLowerCase()], r3 = n3 && L2.call(x2.attrHandle, t3.toLowerCase()) ? n3(e3, t3, !E2) : void 0;
      return void 0 !== r3 ? r3 : p2.attributes || !E2 ? e3.getAttribute(t3) : (r3 = e3.getAttributeNode(t3)) && r3.specified ? r3.value : null;
    }, se2.escape = function(e3) {
      return (e3 + "").replace(re2, ie2);
    }, se2.error = function(e3) {
      throw new Error("Syntax error, unrecognized expression: " + e3);
    }, se2.uniqueSort = function(e3) {
      var t3, n3 = [], r3 = 0, i3 = 0;
      if (l2 = !p2.detectDuplicates, u2 = !p2.sortStable && e3.slice(0), e3.sort(D2), l2) {
        while (t3 = e3[i3++])
          t3 === e3[i3] && (r3 = n3.push(i3));
        while (r3--)
          e3.splice(n3[r3], 1);
      }
      return u2 = null, e3;
    }, o2 = se2.getText = function(e3) {
      var t3, n3 = "", r3 = 0, i3 = e3.nodeType;
      if (i3) {
        if (1 === i3 || 9 === i3 || 11 === i3) {
          if ("string" == typeof e3.textContent)
            return e3.textContent;
          for (e3 = e3.firstChild; e3; e3 = e3.nextSibling)
            n3 += o2(e3);
        } else if (3 === i3 || 4 === i3)
          return e3.nodeValue;
      } else
        while (t3 = e3[r3++])
          n3 += o2(t3);
      return n3;
    }, (x2 = se2.selectors = { cacheLength: 50, createPseudo: le2, match: Q2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e3) {
      return e3[1] = e3[1].replace(te2, ne2), e3[3] = (e3[3] || e3[4] || e3[5] || "").replace(te2, ne2), "~=" === e3[2] && (e3[3] = " " + e3[3] + " "), e3.slice(0, 4);
    }, CHILD: function(e3) {
      return e3[1] = e3[1].toLowerCase(), "nth" === e3[1].slice(0, 3) ? (e3[3] || se2.error(e3[0]), e3[4] = +(e3[4] ? e3[5] + (e3[6] || 1) : 2 * ("even" === e3[3] || "odd" === e3[3])), e3[5] = +(e3[7] + e3[8] || "odd" === e3[3])) : e3[3] && se2.error(e3[0]), e3;
    }, PSEUDO: function(e3) {
      var t3, n3 = !e3[6] && e3[2];
      return Q2.CHILD.test(e3[0]) ? null : (e3[3] ? e3[2] = e3[4] || e3[5] || "" : n3 && V2.test(n3) && (t3 = h2(n3, true)) && (t3 = n3.indexOf(")", n3.length - t3) - n3.length) && (e3[0] = e3[0].slice(0, t3), e3[2] = n3.slice(0, t3)), e3.slice(0, 3));
    } }, filter: { TAG: function(e3) {
      var t3 = e3.replace(te2, ne2).toLowerCase();
      return "*" === e3 ? function() {
        return true;
      } : function(e4) {
        return e4.nodeName && e4.nodeName.toLowerCase() === t3;
      };
    }, CLASS: function(e3) {
      var t3 = m2[e3 + " "];
      return t3 || (t3 = new RegExp("(^|" + R2 + ")" + e3 + "(" + R2 + "|$)")) && m2(e3, function(e4) {
        return t3.test("string" == typeof e4.className && e4.className || "undefined" != typeof e4.getAttribute && e4.getAttribute("class") || "");
      });
    }, ATTR: function(n3, r3, i3) {
      return function(e3) {
        var t3 = se2.attr(e3, n3);
        return null == t3 ? "!=" === r3 : !r3 || (t3 += "", "=" === r3 ? t3 === i3 : "!=" === r3 ? t3 !== i3 : "^=" === r3 ? i3 && 0 === t3.indexOf(i3) : "*=" === r3 ? i3 && -1 < t3.indexOf(i3) : "$=" === r3 ? i3 && t3.slice(-i3.length) === i3 : "~=" === r3 ? -1 < (" " + t3.replace(F2, " ") + " ").indexOf(i3) : "|=" === r3 && (t3 === i3 || t3.slice(0, i3.length + 1) === i3 + "-"));
      };
    }, CHILD: function(h3, e3, t3, g3, v3) {
      var y3 = "nth" !== h3.slice(0, 3), m3 = "last" !== h3.slice(-4), b3 = "of-type" === e3;
      return 1 === g3 && 0 === v3 ? function(e4) {
        return !!e4.parentNode;
      } : function(e4, t4, n3) {
        var r3, i3, o3, a3, s3, u3, l3 = y3 !== m3 ? "nextSibling" : "previousSibling", c3 = e4.parentNode, f3 = b3 && e4.nodeName.toLowerCase(), d3 = !n3 && !b3, p3 = false;
        if (c3) {
          if (y3) {
            while (l3) {
              a3 = e4;
              while (a3 = a3[l3])
                if (b3 ? a3.nodeName.toLowerCase() === f3 : 1 === a3.nodeType)
                  return false;
              u3 = l3 = "only" === h3 && !u3 && "nextSibling";
            }
            return true;
          }
          if (u3 = [m3 ? c3.firstChild : c3.lastChild], m3 && d3) {
            p3 = (s3 = (r3 = (i3 = (o3 = (a3 = c3)[S2] || (a3[S2] = {}))[a3.uniqueID] || (o3[a3.uniqueID] = {}))[h3] || [])[0] === A2 && r3[1]) && r3[2], a3 = s3 && c3.childNodes[s3];
            while (a3 = ++s3 && a3 && a3[l3] || (p3 = s3 = 0) || u3.pop())
              if (1 === a3.nodeType && ++p3 && a3 === e4) {
                i3[h3] = [A2, s3, p3];
                break;
              }
          } else if (d3 && (p3 = s3 = (r3 = (i3 = (o3 = (a3 = e4)[S2] || (a3[S2] = {}))[a3.uniqueID] || (o3[a3.uniqueID] = {}))[h3] || [])[0] === A2 && r3[1]), false === p3) {
            while (a3 = ++s3 && a3 && a3[l3] || (p3 = s3 = 0) || u3.pop())
              if ((b3 ? a3.nodeName.toLowerCase() === f3 : 1 === a3.nodeType) && ++p3 && (d3 && ((i3 = (o3 = a3[S2] || (a3[S2] = {}))[a3.uniqueID] || (o3[a3.uniqueID] = {}))[h3] = [A2, p3]), a3 === e4))
                break;
          }
          return (p3 -= v3) === g3 || p3 % g3 == 0 && 0 <= p3 / g3;
        }
      };
    }, PSEUDO: function(e3, o3) {
      var t3, a3 = x2.pseudos[e3] || x2.setFilters[e3.toLowerCase()] || se2.error("unsupported pseudo: " + e3);
      return a3[S2] ? a3(o3) : 1 < a3.length ? (t3 = [e3, e3, "", o3], x2.setFilters.hasOwnProperty(e3.toLowerCase()) ? le2(function(e4, t4) {
        var n3, r3 = a3(e4, o3), i3 = r3.length;
        while (i3--)
          e4[n3 = H2(e4, r3[i3])] = !(t4[n3] = r3[i3]);
      }) : function(e4) {
        return a3(e4, 0, t3);
      }) : a3;
    } }, pseudos: { not: le2(function(e3) {
      var r3 = [], i3 = [], s3 = f2(e3.replace($2, "$1"));
      return s3[S2] ? le2(function(e4, t3, n3, r4) {
        var i4, o3 = s3(e4, null, r4, []), a3 = e4.length;
        while (a3--)
          (i4 = o3[a3]) && (e4[a3] = !(t3[a3] = i4));
      }) : function(e4, t3, n3) {
        return r3[0] = e4, s3(r3, null, n3, i3), r3[0] = null, !i3.pop();
      };
    }), has: le2(function(t3) {
      return function(e3) {
        return 0 < se2(t3, e3).length;
      };
    }), contains: le2(function(t3) {
      return t3 = t3.replace(te2, ne2), function(e3) {
        return -1 < (e3.textContent || o2(e3)).indexOf(t3);
      };
    }), lang: le2(function(n3) {
      return X2.test(n3 || "") || se2.error("unsupported lang: " + n3), n3 = n3.replace(te2, ne2).toLowerCase(), function(e3) {
        var t3;
        do {
          if (t3 = E2 ? e3.lang : e3.getAttribute("xml:lang") || e3.getAttribute("lang"))
            return (t3 = t3.toLowerCase()) === n3 || 0 === t3.indexOf(n3 + "-");
        } while ((e3 = e3.parentNode) && 1 === e3.nodeType);
        return false;
      };
    }), target: function(e3) {
      var t3 = n2.location && n2.location.hash;
      return t3 && t3.slice(1) === e3.id;
    }, root: function(e3) {
      return e3 === a2;
    }, focus: function(e3) {
      return e3 === T2.activeElement && (!T2.hasFocus || T2.hasFocus()) && !!(e3.type || e3.href || ~e3.tabIndex);
    }, enabled: ge2(false), disabled: ge2(true), checked: function(e3) {
      var t3 = e3.nodeName.toLowerCase();
      return "input" === t3 && !!e3.checked || "option" === t3 && !!e3.selected;
    }, selected: function(e3) {
      return e3.parentNode && e3.parentNode.selectedIndex, true === e3.selected;
    }, empty: function(e3) {
      for (e3 = e3.firstChild; e3; e3 = e3.nextSibling)
        if (e3.nodeType < 6)
          return false;
      return true;
    }, parent: function(e3) {
      return !x2.pseudos.empty(e3);
    }, header: function(e3) {
      return K2.test(e3.nodeName);
    }, input: function(e3) {
      return G2.test(e3.nodeName);
    }, button: function(e3) {
      var t3 = e3.nodeName.toLowerCase();
      return "input" === t3 && "button" === e3.type || "button" === t3;
    }, text: function(e3) {
      var t3;
      return "input" === e3.nodeName.toLowerCase() && "text" === e3.type && (null == (t3 = e3.getAttribute("type")) || "text" === t3.toLowerCase());
    }, first: ve2(function() {
      return [0];
    }), last: ve2(function(e3, t3) {
      return [t3 - 1];
    }), eq: ve2(function(e3, t3, n3) {
      return [n3 < 0 ? n3 + t3 : n3];
    }), even: ve2(function(e3, t3) {
      for (var n3 = 0; n3 < t3; n3 += 2)
        e3.push(n3);
      return e3;
    }), odd: ve2(function(e3, t3) {
      for (var n3 = 1; n3 < t3; n3 += 2)
        e3.push(n3);
      return e3;
    }), lt: ve2(function(e3, t3, n3) {
      for (var r3 = n3 < 0 ? n3 + t3 : t3 < n3 ? t3 : n3; 0 <= --r3; )
        e3.push(r3);
      return e3;
    }), gt: ve2(function(e3, t3, n3) {
      for (var r3 = n3 < 0 ? n3 + t3 : n3; ++r3 < t3; )
        e3.push(r3);
      return e3;
    }) } }).pseudos.nth = x2.pseudos.eq, { radio: true, checkbox: true, file: true, password: true, image: true })
      x2.pseudos[e2] = pe2(e2);
    for (e2 in { submit: true, reset: true })
      x2.pseudos[e2] = he2(e2);
    function me2() {
    }
    function be2(e3) {
      for (var t3 = 0, n3 = e3.length, r3 = ""; t3 < n3; t3++)
        r3 += e3[t3].value;
      return r3;
    }
    function xe2(s3, e3, t3) {
      var u3 = e3.dir, l3 = e3.next, c3 = l3 || u3, f3 = t3 && "parentNode" === c3, d3 = r2++;
      return e3.first ? function(e4, t4, n3) {
        while (e4 = e4[u3])
          if (1 === e4.nodeType || f3)
            return s3(e4, t4, n3);
        return false;
      } : function(e4, t4, n3) {
        var r3, i3, o3, a3 = [A2, d3];
        if (n3) {
          while (e4 = e4[u3])
            if ((1 === e4.nodeType || f3) && s3(e4, t4, n3))
              return true;
        } else
          while (e4 = e4[u3])
            if (1 === e4.nodeType || f3)
              if (i3 = (o3 = e4[S2] || (e4[S2] = {}))[e4.uniqueID] || (o3[e4.uniqueID] = {}), l3 && l3 === e4.nodeName.toLowerCase())
                e4 = e4[u3] || e4;
              else {
                if ((r3 = i3[c3]) && r3[0] === A2 && r3[1] === d3)
                  return a3[2] = r3[2];
                if ((i3[c3] = a3)[2] = s3(e4, t4, n3))
                  return true;
              }
        return false;
      };
    }
    function we2(i3) {
      return 1 < i3.length ? function(e3, t3, n3) {
        var r3 = i3.length;
        while (r3--)
          if (!i3[r3](e3, t3, n3))
            return false;
        return true;
      } : i3[0];
    }
    function Ce2(e3, t3, n3, r3, i3) {
      for (var o3, a3 = [], s3 = 0, u3 = e3.length, l3 = null != t3; s3 < u3; s3++)
        (o3 = e3[s3]) && (n3 && !n3(o3, r3, i3) || (a3.push(o3), l3 && t3.push(s3)));
      return a3;
    }
    function Te2(p3, h3, g3, v3, y3, e3) {
      return v3 && !v3[S2] && (v3 = Te2(v3)), y3 && !y3[S2] && (y3 = Te2(y3, e3)), le2(function(e4, t3, n3, r3) {
        var i3, o3, a3, s3 = [], u3 = [], l3 = t3.length, c3 = e4 || function(e5, t4, n4) {
          for (var r4 = 0, i4 = t4.length; r4 < i4; r4++)
            se2(e5, t4[r4], n4);
          return n4;
        }(h3 || "*", n3.nodeType ? [n3] : n3, []), f3 = !p3 || !e4 && h3 ? c3 : Ce2(c3, s3, p3, n3, r3), d3 = g3 ? y3 || (e4 ? p3 : l3 || v3) ? [] : t3 : f3;
        if (g3 && g3(f3, d3, n3, r3), v3) {
          i3 = Ce2(d3, u3), v3(i3, [], n3, r3), o3 = i3.length;
          while (o3--)
            (a3 = i3[o3]) && (d3[u3[o3]] = !(f3[u3[o3]] = a3));
        }
        if (e4) {
          if (y3 || p3) {
            if (y3) {
              i3 = [], o3 = d3.length;
              while (o3--)
                (a3 = d3[o3]) && i3.push(f3[o3] = a3);
              y3(null, d3 = [], i3, r3);
            }
            o3 = d3.length;
            while (o3--)
              (a3 = d3[o3]) && -1 < (i3 = y3 ? H2(e4, a3) : s3[o3]) && (e4[i3] = !(t3[i3] = a3));
          }
        } else
          d3 = Ce2(d3 === t3 ? d3.splice(l3, d3.length) : d3), y3 ? y3(null, t3, d3, r3) : O2.apply(t3, d3);
      });
    }
    function Ee2(e3) {
      for (var i3, t3, n3, r3 = e3.length, o3 = x2.relative[e3[0].type], a3 = o3 || x2.relative[" "], s3 = o3 ? 1 : 0, u3 = xe2(function(e4) {
        return e4 === i3;
      }, a3, true), l3 = xe2(function(e4) {
        return -1 < H2(i3, e4);
      }, a3, true), c3 = [function(e4, t4, n4) {
        var r4 = !o3 && (n4 || t4 !== w2) || ((i3 = t4).nodeType ? u3(e4, t4, n4) : l3(e4, t4, n4));
        return i3 = null, r4;
      }]; s3 < r3; s3++)
        if (t3 = x2.relative[e3[s3].type])
          c3 = [xe2(we2(c3), t3)];
        else {
          if ((t3 = x2.filter[e3[s3].type].apply(null, e3[s3].matches))[S2]) {
            for (n3 = ++s3; n3 < r3; n3++)
              if (x2.relative[e3[n3].type])
                break;
            return Te2(1 < s3 && we2(c3), 1 < s3 && be2(e3.slice(0, s3 - 1).concat({ value: " " === e3[s3 - 2].type ? "*" : "" })).replace($2, "$1"), t3, s3 < n3 && Ee2(e3.slice(s3, n3)), n3 < r3 && Ee2(e3 = e3.slice(n3)), n3 < r3 && be2(e3));
          }
          c3.push(t3);
        }
      return we2(c3);
    }
    return me2.prototype = x2.filters = x2.pseudos, x2.setFilters = new me2(), h2 = se2.tokenize = function(e3, t3) {
      var n3, r3, i3, o3, a3, s3, u3, l3 = b2[e3 + " "];
      if (l3)
        return t3 ? 0 : l3.slice(0);
      a3 = e3, s3 = [], u3 = x2.preFilter;
      while (a3) {
        for (o3 in n3 && !(r3 = z2.exec(a3)) || (r3 && (a3 = a3.slice(r3[0].length) || a3), s3.push(i3 = [])), n3 = false, (r3 = _2.exec(a3)) && (n3 = r3.shift(), i3.push({ value: n3, type: r3[0].replace($2, " ") }), a3 = a3.slice(n3.length)), x2.filter)
          !(r3 = Q2[o3].exec(a3)) || u3[o3] && !(r3 = u3[o3](r3)) || (n3 = r3.shift(), i3.push({ value: n3, type: o3, matches: r3 }), a3 = a3.slice(n3.length));
        if (!n3)
          break;
      }
      return t3 ? a3.length : a3 ? se2.error(e3) : b2(e3, s3).slice(0);
    }, f2 = se2.compile = function(e3, t3) {
      var n3, v3, y3, m3, b3, r3, i3 = [], o3 = [], a3 = N2[e3 + " "];
      if (!a3) {
        t3 || (t3 = h2(e3)), n3 = t3.length;
        while (n3--)
          (a3 = Ee2(t3[n3]))[S2] ? i3.push(a3) : o3.push(a3);
        (a3 = N2(e3, (v3 = o3, m3 = 0 < (y3 = i3).length, b3 = 0 < v3.length, r3 = function(e4, t4, n4, r4, i4) {
          var o4, a4, s3, u3 = 0, l3 = "0", c3 = e4 && [], f3 = [], d3 = w2, p3 = e4 || b3 && x2.find.TAG("*", i4), h3 = A2 += null == d3 ? 1 : Math.random() || 0.1, g3 = p3.length;
          for (i4 && (w2 = t4 == T2 || t4 || i4); l3 !== g3 && null != (o4 = p3[l3]); l3++) {
            if (b3 && o4) {
              a4 = 0, t4 || o4.ownerDocument == T2 || (C2(o4), n4 = !E2);
              while (s3 = v3[a4++])
                if (s3(o4, t4 || T2, n4)) {
                  r4.push(o4);
                  break;
                }
              i4 && (A2 = h3);
            }
            m3 && ((o4 = !s3 && o4) && u3--, e4 && c3.push(o4));
          }
          if (u3 += l3, m3 && l3 !== u3) {
            a4 = 0;
            while (s3 = y3[a4++])
              s3(c3, f3, t4, n4);
            if (e4) {
              if (0 < u3)
                while (l3--)
                  c3[l3] || f3[l3] || (f3[l3] = j2.call(r4));
              f3 = Ce2(f3);
            }
            O2.apply(r4, f3), i4 && !e4 && 0 < f3.length && 1 < u3 + y3.length && se2.uniqueSort(r4);
          }
          return i4 && (A2 = h3, w2 = d3), c3;
        }, m3 ? le2(r3) : r3))).selector = e3;
      }
      return a3;
    }, g2 = se2.select = function(e3, t3, n3, r3) {
      var i3, o3, a3, s3, u3, l3 = "function" == typeof e3 && e3, c3 = !r3 && h2(e3 = l3.selector || e3);
      if (n3 = n3 || [], 1 === c3.length) {
        if (2 < (o3 = c3[0] = c3[0].slice(0)).length && "ID" === (a3 = o3[0]).type && 9 === t3.nodeType && E2 && x2.relative[o3[1].type]) {
          if (!(t3 = (x2.find.ID(a3.matches[0].replace(te2, ne2), t3) || [])[0]))
            return n3;
          l3 && (t3 = t3.parentNode), e3 = e3.slice(o3.shift().value.length);
        }
        i3 = Q2.needsContext.test(e3) ? 0 : o3.length;
        while (i3--) {
          if (a3 = o3[i3], x2.relative[s3 = a3.type])
            break;
          if ((u3 = x2.find[s3]) && (r3 = u3(a3.matches[0].replace(te2, ne2), ee2.test(o3[0].type) && ye2(t3.parentNode) || t3))) {
            if (o3.splice(i3, 1), !(e3 = r3.length && be2(o3)))
              return O2.apply(n3, r3), n3;
            break;
          }
        }
      }
      return (l3 || f2(e3, c3))(r3, t3, !E2, n3, !t3 || ee2.test(e3) && ye2(t3.parentNode) || t3), n3;
    }, p2.sortStable = S2.split("").sort(D2).join("") === S2, p2.detectDuplicates = !!l2, C2(), p2.sortDetached = ce2(function(e3) {
      return 1 & e3.compareDocumentPosition(T2.createElement("fieldset"));
    }), ce2(function(e3) {
      return e3.innerHTML = "<a href='#'></a>", "#" === e3.firstChild.getAttribute("href");
    }) || fe2("type|href|height|width", function(e3, t3, n3) {
      if (!n3)
        return e3.getAttribute(t3, "type" === t3.toLowerCase() ? 1 : 2);
    }), p2.attributes && ce2(function(e3) {
      return e3.innerHTML = "<input/>", e3.firstChild.setAttribute("value", ""), "" === e3.firstChild.getAttribute("value");
    }) || fe2("value", function(e3, t3, n3) {
      if (!n3 && "input" === e3.nodeName.toLowerCase())
        return e3.defaultValue;
    }), ce2(function(e3) {
      return null == e3.getAttribute("disabled");
    }) || fe2(I2, function(e3, t3, n3) {
      var r3;
      if (!n3)
        return true === e3[t3] ? t3.toLowerCase() : (r3 = e3.getAttributeNode(t3)) && r3.specified ? r3.value : null;
    }), se2;
  }(g);
  E.find = p, E.expr = p.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = p.uniqueSort, E.text = p.getText, E.isXMLDoc = p.isXML, E.contains = p.contains, E.escapeSelector = p.escape;
  var h = function(e2, t2, n2) {
    var r2 = [], i2 = void 0 !== n2;
    while ((e2 = e2[t2]) && 9 !== e2.nodeType)
      if (1 === e2.nodeType) {
        if (i2 && E(e2).is(n2))
          break;
        r2.push(e2);
      }
    return r2;
  }, S = function(e2, t2) {
    for (var n2 = []; e2; e2 = e2.nextSibling)
      1 === e2.nodeType && e2 !== t2 && n2.push(e2);
    return n2;
  }, A = E.expr.match.needsContext;
  function N(e2, t2) {
    return e2.nodeName && e2.nodeName.toLowerCase() === t2.toLowerCase();
  }
  var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e2, n2, r2) {
    return b(n2) ? E.grep(e2, function(e3, t2) {
      return !!n2.call(e3, t2, e3) !== r2;
    }) : n2.nodeType ? E.grep(e2, function(e3) {
      return e3 === n2 !== r2;
    }) : "string" != typeof n2 ? E.grep(e2, function(e3) {
      return -1 < i.call(n2, e3) !== r2;
    }) : E.filter(n2, e2, r2);
  }
  E.filter = function(e2, t2, n2) {
    var r2 = t2[0];
    return n2 && (e2 = ":not(" + e2 + ")"), 1 === t2.length && 1 === r2.nodeType ? E.find.matchesSelector(r2, e2) ? [r2] : [] : E.find.matches(e2, E.grep(t2, function(e3) {
      return 1 === e3.nodeType;
    }));
  }, E.fn.extend({ find: function(e2) {
    var t2, n2, r2 = this.length, i2 = this;
    if ("string" != typeof e2)
      return this.pushStack(E(e2).filter(function() {
        for (t2 = 0; t2 < r2; t2++)
          if (E.contains(i2[t2], this))
            return true;
      }));
    for (n2 = this.pushStack([]), t2 = 0; t2 < r2; t2++)
      E.find(e2, i2[t2], n2);
    return 1 < r2 ? E.uniqueSort(n2) : n2;
  }, filter: function(e2) {
    return this.pushStack(D(this, e2 || [], false));
  }, not: function(e2) {
    return this.pushStack(D(this, e2 || [], true));
  }, is: function(e2) {
    return !!D(this, "string" == typeof e2 && A.test(e2) ? E(e2) : e2 || [], false).length;
  } });
  var L, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (E.fn.init = function(e2, t2, n2) {
    var r2, i2;
    if (!e2)
      return this;
    if (n2 = n2 || L, "string" == typeof e2) {
      if (!(r2 = "<" === e2[0] && ">" === e2[e2.length - 1] && 3 <= e2.length ? [null, e2, null] : j.exec(e2)) || !r2[1] && t2)
        return !t2 || t2.jquery ? (t2 || n2).find(e2) : this.constructor(t2).find(e2);
      if (r2[1]) {
        if (t2 = t2 instanceof E ? t2[0] : t2, E.merge(this, E.parseHTML(r2[1], t2 && t2.nodeType ? t2.ownerDocument || t2 : w, true)), k.test(r2[1]) && E.isPlainObject(t2))
          for (r2 in t2)
            b(this[r2]) ? this[r2](t2[r2]) : this.attr(r2, t2[r2]);
        return this;
      }
      return (i2 = w.getElementById(r2[2])) && (this[0] = i2, this.length = 1), this;
    }
    return e2.nodeType ? (this[0] = e2, this.length = 1, this) : b(e2) ? void 0 !== n2.ready ? n2.ready(e2) : e2(E) : E.makeArray(e2, this);
  }).prototype = E.fn, L = E(w);
  var q = /^(?:parents|prev(?:Until|All))/, O = { children: true, contents: true, next: true, prev: true };
  function P(e2, t2) {
    while ((e2 = e2[t2]) && 1 !== e2.nodeType)
      ;
    return e2;
  }
  E.fn.extend({ has: function(e2) {
    var t2 = E(e2, this), n2 = t2.length;
    return this.filter(function() {
      for (var e3 = 0; e3 < n2; e3++)
        if (E.contains(this, t2[e3]))
          return true;
    });
  }, closest: function(e2, t2) {
    var n2, r2 = 0, i2 = this.length, o2 = [], a2 = "string" != typeof e2 && E(e2);
    if (!A.test(e2)) {
      for (; r2 < i2; r2++)
        for (n2 = this[r2]; n2 && n2 !== t2; n2 = n2.parentNode)
          if (n2.nodeType < 11 && (a2 ? -1 < a2.index(n2) : 1 === n2.nodeType && E.find.matchesSelector(n2, e2))) {
            o2.push(n2);
            break;
          }
    }
    return this.pushStack(1 < o2.length ? E.uniqueSort(o2) : o2);
  }, index: function(e2) {
    return e2 ? "string" == typeof e2 ? i.call(E(e2), this[0]) : i.call(this, e2.jquery ? e2[0] : e2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add: function(e2, t2) {
    return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e2, t2))));
  }, addBack: function(e2) {
    return this.add(null == e2 ? this.prevObject : this.prevObject.filter(e2));
  } }), E.each({ parent: function(e2) {
    var t2 = e2.parentNode;
    return t2 && 11 !== t2.nodeType ? t2 : null;
  }, parents: function(e2) {
    return h(e2, "parentNode");
  }, parentsUntil: function(e2, t2, n2) {
    return h(e2, "parentNode", n2);
  }, next: function(e2) {
    return P(e2, "nextSibling");
  }, prev: function(e2) {
    return P(e2, "previousSibling");
  }, nextAll: function(e2) {
    return h(e2, "nextSibling");
  }, prevAll: function(e2) {
    return h(e2, "previousSibling");
  }, nextUntil: function(e2, t2, n2) {
    return h(e2, "nextSibling", n2);
  }, prevUntil: function(e2, t2, n2) {
    return h(e2, "previousSibling", n2);
  }, siblings: function(e2) {
    return S((e2.parentNode || {}).firstChild, e2);
  }, children: function(e2) {
    return S(e2.firstChild);
  }, contents: function(e2) {
    return null != e2.contentDocument && r(e2.contentDocument) ? e2.contentDocument : (N(e2, "template") && (e2 = e2.content || e2), E.merge([], e2.childNodes));
  } }, function(r2, i2) {
    E.fn[r2] = function(e2, t2) {
      var n2 = E.map(this, i2, e2);
      return "Until" !== r2.slice(-5) && (t2 = e2), t2 && "string" == typeof t2 && (n2 = E.filter(t2, n2)), 1 < this.length && (O[r2] || E.uniqueSort(n2), q.test(r2) && n2.reverse()), this.pushStack(n2);
    };
  });
  var H = /[^\x20\t\r\n\f]+/g;
  function I(e2) {
    return e2;
  }
  function R(e2) {
    throw e2;
  }
  function B(e2, t2, n2, r2) {
    var i2;
    try {
      e2 && b(i2 = e2.promise) ? i2.call(e2).done(t2).fail(n2) : e2 && b(i2 = e2.then) ? i2.call(e2, t2, n2) : t2.apply(void 0, [e2].slice(r2));
    } catch (e3) {
      n2.apply(void 0, [e3]);
    }
  }
  E.Callbacks = function(r2) {
    var e2, n2;
    r2 = "string" == typeof r2 ? (e2 = r2, n2 = {}, E.each(e2.match(H) || [], function(e3, t3) {
      n2[t3] = true;
    }), n2) : E.extend({}, r2);
    var i2, t2, o2, a2, s2 = [], u2 = [], l2 = -1, c2 = function() {
      for (a2 = a2 || r2.once, o2 = i2 = true; u2.length; l2 = -1) {
        t2 = u2.shift();
        while (++l2 < s2.length)
          false === s2[l2].apply(t2[0], t2[1]) && r2.stopOnFalse && (l2 = s2.length, t2 = false);
      }
      r2.memory || (t2 = false), i2 = false, a2 && (s2 = t2 ? [] : "");
    }, f2 = { add: function() {
      return s2 && (t2 && !i2 && (l2 = s2.length - 1, u2.push(t2)), function n3(e3) {
        E.each(e3, function(e4, t3) {
          b(t3) ? r2.unique && f2.has(t3) || s2.push(t3) : t3 && t3.length && "string" !== T(t3) && n3(t3);
        });
      }(arguments), t2 && !i2 && c2()), this;
    }, remove: function() {
      return E.each(arguments, function(e3, t3) {
        var n3;
        while (-1 < (n3 = E.inArray(t3, s2, n3)))
          s2.splice(n3, 1), n3 <= l2 && l2--;
      }), this;
    }, has: function(e3) {
      return e3 ? -1 < E.inArray(e3, s2) : 0 < s2.length;
    }, empty: function() {
      return s2 && (s2 = []), this;
    }, disable: function() {
      return a2 = u2 = [], s2 = t2 = "", this;
    }, disabled: function() {
      return !s2;
    }, lock: function() {
      return a2 = u2 = [], t2 || i2 || (s2 = t2 = ""), this;
    }, locked: function() {
      return !!a2;
    }, fireWith: function(e3, t3) {
      return a2 || (t3 = [e3, (t3 = t3 || []).slice ? t3.slice() : t3], u2.push(t3), i2 || c2()), this;
    }, fire: function() {
      return f2.fireWith(this, arguments), this;
    }, fired: function() {
      return !!o2;
    } };
    return f2;
  }, E.extend({ Deferred: function(e2) {
    var o2 = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]], i2 = "pending", a2 = { state: function() {
      return i2;
    }, always: function() {
      return s2.done(arguments).fail(arguments), this;
    }, "catch": function(e3) {
      return a2.then(null, e3);
    }, pipe: function() {
      var i3 = arguments;
      return E.Deferred(function(r2) {
        E.each(o2, function(e3, t2) {
          var n2 = b(i3[t2[4]]) && i3[t2[4]];
          s2[t2[1]](function() {
            var e4 = n2 && n2.apply(this, arguments);
            e4 && b(e4.promise) ? e4.promise().progress(r2.notify).done(r2.resolve).fail(r2.reject) : r2[t2[0] + "With"](this, n2 ? [e4] : arguments);
          });
        }), i3 = null;
      }).promise();
    }, then: function(t2, n2, r2) {
      var u2 = 0;
      function l2(i3, o3, a3, s3) {
        return function() {
          var n3 = this, r3 = arguments, e3 = function() {
            var e4, t4;
            if (!(i3 < u2)) {
              if ((e4 = a3.apply(n3, r3)) === o3.promise())
                throw new TypeError("Thenable self-resolution");
              t4 = e4 && ("object" == typeof e4 || "function" == typeof e4) && e4.then, b(t4) ? s3 ? t4.call(e4, l2(u2, o3, I, s3), l2(u2, o3, R, s3)) : (u2++, t4.call(e4, l2(u2, o3, I, s3), l2(u2, o3, R, s3), l2(u2, o3, I, o3.notifyWith))) : (a3 !== I && (n3 = void 0, r3 = [e4]), (s3 || o3.resolveWith)(n3, r3));
            }
          }, t3 = s3 ? e3 : function() {
            try {
              e3();
            } catch (e4) {
              E.Deferred.exceptionHook && E.Deferred.exceptionHook(e4, t3.stackTrace), u2 <= i3 + 1 && (a3 !== R && (n3 = void 0, r3 = [e4]), o3.rejectWith(n3, r3));
            }
          };
          i3 ? t3() : (E.Deferred.getStackHook && (t3.stackTrace = E.Deferred.getStackHook()), g.setTimeout(t3));
        };
      }
      return E.Deferred(function(e3) {
        o2[0][3].add(l2(0, e3, b(r2) ? r2 : I, e3.notifyWith)), o2[1][3].add(l2(0, e3, b(t2) ? t2 : I)), o2[2][3].add(l2(0, e3, b(n2) ? n2 : R));
      }).promise();
    }, promise: function(e3) {
      return null != e3 ? E.extend(e3, a2) : a2;
    } }, s2 = {};
    return E.each(o2, function(e3, t2) {
      var n2 = t2[2], r2 = t2[5];
      a2[t2[1]] = n2.add, r2 && n2.add(function() {
        i2 = r2;
      }, o2[3 - e3][2].disable, o2[3 - e3][3].disable, o2[0][2].lock, o2[0][3].lock), n2.add(t2[3].fire), s2[t2[0]] = function() {
        return s2[t2[0] + "With"](this === s2 ? void 0 : this, arguments), this;
      }, s2[t2[0] + "With"] = n2.fireWith;
    }), a2.promise(s2), e2 && e2.call(s2, s2), s2;
  }, when: function(e2) {
    var n2 = arguments.length, t2 = n2, r2 = Array(t2), i2 = s.call(arguments), o2 = E.Deferred(), a2 = function(t3) {
      return function(e3) {
        r2[t3] = this, i2[t3] = 1 < arguments.length ? s.call(arguments) : e3, --n2 || o2.resolveWith(r2, i2);
      };
    };
    if (n2 <= 1 && (B(e2, o2.done(a2(t2)).resolve, o2.reject, !n2), "pending" === o2.state() || b(i2[t2] && i2[t2].then)))
      return o2.then();
    while (t2--)
      B(i2[t2], a2(t2), o2.reject);
    return o2.promise();
  } });
  var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  E.Deferred.exceptionHook = function(e2, t2) {
    g.console && g.console.warn && e2 && M.test(e2.name) && g.console.warn("jQuery.Deferred exception: " + e2.message, e2.stack, t2);
  }, E.readyException = function(e2) {
    g.setTimeout(function() {
      throw e2;
    });
  };
  var W = E.Deferred();
  function F() {
    w.removeEventListener("DOMContentLoaded", F), g.removeEventListener("load", F), E.ready();
  }
  E.fn.ready = function(e2) {
    return W.then(e2)["catch"](function(e3) {
      E.readyException(e3);
    }), this;
  }, E.extend({ isReady: false, readyWait: 1, ready: function(e2) {
    (true === e2 ? --E.readyWait : E.isReady) || (E.isReady = true) !== e2 && 0 < --E.readyWait || W.resolveWith(w, [E]);
  } }), E.ready.then = W.then, "complete" === w.readyState || "loading" !== w.readyState && !w.documentElement.doScroll ? g.setTimeout(E.ready) : (w.addEventListener("DOMContentLoaded", F), g.addEventListener("load", F));
  var $ = function(e2, t2, n2, r2, i2, o2, a2) {
    var s2 = 0, u2 = e2.length, l2 = null == n2;
    if ("object" === T(n2))
      for (s2 in i2 = true, n2)
        $(e2, t2, s2, n2[s2], true, o2, a2);
    else if (void 0 !== r2 && (i2 = true, b(r2) || (a2 = true), l2 && (a2 ? (t2.call(e2, r2), t2 = null) : (l2 = t2, t2 = function(e3, t3, n3) {
      return l2.call(E(e3), n3);
    })), t2))
      for (; s2 < u2; s2++)
        t2(e2[s2], n2, a2 ? r2 : r2.call(e2[s2], s2, t2(e2[s2], n2)));
    return i2 ? e2 : l2 ? t2.call(e2) : u2 ? t2(e2[0], n2) : o2;
  }, z = /^-ms-/, _ = /-([a-z])/g;
  function U(e2, t2) {
    return t2.toUpperCase();
  }
  function V(e2) {
    return e2.replace(z, "ms-").replace(_, U);
  }
  var X = function(e2) {
    return 1 === e2.nodeType || 9 === e2.nodeType || !+e2.nodeType;
  };
  function Q() {
    this.expando = E.expando + Q.uid++;
  }
  Q.uid = 1, Q.prototype = { cache: function(e2) {
    var t2 = e2[this.expando];
    return t2 || (t2 = {}, X(e2) && (e2.nodeType ? e2[this.expando] = t2 : Object.defineProperty(e2, this.expando, { value: t2, configurable: true }))), t2;
  }, set: function(e2, t2, n2) {
    var r2, i2 = this.cache(e2);
    if ("string" == typeof t2)
      i2[V(t2)] = n2;
    else
      for (r2 in t2)
        i2[V(r2)] = t2[r2];
    return i2;
  }, get: function(e2, t2) {
    return void 0 === t2 ? this.cache(e2) : e2[this.expando] && e2[this.expando][V(t2)];
  }, access: function(e2, t2, n2) {
    return void 0 === t2 || t2 && "string" == typeof t2 && void 0 === n2 ? this.get(e2, t2) : (this.set(e2, t2, n2), void 0 !== n2 ? n2 : t2);
  }, remove: function(e2, t2) {
    var n2, r2 = e2[this.expando];
    if (void 0 !== r2) {
      if (void 0 !== t2) {
        n2 = (t2 = Array.isArray(t2) ? t2.map(V) : (t2 = V(t2)) in r2 ? [t2] : t2.match(H) || []).length;
        while (n2--)
          delete r2[t2[n2]];
      }
      (void 0 === t2 || E.isEmptyObject(r2)) && (e2.nodeType ? e2[this.expando] = void 0 : delete e2[this.expando]);
    }
  }, hasData: function(e2) {
    var t2 = e2[this.expando];
    return void 0 !== t2 && !E.isEmptyObject(t2);
  } };
  var Y = new Q(), G = new Q(), K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, J = /[A-Z]/g;
  function Z(e2, t2, n2) {
    var r2, i2;
    if (void 0 === n2 && 1 === e2.nodeType)
      if (r2 = "data-" + t2.replace(J, "-$&").toLowerCase(), "string" == typeof (n2 = e2.getAttribute(r2))) {
        try {
          n2 = "true" === (i2 = n2) || "false" !== i2 && ("null" === i2 ? null : i2 === +i2 + "" ? +i2 : K.test(i2) ? JSON.parse(i2) : i2);
        } catch (e3) {
        }
        G.set(e2, t2, n2);
      } else
        n2 = void 0;
    return n2;
  }
  E.extend({ hasData: function(e2) {
    return G.hasData(e2) || Y.hasData(e2);
  }, data: function(e2, t2, n2) {
    return G.access(e2, t2, n2);
  }, removeData: function(e2, t2) {
    G.remove(e2, t2);
  }, _data: function(e2, t2, n2) {
    return Y.access(e2, t2, n2);
  }, _removeData: function(e2, t2) {
    Y.remove(e2, t2);
  } }), E.fn.extend({ data: function(n2, e2) {
    var t2, r2, i2, o2 = this[0], a2 = o2 && o2.attributes;
    if (void 0 === n2) {
      if (this.length && (i2 = G.get(o2), 1 === o2.nodeType && !Y.get(o2, "hasDataAttrs"))) {
        t2 = a2.length;
        while (t2--)
          a2[t2] && 0 === (r2 = a2[t2].name).indexOf("data-") && (r2 = V(r2.slice(5)), Z(o2, r2, i2[r2]));
        Y.set(o2, "hasDataAttrs", true);
      }
      return i2;
    }
    return "object" == typeof n2 ? this.each(function() {
      G.set(this, n2);
    }) : $(this, function(e3) {
      var t3;
      if (o2 && void 0 === e3)
        return void 0 !== (t3 = G.get(o2, n2)) ? t3 : void 0 !== (t3 = Z(o2, n2)) ? t3 : void 0;
      this.each(function() {
        G.set(this, n2, e3);
      });
    }, null, e2, 1 < arguments.length, null, true);
  }, removeData: function(e2) {
    return this.each(function() {
      G.remove(this, e2);
    });
  } }), E.extend({ queue: function(e2, t2, n2) {
    var r2;
    if (e2)
      return t2 = (t2 || "fx") + "queue", r2 = Y.get(e2, t2), n2 && (!r2 || Array.isArray(n2) ? r2 = Y.access(e2, t2, E.makeArray(n2)) : r2.push(n2)), r2 || [];
  }, dequeue: function(e2, t2) {
    t2 = t2 || "fx";
    var n2 = E.queue(e2, t2), r2 = n2.length, i2 = n2.shift(), o2 = E._queueHooks(e2, t2);
    "inprogress" === i2 && (i2 = n2.shift(), r2--), i2 && ("fx" === t2 && n2.unshift("inprogress"), delete o2.stop, i2.call(e2, function() {
      E.dequeue(e2, t2);
    }, o2)), !r2 && o2 && o2.empty.fire();
  }, _queueHooks: function(e2, t2) {
    var n2 = t2 + "queueHooks";
    return Y.get(e2, n2) || Y.access(e2, n2, { empty: E.Callbacks("once memory").add(function() {
      Y.remove(e2, [t2 + "queue", n2]);
    }) });
  } }), E.fn.extend({ queue: function(t2, n2) {
    var e2 = 2;
    return "string" != typeof t2 && (n2 = t2, t2 = "fx", e2--), arguments.length < e2 ? E.queue(this[0], t2) : void 0 === n2 ? this : this.each(function() {
      var e3 = E.queue(this, t2, n2);
      E._queueHooks(this, t2), "fx" === t2 && "inprogress" !== e3[0] && E.dequeue(this, t2);
    });
  }, dequeue: function(e2) {
    return this.each(function() {
      E.dequeue(this, e2);
    });
  }, clearQueue: function(e2) {
    return this.queue(e2 || "fx", []);
  }, promise: function(e2, t2) {
    var n2, r2 = 1, i2 = E.Deferred(), o2 = this, a2 = this.length, s2 = function() {
      --r2 || i2.resolveWith(o2, [o2]);
    };
    "string" != typeof e2 && (t2 = e2, e2 = void 0), e2 = e2 || "fx";
    while (a2--)
      (n2 = Y.get(o2[a2], e2 + "queueHooks")) && n2.empty && (r2++, n2.empty.add(s2));
    return s2(), i2.promise(t2);
  } });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"), ne = ["Top", "Right", "Bottom", "Left"], re = w.documentElement, ie = function(e2) {
    return E.contains(e2.ownerDocument, e2);
  }, oe = { composed: true };
  re.getRootNode && (ie = function(e2) {
    return E.contains(e2.ownerDocument, e2) || e2.getRootNode(oe) === e2.ownerDocument;
  });
  var ae = function(e2, t2) {
    return "none" === (e2 = t2 || e2).style.display || "" === e2.style.display && ie(e2) && "none" === E.css(e2, "display");
  };
  var se = {};
  function ue(e2, t2) {
    for (var n2, r2, i2, o2, a2, s2, u2, l2 = [], c2 = 0, f2 = e2.length; c2 < f2; c2++)
      (r2 = e2[c2]).style && (n2 = r2.style.display, t2 ? ("none" === n2 && (l2[c2] = Y.get(r2, "display") || null, l2[c2] || (r2.style.display = "")), "" === r2.style.display && ae(r2) && (l2[c2] = (u2 = a2 = o2 = void 0, a2 = (i2 = r2).ownerDocument, s2 = i2.nodeName, (u2 = se[s2]) || (o2 = a2.body.appendChild(a2.createElement(s2)), u2 = E.css(o2, "display"), o2.parentNode.removeChild(o2), "none" === u2 && (u2 = "block"), se[s2] = u2)))) : "none" !== n2 && (l2[c2] = "none", Y.set(r2, "display", n2)));
    for (c2 = 0; c2 < f2; c2++)
      null != l2[c2] && (e2[c2].style.display = l2[c2]);
    return e2;
  }
  E.fn.extend({ show: function() {
    return ue(this, true);
  }, hide: function() {
    return ue(this);
  }, toggle: function(e2) {
    return "boolean" == typeof e2 ? e2 ? this.show() : this.hide() : this.each(function() {
      ae(this) ? E(this).show() : E(this).hide();
    });
  } });
  var le, ce, fe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, pe = /^$|^module$|\/(?:java|ecma)script/i;
  le = w.createDocumentFragment().appendChild(w.createElement("div")), (ce = w.createElement("input")).setAttribute("type", "radio"), ce.setAttribute("checked", "checked"), ce.setAttribute("name", "t"), le.appendChild(ce), m.checkClone = le.cloneNode(true).cloneNode(true).lastChild.checked, le.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!le.cloneNode(true).lastChild.defaultValue, le.innerHTML = "<option></option>", m.option = !!le.lastChild;
  var he = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
  function ge(e2, t2) {
    var n2;
    return n2 = "undefined" != typeof e2.getElementsByTagName ? e2.getElementsByTagName(t2 || "*") : "undefined" != typeof e2.querySelectorAll ? e2.querySelectorAll(t2 || "*") : [], void 0 === t2 || t2 && N(e2, t2) ? E.merge([e2], n2) : n2;
  }
  function ve(e2, t2) {
    for (var n2 = 0, r2 = e2.length; n2 < r2; n2++)
      Y.set(e2[n2], "globalEval", !t2 || Y.get(t2[n2], "globalEval"));
  }
  he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td, m.option || (he.optgroup = he.option = [1, "<select multiple='multiple'>", "</select>"]);
  var ye = /<|&#?\w+;/;
  function me(e2, t2, n2, r2, i2) {
    for (var o2, a2, s2, u2, l2, c2, f2 = t2.createDocumentFragment(), d2 = [], p2 = 0, h2 = e2.length; p2 < h2; p2++)
      if ((o2 = e2[p2]) || 0 === o2)
        if ("object" === T(o2))
          E.merge(d2, o2.nodeType ? [o2] : o2);
        else if (ye.test(o2)) {
          a2 = a2 || f2.appendChild(t2.createElement("div")), s2 = (de.exec(o2) || ["", ""])[1].toLowerCase(), u2 = he[s2] || he._default, a2.innerHTML = u2[1] + E.htmlPrefilter(o2) + u2[2], c2 = u2[0];
          while (c2--)
            a2 = a2.lastChild;
          E.merge(d2, a2.childNodes), (a2 = f2.firstChild).textContent = "";
        } else
          d2.push(t2.createTextNode(o2));
    f2.textContent = "", p2 = 0;
    while (o2 = d2[p2++])
      if (r2 && -1 < E.inArray(o2, r2))
        i2 && i2.push(o2);
      else if (l2 = ie(o2), a2 = ge(f2.appendChild(o2), "script"), l2 && ve(a2), n2) {
        c2 = 0;
        while (o2 = a2[c2++])
          pe.test(o2.type || "") && n2.push(o2);
      }
    return f2;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function xe() {
    return true;
  }
  function we() {
    return false;
  }
  function Ce(e2, t2) {
    return e2 === function() {
      try {
        return w.activeElement;
      } catch (e3) {
      }
    }() == ("focus" === t2);
  }
  function Te(e2, t2, n2, r2, i2, o2) {
    var a2, s2;
    if ("object" == typeof t2) {
      for (s2 in "string" != typeof n2 && (r2 = r2 || n2, n2 = void 0), t2)
        Te(e2, s2, n2, r2, t2[s2], o2);
      return e2;
    }
    if (null == r2 && null == i2 ? (i2 = n2, r2 = n2 = void 0) : null == i2 && ("string" == typeof n2 ? (i2 = r2, r2 = void 0) : (i2 = r2, r2 = n2, n2 = void 0)), false === i2)
      i2 = we;
    else if (!i2)
      return e2;
    return 1 === o2 && (a2 = i2, (i2 = function(e3) {
      return E().off(e3), a2.apply(this, arguments);
    }).guid = a2.guid || (a2.guid = E.guid++)), e2.each(function() {
      E.event.add(this, t2, i2, r2, n2);
    });
  }
  function Ee(e2, i2, o2) {
    o2 ? (Y.set(e2, i2, false), E.event.add(e2, i2, { namespace: false, handler: function(e3) {
      var t2, n2, r2 = Y.get(this, i2);
      if (1 & e3.isTrigger && this[i2]) {
        if (r2.length)
          (E.event.special[i2] || {}).delegateType && e3.stopPropagation();
        else if (r2 = s.call(arguments), Y.set(this, i2, r2), t2 = o2(this, i2), this[i2](), r2 !== (n2 = Y.get(this, i2)) || t2 ? Y.set(this, i2, false) : n2 = {}, r2 !== n2)
          return e3.stopImmediatePropagation(), e3.preventDefault(), n2 && n2.value;
      } else
        r2.length && (Y.set(this, i2, { value: E.event.trigger(E.extend(r2[0], E.Event.prototype), r2.slice(1), this) }), e3.stopImmediatePropagation());
    } })) : void 0 === Y.get(e2, i2) && E.event.add(e2, i2, xe);
  }
  E.event = { global: {}, add: function(t2, e2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, d2, p2, h2, g2, v2 = Y.get(t2);
    if (X(t2)) {
      n2.handler && (n2 = (o2 = n2).handler, i2 = o2.selector), i2 && E.find.matchesSelector(re, i2), n2.guid || (n2.guid = E.guid++), (u2 = v2.events) || (u2 = v2.events = /* @__PURE__ */ Object.create(null)), (a2 = v2.handle) || (a2 = v2.handle = function(e3) {
        return "undefined" != typeof E && E.event.triggered !== e3.type ? E.event.dispatch.apply(t2, arguments) : void 0;
      }), l2 = (e2 = (e2 || "").match(H) || [""]).length;
      while (l2--)
        p2 = g2 = (s2 = be.exec(e2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), p2 && (f2 = E.event.special[p2] || {}, p2 = (i2 ? f2.delegateType : f2.bindType) || p2, f2 = E.event.special[p2] || {}, c2 = E.extend({ type: p2, origType: g2, data: r2, handler: n2, guid: n2.guid, selector: i2, needsContext: i2 && E.expr.match.needsContext.test(i2), namespace: h2.join(".") }, o2), (d2 = u2[p2]) || ((d2 = u2[p2] = []).delegateCount = 0, f2.setup && false !== f2.setup.call(t2, r2, h2, a2) || t2.addEventListener && t2.addEventListener(p2, a2)), f2.add && (f2.add.call(t2, c2), c2.handler.guid || (c2.handler.guid = n2.guid)), i2 ? d2.splice(d2.delegateCount++, 0, c2) : d2.push(c2), E.event.global[p2] = true);
    }
  }, remove: function(e2, t2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, d2, p2, h2, g2, v2 = Y.hasData(e2) && Y.get(e2);
    if (v2 && (u2 = v2.events)) {
      l2 = (t2 = (t2 || "").match(H) || [""]).length;
      while (l2--)
        if (p2 = g2 = (s2 = be.exec(t2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), p2) {
          f2 = E.event.special[p2] || {}, d2 = u2[p2 = (r2 ? f2.delegateType : f2.bindType) || p2] || [], s2 = s2[2] && new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)"), a2 = o2 = d2.length;
          while (o2--)
            c2 = d2[o2], !i2 && g2 !== c2.origType || n2 && n2.guid !== c2.guid || s2 && !s2.test(c2.namespace) || r2 && r2 !== c2.selector && ("**" !== r2 || !c2.selector) || (d2.splice(o2, 1), c2.selector && d2.delegateCount--, f2.remove && f2.remove.call(e2, c2));
          a2 && !d2.length && (f2.teardown && false !== f2.teardown.call(e2, h2, v2.handle) || E.removeEvent(e2, p2, v2.handle), delete u2[p2]);
        } else
          for (p2 in u2)
            E.event.remove(e2, p2 + t2[l2], n2, r2, true);
      E.isEmptyObject(u2) && Y.remove(e2, "handle events");
    }
  }, dispatch: function(e2) {
    var t2, n2, r2, i2, o2, a2, s2 = new Array(arguments.length), u2 = E.event.fix(e2), l2 = (Y.get(this, "events") || /* @__PURE__ */ Object.create(null))[u2.type] || [], c2 = E.event.special[u2.type] || {};
    for (s2[0] = u2, t2 = 1; t2 < arguments.length; t2++)
      s2[t2] = arguments[t2];
    if (u2.delegateTarget = this, !c2.preDispatch || false !== c2.preDispatch.call(this, u2)) {
      a2 = E.event.handlers.call(this, u2, l2), t2 = 0;
      while ((i2 = a2[t2++]) && !u2.isPropagationStopped()) {
        u2.currentTarget = i2.elem, n2 = 0;
        while ((o2 = i2.handlers[n2++]) && !u2.isImmediatePropagationStopped())
          u2.rnamespace && false !== o2.namespace && !u2.rnamespace.test(o2.namespace) || (u2.handleObj = o2, u2.data = o2.data, void 0 !== (r2 = ((E.event.special[o2.origType] || {}).handle || o2.handler).apply(i2.elem, s2)) && false === (u2.result = r2) && (u2.preventDefault(), u2.stopPropagation()));
      }
      return c2.postDispatch && c2.postDispatch.call(this, u2), u2.result;
    }
  }, handlers: function(e2, t2) {
    var n2, r2, i2, o2, a2, s2 = [], u2 = t2.delegateCount, l2 = e2.target;
    if (u2 && l2.nodeType && !("click" === e2.type && 1 <= e2.button)) {
      for (; l2 !== this; l2 = l2.parentNode || this)
        if (1 === l2.nodeType && ("click" !== e2.type || true !== l2.disabled)) {
          for (o2 = [], a2 = {}, n2 = 0; n2 < u2; n2++)
            void 0 === a2[i2 = (r2 = t2[n2]).selector + " "] && (a2[i2] = r2.needsContext ? -1 < E(i2, this).index(l2) : E.find(i2, this, null, [l2]).length), a2[i2] && o2.push(r2);
          o2.length && s2.push({ elem: l2, handlers: o2 });
        }
    }
    return l2 = this, u2 < t2.length && s2.push({ elem: l2, handlers: t2.slice(u2) }), s2;
  }, addProp: function(t2, e2) {
    Object.defineProperty(E.Event.prototype, t2, { enumerable: true, configurable: true, get: b(e2) ? function() {
      if (this.originalEvent)
        return e2(this.originalEvent);
    } : function() {
      if (this.originalEvent)
        return this.originalEvent[t2];
    }, set: function(e3) {
      Object.defineProperty(this, t2, { enumerable: true, configurable: true, writable: true, value: e3 });
    } });
  }, fix: function(e2) {
    return e2[E.expando] ? e2 : new E.Event(e2);
  }, special: { load: { noBubble: true }, click: { setup: function(e2) {
    var t2 = this || e2;
    return fe.test(t2.type) && t2.click && N(t2, "input") && Ee(t2, "click", xe), false;
  }, trigger: function(e2) {
    var t2 = this || e2;
    return fe.test(t2.type) && t2.click && N(t2, "input") && Ee(t2, "click"), true;
  }, _default: function(e2) {
    var t2 = e2.target;
    return fe.test(t2.type) && t2.click && N(t2, "input") && Y.get(t2, "click") || N(t2, "a");
  } }, beforeunload: { postDispatch: function(e2) {
    void 0 !== e2.result && e2.originalEvent && (e2.originalEvent.returnValue = e2.result);
  } } } }, E.removeEvent = function(e2, t2, n2) {
    e2.removeEventListener && e2.removeEventListener(t2, n2);
  }, E.Event = function(e2, t2) {
    if (!(this instanceof E.Event))
      return new E.Event(e2, t2);
    e2 && e2.type ? (this.originalEvent = e2, this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented || void 0 === e2.defaultPrevented && false === e2.returnValue ? xe : we, this.target = e2.target && 3 === e2.target.nodeType ? e2.target.parentNode : e2.target, this.currentTarget = e2.currentTarget, this.relatedTarget = e2.relatedTarget) : this.type = e2, t2 && E.extend(this, t2), this.timeStamp = e2 && e2.timeStamp || Date.now(), this[E.expando] = true;
  }, E.Event.prototype = { constructor: E.Event, isDefaultPrevented: we, isPropagationStopped: we, isImmediatePropagationStopped: we, isSimulated: false, preventDefault: function() {
    var e2 = this.originalEvent;
    this.isDefaultPrevented = xe, e2 && !this.isSimulated && e2.preventDefault();
  }, stopPropagation: function() {
    var e2 = this.originalEvent;
    this.isPropagationStopped = xe, e2 && !this.isSimulated && e2.stopPropagation();
  }, stopImmediatePropagation: function() {
    var e2 = this.originalEvent;
    this.isImmediatePropagationStopped = xe, e2 && !this.isSimulated && e2.stopImmediatePropagation(), this.stopPropagation();
  } }, E.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: true }, E.event.addProp), E.each({ focus: "focusin", blur: "focusout" }, function(t2, e2) {
    E.event.special[t2] = { setup: function() {
      return Ee(this, t2, Ce), false;
    }, trigger: function() {
      return Ee(this, t2), true;
    }, _default: function(e3) {
      return Y.get(e3.target, t2);
    }, delegateType: e2 };
  }), E.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e2, i2) {
    E.event.special[e2] = { delegateType: i2, bindType: i2, handle: function(e3) {
      var t2, n2 = e3.relatedTarget, r2 = e3.handleObj;
      return n2 && (n2 === this || E.contains(this, n2)) || (e3.type = r2.origType, t2 = r2.handler.apply(this, arguments), e3.type = i2), t2;
    } };
  }), E.fn.extend({ on: function(e2, t2, n2, r2) {
    return Te(this, e2, t2, n2, r2);
  }, one: function(e2, t2, n2, r2) {
    return Te(this, e2, t2, n2, r2, 1);
  }, off: function(e2, t2, n2) {
    var r2, i2;
    if (e2 && e2.preventDefault && e2.handleObj)
      return r2 = e2.handleObj, E(e2.delegateTarget).off(r2.namespace ? r2.origType + "." + r2.namespace : r2.origType, r2.selector, r2.handler), this;
    if ("object" == typeof e2) {
      for (i2 in e2)
        this.off(i2, t2, e2[i2]);
      return this;
    }
    return false !== t2 && "function" != typeof t2 || (n2 = t2, t2 = void 0), false === n2 && (n2 = we), this.each(function() {
      E.event.remove(this, e2, n2, t2);
    });
  } });
  var Se = /<script|<style|<link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i, Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function ke(e2, t2) {
    return N(e2, "table") && N(11 !== t2.nodeType ? t2 : t2.firstChild, "tr") && E(e2).children("tbody")[0] || e2;
  }
  function De(e2) {
    return e2.type = (null !== e2.getAttribute("type")) + "/" + e2.type, e2;
  }
  function Le(e2) {
    return "true/" === (e2.type || "").slice(0, 5) ? e2.type = e2.type.slice(5) : e2.removeAttribute("type"), e2;
  }
  function je(e2, t2) {
    var n2, r2, i2, o2, a2, s2;
    if (1 === t2.nodeType) {
      if (Y.hasData(e2) && (s2 = Y.get(e2).events))
        for (i2 in Y.remove(t2, "handle events"), s2)
          for (n2 = 0, r2 = s2[i2].length; n2 < r2; n2++)
            E.event.add(t2, i2, s2[i2][n2]);
      G.hasData(e2) && (o2 = G.access(e2), a2 = E.extend({}, o2), G.set(t2, a2));
    }
  }
  function qe(n2, r2, i2, o2) {
    r2 = v(r2);
    var e2, t2, a2, s2, u2, l2, c2 = 0, f2 = n2.length, d2 = f2 - 1, p2 = r2[0], h2 = b(p2);
    if (h2 || 1 < f2 && "string" == typeof p2 && !m.checkClone && Ae.test(p2))
      return n2.each(function(e3) {
        var t3 = n2.eq(e3);
        h2 && (r2[0] = p2.call(this, e3, t3.html())), qe(t3, r2, i2, o2);
      });
    if (f2 && (t2 = (e2 = me(r2, n2[0].ownerDocument, false, n2, o2)).firstChild, 1 === e2.childNodes.length && (e2 = t2), t2 || o2)) {
      for (s2 = (a2 = E.map(ge(e2, "script"), De)).length; c2 < f2; c2++)
        u2 = e2, c2 !== d2 && (u2 = E.clone(u2, true, true), s2 && E.merge(a2, ge(u2, "script"))), i2.call(n2[c2], u2, c2);
      if (s2)
        for (l2 = a2[a2.length - 1].ownerDocument, E.map(a2, Le), c2 = 0; c2 < s2; c2++)
          u2 = a2[c2], pe.test(u2.type || "") && !Y.access(u2, "globalEval") && E.contains(l2, u2) && (u2.src && "module" !== (u2.type || "").toLowerCase() ? E._evalUrl && !u2.noModule && E._evalUrl(u2.src, { nonce: u2.nonce || u2.getAttribute("nonce") }, l2) : C(u2.textContent.replace(Ne, ""), u2, l2));
    }
    return n2;
  }
  function Oe(e2, t2, n2) {
    for (var r2, i2 = t2 ? E.filter(t2, e2) : e2, o2 = 0; null != (r2 = i2[o2]); o2++)
      n2 || 1 !== r2.nodeType || E.cleanData(ge(r2)), r2.parentNode && (n2 && ie(r2) && ve(ge(r2, "script")), r2.parentNode.removeChild(r2));
    return e2;
  }
  E.extend({ htmlPrefilter: function(e2) {
    return e2;
  }, clone: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2, c2 = e2.cloneNode(true), f2 = ie(e2);
    if (!(m.noCloneChecked || 1 !== e2.nodeType && 11 !== e2.nodeType || E.isXMLDoc(e2)))
      for (a2 = ge(c2), r2 = 0, i2 = (o2 = ge(e2)).length; r2 < i2; r2++)
        s2 = o2[r2], u2 = a2[r2], "input" === (l2 = u2.nodeName.toLowerCase()) && fe.test(s2.type) ? u2.checked = s2.checked : "input" !== l2 && "textarea" !== l2 || (u2.defaultValue = s2.defaultValue);
    if (t2)
      if (n2)
        for (o2 = o2 || ge(e2), a2 = a2 || ge(c2), r2 = 0, i2 = o2.length; r2 < i2; r2++)
          je(o2[r2], a2[r2]);
      else
        je(e2, c2);
    return 0 < (a2 = ge(c2, "script")).length && ve(a2, !f2 && ge(e2, "script")), c2;
  }, cleanData: function(e2) {
    for (var t2, n2, r2, i2 = E.event.special, o2 = 0; void 0 !== (n2 = e2[o2]); o2++)
      if (X(n2)) {
        if (t2 = n2[Y.expando]) {
          if (t2.events)
            for (r2 in t2.events)
              i2[r2] ? E.event.remove(n2, r2) : E.removeEvent(n2, r2, t2.handle);
          n2[Y.expando] = void 0;
        }
        n2[G.expando] && (n2[G.expando] = void 0);
      }
  } }), E.fn.extend({ detach: function(e2) {
    return Oe(this, e2, true);
  }, remove: function(e2) {
    return Oe(this, e2);
  }, text: function(e2) {
    return $(this, function(e3) {
      return void 0 === e3 ? E.text(this) : this.empty().each(function() {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e3);
      });
    }, null, e2, arguments.length);
  }, append: function() {
    return qe(this, arguments, function(e2) {
      1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e2).appendChild(e2);
    });
  }, prepend: function() {
    return qe(this, arguments, function(e2) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var t2 = ke(this, e2);
        t2.insertBefore(e2, t2.firstChild);
      }
    });
  }, before: function() {
    return qe(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this);
    });
  }, after: function() {
    return qe(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this.nextSibling);
    });
  }, empty: function() {
    for (var e2, t2 = 0; null != (e2 = this[t2]); t2++)
      1 === e2.nodeType && (E.cleanData(ge(e2, false)), e2.textContent = "");
    return this;
  }, clone: function(e2, t2) {
    return e2 = null != e2 && e2, t2 = null == t2 ? e2 : t2, this.map(function() {
      return E.clone(this, e2, t2);
    });
  }, html: function(e2) {
    return $(this, function(e3) {
      var t2 = this[0] || {}, n2 = 0, r2 = this.length;
      if (void 0 === e3 && 1 === t2.nodeType)
        return t2.innerHTML;
      if ("string" == typeof e3 && !Se.test(e3) && !he[(de.exec(e3) || ["", ""])[1].toLowerCase()]) {
        e3 = E.htmlPrefilter(e3);
        try {
          for (; n2 < r2; n2++)
            1 === (t2 = this[n2] || {}).nodeType && (E.cleanData(ge(t2, false)), t2.innerHTML = e3);
          t2 = 0;
        } catch (e4) {
        }
      }
      t2 && this.empty().append(e3);
    }, null, e2, arguments.length);
  }, replaceWith: function() {
    var n2 = [];
    return qe(this, arguments, function(e2) {
      var t2 = this.parentNode;
      E.inArray(this, n2) < 0 && (E.cleanData(ge(this)), t2 && t2.replaceChild(e2, this));
    }, n2);
  } }), E.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e2, a2) {
    E.fn[e2] = function(e3) {
      for (var t2, n2 = [], r2 = E(e3), i2 = r2.length - 1, o2 = 0; o2 <= i2; o2++)
        t2 = o2 === i2 ? this : this.clone(true), E(r2[o2])[a2](t2), u.apply(n2, t2.get());
      return this.pushStack(n2);
    };
  });
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), He = /^--/, Ie = function(e2) {
    var t2 = e2.ownerDocument.defaultView;
    return t2 && t2.opener || (t2 = g), t2.getComputedStyle(e2);
  }, Re = function(e2, t2, n2) {
    var r2, i2, o2 = {};
    for (i2 in t2)
      o2[i2] = e2.style[i2], e2.style[i2] = t2[i2];
    for (i2 in r2 = n2.call(e2), t2)
      e2.style[i2] = o2[i2];
    return r2;
  }, Be = new RegExp(ne.join("|"), "i"), Me = "[\\x20\\t\\r\\n\\f]", We = new RegExp("^" + Me + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Me + "+$", "g");
  function Fe(e2, t2, n2) {
    var r2, i2, o2, a2, s2 = He.test(t2), u2 = e2.style;
    return (n2 = n2 || Ie(e2)) && (a2 = n2.getPropertyValue(t2) || n2[t2], s2 && a2 && (a2 = a2.replace(We, "$1") || void 0), "" !== a2 || ie(e2) || (a2 = E.style(e2, t2)), !m.pixelBoxStyles() && Pe.test(a2) && Be.test(t2) && (r2 = u2.width, i2 = u2.minWidth, o2 = u2.maxWidth, u2.minWidth = u2.maxWidth = u2.width = a2, a2 = n2.width, u2.width = r2, u2.minWidth = i2, u2.maxWidth = o2)), void 0 !== a2 ? a2 + "" : a2;
  }
  function $e(e2, t2) {
    return { get: function() {
      if (!e2())
        return (this.get = t2).apply(this, arguments);
      delete this.get;
    } };
  }
  !function() {
    function e2() {
      if (l2) {
        u2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u2).appendChild(l2);
        var e3 = g.getComputedStyle(l2);
        n2 = "1%" !== e3.top, s2 = 12 === t2(e3.marginLeft), l2.style.right = "60%", o2 = 36 === t2(e3.right), r2 = 36 === t2(e3.width), l2.style.position = "absolute", i2 = 12 === t2(l2.offsetWidth / 3), re.removeChild(u2), l2 = null;
      }
    }
    function t2(e3) {
      return Math.round(parseFloat(e3));
    }
    var n2, r2, i2, o2, a2, s2, u2 = w.createElement("div"), l2 = w.createElement("div");
    l2.style && (l2.style.backgroundClip = "content-box", l2.cloneNode(true).style.backgroundClip = "", m.clearCloneStyle = "content-box" === l2.style.backgroundClip, E.extend(m, { boxSizingReliable: function() {
      return e2(), r2;
    }, pixelBoxStyles: function() {
      return e2(), o2;
    }, pixelPosition: function() {
      return e2(), n2;
    }, reliableMarginLeft: function() {
      return e2(), s2;
    }, scrollboxSize: function() {
      return e2(), i2;
    }, reliableTrDimensions: function() {
      var e3, t3, n3, r3;
      return null == a2 && (e3 = w.createElement("table"), t3 = w.createElement("tr"), n3 = w.createElement("div"), e3.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t3.style.cssText = "border:1px solid", t3.style.height = "1px", n3.style.height = "9px", n3.style.display = "block", re.appendChild(e3).appendChild(t3).appendChild(n3), r3 = g.getComputedStyle(t3), a2 = parseInt(r3.height, 10) + parseInt(r3.borderTopWidth, 10) + parseInt(r3.borderBottomWidth, 10) === t3.offsetHeight, re.removeChild(e3)), a2;
    } }));
  }();
  var ze = ["Webkit", "Moz", "ms"], _e = w.createElement("div").style, Ue = {};
  function Ve(e2) {
    var t2 = E.cssProps[e2] || Ue[e2];
    return t2 || (e2 in _e ? e2 : Ue[e2] = function(e3) {
      var t3 = e3[0].toUpperCase() + e3.slice(1), n2 = ze.length;
      while (n2--)
        if ((e3 = ze[n2] + t3) in _e)
          return e3;
    }(e2) || e2);
  }
  var Xe, Qe, Ye = /^(none|table(?!-c[ea]).+)/, Ge = { position: "absolute", visibility: "hidden", display: "block" }, Ke = { letterSpacing: "0", fontWeight: "400" };
  function Je(e2, t2, n2) {
    var r2 = te.exec(t2);
    return r2 ? Math.max(0, r2[2] - (n2 || 0)) + (r2[3] || "px") : t2;
  }
  function Ze(e2, t2, n2, r2, i2, o2) {
    var a2 = "width" === t2 ? 1 : 0, s2 = 0, u2 = 0;
    if (n2 === (r2 ? "border" : "content"))
      return 0;
    for (; a2 < 4; a2 += 2)
      "margin" === n2 && (u2 += E.css(e2, n2 + ne[a2], true, i2)), r2 ? ("content" === n2 && (u2 -= E.css(e2, "padding" + ne[a2], true, i2)), "margin" !== n2 && (u2 -= E.css(e2, "border" + ne[a2] + "Width", true, i2))) : (u2 += E.css(e2, "padding" + ne[a2], true, i2), "padding" !== n2 ? u2 += E.css(e2, "border" + ne[a2] + "Width", true, i2) : s2 += E.css(e2, "border" + ne[a2] + "Width", true, i2));
    return !r2 && 0 <= o2 && (u2 += Math.max(0, Math.ceil(e2["offset" + t2[0].toUpperCase() + t2.slice(1)] - o2 - u2 - s2 - 0.5)) || 0), u2;
  }
  function et(e2, t2, n2) {
    var r2 = Ie(e2), i2 = (!m.boxSizingReliable() || n2) && "border-box" === E.css(e2, "boxSizing", false, r2), o2 = i2, a2 = Fe(e2, t2, r2), s2 = "offset" + t2[0].toUpperCase() + t2.slice(1);
    if (Pe.test(a2)) {
      if (!n2)
        return a2;
      a2 = "auto";
    }
    return (!m.boxSizingReliable() && i2 || !m.reliableTrDimensions() && N(e2, "tr") || "auto" === a2 || !parseFloat(a2) && "inline" === E.css(e2, "display", false, r2)) && e2.getClientRects().length && (i2 = "border-box" === E.css(e2, "boxSizing", false, r2), (o2 = s2 in e2) && (a2 = e2[s2])), (a2 = parseFloat(a2) || 0) + Ze(e2, t2, n2 || (i2 ? "border" : "content"), o2, r2, a2) + "px";
  }
  E.extend({ cssHooks: { opacity: { get: function(e2, t2) {
    if (t2) {
      var n2 = Fe(e2, "opacity");
      return "" === n2 ? "1" : n2;
    }
  } } }, cssNumber: { animationIterationCount: true, columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true }, cssProps: {}, style: function(e2, t2, n2, r2) {
    if (e2 && 3 !== e2.nodeType && 8 !== e2.nodeType && e2.style) {
      var i2, o2, a2, s2 = V(t2), u2 = He.test(t2), l2 = e2.style;
      if (u2 || (t2 = Ve(s2)), a2 = E.cssHooks[t2] || E.cssHooks[s2], void 0 === n2)
        return a2 && "get" in a2 && void 0 !== (i2 = a2.get(e2, false, r2)) ? i2 : l2[t2];
      "string" === (o2 = typeof n2) && (i2 = te.exec(n2)) && i2[1] && (n2 = function(e3, t3, n3, r3) {
        var i3, o3, a3 = 20, s3 = r3 ? function() {
          return r3.cur();
        } : function() {
          return E.css(e3, t3, "");
        }, u3 = s3(), l3 = n3 && n3[3] || (E.cssNumber[t3] ? "" : "px"), c2 = e3.nodeType && (E.cssNumber[t3] || "px" !== l3 && +u3) && te.exec(E.css(e3, t3));
        if (c2 && c2[3] !== l3) {
          u3 /= 2, l3 = l3 || c2[3], c2 = +u3 || 1;
          while (a3--)
            E.style(e3, t3, c2 + l3), (1 - o3) * (1 - (o3 = s3() / u3 || 0.5)) <= 0 && (a3 = 0), c2 /= o3;
          c2 *= 2, E.style(e3, t3, c2 + l3), n3 = n3 || [];
        }
        return n3 && (c2 = +c2 || +u3 || 0, i3 = n3[1] ? c2 + (n3[1] + 1) * n3[2] : +n3[2], r3 && (r3.unit = l3, r3.start = c2, r3.end = i3)), i3;
      }(e2, t2, i2), o2 = "number"), null != n2 && n2 == n2 && ("number" !== o2 || u2 || (n2 += i2 && i2[3] || (E.cssNumber[s2] ? "" : "px")), m.clearCloneStyle || "" !== n2 || 0 !== t2.indexOf("background") || (l2[t2] = "inherit"), a2 && "set" in a2 && void 0 === (n2 = a2.set(e2, n2, r2)) || (u2 ? l2.setProperty(t2, n2) : l2[t2] = n2));
    }
  }, css: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2 = V(t2);
    return He.test(t2) || (t2 = Ve(s2)), (a2 = E.cssHooks[t2] || E.cssHooks[s2]) && "get" in a2 && (i2 = a2.get(e2, true, n2)), void 0 === i2 && (i2 = Fe(e2, t2, r2)), "normal" === i2 && t2 in Ke && (i2 = Ke[t2]), "" === n2 || n2 ? (o2 = parseFloat(i2), true === n2 || isFinite(o2) ? o2 || 0 : i2) : i2;
  } }), E.each(["height", "width"], function(e2, u2) {
    E.cssHooks[u2] = { get: function(e3, t2, n2) {
      if (t2)
        return !Ye.test(E.css(e3, "display")) || e3.getClientRects().length && e3.getBoundingClientRect().width ? et(e3, u2, n2) : Re(e3, Ge, function() {
          return et(e3, u2, n2);
        });
    }, set: function(e3, t2, n2) {
      var r2, i2 = Ie(e3), o2 = !m.scrollboxSize() && "absolute" === i2.position, a2 = (o2 || n2) && "border-box" === E.css(e3, "boxSizing", false, i2), s2 = n2 ? Ze(e3, u2, n2, a2, i2) : 0;
      return a2 && o2 && (s2 -= Math.ceil(e3["offset" + u2[0].toUpperCase() + u2.slice(1)] - parseFloat(i2[u2]) - Ze(e3, u2, "border", false, i2) - 0.5)), s2 && (r2 = te.exec(t2)) && "px" !== (r2[3] || "px") && (e3.style[u2] = t2, t2 = E.css(e3, u2)), Je(0, t2, s2);
    } };
  }), E.cssHooks.marginLeft = $e(m.reliableMarginLeft, function(e2, t2) {
    if (t2)
      return (parseFloat(Fe(e2, "marginLeft")) || e2.getBoundingClientRect().left - Re(e2, { marginLeft: 0 }, function() {
        return e2.getBoundingClientRect().left;
      })) + "px";
  }), E.each({ margin: "", padding: "", border: "Width" }, function(i2, o2) {
    E.cssHooks[i2 + o2] = { expand: function(e2) {
      for (var t2 = 0, n2 = {}, r2 = "string" == typeof e2 ? e2.split(" ") : [e2]; t2 < 4; t2++)
        n2[i2 + ne[t2] + o2] = r2[t2] || r2[t2 - 2] || r2[0];
      return n2;
    } }, "margin" !== i2 && (E.cssHooks[i2 + o2].set = Je);
  }), E.fn.extend({ css: function(e2, t2) {
    return $(this, function(e3, t3, n2) {
      var r2, i2, o2 = {}, a2 = 0;
      if (Array.isArray(t3)) {
        for (r2 = Ie(e3), i2 = t3.length; a2 < i2; a2++)
          o2[t3[a2]] = E.css(e3, t3[a2], false, r2);
        return o2;
      }
      return void 0 !== n2 ? E.style(e3, t3, n2) : E.css(e3, t3);
    }, e2, t2, 1 < arguments.length);
  } }), E.fn.delay = function(r2, e2) {
    return r2 = E.fx && E.fx.speeds[r2] || r2, e2 = e2 || "fx", this.queue(e2, function(e3, t2) {
      var n2 = g.setTimeout(e3, r2);
      t2.stop = function() {
        g.clearTimeout(n2);
      };
    });
  }, Xe = w.createElement("input"), Qe = w.createElement("select").appendChild(w.createElement("option")), Xe.type = "checkbox", m.checkOn = "" !== Xe.value, m.optSelected = Qe.selected, (Xe = w.createElement("input")).value = "t", Xe.type = "radio", m.radioValue = "t" === Xe.value;
  var tt, nt = E.expr.attrHandle;
  E.fn.extend({ attr: function(e2, t2) {
    return $(this, E.attr, e2, t2, 1 < arguments.length);
  }, removeAttr: function(e2) {
    return this.each(function() {
      E.removeAttr(this, e2);
    });
  } }), E.extend({ attr: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2)
      return "undefined" == typeof e2.getAttribute ? E.prop(e2, t2, n2) : (1 === o2 && E.isXMLDoc(e2) || (i2 = E.attrHooks[t2.toLowerCase()] || (E.expr.match.bool.test(t2) ? tt : void 0)), void 0 !== n2 ? null === n2 ? void E.removeAttr(e2, t2) : i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : (e2.setAttribute(t2, n2 + ""), n2) : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : null == (r2 = E.find.attr(e2, t2)) ? void 0 : r2);
  }, attrHooks: { type: { set: function(e2, t2) {
    if (!m.radioValue && "radio" === t2 && N(e2, "input")) {
      var n2 = e2.value;
      return e2.setAttribute("type", t2), n2 && (e2.value = n2), t2;
    }
  } } }, removeAttr: function(e2, t2) {
    var n2, r2 = 0, i2 = t2 && t2.match(H);
    if (i2 && 1 === e2.nodeType)
      while (n2 = i2[r2++])
        e2.removeAttribute(n2);
  } }), tt = { set: function(e2, t2, n2) {
    return false === t2 ? E.removeAttr(e2, n2) : e2.setAttribute(n2, n2), n2;
  } }, E.each(E.expr.match.bool.source.match(/\w+/g), function(e2, t2) {
    var a2 = nt[t2] || E.find.attr;
    nt[t2] = function(e3, t3, n2) {
      var r2, i2, o2 = t3.toLowerCase();
      return n2 || (i2 = nt[o2], nt[o2] = r2, r2 = null != a2(e3, t3, n2) ? o2 : null, nt[o2] = i2), r2;
    };
  });
  var rt = /^(?:input|select|textarea|button)$/i, it = /^(?:a|area)$/i;
  function ot(e2) {
    return (e2.match(H) || []).join(" ");
  }
  function at(e2) {
    return e2.getAttribute && e2.getAttribute("class") || "";
  }
  function st(e2) {
    return Array.isArray(e2) ? e2 : "string" == typeof e2 && e2.match(H) || [];
  }
  E.fn.extend({ prop: function(e2, t2) {
    return $(this, E.prop, e2, t2, 1 < arguments.length);
  }, removeProp: function(e2) {
    return this.each(function() {
      delete this[E.propFix[e2] || e2];
    });
  } }), E.extend({ prop: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2)
      return 1 === o2 && E.isXMLDoc(e2) || (t2 = E.propFix[t2] || t2, i2 = E.propHooks[t2]), void 0 !== n2 ? i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : e2[t2] = n2 : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : e2[t2];
  }, propHooks: { tabIndex: { get: function(e2) {
    var t2 = E.find.attr(e2, "tabindex");
    return t2 ? parseInt(t2, 10) : rt.test(e2.nodeName) || it.test(e2.nodeName) && e2.href ? 0 : -1;
  } } }, propFix: { "for": "htmlFor", "class": "className" } }), m.optSelected || (E.propHooks.selected = { get: function(e2) {
    var t2 = e2.parentNode;
    return t2 && t2.parentNode && t2.parentNode.selectedIndex, null;
  }, set: function(e2) {
    var t2 = e2.parentNode;
    t2 && (t2.selectedIndex, t2.parentNode && t2.parentNode.selectedIndex);
  } }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    E.propFix[this.toLowerCase()] = this;
  }), E.fn.extend({ addClass: function(t2) {
    var e2, n2, r2, i2, o2, a2;
    return b(t2) ? this.each(function(e3) {
      E(this).addClass(t2.call(this, e3, at(this)));
    }) : (e2 = st(t2)).length ? this.each(function() {
      if (r2 = at(this), n2 = 1 === this.nodeType && " " + ot(r2) + " ") {
        for (o2 = 0; o2 < e2.length; o2++)
          i2 = e2[o2], n2.indexOf(" " + i2 + " ") < 0 && (n2 += i2 + " ");
        a2 = ot(n2), r2 !== a2 && this.setAttribute("class", a2);
      }
    }) : this;
  }, removeClass: function(t2) {
    var e2, n2, r2, i2, o2, a2;
    return b(t2) ? this.each(function(e3) {
      E(this).removeClass(t2.call(this, e3, at(this)));
    }) : arguments.length ? (e2 = st(t2)).length ? this.each(function() {
      if (r2 = at(this), n2 = 1 === this.nodeType && " " + ot(r2) + " ") {
        for (o2 = 0; o2 < e2.length; o2++) {
          i2 = e2[o2];
          while (-1 < n2.indexOf(" " + i2 + " "))
            n2 = n2.replace(" " + i2 + " ", " ");
        }
        a2 = ot(n2), r2 !== a2 && this.setAttribute("class", a2);
      }
    }) : this : this.attr("class", "");
  }, toggleClass: function(t2, n2) {
    var e2, r2, i2, o2, a2 = typeof t2, s2 = "string" === a2 || Array.isArray(t2);
    return b(t2) ? this.each(function(e3) {
      E(this).toggleClass(t2.call(this, e3, at(this), n2), n2);
    }) : "boolean" == typeof n2 && s2 ? n2 ? this.addClass(t2) : this.removeClass(t2) : (e2 = st(t2), this.each(function() {
      if (s2)
        for (o2 = E(this), i2 = 0; i2 < e2.length; i2++)
          r2 = e2[i2], o2.hasClass(r2) ? o2.removeClass(r2) : o2.addClass(r2);
      else
        void 0 !== t2 && "boolean" !== a2 || ((r2 = at(this)) && Y.set(this, "__className__", r2), this.setAttribute && this.setAttribute("class", r2 || false === t2 ? "" : Y.get(this, "__className__") || ""));
    }));
  }, hasClass: function(e2) {
    var t2, n2, r2 = 0;
    t2 = " " + e2 + " ";
    while (n2 = this[r2++])
      if (1 === n2.nodeType && -1 < (" " + ot(at(n2)) + " ").indexOf(t2))
        return true;
    return false;
  } });
  var ut = /\r/g;
  E.fn.extend({ val: function(n2) {
    var r2, e2, i2, t2 = this[0];
    return arguments.length ? (i2 = b(n2), this.each(function(e3) {
      var t3;
      1 === this.nodeType && (null == (t3 = i2 ? n2.call(this, e3, E(this).val()) : n2) ? t3 = "" : "number" == typeof t3 ? t3 += "" : Array.isArray(t3) && (t3 = E.map(t3, function(e4) {
        return null == e4 ? "" : e4 + "";
      })), (r2 = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r2 && void 0 !== r2.set(this, t3, "value") || (this.value = t3));
    })) : t2 ? (r2 = E.valHooks[t2.type] || E.valHooks[t2.nodeName.toLowerCase()]) && "get" in r2 && void 0 !== (e2 = r2.get(t2, "value")) ? e2 : "string" == typeof (e2 = t2.value) ? e2.replace(ut, "") : null == e2 ? "" : e2 : void 0;
  } }), E.extend({ valHooks: { option: { get: function(e2) {
    var t2 = E.find.attr(e2, "value");
    return null != t2 ? t2 : ot(E.text(e2));
  } }, select: { get: function(e2) {
    var t2, n2, r2, i2 = e2.options, o2 = e2.selectedIndex, a2 = "select-one" === e2.type, s2 = a2 ? null : [], u2 = a2 ? o2 + 1 : i2.length;
    for (r2 = o2 < 0 ? u2 : a2 ? o2 : 0; r2 < u2; r2++)
      if (((n2 = i2[r2]).selected || r2 === o2) && !n2.disabled && (!n2.parentNode.disabled || !N(n2.parentNode, "optgroup"))) {
        if (t2 = E(n2).val(), a2)
          return t2;
        s2.push(t2);
      }
    return s2;
  }, set: function(e2, t2) {
    var n2, r2, i2 = e2.options, o2 = E.makeArray(t2), a2 = i2.length;
    while (a2--)
      ((r2 = i2[a2]).selected = -1 < E.inArray(E.valHooks.option.get(r2), o2)) && (n2 = true);
    return n2 || (e2.selectedIndex = -1), o2;
  } } } }), E.each(["radio", "checkbox"], function() {
    E.valHooks[this] = { set: function(e2, t2) {
      if (Array.isArray(t2))
        return e2.checked = -1 < E.inArray(E(e2).val(), t2);
    } }, m.checkOn || (E.valHooks[this].get = function(e2) {
      return null === e2.getAttribute("value") ? "on" : e2.value;
    });
  }), m.focusin = "onfocusin" in g;
  var lt = /^(?:focusinfocus|focusoutblur)$/, ct = function(e2) {
    e2.stopPropagation();
  };
  E.extend(E.event, { trigger: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2, u2, l2, c2, f2, d2 = [n2 || w], p2 = y.call(e2, "type") ? e2.type : e2, h2 = y.call(e2, "namespace") ? e2.namespace.split(".") : [];
    if (o2 = f2 = a2 = n2 = n2 || w, 3 !== n2.nodeType && 8 !== n2.nodeType && !lt.test(p2 + E.event.triggered) && (-1 < p2.indexOf(".") && (p2 = (h2 = p2.split(".")).shift(), h2.sort()), u2 = p2.indexOf(":") < 0 && "on" + p2, (e2 = e2[E.expando] ? e2 : new E.Event(p2, "object" == typeof e2 && e2)).isTrigger = r2 ? 2 : 3, e2.namespace = h2.join("."), e2.rnamespace = e2.namespace ? new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e2.result = void 0, e2.target || (e2.target = n2), t2 = null == t2 ? [e2] : E.makeArray(t2, [e2]), c2 = E.event.special[p2] || {}, r2 || !c2.trigger || false !== c2.trigger.apply(n2, t2))) {
      if (!r2 && !c2.noBubble && !x(n2)) {
        for (s2 = c2.delegateType || p2, lt.test(s2 + p2) || (o2 = o2.parentNode); o2; o2 = o2.parentNode)
          d2.push(o2), a2 = o2;
        a2 === (n2.ownerDocument || w) && d2.push(a2.defaultView || a2.parentWindow || g);
      }
      i2 = 0;
      while ((o2 = d2[i2++]) && !e2.isPropagationStopped())
        f2 = o2, e2.type = 1 < i2 ? s2 : c2.bindType || p2, (l2 = (Y.get(o2, "events") || /* @__PURE__ */ Object.create(null))[e2.type] && Y.get(o2, "handle")) && l2.apply(o2, t2), (l2 = u2 && o2[u2]) && l2.apply && X(o2) && (e2.result = l2.apply(o2, t2), false === e2.result && e2.preventDefault());
      return e2.type = p2, r2 || e2.isDefaultPrevented() || c2._default && false !== c2._default.apply(d2.pop(), t2) || !X(n2) || u2 && b(n2[p2]) && !x(n2) && ((a2 = n2[u2]) && (n2[u2] = null), E.event.triggered = p2, e2.isPropagationStopped() && f2.addEventListener(p2, ct), n2[p2](), e2.isPropagationStopped() && f2.removeEventListener(p2, ct), E.event.triggered = void 0, a2 && (n2[u2] = a2)), e2.result;
    }
  }, simulate: function(e2, t2, n2) {
    var r2 = E.extend(new E.Event(), n2, { type: e2, isSimulated: true });
    E.event.trigger(r2, null, t2);
  } }), E.fn.extend({ trigger: function(e2, t2) {
    return this.each(function() {
      E.event.trigger(e2, t2, this);
    });
  }, triggerHandler: function(e2, t2) {
    var n2 = this[0];
    if (n2)
      return E.event.trigger(e2, t2, n2, true);
  } }), m.focusin || E.each({ focus: "focusin", blur: "focusout" }, function(n2, r2) {
    var i2 = function(e2) {
      E.event.simulate(r2, e2.target, E.event.fix(e2));
    };
    E.event.special[r2] = { setup: function() {
      var e2 = this.ownerDocument || this.document || this, t2 = Y.access(e2, r2);
      t2 || e2.addEventListener(n2, i2, true), Y.access(e2, r2, (t2 || 0) + 1);
    }, teardown: function() {
      var e2 = this.ownerDocument || this.document || this, t2 = Y.access(e2, r2) - 1;
      t2 ? Y.access(e2, r2, t2) : (e2.removeEventListener(n2, i2, true), Y.remove(e2, r2));
    } };
  }), E.parseXML = function(e2) {
    var t2, n2;
    if (!e2 || "string" != typeof e2)
      return null;
    try {
      t2 = new g.DOMParser().parseFromString(e2, "text/xml");
    } catch (e3) {
    }
    return n2 = t2 && t2.getElementsByTagName("parsererror")[0], t2 && !n2 || E.error("Invalid XML: " + (n2 ? E.map(n2.childNodes, function(e3) {
      return e3.textContent;
    }).join("\n") : e2)), t2;
  };
  var ft, dt = /\[\]$/, pt = /\r?\n/g, ht = /^(?:submit|button|image|reset|file)$/i, gt = /^(?:input|select|textarea|keygen)/i;
  function vt(n2, e2, r2, i2) {
    var t2;
    if (Array.isArray(e2))
      E.each(e2, function(e3, t3) {
        r2 || dt.test(n2) ? i2(n2, t3) : vt(n2 + "[" + ("object" == typeof t3 && null != t3 ? e3 : "") + "]", t3, r2, i2);
      });
    else if (r2 || "object" !== T(e2))
      i2(n2, e2);
    else
      for (t2 in e2)
        vt(n2 + "[" + t2 + "]", e2[t2], r2, i2);
  }
  E.param = function(e2, t2) {
    var n2, r2 = [], i2 = function(e3, t3) {
      var n3 = b(t3) ? t3() : t3;
      r2[r2.length] = encodeURIComponent(e3) + "=" + encodeURIComponent(null == n3 ? "" : n3);
    };
    if (null == e2)
      return "";
    if (Array.isArray(e2) || e2.jquery && !E.isPlainObject(e2))
      E.each(e2, function() {
        i2(this.name, this.value);
      });
    else
      for (n2 in e2)
        vt(n2, e2[n2], t2, i2);
    return r2.join("&");
  }, E.fn.extend({ serialize: function() {
    return E.param(this.serializeArray());
  }, serializeArray: function() {
    return this.map(function() {
      var e2 = E.prop(this, "elements");
      return e2 ? E.makeArray(e2) : this;
    }).filter(function() {
      var e2 = this.type;
      return this.name && !E(this).is(":disabled") && gt.test(this.nodeName) && !ht.test(e2) && (this.checked || !fe.test(e2));
    }).map(function(e2, t2) {
      var n2 = E(this).val();
      return null == n2 ? null : Array.isArray(n2) ? E.map(n2, function(e3) {
        return { name: t2.name, value: e3.replace(pt, "\r\n") };
      }) : { name: t2.name, value: n2.replace(pt, "\r\n") };
    }).get();
  } }), E.fn.extend({ wrapAll: function(e2) {
    var t2;
    return this[0] && (b(e2) && (e2 = e2.call(this[0])), t2 = E(e2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t2.insertBefore(this[0]), t2.map(function() {
      var e3 = this;
      while (e3.firstElementChild)
        e3 = e3.firstElementChild;
      return e3;
    }).append(this)), this;
  }, wrapInner: function(n2) {
    return b(n2) ? this.each(function(e2) {
      E(this).wrapInner(n2.call(this, e2));
    }) : this.each(function() {
      var e2 = E(this), t2 = e2.contents();
      t2.length ? t2.wrapAll(n2) : e2.append(n2);
    });
  }, wrap: function(t2) {
    var n2 = b(t2);
    return this.each(function(e2) {
      E(this).wrapAll(n2 ? t2.call(this, e2) : t2);
    });
  }, unwrap: function(e2) {
    return this.parent(e2).not("body").each(function() {
      E(this).replaceWith(this.childNodes);
    }), this;
  } }), E.expr.pseudos.hidden = function(e2) {
    return !E.expr.pseudos.visible(e2);
  }, E.expr.pseudos.visible = function(e2) {
    return !!(e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length);
  }, m.createHTMLDocument = ((ft = w.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === ft.childNodes.length), E.parseHTML = function(e2, t2, n2) {
    return "string" != typeof e2 ? [] : ("boolean" == typeof t2 && (n2 = t2, t2 = false), t2 || (m.createHTMLDocument ? ((r2 = (t2 = w.implementation.createHTMLDocument("")).createElement("base")).href = w.location.href, t2.head.appendChild(r2)) : t2 = w), o2 = !n2 && [], (i2 = k.exec(e2)) ? [t2.createElement(i2[1])] : (i2 = me([e2], t2, o2), o2 && o2.length && E(o2).remove(), E.merge([], i2.childNodes)));
    var r2, i2, o2;
  }, E.offset = { setOffset: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2 = E.css(e2, "position"), c2 = E(e2), f2 = {};
    "static" === l2 && (e2.style.position = "relative"), s2 = c2.offset(), o2 = E.css(e2, "top"), u2 = E.css(e2, "left"), ("absolute" === l2 || "fixed" === l2) && -1 < (o2 + u2).indexOf("auto") ? (a2 = (r2 = c2.position()).top, i2 = r2.left) : (a2 = parseFloat(o2) || 0, i2 = parseFloat(u2) || 0), b(t2) && (t2 = t2.call(e2, n2, E.extend({}, s2))), null != t2.top && (f2.top = t2.top - s2.top + a2), null != t2.left && (f2.left = t2.left - s2.left + i2), "using" in t2 ? t2.using.call(e2, f2) : c2.css(f2);
  } }, E.fn.extend({ offset: function(t2) {
    if (arguments.length)
      return void 0 === t2 ? this : this.each(function(e3) {
        E.offset.setOffset(this, t2, e3);
      });
    var e2, n2, r2 = this[0];
    return r2 ? r2.getClientRects().length ? (e2 = r2.getBoundingClientRect(), n2 = r2.ownerDocument.defaultView, { top: e2.top + n2.pageYOffset, left: e2.left + n2.pageXOffset }) : { top: 0, left: 0 } : void 0;
  }, position: function() {
    if (this[0]) {
      var e2, t2, n2, r2 = this[0], i2 = { top: 0, left: 0 };
      if ("fixed" === E.css(r2, "position"))
        t2 = r2.getBoundingClientRect();
      else {
        t2 = this.offset(), n2 = r2.ownerDocument, e2 = r2.offsetParent || n2.documentElement;
        while (e2 && (e2 === n2.body || e2 === n2.documentElement) && "static" === E.css(e2, "position"))
          e2 = e2.parentNode;
        e2 && e2 !== r2 && 1 === e2.nodeType && ((i2 = E(e2).offset()).top += E.css(e2, "borderTopWidth", true), i2.left += E.css(e2, "borderLeftWidth", true));
      }
      return { top: t2.top - i2.top - E.css(r2, "marginTop", true), left: t2.left - i2.left - E.css(r2, "marginLeft", true) };
    }
  }, offsetParent: function() {
    return this.map(function() {
      var e2 = this.offsetParent;
      while (e2 && "static" === E.css(e2, "position"))
        e2 = e2.offsetParent;
      return e2 || re;
    });
  } }), E.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t2, i2) {
    var o2 = "pageYOffset" === i2;
    E.fn[t2] = function(e2) {
      return $(this, function(e3, t3, n2) {
        var r2;
        if (x(e3) ? r2 = e3 : 9 === e3.nodeType && (r2 = e3.defaultView), void 0 === n2)
          return r2 ? r2[i2] : e3[t3];
        r2 ? r2.scrollTo(o2 ? r2.pageXOffset : n2, o2 ? n2 : r2.pageYOffset) : e3[t3] = n2;
      }, t2, e2, arguments.length);
    };
  }), E.each(["top", "left"], function(e2, n2) {
    E.cssHooks[n2] = $e(m.pixelPosition, function(e3, t2) {
      if (t2)
        return t2 = Fe(e3, n2), Pe.test(t2) ? E(e3).position()[n2] + "px" : t2;
    });
  }), E.each({ Height: "height", Width: "width" }, function(a2, s2) {
    E.each({ padding: "inner" + a2, content: s2, "": "outer" + a2 }, function(r2, o2) {
      E.fn[o2] = function(e2, t2) {
        var n2 = arguments.length && (r2 || "boolean" != typeof e2), i2 = r2 || (true === e2 || true === t2 ? "margin" : "border");
        return $(this, function(e3, t3, n3) {
          var r3;
          return x(e3) ? 0 === o2.indexOf("outer") ? e3["inner" + a2] : e3.document.documentElement["client" + a2] : 9 === e3.nodeType ? (r3 = e3.documentElement, Math.max(e3.body["scroll" + a2], r3["scroll" + a2], e3.body["offset" + a2], r3["offset" + a2], r3["client" + a2])) : void 0 === n3 ? E.css(e3, t3, i2) : E.style(e3, t3, n3, i2);
        }, s2, n2 ? e2 : void 0, n2);
      };
    });
  }), E.fn.extend({ bind: function(e2, t2, n2) {
    return this.on(e2, null, t2, n2);
  }, unbind: function(e2, t2) {
    return this.off(e2, null, t2);
  }, delegate: function(e2, t2, n2, r2) {
    return this.on(t2, e2, n2, r2);
  }, undelegate: function(e2, t2, n2) {
    return 1 === arguments.length ? this.off(e2, "**") : this.off(t2, e2 || "**", n2);
  }, hover: function(e2, t2) {
    return this.mouseenter(e2).mouseleave(t2 || e2);
  } }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e2, n2) {
    E.fn[n2] = function(e3, t2) {
      return 0 < arguments.length ? this.on(n2, null, e3, t2) : this.trigger(n2);
    };
  });
  var yt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  E.proxy = function(e2, t2) {
    var n2, r2, i2;
    if ("string" == typeof t2 && (n2 = e2[t2], t2 = e2, e2 = n2), b(e2))
      return r2 = s.call(arguments, 2), (i2 = function() {
        return e2.apply(t2 || this, r2.concat(s.call(arguments)));
      }).guid = e2.guid = e2.guid || E.guid++, i2;
  }, E.holdReady = function(e2) {
    e2 ? E.readyWait++ : E.ready(true);
  }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = N, E.isFunction = b, E.isWindow = x, E.camelCase = V, E.type = T, E.now = Date.now, E.isNumeric = function(e2) {
    var t2 = E.type(e2);
    return ("number" === t2 || "string" === t2) && !isNaN(e2 - parseFloat(e2));
  }, E.trim = function(e2) {
    return null == e2 ? "" : (e2 + "").replace(yt, "$1");
  }, "function" == typeof define && define.amd && define("jquery", [], function() {
    return E;
  });
  var mt = g.jQuery, bt = g.$;
  return E.noConflict = function(e2) {
    return g.$ === E && (g.$ = bt), e2 && g.jQuery === E && (g.jQuery = mt), E;
  }, "undefined" == typeof e && (g.jQuery = g.$ = E), E;
});
