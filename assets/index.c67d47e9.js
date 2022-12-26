(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) a(r);
  new MutationObserver((r) => {
    for (const i of r) if (i.type === "childList") for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && a(s);
  }).observe(document, {childList: !0, subtree: !0});
  function n(r) {
    const i = {};
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerpolicy && (i.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function a(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = n(r);
    fetch(r.href, i);
  }
})();
function id(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ir = {exports: {}},
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jn = Symbol.for("react.element"),
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
function un(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Ys), (this.updater = n || Xs);
}
un.prototype.isReactComponent = {};
un.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
un.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zs() {}
Zs.prototype = un.prototype;
function Ki(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Ys), (this.updater = n || Xs);
}
var ji = (Ki.prototype = new Zs());
ji.constructor = Ki;
qs(ji, un.prototype);
ji.isPureReactComponent = !0;
var Ho = Array.isArray,
  Js = Object.prototype.hasOwnProperty,
  Qi = {current: null},
  el = {key: !0, ref: !0, __self: !0, __source: !0};
function tl(e, t, n) {
  var a,
    r = {},
    i = null,
    s = null;
  if (t != null)
    for (a in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t))
      Js.call(t, a) && !el.hasOwnProperty(a) && (r[a] = t[a]);
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    for (var d = Array(u), m = 0; m < u; m++) d[m] = arguments[m + 2];
    r.children = d;
  }
  if (e && e.defaultProps) for (a in ((u = e.defaultProps), u)) r[a] === void 0 && (r[a] = u[a]);
  return {$$typeof: Jn, type: e, key: i, ref: s, props: r, _owner: Qi.current};
}
function _d(e, t) {
  return {$$typeof: Jn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner};
}
function $i(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jn;
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
function Nr(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? vd("" + e.key) : t.toString(36);
}
function ba(e, t, n, a, r) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Jn:
          case od:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (r = r(s)),
      (e = a === "" ? "." + Nr(s, 0) : a),
      Ho(r)
        ? ((n = ""),
          e != null && (n = e.replace(Vo, "$&/") + "/"),
          ba(r, t, n, "", function (m) {
            return m;
          }))
        : r != null &&
          ($i(r) && (r = _d(r, n + (!r.key || (s && s.key === r.key) ? "" : ("" + r.key).replace(Vo, "$&/") + "/") + e)), t.push(r)),
      1
    );
  if (((s = 0), (a = a === "" ? "." : a + ":"), Ho(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var d = a + Nr(i, u);
      s += ba(i, t, n, d, r);
    }
  else if (((d = gd(e)), typeof d == "function"))
    for (e = d.call(e), u = 0; !(i = e.next()).done; ) (i = i.value), (d = a + Nr(i, u++)), (s += ba(i, t, n, d, r));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function oa(e, t, n) {
  if (e == null) return e;
  var a = [],
    r = 0;
  return (
    ba(e, a, "", "", function (i) {
      return t.call(n, i, r++);
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
var de = {current: null},
  ka = {transition: null},
  xd = {ReactCurrentDispatcher: de, ReactCurrentBatchConfig: ka, ReactCurrentOwner: Qi};
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
    if (!$i(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
B.Component = un;
B.Fragment = sd;
B.Profiler = ud;
B.PureComponent = Ki;
B.StrictMode = ld;
B.Suspense = fd;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xd;
B.cloneElement = function (e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var a = qs({}, e.props),
    r = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if ((t.ref !== void 0 && ((i = t.ref), (s = Qi.current)), t.key !== void 0 && (r = "" + t.key), e.type && e.type.defaultProps))
      var u = e.type.defaultProps;
    for (d in t) Js.call(t, d) && !el.hasOwnProperty(d) && (a[d] = t[d] === void 0 && u !== void 0 ? u[d] : t[d]);
  }
  var d = arguments.length - 2;
  if (d === 1) a.children = n;
  else if (1 < d) {
    u = Array(d);
    for (var m = 0; m < d; m++) u[m] = arguments[m + 2];
    a.children = u;
  }
  return {$$typeof: Jn, type: e.type, key: r, ref: i, props: a, _owner: s};
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
B.isValidElement = $i;
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
  return de.current.useCallback(e, t);
};
B.useContext = function (e) {
  return de.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return de.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return de.current.useEffect(e, t);
};
B.useId = function () {
  return de.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return de.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return de.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return de.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return de.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return de.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return de.current.useRef(e);
};
B.useState = function (e) {
  return de.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return de.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return de.current.useTransition();
};
B.version = "18.2.0";
(function (e) {
  e.exports = B;
})(ir);
const _e = id(ir.exports);
var Zr = {},
  nl = {exports: {}},
  ye = {},
  al = {exports: {}},
  rl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, G) {
    var z = N.length;
    N.push(G);
    e: for (; 0 < z; ) {
      var I = (z - 1) >>> 1,
        l = N[I];
      if (0 < r(l, G)) (N[I] = G), (N[z] = l), (z = I);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function a(N) {
    if (N.length === 0) return null;
    var G = N[0],
      z = N.pop();
    if (z !== G) {
      N[0] = z;
      e: for (var I = 0, l = N.length, ra = l >>> 1; I < ra; ) {
        var xt = 2 * (I + 1) - 1,
          Pr = N[xt],
          St = xt + 1,
          ia = N[St];
        if (0 > r(Pr, z)) St < l && 0 > r(ia, Pr) ? ((N[I] = ia), (N[St] = z), (I = St)) : ((N[I] = Pr), (N[xt] = z), (I = xt));
        else if (St < l && 0 > r(ia, z)) (N[I] = ia), (N[St] = z), (I = St);
        else break e;
      }
    }
    return G;
  }
  function r(N, G) {
    var z = N.sortIndex - G.sortIndex;
    return z !== 0 ? z : N.id - G.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      u = s.now();
    e.unstable_now = function () {
      return s.now() - u;
    };
  }
  var d = [],
    m = [],
    v = 1,
    _ = null,
    g = 3,
    S = !1,
    y = !1,
    b = !1,
    D = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(N) {
    for (var G = n(m); G !== null; ) {
      if (G.callback === null) a(m);
      else if (G.startTime <= N) a(m), (G.sortIndex = G.expirationTime), t(d, G);
      else break;
      G = n(m);
    }
  }
  function w(N) {
    if (((b = !1), h(N), !y))
      if (n(d) !== null) (y = !0), fn(P);
      else {
        var G = n(m);
        G !== null && mn(w, G.startTime - N);
      }
  }
  function P(N, G) {
    (y = !1), b && ((b = !1), f(C), (C = -1)), (S = !0);
    var z = g;
    try {
      for (h(G), _ = n(d); _ !== null && (!(_.expirationTime > G) || (N && !se())); ) {
        var I = _.callback;
        if (typeof I == "function") {
          (_.callback = null), (g = _.priorityLevel);
          var l = I(_.expirationTime <= G);
          (G = e.unstable_now()), typeof l == "function" ? (_.callback = l) : _ === n(d) && a(d), h(G);
        } else a(d);
        _ = n(d);
      }
      if (_ !== null) var ra = !0;
      else {
        var xt = n(m);
        xt !== null && mn(w, xt.startTime - G), (ra = !1);
      }
      return ra;
    } finally {
      (_ = null), (g = z), (S = !1);
    }
  }
  var A = !1,
    E = null,
    C = -1,
    V = 5,
    T = -1;
  function se() {
    return !(e.unstable_now() - T < V);
  }
  function wt() {
    if (E !== null) {
      var N = e.unstable_now();
      T = N;
      var G = !0;
      try {
        G = E(!0, N);
      } finally {
        G ? Ve() : ((A = !1), (E = null));
      }
    } else A = !1;
  }
  var Ve;
  if (typeof p == "function")
    Ve = function () {
      p(wt);
    };
  else if (typeof MessageChannel < "u") {
    var pn = new MessageChannel(),
      kr = pn.port2;
    (pn.port1.onmessage = wt),
      (Ve = function () {
        kr.postMessage(null);
      });
  } else
    Ve = function () {
      D(wt, 0);
    };
  function fn(N) {
    (E = N), A || ((A = !0), Ve());
  }
  function mn(N, G) {
    C = D(function () {
      N(e.unstable_now());
    }, G);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || S || ((y = !0), fn(P));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported")
        : (V = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(d);
    }),
    (e.unstable_next = function (N) {
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
        return N();
      } finally {
        g = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, G) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var z = g;
      g = N;
      try {
        return G();
      } finally {
        g = z;
      }
    }),
    (e.unstable_scheduleCallback = function (N, G, z) {
      var I = e.unstable_now();
      switch ((typeof z == "object" && z !== null ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? I + z : I)) : (z = I), N)) {
        case 1:
          var l = -1;
          break;
        case 2:
          l = 250;
          break;
        case 5:
          l = 1073741823;
          break;
        case 4:
          l = 1e4;
          break;
        default:
          l = 5e3;
      }
      return (
        (l = z + l),
        (N = {id: v++, callback: G, priorityLevel: N, startTime: z, expirationTime: l, sortIndex: -1}),
        z > I
          ? ((N.sortIndex = z), t(m, N), n(d) === null && N === n(m) && (b ? (f(C), (C = -1)) : (b = !0), mn(w, z - I)))
          : ((N.sortIndex = l), t(d, N), y || S || ((y = !0), fn(P))),
        N
      );
    }),
    (e.unstable_shouldYield = se),
    (e.unstable_wrapCallback = function (N) {
      var G = g;
      return function () {
        var z = g;
        g = G;
        try {
          return N.apply(this, arguments);
        } finally {
          g = z;
        }
      };
    });
})(rl);
(function (e) {
  e.exports = rl;
})(al);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var il = ir.exports,
  Se = al.exports;
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
  Fn = {};
function Bt(e, t) {
  tn(e, t), tn(e + "Capture", t);
}
function tn(e, t) {
  for (Fn[e] = t, e = 0; e < t.length; e++) ol.add(t[e]);
}
var $e = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Jr = Object.prototype.hasOwnProperty,
  Sd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Io = {},
  Uo = {};
function yd(e) {
  return Jr.call(Uo, e) ? !0 : Jr.call(Io, e) ? !1 : Sd.test(e) ? (Uo[e] = !0) : ((Io[e] = !0), !1);
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
function ce(e, t, n, a, r, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = a),
    (this.attributeNamespace = r),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xi = /[\-:]([a-z])/g;
function qi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Xi, qi);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(Xi, qi);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Xi, qi);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yi(e, t, n, a) {
  var r = ne.hasOwnProperty(t) ? ne[t] : null;
  (r !== null ? r.type !== 0 : a || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (kd(t, n, r, a) && (n = null),
    a || r === null
      ? yd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : r.mustUseProperty
      ? (e[r.propertyName] = n === null ? (r.type === 3 ? !1 : "") : n)
      : ((t = r.attributeName),
        (a = r.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((r = r.type), (n = r === 3 || (r === 4 && n === !0) ? "" : "" + n), a ? e.setAttributeNS(a, t, n) : e.setAttribute(t, n))));
}
var Ze = il.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  sa = Symbol.for("react.element"),
  Dt = Symbol.for("react.portal"),
  Rt = Symbol.for("react.fragment"),
  Zi = Symbol.for("react.strict_mode"),
  ei = Symbol.for("react.profiler"),
  sl = Symbol.for("react.provider"),
  ll = Symbol.for("react.context"),
  Ji = Symbol.for("react.forward_ref"),
  ti = Symbol.for("react.suspense"),
  ni = Symbol.for("react.suspense_list"),
  eo = Symbol.for("react.memo"),
  et = Symbol.for("react.lazy"),
  ul = Symbol.for("react.offscreen"),
  Ko = Symbol.iterator;
function hn(e) {
  return e === null || typeof e != "object" ? null : ((e = (Ko && e[Ko]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var j = Object.assign,
  Mr;
function bn(e) {
  if (Mr === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Mr = (t && t[1]) || "";
    }
  return (
    `
` +
    Mr +
    e
  );
}
var Er = !1;
function Ar(e, t) {
  if (!e || Er) return "";
  Er = !0;
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
        var r = m.stack.split(`
`),
          i = a.stack.split(`
`),
          s = r.length - 1,
          u = i.length - 1;
        1 <= s && 0 <= u && r[s] !== i[u];

      )
        u--;
      for (; 1 <= s && 0 <= u; s--, u--)
        if (r[s] !== i[u]) {
          if (s !== 1 || u !== 1)
            do
              if ((s--, u--, 0 > u || r[s] !== i[u])) {
                var d =
                  `
` + r[s].replace(" at new ", " at ");
                return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), d;
              }
            while (1 <= s && 0 <= u);
          break;
        }
    }
  } finally {
    (Er = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? bn(e) : "";
}
function Pd(e) {
  switch (e.tag) {
    case 5:
      return bn(e.type);
    case 16:
      return bn("Lazy");
    case 13:
      return bn("Suspense");
    case 19:
      return bn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ar(e.type, !1)), e;
    case 11:
      return (e = Ar(e.type.render, !1)), e;
    case 1:
      return (e = Ar(e.type, !0)), e;
    default:
      return "";
  }
}
function ai(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Rt:
      return "Fragment";
    case Dt:
      return "Portal";
    case ei:
      return "Profiler";
    case Zi:
      return "StrictMode";
    case ti:
      return "Suspense";
    case ni:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ll:
        return (e.displayName || "Context") + ".Consumer";
      case sl:
        return (e._context.displayName || "Context") + ".Provider";
      case Ji:
        var t = e.render;
        return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
      case eo:
        return (t = e.displayName || null), t !== null ? t : ai(e.type) || "Memo";
      case et:
        (t = e._payload), (e = e._init);
        try {
          return ai(e(t));
        } catch {}
    }
  return null;
}
function Nd(e) {
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
      return ai(t);
    case 8:
      return t === Zi ? "StrictMode" : "Mode";
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
function mt(e) {
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
function Md(e) {
  var t = dl(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    a = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var r = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (s) {
          (a = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, {enumerable: n.enumerable}),
      {
        getValue: function () {
          return a;
        },
        setValue: function (s) {
          a = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function la(e) {
  e._valueTracker || (e._valueTracker = Md(e));
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
function ri(e, t) {
  var n = t.checked;
  return j({}, t, {defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n != null ? n : e._wrapperState.initialChecked});
}
function jo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    a = t.checked != null ? t.checked : t.defaultChecked;
  (n = mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: a,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    });
}
function pl(e, t) {
  (t = t.checked), t != null && Yi(e, "checked", t, !1);
}
function ii(e, t) {
  pl(e, t);
  var n = mt(t.value),
    a = t.type;
  if (n != null)
    a === "number" ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (a === "submit" || a === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? oi(e, t.type, n) : t.hasOwnProperty("defaultValue") && oi(e, t.type, mt(t.defaultValue)),
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
function oi(e, t, n) {
  (t !== "number" || Wa(e.ownerDocument) !== e) &&
    (n == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var kn = Array.isArray;
function Xt(e, t, n, a) {
  if (((e = e.options), t)) {
    t = {};
    for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
    for (n = 0; n < e.length; n++)
      (r = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== r && (e[n].selected = r), r && a && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + mt(n), t = null, r = 0; r < e.length; r++) {
      if (e[r].value === n) {
        (e[r].selected = !0), a && (e[r].defaultSelected = !0);
        return;
      }
      t !== null || e[r].disabled || (t = e[r]);
    }
    t !== null && (t.selected = !0);
  }
}
function si(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return j({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue});
}
function $o(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (kn(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = {initialValue: mt(n)};
}
function fl(e, t) {
  var n = mt(t.value),
    a = mt(t.defaultValue);
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
function li(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ml(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ua,
  hl = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, a, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, a, r);
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
var Mn = {
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
Object.keys(Mn).forEach(function (e) {
  Ed.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mn[t] = Mn[e]);
  });
});
function gl(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Mn.hasOwnProperty(e) && Mn[e])
    ? ("" + t).trim()
    : t + "px";
}
function _l(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var a = n.indexOf("--") === 0,
        r = gl(n, t[n], a);
      n === "float" && (n = "cssFloat"), a ? e.setProperty(n, r) : (e[n] = r);
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
function ui(e, t) {
  if (t) {
    if (Ad[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function di(e, t) {
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
var ci = null;
function to(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var pi = null,
  qt = null,
  Yt = null;
function qo(e) {
  if ((e = na(e))) {
    if (typeof pi != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = dr(t)), pi(e.stateNode, e.type, t));
  }
}
function vl(e) {
  qt ? (Yt ? Yt.push(e) : (Yt = [e])) : (qt = e);
}
function wl() {
  if (qt) {
    var e = qt,
      t = Yt;
    if (((Yt = qt = null), qo(e), t)) for (e = 0; e < t.length; e++) qo(t[e]);
  }
}
function xl(e, t) {
  return e(t);
}
function Sl() {}
var Cr = !1;
function yl(e, t, n) {
  if (Cr) return e(t, n);
  Cr = !0;
  try {
    return xl(e, t, n);
  } finally {
    (Cr = !1), (qt !== null || Yt !== null) && (Sl(), wl());
  }
}
function Rn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var a = dr(n);
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
var fi = !1;
if ($e)
  try {
    var gn = {};
    Object.defineProperty(gn, "passive", {
      get: function () {
        fi = !0;
      },
    }),
      window.addEventListener("test", gn, gn),
      window.removeEventListener("test", gn, gn);
  } catch {
    fi = !1;
  }
function Cd(e, t, n, a, r, i, s, u, d) {
  var m = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, m);
  } catch (v) {
    this.onError(v);
  }
}
var En = !1,
  Fa = null,
  Da = !1,
  mi = null,
  Gd = {
    onError: function (e) {
      (En = !0), (Fa = e);
    },
  };
function zd(e, t, n, a, r, i, s, u, d) {
  (En = !1), (Fa = null), Cd.apply(Gd, arguments);
}
function Td(e, t, n, a, r, i, s, u, d) {
  if ((zd.apply(this, arguments), En)) {
    if (En) {
      var m = Fa;
      (En = !1), (Fa = null);
    } else throw Error(x(198));
    Da || ((Da = !0), (mi = m));
  }
}
function Wt(e) {
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
  if (Wt(e) !== e) throw Error(x(188));
}
function Bd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Wt(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, a = t; ; ) {
    var r = n.return;
    if (r === null) break;
    var i = r.alternate;
    if (i === null) {
      if (((a = r.return), a !== null)) {
        n = a;
        continue;
      }
      break;
    }
    if (r.child === i.child) {
      for (i = r.child; i; ) {
        if (i === n) return Yo(r), e;
        if (i === a) return Yo(r), t;
        i = i.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== a.return) (n = r), (a = i);
    else {
      for (var s = !1, u = r.child; u; ) {
        if (u === n) {
          (s = !0), (n = r), (a = i);
          break;
        }
        if (u === a) {
          (s = !0), (a = r), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!s) {
        for (u = i.child; u; ) {
          if (u === n) {
            (s = !0), (n = i), (a = r);
            break;
          }
          if (u === a) {
            (s = !0), (a = i), (n = r);
            break;
          }
          u = u.sibling;
        }
        if (!s) throw Error(x(189));
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
var Nl = Se.unstable_scheduleCallback,
  Zo = Se.unstable_cancelCallback,
  Wd = Se.unstable_shouldYield,
  Fd = Se.unstable_requestPaint,
  $ = Se.unstable_now,
  Dd = Se.unstable_getCurrentPriorityLevel,
  no = Se.unstable_ImmediatePriority,
  Ml = Se.unstable_UserBlockingPriority,
  Ra = Se.unstable_NormalPriority,
  Rd = Se.unstable_LowPriority,
  El = Se.unstable_IdlePriority,
  or = null,
  Le = null;
function Od(e) {
  if (Le && typeof Le.onCommitFiberRoot == "function")
    try {
      Le.onCommitFiberRoot(or, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Be = Math.clz32 ? Math.clz32 : Vd,
  Ld = Math.log,
  Hd = Math.LN2;
function Vd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ld(e) / Hd) | 0)) | 0;
}
var da = 64,
  ca = 4194304;
function Pn(e) {
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
    r = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var u = s & ~r;
    u !== 0 ? (a = Pn(u)) : ((i &= s), i !== 0 && (a = Pn(i)));
  } else (s = n & ~r), s !== 0 ? (a = Pn(s)) : i !== 0 && (a = Pn(i));
  if (a === 0) return 0;
  if (t !== 0 && t !== a && (t & r) === 0 && ((r = a & -a), (i = t & -t), r >= i || (r === 16 && (i & 4194240) !== 0))) return t;
  if (((a & 4) !== 0 && (a |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= a; 0 < t; ) (n = 31 - Be(t)), (r = 1 << n), (a |= e[n]), (t &= ~r);
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
  for (var n = e.suspendedLanes, a = e.pingedLanes, r = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Be(i),
      u = 1 << s,
      d = r[s];
    d === -1 ? ((u & n) === 0 || (u & a) !== 0) && (r[s] = Id(u, t)) : d <= t && (e.expiredLanes |= u), (i &= ~u);
  }
}
function hi(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Al() {
  var e = da;
  return (da <<= 1), (da & 4194240) === 0 && (da = 64), e;
}
function Gr(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ea(e, t, n) {
  (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - Be(t)), (e[t] = n);
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
    var r = 31 - Be(n),
      i = 1 << r;
    (t[r] = 0), (a[r] = -1), (e[r] = -1), (n &= ~i);
  }
}
function ao(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var a = 31 - Be(n),
      r = 1 << a;
    (r & t) | (e[a] & t) && (e[a] |= t), (n &= ~r);
  }
}
var F = 0;
function Cl(e) {
  return (e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1;
}
var Gl,
  ro,
  zl,
  Tl,
  Bl,
  gi = !1,
  pa = [],
  ot = null,
  st = null,
  lt = null,
  On = new Map(),
  Ln = new Map(),
  nt = [],
  jd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Jo(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ot = null;
      break;
    case "dragenter":
    case "dragleave":
      st = null;
      break;
    case "mouseover":
    case "mouseout":
      lt = null;
      break;
    case "pointerover":
    case "pointerout":
      On.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ln.delete(t.pointerId);
  }
}
function _n(e, t, n, a, r, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {blockedOn: t, domEventName: n, eventSystemFlags: a, nativeEvent: i, targetContainers: [r]}),
      t !== null && ((t = na(t)), t !== null && ro(t)),
      e)
    : ((e.eventSystemFlags |= a), (t = e.targetContainers), r !== null && t.indexOf(r) === -1 && t.push(r), e);
}
function Qd(e, t, n, a, r) {
  switch (t) {
    case "focusin":
      return (ot = _n(ot, e, t, n, a, r)), !0;
    case "dragenter":
      return (st = _n(st, e, t, n, a, r)), !0;
    case "mouseover":
      return (lt = _n(lt, e, t, n, a, r)), !0;
    case "pointerover":
      var i = r.pointerId;
      return On.set(i, _n(On.get(i) || null, e, t, n, a, r)), !0;
    case "gotpointercapture":
      return (i = r.pointerId), Ln.set(i, _n(Ln.get(i) || null, e, t, n, a, r)), !0;
  }
  return !1;
}
function Wl(e) {
  var t = kt(e.target);
  if (t !== null) {
    var n = Wt(t);
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
    var n = _i(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var a = new n.constructor(n.type, n);
      (ci = a), n.target.dispatchEvent(a), (ci = null);
    } else return (t = na(n)), t !== null && ro(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function es(e, t, n) {
  Pa(e) && n.delete(t);
}
function $d() {
  (gi = !1),
    ot !== null && Pa(ot) && (ot = null),
    st !== null && Pa(st) && (st = null),
    lt !== null && Pa(lt) && (lt = null),
    On.forEach(es),
    Ln.forEach(es);
}
function vn(e, t) {
  e.blockedOn === t && ((e.blockedOn = null), gi || ((gi = !0), Se.unstable_scheduleCallback(Se.unstable_NormalPriority, $d)));
}
function Hn(e) {
  function t(r) {
    return vn(r, e);
  }
  if (0 < pa.length) {
    vn(pa[0], e);
    for (var n = 1; n < pa.length; n++) {
      var a = pa[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
  }
  for (
    ot !== null && vn(ot, e), st !== null && vn(st, e), lt !== null && vn(lt, e), On.forEach(t), Ln.forEach(t), n = 0;
    n < nt.length;
    n++
  )
    (a = nt[n]), a.blockedOn === e && (a.blockedOn = null);
  for (; 0 < nt.length && ((n = nt[0]), n.blockedOn === null); ) Wl(n), n.blockedOn === null && nt.shift();
}
var Zt = Ze.ReactCurrentBatchConfig,
  La = !0;
function Xd(e, t, n, a) {
  var r = F,
    i = Zt.transition;
  Zt.transition = null;
  try {
    (F = 1), io(e, t, n, a);
  } finally {
    (F = r), (Zt.transition = i);
  }
}
function qd(e, t, n, a) {
  var r = F,
    i = Zt.transition;
  Zt.transition = null;
  try {
    (F = 4), io(e, t, n, a);
  } finally {
    (F = r), (Zt.transition = i);
  }
}
function io(e, t, n, a) {
  if (La) {
    var r = _i(e, t, n, a);
    if (r === null) Hr(e, t, a, Ha, n), Jo(e, a);
    else if (Qd(r, e, t, n, a)) a.stopPropagation();
    else if ((Jo(e, a), t & 4 && -1 < jd.indexOf(e))) {
      for (; r !== null; ) {
        var i = na(r);
        if ((i !== null && Gl(i), (i = _i(e, t, n, a)), i === null && Hr(e, t, a, Ha, n), i === r)) break;
        r = i;
      }
      r !== null && a.stopPropagation();
    } else Hr(e, t, a, null, n);
  }
}
var Ha = null;
function _i(e, t, n, a) {
  if (((Ha = null), (e = to(a)), (e = kt(e)), e !== null))
    if (((t = Wt(e)), t === null)) e = null;
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
      switch (Dd()) {
        case no:
          return 1;
        case Ml:
          return 4;
        case Ra:
        case Rd:
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
  Na = null;
function Dl() {
  if (Na) return Na;
  var e,
    t = oo,
    n = t.length,
    a,
    r = "value" in rt ? rt.value : rt.textContent,
    i = r.length;
  for (e = 0; e < n && t[e] === r[e]; e++);
  var s = n - e;
  for (a = 1; a <= s && t[n - a] === r[i - a]; a++);
  return (Na = r.slice(e, 1 < a ? 1 - a : void 0));
}
function Ma(e) {
  var t = e.keyCode;
  return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function fa() {
  return !0;
}
function ts() {
  return !1;
}
function be(e) {
  function t(n, a, r, i, s) {
    (this._reactName = n), (this._targetInst = r), (this.type = a), (this.nativeEvent = i), (this.target = s), (this.currentTarget = null);
    for (var u in e) e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? fa : ts),
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
var dn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  so = be(dn),
  ta = j({}, dn, {view: 0, detail: 0}),
  Yd = be(ta),
  zr,
  Tr,
  wn,
  sr = j({}, ta, {
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
        : (e !== wn &&
            (wn && e.type === "mousemove" ? ((zr = e.screenX - wn.screenX), (Tr = e.screenY - wn.screenY)) : (Tr = zr = 0), (wn = e)),
          zr);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Tr;
    },
  }),
  ns = be(sr),
  Zd = j({}, sr, {dataTransfer: 0}),
  Jd = be(Zd),
  ec = j({}, ta, {relatedTarget: 0}),
  Br = be(ec),
  tc = j({}, dn, {animationName: 0, elapsedTime: 0, pseudoElement: 0}),
  nc = be(tc),
  ac = j({}, dn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  rc = be(ac),
  ic = j({}, dn, {data: 0}),
  as = be(ic),
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
var dc = j({}, ta, {
    key: function (e) {
      if (e.key) {
        var t = oc[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ma(e)), e === 13 ? "Enter" : String.fromCharCode(e))
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
      return e.type === "keypress" ? Ma(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? Ma(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  cc = be(dc),
  pc = j({}, sr, {
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
  rs = be(pc),
  fc = j({}, ta, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: lo}),
  mc = be(fc),
  hc = j({}, dn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}),
  gc = be(hc),
  _c = j({}, sr, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  vc = be(_c),
  wc = [9, 13, 27, 32],
  uo = $e && "CompositionEvent" in window,
  An = null;
$e && "documentMode" in document && (An = document.documentMode);
var xc = $e && "TextEvent" in window && !An,
  Rl = $e && (!uo || (An && 8 < An && 11 >= An)),
  is = String.fromCharCode(32),
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
var Ot = !1;
function Sc(e, t) {
  switch (e) {
    case "compositionend":
      return Ll(t);
    case "keypress":
      return t.which !== 32 ? null : ((os = !0), is);
    case "textInput":
      return (e = t.data), e === is && os ? null : e;
    default:
      return null;
  }
}
function yc(e, t) {
  if (Ot) return e === "compositionend" || (!uo && Ol(e, t)) ? ((e = Dl()), (Na = oo = rt = null), (Ot = !1), e) : null;
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
      return Rl && t.locale !== "ko" ? null : t.data;
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
var Cn = null,
  Vn = null;
function kc(e) {
  Zl(e, 0);
}
function lr(e) {
  var t = Vt(e);
  if (cl(t)) return e;
}
function Pc(e, t) {
  if (e === "change") return t;
}
var Vl = !1;
if ($e) {
  var Wr;
  if ($e) {
    var Fr = "oninput" in document;
    if (!Fr) {
      var ls = document.createElement("div");
      ls.setAttribute("oninput", "return;"), (Fr = typeof ls.oninput == "function");
    }
    Wr = Fr;
  } else Wr = !1;
  Vl = Wr && (!document.documentMode || 9 < document.documentMode);
}
function us() {
  Cn && (Cn.detachEvent("onpropertychange", Il), (Vn = Cn = null));
}
function Il(e) {
  if (e.propertyName === "value" && lr(Vn)) {
    var t = [];
    Hl(t, Vn, e, to(e)), yl(kc, t);
  }
}
function Nc(e, t, n) {
  e === "focusin" ? (us(), (Cn = t), (Vn = n), Cn.attachEvent("onpropertychange", Il)) : e === "focusout" && us();
}
function Mc(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return lr(Vn);
}
function Ec(e, t) {
  if (e === "click") return lr(t);
}
function Ac(e, t) {
  if (e === "input" || e === "change") return lr(t);
}
function Cc(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Fe = typeof Object.is == "function" ? Object.is : Cc;
function In(e, t) {
  if (Fe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    a = Object.keys(t);
  if (n.length !== a.length) return !1;
  for (a = 0; a < n.length; a++) {
    var r = n[a];
    if (!Jr.call(t, r) || !Fe(e[r], t[r])) return !1;
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
        var r = n.textContent.length,
          i = Math.min(a.start, r);
        (a = a.end === void 0 ? i : Math.min(a.end, r)), !e.extend && i > a && ((r = a), (a = i), (i = r)), (r = cs(n, i));
        var s = cs(n, a);
        r &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== r.node ||
            e.anchorOffset !== r.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(r.node, r.offset),
          e.removeAllRanges(),
          i > a ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({element: e, left: e.scrollLeft, top: e.scrollTop});
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var zc = $e && "documentMode" in document && 11 >= document.documentMode,
  Lt = null,
  vi = null,
  Gn = null,
  wi = !1;
function ps(e, t, n) {
  var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wi ||
    Lt == null ||
    Lt !== Wa(a) ||
    ((a = Lt),
    "selectionStart" in a && co(a)
      ? (a = {start: a.selectionStart, end: a.selectionEnd})
      : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
        (a = {anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset})),
    (Gn && In(Gn, a)) ||
      ((Gn = a),
      (a = Va(vi, "onSelect")),
      0 < a.length && ((t = new so("onSelect", "select", null, t, n)), e.push({event: t, listeners: a}), (t.target = Lt))));
}
function ma(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var Ht = {
    animationend: ma("Animation", "AnimationEnd"),
    animationiteration: ma("Animation", "AnimationIteration"),
    animationstart: ma("Animation", "AnimationStart"),
    transitionend: ma("Transition", "TransitionEnd"),
  },
  Dr = {},
  jl = {};
$e &&
  ((jl = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ht.animationend.animation, delete Ht.animationiteration.animation, delete Ht.animationstart.animation),
  "TransitionEvent" in window || delete Ht.transitionend.transition);
function ur(e) {
  if (Dr[e]) return Dr[e];
  if (!Ht[e]) return e;
  var t = Ht[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in jl) return (Dr[e] = t[n]);
  return e;
}
var Ql = ur("animationend"),
  $l = ur("animationiteration"),
  Xl = ur("animationstart"),
  ql = ur("transitionend"),
  Yl = new Map(),
  fs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function gt(e, t) {
  Yl.set(e, t), Bt(t, [e]);
}
for (var Rr = 0; Rr < fs.length; Rr++) {
  var Or = fs[Rr],
    Tc = Or.toLowerCase(),
    Bc = Or[0].toUpperCase() + Or.slice(1);
  gt(Tc, "on" + Bc);
}
gt(Ql, "onAnimationEnd");
gt($l, "onAnimationIteration");
gt(Xl, "onAnimationStart");
gt("dblclick", "onDoubleClick");
gt("focusin", "onFocus");
gt("focusout", "onBlur");
gt(ql, "onTransitionEnd");
tn("onMouseEnter", ["mouseout", "mouseover"]);
tn("onMouseLeave", ["mouseout", "mouseover"]);
tn("onPointerEnter", ["pointerout", "pointerover"]);
tn("onPointerLeave", ["pointerout", "pointerover"]);
Bt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Bt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Bt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Bt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
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
      r = a.event;
    a = a.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = a.length - 1; 0 <= s; s--) {
          var u = a[s],
            d = u.instance,
            m = u.currentTarget;
          if (((u = u.listener), d !== i && r.isPropagationStopped())) break e;
          ms(r, u, m), (i = d);
        }
      else
        for (s = 0; s < a.length; s++) {
          if (((u = a[s]), (d = u.instance), (m = u.currentTarget), (u = u.listener), d !== i && r.isPropagationStopped())) break e;
          ms(r, u, m), (i = d);
        }
    }
  }
  if (Da) throw ((e = mi), (Da = !1), (mi = null), e);
}
function O(e, t) {
  var n = t[ki];
  n === void 0 && (n = t[ki] = new Set());
  var a = e + "__bubble";
  n.has(a) || (Jl(t, e, 2, !1), n.add(a));
}
function Lr(e, t, n) {
  var a = 0;
  t && (a |= 4), Jl(n, e, a, t);
}
var ha = "_reactListening" + Math.random().toString(36).slice(2);
function Un(e) {
  if (!e[ha]) {
    (e[ha] = !0),
      ol.forEach(function (n) {
        n !== "selectionchange" && (Wc.has(n) || Lr(n, !1, e), Lr(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ha] || ((t[ha] = !0), Lr("selectionchange", !1, t));
  }
}
function Jl(e, t, n, a) {
  switch (Fl(t)) {
    case 1:
      var r = Xd;
      break;
    case 4:
      r = qd;
      break;
    default:
      r = io;
  }
  (n = r.bind(null, t, n, e)),
    (r = void 0),
    !fi || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (r = !0),
    a
      ? r !== void 0
        ? e.addEventListener(t, n, {capture: !0, passive: r})
        : e.addEventListener(t, n, !0)
      : r !== void 0
      ? e.addEventListener(t, n, {passive: r})
      : e.addEventListener(t, n, !1);
}
function Hr(e, t, n, a, r) {
  var i = a;
  if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
    e: for (;;) {
      if (a === null) return;
      var s = a.tag;
      if (s === 3 || s === 4) {
        var u = a.stateNode.containerInfo;
        if (u === r || (u.nodeType === 8 && u.parentNode === r)) break;
        if (s === 4)
          for (s = a.return; s !== null; ) {
            var d = s.tag;
            if ((d === 3 || d === 4) && ((d = s.stateNode.containerInfo), d === r || (d.nodeType === 8 && d.parentNode === r))) return;
            s = s.return;
          }
        for (; u !== null; ) {
          if (((s = kt(u)), s === null)) return;
          if (((d = s.tag), d === 5 || d === 6)) {
            a = i = s;
            continue e;
          }
          u = u.parentNode;
        }
      }
      a = a.return;
    }
  yl(function () {
    var m = i,
      v = to(n),
      _ = [];
    e: {
      var g = Yl.get(e);
      if (g !== void 0) {
        var S = so,
          y = e;
        switch (e) {
          case "keypress":
            if (Ma(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = cc;
            break;
          case "focusin":
            (y = "focus"), (S = Br);
            break;
          case "focusout":
            (y = "blur"), (S = Br);
            break;
          case "beforeblur":
          case "afterblur":
            S = Br;
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
            S = rc;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = rs;
        }
        var b = (t & 4) !== 0,
          D = !b && e === "scroll",
          f = b ? (g !== null ? g + "Capture" : null) : g;
        b = [];
        for (var p = m, h; p !== null; ) {
          h = p;
          var w = h.stateNode;
          if ((h.tag === 5 && w !== null && ((h = w), f !== null && ((w = Rn(p, f)), w != null && b.push(Kn(p, w, h)))), D)) break;
          p = p.return;
        }
        0 < b.length && ((g = new S(g, y, null, n, v)), _.push({event: g, listeners: b}));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          g && n !== ci && (y = n.relatedTarget || n.fromElement) && (kt(y) || y[Xe]))
        )
          break e;
        if (
          (S || g) &&
          ((g = v.window === v ? v : (g = v.ownerDocument) ? g.defaultView || g.parentWindow : window),
          S
            ? ((y = n.relatedTarget || n.toElement),
              (S = m),
              (y = y ? kt(y) : null),
              y !== null && ((D = Wt(y)), y !== D || (y.tag !== 5 && y.tag !== 6)) && (y = null))
            : ((S = null), (y = m)),
          S !== y)
        ) {
          if (
            ((b = ns),
            (w = "onMouseLeave"),
            (f = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") && ((b = rs), (w = "onPointerLeave"), (f = "onPointerEnter"), (p = "pointer")),
            (D = S == null ? g : Vt(S)),
            (h = y == null ? g : Vt(y)),
            (g = new b(w, p + "leave", S, n, v)),
            (g.target = D),
            (g.relatedTarget = h),
            (w = null),
            kt(v) === m && ((b = new b(f, p + "enter", y, n, v)), (b.target = h), (b.relatedTarget = D), (w = b)),
            (D = w),
            S && y)
          )
            t: {
              for (b = S, f = y, p = 0, h = b; h; h = Ft(h)) p++;
              for (h = 0, w = f; w; w = Ft(w)) h++;
              for (; 0 < p - h; ) (b = Ft(b)), p--;
              for (; 0 < h - p; ) (f = Ft(f)), h--;
              for (; p--; ) {
                if (b === f || (f !== null && b === f.alternate)) break t;
                (b = Ft(b)), (f = Ft(f));
              }
              b = null;
            }
          else b = null;
          S !== null && hs(_, g, S, b, !1), y !== null && D !== null && hs(_, D, y, b, !0);
        }
      }
      e: {
        if (
          ((g = m ? Vt(m) : window), (S = g.nodeName && g.nodeName.toLowerCase()), S === "select" || (S === "input" && g.type === "file"))
        )
          var P = Pc;
        else if (ss(g))
          if (Vl) P = Ac;
          else {
            P = Mc;
            var A = Nc;
          }
        else (S = g.nodeName) && S.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (P = Ec);
        if (P && (P = P(e, m))) {
          Hl(_, P, n, v);
          break e;
        }
        A && A(e, g, m), e === "focusout" && (A = g._wrapperState) && A.controlled && g.type === "number" && oi(g, "number", g.value);
      }
      switch (((A = m ? Vt(m) : window), e)) {
        case "focusin":
          (ss(A) || A.contentEditable === "true") && ((Lt = A), (vi = m), (Gn = null));
          break;
        case "focusout":
          Gn = vi = Lt = null;
          break;
        case "mousedown":
          wi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (wi = !1), ps(_, n, v);
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
      else Ot ? Ol(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (Rl &&
          n.locale !== "ko" &&
          (Ot || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && Ot && (E = Dl())
            : ((rt = v), (oo = "value" in rt ? rt.value : rt.textContent), (Ot = !0))),
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
function Kn(e, t, n) {
  return {instance: e, listener: t, currentTarget: n};
}
function Va(e, t) {
  for (var n = t + "Capture", a = []; e !== null; ) {
    var r = e,
      i = r.stateNode;
    r.tag === 5 &&
      i !== null &&
      ((r = i), (i = Rn(e, n)), i != null && a.unshift(Kn(e, i, r)), (i = Rn(e, t)), i != null && a.push(Kn(e, i, r))),
      (e = e.return);
  }
  return a;
}
function Ft(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function hs(e, t, n, a, r) {
  for (var i = t._reactName, s = []; n !== null && n !== a; ) {
    var u = n,
      d = u.alternate,
      m = u.stateNode;
    if (d !== null && d === a) break;
    u.tag === 5 &&
      m !== null &&
      ((u = m), r ? ((d = Rn(n, i)), d != null && s.unshift(Kn(n, d, u))) : r || ((d = Rn(n, i)), d != null && s.push(Kn(n, d, u)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({event: t, listeners: s});
}
var Fc = /\r\n?/g,
  Dc = /\u0000|\uFFFD/g;
function gs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Fc,
      `
`
    )
    .replace(Dc, "");
}
function ga(e, t, n) {
  if (((t = gs(t)), gs(e) !== t && n)) throw Error(x(425));
}
function Ia() {}
var xi = null,
  Si = null;
function yi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
  );
}
var bi = typeof setTimeout == "function" ? setTimeout : void 0,
  Rc = typeof clearTimeout == "function" ? clearTimeout : void 0,
  _s = typeof Promise == "function" ? Promise : void 0,
  Oc =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof _s < "u"
      ? function (e) {
          return _s.resolve(null).then(e).catch(Lc);
        }
      : bi;
function Lc(e) {
  setTimeout(function () {
    throw e;
  });
}
function Vr(e, t) {
  var n = t,
    a = 0;
  do {
    var r = n.nextSibling;
    if ((e.removeChild(n), r && r.nodeType === 8))
      if (((n = r.data), n === "/$")) {
        if (a === 0) {
          e.removeChild(r), Hn(t);
          return;
        }
        a--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || a++;
    n = r;
  } while (n);
  Hn(t);
}
function ut(e) {
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
var cn = Math.random().toString(36).slice(2),
  Oe = "__reactFiber$" + cn,
  jn = "__reactProps$" + cn,
  Xe = "__reactContainer$" + cn,
  ki = "__reactEvents$" + cn,
  Hc = "__reactListeners$" + cn,
  Vc = "__reactHandles$" + cn;
function kt(e) {
  var t = e[Oe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Xe] || n[Oe])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = vs(e); e !== null; ) {
          if ((n = e[Oe])) return n;
          e = vs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function na(e) {
  return (e = e[Oe] || e[Xe]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Vt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function dr(e) {
  return e[jn] || null;
}
var Pi = [],
  It = -1;
function _t(e) {
  return {current: e};
}
function L(e) {
  0 > It || ((e.current = Pi[It]), (Pi[It] = null), It--);
}
function R(e, t) {
  It++, (Pi[It] = e.current), (e.current = t);
}
var ht = {},
  oe = _t(ht),
  me = _t(!1),
  At = ht;
function nn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ht;
  var a = e.stateNode;
  if (a && a.__reactInternalMemoizedUnmaskedChildContext === t) return a.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    i;
  for (i in n) r[i] = t[i];
  return (
    a && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = r)), r
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function Ua() {
  L(me), L(oe);
}
function ws(e, t, n) {
  if (oe.current !== ht) throw Error(x(168));
  R(oe, t), R(me, n);
}
function eu(e, t, n) {
  var a = e.stateNode;
  if (((t = t.childContextTypes), typeof a.getChildContext != "function")) return n;
  a = a.getChildContext();
  for (var r in a) if (!(r in t)) throw Error(x(108, Nd(e) || "Unknown", r));
  return j({}, n, a);
}
function Ka(e) {
  return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ht), (At = oe.current), R(oe, e), R(me, me.current), !0;
}
function xs(e, t, n) {
  var a = e.stateNode;
  if (!a) throw Error(x(169));
  n ? ((e = eu(e, t, At)), (a.__reactInternalMemoizedMergedChildContext = e), L(me), L(oe), R(oe, e)) : L(me), R(me, n);
}
var Ue = null,
  cr = !1,
  Ir = !1;
function tu(e) {
  Ue === null ? (Ue = [e]) : Ue.push(e);
}
function Ic(e) {
  (cr = !0), tu(e);
}
function vt() {
  if (!Ir && Ue !== null) {
    Ir = !0;
    var e = 0,
      t = F;
    try {
      var n = Ue;
      for (F = 1; e < n.length; e++) {
        var a = n[e];
        do a = a(!0);
        while (a !== null);
      }
      (Ue = null), (cr = !1);
    } catch (r) {
      throw (Ue !== null && (Ue = Ue.slice(e + 1)), Nl(no, vt), r);
    } finally {
      (F = t), (Ir = !1);
    }
  }
  return null;
}
var Ut = [],
  Kt = 0,
  ja = null,
  Qa = 0,
  ke = [],
  Pe = 0,
  Ct = null,
  Ke = 1,
  je = "";
function yt(e, t) {
  (Ut[Kt++] = Qa), (Ut[Kt++] = ja), (ja = e), (Qa = t);
}
function nu(e, t, n) {
  (ke[Pe++] = Ke), (ke[Pe++] = je), (ke[Pe++] = Ct), (Ct = e);
  var a = Ke;
  e = je;
  var r = 32 - Be(a) - 1;
  (a &= ~(1 << r)), (n += 1);
  var i = 32 - Be(t) + r;
  if (30 < i) {
    var s = r - (r % 5);
    (i = (a & ((1 << s) - 1)).toString(32)), (a >>= s), (r -= s), (Ke = (1 << (32 - Be(t) + r)) | (n << r) | a), (je = i + e);
  } else (Ke = (1 << i) | (n << r) | a), (je = e);
}
function po(e) {
  e.return !== null && (yt(e, 1), nu(e, 1, 0));
}
function fo(e) {
  for (; e === ja; ) (ja = Ut[--Kt]), (Ut[Kt] = null), (Qa = Ut[--Kt]), (Ut[Kt] = null);
  for (; e === Ct; ) (Ct = ke[--Pe]), (ke[Pe] = null), (je = ke[--Pe]), (ke[Pe] = null), (Ke = ke[--Pe]), (ke[Pe] = null);
}
var xe = null,
  we = null,
  H = !1,
  Te = null;
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
        t !== null ? ((e.stateNode = t), (xe = e), (we = ut(t.firstChild)), !0) : !1
      );
    case 6:
      return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (xe = e), (we = null), !0) : !1;
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ct !== null ? {id: Ke, overflow: je} : null),
            (e.memoizedState = {dehydrated: t, treeContext: n, retryLane: 1073741824}),
            (n = Ne(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (xe = e),
            (we = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ni(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Mi(e) {
  if (H) {
    var t = we;
    if (t) {
      var n = t;
      if (!Ss(e, t)) {
        if (Ni(e)) throw Error(x(418));
        t = ut(n.nextSibling);
        var a = xe;
        t && Ss(e, t) ? au(a, n) : ((e.flags = (e.flags & -4097) | 2), (H = !1), (xe = e));
      }
    } else {
      if (Ni(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (xe = e);
    }
  }
}
function ys(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  xe = e;
}
function _a(e) {
  if (e !== xe) return !1;
  if (!H) return ys(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== "head" && t !== "body" && !yi(e.type, e.memoizedProps))),
    t && (t = we))
  ) {
    if (Ni(e)) throw (ru(), Error(x(418)));
    for (; t; ) au(e, t), (t = ut(t.nextSibling));
  }
  if ((ys(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = ut(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = xe ? ut(e.stateNode.nextSibling) : null;
  return !0;
}
function ru() {
  for (var e = we; e; ) e = ut(e.nextSibling);
}
function an() {
  (we = xe = null), (H = !1);
}
function mo(e) {
  Te === null ? (Te = [e]) : Te.push(e);
}
var Uc = Ze.ReactCurrentBatchConfig;
function Ge(e, t) {
  if (e && e.defaultProps) {
    (t = j({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var $a = _t(null),
  Xa = null,
  jt = null,
  ho = null;
function go() {
  ho = jt = Xa = null;
}
function _o(e) {
  var t = $a.current;
  L($a), (e._currentValue = t);
}
function Ei(e, t, n) {
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
function Jt(e, t) {
  (Xa = e),
    (ho = jt = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (fe = !0), (e.firstContext = null));
}
function Ee(e) {
  var t = e._currentValue;
  if (ho !== e)
    if (((e = {context: e, memoizedValue: t, next: null}), jt === null)) {
      if (Xa === null) throw Error(x(308));
      (jt = e), (Xa.dependencies = {lanes: 0, firstContext: e});
    } else jt = jt.next = e;
  return t;
}
var Pt = null;
function vo(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function iu(e, t, n, a) {
  var r = t.interleaved;
  return r === null ? ((n.next = n), vo(t)) : ((n.next = r.next), (r.next = n)), (t.interleaved = n), qe(e, a);
}
function qe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var tt = !1;
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
function Qe(e, t) {
  return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null};
}
function dt(e, t, n) {
  var a = e.updateQueue;
  if (a === null) return null;
  if (((a = a.shared), (W & 2) !== 0)) {
    var r = a.pending;
    return r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (a.pending = t), qe(e, n);
  }
  return (r = a.interleaved), r === null ? ((t.next = t), vo(a)) : ((t.next = r.next), (r.next = t)), (a.interleaved = t), qe(e, n);
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
    var r = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null};
        i === null ? (r = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (r = i = t) : (i = i.next = t);
    } else r = i = t;
    (n = {baseState: a.baseState, firstBaseUpdate: r, lastBaseUpdate: i, shared: a.shared, effects: a.effects}), (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function qa(e, t, n, a) {
  var r = e.updateQueue;
  tt = !1;
  var i = r.firstBaseUpdate,
    s = r.lastBaseUpdate,
    u = r.shared.pending;
  if (u !== null) {
    r.shared.pending = null;
    var d = u,
      m = d.next;
    (d.next = null), s === null ? (i = m) : (s.next = m), (s = d);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (u = v.lastBaseUpdate),
      u !== s && (u === null ? (v.firstBaseUpdate = m) : (u.next = m), (v.lastBaseUpdate = d)));
  }
  if (i !== null) {
    var _ = r.baseState;
    (s = 0), (v = m = d = null), (u = i);
    do {
      var g = u.lane,
        S = u.eventTime;
      if ((a & g) === g) {
        v !== null && (v = v.next = {eventTime: S, lane: 0, tag: u.tag, payload: u.payload, callback: u.callback, next: null});
        e: {
          var y = e,
            b = u;
          switch (((g = t), (S = n), b.tag)) {
            case 1:
              if (((y = b.payload), typeof y == "function")) {
                _ = y.call(S, _, g);
                break e;
              }
              _ = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (((y = b.payload), (g = typeof y == "function" ? y.call(S, _, g) : y), g == null)) break e;
              _ = j({}, _, g);
              break e;
            case 2:
              tt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && ((e.flags |= 64), (g = r.effects), g === null ? (r.effects = [u]) : g.push(u));
      } else
        (S = {eventTime: S, lane: g, tag: u.tag, payload: u.payload, callback: u.callback, next: null}),
          v === null ? ((m = v = S), (d = _)) : (v = v.next = S),
          (s |= g);
      if (((u = u.next), u === null)) {
        if (((u = r.shared.pending), u === null)) break;
        (g = u), (u = g.next), (g.next = null), (r.lastBaseUpdate = g), (r.shared.pending = null);
      }
    } while (1);
    if (
      (v === null && (d = _), (r.baseState = d), (r.firstBaseUpdate = m), (r.lastBaseUpdate = v), (t = r.shared.interleaved), t !== null)
    ) {
      r = t;
      do (s |= r.lane), (r = r.next);
      while (r !== t);
    } else i === null && (r.shared.lanes = 0);
    (zt |= s), (e.lanes = s), (e.memoizedState = _);
  }
}
function ks(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var a = e[t],
        r = a.callback;
      if (r !== null) {
        if (((a.callback = null), (a = n), typeof r != "function")) throw Error(x(191, r));
        r.call(a);
      }
    }
}
var su = new il.Component().refs;
function Ai(e, t, n, a) {
  (t = e.memoizedState),
    (n = n(a, t)),
    (n = n == null ? t : j({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var pr = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Wt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var a = ue(),
      r = pt(e),
      i = Qe(a, r);
    (i.payload = t), n != null && (i.callback = n), (t = dt(e, i, r)), t !== null && (We(t, e, r, a), Ea(t, e, r));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var a = ue(),
      r = pt(e),
      i = Qe(a, r);
    (i.tag = 1), (i.payload = t), n != null && (i.callback = n), (t = dt(e, i, r)), t !== null && (We(t, e, r, a), Ea(t, e, r));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      a = pt(e),
      r = Qe(n, a);
    (r.tag = 2), t != null && (r.callback = t), (t = dt(e, r, a)), t !== null && (We(t, e, a, n), Ea(t, e, a));
  },
};
function Ps(e, t, n, a, r, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(a, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !In(n, a) || !In(r, i)
      : !0
  );
}
function lu(e, t, n) {
  var a = !1,
    r = ht,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ee(i))
      : ((r = he(t) ? At : oe.current), (a = t.contextTypes), (i = (a = a != null) ? nn(e, r) : ht)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = pr),
    (e.stateNode = t),
    (t._reactInternals = e),
    a && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = r), (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ns(e, t, n, a) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a),
    t.state !== e && pr.enqueueReplaceState(t, t.state, null);
}
function Ci(e, t, n, a) {
  var r = e.stateNode;
  (r.props = n), (r.state = e.memoizedState), (r.refs = su), wo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? (r.context = Ee(i)) : ((i = he(t) ? At : oe.current), (r.context = nn(e, i))),
    (r.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ai(e, t, i, n), (r.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function") ||
      ((t = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(),
      t !== r.state && pr.enqueueReplaceState(r, r.state, null),
      qa(e, n, r, a),
      (r.state = e.memoizedState)),
    typeof r.componentDidMount == "function" && (e.flags |= 4194308);
}
function xn(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var a = n.stateNode;
      }
      if (!a) throw Error(x(147, e));
      var r = a,
        i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var u = r.refs;
            u === su && (u = r.refs = {}), s === null ? delete u[i] : (u[i] = s);
          }),
          (t._stringRef = i),
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
function Ms(e) {
  var t = e._init;
  return t(e._payload);
}
function uu(e) {
  function t(f, p) {
    if (e) {
      var h = f.deletions;
      h === null ? ((f.deletions = [p]), (f.flags |= 16)) : h.push(p);
    }
  }
  function n(f, p) {
    if (!e) return null;
    for (; p !== null; ) t(f, p), (p = p.sibling);
    return null;
  }
  function a(f, p) {
    for (f = new Map(); p !== null; ) p.key !== null ? f.set(p.key, p) : f.set(p.index, p), (p = p.sibling);
    return f;
  }
  function r(f, p) {
    return (f = ft(f, p)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, p, h) {
    return (
      (f.index = h),
      e
        ? ((h = f.alternate), h !== null ? ((h = h.index), h < p ? ((f.flags |= 2), p) : h) : ((f.flags |= 2), p))
        : ((f.flags |= 1048576), p)
    );
  }
  function s(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, p, h, w) {
    return p === null || p.tag !== 6 ? ((p = qr(h, f.mode, w)), (p.return = f), p) : ((p = r(p, h)), (p.return = f), p);
  }
  function d(f, p, h, w) {
    var P = h.type;
    return P === Rt
      ? v(f, p, h.props.children, w, h.key)
      : p !== null && (p.elementType === P || (typeof P == "object" && P !== null && P.$$typeof === et && Ms(P) === p.type))
      ? ((w = r(p, h.props)), (w.ref = xn(f, p, h)), (w.return = f), w)
      : ((w = Ba(h.type, h.key, h.props, null, f.mode, w)), (w.ref = xn(f, p, h)), (w.return = f), w);
  }
  function m(f, p, h, w) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== h.containerInfo || p.stateNode.implementation !== h.implementation
      ? ((p = Yr(h, f.mode, w)), (p.return = f), p)
      : ((p = r(p, h.children || [])), (p.return = f), p);
  }
  function v(f, p, h, w, P) {
    return p === null || p.tag !== 7 ? ((p = Et(h, f.mode, w, P)), (p.return = f), p) : ((p = r(p, h)), (p.return = f), p);
  }
  function _(f, p, h) {
    if ((typeof p == "string" && p !== "") || typeof p == "number") return (p = qr("" + p, f.mode, h)), (p.return = f), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case sa:
          return (h = Ba(p.type, p.key, p.props, null, f.mode, h)), (h.ref = xn(f, null, p)), (h.return = f), h;
        case Dt:
          return (p = Yr(p, f.mode, h)), (p.return = f), p;
        case et:
          var w = p._init;
          return _(f, w(p._payload), h);
      }
      if (kn(p) || hn(p)) return (p = Et(p, f.mode, h, null)), (p.return = f), p;
      va(f, p);
    }
    return null;
  }
  function g(f, p, h, w) {
    var P = p !== null ? p.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number") return P !== null ? null : u(f, p, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case sa:
          return h.key === P ? d(f, p, h, w) : null;
        case Dt:
          return h.key === P ? m(f, p, h, w) : null;
        case et:
          return (P = h._init), g(f, p, P(h._payload), w);
      }
      if (kn(h) || hn(h)) return P !== null ? null : v(f, p, h, w, null);
      va(f, h);
    }
    return null;
  }
  function S(f, p, h, w, P) {
    if ((typeof w == "string" && w !== "") || typeof w == "number") return (f = f.get(h) || null), u(p, f, "" + w, P);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case sa:
          return (f = f.get(w.key === null ? h : w.key) || null), d(p, f, w, P);
        case Dt:
          return (f = f.get(w.key === null ? h : w.key) || null), m(p, f, w, P);
        case et:
          var A = w._init;
          return S(f, p, h, A(w._payload), P);
      }
      if (kn(w) || hn(w)) return (f = f.get(h) || null), v(p, f, w, P, null);
      va(p, w);
    }
    return null;
  }
  function y(f, p, h, w) {
    for (var P = null, A = null, E = p, C = (p = 0), V = null; E !== null && C < h.length; C++) {
      E.index > C ? ((V = E), (E = null)) : (V = E.sibling);
      var T = g(f, E, h[C], w);
      if (T === null) {
        E === null && (E = V);
        break;
      }
      e && E && T.alternate === null && t(f, E), (p = i(T, p, C)), A === null ? (P = T) : (A.sibling = T), (A = T), (E = V);
    }
    if (C === h.length) return n(f, E), H && yt(f, C), P;
    if (E === null) {
      for (; C < h.length; C++) (E = _(f, h[C], w)), E !== null && ((p = i(E, p, C)), A === null ? (P = E) : (A.sibling = E), (A = E));
      return H && yt(f, C), P;
    }
    for (E = a(f, E); C < h.length; C++)
      (V = S(E, f, C, h[C], w)),
        V !== null &&
          (e && V.alternate !== null && E.delete(V.key === null ? C : V.key),
          (p = i(V, p, C)),
          A === null ? (P = V) : (A.sibling = V),
          (A = V));
    return (
      e &&
        E.forEach(function (se) {
          return t(f, se);
        }),
      H && yt(f, C),
      P
    );
  }
  function b(f, p, h, w) {
    var P = hn(h);
    if (typeof P != "function") throw Error(x(150));
    if (((h = P.call(h)), h == null)) throw Error(x(151));
    for (var A = (P = null), E = p, C = (p = 0), V = null, T = h.next(); E !== null && !T.done; C++, T = h.next()) {
      E.index > C ? ((V = E), (E = null)) : (V = E.sibling);
      var se = g(f, E, T.value, w);
      if (se === null) {
        E === null && (E = V);
        break;
      }
      e && E && se.alternate === null && t(f, E), (p = i(se, p, C)), A === null ? (P = se) : (A.sibling = se), (A = se), (E = V);
    }
    if (T.done) return n(f, E), H && yt(f, C), P;
    if (E === null) {
      for (; !T.done; C++, T = h.next())
        (T = _(f, T.value, w)), T !== null && ((p = i(T, p, C)), A === null ? (P = T) : (A.sibling = T), (A = T));
      return H && yt(f, C), P;
    }
    for (E = a(f, E); !T.done; C++, T = h.next())
      (T = S(E, f, C, T.value, w)),
        T !== null &&
          (e && T.alternate !== null && E.delete(T.key === null ? C : T.key),
          (p = i(T, p, C)),
          A === null ? (P = T) : (A.sibling = T),
          (A = T));
    return (
      e &&
        E.forEach(function (wt) {
          return t(f, wt);
        }),
      H && yt(f, C),
      P
    );
  }
  function D(f, p, h, w) {
    if (
      (typeof h == "object" && h !== null && h.type === Rt && h.key === null && (h = h.props.children), typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case sa:
          e: {
            for (var P = h.key, A = p; A !== null; ) {
              if (A.key === P) {
                if (((P = h.type), P === Rt)) {
                  if (A.tag === 7) {
                    n(f, A.sibling), (p = r(A, h.props.children)), (p.return = f), (f = p);
                    break e;
                  }
                } else if (A.elementType === P || (typeof P == "object" && P !== null && P.$$typeof === et && Ms(P) === A.type)) {
                  n(f, A.sibling), (p = r(A, h.props)), (p.ref = xn(f, A, h)), (p.return = f), (f = p);
                  break e;
                }
                n(f, A);
                break;
              } else t(f, A);
              A = A.sibling;
            }
            h.type === Rt
              ? ((p = Et(h.props.children, f.mode, w, h.key)), (p.return = f), (f = p))
              : ((w = Ba(h.type, h.key, h.props, null, f.mode, w)), (w.ref = xn(f, p, h)), (w.return = f), (f = w));
          }
          return s(f);
        case Dt:
          e: {
            for (A = h.key; p !== null; ) {
              if (p.key === A)
                if (p.tag === 4 && p.stateNode.containerInfo === h.containerInfo && p.stateNode.implementation === h.implementation) {
                  n(f, p.sibling), (p = r(p, h.children || [])), (p.return = f), (f = p);
                  break e;
                } else {
                  n(f, p);
                  break;
                }
              else t(f, p);
              p = p.sibling;
            }
            (p = Yr(h, f.mode, w)), (p.return = f), (f = p);
          }
          return s(f);
        case et:
          return (A = h._init), D(f, p, A(h._payload), w);
      }
      if (kn(h)) return y(f, p, h, w);
      if (hn(h)) return b(f, p, h, w);
      va(f, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        p !== null && p.tag === 6
          ? (n(f, p.sibling), (p = r(p, h)), (p.return = f), (f = p))
          : (n(f, p), (p = qr(h, f.mode, w)), (p.return = f), (f = p)),
        s(f))
      : n(f, p);
  }
  return D;
}
var rn = uu(!0),
  du = uu(!1),
  aa = {},
  He = _t(aa),
  Qn = _t(aa),
  $n = _t(aa);
function Nt(e) {
  if (e === aa) throw Error(x(174));
  return e;
}
function xo(e, t) {
  switch ((R($n, t), R(Qn, e), R(He, aa), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : li(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = li(t, e));
  }
  L(He), R(He, t);
}
function on() {
  L(He), L(Qn), L($n);
}
function cu(e) {
  Nt($n.current);
  var t = Nt(He.current),
    n = li(t, e.type);
  t !== n && (R(Qn, e), R(He, n));
}
function So(e) {
  Qn.current === e && (L(He), L(Qn));
}
var U = _t(0);
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
var Ur = [];
function yo() {
  for (var e = 0; e < Ur.length; e++) Ur[e]._workInProgressVersionPrimary = null;
  Ur.length = 0;
}
var Aa = Ze.ReactCurrentDispatcher,
  Kr = Ze.ReactCurrentBatchConfig,
  Gt = 0,
  K = null,
  q = null,
  Z = null,
  Za = !1,
  zn = !1,
  Xn = 0,
  Kc = 0;
function ae() {
  throw Error(x(321));
}
function bo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Fe(e[n], t[n])) return !1;
  return !0;
}
function ko(e, t, n, a, r, i) {
  if (
    ((Gt = i),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Aa.current = e === null || e.memoizedState === null ? Xc : qc),
    (e = n(a, r)),
    zn)
  ) {
    i = 0;
    do {
      if (((zn = !1), (Xn = 0), 25 <= i)) throw Error(x(301));
      (i += 1), (Z = q = null), (t.updateQueue = null), (Aa.current = Yc), (e = n(a, r));
    } while (zn);
  }
  if (((Aa.current = Ja), (t = q !== null && q.next !== null), (Gt = 0), (Z = q = K = null), (Za = !1), t)) throw Error(x(300));
  return e;
}
function Po() {
  var e = Xn !== 0;
  return (Xn = 0), e;
}
function Re() {
  var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
  return Z === null ? (K.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function Ae() {
  if (q === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = q.next;
  var t = Z === null ? K.memoizedState : Z.next;
  if (t !== null) (Z = t), (q = e);
  else {
    if (e === null) throw Error(x(310));
    (q = e),
      (e = {memoizedState: q.memoizedState, baseState: q.baseState, baseQueue: q.baseQueue, queue: q.queue, next: null}),
      Z === null ? (K.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function qn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function jr(e) {
  var t = Ae(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var a = q,
    r = a.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (r !== null) {
      var s = r.next;
      (r.next = i.next), (i.next = s);
    }
    (a.baseQueue = r = i), (n.pending = null);
  }
  if (r !== null) {
    (i = r.next), (a = a.baseState);
    var u = (s = null),
      d = null,
      m = i;
    do {
      var v = m.lane;
      if ((Gt & v) === v)
        d !== null && (d = d.next = {lane: 0, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null}),
          (a = m.hasEagerState ? m.eagerState : e(a, m.action));
      else {
        var _ = {lane: v, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null};
        d === null ? ((u = d = _), (s = a)) : (d = d.next = _), (K.lanes |= v), (zt |= v);
      }
      m = m.next;
    } while (m !== null && m !== i);
    d === null ? (s = a) : (d.next = u),
      Fe(a, t.memoizedState) || (fe = !0),
      (t.memoizedState = a),
      (t.baseState = s),
      (t.baseQueue = d),
      (n.lastRenderedState = a);
  }
  if (((e = n.interleaved), e !== null)) {
    r = e;
    do (i = r.lane), (K.lanes |= i), (zt |= i), (r = r.next);
    while (r !== e);
  } else r === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Qr(e) {
  var t = Ae(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var a = n.dispatch,
    r = n.pending,
    i = t.memoizedState;
  if (r !== null) {
    n.pending = null;
    var s = (r = r.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== r);
    Fe(i, t.memoizedState) || (fe = !0), (t.memoizedState = i), t.baseQueue === null && (t.baseState = i), (n.lastRenderedState = i);
  }
  return [i, a];
}
function pu() {}
function fu(e, t) {
  var n = K,
    a = Ae(),
    r = t(),
    i = !Fe(a.memoizedState, r);
  if (
    (i && ((a.memoizedState = r), (fe = !0)),
    (a = a.queue),
    No(gu.bind(null, n, a, e), [e]),
    a.getSnapshot !== t || i || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Yn(9, hu.bind(null, n, a, r, t), void 0, null), J === null)) throw Error(x(349));
    (Gt & 30) !== 0 || mu(n, t, r);
  }
  return r;
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
    return !Fe(e, n);
  } catch {
    return !0;
  }
}
function vu(e) {
  var t = qe(e, 1);
  t !== null && We(t, e, 1, -1);
}
function Es(e) {
  var t = Re();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qn, lastRenderedState: e}),
    (t.queue = e),
    (e = e.dispatch = $c.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function Yn(e, t, n, a) {
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
  return Ae().memoizedState;
}
function Ca(e, t, n, a) {
  var r = Re();
  (K.flags |= e), (r.memoizedState = Yn(1 | t, n, void 0, a === void 0 ? null : a));
}
function fr(e, t, n, a) {
  var r = Ae();
  a = a === void 0 ? null : a;
  var i = void 0;
  if (q !== null) {
    var s = q.memoizedState;
    if (((i = s.destroy), a !== null && bo(a, s.deps))) {
      r.memoizedState = Yn(t, n, i, a);
      return;
    }
  }
  (K.flags |= e), (r.memoizedState = Yn(1 | t, n, i, a));
}
function As(e, t) {
  return Ca(8390656, 8, e, t);
}
function No(e, t) {
  return fr(2048, 8, e, t);
}
function xu(e, t) {
  return fr(4, 2, e, t);
}
function Su(e, t) {
  return fr(4, 4, e, t);
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
  return (n = n != null ? n.concat([e]) : null), fr(4, 4, yu.bind(null, t, e), n);
}
function Mo() {}
function ku(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var a = n.memoizedState;
  return a !== null && t !== null && bo(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
}
function Pu(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var a = n.memoizedState;
  return a !== null && t !== null && bo(t, a[1]) ? a[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Nu(e, t, n) {
  return (Gt & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n))
    : (Fe(n, t) || ((n = Al()), (K.lanes |= n), (zt |= n), (e.baseState = !0)), t);
}
function jc(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var a = Kr.transition;
  Kr.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (Kr.transition = a);
  }
}
function Mu() {
  return Ae().memoizedState;
}
function Qc(e, t, n) {
  var a = pt(e);
  if (((n = {lane: a, action: n, hasEagerState: !1, eagerState: null, next: null}), Eu(e))) Au(t, n);
  else if (((n = iu(e, t, n, a)), n !== null)) {
    var r = ue();
    We(n, e, a, r), Cu(n, t, a);
  }
}
function $c(e, t, n) {
  var a = pt(e),
    r = {lane: a, action: n, hasEagerState: !1, eagerState: null, next: null};
  if (Eu(e)) Au(t, r);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var s = t.lastRenderedState,
          u = i(s, n);
        if (((r.hasEagerState = !0), (r.eagerState = u), Fe(u, s))) {
          var d = t.interleaved;
          d === null ? ((r.next = r), vo(t)) : ((r.next = d.next), (d.next = r)), (t.interleaved = r);
          return;
        }
      } catch {
      } finally {
      }
    (n = iu(e, t, r, a)), n !== null && ((r = ue()), We(n, e, a, r), Cu(n, t, a));
  }
}
function Eu(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function Au(e, t) {
  zn = Za = !0;
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
    readContext: Ee,
    useCallback: ae,
    useContext: ae,
    useEffect: ae,
    useImperativeHandle: ae,
    useInsertionEffect: ae,
    useLayoutEffect: ae,
    useMemo: ae,
    useReducer: ae,
    useRef: ae,
    useState: ae,
    useDebugValue: ae,
    useDeferredValue: ae,
    useTransition: ae,
    useMutableSource: ae,
    useSyncExternalStore: ae,
    useId: ae,
    unstable_isNewReconciler: !1,
  },
  Xc = {
    readContext: Ee,
    useCallback: function (e, t) {
      return (Re().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ee,
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
      var n = Re();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var a = Re();
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
      var t = Re();
      return (e = {current: e}), (t.memoizedState = e);
    },
    useState: Es,
    useDebugValue: Mo,
    useDeferredValue: function (e) {
      return (Re().memoizedState = e);
    },
    useTransition: function () {
      var e = Es(!1),
        t = e[0];
      return (e = jc.bind(null, e[1])), (Re().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var a = K,
        r = Re();
      if (H) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(x(349));
        (Gt & 30) !== 0 || mu(a, t, n);
      }
      r.memoizedState = n;
      var i = {value: n, getSnapshot: t};
      return (r.queue = i), As(gu.bind(null, a, i, e), [e]), (a.flags |= 2048), Yn(9, hu.bind(null, a, i, n, t), void 0, null), n;
    },
    useId: function () {
      var e = Re(),
        t = J.identifierPrefix;
      if (H) {
        var n = je,
          a = Ke;
        (n = (a & ~(1 << (32 - Be(a) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Xn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Kc++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  qc = {
    readContext: Ee,
    useCallback: ku,
    useContext: Ee,
    useEffect: No,
    useImperativeHandle: bu,
    useInsertionEffect: xu,
    useLayoutEffect: Su,
    useMemo: Pu,
    useReducer: jr,
    useRef: wu,
    useState: function () {
      return jr(qn);
    },
    useDebugValue: Mo,
    useDeferredValue: function (e) {
      var t = Ae();
      return Nu(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = jr(qn)[0],
        t = Ae().memoizedState;
      return [e, t];
    },
    useMutableSource: pu,
    useSyncExternalStore: fu,
    useId: Mu,
    unstable_isNewReconciler: !1,
  },
  Yc = {
    readContext: Ee,
    useCallback: ku,
    useContext: Ee,
    useEffect: No,
    useImperativeHandle: bu,
    useInsertionEffect: xu,
    useLayoutEffect: Su,
    useMemo: Pu,
    useReducer: Qr,
    useRef: wu,
    useState: function () {
      return Qr(qn);
    },
    useDebugValue: Mo,
    useDeferredValue: function (e) {
      var t = Ae();
      return q === null ? (t.memoizedState = e) : Nu(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = Qr(qn)[0],
        t = Ae().memoizedState;
      return [e, t];
    },
    useMutableSource: pu,
    useSyncExternalStore: fu,
    useId: Mu,
    unstable_isNewReconciler: !1,
  };
function sn(e, t) {
  try {
    var n = "",
      a = t;
    do (n += Pd(a)), (a = a.return);
    while (a);
    var r = n;
  } catch (i) {
    r =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return {value: e, source: t, stack: r, digest: null};
}
function $r(e, t, n) {
  return {value: e, source: null, stack: n != null ? n : null, digest: t != null ? t : null};
}
function Gi(e, t) {
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
  (n = Qe(-1, n)), (n.tag = 3), (n.payload = {element: null});
  var a = t.value;
  return (
    (n.callback = function () {
      tr || ((tr = !0), (Hi = a)), Gi(e, t);
    }),
    n
  );
}
function zu(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3);
  var a = e.type.getDerivedStateFromError;
  if (typeof a == "function") {
    var r = t.value;
    (n.payload = function () {
      return a(r);
    }),
      (n.callback = function () {
        Gi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Gi(e, t), typeof a != "function" && (ct === null ? (ct = new Set([this])) : ct.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {componentStack: s !== null ? s : ""});
      }),
    n
  );
}
function Cs(e, t, n) {
  var a = e.pingCache;
  if (a === null) {
    a = e.pingCache = new Zc();
    var r = new Set();
    a.set(t, r);
  } else (r = a.get(t)), r === void 0 && ((r = new Set()), a.set(t, r));
  r.has(n) || (r.add(n), (e = pp.bind(null, e, t, n)), t.then(e, e));
}
function Gs(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function zs(e, t, n, a, r) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Qe(-1, 1)), (t.tag = 2), dt(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = r), e);
}
var Jc = Ze.ReactCurrentOwner,
  fe = !1;
function le(e, t, n, a) {
  t.child = e === null ? du(t, null, n, a) : rn(t, e.child, n, a);
}
function Ts(e, t, n, a, r) {
  n = n.render;
  var i = t.ref;
  return (
    Jt(t, r),
    (a = ko(e, t, n, a, i, r)),
    (n = Po()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~r), Ye(e, t, r))
      : (H && n && po(t), (t.flags |= 1), le(e, t, a, r), t.child)
  );
}
function Bs(e, t, n, a, r) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Wo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Tu(e, t, i, a, r))
      : ((e = Ba(n.type, null, a, t, t.mode, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), (e.lanes & r) === 0)) {
    var s = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : In), n(s, a) && e.ref === t.ref)) return Ye(e, t, r);
  }
  return (t.flags |= 1), (e = ft(i, a)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Tu(e, t, n, a, r) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (In(i, a) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = a = i), (e.lanes & r) !== 0)) (e.flags & 131072) !== 0 && (fe = !0);
      else return (t.lanes = e.lanes), Ye(e, t, r);
  }
  return zi(e, t, n, a, r);
}
function Bu(e, t, n) {
  var a = t.pendingProps,
    r = a.children,
    i = e !== null ? e.memoizedState : null;
  if (a.mode === "hidden")
    if ((t.mode & 1) === 0) (t.memoizedState = {baseLanes: 0, cachePool: null, transitions: null}), R($t, ve), (ve |= n);
    else {
      if ((n & 1073741824) === 0)
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {baseLanes: e, cachePool: null, transitions: null}),
          (t.updateQueue = null),
          R($t, ve),
          (ve |= e),
          null
        );
      (t.memoizedState = {baseLanes: 0, cachePool: null, transitions: null}), (a = i !== null ? i.baseLanes : n), R($t, ve), (ve |= a);
    }
  else i !== null ? ((a = i.baseLanes | n), (t.memoizedState = null)) : (a = n), R($t, ve), (ve |= a);
  return le(e, t, r, n), t.child;
}
function Wu(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function zi(e, t, n, a, r) {
  var i = he(n) ? At : oe.current;
  return (
    (i = nn(t, i)),
    Jt(t, r),
    (n = ko(e, t, n, a, i, r)),
    (a = Po()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~r), Ye(e, t, r))
      : (H && a && po(t), (t.flags |= 1), le(e, t, n, r), t.child)
  );
}
function Ws(e, t, n, a, r) {
  if (he(n)) {
    var i = !0;
    Ka(t);
  } else i = !1;
  if ((Jt(t, r), t.stateNode === null)) Ga(e, t), lu(t, n, a), Ci(t, n, a, r), (a = !0);
  else if (e === null) {
    var s = t.stateNode,
      u = t.memoizedProps;
    s.props = u;
    var d = s.context,
      m = n.contextType;
    typeof m == "object" && m !== null ? (m = Ee(m)) : ((m = he(n) ? At : oe.current), (m = nn(t, m)));
    var v = n.getDerivedStateFromProps,
      _ = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    _ ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") ||
      ((u !== a || d !== m) && Ns(t, s, a, m)),
      (tt = !1);
    var g = t.memoizedState;
    (s.state = g),
      qa(t, a, s, r),
      (d = t.memoizedState),
      u !== a || g !== d || me.current || tt
        ? (typeof v == "function" && (Ai(t, n, v, a), (d = t.memoizedState)),
          (u = tt || Ps(t, n, u, a, g, d, m))
            ? (_ ||
                (typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" && s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = a), (t.memoizedState = d)),
          (s.props = a),
          (s.state = d),
          (s.context = m),
          (a = u))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (a = !1));
  } else {
    (s = t.stateNode),
      ou(e, t),
      (u = t.memoizedProps),
      (m = t.type === t.elementType ? u : Ge(t.type, u)),
      (s.props = m),
      (_ = t.pendingProps),
      (g = s.context),
      (d = n.contextType),
      typeof d == "object" && d !== null ? (d = Ee(d)) : ((d = he(n) ? At : oe.current), (d = nn(t, d)));
    var S = n.getDerivedStateFromProps;
    (v = typeof S == "function" || typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") ||
      ((u !== _ || g !== d) && Ns(t, s, a, d)),
      (tt = !1),
      (g = t.memoizedState),
      (s.state = g),
      qa(t, a, s, r);
    var y = t.memoizedState;
    u !== _ || g !== y || me.current || tt
      ? (typeof S == "function" && (Ai(t, n, S, a), (y = t.memoizedState)),
        (m = tt || Ps(t, n, m, a, g, y, d) || !1)
          ? (v ||
              (typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(a, y, d),
              typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(a, y, d)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" || (u === e.memoizedProps && g === e.memoizedState) || (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" || (u === e.memoizedProps && g === e.memoizedState) || (t.flags |= 1024),
            (t.memoizedProps = a),
            (t.memoizedState = y)),
        (s.props = a),
        (s.state = y),
        (s.context = d),
        (a = m))
      : (typeof s.componentDidUpdate != "function" || (u === e.memoizedProps && g === e.memoizedState) || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || (u === e.memoizedProps && g === e.memoizedState) || (t.flags |= 1024),
        (a = !1));
  }
  return Ti(e, t, n, a, i, r);
}
function Ti(e, t, n, a, r, i) {
  Wu(e, t);
  var s = (t.flags & 128) !== 0;
  if (!a && !s) return r && xs(t, n, !1), Ye(e, t, i);
  (a = t.stateNode), (Jc.current = t);
  var u = s && typeof n.getDerivedStateFromError != "function" ? null : a.render();
  return (
    (t.flags |= 1),
    e !== null && s ? ((t.child = rn(t, e.child, null, i)), (t.child = rn(t, null, u, i))) : le(e, t, u, i),
    (t.memoizedState = a.state),
    r && xs(t, n, !0),
    t.child
  );
}
function Fu(e) {
  var t = e.stateNode;
  t.pendingContext ? ws(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ws(e, t.context, !1), xo(e, t.containerInfo);
}
function Fs(e, t, n, a, r) {
  return an(), mo(r), (t.flags |= 256), le(e, t, n, a), t.child;
}
var Bi = {dehydrated: null, treeContext: null, retryLane: 0};
function Wi(e) {
  return {baseLanes: e, cachePool: null, transitions: null};
}
function Du(e, t, n) {
  var a = t.pendingProps,
    r = U.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    u;
  if (
    ((u = s) || (u = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
    u ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (r |= 1),
    R(U, r & 1),
    e === null)
  )
    return (
      Mi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0 ? (t.lanes = 1) : e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824), null)
        : ((s = a.children),
          (e = a.fallback),
          i
            ? ((a = t.mode),
              (i = t.child),
              (s = {mode: "hidden", children: s}),
              (a & 1) === 0 && i !== null ? ((i.childLanes = 0), (i.pendingProps = s)) : (i = gr(s, a, 0, null)),
              (e = Et(e, a, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Wi(n)),
              (t.memoizedState = Bi),
              e)
            : Eo(t, s))
    );
  if (((r = e.memoizedState), r !== null && ((u = r.dehydrated), u !== null))) return ep(e, t, s, a, u, r, n);
  if (i) {
    (i = a.fallback), (s = t.mode), (r = e.child), (u = r.sibling);
    var d = {mode: "hidden", children: a.children};
    return (
      (s & 1) === 0 && t.child !== r
        ? ((a = t.child), (a.childLanes = 0), (a.pendingProps = d), (t.deletions = null))
        : ((a = ft(r, d)), (a.subtreeFlags = r.subtreeFlags & 14680064)),
      u !== null ? (i = ft(u, i)) : ((i = Et(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (a.return = t),
      (a.sibling = i),
      (t.child = a),
      (a = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s = s === null ? Wi(n) : {baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions}),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Bi),
      a
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (a = ft(i, {mode: "visible", children: a.children})),
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
  return (t = gr({mode: "visible", children: t}, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function wa(e, t, n, a) {
  return a !== null && mo(a), rn(t, e.child, null, n), (e = Eo(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function ep(e, t, n, a, r, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (a = $r(Error(x(422)))), wa(e, t, s, a))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = a.fallback),
        (r = t.mode),
        (a = gr({mode: "visible", children: a.children}, r, 0, null)),
        (i = Et(i, r, s, null)),
        (i.flags |= 2),
        (a.return = t),
        (i.return = t),
        (a.sibling = i),
        (t.child = a),
        (t.mode & 1) !== 0 && rn(t, e.child, null, s),
        (t.child.memoizedState = Wi(s)),
        (t.memoizedState = Bi),
        i);
  if ((t.mode & 1) === 0) return wa(e, t, s, null);
  if (r.data === "$!") {
    if (((a = r.nextSibling && r.nextSibling.dataset), a)) var u = a.dgst;
    return (a = u), (i = Error(x(419))), (a = $r(i, a, void 0)), wa(e, t, s, a);
  }
  if (((u = (s & e.childLanes) !== 0), fe || u)) {
    if (((a = J), a !== null)) {
      switch (s & -s) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
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
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      (r = (r & (a.suspendedLanes | s)) !== 0 ? 0 : r), r !== 0 && r !== i.retryLane && ((i.retryLane = r), qe(e, r), We(a, e, r, -1));
    }
    return Bo(), (a = $r(Error(x(421)))), wa(e, t, s, a);
  }
  return r.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = fp.bind(null, e)), (r._reactRetry = t), null)
    : ((e = i.treeContext),
      (we = ut(r.nextSibling)),
      (xe = t),
      (H = !0),
      (Te = null),
      e !== null && ((ke[Pe++] = Ke), (ke[Pe++] = je), (ke[Pe++] = Ct), (Ke = e.id), (je = e.overflow), (Ct = t)),
      (t = Eo(t, a.children)),
      (t.flags |= 4096),
      t);
}
function Ds(e, t, n) {
  e.lanes |= t;
  var a = e.alternate;
  a !== null && (a.lanes |= t), Ei(e.return, t, n);
}
function Xr(e, t, n, a, r) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: r})
    : ((i.isBackwards = t), (i.rendering = null), (i.renderingStartTime = 0), (i.last = a), (i.tail = n), (i.tailMode = r));
}
function Ru(e, t, n) {
  var a = t.pendingProps,
    r = a.revealOrder,
    i = a.tail;
  if ((le(e, t, a.children, n), (a = U.current), (a & 2) !== 0)) (a = (a & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ds(e, n, t);
        else if (e.tag === 19) Ds(e, n, t);
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
  if ((R(U, a), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (n = t.child, r = null; n !== null; ) (e = n.alternate), e !== null && Ya(e) === null && (r = n), (n = n.sibling);
        (n = r), n === null ? ((r = t.child), (t.child = null)) : ((r = n.sibling), (n.sibling = null)), Xr(t, !1, r, n, i);
        break;
      case "backwards":
        for (n = null, r = t.child, t.child = null; r !== null; ) {
          if (((e = r.alternate), e !== null && Ya(e) === null)) {
            t.child = r;
            break;
          }
          (e = r.sibling), (r.sibling = n), (n = r), (r = e);
        }
        Xr(t, !0, n, null, i);
        break;
      case "together":
        Xr(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ga(e, t) {
  (t.mode & 1) === 0 && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ye(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (zt |= t.lanes), (n & t.childLanes) === 0)) return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (e = t.child, n = ft(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = ft(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function tp(e, t, n) {
  switch (t.tag) {
    case 3:
      Fu(t), an();
      break;
    case 5:
      cu(t);
      break;
    case 1:
      he(t.type) && Ka(t);
      break;
    case 4:
      xo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var a = t.type._context,
        r = t.memoizedProps.value;
      R($a, a._currentValue), (a._currentValue = r);
      break;
    case 13:
      if (((a = t.memoizedState), a !== null))
        return a.dehydrated !== null
          ? (R(U, U.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? Du(e, t, n)
          : (R(U, U.current & 1), (e = Ye(e, t, n)), e !== null ? e.sibling : null);
      R(U, U.current & 1);
      break;
    case 19:
      if (((a = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (a) return Ru(e, t, n);
        t.flags |= 128;
      }
      if (((r = t.memoizedState), r !== null && ((r.rendering = null), (r.tail = null), (r.lastEffect = null)), R(U, U.current), a)) break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Bu(e, t, n);
  }
  return Ye(e, t, n);
}
var Ou, Fi, Lu, Hu;
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
Fi = function () {};
Lu = function (e, t, n, a) {
  var r = e.memoizedProps;
  if (r !== a) {
    (e = t.stateNode), Nt(He.current);
    var i = null;
    switch (n) {
      case "input":
        (r = ri(e, r)), (a = ri(e, a)), (i = []);
        break;
      case "select":
        (r = j({}, r, {value: void 0})), (a = j({}, a, {value: void 0})), (i = []);
        break;
      case "textarea":
        (r = si(e, r)), (a = si(e, a)), (i = []);
        break;
      default:
        typeof r.onClick != "function" && typeof a.onClick == "function" && (e.onclick = Ia);
    }
    ui(n, a);
    var s;
    n = null;
    for (m in r)
      if (!a.hasOwnProperty(m) && r.hasOwnProperty(m) && r[m] != null)
        if (m === "style") {
          var u = r[m];
          for (s in u) u.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          m !== "dangerouslySetInnerHTML" &&
            m !== "children" &&
            m !== "suppressContentEditableWarning" &&
            m !== "suppressHydrationWarning" &&
            m !== "autoFocus" &&
            (Fn.hasOwnProperty(m) ? i || (i = []) : (i = i || []).push(m, null));
    for (m in a) {
      var d = a[m];
      if (((u = r != null ? r[m] : void 0), a.hasOwnProperty(m) && d !== u && (d != null || u != null)))
        if (m === "style")
          if (u) {
            for (s in u) !u.hasOwnProperty(s) || (d && d.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ""));
            for (s in d) d.hasOwnProperty(s) && u[s] !== d[s] && (n || (n = {}), (n[s] = d[s]));
          } else n || (i || (i = []), i.push(m, n)), (n = d);
        else
          m === "dangerouslySetInnerHTML"
            ? ((d = d ? d.__html : void 0), (u = u ? u.__html : void 0), d != null && u !== d && (i = i || []).push(m, d))
            : m === "children"
            ? (typeof d != "string" && typeof d != "number") || (i = i || []).push(m, "" + d)
            : m !== "suppressContentEditableWarning" &&
              m !== "suppressHydrationWarning" &&
              (Fn.hasOwnProperty(m)
                ? (d != null && m === "onScroll" && O("scroll", e), i || u === d || (i = []))
                : (i = i || []).push(m, d));
    }
    n && (i = i || []).push("style", n);
    var m = i;
    (t.updateQueue = m) && (t.flags |= 4);
  }
};
Hu = function (e, t, n, a) {
  n !== a && (t.flags |= 4);
};
function Sn(e, t) {
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
    for (var r = e.child; r !== null; )
      (n |= r.lanes | r.childLanes), (a |= r.subtreeFlags & 14680064), (a |= r.flags & 14680064), (r.return = e), (r = r.sibling);
  else
    for (r = e.child; r !== null; ) (n |= r.lanes | r.childLanes), (a |= r.subtreeFlags), (a |= r.flags), (r.return = e), (r = r.sibling);
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
      return he(t.type) && Ua(), re(t), null;
    case 3:
      return (
        (a = t.stateNode),
        on(),
        L(me),
        L(oe),
        yo(),
        a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
        (e === null || e.child === null) &&
          (_a(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), Te !== null && (Ui(Te), (Te = null)))),
        Fi(e, t),
        re(t),
        null
      );
    case 5:
      So(t);
      var r = Nt($n.current);
      if (((n = t.type), e !== null && t.stateNode != null)) Lu(e, t, n, a, r), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!a) {
          if (t.stateNode === null) throw Error(x(166));
          return re(t), null;
        }
        if (((e = Nt(He.current)), _a(t))) {
          (a = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((a[Oe] = t), (a[jn] = i), (e = (t.mode & 1) !== 0), n)) {
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
              for (r = 0; r < Nn.length; r++) O(Nn[r], a);
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
              jo(a, i), O("invalid", a);
              break;
            case "select":
              (a._wrapperState = {wasMultiple: !!i.multiple}), O("invalid", a);
              break;
            case "textarea":
              $o(a, i), O("invalid", a);
          }
          ui(n, i), (r = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var u = i[s];
              s === "children"
                ? typeof u == "string"
                  ? a.textContent !== u && (i.suppressHydrationWarning !== !0 && ga(a.textContent, u, e), (r = ["children", u]))
                  : typeof u == "number" &&
                    a.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 && ga(a.textContent, u, e), (r = ["children", "" + u]))
                : Fn.hasOwnProperty(s) && u != null && s === "onScroll" && O("scroll", a);
            }
          switch (n) {
            case "input":
              la(a), Qo(a, i, !0);
              break;
            case "textarea":
              la(a), Xo(a);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (a.onclick = Ia);
          }
          (a = r), (t.updateQueue = a), a !== null && (t.flags |= 4);
        } else {
          (s = r.nodeType === 9 ? r : r.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ml(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof a.is == "string"
                ? (e = s.createElement(n, {is: a.is}))
                : ((e = s.createElement(n)), n === "select" && ((s = e), a.multiple ? (s.multiple = !0) : a.size && (s.size = a.size)))
              : (e = s.createElementNS(e, n)),
            (e[Oe] = t),
            (e[jn] = a),
            Ou(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = di(n, a)), n)) {
              case "dialog":
                O("cancel", e), O("close", e), (r = a);
                break;
              case "iframe":
              case "object":
              case "embed":
                O("load", e), (r = a);
                break;
              case "video":
              case "audio":
                for (r = 0; r < Nn.length; r++) O(Nn[r], e);
                r = a;
                break;
              case "source":
                O("error", e), (r = a);
                break;
              case "img":
              case "image":
              case "link":
                O("error", e), O("load", e), (r = a);
                break;
              case "details":
                O("toggle", e), (r = a);
                break;
              case "input":
                jo(e, a), (r = ri(e, a)), O("invalid", e);
                break;
              case "option":
                r = a;
                break;
              case "select":
                (e._wrapperState = {wasMultiple: !!a.multiple}), (r = j({}, a, {value: void 0})), O("invalid", e);
                break;
              case "textarea":
                $o(e, a), (r = si(e, a)), O("invalid", e);
                break;
              default:
                r = a;
            }
            ui(n, r), (u = r);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var d = u[i];
                i === "style"
                  ? _l(e, d)
                  : i === "dangerouslySetInnerHTML"
                  ? ((d = d ? d.__html : void 0), d != null && hl(e, d))
                  : i === "children"
                  ? typeof d == "string"
                    ? (n !== "textarea" || d !== "") && Dn(e, d)
                    : typeof d == "number" && Dn(e, "" + d)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Fn.hasOwnProperty(i) ? d != null && i === "onScroll" && O("scroll", e) : d != null && Yi(e, i, d, s));
              }
            switch (n) {
              case "input":
                la(e), Qo(e, a, !1);
                break;
              case "textarea":
                la(e), Xo(e);
                break;
              case "option":
                a.value != null && e.setAttribute("value", "" + mt(a.value));
                break;
              case "select":
                (e.multiple = !!a.multiple),
                  (i = a.value),
                  i != null ? Xt(e, !!a.multiple, i, !1) : a.defaultValue != null && Xt(e, !!a.multiple, a.defaultValue, !0);
                break;
              default:
                typeof r.onClick == "function" && (e.onclick = Ia);
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
        if (((n = Nt($n.current)), Nt(He.current), _a(t))) {
          if (((a = t.stateNode), (n = t.memoizedProps), (a[Oe] = t), (i = a.nodeValue !== n) && ((e = xe), e !== null)))
            switch (e.tag) {
              case 3:
                ga(a.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ga(a.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else (a = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(a)), (a[Oe] = t), (t.stateNode = a);
      }
      return re(t), null;
    case 13:
      if ((L(U), (a = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
        if (H && we !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ru(), an(), (t.flags |= 98560), (i = !1);
        else if (((i = _a(t)), a !== null && a.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(x(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(x(317));
            i[Oe] = t;
          } else an(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
          re(t), (i = !1);
        } else Te !== null && (Ui(Te), (Te = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = n), t)
        : ((a = a !== null),
          a !== (e !== null && e.memoizedState !== null) &&
            a &&
            ((t.child.flags |= 8192), (t.mode & 1) !== 0 && (e === null || (U.current & 1) !== 0 ? Y === 0 && (Y = 3) : Bo())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null);
    case 4:
      return on(), Fi(e, t), e === null && Un(t.stateNode.containerInfo), re(t), null;
    case 10:
      return _o(t.type._context), re(t), null;
    case 17:
      return he(t.type) && Ua(), re(t), null;
    case 19:
      if ((L(U), (i = t.memoizedState), i === null)) return re(t), null;
      if (((a = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (a) Sn(i, !1);
        else {
          if (Y !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((s = Ya(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Sn(i, !1),
                    a = s.updateQueue,
                    a !== null && ((t.updateQueue = a), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    a = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = a),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies = e === null ? null : {lanes: e.lanes, firstContext: e.firstContext})),
                    (n = n.sibling);
                return R(U, (U.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && $() > ln && ((t.flags |= 128), (a = !0), Sn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!a)
          if (((e = Ya(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (a = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Sn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !H)
            )
              return re(t), null;
          } else 2 * $() - i.renderingStartTime > ln && n !== 1073741824 && ((t.flags |= 128), (a = !0), Sn(i, !1), (t.lanes = 4194304));
        i.isBackwards ? ((s.sibling = t.child), (t.child = s)) : ((n = i.last), n !== null ? (n.sibling = s) : (t.child = s), (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = $()),
          (t.sibling = null),
          (n = U.current),
          R(U, a ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null);
    case 22:
    case 23:
      return (
        To(),
        (a = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== a && (t.flags |= 8192),
        a && (t.mode & 1) !== 0 ? (ve & 1073741824) !== 0 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t),
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
      return he(t.type) && Ua(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return on(), L(me), L(oe), yo(), (e = t.flags), (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 5:
      return So(t), null;
    case 13:
      if ((L(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        an();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return L(U), null;
    case 4:
      return on(), null;
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
  ie = !1,
  rp = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function Qt(e, t) {
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
function Di(e, t, n) {
  try {
    n();
  } catch (a) {
    Q(e, t, a);
  }
}
var Rs = !1;
function ip(e, t) {
  if (((xi = La), (e = Kl()), co(e))) {
    if ("selectionStart" in e) var n = {start: e.selectionStart, end: e.selectionEnd};
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var a = n.getSelection && n.getSelection();
        if (a && a.rangeCount !== 0) {
          n = a.anchorNode;
          var r = a.anchorOffset,
            i = a.focusNode;
          a = a.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            u = -1,
            d = -1,
            m = 0,
            v = 0,
            _ = e,
            g = null;
          t: for (;;) {
            for (
              var S;
              _ !== n || (r !== 0 && _.nodeType !== 3) || (u = s + r),
                _ !== i || (a !== 0 && _.nodeType !== 3) || (d = s + a),
                _.nodeType === 3 && (s += _.nodeValue.length),
                (S = _.firstChild) !== null;

            )
              (g = _), (_ = S);
            for (;;) {
              if (_ === e) break t;
              if ((g === n && ++m === r && (u = s), g === i && ++v === a && (d = s), (S = _.nextSibling) !== null)) break;
              (_ = g), (g = _.parentNode);
            }
            _ = S;
          }
          n = u === -1 || d === -1 ? null : {start: u, end: d};
        } else n = null;
      }
    n = n || {start: 0, end: 0};
  } else n = null;
  for (Si = {focusedElem: e, selectionRange: n}, La = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var y = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var b = y.memoizedProps,
                    D = y.memoizedState,
                    f = t.stateNode,
                    p = f.getSnapshotBeforeUpdate(t.elementType === t.type ? b : Ge(t.type, b), D);
                  f.__reactInternalSnapshotBeforeUpdate = p;
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
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (y = Rs), (Rs = !1), y;
}
function Tn(e, t, n) {
  var a = t.updateQueue;
  if (((a = a !== null ? a.lastEffect : null), a !== null)) {
    var r = (a = a.next);
    do {
      if ((r.tag & e) === e) {
        var i = r.destroy;
        (r.destroy = void 0), i !== void 0 && Di(t, n, i);
      }
      r = r.next;
    } while (r !== a);
  }
}
function mr(e, t) {
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
function Ri(e) {
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
    e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[Oe], delete t[jn], delete t[ki], delete t[Hc], delete t[Vc])),
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
function Oi(e, t, n) {
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
  else if (a !== 4 && ((e = e.child), e !== null)) for (Oi(e, t, n), e = e.sibling; e !== null; ) Oi(e, t, n), (e = e.sibling);
}
function Li(e, t, n) {
  var a = e.tag;
  if (a === 5 || a === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (a !== 4 && ((e = e.child), e !== null)) for (Li(e, t, n), e = e.sibling; e !== null; ) Li(e, t, n), (e = e.sibling);
}
var ee = null,
  ze = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; ) Uu(e, t, n), (n = n.sibling);
}
function Uu(e, t, n) {
  if (Le && typeof Le.onCommitFiberUnmount == "function")
    try {
      Le.onCommitFiberUnmount(or, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || Qt(n, t);
    case 6:
      var a = ee,
        r = ze;
      (ee = null),
        Je(e, t, n),
        (ee = a),
        (ze = r),
        ee !== null &&
          (ze
            ? ((e = ee), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (ze
          ? ((e = ee), (n = n.stateNode), e.nodeType === 8 ? Vr(e.parentNode, n) : e.nodeType === 1 && Vr(e, n), Hn(e))
          : Vr(ee, n.stateNode));
      break;
    case 4:
      (a = ee), (r = ze), (ee = n.stateNode.containerInfo), (ze = !0), Je(e, t, n), (ee = a), (ze = r);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ie && ((a = n.updateQueue), a !== null && ((a = a.lastEffect), a !== null))) {
        r = a = a.next;
        do {
          var i = r,
            s = i.destroy;
          (i = i.tag), s !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Di(n, t, s), (r = r.next);
        } while (r !== a);
      }
      Je(e, t, n);
      break;
    case 1:
      if (!ie && (Qt(n, t), (a = n.stateNode), typeof a.componentWillUnmount == "function"))
        try {
          (a.props = n.memoizedProps), (a.state = n.memoizedState), a.componentWillUnmount();
        } catch (u) {
          Q(n, t, u);
        }
      Je(e, t, n);
      break;
    case 21:
      Je(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((ie = (a = ie) || n.memoizedState !== null), Je(e, t, n), (ie = a)) : Je(e, t, n);
      break;
    default:
      Je(e, t, n);
  }
}
function Ls(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new rp()),
      t.forEach(function (a) {
        var r = mp.bind(null, e, a);
        n.has(a) || (n.add(a), a.then(r, r));
      });
  }
}
function Ce(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var a = 0; a < n.length; a++) {
      var r = n[a];
      try {
        var i = e,
          s = t,
          u = s;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ee = u.stateNode), (ze = !1);
              break e;
            case 3:
              (ee = u.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (ee = u.stateNode.containerInfo), (ze = !0);
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(x(160));
        Uu(i, s, r), (ee = null), (ze = !1);
        var d = r.alternate;
        d !== null && (d.return = null), (r.return = null);
      } catch (m) {
        Q(r, t, m);
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
      if ((Ce(t, e), De(e), a & 4)) {
        try {
          Tn(3, e, e.return), mr(3, e);
        } catch (b) {
          Q(e, e.return, b);
        }
        try {
          Tn(5, e, e.return);
        } catch (b) {
          Q(e, e.return, b);
        }
      }
      break;
    case 1:
      Ce(t, e), De(e), a & 512 && n !== null && Qt(n, n.return);
      break;
    case 5:
      if ((Ce(t, e), De(e), a & 512 && n !== null && Qt(n, n.return), e.flags & 32)) {
        var r = e.stateNode;
        try {
          Dn(r, "");
        } catch (b) {
          Q(e, e.return, b);
        }
      }
      if (a & 4 && ((r = e.stateNode), r != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          u = e.type,
          d = e.updateQueue;
        if (((e.updateQueue = null), d !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && pl(r, i), di(u, s);
            var m = di(u, i);
            for (s = 0; s < d.length; s += 2) {
              var v = d[s],
                _ = d[s + 1];
              v === "style" ? _l(r, _) : v === "dangerouslySetInnerHTML" ? hl(r, _) : v === "children" ? Dn(r, _) : Yi(r, v, _, m);
            }
            switch (u) {
              case "input":
                ii(r, i);
                break;
              case "textarea":
                fl(r, i);
                break;
              case "select":
                var g = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!i.multiple;
                var S = i.value;
                S != null
                  ? Xt(r, !!i.multiple, S, !1)
                  : g !== !!i.multiple &&
                    (i.defaultValue != null ? Xt(r, !!i.multiple, i.defaultValue, !0) : Xt(r, !!i.multiple, i.multiple ? [] : "", !1));
            }
            r[jn] = i;
          } catch (b) {
            Q(e, e.return, b);
          }
      }
      break;
    case 6:
      if ((Ce(t, e), De(e), a & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (r = e.stateNode), (i = e.memoizedProps);
        try {
          r.nodeValue = i;
        } catch (b) {
          Q(e, e.return, b);
        }
      }
      break;
    case 3:
      if ((Ce(t, e), De(e), a & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Hn(t.containerInfo);
        } catch (b) {
          Q(e, e.return, b);
        }
      break;
    case 4:
      Ce(t, e), De(e);
      break;
    case 13:
      Ce(t, e),
        De(e),
        (r = e.child),
        r.flags & 8192 &&
          ((i = r.memoizedState !== null),
          (r.stateNode.isHidden = i),
          !i || (r.alternate !== null && r.alternate.memoizedState !== null) || (Go = $())),
        a & 4 && Ls(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null), e.mode & 1 ? ((ie = (m = ie) || v), Ce(t, e), (ie = m)) : Ce(t, e), De(e), a & 8192)
      ) {
        if (((m = e.memoizedState !== null), (e.stateNode.isHidden = m) && !v && (e.mode & 1) !== 0))
          for (M = e, v = e.child; v !== null; ) {
            for (_ = M = v; M !== null; ) {
              switch (((g = M), (S = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tn(4, g, g.return);
                  break;
                case 1:
                  Qt(g, g.return);
                  var y = g.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (a = g), (n = g.return);
                    try {
                      (t = a), (y.props = t.memoizedProps), (y.state = t.memoizedState), y.componentWillUnmount();
                    } catch (b) {
                      Q(a, n, b);
                    }
                  }
                  break;
                case 5:
                  Qt(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    Vs(_);
                    continue;
                  }
              }
              S !== null ? ((S.return = g), (M = S)) : Vs(_);
            }
            v = v.sibling;
          }
        e: for (v = null, _ = e; ; ) {
          if (_.tag === 5) {
            if (v === null) {
              v = _;
              try {
                (r = _.stateNode),
                  m
                    ? ((i = r.style),
                      typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : (i.display = "none"))
                    : ((u = _.stateNode),
                      (d = _.memoizedProps.style),
                      (s = d != null && d.hasOwnProperty("display") ? d.display : null),
                      (u.style.display = gl("display", s)));
              } catch (b) {
                Q(e, e.return, b);
              }
            }
          } else if (_.tag === 6) {
            if (v === null)
              try {
                _.stateNode.nodeValue = m ? "" : _.memoizedProps;
              } catch (b) {
                Q(e, e.return, b);
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
      Ce(t, e), De(e), a & 4 && Ls(e);
      break;
    case 21:
      break;
    default:
      Ce(t, e), De(e);
  }
}
function De(e) {
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
          var r = a.stateNode;
          a.flags & 32 && (Dn(r, ""), (a.flags &= -33));
          var i = Os(e);
          Li(e, i, r);
          break;
        case 3:
        case 4:
          var s = a.stateNode.containerInfo,
            u = Os(e);
          Oi(e, u, s);
          break;
        default:
          throw Error(x(161));
      }
    } catch (d) {
      Q(e, e.return, d);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function op(e, t, n) {
  (M = e), ju(e);
}
function ju(e, t, n) {
  for (var a = (e.mode & 1) !== 0; M !== null; ) {
    var r = M,
      i = r.child;
    if (r.tag === 22 && a) {
      var s = r.memoizedState !== null || xa;
      if (!s) {
        var u = r.alternate,
          d = (u !== null && u.memoizedState !== null) || ie;
        u = xa;
        var m = ie;
        if (((xa = s), (ie = d) && !m))
          for (M = r; M !== null; )
            (s = M), (d = s.child), s.tag === 22 && s.memoizedState !== null ? Is(r) : d !== null ? ((d.return = s), (M = d)) : Is(r);
        for (; i !== null; ) (M = i), ju(i), (i = i.sibling);
        (M = r), (xa = u), (ie = m);
      }
      Hs(e);
    } else (r.subtreeFlags & 8772) !== 0 && i !== null ? ((i.return = r), (M = i)) : Hs(e);
  }
}
function Hs(e) {
  for (; M !== null; ) {
    var t = M;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || mr(5, t);
              break;
            case 1:
              var a = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) a.componentDidMount();
                else {
                  var r = t.elementType === t.type ? n.memoizedProps : Ge(t.type, n.memoizedProps);
                  a.componentDidUpdate(r, n.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && ks(t, i, a);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ks(t, s, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var d = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d.autoFocus && n.focus();
                    break;
                  case "img":
                    d.src && (n.src = d.src);
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
                    _ !== null && Hn(_);
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
        ie || (t.flags & 512 && Ri(t));
      } catch (g) {
        Q(t, t.return, g);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Vs(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Is(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            mr(4, t);
          } catch (d) {
            Q(t, n, d);
          }
          break;
        case 1:
          var a = t.stateNode;
          if (typeof a.componentDidMount == "function") {
            var r = t.return;
            try {
              a.componentDidMount();
            } catch (d) {
              Q(t, r, d);
            }
          }
          var i = t.return;
          try {
            Ri(t);
          } catch (d) {
            Q(t, i, d);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ri(t);
          } catch (d) {
            Q(t, s, d);
          }
      }
    } catch (d) {
      Q(t, t.return, d);
    }
    if (t === e) {
      M = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (M = u);
      break;
    }
    M = t.return;
  }
}
var sp = Math.ceil,
  er = Ze.ReactCurrentDispatcher,
  Ao = Ze.ReactCurrentOwner,
  Me = Ze.ReactCurrentBatchConfig,
  W = 0,
  J = null,
  X = null,
  te = 0,
  ve = 0,
  $t = _t(0),
  Y = 0,
  Zn = null,
  zt = 0,
  hr = 0,
  Co = 0,
  Bn = null,
  pe = null,
  Go = 0,
  ln = 1 / 0,
  Ie = null,
  tr = !1,
  Hi = null,
  ct = null,
  Sa = !1,
  it = null,
  nr = 0,
  Wn = 0,
  Vi = null,
  za = -1,
  Ta = 0;
function ue() {
  return (W & 6) !== 0 ? $() : za !== -1 ? za : (za = $());
}
function pt(e) {
  return (e.mode & 1) === 0
    ? 1
    : (W & 2) !== 0 && te !== 0
    ? te & -te
    : Uc.transition !== null
    ? (Ta === 0 && (Ta = Al()), Ta)
    : ((e = F), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Fl(e.type))), e);
}
function We(e, t, n, a) {
  if (50 < Wn) throw ((Wn = 0), (Vi = null), Error(x(185)));
  ea(e, n, a),
    ((W & 2) === 0 || e !== J) &&
      (e === J && ((W & 2) === 0 && (hr |= n), Y === 4 && at(e, te)),
      ge(e, a),
      n === 1 && W === 0 && (t.mode & 1) === 0 && ((ln = $() + 500), cr && vt()));
}
function ge(e, t) {
  var n = e.callbackNode;
  Ud(e, t);
  var a = Oa(e, e === J ? te : 0);
  if (a === 0) n !== null && Zo(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = a & -a), e.callbackPriority !== t)) {
    if ((n != null && Zo(n), t === 1))
      e.tag === 0 ? Ic(Us.bind(null, e)) : tu(Us.bind(null, e)),
        Oc(function () {
          (W & 6) === 0 && vt();
        }),
        (n = null);
    else {
      switch (Cl(a)) {
        case 1:
          n = no;
          break;
        case 4:
          n = Ml;
          break;
        case 16:
          n = Ra;
          break;
        case 536870912:
          n = El;
          break;
        default:
          n = Ra;
      }
      n = ed(n, Qu.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Qu(e, t) {
  if (((za = -1), (Ta = 0), (W & 6) !== 0)) throw Error(x(327));
  var n = e.callbackNode;
  if (en() && e.callbackNode !== n) return null;
  var a = Oa(e, e === J ? te : 0);
  if (a === 0) return null;
  if ((a & 30) !== 0 || (a & e.expiredLanes) !== 0 || t) t = ar(e, a);
  else {
    t = a;
    var r = W;
    W |= 2;
    var i = Xu();
    (J !== e || te !== t) && ((Ie = null), (ln = $() + 500), Mt(e, t));
    do
      try {
        dp();
        break;
      } catch (u) {
        $u(e, u);
      }
    while (1);
    go(), (er.current = i), (W = r), X !== null ? (t = 0) : ((J = null), (te = 0), (t = Y));
  }
  if (t !== 0) {
    if ((t === 2 && ((r = hi(e)), r !== 0 && ((a = r), (t = Ii(e, r)))), t === 1)) throw ((n = Zn), Mt(e, 0), at(e, a), ge(e, $()), n);
    if (t === 6) at(e, a);
    else {
      if (
        ((r = e.current.alternate),
        (a & 30) === 0 && !lp(r) && ((t = ar(e, a)), t === 2 && ((i = hi(e)), i !== 0 && ((a = i), (t = Ii(e, i)))), t === 1))
      )
        throw ((n = Zn), Mt(e, 0), at(e, a), ge(e, $()), n);
      switch (((e.finishedWork = r), (e.finishedLanes = a), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          bt(e, pe, Ie);
          break;
        case 3:
          if ((at(e, a), (a & 130023424) === a && ((t = Go + 500 - $()), 10 < t))) {
            if (Oa(e, 0) !== 0) break;
            if (((r = e.suspendedLanes), (r & a) !== a)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & r);
              break;
            }
            e.timeoutHandle = bi(bt.bind(null, e, pe, Ie), t);
            break;
          }
          bt(e, pe, Ie);
          break;
        case 4:
          if ((at(e, a), (a & 4194240) === a)) break;
          for (t = e.eventTimes, r = -1; 0 < a; ) {
            var s = 31 - Be(a);
            (i = 1 << s), (s = t[s]), s > r && (r = s), (a &= ~i);
          }
          if (
            ((a = r),
            (a = $() - a),
            (a =
              (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * sp(a / 1960)) -
              a),
            10 < a)
          ) {
            e.timeoutHandle = bi(bt.bind(null, e, pe, Ie), a);
            break;
          }
          bt(e, pe, Ie);
          break;
        case 5:
          bt(e, pe, Ie);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return ge(e, $()), e.callbackNode === n ? Qu.bind(null, e) : null;
}
function Ii(e, t) {
  var n = Bn;
  return (
    e.current.memoizedState.isDehydrated && (Mt(e, t).flags |= 256), (e = ar(e, t)), e !== 2 && ((t = pe), (pe = n), t !== null && Ui(t)), e
  );
}
function Ui(e) {
  pe === null ? (pe = e) : pe.push.apply(pe, e);
}
function lp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var a = 0; a < n.length; a++) {
          var r = n[a],
            i = r.getSnapshot;
          r = r.value;
          try {
            if (!Fe(i(), r)) return !1;
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
function at(e, t) {
  for (t &= ~Co, t &= ~hr, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Be(t),
      a = 1 << n;
    (e[n] = -1), (t &= ~a);
  }
}
function Us(e) {
  if ((W & 6) !== 0) throw Error(x(327));
  en();
  var t = Oa(e, 0);
  if ((t & 1) === 0) return ge(e, $()), null;
  var n = ar(e, t);
  if (e.tag !== 0 && n === 2) {
    var a = hi(e);
    a !== 0 && ((t = a), (n = Ii(e, a)));
  }
  if (n === 1) throw ((n = Zn), Mt(e, 0), at(e, t), ge(e, $()), n);
  if (n === 6) throw Error(x(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), bt(e, pe, Ie), ge(e, $()), null;
}
function zo(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    (W = n), W === 0 && ((ln = $() + 500), cr && vt());
  }
}
function Tt(e) {
  it !== null && it.tag === 0 && (W & 6) === 0 && en();
  var t = W;
  W |= 1;
  var n = Me.transition,
    a = F;
  try {
    if (((Me.transition = null), (F = 1), e)) return e();
  } finally {
    (F = a), (Me.transition = n), (W = t), (W & 6) === 0 && vt();
  }
}
function To() {
  (ve = $t.current), L($t);
}
function Mt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Rc(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var a = n;
      switch ((fo(a), a.tag)) {
        case 1:
          (a = a.type.childContextTypes), a != null && Ua();
          break;
        case 3:
          on(), L(me), L(oe), yo();
          break;
        case 5:
          So(a);
          break;
        case 4:
          on();
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
  if (((J = e), (X = e = ft(e.current, null)), (te = ve = t), (Y = 0), (Zn = null), (Co = hr = zt = 0), (pe = Bn = null), Pt !== null)) {
    for (t = 0; t < Pt.length; t++)
      if (((n = Pt[t]), (a = n.interleaved), a !== null)) {
        n.interleaved = null;
        var r = a.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = r), (a.next = s);
        }
        n.pending = a;
      }
    Pt = null;
  }
  return e;
}
function $u(e, t) {
  do {
    var n = X;
    try {
      if ((go(), (Aa.current = Ja), Za)) {
        for (var a = K.memoizedState; a !== null; ) {
          var r = a.queue;
          r !== null && (r.pending = null), (a = a.next);
        }
        Za = !1;
      }
      if (((Gt = 0), (Z = q = K = null), (zn = !1), (Xn = 0), (Ao.current = null), n === null || n.return === null)) {
        (Y = 1), (Zn = t), (X = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          u = n,
          d = t;
        if (((t = te), (u.flags |= 32768), d !== null && typeof d == "object" && typeof d.then == "function")) {
          var m = d,
            v = u,
            _ = v.tag;
          if ((v.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
            var g = v.alternate;
            g
              ? ((v.updateQueue = g.updateQueue), (v.memoizedState = g.memoizedState), (v.lanes = g.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var S = Gs(s);
          if (S !== null) {
            (S.flags &= -257), zs(S, s, u, i, t), S.mode & 1 && Cs(i, m, t), (t = S), (d = m);
            var y = t.updateQueue;
            if (y === null) {
              var b = new Set();
              b.add(d), (t.updateQueue = b);
            } else y.add(d);
            break e;
          } else {
            if ((t & 1) === 0) {
              Cs(i, m, t), Bo();
              break e;
            }
            d = Error(x(426));
          }
        } else if (H && u.mode & 1) {
          var D = Gs(s);
          if (D !== null) {
            (D.flags & 65536) === 0 && (D.flags |= 256), zs(D, s, u, i, t), mo(sn(d, u));
            break e;
          }
        }
        (i = d = sn(d, u)), Y !== 4 && (Y = 2), Bn === null ? (Bn = [i]) : Bn.push(i), (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Gu(i, d, t);
              bs(i, f);
              break e;
            case 1:
              u = d;
              var p = i.type,
                h = i.stateNode;
              if (
                (i.flags & 128) === 0 &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (h !== null && typeof h.componentDidCatch == "function" && (ct === null || !ct.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = zu(i, u, t);
                bs(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Yu(n);
    } catch (P) {
      (t = P), X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Xu() {
  var e = er.current;
  return (er.current = Ja), e === null ? Ja : e;
}
function Bo() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4), J === null || ((zt & 268435455) === 0 && (hr & 268435455) === 0) || at(J, te);
}
function ar(e, t) {
  var n = W;
  W |= 2;
  var a = Xu();
  (J !== e || te !== t) && ((Ie = null), Mt(e, t));
  do
    try {
      up();
      break;
    } catch (r) {
      $u(e, r);
    }
  while (1);
  if ((go(), (W = n), (er.current = a), X !== null)) throw Error(x(261));
  return (J = null), (te = 0), Y;
}
function up() {
  for (; X !== null; ) qu(X);
}
function dp() {
  for (; X !== null && !Wd(); ) qu(X);
}
function qu(e) {
  var t = Ju(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps), t === null ? Yu(e) : (X = t), (Ao.current = null);
}
function Yu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = np(n, t, ve)), n !== null)) {
        X = n;
        return;
      }
    } else {
      if (((n = ap(n, t)), n !== null)) {
        (n.flags &= 32767), (X = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Y = 6), (X = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  Y === 0 && (Y = 5);
}
function bt(e, t, n) {
  var a = F,
    r = Me.transition;
  try {
    (Me.transition = null), (F = 1), cp(e, t, n, a);
  } finally {
    (Me.transition = r), (F = a);
  }
  return null;
}
function cp(e, t, n, a) {
  do en();
  while (it !== null);
  if ((W & 6) !== 0) throw Error(x(327));
  n = e.finishedWork;
  var r = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Kd(e, i),
    e === J && ((X = J = null), (te = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      Sa ||
      ((Sa = !0),
      ed(Ra, function () {
        return en(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || i)
  ) {
    (i = Me.transition), (Me.transition = null);
    var s = F;
    F = 1;
    var u = W;
    (W |= 4),
      (Ao.current = null),
      ip(e, n),
      Ku(n, e),
      Gc(Si),
      (La = !!xi),
      (Si = xi = null),
      (e.current = n),
      op(n),
      Fd(),
      (W = u),
      (F = s),
      (Me.transition = i);
  } else e.current = n;
  if ((Sa && ((Sa = !1), (it = e), (nr = r)), (i = e.pendingLanes), i === 0 && (ct = null), Od(n.stateNode), ge(e, $()), t !== null))
    for (a = e.onRecoverableError, n = 0; n < t.length; n++) (r = t[n]), a(r.value, {componentStack: r.stack, digest: r.digest});
  if (tr) throw ((tr = !1), (e = Hi), (Hi = null), e);
  return (
    (nr & 1) !== 0 && e.tag !== 0 && en(),
    (i = e.pendingLanes),
    (i & 1) !== 0 ? (e === Vi ? Wn++ : ((Wn = 0), (Vi = e))) : (Wn = 0),
    vt(),
    null
  );
}
function en() {
  if (it !== null) {
    var e = Cl(nr),
      t = Me.transition,
      n = F;
    try {
      if (((Me.transition = null), (F = 16 > e ? 16 : e), it === null)) var a = !1;
      else {
        if (((e = it), (it = null), (nr = 0), (W & 6) !== 0)) throw Error(x(331));
        var r = W;
        for (W |= 4, M = e.current; M !== null; ) {
          var i = M,
            s = i.child;
          if ((M.flags & 16) !== 0) {
            var u = i.deletions;
            if (u !== null) {
              for (var d = 0; d < u.length; d++) {
                var m = u[d];
                for (M = m; M !== null; ) {
                  var v = M;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tn(8, v, i);
                  }
                  var _ = v.child;
                  if (_ !== null) (_.return = v), (M = _);
                  else
                    for (; M !== null; ) {
                      v = M;
                      var g = v.sibling,
                        S = v.return;
                      if ((Vu(v), v === m)) {
                        M = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = S), (M = g);
                        break;
                      }
                      M = S;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var b = y.child;
                if (b !== null) {
                  y.child = null;
                  do {
                    var D = b.sibling;
                    (b.sibling = null), (b = D);
                  } while (b !== null);
                }
              }
              M = i;
            }
          }
          if ((i.subtreeFlags & 2064) !== 0 && s !== null) (s.return = i), (M = s);
          else
            e: for (; M !== null; ) {
              if (((i = M), (i.flags & 2048) !== 0))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (M = f);
                break e;
              }
              M = i.return;
            }
        }
        var p = e.current;
        for (M = p; M !== null; ) {
          s = M;
          var h = s.child;
          if ((s.subtreeFlags & 2064) !== 0 && h !== null) (h.return = s), (M = h);
          else
            e: for (s = p; M !== null; ) {
              if (((u = M), (u.flags & 2048) !== 0))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mr(9, u);
                  }
                } catch (P) {
                  Q(u, u.return, P);
                }
              if (u === s) {
                M = null;
                break e;
              }
              var w = u.sibling;
              if (w !== null) {
                (w.return = u.return), (M = w);
                break e;
              }
              M = u.return;
            }
        }
        if (((W = r), vt(), Le && typeof Le.onPostCommitFiberRoot == "function"))
          try {
            Le.onPostCommitFiberRoot(or, e);
          } catch {}
        a = !0;
      }
      return a;
    } finally {
      (F = n), (Me.transition = t);
    }
  }
  return !1;
}
function Ks(e, t, n) {
  (t = sn(n, t)), (t = Gu(e, t, 1)), (e = dt(e, t, 1)), (t = ue()), e !== null && (ea(e, 1, t), ge(e, t));
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
          (typeof a.componentDidCatch == "function" && (ct === null || !ct.has(a)))
        ) {
          (e = sn(n, e)), (e = zu(t, e, 1)), (t = dt(t, e, 1)), (e = ue()), t !== null && (ea(t, 1, e), ge(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function pp(e, t, n) {
  var a = e.pingCache;
  a !== null && a.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    J === e && (te & n) === n && (Y === 4 || (Y === 3 && (te & 130023424) === te && 500 > $() - Go) ? Mt(e, 0) : (Co |= n)),
    ge(e, t);
}
function Zu(e, t) {
  t === 0 && ((e.mode & 1) === 0 ? (t = 1) : ((t = ca), (ca <<= 1), (ca & 130023424) === 0 && (ca = 4194304)));
  var n = ue();
  (e = qe(e, t)), e !== null && (ea(e, t, n), ge(e, n));
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
        r = e.memoizedState;
      r !== null && (n = r.retryLane);
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
    if (e.memoizedProps !== t.pendingProps || me.current) fe = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return (fe = !1), tp(e, t, n);
      fe = (e.flags & 131072) !== 0;
    }
  else (fe = !1), H && (t.flags & 1048576) !== 0 && nu(t, Qa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var a = t.type;
      Ga(e, t), (e = t.pendingProps);
      var r = nn(t, oe.current);
      Jt(t, n), (r = ko(null, t, a, e, r, n));
      var i = Po();
      return (
        (t.flags |= 1),
        typeof r == "object" && r !== null && typeof r.render == "function" && r.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(a) ? ((i = !0), Ka(t)) : (i = !1),
            (t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null),
            wo(t),
            (r.updater = pr),
            (t.stateNode = r),
            (r._reactInternals = t),
            Ci(t, a, e, n),
            (t = Ti(null, t, a, !0, i, n)))
          : ((t.tag = 0), H && i && po(t), le(null, t, r, n), (t = t.child)),
        t
      );
    case 16:
      a = t.elementType;
      e: {
        switch (
          (Ga(e, t), (e = t.pendingProps), (r = a._init), (a = r(a._payload)), (t.type = a), (r = t.tag = gp(a)), (e = Ge(a, e)), r)
        ) {
          case 0:
            t = zi(null, t, a, e, n);
            break e;
          case 1:
            t = Ws(null, t, a, e, n);
            break e;
          case 11:
            t = Ts(null, t, a, e, n);
            break e;
          case 14:
            t = Bs(null, t, a, Ge(a.type, e), n);
            break e;
        }
        throw Error(x(306, a, ""));
      }
      return t;
    case 0:
      return (a = t.type), (r = t.pendingProps), (r = t.elementType === a ? r : Ge(a, r)), zi(e, t, a, r, n);
    case 1:
      return (a = t.type), (r = t.pendingProps), (r = t.elementType === a ? r : Ge(a, r)), Ws(e, t, a, r, n);
    case 3:
      e: {
        if ((Fu(t), e === null)) throw Error(x(387));
        (a = t.pendingProps), (i = t.memoizedState), (r = i.element), ou(e, t), qa(t, a, null, n);
        var s = t.memoizedState;
        if (((a = s.element), i.isDehydrated))
          if (
            ((i = {
              element: a,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (r = sn(Error(x(423)), t)), (t = Fs(e, t, a, n, r));
            break e;
          } else if (a !== r) {
            (r = sn(Error(x(424)), t)), (t = Fs(e, t, a, n, r));
            break e;
          } else
            for (we = ut(t.stateNode.containerInfo.firstChild), xe = t, H = !0, Te = null, n = du(t, null, a, n), t.child = n; n; )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((an(), a === r)) {
            t = Ye(e, t, n);
            break e;
          }
          le(e, t, a, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        cu(t),
        e === null && Mi(t),
        (a = t.type),
        (r = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = r.children),
        yi(a, r) ? (s = null) : i !== null && yi(a, i) && (t.flags |= 32),
        Wu(e, t),
        le(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Mi(t), null;
    case 13:
      return Du(e, t, n);
    case 4:
      return xo(t, t.stateNode.containerInfo), (a = t.pendingProps), e === null ? (t.child = rn(t, null, a, n)) : le(e, t, a, n), t.child;
    case 11:
      return (a = t.type), (r = t.pendingProps), (r = t.elementType === a ? r : Ge(a, r)), Ts(e, t, a, r, n);
    case 7:
      return le(e, t, t.pendingProps, n), t.child;
    case 8:
      return le(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return le(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((a = t.type._context),
          (r = t.pendingProps),
          (i = t.memoizedProps),
          (s = r.value),
          R($a, a._currentValue),
          (a._currentValue = s),
          i !== null)
        )
          if (Fe(i.value, s)) {
            if (i.children === r.children && !me.current) {
              t = Ye(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                s = i.child;
                for (var d = u.firstContext; d !== null; ) {
                  if (d.context === a) {
                    if (i.tag === 1) {
                      (d = Qe(-1, n & -n)), (d.tag = 2);
                      var m = i.updateQueue;
                      if (m !== null) {
                        m = m.shared;
                        var v = m.pending;
                        v === null ? (d.next = d) : ((d.next = v.next), (v.next = d)), (m.pending = d);
                      }
                    }
                    (i.lanes |= n), (d = i.alternate), d !== null && (d.lanes |= n), Ei(i.return, n, t), (u.lanes |= n);
                    break;
                  }
                  d = d.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(x(341));
                (s.lanes |= n), (u = s.alternate), u !== null && (u.lanes |= n), Ei(s, n, t), (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        le(e, t, r.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (r = t.type), (a = t.pendingProps.children), Jt(t, n), (r = Ee(r)), (a = a(r)), (t.flags |= 1), le(e, t, a, n), t.child;
    case 14:
      return (a = t.type), (r = Ge(a, t.pendingProps)), (r = Ge(a.type, r)), Bs(e, t, a, r, n);
    case 15:
      return Tu(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (a = t.type),
        (r = t.pendingProps),
        (r = t.elementType === a ? r : Ge(a, r)),
        Ga(e, t),
        (t.tag = 1),
        he(a) ? ((e = !0), Ka(t)) : (e = !1),
        Jt(t, n),
        lu(t, a, r),
        Ci(t, a, r, n),
        Ti(null, t, a, !0, e, n)
      );
    case 19:
      return Ru(e, t, n);
    case 22:
      return Bu(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function ed(e, t) {
  return Nl(e, t);
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
    if (((e = e.$$typeof), e === Ji)) return 11;
    if (e === eo) return 14;
  }
  return 2;
}
function ft(e, t) {
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
function Ba(e, t, n, a, r, i) {
  var s = 2;
  if (((a = e), typeof e == "function")) Wo(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Rt:
        return Et(n.children, r, i, t);
      case Zi:
        (s = 8), (r |= 8);
        break;
      case ei:
        return (e = Ne(12, n, t, r | 2)), (e.elementType = ei), (e.lanes = i), e;
      case ti:
        return (e = Ne(13, n, t, r)), (e.elementType = ti), (e.lanes = i), e;
      case ni:
        return (e = Ne(19, n, t, r)), (e.elementType = ni), (e.lanes = i), e;
      case ul:
        return gr(n, r, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case sl:
              s = 10;
              break e;
            case ll:
              s = 9;
              break e;
            case Ji:
              s = 11;
              break e;
            case eo:
              s = 14;
              break e;
            case et:
              (s = 16), (a = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (t = Ne(s, n, t, r)), (t.elementType = e), (t.type = a), (t.lanes = i), t;
}
function Et(e, t, n, a) {
  return (e = Ne(7, e, a, t)), (e.lanes = n), e;
}
function gr(e, t, n, a) {
  return (e = Ne(22, e, a, t)), (e.elementType = ul), (e.lanes = n), (e.stateNode = {isHidden: !1}), e;
}
function qr(e, t, n) {
  return (e = Ne(6, e, null, t)), (e.lanes = n), e;
}
function Yr(e, t, n) {
  return (
    (t = Ne(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation}),
    t
  );
}
function _p(e, t, n, a, r) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Gr(0)),
    (this.expirationTimes = Gr(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Gr(0)),
    (this.identifierPrefix = a),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null);
}
function Fo(e, t, n, a, r, i, s, u, d) {
  return (
    (e = new _p(e, t, n, u, d)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ne(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {element: a, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null}),
    wo(i),
    e
  );
}
function vp(e, t, n) {
  var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {$$typeof: Dt, key: a == null ? null : "" + a, children: e, containerInfo: t, implementation: n};
}
function td(e) {
  if (!e) return ht;
  e = e._reactInternals;
  e: {
    if (Wt(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
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
    if (he(n)) return eu(e, n, t);
  }
  return t;
}
function nd(e, t, n, a, r, i, s, u, d) {
  return (
    (e = Fo(n, a, !0, e, r, i, s, u, d)),
    (e.context = td(null)),
    (n = e.current),
    (a = ue()),
    (r = pt(n)),
    (i = Qe(a, r)),
    (i.callback = t != null ? t : null),
    dt(n, i, r),
    (e.current.lanes = r),
    ea(e, r, a),
    ge(e, a),
    e
  );
}
function _r(e, t, n, a) {
  var r = t.current,
    i = ue(),
    s = pt(r);
  return (
    (n = td(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qe(i, s)),
    (t.payload = {element: e}),
    (a = a === void 0 ? null : a),
    a !== null && (t.callback = a),
    (e = dt(r, t, s)),
    e !== null && (We(e, r, s, i), Ea(e, r, s)),
    s
  );
}
function rr(e) {
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
function Do(e, t) {
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
function Ro(e) {
  this._internalRoot = e;
}
vr.prototype.render = Ro.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  _r(e, t, null, null);
};
vr.prototype.unmount = Ro.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tt(function () {
      _r(null, e, null, null);
    }),
      (t[Xe] = null);
  }
};
function vr(e) {
  this._internalRoot = e;
}
vr.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Tl();
    e = {blockedOn: null, target: e, priority: t};
    for (var n = 0; n < nt.length && t !== 0 && t < nt[n].priority; n++);
    nt.splice(n, 0, e), n === 0 && Wl(e);
  }
};
function Oo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function wr(e) {
  return !(
    !e ||
    (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Qs() {}
function xp(e, t, n, a, r) {
  if (r) {
    if (typeof a == "function") {
      var i = a;
      a = function () {
        var m = rr(s);
        i.call(m);
      };
    }
    var s = nd(t, a, e, 0, null, !1, !1, "", Qs);
    return (e._reactRootContainer = s), (e[Xe] = s.current), Un(e.nodeType === 8 ? e.parentNode : e), Tt(), s;
  }
  for (; (r = e.lastChild); ) e.removeChild(r);
  if (typeof a == "function") {
    var u = a;
    a = function () {
      var m = rr(d);
      u.call(m);
    };
  }
  var d = Fo(e, 0, !1, null, null, !1, !1, "", Qs);
  return (
    (e._reactRootContainer = d),
    (e[Xe] = d.current),
    Un(e.nodeType === 8 ? e.parentNode : e),
    Tt(function () {
      _r(t, d, n, a);
    }),
    d
  );
}
function xr(e, t, n, a, r) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var d = rr(s);
        u.call(d);
      };
    }
    _r(t, s, e, r);
  } else s = xp(n, t, e, r, a);
  return rr(s);
}
Gl = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Pn(t.pendingLanes);
        n !== 0 && (ao(t, n | 1), ge(t, $()), (W & 6) === 0 && ((ln = $() + 500), vt()));
      }
      break;
    case 13:
      Tt(function () {
        var a = qe(e, 1);
        if (a !== null) {
          var r = ue();
          We(a, e, 1, r);
        }
      }),
        Do(e, 1);
  }
};
ro = function (e) {
  if (e.tag === 13) {
    var t = qe(e, 134217728);
    if (t !== null) {
      var n = ue();
      We(t, e, 134217728, n);
    }
    Do(e, 134217728);
  }
};
zl = function (e) {
  if (e.tag === 13) {
    var t = pt(e),
      n = qe(e, t);
    if (n !== null) {
      var a = ue();
      We(n, e, t, a);
    }
    Do(e, t);
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
pi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ii(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var a = n[t];
          if (a !== e && a.form === e.form) {
            var r = dr(a);
            if (!r) throw Error(x(90));
            cl(a), ii(a, r);
          }
        }
      }
      break;
    case "textarea":
      fl(e, n);
      break;
    case "select":
      (t = n.value), t != null && Xt(e, !!n.multiple, t, !1);
  }
};
xl = zo;
Sl = Tt;
var Sp = {usingClientEntryPoint: !1, Events: [na, Vt, dr, vl, wl, zo]},
  yn = {findFiberByHostInstance: kt, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom"},
  yp = {
    bundleType: yn.bundleType,
    version: yn.version,
    rendererPackageName: yn.rendererPackageName,
    rendererConfig: yn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = kl(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: yn.findFiberByHostInstance || wp,
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
      (or = ya.inject(yp)), (Le = ya);
    } catch {}
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sp;
ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Oo(t)) throw Error(x(200));
  return vp(e, t, null, n);
};
ye.createRoot = function (e, t) {
  if (!Oo(e)) throw Error(x(299));
  var n = !1,
    a = "",
    r = ad;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
    (t = Fo(e, 1, !1, null, null, n, !1, a, r)),
    (e[Xe] = t.current),
    Un(e.nodeType === 8 ? e.parentNode : e),
    new Ro(t)
  );
};
ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(x(188)) : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = kl(t)), (e = e === null ? null : e.stateNode), e;
};
ye.flushSync = function (e) {
  return Tt(e);
};
ye.hydrate = function (e, t, n) {
  if (!wr(t)) throw Error(x(200));
  return xr(null, e, t, !0, n);
};
ye.hydrateRoot = function (e, t, n) {
  if (!Oo(e)) throw Error(x(405));
  var a = (n != null && n.hydratedSources) || null,
    r = !1,
    i = "",
    s = ad;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = nd(t, null, e, 1, n != null ? n : null, r, !1, i, s)),
    (e[Xe] = t.current),
    Un(e),
    a)
  )
    for (e = 0; e < a.length; e++)
      (n = a[e]),
        (r = n._getVersion),
        (r = r(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, r])
          : t.mutableSourceEagerHydrationData.push(n, r);
  return new vr(t);
};
ye.render = function (e, t, n) {
  if (!wr(t)) throw Error(x(200));
  return xr(null, e, t, !1, n);
};
ye.unmountComponentAtNode = function (e) {
  if (!wr(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (Tt(function () {
        xr(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Xe] = null);
        });
      }),
      !0)
    : !1;
};
ye.unstable_batchedUpdates = zo;
ye.unstable_renderSubtreeIntoContainer = function (e, t, n, a) {
  if (!wr(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return xr(e, t, n, !1, a);
};
ye.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = ye);
})(nl);
var $s = nl.exports;
(Zr.createRoot = $s.createRoot), (Zr.hydrateRoot = $s.hydrateRoot);
const bp = [
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
      poe: "PoE 802.3af/A-B",
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
      id: "8",
      linha: "ap",
      modelo: "AP 1250 AC MAX",
      garantia: "1 ano",
      cobertura: "450m\xB2",
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
      tensao: "48V / 12 VDC (Fonte P4)",
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
      cobertura: "400m\xB2",
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
      tensao: "48V / 12 VDC (Fonte P4)",
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
      tensao: "48V / 12 VDC (Fonte P4)",
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
      poe: "PoE 802.3af/A-B",
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
      id: "13",
      linha: "ap",
      modelo: "AP 300",
      garantia: "1 ano",
      cobertura: "300 m\xB2",
      raio: "9,77 m",
      usuarioMax: "100 usu\xE1rios",
      qtdePortas: "1 Porta",
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
      tensao: "48V / 12 VDC (Fonte P4)",
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
      status: "Suporte",
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
      status: "Suporte",
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
      status: "Suporte",
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
      status: "Suporte",
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
      status: "Suporte",
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
      status: "Suporte",
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
  Np = [
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
  ],
  Mp = [
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
      sfp: "2 Independentes",
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
  ],
  Ep = [
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
      status: "Phaseout",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/conversor-de-sinal-pon-para-sinal-ethernet-onu-110-b",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-11/Datasheet%20ONU%20110B.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-10/Guia_ONU_110_B.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-10/Manual_ONU_110B.pdf",
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
      status: "Phaseout",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/conversor-de-sinal-gponepon-em-sinal-ethernet-ou-wi-fi-ont-142n-w",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-06/Datasheet%20ONT%20142N%20W_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_do_usuario_ONT_142NW_portugues_01-22.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-06/Manual_de_usuario_ONT_142_NW_portugues_01-22.pdf",
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
      id: "14",
      modelo: "ACTION R 1200",
      linha: "roteador",
      cobertura: "80m\xB2",
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
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wireless-smart-dual-band-action-r1200",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-07/datasheet_a4_icon_action_r1200_0_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_action_r1200_01-18_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/integration/manual_action_r1200_01-18_site_08_18.pdf",
    },
    {
      id: "3",
      modelo: "ACTION RF 1200",
      linha: "roteador",
      cobertura: "80m\xB2",
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
      cobertura: "120m\xB2",
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
      cobertura: "100m\xB2",
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
      id: "15",
      modelo: "IWE 3000N",
      linha: "roteador",
      cobertura: "40m\xB2",
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
      cobertura: "40m\xB2",
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
      cobertura: "80m\xB2",
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
      cobertura: "70m\xB2",
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
      id: "1",
      modelo: "RF 301K",
      linha: "roteador",
      cobertura: "70m\xB2",
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
      cobertura: "140m\xB2",
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
      cobertura: "100m\xB2",
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
      cobertura: "180m\xB2",
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
      cobertura: "180m\xB2",
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
      cobertura: "70m\xB2",
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
      cobertura: "80m\xB2",
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
      cobertura: "120m\xB2",
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
  Cp = "_container_1nuz9_29",
  Gp = "_header_content_1nuz9_34",
  zp = "_aviso_1nuz9_43",
  Tp = "_logo_1nuz9_50",
  Bp = "_searchbarContainer_1nuz9_59",
  Wp = "_mainsearchbar_1nuz9_64",
  Fp = "_searchBtnClean_1nuz9_79",
  Dp = "_btns_container_1nuz9_106",
  Rp = "_btns_1nuz9_106",
  Op = "_legendas_1nuz9_130",
  Lp = "_btn_hideShow_1nuz9_148",
  Hp = "_box_container_1nuz9_166",
  Vp = "_box_content_1nuz9_173",
  Ip = "_header_box_content_1nuz9_180",
  Up = "_title_1nuz9_186",
  Kp = "_arrowHide_1nuz9_193",
  jp = "_arrowShow_1nuz9_194",
  Qp = "_searchBarDevices_1nuz9_215",
  $p = "_status_phaseout_1nuz9_227",
  Xp = "_status_suporte_1nuz9_228",
  qp = "_pdfbtn_1nuz9_256",
  Yp = "_paginalink_1nuz9_257",
  Zp = "_pdfbtn_NA_1nuz9_258",
  Jp = "_fast_1nuz9_285",
  ef = "_giga_1nuz9_286",
  tf = "_sim_1nuz9_287",
  nf = "_nao_1nuz9_288",
  af = "_normal_1nuz9_289",
  rf = "_variado1_1nuz9_290",
  of = "_variado2_1nuz9_291",
  sf = "_variado3_1nuz9_292",
  lf = "_NaoPossui_1nuz9_339",
  uf = "_devicesTable_1nuz9_347",
  df = "_AP_1nuz9_1",
  cf = "_RADIO_1nuz9_1",
  pf = "_ONU_1nuz9_1",
  ff = "_tooltip_1nuz9_430",
  mf = "_tooltiptext_1nuz9_435",
  hf = "_top_1nuz9_456",
  c = {
    container: Cp,
    header_content: Gp,
    aviso: zp,
    logo: Tp,
    searchbarContainer: Bp,
    mainsearchbar: Wp,
    searchBtnClean: Fp,
    btns_container: Dp,
    btns: Rp,
    legendas: Op,
    btn_hideShow: Lp,
    box_container: Hp,
    box_content: Vp,
    header_box_content: Ip,
    title: Up,
    arrowHide: Kp,
    arrowShow: jp,
    searchBarDevices: Qp,
    status_phaseout: $p,
    status_suporte: Xp,
    pdfbtn: qp,
    paginalink: Yp,
    pdfbtn_NA: Zp,
    fast: Jp,
    giga: ef,
    sim: tf,
    nao: nf,
    normal: af,
    variado1: rf,
    variado2: of,
    variado3: sf,
    NaoPossui: lf,
    devicesTable: uf,
    AP: df,
    RADIO: cf,
    ONU: pf,
    tooltip: ff,
    tooltiptext: mf,
    top: hf,
  };
var Sr = {exports: {}},
  yr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gf = ir.exports,
  _f = Symbol.for("react.element"),
  vf = Symbol.for("react.fragment"),
  wf = Object.prototype.hasOwnProperty,
  xf = gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Sf = {key: !0, ref: !0, __self: !0, __source: !0};
function rd(e, t, n) {
  var a,
    r = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (a in t) wf.call(t, a) && !Sf.hasOwnProperty(a) && (r[a] = t[a]);
  if (e && e.defaultProps) for (a in ((t = e.defaultProps), t)) r[a] === void 0 && (r[a] = t[a]);
  return {$$typeof: _f, type: e, key: i, ref: s, props: r, _owner: xf.current};
}
yr.Fragment = vf;
yr.jsx = rd;
yr.jsxs = rd;
(function (e) {
  e.exports = yr;
})(Sr);
const br = Sr.exports.Fragment,
  o = Sr.exports.jsx,
  k = Sr.exports.jsxs;
function yf() {
  return o("thead", {
    children: k("tr", {
      id: c.AP,
      children: [
        o("th", {children: "Modelo"}),
        o("th", {children: "Modula\xE7\xE3o"}),
        o("th", {children: "Cobertura"}),
        o("th", {children: "Raio"}),
        o("th", {children: "Usu\xE1rios simult\xE2neos"}),
        o("th", {children: "Datarate M\xE1x. 2G"}),
        o("th", {children: "Datarate M\xE1x. 5G"}),
        o("th", {children: "Qtde Portas"}),
        o("th", {children: "PoE"}),
        o("th", {children: "ConnectFi"}),
        o("th", {children: "Handover"}),
        o("th", {children: "WiseFi"}),
        o("th", {children: "Pot\xEAncia de TX 2G"}),
        o("th", {children: "Pot\xEAncia de TX 5G"}),
        o("th", {children: "Status"}),
        o("th", {children: "P\xE1gina"}),
        o("th", {children: "Datasheet"}),
        o("th", {children: "Guia"}),
        o("th", {children: "Manual"}),
      ],
    }),
  });
}
function bf() {
  return o("thead", {
    children: k("tr", {
      id: c.RADIO,
      children: [
        o("th", {children: "Modelo"}),
        o("th", {children: "Indicado"}),
        o("th", {children: "Modula\xE7\xE3o"}),
        o("th", {children: "Ganho"}),
        o("th", {children: "Pot\xEAncia de TX"}),
        o("th", {children: "Encam. de Pacotes"}),
        o("th", {children: "Throughput Efetivo"}),
        o("th", {children: "Throughput Nominal"}),
        o("th", {children: "Abertura"}),
        o("th", {children: "Dist\xE2ncia M\xE1x"}),
        o("th", {children: "Wireless"}),
        o("th", {children: "Garantia"}),
        o("th", {children: "Status"}),
        o("th", {children: "P\xE1gina"}),
        o("th", {children: "Datasheet"}),
        o("th", {children: "Guia"}),
        o("th", {children: "Manual"}),
      ],
    }),
  });
}
function kf() {
  return o("thead", {
    children: k("tr", {
      children: [
        o("th", {children: "Modelo"}),
        o("th", {children: "Conector"}),
        o("th", {children: "WDM"}),
        o("th", {children: "Dist\xE2ncia"}),
        o("th", {children: "Modula\xE7\xE3o"}),
        o("th", {children: "Fibra"}),
        o("th", {children: "Pot\xEAncia Sinal Max | Min"}),
        o("th", {children: "Sensibilidade Max | Min"}),
        o("th", {children: "Garantia"}),
        o("th", {children: "Status"}),
        o("th", {children: "P\xE1gina"}),
        o("th", {children: "Datasheet"}),
        o("th", {children: "Guia"}),
      ],
    }),
  });
}
function Pf() {
  return o(br, {
    children: o("thead", {
      children: k("tr", {
        children: [
          o("th", {children: "Modelo"}),
          o("th", {children: "Conector"}),
          o("th", {children: "Modulo"}),
          o("th", {children: "WDM"}),
          o("th", {children: "Dist\xE2ncia"}),
          o("th", {children: "Modula\xE7\xE3o"}),
          o("th", {children: "Fibra"}),
          o("th", {children: "Pot\xEAncia Sinal Max | Min"}),
          o("th", {children: "Sensibilidade Max | Min"}),
          o("th", {children: "Garantia"}),
          o("th", {children: "Status"}),
          o("th", {children: "P\xE1gina"}),
          o("th", {children: "Datasheet"}),
          o("th", {children: "Guia"}),
        ],
      }),
    }),
  });
}
function Nf() {
  return o(br, {
    children: o("thead", {
      children: k("tr", {
        children: [
          o("th", {children: "Modelo"}),
          o("th", {children: "Modula\xE7\xE3o"}),
          o("th", {children: "Qtde Portas"}),
          o("th", {children: "Gerenci\xE1vel"}),
          o("th", {children: "Alimenta via PoE"}),
          o("th", {children: "Encam. de Pacotes"}),
          o("th", {children: "Backplane"}),
          o("th", {children: "Possui SFP"}),
          o("th", {children: "PoE Extender"}),
          o("th", {children: "PoE/Porta"}),
          o("th", {children: "PoE/Total"}),
          o("th", {children: "Qos"}),
          o("th", {children: "Garantia"}),
          o("th", {children: "Status"}),
          o("th", {children: "P\xE1gina"}),
          o("th", {children: "Datasheet"}),
          o("th", {children: "Guia"}),
          o("th", {children: "Manual"}),
        ],
      }),
    }),
  });
}
function Mf() {
  return o(br, {
    children: o("thead", {
      children: k("tr", {
        id: c.ONU,
        children: [
          o("th", {children: "Modelo"}),
          o("th", {children: "Modula\xE7\xE3o"}),
          o("th", {children: "FXS"}),
          o("th", {children: "Tipo"}),
          o("th", {children: "Sensibilidade Max | Min"}),
          o("th", {children: "Cobertura"}),
          o("th", {children: "Usu\xE1rios simult\xE2neos"}),
          o("th", {children: "Datarate M\xE1x. 2G"}),
          o("th", {children: "Datarate M\xE1x. 5G"}),
          o("th", {children: "SSID"}),
          o("th", {children: "TR069"}),
          o("th", {children: "Customize"}),
          o("th", {children: "Remotize"}),
          o("th", {children: "Garantia"}),
          o("th", {children: "Status"}),
          o("th", {children: "P\xE1gina"}),
          o("th", {children: "Datasheet"}),
          o("th", {children: "Guia"}),
          o("th", {children: "Manual"}),
        ],
      }),
    }),
  });
}
function Ef() {
  return o(br, {
    children: o("thead", {
      children: k("tr", {
        children: [
          o("th", {children: "Modelo"}),
          o("th", {children: "Cobertura"}),
          o("th", {children: "Raio"}),
          o("th", {children: "Usu\xE1rios M\xE1ximos"}),
          o("th", {children: "Plano Recomendado"}),
          o("th", {children: "Modula\xE7\xE3o"}),
          o("th", {children: "Qtde Portas"}),
          o("th", {children: "Datarate M\xE1x. 2G"}),
          o("th", {children: "Datarate M\xE1x. 5G"}),
          o("th", {children: "Ganho da antena"}),
          o("th", {children: "IPV6"}),
          o("th", {children: "Repetidor"}),
          o("th", {children: "Roteador AP"}),
          o("th", {children: "Cliente Wireless"}),
          o("th", {children: "Modo AP"}),
          o("th", {children: "Status"}),
          o("th", {children: "Garantia"}),
          o("th", {children: "P\xE1gina"}),
          o("th", {children: "Datasheet"}),
          o("th", {children: "Guia"}),
          o("th", {children: "Manual"}),
        ],
      }),
    }),
  });
}
function Af() {
  const [e, t] = _e.useState(""),
    [n, a] = _e.useState(!0),
    r = () => a(!n),
    [i, s] = _e.useState(""),
    [u, d] = _e.useState(!0),
    m = () => d(!u),
    [v, _] = _e.useState(""),
    [g, S] = _e.useState(!0),
    y = () => S(!g),
    [b, D] = _e.useState(""),
    [f, p] = _e.useState(!0),
    h = () => p(!f),
    [w, P] = _e.useState(!0),
    A = () => P(!w),
    [E, C] = _e.useState(!0),
    V = () => C(!E),
    [T, se] = _e.useState(!0),
    wt = () => se(!T),
    [Ve, pn] = _e.useState(""),
    kr = (l) => {
      t(l.target.value);
    },
    fn = (l) => {
      s(l.target.value);
    },
    mn = (l) => {
      D(l.target.value);
    },
    N = (l) => {
      _(l.target.value);
    },
    G = (l) => {
      pn(l.target.value);
    },
    z = () => {
      a(!0), d(!0), S(!0), p(!0), P(!0), C(!0), se(!0);
    },
    I = () => {
      a(!1), d(!1), S(!1), p(!1), P(!1), C(!1), se(!1);
    };
  return k("div", {
    className: c.container,
    children: [
      o("a", {href: "#home", children: o("div", {className: c.top})}),
      o("div", {
        className: c.aviso,
        children: k("p", {
          children: [
            o("b", {children: "Aviso!"}),
            " Este \xE9 um material para facilitar o acesso a informa\xE7\xF5es dos principais equipamentos.",
            o("b", {children: " Sempre consulte a documenta\xE7\xE3o oficial."}),
            " :)",
          ],
        }),
      }),
      k("div", {
        className: c.header_content,
        id: "home",
        children: [
          o("div", {className: c.logo, children: o("p", {children: "Olimpo!"})}),
          k("div", {
            className: c.searchbarContainer,
            children: [
              o("input", {
                className: c.mainsearchbar,
                value: Ve,
                onChange: G,
                placeholder: "Pesquise em intelbras.com.br",
                onKeyDown: (l) => {
                  l.key === "Enter" && window.open(`https://www.intelbras.com/pt-br/busca/?q=${Ve}&tipo_busca=pagina-resultado`, "_blank");
                },
              }),
              Ve === "" ? null : o("button", {className: c.searchBtnClean, onClick: () => pn("")}),
            ],
          }),
          k("div", {
            className: c.btns_container,
            children: [
              o("a", {href: "#ap", children: o("button", {className: c.btns, children: "Access Point"})}),
              o("a", {href: "#radio", children: o("button", {className: c.btns, children: "Radio Outdoor"})}),
              o("a", {href: "#ho", children: o("button", {className: c.btns, children: "Home Office"})}),
              o("a", {href: "#switch", children: o("button", {className: c.btns, children: "Switch"})}),
              o("a", {href: "#conversor", children: o("button", {className: c.btns, children: "Conversor de M\xEDdia"})}),
              o("a", {href: "#sfp", children: o("button", {className: c.btns, children: "Modulo SFP"})}),
              o("a", {href: "#onu", children: o("button", {className: c.btns, children: "Onu/Ont"})}),
            ],
          }),
          k("div", {
            className: c.legendas,
            children: [
              o("p", {children: o("b", {children: o("i", {children: "Legendas"})})}),
              k("p", {children: [o("b", {children: "N/A"}), " = Informa\xE7\xE3o N\xE3o Encontrada."]}),
              o("p", {children: "X = N\xE3o Possui a Fun\xE7\xE3o."}),
            ],
          }),
        ],
      }),
      k("div", {
        className: c.box_container,
        children: [
          k("div", {
            children: [
              k("button", {className: c.btn_hideShow, onClick: z, children: ["Mostrar Tudo ", o("i", {className: "fa-solid fa-eye"})]}),
              k("button", {
                className: c.btn_hideShow,
                onClick: I,
                children: ["Ocultar Tudo ", o("i", {className: "fa-regular fa-eye-slash"})],
              }),
            ],
          }),
          k("div", {
            className: c.box_content,
            children: [
              k("div", {
                className: c.header_box_content,
                children: [
                  o("button", {
                    id: "ap",
                    className: n ? c.arrowHide : c.arrowShow,
                    onClick: r,
                    children: o("span", {className: c.title, children: "Access Point"}),
                  }),
                  k("label", {
                    children: [
                      o("i", {className: "fa-solid fa-magnifying-glass"}),
                      o("input", {placeholder: "Pesquise o Equipamento", value: e, onChange: kr, className: c.searchBarDevices}),
                    ],
                  }),
                ],
              }),
              n
                ? o("div", {
                    style: {overflowX: "auto"},
                    children: k("table", {
                      className: c.devicesTable,
                      children: [
                        o(yf, {}),
                        bp
                          .filter((l) => {
                            if (l.modelo.toLowerCase().includes(e.toLowerCase())) return l;
                            if (l.modulação.toLowerCase().includes(e.toLowerCase())) return l;
                          })
                          .map((l) =>
                            o("tbody", {
                              children: k("tr", {
                                children: [
                                  o("td", {children: l.modelo}),
                                  o("td", {
                                    children: o("span", {className: l.modulação === "Fast" ? c.fast : c.giga, children: l.modulação}),
                                  }),
                                  o("td", {children: l.cobertura}),
                                  o("td", {children: l.raio}),
                                  o("td", {children: l.usuarioMax}),
                                  o("td", {children: l.throughputWireless24}),
                                  o("td", {
                                    className: l.throughputWireless50 === "x" ? c.NaoPossui : null,
                                    children: l.throughputWireless50,
                                  }),
                                  o("td", {children: l.qtdePortas}),
                                  o("td", {className: l.poe === "x" && c.NaoPossui, children: l.poe}),
                                  o("td", {
                                    children: k("span", {
                                      className: c.tooltip,
                                      children: [
                                        l.connectiVersion,
                                        " ",
                                        l.connectiVersion !== "N/A" && o("i", {className: "fa-regular fa-circle-question"}),
                                        l.connectiVersion !== "N/A" &&
                                          k("span", {
                                            className: c.tooltiptext,
                                            children: [
                                              "O AP precisa estar com a vers\xE3o ",
                                              l.connectiVersion,
                                              " para o connectFi funcionar.",
                                            ],
                                          }),
                                      ],
                                    }),
                                  }),
                                  o("td", {className: l.handover === "x" && c.NaoPossui, children: l.handover}),
                                  o("td", {className: l.wisefi === "x" && c.NaoPossui, children: l.wisefi}),
                                  o("td", {children: l.potencia2G}),
                                  o("td", {className: l.potencia5G === "x" && c.NaoPossui, children: l.potencia5G}),
                                  o("td", {
                                    children: k("span", {
                                      className: c.tooltip,
                                      children: [
                                        k("span", {
                                          children: [
                                            l.status === "Phaseout" && o("span", {className: c.status_phaseout, children: l.status}),
                                            l.status === "Suporte" && o("span", {className: c.status_suporte, children: l.status}),
                                          ],
                                        }),
                                        l.status === "Phaseout" && o("span", {className: c.tooltiptext, children: "Apenas email"}),
                                        l.status === "Suporte" && o("span", {className: c.tooltiptext, children: "Fornecemos suporte"}),
                                      ],
                                    }),
                                  }),
                                  o("td", {
                                    children: o("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      href: l.pagina,
                                      children: o("span", {className: c.paginalink, children: "P\xE1gina"}),
                                    }),
                                  }),
                                  o("td", {
                                    children: o("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      href: l.datasheet,
                                      children: o("span", {className: c.pdfbtn, children: "Datasheet"}),
                                    }),
                                  }),
                                  o("td", {
                                    children: o("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      href: l.guia,
                                      children: o("span", {className: c.pdfbtn, children: "Guia"}),
                                    }),
                                  }),
                                  o("td", {
                                    children: o("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      href: l.manual,
                                      children: o("span", {className: c.pdfbtn, children: "Manual"}),
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
          k("div", {
            className: c.box_content,
            children: [
              k("div", {
                className: c.header_box_content,
                children: [
                  o("button", {
                    id: "radio",
                    className: u ? c.arrowHide : c.arrowShow,
                    onClick: m,
                    children: o("span", {className: c.title, children: "Radios Outdoor"}),
                  }),
                  k("label", {
                    children: [
                      o("i", {className: "fa-solid fa-magnifying-glass"}),
                      o("input", {placeholder: "Pesquise o Equipamento", value: i, onChange: fn, className: c.searchBarDevices}),
                    ],
                  }),
                ],
              }),
              u
                ? o("div", {
                    style: {overflowX: "auto"},
                    children: k("table", {
                      className: c.devicesTable,
                      children: [
                        o(bf, {}),
                        Np.filter((l) => {
                          if (l.modelo.toLowerCase().includes(i.toLowerCase())) return l;
                          if (l.modulação.toLowerCase().includes(i.toLowerCase())) return l;
                        }).map((l) =>
                          o("tbody", {
                            children: k("tr", {
                              children: [
                                o("td", {children: l.modelo}),
                                o("td", {children: l.indicado}),
                                o("td", {
                                  children: o("span", {className: l.modulação === "Fast" ? c.fast : c.giga, children: l.modulação}),
                                }),
                                o("td", {
                                  children: k("span", {
                                    className: c.tooltip,
                                    children: [
                                      l.ganho,
                                      " ",
                                      l.ganho === "SEM ANTENA" && o("i", {className: "fa-regular fa-circle-question"}),
                                      l.ganho === "SEM ANTENA" &&
                                        k("span", {
                                          className: c.tooltiptext,
                                          children: [
                                            "Antena adquirida separadamente, indicar parceria ",
                                            o("a", {href: "http://www.algcom.com.br", children: "ALGCOM"}),
                                          ],
                                        }),
                                    ],
                                  }),
                                }),
                                o("td", {children: l.potencia}),
                                o("td", {children: l.pps}),
                                o("td", {children: l.throughputEfetivo}),
                                o("td", {children: l.throughputNominal}),
                                o("td", {className: l.aberturaHorVer === "x" && c.NaoPossui, children: l.aberturaHorVer}),
                                o("td", {className: l.distancia === "x" && c.NaoPossui, children: l.distancia}),
                                o("td", {children: l.wireless}),
                                o("td", {children: l.garantia}),
                                o("td", {
                                  children: k("span", {
                                    className: c.tooltip,
                                    children: [
                                      k("span", {
                                        children: [
                                          l.status === "Phaseout" && o("span", {className: c.status_phaseout, children: l.status}),
                                          l.status === "Suporte" && o("span", {className: c.status_suporte, children: l.status}),
                                        ],
                                      }),
                                      l.status === "Phaseout" && o("span", {className: c.tooltiptext, children: "Apenas email"}),
                                      l.status === "Suporte" && o("span", {className: c.tooltiptext, children: "Fornecemos suporte"}),
                                    ],
                                  }),
                                }),
                                o("td", {
                                  children: o("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: l.pagina,
                                    children: o("span", {className: c.paginalink, children: "P\xE1gina"}),
                                  }),
                                }),
                                o("td", {
                                  children:
                                    l.datasheet === "-"
                                      ? o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: "#",
                                          children: o("span", {className: c.pdfbtn_NA, children: "N/A"}),
                                        })
                                      : o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: l.datasheet,
                                          children: o("span", {className: c.pdfbtn, children: "Datasheet"}),
                                        }),
                                }),
                                o("td", {
                                  children:
                                    l.guia === "-"
                                      ? o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: "#",
                                          children: o("span", {className: c.pdfbtn_NA, children: "N/A"}),
                                        })
                                      : o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: l.guia,
                                          children: o("span", {className: c.pdfbtn, children: "Guia"}),
                                        }),
                                }),
                                o("td", {
                                  children:
                                    l.manual === "-"
                                      ? o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: "#",
                                          children: o("span", {className: c.pdfbtn_NA, children: "N/A"}),
                                        })
                                      : o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: l.manual,
                                          children: o("span", {className: c.pdfbtn, children: "Manual"}),
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
          k("div", {
            className: c.box_content,
            children: [
              k("div", {
                className: c.header_box_content,
                children: [
                  o("button", {
                    id: "ho",
                    className: g ? c.arrowHide : c.arrowShow,
                    onClick: y,
                    children: o("span", {className: c.title, children: "Home Office"}),
                  }),
                  k("label", {
                    children: [
                      o("i", {className: "fa-solid fa-magnifying-glass"}),
                      o("input", {placeholder: "Pesquise o Equipamento", value: v, onChange: N, className: c.searchBarDevices}),
                    ],
                  }),
                ],
              }),
              g
                ? k("div", {
                    style: {overflowX: "auto"},
                    children: [
                      k("table", {
                        className: c.devicesTable,
                        children: [
                          o(Ef, {}),
                          Ap.filter((l) => {
                            if (l.modelo.toLowerCase().includes(v.toLowerCase())) return l;
                            if (l.modulação.toLowerCase().includes(v.toLowerCase())) return l;
                          }).map((l) =>
                            o("tbody", {
                              children: k("tr", {
                                children: [
                                  o("td", {children: o("b", {children: l.modelo})}),
                                  o("td", {children: l.cobertura}),
                                  o("td", {children: l.raio}),
                                  o("td", {children: l.usuarioMax}),
                                  o("td", {children: l.planoRecomendado}),
                                  o("td", {
                                    children: o("span", {className: l.modulação === "Fast" ? c.fast : c.giga, children: l.modulação}),
                                  }),
                                  o("td", {children: l.QtdePortas}),
                                  o("td", {children: l.datarateMax2G}),
                                  o("td", {className: l.datarateMax5G === "x" ? c.NaoPossui : null, children: l.datarateMax5G}),
                                  o("td", {children: l.ganho}),
                                  o("td", {className: l.ipv6 === "x" ? c.NaoPossui : null, children: l.ipv6}),
                                  o("td", {className: l.repetidor === "x" ? c.NaoPossui : null, children: l.repetidor}),
                                  o("td", {className: l.roteador === "x" ? c.NaoPossui : null, children: l.roteador}),
                                  o("td", {className: l.cliente === "x" ? c.NaoPossui : null, children: l.cliente}),
                                  o("td", {className: l.ap === "x" ? c.NaoPossui : null, children: l.ap}),
                                  o("td", {
                                    children: k("span", {
                                      className: c.tooltip,
                                      children: [
                                        k("span", {
                                          children: [
                                            l.status === "Phaseout" && o("span", {className: c.status_phaseout, children: l.status}),
                                            l.status === "Suporte" && o("span", {className: c.status_suporte, children: l.status}),
                                          ],
                                        }),
                                        l.status === "Phaseout" && o("span", {className: c.tooltiptext, children: "Apenas email"}),
                                        l.status === "Suporte" && o("span", {className: c.tooltiptext, children: "Fornecemos suporte"}),
                                      ],
                                    }),
                                  }),
                                  o("td", {children: l.garantia}),
                                  o("td", {
                                    children: o("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      href: l.pagina,
                                      children: o("span", {className: c.paginalink, children: "P\xE1gina"}),
                                    }),
                                  }),
                                  o("td", {
                                    children:
                                      l.datasheet === "-"
                                        ? o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: "#",
                                            children: o("span", {className: c.pdfbtn_NA, children: "N/A"}),
                                          })
                                        : o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: l.datasheet,
                                            children: o("span", {className: c.pdfbtn, children: "Datasheet"}),
                                          }),
                                  }),
                                  o("td", {
                                    children:
                                      l.guia === "-"
                                        ? o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: "#",
                                            children: o("span", {className: c.pdfbtn_NA, children: "N/A"}),
                                          })
                                        : o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: l.guia,
                                            children: o("span", {className: c.pdfbtn, children: "Guia"}),
                                          }),
                                  }),
                                  o("td", {
                                    children:
                                      l.manual === "-"
                                        ? o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: "#",
                                            children: o("span", {className: c.pdfbtn_NA, children: "N/A"}),
                                          })
                                        : o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: l.manual,
                                            children: o("span", {className: c.pdfbtn, children: "Manual"}),
                                          }),
                                  }),
                                ],
                              }),
                            })
                          ),
                        ],
                      }),
                      " ",
                    ],
                  })
                : null,
            ],
          }),
          k("div", {
            className: c.box_content,
            children: [
              k("div", {
                className: c.header_box_content,
                children: [
                  o("button", {
                    id: "switch",
                    className: f ? c.arrowHide : c.arrowShow,
                    onClick: h,
                    children: o("span", {className: c.title, children: "Switchs"}),
                  }),
                  k("label", {
                    children: [
                      o("i", {className: "fa-solid fa-magnifying-glass"}),
                      o("input", {className: c.searchBarDevices, placeholder: "Pesquise o Equipamento", value: b, onChange: mn}),
                    ],
                  }),
                ],
              }),
              f
                ? o("div", {
                    style: {overflowX: "auto"},
                    children: k("table", {
                      className: c.devicesTable,
                      children: [
                        o(Nf, {}),
                        Mp.filter((l) => {
                          if (l.modelo.toLowerCase().includes(b.toLowerCase())) return l;
                          if (l.gerenciavel.toLowerCase().includes(b.toLowerCase())) return l;
                        }).map((l) =>
                          o("tbody", {
                            children: k("tr", {
                              id: c.swicth_id,
                              children: [
                                o("td", {
                                  children: k("span", {
                                    className: c.tooltip,
                                    children: [
                                      l.modelo,
                                      l.modelo === "SG 2404 PoE L2+" && o("i", {className: "fa-regular fa-circle-question"}),
                                      l.modelo === "SG 2404 PoE L2+" &&
                                        o("span", {className: c.tooltiptext, children: "SG 2404 PoE L2+ (4760062)"}),
                                    ],
                                  }),
                                }),
                                o("td", {
                                  children: o("span", {className: l.modulação === "Fast" ? c.fast : c.giga, children: l.modulação}),
                                }),
                                o("td", {children: l.portas}),
                                o("td", {className: l.gerenciavel === "x" && c.NaoPossui, children: l.gerenciavel}),
                                o("td", {className: l.poe === "x" && c.NaoPossui, children: l.poe}),
                                o("td", {children: l.taxaTransferencia}),
                                o("td", {children: l.backplane}),
                                o("td", {className: l.sfp === "x" && c.NaoPossui, children: l.sfp}),
                                o("td", {className: l.poeExtender === "x" && c.NaoPossui, children: l.poeExtender}),
                                o("td", {className: l.poePorta === "x" && c.NaoPossui, children: l.poePorta}),
                                o("td", {className: l.poeTotal === "x" && c.NaoPossui, children: l.poeTotal}),
                                o("td", {className: l.qos === "x" && c.NaoPossui, children: l.qos}),
                                o("td", {children: l.garantia}),
                                o("td", {
                                  children: k("span", {
                                    className: c.tooltip,
                                    children: [
                                      k("span", {
                                        children: [
                                          l.status === "Phaseout" && o("span", {className: c.status_phaseout, children: l.status}),
                                          l.status === "Suporte" && o("span", {className: c.status_suporte, children: l.status}),
                                        ],
                                      }),
                                      l.status === "Phaseout" && o("span", {className: c.tooltiptext, children: "Apenas email"}),
                                      l.status === "Suporte" && o("span", {className: c.tooltiptext, children: "Fornecemos suporte"}),
                                    ],
                                  }),
                                }),
                                o("td", {
                                  children: o("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: l.pagina,
                                    children: o("span", {className: c.paginalink, children: "P\xE1gina"}),
                                  }),
                                }),
                                o("td", {
                                  children:
                                    l.datasheet === "-"
                                      ? o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: "#",
                                          children: o("span", {className: c.pdfbtn_NA, children: "N/A"}),
                                        })
                                      : o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: l.datasheet,
                                          children: o("span", {className: c.pdfbtn, children: "Datasheet"}),
                                        }),
                                }),
                                o("td", {
                                  children:
                                    l.guia === "-"
                                      ? o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: "#",
                                          children: o("span", {className: c.pdfbtn_NA, children: "N/A"}),
                                        })
                                      : o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: l.guia,
                                          children: o("span", {className: c.pdfbtn, children: "Guia"}),
                                        }),
                                }),
                                o("td", {
                                  children:
                                    l.manual === "-"
                                      ? o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: "#",
                                          children: o("span", {className: c.pdfbtn_NA, children: "N/A"}),
                                        })
                                      : o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: l.manual,
                                          children: o("span", {className: c.pdfbtn, children: "Manual"}),
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
          k("div", {
            className: c.box_content,
            children: [
              o("div", {
                className: c.header_box_content,
                children: o("button", {
                  id: "conversor",
                  className: w ? c.arrowHide : c.arrowShow,
                  onClick: A,
                  children: o("span", {className: c.title, children: "Conversor de M\xEDdia"}),
                }),
              }),
              w
                ? o("div", {
                    style: {overflowX: "auto"},
                    children: k("table", {
                      className: c.devicesTable,
                      children: [
                        o(kf, {}),
                        kp.map((l) =>
                          o("tbody", {
                            children: k("tr", {
                              children: [
                                o("td", {children: o("b", {children: l.modelo})}),
                                o("td", {children: l.conector}),
                                o("td", {className: l.wdm === "x" ? c.NaoPossui : null, children: l.wdm}),
                                o("td", {children: l.distancia}),
                                o("td", {
                                  children: o("span", {className: l.modulação === "Fast" ? c.fast : c.giga, children: l.modulação}),
                                }),
                                o("td", {children: l.fibra}),
                                o("td", {children: l.potencia}),
                                o("td", {children: l.sensibilidade}),
                                o("td", {children: l.garantia}),
                                o("td", {
                                  children: k("span", {
                                    className: c.tooltip,
                                    children: [
                                      k("span", {
                                        children: [
                                          l.status === "Phaseout" && o("span", {className: c.status_phaseout, children: l.status}),
                                          l.status === "Suporte" && o("span", {className: c.status_suporte, children: l.status}),
                                        ],
                                      }),
                                      l.status === "Phaseout" && o("span", {className: c.tooltiptext, children: "Apenas email"}),
                                      l.status === "Suporte" && o("span", {className: c.tooltiptext, children: "Fornecemos suporte"}),
                                    ],
                                  }),
                                }),
                                o("td", {
                                  children: o("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: l.pagina,
                                    children: o("span", {className: c.paginalink, children: "P\xE1gina"}),
                                  }),
                                }),
                                o("td", {
                                  children:
                                    l.datasheet === "-"
                                      ? o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: "#",
                                          children: o("span", {className: c.pdfbtn_NA, children: "N/A"}),
                                        })
                                      : o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: l.datasheet,
                                          children: o("span", {className: c.pdfbtn, children: "Datasheet"}),
                                        }),
                                }),
                                o("td", {
                                  children:
                                    l.guia === "-"
                                      ? o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: "#",
                                          children: o("span", {className: c.pdfbtn_NA, children: "N/A"}),
                                        })
                                      : o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: l.guia,
                                          children: o("span", {className: c.pdfbtn, children: "Guia"}),
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
          k("div", {
            className: c.box_content,
            children: [
              o("div", {
                className: c.header_box_content,
                children: o("button", {
                  id: "sfp",
                  className: E ? c.arrowHide : c.arrowShow,
                  onClick: V,
                  children: o("span", {className: c.title, children: "M\xF3dulo SFP"}),
                }),
              }),
              E
                ? o("div", {
                    style: {overflowX: "auto"},
                    children: k("table", {
                      className: c.devicesTable,
                      children: [
                        o(Pf, {}),
                        Pp.map((l) => {
                          if (l.linha === "gbic")
                            return o("tbody", {
                              children: k("tr", {
                                children: [
                                  o("td", {children: o("b", {children: l.modelo})}),
                                  o("td", {children: l.tipoConector}),
                                  k("td", {
                                    children: [
                                      l.modulo === "SFP+" && o("span", {className: c.variado1, children: "SFP+"}),
                                      l.modulo === "SFP" && o("span", {className: c.variado2, children: "SFP"}),
                                      l.modulo === "Epon" && o("span", {className: c.variado3, children: "EPON"}),
                                      l.modulo === "Gpon" && o("span", {className: c.fast, children: "GPON"}),
                                      l.modulo === "XFP" && o("span", {className: c.giga, children: "XFP"}),
                                    ],
                                  }),
                                  o("td", {className: l.wdm === "x" ? c.NaoPossui : null, children: l.wdm}),
                                  o("td", {
                                    children: k("span", {
                                      className: c.tooltip,
                                      children: [
                                        l.distancia,
                                        " ",
                                        l.fibra === "Multimodo" && o("i", {className: "fa-regular fa-circle-question"}),
                                        l.fibra === "Multimodo" &&
                                          o("span", {className: c.tooltiptext, children: "62,5 / 125 \u03BCm at\xE9 275 mts"}),
                                      ],
                                    }),
                                  }),
                                  o("td", {
                                    children: o("span", {className: l.modulação === "Fast" ? c.fast : c.giga, children: l.modulação}),
                                  }),
                                  o("td", {children: l.fibra}),
                                  o("td", {children: l.potencia}),
                                  o("td", {children: l.sensibilidade}),
                                  o("td", {children: l.garantia}),
                                  o("td", {
                                    children: k("span", {
                                      className: c.tooltip,
                                      children: [
                                        k("span", {
                                          children: [
                                            l.status === "Phaseout" && o("span", {className: c.status_phaseout, children: l.status}),
                                            l.status === "Suporte" && o("span", {className: c.status_suporte, children: l.status}),
                                          ],
                                        }),
                                        l.status === "Phaseout" && o("span", {className: c.tooltiptext, children: "Apenas email"}),
                                        l.status === "Suporte" && o("span", {className: c.tooltiptext, children: "Fornecemos suporte"}),
                                      ],
                                    }),
                                  }),
                                  o("td", {
                                    children: o("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      href: l.pagina,
                                      children: o("span", {className: c.paginalink, children: "P\xE1gina"}),
                                    }),
                                  }),
                                  o("td", {
                                    children: o("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      href: l.datasheet,
                                      children: o("span", {className: c.pdfbtn, children: "Datasheet"}),
                                    }),
                                  }),
                                  o("td", {
                                    children: o("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      href: l.guia,
                                      children: o("span", {className: c.pdfbtn, children: "Guia"}),
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
          k("div", {
            className: c.box_content,
            children: [
              o("div", {
                className: c.header_box_content,
                children: o("button", {
                  id: "onu",
                  className: T ? c.arrowHide : c.arrowShow,
                  onClick: wt,
                  children: o("span", {className: c.title, children: " ONUs/ONTs"}),
                }),
              }),
              T
                ? o("div", {
                    style: {overflowX: "auto"},
                    children: k("table", {
                      className: c.devicesTable,
                      children: [
                        o(Mf, {}),
                        Ep.map((l) => {
                          if (l.linha === "onu/ont")
                            return o("tbody", {
                              children: k("tr", {
                                children: [
                                  o("td", {children: o("b", {children: l.modelo})}),
                                  o("td", {
                                    children: o("span", {className: l.modulação === "Fast" ? c.fast : c.giga, children: l.modulação}),
                                  }),
                                  o("td", {className: l.fxs === "x" ? c.NaoPossui : null, children: l.fxs}),
                                  k("td", {
                                    children: [
                                      l.tipo === "EPON/GPON" && o("span", {className: c.variado1, children: l.tipo}),
                                      l.tipo === "GPON" && o("span", {className: c.variado2, children: l.tipo}),
                                    ],
                                  }),
                                  o("td", {children: l.sensibilidade}),
                                  o("td", {className: l.cobertura === "x" ? c.NaoPossui : null, children: l.cobertura}),
                                  o("td", {className: l.clientesSimultaneos === "x" ? c.NaoPossui : null, children: l.clientesSimultaneos}),
                                  o("td", {className: l.transmissao2ghz === "x" ? c.NaoPossui : null, children: l.transmissao2ghz}),
                                  o("td", {className: l.transmissao5ghz === "x" ? c.NaoPossui : null, children: l.transmissao5ghz}),
                                  o("td", {className: l.ssid === "x" ? c.NaoPossui : null, children: l.ssid}),
                                  o("td", {className: l.tr069 === "x" ? c.NaoPossui : null, children: l.tr069}),
                                  o("td", {className: l.customize === "x" ? c.NaoPossui : null, children: l.customize}),
                                  o("td", {className: l.remotize === "x" ? c.NaoPossui : null, children: l.remotize}),
                                  o("td", {children: l.garantia}),
                                  o("td", {
                                    children: k("span", {
                                      className: c.tooltip,
                                      children: [
                                        k("span", {
                                          children: [
                                            l.status === "Phaseout" && o("span", {className: c.status_phaseout, children: l.status}),
                                            l.status === "Suporte" && o("span", {className: c.status_suporte, children: l.status}),
                                          ],
                                        }),
                                        l.status === "Phaseout" && o("span", {className: c.tooltiptext, children: "Apenas email"}),
                                        l.status === "Suporte" && o("span", {className: c.tooltiptext, children: "Fornecemos suporte"}),
                                      ],
                                    }),
                                  }),
                                  o("td", {
                                    children: o("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      href: l.pagina,
                                      children: o("span", {className: c.paginalink, children: "P\xE1gina"}),
                                    }),
                                  }),
                                  o("td", {
                                    children:
                                      l.datasheet === "-"
                                        ? o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: "#",
                                            children: o("span", {className: c.pdfbtn_NA, children: "N/A"}),
                                          })
                                        : o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: l.datasheet,
                                            children: o("span", {className: c.pdfbtn, children: "Datasheet"}),
                                          }),
                                  }),
                                  o("td", {
                                    children:
                                      l.guia === "-"
                                        ? o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: "#",
                                            children: o("span", {className: c.pdfbtn_NA, children: "N/A"}),
                                          })
                                        : o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: l.guia,
                                            children: o("span", {className: c.pdfbtn, children: "Guia"}),
                                          }),
                                  }),
                                  o("td", {
                                    children:
                                      l.manual === "-"
                                        ? o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: "#",
                                            children: o("span", {className: c.pdfbtn_NA, children: "N/A"}),
                                          })
                                        : o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: l.manual,
                                            children: o("span", {className: c.pdfbtn, children: "Manual"}),
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
Zr.createRoot(document.getElementById("root")).render(o(_e.StrictMode, {children: o(Af, {})}));
