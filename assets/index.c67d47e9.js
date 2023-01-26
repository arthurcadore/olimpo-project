(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) a(i);
  new MutationObserver((i) => {
    for (const r of i) if (r.type === "childList") for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && a(o);
  }).observe(document, {childList: !0, subtree: !0});
  function n(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerpolicy && (r.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function a(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = n(i);
    fetch(i.href, r);
  }
})();
function rd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ri = {exports: {}},
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ea = Symbol.for("react.element"),
  od = Symbol.for("react.portal"),
  sd = Symbol.for("react.fragment"),
  ld = Symbol.for("react.strict_mode"),
  ud = Symbol.for("react.profiler"),
  dd = Symbol.for("react.provider"),
  cd = Symbol.for("react.context"),
  pd = Symbol.for("react.forward_ref"),
  fd = Symbol.for("react.suspense"),
  md = Symbol.for("react.memo"),
  hd = Symbol.for("react.lazy"),
  Lo = Symbol.iterator;
function gd(e) {
  return e === null || typeof e != "object" ? null : ((e = (Lo && e[Lo]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Xs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  qs = Object.assign,
  Ys = {};
function dn(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Ys), (this.updater = n || Xs);
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
dn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zs() {}
Zs.prototype = dn.prototype;
function Kr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Ys), (this.updater = n || Xs);
}
var jr = (Kr.prototype = new Zs());
jr.constructor = Kr;
qs(jr, dn.prototype);
jr.isPureReactComponent = !0;
var Ho = Array.isArray,
  Js = Object.prototype.hasOwnProperty,
  Qr = {current: null},
  el = {key: !0, ref: !0, __self: !0, __source: !0};
function tl(e, t, n) {
  var a,
    i = {},
    r = null,
    o = null;
  if (t != null)
    for (a in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (r = "" + t.key), t))
      Js.call(t, a) && !el.hasOwnProperty(a) && (i[a] = t[a]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var u = Array(l), m = 0; m < l; m++) u[m] = arguments[m + 2];
    i.children = u;
  }
  if (e && e.defaultProps) for (a in ((l = e.defaultProps), l)) i[a] === void 0 && (i[a] = l[a]);
  return {$$typeof: ea, type: e, key: r, ref: o, props: i, _owner: Qr.current};
}
function _d(e, t) {
  return {$$typeof: ea, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner};
}
function $r(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ea;
}
function vd(e) {
  var t = {"=": "=0", ":": "=2"};
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Vo = /\/+/g;
function Mi(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? vd("" + e.key) : t.toString(36);
}
function ba(e, t, n, a, i) {
  var r = typeof e;
  (r === "undefined" || r === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (r) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ea:
          case od:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = a === "" ? "." + Mi(o, 0) : a),
      Ho(i)
        ? ((n = ""),
          e != null && (n = e.replace(Vo, "$&/") + "/"),
          ba(i, t, n, "", function (m) {
            return m;
          }))
        : i != null &&
          ($r(i) && (i = _d(i, n + (!i.key || (o && o.key === i.key) ? "" : ("" + i.key).replace(Vo, "$&/") + "/") + e)), t.push(i)),
      1
    );
  if (((o = 0), (a = a === "" ? "." : a + ":"), Ho(e)))
    for (var l = 0; l < e.length; l++) {
      r = e[l];
      var u = a + Mi(r, l);
      o += ba(r, t, n, u, i);
    }
  else if (((u = gd(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(r = e.next()).done; ) (r = r.value), (u = a + Mi(r, l++)), (o += ba(r, t, n, u, i));
  else if (r === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function oa(e, t, n) {
  if (e == null) return e;
  var a = [],
    i = 0;
  return (
    ba(e, a, "", "", function (r) {
      return t.call(n, r, i++);
    }),
    a
  );
}
function wd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = {current: null},
  ka = {transition: null},
  xd = {ReactCurrentDispatcher: ce, ReactCurrentBatchConfig: ka, ReactCurrentOwner: Qr};
B.Children = {
  map: oa,
  forEach: function (e, t, n) {
    oa(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      oa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      oa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!$r(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
B.Component = dn;
B.Fragment = sd;
B.Profiler = ud;
B.PureComponent = Kr;
B.StrictMode = ld;
B.Suspense = fd;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xd;
B.cloneElement = function (e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var a = qs({}, e.props),
    i = e.key,
    r = e.ref,
    o = e._owner;
  if (t != null) {
    if ((t.ref !== void 0 && ((r = t.ref), (o = Qr.current)), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps))
      var l = e.type.defaultProps;
    for (u in t) Js.call(t, u) && !el.hasOwnProperty(u) && (a[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) a.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var m = 0; m < u; m++) l[m] = arguments[m + 2];
    a.children = l;
  }
  return {$$typeof: ea, type: e.type, key: i, ref: r, props: a, _owner: o};
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: cd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = {$$typeof: dd, _context: e}),
    (e.Consumer = e)
  );
};
B.createElement = tl;
B.createFactory = function (e) {
  var t = tl.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return {current: null};
};
B.forwardRef = function (e) {
  return {$$typeof: pd, render: e};
};
B.isValidElement = $r;
B.lazy = function (e) {
  return {$$typeof: hd, _payload: {_status: -1, _result: e}, _init: wd};
};
B.memo = function (e, t) {
  return {$$typeof: md, type: e, compare: t === void 0 ? null : t};
};
B.startTransition = function (e) {
  var t = ka.transition;
  ka.transition = {};
  try {
    e();
  } finally {
    ka.transition = t;
  }
};
B.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
B.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
B.useContext = function (e) {
  return ce.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
B.useId = function () {
  return ce.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return ce.current.useRef(e);
};
B.useState = function (e) {
  return ce.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return ce.current.useTransition();
};
B.version = "18.2.0";
(function (e) {
  e.exports = B;
})(ri);
const ve = rd(ri.exports);
var Zi = {},
  nl = {exports: {}},
  be = {},
  al = {exports: {}},
  il = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, G) {
    var z = M.length;
    M.push(G);
    e: for (; 0 < z; ) {
      var I = (z - 1) >>> 1,
        X = M[I];
      if (0 < i(X, G)) (M[I] = G), (M[z] = X), (z = I);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function a(M) {
    if (M.length === 0) return null;
    var G = M[0],
      z = M.pop();
    if (z !== G) {
      M[0] = z;
      e: for (var I = 0, X = M.length, d = X >>> 1; I < d; ) {
        var St = 2 * (I + 1) - 1,
          Pi = M[St],
          yt = St + 1,
          ra = M[yt];
        if (0 > i(Pi, z)) yt < X && 0 > i(ra, Pi) ? ((M[I] = ra), (M[yt] = z), (I = yt)) : ((M[I] = Pi), (M[St] = z), (I = St));
        else if (yt < X && 0 > i(ra, z)) (M[I] = ra), (M[yt] = z), (I = yt);
        else break e;
      }
    }
    return G;
  }
  function i(M, G) {
    var z = M.sortIndex - G.sortIndex;
    return z !== 0 ? z : M.id - G.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var r = performance;
    e.unstable_now = function () {
      return r.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var u = [],
    m = [],
    v = 1,
    _ = null,
    g = 3,
    S = !1,
    b = !1,
    k = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(M) {
    for (var G = n(m); G !== null; ) {
      if (G.callback === null) a(m);
      else if (G.startTime <= M) a(m), (G.sortIndex = G.expirationTime), t(u, G);
      else break;
      G = n(m);
    }
  }
  function w(M) {
    if (((k = !1), h(M), !b))
      if (n(u) !== null) (b = !0), mn(P);
      else {
        var G = n(m);
        G !== null && hn(w, G.startTime - M);
      }
  }
  function P(M, G) {
    (b = !1), k && ((k = !1), f(C), (C = -1)), (S = !0);
    var z = g;
    try {
      for (h(G), _ = n(u); _ !== null && (!(_.expirationTime > G) || (M && !le())); ) {
        var I = _.callback;
        if (typeof I == "function") {
          (_.callback = null), (g = _.priorityLevel);
          var X = I(_.expirationTime <= G);
          (G = e.unstable_now()), typeof X == "function" ? (_.callback = X) : _ === n(u) && a(u), h(G);
        } else a(u);
        _ = n(u);
      }
      if (_ !== null) var d = !0;
      else {
        var St = n(m);
        St !== null && hn(w, St.startTime - G), (d = !1);
      }
      return d;
    } finally {
      (_ = null), (g = z), (S = !1);
    }
  }
  var A = !1,
    E = null,
    C = -1,
    V = 5,
    T = -1;
  function le() {
    return !(e.unstable_now() - T < V);
  }
  function xt() {
    if (E !== null) {
      var M = e.unstable_now();
      T = M;
      var G = !0;
      try {
        G = E(!0, M);
      } finally {
        G ? Ge() : ((A = !1), (E = null));
      }
    } else A = !1;
  }
  var Ge;
  if (typeof c == "function")
    Ge = function () {
      c(xt);
    };
  else if (typeof MessageChannel < "u") {
    var fn = new MessageChannel(),
      ki = fn.port2;
    (fn.port1.onmessage = xt),
      (Ge = function () {
        ki.postMessage(null);
      });
  } else
    Ge = function () {
      R(xt, 0);
    };
  function mn(M) {
    (E = M), A || ((A = !0), Ge());
  }
  function hn(M, G) {
    C = R(function () {
      M(e.unstable_now());
    }, G);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      b || S || ((b = !0), mn(P));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported")
        : (V = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (M) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var G = 3;
          break;
        default:
          G = g;
      }
      var z = g;
      g = G;
      try {
        return M();
      } finally {
        g = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, G) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var z = g;
      g = M;
      try {
        return G();
      } finally {
        g = z;
      }
    }),
    (e.unstable_scheduleCallback = function (M, G, z) {
      var I = e.unstable_now();
      switch ((typeof z == "object" && z !== null ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? I + z : I)) : (z = I), M)) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = z + X),
        (M = {id: v++, callback: G, priorityLevel: M, startTime: z, expirationTime: X, sortIndex: -1}),
        z > I
          ? ((M.sortIndex = z), t(m, M), n(u) === null && M === n(m) && (k ? (f(C), (C = -1)) : (k = !0), hn(w, z - I)))
          : ((M.sortIndex = X), t(u, M), b || S || ((b = !0), mn(P))),
        M
      );
    }),
    (e.unstable_shouldYield = le),
    (e.unstable_wrapCallback = function (M) {
      var G = g;
      return function () {
        var z = g;
        g = G;
        try {
          return M.apply(this, arguments);
        } finally {
          g = z;
        }
      };
    });
})(il);
(function (e) {
  e.exports = il;
})(al);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rl = ri.exports,
  ye = al.exports;
function x(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ol = new Set(),
  Rn = {};
function Wt(e, t) {
  nn(e, t), nn(e + "Capture", t);
}
function nn(e, t) {
  for (Rn[e] = t, e = 0; e < t.length; e++) ol.add(t[e]);
}
var Xe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Ji = Object.prototype.hasOwnProperty,
  Sd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Io = {},
  Uo = {};
function yd(e) {
  return Ji.call(Uo, e) ? !0 : Ji.call(Io, e) ? !1 : Sd.test(e) ? (Uo[e] = !0) : ((Io[e] = !0), !1);
}
function bd(e, t, n, a) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return a ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function kd(e, t, n, a) {
  if (t === null || typeof t > "u" || bd(e, t, n, a)) return !0;
  if (a) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, a, i, r, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = a),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = r),
    (this.removeEmptyString = o);
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ae[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ae[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  ae[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ae[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ae[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ae[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ae[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xr = /[\-:]([a-z])/g;
function qr(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Xr, qr);
    ae[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(Xr, qr);
  ae[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Xr, qr);
  ae[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ae[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  ae[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yr(e, t, n, a) {
  var i = ae.hasOwnProperty(t) ? ae[t] : null;
  (i !== null ? i.type !== 0 : a || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (kd(t, n, i, a) && (n = null),
    a || i === null
      ? yd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (a = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type), (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n), a ? e.setAttributeNS(a, t, n) : e.setAttribute(t, n))));
}
var Je = rl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  sa = Symbol.for("react.element"),
  Dt = Symbol.for("react.portal"),
  Ot = Symbol.for("react.fragment"),
  Zr = Symbol.for("react.strict_mode"),
  er = Symbol.for("react.profiler"),
  sl = Symbol.for("react.provider"),
  ll = Symbol.for("react.context"),
  Jr = Symbol.for("react.forward_ref"),
  tr = Symbol.for("react.suspense"),
  nr = Symbol.for("react.suspense_list"),
  eo = Symbol.for("react.memo"),
  tt = Symbol.for("react.lazy"),
  ul = Symbol.for("react.offscreen"),
  Ko = Symbol.iterator;
function gn(e) {
  return e === null || typeof e != "object" ? null : ((e = (Ko && e[Ko]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var j = Object.assign,
  Ni;
function kn(e) {
  if (Ni === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ni = (t && t[1]) || "";
    }
  return (
    `
` +
    Ni +
    e
  );
}
var Ei = !1;
function Ai(e, t) {
  if (!e || Ei) return "";
  Ei = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (m) {
          var a = m;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (m) {
          a = m;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (m) {
        a = m;
      }
      e();
    }
  } catch (m) {
    if (m && a && typeof m.stack == "string") {
      for (
        var i = m.stack.split(`
`),
          r = a.stack.split(`
`),
          o = i.length - 1,
          l = r.length - 1;
        1 <= o && 0 <= l && i[o] !== r[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== r[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== r[l])) {
                var u =
                  `
` + i[o].replace(" at new ", " at ");
                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (Ei = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? kn(e) : "";
}
function Pd(e) {
  switch (e.tag) {
    case 5:
      return kn(e.type);
    case 16:
      return kn("Lazy");
    case 13:
      return kn("Suspense");
    case 19:
      return kn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ai(e.type, !1)), e;
    case 11:
      return (e = Ai(e.type.render, !1)), e;
    case 1:
      return (e = Ai(e.type, !0)), e;
    default:
      return "";
  }
}
function ar(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ot:
      return "Fragment";
    case Dt:
      return "Portal";
    case er:
      return "Profiler";
    case Zr:
      return "StrictMode";
    case tr:
      return "Suspense";
    case nr:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ll:
        return (e.displayName || "Context") + ".Consumer";
      case sl:
        return (e._context.displayName || "Context") + ".Provider";
      case Jr:
        var t = e.render;
        return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
      case eo:
        return (t = e.displayName || null), t !== null ? t : ar(e.type) || "Memo";
      case tt:
        (t = e._payload), (e = e._init);
        try {
          return ar(e(t));
        } catch {}
    }
  return null;
}
function Md(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (e = t.render), (e = e.displayName || e.name || ""), t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ar(t);
    case 8:
      return t === Zr ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ht(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function dl(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Nd(e) {
  var t = dl(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    a = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get,
      r = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (a = "" + o), r.call(this, o);
        },
      }),
      Object.defineProperty(e, t, {enumerable: n.enumerable}),
      {
        getValue: function () {
          return a;
        },
        setValue: function (o) {
          a = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function la(e) {
  e._valueTracker || (e._valueTracker = Nd(e));
}
function cl(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    a = "";
  return e && (a = dl(e) ? (e.checked ? "true" : "false") : e.value), (e = a), e !== n ? (t.setValue(e), !0) : !1;
}
function Wa(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ir(e, t) {
  var n = t.checked;
  return j({}, t, {defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n != null ? n : e._wrapperState.initialChecked});
}
function jo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    a = t.checked != null ? t.checked : t.defaultChecked;
  (n = ht(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: a,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    });
}
function pl(e, t) {
  (t = t.checked), t != null && Yr(e, "checked", t, !1);
}
function rr(e, t) {
  pl(e, t);
  var n = ht(t.value),
    a = t.type;
  if (n != null)
    a === "number" ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (a === "submit" || a === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? or(e, t.type, n) : t.hasOwnProperty("defaultValue") && or(e, t.type, ht(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Qo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var a = t.type;
    if (!((a !== "submit" && a !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name), n !== "" && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== "" && (e.name = n);
}
function or(e, t, n) {
  (t !== "number" || Wa(e.ownerDocument) !== e) &&
    (n == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pn = Array.isArray;
function qt(e, t, n, a) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== i && (e[n].selected = i), i && a && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ht(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), a && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function sr(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return j({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue});
}
function $o(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (Pn(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = {initialValue: ht(n)};
}
function fl(e, t) {
  var n = ht(t.value),
    a = ht(t.defaultValue);
  n != null && ((n = "" + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    a != null && (e.defaultValue = "" + a);
}
function Xo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ml(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lr(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ml(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ua,
  hl = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, a, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, a, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        ua = ua || document.createElement("div"), ua.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ua.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Dn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var En = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ed = ["Webkit", "ms", "Moz", "O"];
Object.keys(En).forEach(function (e) {
  Ed.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (En[t] = En[e]);
  });
});
function gl(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (En.hasOwnProperty(e) && En[e])
    ? ("" + t).trim()
    : t + "px";
}
function _l(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var a = n.indexOf("--") === 0,
        i = gl(n, t[n], a);
      n === "float" && (n = "cssFloat"), a ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Ad = j(
  {menuitem: !0},
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ur(e, t) {
  if (t) {
    if (Ad[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function dr(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var cr = null;
function to(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var pr = null,
  Yt = null,
  Zt = null;
function qo(e) {
  if ((e = aa(e))) {
    if (typeof pr != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = di(t)), pr(e.stateNode, e.type, t));
  }
}
function vl(e) {
  Yt ? (Zt ? Zt.push(e) : (Zt = [e])) : (Yt = e);
}
function wl() {
  if (Yt) {
    var e = Yt,
      t = Zt;
    if (((Zt = Yt = null), qo(e), t)) for (e = 0; e < t.length; e++) qo(t[e]);
  }
}
function xl(e, t) {
  return e(t);
}
function Sl() {}
var Ci = !1;
function yl(e, t, n) {
  if (Ci) return e(t, n);
  Ci = !0;
  try {
    return xl(e, t, n);
  } finally {
    (Ci = !1), (Yt !== null || Zt !== null) && (Sl(), wl());
  }
}
function On(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var a = di(n);
  if (a === null) return null;
  n = a[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (a = !a.disabled) || ((e = e.type), (a = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !a);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var fr = !1;
if (Xe)
  try {
    var _n = {};
    Object.defineProperty(_n, "passive", {
      get: function () {
        fr = !0;
      },
    }),
      window.addEventListener("test", _n, _n),
      window.removeEventListener("test", _n, _n);
  } catch {
    fr = !1;
  }
function Cd(e, t, n, a, i, r, o, l, u) {
  var m = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, m);
  } catch (v) {
    this.onError(v);
  }
}
var An = !1,
  Fa = null,
  Ra = !1,
  mr = null,
  Gd = {
    onError: function (e) {
      (An = !0), (Fa = e);
    },
  };
function zd(e, t, n, a, i, r, o, l, u) {
  (An = !1), (Fa = null), Cd.apply(Gd, arguments);
}
function Td(e, t, n, a, i, r, o, l, u) {
  if ((zd.apply(this, arguments), An)) {
    if (An) {
      var m = Fa;
      (An = !1), (Fa = null);
    } else throw Error(x(198));
    Ra || ((Ra = !0), (mr = m));
  }
}
function Ft(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function bl(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function Yo(e) {
  if (Ft(e) !== e) throw Error(x(188));
}
function Bd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ft(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, a = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var r = i.alternate;
    if (r === null) {
      if (((a = i.return), a !== null)) {
        n = a;
        continue;
      }
      break;
    }
    if (i.child === r.child) {
      for (r = i.child; r; ) {
        if (r === n) return Yo(i), e;
        if (r === a) return Yo(i), t;
        r = r.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== a.return) (n = i), (a = r);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (a = r);
          break;
        }
        if (l === a) {
          (o = !0), (a = i), (n = r);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = r.child; l; ) {
          if (l === n) {
            (o = !0), (n = r), (a = i);
            break;
          }
          if (l === a) {
            (o = !0), (a = r), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(x(189));
      }
    }
    if (n.alternate !== a) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function kl(e) {
  return (e = Bd(e)), e !== null ? Pl(e) : null;
}
function Pl(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Pl(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ml = ye.unstable_scheduleCallback,
  Zo = ye.unstable_cancelCallback,
  Wd = ye.unstable_shouldYield,
  Fd = ye.unstable_requestPaint,
  $ = ye.unstable_now,
  Rd = ye.unstable_getCurrentPriorityLevel,
  no = ye.unstable_ImmediatePriority,
  Nl = ye.unstable_UserBlockingPriority,
  Da = ye.unstable_NormalPriority,
  Dd = ye.unstable_LowPriority,
  El = ye.unstable_IdlePriority,
  oi = null,
  Ve = null;
function Od(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function")
    try {
      Ve.onCommitFiberRoot(oi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Fe = Math.clz32 ? Math.clz32 : Vd,
  Ld = Math.log,
  Hd = Math.LN2;
function Vd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ld(e) / Hd) | 0)) | 0;
}
var da = 64,
  ca = 4194304;
function Mn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Oa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var a = 0,
    i = e.suspendedLanes,
    r = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (a = Mn(l)) : ((r &= o), r !== 0 && (a = Mn(r)));
  } else (o = n & ~i), o !== 0 ? (a = Mn(o)) : r !== 0 && (a = Mn(r));
  if (a === 0) return 0;
  if (t !== 0 && t !== a && (t & i) === 0 && ((i = a & -a), (r = t & -t), i >= r || (i === 16 && (r & 4194240) !== 0))) return t;
  if (((a & 4) !== 0 && (a |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= a; 0 < t; ) (n = 31 - Fe(t)), (i = 1 << n), (a |= e[n]), (t &= ~i);
  return a;
}
function Id(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ud(e, t) {
  for (var n = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, r = e.pendingLanes; 0 < r; ) {
    var o = 31 - Fe(r),
      l = 1 << o,
      u = i[o];
    u === -1 ? ((l & n) === 0 || (l & a) !== 0) && (i[o] = Id(l, t)) : u <= t && (e.expiredLanes |= l), (r &= ~l);
  }
}
function hr(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Al() {
  var e = da;
  return (da <<= 1), (da & 4194240) === 0 && (da = 64), e;
}
function Gi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ta(e, t, n) {
  (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - Fe(t)), (e[t] = n);
}
function Kd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var a = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Fe(n),
      r = 1 << i;
    (t[i] = 0), (a[i] = -1), (e[i] = -1), (n &= ~r);
  }
}
function ao(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var a = 31 - Fe(n),
      i = 1 << a;
    (i & t) | (e[a] & t) && (e[a] |= t), (n &= ~i);
  }
}
var F = 0;
function Cl(e) {
  return (e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1;
}
var Gl,
  io,
  zl,
  Tl,
  Bl,
  gr = !1,
  pa = [],
  st = null,
  lt = null,
  ut = null,
  Ln = new Map(),
  Hn = new Map(),
  at = [],
  jd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Jo(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      st = null;
      break;
    case "dragenter":
    case "dragleave":
      lt = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      Ln.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hn.delete(t.pointerId);
  }
}
function vn(e, t, n, a, i, r) {
  return e === null || e.nativeEvent !== r
    ? ((e = {blockedOn: t, domEventName: n, eventSystemFlags: a, nativeEvent: r, targetContainers: [i]}),
      t !== null && ((t = aa(t)), t !== null && io(t)),
      e)
    : ((e.eventSystemFlags |= a), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Qd(e, t, n, a, i) {
  switch (t) {
    case "focusin":
      return (st = vn(st, e, t, n, a, i)), !0;
    case "dragenter":
      return (lt = vn(lt, e, t, n, a, i)), !0;
    case "mouseover":
      return (ut = vn(ut, e, t, n, a, i)), !0;
    case "pointerover":
      var r = i.pointerId;
      return Ln.set(r, vn(Ln.get(r) || null, e, t, n, a, i)), !0;
    case "gotpointercapture":
      return (r = i.pointerId), Hn.set(r, vn(Hn.get(r) || null, e, t, n, a, i)), !0;
  }
  return !1;
}
function Wl(e) {
  var t = Pt(e.target);
  if (t !== null) {
    var n = Ft(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = bl(n)), t !== null)) {
          (e.blockedOn = t),
            Bl(e.priority, function () {
              zl(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Pa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _r(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var a = new n.constructor(n.type, n);
      (cr = a), n.target.dispatchEvent(a), (cr = null);
    } else return (t = aa(n)), t !== null && io(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function es(e, t, n) {
  Pa(e) && n.delete(t);
}
function $d() {
  (gr = !1),
    st !== null && Pa(st) && (st = null),
    lt !== null && Pa(lt) && (lt = null),
    ut !== null && Pa(ut) && (ut = null),
    Ln.forEach(es),
    Hn.forEach(es);
}
function wn(e, t) {
  e.blockedOn === t && ((e.blockedOn = null), gr || ((gr = !0), ye.unstable_scheduleCallback(ye.unstable_NormalPriority, $d)));
}
function Vn(e) {
  function t(i) {
    return wn(i, e);
  }
  if (0 < pa.length) {
    wn(pa[0], e);
    for (var n = 1; n < pa.length; n++) {
      var a = pa[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
  }
  for (
    st !== null && wn(st, e), lt !== null && wn(lt, e), ut !== null && wn(ut, e), Ln.forEach(t), Hn.forEach(t), n = 0;
    n < at.length;
    n++
  )
    (a = at[n]), a.blockedOn === e && (a.blockedOn = null);
  for (; 0 < at.length && ((n = at[0]), n.blockedOn === null); ) Wl(n), n.blockedOn === null && at.shift();
}
var Jt = Je.ReactCurrentBatchConfig,
  La = !0;
function Xd(e, t, n, a) {
  var i = F,
    r = Jt.transition;
  Jt.transition = null;
  try {
    (F = 1), ro(e, t, n, a);
  } finally {
    (F = i), (Jt.transition = r);
  }
}
function qd(e, t, n, a) {
  var i = F,
    r = Jt.transition;
  Jt.transition = null;
  try {
    (F = 4), ro(e, t, n, a);
  } finally {
    (F = i), (Jt.transition = r);
  }
}
function ro(e, t, n, a) {
  if (La) {
    var i = _r(e, t, n, a);
    if (i === null) Hi(e, t, a, Ha, n), Jo(e, a);
    else if (Qd(i, e, t, n, a)) a.stopPropagation();
    else if ((Jo(e, a), t & 4 && -1 < jd.indexOf(e))) {
      for (; i !== null; ) {
        var r = aa(i);
        if ((r !== null && Gl(r), (r = _r(e, t, n, a)), r === null && Hi(e, t, a, Ha, n), r === i)) break;
        i = r;
      }
      i !== null && a.stopPropagation();
    } else Hi(e, t, a, null, n);
  }
}
var Ha = null;
function _r(e, t, n, a) {
  if (((Ha = null), (e = to(a)), (e = Pt(e)), e !== null))
    if (((t = Ft(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = bl(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ha = e), null;
}
function Fl(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Rd()) {
        case no:
          return 1;
        case Nl:
          return 4;
        case Da:
        case Dd:
          return 16;
        case El:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null,
  oo = null,
  Ma = null;
function Rl() {
  if (Ma) return Ma;
  var e,
    t = oo,
    n = t.length,
    a,
    i = "value" in rt ? rt.value : rt.textContent,
    r = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (a = 1; a <= o && t[n - a] === i[r - a]; a++);
  return (Ma = i.slice(e, 1 < a ? 1 - a : void 0));
}
function Na(e) {
  var t = e.keyCode;
  return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function fa() {
  return !0;
}
function ts() {
  return !1;
}
function ke(e) {
  function t(n, a, i, r, o) {
    (this._reactName = n), (this._targetInst = i), (this.type = a), (this.nativeEvent = r), (this.target = o), (this.currentTarget = null);
    for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(r) : r[l]));
    return (
      (this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? fa : ts),
      (this.isPropagationStopped = ts),
      this
    );
  }
  return (
    j(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = fa));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = fa));
      },
      persist: function () {},
      isPersistent: fa,
    }),
    t
  );
}
var cn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  so = ke(cn),
  na = j({}, cn, {view: 0, detail: 0}),
  Yd = ke(na),
  zi,
  Ti,
  xn,
  si = j({}, na, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: lo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== xn &&
            (xn && e.type === "mousemove" ? ((zi = e.screenX - xn.screenX), (Ti = e.screenY - xn.screenY)) : (Ti = zi = 0), (xn = e)),
          zi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ti;
    },
  }),
  ns = ke(si),
  Zd = j({}, si, {dataTransfer: 0}),
  Jd = ke(Zd),
  ec = j({}, na, {relatedTarget: 0}),
  Bi = ke(ec),
  tc = j({}, cn, {animationName: 0, elapsedTime: 0, pseudoElement: 0}),
  nc = ke(tc),
  ac = j({}, cn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ic = ke(ac),
  rc = j({}, cn, {data: 0}),
  as = ke(rc),
  oc = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  sc = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  lc = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};
function uc(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = lc[e]) ? !!t[e] : !1;
}
function lo() {
  return uc;
}
var dc = j({}, na, {
    key: function (e) {
      if (e.key) {
        var t = oc[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Na(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? sc[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: lo,
    charCode: function (e) {
      return e.type === "keypress" ? Na(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? Na(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  cc = ke(dc),
  pc = j({}, si, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  is = ke(pc),
  fc = j({}, na, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: lo}),
  mc = ke(fc),
  hc = j({}, cn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}),
  gc = ke(hc),
  _c = j({}, si, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  vc = ke(_c),
  wc = [9, 13, 27, 32],
  uo = Xe && "CompositionEvent" in window,
  Cn = null;
Xe && "documentMode" in document && (Cn = document.documentMode);
var xc = Xe && "TextEvent" in window && !Cn,
  Dl = Xe && (!uo || (Cn && 8 < Cn && 11 >= Cn)),
  rs = String.fromCharCode(32),
  os = !1;
function Ol(e, t) {
  switch (e) {
    case "keyup":
      return wc.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ll(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Lt = !1;
function Sc(e, t) {
  switch (e) {
    case "compositionend":
      return Ll(t);
    case "keypress":
      return t.which !== 32 ? null : ((os = !0), rs);
    case "textInput":
      return (e = t.data), e === rs && os ? null : e;
    default:
      return null;
  }
}
function yc(e, t) {
  if (Lt) return e === "compositionend" || (!uo && Ol(e, t)) ? ((e = Rl()), (Ma = oo = rt = null), (Lt = !1), e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Dl && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var bc = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ss(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!bc[e.type] : t === "textarea";
}
function Hl(e, t, n, a) {
  vl(a), (t = Va(t, "onChange")), 0 < t.length && ((n = new so("onChange", "change", null, n, a)), e.push({event: n, listeners: t}));
}
var Gn = null,
  In = null;
function kc(e) {
  Zl(e, 0);
}
function li(e) {
  var t = It(e);
  if (cl(t)) return e;
}
function Pc(e, t) {
  if (e === "change") return t;
}
var Vl = !1;
if (Xe) {
  var Wi;
  if (Xe) {
    var Fi = "oninput" in document;
    if (!Fi) {
      var ls = document.createElement("div");
      ls.setAttribute("oninput", "return;"), (Fi = typeof ls.oninput == "function");
    }
    Wi = Fi;
  } else Wi = !1;
  Vl = Wi && (!document.documentMode || 9 < document.documentMode);
}
function us() {
  Gn && (Gn.detachEvent("onpropertychange", Il), (In = Gn = null));
}
function Il(e) {
  if (e.propertyName === "value" && li(In)) {
    var t = [];
    Hl(t, In, e, to(e)), yl(kc, t);
  }
}
function Mc(e, t, n) {
  e === "focusin" ? (us(), (Gn = t), (In = n), Gn.attachEvent("onpropertychange", Il)) : e === "focusout" && us();
}
function Nc(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return li(In);
}
function Ec(e, t) {
  if (e === "click") return li(t);
}
function Ac(e, t) {
  if (e === "input" || e === "change") return li(t);
}
function Cc(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var De = typeof Object.is == "function" ? Object.is : Cc;
function Un(e, t) {
  if (De(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    a = Object.keys(t);
  if (n.length !== a.length) return !1;
  for (a = 0; a < n.length; a++) {
    var i = n[a];
    if (!Ji.call(t, i) || !De(e[i], t[i])) return !1;
  }
  return !0;
}
function ds(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function cs(e, t) {
  var n = ds(e);
  e = 0;
  for (var a; n; ) {
    if (n.nodeType === 3) {
      if (((a = e + n.textContent.length), e <= t && a >= t)) return {node: n, offset: t - e};
      e = a;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ds(n);
  }
}
function Ul(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ul(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Kl() {
  for (var e = window, t = Wa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wa(e.document);
  }
  return t;
}
function co(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Gc(e) {
  var t = Kl(),
    n = e.focusedElem,
    a = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ul(n.ownerDocument.documentElement, n)) {
    if (a !== null && co(n)) {
      if (((t = a.start), (e = a.end), e === void 0 && (e = t), "selectionStart" in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var i = n.textContent.length,
          r = Math.min(a.start, i);
        (a = a.end === void 0 ? r : Math.min(a.end, i)), !e.extend && r > a && ((i = a), (a = r), (r = i)), (i = cs(n, r));
        var o = cs(n, a);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          r > a ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({element: e, left: e.scrollLeft, top: e.scrollTop});
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var zc = Xe && "documentMode" in document && 11 >= document.documentMode,
  Ht = null,
  vr = null,
  zn = null,
  wr = !1;
function ps(e, t, n) {
  var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wr ||
    Ht == null ||
    Ht !== Wa(a) ||
    ((a = Ht),
    "selectionStart" in a && co(a)
      ? (a = {start: a.selectionStart, end: a.selectionEnd})
      : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
        (a = {anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset})),
    (zn && Un(zn, a)) ||
      ((zn = a),
      (a = Va(vr, "onSelect")),
      0 < a.length && ((t = new so("onSelect", "select", null, t, n)), e.push({event: t, listeners: a}), (t.target = Ht))));
}
function ma(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var Vt = {
    animationend: ma("Animation", "AnimationEnd"),
    animationiteration: ma("Animation", "AnimationIteration"),
    animationstart: ma("Animation", "AnimationStart"),
    transitionend: ma("Transition", "TransitionEnd"),
  },
  Ri = {},
  jl = {};
Xe &&
  ((jl = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Vt.animationend.animation, delete Vt.animationiteration.animation, delete Vt.animationstart.animation),
  "TransitionEvent" in window || delete Vt.transitionend.transition);
function ui(e) {
  if (Ri[e]) return Ri[e];
  if (!Vt[e]) return e;
  var t = Vt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in jl) return (Ri[e] = t[n]);
  return e;
}
var Ql = ui("animationend"),
  $l = ui("animationiteration"),
  Xl = ui("animationstart"),
  ql = ui("transitionend"),
  Yl = new Map(),
  fs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function _t(e, t) {
  Yl.set(e, t), Wt(t, [e]);
}
for (var Di = 0; Di < fs.length; Di++) {
  var Oi = fs[Di],
    Tc = Oi.toLowerCase(),
    Bc = Oi[0].toUpperCase() + Oi.slice(1);
  _t(Tc, "on" + Bc);
}
_t(Ql, "onAnimationEnd");
_t($l, "onAnimationIteration");
_t(Xl, "onAnimationStart");
_t("dblclick", "onDoubleClick");
_t("focusin", "onFocus");
_t("focusout", "onBlur");
_t(ql, "onTransitionEnd");
nn("onMouseEnter", ["mouseout", "mouseover"]);
nn("onMouseLeave", ["mouseout", "mouseover"]);
nn("onPointerEnter", ["pointerout", "pointerover"]);
nn("onPointerLeave", ["pointerout", "pointerover"]);
Wt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Wt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Wt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Wt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Wt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Nn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Wc = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));
function ms(e, t, n) {
  var a = e.type || "unknown-event";
  (e.currentTarget = n), Td(a, t, void 0, e), (e.currentTarget = null);
}
function Zl(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var a = e[n],
      i = a.event;
    a = a.listeners;
    e: {
      var r = void 0;
      if (t)
        for (var o = a.length - 1; 0 <= o; o--) {
          var l = a[o],
            u = l.instance,
            m = l.currentTarget;
          if (((l = l.listener), u !== r && i.isPropagationStopped())) break e;
          ms(i, l, m), (r = u);
        }
      else
        for (o = 0; o < a.length; o++) {
          if (((l = a[o]), (u = l.instance), (m = l.currentTarget), (l = l.listener), u !== r && i.isPropagationStopped())) break e;
          ms(i, l, m), (r = u);
        }
    }
  }
  if (Ra) throw ((e = mr), (Ra = !1), (mr = null), e);
}
function O(e, t) {
  var n = t[kr];
  n === void 0 && (n = t[kr] = new Set());
  var a = e + "__bubble";
  n.has(a) || (Jl(t, e, 2, !1), n.add(a));
}
function Li(e, t, n) {
  var a = 0;
  t && (a |= 4), Jl(n, e, a, t);
}
var ha = "_reactListening" + Math.random().toString(36).slice(2);
function Kn(e) {
  if (!e[ha]) {
    (e[ha] = !0),
      ol.forEach(function (n) {
        n !== "selectionchange" && (Wc.has(n) || Li(n, !1, e), Li(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ha] || ((t[ha] = !0), Li("selectionchange", !1, t));
  }
}
function Jl(e, t, n, a) {
  switch (Fl(t)) {
    case 1:
      var i = Xd;
      break;
    case 4:
      i = qd;
      break;
    default:
      i = ro;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !fr || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (i = !0),
    a
      ? i !== void 0
        ? e.addEventListener(t, n, {capture: !0, passive: i})
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, {passive: i})
      : e.addEventListener(t, n, !1);
}
function Hi(e, t, n, a, i) {
  var r = a;
  if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
    e: for (;;) {
      if (a === null) return;
      var o = a.tag;
      if (o === 3 || o === 4) {
        var l = a.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = a.return; o !== null; ) {
            var u = o.tag;
            if ((u === 3 || u === 4) && ((u = o.stateNode.containerInfo), u === i || (u.nodeType === 8 && u.parentNode === i))) return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = Pt(l)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            a = r = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      a = a.return;
    }
  yl(function () {
    var m = r,
      v = to(n),
      _ = [];
    e: {
      var g = Yl.get(e);
      if (g !== void 0) {
        var S = so,
          b = e;
        switch (e) {
          case "keypress":
            if (Na(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = cc;
            break;
          case "focusin":
            (b = "focus"), (S = Bi);
            break;
          case "focusout":
            (b = "blur"), (S = Bi);
            break;
          case "beforeblur":
          case "afterblur":
            S = Bi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = ns;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Jd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = mc;
            break;
          case Ql:
          case $l:
          case Xl:
            S = nc;
            break;
          case ql:
            S = gc;
            break;
          case "scroll":
            S = Yd;
            break;
          case "wheel":
            S = vc;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = ic;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = is;
        }
        var k = (t & 4) !== 0,
          R = !k && e === "scroll",
          f = k ? (g !== null ? g + "Capture" : null) : g;
        k = [];
        for (var c = m, h; c !== null; ) {
          h = c;
          var w = h.stateNode;
          if ((h.tag === 5 && w !== null && ((h = w), f !== null && ((w = On(c, f)), w != null && k.push(jn(c, w, h)))), R)) break;
          c = c.return;
        }
        0 < k.length && ((g = new S(g, b, null, n, v)), _.push({event: g, listeners: k}));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          g && n !== cr && (b = n.relatedTarget || n.fromElement) && (Pt(b) || b[qe]))
        )
          break e;
        if (
          (S || g) &&
          ((g = v.window === v ? v : (g = v.ownerDocument) ? g.defaultView || g.parentWindow : window),
          S
            ? ((b = n.relatedTarget || n.toElement),
              (S = m),
              (b = b ? Pt(b) : null),
              b !== null && ((R = Ft(b)), b !== R || (b.tag !== 5 && b.tag !== 6)) && (b = null))
            : ((S = null), (b = m)),
          S !== b)
        ) {
          if (
            ((k = ns),
            (w = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") && ((k = is), (w = "onPointerLeave"), (f = "onPointerEnter"), (c = "pointer")),
            (R = S == null ? g : It(S)),
            (h = b == null ? g : It(b)),
            (g = new k(w, c + "leave", S, n, v)),
            (g.target = R),
            (g.relatedTarget = h),
            (w = null),
            Pt(v) === m && ((k = new k(f, c + "enter", b, n, v)), (k.target = h), (k.relatedTarget = R), (w = k)),
            (R = w),
            S && b)
          )
            t: {
              for (k = S, f = b, c = 0, h = k; h; h = Rt(h)) c++;
              for (h = 0, w = f; w; w = Rt(w)) h++;
              for (; 0 < c - h; ) (k = Rt(k)), c--;
              for (; 0 < h - c; ) (f = Rt(f)), h--;
              for (; c--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                (k = Rt(k)), (f = Rt(f));
              }
              k = null;
            }
          else k = null;
          S !== null && hs(_, g, S, k, !1), b !== null && R !== null && hs(_, R, b, k, !0);
        }
      }
      e: {
        if (
          ((g = m ? It(m) : window), (S = g.nodeName && g.nodeName.toLowerCase()), S === "select" || (S === "input" && g.type === "file"))
        )
          var P = Pc;
        else if (ss(g))
          if (Vl) P = Ac;
          else {
            P = Nc;
            var A = Mc;
          }
        else (S = g.nodeName) && S.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (P = Ec);
        if (P && (P = P(e, m))) {
          Hl(_, P, n, v);
          break e;
        }
        A && A(e, g, m), e === "focusout" && (A = g._wrapperState) && A.controlled && g.type === "number" && or(g, "number", g.value);
      }
      switch (((A = m ? It(m) : window), e)) {
        case "focusin":
          (ss(A) || A.contentEditable === "true") && ((Ht = A), (vr = m), (zn = null));
          break;
        case "focusout":
          zn = vr = Ht = null;
          break;
        case "mousedown":
          wr = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (wr = !1), ps(_, n, v);
          break;
        case "selectionchange":
          if (zc) break;
        case "keydown":
        case "keyup":
          ps(_, n, v);
      }
      var E;
      if (uo)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else Lt ? Ol(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (Dl &&
          n.locale !== "ko" &&
          (Lt || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && Lt && (E = Rl())
            : ((rt = v), (oo = "value" in rt ? rt.value : rt.textContent), (Lt = !0))),
        (A = Va(m, C)),
        0 < A.length &&
          ((C = new as(C, e, null, n, v)), _.push({event: C, listeners: A}), E ? (C.data = E) : ((E = Ll(n)), E !== null && (C.data = E)))),
        (E = xc ? Sc(e, n) : yc(e, n)) &&
          ((m = Va(m, "onBeforeInput")),
          0 < m.length && ((v = new as("onBeforeInput", "beforeinput", null, n, v)), _.push({event: v, listeners: m}), (v.data = E)));
    }
    Zl(_, t);
  });
}
function jn(e, t, n) {
  return {instance: e, listener: t, currentTarget: n};
}
function Va(e, t) {
  for (var n = t + "Capture", a = []; e !== null; ) {
    var i = e,
      r = i.stateNode;
    i.tag === 5 &&
      r !== null &&
      ((i = r), (r = On(e, n)), r != null && a.unshift(jn(e, r, i)), (r = On(e, t)), r != null && a.push(jn(e, r, i))),
      (e = e.return);
  }
  return a;
}
function Rt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function hs(e, t, n, a, i) {
  for (var r = t._reactName, o = []; n !== null && n !== a; ) {
    var l = n,
      u = l.alternate,
      m = l.stateNode;
    if (u !== null && u === a) break;
    l.tag === 5 &&
      m !== null &&
      ((l = m), i ? ((u = On(n, r)), u != null && o.unshift(jn(n, u, l))) : i || ((u = On(n, r)), u != null && o.push(jn(n, u, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({event: t, listeners: o});
}
var Fc = /\r\n?/g,
  Rc = /\u0000|\uFFFD/g;
function gs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Fc,
      `
`
    )
    .replace(Rc, "");
}
function ga(e, t, n) {
  if (((t = gs(t)), gs(e) !== t && n)) throw Error(x(425));
}
function Ia() {}
var xr = null,
  Sr = null;
function yr(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
  );
}
var br = typeof setTimeout == "function" ? setTimeout : void 0,
  Dc = typeof clearTimeout == "function" ? clearTimeout : void 0,
  _s = typeof Promise == "function" ? Promise : void 0,
  Oc =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof _s < "u"
      ? function (e) {
          return _s.resolve(null).then(e).catch(Lc);
        }
      : br;
function Lc(e) {
  setTimeout(function () {
    throw e;
  });
}
function Vi(e, t) {
  var n = t,
    a = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (a === 0) {
          e.removeChild(i), Vn(t);
          return;
        }
        a--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || a++;
    n = i;
  } while (n);
  Vn(t);
}
function dt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function vs(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var pn = Math.random().toString(36).slice(2),
  He = "__reactFiber$" + pn,
  Qn = "__reactProps$" + pn,
  qe = "__reactContainer$" + pn,
  kr = "__reactEvents$" + pn,
  Hc = "__reactListeners$" + pn,
  Vc = "__reactHandles$" + pn;
function Pt(e) {
  var t = e[He];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[qe] || n[He])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = vs(e); e !== null; ) {
          if ((n = e[He])) return n;
          e = vs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function aa(e) {
  return (e = e[He] || e[qe]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function It(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function di(e) {
  return e[Qn] || null;
}
var Pr = [],
  Ut = -1;
function vt(e) {
  return {current: e};
}
function L(e) {
  0 > Ut || ((e.current = Pr[Ut]), (Pr[Ut] = null), Ut--);
}
function D(e, t) {
  Ut++, (Pr[Ut] = e.current), (e.current = t);
}
var gt = {},
  se = vt(gt),
  he = vt(!1),
  Ct = gt;
function an(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gt;
  var a = e.stateNode;
  if (a && a.__reactInternalMemoizedUnmaskedChildContext === t) return a.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    r;
  for (r in n) i[r] = t[r];
  return (
    a && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = i)), i
  );
}
function ge(e) {
  return (e = e.childContextTypes), e != null;
}
function Ua() {
  L(he), L(se);
}
function ws(e, t, n) {
  if (se.current !== gt) throw Error(x(168));
  D(se, t), D(he, n);
}
function eu(e, t, n) {
  var a = e.stateNode;
  if (((t = t.childContextTypes), typeof a.getChildContext != "function")) return n;
  a = a.getChildContext();
  for (var i in a) if (!(i in t)) throw Error(x(108, Md(e) || "Unknown", i));
  return j({}, n, a);
}
function Ka(e) {
  return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gt), (Ct = se.current), D(se, e), D(he, he.current), !0;
}
function xs(e, t, n) {
  var a = e.stateNode;
  if (!a) throw Error(x(169));
  n ? ((e = eu(e, t, Ct)), (a.__reactInternalMemoizedMergedChildContext = e), L(he), L(se), D(se, e)) : L(he), D(he, n);
}
var Ke = null,
  ci = !1,
  Ii = !1;
function tu(e) {
  Ke === null ? (Ke = [e]) : Ke.push(e);
}
function Ic(e) {
  (ci = !0), tu(e);
}
function wt() {
  if (!Ii && Ke !== null) {
    Ii = !0;
    var e = 0,
      t = F;
    try {
      var n = Ke;
      for (F = 1; e < n.length; e++) {
        var a = n[e];
        do a = a(!0);
        while (a !== null);
      }
      (Ke = null), (ci = !1);
    } catch (i) {
      throw (Ke !== null && (Ke = Ke.slice(e + 1)), Ml(no, wt), i);
    } finally {
      (F = t), (Ii = !1);
    }
  }
  return null;
}
var Kt = [],
  jt = 0,
  ja = null,
  Qa = 0,
  Pe = [],
  Me = 0,
  Gt = null,
  je = 1,
  Qe = "";
function bt(e, t) {
  (Kt[jt++] = Qa), (Kt[jt++] = ja), (ja = e), (Qa = t);
}
function nu(e, t, n) {
  (Pe[Me++] = je), (Pe[Me++] = Qe), (Pe[Me++] = Gt), (Gt = e);
  var a = je;
  e = Qe;
  var i = 32 - Fe(a) - 1;
  (a &= ~(1 << i)), (n += 1);
  var r = 32 - Fe(t) + i;
  if (30 < r) {
    var o = i - (i % 5);
    (r = (a & ((1 << o) - 1)).toString(32)), (a >>= o), (i -= o), (je = (1 << (32 - Fe(t) + i)) | (n << i) | a), (Qe = r + e);
  } else (je = (1 << r) | (n << i) | a), (Qe = e);
}
function po(e) {
  e.return !== null && (bt(e, 1), nu(e, 1, 0));
}
function fo(e) {
  for (; e === ja; ) (ja = Kt[--jt]), (Kt[jt] = null), (Qa = Kt[--jt]), (Kt[jt] = null);
  for (; e === Gt; ) (Gt = Pe[--Me]), (Pe[Me] = null), (Qe = Pe[--Me]), (Pe[Me] = null), (je = Pe[--Me]), (Pe[Me] = null);
}
var Se = null,
  xe = null,
  H = !1,
  We = null;
function au(e, t) {
  var n = Ne(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ss(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Se = e), (xe = dt(t.firstChild)), !0) : !1
      );
    case 6:
      return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (Se = e), (xe = null), !0) : !1;
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Gt !== null ? {id: je, overflow: Qe} : null),
            (e.memoizedState = {dehydrated: t, treeContext: n, retryLane: 1073741824}),
            (n = Ne(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Se = e),
            (xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Mr(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Nr(e) {
  if (H) {
    var t = xe;
    if (t) {
      var n = t;
      if (!Ss(e, t)) {
        if (Mr(e)) throw Error(x(418));
        t = dt(n.nextSibling);
        var a = Se;
        t && Ss(e, t) ? au(a, n) : ((e.flags = (e.flags & -4097) | 2), (H = !1), (Se = e));
      }
    } else {
      if (Mr(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (Se = e);
    }
  }
}
function ys(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Se = e;
}
function _a(e) {
  if (e !== Se) return !1;
  if (!H) return ys(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== "head" && t !== "body" && !yr(e.type, e.memoizedProps))),
    t && (t = xe))
  ) {
    if (Mr(e)) throw (iu(), Error(x(418)));
    for (; t; ) au(e, t), (t = dt(t.nextSibling));
  }
  if ((ys(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xe = dt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = Se ? dt(e.stateNode.nextSibling) : null;
  return !0;
}
function iu() {
  for (var e = xe; e; ) e = dt(e.nextSibling);
}
function rn() {
  (xe = Se = null), (H = !1);
}
function mo(e) {
  We === null ? (We = [e]) : We.push(e);
}
var Uc = Je.ReactCurrentBatchConfig;
function Te(e, t) {
  if (e && e.defaultProps) {
    (t = j({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var $a = vt(null),
  Xa = null,
  Qt = null,
  ho = null;
function go() {
  ho = Qt = Xa = null;
}
function _o(e) {
  var t = $a.current;
  L($a), (e._currentValue = t);
}
function Er(e, t, n) {
  for (; e !== null; ) {
    var a = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
        : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function en(e, t) {
  (Xa = e),
    (ho = Qt = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (me = !0), (e.firstContext = null));
}
function Ae(e) {
  var t = e._currentValue;
  if (ho !== e)
    if (((e = {context: e, memoizedValue: t, next: null}), Qt === null)) {
      if (Xa === null) throw Error(x(308));
      (Qt = e), (Xa.dependencies = {lanes: 0, firstContext: e});
    } else Qt = Qt.next = e;
  return t;
}
var Mt = null;
function vo(e) {
  Mt === null ? (Mt = [e]) : Mt.push(e);
}
function ru(e, t, n, a) {
  var i = t.interleaved;
  return i === null ? ((n.next = n), vo(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), Ye(e, a);
}
function Ye(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var nt = !1;
function wo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {pending: null, interleaved: null, lanes: 0},
    effects: null,
  };
}
function ou(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function $e(e, t) {
  return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null};
}
function ct(e, t, n) {
  var a = e.updateQueue;
  if (a === null) return null;
  if (((a = a.shared), (W & 2) !== 0)) {
    var i = a.pending;
    return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (a.pending = t), Ye(e, n);
  }
  return (i = a.interleaved), i === null ? ((t.next = t), vo(a)) : ((t.next = i.next), (i.next = t)), (a.interleaved = t), Ye(e, n);
}
function Ea(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var a = t.lanes;
    (a &= e.pendingLanes), (n |= a), (t.lanes = n), ao(e, n);
  }
}
function bs(e, t) {
  var n = e.updateQueue,
    a = e.alternate;
  if (a !== null && ((a = a.updateQueue), n === a)) {
    var i = null,
      r = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null};
        r === null ? (i = r = o) : (r = r.next = o), (n = n.next);
      } while (n !== null);
      r === null ? (i = r = t) : (r = r.next = t);
    } else i = r = t;
    (n = {baseState: a.baseState, firstBaseUpdate: i, lastBaseUpdate: r, shared: a.shared, effects: a.effects}), (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function qa(e, t, n, a) {
  var i = e.updateQueue;
  nt = !1;
  var r = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l,
      m = u.next;
    (u.next = null), o === null ? (r = m) : (o.next = m), (o = u);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (l = v.lastBaseUpdate),
      l !== o && (l === null ? (v.firstBaseUpdate = m) : (l.next = m), (v.lastBaseUpdate = u)));
  }
  if (r !== null) {
    var _ = i.baseState;
    (o = 0), (v = m = u = null), (l = r);
    do {
      var g = l.lane,
        S = l.eventTime;
      if ((a & g) === g) {
        v !== null && (v = v.next = {eventTime: S, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null});
        e: {
          var b = e,
            k = l;
          switch (((g = t), (S = n), k.tag)) {
            case 1:
              if (((b = k.payload), typeof b == "function")) {
                _ = b.call(S, _, g);
                break e;
              }
              _ = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (((b = k.payload), (g = typeof b == "function" ? b.call(S, _, g) : b), g == null)) break e;
              _ = j({}, _, g);
              break e;
            case 2:
              nt = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && ((e.flags |= 64), (g = i.effects), g === null ? (i.effects = [l]) : g.push(l));
      } else
        (S = {eventTime: S, lane: g, tag: l.tag, payload: l.payload, callback: l.callback, next: null}),
          v === null ? ((m = v = S), (u = _)) : (v = v.next = S),
          (o |= g);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (g = l), (l = g.next), (g.next = null), (i.lastBaseUpdate = g), (i.shared.pending = null);
      }
    } while (1);
    if (
      (v === null && (u = _), (i.baseState = u), (i.firstBaseUpdate = m), (i.lastBaseUpdate = v), (t = i.shared.interleaved), t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else r === null && (i.shared.lanes = 0);
    (Tt |= o), (e.lanes = o), (e.memoizedState = _);
  }
}
function ks(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var a = e[t],
        i = a.callback;
      if (i !== null) {
        if (((a.callback = null), (a = n), typeof i != "function")) throw Error(x(191, i));
        i.call(a);
      }
    }
}
var su = new rl.Component().refs;
function Ar(e, t, n, a) {
  (t = e.memoizedState),
    (n = n(a, t)),
    (n = n == null ? t : j({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var pi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ft(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var a = de(),
      i = ft(e),
      r = $e(a, i);
    (r.payload = t), n != null && (r.callback = n), (t = ct(e, r, i)), t !== null && (Re(t, e, i, a), Ea(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var a = de(),
      i = ft(e),
      r = $e(a, i);
    (r.tag = 1), (r.payload = t), n != null && (r.callback = n), (t = ct(e, r, i)), t !== null && (Re(t, e, i, a), Ea(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      a = ft(e),
      i = $e(n, a);
    (i.tag = 2), t != null && (i.callback = t), (t = ct(e, i, a)), t !== null && (Re(t, e, a, n), Ea(t, e, a));
  },
};
function Ps(e, t, n, a, i, r, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(a, r, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Un(n, a) || !Un(i, r)
      : !0
  );
}
function lu(e, t, n) {
  var a = !1,
    i = gt,
    r = t.contextType;
  return (
    typeof r == "object" && r !== null
      ? (r = Ae(r))
      : ((i = ge(t) ? Ct : se.current), (a = t.contextTypes), (r = (a = a != null) ? an(e, i) : gt)),
    (t = new t(n, r)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = pi),
    (e.stateNode = t),
    (t._reactInternals = e),
    a && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = i), (e.__reactInternalMemoizedMaskedChildContext = r)),
    t
  );
}
function Ms(e, t, n, a) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a),
    t.state !== e && pi.enqueueReplaceState(t, t.state, null);
}
function Cr(e, t, n, a) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = su), wo(e);
  var r = t.contextType;
  typeof r == "object" && r !== null ? (i.context = Ae(r)) : ((r = ge(t) ? Ct : se.current), (i.context = an(e, r))),
    (i.state = e.memoizedState),
    (r = t.getDerivedStateFromProps),
    typeof r == "function" && (Ar(e, t, r, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
      t !== i.state && pi.enqueueReplaceState(i, i.state, null),
      qa(e, n, i, a),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Sn(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var a = n.stateNode;
      }
      if (!a) throw Error(x(147, e));
      var i = a,
        r = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === r
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            l === su && (l = i.refs = {}), o === null ? delete l[r] : (l[r] = o);
          }),
          (t._stringRef = r),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function va(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(x(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
  );
}
function Ns(e) {
  var t = e._init;
  return t(e._payload);
}
function uu(e) {
  function t(f, c) {
    if (e) {
      var h = f.deletions;
      h === null ? ((f.deletions = [c]), (f.flags |= 16)) : h.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function a(f, c) {
    for (f = new Map(); c !== null; ) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function i(f, c) {
    return (f = mt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function r(f, c, h) {
    return (
      (f.index = h),
      e
        ? ((h = f.alternate), h !== null ? ((h = h.index), h < c ? ((f.flags |= 2), c) : h) : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function l(f, c, h, w) {
    return c === null || c.tag !== 6 ? ((c = qi(h, f.mode, w)), (c.return = f), c) : ((c = i(c, h)), (c.return = f), c);
  }
  function u(f, c, h, w) {
    var P = h.type;
    return P === Ot
      ? v(f, c, h.props.children, w, h.key)
      : c !== null && (c.elementType === P || (typeof P == "object" && P !== null && P.$$typeof === tt && Ns(P) === c.type))
      ? ((w = i(c, h.props)), (w.ref = Sn(f, c, h)), (w.return = f), w)
      : ((w = Ba(h.type, h.key, h.props, null, f.mode, w)), (w.ref = Sn(f, c, h)), (w.return = f), w);
  }
  function m(f, c, h, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation
      ? ((c = Yi(h, f.mode, w)), (c.return = f), c)
      : ((c = i(c, h.children || [])), (c.return = f), c);
  }
  function v(f, c, h, w, P) {
    return c === null || c.tag !== 7 ? ((c = At(h, f.mode, w, P)), (c.return = f), c) : ((c = i(c, h)), (c.return = f), c);
  }
  function _(f, c, h) {
    if ((typeof c == "string" && c !== "") || typeof c == "number") return (c = qi("" + c, f.mode, h)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case sa:
          return (h = Ba(c.type, c.key, c.props, null, f.mode, h)), (h.ref = Sn(f, null, c)), (h.return = f), h;
        case Dt:
          return (c = Yi(c, f.mode, h)), (c.return = f), c;
        case tt:
          var w = c._init;
          return _(f, w(c._payload), h);
      }
      if (Pn(c) || gn(c)) return (c = At(c, f.mode, h, null)), (c.return = f), c;
      va(f, c);
    }
    return null;
  }
  function g(f, c, h, w) {
    var P = c !== null ? c.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number") return P !== null ? null : l(f, c, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case sa:
          return h.key === P ? u(f, c, h, w) : null;
        case Dt:
          return h.key === P ? m(f, c, h, w) : null;
        case tt:
          return (P = h._init), g(f, c, P(h._payload), w);
      }
      if (Pn(h) || gn(h)) return P !== null ? null : v(f, c, h, w, null);
      va(f, h);
    }
    return null;
  }
  function S(f, c, h, w, P) {
    if ((typeof w == "string" && w !== "") || typeof w == "number") return (f = f.get(h) || null), l(c, f, "" + w, P);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case sa:
          return (f = f.get(w.key === null ? h : w.key) || null), u(c, f, w, P);
        case Dt:
          return (f = f.get(w.key === null ? h : w.key) || null), m(c, f, w, P);
        case tt:
          var A = w._init;
          return S(f, c, h, A(w._payload), P);
      }
      if (Pn(w) || gn(w)) return (f = f.get(h) || null), v(c, f, w, P, null);
      va(c, w);
    }
    return null;
  }
  function b(f, c, h, w) {
    for (var P = null, A = null, E = c, C = (c = 0), V = null; E !== null && C < h.length; C++) {
      E.index > C ? ((V = E), (E = null)) : (V = E.sibling);
      var T = g(f, E, h[C], w);
      if (T === null) {
        E === null && (E = V);
        break;
      }
      e && E && T.alternate === null && t(f, E), (c = r(T, c, C)), A === null ? (P = T) : (A.sibling = T), (A = T), (E = V);
    }
    if (C === h.length) return n(f, E), H && bt(f, C), P;
    if (E === null) {
      for (; C < h.length; C++) (E = _(f, h[C], w)), E !== null && ((c = r(E, c, C)), A === null ? (P = E) : (A.sibling = E), (A = E));
      return H && bt(f, C), P;
    }
    for (E = a(f, E); C < h.length; C++)
      (V = S(E, f, C, h[C], w)),
        V !== null &&
          (e && V.alternate !== null && E.delete(V.key === null ? C : V.key),
          (c = r(V, c, C)),
          A === null ? (P = V) : (A.sibling = V),
          (A = V));
    return (
      e &&
        E.forEach(function (le) {
          return t(f, le);
        }),
      H && bt(f, C),
      P
    );
  }
  function k(f, c, h, w) {
    var P = gn(h);
    if (typeof P != "function") throw Error(x(150));
    if (((h = P.call(h)), h == null)) throw Error(x(151));
    for (var A = (P = null), E = c, C = (c = 0), V = null, T = h.next(); E !== null && !T.done; C++, T = h.next()) {
      E.index > C ? ((V = E), (E = null)) : (V = E.sibling);
      var le = g(f, E, T.value, w);
      if (le === null) {
        E === null && (E = V);
        break;
      }
      e && E && le.alternate === null && t(f, E), (c = r(le, c, C)), A === null ? (P = le) : (A.sibling = le), (A = le), (E = V);
    }
    if (T.done) return n(f, E), H && bt(f, C), P;
    if (E === null) {
      for (; !T.done; C++, T = h.next())
        (T = _(f, T.value, w)), T !== null && ((c = r(T, c, C)), A === null ? (P = T) : (A.sibling = T), (A = T));
      return H && bt(f, C), P;
    }
    for (E = a(f, E); !T.done; C++, T = h.next())
      (T = S(E, f, C, T.value, w)),
        T !== null &&
          (e && T.alternate !== null && E.delete(T.key === null ? C : T.key),
          (c = r(T, c, C)),
          A === null ? (P = T) : (A.sibling = T),
          (A = T));
    return (
      e &&
        E.forEach(function (xt) {
          return t(f, xt);
        }),
      H && bt(f, C),
      P
    );
  }
  function R(f, c, h, w) {
    if (
      (typeof h == "object" && h !== null && h.type === Ot && h.key === null && (h = h.props.children), typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case sa:
          e: {
            for (var P = h.key, A = c; A !== null; ) {
              if (A.key === P) {
                if (((P = h.type), P === Ot)) {
                  if (A.tag === 7) {
                    n(f, A.sibling), (c = i(A, h.props.children)), (c.return = f), (f = c);
                    break e;
                  }
                } else if (A.elementType === P || (typeof P == "object" && P !== null && P.$$typeof === tt && Ns(P) === A.type)) {
                  n(f, A.sibling), (c = i(A, h.props)), (c.ref = Sn(f, A, h)), (c.return = f), (f = c);
                  break e;
                }
                n(f, A);
                break;
              } else t(f, A);
              A = A.sibling;
            }
            h.type === Ot
              ? ((c = At(h.props.children, f.mode, w, h.key)), (c.return = f), (f = c))
              : ((w = Ba(h.type, h.key, h.props, null, f.mode, w)), (w.ref = Sn(f, c, h)), (w.return = f), (f = w));
          }
          return o(f);
        case Dt:
          e: {
            for (A = h.key; c !== null; ) {
              if (c.key === A)
                if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                  n(f, c.sibling), (c = i(c, h.children || [])), (c.return = f), (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = Yi(h, f.mode, w)), (c.return = f), (f = c);
          }
          return o(f);
        case tt:
          return (A = h._init), R(f, c, A(h._payload), w);
      }
      if (Pn(h)) return b(f, c, h, w);
      if (gn(h)) return k(f, c, h, w);
      va(f, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = i(c, h)), (c.return = f), (f = c))
          : (n(f, c), (c = qi(h, f.mode, w)), (c.return = f), (f = c)),
        o(f))
      : n(f, c);
  }
  return R;
}
var on = uu(!0),
  du = uu(!1),
  ia = {},
  Ie = vt(ia),
  $n = vt(ia),
  Xn = vt(ia);
function Nt(e) {
  if (e === ia) throw Error(x(174));
  return e;
}
function xo(e, t) {
  switch ((D(Xn, t), D($n, e), D(Ie, ia), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : lr(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = lr(t, e));
  }
  L(Ie), D(Ie, t);
}
function sn() {
  L(Ie), L($n), L(Xn);
}
function cu(e) {
  Nt(Xn.current);
  var t = Nt(Ie.current),
    n = lr(t, e.type);
  t !== n && (D($n, e), D(Ie, n));
}
function So(e) {
  $n.current === e && (L(Ie), L($n));
}
var U = vt(0);
function Ya(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ui = [];
function yo() {
  for (var e = 0; e < Ui.length; e++) Ui[e]._workInProgressVersionPrimary = null;
  Ui.length = 0;
}
var Aa = Je.ReactCurrentDispatcher,
  Ki = Je.ReactCurrentBatchConfig,
  zt = 0,
  K = null,
  Y = null,
  J = null,
  Za = !1,
  Tn = !1,
  qn = 0,
  Kc = 0;
function ie() {
  throw Error(x(321));
}
function bo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!De(e[n], t[n])) return !1;
  return !0;
}
function ko(e, t, n, a, i, r) {
  if (
    ((zt = r),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Aa.current = e === null || e.memoizedState === null ? Xc : qc),
    (e = n(a, i)),
    Tn)
  ) {
    r = 0;
    do {
      if (((Tn = !1), (qn = 0), 25 <= r)) throw Error(x(301));
      (r += 1), (J = Y = null), (t.updateQueue = null), (Aa.current = Yc), (e = n(a, i));
    } while (Tn);
  }
  if (((Aa.current = Ja), (t = Y !== null && Y.next !== null), (zt = 0), (J = Y = K = null), (Za = !1), t)) throw Error(x(300));
  return e;
}
function Po() {
  var e = qn !== 0;
  return (qn = 0), e;
}
function Le() {
  var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
  return J === null ? (K.memoizedState = J = e) : (J = J.next = e), J;
}
function Ce() {
  if (Y === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = J === null ? K.memoizedState : J.next;
  if (t !== null) (J = t), (Y = e);
  else {
    if (e === null) throw Error(x(310));
    (Y = e),
      (e = {memoizedState: Y.memoizedState, baseState: Y.baseState, baseQueue: Y.baseQueue, queue: Y.queue, next: null}),
      J === null ? (K.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function Yn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ji(e) {
  var t = Ce(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var a = Y,
    i = a.baseQueue,
    r = n.pending;
  if (r !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = r.next), (r.next = o);
    }
    (a.baseQueue = i = r), (n.pending = null);
  }
  if (i !== null) {
    (r = i.next), (a = a.baseState);
    var l = (o = null),
      u = null,
      m = r;
    do {
      var v = m.lane;
      if ((zt & v) === v)
        u !== null && (u = u.next = {lane: 0, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null}),
          (a = m.hasEagerState ? m.eagerState : e(a, m.action));
      else {
        var _ = {lane: v, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null};
        u === null ? ((l = u = _), (o = a)) : (u = u.next = _), (K.lanes |= v), (Tt |= v);
      }
      m = m.next;
    } while (m !== null && m !== r);
    u === null ? (o = a) : (u.next = l),
      De(a, t.memoizedState) || (me = !0),
      (t.memoizedState = a),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = a);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (r = i.lane), (K.lanes |= r), (Tt |= r), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Qi(e) {
  var t = Ce(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var a = n.dispatch,
    i = n.pending,
    r = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (r = e(r, o.action)), (o = o.next);
    while (o !== i);
    De(r, t.memoizedState) || (me = !0), (t.memoizedState = r), t.baseQueue === null && (t.baseState = r), (n.lastRenderedState = r);
  }
  return [r, a];
}
function pu() {}
function fu(e, t) {
  var n = K,
    a = Ce(),
    i = t(),
    r = !De(a.memoizedState, i);
  if (
    (r && ((a.memoizedState = i), (me = !0)),
    (a = a.queue),
    Mo(gu.bind(null, n, a, e), [e]),
    a.getSnapshot !== t || r || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Zn(9, hu.bind(null, n, a, i, t), void 0, null), ee === null)) throw Error(x(349));
    (zt & 30) !== 0 || mu(n, t, i);
  }
  return i;
}
function mu(e, t, n) {
  (e.flags |= 16384),
    (e = {getSnapshot: t, value: n}),
    (t = K.updateQueue),
    t === null
      ? ((t = {lastEffect: null, stores: null}), (K.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function hu(e, t, n, a) {
  (t.value = n), (t.getSnapshot = a), _u(t) && vu(e);
}
function gu(e, t, n) {
  return n(function () {
    _u(t) && vu(e);
  });
}
function _u(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !De(e, n);
  } catch {
    return !0;
  }
}
function vu(e) {
  var t = Ye(e, 1);
  t !== null && Re(t, e, 1, -1);
}
function Es(e) {
  var t = Le();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yn, lastRenderedState: e}),
    (t.queue = e),
    (e = e.dispatch = $c.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function Zn(e, t, n, a) {
  return (
    (e = {tag: e, create: t, destroy: n, deps: a, next: null}),
    (t = K.updateQueue),
    t === null
      ? ((t = {lastEffect: null, stores: null}), (K.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e))),
    e
  );
}
function wu() {
  return Ce().memoizedState;
}
function Ca(e, t, n, a) {
  var i = Le();
  (K.flags |= e), (i.memoizedState = Zn(1 | t, n, void 0, a === void 0 ? null : a));
}
function fi(e, t, n, a) {
  var i = Ce();
  a = a === void 0 ? null : a;
  var r = void 0;
  if (Y !== null) {
    var o = Y.memoizedState;
    if (((r = o.destroy), a !== null && bo(a, o.deps))) {
      i.memoizedState = Zn(t, n, r, a);
      return;
    }
  }
  (K.flags |= e), (i.memoizedState = Zn(1 | t, n, r, a));
}
function As(e, t) {
  return Ca(8390656, 8, e, t);
}
function Mo(e, t) {
  return fi(2048, 8, e, t);
}
function xu(e, t) {
  return fi(4, 2, e, t);
}
function Su(e, t) {
  return fi(4, 4, e, t);
}
function yu(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function bu(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), fi(4, 4, yu.bind(null, t, e), n);
}
function No() {}
function ku(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var a = n.memoizedState;
  return a !== null && t !== null && bo(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
}
function Pu(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var a = n.memoizedState;
  return a !== null && t !== null && bo(t, a[1]) ? a[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Mu(e, t, n) {
  return (zt & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = n))
    : (De(n, t) || ((n = Al()), (K.lanes |= n), (Tt |= n), (e.baseState = !0)), t);
}
function jc(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var a = Ki.transition;
  Ki.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (Ki.transition = a);
  }
}
function Nu() {
  return Ce().memoizedState;
}
function Qc(e, t, n) {
  var a = ft(e);
  if (((n = {lane: a, action: n, hasEagerState: !1, eagerState: null, next: null}), Eu(e))) Au(t, n);
  else if (((n = ru(e, t, n, a)), n !== null)) {
    var i = de();
    Re(n, e, a, i), Cu(n, t, a);
  }
}
function $c(e, t, n) {
  var a = ft(e),
    i = {lane: a, action: n, hasEagerState: !1, eagerState: null, next: null};
  if (Eu(e)) Au(t, i);
  else {
    var r = e.alternate;
    if (e.lanes === 0 && (r === null || r.lanes === 0) && ((r = t.lastRenderedReducer), r !== null))
      try {
        var o = t.lastRenderedState,
          l = r(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), De(l, o))) {
          var u = t.interleaved;
          u === null ? ((i.next = i), vo(t)) : ((i.next = u.next), (u.next = i)), (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = ru(e, t, i, a)), n !== null && ((i = de()), Re(n, e, a, i), Cu(n, t, a));
  }
}
function Eu(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function Au(e, t) {
  Tn = Za = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Cu(e, t, n) {
  if ((n & 4194240) !== 0) {
    var a = t.lanes;
    (a &= e.pendingLanes), (n |= a), (t.lanes = n), ao(e, n);
  }
}
var Ja = {
    readContext: Ae,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useInsertionEffect: ie,
    useLayoutEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useMutableSource: ie,
    useSyncExternalStore: ie,
    useId: ie,
    unstable_isNewReconciler: !1,
  },
  Xc = {
    readContext: Ae,
    useCallback: function (e, t) {
      return (Le().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ae,
    useEffect: As,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Ca(4194308, 4, yu.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Ca(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ca(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Le();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var a = Le();
      return (
        (t = n !== void 0 ? n(t) : t),
        (a.memoizedState = a.baseState = t),
        (e = {pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t}),
        (a.queue = e),
        (e = e.dispatch = Qc.bind(null, K, e)),
        [a.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Le();
      return (e = {current: e}), (t.memoizedState = e);
    },
    useState: Es,
    useDebugValue: No,
    useDeferredValue: function (e) {
      return (Le().memoizedState = e);
    },
    useTransition: function () {
      var e = Es(!1),
        t = e[0];
      return (e = jc.bind(null, e[1])), (Le().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var a = K,
        i = Le();
      if (H) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(x(349));
        (zt & 30) !== 0 || mu(a, t, n);
      }
      i.memoizedState = n;
      var r = {value: n, getSnapshot: t};
      return (i.queue = r), As(gu.bind(null, a, r, e), [e]), (a.flags |= 2048), Zn(9, hu.bind(null, a, r, n, t), void 0, null), n;
    },
    useId: function () {
      var e = Le(),
        t = ee.identifierPrefix;
      if (H) {
        var n = Qe,
          a = je;
        (n = (a & ~(1 << (32 - Fe(a) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = qn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Kc++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  qc = {
    readContext: Ae,
    useCallback: ku,
    useContext: Ae,
    useEffect: Mo,
    useImperativeHandle: bu,
    useInsertionEffect: xu,
    useLayoutEffect: Su,
    useMemo: Pu,
    useReducer: ji,
    useRef: wu,
    useState: function () {
      return ji(Yn);
    },
    useDebugValue: No,
    useDeferredValue: function (e) {
      var t = Ce();
      return Mu(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = ji(Yn)[0],
        t = Ce().memoizedState;
      return [e, t];
    },
    useMutableSource: pu,
    useSyncExternalStore: fu,
    useId: Nu,
    unstable_isNewReconciler: !1,
  },
  Yc = {
    readContext: Ae,
    useCallback: ku,
    useContext: Ae,
    useEffect: Mo,
    useImperativeHandle: bu,
    useInsertionEffect: xu,
    useLayoutEffect: Su,
    useMemo: Pu,
    useReducer: Qi,
    useRef: wu,
    useState: function () {
      return Qi(Yn);
    },
    useDebugValue: No,
    useDeferredValue: function (e) {
      var t = Ce();
      return Y === null ? (t.memoizedState = e) : Mu(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Qi(Yn)[0],
        t = Ce().memoizedState;
      return [e, t];
    },
    useMutableSource: pu,
    useSyncExternalStore: fu,
    useId: Nu,
    unstable_isNewReconciler: !1,
  };
function ln(e, t) {
  try {
    var n = "",
      a = t;
    do (n += Pd(a)), (a = a.return);
    while (a);
    var i = n;
  } catch (r) {
    i =
      `
Error generating stack: ` +
      r.message +
      `
` +
      r.stack;
  }
  return {value: e, source: t, stack: i, digest: null};
}
function $i(e, t, n) {
  return {value: e, source: null, stack: n != null ? n : null, digest: t != null ? t : null};
}
function Gr(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Zc = typeof WeakMap == "function" ? WeakMap : Map;
function Gu(e, t, n) {
  (n = $e(-1, n)), (n.tag = 3), (n.payload = {element: null});
  var a = t.value;
  return (
    (n.callback = function () {
      ti || ((ti = !0), (Hr = a)), Gr(e, t);
    }),
    n
  );
}
function zu(e, t, n) {
  (n = $e(-1, n)), (n.tag = 3);
  var a = e.type.getDerivedStateFromError;
  if (typeof a == "function") {
    var i = t.value;
    (n.payload = function () {
      return a(i);
    }),
      (n.callback = function () {
        Gr(e, t);
      });
  }
  var r = e.stateNode;
  return (
    r !== null &&
      typeof r.componentDidCatch == "function" &&
      (n.callback = function () {
        Gr(e, t), typeof a != "function" && (pt === null ? (pt = new Set([this])) : pt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {componentStack: o !== null ? o : ""});
      }),
    n
  );
}
function Cs(e, t, n) {
  var a = e.pingCache;
  if (a === null) {
    a = e.pingCache = new Zc();
    var i = new Set();
    a.set(t, i);
  } else (i = a.get(t)), i === void 0 && ((i = new Set()), a.set(t, i));
  i.has(n) || (i.add(n), (e = pp.bind(null, e, t, n)), t.then(e, e));
}
function Gs(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function zs(e, t, n, a, i) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = $e(-1, 1)), (t.tag = 2), ct(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = i), e);
}
var Jc = Je.ReactCurrentOwner,
  me = !1;
function ue(e, t, n, a) {
  t.child = e === null ? du(t, null, n, a) : on(t, e.child, n, a);
}
function Ts(e, t, n, a, i) {
  n = n.render;
  var r = t.ref;
  return (
    en(t, i),
    (a = ko(e, t, n, a, r, i)),
    (n = Po()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Ze(e, t, i))
      : (H && n && po(t), (t.flags |= 1), ue(e, t, a, i), t.child)
  );
}
function Bs(e, t, n, a, i) {
  if (e === null) {
    var r = n.type;
    return typeof r == "function" && !Wo(r) && r.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = r), Tu(e, t, r, a, i))
      : ((e = Ba(n.type, null, a, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((r = e.child), (e.lanes & i) === 0)) {
    var o = r.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Un), n(o, a) && e.ref === t.ref)) return Ze(e, t, i);
  }
  return (t.flags |= 1), (e = mt(r, a)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Tu(e, t, n, a, i) {
  if (e !== null) {
    var r = e.memoizedProps;
    if (Un(r, a) && e.ref === t.ref)
      if (((me = !1), (t.pendingProps = a = r), (e.lanes & i) !== 0)) (e.flags & 131072) !== 0 && (me = !0);
      else return (t.lanes = e.lanes), Ze(e, t, i);
  }
  return zr(e, t, n, a, i);
}
function Bu(e, t, n) {
  var a = t.pendingProps,
    i = a.children,
    r = e !== null ? e.memoizedState : null;
  if (a.mode === "hidden")
    if ((t.mode & 1) === 0) (t.memoizedState = {baseLanes: 0, cachePool: null, transitions: null}), D(Xt, we), (we |= n);
    else {
      if ((n & 1073741824) === 0)
        return (
          (e = r !== null ? r.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {baseLanes: e, cachePool: null, transitions: null}),
          (t.updateQueue = null),
          D(Xt, we),
          (we |= e),
          null
        );
      (t.memoizedState = {baseLanes: 0, cachePool: null, transitions: null}), (a = r !== null ? r.baseLanes : n), D(Xt, we), (we |= a);
    }
  else r !== null ? ((a = r.baseLanes | n), (t.memoizedState = null)) : (a = n), D(Xt, we), (we |= a);
  return ue(e, t, i, n), t.child;
}
function Wu(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function zr(e, t, n, a, i) {
  var r = ge(n) ? Ct : se.current;
  return (
    (r = an(t, r)),
    en(t, i),
    (n = ko(e, t, n, a, r, i)),
    (a = Po()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Ze(e, t, i))
      : (H && a && po(t), (t.flags |= 1), ue(e, t, n, i), t.child)
  );
}
function Ws(e, t, n, a, i) {
  if (ge(n)) {
    var r = !0;
    Ka(t);
  } else r = !1;
  if ((en(t, i), t.stateNode === null)) Ga(e, t), lu(t, n, a), Cr(t, n, a, i), (a = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var u = o.context,
      m = n.contextType;
    typeof m == "object" && m !== null ? (m = Ae(m)) : ((m = ge(n) ? Ct : se.current), (m = an(t, m)));
    var v = n.getDerivedStateFromProps,
      _ = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    _ ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function") ||
      ((l !== a || u !== m) && Ms(t, o, a, m)),
      (nt = !1);
    var g = t.memoizedState;
    (o.state = g),
      qa(t, a, o, i),
      (u = t.memoizedState),
      l !== a || g !== u || he.current || nt
        ? (typeof v == "function" && (Ar(t, n, v, a), (u = t.memoizedState)),
          (l = nt || Ps(t, n, l, a, g, u, m))
            ? (_ ||
                (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = a), (t.memoizedState = u)),
          (o.props = a),
          (o.state = u),
          (o.context = m),
          (a = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (a = !1));
  } else {
    (o = t.stateNode),
      ou(e, t),
      (l = t.memoizedProps),
      (m = t.type === t.elementType ? l : Te(t.type, l)),
      (o.props = m),
      (_ = t.pendingProps),
      (g = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null ? (u = Ae(u)) : ((u = ge(n) ? Ct : se.current), (u = an(t, u)));
    var S = n.getDerivedStateFromProps;
    (v = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function") ||
      ((l !== _ || g !== u) && Ms(t, o, a, u)),
      (nt = !1),
      (g = t.memoizedState),
      (o.state = g),
      qa(t, a, o, i);
    var b = t.memoizedState;
    l !== _ || g !== b || he.current || nt
      ? (typeof S == "function" && (Ar(t, n, S, a), (b = t.memoizedState)),
        (m = nt || Ps(t, n, m, a, g, b, u) || !1)
          ? (v ||
              (typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(a, b, u),
              typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(a, b, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" || (l === e.memoizedProps && g === e.memoizedState) || (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" || (l === e.memoizedProps && g === e.memoizedState) || (t.flags |= 1024),
            (t.memoizedProps = a),
            (t.memoizedState = b)),
        (o.props = a),
        (o.state = b),
        (o.context = u),
        (a = m))
      : (typeof o.componentDidUpdate != "function" || (l === e.memoizedProps && g === e.memoizedState) || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || (l === e.memoizedProps && g === e.memoizedState) || (t.flags |= 1024),
        (a = !1));
  }
  return Tr(e, t, n, a, r, i);
}
function Tr(e, t, n, a, i, r) {
  Wu(e, t);
  var o = (t.flags & 128) !== 0;
  if (!a && !o) return i && xs(t, n, !1), Ze(e, t, r);
  (a = t.stateNode), (Jc.current = t);
  var l = o && typeof n.getDerivedStateFromError != "function" ? null : a.render();
  return (
    (t.flags |= 1),
    e !== null && o ? ((t.child = on(t, e.child, null, r)), (t.child = on(t, null, l, r))) : ue(e, t, l, r),
    (t.memoizedState = a.state),
    i && xs(t, n, !0),
    t.child
  );
}
function Fu(e) {
  var t = e.stateNode;
  t.pendingContext ? ws(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ws(e, t.context, !1), xo(e, t.containerInfo);
}
function Fs(e, t, n, a, i) {
  return rn(), mo(i), (t.flags |= 256), ue(e, t, n, a), t.child;
}
var Br = {dehydrated: null, treeContext: null, retryLane: 0};
function Wr(e) {
  return {baseLanes: e, cachePool: null, transitions: null};
}
function Ru(e, t, n) {
  var a = t.pendingProps,
    i = U.current,
    r = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? ((r = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
    D(U, i & 1),
    e === null)
  )
    return (
      Nr(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0 ? (t.lanes = 1) : e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824), null)
        : ((o = a.children),
          (e = a.fallback),
          r
            ? ((a = t.mode),
              (r = t.child),
              (o = {mode: "hidden", children: o}),
              (a & 1) === 0 && r !== null ? ((r.childLanes = 0), (r.pendingProps = o)) : (r = gi(o, a, 0, null)),
              (e = At(e, a, n, null)),
              (r.return = t),
              (e.return = t),
              (r.sibling = e),
              (t.child = r),
              (t.child.memoizedState = Wr(n)),
              (t.memoizedState = Br),
              e)
            : Eo(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null))) return ep(e, t, o, a, l, i, n);
  if (r) {
    (r = a.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var u = {mode: "hidden", children: a.children};
    return (
      (o & 1) === 0 && t.child !== i
        ? ((a = t.child), (a.childLanes = 0), (a.pendingProps = u), (t.deletions = null))
        : ((a = mt(i, u)), (a.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (r = mt(l, r)) : ((r = At(r, o, n, null)), (r.flags |= 2)),
      (r.return = t),
      (a.return = t),
      (a.sibling = r),
      (t.child = a),
      (a = r),
      (r = t.child),
      (o = e.child.memoizedState),
      (o = o === null ? Wr(n) : {baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions}),
      (r.memoizedState = o),
      (r.childLanes = e.childLanes & ~n),
      (t.memoizedState = Br),
      a
    );
  }
  return (
    (r = e.child),
    (e = r.sibling),
    (a = mt(r, {mode: "visible", children: a.children})),
    (t.mode & 1) === 0 && (a.lanes = n),
    (a.return = t),
    (a.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = a),
    (t.memoizedState = null),
    a
  );
}
function Eo(e, t) {
  return (t = gi({mode: "visible", children: t}, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function wa(e, t, n, a) {
  return a !== null && mo(a), on(t, e.child, null, n), (e = Eo(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function ep(e, t, n, a, i, r, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (a = $i(Error(x(422)))), wa(e, t, o, a))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((r = a.fallback),
        (i = t.mode),
        (a = gi({mode: "visible", children: a.children}, i, 0, null)),
        (r = At(r, i, o, null)),
        (r.flags |= 2),
        (a.return = t),
        (r.return = t),
        (a.sibling = r),
        (t.child = a),
        (t.mode & 1) !== 0 && on(t, e.child, null, o),
        (t.child.memoizedState = Wr(o)),
        (t.memoizedState = Br),
        r);
  if ((t.mode & 1) === 0) return wa(e, t, o, null);
  if (i.data === "$!") {
    if (((a = i.nextSibling && i.nextSibling.dataset), a)) var l = a.dgst;
    return (a = l), (r = Error(x(419))), (a = $i(r, a, void 0)), wa(e, t, o, a);
  }
  if (((l = (o & e.childLanes) !== 0), me || l)) {
    if (((a = ee), a !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = (i & (a.suspendedLanes | o)) !== 0 ? 0 : i), i !== 0 && i !== r.retryLane && ((r.retryLane = i), Ye(e, i), Re(a, e, i, -1));
    }
    return Bo(), (a = $i(Error(x(421)))), wa(e, t, o, a);
  }
  return i.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = fp.bind(null, e)), (i._reactRetry = t), null)
    : ((e = r.treeContext),
      (xe = dt(i.nextSibling)),
      (Se = t),
      (H = !0),
      (We = null),
      e !== null && ((Pe[Me++] = je), (Pe[Me++] = Qe), (Pe[Me++] = Gt), (je = e.id), (Qe = e.overflow), (Gt = t)),
      (t = Eo(t, a.children)),
      (t.flags |= 4096),
      t);
}
function Rs(e, t, n) {
  e.lanes |= t;
  var a = e.alternate;
  a !== null && (a.lanes |= t), Er(e.return, t, n);
}
function Xi(e, t, n, a, i) {
  var r = e.memoizedState;
  r === null
    ? (e.memoizedState = {isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: i})
    : ((r.isBackwards = t), (r.rendering = null), (r.renderingStartTime = 0), (r.last = a), (r.tail = n), (r.tailMode = i));
}
function Du(e, t, n) {
  var a = t.pendingProps,
    i = a.revealOrder,
    r = a.tail;
  if ((ue(e, t, a.children, n), (a = U.current), (a & 2) !== 0)) (a = (a & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Rs(e, n, t);
        else if (e.tag === 19) Rs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    a &= 1;
  }
  if ((D(U, a), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; ) (e = n.alternate), e !== null && Ya(e) === null && (i = n), (n = n.sibling);
        (n = i), n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)), Xi(t, !1, i, n, r);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ya(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Xi(t, !0, n, null, r);
        break;
      case "together":
        Xi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ga(e, t) {
  (t.mode & 1) === 0 && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ze(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Tt |= t.lanes), (n & t.childLanes) === 0)) return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (e = t.child, n = mt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = mt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function tp(e, t, n) {
  switch (t.tag) {
    case 3:
      Fu(t), rn();
      break;
    case 5:
      cu(t);
      break;
    case 1:
      ge(t.type) && Ka(t);
      break;
    case 4:
      xo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var a = t.type._context,
        i = t.memoizedProps.value;
      D($a, a._currentValue), (a._currentValue = i);
      break;
    case 13:
      if (((a = t.memoizedState), a !== null))
        return a.dehydrated !== null
          ? (D(U, U.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? Ru(e, t, n)
          : (D(U, U.current & 1), (e = Ze(e, t, n)), e !== null ? e.sibling : null);
      D(U, U.current & 1);
      break;
    case 19:
      if (((a = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (a) return Du(e, t, n);
        t.flags |= 128;
      }
      if (((i = t.memoizedState), i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)), D(U, U.current), a)) break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Bu(e, t, n);
  }
  return Ze(e, t, n);
}
var Ou, Fr, Lu, Hu;
Ou = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Fr = function () {};
Lu = function (e, t, n, a) {
  var i = e.memoizedProps;
  if (i !== a) {
    (e = t.stateNode), Nt(Ie.current);
    var r = null;
    switch (n) {
      case "input":
        (i = ir(e, i)), (a = ir(e, a)), (r = []);
        break;
      case "select":
        (i = j({}, i, {value: void 0})), (a = j({}, a, {value: void 0})), (r = []);
        break;
      case "textarea":
        (i = sr(e, i)), (a = sr(e, a)), (r = []);
        break;
      default:
        typeof i.onClick != "function" && typeof a.onClick == "function" && (e.onclick = Ia);
    }
    ur(n, a);
    var o;
    n = null;
    for (m in i)
      if (!a.hasOwnProperty(m) && i.hasOwnProperty(m) && i[m] != null)
        if (m === "style") {
          var l = i[m];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          m !== "dangerouslySetInnerHTML" &&
            m !== "children" &&
            m !== "suppressContentEditableWarning" &&
            m !== "suppressHydrationWarning" &&
            m !== "autoFocus" &&
            (Rn.hasOwnProperty(m) ? r || (r = []) : (r = r || []).push(m, null));
    for (m in a) {
      var u = a[m];
      if (((l = i != null ? i[m] : void 0), a.hasOwnProperty(m) && u !== l && (u != null || l != null)))
        if (m === "style")
          if (l) {
            for (o in l) !l.hasOwnProperty(o) || (u && u.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ""));
            for (o in u) u.hasOwnProperty(o) && l[o] !== u[o] && (n || (n = {}), (n[o] = u[o]));
          } else n || (r || (r = []), r.push(m, n)), (n = u);
        else
          m === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0), (l = l ? l.__html : void 0), u != null && l !== u && (r = r || []).push(m, u))
            : m === "children"
            ? (typeof u != "string" && typeof u != "number") || (r = r || []).push(m, "" + u)
            : m !== "suppressContentEditableWarning" &&
              m !== "suppressHydrationWarning" &&
              (Rn.hasOwnProperty(m)
                ? (u != null && m === "onScroll" && O("scroll", e), r || l === u || (r = []))
                : (r = r || []).push(m, u));
    }
    n && (r = r || []).push("style", n);
    var m = r;
    (t.updateQueue = m) && (t.flags |= 4);
  }
};
Hu = function (e, t, n, a) {
  n !== a && (t.flags |= 4);
};
function yn(e, t) {
  if (!H)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var a = null; n !== null; ) n.alternate !== null && (a = n), (n = n.sibling);
        a === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (a.sibling = null);
    }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    a = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes), (a |= i.subtreeFlags & 14680064), (a |= i.flags & 14680064), (i.return = e), (i = i.sibling);
  else
    for (i = e.child; i !== null; ) (n |= i.lanes | i.childLanes), (a |= i.subtreeFlags), (a |= i.flags), (i.return = e), (i = i.sibling);
  return (e.subtreeFlags |= a), (e.childLanes = n), t;
}
function np(e, t, n) {
  var a = t.pendingProps;
  switch ((fo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(t), null;
    case 1:
      return ge(t.type) && Ua(), re(t), null;
    case 3:
      return (
        (a = t.stateNode),
        sn(),
        L(he),
        L(se),
        yo(),
        a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
        (e === null || e.child === null) &&
          (_a(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), We !== null && (Ur(We), (We = null)))),
        Fr(e, t),
        re(t),
        null
      );
    case 5:
      So(t);
      var i = Nt(Xn.current);
      if (((n = t.type), e !== null && t.stateNode != null)) Lu(e, t, n, a, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!a) {
          if (t.stateNode === null) throw Error(x(166));
          return re(t), null;
        }
        if (((e = Nt(Ie.current)), _a(t))) {
          (a = t.stateNode), (n = t.type);
          var r = t.memoizedProps;
          switch (((a[He] = t), (a[Qn] = r), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              O("cancel", a), O("close", a);
              break;
            case "iframe":
            case "object":
            case "embed":
              O("load", a);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Nn.length; i++) O(Nn[i], a);
              break;
            case "source":
              O("error", a);
              break;
            case "img":
            case "image":
            case "link":
              O("error", a), O("load", a);
              break;
            case "details":
              O("toggle", a);
              break;
            case "input":
              jo(a, r), O("invalid", a);
              break;
            case "select":
              (a._wrapperState = {wasMultiple: !!r.multiple}), O("invalid", a);
              break;
            case "textarea":
              $o(a, r), O("invalid", a);
          }
          ur(n, r), (i = null);
          for (var o in r)
            if (r.hasOwnProperty(o)) {
              var l = r[o];
              o === "children"
                ? typeof l == "string"
                  ? a.textContent !== l && (r.suppressHydrationWarning !== !0 && ga(a.textContent, l, e), (i = ["children", l]))
                  : typeof l == "number" &&
                    a.textContent !== "" + l &&
                    (r.suppressHydrationWarning !== !0 && ga(a.textContent, l, e), (i = ["children", "" + l]))
                : Rn.hasOwnProperty(o) && l != null && o === "onScroll" && O("scroll", a);
            }
          switch (n) {
            case "input":
              la(a), Qo(a, r, !0);
              break;
            case "textarea":
              la(a), Xo(a);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof r.onClick == "function" && (a.onclick = Ia);
          }
          (a = i), (t.updateQueue = a), a !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ml(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof a.is == "string"
                ? (e = o.createElement(n, {is: a.is}))
                : ((e = o.createElement(n)), n === "select" && ((o = e), a.multiple ? (o.multiple = !0) : a.size && (o.size = a.size)))
              : (e = o.createElementNS(e, n)),
            (e[He] = t),
            (e[Qn] = a),
            Ou(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = dr(n, a)), n)) {
              case "dialog":
                O("cancel", e), O("close", e), (i = a);
                break;
              case "iframe":
              case "object":
              case "embed":
                O("load", e), (i = a);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Nn.length; i++) O(Nn[i], e);
                i = a;
                break;
              case "source":
                O("error", e), (i = a);
                break;
              case "img":
              case "image":
              case "link":
                O("error", e), O("load", e), (i = a);
                break;
              case "details":
                O("toggle", e), (i = a);
                break;
              case "input":
                jo(e, a), (i = ir(e, a)), O("invalid", e);
                break;
              case "option":
                i = a;
                break;
              case "select":
                (e._wrapperState = {wasMultiple: !!a.multiple}), (i = j({}, a, {value: void 0})), O("invalid", e);
                break;
              case "textarea":
                $o(e, a), (i = sr(e, a)), O("invalid", e);
                break;
              default:
                i = a;
            }
            ur(n, i), (l = i);
            for (r in l)
              if (l.hasOwnProperty(r)) {
                var u = l[r];
                r === "style"
                  ? _l(e, u)
                  : r === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && hl(e, u))
                  : r === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Dn(e, u)
                    : typeof u == "number" && Dn(e, "" + u)
                  : r !== "suppressContentEditableWarning" &&
                    r !== "suppressHydrationWarning" &&
                    r !== "autoFocus" &&
                    (Rn.hasOwnProperty(r) ? u != null && r === "onScroll" && O("scroll", e) : u != null && Yr(e, r, u, o));
              }
            switch (n) {
              case "input":
                la(e), Qo(e, a, !1);
                break;
              case "textarea":
                la(e), Xo(e);
                break;
              case "option":
                a.value != null && e.setAttribute("value", "" + ht(a.value));
                break;
              case "select":
                (e.multiple = !!a.multiple),
                  (r = a.value),
                  r != null ? qt(e, !!a.multiple, r, !1) : a.defaultValue != null && qt(e, !!a.multiple, a.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ia);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
          }
          a && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) Hu(e, t, e.memoizedProps, a);
      else {
        if (typeof a != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = Nt(Xn.current)), Nt(Ie.current), _a(t))) {
          if (((a = t.stateNode), (n = t.memoizedProps), (a[He] = t), (r = a.nodeValue !== n) && ((e = Se), e !== null)))
            switch (e.tag) {
              case 3:
                ga(a.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ga(a.nodeValue, n, (e.mode & 1) !== 0);
            }
          r && (t.flags |= 4);
        } else (a = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(a)), (a[He] = t), (t.stateNode = a);
      }
      return re(t), null;
    case 13:
      if ((L(U), (a = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
        if (H && xe !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) iu(), rn(), (t.flags |= 98560), (r = !1);
        else if (((r = _a(t)), a !== null && a.dehydrated !== null)) {
          if (e === null) {
            if (!r) throw Error(x(318));
            if (((r = t.memoizedState), (r = r !== null ? r.dehydrated : null), !r)) throw Error(x(317));
            r[He] = t;
          } else rn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
          re(t), (r = !1);
        } else We !== null && (Ur(We), (We = null)), (r = !0);
        if (!r) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = n), t)
        : ((a = a !== null),
          a !== (e !== null && e.memoizedState !== null) &&
            a &&
            ((t.child.flags |= 8192), (t.mode & 1) !== 0 && (e === null || (U.current & 1) !== 0 ? Z === 0 && (Z = 3) : Bo())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null);
    case 4:
      return sn(), Fr(e, t), e === null && Kn(t.stateNode.containerInfo), re(t), null;
    case 10:
      return _o(t.type._context), re(t), null;
    case 17:
      return ge(t.type) && Ua(), re(t), null;
    case 19:
      if ((L(U), (r = t.memoizedState), r === null)) return re(t), null;
      if (((a = (t.flags & 128) !== 0), (o = r.rendering), o === null))
        if (a) yn(r, !1);
        else {
          if (Z !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((o = Ya(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    yn(r, !1),
                    a = o.updateQueue,
                    a !== null && ((t.updateQueue = a), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    a = n,
                    n = t.child;
                  n !== null;

                )
                  (r = n),
                    (e = a),
                    (r.flags &= 14680066),
                    (o = r.alternate),
                    o === null
                      ? ((r.childLanes = 0),
                        (r.lanes = e),
                        (r.child = null),
                        (r.subtreeFlags = 0),
                        (r.memoizedProps = null),
                        (r.memoizedState = null),
                        (r.updateQueue = null),
                        (r.dependencies = null),
                        (r.stateNode = null))
                      : ((r.childLanes = o.childLanes),
                        (r.lanes = o.lanes),
                        (r.child = o.child),
                        (r.subtreeFlags = 0),
                        (r.deletions = null),
                        (r.memoizedProps = o.memoizedProps),
                        (r.memoizedState = o.memoizedState),
                        (r.updateQueue = o.updateQueue),
                        (r.type = o.type),
                        (e = o.dependencies),
                        (r.dependencies = e === null ? null : {lanes: e.lanes, firstContext: e.firstContext})),
                    (n = n.sibling);
                return D(U, (U.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          r.tail !== null && $() > un && ((t.flags |= 128), (a = !0), yn(r, !1), (t.lanes = 4194304));
        }
      else {
        if (!a)
          if (((e = Ya(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (a = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yn(r, !0),
              r.tail === null && r.tailMode === "hidden" && !o.alternate && !H)
            )
              return re(t), null;
          } else 2 * $() - r.renderingStartTime > un && n !== 1073741824 && ((t.flags |= 128), (a = !0), yn(r, !1), (t.lanes = 4194304));
        r.isBackwards ? ((o.sibling = t.child), (t.child = o)) : ((n = r.last), n !== null ? (n.sibling = o) : (t.child = o), (r.last = o));
      }
      return r.tail !== null
        ? ((t = r.tail),
          (r.rendering = t),
          (r.tail = t.sibling),
          (r.renderingStartTime = $()),
          (t.sibling = null),
          (n = U.current),
          D(U, a ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null);
    case 22:
    case 23:
      return (
        To(),
        (a = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== a && (t.flags |= 8192),
        a && (t.mode & 1) !== 0 ? (we & 1073741824) !== 0 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function ap(e, t) {
  switch ((fo(t), t.tag)) {
    case 1:
      return ge(t.type) && Ua(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return sn(), L(he), L(se), yo(), (e = t.flags), (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 5:
      return So(t), null;
    case 13:
      if ((L(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        rn();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return L(U), null;
    case 4:
      return sn(), null;
    case 10:
      return _o(t.type._context), null;
    case 22:
    case 23:
      return To(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xa = !1,
  oe = !1,
  ip = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function $t(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (a) {
        Q(e, t, a);
      }
    else n.current = null;
}
function Rr(e, t, n) {
  try {
    n();
  } catch (a) {
    Q(e, t, a);
  }
}
var Ds = !1;
function rp(e, t) {
  if (((xr = La), (e = Kl()), co(e))) {
    if ("selectionStart" in e) var n = {start: e.selectionStart, end: e.selectionEnd};
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var a = n.getSelection && n.getSelection();
        if (a && a.rangeCount !== 0) {
          n = a.anchorNode;
          var i = a.anchorOffset,
            r = a.focusNode;
          a = a.focusOffset;
          try {
            n.nodeType, r.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            u = -1,
            m = 0,
            v = 0,
            _ = e,
            g = null;
          t: for (;;) {
            for (
              var S;
              _ !== n || (i !== 0 && _.nodeType !== 3) || (l = o + i),
                _ !== r || (a !== 0 && _.nodeType !== 3) || (u = o + a),
                _.nodeType === 3 && (o += _.nodeValue.length),
                (S = _.firstChild) !== null;

            )
              (g = _), (_ = S);
            for (;;) {
              if (_ === e) break t;
              if ((g === n && ++m === i && (l = o), g === r && ++v === a && (u = o), (S = _.nextSibling) !== null)) break;
              (_ = g), (g = _.parentNode);
            }
            _ = S;
          }
          n = l === -1 || u === -1 ? null : {start: l, end: u};
        } else n = null;
      }
    n = n || {start: 0, end: 0};
  } else n = null;
  for (Sr = {focusedElem: e, selectionRange: n}, La = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var b = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (b !== null) {
                  var k = b.memoizedProps,
                    R = b.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Te(t.type, k), R);
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1 ? (h.textContent = "") : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (w) {
          Q(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (b = Ds), (Ds = !1), b;
}
function Bn(e, t, n) {
  var a = t.updateQueue;
  if (((a = a !== null ? a.lastEffect : null), a !== null)) {
    var i = (a = a.next);
    do {
      if ((i.tag & e) === e) {
        var r = i.destroy;
        (i.destroy = void 0), r !== void 0 && Rr(t, n, r);
      }
      i = i.next;
    } while (i !== a);
  }
}
function mi(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var a = n.create;
        n.destroy = a();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Dr(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Vu(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Vu(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[He], delete t[Qn], delete t[kr], delete t[Hc], delete t[Vc])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Iu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Os(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Iu(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Or(e, t, n) {
  var a = e.tag;
  if (a === 5 || a === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ia));
  else if (a !== 4 && ((e = e.child), e !== null)) for (Or(e, t, n), e = e.sibling; e !== null; ) Or(e, t, n), (e = e.sibling);
}
function Lr(e, t, n) {
  var a = e.tag;
  if (a === 5 || a === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (a !== 4 && ((e = e.child), e !== null)) for (Lr(e, t, n), e = e.sibling; e !== null; ) Lr(e, t, n), (e = e.sibling);
}
var te = null,
  Be = !1;
function et(e, t, n) {
  for (n = n.child; n !== null; ) Uu(e, t, n), (n = n.sibling);
}
function Uu(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == "function")
    try {
      Ve.onCommitFiberUnmount(oi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      oe || $t(n, t);
    case 6:
      var a = te,
        i = Be;
      (te = null),
        et(e, t, n),
        (te = a),
        (Be = i),
        te !== null &&
          (Be
            ? ((e = te), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null &&
        (Be
          ? ((e = te), (n = n.stateNode), e.nodeType === 8 ? Vi(e.parentNode, n) : e.nodeType === 1 && Vi(e, n), Vn(e))
          : Vi(te, n.stateNode));
      break;
    case 4:
      (a = te), (i = Be), (te = n.stateNode.containerInfo), (Be = !0), et(e, t, n), (te = a), (Be = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!oe && ((a = n.updateQueue), a !== null && ((a = a.lastEffect), a !== null))) {
        i = a = a.next;
        do {
          var r = i,
            o = r.destroy;
          (r = r.tag), o !== void 0 && ((r & 2) !== 0 || (r & 4) !== 0) && Rr(n, t, o), (i = i.next);
        } while (i !== a);
      }
      et(e, t, n);
      break;
    case 1:
      if (!oe && ($t(n, t), (a = n.stateNode), typeof a.componentWillUnmount == "function"))
        try {
          (a.props = n.memoizedProps), (a.state = n.memoizedState), a.componentWillUnmount();
        } catch (l) {
          Q(n, t, l);
        }
      et(e, t, n);
      break;
    case 21:
      et(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((oe = (a = oe) || n.memoizedState !== null), et(e, t, n), (oe = a)) : et(e, t, n);
      break;
    default:
      et(e, t, n);
  }
}
function Ls(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ip()),
      t.forEach(function (a) {
        var i = mp.bind(null, e, a);
        n.has(a) || (n.add(a), a.then(i, i));
      });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var a = 0; a < n.length; a++) {
      var i = n[a];
      try {
        var r = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (te = l.stateNode), (Be = !1);
              break e;
            case 3:
              (te = l.stateNode.containerInfo), (Be = !0);
              break e;
            case 4:
              (te = l.stateNode.containerInfo), (Be = !0);
              break e;
          }
          l = l.return;
        }
        if (te === null) throw Error(x(160));
        Uu(r, o, i), (te = null), (Be = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (m) {
        Q(i, t, m);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ku(t, e), (t = t.sibling);
}
function Ku(e, t) {
  var n = e.alternate,
    a = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), Oe(e), a & 4)) {
        try {
          Bn(3, e, e.return), mi(3, e);
        } catch (k) {
          Q(e, e.return, k);
        }
        try {
          Bn(5, e, e.return);
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      break;
    case 1:
      ze(t, e), Oe(e), a & 512 && n !== null && $t(n, n.return);
      break;
    case 5:
      if ((ze(t, e), Oe(e), a & 512 && n !== null && $t(n, n.return), e.flags & 32)) {
        var i = e.stateNode;
        try {
          Dn(i, "");
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      if (a & 4 && ((i = e.stateNode), i != null)) {
        var r = e.memoizedProps,
          o = n !== null ? n.memoizedProps : r,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === "input" && r.type === "radio" && r.name != null && pl(i, r), dr(l, o);
            var m = dr(l, r);
            for (o = 0; o < u.length; o += 2) {
              var v = u[o],
                _ = u[o + 1];
              v === "style" ? _l(i, _) : v === "dangerouslySetInnerHTML" ? hl(i, _) : v === "children" ? Dn(i, _) : Yr(i, v, _, m);
            }
            switch (l) {
              case "input":
                rr(i, r);
                break;
              case "textarea":
                fl(i, r);
                break;
              case "select":
                var g = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!r.multiple;
                var S = r.value;
                S != null
                  ? qt(i, !!r.multiple, S, !1)
                  : g !== !!r.multiple &&
                    (r.defaultValue != null ? qt(i, !!r.multiple, r.defaultValue, !0) : qt(i, !!r.multiple, r.multiple ? [] : "", !1));
            }
            i[Qn] = r;
          } catch (k) {
            Q(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((ze(t, e), Oe(e), a & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (i = e.stateNode), (r = e.memoizedProps);
        try {
          i.nodeValue = r;
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      break;
    case 3:
      if ((ze(t, e), Oe(e), a & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Vn(t.containerInfo);
        } catch (k) {
          Q(e, e.return, k);
        }
      break;
    case 4:
      ze(t, e), Oe(e);
      break;
    case 13:
      ze(t, e),
        Oe(e),
        (i = e.child),
        i.flags & 8192 &&
          ((r = i.memoizedState !== null),
          (i.stateNode.isHidden = r),
          !r || (i.alternate !== null && i.alternate.memoizedState !== null) || (Go = $())),
        a & 4 && Ls(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null), e.mode & 1 ? ((oe = (m = oe) || v), ze(t, e), (oe = m)) : ze(t, e), Oe(e), a & 8192)
      ) {
        if (((m = e.memoizedState !== null), (e.stateNode.isHidden = m) && !v && (e.mode & 1) !== 0))
          for (N = e, v = e.child; v !== null; ) {
            for (_ = N = v; N !== null; ) {
              switch (((g = N), (S = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Bn(4, g, g.return);
                  break;
                case 1:
                  $t(g, g.return);
                  var b = g.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    (a = g), (n = g.return);
                    try {
                      (t = a), (b.props = t.memoizedProps), (b.state = t.memoizedState), b.componentWillUnmount();
                    } catch (k) {
                      Q(a, n, k);
                    }
                  }
                  break;
                case 5:
                  $t(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    Vs(_);
                    continue;
                  }
              }
              S !== null ? ((S.return = g), (N = S)) : Vs(_);
            }
            v = v.sibling;
          }
        e: for (v = null, _ = e; ; ) {
          if (_.tag === 5) {
            if (v === null) {
              v = _;
              try {
                (i = _.stateNode),
                  m
                    ? ((r = i.style),
                      typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : (r.display = "none"))
                    : ((l = _.stateNode),
                      (u = _.memoizedProps.style),
                      (o = u != null && u.hasOwnProperty("display") ? u.display : null),
                      (l.style.display = gl("display", o)));
              } catch (k) {
                Q(e, e.return, k);
              }
            }
          } else if (_.tag === 6) {
            if (v === null)
              try {
                _.stateNode.nodeValue = m ? "" : _.memoizedProps;
              } catch (k) {
                Q(e, e.return, k);
              }
          } else if (((_.tag !== 22 && _.tag !== 23) || _.memoizedState === null || _ === e) && _.child !== null) {
            (_.child.return = _), (_ = _.child);
            continue;
          }
          if (_ === e) break e;
          for (; _.sibling === null; ) {
            if (_.return === null || _.return === e) break e;
            v === _ && (v = null), (_ = _.return);
          }
          v === _ && (v = null), (_.sibling.return = _.return), (_ = _.sibling);
        }
      }
      break;
    case 19:
      ze(t, e), Oe(e), a & 4 && Ls(e);
      break;
    case 21:
      break;
    default:
      ze(t, e), Oe(e);
  }
}
function Oe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Iu(n)) {
            var a = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (a.tag) {
        case 5:
          var i = a.stateNode;
          a.flags & 32 && (Dn(i, ""), (a.flags &= -33));
          var r = Os(e);
          Lr(e, r, i);
          break;
        case 3:
        case 4:
          var o = a.stateNode.containerInfo,
            l = Os(e);
          Or(e, l, o);
          break;
        default:
          throw Error(x(161));
      }
    } catch (u) {
      Q(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function op(e, t, n) {
  (N = e), ju(e);
}
function ju(e, t, n) {
  for (var a = (e.mode & 1) !== 0; N !== null; ) {
    var i = N,
      r = i.child;
    if (i.tag === 22 && a) {
      var o = i.memoizedState !== null || xa;
      if (!o) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || oe;
        l = xa;
        var m = oe;
        if (((xa = o), (oe = u) && !m))
          for (N = i; N !== null; )
            (o = N), (u = o.child), o.tag === 22 && o.memoizedState !== null ? Is(i) : u !== null ? ((u.return = o), (N = u)) : Is(i);
        for (; r !== null; ) (N = r), ju(r), (r = r.sibling);
        (N = i), (xa = l), (oe = m);
      }
      Hs(e);
    } else (i.subtreeFlags & 8772) !== 0 && r !== null ? ((r.return = i), (N = r)) : Hs(e);
  }
}
function Hs(e) {
  for (; N !== null; ) {
    var t = N;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              oe || mi(5, t);
              break;
            case 1:
              var a = t.stateNode;
              if (t.flags & 4 && !oe)
                if (n === null) a.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : Te(t.type, n.memoizedProps);
                  a.componentDidUpdate(i, n.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
                }
              var r = t.updateQueue;
              r !== null && ks(t, r, a);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ks(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var m = t.alternate;
                if (m !== null) {
                  var v = m.memoizedState;
                  if (v !== null) {
                    var _ = v.dehydrated;
                    _ !== null && Vn(_);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(x(163));
          }
        oe || (t.flags & 512 && Dr(t));
      } catch (g) {
        Q(t, t.return, g);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Vs(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Is(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            mi(4, t);
          } catch (u) {
            Q(t, n, u);
          }
          break;
        case 1:
          var a = t.stateNode;
          if (typeof a.componentDidMount == "function") {
            var i = t.return;
            try {
              a.componentDidMount();
            } catch (u) {
              Q(t, i, u);
            }
          }
          var r = t.return;
          try {
            Dr(t);
          } catch (u) {
            Q(t, r, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Dr(t);
          } catch (u) {
            Q(t, o, u);
          }
      }
    } catch (u) {
      Q(t, t.return, u);
    }
    if (t === e) {
      N = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (N = l);
      break;
    }
    N = t.return;
  }
}
var sp = Math.ceil,
  ei = Je.ReactCurrentDispatcher,
  Ao = Je.ReactCurrentOwner,
  Ee = Je.ReactCurrentBatchConfig,
  W = 0,
  ee = null,
  q = null,
  ne = 0,
  we = 0,
  Xt = vt(0),
  Z = 0,
  Jn = null,
  Tt = 0,
  hi = 0,
  Co = 0,
  Wn = null,
  fe = null,
  Go = 0,
  un = 1 / 0,
  Ue = null,
  ti = !1,
  Hr = null,
  pt = null,
  Sa = !1,
  ot = null,
  ni = 0,
  Fn = 0,
  Vr = null,
  za = -1,
  Ta = 0;
function de() {
  return (W & 6) !== 0 ? $() : za !== -1 ? za : (za = $());
}
function ft(e) {
  return (e.mode & 1) === 0
    ? 1
    : (W & 2) !== 0 && ne !== 0
    ? ne & -ne
    : Uc.transition !== null
    ? (Ta === 0 && (Ta = Al()), Ta)
    : ((e = F), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Fl(e.type))), e);
}
function Re(e, t, n, a) {
  if (50 < Fn) throw ((Fn = 0), (Vr = null), Error(x(185)));
  ta(e, n, a),
    ((W & 2) === 0 || e !== ee) &&
      (e === ee && ((W & 2) === 0 && (hi |= n), Z === 4 && it(e, ne)),
      _e(e, a),
      n === 1 && W === 0 && (t.mode & 1) === 0 && ((un = $() + 500), ci && wt()));
}
function _e(e, t) {
  var n = e.callbackNode;
  Ud(e, t);
  var a = Oa(e, e === ee ? ne : 0);
  if (a === 0) n !== null && Zo(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = a & -a), e.callbackPriority !== t)) {
    if ((n != null && Zo(n), t === 1))
      e.tag === 0 ? Ic(Us.bind(null, e)) : tu(Us.bind(null, e)),
        Oc(function () {
          (W & 6) === 0 && wt();
        }),
        (n = null);
    else {
      switch (Cl(a)) {
        case 1:
          n = no;
          break;
        case 4:
          n = Nl;
          break;
        case 16:
          n = Da;
          break;
        case 536870912:
          n = El;
          break;
        default:
          n = Da;
      }
      n = ed(n, Qu.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Qu(e, t) {
  if (((za = -1), (Ta = 0), (W & 6) !== 0)) throw Error(x(327));
  var n = e.callbackNode;
  if (tn() && e.callbackNode !== n) return null;
  var a = Oa(e, e === ee ? ne : 0);
  if (a === 0) return null;
  if ((a & 30) !== 0 || (a & e.expiredLanes) !== 0 || t) t = ai(e, a);
  else {
    t = a;
    var i = W;
    W |= 2;
    var r = Xu();
    (ee !== e || ne !== t) && ((Ue = null), (un = $() + 500), Et(e, t));
    do
      try {
        dp();
        break;
      } catch (l) {
        $u(e, l);
      }
    while (1);
    go(), (ei.current = r), (W = i), q !== null ? (t = 0) : ((ee = null), (ne = 0), (t = Z));
  }
  if (t !== 0) {
    if ((t === 2 && ((i = hr(e)), i !== 0 && ((a = i), (t = Ir(e, i)))), t === 1)) throw ((n = Jn), Et(e, 0), it(e, a), _e(e, $()), n);
    if (t === 6) it(e, a);
    else {
      if (
        ((i = e.current.alternate),
        (a & 30) === 0 && !lp(i) && ((t = ai(e, a)), t === 2 && ((r = hr(e)), r !== 0 && ((a = r), (t = Ir(e, r)))), t === 1))
      )
        throw ((n = Jn), Et(e, 0), it(e, a), _e(e, $()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = a), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          kt(e, fe, Ue);
          break;
        case 3:
          if ((it(e, a), (a & 130023424) === a && ((t = Go + 500 - $()), 10 < t))) {
            if (Oa(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & a) !== a)) {
              de(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = br(kt.bind(null, e, fe, Ue), t);
            break;
          }
          kt(e, fe, Ue);
          break;
        case 4:
          if ((it(e, a), (a & 4194240) === a)) break;
          for (t = e.eventTimes, i = -1; 0 < a; ) {
            var o = 31 - Fe(a);
            (r = 1 << o), (o = t[o]), o > i && (i = o), (a &= ~r);
          }
          if (
            ((a = i),
            (a = $() - a),
            (a =
              (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * sp(a / 1960)) -
              a),
            10 < a)
          ) {
            e.timeoutHandle = br(kt.bind(null, e, fe, Ue), a);
            break;
          }
          kt(e, fe, Ue);
          break;
        case 5:
          kt(e, fe, Ue);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return _e(e, $()), e.callbackNode === n ? Qu.bind(null, e) : null;
}
function Ir(e, t) {
  var n = Wn;
  return (
    e.current.memoizedState.isDehydrated && (Et(e, t).flags |= 256), (e = ai(e, t)), e !== 2 && ((t = fe), (fe = n), t !== null && Ur(t)), e
  );
}
function Ur(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function lp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var a = 0; a < n.length; a++) {
          var i = n[a],
            r = i.getSnapshot;
          i = i.value;
          try {
            if (!De(r(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function it(e, t) {
  for (t &= ~Co, t &= ~hi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Fe(t),
      a = 1 << n;
    (e[n] = -1), (t &= ~a);
  }
}
function Us(e) {
  if ((W & 6) !== 0) throw Error(x(327));
  tn();
  var t = Oa(e, 0);
  if ((t & 1) === 0) return _e(e, $()), null;
  var n = ai(e, t);
  if (e.tag !== 0 && n === 2) {
    var a = hr(e);
    a !== 0 && ((t = a), (n = Ir(e, a)));
  }
  if (n === 1) throw ((n = Jn), Et(e, 0), it(e, t), _e(e, $()), n);
  if (n === 6) throw Error(x(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), kt(e, fe, Ue), _e(e, $()), null;
}
function zo(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    (W = n), W === 0 && ((un = $() + 500), ci && wt());
  }
}
function Bt(e) {
  ot !== null && ot.tag === 0 && (W & 6) === 0 && tn();
  var t = W;
  W |= 1;
  var n = Ee.transition,
    a = F;
  try {
    if (((Ee.transition = null), (F = 1), e)) return e();
  } finally {
    (F = a), (Ee.transition = n), (W = t), (W & 6) === 0 && wt();
  }
}
function To() {
  (we = Xt.current), L(Xt);
}
function Et(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Dc(n)), q !== null))
    for (n = q.return; n !== null; ) {
      var a = n;
      switch ((fo(a), a.tag)) {
        case 1:
          (a = a.type.childContextTypes), a != null && Ua();
          break;
        case 3:
          sn(), L(he), L(se), yo();
          break;
        case 5:
          So(a);
          break;
        case 4:
          sn();
          break;
        case 13:
          L(U);
          break;
        case 19:
          L(U);
          break;
        case 10:
          _o(a.type._context);
          break;
        case 22:
        case 23:
          To();
      }
      n = n.return;
    }
  if (((ee = e), (q = e = mt(e.current, null)), (ne = we = t), (Z = 0), (Jn = null), (Co = hi = Tt = 0), (fe = Wn = null), Mt !== null)) {
    for (t = 0; t < Mt.length; t++)
      if (((n = Mt[t]), (a = n.interleaved), a !== null)) {
        n.interleaved = null;
        var i = a.next,
          r = n.pending;
        if (r !== null) {
          var o = r.next;
          (r.next = i), (a.next = o);
        }
        n.pending = a;
      }
    Mt = null;
  }
  return e;
}
function $u(e, t) {
  do {
    var n = q;
    try {
      if ((go(), (Aa.current = Ja), Za)) {
        for (var a = K.memoizedState; a !== null; ) {
          var i = a.queue;
          i !== null && (i.pending = null), (a = a.next);
        }
        Za = !1;
      }
      if (((zt = 0), (J = Y = K = null), (Tn = !1), (qn = 0), (Ao.current = null), n === null || n.return === null)) {
        (Z = 1), (Jn = t), (q = null);
        break;
      }
      e: {
        var r = e,
          o = n.return,
          l = n,
          u = t;
        if (((t = ne), (l.flags |= 32768), u !== null && typeof u == "object" && typeof u.then == "function")) {
          var m = u,
            v = l,
            _ = v.tag;
          if ((v.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
            var g = v.alternate;
            g
              ? ((v.updateQueue = g.updateQueue), (v.memoizedState = g.memoizedState), (v.lanes = g.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var S = Gs(o);
          if (S !== null) {
            (S.flags &= -257), zs(S, o, l, r, t), S.mode & 1 && Cs(r, m, t), (t = S), (u = m);
            var b = t.updateQueue;
            if (b === null) {
              var k = new Set();
              k.add(u), (t.updateQueue = k);
            } else b.add(u);
            break e;
          } else {
            if ((t & 1) === 0) {
              Cs(r, m, t), Bo();
              break e;
            }
            u = Error(x(426));
          }
        } else if (H && l.mode & 1) {
          var R = Gs(o);
          if (R !== null) {
            (R.flags & 65536) === 0 && (R.flags |= 256), zs(R, o, l, r, t), mo(ln(u, l));
            break e;
          }
        }
        (r = u = ln(u, l)), Z !== 4 && (Z = 2), Wn === null ? (Wn = [r]) : Wn.push(r), (r = o);
        do {
          switch (r.tag) {
            case 3:
              (r.flags |= 65536), (t &= -t), (r.lanes |= t);
              var f = Gu(r, u, t);
              bs(r, f);
              break e;
            case 1:
              l = u;
              var c = r.type,
                h = r.stateNode;
              if (
                (r.flags & 128) === 0 &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (h !== null && typeof h.componentDidCatch == "function" && (pt === null || !pt.has(h))))
              ) {
                (r.flags |= 65536), (t &= -t), (r.lanes |= t);
                var w = zu(r, l, t);
                bs(r, w);
                break e;
              }
          }
          r = r.return;
        } while (r !== null);
      }
      Yu(n);
    } catch (P) {
      (t = P), q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Xu() {
  var e = ei.current;
  return (ei.current = Ja), e === null ? Ja : e;
}
function Bo() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4), ee === null || ((Tt & 268435455) === 0 && (hi & 268435455) === 0) || it(ee, ne);
}
function ai(e, t) {
  var n = W;
  W |= 2;
  var a = Xu();
  (ee !== e || ne !== t) && ((Ue = null), Et(e, t));
  do
    try {
      up();
      break;
    } catch (i) {
      $u(e, i);
    }
  while (1);
  if ((go(), (W = n), (ei.current = a), q !== null)) throw Error(x(261));
  return (ee = null), (ne = 0), Z;
}
function up() {
  for (; q !== null; ) qu(q);
}
function dp() {
  for (; q !== null && !Wd(); ) qu(q);
}
function qu(e) {
  var t = Ju(e.alternate, e, we);
  (e.memoizedProps = e.pendingProps), t === null ? Yu(e) : (q = t), (Ao.current = null);
}
function Yu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = np(n, t, we)), n !== null)) {
        q = n;
        return;
      }
    } else {
      if (((n = ap(n, t)), n !== null)) {
        (n.flags &= 32767), (q = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Z = 6), (q = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function kt(e, t, n) {
  var a = F,
    i = Ee.transition;
  try {
    (Ee.transition = null), (F = 1), cp(e, t, n, a);
  } finally {
    (Ee.transition = i), (F = a);
  }
  return null;
}
function cp(e, t, n, a) {
  do tn();
  while (ot !== null);
  if ((W & 6) !== 0) throw Error(x(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var r = n.lanes | n.childLanes;
  if (
    (Kd(e, r),
    e === ee && ((q = ee = null), (ne = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      Sa ||
      ((Sa = !0),
      ed(Da, function () {
        return tn(), null;
      })),
    (r = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || r)
  ) {
    (r = Ee.transition), (Ee.transition = null);
    var o = F;
    F = 1;
    var l = W;
    (W |= 4),
      (Ao.current = null),
      rp(e, n),
      Ku(n, e),
      Gc(Sr),
      (La = !!xr),
      (Sr = xr = null),
      (e.current = n),
      op(n),
      Fd(),
      (W = l),
      (F = o),
      (Ee.transition = r);
  } else e.current = n;
  if ((Sa && ((Sa = !1), (ot = e), (ni = i)), (r = e.pendingLanes), r === 0 && (pt = null), Od(n.stateNode), _e(e, $()), t !== null))
    for (a = e.onRecoverableError, n = 0; n < t.length; n++) (i = t[n]), a(i.value, {componentStack: i.stack, digest: i.digest});
  if (ti) throw ((ti = !1), (e = Hr), (Hr = null), e);
  return (
    (ni & 1) !== 0 && e.tag !== 0 && tn(),
    (r = e.pendingLanes),
    (r & 1) !== 0 ? (e === Vr ? Fn++ : ((Fn = 0), (Vr = e))) : (Fn = 0),
    wt(),
    null
  );
}
function tn() {
  if (ot !== null) {
    var e = Cl(ni),
      t = Ee.transition,
      n = F;
    try {
      if (((Ee.transition = null), (F = 16 > e ? 16 : e), ot === null)) var a = !1;
      else {
        if (((e = ot), (ot = null), (ni = 0), (W & 6) !== 0)) throw Error(x(331));
        var i = W;
        for (W |= 4, N = e.current; N !== null; ) {
          var r = N,
            o = r.child;
          if ((N.flags & 16) !== 0) {
            var l = r.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var m = l[u];
                for (N = m; N !== null; ) {
                  var v = N;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bn(8, v, r);
                  }
                  var _ = v.child;
                  if (_ !== null) (_.return = v), (N = _);
                  else
                    for (; N !== null; ) {
                      v = N;
                      var g = v.sibling,
                        S = v.return;
                      if ((Vu(v), v === m)) {
                        N = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = S), (N = g);
                        break;
                      }
                      N = S;
                    }
                }
              }
              var b = r.alternate;
              if (b !== null) {
                var k = b.child;
                if (k !== null) {
                  b.child = null;
                  do {
                    var R = k.sibling;
                    (k.sibling = null), (k = R);
                  } while (k !== null);
                }
              }
              N = r;
            }
          }
          if ((r.subtreeFlags & 2064) !== 0 && o !== null) (o.return = r), (N = o);
          else
            e: for (; N !== null; ) {
              if (((r = N), (r.flags & 2048) !== 0))
                switch (r.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Bn(9, r, r.return);
                }
              var f = r.sibling;
              if (f !== null) {
                (f.return = r.return), (N = f);
                break e;
              }
              N = r.return;
            }
        }
        var c = e.current;
        for (N = c; N !== null; ) {
          o = N;
          var h = o.child;
          if ((o.subtreeFlags & 2064) !== 0 && h !== null) (h.return = o), (N = h);
          else
            e: for (o = c; N !== null; ) {
              if (((l = N), (l.flags & 2048) !== 0))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mi(9, l);
                  }
                } catch (P) {
                  Q(l, l.return, P);
                }
              if (l === o) {
                N = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), (N = w);
                break e;
              }
              N = l.return;
            }
        }
        if (((W = i), wt(), Ve && typeof Ve.onPostCommitFiberRoot == "function"))
          try {
            Ve.onPostCommitFiberRoot(oi, e);
          } catch {}
        a = !0;
      }
      return a;
    } finally {
      (F = n), (Ee.transition = t);
    }
  }
  return !1;
}
function Ks(e, t, n) {
  (t = ln(n, t)), (t = Gu(e, t, 1)), (e = ct(e, t, 1)), (t = de()), e !== null && (ta(e, 1, t), _e(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) Ks(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ks(t, e, n);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof a.componentDidCatch == "function" && (pt === null || !pt.has(a)))
        ) {
          (e = ln(n, e)), (e = zu(t, e, 1)), (t = ct(t, e, 1)), (e = de()), t !== null && (ta(t, 1, e), _e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function pp(e, t, n) {
  var a = e.pingCache;
  a !== null && a.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e && (ne & n) === n && (Z === 4 || (Z === 3 && (ne & 130023424) === ne && 500 > $() - Go) ? Et(e, 0) : (Co |= n)),
    _e(e, t);
}
function Zu(e, t) {
  t === 0 && ((e.mode & 1) === 0 ? (t = 1) : ((t = ca), (ca <<= 1), (ca & 130023424) === 0 && (ca = 4194304)));
  var n = de();
  (e = Ye(e, t)), e !== null && (ta(e, t, n), _e(e, n));
}
function fp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Zu(e, n);
}
function mp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var a = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      a = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  a !== null && a.delete(t), Zu(e, n);
}
var Ju;
Ju = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || he.current) me = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return (me = !1), tp(e, t, n);
      me = (e.flags & 131072) !== 0;
    }
  else (me = !1), H && (t.flags & 1048576) !== 0 && nu(t, Qa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var a = t.type;
      Ga(e, t), (e = t.pendingProps);
      var i = an(t, se.current);
      en(t, n), (i = ko(null, t, a, e, i, n));
      var r = Po();
      return (
        (t.flags |= 1),
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ge(a) ? ((r = !0), Ka(t)) : (r = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            wo(t),
            (i.updater = pi),
            (t.stateNode = i),
            (i._reactInternals = t),
            Cr(t, a, e, n),
            (t = Tr(null, t, a, !0, r, n)))
          : ((t.tag = 0), H && r && po(t), ue(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      a = t.elementType;
      e: {
        switch (
          (Ga(e, t), (e = t.pendingProps), (i = a._init), (a = i(a._payload)), (t.type = a), (i = t.tag = gp(a)), (e = Te(a, e)), i)
        ) {
          case 0:
            t = zr(null, t, a, e, n);
            break e;
          case 1:
            t = Ws(null, t, a, e, n);
            break e;
          case 11:
            t = Ts(null, t, a, e, n);
            break e;
          case 14:
            t = Bs(null, t, a, Te(a.type, e), n);
            break e;
        }
        throw Error(x(306, a, ""));
      }
      return t;
    case 0:
      return (a = t.type), (i = t.pendingProps), (i = t.elementType === a ? i : Te(a, i)), zr(e, t, a, i, n);
    case 1:
      return (a = t.type), (i = t.pendingProps), (i = t.elementType === a ? i : Te(a, i)), Ws(e, t, a, i, n);
    case 3:
      e: {
        if ((Fu(t), e === null)) throw Error(x(387));
        (a = t.pendingProps), (r = t.memoizedState), (i = r.element), ou(e, t), qa(t, a, null, n);
        var o = t.memoizedState;
        if (((a = o.element), r.isDehydrated))
          if (
            ((r = {
              element: a,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = r),
            (t.memoizedState = r),
            t.flags & 256)
          ) {
            (i = ln(Error(x(423)), t)), (t = Fs(e, t, a, n, i));
            break e;
          } else if (a !== i) {
            (i = ln(Error(x(424)), t)), (t = Fs(e, t, a, n, i));
            break e;
          } else
            for (xe = dt(t.stateNode.containerInfo.firstChild), Se = t, H = !0, We = null, n = du(t, null, a, n), t.child = n; n; )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((rn(), a === i)) {
            t = Ze(e, t, n);
            break e;
          }
          ue(e, t, a, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        cu(t),
        e === null && Nr(t),
        (a = t.type),
        (i = t.pendingProps),
        (r = e !== null ? e.memoizedProps : null),
        (o = i.children),
        yr(a, i) ? (o = null) : r !== null && yr(a, r) && (t.flags |= 32),
        Wu(e, t),
        ue(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Nr(t), null;
    case 13:
      return Ru(e, t, n);
    case 4:
      return xo(t, t.stateNode.containerInfo), (a = t.pendingProps), e === null ? (t.child = on(t, null, a, n)) : ue(e, t, a, n), t.child;
    case 11:
      return (a = t.type), (i = t.pendingProps), (i = t.elementType === a ? i : Te(a, i)), Ts(e, t, a, i, n);
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((a = t.type._context),
          (i = t.pendingProps),
          (r = t.memoizedProps),
          (o = i.value),
          D($a, a._currentValue),
          (a._currentValue = o),
          r !== null)
        )
          if (De(r.value, o)) {
            if (r.children === i.children && !he.current) {
              t = Ze(e, t, n);
              break e;
            }
          } else
            for (r = t.child, r !== null && (r.return = t); r !== null; ) {
              var l = r.dependencies;
              if (l !== null) {
                o = r.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === a) {
                    if (r.tag === 1) {
                      (u = $e(-1, n & -n)), (u.tag = 2);
                      var m = r.updateQueue;
                      if (m !== null) {
                        m = m.shared;
                        var v = m.pending;
                        v === null ? (u.next = u) : ((u.next = v.next), (v.next = u)), (m.pending = u);
                      }
                    }
                    (r.lanes |= n), (u = r.alternate), u !== null && (u.lanes |= n), Er(r.return, n, t), (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (r.tag === 10) o = r.type === t.type ? null : r.child;
              else if (r.tag === 18) {
                if (((o = r.return), o === null)) throw Error(x(341));
                (o.lanes |= n), (l = o.alternate), l !== null && (l.lanes |= n), Er(o, n, t), (o = r.sibling);
              } else o = r.child;
              if (o !== null) o.return = r;
              else
                for (o = r; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((r = o.sibling), r !== null)) {
                    (r.return = o.return), (o = r);
                    break;
                  }
                  o = o.return;
                }
              r = o;
            }
        ue(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (i = t.type), (a = t.pendingProps.children), en(t, n), (i = Ae(i)), (a = a(i)), (t.flags |= 1), ue(e, t, a, n), t.child;
    case 14:
      return (a = t.type), (i = Te(a, t.pendingProps)), (i = Te(a.type, i)), Bs(e, t, a, i, n);
    case 15:
      return Tu(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (a = t.type),
        (i = t.pendingProps),
        (i = t.elementType === a ? i : Te(a, i)),
        Ga(e, t),
        (t.tag = 1),
        ge(a) ? ((e = !0), Ka(t)) : (e = !1),
        en(t, n),
        lu(t, a, i),
        Cr(t, a, i, n),
        Tr(null, t, a, !0, e, n)
      );
    case 19:
      return Du(e, t, n);
    case 22:
      return Bu(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function ed(e, t) {
  return Ml(e, t);
}
function hp(e, t, n, a) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = a),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ne(e, t, n, a) {
  return new hp(e, t, n, a);
}
function Wo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function gp(e) {
  if (typeof e == "function") return Wo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Jr)) return 11;
    if (e === eo) return 14;
  }
  return 2;
}
function mt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ne(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : {lanes: t.lanes, firstContext: t.firstContext}),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ba(e, t, n, a, i, r) {
  var o = 2;
  if (((a = e), typeof e == "function")) Wo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Ot:
        return At(n.children, i, r, t);
      case Zr:
        (o = 8), (i |= 8);
        break;
      case er:
        return (e = Ne(12, n, t, i | 2)), (e.elementType = er), (e.lanes = r), e;
      case tr:
        return (e = Ne(13, n, t, i)), (e.elementType = tr), (e.lanes = r), e;
      case nr:
        return (e = Ne(19, n, t, i)), (e.elementType = nr), (e.lanes = r), e;
      case ul:
        return gi(n, i, r, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case sl:
              o = 10;
              break e;
            case ll:
              o = 9;
              break e;
            case Jr:
              o = 11;
              break e;
            case eo:
              o = 14;
              break e;
            case tt:
              (o = 16), (a = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (t = Ne(o, n, t, i)), (t.elementType = e), (t.type = a), (t.lanes = r), t;
}
function At(e, t, n, a) {
  return (e = Ne(7, e, a, t)), (e.lanes = n), e;
}
function gi(e, t, n, a) {
  return (e = Ne(22, e, a, t)), (e.elementType = ul), (e.lanes = n), (e.stateNode = {isHidden: !1}), e;
}
function qi(e, t, n) {
  return (e = Ne(6, e, null, t)), (e.lanes = n), e;
}
function Yi(e, t, n) {
  return (
    (t = Ne(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation}),
    t
  );
}
function _p(e, t, n, a, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Gi(0)),
    (this.expirationTimes = Gi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Gi(0)),
    (this.identifierPrefix = a),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Fo(e, t, n, a, i, r, o, l, u) {
  return (
    (e = new _p(e, t, n, l, u)),
    t === 1 ? ((t = 1), r === !0 && (t |= 8)) : (t = 0),
    (r = Ne(3, null, null, t)),
    (e.current = r),
    (r.stateNode = e),
    (r.memoizedState = {element: a, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null}),
    wo(r),
    e
  );
}
function vp(e, t, n) {
  var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {$$typeof: Dt, key: a == null ? null : "" + a, children: e, containerInfo: t, implementation: n};
}
function td(e) {
  if (!e) return gt;
  e = e._reactInternals;
  e: {
    if (Ft(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ge(n)) return eu(e, n, t);
  }
  return t;
}
function nd(e, t, n, a, i, r, o, l, u) {
  return (
    (e = Fo(n, a, !0, e, i, r, o, l, u)),
    (e.context = td(null)),
    (n = e.current),
    (a = de()),
    (i = ft(n)),
    (r = $e(a, i)),
    (r.callback = t != null ? t : null),
    ct(n, r, i),
    (e.current.lanes = i),
    ta(e, i, a),
    _e(e, a),
    e
  );
}
function _i(e, t, n, a) {
  var i = t.current,
    r = de(),
    o = ft(i);
  return (
    (n = td(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = $e(r, o)),
    (t.payload = {element: e}),
    (a = a === void 0 ? null : a),
    a !== null && (t.callback = a),
    (e = ct(i, t, o)),
    e !== null && (Re(e, i, o, r), Ea(e, i, o)),
    o
  );
}
function ii(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function js(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ro(e, t) {
  js(e, t), (e = e.alternate) && js(e, t);
}
function wp() {
  return null;
}
var ad =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Do(e) {
  this._internalRoot = e;
}
vi.prototype.render = Do.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  _i(e, t, null, null);
};
vi.prototype.unmount = Do.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bt(function () {
      _i(null, e, null, null);
    }),
      (t[qe] = null);
  }
};
function vi(e) {
  this._internalRoot = e;
}
vi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Tl();
    e = {blockedOn: null, target: e, priority: t};
    for (var n = 0; n < at.length && t !== 0 && t < at[n].priority; n++);
    at.splice(n, 0, e), n === 0 && Wl(e);
  }
};
function Oo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function wi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Qs() {}
function xp(e, t, n, a, i) {
  if (i) {
    if (typeof a == "function") {
      var r = a;
      a = function () {
        var m = ii(o);
        r.call(m);
      };
    }
    var o = nd(t, a, e, 0, null, !1, !1, "", Qs);
    return (e._reactRootContainer = o), (e[qe] = o.current), Kn(e.nodeType === 8 ? e.parentNode : e), Bt(), o;
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof a == "function") {
    var l = a;
    a = function () {
      var m = ii(u);
      l.call(m);
    };
  }
  var u = Fo(e, 0, !1, null, null, !1, !1, "", Qs);
  return (
    (e._reactRootContainer = u),
    (e[qe] = u.current),
    Kn(e.nodeType === 8 ? e.parentNode : e),
    Bt(function () {
      _i(t, u, n, a);
    }),
    u
  );
}
function xi(e, t, n, a, i) {
  var r = n._reactRootContainer;
  if (r) {
    var o = r;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var u = ii(o);
        l.call(u);
      };
    }
    _i(t, o, e, i);
  } else o = xp(n, t, e, i, a);
  return ii(o);
}
Gl = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mn(t.pendingLanes);
        n !== 0 && (ao(t, n | 1), _e(t, $()), (W & 6) === 0 && ((un = $() + 500), wt()));
      }
      break;
    case 13:
      Bt(function () {
        var a = Ye(e, 1);
        if (a !== null) {
          var i = de();
          Re(a, e, 1, i);
        }
      }),
        Ro(e, 1);
  }
};
io = function (e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728);
    if (t !== null) {
      var n = de();
      Re(t, e, 134217728, n);
    }
    Ro(e, 134217728);
  }
};
zl = function (e) {
  if (e.tag === 13) {
    var t = ft(e),
      n = Ye(e, t);
    if (n !== null) {
      var a = de();
      Re(n, e, t, a);
    }
    Ro(e, t);
  }
};
Tl = function () {
  return F;
};
Bl = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
pr = function (e, t, n) {
  switch (t) {
    case "input":
      if ((rr(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var a = n[t];
          if (a !== e && a.form === e.form) {
            var i = di(a);
            if (!i) throw Error(x(90));
            cl(a), rr(a, i);
          }
        }
      }
      break;
    case "textarea":
      fl(e, n);
      break;
    case "select":
      (t = n.value), t != null && qt(e, !!n.multiple, t, !1);
  }
};
xl = zo;
Sl = Bt;
var Sp = {usingClientEntryPoint: !1, Events: [aa, It, di, vl, wl, zo]},
  bn = {findFiberByHostInstance: Pt, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom"},
  yp = {
    bundleType: bn.bundleType,
    version: bn.version,
    rendererPackageName: bn.rendererPackageName,
    rendererConfig: bn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = kl(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: bn.findFiberByHostInstance || wp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ya = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ya.isDisabled && ya.supportsFiber)
    try {
      (oi = ya.inject(yp)), (Ve = ya);
    } catch {}
}
be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sp;
be.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Oo(t)) throw Error(x(200));
  return vp(e, t, null, n);
};
be.createRoot = function (e, t) {
  if (!Oo(e)) throw Error(x(299));
  var n = !1,
    a = "",
    i = ad;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Fo(e, 1, !1, null, null, n, !1, a, i)),
    (e[qe] = t.current),
    Kn(e.nodeType === 8 ? e.parentNode : e),
    new Do(t)
  );
};
be.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(x(188)) : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = kl(t)), (e = e === null ? null : e.stateNode), e;
};
be.flushSync = function (e) {
  return Bt(e);
};
be.hydrate = function (e, t, n) {
  if (!wi(t)) throw Error(x(200));
  return xi(null, e, t, !0, n);
};
be.hydrateRoot = function (e, t, n) {
  if (!Oo(e)) throw Error(x(405));
  var a = (n != null && n.hydratedSources) || null,
    i = !1,
    r = "",
    o = ad;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = nd(t, null, e, 1, n != null ? n : null, i, !1, r, o)),
    (e[qe] = t.current),
    Kn(e),
    a)
  )
    for (e = 0; e < a.length; e++)
      (n = a[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new vi(t);
};
be.render = function (e, t, n) {
  if (!wi(t)) throw Error(x(200));
  return xi(null, e, t, !1, n);
};
be.unmountComponentAtNode = function (e) {
  if (!wi(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (Bt(function () {
        xi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[qe] = null);
        });
      }),
      !0)
    : !1;
};
be.unstable_batchedUpdates = zo;
be.unstable_renderSubtreeIntoContainer = function (e, t, n, a) {
  if (!wi(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return xi(e, t, n, !1, a);
};
be.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = be);
})(nl);
var $s = nl.exports;
(Zi.createRoot = $s.createRoot), (Zi.hydrateRoot = $s.hydrateRoot);
const bp = [
    {
      id: "8",
      linha: "ap",
      modelo: "AP 1250 AC MAX",
      garantia: "1 ano",
      cobertura: "450 m\xB2",
      raio: "11,97 m",
      usuarioMax: "350 usu\xE1rios",
      qtdePortas: "2 (WAN E LAN)",
      status: "Suporte",
      modulação: "Giga",
      connectiVersion: "v2.9.17",
      throughputWireless24: "300 Mbps (2x2)",
      throughputWireless50: "886 Mbps (2x2)",
      ganho: "3dBi(2,4GHz) | 4dBi (5,0GHz)",
      potencia2G: "28 dBm (630mW)",
      potencia5G: "27 dBm (501mW)",
      tensao: "48V / 12 VDC (P4)",
      poe: "PoE 802.3at",
      distancia: "CAT 5E(50m) e CAT 6(95m)",
      consumo: "15 W",
      wisefi: "Sim",
      handover: "Sim",
      pagina: "https://www.intelbras.com/pt-br/access-point-dual-band-ac-de-alta-potencia-ap-1250-ac-max",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-07/Datasheet_AP_1250_AC_MAX_PT_07.22.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-05/Guia_AP_1250AC_Max_01-22_site_1.pdf",
      manual: "https://manual-zeus-os.intelbras.com.br/",
    },
    {
      id: "9",
      linha: "ap",
      modelo: "AP 1250 AC OUTDOOR",
      garantia: "1 ano",
      cobertura: "400 m\xB2",
      raio: "11,2m",
      usuarioMax: "350 usu\xE1rios",
      qtdePortas: "2 (WAN E LAN)",
      status: "Suporte",
      modulação: "Giga",
      connectiVersion: "N/A",
      throughputWireless24: "300 Mbps (2x2)",
      throughputWireless50: "886 Mbps (2x2)",
      ganho: "5dBi (2.4GHz) | 5dBi (5GHz)",
      potencia2G: "26 dBm (398mW)",
      potencia5G: "26 dBm (398mW)",
      tensao: "48V / 12 VDC (P4)",
      poe: "PoE 802.3at",
      distancia: "CAT 5E(50m) e CAT 6(95m)",
      consumo: "20 W",
      wisefi: "Sim",
      handover: "Sim",
      pagina: "https://www.intelbras.com/pt-br/access-point-dual-band-ac-outdoor-ap-1250-ac-outdoor",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-08/datasheet-ap-1250-ac-outdoor-pt.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-10/Guia_AP_1250AC_Outdoor_03-22_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-08/manual-do-usuario-ap-1250-ac-outdoor-pt.pdf",
    },
    {
      id: "4",
      linha: "ap",
      modelo: "AP 1350 AC",
      garantia: "1 ano",
      cobertura: "350 m\xB2",
      raio: "10,52 m",
      usuarioMax: "350 usu\xE1rios",
      qtdePortas: "1 Porta",
      status: "Suporte",
      modulação: "Giga",
      connectiVersion: "v2.5.0",
      throughputWireless24: "450 Mbps (3x3) ",
      throughputWireless50: "886 Mbps (2x2)",
      ganho: "4dBi(2,4GHz) | 5dBi (5,0GHz)",
      potencia2G: "22 dBm (158mW)",
      potencia5G: "24 dBm (251mW)",
      tensao: "24V (PADR\xC3O B)",
      poe: "PoE 802.3af/A",
      distancia: "CAT 5E(50m) e CAT 6(95m)",
      consumo: "12 W",
      wisefi: "Sim",
      handover: "Sim",
      pagina: "https://www.intelbras.com/pt-br/access-point-dual-band-ac-de-alta-velocidade-ap-1350-ac",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-07/Datasheet_AP_1350_AC_07-22.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-02/Guia_AP_1350_1750_01-21_site.pdf",
      manual: "https://manual-zeus-os.intelbras.com.br/",
    },
    {
      id: "5",
      linha: "ap",
      modelo: "AP 1350 AC-S",
      garantia: "1 ano",
      cobertura: "350 m\xB2",
      raio: "10,52 m",
      usuarioMax: "350 usu\xE1rios",
      qtdePortas: "1 Porta",
      status: "Suporte",
      modulação: "Giga",
      connectiVersion: "v2.9.18",
      throughputWireless24: "450 Mbps (3x3) ",
      throughputWireless50: "886 Mbps (2x2)",
      ganho: "4dBi(2,4GHz) | 4dBi (5,0GHz)",
      potencia2G: "26 dBm (398mW)",
      potencia5G: "22 dBm (158mW)",
      tensao: "48V / 12 VDC (P4)",
      poe: "PoE 802.3at",
      distancia: "CAT 5E(50m) e CAT 6(95m)",
      consumo: "13.5 W",
      wisefi: "Sim",
      handover: "Sim",
      pagina: "https://www.intelbras.com/pt-br/access-point-dual-band-ac-de-alta-velocidade-ap-1350-ac-s",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-07/Datasheet_AP_1350_AC-S_07.22.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-10/Manua_AP_1350_ACS_01-22_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-10/Manual%20AP%201350%20AC%20-%20S.pdf",
    },
    {
      id: "10",
      linha: "ap",
      modelo: "AP 1750 AC",
      garantia: "1 ano",
      cobertura: "350 m\xB2",
      raio: "10,52 m",
      usuarioMax: "500 usu\xE1rios",
      qtdePortas: "2 (WAN E LAN)",
      status: "Suporte",
      modulação: "Giga",
      connectiVersion: "v2.5.0",
      throughputWireless24: "450 Mbps (3x3) ",
      throughputWireless50: "1300 Mbps (3x3)",
      ganho: "4dBi(2,4GHz) | 5dBi (5,0GHz)",
      potencia2G: "24 dBm (251mW)",
      potencia5G: "24 dBm (251mW)",
      tensao: "48V (PADR\xC3O B)",
      poe: "PoE 802.3af",
      distancia: "CAT 5E(50m) e CAT 6(95m)",
      consumo: "13 W",
      wisefi: "Sim",
      handover: "Sim",
      pagina: "https://www.intelbras.com/pt-br/access-point-dual-band-ac-de-alta-velocidade-ap-1750-ac",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-07/Datasheet_AP_1750_AC_07.22.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-02/Guia_AP_1350_1750_01-21_site.pdf",
      manual: "https://manual-zeus-os.intelbras.com.br/",
    },
    {
      id: "1",
      linha: "ap",
      modelo: "AP 310",
      garantia: "1 ano",
      cobertura: "200 m\xB2",
      raio: "7,98 m",
      usuarioMax: "100 usu\xE1rios",
      qtdePortas: "1 Porta",
      status: "Suporte",
      modulação: "Fast",
      connectiVersion: "v2.5.0",
      throughputWireless24: "300 Mbps (2x2)",
      throughputWireless50: "x",
      ganho: "3dBi (2,4GHz)",
      potencia2G: "20 dBm (100mW)",
      potencia5G: "x",
      tensao: "12V | 24V (PADR\xC3O B)",
      poe: "x",
      distancia: "30m",
      consumo: "12 W",
      wisefi: "Sim",
      handover: "x",
      pagina: "https://www.intelbras.com/pt-br/access-point-corporativo-com-gerenciamento-centralizado-ap-310",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-07/Datasheet_AP_310_07.22.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-03/Guia_instalacao_A6_AP%20310_360_01-21_site.pdf",
      manual: "https://manual-zeus-os.intelbras.com.br/",
    },
    {
      id: "2",
      linha: "ap",
      modelo: "AP 360",
      garantia: "1 ano",
      cobertura: "400 m\xB2",
      raio: "11,2 m",
      usuarioMax: "100 usu\xE1rios",
      qtdePortas: "1 Porta",
      status: "Suporte",
      modulação: "Fast",
      connectiVersion: "v2.5.0",
      throughputWireless24: "300 Mbps (2x2)",
      throughputWireless50: "x",
      ganho: "3dBi (2,4GHz)",
      potencia2G: "28 dBm (630mW)",
      potencia5G: "x",
      tensao: "12V | 24V (PADR\xC3O B)",
      poe: "x",
      distancia: "30m",
      consumo: "12 W",
      wisefi: "Sim",
      handover: "x",
      pagina: "https://www.intelbras.com/pt-br/access-point-corporativo-com-gerenciamento-centralizado-ap-360",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-07/Datasheet_AP_360_07.22_V3.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-03/Guia_instalacao_A6_AP%20310_360_01-21_site.pdf",
      manual: "https://manual-zeus-os.intelbras.com.br/",
    },
    {
      id: "6",
      linha: "ap",
      modelo: "BSPRO 1350 AC",
      garantia: "1 ano",
      cobertura: "350 m\xB2",
      raio: "10,52 m",
      usuarioMax: "350 usu\xE1rios",
      qtdePortas: "1 Porta",
      status: "Suporte",
      modulação: "Giga",
      connectiVersion: "v2.5.0",
      throughputWireless24: "450 Mbps (3x3) ",
      throughputWireless50: "886 Mbps (2x2)",
      ganho: "4dBi(2,4GHz) | 5dBi (5,0GHz)",
      potencia2G: "22 dBm (158mW)",
      potencia5G: "24 dBm (251mW)",
      tensao: "24V (PADR\xC3O B)",
      poe: "PoE 802.3af/A",
      distancia: "CAT 5E(50m) e CAT 6(95m)",
      consumo: "12 W",
      wisefi: "Sim",
      handover: "Sim",
      pagina: "https://www.intelbras.com/pt-br/access-point-wi-fi-5-para-negocios-bspro-1350",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-07/Datasheet%20BSPRO%201350.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-08/Guia_BSPRO_1350_01-21_site.pdf",
      manual: "https://manual-zeus-os.intelbras.com.br/",
    },
    {
      id: "7",
      linha: "ap",
      modelo: "BSPRO 1350 AC-S",
      garantia: "1 ano",
      cobertura: "350 m\xB2",
      raio: "10,52 m",
      usuarioMax: "350 usu\xE1rios",
      qtdePortas: "1 Porta",
      status: "Suporte",
      modulação: "Giga",
      connectiVersion: "N/A",
      throughputWireless24: "450 Mbps (3x3) ",
      throughputWireless50: "886 Mbps (2x2)",
      ganho: "4dBi(2,4GHz) | 4dBi (5,0GHz)",
      potencia2G: "26 dBm (398mW)",
      potencia5G: "22 dBm (158mW)",
      tensao: "48V / 12 VDC (P4)",
      poe: "PoE 802.3at",
      distancia: "CAT 5E(50m) e CAT 6(95m)",
      consumo: "13.5 W",
      wisefi: "x",
      handover: "Sim",
      pagina: "https://www.intelbras.com/pt-br/access-point-wi-fi-5-para-negocios-bspro-1350-s",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-05/datasheet-bspro-1350-s.pdf",
      guia: "x",
      manual: "https://backend.intelbras.com/sites/default/files/2022-05/manual-do-usuario-bspro-1350-s.pdf",
    },
    {
      id: "3",
      linha: "ap",
      modelo: "BSPRO 360",
      garantia: "1 ano",
      cobertura: "400 m\xB2",
      raio: "11,2 m",
      usuarioMax: "100 usu\xE1rios",
      qtdePortas: "1 Porta",
      status: "Suporte",
      modulação: "Fast",
      connectiVersion: "N/A",
      throughputWireless24: "300 Mbps (2x2)",
      throughputWireless50: "x",
      ganho: "3dBi (2,4GHz)",
      potencia2G: "28 dBm (630mW)",
      potencia5G: "x",
      tensao: "12V | 24V (PADR\xC3O B)",
      poe: "x",
      distancia: "30m",
      consumo: "12 W",
      wisefi: "Sim",
      handover: "x",
      pagina: "https://www.intelbras.com/pt-br/access-point-wi-fi-4-para-negocios-bspro-360",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-07/Datasheet%20BSPRO360.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-08/Guia_BSPRO_360_01-21_site.pdf",
      manual: "https://manual-zeus-os.intelbras.com.br/",
    },
    {
      id: "12",
      linha: "ap",
      modelo: "HOTSPOT 300",
      garantia: "1 ano",
      cobertura: "300 m\xB2",
      raio: "9,77 m",
      usuarioMax: "60 usu\xE1rios",
      qtdePortas: "2 (WAN E LAN)",
      status: "Suporte",
      modulação: "Fast",
      connectiVersion: "v2.0.0",
      throughputWireless24: "300 Mbps (2x2)",
      throughputWireless50: "x",
      ganho: "5dBi (2,4GHz)",
      potencia2G: "27 dBm (500mW)",
      potencia5G: "x",
      tensao: "12V | 24V (PADR\xC3O B)",
      poe: "x",
      distancia: "30m",
      consumo: "6 W",
      wisefi: "x",
      handover: "x",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/roteador-wireless-com-ferramenta-de-marketing-hotspot-300",
      datasheet: "https://backend.intelbras.com/sites/default/files/2020-01/Datasheet_HotSpot_300_02-19.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_a6_hotspot_300_espanhol_01-17_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2020-02/Manual-del-usuario-HotSpot-300-01.20_0.pdf",
    },
    {
      id: "11",
      linha: "ap",
      modelo: "AP 1210 AC",
      garantia: "1 ano",
      cobertura: "200 m\xB2",
      raio: "7,98 m",
      usuarioMax: "200 usu\xE1rios",
      qtdePortas: "1 Porta",
      status: "Phaseout",
      modulação: "Giga",
      connectiVersion: "v2.5.0",
      throughputWireless24: "300 Mbps (2x2)",
      throughputWireless50: "886 Mbps (2x2)",
      ganho: "3dBi(2,4GHz) | 3dBi (5,0GHz)",
      potencia2G: "21 dBm (125mW)",
      potencia5G: "21 dBm (125mW)",
      tensao: "48V (PADR\xC3O B)",
      poe: "PoE 802.3af",
      distancia: "CAT 5E(50m) e CAT 6(95m)",
      consumo: "12 W",
      wisefi: "Sim",
      handover: "Sim",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/access-point-corporativo-dual-band-ac-ap-1210-ac",
      datasheet: "https://backend.intelbras.com/sites/default/files/2019-07/Datasheet_AP_1210_AC_03-19.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2019-05/Guia_de_instalacao_AP_1210_AC_Lite_01-19.pdf",
      manual: "https://manual-zeus-os.intelbras.com.br/",
    },
    {
      id: "13",
      linha: "ap",
      modelo: "AP 300",
      garantia: "1 ano",
      cobertura: "300 m\xB2",
      raio: "9,77 m",
      usuarioMax: "100 usu\xE1rios",
      qtdePortas: "2 (WAN E LAN)",
      status: "Phaseout",
      modulação: "Fast",
      connectiVersion: "v2.0.0",
      throughputWireless24: "300 Mbps (2x2)",
      throughputWireless50: "x",
      ganho: "5dBi (2,4GHz)",
      potencia2G: "27 dBm (500mW)",
      potencia5G: "x",
      tensao: "12V | 24V (PADR\xC3O B)",
      poe: "x",
      distancia: "30m",
      consumo: "6 W",
      wisefi: "x",
      handover: "x",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/download/access-point-corporativo-com-gerenciamento-centralizado-ap-300",
      datasheet: "https://backend.intelbras.com/sites/default/files/2019-04/Datasheet_AP_300_01-19_Zeus%20OS.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2019-04/Guia_AP_300_portugues_01-19-ZeusOS.pdf",
      manual:
        "https://backend.intelbras.com/sites/default/files/2019-05/Manual_do_usuario_Zeus_OS_AP_300_e_HotSpot_300_AP_310_AP_360_AP_1210AC_02-19_site.pdf",
    },
  ],
  kp = [
    {
      id: "3",
      linha: "conversor",
      modelo: "KFM 112",
      conector: "SC/UPC (Duplo)",
      wdm: "x",
      distancia: "2 Km",
      modulação: "Fast",
      fibra: "Multimodo",
      potencia: "-3 dBm | -10 dBm",
      sensibilidade: "-3 dBm | -34 dBm",
      CompTX: "1310 nm",
      CompRX: "1310 nm",
      status: "Phaseout",
      garantia: "2 Anos",
      pagina: "https://www.intelbras.com/pt-br/conversor-de-midia-fast-ethernet-multimodo-kfm-112",
      datasheet:
        "http://backend.intelbras.com/sites/default/files/2022-06/Datasheet-KFM-112-1120-KFMD-1120-A-B-KGM-115-KGS-1120-KGSD-1120-A-B-04.20%20_5.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KFM_112_KFS_1120_KFSD_1120_A_B_01-22.pdf",
      manual: "-",
    },
    {
      id: "4",
      linha: "conversor",
      modelo: "KFS 1120",
      conector: "SC/UPC (Duplo)",
      wdm: "x",
      distancia: "20 Km",
      modulação: "Fast",
      fibra: "Monomodo",
      potencia: "-3 dBm | -10 dBm",
      sensibilidade: "-3 dBm | -34 dBm",
      CompTX: "1310 nm",
      CompRX: "1310 nm",
      status: "Phaseout",
      garantia: "2 Anos",
      pagina: "https://www.intelbras.com/pt-br/conversor-de-midia-fast-ethernet-monomodo-kfs-1120",
      datasheet:
        "https://backend.intelbras.com/sites/default/files/2022-06/Datasheet-KFM-112-1120-KFMD-1120-A-B-KGM-115-KGS-1120-KGSD-1120-A-B-04.20%20_6.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KFM_112_KFS_1120_KFSD_1120_A_B_01-22.pdf",
      manual: "-",
    },
    {
      id: "1",
      linha: "conversor",
      modelo: "KFSD 1120 A /B",
      conector: "SC/UPC (\xDAnica)",
      wdm: "Sim",
      distancia: "20 Km",
      modulação: "Fast",
      fibra: "Monomodo",
      potencia: "-3 dBm | -10 dBm",
      sensibilidade: "-3 dBm | -34 dBm",
      CompTX: "A -1550 nm / B- 1310 nm",
      CompRX: "A - 1310 nm / B- 1550 nm ",
      status: "Phaseout",
      garantia: "2 Anos",
      pagina: "https://www.intelbras.com/pt-br/conversor-de-midia-fast-ethernet-monomodo-20-km-kfsd-1120-b",
      datasheet:
        "http://backend.intelbras.com/sites/default/files/2022-06/Datasheet-KFM-112-1120-KFMD-1120-A-B-KGM-115-KGS-1120-KGSD-1120-A-B-04.20%20_5.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KFM_112_KFS_1120_KFSD_1120_A_B_01-22.pdf",
      manual: "-",
    },
    {
      id: "5",
      linha: "conversor",
      modelo: "KGM 1105",
      conector: "SC/UPC (Duplo)",
      wdm: "x",
      distancia: "500 M",
      modulação: "Giga",
      fibra: "Multimodo",
      potencia: "0 dBm | -8 dBm",
      sensibilidade: "-3 dBm | -20 dBm",
      CompTX: "850 nm",
      CompRX: "850 nm",
      status: "Phaseout",
      garantia: "2 Anos",
      pagina: "https://www.intelbras.com/pt-br/conversor-de-midia-gigabit-ethernet-multimodo-05-km-kgm-1105",
      datasheet:
        "https://backend.intelbras.com/sites/default/files/2022-06/Datasheet-KFM-112-1120-KFMD-1120-A-B-KGM-115-KGS-1120-KGSD-1120-A-B-04.20%20_5.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KGM_1105_KGS_1120_KGSD_1120_A_B_01-22.pdf",
      manual: "-",
    },
    {
      id: "6",
      linha: "conversor",
      modelo: "KGS 1120",
      conector: "SC/UPC (Duplo)",
      wdm: "x",
      distancia: "20 Km",
      modulação: "Giga",
      fibra: "Monomodo",
      potencia: "-3 dBm | -10 dBm",
      sensibilidade: "-3 dBm | -23 dBm",
      CompTX: "1310 nm ",
      CompRX: "1310 nm ",
      status: "Phaseout",
      garantia: "2 Anos",
      pagina: "https://www.intelbras.com/pt-br/conversor-de-midia-gigabit-ethernet-monomodo-20-km-kgs-1120",
      datasheet:
        "http://backend.intelbras.com/sites/default/files/2022-06/Datasheet-KFM-112-1120-KFMD-1120-A-B-KGM-115-KGS-1120-KGSD-1120-A-B-04.20%20_5.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KGM_1105_KGS_1120_KGSD_1120_A_B_01-22.pdf",
      manual: "-",
    },
    {
      id: "2",
      linha: "conversor",
      modelo: "KGSD 1120 A/B",
      conector: "SC/UPC (\xDAnica)",
      wdm: "Sim",
      distancia: "20 Km",
      modulação: "Giga",
      fibra: "Monomodo",
      potencia: "-3 dBm | -8 dBm",
      sensibilidade: "-3 dBm | -23 dBm",
      CompTX: "A - 1550 nm / B - 1310 nm",
      CompRX: "A - 1310 nm/ B \u2013 1550 nm",
      status: "Phaseout",
      garantia: "2 Anos",
      pagina: "https://www.intelbras.com/pt-br/conversor-de-midia-gigabit-ethernet-monomodo-20-km-kgsd-1120-b",
      datasheet:
        "http://backend.intelbras.com/sites/default/files/2022-06/Datasheet-KFM-112-1120-KFMD-1120-A-B-KGM-115-KGS-1120-KGSD-1120-A-B-04.20%20_5.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KGM_1105_KGS_1120_KGSD_1120_A_B_01-22.pdf",
      manual: "-",
    },
  ],
  Pp = [
    {
      id: "8",
      linha: "gbic",
      modelo: "KGM 2105 ",
      tipoConector: "LC/UPC (Dupla)",
      modulo: "SFP",
      wdm: "x",
      distancia: "500 M",
      modulação: "1 Giga",
      fibra: "Multimodo",
      potencia: "-3 dBm | -9,5 dBm",
      sensibilidade: "-3 dBm | -17 dbm",
      CompTX: "850 nm",
      CompRX: "850 nm",
      garantia: "1 Ano",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/modulo-mini-gbic-gigabit-ethernet-multimodo-05-km-kgm-2105",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-06/Datasheet%20KGS%202110%20Max%20e%20KGM%202110%20Max%20_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KGM_2105_KGS_2110_KGSD_2110_A_B_A4_01-22.pdf",
    },
    {
      id: "7",
      linha: "gbic",
      modelo: "KGS 2110",
      tipoConector: "LC/UPC (Dupla)",
      modulo: "SFP",
      wdm: "x",
      distancia: "10 Km",
      modulação: "1 Giga",
      fibra: "Monomodo",
      potencia: "-3 dBm | -9,5 dBm",
      sensibilidade: "- 8 dBm | -21 dbm",
      CompTX: "1310 nm",
      CompRX: "1310 nm",
      garantia: "1 Ano",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/modulo-mini-gbic-gigabit-ethernet-monomodo-10-km-kgs-2110",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-06/Datasheet%20KGS%202110%20Max%20e%20KGM%202110%20Max%20_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KGM_2105_KGS_2110_KGSD_2110_A_B_A4_01-22.pdf",
    },
    {
      id: "6",
      linha: "gbic",
      modelo: "KGSD 2110 A/B",
      tipoConector: "LC/UPC (\xDAnico)",
      modulo: "SFP",
      wdm: "Sim",
      distancia: "10 Km",
      modulação: "1 Giga",
      fibra: "Monomodo",
      potencia: "-3 dBm | -9,5 dBm",
      sensibilidade: "- 8 dBm | -21 dbm",
      CompTX: "A \u2013 1550 nm / B \u2013 1310 nm",
      CompRX: "A \u2013 1310 nm / B \u2013 1550 nm",
      garantia: "1 Ano",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/modulo-mini-gbic-gigabit-ethernet-monomodo-10-km-kgsd-2110-b",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-06/Datasheet%20KGS%202110%20Max%20e%20KGM%202110%20Max%20_1.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KGM_2105_KGS_2110_KGSD_2110_A_B_A4_01-22.pdf",
    },
    {
      id: "5",
      linha: "gbic",
      modelo: "KPSD 1120 E",
      tipoConector: "SC/UPC (\xDAnica)",
      modulo: "Epon",
      wdm: "Sim",
      distancia: "20 Km",
      modulação: "1 Giga",
      fibra: "Monomodo",
      potencia: "2,5 dBm | 7 dBm",
      sensibilidade: "- 8 dBm | -30 dbm",
      CompTX: "1490 nm ",
      CompRX: "1310 nm",
      garantia: "1 Ano",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/modulo-sfp-epon-kpsd-1120-e",
      datasheet: "http://backend.intelbras.com/sites/default/files/integration/datasheet_kpsd_1120_e.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KPSD_1120_E_01-22.pdf",
    },
    {
      id: "4",
      linha: "gbic",
      modelo: "KPSD 1120 G B+",
      tipoConector: "SC/UPC (\xDAnica)",
      modulo: "Gpon",
      wdm: "Sim",
      distancia: "20 Km",
      modulação: "1 Giga",
      fibra: "Monomodo",
      potencia: "1,5 dBm | 5 dBm",
      sensibilidade: "- 8 dBm | -28 dbm",
      CompTX: "1490 nm ",
      CompRX: "1310 nm",
      garantia: "1 Ano",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/modulo-sfp-gpon-b-kpsd-1120-g",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-08/Datasheet%20KPSD%201120-G%20B%2B.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KPSD_1120G_01-22.pdf",
    },
    {
      id: "3",
      linha: "gbic",
      modelo: "KPSD 1120 G C+",
      tipoConector: "SC/UPC (\xDAnica)",
      modulo: "Gpon",
      wdm: "Sim",
      distancia: "20 Km",
      modulação: "1 Giga",
      fibra: "Monomodo",
      potencia: "3 dBm | 8 dBm",
      sensibilidade: "- 8 dBm | -30 dbm",
      CompTX: "1490 nm ",
      CompRX: "1310 nm",
      garantia: "1 Ano",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/modulo-sfp-gpon-c-monomodo-20-km-kpsd-1120-g-c",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-08/Datasheet%20KPSD%201120G%20C%2B.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KPSD_1120GC%2B_01-22.pdf",
    },
    {
      id: "1",
      linha: "gbic",
      modelo: "KTS 2110",
      tipoConector: "LC/PC (Dupla)",
      modulo: "XFP",
      wdm: "x",
      distancia: "10 Km",
      modulação: "10 Gbps",
      fibra: "Monomodo",
      potencia: "-6 dBm | -1 dBm",
      sensibilidade: "0,5 dBm | -14.4 dBm",
      CompTX: "1490 nm ",
      CompRX: "1310 nm",
      garantia: "1 Ano",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/modulo-conversor-sfp-10-gbps-kts-2110",
      datasheet: "https://backend.intelbras.com/sites/default/files/2020-08/datasheet_KTS_2110_%2B_v2.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KTS_2110%2B_01-22_.pdf",
    },
    {
      id: "2",
      linha: "gbic",
      modelo: "KTS 2110+",
      tipoConector: "LC/PC (Dupla)",
      modulo: "SFP+",
      wdm: "x",
      distancia: "10 Km",
      modulação: "10 Gbps",
      fibra: "Monomodo",
      potencia: "-7 dBm | 0,5 dBm",
      sensibilidade: "0,5 dBm | -14.4 dBm",
      CompTX: "1490 nm ",
      CompRX: "1310 nm",
      garantia: "1 Ano",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/modulo-conversor-sfp-10-gbps-kts-2110",
      datasheet: "http://backend.intelbras.com/sites/default/files/2020-08/datasheet_KTS_2110_%2B_v2.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KTS_2110%2B_01-22_.pdf",
    },
  ],
  Mp = [
    {
      id: "2",
      linha: "radio",
      modelo: "APC 5A-15",
      indicado: "PTP",
      garantia: "2 anos",
      ganho: "15 dBi",
      potencia: "29 dBm - 800 mW",
      modulação: "Fast",
      pps: "80.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-35\xB0 | V-35\xB0",
      distancia: "6Km",
      distanciaMax: "50m (CAT5E) 90m (CAT6)",
      consumo: "4,5 W",
      alimentaçao: "12V - 24V",
      wireless: " MiMo 2x2",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/cpeptp-5-ghz-com-15-dbi-mimo-2x2-apc-5a-15",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-12/APC%205A-15.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-08/Guia-de-instalacao-APC-5A-15-08.22.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-12/Manual_APC_5A_portugues_04-22_site.pdf",
    },
    {
      id: "3",
      linha: "radio",
      modelo: "APC 5A-20",
      indicado: "PTP",
      garantia: "2 anos",
      ganho: "20 dBi",
      potencia: "29 dBm - 800 mW",
      modulação: "Fast",
      pps: "80.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-16\xB0 | V-16\xB0",
      distancia: "10km (PtMP) - 15km (PtP)",
      distanciaMax: "50m (CAT5E) 90m (CAT6)",
      consumo: "4,5 W",
      alimentaçao: "12V - 24V",
      wireless: " MiMo 2x2",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/cpeptp-5-ghz-com-20-dbi-mimo-2x2-apc-5a-20",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-09/APC_5A-20_V2.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-10/Guia_APC_5A-20_02-22_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-10/Manual_APC_5A_portugues_03-22_site.pdf",
    },
    {
      id: "10",
      linha: "radio",
      modelo: "APC 5A-90",
      indicado: "BASE",
      garantia: "2 anos",
      ganho: "18 dBi",
      potencia: "29 dBm - 800 mW",
      modulação: "Fast",
      pps: "80.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-90\xB0 | V-20\xB0",
      distancia: "10Km",
      distanciaMax: "50m (CAT5E) 90m (CAT6)",
      consumo: "4,5 W",
      alimentaçao: "12V - 24V",
      wireless: " MiMo 2x2",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/basestation-5-ghz-com-antena-setorial-integrada-apc-5a-90",
      datasheet: "https://backend.intelbras.com/sites/default/files/2019-04/Datasheet_APC_5A-90.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-10/Guia_APC_5A-90_01-22_site_0.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-10/Manual_APC_5A_portugues_03-22_site.pdf",
    },
    {
      id: "9",
      linha: "radio",
      modelo: "APC 5A-90 V3",
      indicado: "BASE",
      garantia: "2 anos",
      ganho: "18 dBi",
      potencia: "29 dBm - 800 mW",
      modulação: "Giga",
      pps: "80.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-90\xB0 | V-20\xB0",
      distancia: "10Km",
      distanciaMax: "50m (CAT5E) 90m (CAT6)",
      consumo: "4,5 W",
      alimentaçao: "12V - 24V",
      wireless: " MiMo 2x2",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/basestation-5-ghz-com-antena-setorial-de-90o-integrada-apc-5a-90-giga-v3",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-10/Datasheet_APC_5A-90_V3_10.22.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-10/Guia_APC_5A-90_01-22_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-10/Manual_APC_5A_portugues_03-22_site.pdf",
    },
    {
      id: "8",
      linha: "radio",
      modelo: "APC 5A/Giga",
      indicado: "BASE/PTP",
      garantia: "2 anos",
      ganho: "SEM ANTENA",
      potencia: "29 dBm - 800 mW",
      modulação: "Giga",
      pps: "80.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "x",
      distancia: "x",
      distanciaMax: "50m (CAT5E) 90m (CAT6)",
      consumo: "4,5 W",
      alimentaçao: "12V - 24V",
      wireless: " MiMo 2x2",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/radio-gigabit-ptpptmp-5-ghz-conectorizado-mimo-apc-5a-giga",
      datasheet: "http://backend.intelbras.com/sites/default/files/2021-12/APC%205A%20Giga.pdf",
      guia: "-",
      manual: "https://backend.intelbras.com/sites/default/files/2022-10/Manual_APC_5A_portugues_03-22_site.pdf",
    },
    {
      id: "6",
      linha: "radio",
      modelo: "KIT WOM 5A MIMO",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "16 dBi",
      potencia: "28 dBm - 630 mW",
      modulação: "Fast",
      pps: "N/A",
      throughputEfetivo: "160 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-40\xB0 | V-18\xB0",
      distancia: "1Km",
      distanciaMax: "30m",
      consumo: "2,8 W",
      alimentaçao: "12V - 24V",
      wireless: " MiMo 2x2",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/kit-conexao-sem-fio-para-cftv-ip-wom-5a-mimo-kit-conexao-wom-5a-mimo",
      datasheet:
        "http://backend.intelbras.com/sites/default/files/2021-08/Datasheet%20%28Ficha%20t%C3%A9cnica%29%20-%20Kit%20Conex%C3%A3o%20WOM%205A%20MiMo_2.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2020-11/guia%20de%20instalacao%20-%20wom%205a-wom%205a%20mimo.pdf",
      manual: "https://manual-zeus-os.intelbras.com.br/",
    },
    {
      id: "4",
      linha: "radio",
      modelo: "WOM 5A",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "16 dBi",
      potencia: "28 dBm - 630 mW",
      modulação: "Fast",
      pps: "60.000 Pps",
      throughputEfetivo: "110 Mbps",
      throughputNominal: "150 Mbps",
      aberturaHorVer: "H-40\xB0 | V-18\xB0",
      distancia: "4Km",
      distanciaMax: "30m",
      consumo: "2,8 W",
      alimentaçao: "12V - 24V",
      wireless: "SiSo 1x1",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/cpe-5-ghz-com-antena-de-16-dbi-siso-1x1-wom-5a",
      datasheet: "http://backend.intelbras.com/sites/default/files/integration/datasheet-wom-5a-wom-5a-mimo.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2020-11/guia%20de%20instalacao%20-%20wom%205a-wom%205a%20mimo.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2021-12/Manual_WOM_5A_portugues_01-21.pdf",
    },
    {
      id: "5",
      linha: "radio",
      modelo: "WOM 5A MIMO",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "16 dBi",
      potencia: "28 dBm - 630 mW",
      modulação: "Fast",
      pps: "60.000 Pps",
      throughputEfetivo: "160 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-40\xB0 | V-18\xB0",
      distancia: "6Km",
      distanciaMax: "30m",
      consumo: "2,8 W",
      alimentaçao: "12V - 24V",
      wireless: " MiMo 2x2",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/cpe-5-ghz-com-antena-de-16-dbi-mimo-2x2-wom-5a-mimo",
      datasheet: "http://backend.intelbras.com/sites/default/files/2020-08/datasheet-wom-5a-wom-5a-mimo_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2020-11/guia%20de%20instalacao%20-%20wom%205a-wom%205a%20mimo.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2021-12/Manual_WOM_5A_portugues_01-21.pdf",
    },
    {
      id: "7",
      linha: "radio",
      modelo: "WOM 5A-23",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "23 dBi",
      potencia: "25 dBm - 316 mW",
      modulação: "Fast",
      pps: "60.000 Pps",
      throughputEfetivo: "160 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-9\xB0 | V-9\xB0",
      distancia: "10 km",
      distanciaMax: "30m",
      consumo: "6 W",
      alimentaçao: "12V - 24V",
      wireless: " MiMo 2x2",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/cpeptp-com-antena-dish-de-23-dbi-mimo-2x2-wom-5a-23",
      datasheet: "http://backend.intelbras.com/sites/default/files/2020-08/Datasheet_WOM_5a-23_01-20.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2020-11/guia%20de%20instalacao%20-%20wom%205a-23.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2020-11/manual%20do%20usuario%20-%20wom%205a-23.pdf",
    },
    {
      id: "24",
      linha: "radio",
      modelo: "WOM AC",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "16 dBi",
      potencia: "23 dBm - 200mW",
      modulação: "Giga",
      pps: "N/A",
      throughputEfetivo: "N/A",
      throughputNominal: "867 Mbps",
      aberturaHorVer: "H-40\xB0 | V-20\xB0",
      distancia: "5Km",
      distanciaMax: "N/A",
      consumo: ">20 W",
      alimentaçao: "12V - 24V",
      wireless: "MiMo 2x2",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/cpe-5-ghz-com-antena-de-16-dbi-mimo-2x2-wom-ac",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-12/Datasheet_WOM_AC_12.22.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-12/Guia_WOM_AC_E_WOM_AC_MAX_02-22_site.pdf",
      manual: "https://manuais.intelbras.com.br/manual-familia-wom-ac/",
    },
    {
      id: "25",
      linha: "radio",
      modelo: "WOM AC MAX",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "20 dBi",
      potencia: "23 dBm - 200mW",
      modulação: "Giga",
      pps: "N/A",
      throughputEfetivo: "N/A",
      throughputNominal: "867 Mbps",
      aberturaHorVer: "H-16\xB0 | V-16\xB0",
      distancia: "15Km",
      distanciaMax: "N/A",
      consumo: ">20 W",
      alimentaçao: "12V - 24V",
      wireless: "MiMo 2x2",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/cpe-5-ghz-com-antena-de-20-dbi-mimo-2x2-wom-ac-max",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-12/Datasheet_WOM_AC_MAX_12.22.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-12/Guia_WOM_AC_E_WOM_AC_MAX_02-22_site.pdf",
      manual: "https://manuais.intelbras.com.br/manual-familia-wom-ac/",
    },
    {
      id: "23",
      linha: "radio",
      modelo: "APC 2M-14",
      indicado: "PTP",
      garantia: "N/A",
      ganho: "14 dBi",
      potencia: "30 dBm - 1000mW",
      modulação: "Fast",
      pps: "33.000 Pps",
      throughputEfetivo: "160 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-34\xB0 | V-36\xB0",
      distancia: "2Km",
      distanciaMax: "30m",
      consumo: "7 W",
      alimentaçao: "12V - 48V",
      wireless: " MiMo 2x2",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/cpeptp-24-ghz-14-dbi-mimo-2x2-apc-2m-14",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/lamina_apc_2m-14.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_instalacao_apc_2m-14.pdf",
      manual: "-",
    },
    {
      id: "16",
      linha: "radio",
      modelo: "APC 2M-90",
      indicado: "BASE",
      garantia: "2 anos",
      ganho: "16 dBi",
      potencia: "30 dBm - 1000mW",
      modulação: "Fast",
      pps: "33.000 Pps",
      throughputEfetivo: "160 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-90\xB0 | V-30\xB0",
      distancia: "4Km",
      distanciaMax: "30m",
      consumo: "7 W",
      alimentaçao: "12V - 24V",
      wireless: " MiMo 2x2",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/basestation-24-ghz-16-dbi-mimo-2x2-apc-2m-90",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/datasheet_a4_apc_2m_90_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_apc_2m_90_portugues_01-18_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/integration/manual_apc_5m_5m-18_5m-90_2m-90_02-18.pdf",
    },
    {
      id: "21",
      linha: "radio",
      modelo: "APC 5M",
      indicado: "BASE/PTP",
      garantia: "N/A",
      ganho: "SEM ANTENA",
      potencia: "29 dBm - 800 mW",
      modulação: "Fast",
      pps: "60.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "x",
      distancia: "x",
      distanciaMax: "30m",
      consumo: "4,6 W",
      alimentaçao: "12V - 24V",
      wireless: " MiMo 2x2",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/ptpptmp-2n-5-ghz-mimo-2x2-ptp-apc-5m",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/ficha_tecnica_-_cpe_2n_5ghz_mimo_2x2_apc_5m.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_de_instalacao_apc_5m_02-13_0.pdf",
      manual: "-",
    },
    {
      id: "17",
      linha: "radio",
      modelo: "APC 5M+",
      indicado: "BASE/PTP",
      garantia: "2 anos",
      ganho: "SEM ANTENA",
      potencia: "29 dBm - 800 mW",
      modulação: "Fast",
      pps: "60.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "x",
      distancia: "x",
      distanciaMax: "30m",
      consumo: "4,6 W",
      alimentaçao: "12V - 24V",
      wireless: " MiMo 2x2",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/ptpptmp-2n-5-ghz-mimo-2x2-apc-5m",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/datasheet_apc_5m_portugues_01-14_site.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_instalacao_apc_5m_02-18_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/integration/manual_apc_5m_5m-18_5m-90_2m-90_02-18.pdf",
    },
    {
      id: "15",
      linha: "radio",
      modelo: "APC 5M-18+",
      indicado: "PTP",
      garantia: "2 anos",
      ganho: "18 dBi",
      potencia: "29 dBm - 800 mW",
      modulação: "Fast",
      pps: "60.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-16\xB0 | V-16\xB0",
      distancia: "10Km",
      distanciaMax: "50m (CAT5E) 90m (CAT6)",
      consumo: "4,8 W",
      alimentaçao: "12V - 24V",
      wireless: " MiMo 2x2",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/cpeptp-5-ghz-18-dbi-mimo-2x2-apc-5m-18",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/datasheet_a4_apc_5m-18_site.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_apc_5m-18_01-18_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/integration/manual_apc_5m_5m-18_5m-90_2m-90_02-18.pdf",
    },
    {
      id: "19",
      linha: "radio",
      modelo: "APC 5M-90",
      indicado: "BASE",
      garantia: "N/A",
      ganho: "18 dBi",
      potencia: "29 dBm - 800 mW",
      modulação: "Fast",
      pps: "60.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-90\xB0 | V-16\xB0",
      distancia: "10Km",
      distanciaMax: "30m",
      consumo: "4,6 W",
      alimentaçao: "12V - 24V",
      wireless: " MiMo 2x2",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/basestation-5-ghz-18-dbi-mimo-2x2-basestation-apc-5m-90",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/datasheet_apc_5m-90.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_apc_5m-90_portugues_02-13_0.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/integration/manual_apc_5m_5m-18_5m-90_2m-90_02-18.pdf",
    },
    {
      id: "18",
      linha: "radio",
      modelo: "APC 5M-90+",
      indicado: "BASE",
      garantia: "2 anos",
      ganho: "18 dBi",
      potencia: "29 dBm - 800 mW",
      modulação: "Fast",
      pps: "60.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-90\xB0 | V-16\xB0",
      distancia: "10Km",
      distanciaMax: "30m",
      consumo: "4,6 W",
      alimentaçao: "12V - 24V",
      wireless: " MiMo 2x2",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/basestation-5-ghz-18-dbi-mimo-2x2-apc-5m-90",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/datasheet_apc_5m-90_site.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_apc_5m-90_portugues_02-18_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/integration/manual_apc_5m_5m-18_5m-90_2m-90_02-18.pdf",
    },
    {
      id: "20",
      linha: "radio",
      modelo: "APC Mach 5",
      indicado: "PTP",
      garantia: "N/A",
      ganho: "25 dBi",
      potencia: "29 dBm - 800 mW",
      modulação: "Fast",
      pps: "60.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-6\xB0 | V-9\xB0",
      distancia: "10Km",
      distanciaMax: "30m",
      consumo: "6,5 W",
      alimentaçao: "12V - 48V",
      wireless: " MiMo 2x2",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/ptp-5-ghz-23-dbi-mimo-2x2-apc-mach-5",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/datasheet_apc_mach-5.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_instalacao_apc_mach_5_site.pdf",
      manual: "-",
    },
    {
      id: "22",
      linha: "radio",
      modelo: "PTP 5-23",
      indicado: "PTP",
      garantia: "N/A",
      ganho: "23 dBi",
      potencia: "29 dBm - 800 mW",
      modulação: "Fast",
      pps: "80.000 Pps",
      throughputEfetivo: "200 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-6\xB0 | V-9\xB0",
      distancia: "10Km",
      distanciaMax: "30m",
      consumo: "8 W",
      alimentaçao: "48V | POE 802.3af",
      wireless: "MiMo 2x2",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/ptp-5-ghz-23-dbi-mimo-2x2-ptp-5-23-mimo-pro",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/datasheet_ptp_5-23_mimo_pro.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_instalacao_ptp_5-23_mimo_pro.pdf",
      manual: "-",
    },
    {
      id: "11",
      linha: "radio",
      modelo: "PTP 5-N MiMo Pro",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "SEM ANTENA",
      potencia: "29 dBm - 800 mW",
      modulação: "Giga",
      pps: "80.000 Pps",
      throughputEfetivo: "200 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "x",
      distancia: "x",
      distanciaMax: "30m",
      consumo: "8 W",
      alimentaçao: "48V | POE 802.3af",
      wireless: "MiMo 2x2",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/ptp-5-ghz-2n-mimo-2x2-ptp-5-n-mimo-pro",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/datasheet_ptp_5-n_mimo_pro_site.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_ptp_5-n_mimo_pro_01-18_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/integration/manual_ptp_mimo_pro_portugues_02-17.pdf",
    },
    {
      id: "1",
      linha: "radio",
      modelo: "WOG 212",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "12 dBi",
      potencia: "27 dBm - 500 mW",
      modulação: "Fast",
      pps: "N/A",
      throughputEfetivo: "90 Mbps",
      throughputNominal: "150 Mbps",
      aberturaHorVer: "H-60\xB0| V-30\xB0",
      distancia: "1-2Km",
      distanciaMax: "60m",
      consumo: "6,8 W",
      alimentaçao: "12V",
      wireless: "SiSo 1x1",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/cpe-24-ghz-12-dbi-wog-212",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/datasheet_wog_212_01-18.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_wog_212_04-18_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/integration/manual_wog_212_portugues_02-18_site.pdf",
    },
    {
      id: "12",
      linha: "radio",
      modelo: "WOM 5000",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "12 dBi",
      potencia: "28 dBm - 630 mW",
      modulação: "Fast",
      pps: "50.000 Pps",
      throughputEfetivo: "110 Mbps",
      throughputNominal: "150 Mbps",
      aberturaHorVer: "H-40\xB0 | V-15\xB0",
      distancia: "2Km",
      distanciaMax: "30m",
      consumo: "2,8 W",
      alimentaçao: "12V - 24V",
      wireless: "SiSo 1x1",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/cpe-5-ghz-12-dbi-com-sma-wom-5000",
      datasheet: "https://backend.intelbras.com/sites/default/files/2019-04/Datasheet_WOM_5000.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2020-11/guia%20de%20instalacao%20-%20familia%20wom%205000.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2020-11/manual%20do%20usuario%20-%20familia%20wom%205000.pdf",
    },
    {
      id: "14",
      linha: "radio",
      modelo: "WOM 5000 MiMo",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "14 dBi",
      potencia: "28 dBm - 630 mW",
      modulação: "Fast",
      pps: "50.000 Pps",
      throughputEfetivo: "160 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-40\xB0 | V-15\xB0",
      distancia: "4Km",
      distanciaMax: "30m",
      consumo: "2,8 W",
      alimentaçao: "12V - 24V",
      wireless: "MiMo 2x2",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/cpe-5-ghz-mimo-2x2-wom-5000-mimo",
      datasheet: "https://backend.intelbras.com/sites/default/files/2019-04/Datasheet_WOM_5000_MiMo.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2020-11/guia%20de%20instalacao%20-%20familia%20wom%205000.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2020-11/manual%20do%20usuario%20-%20familia%20wom%205000.pdf",
    },
    {
      id: "13",
      linha: "radio",
      modelo: "WOM 5000i",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "12 dBi",
      potencia: "28 dBm - 630 mW",
      modulação: "Fast",
      pps: "50.000 Pps",
      throughputEfetivo: "110 Mbps",
      throughputNominal: "150 Mbps",
      aberturaHorVer: "H-40\xB0 | V-15\xB0",
      distancia: "2Km",
      distanciaMax: "30m",
      consumo: "2,8 W",
      alimentaçao: "12V - 24V",
      wireless: "SiSo 1x1",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/cpe-5-ghz-12-dbi-wom-5000i",
      datasheet: "https://backend.intelbras.com/sites/default/files/2019-04/Datasheet_WOM_5000i.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2020-11/guia%20de%20instalacao%20-%20familia%20wom%205000.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2020-11/manual%20do%20usuario%20-%20familia%20wom%205000.pdf",
    },
  ],
  Np = [
    {
      id: "17",
      modelo: "S3028G-B",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "4 Independentes (SFP+)",
      taxaTransferencia: "95,2 Mpps",
      backplane: "128 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "x",
      poeExtender: "x",
      poePorta: "x",
      poeTotal: "x",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-l3-de-24-portas-gigabit-e-4-sfp-s3028g-b",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-12/datasheet-s3028g-b-pt.pdf",
      guia: "https://manuais-switches.intelbras.com.br/pt-BR/Serie3000/S3028G-B_guia.html",
      manual: "https://manuais-switches.intelbras.com.br/pt-BR/Serie3000/S3028G-B_web.html",
    },
    {
      id: "19",
      modelo: "S3028G-PB Max",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "4 Independentes (SFP+)",
      taxaTransferencia: "95,2 Mpps",
      backplane: "128 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "Sim | 802.3af - 802.3at",
      poeExtender: "x",
      poePorta: "30 W",
      poeTotal: "380 W",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-l3-de-24-portas-gigabit-poe-e-4-sfp-s3028g-pb-max",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-12/datasheet-s3028g-pb-max.pdf",
      guia: "https://manuais-switches.intelbras.com.br/pt-BR/Serie3000/S3028G-PB_Max_guia.html",
      manual: "https://manuais-switches.intelbras.com.br/pt-BR/Serie3000/S3028G-PB_Max_web.html",
    },
    {
      id: "18",
      modelo: "S3054G-B",
      linha: "switch",
      portas: "48 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "6 Independentes (SFP+)",
      taxaTransferencia: "160 Mpps",
      backplane: "216 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "x",
      poeExtender: "x",
      poePorta: "x",
      poeTotal: "x",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-l3-de-48-portas-gigabit-e-6-sfp-s3054g-b",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-12/datasheet-s3054g-b-pt.pdf",
      guia: "https://manuais-switches.intelbras.com.br/pt-BR/Serie3000/S3054G-B_guia.html",
      manual: "https://manuais-switches.intelbras.com.br/pt-BR/Serie3000/S3054G-B_web.html",
    },
    {
      id: "10",
      modelo: "SF 1600 Q+",
      linha: "switch",
      portas: "16 Portas",
      modulação: "Fast",
      gerenciavel: "x",
      sfp: "x",
      taxaTransferencia: "2,38 Mpps",
      backplane: "3,2 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "x",
      poeExtender: "x",
      poePorta: "x",
      poeTotal: "x",
      status: "Suporte",
      garantia: "2 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-16-portas-fast-ethernet-sf-1600-q",
      datasheet: "http://backend.intelbras.com/sites/default/files/2021-07/Datasheet%20SF%201600%20Q%2B.pdf",
      guia: "-",
      manual: "https://backend.intelbras.com/sites/default/files/2022-03/Manual_SF_1600_Q%2B_portugues_01-22_site.pdf",
    },
    {
      id: "11",
      modelo: "SF 1811 PoE",
      linha: "switch",
      portas: "16 Portas",
      modulação: "Giga (Uplink)",
      gerenciavel: "x",
      sfp: "1 Independente",
      taxaTransferencia: "5,36 Mpps",
      backplane: "7,2 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "Sim | 802.3af - 802.3at",
      poeExtender: "Sim",
      poePorta: "30 W",
      poeTotal: "180 W",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-16p-fast-poe-com-1p-gigabit-sf-1811-poe",
      datasheet: "http://backend.intelbras.com/sites/default/files/integration/datasheet_sf_1811_poe_01-18.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_SF%201811_PoE_01-22_site.pdf",
      manual: "-",
    },
    {
      id: "12",
      modelo: "SF 1821 PoE",
      linha: "switch",
      portas: "16 Portas",
      modulação: "Giga (Uplink)",
      gerenciavel: "x",
      sfp: "1 Combo",
      taxaTransferencia: "5.36 Mpps",
      backplane: "7,2 Gbps",
      pdAlive: "x",
      qos: "x",
      poe: "Sim | 802.3af - 802.3at",
      poeExtender: "Sim",
      poePorta: "30 W",
      poeTotal: "130 W",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-16-portas-fast-ethernet-poe-sf-1821-poe",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-02/Datasheet%20SF%201821%20PoE%20v2_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_SF_1821_PoE_02-22_site.pdf",
      manual: "-",
    },
    {
      id: "13",
      modelo: "SF 1822 Hi-PoE",
      linha: "switch",
      portas: "16 Portas",
      modulação: "Giga (Uplink)",
      gerenciavel: "x",
      sfp: "2 Combo",
      taxaTransferencia: "5.36 Mpps",
      backplane: "7,2 Gbps",
      pdAlive: "Sim",
      qos: "Sim",
      poe: "Sim | 802.3af - 802.3at",
      poeExtender: "Sim",
      poePorta: "1-2P 60W / 3-16P 30W",
      poeTotal: "135W",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-16-portas-fast-ethernet-poe-sf-1822-hi-poe",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-02/Datasheet%20SF%201822%20Hi-PoE%20v2.pdf",
      guia: "https://manuais-switches.intelbras.com.br/pt-BR/SF1822HiPoE_guia.html",
      manual: "-",
    },
    {
      id: "14",
      modelo: "SF 2400 QR+",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Fast",
      gerenciavel: "x",
      sfp: "x",
      taxaTransferencia: "3,5 Mpps",
      backplane: "4,8 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "x",
      poeExtender: "x",
      poePorta: "x",
      poeTotal: "x",
      status: "Suporte",
      garantia: "2 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-24-portas-fast-ethernet-sf-2400-qr",
      datasheet: "http://backend.intelbras.com/sites/default/files/integration/datasheet_sf_2400_qr.pdf",
      guia: "-",
      manual: "https://backend.intelbras.com/sites/default/files/2022-03/Manual_SF_2400%20QR%2B_portugues_01-22_site.pdf",
    },
    {
      id: "19",
      modelo: "SF 2622 MR L2",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Fast",
      gerenciavel: "Sim",
      sfp: "2 Combo",
      taxaTransferencia: "6,6 Mpps",
      backplane: "8 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "x",
      poeExtender: "x",
      poePorta: "x",
      poeTotal: "x",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-com-24-portas-fast-ethernet-2-portas-mini-gbic-sf-2622-mr-l2",
      datasheet: "http://backend.intelbras.com/sites/default/files/2021-05/Datasheet%20SF%202622%20MR%20L2%20editavel%202021_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_SF%202622%20MR%20L2_01-22_site_0.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-03/Manual_SF%202622%20MR%20L2_portugues_01-22_site.pdf",
    },
    {
      id: "2",
      modelo: "SF 500 Hi-PoE",
      linha: "switch",
      portas: "5 Portas",
      modulação: "Fast",
      gerenciavel: "x",
      sfp: "x",
      taxaTransferencia: "744Kpps",
      backplane: "1.8 Gbps",
      pdAlive: "Sim",
      qos: "Sim",
      poe: "Sim | 802.3af - 802.3at",
      poeExtender: "Sim",
      poePorta: "1P 60W / 2-4P 30W",
      poeTotal: "60 W ",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-5-portas-fast-ethernet-com-4-portas-poe-sf-500-hi-poe",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-10/Datasheet%20-%20SF%20500%20Hi-PoE.pdf",
      guia: "https://manuais-switches.intelbras.com.br/pt-BR/SF500HiPoE_guia.html",
      manual: "-",
    },
    {
      id: "1",
      modelo: "SF 500 PoE",
      linha: "switch",
      portas: "5 Portas",
      modulação: "Fast",
      gerenciavel: "x",
      sfp: "x",
      taxaTransferencia: "148 kpps",
      backplane: "1 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "Sim | 802.3af - 802.3at",
      poeExtender: "Sim",
      poePorta: "30 W",
      poeTotal: "58 W",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-5-portas-fast-ethernet-com-4-portas-poe-sf-500-poe",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-10/Datasheet%20SF%20500%20PoE_2021.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_SF_500_PoE_portugues_01-22_site.pdf",
      manual: "-",
    },
    {
      id: "3",
      modelo: "SF 800 Q+",
      linha: "switch",
      portas: "8 Portas",
      modulação: "Fast",
      gerenciavel: "x",
      sfp: "x",
      taxaTransferencia: "1,19 Mpps",
      backplane: "1,6 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "x",
      poeExtender: "x",
      poePorta: "x",
      poeTotal: "x",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-8-portas-fast-ethernet-sf-800-q",
      datasheet: "http://backend.intelbras.com/sites/default/files/integration/datasheet_sf_800_q_01-18.pdf",
      guia: "-",
      manual: "https://backend.intelbras.com/sites/default/files/2022-05/Manual%20do%20usu%C3%A1rio_SF800_05.22.pdf",
    },
    {
      id: "4",
      modelo: "SF 800 Q+ ULTRA",
      linha: "switch",
      portas: "8 Portas",
      modulação: "Fast",
      gerenciavel: "x",
      sfp: "x",
      taxaTransferencia: "1,19 Mpps",
      backplane: "1,6 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "x",
      poeExtender: "x",
      poePorta: "x",
      poeTotal: "x",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-8-portas-fast-ethernet-com-protecao-antissurto-sf-800-q-ultra",
      datasheet: "http://backend.intelbras.com/sites/default/files/integration/datasheet_sf_800_q_ultra_01-18.pdf",
      guia: "-",
      manual: "https://backend.intelbras.com/sites/default/files/2022-05/Manual%20do%20usu%C3%A1rio_SF800_05.22.pdf",
    },
    {
      id: "5",
      modelo: "SF 800 VLAN",
      linha: "switch",
      portas: "8 Portas",
      modulação: "Fast",
      gerenciavel: "x",
      sfp: "x",
      taxaTransferencia: "1,19 Mpps",
      backplane: "200 Mbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "x",
      poeExtender: "x",
      poePorta: "x",
      poeTotal: "x",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-8-portas-fast-ethernet-com-vlan-fixa-sf-800-vlan",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-05/datasheet_sf_800_vlan.pdf",
      guia: "-",
      manual: "https://backend.intelbras.com/sites/default/files/2022-05/Manual%20do%20usu%C3%A1rio_SF800_05.22.pdf",
    },
    {
      id: "6",
      modelo: "SF 800 VLAN ULTRA",
      linha: "switch",
      portas: "8 Portas",
      modulação: "Fast",
      gerenciavel: "x",
      sfp: "x",
      taxaTransferencia: "1,19 Mpps",
      backplane: "200 Mbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "x",
      poeExtender: "x",
      poePorta: "x",
      poeTotal: "x",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-8-portas-fast-ethernet-com-vlan-fixa-sf-800-vlan-ultra",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-05/datasheet_sf_800_vlan_ultra_05_22.pdf",
      guia: "-",
      manual: "https://backend.intelbras.com/sites/default/files/2022-05/Manual%20do%20usu%C3%A1rio_SF800_05.22.pdf",
    },
    {
      id: "8",
      modelo: "SF 900 Hi-PoE",
      linha: "switch",
      portas: "9 Portas",
      modulação: "Fast",
      gerenciavel: "x",
      sfp: "x",
      taxaTransferencia: "1.34 Mpps",
      backplane: "1,8 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "Sim | 802.3af - 802.3at",
      poeExtender: "Sim",
      poePorta: "1P 60W / 2-8P 30W",
      poeTotal: "96 W",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-9-portas-fast-ethernet-8-portas-poe-sf-900-hi-poe",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-10/Datasheet%20SF%20900%20Hi-PoE%20v2.pdf",
      guia: "https://manuais-switches.intelbras.com.br/pt-BR/SF900HiPoE_guia.html",
      manual: "-",
    },
    {
      id: "7",
      modelo: "SF 900 PoE",
      linha: "switch",
      portas: "9 Portas",
      modulação: "Fast",
      gerenciavel: "x",
      sfp: "x",
      taxaTransferencia: "1,48 Mpps",
      backplane: "1,8 Gbps",
      pdAlive: "x",
      qos: "x",
      poe: "Sim | 802.3af - 802.3at",
      poeExtender: "Sim",
      poePorta: "30 W",
      poeTotal: "97 W",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-9-portas-fast-ethernet-com-8-portas-poe-sf-900-poe",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-10/Datasheet%20SF%20900%20PoE%202021.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_SF%20900%20PoE_01-22_site_0.pdf",
      manual: "-",
    },
    {
      id: "21",
      modelo: "SG 1002 MR",
      linha: "switch",
      portas: "8 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "2 Independentes",
      taxaTransferencia: "14,9 Mpps",
      backplane: "20 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "x",
      poeExtender: "x",
      poePorta: "x",
      poeTotal: "x",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-8-portas-gigabit-ethernet-sg-1002-mr",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-04/datasheet_switches_gerenciaveis_03-22_2_1.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_de_instalacao_sg-1002-mr_portugues_01-18_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/integration/manual_do_usuario_sg_1002_mr_03-18_site.pdf",
    },
    {
      id: "20",
      modelo: "SG 1002 MR L2+",
      linha: "switch",
      portas: "8 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "2 Independentes",
      taxaTransferencia: "15 Mpps",
      backplane: "20 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "x",
      poeExtender: "x",
      poePorta: "x",
      poeTotal: "x",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-com-8-portas-giga-2-portas-mini-gbic-sg-1002-mr-l2",
      datasheet: "http://backend.intelbras.com/sites/default/files/2021-05/Datasheet%20SG%201002%20MR%20L2%2B%202021.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_SG%201002%20MR%20L2%2B_01-22_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-05/Manual_SG%201002%20MR%20L2%20_02-22_site%20%282%29.pdf",
    },
    {
      id: "18",
      modelo: "SG 2400 QR",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Giga",
      gerenciavel: "x",
      sfp: "x",
      taxaTransferencia: "35,7 Mpps",
      backplane: "48 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "x",
      poeExtender: "x",
      poePorta: "x",
      poeTotal: "x",
      status: "Suporte",
      garantia: "2 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-24-portas-gigabit-ethernet-sg-2400-qr",
      datasheet: "http://backend.intelbras.com/sites/default/files/2020-11/Datasheet%20SG%202400%20QR.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_SG_2400_QR_portugues_01-22_site.pdf",
      manual: "-",
    },
    {
      id: "17",
      modelo: "SG 2400 QR+",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Giga",
      gerenciavel: "x",
      sfp: "x",
      taxaTransferencia: "35,7 Mpps",
      backplane: "48 Gbps",
      pdAlive: "x",
      qos: "x",
      poe: "x",
      poeExtender: "x",
      poePorta: "x",
      poeTotal: "x",
      status: "Suporte",
      garantia: "2 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-24-portas-gigabit-ethernet-sg-2400-qr-0",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-04/Datasheet%20SG%202400%20QR%2B.pdf",
      guia: "https://manuais-switches.intelbras.com.br/pt-BR/SG2400QR+_guia.html",
      manual: "-",
    },
    {
      id: "22",
      modelo: "SG 2404 MR",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "4 Combo",
      taxaTransferencia: "35,7 Mpps",
      backplane: "48 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "x",
      poeExtender: "x",
      poePorta: "x",
      poeTotal: "x",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-24-portas-gigabit-ethernet-sg-2404-mr",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-04/datasheet_switches_gerenciaveis_03-22_2_1.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_SG%202404%20MR_01-22_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-03/Manual_SG_2404_MR_01-22_site.pdf",
    },
    {
      id: "23",
      modelo: "SG 2404 MR L2+",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "4 Combo",
      taxaTransferencia: "38,7 Mpps",
      backplane: "56 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "x",
      poeExtender: "x",
      poePorta: "x",
      poeTotal: "x",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-24p-giga-4p-gbic-sg-2404-mr-l2",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-08/Datasheet%20SG%202404%20MR%20L2%2B_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_SG_2404_MR_L2%2B_01-22_site.pdf",
      manual: "https://manuais-switches.intelbras.com.br/pt-BR/LinhaMR.html",
    },
    {
      id: "24",
      modelo: "SG 2404 PoE",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "4 Combo",
      taxaTransferencia: "35,7 Mpps",
      backplane: "48 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "Sim | 802.3af - 802.3at",
      poeExtender: "x",
      poePorta: "30 W",
      poeTotal: "180 W",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-24-portas-poe-gigabit-ethernet-sg-2404-poe",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-04/datasheet_switches_gerenciaveis_03-22_2_1.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_SG_2404_PoE_portugues_01-22_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-03/Manual_SG_2404_PoE_portugues_01-22_site.pdf",
    },
    {
      id: "25",
      modelo: "SG 2404 PoE L2+",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "4 Combo",
      taxaTransferencia: "41,7 Mbps ",
      backplane: "56 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "Sim | 802.3af - 802.3at",
      poeExtender: "x",
      poePorta: "35 W",
      poeTotal: "240 W",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/sg-2404-poe-l2-switch-gerenciavel-24-portas-poe-gigabit-ethernet-sg-2404-poe-l2",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-08/Datasheet%20SG%202404%20PoE%20L2%2B.pdf",
      guia: "https://manuais-switches.intelbras.com.br/pt-BR/SG2404PoEL2+_guia.html",
      manual: "https://manuais-switches.intelbras.com.br/pt-BR/S-Series.html",
    },
    {
      id: "27",
      modelo: "SG 2404D MR L2+",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "4 Independentes",
      taxaTransferencia: "44,3 Mpps",
      backplane: "56 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "x",
      poeExtender: "x",
      poePorta: "x",
      poeTotal: "x",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-24-portas-gigabit-ethernet-sg-2404d-mr-l2",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-08/datasheet-sg-2404d-mr-l2%2B-pt.pdf",
      guia: "-",
      manual: "https://manuais-switches.intelbras.com.br/pt-BR/SG2404DMRL2+_manual.html",
    },
    {
      id: "26",
      modelo: "SG 2404D PoE Max",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "4 Independentes",
      taxaTransferencia: "44,3 Mpps",
      backplane: "56 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "Sim | 802.3af/B - 802.3at",
      poeExtender: "x",
      poePorta: "30 W",
      poeTotal: "320 W",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-24-portas-gigabit-4-mini-gbic-sg-2404d-poe-max",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-08/SG%202404D%20PoE%20Max%20datasheet_1.pdf",
      guia: "https://manuais-switches.intelbras.com.br/pt-BR/SG2404DPoEMax_guia.html",
      manual: "https://manuais-switches.intelbras.com.br/pt-BR/SG2404DPoEMax_manual.html",
    },
    {
      id: "28",
      modelo: "SG 5200 MR",
      linha: "switch",
      portas: "48 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "4 Independentes",
      taxaTransferencia: "77,3 Mpps",
      backplane: "104 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "x",
      poeExtender: "x",
      poePorta: "x",
      poeTotal: "x",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-48-portas-gigabit-ethernet-sg-5200-mr",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-04/datasheet_switches_gerenciaveis_03-22_2_1.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_sg_5200_mr_site_arquivo_final.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-03/Manual_SG_5200_MR_portugues_01-22_site.pdf",
    },
    {
      id: "29",
      modelo: "SG 5204 MR L2+",
      linha: "switch",
      portas: "48 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "4 Independentes",
      taxaTransferencia: "77,4 Mpps",
      backplane: "104 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "x",
      poeExtender: "x",
      poePorta: "x",
      poeTotal: "x",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-48p-giga-sg-5204-mr-l2",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-08/Datasheet%20SG%205204%20MR%20L2%2B.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_usuario_SG_5204_MR%20L2%2B_01-22_site.pdf",
      manual: "https://manuais-switches.intelbras.com.br/pt-BR/LinhaMR.html",
    },
    {
      id: "15",
      modelo: "SG 800 Q+",
      linha: "switch",
      portas: "8 Portas",
      modulação: "Giga",
      gerenciavel: "x",
      sfp: "x",
      taxaTransferencia: "11,9 Mpps",
      backplane: "16 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "x",
      poeExtender: "x",
      poePorta: "x",
      poeTotal: "x",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-com-8-portas-gigabit-ethernet-sg-800-q",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-11/SG%20800%20Q%2B%20-%20Datasheet_compilado%2018.11.22.pdf",
      guia: "https://manuais-switches.intelbras.com.br/pt-BR/SG_800.html",
      manual: "-",
    },
    {
      id: "16",
      modelo: "SG 800 VLAN",
      linha: "switch",
      portas: "8 Portas",
      modulação: "Giga",
      gerenciavel: "x",
      sfp: "x",
      taxaTransferencia: "11,9 Mpps",
      backplane: "2 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "x",
      poeExtender: "x",
      poePorta: "x",
      poeTotal: "x",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-com-8-portas-gigabit-ethernet-com-vlan-fixa-sg-800-vlan",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-11/datasheet-sg-800%20VLAN%2018.11.22.pdf",
      guia: "https://manuais-switches.intelbras.com.br/pt-BR/SG_800.html",
      manual: "-",
    },
    {
      id: "9",
      modelo: "SF 910 PAC",
      linha: "switch",
      portas: "9 Portas",
      modulação: "Fast",
      gerenciavel: "x",
      sfp: "x",
      taxaTransferencia: "2.67 Mpps",
      backplane: "3,6 Gbps",
      pdAlive: "x",
      qos: "Sim",
      poe: "x",
      poeExtender: "x",
      poePorta: "x",
      poeTotal: "x",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-com-9-portas-sf-910-pac",
      datasheet: "http://backend.intelbras.com/sites/default/files/2020-08/datasheet-SF-910-PAC-v2.pdf",
      guia: "-",
      manual: "https://backend.intelbras.com/sites/default/files/2022-03/Manual_SF%20910%20PAC_portugues_01-22_site.pdf",
    },
  ],
  Ep = [
    {
      id: "5",
      linha: "onu/ont",
      modelo: "121W",
      portas: "2 portas",
      modulação: "Giga/Fast",
      fxs: "1 Porta",
      tipo: "EPON/GPON",
      ssid: "4 SSIDs",
      tr069: "Sim",
      customize: "Sim",
      remotize: "x",
      transmissao2ghz: "300 Mbps",
      transmissao5ghz: "x",
      transmissaoUPDown: "x",
      fibra: "x",
      cobertura: "N/A",
      antenas: "2",
      clientesSimultaneos: "64 usu\xE1rios",
      sensibilidade: "-7 dBm | -27 dBm",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/conversor-de-sinal-gponepon-em-sinal-ethernet-ou-wi-fi-ont-121-w",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-06/Datasheet%20ONT%20121%20W_1.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_do_usuario_ONT_121W_01-22.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-06/Manual_do_usuario_ONT_121W_portugues_01-22.pdf",
    },
    {
      id: "7",
      linha: "onu/ont",
      modelo: "R1",
      portas: "1 porta",
      modulação: "Giga",
      fxs: "x",
      tipo: "EPON/GPON",
      ssid: "x",
      tr069: "Sim",
      customize: "Sim",
      remotize: "x",
      transmissao2ghz: "x",
      transmissao5ghz: "x",
      transmissaoUPDown: "x",
      fibra: "Monomodo",
      cobertura: "x",
      antenas: "x",
      clientesSimultaneos: "x",
      sensibilidade: "-7 dBm | -27 dBm",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/modem-optico-pon-lan-1p-onu-r1",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-09/Datasheet%20ONU%20R1%20CKD%20V3.pdf",
      guia: "https://guiasmanuais.intelbras.com.br/R1/home.html",
      manual: "https://guiasmanuais.intelbras.com.br/R1/home.html",
    },
    {
      id: "1",
      linha: "onu/ont",
      modelo: "WiFiber 120 AC",
      portas: "2 portas",
      modulação: "Giga",
      fxs: "x",
      tipo: "EPON/GPON",
      ssid: "8 SSIDs",
      tr069: "Sim",
      customize: "Sim",
      remotize: "Sim",
      transmissao2ghz: "300 Mbps",
      transmissao5ghz: "867 Mbps",
      transmissaoUPDown: "x",
      fibra: "x",
      cobertura: "120 m\xB2",
      antenas: "4",
      clientesSimultaneos: "64 usu\xE1rios",
      sensibilidade: "-7 dBm | -27 dBm",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/modem-optico-pon-lan-2p-wi-fi-ac-wifiber-120-ac",
      datasheet:
        "http://backend.intelbras.com/sites/default/files/2022-09/Ficha%20t%C3%A9cnica%20%28Datasheet%29%20%E2%80%93%20WiFiber%20120%20AC_0.pdf",
      guia: "https://guiasmanuais.intelbras.com.br/WiFiber120AC/home.html",
      manual: "https://guiasmanuais.intelbras.com.br/WiFiber120AC/home.html",
    },
    {
      id: "3",
      linha: "onu/ont",
      modelo: "WiFiber 1200R",
      portas: "2 portas",
      modulação: "Giga",
      fxs: "x",
      tipo: "EPON/GPON",
      ssid: "10 SSIDs",
      tr069: "Sim",
      customize: "Sim",
      remotize: "Sim",
      transmissao2ghz: "300 Mbps",
      transmissao5ghz: "867 Mbps",
      transmissaoUPDown: "x",
      fibra: "x",
      cobertura: "100 m\xB2",
      antenas: "4",
      clientesSimultaneos: "64 usu\xE1rios",
      sensibilidade: "-8 dBm | -28 dBm",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/modem-optico-pon-lan-2p-wi-fi-ac-ont-wifiber-1200r",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-09/Datasheet%20ONT%20WiFiber%201200R%20Editavel%20V3.pdf",
      guia: "https://guiasmanuais.intelbras.com.br/WiFiber1200R/home.html",
      manual: "https://guiasmanuais.intelbras.com.br/WiFiber1200R/home.html",
    },
    {
      id: "2",
      linha: "onu/ont",
      modelo: "WiFiber 121 AC",
      portas: "2 portas",
      modulação: "Giga",
      fxs: "1 Porta",
      tipo: "EPON/GPON",
      ssid: "8 SSIDs",
      tr069: "Sim",
      customize: "Sim",
      remotize: "Sim",
      transmissao2ghz: "300 Mbps",
      transmissao5ghz: "867 Mbps",
      transmissaoUPDown: "x",
      fibra: "x",
      cobertura: "120 m\xB2",
      antenas: "4",
      clientesSimultaneos: "64 usu\xE1rios",
      sensibilidade: "-7 dBm | -27 dBm",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/modem-optico-pon-lan-2p-fxs-1p-wi-fi-ac-wifiber-121-ac",
      datasheet:
        "http://backend.intelbras.com/sites/default/files/2022-09/Ficha%20t%C3%A9cnica%20%28Datasheet%29%20%E2%80%93%20WiFiber%20121%20AC.pdf",
      guia: "https://guiasmanuais.intelbras.com.br/WiFiber121AC/home.html",
      manual: "https://guiasmanuais.intelbras.com.br/WiFiber121AC/home.html",
    },
    {
      id: "11",
      linha: "onu/ont",
      modelo: "WiFiber AX 1800",
      portas: "4 portas",
      modulação: "Giga",
      fxs: "x",
      tipo: "EPON/GPON",
      ssid: "10 SSIDs",
      tr069: "Sim",
      customize: "Sim",
      remotize: "Sim",
      transmissao2ghz: "570 Mbps",
      transmissao5ghz: "1200 Mbps",
      transmissaoUPDown: "x",
      fibra: "x",
      cobertura: "140 m\xB2",
      antenas: "4",
      clientesSimultaneos: "64 usu\xE1rios",
      sensibilidade: "-7 dBm | -27 dBm",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/modem-optico-pon-lan-4p-wi-fi-6-wifiber-ax-1800",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-11/datasheet-wifiber-ax-1800-pt.pdf",
      guia: "-",
      manual: "https://backend.intelbras.com/sites/default/files/2022-11/manual-do-usuario-wifiber-ax-1800-pt.pdf",
    },
    {
      id: "12",
      linha: "onu/ont",
      modelo: "WiFiber AX 1800V",
      portas: "4 portas",
      modulação: "Giga",
      fxs: "1 Porta",
      tipo: "EPON/GPON",
      ssid: "10 SSIDs",
      tr069: "Sim",
      customize: "Sim",
      remotize: "Sim",
      transmissao2ghz: "570 Mbps",
      transmissao5ghz: "1200 Mbps",
      transmissaoUPDown: "x",
      fibra: "x",
      cobertura: "140 m\xB2",
      antenas: "4",
      clientesSimultaneos: "64 usu\xE1rios",
      sensibilidade: "-7 dBm | -27 dBm",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/modem-optico-pon-lan-4p-fxs-1p-usb-1p-wi-fi-6-wifiber-ax-1800v",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-11/datasheet-wifiber-ax-1800v-pt.pdf",
      guia: "-",
      manual: "https://backend.intelbras.com/sites/default/files/2022-11/manual-do-usuario-wifiber-ax-1800v-pt.pdf",
    },
    {
      id: "8",
      linha: "onu/ont",
      modelo: "110B",
      portas: "1 porta",
      modulação: "Giga",
      fxs: "x",
      tipo: "EPON/GPON",
      ssid: "x",
      tr069: "x",
      customize: "Sim",
      remotize: "x",
      transmissao2ghz: "x",
      transmissao5ghz: "x",
      transmissaoUPDown: "x",
      fibra: "Monomodo",
      cobertura: "x",
      antenas: "x",
      clientesSimultaneos: "x",
      sensibilidade: "-7 dBm | -27 dBm",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/conversor-de-sinal-pon-para-sinal-ethernet-onu-110-b",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-11/Datasheet%20ONU%20110B.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-10/Guia_ONU_110_B.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-10/Manual_ONU_110B.pdf",
    },
    {
      id: "4",
      linha: "onu/ont",
      modelo: "142NW",
      portas: "4 portas",
      modulação: "Giga",
      fxs: "2 Portas",
      tipo: "EPON/GPON",
      ssid: "4 SSIDs",
      tr069: "Sim",
      customize: "Sim",
      remotize: "x",
      transmissao2ghz: "300 Mbps",
      transmissao5ghz: "x",
      transmissaoUPDown: "x",
      fibra: "x",
      cobertura: "N/A",
      antenas: "2",
      clientesSimultaneos: "64 usu\xE1rios",
      sensibilidade: "-8 dBm | -27 dBm",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/conversor-de-sinal-gponepon-em-sinal-ethernet-ou-wi-fi-ont-142n-w",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-06/Datasheet%20ONT%20142N%20W_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_do_usuario_ONT_142NW_portugues_01-22.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-06/Manual_de_usuario_ONT_142_NW_portugues_01-22.pdf",
    },
    {
      id: "10",
      linha: "onu/ont",
      modelo: "110",
      portas: "1 porta",
      modulação: "Giga",
      fxs: "x",
      tipo: "EPON/GPON",
      ssid: "x",
      tr069: "x",
      customize: "x",
      remotize: "x",
      transmissao2ghz: "x",
      transmissao5ghz: "x",
      transmissaoUPDown: "1000 Mbps",
      fibra: "Monomodo",
      cobertura: "x",
      antenas: "x",
      clientesSimultaneos: "x",
      sensibilidade: "-8 dBm | -27 dBm",
      status: "Phaseout",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/1-porta-gigabit-ethernet-onu-110",
      datasheet: "http://backend.intelbras.com/sites/default/files/2020-07/Datasheet-onu-110.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2020-09/Guia_ONU_110_portugues_02-20_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2021-05/Manual_ONU_110_portugues_01-21_site.pdf",
    },
    {
      id: "9",
      linha: "onu/ont",
      modelo: "110G",
      portas: "1 porta",
      modulação: "Giga",
      fxs: "x",
      tipo: "GPON",
      ssid: "x",
      tr069: "x",
      customize: "x",
      remotize: "x",
      transmissao2ghz: "x",
      transmissao5ghz: "x",
      transmissaoUPDown: "1000 Mbps",
      fibra: "Monomodo",
      cobertura: "x",
      antenas: "x",
      clientesSimultaneos: "x",
      sensibilidade: "-8 dBm | -28 dBm",
      status: "Phaseout",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/onu-1-porta-gigabit-ethernet-onu-110-g",
      datasheet: "https://backend.intelbras.com/sites/default/files/2019-11/Datasheet_ONU_110G_01-19.PDF",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_onu_110_g_portugues_01-16.pdf",
      manual: "-",
    },
    {
      id: "6",
      linha: "onu/ont",
      modelo: "142NG",
      portas: "4 portas",
      modulação: "Giga",
      fxs: "2 Portas",
      tipo: "GPON",
      ssid: "4 SSIDs",
      tr069: "Sim",
      customize: "x",
      remotize: "x",
      transmissao2ghz: "300 Mbps",
      transmissao5ghz: "x",
      transmissaoUPDown: "x",
      fibra: "x",
      cobertura: "N/A",
      antenas: "2",
      clientesSimultaneos: "16 usu\xE1rios/ssid",
      sensibilidade: "-7 dBm | -27 dBm",
      status: "Phaseout",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/ont-4-portas-gigabit-ethernet-e-2-portas-fxs-e-wi-fi-ont-142n-g",
      datasheet: "https://backend.intelbras.com/sites/default/files/2019-11/Datasheet_Gpon_ONT_1420_G_e_ONT_142N_G_01-19.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_ONT_142N_G_portugues_01-22_0.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-06/Manual_do_usuario_ONT_142N_G_1420_G_portugues_01-22.pdf",
    },
  ],
  Ap = [
    {
      id: "11",
      modelo: "ACTION A 1200",
      linha: "roteador",
      cobertura: "N/A",
      raio: "N/A",
      usuarioMax: "N/A",
      planoRecomendado: "N/A",
      QtdePortas: "1 (USB)",
      modulação: "USB 3.0",
      datarateMax2G: " 300 Mbps",
      datarateMax5G: " 867 Mbps",
      ipv6: "Sim",
      wps: "N/A",
      antenas: "2x2 Compartilhadas",
      ganho: "1dBi (2,4GHz) | 2dBi (5GHz)",
      potenciaMax: "100 mW (2,4GHz) | 30 mW (5GHz)",
      tensao: "5V (USB)",
      consumo: "N/A",
      repetidor: "N/A",
      roteador: "N/A",
      cliente: "N/A",
      ap: "N/A",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/adaptador-usb-wireless-dual-band-action-a1200",
      datasheet: "http://backend.intelbras.com/sites/default/files/2021-06/Datasheet%20A1200_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-07/Manual_ACtion_1200_portugues_01-21_site.pdf",
      manual: "-",
    },
    {
      id: "3",
      modelo: "ACTION RF 1200",
      linha: "roteador",
      cobertura: "80 m\xB2",
      raio: "5,04m",
      usuarioMax: "20 usu\xE1rios",
      planoRecomendado: "At\xE9 100Mbps",
      QtdePortas: "3 (LAN) + 1 (WAN)",
      modulação: "Fast",
      datarateMax2G: " 300 Mbps",
      datarateMax5G: " 867 Mbps",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 (2,4GHz) // 2x2 (5 GHz)",
      ganho: "5dBi (2,4GHz) | 5dBi (5GHz)",
      potenciaMax: "63 mW (2,4GHz) | 126 mW (5GHz)",
      tensao: "9V (1A)",
      consumo: "9W",
      repetidor: "Sim",
      roteador: "Sim",
      cliente: "Sim",
      ap: "Sim",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wireless-smart-dual-band-action-rf-1200",
      datasheet: "http://backend.intelbras.com/sites/default/files/2021-12/Datasheet%20ACtion%20RF%201200%20-%2001.12.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-10/Guia_Action_RF1200_02-21_site_0.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-09/Manual_ACTION_RF1200_02-22.pdf",
    },
    {
      id: "6",
      modelo: "ACTION RG 1200",
      linha: "roteador",
      cobertura: "120 m\xB2",
      raio: "6,18m",
      usuarioMax: "40 usu\xE1rios",
      planoRecomendado: "Acima de 100Mbps",
      QtdePortas: "3 (LAN) + 1 (WAN)",
      modulação: "Giga",
      datarateMax2G: " 300 Mbps",
      datarateMax5G: " 867 Mbps",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 (2,4GHz) // 2x2 (5 GHz)",
      ganho: "5dBi (2,4GHz) | 5dBi (5GHz)",
      potenciaMax: "158 mW (2,4GHz) | 158 mW (5GHz)",
      tensao: "12V (1A)",
      consumo: "12W",
      repetidor: "Sim",
      roteador: "Sim",
      cliente: "Sim",
      ap: "Sim",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wireless-smart-dual-band-gigabit-action-rg-1200",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-11/Datasheet%20ACtion%20RG%201200%20-%20Ficha%20t%C3%A9cnica.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_Action_RG1200_06-22_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-10/Manual_ACTION_RG1200_03-22.pdf",
    },
    {
      id: "7",
      modelo: "GF 1200",
      linha: "roteador",
      cobertura: "100 m\xB2",
      raio: "5,64m",
      usuarioMax: "30 usu\xE1rios",
      planoRecomendado: "Acima de 100Mbps",
      QtdePortas: "3 (LAN) + 1 (WAN)",
      modulação: "Giga WAN | Fast LAN",
      datarateMax2G: " 300 Mbps",
      datarateMax5G: " 867 Mbps",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 (2,4GHz) // 2x2 (5 GHz)",
      ganho: "5dBi (2,4GHz) | 5dBi (5GHz)",
      potenciaMax: "316 mW (2,4GHz) | 158 mW (5GHz)",
      tensao: "12V (1A)",
      consumo: "12W",
      repetidor: "x",
      roteador: "Sim",
      cliente: "x",
      ap: "x",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wi-fi-5-ac-1200-com-porta-internet-giga-e-lan-fast-wi-force-gf-1200",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-04/Datasheet%20Wi-Force%20GF%201200%20-%2028042022.pdf",
      guia: "https://manual-bifrost.intelbras.com.br/",
      manual: "https://manual-bifrost.intelbras.com.br/",
    },
    {
      id: "12",
      modelo: "IWA 3001",
      linha: "roteador",
      cobertura: "N/A",
      raio: "N/A",
      usuarioMax: "N/A",
      planoRecomendado: "At\xE9 40Mbps",
      QtdePortas: "1 (USB)",
      modulação: "USB 2.0",
      datarateMax2G: " 300 Mbps",
      datarateMax5G: "x",
      ipv6: "Sim",
      wps: "N/A",
      antenas: "2x2 (2,4GHz)",
      ganho: "3,5 dBi externa | 1 dBi interna",
      potenciaMax: "100 mW (2,4GHz)",
      tensao: "5V (USB)",
      consumo: "N/A",
      repetidor: "N/A",
      roteador: "N/A",
      cliente: "N/A",
      ap: "N/A",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/adaptador-usb-wireless-com-antena-externa-iwa-3001",
      datasheet: "http://backend.intelbras.com/sites/default/files/2021-02/datasheet-IWA-3001_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-10/Manual_IWA_3001_portugues_01-21_site_0.pdf",
      manual: "-",
    },
    {
      id: "1",
      modelo: "RF 301K",
      linha: "roteador",
      cobertura: "70 m\xB2",
      raio: "4,72m",
      usuarioMax: "10 usu\xE1rios",
      planoRecomendado: "At\xE9 40Mbps",
      QtdePortas: "3 (LAN) + 1 (WAN)",
      modulação: "Fast",
      datarateMax2G: " 300 Mbps",
      datarateMax5G: "x",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 (2,4GHz)",
      ganho: "5dBi (2,4GHz)",
      potenciaMax: "100 mW (2,4GHz)",
      tensao: "9 - 12V (0,6 - 1A)",
      consumo: "5,4W",
      repetidor: "Sim",
      roteador: "Sim",
      cliente: "Sim",
      ap: "Sim",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wi-fi-n-300-mpbs-rf-301k",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-10/RF%20301K%20datasheet%2031.10.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-01/Guia_RF_301K_01-22.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-07/Manual_RF_301K_portugues_07-22_site_0.pdf",
    },
    {
      id: "13",
      modelo: "RX 1500",
      linha: "roteador",
      cobertura: "140 m\xB2",
      raio: "66,755",
      usuarioMax: "128 usu\xE1rios",
      planoRecomendado: "At\xE9 600Mbps",
      QtdePortas: "3 (LAN) + 1 (WAN)",
      modulação: "Giga",
      datarateMax2G: " 300 Mbps",
      datarateMax5G: " 1200 Mbps",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 (2,4GHz) // 2x2 (5 GHz)",
      ganho: "5dBi (2,4GHz) | 5dBi (5GHz)",
      potenciaMax: "158 mW (2,4GHz) | 158 mW (5GHz)",
      tensao: "12V (1A)",
      consumo: "12W",
      repetidor: "x",
      roteador: "Sim",
      cliente: "x",
      ap: "x",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wi-fi-6-dual-band-ax-1500-rx-1500",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-11/Datasheet%20RX%201500%20-%20Ficha%20t%C3%A9cnica.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-08/guia-de-instalacao-rx-1500-pt.pdf",
      manual: "https://manuais.intelbras.com.br/manual-roteador-rx-1500/",
    },
    {
      id: "5",
      modelo: "TWIBI FAST",
      linha: "roteador",
      cobertura: "100 m\xB2",
      raio: "5,64m",
      usuarioMax: "40 usu\xE1rios",
      planoRecomendado: "At\xE9 100Mbps",
      QtdePortas: "1(LAN) + 1(W / L)",
      modulação: "Fast",
      datarateMax2G: " 300 Mbps",
      datarateMax5G: " 867 Mbps",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 Compartilhadas",
      ganho: "3dBi (Compartilhadas)",
      potenciaMax: "160 mW (2,4GHz | 5GHz)",
      tensao: "9V (1A)",
      consumo: "9W",
      repetidor: "x",
      roteador: "Sim",
      cliente: "x",
      ap: "Sim",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wi-fi-5-mesh-twibi-fast",
      datasheet: "http://backend.intelbras.com/sites/default/files/2021-12/Datasheet%20Twibi%20Fast%20-%2001.12.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2020-11/Guia-de-instalacao-twibi-fast-01.20.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-11/Manual_Twibi_FAST_portugues_05-22.pdf",
    },
    {
      id: "9",
      modelo: "TWIBI GIGA",
      linha: "roteador",
      cobertura: "180 m\xB2",
      raio: "7,56m",
      usuarioMax: "60 usu\xE1rios",
      planoRecomendado: "At\xE9 400Mbps",
      QtdePortas: "1(LAN) + 1(W / L)",
      modulação: "Giga",
      datarateMax2G: " 300 Mbps",
      datarateMax5G: " 867 Mbps",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 Compartilhadas",
      ganho: "3dBi (Compartilhadas)",
      potenciaMax: "315 mW (2,4GHz | 5GHz)",
      tensao: "12V(1,5)",
      consumo: "18W",
      repetidor: "x",
      roteador: "Sim",
      cliente: "x",
      ap: "Sim",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wireless-mesh-twibi-giga",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-12/Datasheet%20Twibi%20Giga%20-%2020.12.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-11/Manual_Twibi_GIGA_portugues_05-22.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-12/Manual_Twibi_GIGA_portugues_06-22_0.pdf",
    },
    {
      id: "10",
      modelo: "TWIBI GIGA+",
      linha: "roteador",
      cobertura: "180 m\xB2",
      raio: "7,56m",
      usuarioMax: "60 usu\xE1rios",
      planoRecomendado: "At\xE9 400Mbps",
      QtdePortas: "1(LAN) + 1(W / L)",
      modulação: "Giga",
      datarateMax2G: " 300 Mbps",
      datarateMax5G: " 867 Mbps",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 Compartilhadas",
      ganho: "3dBi (Compartilhadas)",
      potenciaMax: "315 mW (2,4GHz | 5GHz)",
      tensao: "12V (1A)",
      consumo: "12W",
      repetidor: "x",
      roteador: "Sim",
      cliente: "x",
      ap: "Sim",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wi-fi-5-mesh-ac-1200-twibi-giga",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-12/Datasheet%20Twibi%20Giga%2B%20-%2020.12.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-02/Guia_Twibi_Giga%2B_03-20_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-12/Manual_Twibi_GIGA%20_portugues_07-22.pdf",
    },
    {
      id: "2",
      modelo: "W4 300F",
      linha: "roteador",
      cobertura: "70 m\xB2",
      raio: "4,72m",
      usuarioMax: "10 usu\xE1rios",
      planoRecomendado: "At\xE9 70Mbps",
      QtdePortas: "3 (LAN) + 1 (WAN)",
      modulação: "Fast",
      datarateMax2G: " 300 Mbps",
      datarateMax5G: "x",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 (2,4GHz)",
      ganho: "5dBi (2,4GHz)",
      potenciaMax: "250 mW (2,4GHz)",
      tensao: "12V (1A)",
      consumo: "12W",
      repetidor: "x",
      roteador: "Sim",
      cliente: "x",
      ap: "x",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wi-fi-4-wi-force-w4-300f",
      datasheet: "http://backend.intelbras.com/sites/default/files/2021-11/Datasheet%20Wi-Force%20W4-300F%20-%2018112021.pdf",
      guia: "https://manual-bifrost.intelbras.com.br/",
      manual: "https://manual-bifrost.intelbras.com.br/",
    },
    {
      id: "4",
      modelo: "W5 1200F",
      linha: "roteador",
      cobertura: "80 m\xB2",
      raio: "5,04m",
      usuarioMax: "20 usu\xE1rios",
      planoRecomendado: "At\xE9 100Mbps",
      QtdePortas: "3 (LAN) + 1 (WAN)",
      modulação: "Fast",
      datarateMax2G: " 300 Mbps",
      datarateMax5G: " 867 Mbps",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 (2,4GHz) // 2x2 (5 GHz)",
      ganho: "5dBi (2,4GHz) | 5dBi (5GHz)",
      potenciaMax: "250 mW (2,4GHz) | 200 mW (5GHz)",
      tensao: "12V (1A)",
      consumo: "12W",
      repetidor: "x",
      roteador: "Sim",
      cliente: "x",
      ap: "x",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wi-fi-5-dual-band-ac-1200-wi-force-w5-1200f",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-04/Datasheet%20Wi-Force%20W5-1200F%20-%2028042022.pdf",
      guia: "https://manual-bifrost.intelbras.com.br/",
      manual: "https://manual-bifrost.intelbras.com.br/",
    },
    {
      id: "8",
      modelo: "W5 1200G",
      linha: "roteador",
      cobertura: "120 m\xB2",
      raio: "6,18m",
      usuarioMax: "40 usu\xE1rios",
      planoRecomendado: "Acima de 100Mbps",
      QtdePortas: "3 (LAN) + 1 (WAN)",
      modulação: "Giga",
      datarateMax2G: " 300 Mbps",
      datarateMax5G: " 867 Mbps",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 (2,4GHz) // 2x2 (5 GHz)",
      ganho: "5dBi (2,4GHz) | 5dBi (5GHz)",
      potenciaMax: "316 mW (2,4GHz) | 158 mW (5GHz)",
      tensao: "9 - 12V (1A)",
      consumo: "9 - 12W",
      repetidor: "x",
      roteador: "Sim",
      cliente: "x",
      ap: "x",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wi-fi-5-wi-force-w5-1200g",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-11/Datasheet%20Wi-Force%20W5-1200G%20-%20Ficha%20t%C3%A9cnica.pdf",
      guia: "https://manual-bifrost.intelbras.com.br/",
      manual: "https://manual-bifrost.intelbras.com.br/",
    },
    {
      id: "14",
      modelo: "ACTION R 1200",
      linha: "roteador",
      cobertura: "80 m\xB2",
      raio: "5,04m",
      usuarioMax: "10 usu\xE1rios",
      planoRecomendado: "N/A",
      QtdePortas: "3 (LAN) + 1 (WAN)",
      modulação: "Fast",
      datarateMax2G: " 300 Mbps",
      datarateMax5G: " 867 Mbps",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 (2,4GHz) // 2x2 (5 GHz)",
      ganho: "5dBi (2,4GHz) | 5dBi (5GHz)",
      potenciaMax: "100 mW (2,4GHz) | 200 mW (5GHz)",
      tensao: "12V (1A)",
      consumo: "12W",
      repetidor: "Sim",
      roteador: "Sim",
      cliente: "Sim",
      ap: "Sim",
      garantia: "5 anos",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/roteador-wireless-smart-dual-band-action-r1200",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-07/datasheet_a4_icon_action_r1200_0_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_action_r1200_01-18_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/integration/manual_action_r1200_01-18_site_08_18.pdf",
    },
    {
      id: "15",
      modelo: "IWE 3000N",
      linha: "roteador",
      cobertura: "40 m\xB2",
      raio: "3,56m",
      usuarioMax: "5 usu\xE1rios",
      planoRecomendado: "N/A",
      QtdePortas: "1 (LAN)",
      modulação: "Fast",
      datarateMax2G: " 300 Mbps",
      datarateMax5G: "x",
      ipv6: "x",
      wps: "Sim",
      antenas: "2x2 (2,4GHz)",
      ganho: "2dBi (2,4GHz)",
      potenciaMax: "100 mW (2,4GHz)",
      tensao: "(SEM FONTE)",
      consumo: "6W",
      repetidor: "Sim",
      roteador: "x",
      cliente: "x",
      ap: "Sim",
      garantia: "5 anos",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/repetidor-de-sinal-wireless-iwe-3000n",
      datasheet: "-",
      guia: "https://backend.intelbras.com/sites/default/files/2021-10/Guia_IWE_3000N_portugu%C3%AAs_01-21_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2021-10/Manual%20IWE-3000N_portugues_01-21_site.pdf",
    },
    {
      id: "16",
      modelo: "IWE 3001",
      linha: "roteador",
      cobertura: "40 m\xB2",
      raio: "3,56m",
      usuarioMax: "5 usu\xE1rios",
      planoRecomendado: "N/A",
      QtdePortas: "N/A",
      modulação: "Fast",
      datarateMax2G: " 300 Mbps",
      datarateMax5G: "x",
      ipv6: "x",
      wps: "Sim",
      antenas: "2x2 (2,4GHz)",
      ganho: "3dBi (2,4GHz)",
      potenciaMax: "100 mW (2,4GHz)",
      tensao: "(SEM FONTE)",
      consumo: "6W",
      repetidor: "Sim",
      roteador: "x",
      cliente: "x",
      ap: "x",
      garantia: "5 anos",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/repetidor-wi-fi-n300-mbps-iwe-3001",
      datasheet: "-",
      guia: "https://backend.intelbras.com/sites/default/files/2021-10/Guia_IWE_3001_portugu%C3%AAs_01-21_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2021-10/Manual%20IWE%203001_portugues_01-21_site.pdf",
    },
    {
      id: "17",
      modelo: "IWR 1000N",
      linha: "roteador",
      cobertura: "80 m\xB2",
      raio: "5,04m",
      usuarioMax: "10 usu\xE1rios",
      planoRecomendado: "N/A",
      QtdePortas: "4 (LAN) + 1 (WAN)",
      modulação: "Fast",
      datarateMax2G: " 150Mbps",
      datarateMax5G: "x",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "1x1 (2,4GHz)",
      ganho: "5dBi (2,4GHz)",
      potenciaMax: "100 mW (2,4GHz)",
      tensao: "12V (0,5A)",
      consumo: "6W",
      repetidor: "Sim",
      roteador: "Sim",
      cliente: "x",
      ap: "x",
      garantia: "5 anos",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/roteador-wireless-com-ipv6-iwr-1000n",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/datasheet_iwr_1000n_site_02-18_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2019-02/Guia_IWR_1000N_01-19_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/integration/manual_iwr_1000n_02-18_site.pdf",
    },
    {
      id: "18",
      modelo: "IWR 3000N",
      linha: "roteador",
      cobertura: "70 m\xB2",
      raio: "4,72m",
      usuarioMax: "10 usu\xE1rios",
      planoRecomendado: "At\xE9 40Mbps",
      QtdePortas: "4 (LAN) + 1 (WAN)",
      modulação: "Fast",
      datarateMax2G: " 300 Mbps",
      datarateMax5G: "x",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 (2,4GHz)",
      ganho: "5dBi (2,4GHz)",
      potenciaMax: "100 mW (2,4GHz)",
      tensao: "12V (0,3 - 0,5A)",
      consumo: "3,6 - 6W",
      repetidor: "Sim",
      roteador: "Sim",
      cliente: "x",
      ap: "x",
      garantia: "5 anos",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/roteador-wireless-com-ipv6-iwr-3000n",
      datasheet: "http://backend.intelbras.com/sites/default/files/2020-06/Datasheet-IWR-3000-N-01.20.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-11/Guia_IWR_3000N_01-21_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2021-11/Manual_IWR_3000N_01-21_site.pdf",
    },
    {
      id: "19",
      modelo: "WIN 300",
      linha: "roteador",
      cobertura: "N/A",
      raio: "N/A",
      usuarioMax: "N/A",
      planoRecomendado: "N/A",
      QtdePortas: "4 (LAN) + 1 (WAN)",
      modulação: "Fast",
      datarateMax2G: " 300 Mbps",
      datarateMax5G: "x",
      ipv6: "Sim",
      wps: "x",
      antenas: "2x2 (2,4GHz)",
      ganho: "5dBi (2,4GHz)",
      potenciaMax: "500 mW (2,4GHz)",
      tensao: "9 VCC / 1 A (F.D.M)",
      consumo: "6W",
      repetidor: "Sim",
      roteador: "Sim",
      cliente: "Sim",
      ap: "x",
      garantia: "2 anos",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/roteador-wireless-de-alta-potencia-win-300",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-07/datasheet_a4_win_300_intelbras_site_1.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_win_300_portugues_02-17_site.pdf",
      manual: "-",
    },
  ],
  Cp = "_container_phpf6_29",
  Gp = "_header_content_phpf6_34",
  zp = "_aviso_phpf6_43",
  Tp = "_logo_phpf6_50",
  Bp = "_searchbarContainer_phpf6_59",
  Wp = "_mainsearchbar_phpf6_64",
  Fp = "_mainSearchBtn_phpf6_79",
  Rp = "_searchBtnClean_phpf6_80",
  Dp = "_btns_container_phpf6_111",
  Op = "_btns_phpf6_111",
  Lp = "_legendas_phpf6_135",
  Hp = "_btn_hideShow_phpf6_153",
  Vp = "_box_container_phpf6_171",
  Ip = "_box_content_phpf6_178",
  Up = "_header_box_content_phpf6_185",
  Kp = "_title_phpf6_191",
  jp = "_arrowHide_phpf6_198",
  Qp = "_arrowShow_phpf6_199",
  $p = "_searchBarDevices_phpf6_220",
  Xp = "_status_phaseout_phpf6_232",
  qp = "_status_suporte_phpf6_233",
  Yp = "_pdfbtn_phpf6_261",
  Zp = "_paginalink_phpf6_262",
  Jp = "_pdfbtn_NA_phpf6_263",
  ef = "_fast_phpf6_290",
  tf = "_giga_phpf6_291",
  nf = "_sim_phpf6_292",
  af = "_nao_phpf6_293",
  rf = "_normal_phpf6_294",
  of = "_variado1_phpf6_295",
  sf = "_variado2_phpf6_296",
  lf = "_variado3_phpf6_297",
  uf = "_NaoPossui_phpf6_344",
  df = "_Possui_phpf6_351",
  cf = "_devicesTable_phpf6_360",
  pf = "_AP_phpf6_1",
  ff = "_RADIO_phpf6_1",
  mf = "_ROTEADOR_phpf6_1",
  hf = "_ONU_phpf6_1",
  gf = "_tooltip_phpf6_445",
  _f = "_tooltiptext_phpf6_450",
  vf = "_top_phpf6_471",
  p = {
    container: Cp,
    header_content: Gp,
    aviso: zp,
    logo: Tp,
    searchbarContainer: Bp,
    mainsearchbar: Wp,
    mainSearchBtn: Fp,
    searchBtnClean: Rp,
    btns_container: Dp,
    btns: Op,
    legendas: Lp,
    btn_hideShow: Hp,
    box_container: Vp,
    box_content: Ip,
    header_box_content: Up,
    title: Kp,
    arrowHide: jp,
    arrowShow: Qp,
    searchBarDevices: $p,
    status_phaseout: Xp,
    status_suporte: qp,
    pdfbtn: Yp,
    paginalink: Zp,
    pdfbtn_NA: Jp,
    fast: ef,
    giga: tf,
    sim: nf,
    nao: af,
    normal: rf,
    variado1: of,
    variado2: sf,
    variado3: lf,
    NaoPossui: uf,
    Possui: df,
    devicesTable: cf,
    AP: pf,
    RADIO: ff,
    ROTEADOR: mf,
    ONU: hf,
    tooltip: gf,
    tooltiptext: _f,
    top: vf,
  };
var Si = {exports: {}},
  yi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wf = ri.exports,
  xf = Symbol.for("react.element"),
  Sf = Symbol.for("react.fragment"),
  yf = Object.prototype.hasOwnProperty,
  bf = wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  kf = {key: !0, ref: !0, __self: !0, __source: !0};
function id(e, t, n) {
  var a,
    i = {},
    r = null,
    o = null;
  n !== void 0 && (r = "" + n), t.key !== void 0 && (r = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (a in t) yf.call(t, a) && !kf.hasOwnProperty(a) && (i[a] = t[a]);
  if (e && e.defaultProps) for (a in ((t = e.defaultProps), t)) i[a] === void 0 && (i[a] = t[a]);
  return {$$typeof: xf, type: e, key: r, ref: o, props: i, _owner: bf.current};
}
yi.Fragment = Sf;
yi.jsx = id;
yi.jsxs = id;
(function (e) {
  e.exports = yi;
})(Si);
const bi = Si.exports.Fragment,
  s = Si.exports.jsx,
  y = Si.exports.jsxs;
function Pf() {
  return s("thead", {
    children: y("tr", {
      id: p.AP,
      children: [
        s("th", {children: "Modelo"}),
        s("th", {children: "Modula\xE7\xE3o"}),
        s("th", {children: "Cobertura"}),
        s("th", {children: "Raio"}),
        s("th", {children: "Usu\xE1rios simult\xE2neos"}),
        s("th", {children: "Datarate M\xE1x. 2G"}),
        s("th", {children: "Datarate M\xE1x. 5G"}),
        s("th", {children: "Qtde Portas"}),
        s("th", {children: "PoE Ativo"}),
        s("th", {children: "PoE Passivo"}),
        s("th", {children: "ConnectFi"}),
        s("th", {children: "Handover"}),
        s("th", {children: "WiseFi"}),
        s("th", {children: "Pot\xEAncia de TX 2G"}),
        s("th", {children: "Pot\xEAncia de TX 5G"}),
        s("th", {children: "P\xE1gina"}),
      ],
    }),
  });
}
function Mf() {
  return s("thead", {
    children: y("tr", {
      id: p.RADIO,
      children: [
        s("th", {children: "Modelo"}),
        s("th", {children: "Indicado"}),
        s("th", {children: "Modula\xE7\xE3o"}),
        s("th", {children: "Ganho"}),
        s("th", {children: "Pot\xEAncia de TX"}),
        s("th", {children: "Encam. de Pacotes"}),
        s("th", {children: "Throughput Efetivo"}),
        s("th", {children: "Throughput Nominal"}),
        s("th", {children: "Abertura"}),
        s("th", {children: "Dist\xE2ncia M\xE1x"}),
        s("th", {children: "Wireless"}),
        s("th", {children: "Garantia"}),
        s("th", {children: "P\xE1gina"}),
      ],
    }),
  });
}
function Nf() {
  return s("thead", {
    children: y("tr", {
      id: p.CONVERSOR,
      children: [
        s("th", {children: "Modelo"}),
        s("th", {children: "Conector"}),
        s("th", {children: "WDM"}),
        s("th", {children: "Dist\xE2ncia"}),
        s("th", {children: "Modula\xE7\xE3o"}),
        s("th", {children: "Fibra"}),
        s("th", {children: "Pot\xEAncia Sinal Max | Min"}),
        s("th", {children: "Sensibilidade Max | Min"}),
        s("th", {children: "Garantia"}),
        s("th", {children: "P\xE1gina"}),
      ],
    }),
  });
}
function Ef() {
  return s(bi, {
    children: s("thead", {
      children: y("tr", {
        id: p.GBIC,
        children: [
          s("th", {children: "Modelo"}),
          s("th", {children: "Conector"}),
          s("th", {children: "Modulo"}),
          s("th", {children: "WDM"}),
          s("th", {children: "Dist\xE2ncia"}),
          s("th", {children: "Modula\xE7\xE3o"}),
          s("th", {children: "Fibra"}),
          s("th", {children: "Pot\xEAncia Sinal Max | Min"}),
          s("th", {children: "Sensibilidade Max | Min"}),
          s("th", {children: "Garantia"}),
          s("th", {children: "P\xE1gina"}),
        ],
      }),
    }),
  });
}
function Af() {
  return s(bi, {
    children: s("thead", {
      children: y("tr", {
        id: p.SWITCH,
        children: [
          s("th", {children: "Modelo"}),
          s("th", {children: "Modula\xE7\xE3o"}),
          s("th", {children: "Qtde Portas"}),
          s("th", {children: "Gerenci\xE1vel"}),
          s("th", {children: "Alimenta via PoE"}),
          s("th", {children: "Encam. de Pacotes"}),
          s("th", {children: "Backplane"}),
          s("th", {children: "Possui SFP"}),
          s("th", {children: "PoE Extender"}),
          s("th", {children: "PoE/Porta"}),
          s("th", {children: "PoE/Total"}),
          s("th", {children: "Qos"}),
          s("th", {children: "Garantia"}),
          s("th", {children: "P\xE1gina"}),
        ],
      }),
    }),
  });
}
function Cf() {
  return s(bi, {
    children: s("thead", {
      children: y("tr", {
        id: p.ONU,
        children: [
          s("th", {children: "Modelo"}),
          s("th", {children: "Modula\xE7\xE3o"}),
          s("th", {children: "FXS"}),
          s("th", {children: "Tipo"}),
          s("th", {children: "Sensibilidade Max | Min"}),
          s("th", {children: "Cobertura"}),
          s("th", {children: "Usu\xE1rios simult\xE2neos"}),
          s("th", {children: "Datarate M\xE1x. 2G"}),
          s("th", {children: "Datarate M\xE1x. 5G"}),
          s("th", {children: "SSID"}),
          s("th", {children: "TR069"}),
          s("th", {children: "Customize"}),
          s("th", {children: "Remotize"}),
          s("th", {children: "Garantia"}),
          s("th", {children: "P\xE1gina"}),
        ],
      }),
    }),
  });
}
function Gf() {
  return s(bi, {
    children: s("thead", {
      children: y("tr", {
        id: p.ROTEADOR,
        children: [
          s("th", {children: "Modelo"}),
          s("th", {children: "Cobertura"}),
          s("th", {children: "Raio"}),
          s("th", {children: "Usu\xE1rios M\xE1ximos"}),
          s("th", {children: "Plano Recomendado"}),
          s("th", {children: "Modula\xE7\xE3o"}),
          s("th", {children: "Qtde Portas"}),
          s("th", {children: "Datarate M\xE1x. 2G"}),
          s("th", {children: "Datarate M\xE1x. 5G"}),
          s("th", {children: "Ganho da antena"}),
          s("th", {children: "IPV6"}),
          s("th", {children: "Repetidor"}),
          s("th", {children: "Roteador AP"}),
          s("th", {children: "Cliente Wireless"}),
          s("th", {children: "Modo AP"}),
          s("th", {children: "Garantia"}),
          s("th", {children: "P\xE1gina"}),
        ],
      }),
    }),
  });
}
function zf() {
  const [e, t] = ve.useState(""),
    [n, a] = ve.useState(!0),
    i = () => a(!n),
    [r, o] = ve.useState(""),
    [l, u] = ve.useState(!0),
    m = () => u(!l),
    [v, _] = ve.useState(""),
    [g, S] = ve.useState(!0),
    b = () => S(!g),
    [k, R] = ve.useState(""),
    [f, c] = ve.useState(!0),
    h = () => c(!f),
    [w, P] = ve.useState(!0),
    A = () => P(!w),
    [E, C] = ve.useState(!0),
    V = () => C(!E),
    [T, le] = ve.useState(!0),
    xt = () => le(!T),
    [Ge, fn] = ve.useState(""),
    ki = (d) => {
      t(d.target.value);
    },
    mn = (d) => {
      o(d.target.value);
    },
    hn = (d) => {
      R(d.target.value);
    },
    M = (d) => {
      _(d.target.value);
    },
    G = (d) => {
      fn(d.target.value);
    },
    z = () => {
      a(!0), u(!0), S(!0), c(!0), P(!0), C(!0), le(!0);
    },
    I = () => {
      a(!1), u(!1), S(!1), c(!1), P(!1), C(!1), le(!1);
    },
    X = `https://www.intelbras.com/pt-br/busca/?q=${Ge}&tipo_busca=pagina-resultado`;
  return y("div", {
    className: p.container,
    children: [
      s("a", {href: "#home", children: s("div", {className: p.top})}),
      s("div", {
        className: p.aviso,
        children: y("p", {
          children: [
            s("b", {children: "Aviso!"}),
            " Este \xE9 um material para facilitar o acesso a informa\xE7\xF5es dos principais equipamentos.",
            s("b", {children: " Sempre consulte a documenta\xE7\xE3o oficial."}),
            " :)",
          ],
        }),
      }),
      y("div", {
        className: p.header_content,
        id: "home",
        children: [
          s("div", {className: p.logo, children: s("p", {children: "Olimpo!"})}),
          y("div", {
            className: p.searchbarContainer,
            children: [
              s("input", {
                className: p.mainsearchbar,
                value: Ge,
                onChange: G,
                placeholder: "Pesquise em intelbras.com.br",
                onKeyDown: (d) => {
                  d.key === "Enter" && window.open(`https://www.intelbras.com/pt-br/busca/?q=${Ge}&tipo_busca=pagina-resultado`, "_blank");
                },
              }),
              s("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: X,
                children: Ge === "" ? null : s("button", {className: p.mainSearchBtn}),
              }),
              Ge === "" ? null : s("button", {className: p.searchBtnClean, onClick: () => fn("")}),
            ],
          }),
          y("div", {
            className: p.btns_container,
            children: [
              s("a", {href: "#ap", children: s("button", {className: p.btns, children: "Access Point"})}),
              s("a", {href: "#radio", children: s("button", {className: p.btns, children: "Radio Outdoor"})}),
              s("a", {href: "#ho", children: s("button", {className: p.btns, children: "Home Office"})}),
              s("a", {href: "#switch", children: s("button", {className: p.btns, children: "Switch"})}),
              s("a", {href: "#conversor", children: s("button", {className: p.btns, children: "Conversor de M\xEDdia"})}),
              s("a", {href: "#sfp", children: s("button", {className: p.btns, children: "Modulo SFP"})}),
              s("a", {href: "#onu", children: s("button", {className: p.btns, children: "Onu/Ont"})}),
            ],
          }),
          y("div", {
            className: p.legendas,
            children: [
              s("p", {children: s("b", {children: s("i", {children: "Legendas"})})}),
              y("p", {children: [s("b", {children: "N/A"}), " = Informa\xE7\xE3o n\xE3o encontrada."]}),
              y("p", {children: [s("span", {className: p.NaoPossui}), " = N\xE3o possui a fun\xE7\xE3o."]}),
            ],
          }),
        ],
      }),
      y("div", {
        className: p.box_container,
        children: [
          y("div", {
            children: [
              y("button", {className: p.btn_hideShow, onClick: z, children: ["Mostrar Tudo ", s("i", {className: "fa-solid fa-eye"})]}),
              y("button", {
                className: p.btn_hideShow,
                onClick: I,
                children: ["Ocultar Tudo ", s("i", {className: "fa-regular fa-eye-slash"})],
              }),
            ],
          }),
          y("div", {
            className: p.box_content,
            children: [
              y("div", {
                className: p.header_box_content,
                children: [
                  s("button", {
                    id: "ap",
                    className: n ? p.arrowHide : p.arrowShow,
                    onClick: i,
                    children: s("span", {className: p.title, children: "Access Point"}),
                  }),
                  y("label", {
                    children: [
                      s("i", {className: "fa-solid fa-magnifying-glass"}),
                      s("input", {placeholder: "Pesquise o Equipamento", value: e, onChange: ki, className: p.searchBarDevices}),
                    ],
                  }),
                ],
              }),
              n
                ? s("div", {
                    style: {overflowX: "auto"},
                    children: y("table", {
                      className: p.devicesTable,
                      children: [
                        s(Pf, {}),
                        bp
                          .filter((d) => {
                            if (d.modelo.toLowerCase().includes(e.toLowerCase())) return d;
                            if (d.modulação.toLowerCase().includes(e.toLowerCase())) return d;
                          })
                          .map((d) =>
                            s("tbody", {
                              children: y("tr", {
                                children: [
                                  s("td", {className: d.status === "Phaseout" ? p.status_phaseout : p.status_suporte, children: d.modelo}),
                                  s("td", {
                                    children: s("span", {className: d.modulação === "Fast" ? p.fast : p.giga, children: d.modulação}),
                                  }),
                                  s("td", {children: d.cobertura}),
                                  s("td", {children: d.raio}),
                                  s("td", {children: d.usuarioMax}),
                                  s("td", {children: d.throughputWireless24}),
                                  s("td", {
                                    className: d.throughputWireless50 === "x" ? p.NaoPossui : null,
                                    children: d.throughputWireless50 === "x" ? null : d.throughputWireless50,
                                  }),
                                  s("td", {children: d.qtdePortas}),
                                  s("td", {className: d.poe === "x" && p.NaoPossui, children: d.poe === "x" ? null : d.poe}),
                                  s("td", {children: d.tensao}),
                                  s("td", {
                                    children: y("span", {
                                      className: p.tooltip,
                                      children: [
                                        d.connectiVersion,
                                        " ",
                                        d.connectiVersion !== "N/A" && s("i", {className: "fa-regular fa-circle-question"}),
                                        d.connectiVersion !== "N/A" &&
                                          y("span", {
                                            className: p.tooltiptext,
                                            children: [
                                              "O AP precisa estar com a vers\xE3o ",
                                              d.connectiVersion,
                                              " para o connectFi funcionar.",
                                            ],
                                          }),
                                      ],
                                    }),
                                  }),
                                  s("td", {className: d.handover === "x" ? p.NaoPossui : p.Possui}),
                                  s("td", {className: d.wisefi === "x" ? p.NaoPossui : p.Possui}),
                                  s("td", {children: d.potencia2G}),
                                  s("td", {
                                    className: d.potencia5G === "x" && p.NaoPossui,
                                    children: d.potencia5G === "x" ? null : d.potencia5G,
                                  }),
                                  s("td", {
                                    children: s("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      href: d.pagina,
                                      children: s("span", {className: p.paginalink, children: "Ir para P\xE1gina"}),
                                    }),
                                  }),
                                ],
                              }),
                            })
                          ),
                      ],
                    }),
                  })
                : null,
            ],
          }),
          y("div", {
            className: p.box_content,
            children: [
              y("div", {
                className: p.header_box_content,
                children: [
                  s("button", {
                    id: "radio",
                    className: l ? p.arrowHide : p.arrowShow,
                    onClick: m,
                    children: s("span", {className: p.title, children: "Radios Outdoor"}),
                  }),
                  y("label", {
                    children: [
                      s("i", {className: "fa-solid fa-magnifying-glass"}),
                      s("input", {placeholder: "Pesquise o Equipamento", value: r, onChange: mn, className: p.searchBarDevices}),
                    ],
                  }),
                ],
              }),
              l
                ? s("div", {
                    style: {overflowX: "auto"},
                    children: y("table", {
                      className: p.devicesTable,
                      children: [
                        s(Mf, {}),
                        Mp.filter((d) => {
                          if (d.modelo.toLowerCase().includes(r.toLowerCase())) return d;
                          if (d.modulação.toLowerCase().includes(r.toLowerCase())) return d;
                        }).map((d) =>
                          s("tbody", {
                            children: y("tr", {
                              children: [
                                s("td", {className: d.status === "Phaseout" ? p.status_phaseout : p.status_suporte, children: d.modelo}),
                                s("td", {children: d.indicado}),
                                s("td", {
                                  children: s("span", {className: d.modulação === "Fast" ? p.fast : p.giga, children: d.modulação}),
                                }),
                                s("td", {
                                  children: y("span", {
                                    className: p.tooltip,
                                    children: [
                                      d.ganho,
                                      " ",
                                      d.ganho === "SEM ANTENA" && s("i", {className: "fa-regular fa-circle-question"}),
                                      d.ganho === "SEM ANTENA" &&
                                        y("span", {
                                          className: p.tooltiptext,
                                          children: [
                                            "Antena adquirida separadamente, indicar parceria ",
                                            s("a", {href: "http://www.algcom.com.br", children: "ALGCOM"}),
                                          ],
                                        }),
                                    ],
                                  }),
                                }),
                                s("td", {children: d.potencia}),
                                s("td", {children: d.pps}),
                                s("td", {children: d.throughputEfetivo}),
                                s("td", {children: d.throughputNominal}),
                                s("td", {
                                  className: d.aberturaHorVer === "x" && p.NaoPossui,
                                  children: d.aberturaHorVer === "x" ? null : d.aberturaHorVer,
                                }),
                                s("td", {
                                  className: d.distancia === "x" && p.NaoPossui,
                                  children: d.distancia === "x" ? null : d.distancia,
                                }),
                                s("td", {children: d.wireless}),
                                s("td", {children: d.garantia}),
                                s("td", {
                                  children: s("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: d.pagina,
                                    children: s("span", {className: p.paginalink, children: "Ir para P\xE1gina"}),
                                  }),
                                }),
                              ],
                            }),
                          })
                        ),
                      ],
                    }),
                  })
                : null,
            ],
          }),
          y("div", {
            className: p.box_content,
            children: [
              y("div", {
                className: p.header_box_content,
                children: [
                  s("button", {
                    id: "ho",
                    className: g ? p.arrowHide : p.arrowShow,
                    onClick: b,
                    children: s("span", {className: p.title, children: "Home Office"}),
                  }),
                  y("label", {
                    children: [
                      s("i", {className: "fa-solid fa-magnifying-glass"}),
                      s("input", {placeholder: "Pesquise o Equipamento", value: v, onChange: M, className: p.searchBarDevices}),
                    ],
                  }),
                ],
              }),
              g
                ? s("div", {
                    style: {overflowX: "auto"},
                    children: y("table", {
                      className: p.devicesTable,
                      children: [
                        s(Gf, {}),
                        Ap.filter((d) => {
                          if (d.modelo.toLowerCase().includes(v.toLowerCase())) return d;
                          if (d.modulação.toLowerCase().includes(v.toLowerCase())) return d;
                        }).map((d) =>
                          s("tbody", {
                            children: y("tr", {
                              children: [
                                s("td", {className: d.status === "Phaseout" ? p.status_phaseout : p.status_suporte, children: d.modelo}),
                                s("td", {children: d.cobertura}),
                                s("td", {children: d.raio}),
                                s("td", {children: d.usuarioMax}),
                                s("td", {children: d.planoRecomendado}),
                                s("td", {
                                  children: s("span", {className: d.modulação === "Fast" ? p.fast : p.giga, children: d.modulação}),
                                }),
                                s("td", {children: d.QtdePortas}),
                                s("td", {children: d.datarateMax2G}),
                                s("td", {
                                  className: d.datarateMax5G === "x" ? p.NaoPossui : null,
                                  children: d.datarateMax5G === "x" ? null : d.datarateMax5G,
                                }),
                                s("td", {children: d.ganho}),
                                s("td", {className: d.ipv6 === "x" ? p.NaoPossui : p.Possui}),
                                y("td", {
                                  children: [
                                    d.repetidor === "x" && s("span", {className: p.NaoPossui}),
                                    d.repetidor === "Sim" && s("span", {className: p.Possui}),
                                    d.repetidor === "N/A" && s("span", {children: d.repetidor}),
                                  ],
                                }),
                                y("td", {
                                  children: [
                                    d.roteador === "x" && s("span", {className: p.NaoPossui}),
                                    d.roteador === "Sim" && s("span", {className: p.Possui}),
                                    d.roteador === "N/A" && s("span", {children: d.roteador}),
                                  ],
                                }),
                                y("td", {
                                  children: [
                                    d.cliente === "x" && s("span", {className: p.NaoPossui}),
                                    d.cliente === "Sim" && s("span", {className: p.Possui}),
                                    d.cliente === "N/A" && s("span", {children: d.cliente}),
                                  ],
                                }),
                                y("td", {
                                  children: [
                                    d.ap === "x" && s("span", {className: p.NaoPossui}),
                                    d.ap === "Sim" && s("span", {className: p.Possui}),
                                    d.ap === "N/A" && s("span", {children: d.ap}),
                                  ],
                                }),
                                s("td", {children: d.garantia}),
                                s("td", {
                                  children: s("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: d.pagina,
                                    children: s("span", {className: p.paginalink, children: "Ir para P\xE1gina"}),
                                  }),
                                }),
                              ],
                            }),
                          })
                        ),
                      ],
                    }),
                  })
                : null,
            ],
          }),
          y("div", {
            className: p.box_content,
            children: [
              y("div", {
                className: p.header_box_content,
                children: [
                  s("button", {
                    id: "switch",
                    className: f ? p.arrowHide : p.arrowShow,
                    onClick: h,
                    children: s("span", {className: p.title, children: "Switchs"}),
                  }),
                  y("label", {
                    children: [
                      s("i", {className: "fa-solid fa-magnifying-glass"}),
                      s("input", {className: p.searchBarDevices, placeholder: "Pesquise o Equipamento", value: k, onChange: hn}),
                    ],
                  }),
                ],
              }),
              f
                ? s("div", {
                    style: {overflowX: "auto"},
                    children: y("table", {
                      className: p.devicesTable,
                      children: [
                        s(Af, {}),
                        Np.filter((d) => {
                          if (d.modelo.toLowerCase().includes(k.toLowerCase())) return d;
                          if (d.gerenciavel.toLowerCase().includes(k.toLowerCase())) return d;
                        }).map((d) =>
                          s("tbody", {
                            children: y("tr", {
                              id: p.swicth_id,
                              children: [
                                s("td", {
                                  className: d.status === "Phaseout" ? p.status_phaseout : p.status_suporte,
                                  children: y("span", {
                                    className: p.tooltip,
                                    children: [
                                      d.modelo,
                                      d.modelo === "SG 2404 PoE L2+" && s("i", {className: "fa-regular fa-circle-question"}),
                                      d.modelo === "SG 2404 PoE L2+" &&
                                        s("span", {className: p.tooltiptext, children: "SG 2404 PoE L2+ (4760062)"}),
                                    ],
                                  }),
                                }),
                                s("td", {
                                  children: s("span", {className: d.modulação === "Fast" ? p.fast : p.giga, children: d.modulação}),
                                }),
                                s("td", {children: d.portas}),
                                y("td", {
                                  children: [
                                    d.gerenciavel === "x" && s("span", {className: p.NaoPossui}),
                                    d.gerenciavel === "Sim" && s("span", {className: p.Possui}),
                                  ],
                                }),
                                y("td", {
                                  children: [
                                    d.poe === "x" && s("span", {className: p.NaoPossui}),
                                    d.poe !== "x" && s("span", {children: d.poe}),
                                  ],
                                }),
                                s("td", {children: d.taxaTransferencia}),
                                s("td", {children: d.backplane}),
                                y("td", {
                                  children: [
                                    d.sfp === "x" && s("span", {className: p.NaoPossui}),
                                    d.sfp !== "x" && s("span", {children: d.sfp}),
                                  ],
                                }),
                                y("td", {
                                  children: [
                                    d.poeExtender === "x" && s("span", {className: p.NaoPossui}),
                                    d.poeExtender !== "x" && s("span", {className: p.Possui}),
                                  ],
                                }),
                                y("td", {
                                  children: [
                                    d.poePorta === "x" && s("span", {className: p.NaoPossui}),
                                    d.poePorta !== "x" && s("span", {children: d.poePorta}),
                                  ],
                                }),
                                y("td", {
                                  children: [
                                    d.poeTotal === "x" && s("span", {className: p.NaoPossui}),
                                    d.poeTotal !== "x" && s("span", {children: d.poeTotal}),
                                  ],
                                }),
                                y("td", {
                                  children: [
                                    d.qos === "x" && s("span", {className: p.NaoPossui}),
                                    d.qos === "Sim" && s("span", {className: p.Possui}),
                                  ],
                                }),
                                s("td", {children: d.garantia}),
                                s("td", {
                                  children: s("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: d.pagina,
                                    children: s("span", {className: p.paginalink, children: "Ir para P\xE1gina"}),
                                  }),
                                }),
                              ],
                            }),
                          })
                        ),
                      ],
                    }),
                  })
                : null,
            ],
          }),
          y("div", {
            className: p.box_content,
            children: [
              s("div", {
                className: p.header_box_content,
                children: s("button", {
                  id: "conversor",
                  className: w ? p.arrowHide : p.arrowShow,
                  onClick: A,
                  children: s("span", {className: p.title, children: "Conversor de M\xEDdia"}),
                }),
              }),
              w
                ? s("div", {
                    style: {overflowX: "auto"},
                    children: y("table", {
                      className: p.devicesTable,
                      children: [
                        s(Nf, {}),
                        kp.map((d) =>
                          s("tbody", {
                            children: y("tr", {
                              children: [
                                s("td", {className: d.status === "Phaseout" ? p.status_phaseout : p.status_suporte, children: d.modelo}),
                                s("td", {children: d.conector}),
                                y("td", {
                                  children: [
                                    d.wdm === "x" && s("span", {className: p.NaoPossui}),
                                    d.wdm !== "x" && s("span", {className: p.Possui}),
                                  ],
                                }),
                                s("td", {children: d.distancia}),
                                s("td", {
                                  children: s("span", {className: d.modulação === "Fast" ? p.fast : p.giga, children: d.modulação}),
                                }),
                                s("td", {children: d.fibra}),
                                s("td", {children: d.potencia}),
                                s("td", {children: d.sensibilidade}),
                                s("td", {children: d.garantia}),
                                s("td", {
                                  children: s("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: d.pagina,
                                    children: s("span", {className: p.paginalink, children: "Ir para P\xE1gina"}),
                                  }),
                                }),
                              ],
                            }),
                          })
                        ),
                      ],
                    }),
                  })
                : null,
            ],
          }),
          y("div", {
            className: p.box_content,
            children: [
              s("div", {
                className: p.header_box_content,
                children: s("button", {
                  id: "sfp",
                  className: E ? p.arrowHide : p.arrowShow,
                  onClick: V,
                  children: s("span", {className: p.title, children: "M\xF3dulo SFP"}),
                }),
              }),
              E
                ? s("div", {
                    style: {overflowX: "auto"},
                    children: y("table", {
                      className: p.devicesTable,
                      children: [
                        s(Ef, {}),
                        Pp.map((d) => {
                          if (d.linha === "gbic")
                            return s("tbody", {
                              children: y("tr", {
                                children: [
                                  s("td", {className: d.status === "Phaseout" ? p.status_phaseout : p.status_suporte, children: d.modelo}),
                                  s("td", {children: d.tipoConector}),
                                  y("td", {
                                    children: [
                                      d.modulo === "SFP+" && s("span", {className: p.variado1, children: "SFP+"}),
                                      d.modulo === "SFP" && s("span", {className: p.variado2, children: "SFP"}),
                                      d.modulo === "Epon" && s("span", {className: p.variado3, children: "EPON"}),
                                      d.modulo === "Gpon" && s("span", {className: p.fast, children: "GPON"}),
                                      d.modulo === "XFP" && s("span", {className: p.giga, children: "XFP"}),
                                    ],
                                  }),
                                  y("td", {
                                    children: [
                                      d.wdm === "x" && s("span", {className: p.NaoPossui}),
                                      d.wdm !== "x" && s("span", {className: p.Possui}),
                                    ],
                                  }),
                                  s("td", {
                                    children: y("span", {
                                      className: p.tooltip,
                                      children: [
                                        d.distancia,
                                        " ",
                                        d.fibra === "Multimodo" && s("i", {className: "fa-regular fa-circle-question"}),
                                        d.fibra === "Multimodo" &&
                                          s("span", {className: p.tooltiptext, children: "62,5 / 125 \u03BCm at\xE9 275 mts"}),
                                      ],
                                    }),
                                  }),
                                  s("td", {
                                    children: s("span", {className: d.modulação === "Fast" ? p.fast : p.giga, children: d.modulação}),
                                  }),
                                  s("td", {children: d.fibra}),
                                  s("td", {children: d.potencia}),
                                  s("td", {children: d.sensibilidade}),
                                  s("td", {children: d.garantia}),
                                  s("td", {
                                    children: s("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      href: d.pagina,
                                      children: s("span", {className: p.paginalink, children: "Ir para P\xE1gina"}),
                                    }),
                                  }),
                                ],
                              }),
                            });
                        }),
                      ],
                    }),
                  })
                : null,
            ],
          }),
          y("div", {
            className: p.box_content,
            children: [
              s("div", {
                className: p.header_box_content,
                children: s("button", {
                  id: "onu",
                  className: T ? p.arrowHide : p.arrowShow,
                  onClick: xt,
                  children: s("span", {className: p.title, children: " ONUs/ONTs"}),
                }),
              }),
              T
                ? s("div", {
                    style: {overflowX: "auto"},
                    children: y("table", {
                      className: p.devicesTable,
                      children: [
                        s(Cf, {}),
                        Ep.map((d) => {
                          if (d.linha === "onu/ont")
                            return s("tbody", {
                              children: y("tr", {
                                children: [
                                  s("td", {className: d.status === "Phaseout" ? p.status_phaseout : p.status_suporte, children: d.modelo}),
                                  s("td", {
                                    children: s("span", {className: d.modulação === "Fast" ? p.fast : p.giga, children: d.modulação}),
                                  }),
                                  y("td", {
                                    children: [
                                      d.fxs === "x" && s("span", {className: p.NaoPossui}),
                                      d.fxs !== "x" && s("span", {children: d.fxs}),
                                    ],
                                  }),
                                  y("td", {
                                    children: [
                                      d.tipo === "EPON/GPON" && s("span", {className: p.variado1, children: d.tipo}),
                                      d.tipo === "GPON" && s("span", {className: p.variado2, children: d.tipo}),
                                    ],
                                  }),
                                  s("td", {children: d.sensibilidade}),
                                  y("td", {
                                    children: [
                                      d.cobertura === "x" && s("span", {className: p.NaoPossui}),
                                      d.cobertura !== "x" && s("span", {children: d.cobertura}),
                                    ],
                                  }),
                                  y("td", {
                                    children: [
                                      d.clientesSimultaneos === "x" && s("span", {className: p.NaoPossui}),
                                      d.clientesSimultaneos !== "x" && s("span", {children: d.clientesSimultaneos}),
                                    ],
                                  }),
                                  y("td", {
                                    children: [
                                      d.transmissao2ghz === "x" && s("span", {className: p.NaoPossui}),
                                      d.transmissao2ghz !== "x" && s("span", {children: d.transmissao2ghz}),
                                    ],
                                  }),
                                  y("td", {
                                    children: [
                                      d.transmissao5ghz === "x" && s("span", {className: p.NaoPossui}),
                                      d.transmissao5ghz !== "x" && s("span", {children: d.transmissao5ghz}),
                                    ],
                                  }),
                                  y("td", {
                                    children: [
                                      d.ssid === "x" && s("span", {className: p.NaoPossui}),
                                      d.ssid !== "x" && s("span", {children: d.ssid}),
                                    ],
                                  }),
                                  y("td", {
                                    children: [
                                      d.tr069 === "x" && s("span", {className: p.NaoPossui}),
                                      d.tr069 === "Sim" && s("span", {className: p.Possui}),
                                    ],
                                  }),
                                  y("td", {
                                    children: [
                                      d.customize === "x" && s("span", {className: p.NaoPossui}),
                                      d.customize === "Sim" && s("span", {className: p.Possui}),
                                    ],
                                  }),
                                  y("td", {
                                    children: [
                                      d.remotize === "x" && s("span", {className: p.NaoPossui}),
                                      d.remotize === "Sim" && s("span", {className: p.Possui}),
                                    ],
                                  }),
                                  s("td", {children: d.garantia}),
                                  s("td", {
                                    children: s("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      href: d.pagina,
                                      children: s("span", {className: p.paginalink, children: "Ir para P\xE1gina"}),
                                    }),
                                  }),
                                ],
                              }),
                            });
                        }),
                      ],
                    }),
                  })
                : null,
            ],
          }),
        ],
      }),
    ],
  });
}
Zi.createRoot(document.getElementById("root")).render(s(ve.StrictMode, {children: s(zf, {})}));
