/*!
 * GSAP 3.7.0
 * https://greensock.com
 *
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
    "use strict";
    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype),
        (t.prototype.constructor = t).__proto__ = e
    }
    function _assertThisInitialized(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function o(t) {
        return "string" == typeof t
    }
    function p(t) {
        return "function" == typeof t
    }
    function q(t) {
        return "number" == typeof t
    }
    function r(t) {
        return void 0 === t
    }
    function s(t) {
        return "object" == typeof t
    }
    function t(t) {
        return !1 !== t
    }
    function u() {
        return "undefined" != typeof window
    }
    function v(t) {
        return p(t) || o(t)
    }
    function M(t) {
        return (h = mt(t, ot)) && oe
    }
    function N(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }
    function O(t, e) {
        return !e && console.warn(t)
    }
    function P(t, e) {
        return t && (ot[t] = e) && h && (h[t] = e) || ot
    }
    function Q() {
        return 0
    }
    function $(t) {
        var e, r, i = t[0];
        if (s(i) || p(i) || (t = [t]),
        !(e = (i._gsap || {}).harness)) {
            for (r = pt.length; r-- && !pt[r].targetTest(i); )
                ;
            e = pt[r]
        }
        for (r = t.length; r--; )
            t[r] && (t[r]._gsap || (t[r]._gsap = new Lt(t[r],e))) || t.splice(r, 1);
        return t
    }
    function _(t) {
        return t._gsap || $(xt(t))[0]._gsap
    }
    function aa(t, e, i) {
        return (i = t[e]) && p(i) ? t[e]() : r(i) && t.getAttribute && t.getAttribute(e) || i
    }
    function ba(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }
    function ca(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }
    function da(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
            ;
        return i < r
    }
    function ea() {
        var t, e, r = ht.length, i = ht.slice(0);
        for (lt = {},
        t = ht.length = 0; t < r; t++)
            (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }
    function fa(t, e, r, i) {
        ht.length && ea(),
        t.render(e, r, i),
        ht.length && ea()
    }
    function ga(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(at).length < 2 ? e : o(t) ? t.trim() : t
    }
    function ha(t) {
        return t
    }
    function ia(t, e) {
        for (var r in e)
            r in t || (t[r] = e[r]);
        return t
    }
    function ja(t, e) {
        for (var r in e)
            r in t || "duration" === r || "ease" === r || (t[r] = e[r])
    }
    function la(t, e) {
        for (var r in e)
            "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = s(e[r]) ? la(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t
    }
    function ma(t, e) {
        var r, i = {};
        for (r in t)
            r in e || (i[r] = t[r]);
        return i
    }
    function na(e) {
        var r = e.parent || R
          , i = e.keyframes ? ja : ia;
        if (t(e.inherit))
            for (; r; )
                i(e, r.vars.defaults),
                r = r.parent || r._dp;
        return e
    }
    function qa(t, e, r, i) {
        void 0 === r && (r = "_first"),
        void 0 === i && (i = "_last");
        var n = e._prev
          , a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a),
        a ? a._prev = n : t[i] === e && (t[i] = n),
        e._next = e._prev = e.parent = null
    }
    function ra(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t),
        t._act = 0
    }
    function sa(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; )
                r._dirty = 1,
                r = r.parent;
        return t
    }
    function va(t) {
        return t._repeat ? gt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }
    function xa(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }
    function ya(t) {
        return t._end = ca(t._start + (t._tDur / Math.abs(t._ts || t._rts || U) || 0))
    }
    function za(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = ca(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
        ya(t),
        r._dirty || sa(r, t)),
        t
    }
    function Aa(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = xa(t.rawTime(), e),
        (!e._dur || Tt(0, e.totalDuration(), r) - e._tTime > U) && e.render(r, !0)),
        sa(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp; )
                    0 <= r.rawTime() && r.totalTime(r._tTime),
                    r = r._dp;
            t._zTime = -U
        }
    }
    function Ba(t, e, r, i) {
        return e.parent && ra(e),
        e._start = ca((q(r) ? r : r || t !== R ? bt(t, r, e) : t._time) + e._delay),
        e._end = ca(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
        function _addLinkedListItem(t, e, r, i, n) {
            void 0 === r && (r = "_first"),
            void 0 === i && (i = "_last");
            var a, s = t[i];
            if (n)
                for (a = e[n]; s && s[n] > a; )
                    s = s._prev;
            s ? (e._next = s._next,
            s._next = e) : (e._next = t[r],
            t[r] = e),
            e._next ? e._next._prev = e : t[i] = e,
            e._prev = s,
            e.parent = e._dp = t
        }(t, e, "_first", "_last", t._sort ? "_start" : 0),
        vt(e) || (t._recent = e),
        i || Aa(t, e),
        t
    }
    function Ca(t, e) {
        return (ot.ScrollTrigger || N("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
    }
    function Da(t, e, r, i) {
        return Ut(t, e),
        t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Ct.frame ? (ht.push(t),
        t._lazy = [e, i],
        1) : void 0 : 1
    }
    function Ia(t, e, r, i) {
        var n = t._repeat
          , a = ca(e) || 0
          , s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur),
        t._dur = a,
        t._tDur = n ? n < 0 ? 1e10 : ca(a * (n + 1) + t._rDelay * n) : a,
        s && !i ? za(t, t._tTime = t._tDur * s) : t.parent && ya(t),
        r || sa(t.parent, t),
        t
    }
    function Ja(t) {
        return t instanceof qt ? sa(t) : Ia(t, t._dur)
    }
    function Ma(e, r, i) {
        var n, a, s = q(r[1]), o = (s ? 2 : 1) + (e < 2 ? 0 : 1), u = r[o];
        if (s && (u.duration = r[1]),
        u.parent = i,
        e) {
            for (n = u,
            a = i; a && !("immediateRender"in n); )
                n = a.vars.defaults || {},
                a = t(a.vars.inherit) && a.parent;
            u.immediateRender = t(n.immediateRender),
            e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1]
        }
        return new Qt(r[0],u,r[1 + o])
    }
    function Na(t, e) {
        return t || 0 === t ? e(t) : e
    }
    function Pa(t) {
        if ("string" != typeof t)
            return "";
        var e = st.exec(t);
        return e ? t.substr(e.index + e[0].length) : ""
    }
    function Sa(t, e) {
        return t && s(t) && "length"in t && (!e && !t.length || t.length - 1 in t && s(t[0])) && !t.nodeType && t !== i
    }
    function Wa(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }
    function Xa(t) {
        if (p(t))
            return t;
        var _ = s(t) ? t : {
            each: t
        }
          , m = Ft(_.ease)
          , g = _.from || 0
          , v = parseFloat(_.base) || 0
          , y = {}
          , e = 0 < g && g < 1
          , b = isNaN(g) || e
          , T = _.axis
          , w = g
          , x = g;
        return o(g) ? w = x = {
            center: .5,
            edges: .5,
            end: 1
        }[g] || 0 : !e && b && (w = g[0],
        x = g[1]),
        function(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d = (r || _).length, c = y[d];
            if (!c) {
                if (!(f = "auto" === _.grid ? 0 : (_.grid || [1, X])[1])) {
                    for (h = -X; h < (h = r[f++].getBoundingClientRect().left) && f < d; )
                        ;
                    f--
                }
                for (c = y[d] = [],
                i = b ? Math.min(f, d) * w - .5 : g % f,
                n = b ? d * x / f - .5 : g / f | 0,
                l = X,
                u = h = 0; u < d; u++)
                    a = u % f - i,
                    s = n - (u / f | 0),
                    c[u] = o = T ? Math.abs("y" === T ? s : a) : G(a * a + s * s),
                    h < o && (h = o),
                    o < l && (l = o);
                "random" === g && Wa(c),
                c.max = h - l,
                c.min = l,
                c.v = d = (parseFloat(_.amount) || parseFloat(_.each) * (d < f ? d - 1 : T ? "y" === T ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === g ? -1 : 1),
                c.b = d < 0 ? v - d : v,
                c.u = Pa(_.amount || _.each) || 0,
                m = m && d < 0 ? Et(m) : m
            }
            return d = (c[t] - c.min) / c.max || 0,
            ca(c.b + (m ? m(d) : d) * c.v) + c.u
        }
    }
    function Ya(r) {
        var i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1;
        return function(t) {
            var e = Math.round(parseFloat(t) / r) * r * i;
            return (e - e % 1) / i + (q(t) ? 0 : Pa(t))
        }
    }
    function Za(u, t) {
        var h, l, e = H(u);
        return !e && s(u) && (h = e = u.radius || X,
        u.values ? (u = xt(u.values),
        (l = !q(u[0])) && (h *= h)) : u = Ya(u.increment)),
        Na(t, e ? p(u) ? function(t) {
            return l = u(t),
            Math.abs(l - t) <= h ? l : t
        }
        : function(t) {
            for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = X, s = 0, o = u.length; o--; )
                (e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e,
                s = o);
            return s = !h || a <= h ? u[s] : t,
            l || s === t || q(t) ? s : s + Pa(t)
        }
        : Ya(u))
    }
    function $a(t, e, r, i) {
        return Na(H(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return H(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
        })
    }
    function cb(e, r, t) {
        return Na(t, function(t) {
            return e[~~r(t)]
        })
    }
    function fb(t) {
        for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
            i = t.indexOf(")", e),
            n = "[" === t.charAt(e + 7),
            r = t.substr(e + 7, i - e - 7).match(n ? at : tt),
            s += t.substr(a, e - a) + $a(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5),
            a = i + 1;
        return s + t.substr(a, t.length - a)
    }
    function ib(t, e, r) {
        var i, n, a, s = t.labels, o = X;
        for (i in s)
            (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i,
            o = n);
        return a
    }
    function kb(t) {
        return ra(t),
        t.scrollTrigger && t.scrollTrigger.kill(!1),
        t.progress() < 1 && Pt(t, "onInterrupt"),
        t
    }
    function pb(t, e, r) {
        return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * kt + .5 | 0
    }
    function qb(t, e, r) {
        var i, n, a, s, o, u, h, l, f, d, c = t ? q(t) ? [t >> 16, t >> 8 & kt, t & kt] : 0 : Mt.black;
        if (!c) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
            Mt[t])
                c = Mt[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                9 === t.length)
                    return [(c = parseInt(t.substr(1, 6), 16)) >> 16, c >> 8 & kt, c & kt, parseInt(t.substr(7), 16) / 255];
                c = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & kt, t & kt]
            } else if ("hsl" === t.substr(0, 3))
                if (c = d = t.match(tt),
                e) {
                    if (~t.indexOf("="))
                        return c = t.match(et),
                        r && c.length < 4 && (c[3] = 1),
                        c
                } else
                    s = +c[0] % 360 / 360,
                    o = c[1] / 100,
                    i = 2 * (u = c[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o),
                    3 < c.length && (c[3] *= 1),
                    c[0] = pb(s + 1 / 3, i, n),
                    c[1] = pb(s, i, n),
                    c[2] = pb(s - 1 / 3, i, n);
            else
                c = t.match(tt) || Mt.transparent;
            c = c.map(Number)
        }
        return e && !d && (i = c[0] / kt,
        n = c[1] / kt,
        a = c[2] / kt,
        u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2,
        h === l ? s = o = 0 : (f = h - l,
        o = .5 < u ? f / (2 - h - l) : f / (h + l),
        s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4,
        s *= 60),
        c[0] = ~~(s + .5),
        c[1] = ~~(100 * o + .5),
        c[2] = ~~(100 * u + .5)),
        r && c.length < 4 && (c[3] = 1),
        c
    }
    function rb(t) {
        var r = []
          , i = []
          , n = -1;
        return t.split(At).forEach(function(t) {
            var e = t.match(rt) || [];
            r.push.apply(r, e),
            i.push(n += e.length + 1)
        }),
        r.c = i,
        r
    }
    function sb(t, e, r) {
        var i, n, a, s, o = "", u = (t + o).match(At), h = e ? "hsla(" : "rgba(", l = 0;
        if (!u)
            return t;
        if (u = u.map(function(t) {
            return (t = qb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }),
        r && (a = rb(t),
        (i = r.c).join(o) !== a.c.join(o)))
            for (s = (n = t.replace(At, "1").split(rt)).length - 1; l < s; l++)
                o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n)
            for (s = (n = t.split(At)).length - 1; l < s; l++)
                o += n[l] + u[l];
        return o + n[s]
    }
    function vb(t) {
        var e, r = t.join(" ");
        if (At.lastIndex = 0,
        At.test(r))
            return e = St.test(r),
            t[1] = sb(t[1], e),
            t[0] = sb(t[0], e, rb(t[1])),
            !0
    }
    function Eb(t) {
        var e = (t + "").split("(")
          , r = zt[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
            for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++)
                r = a[o],
                e = o !== u - 1 ? r.lastIndexOf(",") : r.length,
                i = r.substr(0, e),
                n[s] = isNaN(i) ? i.replace(Bt, "").trim() : +i,
                s = r.substr(e + 1).trim();
            return n
        }(e[1])] : function _valueInParentheses(t) {
            var e = t.indexOf("(") + 1
              , r = t.indexOf(")")
              , i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
        }(t).split(",").map(ga)) : zt._CE && It.test(t) ? zt._CE("", t) : r
    }
    function Gb(t, e) {
        for (var r, i = t._first; i; )
            i instanceof qt ? Gb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Gb(i.timeline, e) : (r = i._ease,
            i._ease = i._yEase,
            i._yEase = r,
            i._yoyo = e)),
            i = i._next
    }
    function Ib(t, e, r, i) {
        void 0 === r && (r = function easeOut(t) {
            return 1 - e(1 - t)
        }
        ),
        void 0 === i && (i = function easeInOut(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        }
        );
        var n, a = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return ba(t, function(t) {
            for (var e in zt[t] = ot[t] = a,
            zt[n = t.toLowerCase()] = r,
            a)
                zt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = zt[t + "." + e] = a[e]
        }),
        a
    }
    function Jb(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }
    function Kb(r, t, e) {
        function Ol(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * J((t - a) * n) + 1
        }
        var i = 1 <= t ? t : 1
          , n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1)
          , a = n / V * (Math.asin(1 / i) || 0)
          , s = "out" === r ? Ol : "in" === r ? function(t) {
            return 1 - Ol(1 - t)
        }
        : Jb(Ol);
        return n = V / n,
        s.config = function(t, e) {
            return Kb(r, t, e)
        }
        ,
        s
    }
    function Lb(e, r) {
        function Wl(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? Wl : "in" === e ? function(t) {
            return 1 - Wl(1 - t)
        }
        : Jb(Wl);
        return t.config = function(t) {
            return Lb(e, t)
        }
        ,
        t
    }
    var F, R, i, n, a, h, l, f, d, c, m, g, y, b, T, w, x, k, A, S, C, D, z, I, B, E, Y = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, L = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, X = 1e8, U = 1 / X, V = 2 * Math.PI, j = V / 4, W = 0, G = Math.sqrt, K = Math.cos, J = Math.sin, Z = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
    , H = Array.isArray, tt = /(?:-?\.?\d|\.)+/gi, et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, nt = /[+-]=-?[.\d]+/, at = /[^,'"\[\]\s]+/gi, st = /[\d.+\-=]+(?:e[-+]\d*)*/i, ot = {}, ut = {}, ht = [], lt = {}, ft = {}, dt = {}, ct = 30, pt = [], _t = "", mt = function _merge(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }, gt = function _animationCycle(t, e) {
        var r = Math.floor(t /= e);
        return t && r === t ? r - 1 : r
    }, vt = function _isFromOrFromStart(t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e
    }, yt = {
        _start: 0,
        endTime: Q,
        totalDuration: Q
    }, bt = function _parsePosition(t, e, r) {
        var i, n, a, s = t.labels, u = t._recent || yt, h = t.duration() >= X ? u.endTime(!1) : t._dur;
        return o(e) && (isNaN(e) || e in s) ? (n = e.charAt(0),
        a = "%" === e.substr(-1),
        i = e.indexOf("="),
        "<" === n || ">" === n ? (0 <= i && (e = e.replace(/=/, "")),
        ("<" === n ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (a ? (i < 0 ? u : r).totalDuration() / 100 : 1)) : i < 0 ? (e in s || (s[e] = h),
        s[e]) : (n = parseFloat(e.charAt(i - 1) + e.substr(i + 1)),
        a && r && (n = n / 100 * (H(r) ? r[0] : r).totalDuration()),
        1 < i ? _parsePosition(t, e.substr(0, i - 1), r) + n : h + n)) : null == e ? h : +e
    }, Tt = function _clamp(t, e, r) {
        return r < t ? t : e < r ? e : r
    }, wt = [].slice, xt = function toArray(t, e, r) {
        return !o(t) || r || !n && Dt() ? H(t) ? function _flatten(t, e, r) {
            return void 0 === r && (r = []),
            t.forEach(function(t) {
                return o(t) && !e || Sa(t, 1) ? r.push.apply(r, xt(t)) : r.push(t)
            }) || r
        }(t, r) : Sa(t) ? wt.call(t, 0) : t ? [t] : [] : wt.call((e || a).querySelectorAll(t), 0)
    }, Ot = function mapRange(e, t, r, i, n) {
        var a = t - e
          , s = i - r;
        return Na(n, function(t) {
            return r + ((t - e) / a * s || 0)
        })
    }, Pt = function _callback(t, e, r) {
        var i, n, a = t.vars, s = a[e];
        if (s)
            return i = a[e + "Params"],
            n = a.callbackScope || t,
            r && ht.length && ea(),
            i ? s.apply(n, i) : s.call(n)
    }, kt = 255, Mt = {
        aqua: [0, kt, kt],
        lime: [0, kt, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, kt],
        navy: [0, 0, 128],
        white: [kt, kt, kt],
        olive: [128, 128, 0],
        yellow: [kt, kt, 0],
        orange: [kt, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [kt, 0, 0],
        pink: [kt, 192, 203],
        cyan: [0, kt, kt],
        transparent: [kt, kt, kt, 0]
    }, At = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in Mt)
            e += "|" + t + "\\b";
        return new RegExp(e + ")","gi")
    }(), St = /hsl[a]?\(/, Ct = (x = Date.now,
    k = 500,
    A = 33,
    S = x(),
    C = S,
    z = D = 1e3 / 240,
    b = {
        time: 0,
        frame: 0,
        tick: function tick() {
            Kk(!0)
        },
        deltaRatio: function deltaRatio(t) {
            return T / (1e3 / (t || 60))
        },
        wake: function wake() {
            l && (!n && u() && (i = n = window,
            a = i.document || {},
            ot.gsap = oe,
            (i.gsapVersions || (i.gsapVersions = [])).push(oe.version),
            M(h || i.GreenSockGlobals || !i.gsap && i || {}),
            y = i.requestAnimationFrame),
            m && b.sleep(),
            g = y || function(t) {
                return setTimeout(t, z - 1e3 * b.time + 1 | 0)
            }
            ,
            c = 1,
            Kk(2))
        },
        sleep: function sleep() {
            (y ? i.cancelAnimationFrame : clearTimeout)(m),
            c = 0,
            g = Q
        },
        lagSmoothing: function lagSmoothing(t, e) {
            k = t || 1e8,
            A = Math.min(e, k, 0)
        },
        fps: function fps(t) {
            D = 1e3 / (t || 240),
            z = 1e3 * b.time + D
        },
        add: function add(t) {
            I.indexOf(t) < 0 && I.push(t),
            Dt()
        },
        remove: function remove(t) {
            var e;
            ~(e = I.indexOf(t)) && I.splice(e, 1) && e <= w && w--
        },
        _listeners: I = []
    }), Dt = function _wake() {
        return !c && Ct.wake()
    }, zt = {}, It = /^[\d.\-M][\d.\-,\s]/, Bt = /["']/g, Et = function _invertEase(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }, Ft = function _parseEase(t, e) {
        return t && (p(t) ? t : zt[t] || Eb(t)) || e
    };
    function Kk(t) {
        var e, r, i, n, a = x() - C, s = !0 === t;
        if (k < a && (S += a - A),
        (0 < (e = (i = (C += a) - S) - z) || s) && (n = ++b.frame,
        T = i - 1e3 * b.time,
        b.time = i /= 1e3,
        z += e + (D <= e ? 4 : D - e),
        r = 1),
        s || (m = g(Kk)),
        r)
            for (w = 0; w < I.length; w++)
                I[w](i, T, n, t)
    }
    function lm(t) {
        return t < E ? B * t * t : t < .7272727272727273 ? B * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? B * (t -= 2.25 / 2.75) * t + .9375 : B * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    ba("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Ib(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        }
        : function(t) {
            return t
        }
        , function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }),
    zt.Linear.easeNone = zt.none = zt.Linear.easeIn,
    Ib("Elastic", Kb("in"), Kb("out"), Kb()),
    B = 7.5625,
    E = 1 / 2.75,
    Ib("Bounce", function(t) {
        return 1 - lm(1 - t)
    }, lm),
    Ib("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }),
    Ib("Circ", function(t) {
        return -(G(1 - t * t) - 1)
    }),
    Ib("Sine", function(t) {
        return 1 === t ? 1 : 1 - K(t * j)
    }),
    Ib("Back", Lb("in"), Lb("out"), Lb()),
    zt.SteppedEase = zt.steps = ot.SteppedEase = {
        config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t
              , i = t + (e ? 0 : 1)
              , n = e ? 1 : 0;
            return function(t) {
                return ((i * Tt(0, .99999999, t) | 0) + n) * r
            }
        }
    },
    L.ease = zt["quad.out"],
    ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return _t += t + "," + t + "Params,"
    });
    var Rt, Lt = function GSCache(t, e) {
        this.id = W++,
        (t._gsap = this).target = t,
        this.harness = e,
        this.get = e ? e.get : aa,
        this.set = e ? e.getSetter : Jt
    }, Nt = ((Rt = Animation.prototype).delay = function delay(t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
        this._delay = t,
        this) : this._delay
    }
    ,
    Rt.duration = function duration(t) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
    }
    ,
    Rt.totalDuration = function totalDuration(t) {
        return arguments.length ? (this._dirty = 0,
        Ia(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    Rt.totalTime = function totalTime(t, e) {
        if (Dt(),
        !arguments.length)
            return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
            for (za(this, t),
            !r._dp || r.parent || Aa(r, this); r.parent; )
                r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0),
                r = r.parent;
            !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ba(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === U || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
        fa(this, t, e)),
        this
    }
    ,
    Rt.time = function time(t, e) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + va(this)) % this._dur || (t ? this._dur : 0), e) : this._time
    }
    ,
    Rt.totalProgress = function totalProgress(t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }
    ,
    Rt.progress = function progress(t, e) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + va(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }
    ,
    Rt.iteration = function iteration(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? gt(this._tTime, r) + 1 : 1
    }
    ,
    Rt.timeScale = function timeScale(t) {
        if (!arguments.length)
            return this._rts === -U ? 0 : this._rts;
        if (this._rts === t)
            return this;
        var e = this.parent && this._ts ? xa(this.parent._time, this) : this._tTime;
        return this._rts = +t || 0,
        this._ts = this._ps || t === -U ? 0 : this._rts,
        function _recacheAncestors(t) {
            for (var e = t.parent; e && e.parent; )
                e._dirty = 1,
                e.totalDuration(),
                e = e.parent;
            return t
        }(this.totalTime(Tt(-this._delay, this._tDur, e), !0))
    }
    ,
    Rt.paused = function paused(t) {
        return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Dt(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= U) && Math.abs(this._zTime) !== U))),
        this) : this._ps
    }
    ,
    Rt.startTime = function startTime(t) {
        if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return !e || !e._sort && this.parent || Ba(e, this, t - this._delay),
            this
        }
        return this._start
    }
    ,
    Rt.endTime = function endTime(e) {
        return this._start + (t(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
    }
    ,
    Rt.rawTime = function rawTime(t) {
        var e = this.parent || this._dp;
        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? xa(e.rawTime(t), this) : this._tTime : this._tTime
    }
    ,
    Rt.globalTime = function globalTime(t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
            r = e._start + r / (e._ts || 1),
            e = e._dp;
        return r
    }
    ,
    Rt.repeat = function repeat(t) {
        return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
        Ja(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
    }
    ,
    Rt.repeatDelay = function repeatDelay(t) {
        return arguments.length ? (this._rDelay = t,
        Ja(this)) : this._rDelay
    }
    ,
    Rt.yoyo = function yoyo(t) {
        return arguments.length ? (this._yoyo = t,
        this) : this._yoyo
    }
    ,
    Rt.seek = function seek(e, r) {
        return this.totalTime(bt(this, e), t(r))
    }
    ,
    Rt.restart = function restart(e, r) {
        return this.play().totalTime(e ? -this._delay : 0, t(r))
    }
    ,
    Rt.play = function play(t, e) {
        return null != t && this.seek(t, e),
        this.reversed(!1).paused(!1)
    }
    ,
    Rt.reverse = function reverse(t, e) {
        return null != t && this.seek(t || this.totalDuration(), e),
        this.reversed(!0).paused(!1)
    }
    ,
    Rt.pause = function pause(t, e) {
        return null != t && this.seek(t, e),
        this.paused(!0)
    }
    ,
    Rt.resume = function resume() {
        return this.paused(!1)
    }
    ,
    Rt.reversed = function reversed(t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -U : 0)),
        this) : this._rts < 0
    }
    ,
    Rt.invalidate = function invalidate() {
        return this._initted = this._act = 0,
        this._zTime = -U,
        this
    }
    ,
    Rt.isActive = function isActive() {
        var t, e = this.parent || this._dp, r = this._start;
        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - U))
    }
    ,
    Rt.eventCallback = function eventCallback(t, e, r) {
        var i = this.vars;
        return 1 < arguments.length ? (e ? (i[t] = e,
        r && (i[t + "Params"] = r),
        "onUpdate" === t && (this._onUpdate = e)) : delete i[t],
        this) : i[t]
    }
    ,
    Rt.then = function then(t) {
        var i = this;
        return new Promise(function(e) {
            function Bn() {
                var t = i.then;
                i.then = null,
                p(r) && (r = r(i)) && (r.then || r === i) && (i.then = t),
                e(r),
                i.then = t
            }
            var r = p(t) ? t : ha;
            i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Bn() : i._prom = Bn
        }
        )
    }
    ,
    Rt.kill = function kill() {
        kb(this)
    }
    ,
    Animation);
    function Animation(t) {
        this.vars = t,
        this._delay = +t.delay || 0,
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
        this._yoyo = !!t.yoyo || !!t.yoyoEase),
        this._ts = 1,
        Ia(this, +t.duration, 1, 1),
        this.data = t.data,
        c || Ct.wake()
    }
    ia(Nt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -U,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var qt = function(n) {
        function Timeline(e, r) {
            var i;
            return void 0 === e && (e = {}),
            (i = n.call(this, e) || this).labels = {},
            i.smoothChildTiming = !!e.smoothChildTiming,
            i.autoRemoveChildren = !!e.autoRemoveChildren,
            i._sort = t(e.sortChildren),
            R && Ba(e.parent || R, _assertThisInitialized(i), r),
            e.reversed && i.reverse(),
            e.paused && i.paused(!0),
            e.scrollTrigger && Ca(_assertThisInitialized(i), e.scrollTrigger),
            i
        }
        _inheritsLoose(Timeline, n);
        var e = Timeline.prototype;
        return e.to = function to(t, e, r) {
            return Ma(0, arguments, this),
            this
        }
        ,
        e.from = function from(t, e, r) {
            return Ma(1, arguments, this),
            this
        }
        ,
        e.fromTo = function fromTo(t, e, r, i) {
            return Ma(2, arguments, this),
            this
        }
        ,
        e.set = function set(t, e, r) {
            return e.duration = 0,
            e.parent = this,
            na(e).repeatDelay || (e.repeat = 0),
            e.immediateRender = !!e.immediateRender,
            new Qt(t,e,bt(this, r),1),
            this
        }
        ,
        e.call = function call(t, e, r) {
            return Ba(this, Qt.delayedCall(0, t, e), r)
        }
        ,
        e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
            return r.duration = e,
            r.stagger = r.stagger || i,
            r.onComplete = a,
            r.onCompleteParams = s,
            r.parent = this,
            new Qt(t,r,bt(this, n)),
            this
        }
        ,
        e.staggerFrom = function staggerFrom(e, r, i, n, a, s, o) {
            return i.runBackwards = 1,
            na(i).immediateRender = t(i.immediateRender),
            this.staggerTo(e, r, i, n, a, s, o)
        }
        ,
        e.staggerFromTo = function staggerFromTo(e, r, i, n, a, s, o, u) {
            return n.startAt = i,
            na(n).immediateRender = t(n.immediateRender),
            this.staggerTo(e, r, n, a, s, o, u)
        }
        ,
        e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d, c, p, _ = this._time, m = this._dirty ? this.totalDuration() : this._tDur, g = this._dur, v = this !== R && m - U < t && 0 <= t ? m : t < U ? 0 : t, y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (v !== this._tTime || r || y) {
                if (_ !== this._time && g && (v += this._time - _,
                t += this._time - _),
                i = v,
                f = this._start,
                u = !(l = this._ts),
                y && (g || (_ = this._zTime),
                !t && e || (this._zTime = t)),
                this._repeat) {
                    if (c = this._yoyo,
                    o = g + this._rDelay,
                    this._repeat < -1 && t < 0)
                        return this.totalTime(100 * o + t, e, r);
                    if (i = ca(v % o),
                    v === m ? (s = this._repeat,
                    i = g) : ((s = ~~(v / o)) && s === v / o && (i = g,
                    s--),
                    g < i && (i = g)),
                    d = gt(this._tTime, o),
                    !_ && this._tTime && d !== s && (d = s),
                    c && 1 & s && (i = g - i,
                    p = 1),
                    s !== d && !this._lock) {
                        var b = c && 1 & d
                          , T = b === (c && 1 & s);
                        if (s < d && (b = !b),
                        _ = b ? 0 : g,
                        this._lock = 1,
                        this.render(_ || (p ? 0 : ca(s * o)), e, !g)._lock = 0,
                        this._tTime = v,
                        !e && this.parent && Pt(this, "onRepeat"),
                        this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
                        _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                            return this;
                        if (g = this._dur,
                        m = this._tDur,
                        T && (this._lock = 2,
                        _ = b ? g : -1e-4,
                        this.render(_, !0),
                        this.vars.repeatRefresh && !p && this.invalidate()),
                        this._lock = 0,
                        !this._ts && !u)
                            return this;
                        Gb(this, p)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                    var i;
                    if (e < r)
                        for (i = t._first; i && i._start <= r; ) {
                            if (!i._dur && "isPause" === i.data && i._start > e)
                                return i;
                            i = i._next
                        }
                    else
                        for (i = t._last; i && i._start >= r; ) {
                            if (!i._dur && "isPause" === i.data && i._start < e)
                                return i;
                            i = i._prev
                        }
                }(this, ca(_), ca(i))) && (v -= i - (i = h._start)),
                this._tTime = v,
                this._time = i,
                this._act = !l,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = t,
                _ = 0),
                !_ && i && !e && (Pt(this, "onStart"),
                this._tTime !== v))
                    return this;
                if (_ <= i && 0 <= t)
                    for (n = this._first; n; ) {
                        if (a = n._next,
                        (n._act || i >= n._start) && n._ts && h !== n) {
                            if (n.parent !== this)
                                return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r),
                            i !== this._time || !this._ts && !u) {
                                h = 0,
                                a && (v += this._zTime = -U);
                                break
                            }
                        }
                        n = a
                    }
                else {
                    n = this._last;
                    for (var w = t < 0 ? t : i; n; ) {
                        if (a = n._prev,
                        (n._act || w <= n._end) && n._ts && h !== n) {
                            if (n.parent !== this)
                                return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r),
                            i !== this._time || !this._ts && !u) {
                                h = 0,
                                a && (v += this._zTime = w ? -U : U);
                                break
                            }
                        }
                        n = a
                    }
                }
                if (h && !e && (this.pause(),
                h.render(_ <= i ? 0 : -U)._zTime = _ <= i ? 1 : -1,
                this._ts))
                    return this._start = f,
                    ya(this),
                    this.render(t, e, r);
                this._onUpdate && !e && Pt(this, "onUpdate", !0),
                (v === m && m >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || ra(this, 1),
                e || t < 0 && !_ || !v && !_ && m || (Pt(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0),
                !this._prom || v < m && 0 < this.timeScale() || this._prom())))
            }
            return this
        }
        ,
        e.add = function add(t, e) {
            var r = this;
            if (q(e) || (e = bt(this, e, t)),
            !(t instanceof Nt)) {
                if (H(t))
                    return t.forEach(function(t) {
                        return r.add(t, e)
                    }),
                    this;
                if (o(t))
                    return this.addLabel(t, e);
                if (!p(t))
                    return this;
                t = Qt.delayedCall(0, t)
            }
            return this !== t ? Ba(this, t, e) : this
        }
        ,
        e.getChildren = function getChildren(t, e, r, i) {
            void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === r && (r = !0),
            void 0 === i && (i = -X);
            for (var n = [], a = this._first; a; )
                a._start >= i && (a instanceof Qt ? e && n.push(a) : (r && n.push(a),
                t && n.push.apply(n, a.getChildren(!0, e, r)))),
                a = a._next;
            return n
        }
        ,
        e.getById = function getById(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
                if (e[r].vars.id === t)
                    return e[r]
        }
        ,
        e.remove = function remove(t) {
            return o(t) ? this.removeLabel(t) : p(t) ? this.killTweensOf(t) : (qa(this, t),
            t === this._recent && (this._recent = this._last),
            sa(this))
        }
        ,
        e.totalTime = function totalTime(t, e) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = ca(Ct.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
            n.prototype.totalTime.call(this, t, e),
            this._forcing = 0,
            this) : this._tTime
        }
        ,
        e.addLabel = function addLabel(t, e) {
            return this.labels[t] = bt(this, e),
            this
        }
        ,
        e.removeLabel = function removeLabel(t) {
            return delete this.labels[t],
            this
        }
        ,
        e.addPause = function addPause(t, e, r) {
            var i = Qt.delayedCall(0, e || Q, r);
            return i.data = "isPause",
            this._hasPause = 1,
            Ba(this, i, bt(this, t))
        }
        ,
        e.removePause = function removePause(t) {
            var e = this._first;
            for (t = bt(this, t); e; )
                e._start === t && "isPause" === e.data && ra(e),
                e = e._next
        }
        ,
        e.killTweensOf = function killTweensOf(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--; )
                Yt !== i[n] && i[n].kill(t, e);
            return this
        }
        ,
        e.getTweensOf = function getTweensOf(t, e) {
            for (var r, i = [], n = xt(t), a = this._first, s = q(e); a; )
                a instanceof Qt ? da(a._targets, n) && (s ? (!Yt || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r),
                a = a._next;
            return i
        }
        ,
        e.tweenTo = function tweenTo(t, e) {
            e = e || {};
            var r, i = this, n = bt(i, t), a = e.startAt, s = e.onStart, o = e.onStartParams, u = e.immediateRender, h = Qt.to(i, ia({
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: n,
                overwrite: "auto",
                duration: e.duration || Math.abs((n - (a && "time"in a ? a.time : i._time)) / i.timeScale()) || U,
                onStart: function onStart() {
                    if (i.pause(),
                    !r) {
                        var t = e.duration || Math.abs((n - (a && "time"in a ? a.time : i._time)) / i.timeScale());
                        h._dur !== t && Ia(h, t, 0, 1).render(h._time, !0, !0),
                        r = 1
                    }
                    s && s.apply(h, o || [])
                }
            }, e));
            return u ? h.render(0) : h
        }
        ,
        e.tweenFromTo = function tweenFromTo(t, e, r) {
            return this.tweenTo(e, ia({
                startAt: {
                    time: bt(this, t)
                }
            }, r))
        }
        ,
        e.recent = function recent() {
            return this._recent
        }
        ,
        e.nextLabel = function nextLabel(t) {
            return void 0 === t && (t = this._time),
            ib(this, bt(this, t))
        }
        ,
        e.previousLabel = function previousLabel(t) {
            return void 0 === t && (t = this._time),
            ib(this, bt(this, t), 1)
        }
        ,
        e.currentLabel = function currentLabel(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + U)
        }
        ,
        e.shiftChildren = function shiftChildren(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, a = this.labels; n; )
                n._start >= r && (n._start += t,
                n._end += t),
                n = n._next;
            if (e)
                for (i in a)
                    a[i] >= r && (a[i] += t);
            return sa(this)
        }
        ,
        e.invalidate = function invalidate() {
            var t = this._first;
            for (this._lock = 0; t; )
                t.invalidate(),
                t = t._next;
            return n.prototype.invalidate.call(this)
        }
        ,
        e.clear = function clear(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; )
                e = r._next,
                this.remove(r),
                r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            sa(this)
        }
        ,
        e.totalDuration = function totalDuration(t) {
            var e, r, i, n = 0, a = this, s = a._last, o = X;
            if (arguments.length)
                return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (i = a.parent; s; )
                    e = s._prev,
                    s._dirty && s.totalDuration(),
                    o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1,
                    Ba(a, s, r - s._delay, 1)._lock = 0) : o = r,
                    r < 0 && s._ts && (n -= r,
                    (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts,
                    a._time -= r,
                    a._tTime -= r),
                    a.shiftChildren(-r, !1, -Infinity),
                    o = 0),
                    s._end > n && s._ts && (n = s._end),
                    s = e;
                Ia(a, a === R && a._time > n ? a._time : n, 1, 1),
                a._dirty = 0
            }
            return a._tDur
        }
        ,
        Timeline.updateRoot = function updateRoot(t) {
            if (R._ts && (fa(R, xa(t, R)),
            f = Ct.frame),
            Ct.frame >= ct) {
                ct += Y.autoSleep || 120;
                var e = R._first;
                if ((!e || !e._ts) && Y.autoSleep && Ct._listeners.length < 2) {
                    for (; e && !e._ts; )
                        e = e._next;
                    e || Ct.sleep()
                }
            }
        }
        ,
        Timeline
    }(Nt);
    ia(qt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    function Sb(t, e, r, i, n, a) {
        var u, h, l, f;
        if (ft[t] && !1 !== (u = new ft[t]).init(n, u.rawVars ? e[t] : function _processVars(t, e, r, i, n) {
            if (p(t) && (t = Vt(t, n, e, r, i)),
            !s(t) || t.style && t.nodeType || H(t) || Z(t))
                return o(t) ? Vt(t, n, e, r, i) : t;
            var a, u = {};
            for (a in t)
                u[a] = Vt(t[a], n, e, r, i);
            return u
        }(e[t], i, n, a, r), r, i, a) && (r._pt = h = new ae(r._pt,n,t,0,1,u.render,u,0,u.priority),
        r !== d))
            for (l = r._ptLookup[r._targets.indexOf(n)],
            f = u._props.length; f--; )
                l[u._props[f]] = h;
        return u
    }
    var Yt, Xt = function _addPropTween(t, e, r, i, n, a, s, u, h) {
        p(i) && (i = i(n || 0, t, a));
        var l, f = t[e], d = "get" !== r ? r : p(f) ? h ? t[e.indexOf("set") || !p(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : f, c = p(f) ? h ? $t : Kt : Gt;
        if (o(i) && (~i.indexOf("random(") && (i = fb(i)),
        "=" === i.charAt(1) && (!(l = parseFloat(d) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Pa(d) || 0)) && 0 !== l || (i = l))),
        d !== i)
            return isNaN(d * i) || "" === i ? (f || e in t || N(e, i),
            function _addComplexStringPropTween(t, e, r, i, n, a, s) {
                var o, u, h, l, f, d, c, p, _ = new ae(this._pt,t,e,0,1,te,null,n), m = 0, g = 0;
                for (_.b = r,
                _.e = i,
                r += "",
                (c = ~(i += "").indexOf("random(")) && (i = fb(i)),
                a && (a(p = [r, i], t, e),
                r = p[0],
                i = p[1]),
                u = r.match(it) || []; o = it.exec(i); )
                    l = o[0],
                    f = i.substring(m, o.index),
                    h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1),
                    l !== u[g++] && (d = parseFloat(u[g - 1]) || 0,
                    _._pt = {
                        _next: _._pt,
                        p: f || 1 === g ? f : ",",
                        s: d,
                        c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d,
                        m: h && h < 4 ? Math.round : 0
                    },
                    m = it.lastIndex);
                return _.c = m < i.length ? i.substring(m, i.length) : "",
                _.fp = s,
                (nt.test(i) || c) && (_.e = 0),
                this._pt = _
            }
            .call(this, t, e, d, i, c, u || Y.stringFilter, h)) : (l = new ae(this._pt,t,e,+d || 0,i - (d || 0),"boolean" == typeof f ? Ht : Zt,0,c),
            h && (l.fp = h),
            s && l.modifier(s, this, t),
            this._pt = l)
    }, Ut = function _initTween(e, r) {
        var i, n, a, s, o, u, h, l, f, d, c, p, m, g = e.vars, v = g.ease, y = g.startAt, b = g.immediateRender, T = g.lazy, w = g.onUpdate, x = g.onUpdateParams, O = g.callbackScope, P = g.runBackwards, k = g.yoyoEase, M = g.keyframes, A = g.autoRevert, S = e._dur, C = e._startAt, D = e._targets, z = e.parent, I = z && "nested" === z.data ? z.parent._targets : D, B = "auto" === e._overwrite && !F, E = e.timeline;
        if (!E || M && v || (v = "none"),
        e._ease = Ft(v, L.ease),
        e._yEase = k ? Et(Ft(!0 === k ? v : k, L.ease)) : 0,
        k && e._yoyo && !e._repeat && (k = e._yEase,
        e._yEase = e._ease,
        e._ease = k),
        e._from = !E && !!g.runBackwards,
        !E) {
            if (p = (l = D[0] ? _(D[0]).harness : 0) && g[l.prop],
            i = ma(g, ut),
            C && C.render(-1, !0).kill(),
            y)
                if (ra(e._startAt = Qt.set(D, ia({
                    data: "isStart",
                    overwrite: !1,
                    parent: z,
                    immediateRender: !0,
                    lazy: t(T),
                    startAt: null,
                    delay: 0,
                    onUpdate: w,
                    onUpdateParams: x,
                    callbackScope: O,
                    stagger: 0
                }, y))),
                r < 0 && !b && !A && e._startAt.render(-1, !0),
                b) {
                    if (0 < r && !A && (e._startAt = 0),
                    S && r <= 0)
                        return void (r && (e._zTime = r))
                } else
                    !1 === A && (e._startAt = 0);
            else if (P && S)
                if (C)
                    A || (e._startAt = 0);
                else if (r && (b = !1),
                a = ia({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: b && t(T),
                    immediateRender: b,
                    stagger: 0,
                    parent: z
                }, i),
                p && (a[l.prop] = p),
                ra(e._startAt = Qt.set(D, a)),
                r < 0 && e._startAt.render(-1, !0),
                b) {
                    if (!r)
                        return
                } else
                    _initTween(e._startAt, U);
            for (e._pt = 0,
            T = S && t(T) || T && !S,
            n = 0; n < D.length; n++) {
                if (h = (o = D[n])._gsap || $(D)[n]._gsap,
                e._ptLookup[n] = d = {},
                lt[h.id] && ht.length && ea(),
                c = I === D ? n : I.indexOf(o),
                l && !1 !== (f = new l).init(o, p || i, e, c, I) && (e._pt = s = new ae(e._pt,o,f.name,0,1,f.render,f,0,f.priority),
                f._props.forEach(function(t) {
                    d[t] = s
                }),
                f.priority && (u = 1)),
                !l || p)
                    for (a in i)
                        ft[a] && (f = Sb(a, i, e, c, o, I)) ? f.priority && (u = 1) : d[a] = s = Xt.call(e, o, a, "get", i[a], c, I, 0, g.stringFilter);
                e._op && e._op[n] && e.kill(o, e._op[n]),
                B && e._pt && (Yt = e,
                R.killTweensOf(o, d, e.globalTime(0)),
                m = !e.parent,
                Yt = 0),
                e._pt && T && (lt[h.id] = 1)
            }
            u && ne(e),
            e._onInit && e._onInit(e)
        }
        e._onUpdate = w,
        e._initted = (!e._op || e._pt) && !m
    }, Vt = function _parseFuncOrString(t, e, r, i, n) {
        return p(t) ? t.call(e, r, i, n) : o(t) && ~t.indexOf("random(") ? fb(t) : t
    }, jt = _t + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", Wt = (jt + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), Qt = function(S) {
        function Tween(e, r, i, n) {
            var a;
            "number" == typeof r && (i.duration = r,
            r = i,
            i = null);
            var o, u, h, l, f, d, c, p, _ = (a = S.call(this, n ? r : na(r)) || this).vars, m = _.duration, g = _.delay, y = _.immediateRender, b = _.stagger, T = _.overwrite, w = _.keyframes, x = _.defaults, P = _.scrollTrigger, k = _.yoyoEase, M = r.parent || R, A = (H(e) || Z(e) ? q(e[0]) : "length"in r) ? [e] : xt(e);
            if (a._targets = A.length ? $(A) : O("GSAP target " + e + " not found. https://greensock.com", !Y.nullTargetWarn) || [],
            a._ptLookup = [],
            a._overwrite = T,
            w || b || v(m) || v(g)) {
                if (r = a.vars,
                (o = a.timeline = new qt({
                    data: "nested",
                    defaults: x || {}
                })).kill(),
                o.parent = o._dp = _assertThisInitialized(a),
                o._start = 0,
                w)
                    ia(o.vars.defaults, {
                        ease: "none"
                    }),
                    b ? A.forEach(function(r, i) {
                        return w.forEach(function(t, e) {
                            return o.to(r, t, e ? ">" : i * b)
                        })
                    }) : w.forEach(function(t) {
                        return o.to(A, t, ">")
                    });
                else {
                    if (l = A.length,
                    c = b ? Xa(b) : Q,
                    s(b))
                        for (f in b)
                            ~jt.indexOf(f) && ((p = p || {})[f] = b[f]);
                    for (u = 0; u < l; u++) {
                        for (f in h = {},
                        r)
                            Wt.indexOf(f) < 0 && (h[f] = r[f]);
                        h.stagger = 0,
                        k && (h.yoyoEase = k),
                        p && mt(h, p),
                        d = A[u],
                        h.duration = +Vt(m, _assertThisInitialized(a), u, d, A),
                        h.delay = (+Vt(g, _assertThisInitialized(a), u, d, A) || 0) - a._delay,
                        !b && 1 === l && h.delay && (a._delay = g = h.delay,
                        a._start += g,
                        h.delay = 0),
                        o.to(d, h, c(u, d, A))
                    }
                    o.duration() ? m = g = 0 : a.timeline = 0
                }
                m || a.duration(m = o.duration())
            } else
                a.timeline = 0;
            return !0 !== T || F || (Yt = _assertThisInitialized(a),
            R.killTweensOf(A),
            Yt = 0),
            Ba(M, _assertThisInitialized(a), i),
            r.reversed && a.reverse(),
            r.paused && a.paused(!0),
            (y || !m && !w && a._start === ca(M._time) && t(y) && function _hasNoPausedAncestors(t) {
                return !t || t._ts && _hasNoPausedAncestors(t.parent)
            }(_assertThisInitialized(a)) && "nested" !== M.data) && (a._tTime = -U,
            a.render(Math.max(0, -g))),
            P && Ca(_assertThisInitialized(a), P),
            a
        }
        _inheritsLoose(Tween, S);
        var e = Tween.prototype;
        return e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d = this._time, c = this._tDur, p = this._dur, _ = c - U < t && 0 <= t ? c : t < U ? 0 : t;
            if (p) {
                if (_ !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                    if (i = _,
                    l = this.timeline,
                    this._repeat) {
                        if (s = p + this._rDelay,
                        this._repeat < -1 && t < 0)
                            return this.totalTime(100 * s + t, e, r);
                        if (i = ca(_ % s),
                        _ === c ? (a = this._repeat,
                        i = p) : ((a = ~~(_ / s)) && a === _ / s && (i = p,
                        a--),
                        p < i && (i = p)),
                        (u = this._yoyo && 1 & a) && (f = this._yEase,
                        i = p - i),
                        o = gt(this._tTime, s),
                        i === d && !r && this._initted)
                            return this;
                        a !== o && (l && this._yEase && Gb(l, u),
                        !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1,
                        this.render(ca(s * a), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Da(this, t < 0 ? t : i, r, e))
                            return this._tTime = 0,
                            this;
                        if (p !== this._dur)
                            return this.render(t, e, r)
                    }
                    if (this._tTime = _,
                    this._time = i,
                    !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                    this.ratio = h = (f || this._ease)(i / p),
                    this._from && (this.ratio = h = 1 - h),
                    !i || d || e || Pt(this, "onStart"),
                    i && !d && !e && (Pt(this, "onStart"),
                    this._tTime !== _))
                        return this;
                    for (n = this._pt; n; )
                        n.r(h, n.d),
                        n = n._next;
                    l && l.render(t < 0 ? t : !i && u ? -U : l._dur * h, e, r) || this._startAt && (this._zTime = t),
                    this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                    Pt(this, "onUpdate")),
                    this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Pt(this, "onRepeat"),
                    _ !== this._tDur && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                    !t && p || !(_ === this._tDur && 0 < this._ts || !_ && this._ts < 0) || ra(this, 1),
                    e || t < 0 && !d || !_ && !d || (Pt(this, _ === c ? "onComplete" : "onReverseComplete", !0),
                    !this._prom || _ < c && 0 < this.timeScale() || this._prom()))
                }
            } else
                !function _renderZeroDurationTween(t, e, r, i) {
                    var n, a, s, o = t.ratio, u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
                        var e = t.parent;
                        return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
                    }(t) && (t._initted || !vt(t)) || (t._ts < 0 || t._dp._ts < 0) && !vt(t)) ? 0 : 1, h = t._rDelay, l = 0;
                    if (h && t._repeat && (l = Tt(0, t._tDur, e),
                    a = gt(l, h),
                    s = gt(t._tTime, h),
                    t._yoyo && 1 & a && (u = 1 - u),
                    a !== s && (o = 1 - u,
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                    u !== o || i || t._zTime === U || !e && t._zTime) {
                        if (!t._initted && Da(t, e, i, r))
                            return;
                        for (s = t._zTime,
                        t._zTime = e || (r ? U : 0),
                        r = r || e && !s,
                        t.ratio = u,
                        t._from && (u = 1 - u),
                        t._time = 0,
                        t._tTime = l,
                        n = t._pt; n; )
                            n.r(u, n.d),
                            n = n._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                        t._onUpdate && !r && Pt(t, "onUpdate"),
                        l && t._repeat && !r && t.parent && Pt(t, "onRepeat"),
                        (e >= t._tDur || e < 0) && t.ratio === u && (u && ra(t, 1),
                        r || (Pt(t, u ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()))
                    } else
                        t._zTime || (t._zTime = e)
                }(this, t, e, r);
            return this
        }
        ,
        e.targets = function targets() {
            return this._targets
        }
        ,
        e.invalidate = function invalidate() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(),
            S.prototype.invalidate.call(this)
        }
        ,
        e.kill = function kill(t, e) {
            if (void 0 === e && (e = "all"),
            !(t || e && "all" !== e))
                return this._lazy = this._pt = 0,
                this.parent ? kb(this) : this;
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Yt && !0 !== Yt.vars.overwrite)._first || kb(this),
                this.parent && r !== this.timeline.totalDuration() && Ia(this, this._dur * this.timeline._tDur / r, 0, 1),
                this
            }
            var i, n, a, s, u, h, l, f = this._targets, d = t ? xt(t) : f, c = this._ptLookup, p = this._pt;
            if ((!e || "all" === e) && function _arraysMatch(t, e) {
                for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
                    ;
                return r < 0
            }(f, d))
                return "all" === e && (this._pt = 0),
                kb(this);
            for (i = this._op = this._op || [],
            "all" !== e && (o(e) && (u = {},
            ba(e, function(t) {
                return u[t] = 1
            }),
            e = u),
            e = function _addAliasesToVars(t, e) {
                var r, i, n, a, s = t[0] ? _(t[0]).harness : 0, o = s && s.aliases;
                if (!o)
                    return e;
                for (i in r = mt({}, e),
                o)
                    if (i in r)
                        for (n = (a = o[i].split(",")).length; n--; )
                            r[a[n]] = r[i];
                return r
            }(f, e)),
            l = f.length; l--; )
                if (~d.indexOf(f[l]))
                    for (u in n = c[l],
                    "all" === e ? (i[l] = e,
                    s = n,
                    a = {}) : (a = i[l] = i[l] || {},
                    s = e),
                    s)
                        (h = n && n[u]) && ("kill"in h.d && !0 !== h.d.kill(u) || qa(this, h, "_pt"),
                        delete n[u]),
                        "all" !== a && (a[u] = 1);
            return this._initted && !this._pt && p && kb(this),
            this
        }
        ,
        Tween.to = function to(t, e, r) {
            return new Tween(t,e,r)
        }
        ,
        Tween.from = function from(t, e) {
            return Ma(1, arguments)
        }
        ,
        Tween.delayedCall = function delayedCall(t, e, r, i) {
            return new Tween(e,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            })
        }
        ,
        Tween.fromTo = function fromTo(t, e, r) {
            return Ma(2, arguments)
        }
        ,
        Tween.set = function set(t, e) {
            return e.duration = 0,
            e.repeatDelay || (e.repeat = 0),
            new Tween(t,e)
        }
        ,
        Tween.killTweensOf = function killTweensOf(t, e, r) {
            return R.killTweensOf(t, e, r)
        }
        ,
        Tween
    }(Nt);
    ia(Qt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    ba("staggerTo,staggerFrom,staggerFromTo", function(r) {
        Qt[r] = function() {
            var t = new qt
              , e = wt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0),
            t[r].apply(t, e)
        }
    });
    function bc(t, e, r) {
        return t.setAttribute(e, r)
    }
    function jc(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
    var Gt = function _setterPlain(t, e, r) {
        return t[e] = r
    }
      , Kt = function _setterFunc(t, e, r) {
        return t[e](r)
    }
      , $t = function _setterFuncWithParam(t, e, r, i) {
        return t[e](i.fp, r)
    }
      , Jt = function _getSetter(t, e) {
        return p(t[e]) ? Kt : r(t[e]) && t.setAttribute ? bc : Gt
    }
      , Zt = function _renderPlain(t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    }
      , Ht = function _renderBoolean(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }
      , te = function _renderComplexString(t, e) {
        var r = e._pt
          , i = "";
        if (!t && e.b)
            i = e.b;
        else if (1 === t && e.e)
            i = e.e;
        else {
            for (; r; )
                i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i,
                r = r._next;
            i += e.c
        }
        e.set(e.t, e.p, i, e)
    }
      , ee = function _renderPropTweens(t, e) {
        for (var r = e._pt; r; )
            r.r(t, r.d),
            r = r._next
    }
      , re = function _addPluginModifier(t, e, r, i) {
        for (var n, a = this._pt; a; )
            n = a._next,
            a.p === i && a.modifier(t, e, r),
            a = n
    }
      , ie = function _killPropTweensOf(t) {
        for (var e, r, i = this._pt; i; )
            r = i._next,
            i.p === t && !i.op || i.op === t ? qa(this, i, "_pt") : i.dep || (e = 1),
            i = r;
        return !e
    }
      , ne = function _sortPropTweensByPriority(t) {
        for (var e, r, i, n, a = t._pt; a; ) {
            for (e = a._next,
            r = i; r && r.pr > a.pr; )
                r = r._next;
            (a._prev = r ? r._prev : n) ? a._prev._next = a : i = a,
            (a._next = r) ? r._prev = a : n = a,
            a = e
        }
        t._pt = i
    }
      , ae = (PropTween.prototype.modifier = function modifier(t, e, r) {
        this.mSet = this.mSet || this.set,
        this.set = jc,
        this.m = t,
        this.mt = r,
        this.tween = e
    }
    ,
    PropTween);
    function PropTween(t, e, r, i, n, a, s, o, u) {
        this.t = e,
        this.s = i,
        this.c = n,
        this.p = r,
        this.r = a || Zt,
        this.d = s || this,
        this.set = o || Gt,
        this.pr = u || 0,
        (this._next = t) && (t._prev = this)
    }
    ba(_t + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ut[t] = 1
    }),
    ot.TweenMax = ot.TweenLite = Qt,
    ot.TimelineLite = ot.TimelineMax = qt,
    R = new qt({
        sortChildren: !1,
        defaults: L,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    Y.stringFilter = vb;
    var se = {
        registerPlugin: function registerPlugin() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            e.forEach(function(t) {
                return function _createPlugin(t) {
                    var e = (t = !t.name && t.default || t).name
                      , r = p(t)
                      , i = e && !r && t.init ? function() {
                        this._props = []
                    }
                    : t
                      , n = {
                        init: Q,
                        render: ee,
                        add: Xt,
                        kill: ie,
                        modifier: re,
                        rawVars: 0
                    }
                      , a = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Jt,
                        aliases: {},
                        register: 0
                    };
                    if (Dt(),
                    t !== i) {
                        if (ft[e])
                            return;
                        ia(i, ia(ma(t, n), a)),
                        mt(i.prototype, mt(n, ma(t, a))),
                        ft[i.prop = e] = i,
                        t.targetTest && (pt.push(i),
                        ut[e] = 1),
                        e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    P(e, i),
                    t.register && t.register(oe, i, ae)
                }(t)
            })
        },
        timeline: function timeline(t) {
            return new qt(t)
        },
        getTweensOf: function getTweensOf(t, e) {
            return R.getTweensOf(t, e)
        },
        getProperty: function getProperty(i, t, e, r) {
            o(i) && (i = xt(i)[0]);
            var n = _(i || {}).get
              , a = e ? ha : ga;
            return "native" === e && (e = ""),
            i ? t ? a((ft[t] && ft[t].get || n)(i, t, e, r)) : function(t, e, r) {
                return a((ft[t] && ft[t].get || n)(i, t, e, r))
            }
            : i
        },
        quickSetter: function quickSetter(r, e, i) {
            if (1 < (r = xt(r)).length) {
                var n = r.map(function(t) {
                    return oe.quickSetter(t, e, i)
                })
                  , a = n.length;
                return function(t) {
                    for (var e = a; e--; )
                        n[e](t)
                }
            }
            r = r[0] || {};
            var s = ft[e]
              , o = _(r)
              , u = o.harness && (o.harness.aliases || {})[e] || e
              , h = s ? function(t) {
                var e = new s;
                d._pt = 0,
                e.init(r, i ? t + i : t, d, 0, [r]),
                e.render(1, e),
                d._pt && ee(1, d)
            }
            : o.set(r, u);
            return s ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        isTweening: function isTweening(t) {
            return 0 < R.getTweensOf(t, !0).length
        },
        defaults: function defaults(t) {
            return t && t.ease && (t.ease = Ft(t.ease, L.ease)),
            la(L, t || {})
        },
        config: function config(t) {
            return la(Y, t || {})
        },
        registerEffect: function registerEffect(t) {
            var i = t.name
              , n = t.effect
              , e = t.plugins
              , a = t.defaults
              , r = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !ft[t] && !ot[t] && O(i + " effect requires " + t + " plugin.")
            }),
            dt[i] = function(t, e, r) {
                return n(xt(t), ia(e || {}, a), r)
            }
            ,
            r && (qt.prototype[i] = function(t, e, r) {
                return this.add(dt[i](t, s(e) ? e : (r = e) && {}, this), r)
            }
            )
        },
        registerEase: function registerEase(t, e) {
            zt[t] = Ft(e)
        },
        parseEase: function parseEase(t, e) {
            return arguments.length ? Ft(t, e) : zt
        },
        getById: function getById(t) {
            return R.getById(t)
        },
        exportRoot: function exportRoot(e, r) {
            void 0 === e && (e = {});
            var i, n, a = new qt(e);
            for (a.smoothChildTiming = t(e.smoothChildTiming),
            R.remove(a),
            a._dp = 0,
            a._time = a._tTime = R._time,
            i = R._first; i; )
                n = i._next,
                !r && !i._dur && i instanceof Qt && i.vars.onComplete === i._targets[0] || Ba(a, i, i._start - i._delay),
                i = n;
            return Ba(R, a, 0),
            a
        },
        utils: {
            wrap: function wrap(e, t, r) {
                var i = t - e;
                return H(e) ? cb(e, wrap(0, e.length), t) : Na(r, function(t) {
                    return (i + (t - e) % i) % i + e
                })
            },
            wrapYoyo: function wrapYoyo(e, t, r) {
                var i = t - e
                  , n = 2 * i;
                return H(e) ? cb(e, wrapYoyo(0, e.length - 1), t) : Na(r, function(t) {
                    return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
                })
            },
            distribute: Xa,
            random: $a,
            snap: Za,
            normalize: function normalize(t, e, r) {
                return Ot(t, e, 0, 1, r)
            },
            getUnit: Pa,
            clamp: function clamp(e, r, t) {
                return Na(t, function(t) {
                    return Tt(e, r, t)
                })
            },
            splitColor: qb,
            toArray: xt,
            selector: function selector(r) {
                return r = xt(r)[0] || O("Invalid scope") || {},
                function(t) {
                    var e = r.current || r.nativeElement || r;
                    return xt(t, e.querySelectorAll ? e : e === r ? O("Invalid scope") || a.createElement("div") : r)
                }
            },
            mapRange: Ot,
            pipe: function pipe() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                    e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function unitize(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || Pa(t))
                }
            },
            interpolate: function interpolate(e, r, t, i) {
                var n = isNaN(e + r) ? 0 : function(t) {
                    return (1 - t) * e + t * r
                }
                ;
                if (!n) {
                    var a, s, u, h, l, f = o(e), d = {};
                    if (!0 === t && (i = 1) && (t = null),
                    f)
                        e = {
                            p: e
                        },
                        r = {
                            p: r
                        };
                    else if (H(e) && !H(r)) {
                        for (u = [],
                        h = e.length,
                        l = h - 2,
                        s = 1; s < h; s++)
                            u.push(interpolate(e[s - 1], e[s]));
                        h--,
                        n = function func(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e)
                        }
                        ,
                        t = r
                    } else
                        i || (e = mt(H(e) ? [] : {}, e));
                    if (!u) {
                        for (a in r)
                            Xt.call(d, e, a, "get", r[a]);
                        n = function func(t) {
                            return ee(t, d) || (f ? e.p : e)
                        }
                    }
                }
                return Na(t, n)
            },
            shuffle: Wa
        },
        install: M,
        effects: dt,
        ticker: Ct,
        updateRoot: qt.updateRoot,
        plugins: ft,
        globalTimeline: R,
        core: {
            PropTween: ae,
            globals: P,
            Tween: Qt,
            Timeline: qt,
            Animation: Nt,
            getCache: _,
            _removeLinkedListItem: qa,
            suppressOverwrites: function suppressOverwrites(t) {
                return F = t
            }
        }
    };
    ba("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return se[t] = Qt[t]
    }),
    Ct.add(qt.updateRoot),
    d = se.to({}, {
        duration: 0
    });
    function nc(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
        return r
    }
    function pc(t, n) {
        return {
            name: t,
            rawVars: 1,
            init: function init(t, i, e) {
                e._onInit = function(t) {
                    var e, r;
                    if (o(i) && (e = {},
                    ba(i, function(t) {
                        return e[t] = 1
                    }),
                    i = e),
                    n) {
                        for (r in e = {},
                        i)
                            e[r] = n(i[r]);
                        i = e
                    }
                    !function _addModifiers(t, e) {
                        var r, i, n, a = t._targets;
                        for (r in e)
                            for (i = a.length; i--; )
                                (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = nc(n, r)),
                                n && n.modifier && n.modifier(e[r], t, a[i], r))
                    }(t, i)
                }
            }
        }
    }
    var oe = se.registerPlugin({
        name: "attr",
        init: function init(t, e, r, i, n) {
            var a, s;
            for (a in e)
                (s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a),
                this._props.push(a)
        }
    }, {
        name: "endArray",
        init: function init(t, e) {
            for (var r = e.length; r--; )
                this.add(t, r, t[r] || 0, e[r])
        }
    }, pc("roundProps", Ya), pc("modifiers"), pc("snap", Za)) || se;
    Qt.version = qt.version = oe.version = "3.7.0",
    l = 1,
    u() && Dt();
    function $c(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }
    function _c(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }
    function ad(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }
    function bd(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }
    function cd(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }
    function dd(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }
    function ed(t, e, r) {
        return t.style[e] = r
    }
    function fd(t, e, r) {
        return t.style.setProperty(e, r)
    }
    function gd(t, e, r) {
        return t._gsap[e] = r
    }
    function hd(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }
    function id(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r,
        a.renderTransform(n, a)
    }
    function jd(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r,
        a.renderTransform(n, a)
    }
    function nd(t, e) {
        var r = he.createElementNS ? he.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : he.createElement(t);
        return r.style ? r : he.createElement(t)
    }
    function od(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(Re, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && od(t, Ve(e) || e, 1) || ""
    }
    function rd() {
        (function _windowExists() {
            return "undefined" != typeof window
        }
        )() && window.document && (ue = window,
        he = ue.document,
        le = he.documentElement,
        de = nd("div") || {
            style: {}
        },
        nd("div"),
        Ye = Ve(Ye),
        Xe = Ye + "Origin",
        de.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        pe = !!Ve("perspective"),
        fe = 1)
    }
    function sd(t) {
        var e, r = nd("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, n = this.nextSibling, a = this.style.cssText;
        if (le.appendChild(r),
        r.appendChild(this),
        this.style.display = "block",
        t)
            try {
                e = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = sd
            } catch (t) {}
        else
            this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
        le.removeChild(r),
        this.style.cssText = a,
        e
    }
    function td(t, e) {
        for (var r = e.length; r--; )
            if (t.hasAttribute(e[r]))
                return t.getAttribute(e[r])
    }
    function ud(e) {
        var r;
        try {
            r = e.getBBox()
        } catch (t) {
            r = sd.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === sd || (r = sd.call(e, !0)),
        !r || r.width || r.x || r.y ? r : {
            x: +td(e, ["x", "cx", "x1"]) || 0,
            y: +td(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }
    function vd(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !ud(t))
    }
    function wd(t, e) {
        if (e) {
            var r = t.style;
            e in Ie && e !== Xe && (e = Ye),
            r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
            r.removeProperty(e.replace(Re, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }
    function xd(t, e, r, i, n, a) {
        var s = new ae(t._pt,e,r,0,1,a ? dd : cd);
        return (t._pt = s).b = i,
        s.e = n,
        t._props.push(r),
        s
    }
    function zd(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0, h = (r + "").trim().substr((u + "").length) || "px", l = de.style, f = Le.test(e), d = "svg" === t.tagName.toLowerCase(), c = (d ? "client" : "offset") + (f ? "Width" : "Height"), p = "px" === i, m = "%" === i;
        return i === h || !u || je[i] || je[h] ? u : ("px" === h || p || (u = zd(t, e, r, "px")),
        o = t.getCTM && vd(t),
        !m && "%" !== h || !Ie[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (p ? h : i),
        a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode,
        o && (a = (t.ownerSVGElement || {}).parentNode),
        a && a !== he && a.appendChild || (a = he.body),
        (s = a._gsap) && m && s.width && f && s.time === Ct.time ? ca(u / s.width * 100) : (!m && "%" !== h || (l.position = od(t, "position")),
        a === t && (l.position = "static"),
        a.appendChild(de),
        n = de[c],
        a.removeChild(de),
        l.position = "absolute",
        f && m && ((s = _(a)).time = Ct.time,
        s.width = a[c]),
        ca(p ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[c],
        ca(m ? u / n * 100 : u / 100 * n)))
    }
    function Ad(t, e, r, i) {
        var n;
        return fe || rd(),
        e in qe && "transform" !== e && ~(e = qe[e]).indexOf(",") && (e = e.split(",")[0]),
        Ie[e] && "transform" !== e ? (n = $e(t, i),
        n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Je(od(t, Xe)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Qe[e] && Qe[e](t, e, r) || od(t, e) || aa(t, e) || ("opacity" === e ? 1 : 0)),
        r && !~(n + "").trim().indexOf(" ") ? zd(t, e, n, r) + r : n
    }
    function Bd(t, e, r, i) {
        if (!r || "none" === r) {
            var n = Ve(e, t, 1)
              , a = n && od(t, n, 1);
            a && a !== r ? (e = n,
            r = a) : "borderColor" === e && (r = od(t, "borderTopColor"))
        }
        var s, o, u, h, l, f, d, c, p, _, m, g, v = new ae(this._pt,t.style,e,0,1,te), y = 0, b = 0;
        if (v.b = r,
        v.e = i,
        r += "",
        "auto" === (i += "") && (t.style[e] = i,
        i = od(t, e) || i,
        t.style[e] = r),
        vb(s = [r, i]),
        i = s[1],
        u = (r = s[0]).match(rt) || [],
        (i.match(rt) || []).length) {
            for (; o = rt.exec(i); )
                d = o[0],
                p = i.substring(y, o.index),
                l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1),
                d !== (f = u[b++] || "") && (h = parseFloat(f) || 0,
                m = f.substr((h + "").length),
                (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)),
                c = parseFloat(d),
                _ = d.substr((c + "").length),
                y = rt.lastIndex - _.length,
                _ || (_ = _ || Y.units[e] || m,
                y === i.length && (i += _,
                v.e += _)),
                m !== _ && (h = zd(t, e, f, _) || 0),
                v._pt = {
                    _next: v._pt,
                    p: p || 1 === b ? p : ",",
                    s: h,
                    c: g ? g * c : c - h,
                    m: l && l < 4 || "zIndex" === e ? Math.round : 0
                });
            v.c = y < i.length ? i.substring(y, i.length) : ""
        } else
            v.r = "display" === e && "none" === i ? dd : cd;
        return nt.test(i) && (v.e = 0),
        this._pt = v
    }
    function Dd(t) {
        var e = t.split(" ")
          , r = e[0]
          , i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r,
        r = i,
        i = t),
        e[0] = We[r] || r,
        e[1] = We[i] || i,
        e.join(" ")
    }
    function Ed(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t, s = a.style, o = e.u, u = a._gsap;
            if ("all" === o || !0 === o)
                s.cssText = "",
                i = 1;
            else
                for (n = (o = o.split(",")).length; -1 < --n; )
                    r = o[n],
                    Ie[r] && (i = 1,
                    r = "transformOrigin" === r ? Xe : Ye),
                    wd(a, r);
            i && (wd(a, Ye),
            u && (u.svg && a.removeAttribute("transform"),
            $e(a, 1),
            u.uncache = 1))
        }
    }
    function Id(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }
    function Jd(t) {
        var e = od(t, Ye);
        return Id(e) ? Ge : e.substr(7).match(et).map(ca)
    }
    function Kd(t, e) {
        var r, i, n, a, s = t._gsap || _(t), o = t.style, u = Jd(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Ge : u : (u !== Ge || t.offsetParent || t === le || s.svg || (n = o.display,
        o.display = "block",
        (r = t.parentNode) && t.offsetParent || (a = 1,
        i = t.nextSibling,
        le.appendChild(t)),
        u = Jd(t),
        n ? o.display = n : wd(t, "display"),
        a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : le.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }
    function Ld(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap, l = n || Kd(t, !0), f = h.xOrigin || 0, d = h.yOrigin || 0, c = h.xOffset || 0, p = h.yOffset || 0, _ = l[0], m = l[1], g = l[2], v = l[3], y = l[4], b = l[5], T = e.split(" "), w = parseFloat(T[0]) || 0, x = parseFloat(T[1]) || 0;
        r ? l !== Ge && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * b - m * y) / o,
        w = w * (v / o) + x * (-g / o) + (g * b - v * y) / o,
        x = u) : (w = (s = ud(t)).x + (~T[0].indexOf("%") ? w / 100 * s.width : w),
        x = s.y + (~(T[1] || T[0]).indexOf("%") ? x / 100 * s.height : x)),
        i || !1 !== i && h.smooth ? (y = w - f,
        b = x - d,
        h.xOffset = c + (y * _ + b * g) - y,
        h.yOffset = p + (y * m + b * v) - b) : h.xOffset = h.yOffset = 0,
        h.xOrigin = w,
        h.yOrigin = x,
        h.smooth = !!i,
        h.origin = e,
        h.originIsAbsolute = !!r,
        t.style[Xe] = "0px 0px",
        a && (xd(a, h, "xOrigin", f, w),
        xd(a, h, "yOrigin", d, x),
        xd(a, h, "xOffset", c, h.xOffset),
        xd(a, h, "yOffset", p, h.yOffset)),
        t.setAttribute("data-svg-origin", w + " " + x)
    }
    function Od(t, e, r) {
        var i = Pa(e);
        return ca(parseFloat(e) + parseFloat(zd(t, "x", r + "px", i))) + i
    }
    function Vd(t, e, r, i, n, a) {
        var s, u, h = 360, l = o(n), f = parseFloat(n) * (l && ~n.indexOf("rad") ? Be : 1), d = a ? f * a : f - i, c = i + d + "deg";
        return l && ("short" === (s = n.split("_")[1]) && (d %= h) !== d % 180 && (d += d < 0 ? h : -h),
        "cw" === s && d < 0 ? d = (d + 36e9) % h - ~~(d / h) * h : "ccw" === s && 0 < d && (d = (d - 36e9) % h - ~~(d / h) * h)),
        t._pt = u = new ae(t._pt,e,r,i,d,_c),
        u.e = c,
        u.u = "deg",
        t._props.push(r),
        u
    }
    function Wd(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }
    function Xd(t, e, r) {
        var i, n, a, s, o, u, h, l = Wd({}, r._gsap), f = r.style;
        for (n in l.svg ? (a = r.getAttribute("transform"),
        r.setAttribute("transform", ""),
        f[Ye] = e,
        i = $e(r, 1),
        wd(r, Ye),
        r.setAttribute("transform", a)) : (a = getComputedStyle(r)[Ye],
        f[Ye] = e,
        i = $e(r, 1),
        f[Ye] = a),
        Ie)
            (a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Pa(a) !== (h = Pa(s)) ? zd(r, n, a, h) : parseFloat(a),
            u = parseFloat(s),
            t._pt = new ae(t._pt,i,n,o,u - o,$c),
            t._pt.u = h || 0,
            t._props.push(n));
        Wd(i, l)
    }
    var ue, he, le, fe, de, ce, pe, _e = zt.Power0, me = zt.Power1, ge = zt.Power2, ve = zt.Power3, ye = zt.Power4, be = zt.Linear, Te = zt.Quad, we = zt.Cubic, xe = zt.Quart, Oe = zt.Quint, Pe = zt.Strong, ke = zt.Elastic, Me = zt.Back, Ae = zt.SteppedEase, Se = zt.Bounce, Ce = zt.Sine, De = zt.Expo, ze = zt.Circ, Ie = {}, Be = 180 / Math.PI, Ee = Math.PI / 180, Fe = Math.atan2, Re = /([A-Z])/g, Le = /(?:left|right|width|margin|padding|x)/i, Ne = /[\s,\(]\S/, qe = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, Ye = "transform", Xe = Ye + "Origin", Ue = "O,Moz,ms,Ms,Webkit".split(","), Ve = function _checkPropPrefix(t, e, r) {
        var i = (e || de).style
          , n = 5;
        if (t in i && !r)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Ue[n] + t in i); )
            ;
        return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Ue[n] : "") + t
    }, je = {
        deg: 1,
        rad: 1,
        turn: 1
    }, We = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, Qe = {
        clearProps: function clearProps(t, e, r, i, n) {
            if ("isFromStart" !== n.data) {
                var a = t._pt = new ae(t._pt,e,r,0,0,Ed);
                return a.u = i,
                a.pr = -10,
                a.tween = n,
                t._props.push(r),
                1
            }
        }
    }, Ge = [1, 0, 0, 1, 0, 0], Ke = {}, $e = function _parseTransform(t, e) {
        var r = t._gsap || new Lt(t);
        if ("x"in r && !e && !r.uncache)
            return r;
        var i, n, a, s, o, u, h, l, f, d, c, p, _, m, g, v, y, b, T, w, x, O, P, k, M, A, S, C, D, z, I, B, E = t.style, F = r.scaleX < 0, R = "deg", L = od(t, Xe) || "0";
        return i = n = a = u = h = l = f = d = c = 0,
        s = o = 1,
        r.svg = !(!t.getCTM || !vd(t)),
        m = Kd(t, r.svg),
        r.svg && (k = (!r.uncache || "0px 0px" === L) && !e && t.getAttribute("data-svg-origin"),
        Ld(t, k || L, !!k || r.originIsAbsolute, !1 !== r.smooth, m)),
        p = r.xOrigin || 0,
        _ = r.yOrigin || 0,
        m !== Ge && (b = m[0],
        T = m[1],
        w = m[2],
        x = m[3],
        i = O = m[4],
        n = P = m[5],
        6 === m.length ? (s = Math.sqrt(b * b + T * T),
        o = Math.sqrt(x * x + w * w),
        u = b || T ? Fe(T, b) * Be : 0,
        (f = w || x ? Fe(w, x) * Be + u : 0) && (o *= Math.abs(Math.cos(f * Ee))),
        r.svg && (i -= p - (p * b + _ * w),
        n -= _ - (p * T + _ * x))) : (B = m[6],
        z = m[7],
        S = m[8],
        C = m[9],
        D = m[10],
        I = m[11],
        i = m[12],
        n = m[13],
        a = m[14],
        h = (g = Fe(B, D)) * Be,
        g && (k = O * (v = Math.cos(-g)) + S * (y = Math.sin(-g)),
        M = P * v + C * y,
        A = B * v + D * y,
        S = O * -y + S * v,
        C = P * -y + C * v,
        D = B * -y + D * v,
        I = z * -y + I * v,
        O = k,
        P = M,
        B = A),
        l = (g = Fe(-w, D)) * Be,
        g && (v = Math.cos(-g),
        I = x * (y = Math.sin(-g)) + I * v,
        b = k = b * v - S * y,
        T = M = T * v - C * y,
        w = A = w * v - D * y),
        u = (g = Fe(T, b)) * Be,
        g && (k = b * (v = Math.cos(g)) + T * (y = Math.sin(g)),
        M = O * v + P * y,
        T = T * v - b * y,
        P = P * v - O * y,
        b = k,
        O = M),
        h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0,
        l = 180 - l),
        s = ca(Math.sqrt(b * b + T * T + w * w)),
        o = ca(Math.sqrt(P * P + B * B)),
        g = Fe(O, P),
        f = 2e-4 < Math.abs(g) ? g * Be : 0,
        c = I ? 1 / (I < 0 ? -I : I) : 0),
        r.svg && (k = t.getAttribute("transform"),
        r.forceCSS = t.setAttribute("transform", "") || !Id(od(t, Ye)),
        k && t.setAttribute("transform", k))),
        90 < Math.abs(f) && Math.abs(f) < 270 && (F ? (s *= -1,
        f += u <= 0 ? 180 : -180,
        u += u <= 0 ? 180 : -180) : (o *= -1,
        f += f <= 0 ? 180 : -180)),
        r.x = i - ((r.xPercent = i && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px",
        r.y = n - ((r.yPercent = n && (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px",
        r.z = a + "px",
        r.scaleX = ca(s),
        r.scaleY = ca(o),
        r.rotation = ca(u) + R,
        r.rotationX = ca(h) + R,
        r.rotationY = ca(l) + R,
        r.skewX = f + R,
        r.skewY = d + R,
        r.transformPerspective = c + "px",
        (r.zOrigin = parseFloat(L.split(" ")[2]) || 0) && (E[Xe] = Je(L)),
        r.xOffset = r.yOffset = 0,
        r.force3D = Y.force3D,
        r.renderTransform = r.svg ? ir : pe ? rr : Ze,
        r.uncache = 0,
        r
    }, Je = function _firstTwoOnly(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, Ze = function _renderNon3DTransforms(t, e) {
        e.z = "0px",
        e.rotationY = e.rotationX = "0deg",
        e.force3D = 0,
        rr(t, e)
    }, He = "0deg", tr = "0px", er = ") ", rr = function _renderCSSTransforms(t, e) {
        var r = e || this
          , i = r.xPercent
          , n = r.yPercent
          , a = r.x
          , s = r.y
          , o = r.z
          , u = r.rotation
          , h = r.rotationY
          , l = r.rotationX
          , f = r.skewX
          , d = r.skewY
          , c = r.scaleX
          , p = r.scaleY
          , _ = r.transformPerspective
          , m = r.force3D
          , g = r.target
          , v = r.zOrigin
          , y = ""
          , b = "auto" === m && t && 1 !== t || !0 === m;
        if (v && (l !== He || h !== He)) {
            var T, w = parseFloat(h) * Ee, x = Math.sin(w), O = Math.cos(w);
            w = parseFloat(l) * Ee,
            T = Math.cos(w),
            a = Od(g, a, x * T * -v),
            s = Od(g, s, -Math.sin(w) * -v),
            o = Od(g, o, O * T * -v + v)
        }
        _ !== tr && (y += "perspective(" + _ + er),
        (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
        !b && a === tr && s === tr && o === tr || (y += o !== tr || b ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + er),
        u !== He && (y += "rotate(" + u + er),
        h !== He && (y += "rotateY(" + h + er),
        l !== He && (y += "rotateX(" + l + er),
        f === He && d === He || (y += "skew(" + f + ", " + d + er),
        1 === c && 1 === p || (y += "scale(" + c + ", " + p + er),
        g.style[Ye] = y || "translate(0, 0)"
    }, ir = function _renderSVGTransforms(t, e) {
        var r, i, n, a, s, o = e || this, u = o.xPercent, h = o.yPercent, l = o.x, f = o.y, d = o.rotation, c = o.skewX, p = o.skewY, _ = o.scaleX, m = o.scaleY, g = o.target, v = o.xOrigin, y = o.yOrigin, b = o.xOffset, T = o.yOffset, w = o.forceCSS, x = parseFloat(l), O = parseFloat(f);
        d = parseFloat(d),
        c = parseFloat(c),
        (p = parseFloat(p)) && (c += p = parseFloat(p),
        d += p),
        d || c ? (d *= Ee,
        c *= Ee,
        r = Math.cos(d) * _,
        i = Math.sin(d) * _,
        n = Math.sin(d - c) * -m,
        a = Math.cos(d - c) * m,
        c && (p *= Ee,
        s = Math.tan(c - p),
        n *= s = Math.sqrt(1 + s * s),
        a *= s,
        p && (s = Math.tan(p),
        r *= s = Math.sqrt(1 + s * s),
        i *= s)),
        r = ca(r),
        i = ca(i),
        n = ca(n),
        a = ca(a)) : (r = _,
        a = m,
        i = n = 0),
        (x && !~(l + "").indexOf("px") || O && !~(f + "").indexOf("px")) && (x = zd(g, "x", l, "px"),
        O = zd(g, "y", f, "px")),
        (v || y || b || T) && (x = ca(x + v - (v * r + y * n) + b),
        O = ca(O + y - (v * i + y * a) + T)),
        (u || h) && (s = g.getBBox(),
        x = ca(x + u / 100 * s.width),
        O = ca(O + h / 100 * s.height)),
        s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + O + ")",
        g.setAttribute("transform", s),
        w && (g.style[Ye] = s)
    };
    ba("padding,margin,Width,Radius", function(e, r) {
        var t = "Right"
          , i = "Bottom"
          , n = "Left"
          , o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
            return r < 2 ? e + t : "border" + t + e
        });
        Qe[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var a, s;
            if (arguments.length < 4)
                return a = o.map(function(t) {
                    return Ad(e, t, r)
                }),
                5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "),
            s = {},
            o.forEach(function(t, e) {
                return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }),
            e.init(t, s, n)
        }
    });
    var nr, ar, sr, or = {
        name: "css",
        register: rd,
        targetTest: function targetTest(t) {
            return t.style && t.nodeType
        },
        init: function init(t, e, r, i, n) {
            var a, s, o, u, h, l, f, d, c, p, _, m, g, v, y, b = this._props, T = t.style, w = r.vars.startAt;
            for (f in fe || rd(),
            e)
                if ("autoRound" !== f && (s = e[f],
                !ft[f] || !Sb(f, e, r, i, t, n)))
                    if (h = typeof s,
                    l = Qe[f],
                    "function" === h && (h = typeof (s = s.call(r, i, t, n))),
                    "string" === h && ~s.indexOf("random(") && (s = fb(s)),
                    l)
                        l(this, t, f, s, r) && (y = 1);
                    else if ("--" === f.substr(0, 2))
                        a = (getComputedStyle(t).getPropertyValue(f) + "").trim(),
                        s += "",
                        At.lastIndex = 0,
                        At.test(a) || (d = Pa(a),
                        c = Pa(s)),
                        c ? d !== c && (a = zd(t, f, a, c) + c) : d && (s += d),
                        this.add(T, "setProperty", a, s, i, n, 0, 0, f),
                        b.push(f);
                    else if ("undefined" !== h) {
                        if (w && f in w ? (a = "function" == typeof w[f] ? w[f].call(r, i, t, n) : w[f],
                        f in Y.units && !Pa(a) && (a += Y.units[f]),
                        "=" === (a + "").charAt(1) && (a = Ad(t, f))) : a = Ad(t, f),
                        u = parseFloat(a),
                        (p = "string" === h && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)),
                        o = parseFloat(s),
                        f in qe && ("autoAlpha" === f && (1 === u && "hidden" === Ad(t, "visibility") && o && (u = 0),
                        xd(this, T, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)),
                        "scale" !== f && "transform" !== f && ~(f = qe[f]).indexOf(",") && (f = f.split(",")[0])),
                        _ = f in Ie)
                            if (m || ((g = t._gsap).renderTransform && !e.parseTransform || $e(t, e.parseTransform),
                            v = !1 !== e.smoothOrigin && g.smooth,
                            (m = this._pt = new ae(this._pt,T,Ye,0,1,g.renderTransform,g,0,-1)).dep = 1),
                            "scale" === f)
                                this._pt = new ae(this._pt,g,"scaleY",g.scaleY,(p ? p * o : o - g.scaleY) || 0),
                                b.push("scaleY", f),
                                f += "X";
                            else {
                                if ("transformOrigin" === f) {
                                    s = Dd(s),
                                    g.svg ? Ld(t, s, 0, v, 0, this) : ((c = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && xd(this, g, "zOrigin", g.zOrigin, c),
                                    xd(this, T, f, Je(a), Je(s)));
                                    continue
                                }
                                if ("svgOrigin" === f) {
                                    Ld(t, s, 1, v, 0, this);
                                    continue
                                }
                                if (f in Ke) {
                                    Vd(this, g, f, u, s, p);
                                    continue
                                }
                                if ("smoothOrigin" === f) {
                                    xd(this, g, "smooth", g.smooth, s);
                                    continue
                                }
                                if ("force3D" === f) {
                                    g[f] = s;
                                    continue
                                }
                                if ("transform" === f) {
                                    Xd(this, s, t);
                                    continue
                                }
                            }
                        else
                            f in T || (f = Ve(f) || f);
                        if (_ || (o || 0 === o) && (u || 0 === u) && !Ne.test(s) && f in T)
                            o = o || 0,
                            (d = (a + "").substr((u + "").length)) !== (c = Pa(s) || (f in Y.units ? Y.units[f] : d)) && (u = zd(t, f, a, c)),
                            this._pt = new ae(this._pt,_ ? g : T,f,u,p ? p * o : o - u,_ || "px" !== c && "zIndex" !== f || !1 === e.autoRound ? $c : bd),
                            this._pt.u = c || 0,
                            d !== c && (this._pt.b = a,
                            this._pt.r = ad);
                        else if (f in T)
                            Bd.call(this, t, f, a, s);
                        else {
                            if (!(f in t)) {
                                N(f, s);
                                continue
                            }
                            this.add(t, f, a || t[f], s, i, n)
                        }
                        b.push(f)
                    }
            y && ne(this)
        },
        get: Ad,
        aliases: qe,
        getSetter: function getSetter(t, e, i) {
            var n = qe[e];
            return n && n.indexOf(",") < 0 && (e = n),
            e in Ie && e !== Xe && (t._gsap.x || Ad(t, "x")) ? i && ce === i ? "scale" === e ? hd : gd : (ce = i || {}) && ("scale" === e ? id : jd) : t.style && !r(t.style[e]) ? ed : ~e.indexOf("-") ? fd : Jt(t, e)
        },
        core: {
            _removeProperty: wd,
            _getMatrix: Kd
        }
    };
    oe.utils.checkPrefix = Ve,
    sr = ba((nr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (ar = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        Ie[t] = 1
    }),
    ba(ar, function(t) {
        Y.units[t] = "deg",
        Ke[t] = 1
    }),
    qe[sr[13]] = nr + "," + ar,
    ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        qe[e[1]] = sr[e[0]]
    }),
    ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        Y.units[t] = "px"
    }),
    oe.registerPlugin(or);
    var ur = oe.registerPlugin(or) || oe
      , hr = ur.core.Tween;
    e.Back = Me,
    e.Bounce = Se,
    e.CSSPlugin = or,
    e.Circ = ze,
    e.Cubic = we,
    e.Elastic = ke,
    e.Expo = De,
    e.Linear = be,
    e.Power0 = _e,
    e.Power1 = me,
    e.Power2 = ge,
    e.Power3 = ve,
    e.Power4 = ye,
    e.Quad = Te,
    e.Quart = xe,
    e.Quint = Oe,
    e.Sine = Ce,
    e.SteppedEase = Ae,
    e.Strong = Pe,
    e.TimelineLite = qt,
    e.TimelineMax = qt,
    e.TweenLite = Qt,
    e.TweenMax = hr,
    e.default = ur,
    e.gsap = ur;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});
