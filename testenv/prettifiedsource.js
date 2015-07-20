


 /*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }
    function cu(a) {
        if (!cj[a]) {
            var b = c.body, d = f("<" + a + ">").appendTo(b), e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ck || (ck = c.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0), b.appendChild(ck);
                if (!cl || !ck.createElement) {
                    cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), cl.close()
                }
                d = cl.createElement(a), cl.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ck)
            }
            cj[a] = e
        }
        return cj[a]
    }
    function ct(a, b) {
        var c = {};
        f.each(cp.concat.apply([], cp.slice(0, b)), function() {
            c[this] = a
        });
        return c
    }
    function cs() {
        cq = b
    }
    function cr() {
        setTimeout(cs, 0);
        return cq = f.now()
    }
    function ci() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }
    function ch() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }
    function cb(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1) {
                for (h in a.converters) {
                    typeof h == "string" && (e[h.toLowerCase()] = a.converters[h])
                }
            }
            l = k, k = d[g];
            if (k === "*") {
                k = l
            } else {
                if (l !== "*" && l !== k) {
                    m = l + " " + k, n = e[m] || e["* " + k];
                    if (!n) {
                        p = b;
                        for (o in e) {
                            j = o.split(" ");
                            if (j[0] === l || j[0] === "*") {
                                p = e[j[1] + " " + k];
                                if (p) {
                                    o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                    break
                                }
                            }
                        }
                    }
                    !n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
                }
            }
        }
        return c
    }
    function ca(a, c, d) {
        var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k;
        for (i in g) {
            i in d && (c[g[i]] = d[i])
        }
        while (f[0] === "*") {
            f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"))
        }
        if (h) {
            for (i in e) {
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
            }
        }
        if (f[0] in d) {
            j = f[0]
        } else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }
    function b_(a, b, c, d) {
        if (f.isArray(b)) {
            f.each(b, function(b, e) {
                c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
            })
        } else {
            if (!c && f.type(b) === "object") {
                for (var e in b) {
                    b_(a + "[" + e + "]", b[e], c, d)
                }
            } else {
                d(a, b)
            }
        }
    }
    function b$(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) {
            c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d])
        }
        e && f.extend(!0, a, e)
    }
    function bZ(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f], i = 0, j = h ? h.length : 0, k = a === bS, l;
        for (; i < j && (k || !l); i++) {
            l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g)))
        }
        (k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
        return l
    }
    function bY(a) {
        return function(b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bO), e = 0, g = d.length, h, i, j;
                for (; e < g; e++) {
                    h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
                }
            }
        }
    }
    function bB(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight, e = b === "width" ? 1 : 0, g = 4;
        if (d > 0) {
            if (c !== "border") {
                for (; e < g; e += 2) {
                    c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0
                }
            }
            return d + "px"
        }
        d = by(a, b);
        if (d < 0 || d == null) {
            d = a.style[b]
        }
        if (bt.test(d)) {
            return d
        }
        d = parseFloat(d) || 0;
        if (c) {
            for (; e < g; e += 2) {
                d += parseFloat(f.css(a, "padding" + bx[e])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0)
            }
        }
        return d + "px"
    }
    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b), b.innerHTML = a.outerHTML;
        return b.firstChild
    }
    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }
    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio") {
            a.defaultChecked = a.checked
        }
    }
    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }
    function bk(a, b) {
        var c;
        b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached"))
    }
    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a), h = f._data(b, g), i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i) {
                    for (d = 0, e = i[c].length; d < e; d++) {
                        f.event.add(b, c, i[c][d])
                    }
                }
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }
    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function U(a) {
        var b = V.split("|"), c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop())
            }
        }
        return c
    }
    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) {
            return f.grep(a, function(a, d) {
                var e = !!b.call(a, d, a);
                return e === c
            })
        }
        if (b.nodeType) {
            return f.grep(a, function(a, d) {
                return a === b === c
            })
        }
        if (typeof b == "string") {
            var d = f.grep(a, function(a) {
                return a.nodeType === 1
            });
            if (O.test(b)) {
                return f.filter(b, d, !c)
            }
            b = f.filter(b, d)
        }
        return f.grep(a, function(a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }
    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function K() {
        return !0
    }
    function J() {
        return !1
    }
    function n(a, b, c) {
        var d = b + "defer", e = b + "queue", g = b + "mark", h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function() {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }
    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) {
                continue
            }
            if (b !== "toJSON") {
                return !1
            }
        }
        return !0
    }
    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {
                }
                f.data(a, c, d)
            } else {
                d = b
            }
        }
        return d
    }
    function h(a) {
        var b = g[a] = {}, c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) {
            b[a[c]] = !0
        }
        return b
    }
    var c = a.document, d = a.navigator, e = a.location, f = function() {
        function J() {
            if (!e.isReady) {
                try {
                    c.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(J, 1);
                    return
                }
                e.ready()
            }
        }
        var e = function(a, b) {
            return new e.fn.init(a, b, h)
        }, f = a.jQuery, g = a.$, h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/, m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, n = /^[\],:{}\s]*$/, o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, q = /(?:^|:|,)(?:\s*\[)+/g, r = /(webkit)[ \/]([\w.]+)/, s = /(opera)(?:.*version)?[ \/]([\w.]+)/, t = /(msie) ([\w.]+)/, u = /(mozilla)(?:.*? rv:([\w.]+))?/, v = /-([a-z]|[0-9])/ig, w = /^-ms-/, x = function(a, b) {
            return (b + "").toUpperCase()
        }, y = d.userAgent, z, A, B, C = Object.prototype.toString, D = Object.prototype.hasOwnProperty, E = Array.prototype.push, F = Array.prototype.slice, G = String.prototype.trim, H = Array.prototype.indexOf, I = {};
        e.fn = e.prototype = {constructor: e,init: function(a, d, f) {
                var g, h, j, k;
                if (!a) {
                    return this
                }
                if (a.nodeType) {
                    this.context = this[0] = a, this.length = 1;
                    return this
                }
                if (a === "body" && !d && c.body) {
                    this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                    return this
                }
                if (typeof a == "string") {
                    a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                    if (g && (g[1] || !d)) {
                        if (g[1]) {
                            d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                            return e.merge(this, a)
                        }
                        h = c.getElementById(g[2]);
                        if (h && h.parentNode) {
                            if (h.id !== g[2]) {
                                return f.find(a)
                            }
                            this.length = 1, this[0] = h
                        }
                        this.context = c, this.selector = a;
                        return this
                    }
                    return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                }
                if (e.isFunction(a)) {
                    return f.ready(a)
                }
                a.selector !== b && (this.selector = a.selector, this.context = a.context);
                return e.makeArray(a, this)
            },selector: "",jquery: "1.7.2",length: 0,size: function() {
                return this.length
            },toArray: function() {
                return F.call(this, 0)
            },get: function(a) {
                return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
            },pushStack: function(a, b, c) {
                var d = this.constructor();
                e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                return d
            },each: function(a, b) {
                return e.each(this, a, b)
            },ready: function(a) {
                e.bindReady(), A.add(a);
                return this
            },eq: function(a) {
                a = +a;
                return a === -1 ? this.slice(a) : this.slice(a, a + 1)
            },first: function() {
                return this.eq(0)
            },last: function() {
                return this.eq(-1)
            },slice: function() {
                return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
            },map: function(a) {
                return this.pushStack(e.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },end: function() {
                return this.prevObject || this.constructor(null)
            },push: E,sort: [].sort,splice: [].splice}, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function() {
            var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
            typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
            for (; j < k; j++) {
                if ((a = arguments[j]) != null) {
                    for (c in a) {
                        d = i[c], f = a[c];
                        if (i === f) {
                            continue
                        }
                        l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                    }
                }
            }
            return i
        }, e.extend({noConflict: function(b) {
                a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                return e
            },isReady: !1,readyWait: 1,holdReady: function(a) {
                a ? e.readyWait++ : e.ready(!0)
            },ready: function(a) {
                if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                    if (!c.body) {
                        return setTimeout(e.ready, 1)
                    }
                    e.isReady = !0;
                    if (a !== !0 && --e.readyWait > 0) {
                        return
                    }
                    A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
                }
            },bindReady: function() {
                if (!A) {
                    A = e.Callbacks("once memory");
                    if (c.readyState === "complete") {
                        return setTimeout(e.ready, 1)
                    }
                    if (c.addEventListener) {
                        c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1)
                    } else {
                        if (c.attachEvent) {
                            c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
                            var b = !1;
                            try {
                                b = a.frameElement == null
                            } catch (d) {
                            }
                            c.documentElement.doScroll && b && J()
                        }
                    }
                }
            },isFunction: function(a) {
                return e.type(a) === "function"
            },isArray: Array.isArray || function(a) {
                return e.type(a) === "array"
            },isWindow: function(a) {
                return a != null && a == a.window
            },isNumeric: function(a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            },type: function(a) {
                return a == null ? String(a) : I[C.call(a)] || "object"
            },isPlainObject: function(a) {
                if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) {
                    return !1
                }
                try {
                    if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) {
                        return !1
                    }
                } catch (c) {
                    return !1
                }
                var d;
                for (d in a) {
                }
                return d === b || D.call(a, d)
            },isEmptyObject: function(a) {
                for (var b in a) {
                    return !1
                }
                return !0
            },error: function(a) {
                throw new Error(a)
            },parseJSON: function(b) {
                if (typeof b != "string" || !b) {
                    return null
                }
                b = e.trim(b);
                if (a.JSON && a.JSON.parse) {
                    return a.JSON.parse(b)
                }
                if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) {
                    return (new Function("return " + b))()
                }
                e.error("Invalid JSON: " + b)
            },parseXML: function(c) {
                if (typeof c != "string" || !c) {
                    return null
                }
                var d, f;
                try {
                    a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                } catch (g) {
                    d = b
                }
                (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                return d
            },noop: function() {
            },globalEval: function(b) {
                b && j.test(b) && (a.execScript || function(b) {
                    a.eval.call(a, b)
                })(b)
            },camelCase: function(a) {
                return a.replace(w, "ms-").replace(v, x)
            },nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            },each: function(a, c, d) {
                var f, g = 0, h = a.length, i = h === b || e.isFunction(a);
                if (d) {
                    if (i) {
                        for (f in a) {
                            if (c.apply(a[f], d) === !1) {
                                break
                            }
                        }
                    } else {
                        for (; g < h; ) {
                            if (c.apply(a[g++], d) === !1) {
                                break
                            }
                        }
                    }
                } else {
                    if (i) {
                        for (f in a) {
                            if (c.call(a[f], f, a[f]) === !1) {
                                break
                            }
                        }
                    } else {
                        for (; g < h; ) {
                            if (c.call(a[g], g, a[g++]) === !1) {
                                break
                            }
                        }
                    }
                }
                return a
            },trim: G ? function(a) {
                return a == null ? "" : G.call(a)
            } : function(a) {
                return a == null ? "" : (a + "").replace(k, "").replace(l, "")
            },makeArray: function(a, b) {
                var c = b || [];
                if (a != null) {
                    var d = e.type(a);
                    a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                }
                return c
            },inArray: function(a, b, c) {
                var d;
                if (b) {
                    if (H) {
                        return H.call(b, a, c)
                    }
                    d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                    for (; c < d; c++) {
                        if (c in b && b[c] === a) {
                            return c
                        }
                    }
                }
                return -1
            },merge: function(a, c) {
                var d = a.length, e = 0;
                if (typeof c.length == "number") {
                    for (var f = c.length; e < f; e++) {
                        a[d++] = c[e]
                    }
                } else {
                    while (c[e] !== b) {
                        a[d++] = c[e++]
                    }
                }
                a.length = d;
                return a
            },grep: function(a, b, c) {
                var d = [], e;
                c = !!c;
                for (var f = 0, g = a.length; f < g; f++) {
                    e = !!b(a[f], f), c !== e && d.push(a[f])
                }
                return d
            },map: function(a, c, d) {
                var f, g, h = [], i = 0, j = a.length, k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                if (k) {
                    for (; i < j; i++) {
                        f = c(a[i], i, d), f != null && (h[h.length] = f)
                    }
                } else {
                    for (g in a) {
                        f = c(a[g], g, d), f != null && (h[h.length] = f)
                    }
                }
                return h.concat.apply([], h)
            },guid: 1,proxy: function(a, c) {
                if (typeof c == "string") {
                    var d = a[c];
                    c = a, a = d
                }
                if (!e.isFunction(a)) {
                    return b
                }
                var f = F.call(arguments, 2), g = function() {
                    return a.apply(c, f.concat(F.call(arguments)))
                };
                g.guid = a.guid = a.guid || g.guid || e.guid++;
                return g
            },access: function(a, c, d, f, g, h, i) {
                var j, k = d == null, l = 0, m = a.length;
                if (d && typeof d == "object") {
                    for (l in d) {
                        e.access(a, c, l, d[l], 1, h, f)
                    }
                    g = 1
                } else {
                    if (f !== b) {
                        j = i === b && e.isFunction(f), k && (j ? (j = c, c = function(a, b, c) {
                            return j.call(e(a), c)
                        }) : (c.call(a, f), c = null));
                        if (c) {
                            for (; l < m; l++) {
                                c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i)
                            }
                        }
                        g = 1
                    }
                }
                return g ? a : k ? c.call(a) : m ? c(a[0], d) : h
            },now: function() {
                return (new Date).getTime()
            },uaMatch: function(a) {
                a = a.toLowerCase();
                var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                return {browser: b[1] || "",version: b[2] || "0"}
            },sub: function() {
                function a(b, c) {
                    return new a.fn.init(b, c)
                }
                e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function(d, f) {
                    f && f instanceof e && !(f instanceof a) && (f = a(f));
                    return e.fn.init.call(this, d, f, b)
                }, a.fn.init.prototype = a.fn;
                var b = a(c);
                return a
            },browser: {}}), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
            I["[object " + b + "]"] = b.toLowerCase()
        }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function() {
            c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
        } : c.attachEvent && (B = function() {
            c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
        });
        return e
    }(), g = {};
    f.Callbacks = function(a) {
        a = a ? g[a] || h(a) : {};
        var c = [], d = [], e, i, j, k, l, m, n = function(b) {
            var d, e, g, h, i;
            for (d = 0, e = b.length; d < e; d++) {
                g = b[d], h = f.type(g), h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
            }
        }, o = function(b, f) {
            f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m = k || 0, k = 0, l = c.length;
            for (; c && m < l; m++) {
                if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                    e = !0;
                    break
                }
            }
            j = !1, c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])))
        }, p = {add: function() {
                if (c) {
                    var a = c.length;
                    n(arguments), j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1]))
                }
                return this
            },remove: function() {
                if (c) {
                    var b = arguments, d = 0, e = b.length;
                    for (; d < e; d++) {
                        for (var f = 0; f < c.length; f++) {
                            if (b[d] === c[f]) {
                                j && f <= l && (l--, f <= m && m--), c.splice(f--, 1);
                                if (a.unique) {
                                    break
                                }
                            }
                        }
                    }
                }
                return this
            },has: function(a) {
                if (c) {
                    var b = 0, d = c.length;
                    for (; b < d; b++) {
                        if (a === c[b]) {
                            return !0
                        }
                    }
                }
                return !1
            },empty: function() {
                c = [];
                return this
            },disable: function() {
                c = d = e = b;
                return this
            },disabled: function() {
                return !c
            },lock: function() {
                d = b, (!e || e === !0) && p.disable();
                return this
            },locked: function() {
                return !d
            },fireWith: function(b, c) {
                d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
                return this
            },fire: function() {
                p.fireWith(this, arguments);
                return this
            },fired: function() {
                return !!i
            }};
        return p
    };
    var i = [].slice;
    f.extend({Deferred: function(a) {
            var b = f.Callbacks("once memory"), c = f.Callbacks("once memory"), d = f.Callbacks("memory"), e = "pending", g = {resolve: b,reject: c,notify: d}, h = {done: b.add,fail: c.add,progress: d.add,state: function() {
                    return e
                },isResolved: b.fired,isRejected: c.fired,then: function(a, b, c) {
                    i.done(a).fail(b).progress(c);
                    return this
                },always: function() {
                    i.done.apply(i, arguments).fail.apply(i, arguments);
                    return this
                },pipe: function(a, b, c) {
                    return f.Deferred(function(d) {
                        f.each({done: [a, "resolve"],fail: [b, "reject"],progress: [c, "notify"]}, function(a, b) {
                            var c = b[0], e = b[1], g;
                            f.isFunction(c) ? i[a](function() {
                                g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                            }) : i[a](d[e])
                        })
                    }).promise()
                },promise: function(a) {
                    if (a == null) {
                        a = h
                    } else {
                        for (var b in h) {
                            a[b] = h[b]
                        }
                    }
                    return a
                }}, i = h.promise({}), j;
            for (j in g) {
                i[j] = g[j].fire, i[j + "With"] = g[j].fireWith
            }
            i.done(function() {
                e = "resolved"
            }, c.disable, d.lock).fail(function() {
                e = "rejected"
            }, b.disable, d.lock), a && a.call(i, i);
            return i
        },when: function(a) {
            function m(a) {
                return function(b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
                }
            }
            function l(a) {
                return function(c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
                }
            }
            var b = i.call(arguments, 0), c = 0, d = b.length, e = Array(d), g = d, h = d, j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(), k = j.promise();
            if (d > 1) {
                for (; c < d; c++) {
                    b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g
                }
                g || j.resolveWith(j, b)
            } else {
                j !== a && j.resolveWith(j, d ? [a] : [])
            }
            return k
        }}), f.support = function() {
        var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"), q = c.documentElement;
        p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = p.getElementsByTagName("*"), e = p.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) {
            return {}
        }
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = p.getElementsByTagName("input")[0], b = {leadingWhitespace: p.firstChild.nodeType === 3,tbody: !p.getElementsByTagName("tbody").length,htmlSerialize: !!p.getElementsByTagName("link").length,style: /top/.test(e.getAttribute("style")),hrefNormalized: e.getAttribute("href") === "/a",opacity: /^0.55/.test(e.style.opacity),cssFloat: !!e.style.cssFloat,checkOn: i.value === "on",optSelected: h.selected,getSetAttribute: p.className !== "t",enctype: !!c.createElement("form").enctype,html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",submitBubbles: !0,changeBubbles: !0,focusinBubbles: !1,deleteExpando: !0,noCloneEvent: !0,inlineBlockNeedsLayout: !1,shrinkWrapBlocks: !1,reliableMarginRight: !0,pixelMargin: !0}, f.boxModel = b.boxModel = c.compatMode === "CSS1Compat", i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete p.test
        } catch (r) {
            b.deleteExpando = !1
        }
        !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function() {
            b.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), p.appendChild(i), j = c.createDocumentFragment(), j.appendChild(p.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, j.removeChild(i), j.appendChild(p);
        if (p.attachEvent) {
            for (n in {submit: 1,change: 1,focusin: 1}) {
                m = "on" + n, o = m in p, o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"), b[n + "Bubbles"] = o
            }
        }
        j.removeChild(p), j = g = h = p = i = null, f(function() {
            var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0];
            !u || (m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div><table " + n + "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {marginRight: 0}).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {doesNotAddBorder: g.offsetTop !== 5,doesAddBorderForTableAndCells: i.offsetTop === 5}, g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {marginTop: 0}).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j))
        });
        return b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/, k = /([A-Z])/g;
    f.extend({cache: {},uuid: 0,expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),noData: {embed: !0,object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet: !0},hasData: function(a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },data: function(a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g, h, i, j = f.expando, k = typeof c == "string", l = a.nodeType, m = l ? f.cache : a, n = l ? a[j] : a[j] && j, o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) {
                    return
                }
                n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") {
                    e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c)
                }
                g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c]) {
                    return g.events
                }
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },removeData: function(a, b, c) {
            if (!!f.acceptData(a)) {
                var d, e, g, h = f.expando, i = a.nodeType, j = i ? f.cache : a, k = i ? a[h] : h;
                if (!j[k]) {
                    return
                }
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0, g = b.length; e < g; e++) {
                            delete d[b[e]]
                        }
                        if (!(c ? m : f.isEmptyObject)(d)) {
                            return
                        }
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) {
                        return
                    }
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            }
        },_data: function(a, b, c) {
            return f.data(a, b, c, !0)
        },acceptData: function(a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) {
                    return b !== !0 && a.getAttribute("classid") === b
                }
            }
            return !0
        }}), f.fn.extend({data: function(a, c) {
            var d, e, g, h, i, j = this[0], k = 0, m = null;
            if (a === b) {
                if (this.length) {
                    m = f.data(j);
                    if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
                        g = j.attributes;
                        for (i = g.length; k < i; k++) {
                            h = g[k].name, h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]))
                        }
                        f._data(j, "parsedAttrs", !0)
                    }
                }
                return m
            }
            if (typeof a == "object") {
                return this.each(function() {
                    f.data(this, a)
                })
            }
            d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!";
            return f.access(this, function(c) {
                if (c === b) {
                    m = this.triggerHandler("getData" + e, [d[0]]), m === b && j && (m = f.data(j, a), m = l(j, a, m));
                    return m === b && d[1] ? this.data(d[0]) : m
                }
                d[1] = c, this.each(function() {
                    var b = f(this);
                    b.triggerHandler("setData" + e, d), f.data(this, a, c), b.triggerHandler("changeData" + e, d)
                })
            }, null, c, arguments.length > 1, null, !1)
        },removeData: function(a) {
            return this.each(function() {
                f.removeData(this, a)
            })
        }}), f.extend({_mark: function(a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        },_unmark: function(a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark", e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        },queue: function(a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        },dequeue: function(a, b) {
            b = b || "fx";
            var c = f.queue(a, b), d = c.shift(), e = {};
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function() {
                f.dequeue(a, b)
            }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }}), f.fn.extend({queue: function(a, c) {
            var d = 2;
            typeof a != "string" && (c = a, a = "fx", d--);
            if (arguments.length < d) {
                return f.queue(this[0], a)
            }
            return c === b ? this : this.each(function() {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        },dequeue: function(a) {
            return this.each(function() {
                f.dequeue(this, a)
            })
        },delay: function(a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },promise: function(a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark", l;
            while (g--) {
                if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) {
                    h++, l.add(m)
                }
            }
            m();
            return d.promise(c)
        }});
    var o = /[\n\t\r]/g, p = /\s+/, q = /\r/g, r = /^(?:button|input)$/i, s = /^(?:button|input|object|select|textarea)$/i, t = /^a(?:rea)?$/i, u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, v = f.support.getSetAttribute, w, x, y;
    f.fn.extend({attr: function(a, b) {
            return f.access(this, f.attr, a, b, arguments.length > 1)
        },removeAttr: function(a) {
            return this.each(function() {
                f.removeAttr(this, a)
            })
        },prop: function(a, b) {
            return f.access(this, f.prop, a, b, arguments.length > 1)
        },removeProp: function(a) {
            a = f.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {
                }
            })
        },addClass: function(a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) {
                return this.each(function(b) {
                    f(this).addClass(a.call(this, b, this.className))
                })
            }
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1) {
                        if (!e.className && b.length === 1) {
                            e.className = a
                        } else {
                            g = " " + e.className + " ";
                            for (h = 0, i = b.length; h < i; h++) {
                                ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ")
                            }
                            e.className = f.trim(g)
                        }
                    }
                }
            }
            return this
        },removeClass: function(a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) {
                return this.each(function(b) {
                    f(this).removeClass(a.call(this, b, this.className))
                })
            }
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className) {
                        if (a) {
                            h = (" " + g.className + " ").replace(o, " ");
                            for (i = 0, j = c.length; i < j; i++) {
                                h = h.replace(" " + c[i] + " ", " ")
                            }
                            g.className = f.trim(h)
                        } else {
                            g.className = ""
                        }
                    }
                }
            }
            return this
        },toggleClass: function(a, b) {
            var c = typeof a, d = typeof b == "boolean";
            if (f.isFunction(a)) {
                return this.each(function(c) {
                    f(this).toggleClass(a.call(this, c, this.className, b), b)
                })
            }
            return this.each(function() {
                if (c === "string") {
                    var e, g = 0, h = f(this), i = b, j = a.split(p);
                    while (e = j[g++]) {
                        i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                    }
                } else {
                    if (c === "undefined" || c === "boolean") {
                        this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
                    }
                }
            })
        },hasClass: function(a) {
            var b = " " + a + " ", c = 0, d = this.length;
            for (; c < d; c++) {
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) {
                    return !0
                }
            }
            return !1
        },val: function(a) {
            var c, d, e, g = this[0];
            if (!!arguments.length) {
                e = f.isFunction(a);
                return this.each(function(d) {
                    var g = f(this), h;
                    if (this.nodeType === 1) {
                        e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function(a) {
                            return a == null ? "" : a + ""
                        })), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
                        if (!c || !("set" in c) || c.set(this, h, "value") === b) {
                            this.value = h
                        }
                    }
                })
            }
            if (g) {
                c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
                if (c && "get" in c && (d = c.get(g, "value")) !== b) {
                    return d
                }
                d = g.value;
                return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
            }
        }}), f.extend({valHooks: {option: {get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }},select: {get: function(a) {
                    var b, c, d, e, g = a.selectedIndex, h = [], i = a.options, j = a.type === "select-one";
                    if (g < 0) {
                        return null
                    }
                    c = j ? g : 0, d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) {
                                return b
                            }
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length) {
                        return f(i[g]).val()
                    }
                    return h
                },set: function(a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function() {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }}},attrFn: {val: !0,css: !0,html: !0,text: !0,data: !0,width: !0,height: !0,offset: !0},attr: function(a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if (!!a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f.attrFn) {
                    return f(a)[c](d)
                }
                if (typeof a.getAttribute == "undefined") {
                    return f.prop(a, c, d)
                }
                i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return
                    }
                    if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) {
                        return g
                    }
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (h && "get" in h && i && (g = h.get(a, c)) !== null) {
                    return g
                }
                g = a.getAttribute(c);
                return g === null ? b : g
            }
        },removeAttr: function(a, b) {
            var c, d, e, g, h, i = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p), g = d.length;
                for (; i < g; i++) {
                    e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1))
                }
            }
        },attrHooks: {type: {set: function(a, b) {
                    if (r.test(a.nodeName) && a.parentNode) {
                        f.error("type property can't be changed")
                    } else {
                        if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                            var c = a.value;
                            a.setAttribute("type", b), c && (a.value = c);
                            return b
                        }
                    }
                }},value: {get: function(a, b) {
                    if (w && f.nodeName(a, "button")) {
                        return w.get(a, b)
                    }
                    return b in a ? a.value : null
                },set: function(a, b, c) {
                    if (w && f.nodeName(a, "button")) {
                        return w.set(a, b, c)
                    }
                    a.value = b
                }}},propFix: {tabindex: "tabIndex",readonly: "readOnly","for": "htmlFor","class": "className",maxlength: "maxLength",cellspacing: "cellSpacing",cellpadding: "cellPadding",rowspan: "rowSpan",colspan: "colSpan",usemap: "useMap",frameborder: "frameBorder",contenteditable: "contentEditable"},prop: function(a, c, d) {
            var e, g, h, i = a.nodeType;
            if (!!a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
                return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
            }
        },propHooks: {tabIndex: {get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }}}}), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {get: function(a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },set: function(a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }}, v || (y = {name: !0,id: !0,coords: !0}, w = f.valHooks.button = {get: function(a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        },set: function(a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }}, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function(a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {set: function(a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }})
    }), f.attrHooks.contenteditable = {get: w.get,set: function(a, b, c) {
            b === "" && (b = "false"), w.set(a, b, c)
        }}), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function(a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {get: function(a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }})
    }), f.support.style || (f.attrHooks.style = {get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },set: function(a, b) {
            return a.style.cssText = "" + b
        }}), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {get: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }})), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {get: function(a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }}
    }), f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = f.extend(f.valHooks[this], {set: function(a, b) {
                if (f.isArray(b)) {
                    return a.checked = f.inArray(f(a).val(), b) >= 0
                }
            }})
    });
    var z = /^(?:textarea|input|select)$/i, A = /^([^\.]*)?(?:\.(.+))?$/, B = /(?:^|\s)hover(\.\S+)?\b/, C = /^key/, D = /^(?:mouse|contextmenu)|click/, E = /^(?:focusinfocus|focusoutblur)$/, F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, G = function(a) {
        var b = F.exec(a);
        b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
        return b
    }, H = function(a, b) {
        var c = a.attributes || {};
        return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
    }, I = function(a) {
        return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
    };
    f.event = {add: function(a, c, d, e, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                d.handler && (p = d, d = p.handler, g = p.selector), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function(a) {
                    return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                }, i.elem = a), c = f.trim(I(c)).split(" ");
                for (k = 0; k < c.length; k++) {
                    l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({type: m,origType: l[1],data: e,handler: d,guid: d.guid,selector: g,quick: g && G(g),namespace: n.join(".")}, p), r = j[m];
                    if (!r) {
                        r = j[m] = [], r.delegateCount = 0;
                        if (!s.setup || s.setup.call(a, e, n, i) === !1) {
                            a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                        }
                    }
                    s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
                }
                a = null
            }
        },global: {},remove: function(a, b, c, d, e) {
            var g = f.hasData(a) && f._data(a), h, i, j, k, l, m, n, o, p, q, r, s;
            if (!!g && !!(o = g.events)) {
                b = f.trim(I(b || "")).split(" ");
                for (h = 0; h < b.length; h++) {
                    i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                    if (!j) {
                        for (j in o) {
                            f.event.remove(a, j + b[h], c, d, !0)
                        }
                        continue
                    }
                    p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (n = 0; n < r.length; n++) {
                        s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s))
                    }
                    r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
                }
                f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
            }
        },customEvent: {getData: !0,setData: !0,changeData: !0},trigger: function(c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c, i = [], j, k, l, m, n, o, p, q, r, s;
                if (E.test(h + f.event.triggered)) {
                    return
                }
                h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h]) {
                    return
                }
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
                if (!e) {
                    j = f.cache;
                    for (l in j) {
                        j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0)
                    }
                    return
                }
                c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1) {
                    return
                }
                r = [[e, p.bindType || h]];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                    for (; m; m = m.parentNode) {
                        r.push([m, s]), n = m
                    }
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++) {
                    m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault()
                }
                c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                return c.result
            }
        },dispatch: function(c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [], e = d.delegateCount, g = [].slice.call(arguments, 0), h = !c.exclusive && !c.namespace, i = f.event.special[c.type] || {}, j = [], k, l, m, n, o, p, q, r, s, t, u;
            g[0] = c, c.delegateTarget = this;
            if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
                if (e && (!c.button || c.type !== "click")) {
                    n = f(this), n.context = this.ownerDocument || this;
                    for (m = c.target; m != this; m = m.parentNode || this) {
                        if (m.disabled !== !0) {
                            p = {}, r = [], n[0] = m;
                            for (k = 0; k < e; k++) {
                                s = d[k], t = s.selector, p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s)
                            }
                            r.length && j.push({elem: m,matches: r})
                        }
                    }
                }
                d.length > e && j.push({elem: this,matches: d.slice(e)});
                for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                    q = j[k], c.currentTarget = q.elem;
                    for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
                        s = q.matches[l];
                        if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace)) {
                            c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
                        }
                    }
                }
                i.postDispatch && i.postDispatch.call(this, c);
                return c.result
            }
        },props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {},keyHooks: {props: "char charCode key keyCode".split(" "),filter: function(a, b) {
                a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                return a
            }},mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(a, d) {
                var e, f, g, h = d.button, i = d.fromElement;
                a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                return a
            }},fix: function(a) {
            if (a[f.expando]) {
                return a
            }
            var d, e, g = a, h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d; ) {
                e = i[--d], a[e] = g[e]
            }
            a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a
        },special: {ready: {setup: f.bindReady},load: {noBubble: !0},focus: {delegateType: "focusin"},blur: {delegateType: "focusout"},beforeunload: {setup: function(a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                },teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }}},simulate: function(a, b, c, d) {
            var e = f.extend(new f.Event, c, {type: a,isSimulated: !0,originalEvent: {}});
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }}, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function(a, b) {
        if (!(this instanceof f.Event)) {
            return new f.Event(a, b)
        }
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
    }, f.Event.prototype = {preventDefault: function() {
            this.isDefaultPrevented = K;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },stopPropagation: function() {
            this.isPropagationStopped = K;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = K, this.stopPropagation()
        },isDefaultPrevented: J,isPropagationStopped: J,isImmediatePropagationStopped: J}, f.each({mouseenter: "mouseover",mouseleave: "mouseout"}, function(a, b) {
        f.event.special[a] = {delegateType: b,bindType: b,handle: function(a) {
                var c = this, d = a.relatedTarget, e = a.handleObj, g = e.selector, h;
                if (!d || d !== c && !f.contains(c, d)) {
                    a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b
                }
                return h
            }}
    }), f.support.submitBubbles || (f.event.special.submit = {setup: function() {
            if (f.nodeName(this, "form")) {
                return !1
            }
            f.event.add(this, "click._submit keypress._submit", function(a) {
                var c = a.target, d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                d && !d._submit_attached && (f.event.add(d, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), d._submit_attached = !0)
            })
        },postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
        },teardown: function() {
            if (f.nodeName(this, "form")) {
                return !1
            }
            f.event.remove(this, "._submit")
        }}), f.support.changeBubbles || (f.event.special.change = {setup: function() {
            if (z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") {
                    f.event.add(this, "propertychange._change", function(a) {
                        a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), f.event.add(this, "click._change", function(a) {
                        this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                    })
                }
                return !1
            }
            f.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function(a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                }), b._change_attached = !0)
            })
        },handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") {
                return a.handleObj.handler.apply(this, arguments)
            }
        },teardown: function() {
            f.event.remove(this, "._change");
            return z.test(this.nodeName)
        }}), f.support.focusinBubbles || f.each({focus: "focusin",blur: "focusout"}, function(a, b) {
        var d = 0, e = function(a) {
            f.event.simulate(b, a.target, f.event.fix(a), !0)
        };
        f.event.special[b] = {setup: function() {
                d++ === 0 && c.addEventListener(a, e, !0)
            },teardown: function() {
                --d === 0 && c.removeEventListener(a, e, !0)
            }}
    }), f.fn.extend({on: function(a, c, d, e, g) {
            var h, i;
            if (typeof a == "object") {
                typeof c != "string" && (d = d || c, c = b);
                for (i in a) {
                    this.on(i, c, d, a[i], g)
                }
                return this
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1) {
                e = J
            } else {
                if (!e) {
                    return this
                }
            }
            g === 1 && (h = e, e = function(a) {
                f().off(a);
                return h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = f.guid++));
            return this.each(function() {
                f.event.add(this, a, e, d, c)
            })
        },one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },off: function(a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
                return this
            }
            if (typeof a == "object") {
                for (var g in a) {
                    this.off(g, c, a[g])
                }
                return this
            }
            if (c === !1 || typeof c == "function") {
                d = c, c = b
            }
            d === !1 && (d = J);
            return this.each(function() {
                f.event.remove(this, a, d, c)
            })
        },bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },unbind: function(a, b) {
            return this.off(a, null, b)
        },live: function(a, b, c) {
            f(this.context).on(a, this.selector, b, c);
            return this
        },die: function(a, b) {
            f(this.context).off(a, this.selector || "**", b);
            return this
        },delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },undelegate: function(a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        },trigger: function(a, b) {
            return this.each(function() {
                f.event.trigger(a, b, this)
            })
        },triggerHandler: function(a, b) {
            if (this[0]) {
                return f.event.trigger(a, b, this[0], !0)
            }
        },toggle: function(a) {
            var b = arguments, c = a.guid || f.guid++, d = 0, e = function(c) {
                var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                return b[e].apply(this, arguments) || !1
            };
            e.guid = c;
            while (d < b.length) {
                b[d++].guid = c
            }
            return this.click(e)
        },hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }}), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        f.fn[b] = function(a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }), function() {
        function x(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else {
                                if (m.filter(b, [j]).length > 0) {
                                    k = j;
                                    break
                                }
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        function w(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, d = "sizcache" + (Math.random() + "").replace(".", ""), e = 0, g = Object.prototype.toString, h = !1, i = !0, j = /\\/g, k = /\r\n/g, l = /\W/;
        [0, 0].sort(function() {
            i = !1;
            return 0
        });
        var m = function(b, d, e, f) {
            e = e || [], d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9) {
                return []
            }
            if (!b || typeof b != "string") {
                return e
            }
            var i, j, k, l, n, q, r, t, u = !0, v = m.isXML(d), w = [], x = b;
            do {
                a.exec(""), i = a.exec(x);
                if (i) {
                    x = i[3], w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break
                    }
                }
            } while (i);
            if (w.length > 1 && p.exec(b)) {
                if (w.length === 2 && o.relative[w[0]]) {
                    j = y(w[0] + w[1], d, f)
                } else {
                    j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                    while (w.length) {
                        b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
                    }
                }
            } else {
                !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                if (d) {
                    n = f ? {expr: w.pop(),set: s(f)} : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                    while (w.length) {
                        q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                    }
                } else {
                    k = w = []
                }
            }
            k || (k = j), k || m.error(q || b);
            if (g.call(k) === "[object Array]") {
                if (!u) {
                    e.push.apply(e, k)
                } else {
                    if (d && d.nodeType === 1) {
                        for (t = 0; k[t] != null; t++) {
                            k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t])
                        }
                    } else {
                        for (t = 0; k[t] != null; t++) {
                            k[t] && k[t].nodeType === 1 && e.push(j[t])
                        }
                    }
                }
            } else {
                s(k, e)
            }
            l && (m(l, h, e, f), m.uniqueSort(e));
            return e
        };
        m.uniqueSort = function(a) {
            if (u) {
                h = i, a.sort(u);
                if (h) {
                    for (var b = 1; b < a.length; b++) {
                        a[b] === a[b - 1] && a.splice(b--, 1)
                    }
                }
            }
            return a
        }, m.matches = function(a, b) {
            return m(a, null, null, b)
        }, m.matchesSelector = function(a, b) {
            return m(b, null, null, [a]).length > 0
        }, m.find = function(a, b, c) {
            var d, e, f, g, h, i;
            if (!a) {
                return []
            }
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1], g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return {set: d,expr: a}
        }, m.filter = function(a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter) {
                    if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                        k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                        if (l.substr(l.length - 1) === "\\") {
                            continue
                        }
                        s === r && (r = []);
                        if (o.preFilter[h]) {
                            f = o.preFilter[h](f, s, d, r, e, t);
                            if (!f) {
                                g = i = !0
                            } else {
                                if (f === !0) {
                                    continue
                                }
                            }
                        }
                        if (f) {
                            for (n = 0; (j = s[n]) != null; n++) {
                                j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0))
                            }
                        }
                        if (i !== b) {
                            d || (s = r), a = a.replace(o.match[h], "");
                            if (!g) {
                                return []
                            }
                            break
                        }
                    }
                }
                if (a === q) {
                    if (g == null) {
                        m.error(a)
                    } else {
                        break
                    }
                }
                q = a
            }
            return s
        }, m.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        };
        var n = m.getText = function(a) {
            var b, c, d = a.nodeType, e = "";
            if (d) {
                if (d === 1 || d === 9 || d === 11) {
                    if (typeof a.textContent == "string") {
                        return a.textContent
                    }
                    if (typeof a.innerText == "string") {
                        return a.innerText.replace(k, "")
                    }
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        e += n(a)
                    }
                } else {
                    if (d === 3 || d === 4) {
                        return a.nodeValue
                    }
                }
            } else {
                for (b = 0; c = a[b]; b++) {
                    c.nodeType !== 8 && (e += n(c))
                }
            }
            return e
        }, o = m.selectors = {order: ["ID", "NAME", "TAG"],match: {ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch: {},attrMap: {"class": "className","for": "htmlFor"},attrHandle: {href: function(a) {
                    return a.getAttribute("href")
                },type: function(a) {
                    return a.getAttribute("type")
                }},relative: {"+": function(a, b) {
                    var c = typeof b == "string", d = c && !l.test(b), e = c && !d;
                    d && (b = b.toLowerCase());
                    for (var f = 0, g = a.length, h; f < g; f++) {
                        if (h = a[f]) {
                            while ((h = h.previousSibling) && h.nodeType !== 1) {
                            }
                            a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                        }
                    }
                    e && m.filter(b, a, !0)
                },">": function(a, b) {
                    var c, d = typeof b == "string", e = 0, f = a.length;
                    if (d && !l.test(b)) {
                        b = b.toLowerCase();
                        for (; e < f; e++) {
                            c = a[e];
                            if (c) {
                                var g = c.parentNode;
                                a[e] = g.nodeName.toLowerCase() === b ? g : !1
                            }
                        }
                    } else {
                        for (; e < f; e++) {
                            c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b)
                        }
                        d && m.filter(b, a, !0)
                    }
                },"": function(a, b, c) {
                    var d, f = e++, g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
                },"~": function(a, b, c) {
                    var d, f = e++, g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
                }},find: {ID: function(a, b, c) {
                    if (typeof b.getElementById != "undefined" && !c) {
                        var d = b.getElementById(a[1]);
                        return d && d.parentNode ? [d] : []
                    }
                },NAME: function(a, b) {
                    if (typeof b.getElementsByName != "undefined") {
                        var c = [], d = b.getElementsByName(a[1]);
                        for (var e = 0, f = d.length; e < f; e++) {
                            d[e].getAttribute("name") === a[1] && c.push(d[e])
                        }
                        return c.length === 0 ? null : c
                    }
                },TAG: function(a, b) {
                    if (typeof b.getElementsByTagName != "undefined") {
                        return b.getElementsByTagName(a[1])
                    }
                }},preFilter: {CLASS: function(a, b, c, d, e, f) {
                    a = " " + a[1].replace(j, "") + " ";
                    if (f) {
                        return a
                    }
                    for (var g = 0, h; (h = b[g]) != null; g++) {
                        h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1))
                    }
                    return !1
                },ID: function(a) {
                    return a[1].replace(j, "")
                },TAG: function(a, b) {
                    return a[1].replace(j, "").toLowerCase()
                },CHILD: function(a) {
                    if (a[1] === "nth") {
                        a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                    } else {
                        a[2] && m.error(a[0])
                    }
                    a[0] = e++;
                    return a
                },ATTR: function(a, b, c, d, e, f) {
                    var g = a[1] = a[1].replace(j, "");
                    !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                    return a
                },PSEUDO: function(b, c, d, e, f) {
                    if (b[1] === "not") {
                        if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) {
                            b[3] = m(b[3], null, null, c)
                        } else {
                            var g = m.filter(b[3], c, d, !0 ^ f);
                            d || e.push.apply(e, g);
                            return !1
                        }
                    } else {
                        if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) {
                            return !0
                        }
                    }
                    return b
                },POS: function(a) {
                    a.unshift(!0);
                    return a
                }},filters: {enabled: function(a) {
                    return a.disabled === !1 && a.type !== "hidden"
                },disabled: function(a) {
                    return a.disabled === !0
                },checked: function(a) {
                    return a.checked === !0
                },selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return a.selected === !0
                },parent: function(a) {
                    return !!a.firstChild
                },empty: function(a) {
                    return !a.firstChild
                },has: function(a, b, c) {
                    return !!m(c[3], a).length
                },header: function(a) {
                    return /h\d/i.test(a.nodeName)
                },text: function(a) {
                    var b = a.getAttribute("type"), c = a.type;
                    return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                },radio: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                },checkbox: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                },file: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "file" === a.type
                },password: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "password" === a.type
                },submit: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "submit" === a.type
                },image: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "image" === a.type
                },reset: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "reset" === a.type
                },button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && "button" === a.type || b === "button"
                },input: function(a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                },focus: function(a) {
                    return a === a.ownerDocument.activeElement
                }},setFilters: {first: function(a, b) {
                    return b === 0
                },last: function(a, b, c, d) {
                    return b === d.length - 1
                },even: function(a, b) {
                    return b % 2 === 0
                },odd: function(a, b) {
                    return b % 2 === 1
                },lt: function(a, b, c) {
                    return b < c[3] - 0
                },gt: function(a, b, c) {
                    return b > c[3] - 0
                },nth: function(a, b, c) {
                    return c[3] - 0 === b
                },eq: function(a, b, c) {
                    return c[3] - 0 === b
                }},filter: {PSEUDO: function(a, b, c, d) {
                    var e = b[1], f = o.filters[e];
                    if (f) {
                        return f(a, c, b, d)
                    }
                    if (e === "contains") {
                        return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0
                    }
                    if (e === "not") {
                        var g = b[3];
                        for (var h = 0, i = g.length; h < i; h++) {
                            if (g[h] === a) {
                                return !1
                            }
                        }
                        return !0
                    }
                    m.error(e)
                },CHILD: function(a, b) {
                    var c, e, f, g, h, i, j, k = b[1], l = a;
                    switch (k) {
                        case "only":
                        case "first":
                            while (l = l.previousSibling) {
                                if (l.nodeType === 1) {
                                    return !1
                                }
                            }
                            if (k === "first") {
                                return !0
                            }
                            l = a;
                        case "last":
                            while (l = l.nextSibling) {
                                if (l.nodeType === 1) {
                                    return !1
                                }
                            }
                            return !0;
                        case "nth":
                            c = b[2], e = b[3];
                            if (c === 1 && e === 0) {
                                return !0
                            }
                            f = b[0], g = a.parentNode;
                            if (g && (g[d] !== f || !a.nodeIndex)) {
                                i = 0;
                                for (l = g.firstChild; l; l = l.nextSibling) {
                                    l.nodeType === 1 && (l.nodeIndex = ++i)
                                }
                                g[d] = f
                            }
                            j = a.nodeIndex - e;
                            return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                    }
                },ID: function(a, b) {
                    return a.nodeType === 1 && a.getAttribute("id") === b
                },TAG: function(a, b) {
                    return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
                },CLASS: function(a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                },ATTR: function(a, b) {
                    var c = b[1], d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c), e = d + "", f = b[2], g = b[4];
                    return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                },POS: function(a, b, c, d) {
                    var e = b[2], f = o.setFilters[e];
                    if (f) {
                        return f(a, c, b, d)
                    }
                }}}, p = o.match.POS, q = function(a, b) {
            return "\\" + (b - 0 + 1)
        };
        for (var r in o.match) {
            o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q))
        }
        o.match.globalPOS = p;
        var s = function(a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (t) {
            s = function(a, b) {
                var c = 0, d = b || [];
                if (g.call(a) === "[object Array]") {
                    Array.prototype.push.apply(d, a)
                } else {
                    if (typeof a.length == "number") {
                        for (var e = a.length; c < e; c++) {
                            d.push(a[c])
                        }
                    } else {
                        for (; a[c]; c++) {
                            d.push(a[c])
                        }
                    }
                }
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function(a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) {
                return a.compareDocumentPosition ? -1 : 1
            }
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (u = function(a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex) {
                return a.sourceIndex - b.sourceIndex
            }
            var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g;
            if (g === i) {
                return v(a, b)
            }
            if (!g) {
                return -1
            }
            if (!i) {
                return 1
            }
            while (j) {
                e.unshift(j), j = j.parentNode
            }
            j = i;
            while (j) {
                f.unshift(j), j = j.parentNode
            }
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++) {
                if (e[k] !== f[k]) {
                    return v(e[k], f[k])
                }
            }
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        }, v = function(a, b, c) {
            if (a === b) {
                return c
            }
            var d = a.nextSibling;
            while (d) {
                if (d === b) {
                    return -1
                }
                d = d.nextSibling
            }
            return 1
        }), function() {
            var a = c.createElement("div"), d = "script" + (new Date).getTime(), e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function(a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, o.filter.ID = function(a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }), e.removeChild(a), e = a = null
        }(), function() {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) {
                        c[e].nodeType === 1 && d.push(c[e])
                    }
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function(a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), c.querySelectorAll && function() {
            var a = m, b = c.createElement("div"), d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                m = function(b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1]) {
                                return s(e.getElementsByTagName(b), f)
                            }
                            if (h[2] && o.find.CLASS && e.getElementsByClassName) {
                                return s(e.getElementsByClassName(h[2]), f)
                            }
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body) {
                                return s([e.body], f)
                            }
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode) {
                                    return s([], f)
                                }
                                if (i.id === h[3]) {
                                    return s([i], f)
                                }
                            }
                            try {
                                return s(e.querySelectorAll(b), f)
                            } catch (j) {
                            }
                        } else {
                            if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                                var k = e, l = e.getAttribute("id"), n = l || d, p = e.parentNode, q = /^\s*[+~]/.test(b);
                                l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                                try {
                                    if (!q || p) {
                                        return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                                    }
                                } catch (r) {
                                }finally {
                                    l || k.removeAttribute("id")
                                }
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a) {
                    m[e] = a[e]
                }
                b = null
            }
        }(), function() {
            var a = c.documentElement, b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"), e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                m.matchesSelector = function(a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a)) {
                        try {
                            if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                var f = b.call(a, c);
                                if (f || !d || a.document && a.document.nodeType !== 11) {
                                    return f
                                }
                            }
                        } catch (g) {
                        }
                    }
                    return m(c, null, null, [a]).length > 0
                }
            }
        }(), function() {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1) {
                    return
                }
                o.order.splice(1, 0, "CLASS"), o.find.CLASS = function(a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c) {
                        return b.getElementsByClassName(a[1])
                    }
                }, a = null
            }
        }(), c.documentElement.contains ? m.contains = function(a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : c.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : m.contains = function() {
            return !1
        }, m.isXML = function(a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var y = function(a, b, c) {
            var d, e = [], f = "", g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a)) {
                f += d[0], a = a.replace(o.match.PSEUDO, "")
            }
            a = o.relative[a] ? a + "*" : a;
            for (var h = 0, i = g.length; h < i; h++) {
                m(a, g[h], e, c)
            }
            return m.filter(f, e)
        };
        m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
    }();
    var L = /Until$/, M = /^(?:parents|prevUntil|prevAll)/, N = /,/, O = /^.[^:#\[\.,]*$/, P = Array.prototype.slice, Q = f.expr.match.globalPOS, R = {children: !0,contents: !0,next: !0,prev: !0};
    f.fn.extend({find: function(a) {
            var b = this, c, d;
            if (typeof a != "string") {
                return f(a).filter(function() {
                    for (c = 0, d = b.length; c < d; c++) {
                        if (f.contains(b[c], this)) {
                            return !0
                        }
                    }
                })
            }
            var e = this.pushStack("", "find", a), g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0) {
                    for (h = g; h < e.length; h++) {
                        for (i = 0; i < g; i++) {
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return e
        },has: function(a) {
            var b = f(a);
            return this.filter(function() {
                for (var a = 0, c = b.length; a < c; a++) {
                    if (f.contains(this, b[a])) {
                        return !0
                    }
                }
            })
        },not: function(a) {
            return this.pushStack(T(this, a, !1), "not", a)
        },filter: function(a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        },is: function(a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },closest: function(a, b) {
            var c = [], d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) {
                        f(g).is(a[d]) && c.push({selector: a[d],elem: g,level: h})
                    }
                    g = g.parentNode, h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) {
                        break
                    }
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },index: function(a) {
            if (!a) {
                return this[0] && this[0].parentNode ? this.prevAll().length : -1
            }
            if (typeof a == "string") {
                return f.inArray(this[0], f(a))
            }
            return f.inArray(a.jquery ? a[0] : a, this)
        },add: function(a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a), d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
        },andSelf: function() {
            return this.add(this.prevObject)
        }}), f.each({parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },parents: function(a) {
            return f.dir(a, "parentNode")
        },parentsUntil: function(a, b, c) {
            return f.dir(a, "parentNode", c)
        },next: function(a) {
            return f.nth(a, 2, "nextSibling")
        },prev: function(a) {
            return f.nth(a, 2, "previousSibling")
        },nextAll: function(a) {
            return f.dir(a, "nextSibling")
        },prevAll: function(a) {
            return f.dir(a, "previousSibling")
        },nextUntil: function(a, b, c) {
            return f.dir(a, "nextSibling", c)
        },prevUntil: function(a, b, c) {
            return f.dir(a, "previousSibling", c)
        },siblings: function(a) {
            return f.sibling((a.parentNode || {}).firstChild, a)
        },children: function(a) {
            return f.sibling(a.firstChild)
        },contents: function(a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }}, function(a, b) {
        f.fn[a] = function(c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }), f.extend({filter: function(a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },dir: function(a, c, d) {
            var e = [], g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) {
                g.nodeType === 1 && e.push(g), g = g[c]
            }
            return e
        },nth: function(a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c]) {
                if (a.nodeType === 1 && ++e === b) {
                    break
                }
            }
            return a
        },sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling) {
                a.nodeType === 1 && a !== b && c.push(a)
            }
            return c
        }});
    var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", W = / jQuery\d+="(?:\d+|null)"/g, X = /^\s+/, Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Z = /<([\w:]+)/, $ = /<tbody/i, _ = /<|&#?\w+;/, ba = /<(?:script|style)/i, bb = /<(?:script|object|embed|option|style)/i, bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"), bd = /checked\s*(?:[^=]|=\s*.checked.)/i, be = /\/(java|ecma)script/i, bf = /^\s*<!(?:\[CDATA\[|\-\-)/, bg = {option: [1, "<select multiple='multiple'>", "</select>"],legend: [1, "<fieldset>", "</fieldset>"],thead: [1, "<table>", "</table>"],tr: [2, "<table><tbody>", "</tbody></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],area: [1, "<map>", "</map>"],_default: [0, "", ""]}, bh = U(c);
    bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({text: function(a) {
            return f.access(this, function(a) {
                return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
            }, null, a, arguments.length)
        },wrapAll: function(a) {
            if (f.isFunction(a)) {
                return this.each(function(b) {
                    f(this).wrapAll(a.call(this, b))
                })
            }
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) {
                        a = a.firstChild
                    }
                    return a
                }).append(this)
            }
            return this
        },wrapInner: function(a) {
            if (f.isFunction(a)) {
                return this.each(function(b) {
                    f(this).wrapInner(a.call(this, b))
                })
            }
            return this.each(function() {
                var b = f(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },wrap: function(a) {
            var b = f.isFunction(a);
            return this.each(function(c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        },unwrap: function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },append: function() {
            return this.domManip(arguments, !0, function(a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },before: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this)
                })
            }
            if (arguments.length) {
                var a = f.clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },after: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                })
            }
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f.clean(arguments));
                return a
            }
        },remove: function(a, b) {
            for (var c = 0, d; (d = this[c]) != null; c++) {
                if (!a || f.filter(a, [d]).length) {
                    !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d)
                }
            }
            return this
        },empty: function() {
            for (var a = 0, b; (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) {
                    b.removeChild(b.firstChild)
                }
            }
            return this
        },clone: function(a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function() {
                return f.clone(this, a, b)
            })
        },html: function(a) {
            return f.access(this, function(a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b) {
                    return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null
                }
                if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Y, "<$1></$2>");
                    try {
                        for (; d < e; d++) {
                            c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a)
                        }
                        c = 0
                    } catch (g) {
                    }
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) {
                    return this.each(function(b) {
                        var c = f(this), d = c.html();
                        c.replaceWith(a.call(this, b, d))
                    })
                }
                typeof a != "string" && (a = f(a).detach());
                return this.each(function() {
                    var b = this.nextSibling, c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },detach: function(a) {
            return this.remove(a, !0)
        },domManip: function(a, c, d) {
            var e, g, h, i, j = a[0], k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) {
                return this.each(function() {
                    f(this).domManip(a, c, d, !0)
                })
            }
            if (f.isFunction(j)) {
                return this.each(function(e) {
                    var g = f(this);
                    a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
                })
            }
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {fragment: i} : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) {
                        d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                    }
                }
                k.length && f.each(k, function(a, b) {
                    b.src ? f.ajax({type: "GET",global: !1,url: b.src,async: !1,dataType: "script"}) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }}), f.buildFragment = function(a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return {fragment: e,cacheable: g}
    }, f.fragments = {}, f.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(a, b) {
        f.fn[a] = function(c) {
            var d = [], e = f(c), g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({clone: function(a, b, c) {
            var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bk(a, h), d = bl(a), e = bl(h);
                for (g = 0; d[g]; ++g) {
                    e[g] && bk(d[g], e[g])
                }
            }
            if (b) {
                bj(a, h);
                if (c) {
                    d = bl(a), e = bl(h);
                    for (g = 0; d[g]; ++g) {
                        bj(d[g], e[g])
                    }
                }
            }
            d = e = null;
            return h
        },clean: function(a, b, d, e) {
            var g, h, i, j = [];
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            for (var k = 0, l; (l = a[k]) != null; k++) {
                typeof l == "number" && (l += "");
                if (!l) {
                    continue
                }
                if (typeof l == "string") {
                    if (!_.test(l)) {
                        l = b.createTextNode(l)
                    } else {
                        l = l.replace(Y, "<$1></$2>");
                        var m = (Z.exec(l) || ["", ""])[1].toLowerCase(), n = bg[m] || bg._default, o = n[0], p = b.createElement("div"), q = bh.childNodes, r;
                        b === c ? bh.appendChild(p) : U(b).appendChild(p), p.innerHTML = n[1] + l + n[2];
                        while (o--) {
                            p = p.lastChild
                        }
                        if (!f.support.tbody) {
                            var s = $.test(l), t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : [];
                            for (i = t.length - 1; i >= 0; --i) {
                                f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
                            }
                        }
                        !f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild), l = p.childNodes, p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
                    }
                }
                var u;
                if (!f.support.appendChecked) {
                    if (l[0] && typeof (u = l.length) == "number") {
                        for (i = 0; i < u; i++) {
                            bn(l[i])
                        }
                    } else {
                        bn(l)
                    }
                }
                l.nodeType ? j.push(l) : j = f.merge(j, l)
            }
            if (d) {
                g = function(a) {
                    return !a.type || be.test(a.type)
                };
                for (k = 0; j[k]; k++) {
                    h = j[k];
                    if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type))) {
                        e.push(h.parentNode ? h.parentNode.removeChild(h) : h)
                    } else {
                        if (h.nodeType === 1) {
                            var v = f.grep(h.getElementsByTagName("script"), g);
                            j.splice.apply(j, [k + 1, 0].concat(v))
                        }
                        d.appendChild(h)
                    }
                }
            }
            return j
        },cleanData: function(a) {
            var b, c, d = f.cache, e = f.event.special, g = f.support.deleteExpando;
            for (var h = 0, i; (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) {
                    continue
                }
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events) {
                            e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle)
                        }
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
                }
            }
        }});
    var bp = /alpha\([^)]*\)/i, bq = /opacity=([^)]*)/, br = /([A-Z]|^ms)/g, bs = /^[\-+]?(?:\d*\.)?\d+$/i, bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, bu = /^([\-+])=([\-+.\de]+)/, bv = /^margin/, bw = {position: "absolute",visibility: "hidden",display: "block"}, bx = ["Top", "Right", "Bottom", "Left"], by, bz, bA;
    f.fn.css = function(a, c) {
        return f.access(this, function(a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        }, a, c, arguments.length > 1)
    }, f.extend({cssHooks: {opacity: {get: function(a, b) {
                    if (b) {
                        var c = by(a, "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }}},cssNumber: {fillOpacity: !0,fontWeight: !0,lineHeight: !0,opacity: !0,orphans: !0,widows: !0,zIndex: !0,zoom: !0},cssProps: {"float": f.support.cssFloat ? "cssFloat" : "styleFloat"},style: function(a, c, d, e) {
            if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) {
                        return g
                    }
                    return j[c]
                }
                h = typeof d, h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) {
                    return
                }
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) {
                    try {
                        j[c] = d
                    } catch (l) {
                    }
                }
            }
        },css: function(a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) {
                return e
            }
            if (by) {
                return by(a, c)
            }
        },swap: function(a, b, c) {
            var d = {}, e, f;
            for (f in b) {
                d[f] = a.style[f], a.style[f] = b[f]
            }
            e = c.call(a);
            for (f in b) {
                a.style[f] = d[f]
            }
            return e
        }}), f.curCSS = f.css, c.defaultView && c.defaultView.getComputedStyle && (bz = function(a, b) {
        var c, d, e, g, h = a.style;
        b = b.replace(br, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))), !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g);
        return c
    }), c.documentElement.currentStyle && (bA = function(a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style;
        f == null && g && (e = g[b]) && (f = e), bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), by = bz || bA, f.each(["height", "width"], function(a, b) {
        f.cssHooks[b] = {get: function(a, c, d) {
                if (c) {
                    return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function() {
                        return bB(a, b, d)
                    })
                }
            },set: function(a, b) {
                return bs.test(b) ? b + "px" : b
            }}
    }), f.support.opacity || (f.cssHooks.opacity = {get: function(a, b) {
            return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },set: function(a, b) {
            var c = a.style, d = a.currentStyle, e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "", g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) {
                    return
                }
            }
            c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e
        }}), f(function() {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {get: function(a, b) {
                return f.swap(a, {display: "inline-block"}, function() {
                    return b ? by(a, "margin-right") : a.style.marginRight
                })
            }})
    }), f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
        var b = a.offsetWidth, c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function(a) {
        return !f.expr.filters.hidden(a)
    }), f.each({margin: "",padding: "",border: "Width"}, function(a, b) {
        f.cssHooks[a + b] = {expand: function(c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c], f = {};
                for (d = 0; d < 4; d++) {
                    f[a + bx[d] + b] = e[d] || e[d - 2] || e[0]
                }
                return f
            }}
    });
    var bC = /%20/g, bD = /\[\]$/, bE = /\r?\n/g, bF = /#.*$/, bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bJ = /^(?:GET|HEAD)$/, bK = /^\/\//, bL = /\?/, bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bN = /^(?:select|textarea)/i, bO = /\s+/, bP = /([?&])_=[^&]*/, bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bR = f.fn.load, bS = {}, bT = {}, bU, bV, bW = ["*/"] + ["*"];
    try {
        bU = e.href
    } catch (bX) {
        bU = c.createElement("a"), bU.href = "", bU = bU.href
    }
    bV = bQ.exec(bU.toLowerCase()) || [], f.fn.extend({load: function(a, c, d) {
            if (typeof a != "string" && bR) {
                return bR.apply(this, arguments)
            }
            if (!this.length) {
                return this
            }
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({url: a,type: h,dataType: "html",data: c,complete: function(a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function(a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }});
            return this
        },serialize: function() {
            return f.param(this.serializeArray())
        },serializeArray: function() {
            return this.map(function() {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type))
            }).map(function(a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function(a, c) {
                    return {name: b.name,value: a.replace(bE, "\r\n")}
                }) : {name: b.name,value: c.replace(bE, "\r\n")}
            }).get()
        }}), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        f.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), f.each(["get", "post"], function(a, c) {
        f[c] = function(a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({type: c,url: a,data: d,success: e,dataType: g})
        }
    }), f.extend({getScript: function(a, c) {
            return f.get(a, b, c, "script")
        },getJSON: function(a, b, c) {
            return f.get(a, b, c, "json")
        },ajaxSetup: function(a, b) {
            b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b$(a, b);
            return a
        },ajaxSettings: {url: bU,isLocal: bI.test(bV[1]),global: !0,type: "GET",contentType: "application/x-www-form-urlencoded; charset=UTF-8",processData: !0,async: !0,accepts: {xml: "application/xml, text/xml",html: "text/html",text: "text/plain",json: "application/json, text/javascript","*": bW},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText"},converters: {"* text": a.String,"text html": !0,"text json": f.parseJSON,"text xml": f.parseXML},flatOptions: {context: !0,url: !0}},ajaxPrefilter: bY(bS),ajaxTransport: bY(bT),ajax: function(a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c, x = l ? ca(d, v, l) : b, y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) {
                                f.lastModified[k] = y
                            }
                            if (z = v.getResponseHeader("Etag")) {
                                f.etag[k] = z
                            }
                        }
                        if (a === 304) {
                            w = "notmodified", o = !0
                        } else {
                            try {
                                r = cb(d, x), w = "success", o = !0
                            } catch (A) {
                                w = "parsererror", u = A
                            }
                        }
                    } else {
                        u = w;
                        if (!w || a) {
                            w = "error", a < 0 && (a = 0)
                        }
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f.Callbacks("once memory"), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = {readyState: 0,setRequestHeader: function(a, b) {
                    if (!s) {
                        var c = a.toLowerCase();
                        a = m[c] = m[c] || a, l[a] = b
                    }
                    return this
                },getAllResponseHeaders: function() {
                    return s === 2 ? n : null
                },getResponseHeader: function(a) {
                    var c;
                    if (s === 2) {
                        if (!o) {
                            o = {};
                            while (c = bG.exec(n)) {
                                o[c[1].toLowerCase()] = c[2]
                            }
                        }
                        c = o[a.toLowerCase()]
                    }
                    return c === b ? null : c
                },overrideMimeType: function(a) {
                    s || (d.mimeType = a);
                    return this
                },abort: function(a) {
                    a = a || "abort", p && p.abort(a), w(0, a);
                    return this
                }};
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function(a) {
                if (a) {
                    var b;
                    if (s < 2) {
                        for (b in a) {
                            j[b] = [j[b], a[b]]
                        }
                    } else {
                        b = a[v.status], v.then(b, b)
                    }
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO), d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bZ(bS, d, c, v);
            if (s === 2) {
                return !1
            }
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bJ.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bL.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(), y = d.url.replace(bP, "$1_=" + x);
                    d.url = y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }
            (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) {
                v.setRequestHeader(u, d.headers[u])
            }
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in {success: 1,error: 1,complete: 1}) {
                v[u](d[u])
            }
            p = bZ(bT, d, c, v);
            if (!p) {
                w(-1, "No Transport")
            } else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function() {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    if (s < 2) {
                        w(-1, z)
                    } else {
                        throw z
                    }
                }
            }
            return v
        },param: function(a, c) {
            var d = [], e = function(a, b) {
                b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) {
                f.each(a, function() {
                    e(this.name, this.value)
                })
            } else {
                for (var g in a) {
                    b_(g, a[g], c, e)
                }
            }
            return d.join("&").replace(bC, "+")
        }}), f.extend({active: 0,lastModified: {},etag: {}});
    var cc = f.now(), cd = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
            return f.expando + "_" + cc++
        }}), f.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function(a) {
                g = [a]
            }, d.always(function() {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function() {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /javascript|ecmascript/},converters: {"text script": function(a) {
                f.globalEval(a);
                return a
            }}}), f.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {send: function(f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function(a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) {
                            d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                        }
                    }, e.insertBefore(d, e.firstChild)
                },abort: function() {
                    d && d.onload(0, 1)
                }}
        }
    });
    var ce = a.ActiveXObject ? function() {
        for (var a in cg) {
            cg[a](0, 1)
        }
    } : !1, cf = 0, cg;
    f.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && ch() || ci()
    } : ch, function(a) {
        f.extend(f.support, {ajax: !!a,cors: !!a && "withCredentials" in a})
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function(c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {send: function(e, g) {
                    var h = c.xhr(), i, j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields) {
                        for (j in c.xhrFields) {
                            h[j] = c.xhrFields[j]
                        }
                    }
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e) {
                            h.setRequestHeader(j, e[j])
                        }
                    } catch (k) {
                    }
                    h.send(c.hasContent && c.data || null), d = function(a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b, i && (h.onreadystatechange = f.noop, ce && delete cg[i]);
                                if (e) {
                                    h.readyState !== 4 && h.abort()
                                } else {
                                    j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n);
                                    try {
                                        m.text = h.responseText
                                    } catch (a) {
                                    }
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ""
                                    }
                                    !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch (p) {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }, !c.async || h.readyState === 4 ? d() : (i = ++cf, ce && (cg || (cg = {}, f(a).unload(ce)), cg[i] = d), h.onreadystatechange = d)
                },abort: function() {
                    d && d(0, 1)
                }}
        }
    });
    var cj = {}, ck, cl, cm = /^(?:toggle|show|hide)$/, cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, co, cp = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], cq;
    f.fn.extend({show: function(a, b, c) {
            var d, e;
            if (a || a === 0) {
                return this.animate(ct("show", 3), a, b, c)
            }
            for (var g = 0, h = this.length; g < h; g++) {
                d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName)))
            }
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") {
                        d.style.display = f._data(d, "olddisplay") || ""
                    }
                }
            }
            return this
        },hide: function(a, b, c) {
            if (a || a === 0) {
                return this.animate(ct("hide", 3), a, b, c)
            }
            var d, e, g = 0, h = this.length;
            for (; g < h; g++) {
                d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e))
            }
            for (g = 0; g < h; g++) {
                this[g].style && (this[g].style.display = "none")
            }
            return this
        },_toggle: f.fn.toggle,toggle: function(a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(ct("toggle", 3), a, b, c);
            return this
        },fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        },animate: function(a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m, n, o, p, q;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]);
                    if ((k = f.cssHooks[g]) && "expand" in k) {
                        l = k.expand(a[g]), delete a[g];
                        for (i in l) {
                            i in a || (a[i] = l[i])
                        }
                    }
                }
                for (g in a) {
                    h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) {
                        return b.complete.call(this)
                    }
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) {
                    j = new f.fx(this, b, i), h = a[i], cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""))
                }
                return !0
            }
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) {
                return this.each(e.complete, [!1])
            }
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        },stop: function(a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function() {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d)
                }
                var b, c = !1, e = f.timers, g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null) {
                    for (b in g) {
                        g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b)
                    }
                } else {
                    g[b = a + ".run"] && g[b].stop && h(this, g, b)
                }
                for (b = e.length; b--; ) {
                    e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1))
                }
                (!d || !c) && f.dequeue(this, a)
            })
        }}), f.each({slideDown: ct("show", 1),slideUp: ct("hide", 1),slideToggle: ct("toggle", 1),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(a, b) {
        f.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({speed: function(a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {complete: c || !c && b || f.isFunction(a) && a,duration: a,easing: c && b || b && !f.isFunction(b) && b};
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) {
                d.queue = "fx"
            }
            d.old = d.complete, d.complete = function(a) {
                f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            };
            return d
        },easing: {linear: function(a) {
                return a
            },swing: function(a) {
                return -Math.cos(a * Math.PI) / 2 + 0.5
            }},timers: [],fx: function(a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }}), f.fx.prototype = {update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        },cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        },custom: function(a, c, d) {
            function h(a) {
                return e.step(a)
            }
            var e = this, g = f.fx;
            this.startTime = cq || cr(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function() {
                f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
            }, h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval))
        },show: function() {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        },hide: function() {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },step: function(a) {
            var b, c, d, e = cq || cr(), g = !0, h = this.elem, i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) {
                    i.animatedProperties[b] !== !0 && (g = !1)
                }
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function(a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }), i.hide && f(h).hide();
                    if (i.hide || i.show) {
                        for (b in i.animatedProperties) {
                            f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0)
                        }
                    }
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }}, f.extend(f.fx, {tick: function() {
            var a, b = f.timers, c = 0;
            for (; c < b.length; c++) {
                a = b[c], !a() && b[c] === a && b.splice(c--, 1)
            }
            b.length || f.fx.stop()
        },interval: 13,stop: function() {
            clearInterval(co), co = null
        },speeds: {slow: 600,fast: 200,_default: 400},step: {opacity: function(a) {
                f.style(a.elem, "opacity", a.now)
            },_default: function(a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }}}), f.each(cp.concat.apply([], cp), function(a, b) {
        b.indexOf("margin") && (f.fx.step[b] = function(a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
        return f.grep(f.timers, function(b) {
            return a === b.elem
        }).length
    });
    var cv, cw = /^t(?:able|d|h)$/i, cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? cv = function(a, b, c, d) {
        try {
            d = a.getBoundingClientRect()
        } catch (e) {
        }
        if (!d || !f.contains(c, a)) {
            return d ? {top: d.top,left: d.left} : {top: 0,left: 0}
        }
        var g = b.body, h = cy(b), i = c.clientTop || g.clientTop || 0, j = c.clientLeft || g.clientLeft || 0, k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop, l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft, m = d.top + k - i, n = d.left + l - j;
        return {top: m,left: n}
    } : cv = function(a, b, c) {
        var d, e = a.offsetParent, g = a, h = b.body, i = b.defaultView, j = i ? i.getComputedStyle(a, null) : a.currentStyle, k = a.offsetTop, l = a.offsetLeft;
        while ((a = a.parentNode) && a !== h && a !== c) {
            if (f.support.fixedPosition && j.position === "fixed") {
                break
            }
            d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -= a.scrollTop, l -= a.scrollLeft, a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent), f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), j = d
        }
        if (j.position === "relative" || j.position === "static") {
            k += h.offsetTop, l += h.offsetLeft
        }
        f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft));
        return {top: k,left: l}
    }, f.fn.offset = function(a) {
        if (arguments.length) {
            return a === b ? this : this.each(function(b) {
                f.offset.setOffset(this, a, b)
            })
        }
        var c = this[0], d = c && c.ownerDocument;
        if (!d) {
            return null
        }
        if (c === d.body) {
            return f.offset.bodyOffset(c)
        }
        return cv(c, d, d.documentElement)
    }, f.offset = {bodyOffset: function(a) {
            var b = a.offsetTop, c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {top: b,left: c}
        },setOffset: function(a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"), j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }}, f.fn.extend({position: function() {
            if (!this[0]) {
                return null
            }
            var a = this[0], b = this.offsetParent(), c = this.offset(), d = cx.test(b[0].nodeName) ? {top: 0,left: 0} : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {top: c.top - d.top,left: c.left - d.left}
        },offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || c.body;
                while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") {
                    a = a.offsetParent
                }
                return a
            })
        }}), f.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"}, function(a, c) {
        var d = /Y/.test(c);
        f.fn[a] = function(e) {
            return f.access(this, function(a, e, g) {
                var h = cy(a);
                if (g === b) {
                    return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e]
                }
                h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g
            }, a, e, arguments.length, null)
        }
    }), f.each({Height: "height",Width: "width"}, function(a, c) {
        var d = "client" + a, e = "scroll" + a, g = "offset" + a;
        f.fn["inner" + a] = function() {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
        }, f.fn["outer" + a] = function(a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null
        }, f.fn[c] = function(a) {
            return f.access(this, function(a, c, h) {
                var i, j, k, l;
                if (f.isWindow(a)) {
                    i = a.document, j = i.documentElement[d];
                    return f.support.boxModel && j || i.body && i.body[d] || j
                }
                if (a.nodeType === 9) {
                    i = a.documentElement;
                    if (i[d] >= i[e]) {
                        return i[d]
                    }
                    return Math.max(a.body[e], i[e], a.body[g], i[g])
                }
                if (h === b) {
                    k = f.css(a, c), l = parseFloat(k);
                    return f.isNumeric(l) ? l : k
                }
                f(a).css(c, h)
            }, c, a, arguments.length, null)
        }
    }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return f
    })
})(window);
var $j = jQuery.noConflict();
var spellCheckWord = null;
var firstSpellCheckWord = null;
function matNum(a) {
    a = a.toString().replace(/\$|\,/g, "");
    if (isNaN(a)) {
        a = "0"
    }
    sign = (a == (a = Math.abs(a)));
    a = Math.floor(a * 100 + 0.50000000001);
    cents = a % 100;
    a = Math.floor(a / 100).toString();
    if (cents < 10) {
        cents = "0" + cents
    }
    for (var b = 0; b < Math.floor((a.length - (1 + b)) / 3); b++) {
        a = a.substring(0, a.length - (4 * b + 3)) + "," + a.substring(a.length - (4 * b + 3))
    }
    return (((sign) ? "" : "-") + a + "." + cents)
}
function commafy(a) {
    a = a + "";
    a = a.replace(/[ ]/g, "");
    a = a.replace(/[,]/g, "");
    if (a == "") {
        return
    }
    if (isNaN(a)) {
        return
    }
    index = a.indexOf(".");
    if (index == -1) {
        var c = /(-?\d+)(\d{3})/;
        while (c.test(a)) {
            a = a.replace(c, "$1,$2")
        }
    } else {
        a = new Number(a).toFixed(2);
        var b = a.substring(0, index);
        var d = a.substring(index + 1, a.length);
        var c = /(-?\d+)(\d{3})/;
        while (c.test(b)) {
            b = b.replace(c, "$1,$2")
        }
        a = b + "." + d
    }
    return a
}
function jsonI18n(a) {
    if (a == null || typeof (a) == "undefined" || typeof (a) == "boolean") {
        return a
    }
    if (!a.match("^{(.+:.+,*){1,}}$")) {
        return a
    } else {
        if (cur_locale != null && cur_locale != "") {
            var b = jQuery.parseJSON(a);
            if (cur_locale == "zh_HK") {
                return b.zh_HK
            } else {
                return b.en_US
            }
        } else {
            return ""
        }
    }
}
function openContact() {
    var i = "http://help-en-ap.nike.com?intpromo=tphp06152001";
    var h = "http://help-zh-hk.nike.com?intpromo=tphp06151001";
    var c = (cur_locale.indexOf("zh") >= 0) ? h : i;
    var b = "Help";
    var d = 610;
    var a = 560;
    var f = (window.screen.availHeight - 30 - a) / 2;
    var g = (window.screen.availWidth - 10 - d) / 2;
    var e = "height=" + a + ", width=" + d + ", top=" + f + ",left=" + g + ",toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no";
    window.open(c, b, e)
}
function openContactEmail() {
    var i = "https://help-en-ap.nike.com/app/ask/";
    var h = "https://help-zh-hk.nike.com/app/ask/";
    var c = (cur_locale.indexOf("zh") >= 0) ? h : i;
    var b = "Help";
    var d = 610;
    var a = 560;
    var f = (window.screen.availHeight - 30 - a) / 2;
    var g = (window.screen.availWidth - 10 - d) / 2;
    var e = "height=" + a + ", width=" + d + ", top=" + f + ",left=" + g + ",toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no";
    window.open(c, b, e)
}
function openContactChat() {
    var i = "http://help-en-ap.nike.com/app/chat/chat_launch";
    var h = "http://help-zh-hk.nike.com/app/chat/chat_launch";
    var c = (cur_locale.indexOf("zh") >= 0) ? h : i;
    var b = "Help";
    var d = 610;
    var a = 560;
    var f = (window.screen.availHeight - 30 - a) / 2;
    var g = (window.screen.availWidth - 10 - d) / 2;
    var e = "height=" + a + ", width=" + d + ", top=" + f + ",left=" + g + ",toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no";
    window.open(c, b, e);
    omnitureLivechat()
}
function favorite_Confirm(a) {
    $j(".pdidclass").remove();
    $j("<div class='black_opacity'></div>").css({height: $j("body").height(),opacity: "0.5"}).detach().appendTo("body").fadeOut(15).fadeIn(300);
    var c = "<div class='pay_dialog pdidclass2' id='cmtFavDialog'>";
    c += "<div class='pay_dialog_coco'>";
    c += "<label>" + loxia.getLocaleMsg("template.favoriteSuccess") + "</label>";
    c += "<p style='padding:15px 0 0 0; text-align:center;'>";
    c += "<a id='confirmbtn2' action='confirmbtn2' class='btn-org btn146 sucess_confirm'>" + loxia.getLocaleMsg("main.Comfirm") + "</a>";
    c += "</p>";
    c += "<span class='closeImg cross_cha close'></span>";
    c += "</div>";
    c += "</div>";
    $j(c).detach().appendTo("body").fadeOut(15).fadeIn(300);
    $j(".cross_cha,.sucess_confirm,.cancel_confirm").click(function() {
        $j(".black_opacity").fadeOut(15);
        $j(".pdidclass").fadeOut(15)
    });
    if ($j.browser.msie && ($j.browser.version == "6.0") && !$j.support.style) {
        var b = $j(window).scrollTop();
        $j(".pay_dialog").css("top", b + 150)
    }
    $j(".cross_cha").click(function() {
        $j(".black_opacity").fadeOut(15);
        $j("#cmtFavDialog").fadeOut(15)
    });
    $j("a[action='confirmbtn2']").live("click", function(d) {
        $j(".black_opacity,.pay_dialog").hide()
    })
}
function sConfirm(m, l, i, c, b, a) {
    if (c == null) {
        c = loxia.getLocaleMsg("main.Comfirm")
    }
    if (a == null) {
        a = loxia.getLocaleMsg("main.Cancel")
    }
    $j(".pdidclass,.black_opacity_ss").remove();
    $j("<div class='black_opacity black_opacity_ss' style='z-index:11;'></div>").css({height: $j("body").height(),opacity: "0.5"}).detach().appendTo("body").fadeOut(15).fadeIn(300);
    var n = "<div class='pay_dialog pdidclass'>";
    n += "<div class='pay_dialog_coco'>";
    n += "<label></label><p class='pword' style='text-align:center;'></p>";
    n += "<p style='padding:15px 0 0 0; text-align:center;'>";
    n += "<a href='###' class='btn-black bbh34 btn136 sucess_confirm font-size14' id='confirmbtn2'>" + c + "</a>";
    n += "</p>";
    n += "<span class='cross_cha close closeImg'></span>";
    n += "</div>";
    n += "</div>";
    $j(n).detach().appendTo("body").fadeOut(15).fadeIn(300);
    $j(".pdidclass label").html(m);
    $j(".pdidclass .pword").html(l);
    $j(".cross_cha,.sucess_confirm,.cancel_confirm").click(function() {
        $j(".black_opacity").fadeOut(15);
        $j(".pdidclass").fadeOut(15)
    });
    $j(".cancel_confirm").click(function() {
        if (b) {
            loxia.hitch(b)()
        }
    });
    $j(".sucess_confirm").click(function() {
        if (i) {
            loxia.hitch(i)()
        }
    });
    if ($j.browser.msie && ($j.browser.version == "6.0") && !$j.support.style) {
        var d = $j(window).scrollTop();
        $j(".pay_dialog").css("top", d + 150)
    }
}
function sConfirm2(m, l, i, c, b, a) {
    if (c == null) {
        c = loxia.getLocaleMsg("main.Comfirm")
    }
    if (a == null) {
        a = loxia.getLocaleMsg("main.Cancel")
    }
    $j(".pdidclass,.black_opacity_ss").remove();
    $j("<div class='black_opacity black_opacity_ss' style='z-index:11;'></div>").css({height: $j("body").height(),opacity: "0.5"}).detach().appendTo("body").fadeOut(15).fadeIn(300);
    var n = "<div class='pay_dialog pdidclass'>";
    n += "<div class='pay_dialog_coco'>";
    n += "<label></label><p class='pword' style='text-align:center;'></p>";
    n += "<p style='padding:30px 0 0 0; text-align:center;'>";
    n += "<a href='###' class='btn-black bbh34 btn136 font-size14 cancel_confirm'>" + a + "</a>";
    n += "<a href='###' class='btn-org btn136 sucess_confirm ' id='confirmbtn2'>" + c + "</a>";
    n += "</p>";
    n += "</div>";
    n += "<div class='cj_bottombg'></div>";
    n += "</div>";
    $j(n).detach().appendTo("body").fadeOut(15).fadeIn(300);
    $j(".pdidclass label").html(m);
    $j(".pdidclass .pword").html(l);
    $j(".sucess_confirm,.cancel_confirm").click(function() {
        $j(".black_opacity").fadeOut(15);
        $j(".pdidclass").fadeOut(15)
    });
    $j(".cancel_confirm").click(function() {
        if (b) {
            loxia.hitch(b)()
        }
    });
    $j(".sucess_confirm").click(function() {
        if (i) {
            loxia.hitch(i)()
        }
    });
    if ($j.browser.msie && ($j.browser.version == "6.0") && !$j.support.style) {
        var d = $j(window).scrollTop();
        $j(".pay_dialog").css("top", d + 150)
    }
}
function aly_sConfirm(c, a) {
    $j(".pdidclass").remove();
    $j("<div class='black_opacity'></div>").css({height: $j("body").height(),opacity: "0.5"}).detach().appendTo("body").fadeOut(15).fadeIn(300);
    var d = "<div class='pay_dialog pdidclass'>";
    d += "<div class='pay_dialog_coco'>";
    d += "<label class='pb0'>" + loxia.getLocaleMsg("main.alipay") + "</label><p class='pword' style='text-align:center; font-size:18px; font-weight:bold'>" + loxia.getLocaleMsg("main.logined") + " </p>";
    d += "<p style='padding:15px 0 0 0; text-align:center;overflow:hidden;'>";
    d += "<a href='" + c + "' class='btn-org btn136 fLeft sucess_confirm font-size14' id='confirmbtn2'>" + loxia.getLocaleMsg("main.completeuserinfo") + "</a>";
    d += "<a href='" + a + "' class='btn-black btn136 fRight cancel_confirm'>" + loxia.getLocaleMsg("main.goshopping") + "</a>";
    d += "</p>";
    d += "<ul class='aly_ul'><li>" + loxia.getLocaleMsg("main.completeinfo") + "：</li><li>" + loxia.getLocaleMsg("main.gift1") + "</li><li>" + loxia.getLocaleMsg("main.gift2") + "</li><li>" + loxia.getLocaleMsg("main.gift3") + "</li></ul>";
    d += "<span class='cross_cha close closeImg'></span>";
    d += "</div>";
    d += "</div>";
    $j(d).detach().appendTo("body").fadeOut(15).fadeIn(300);
    $j(".cross_cha,.sucess_confirm,.cancel_confirm").click(function() {
        $j(".black_opacity").fadeOut(15);
        $j(".pdidclass").fadeOut(15)
    });
    if ($j.browser.msie && ($j.browser.version == "6.0") && !$j.support.style) {
        var b = $j(window).scrollTop();
        $j(".pay_dialog").css("top", b + 150)
    }
}
function sAlert(g, d, i, a) {
    if (a == null) {
        a = loxia.getLocaleMsg("main.Comfirm")
    }
    $j(".pdidclass2,.black_opacity_ss").remove();
    $j("<div class='black_opacity black_opacity_ss' style='z-index:11;'></div>").css({height: $j("body").height(),opacity: "0.5"}).detach().appendTo("body").fadeOut(15).fadeIn(300);
    $j("<div class='pay_dialog pdidclass2'><div class='pay_dialog_coco'><label></label><p class='pword' style='text-align:center;'></p><p style='padding:15px 0 0 0; text-align:center;'><a href='###' class='btn-org btn146 sucess_confirm' id='confirmbtn2'>" + a + "</a></p><span class='cross_cha close closeImg'></span></div></div>").detach().appendTo("body").fadeOut(15).fadeIn(300);
    $j(".pdidclass2 label").html(g);
    $j(".pdidclass2 .pword").html(d);
    $j(".cross_cha,.sucess_confirm").click(function() {
        $j(".black_opacity_ss,.black_opacity").fadeOut(15);
        $j(".pdidclass2").fadeOut(15);
        if (i) {
            loxia.hitch(i)()
        }
    });
    if ($j.browser.msie && ($j.browser.version == "6.0") && !$j.support.style) {
        var b = $j(window).scrollTop();
        $j(".pay_dialog").css("top", b + 150)
    }
}
function kobeAlert(d, c) {
    $j(".pdidclass2,.black_opacity_ss").remove();
    $j("<div class='black_opacity black_opacity_ss' style='z-index:11;'></div>").css({height: $j("body").height(),opacity: "0.5"}).detach().appendTo("body").fadeOut(15).fadeIn(300);
    $j("<div class='pay_dialog pdidclass2'><div class='pay_dialog_coco'><label></label><p class='pword' style='text-align:center;'></p><p style='padding:15px 0 0 0; text-align:center;'><a href='###' class='btn-org btn146 sucess_confirm' id='confirmbtn2'>" + loxia.getLocaleMsg("main.Comfirm") + "</a></p><span class='cross_cha close closeImg'></span></div></div>").detach().appendTo("body").fadeOut(15).fadeIn(300);
    $j(".pdidclass2 label").html(d);
    $j(".cross_cha,.sucess_confirm").click(function() {
        c()
    });
    if ($j.browser.msie && ($j.browser.version == "6.0") && !$j.support.style) {
        var e = $j(window).scrollTop();
        $j(".pay_dialog").css("top", e + 150)
    }
}
function checkStars() {
    $j(".review-rating-stars").each(function() {
        checkStar($j(this), $j(this).attr("rank"))
    })
}
function checkStar(b, c) {
    if (c > 5) {
        c = 5
    }
    if (b) {
        if (c == 0) {
            b.find("span").css({width: 0});
            return false
        } else {
            if (c) {
                var a = parseInt(c / 0.5) * 0.5;
                b.find("span").css({width: (a * 14)})
            }
        }
    }
}
function getMLongWidth() {
    var b = (/ipad/gi).test(navigator.appVersion);
    var a = parseInt($j((b ? window : ".header > ul")).outerWidth());
    $j(".header > ul > li").each(function() {
        if (!$j(this).hasClass("menu_long")) {
            var c = parseInt($j(this).outerWidth());
            a = a - c
        }
    });
    return a
}
function inputType(a) {
    $j("#searchForm").siblings(".fLeft").hide();
    a.removeClass("new-search").animate({left: 0,width: mlongwidth}, 500);
    $j("#searchForm input").hide()
}
function check() {
    var c = $j("#bookEmail").val();
    var b = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (isInputEmpty("#bookEmail")) {
        $j(".errors_div").html(loxia.getLocaleMsg("index.InputEmail")).css("display", "block")
    } else {
        if (!b.test($j.trim(c))) {
            $j(".errors_div").html(loxia.getLocaleMsg("index.InputCorrectEmail")).css("display", "block")
        } else {
            var a = loxia.syncXhrPost(loxia.getTimeUrl(_contextPath + "/member/bookEmailSuccess.json"), {email: c});
            if (a.result == "success") {
                if (a.isLoginOrRegist) {
                    $j("#showDoneLink").show();
                    $j("#showRegisterLink").hide()
                } else {
                    $j("#showDoneLink").hide();
                    $j("#showRegisterLink").show()
                }
                $j("#bookEmailDiv").hide();
                $j("#bookEmailShow").show()
            } else {
                if (a.result == "fail") {
                    $j(".errors_div").html(loxia.getLocaleMsg("index.Subscription")).css("display", "block")
                }
            }
        }
    }
}
$j(document).ready(function() {
    $j("#set_btn").click(function() {
        omnitureVisitorEmail();
        check()
    });
    $j("#bookEmailShow .email_close").bind("click", function() {
        $j(".black_opacity").hide();
        $j("#bookEmailShow").hide()
    });
    $j("#keyword").blur();
    parseInt($j(".buycart-count").html()) != 0 && $j(".buycart-num-wrap").removeClass("none");
    $j(".distance_content").each(function() {
        var r = parseInt($j("#pro_left_menu").height());
        var q = parseInt($j(this).height());
        var s = parseInt($j(window).height()) - 293;
        if (q < s && s > r) {
            $j(this).height(s)
        } else {
            if (q < r && s < r) {
                $j(this).height(r + 200)
            }
        }
    });
    $j(".center_content").each(function() {
        var q = parseInt($j(window).height()) - 293;
        if (parseInt($j(this).height()) < q) {
            $j(this).height(q)
        }
    });
    $j(".text_val_ori").each(function() {
        var q = $j(this).attr("ori_value");
        if ($j(this).val() == "") {
            $j(this).val(q)
        } else {
        }
        $j(this).focus(function() {
            if ($j(this).val() == q) {
                $j(this).val("")
            }
        });
        $j(this).blur(function() {
            if ($j(this).val() == "") {
                $j(this).val(q)
            }
        })
    });
    $j(".passwordtext1").focus(function() {
        $j(this).addClass("none");
        $j(this).parents(".inputtext").find(".passwordtext2").removeClass("none").focus()
    });
    $j(".black_opacity").css("opacity", "0.5");
    $j("a").focus(function() {
        $j(this).blur()
    });
    $j(".nluar").click(function(r) {
        r.stopPropagation();
        var q = $j(".nluar").index($j(this));
        var s = parseInt($j(window).height()) - 490;
        $j("<div class='black_opacity'></div>").css("opacity", "0.6").detach().appendTo("body").fadeOut(15).fadeIn(300);
        $j(".clear_blank").css("height", s / 2);
        $j(".video_content").stop(true, true).hide().eq(q).stop(true, true).fadeIn(500);
        $j(".detail_large_video").detach().appendTo("body").eq(q).stop(true, true).fadeIn(500)
    });
    $j(".video_content").click(function() {
        $j(".video_content").stop(true, true).hide();
        $j(".black_opacity").remove()
    });
    $j(".cross_cha,.sucess_confirm,cancel_confirm").click(function() {
        $j(".black_opacity").fadeOut(15);
        $j(".pay_dialog").fadeOut(15)
    });
    var e = !!window.ActiveXObject;
    var j = e && !window.XMLHttpRequest;
    if (e) {
        if (j) {
            $j(window).scroll(function() {
                $j(".header").css("top", $j(window).scrollTop());
                $j(".addtocard_dialog").css("top", $j(window).scrollTop())
            })
        }
    }
    $j(".addtocard_dialog").detach().appendTo("body");
    $j(".close_addtocard_dialog").click(function() {
        $j(".addtocard_dialog .grey_shadow2").css("display", "none");
        $j(".addtocard_dialog .header_slide").stop(true, false).animate({height: "0px"}, 400);
        $j(".header_buycart").removeClass("menu_tag_selected").siblings("p").css("display", "none")
    });
    $j(".addtocard_dialog").mouseleave(function() {
        setTimeout(function() {
            $j(".addtocard_dialog .grey_shadow2").css("display", "none");
            $j(".addtocard_dialog .header_slide").stop(true, false).animate({height: "0px"}, 400);
            $j(".header_buycart").removeClass("menu_tag_selected").siblings("p").css("display", "none")
        }, 1000)
    });
    if ($j.browser.msie) {
        if ($j.browser.version == 6) {
            var h = $j(window).scrollTop(), o = $j(window).height();
            var b = $j(".goTopBox");
            b.css({position: "absolute",top: h + o - 200});
            $j(window).scroll(function() {
                h = $j(this).scrollTop();
                o = $j(this).height();
                b.css({top: h + o - 200})
            })
        }
    }
    var n = $j(".goTopBox");
    $j(window).scroll(function() {
        var q = $j(this).scrollTop();
        q > 0 ? n.show() : n.hide()
    });
    $j(".pro_left_menu dl dd div.title").click(function() {
        if (!($j(this).find("span").hasClass("add_min_fh2"))) {
            $j(this).removeClass("title");
            $j(this).find("span").addClass("add_min_fh2").parent().siblings(".cate_hiddenblock").show()
        } else {
            $j(this).addClass("title");
            $j(this).find("span").removeClass("add_min_fh2").parent().siblings(".cate_hiddenblock").animate({height: "0px"}, 400)
        }
    });
    $j(".pro_left_menu dl dd div.titleh").click(function() {
        if (!($j(this).find("span").hasClass("add_min_fh2"))) {
            $j(this).removeClass("title");
            $j(this).find("span").addClass("add_min_fh2").parent().siblings(".cate_hiddenblock").slideDown("fast");
            $j(this).removeClass("title")
        } else {
            $j(this).addClass("title");
            $j(this).find("span").removeClass("add_min_fh2").parent().siblings(".cate_hiddenblock").slideUp("fast");
            $j(this).addClass("title")
        }
    });
    $j(".pro_left_menu dl h6").hover(function() {
        $j(this).removeClass("title")
    }, function() {
        if ($j(this).next("span").hasClass("add_min_fh2")) {
            $j(this).removeClass("title")
        } else {
            if (!$j(this).next("span").hasClass("add_min_fh2")) {
                $j(this).addClass("title")
            }
        }
    });
    $j(function() {
        $j(".pro_serious_list li").hover(function() {
            $j(this).find("span").addClass("pro-serious-list-hover");
            $j(this).find("a").css("color", "#fa5400")
        }, function() {
            $j(this).find("span").removeClass("pro-serious-list-hover");
            $j(this).find("a").css("color", "#666666")
        })
    });
    $j(".user-titleh").click(function() {
        var r = $j(this), s = r.siblings(".folder"), q = r.find(".sign");
        if (s.is(":visible")) {
            s.hide();
            q.addClass("add-sign")
        } else {
            s.show();
            q.removeClass("add-sign")
        }
    }).hover(function() {
        $j(this).removeClass("mynike-title")
    }, function() {
        var q = $j(this), r = q.siblings(".folder");
        r.is(":visible") ? "" : q.addClass("mynike-title")
    });
    var p = 0;
    $j(".cate_num").each(function() {
        var q = $j(this).find("a").length;
        $j(this).width(80 + q * 32)
    });
    $j(".grey_btn191").hover(function() {
        $j(this).addClass("grey_btn191_hover")
    }, function() {
        $j(this).removeClass("grey_btn191_hover")
    });
    $j(".header_sports").each(function() {
        $j(this).width($j(window).width())
    });
    $j(".bank dd img").click(function() {
        var q = $j(this).prev("input");
        var r = q.attr("disabled");
        if (r != "disabled") {
            q.attr("checked", "checked")
        }
    });
    $j(".pay_dialog_coco .bank dd a img").click(function() {
        $j(this).parent("a").prev("input").attr("checked", "checked")
    });
    $j(".product_list li a").live("click", function() {
        var q = $j(this).parents(".product_list_hover").attr("skucode");
        if (isNullOrEmpty(p3) || isNullOrEmpty(p17)) {
            return
        }
        if (p3 == "pw" || p3 == "slp") {
            omnitureHomePageProducts(q)
        } else {
            omniturePdpMaybeLike(q)
        }
    });
    $j(".product_list li img[pdpUrl]").live("click", function() {
        var q = $j(this).parents(".product_list_hover").attr("skucode");
        if (isNullOrEmpty(p3) || isNullOrEmpty(p17)) {
            return
        }
        if (p3 == "pw" || p3 == "slp") {
            omnitureHomePageProducts(q)
        } else {
            omniturePdpMaybeLike(q)
        }
    });
    $j(".product_list_hover").live("mouseover", function() {
        var r = parseInt($j(this).find(".product_list_colorimg_scroll").css("left"));
        var q = $j(this).find(".product_list_colorimg_select").find(".product_list_colorimg_scroll").find("p").length;
        if (q >= 4 && (r / -55 < q - 3)) {
            $j(this).find(".pcsico_right").removeClass("bgnone")
        }
    });
    $j(".product_list_new ul li").hover(function() {
        var q = $j(this), r = $j(".product_list_hover img", q);
        $j.each(r, function(t, s) {
            $j(s).attr("src", $j(s).attr("lazy_src"))
        });
        q.addClass("reselect_pro_hover");
        $j(".product_list_hover", q).show();
        q.siblings().removeClass("reselect_pro_hover");
        $j(".product_list_hover", q.siblings()).hide()
    }, function() {
        $j(this).removeClass("reselect_pro_hover");
        $j(".product_list_hover", $j(this)).hide()
    });
    $j(".product_list_colorimg_scroll").each(function() {
        var q = $j(this).find("p").length;
        $j(this).width(55 * q)
    });
    $j(".product_list_colorimg").each(function() {
        var r = $j(this).find(".product_list_colorimg_select").find(".product_list_colorimg_scroll").find("p").length - 3;
        var q = $j(this).find(".product_list_colorimg_select").find(".product_list_colorimg_scroll").find("p").length;
        if (q < 4) {
            $j(this).find(".pcsico_left").addClass("bgnone");
            $j(this).find(".pcsico_right").addClass("bgnone")
        }
        $j(this).find(".pcsico_left").click(function() {
            var s = parseInt($j(this).siblings(".product_list_colorimg_select").find(".product_list_colorimg_scroll").css("left"));
            if (s < 0) {
                $j(this).siblings(".pcsico_right").removeClass("bgnone");
                $j(this).siblings(".product_list_colorimg_select").find(".product_list_colorimg_scroll:not(:animated)").stop(true, true).animate({left: "+=55px"}, 300, function() {
                    r = r + 1;
                    if (r == parseInt(q - 3) || r > parseInt(q - 3)) {
                        $j(this).parent().siblings(".pcsico_left").addClass("bgnone")
                    }
                })
            }
        });
        $j(this).find(".pcsico_right").click(function() {
            var t = parseInt($j(this).siblings(".product_list_colorimg_select").find(".product_list_colorimg_scroll").css("left"));
            var s = $j(this).parent().find(".product_list_colorimg_select").find(".product_list_colorimg_scroll").find("p").length;
            if (t / -55 < s - 3) {
                $j(this).siblings(".pcsico_left").removeClass("bgnone");
                $j(this).siblings(".product_list_colorimg_select").find(".product_list_colorimg_scroll:not(:animated)").stop(true, true).animate({left: "-=55px"}, 300, function() {
                    r = r - 1;
                    if ((t / -55) + 1 == s - 3) {
                        $j(this).parent().siblings(".pcsico_right").addClass("bgnone")
                    }
                })
            }
        })
    });
    $j(".product_list_colorimg .pcsico_left").hover(function() {
        if (!$j(this).hasClass("bgnone")) {
            $j(this).addClass("pcsico_left_hover")
        }
    }, function() {
        $j(this).removeClass("pcsico_left_hover")
    });
    $j(".product_list_colorimg .pcsico_right").hover(function() {
        if (!$j(this).hasClass("bgnone")) {
            $j(this).addClass("pcsico_right_hover")
        }
    }, function() {
        $j(this).removeClass("pcsico_right_hover")
    });
    $j(".product_list_colorimg .product_list_colorimg_select .product_list_colorimg_scroll p img").live("mouseover", function() {
        var D = $j(this).parents(".product_list_hover").siblings(".product_list_content").find(".pro_hover_larim0").find("img").attr("src");
        var E = $j(this).attr("src");
        $j(this).parents(".product_list_hover").find(".pro_hover_larim").find("img").attr("src", E.replace("T1", "S1"));
        $j(this).parents(".product_list_hover").mouseleave(function() {
            if (D != "/frontend/images/main/loading.gif") {
                $j(this).find(".pro_hover_larim").find("img").attr("src", D)
            }
        });
        var w = $j(this).parents(".product_list_hover");
        var r = w.find("#priceAkindd");
        var B = $j(this).parents(".product_list_hover").find(".product_list_name");
        var v = $j(this).attr("listPrice");
        var s = $j(this).attr("salesPrice");
        var t = $j(this).attr("code");
        var C = $j(this).parents(".product_list_hover").find(".quick_buy_btn");
        $j(C).attr("skuCode", t);
        var y = $j(this).attr("pdpUrl");
        loadPdpAidHrefWithParent(w, y);
        var G = v.replace(",", "");
        var x = s.replace(",", "");
        if (parseInt(G) == parseInt(x)) {
            r.html(loxia.getLocaleMsg("new.detail.money") + v)
        } else {
            r.html('<span class="origin_price">HK$' + v + "</span>" + loxia.getLocaleMsg("new.detail.money") + s)
        }
        var F = $j(this).attr("skuMark");
        var A = $j(this).parents(".product_list_hover").find(".product-mark");
        A.html(F);
        var z = parseFloat($j(this).attr("rankavg"));
        var q = $j(this).parent().parent().parent().parent().siblings(".review-rating-stars");
        checkStar(q, z);
        B.html('<span class="up">' + $j(this).attr("nameLine1") + '</span><br/><span class="down">' + $j(this).attr("nameLine2") + "</span>");
        $j(this).parents(".product_list_hover").mouseleave(function() {
            var J = $j(this).find("#priceAkindd");
            var K = $j(this).find(".product_list_name");
            var O = $j(this).siblings(".product_list_content").find(".product_list_name").html();
            var M = $j(this).siblings(".product_list_content").find("#oriPrice");
            var H = $j(this).find(".review-rating-stars");
            checkStar(q, H.attr("initRank"));
            J.html(M.html());
            J.attr("class", M.attr("class"));
            K.html(O);
            var L = $j(this).siblings(".product_list_content").find(".product-mark").html();
            $j(this).find(".product-mark").html(L);
            var I = $j(this).siblings(".product_list_content").attr("code");
            var P = $j(this).find(".quick_buy_btn");
            $j(P).attr("skuCode", I);
            var N = $j(this).siblings(".product_list_content").attr("pdpUrl");
            loadPdpAidHrefWithParent($j(this), N)
        })
    });
    var f = $j(".product_list_new .reselect_pro_change"), m = $j(".product_list_content img", f), i = (m.parent().width() - 32) / 2, a = (m.parent().height() - 32) / 2, d = $j(".product_list_new .clear_white");
    m.attr("src", domain_image + "/images/main/loading.gif").css({marginLeft: i,marginTop: a});
    function l(s) {
        var q = $j(".reselect_pro li").index(s);
        s.siblings("li").find("p").removeClass("reselect_selected");
        s.find("p").addClass("reselect_selected");
        s.parent(".reselect_pro").siblings(".reselect_pro_change").removeClass("block");
        var r = $j(".reselect_pro_change").eq(q).addClass("block");
        r.find(".product_list_content").find("img").each(function() {
            var w = $j(this), v = w.attr("lazy_src"), t = w.attr("src");
            if (t == domain_image + "/images/main/loading.gif") {
                w.css({marginLeft: i,marginTop: a})
            }
            if (!v) {
                return
            }
            $j("<img src='" + v + "' />").bind("load", function() {
                w.attr("src", "").hide();
                setTimeout(function() {
                    w.css({marginLeft: "",marginTop: ""}).attr("src", v).show();
                    w.removeAttr("lazy_src")
                }, 0)
            })
        })
    }
    $j(".reselect_pro li").click(function() {
        l($j(this))
    });
    var g = 0;
    $j(window).scroll(function() {
        var q = parseInt($j(window).scrollTop());
        $j(".reselect_pro").each(function() {
            var s = $j(".reselect_pro").index($j(this));
            var r = $j(this).parent(".product_list_new").offset().top;
            if (q > r && g == s) {
                $j(this).find("li").eq(0).click();
                g = g + 1
            }
        })
    });
    $j(".product_list_new ul.new_reselect_pro li").hover(function() {
        $j(this).find("p").addClass("new_reselect_selected")
    }, function() {
        $j(this).find("p").removeClass("new_reselect_selected")
    });
    $j(".product_list li").live("mouseenter", function() {
        $j(this).addClass("hover");
        var q = $j(".product_list_hover", this);
        q.find("img").each(function() {
            $j(this).attr("src", $j(this).attr("lazy_src"));
            $j(this).removeAttr("lazy_src")
        });
        setTimeout(function() {
            $j(this).css("z-index", "999");
            $j(this).siblings("li").css("z-index", "1")
        }, 0)
    }).live("mouseleave", function(q) {
        $j(this).removeClass("hover");
        setTimeout(function() {
            if (q.target.tagName != "SELECT") {
            }
        }, 1)
    });
    if (d.length > 0) {
        var k = d.offset().top, c = d.height();
        $j(window).scroll(function() {
            var r = $j(this), q = r.height(), s = r.scrollTop() + q;
            if ((k + c <= s && k + c >= s - q) || (k <= s && k >= s - q)) {
                $j.each($j("img[lazy_src]", "#center_margin"), function(v, t) {
                    var w = $j(t);
                    w.attr("src", w.attr("lazy_src"));
                    w.removeAttr("lazy_src")
                })
            }
        }).scroll()
    }
    $j("#searchForm").submit(function() {
        $j.cookie("fromSearch", "true", {path: "/"});
        var q = $j(this).find(".input_text_autocon").attr("value");
        if (q == "" || q == loxia.getLocaleMsg("main.KeyWordSearch")) {
            return false
        }
        if (firstSpellCheckWord != null) {
            $j("#spellCheckKeyWord").val(firstSpellCheckWord)
        } else {
            $j("#spellCheckKeyWord").val(null)
        }
        spellCheckKeyWord = null;
        firstSpellCheckWord = null
    });
    doSecurityImage();
    $j(".product_list_colorimg .product_list_colorimg_select .product_list_colorimg_scroll p img").live("click", function() {
        var q = $j(this).attr("isNikeIdSku");
        var r = $j(this).attr("nikeIdUrl");
        if (q == "true" && !isNullOrEmpty(r)) {
            window.open(r)
        } else {
            var s = $j(this).attr("pdpUrl");
            window.open(s)
        }
    });
    $j(".nikeIdSkuImg").click(function() {
        var q = $j(this).attr("val");
        window.open(q)
    })
});
function doSecurityImage() {
    $j(".securityImage").live("click", function() {
        var a = $j(this);
        _doSecurityImage(a)
    });
    $j(".securityImageEvent").live("click", function() {
        var a = $j(".securityImage");
        _doSecurityImage(a)
    })
}
function _doSecurityImage(a) {
    var e = a.attr("src");
    var d = e.indexOf("?");
    var b = d != -1;
    if (b) {
        e = e.substring(0, d)
    }
    var c = e + "?time=" + new Date().getTime();
    a.attr("src", c)
}
function loadPdpAidHrefWithParent(a, b) {
    a.find("[name=pdpAid]").each(function() {
        $j(this).attr("href", b)
    })
}
function tengxunShare(c, b, a) {
    weiboShare(c, b, a, "tengxun")
}
function sinaShare(c, b, a) {
    weiboShare(c, b, a, "sina")
}
function facebookShare(a) {
    weiboShare(null, a, null, "facebook")
}
function weiboShare(j, b, g, c) {
    var d, k, h, i = encodeURIComponent;
    if (c == "sina") {
        k = 2924220432;
        h = "http://v.t.sina.com.cn/share/share.php?";
        d = ["url=", i(b), "&title=", i(j), "&appkey=" + k, "&searchPic=false", "&pic=", g].join("")
    } else {
        if (c == "tengxun") {
            k = 801204996;
            h = "http://v.t.qq.com/share/share.php?";
            d = ["url=", i(b), "&title=", i(j), "&appkey=" + k, "&searchPic=false", "&pic=", g].join("")
        } else {
            if (c == "facebook") {
                h = "http://www.facebook.com/sharer.php?";
                d = ["u=", i(b)].join("")
            }
        }
    }
    function l() {
        if (!window.open([h, d].join(""), "mb", ["toolbar=0,status=0,resizable=1,width=620,height=450,left=", (screen.width - 620) / 2, ",top=", (screen.height - 450) / 2].join(""))) {
            u.href = [h, d].join("")
        }
    }
    if (/Firefox/.test(navigator.userAgent)) {
        setTimeout(l, 0)
    } else {
        l()
    }
}
$j(window).load(function() {
    if (!$j(".category_area_btn ul li").hasClass("cab_icblock")) {
        $j(".category_area_btn ul li").first().addClass("cab_icblock")
    }
    if ($j(".category_area_btn ul li").hasClass("cab_icblock")) {
        var b = 0;
        $j(".category_area_btn ul li").each(function() {
            if ($j(this).hasClass("cab_icblock")) {
                b = $j(".category_area_btn ul li").index($j(this))
            }
        });
        $j(".category_area_btn ul li").hover(function() {
            $j(".category_area_btn ul li").removeClass("cab_icblock");
            $j(this).addClass("cab_icblock")
        }, function() {
            $j(".category_area_btn ul li").removeClass("cab_icblock");
            $j(".category_area_btn ul li").eq(b).addClass("cab_icblock")
        });
        $j(".category_area_btn ul li").click(function() {
            $j(".category_area_btn ul li").removeClass("cab_icblock");
            $j(this).addClass("cab_icblock");
            b = $j(".category_area_btn ul li").index($j(this));
            $j(".fb_sc_content_all").css("display", "none");
            $j(".fb_sc_content_all").eq(b).css("display", "block")
        })
    }
    $j(".header_slide_content,.header_slide_login,.header_slide_content2").hide();
    var a = parseInt($j(".header ul").outerWidth());
    $j(".header ul li").each(function() {
        if (!$j(this).hasClass("menu_long")) {
            var e = parseInt($j(this).outerWidth());
            a = a - e
        }
    });
    $j(window).resize();
    var d = null;
    var c = null;
    $j(".menu_tag a").live("mouseenter", function(j) {
        j.stopPropagation();
        clearTimeout(d);
        clearTimeout(c);
        var g = $j(".menu_tag a").index($j(this));
        $j(".menu_tag a").removeClass("menu_tag_selected");
        $j(".menu_tag p").css("display", "none");
        $j(this).addClass("menu_tag_selected").siblings("p").css("display", "block");
        var i = $j(".header .header_slide_content");
        if ($j(".header .header_slide_content.header_slide_login").data("finish")) {
            i.filter(":not(header_slide_login)")
        }
        $j(i).stop(true, true).fadeOut(100).eq(g).fadeIn(300);
        $j(".header .grey_shadow2").css("display", "none");
        $j(".grey_shadow").css("display", "block");
        if ($j(this).hasClass("menu_loginreg")) {
            $j(".header .grey_shadow2").css("display", "none");
            $j(".header .header_slide,.header .grey_shadow2").removeClass("header_width_auto").addClass("header_width298")
        } else {
            if ($j(this).hasClass("menu_login_success")) {
                $j(".header .grey_shadow2").css("display", "none");
                $j(".header .header_slide,.header .grey_shadow2").removeClass("header_width298").removeClass("header_width_auto").addClass("header_aslidewidth_login")
            } else {
                if ($j(this).hasClass("menu_shopping_cart")) {
                    $j(".header .grey_shadow2").css("display", "none");
                    $j(".header .header_slide,.header .grey_shadow2").removeClass("header_width298").addClass("header_width_auto")
                } else {
                    if ($j(".header .header_slide").hasClass("header_width298") || $j(".header .header_slide").hasClass("header_width_auto") || $j(".header .header_slide").hasClass("header_aslidewidth_login")) {
                        $j(".header .grey_shadow2").css("display", "none");
                        $j(".header .header_slide,.header .grey_shadow2").removeClass("header_width298");
                        $j(".header .header_slide,.header .grey_shadow2").removeClass("header_width_auto");
                        $j(".header .header_slide,.header .grey_shadow2").removeClass("header_aslidewidth_login")
                    } else {
                        $j(".header .header_slide,.header .grey_shadow2").removeClass("header_width298");
                        $j(".header .header_slide,.header .grey_shadow2").removeClass("header_width_auto");
                        $j(".header .header_slide,.header .grey_shadow2").removeClass("header_aslidewidth_login")
                    }
                }
            }
        }
        var h = $j(".header .header_slide_content").eq(g);
        var f = parseInt(h.height());
        if ($j(this).parents("li").hasClass("menu_tag_s")) {
            $j(".header .header_slide").stop(true, false).animate({height: 220}, 300, function() {
                $j(".header .grey_shadow2").css({top: 270,display: "block"})
            })
        } else {
            $j(".header .header_slide").stop(true, false).animate({height: f + 40}, 300, function() {
                $j(".header .grey_shadow2").css({top: f + 90,display: "block"})
            })
        }
    });
    $j(".menu_tag a,.header").live("mouseleave", function(f) {
        clearTimeout(d);
        clearTimeout(c);
        var g = $j(this);
        if ($j(".header_slide_login").is(":hidden")) {
            d = setTimeout(function() {
                $j(".menu_tag a").removeClass("menu_tag_selected");
                $j(".menu_tag p").css("display", "none");
                $j(".header .grey_shadow,.header .grey_shadow2").css("display", "none");
                $j(".header .header_slide_content:not(.header_slide_login)").stop(true, true).fadeOut(100);
                $j(".header .header_slide").stop(true, false).animate({height: "0px"}, 400)
            }, 300)
        } else {
            $j(".header .header_slide_content.header_slide_login").data("finish", true);
            c = setTimeout(function() {
                $j(".header_slide_content.header_slide_login").fadeOut(200);
                $j(".header .header_slide_content.header_slide_login").data("finish", false);
                $j(".header .header_slide").stop(true, false).animate({height: "0px"}, 400)
            }, 3000)
        }
    });
    $j(".header_slide").mouseover(function(f) {
        clearTimeout(d);
        clearTimeout(c)
    });
    $j(".fb_sc_content_all").each(function() {
        var e = $j(this).find("ul").find("li").length;
        $j(this).find(".fb_sc_right").click(function() {
            if (e - 9 > 0) {
                $j(this).siblings(".fb_sc_content").find("ul:not(:animated)").animate({left: "-=89px"}, 500);
                e = e - 1
            } else {
            }
        });
        $j(this).find(".fb_sc_left").click(function() {
            var f = parseInt($j(this).siblings(".fb_sc_content").find("ul").css("left"));
            if (f < 0) {
                $j(this).siblings(".fb_sc_content").find("ul:not(:animated)").animate({left: "+=89px"}, 500);
                e = e + 1
            } else {
            }
        })
    })
});
function productImgLazyLoad(b) {
    if ($j.browser.msie && ($j.browser.version == "6.0") && !$j.support.style) {
        b.lazyload()
    } else {
        var a = domain_image + "/images/main/loading.gif";
        b.lazyload({effect: "fadeIn",placeholder: a})
    }
}
function loadEachFunction(a) {
    $j(".product_list_colorimg_scroll").each(function() {
        var b = $j(this).find("p").length;
        $j(this).width(55 * b)
    });
    $j(".product_list_colorimg .pcsico_left").hover(function() {
        if (!$j(this).hasClass("bgnone")) {
            $j(this).addClass("pcsico_left_hover")
        }
    }, function() {
        $j(this).removeClass("pcsico_left_hover")
    });
    $j(".product_list_colorimg .pcsico_right").hover(function() {
        if (!$j(this).hasClass("bgnone")) {
            $j(this).addClass("pcsico_right_hover")
        }
    }, function() {
        $j(this).removeClass("pcsico_right_hover")
    });
    $j("[pageColor='" + a + "']").each(function() {
        var c = $j(this).find(".product_list_colorimg_select").find(".product_list_colorimg_scroll").find("p").length - 3;
        var b = $j(this).find(".product_list_colorimg_select").find(".product_list_colorimg_scroll").find("p").length;
        if (b < 4) {
            $j(this).find(".pcsico_left").addClass("bgnone");
            $j(this).find(".pcsico_right").addClass("bgnone")
        }
        $j(this).find(".pcsico_left").click(function() {
            var d = parseInt($j(this).siblings(".product_list_colorimg_select").find(".product_list_colorimg_scroll").css("left"));
            if (d < 0) {
                $j(this).siblings(".pcsico_right").removeClass("bgnone");
                $j(this).siblings(".product_list_colorimg_select").find(".product_list_colorimg_scroll:not(:animated)").stop(true, true).animate({left: "+=55px"}, 300, function() {
                    c = c + 1;
                    if (c == parseInt(b - 3) || c > parseInt(b - 3)) {
                        $j(this).parent().siblings(".pcsico_left").addClass("bgnone")
                    }
                })
            }
        });
        $j(this).find(".pcsico_right").click(function() {
            var e = parseInt($j(this).siblings(".product_list_colorimg_select").find(".product_list_colorimg_scroll").css("left"));
            var d = $j(this).parent().find(".product_list_colorimg_select").find(".product_list_colorimg_scroll").find("p").length;
            if (e / -55 < d - 3) {
                $j(this).siblings(".pcsico_left").removeClass("bgnone");
                $j(this).siblings(".product_list_colorimg_select").find(".product_list_colorimg_scroll:not(:animated)").stop(true, true).animate({left: "-=55px"}, 300, function() {
                    c = c - 1;
                    if (c == 0) {
                        $j(this).parent().siblings(".pcsico_right").addClass("bgnone")
                    }
                })
            }
        });
        productImgLazyLoad($j(this).parent().siblings(".product_list_content").find(".skul_spic img"))
    });
    productImgLazyLoad($j("[name=nikeIdProductImg][pageColor='" + a + "']"));
    $j(".addToBuycartLink").live("click", function() {
        var b = $j(this).parents("dl");
        var d = b.attr("skucode");
        omnitureVisitorsAddCrossSellToCart(d);
        var f = b.find("select.buySizeSelect");
        var c = b.find("select.buyCountSelect").val();
        var g = f.val();
        if (undefined == g || null == g || "" == g || undefined == c || null == c || "" == c || c < 0) {
            sAlert(loxia.getLocaleMsg("main.SaleProduct"))
        } else {
            var e = f.find("option:selected").attr("q");
            if (c > e) {
                sAlert(loxia.getLocaleMsg("main.NotStock"))
            } else {
                addOneUpcAndRefresh(g, c)
            }
        }
    })
}
function colorChipUpcChangeEvent(a, b) {
    $j(".product_list_colorimg .product_list_colorimg_select .product_list_colorimg_scroll p img").hover(function() {
        var c = $j(this).attr("code");
        var e = $j(this).parents(b).find("select.buySizeSelect");
        $j(e).find("option").remove();
        var d = a[c];
        $j(d).each(function(f, h) {
            var g = $j('<option value="' + h.upc + '" q="' + h.availableQty + '">' + h.sizeRef + "</option>");
            g.appendTo($j(e))
        })
    })
}
$j(function() {
    if ($j.browser.msie && ($j.browser.version == "6.0") && !$j.support.style) {
        $j(".skul_spic img").lazyload()
    } else {
        var a = domain_image + "/images/main/loading.gif";
        $j(".skul_spic img").lazyload({effect: "fadeIn",placeholder: a})
    }
});
function lazyLoadNikeLive800() {
    var b = "http://chat32.live800.com/live800/chatClient/staticButton.js?jid=3528372310&companyID=131893&configID=51294&codeType=custom&delayload=1&renderid=live800dt";
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.async = true;
    a.src = b;
    document.body.appendChild(a)
}
function ajaxError(a) {
    if (a.exception) {
        switch (a.exception.statusCode) {
            case 900:
                window.location.href = _contextPath + "/member/login.htm";
                break;
            case 0:
                break;
            default:
                sAlert(loxia.getLocaleMsg("main.Sorry"))
        }
    }
}
function getErrspan(a) {
    return $j(a).next(".error_div")
}
function setValid(d, a, c) {
    $j(d).data("checked", a);
    var b = getErrspan(d);
    b.find("span").length == 0 ? b.html(c) : b.find("span").html(c);
    if (a) {
        b.css("display", "none")
    } else {
        b.css("display", "block")
    }
}
function setValidHeaderLogin(d, a, c) {
    $j(d).data("checked", a);
    var b = getErrspan(d);
    b.find("span").length == 0 ? b.html("<span>" + c + "</span><i></i>") : b.find("span").html(c);
    b.css("left", "2%");
    if (a) {
        b.css("display", "none")
    } else {
        b.css("display", "block")
    }
}
function setNewValid(e, a, d) {
    $j(e).data("checked", a);
    var b = getErrspan(e);
    b.html(d + "<i></i>");
    if (a) {
        b.parent().removeClass("error");
        b.css("display", "none")
    } else {
        var c = parseInt(b.outerWidth());
        b.parent().addClass("error");
        b.css("display", "block")
    }
}
function isInputEmpty(a) {
    var b = $j(a);
    var d = $j.trim(b.val());
    var c = $j.trim(b.attr("ori_value"));
    if (d == "" || d == c) {
        return true
    } else {
        return false
    }
}
function checkZipCode(a) {
    var b = /^[0-9]{6}$/;
    return b.test(a)
}
function validatorTelephone(a) {
    var b = /^(0[0-9]{2,3}(\-)?)?([2-9]{1}[0-9]{6,7}){1}(\-[0-9]{1,4})?$/;
    return b.test(a)
}
function validatorMobile(b) {
    var c = /^(\+852\s)?[5689]{1}\d{7}$/;
    var d = /^(\+886\s)?[0]{1}[9]{1}\d{8}$/;
    var a = /^(\+86\s)?1[3456789]{1}\d{9}$/;
    return c.test(b) || d.test(b) || a.test(b)
}
$j(document).ready(function() {
    var a = parseInt($j(window).width());
    $j(window).width(a - 1);
    var b = $j(".pcontent-wall");
    if (b.length) {
        var c = $j("img", b).attr("lazy_src");
        $j('<img src="' + c + '" />').load(function() {
            $j("img", b).attr("src", c)
        })
    }
});
$j(window).load(function() {
    $j(window).resize(function() {
        $j(".nike_kv_new img").each(function() {
            imgAutoMap(this)
        });
        $j(".kv_large_img img").each(function() {
            imgAutoMap(this)
        });
        $j(".as_list_kv img").each(function() {
            imgAutoMap(this)
        });
        $j(".nikeid-subkv img").each(function() {
            imgAutoMap(this)
        })
    }).resize();
    var a = parseInt($j(window).width());
    $j(window).width(a - 1)
});
function isNullOrEmpty(a) {
    if (a == "" || a == null || a == undefined) {
        return true
    } else {
        return false
    }
}
(function(a) {
    window.imgAutoMap = function(c) {
        var c = a(c), h = new Image(), e = a(c.attr("usemap"));
        h.src = (c.attr("src") || c.attr("kv_src") || c.attr("lazy_src"));
        var g = h.width, b = h.height, i = c.width(), d = c.height(), f = g / i;
        if (e) {
            e.find("area").each(function() {
                var k = a(this), l = [], m = [];
                l = k.attr("coords").split(",");
                if (k.data("oldCoords")) {
                    l = k.data("oldCoords")
                } else {
                    l = k.attr("coords").split(",");
                    k.data("oldCoords", l)
                }
                for (var j = 0; j < l.length; j++) {
                    m.push(Math.ceil(l[j] / f))
                }
                k.attr("coords", m.join(","))
            })
        }
    };
    a(function() {
        var j = a(".keyword-span"), i = a("span.clear-spant");
        j.click(function() {
            j.hide();
            a("#keyword").focus()
        });
        i.click(function() {
            a("#keyword").val("");
            i.hide();
            j.show()
        });
        a("#keyword").blur(function() {
            var l = a.trim(a(this).val());
            var k = loxia.getLocaleMsg("header.search");
            if ($j(".menu-search").width() <= 226) {
                k = loxia.getLocaleMsg("header.search1")
            }
            $j(".keyword-span").html(k);
            if (l == "" || ($j(".menu-search").width() <= 120 && l == "")) {
                i.hide();
                j.show()
            }
        });
        var g = a(".input_text_autocon.text_val_ori"), b = a(".seach-out"), f = [37, 38, 39, 40, 13], c = function(l, k) {
            var n = b.find("li" + k);
            n.addClass("cur");
            l.val(n.text());
            spellCheckWord = n.text()
        }, d = function(k) {
            if (k == null || k == "" || k == "undefined" || k.spellCheck == null || k.spellCheck == "" || k.spellCheck == "undefined" || k.spellCheck.length < 1) {
                b.hide();
                return
            }
            var k = k.spellCheck;
            var l = [];
            spellCheckWord = null;
            firstSpellCheckWord = null;
            a.each(k, function(m, n) {
                var o = n.split(":");
                if (o[0].indexOf(loxia.getLocaleMsg("main.Test")) > 0) {
                    return
                }
                if (o[0] == "firstSpellCheckWord") {
                    firstSpellCheckWord = o[1];
                    return
                }
                l.push("<li>" + n + "</li>")
            });
            l = l.join("");
            b.find("ul").html(l);
            b.show()
        }, h = function(l) {
            var k = a("#keyword").val();
            loxia.asyncXhrPost(_contextPath + "/product/search/spellCheck.json", {keyword: l}, {successHandler: d})
        };
        a(window).blur(function() {
            g.blur()
        });
        g.keypress(function() {
            $j(".keyword-span").hide()
        }).keyup(function(w) {
            var v = a(this), p = v.val(), l = a.trim(p), w = w ? w : window.event, t = w.keyCode, x = a("li", b), s = x.length;
            if (l == "") {
                i.hide();
                b.hide();
                return
            }
            if (a.inArray(t, f) == -1 && l) {
                i.show();
                h(p)
            }
            if (a.inArray(t, f) != -1 && s != 0) {
                var x = b.find("li[class='cur']"), r = x.index();
                s -= 1;
                if (b.is(":visible")) {
                    switch (t) {
                        case 38:
                            var n = "";
                            if (r == -1) {
                                n = ":last"
                            } else {
                                b.find("li").removeClass("cur");
                                --r;
                                r = r < 0 ? s : r;
                                n = ":eq(" + r + ")"
                            }
                            c(v, n);
                            break;
                        case 40:
                            var q = "";
                            if (r == -1) {
                                q = ":eq(0)"
                            } else {
                                b.find("li").removeClass("cur");
                                ++r;
                                r = r > s ? 0 : r;
                                q = ":eq(" + r + ")"
                            }
                            c(v, q);
                            break;
                        default:
                            return
                    }
                }
            }
        });
        var e = "ontouchstart" in window && !(/hp-tablet/gi).test(navigator.appVersion);
        a("li", b).live(e ? "touchend" : "click", function() {
            var k = a(this).text();
            spellCheckWord = k;
            g.val(k);
            a("#searchForm").submit();
            b.hide()
        });
        a(document).click(function() {
            b.hide()
        })
    })
})(jQuery);
function setUrlParam(url, name, value) {
    var r = url;
    if (r != null && r != "undefined" && r != "") {
        value = encodeURIComponent(value);
        var reg = new RegExp("(^|)" + name + "=([^&#]*)(|$)");
        var tmp = name + "=" + value;
        if (url.match(reg) != null) {
            r = url.replace(eval(reg), tmp)
        } else {
            var sharpSparated = url.split("#");
            var questSparated = sharpSparated[0].split("?");
            r = questSparated[0] + "?" + tmp;
            if (questSparated.length > 1) {
                r += "&" + questSparated[1]
            }
            if (sharpSparated.length > 1) {
                r += "#" + sharpSparated[1]
            }
        }
    }
    var iidReg = new RegExp("(^|)[&]intpromo=([^&#]*)(|$)");
    if (cur_locale == "zh_HK") {
        if (r.match(iidReg) != null) {
            if (value == "en-gb") {
                r = r.replace(eval(iidReg), "&intpromo=language2001")
            } else {
                r = r.replace(eval(iidReg), "")
            }
        } else {
            if (value == "en-gb") {
                r += "&intpromo=language2001"
            }
        }
    } else {
        if (r.match(iidReg) != null) {
            if (value == "zh-hk") {
                r = r.replace(eval(iidReg), "&intpromo=language1001")
            } else {
                r = r.replace(eval(iidReg), "")
            }
        } else {
            if (value == "zh-hk") {
                r += "&intpromo=language1001"
            }
        }
    }
    return r
}
function validateGuest() {
    var a = loxia.syncXhrGet(_contextPath + "/member/is_login.json").login;
    if (a == "true") {
        return false
    } else {
        return true
    }
}
$j(document).ready(function() {
    $j(".tab-sclor").off().on("click", "[type=radio],span", function() {
        var c = $j(this).parent().index() - 1;
        $j(".shoping-contexts").hide().eq(c).show();
        $j(".en-cur").hide().eq(c).show();
        $j(".sclor-all").removeClass("cur").eq(c).addClass("cur");
        $j(this).parent().find("input").prop("checked", true)
    });
    if ($j(".backgroung-orders", ".map-contents-left").length >= 5) {
        $j(".map-contents-left").css("overflow-y", "scroll")
    }
    $j(".nike-nav-section").delegate(".nike-nav-section-title-link", "click", function() {
        var e = this;
        isClose = $j(this).hasClass("nike-nav-closed");
        var c = $j(this).parent().find(".nike-left-navigation-nav-links-wrapper").length;
        var d;
        if (c <= 1) {
            d = $j(this).next()
        } else {
            d = $j(this).next().next()
        }
        $j(d).stop(true, true)[isClose ? "slideDown" : "slideUp"]("fast", function() {
            $j(".nike-left-nav-action", e)[isClose ? "removeClass" : "addClass"]("cur");
            $j(e)[isClose ? "removeClass" : "addClass"]("nike-nav-closed")
        })
    });
    $j(".acit-cur").click(function() {
        $j(this).toggleClass("cur");
        $j(this).next(".detiony").toggleClass("none")
    });
    $j(".nike-nav-header").bind("click", function() {
        var c = this;
        isClose = $j(".nike-left-nav-action-main", c).hasClass("cur");
        $j(".nike-left-navigation-sections-wrapper").stop(true, true)[isClose ? "slideDown" : "slideUp"]("fast", function() {
            $j(".nike-left-nav-action-main", c)[isClose ? "removeClass" : "addClass"]("cur")
        })
    });
    var b = $j("li", ".navigative-to").height() || $j("li", ".nike-left-navigation-nav-links").height();
    $j(".nike-nav-section").each(function() {
        var f = this, e = $j(".navigative-to li", f), d = e.length, c = 6;
        if ($j(this).find(".selected-facet")) {
            b = 40
        }
        if (d < c) {
            $j(".nike-left-nav-additional-content", f).hide()
        } else {
            $j(".navigative-to", f).css({overflow: "hidden",height: b * c});
            $j(".navigative-to", f).css({paddingBottom: 0})
        }
        $j(".nike-left-navigation-nav-links > li", f).show();
        $j(".nike-left-nav-additional-content", f).unbind().bind("click", function(h) {
            h.preventDefault();
            var i = this;
            ishide = $j(this).data("s");
            $j(this).prev().animate({height: ishide ? b * c : b * d}, {duration: "fast",complete: function() {
                    $j(i).data("s", ishide ? 0 : 1);
                    $j("a", i)[ishide ? "removeClass" : "addClass"]("nike-left-nav-section-expanded")
                }});
            var g = $j(i).find("a");
            if ($j(g).hasClass("nike-left-nav-section-expanded")) {
                $j(g).text(loxia.getLocaleMsg("categoryAndSearch.filter.more"))
            } else {
                $j(g).text(loxia.getLocaleMsg("categoryAndSearch.filter.less"))
            }
        })
    });
    var a = "locale";
    $j(".exp-darkbar-right-section, .nike-cq-global-footer-bottom-container, .nike-cq-global-footer-locale").find("a[loc]").click(function() {
        var e = $j(this).attr("loc");
        var f = $j(this).attr("actloc");
        var h = new Date();
        h.setTime(h.getTime() + (30 * 24 * 60 * 60 * 1000));
        document.cookie = "clientlanguage=" + f + "; expires=" + h.toGMTString() + "; path=/";
        if (typeof ($j("#deliveryMethod").val()) != "undefined") {
            var g = getFormDataToSubmit();
            var c = loxia.syncXhrPost(_contextPath + "/transaction/rememberSoConfirmInfo.json", g);
            if (null != c && c.success == true) {
                window.location.href = setUrlParam(window.location.href, a, e)
            }
        } else {
            window.location.href = setUrlParam(window.location.href, a, e)
        }
    });
    $j(".opendall .nike-left-navigation-nav-links .selected-facet").click(function(d) {
        d.preventDefault();
        var f = $j(this).attr("val");
        var c = $j("#searchUrl").val();
        var g = $j(this).parent().parent().attr("id");
        if (f == "kid") {
            c = c.replace($j("#kidGenderCode").val(), "");
            c = c.replace($j("#kidAgeCode").val(), "")
        }
        if (g == "filterCategory" || g == "filterGender") {
            c = c.replace($j("#size").val(), "");
            c = c.replace($j("#typeCode").val(), "")
        }
        if (g == "filterSport") {
            c = c.replace($j("#bestForAllCode").val(), "")
        }
        if (g == "filterSport") {
            c = c.replace($j("#athleteAllCode").val(), "")
        }
        if (g == "filterSport") {
            c = c.replace($j("#shoeTechnologyCode").val(), "")
        }
        if (g == "filterSport") {
            c = c.replace($j("#feetWidthCode").val(), "")
        }
        if (g == "filterSport") {
            c = c.replace($j("#surfaceCode").val(), "")
        }
        if (g == "filterPrice") {
            c = c.replace($j("#price").val(), "")
        } else {
            c = c.replace(encodeURI(f), "")
        }
        if (g = "filterType") {
            c = c.replace($j("#fitCode").val(), "")
        }
        c = $j("#baseUrl").val() + c;
        window.location.href = c
    });
    $j(".nike-merch-menu-component .nike-merch-menu-expand span").mouseenter(function() {
        $j(this).hide();
        $j(this).parents(".nike-merch-menu-hover").addClass("active").css("height", "auto");
        $j(this).parent().prev().css("height", "auto")
    });
    $j(".nike-merch-menu-column").mouseleave(function() {
        $j(".nike-merch-menu-expand span").show();
        $j(".nike-merch-menu-hover").removeClass("active").css("height", "195px");
        $j(".nike-merch-menu-links").css("height", "90px")
    });
    $j("#nikeIdTag").click(function() {
        var c = loxia.getLocaleMsg("main.next"), d = loxia.getLocaleMsg("nikeid.dialog.msg");
        $j(".pdidclass2,.black_opacity_ss").remove();
        $j("<div class='black_opacity black_opacity_ss' id='nikeIdDialog-opacity' style='z-index:11;'></div>").css({height: $j("body").height(),opacity: "0.8"}).detach().appendTo("body").fadeOut(15).fadeIn(300);
        $j("<div class='pay_dialog pdidclass2' id='nikeIdDialog'><div class='pay_dialog_coco'><div><label></label><p style='padding:25px 0 0 0; text-align:center;'><a href='###' class='btn-grey-s btn146 sucess_confirm'>" + c + "</a></p></div><span class='cross_cha close closeImg'></span></div></div>").detach().appendTo("body").fadeOut(15).fadeIn(300);
        $j(".pdidclass2 label").html(d);
        return false
    });
    $j(".sucess_confirm", "#nikeIdDialog").live("click", function() {
        window.open("http://nikeid.com.hk?intpromo=tpni07141001");
        $j(".close", "#nikeIdDialog").trigger("click")
    });
    $j(".close", "#nikeIdDialog").live("click", function() {
        $j(".pdidclass2,.black_opacity_ss").remove()
    });
    $j("#nikeIdDialog-opacity").live("click", function() {
        $j(".pdidclass2,.black_opacity_ss").remove()
    });
    $j(window).scroll(function() {
        var c = $j(this).scrollLeft();
        $j(".header.header-allters").css({left: -c})
    });
    $j(".shipconten-all-centets .shiping-a").hover(function() {
        $j(this).css("border", "1px solid #fb691f");
        $j(".godeliver-textall", this).css("border-top", "1px solid #fb691f");
        $j(".godeliver-textall a", this).css("color", "#fb691f");
        $j(".godeliver_allimg", this).addClass("cur")
    }, function() {
        $j(this).css("border", "1px solid #E3E3E3");
        $j(".godeliver-textall", this).css("border-top", "1px solid #E3E3E3");
        $j(".godeliver-textall a", this).css("color", "#333333");
        $j(".godeliver_allimg", this).removeClass("cur")
    });
    $j(">a", ".nike-follow-us").click(function() {
        var e = $j(">div", ".nike-follow-us"), g = $j("ul", ".nike-follow-us"), d = g.width(), h = g.outerHeight(true), f = Math.floor(d / 315);
        var c = $j("> a", ".nike-follow-us");
        if (c.hasClass("down")) {
            e.animate({height: h}, 500, function() {
                c.html("<span>" + loxia.getLocaleMsg("main.less") + "</span>").removeClass("down").addClass("up");
                e.height("auto")
            })
        } else {
            e.animate({height: 240}, 500, function() {
                c.html("<span>" + loxia.getLocaleMsg("main.more") + "</span>").removeClass("up").addClass("down")
            })
        }
    });
    $j(".review-rating-stars,[isLoad='false']").each(function() {
        checkStar($j(this), $j(this).attr("rank"));
        $j(this).attr("isLoad", "true")
    })
});
(function(a) {
    a(function() {
        a(window).resize(function() {
            $j(".seach-out").hide();
            var b = a(".text-l", ".header-search-content").width() + a("#keyword").outerWidth(true) + a(".text-r", ".header-search-content").width();
            a(".seach-out").css({width: b})
        }).resize();
        a(".exp-gridwall-sort-option-container").hover(function() {
            a(this).find(".nsg-mode--flat > ul.nsg-drop-down").show()
        }, function() {
            a(this).find(".nsg-mode--flat > ul.nsg-drop-down").hide()
        });
        a(".nsg-form--drop-down--list-item").click(function() {
            a(this).addClass("is-selected").siblings().removeClass("is-selected")
        });
        a("#btn-email").click(function() {
            a(".modal-dialog-content.e-mail").show();
            $j("<div class='black_opacity'></div>").css({height: $j("body").height(),opacity: "0.5"}).detach().appendTo("body").fadeOut(15).fadeIn(300)
        });
        a("a.close").click(function() {
            a(".modal-dialog-content.e-mail").hide()
        });
        a("#btn-allicon").click(function() {
            a(".modal-dialog-content.btn-eallico").show();
            $j("<div class='black_opacity'></div>").css({height: $j("body").height(),opacity: "0.5"}).detach().appendTo("body").fadeOut(15).fadeIn(300)
        });
        a("a.close").click(function() {
            a(".modal-dialog-content.btn-eallico").hide()
        });
        a(".common_select_box").children("ul").hide();
        a(".common_select_box").live("click", (function(b) {
            a(this).children("ul").show();
            a(".select_scroll", this).mCustomScrollbar({scrollButtons: {enable: true},theme: "3d-thick"})
        }));
        a(".common_select_box li").live("mouseover", (function(b) {
            a(this).addClass("current")
        }));
        a(".common_select_box li").live("mouseout", (function(b) {
            a(this).removeClass("current")
        }));
        a(".common_select_box li").live("click", (function(b) {
            var c = a(this).text();
            a(this).parents("ul").parent("div").children("span").text(c);
            a(this).parents("ul").hide();
            b.stopPropagation();
            a(this).addClass("current_1").siblings("li").removeClass("current_1")
        }));
        a(".common_select_box").live("mouseleave", (function(b) {
            a(this).children("ul").hide()
        }))
    })
})(jQuery);
var pdpRecommend = false;
var oldP3;
var oldP17;
$j(function() {
    $j("#colorChipContainer").live("click", function() {
        omniturePdpViewAlternative()
    });
    $j(".quick_buy_btn,.quick_buy_btn_ipad").live("click", function() {
        var c = $j(this).attr("skuCode");
        if (isNullOrEmpty(c)) {
            return
        }
        var f = $j(this).attr("pdpRecommend");
        s.oldPageName = s.pageName;
        oldP3 = p3;
        oldP17 = p17;
        p3 = "pdp:Mini";
        p17 = "pdp:Mini";
        if (f == "true") {
            omniturePdpMaybeLike()
        } else {
            omnitureHomePageProducts(c)
        }
        var h = loxia.syncXhrPost(_contextPath + "/product/validateSku", {skuCode: c});
        if (isNullOrEmpty(h) || !h.isCanAccess) {
            location.href = _contextPath + "/errors/producterror.htm";
            return false
        }
        var d = _contextPath + "/product/" + c + "/dialog";
        var b = loxia.syncXhrPost(d, {pdpRecommend: f});
        $j("#quickbuyDialog").html(b);
        $j("#quickbuyDialog").css("width", "auto");
        checkStar($j("#detail_dialog_stars"), $j("#detail_dialog_stars").attr("rank"));
        var g = $j(window).scrollTop();
        $j(".black_opacity:eq(0)").detach().appendTo("body").fadeOut(15).fadeIn(300);
        var e = $j("#quickbuyDialog").width() + 80;
        initColosImg();
        if ($j("#quickbuyDialog .text-err").length > 0) {
            $j("#quickbuyDialog").css("width", "");
            e = $j("#quickbuyDialog").width() + 80
        }
        $j("#quickbuyDialog").css({top: g + 200 + "px",marginLeft: "-" + e / 2 + "px"}).detach().appendTo("body").fadeIn(300)
    });
    var a = 0;
    $j(".related-colors-scroll").find(".btn-left").live("click", function() {
        a--;
        if (a < 0) {
            a = 0
        }
        $j(this).closest(".related-colors-scroll").find("#relatedColors").animate({"margin-left": -a * 61 + "px"})
    });
    $j(".related-colors-scroll").find(".btn-right").live("click", function() {
        var b = $j(this).closest(".related-colors-scroll").find("#relatedColors li").length, c = $j(this).closest(".quick-buy-dialog").length != 0 ? 7 : 5;
        a++;
        if (a > b - c) {
            a = b - c
        }
        $j(this).closest(".related-colors-scroll").find("#relatedColors").animate({"margin-left": -a * 61 + "px"})
    });
    $j(".relatedColorsDialog li").live("click", function() {
        var d = $j(this).attr("skuCode");
        var c = $j(this).attr("currentSkuCode");
        if (c != d) {
            var f = loxia.syncXhrPost(_contextPath + "/product/validateSku", {skuCode: d});
            if (isNullOrEmpty(f) || !f.isCanAccess) {
                location.href = _contextPath + "/errors/producterror.htm";
                return false
            }
            var g = $j(this).attr("deleteUpc");
            var e = _contextPath + "/product/" + d + "/dialog";
            var b = loxia.syncXhrPost(e, {upc: g,isSameSku: false,pdpRecommend: pdpRecommend});
            $j("#quickbuyDialog").html(b);
            checkStar($j("#detail_dialog_stars"), $j("#detail_dialog_stars").attr("rank"));
            initColosImg()
        }
    });
    $j("#relatedColors li:not(.selected)").live("mouseenter", function() {
        $j(this).addClass("colorshover").siblings().removeClass("colorshover")
    });
    $j("#relatedColors li").live("mouseleave", function() {
        $j(this).removeClass("colorshover")
    });
    $j("#colorChipContainer img").live("click", function() {
        var c = $j(this), d = c.attr("middleImage"), b = c.attr("bigimage");
        $j("li", c.parents("ul")).removeClass("selected");
        c.parents("li").addClass("selected");
        $j(".primary-product-image").attr({src: d,"data-cloudzoom": "zoomImage:'" + b + "'"});
        if ($j(".primary-product-image").data("CloudZoom")) {
            $j(".primary-product-image").data("CloudZoom").destroy();
            $j(".primary-product-image").CloudZoom({animationTime: 0,easeTime: 0,zoomWidth: 380,zoomHeight: 618,zoomOffsetX: 20})
        }
    });
    $j("#colorChipContainer li").live("mouseenter", function() {
        $j(this).addClass("hoverli").siblings().removeClass("hoverli")
    });
    $j("#colorChipContainer li").live("mouseleave", function() {
        $j(this).removeClass("hoverli")
    });
    $j(".select-size-dialog li:not('.select-size-selected')").live("click", function() {
        cUpcDialog = $j(this).attr("currUpc");
        var c = infmDialog[cUpcDialog];
        var g = "";
        if (Number(c) < Number(sCountDialog)) {
            $j("#quickbuyDialog .count").html(loxia.getLocaleMsg("new.detail.quantity") + " (1)<span></span>");
            sCountDialog = 1
        }
        for (var d = 1; d <= c && d <= 5; d++) {
            var b = "<li ";
            if (sCountDialog == d) {
                b += "class='selected-box'"
            }
            g += b + ">" + d + "</li>"
        }
        $j(".select-box-qty").html(g);
        var f = loxia.getLocaleMsg("mynike.myfavoriteList.size");
        if (c == 1) {
            $j(".select-box-qty li").click()
        }
        var e = $j("#isShowSizeUsDialog").val();
        if (e == "true") {
            $j("#quickbuyDialog .size").html(f + "(US&nbsp;" + $j.trim($j(this).text()) + ")<span></span>")
        } else {
            $j("#quickbuyDialog .size").html(f + " (" + $j.trim($j(this).text()) + ")<span></span>")
        }
        $j(this).addClass("select-size-selected").siblings().not(self).removeClass("select-size-selected");
        $j(".select-size").hide();
        $j("#pdpSizeErrorColor").removeClass("error");
        $j(".size.select-btn").removeClass("select")
    });
    $j('.select-box-qty-dialog li:not(".selected-box")').live("click", function() {
        $j(this).addClass("selected-box").siblings().not(self).removeClass("selected-box");
        $j("#quickbuyDialog .count").html(loxia.getLocaleMsg("mynike.myfavoriteList.quantity") + " (" + $j(this).text() + ")<span></span>");
        $j(".select-box-qty").hide();
        sCountDialog = $j(this).text();
        $j(".count.select-btn").removeClass("select")
    });
    $j("#select-count-btn").live("click", function() {
        if ($j(".selected-box").length == 0) {
            $j(".select-box-qty").find("li").first().addClass("selected-box")
        }
    });
    $j("body").live("click", function(b) {
        if ($j(b.target).parents(".select-box-qty").length == 0 && $j(b.target).attr("id") != $j(".select-box-qty").attr("id")) {
            $j(".select-box-qty").hide()
        }
        if ($j(b.target).parents(".select-size").length == 0 && $j(b.target)[0].id != ($j(".select-size").length == 0 ? "" : $j(".select-size")[0].id)) {
            $j(".select-size").hide()
        }
    });
    $j("#shopping li").live("click", function() {
        var b = $j(this), c = b.attr("class"), f = $j("#" + c);
        var e = $j(this).closest(".detail-content").find("#sizeOptions"), d = $j(this).closest(".detail-content").find("#count");
        if (b.hasClass("count")) {
            e.hide();
            $j(".size.select-btn").removeClass("select");
            if (d.is(":visible")) {
                d.hide();
                $j(".count.select-btn").removeClass("select")
            } else {
                d.show();
                $j(".count.select-btn")[d.length == 0 ? "removeClass" : "addClass"]("select")
            }
        } else {
            if (b.hasClass("size")) {
                d.hide();
                $j(".count.select-btn").removeClass("select");
                if (e.is(":visible")) {
                    e.hide();
                    $j(".size.select-btn").removeClass("select")
                } else {
                    e.show();
                    $j(".size.select-btn").addClass("select")
                }
            }
        }
        return false
    });
    $j("body").live("click", function() {
        if ($j(".select-size-detail").css("display") != "block" && $j(".select-box-qty-detail").css("display") != "block" && $j(".select-size-dialog").css("display") != "block" && $j(".select-box-qty-dialog").css("display") != "block") {
            $j(".size.select-btn").removeClass("select");
            $j(".count.select-btn").removeClass("select")
        }
    });
    $j(".addToCartDialog").live("click", function() {
        var c = $j("#dialogSkuName .up").text();
        var b = $j("#dialogSkuName .down").text();
        commonAddToCart(cUpcDialog, sCountDialog, diaLogListPrice, skuCodeDialog, c, b, false, true)
    });
    $j(".pdpGoToShoppingCartDialog").live("click", function() {
        var d = $j("#dialogSkuName .up").text();
        var c = $j("#dialogSkuName .down").text();
        var b = commonAddToCart(cUpcDialog, sCountDialog, diaLogListPrice, skuCodeDialog, d, c, true, true);
        if (b) {
            window.location.href = _contextPath + "/shoppingcart"
        }
    });
    $j("#buyQsDialog").live("click", function() {
        paymentQs(cUpcDialog, true)
    })
});
function scroll(a) {
    $j(".quick-buy-dialog #relatedColors").animate({"margin-left": -a * 61 + "px"})
}
function initColosImg() {
    var a = $j(".quick-buy-dialog #relatedColors").find("li").length;
    var b = $j(".quick-buy-dialog #relatedColors").find("li.selected").index();
    var c = b + 1;
    if (c > 7) {
        if (c > a - 7) {
            c = c - 7
        }
        $j(".quick-buy-dialog #relatedColors").animate({"margin-left": -c * 61 + "px"})
    }
}
function commonAddToCart(d, g, f, c, i, h, b, e) {
    if (g == 0) {
        g = 1
    }
    if (!isNullOrEmpty(d) && g > 0) {
        var a = _contextPath + "/shoppingcart/add";
        $j.post(a, {upc: d,count: g}, function(j) {
            if (j.shoppingCartSummary != null) {
                var m = j.shoppingCartSummary.shoppingCartSize;
                var n = j.shoppingCommand;
                parseInt(m) != 0 && $j(".buycart-num-wrap").removeClass("none");
                if (m > 0) {
                    $j(".cartKazu").show()
                }
                $j("#buycart-count").html(m);
                if (!b) {
                    var k = "";
                    if (e) {
                        k = $j("#quickbuyDialog #relatedColors .selected img").attr("curSrc")
                    } else {
                        k = $j("#relatedColors .selected img").attr("curSrc")
                    }
                    showCartAddedItemWithHeader(k, i, h, n.price, n.sizeRef, n.quantity, n.skuColor, j.shoppingCartSummary.totalAfDiscount);
                    if (e) {
                        var l = $j("#pdpRecommend").val();
                        if (l == "true") {
                            omnitureRecommendQuickBuyAddToCart(c, f)
                        } else {
                            omnitureQuickBuyAddToCart(c, f)
                        }
                        $j(".black_opacity").fadeOut(300);
                        $j("#quickbuyDialog").fadeOut(300);
                        try {
                            if (s.oldPageName) {
                                s.pageName = s.oldPageName
                            }
                            if (oldP3) {
                                p3 = oldP3
                            }
                            if (oldP17) {
                                p17 = oldP17
                            }
                        } catch (o) {
                        }
                    } else {
                        if (pdpRecommend) {
                            omnitureRecommendCartAddedHandler(c, f)
                        } else {
                            omnitureCartAddedHandler(c, f)
                        }
                    }
                } else {
                    if (e) {
                        var l = $j("#pdpRecommend").val();
                        if (l == "true") {
                            omnitureRecommendQuickBuyAddToCart(c, f)
                        } else {
                            omnitureQuickBuyAddToCart(c, f)
                        }
                    } else {
                        if (pdpRecommend) {
                            omnitureRecommendCartAddedHandler(c, f)
                        } else {
                            omnitureCartAddedHandler(c, f)
                        }
                    }
                    window.location.href = _contextPath + "/shoppingcart"
                }
            } else {
                if (j.backWarnEntity.description != null) {
                    $j("#quickbuyDialog").hide();
                    sAlert(j.backWarnEntity.description)
                } else {
                    $j("#quickbuyDialog").hide();
                    sAlert(loxia.getLocaleMsg("mynike.edit.myfavorite.AddFailure"))
                }
            }
        })
    } else {
        if (e) {
            $j("#quickbuyDialog").find("#pdpSizeError").html(loxia.getLocaleMsg("quickBuy.SelectSize") + "<i></i>").show();
            $j("#quickbuyDialog").find("#pdpSizeErrorColor").addClass("error")
        } else {
            $j("#pdpSizeError").html(loxia.getLocaleMsg("quickBuy.SelectSize") + "<i></i>").show();
            $j("#pdpSizeErrorColor").addClass("error")
        }
    }
}
function paymentQs(g, b) {
    if (isNullOrEmpty(g)) {
        if (b) {
            $j("#quickbuyDialog").find("#pdpSizeError").html(loxia.getLocaleMsg("quickBuy.SelectSize") + "<i></i>").show();
            $j("#quickbuyDialog").find("#pdpSizeErrorColor").addClass("error")
        } else {
            $j("#pdpSizeError").html(loxia.getLocaleMsg("quickBuy.SelectSize") + "<i></i>").show();
            $j("#pdpSizeErrorColor").addClass("error")
        }
        return
    }
    var a = validateGuest();
    if (a) {
        $j(".black_opacity:eq(0)").detach().appendTo("body").fadeOut(300);
        $j("#quickbuyDialog").detach().appendTo("body").fadeOut(300);
        if (b) {
            $j("#dialogLogin").attr("isCloseAfLogin", true)
        } else {
            $j("#dialogLogin").attr("isCloseAfLogin", false)
        }
        showLoginDialog();
        s.oldPageName = s.pageName;
        s.pageName = "login > home > pop up";
        memberLoginLoad();
        return false
    }
    var h = _contextPath + "/transaction/doValidatorQsGoToTransactionCheck2";
    var f = loxia.syncXhrPost(h, {upc: g,count: 1});
    var e = "";
    var d = f.commonTransactionBackWarnEntity;
    if (d.isSuccess == false) {
        if (d.errorCode == "72001") {
            e = _contextPath + "/member/login.htm?login=true"
        } else {
            $j("#quickbuyDialog").hide();
            kobeAlert(d.description, function() {
                window.location.href = d.redirectUrl
            });
            return false
        }
    } else {
        if (b) {
            var c = $j("#pdpRecommend").val();
            if (c == "true") {
                omnitureRecommendQuickBuyShopNow(skuCodeDialog)
            } else {
                omnitureQuickBuyShopNow(skuCodeDialog)
            }
        } else {
            if (pdpRecommend) {
                omnitureRecommendCartAddedHandler(skuCode)
            } else {
                omnitureVisitorsBalanceFromPdp(skuCode)
            }
        }
        e = _contextPath + d.redirectUrl
    }
    window.location.href = e
}
function showCartAddedItemWithHeader(c, g, f, a, i, h, b, e) {
    var d = $j("#header_cart_dialog");
    d.find("li:eq(0) img").attr("src", c);
    d.find("li:eq(0) h2").html(g + "<br/><small>" + f + "</small>");
    d.find("li:eq(0) h3").html(loxia.getLocaleMsg("new.detail.money") + commafy(a));
    d.find("li:eq(0) p:eq(0)").html(loxia.getLocaleMsg("new.detail.Size") + i);
    d.find("li:eq(0) p:eq(1)").html(loxia.getLocaleMsg("new.detail.Qty") + h);
    d.find("li:eq(0) p:eq(2)").html(loxia.getLocaleMsg("pdp.color") + b);
    d.find(".header_total").html(loxia.getLocaleMsg("new.detail.money") + commafy(e));
    menuTagOver($j("#menu_shopping_cart_li a"));
    setTimeout(function() {
        menuTagLeave()
    }, 2000)
}
function menuTagOver(a) {
    var c = $j(".menu_tag a").index($j(a));
    $j(".menu_tag a").removeClass("menu_tag_selected");
    $j(".menu_tag p").css("display", "none");
    $j(a).addClass("menu_tag_selected").siblings("p").css("display", "block");
    $j(".header .header_slide_content").stop(true, true).fadeOut(100).eq(c).fadeIn(300);
    $j(".header .grey_shadow2").css("display", "none");
    $j(".grey_shadow").css("display", "block");
    if ($j(a).hasClass("menu_loginreg")) {
        $j(".header .grey_shadow2").css("display", "none");
        $j(".header .header_slide,.header .grey_shadow2").removeClass("header_width_auto").addClass("header_width298")
    } else {
        if ($j(a).hasClass("menu_login_success")) {
            $j(".header .grey_shadow2").css("display", "none");
            $j(".header .header_slide,.header .grey_shadow2").removeClass("header_width298").removeClass("header_width_auto").addClass("header_aslidewidth_login")
        } else {
            if ($j(a).hasClass("menu_shopping_cart")) {
                $j(".header .grey_shadow2").css("display", "none");
                $j(".header .header_slide,.header .grey_shadow2").removeClass("header_width298").addClass("header_width_auto")
            } else {
                if ($j(".header .header_slide").hasClass("header_width298") || $j(".header .header_slide").hasClass("header_width_auto") || $j(".header .header_slide").hasClass("header_aslidewidth_login")) {
                    $j(".header .grey_shadow2").css("display", "none");
                    $j(".header .header_slide,.header .grey_shadow2").removeClass("header_width298");
                    $j(".header .header_slide,.header .grey_shadow2").removeClass("header_width_auto");
                    $j(".header .header_slide,.header .grey_shadow2").removeClass("header_aslidewidth_login")
                } else {
                    $j(".header .header_slide,.header .grey_shadow2").removeClass("header_width298");
                    $j(".header .header_slide,.header .grey_shadow2").removeClass("header_width_auto");
                    $j(".header .header_slide,.header .grey_shadow2").removeClass("header_aslidewidth_login")
                }
            }
        }
    }
    var d = $j(".header .header_slide_content").eq(c);
    var b = parseInt(d.height());
    if ($j(a).parents("li").hasClass("menu_tag_s")) {
        $j(".header .header_slide").stop(true, false).animate({height: 220}, 300, function() {
            $j(".header .grey_shadow2").css({top: 270,display: "block"})
        })
    } else {
        $j(".header .header_slide").stop(true, false).animate({height: b + 40}, 300, function() {
            $j(".header .grey_shadow2").css({top: b + 90,display: "block"})
        })
    }
}
function menuTagLeave() {
    $j(".menu_tag a").removeClass("menu_tag_selected");
    $j(".menu_tag p").css("display", "none");
    $j(".header .grey_shadow,.header .grey_shadow2").css("display", "none");
    $j(".header .header_slide_content").stop(true, true).fadeOut(100);
    $j(".header .header_slide").stop(true, false).animate({height: "0px"}, 400)
}
;
(function(a) {
    a.fn.nikeScroll = function(k) {
        var h = (/android/gi).test(navigator.appVersion), j = (/iphone|ipad/gi).test(navigator.appVersion), i = (/playbook/gi).test(navigator.appVersion), e = (/hp-tablet/gi).test(navigator.appVersion), f = "ontouchstart" in window && !e, c = f ? "touchstart.nikeScroll" : "mousedown.nikeScroll", b = f ? "touchmove.nikeScroll" : "mousemove.nikeScroll", d = f ? "touchend.nikeScroll" : "mouseleave.nikeScroll", g = f ? "touchend.nikeScroll" : "mouseup.nikeScroll";
        return this.each(function(q, D) {
            var K = a(D), u = a("ul", K);
            if (f) {
                u.find(".nikeScroll-Clone").remove()
            }
            var t = a("li", u), G = t.length, M = G - 1, p = 0, O = K.data("interval"), N = function(S, T) {
                a('<img src="' + S + '" />').bind("load", function() {
                    var W = new Image();
                    W.src = S;
                    var U = W.width, V = W.height;
                    T({w: W.width,h: W.height})
                })
            }, B = function() {
                var S = t.map(function(U, T) {
                    return a(T).is(":not(:animated)")
                });
                S.push(u.is(":not(:animated)"));
                return (a.inArray(false, S) == -1 ? true : false)
            }, r = function(S) {
                I.eq(S).addClass("btn_select").siblings().removeClass("btn_select")
            };
            var Q = a.extend({left: ".kv-scroll-left-btn",right: ".kv-scroll-right-btn",dots: ".nike_kv_btn",autoPlay: true,easing: 300,time: 3000,callBack: null,resize: null}, k || {});
            var J = a(".morenimg", K), s = a(Q.left, K), v = a(Q.right, K), z = a(Q.dots, K), I = a(" > span", z), L = function(S) {
                u.animate({marginLeft: "-" + S * 100 + "%"}, Q.easing, function() {
                    if (S == 0) {
                        u.css({marginLeft: "-" + (G - 2) * 100 + "%"});
                        p = G - 2
                    } else {
                        if (S == M) {
                            u.css({marginLeft: initMl});
                            p = 1
                        }
                    }
                    r(p - 1);
                    Q.callBack && a.isFunction(Q.callBack) && Q.callBack(p)
                })
            };
            var H = a.Deferred();
            var A = a.Deferred();
            if (f && G > 1) {
                var R = t.first().clone(true).addClass("nikeScroll-Clone"), n = t.last().clone(true).addClass("nikeScroll-Clone");
                u.append(R).prepend(n);
                G = G + 2;
                initMl = "-100%";
                M = G - 1;
                p = 1;
                u.css({width: 100 * (G) + "%",marginLeft: initMl});
                a("li", u).css({width: 100 / (G) + "%"});
                a("li", u).css({display: "block","float": "left",left: "auto",position: "relative"})
            }
            a.when(H, A).done(function(T, S) {
                a(window).resize(function() {
                    var V = J.width(), U = J.height();
                    u.css({height: U});
                    Q.resize && a.isFunction(Q.resize) && Q.resize(U / T.h, a("li", u))
                }).resize()
            });
            N(a("img", J).attr("src"), function(S) {
                H.resolve(S)
            });
            N(a("img:eq(0)", t.eq(0)).attr("src"), function(S) {
                A.resolve(S)
            });
            if (G <= 1) {
                return false
            }
            v.unbind(".nikeScroll").bind(g, function() {
                if (B()) {
                    ++p;
                    if (p > M) {
                        p = 0
                    }
                    if (f) {
                        L(p)
                    } else {
                        var T = t.eq(p), S = T.prev();
                        T.css({left: "100%"}).animate({left: 0}, Q.easing, function() {
                            r(p);
                            Q.callBack && a.isFunction(Q.callBack) && Q.callBack(p)
                        });
                        if (S.length == 0) {
                            S = t.last()
                        }
                        S.animate({left: "-100%"}, Q.easing)
                    }
                }
            });
            s.unbind(".nikeScroll").bind(g, function() {
                if (B()) {
                    --p;
                    if (p < 0) {
                        p = M
                    }
                    if (f) {
                        L(p)
                    } else {
                        var T = t.eq(p), S = T.next();
                        T.css({left: "-100%"}).animate({left: 0}, Q.easing, function() {
                            r(p);
                            Q.callBack && a.isFunction(Q.callBack) && Q.callBack(p)
                        });
                        if (S.length == 0) {
                            S = t.first()
                        }
                        S.animate({left: "100%"}, Q.easing)
                    }
                }
            });
            if (!f) {
                I.unbind(".nikeScroll").bind(g, function() {
                    if (B()) {
                        var S = a(this).index();
                        t.eq(S).css({left: (p < a(this).index() ? "100%" : "-100%")});
                        var T = parseInt(t.eq(S).css("left")) > 0 ? "-100%" : "100%";
                        t.eq(p).animate({left: T}, Q.easing);
                        t.eq(S).animate({left: 0}, Q.easing, function() {
                            r(p);
                            Q.callBack && a.isFunction(Q.callBack) && Q.callBack(p)
                        });
                        p = S
                    }
                })
            }
            K.hover(function() {
                a(".kv-scroll-right-btn, .kv-scroll-left-btn", K).stop(true, true).animate({opacity: 1}, 200)
            }, function() {
                a(".kv-scroll-right-btn, .kv-scroll-left-btn", K).stop(true, true).animate({opacity: 0}, 200)
            });
            function F() {
                K.data("interval") && clearInterval(K.data("interval"));
                O = setInterval(function() {
                    Q.autoPlay && v.trigger(g)
                }, Q.time);
                K.data("interval", O)
            }
            function P() {
                O && clearInterval(O)
            }
            F();
            var C, y, w, x, o = K;
            if (f) {
                o = K.find("ul")
            }
            function l(T) {
                var S = T;
                if (f) {
                    S = T.originalEvent.targetTouches
                }
                return S
            }
            function E() {
                return +u.css("marginLeft").replace(/px/ig, "")
            }
            function m() {
                return +t.outerWidth(true)
            }
            o.unbind(".nikeScroll").bind(c, function(S) {
                P();
                if (f && B()) {
                    w = l(S);
                    x = E();
                    C = (w.clientX ? w.clientX : w[0].pageX) - x;
                    y = null
                }
            }).bind(b, function(U) {
                P();
                if (f && B()) {
                    var T = w;
                    y = T.clientX ? T.clientX : T[0].pageX;
                    var S = y - C;
                    u.css({marginLeft: S})
                }
            }).bind(d, function(S) {
                F();
                if (f && B()) {
                    var U = E(), T = m();
                    p = Math.ceil(Math.abs(U / T)) - (x > U ? 0 : 1);
                    p = p > M ? M : p;
                    y && L(p);
                    x = null
                }
            })
        })
    };
    a(function() {
        var b = "ontouchstart" in window && !(/hp-tablet/gi).test(navigator.appVersion);
        a(".slide-btn-enter").bind((b ? "touchend" : "mouseenter"), function() {
            a(this).closest(".slide-img-enter").hide().next().show()
        });
        if (b) {
            a(".slide-img-leave").bind("touchend", function() {
                a(this).hide().prev().show()
            })
        } else {
            a(".slide-btn-leave").bind("mouseleave", function() {
                a(this).closest(".slide-img-leave").hide().prev().show()
            })
        }
        a(".kv-scroll-wrap").nikeScroll({resize: function(f, c) {
                var g = c.parent(), e = g.data("defaultCss");
                if (!e) {
                    var d = {};
                    a.each(a("a", c), function(k, h) {
                        var l = a(h);
                        d[k] = {elem: l,width: parseInt(l.width()),height: parseInt(l.height()),top: parseInt(l.css("top")),left: parseInt(l.css("left"))}
                    });
                    g.data("defaultCss", d)
                }
                a.each(g.data("defaultCss"), function(k, h) {
                    h.elem.css({width: h.width * f,height: h.height * f,top: h.top * f,left: h.left * f})
                })
            }})
    })
})(jQuery);
(function(a) {
    a.fn.lazyload = function(c) {
        var e = {threshold: 0,failurelimit: 0,event: "scroll",effect: "show",container: window};
        if (c) {
            a.extend(e, c)
        }
        var f = this;
        if ("scroll" == e.event) {
            a(e.container).bind("scroll", function(i) {
                var g = 0;
                f.each(function() {
                    if (a.abovethetop(this, e) || a.leftofbegin(this, e)) {
                    } else {
                        if (!a.belowthefold(this, e) && !a.rightoffold(this, e)) {
                            if (a.browser.msie) {
                                a(this).attr("src", a(this).attr("lazy_src"))
                            }
                            a(this).trigger("appear")
                        } else {
                            if (g++ > e.failurelimit) {
                                return false
                            }
                        }
                    }
                });
                var h = a.grep(f, function(j) {
                    return !j.loaded
                });
                f = a(h)
            })
        }
        function b(g) {
            var i = a(g).parent(), h = i.width(), j = i.height();
            return {width: h,height: j,parent: i}
        }
        var d = window.dateType ? false : true;
        this.each(function() {
            var h = this, g = b(h);
            if (undefined == a(h).attr("original")) {
                a(h).attr("original", a(h).attr("lazy_src"))
            }
            if ("scroll" != e.event || undefined == a(h).attr("src") || e.placeholder == a(h).attr("src") || (a.abovethetop(h, e) || a.leftofbegin(h, e) || a.belowthefold(h, e) || a.rightoffold(h, e))) {
                var k = e.placeholder;
                if (k) {
                    var i = (g.width - 50) / 2, j = (g.height - 54) / 2;
                    a(h).css({top: "50%",left: "50%",marginLeft: -16,marginTop: -16,width: 32,height: 32,position: "absolute"});
                    a(h).attr("src", k)
                } else {
                    a(h).removeAttr("src")
                }
                h.loaded = false
            } else {
                h.loaded = true
            }
            a(h).one("appear", function() {
                if (!this.loaded) {
                    a("<img />").bind("load", function() {
                        a(h).hide().attr("src", a(h).attr("lazy_src"))[e.effect](e.effectspeed);
                        a(h).css({top: 0,left: 0,marginLeft: 0,marginTop: 0,width: "100%",height: "auto",position: "relative"});
                        h.loaded = true
                    }).attr("src", a(h).attr("original"))
                }
            });
            if ("scroll" != e.event) {
                a(h).bind(e.event, function(l) {
                    if (!h.loaded) {
                        a(h).trigger("appear")
                    }
                })
            }
        });
        if (d) {
            a(e.container).trigger(e.event);
            window.dateType = true
        }
        return this
    };
    a.belowthefold = function(c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).height() + a(window).scrollTop()
        } else {
            var b = a(d.container).offset().top + a(d.container).height()
        }
        return b <= a(c).offset().top - a(c).closest(".style_liborder_new").outerHeight(true) * 2 - d.threshold
    };
    a.rightoffold = function(c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).width() + a(window).scrollLeft()
        } else {
            var b = a(d.container).offset().left + a(d.container).width()
        }
        return b <= a(c).offset().left - d.threshold
    };
    a.abovethetop = function(c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).scrollTop()
        } else {
            var b = a(d.container).offset().top
        }
        return b >= a(c).offset().top + d.threshold + a(c).height()
    };
    a.leftofbegin = function(c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).scrollLeft()
        } else {
            var b = a(d.container).offset().left
        }
        return b >= a(c).offset().left + d.threshold + a(c).width()
    };
    a.extend(a.expr[":"], {"below-the-fold": "$.belowthefold(a, {threshold : 0, container: window})","above-the-fold": "!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold": "$.rightoffold(a, {threshold : 0, container: window})","left-of-fold": "!$.rightoffold(a, {threshold : 0, container: window})"})
})(jQuery);
/*! jQuery UI - v1.10.2 - 2013-05-02
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */
(function(b, f) {
    var a = 0, e = /^ui-id-\d+$/;
    b.ui = b.ui || {};
    b.extend(b.ui, {version: "1.10.2",keyCode: {BACKSPACE: 8,COMMA: 188,DELETE: 46,DOWN: 40,END: 35,ENTER: 13,ESCAPE: 27,HOME: 36,LEFT: 37,NUMPAD_ADD: 107,NUMPAD_DECIMAL: 110,NUMPAD_DIVIDE: 111,NUMPAD_ENTER: 108,NUMPAD_MULTIPLY: 106,NUMPAD_SUBTRACT: 109,PAGE_DOWN: 34,PAGE_UP: 33,PERIOD: 190,RIGHT: 39,SPACE: 32,TAB: 9,UP: 38}});
    b.fn.extend({focus: (function(g) {
            return function(h, i) {
                return typeof h === "number" ? this.each(function() {
                    var j = this;
                    setTimeout(function() {
                        b(j).focus();
                        if (i) {
                            i.call(j)
                        }
                    }, h)
                }) : g.apply(this, arguments)
            }
        })(b.fn.focus),scrollParent: function() {
            var g;
            if ((b.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
                g = this.parents().filter(function() {
                    return (/(relative|absolute|fixed)/).test(b.css(this, "position")) && (/(auto|scroll)/).test(b.css(this, "overflow") + b.css(this, "overflow-y") + b.css(this, "overflow-x"))
                }).eq(0)
            } else {
                g = this.parents().filter(function() {
                    return (/(auto|scroll)/).test(b.css(this, "overflow") + b.css(this, "overflow-y") + b.css(this, "overflow-x"))
                }).eq(0)
            }
            return (/fixed/).test(this.css("position")) || !g.length ? b(document) : g
        },zIndex: function(j) {
            if (j !== f) {
                return this.css("zIndex", j)
            }
            if (this.length) {
                var h = b(this[0]), g, i;
                while (h.length && h[0] !== document) {
                    g = h.css("position");
                    if (g === "absolute" || g === "relative" || g === "fixed") {
                        i = parseInt(h.css("zIndex"), 10);
                        if (!isNaN(i) && i !== 0) {
                            return i
                        }
                    }
                    h = h.parent()
                }
            }
            return 0
        },uniqueId: function() {
            return this.each(function() {
                if (!this.id) {
                    this.id = "ui-id-" + (++a)
                }
            })
        },removeUniqueId: function() {
            return this.each(function() {
                if (e.test(this.id)) {
                    b(this).removeAttr("id")
                }
            })
        }});
    function d(i, g) {
        var k, j, h, l = i.nodeName.toLowerCase();
        if ("area" === l) {
            k = i.parentNode;
            j = k.name;
            if (!i.href || !j || k.nodeName.toLowerCase() !== "map") {
                return false
            }
            h = b("img[usemap=#" + j + "]")[0];
            return !!h && c(h)
        }
        return (/input|select|textarea|button|object/.test(l) ? !i.disabled : "a" === l ? i.href || g : g) && c(i)
    }
    function c(g) {
        return b.expr.filters.visible(g) && !b(g).parents().addBack().filter(function() {
            return b.css(this, "visibility") === "hidden"
        }).length
    }
    b.extend(b.expr[":"], {data: b.expr.createPseudo ? b.expr.createPseudo(function(g) {
            return function(h) {
                return !!b.data(h, g)
            }
        }) : function(j, h, g) {
            return !!b.data(j, g[3])
        },focusable: function(g) {
            return d(g, !isNaN(b.attr(g, "tabindex")))
        },tabbable: function(i) {
            var g = b.attr(i, "tabindex"), h = isNaN(g);
            return (h || g >= 0) && d(i, !h)
        }});
    if (!b("<a>").outerWidth(1).jquery) {
        b.each(["Width", "Height"], function(j, g) {
            var h = g === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], k = g.toLowerCase(), m = {innerWidth: b.fn.innerWidth,innerHeight: b.fn.innerHeight,outerWidth: b.fn.outerWidth,outerHeight: b.fn.outerHeight};
            function l(o, n, i, p) {
                b.each(h, function() {
                    n -= parseFloat(b.css(o, "padding" + this)) || 0;
                    if (i) {
                        n -= parseFloat(b.css(o, "border" + this + "Width")) || 0
                    }
                    if (p) {
                        n -= parseFloat(b.css(o, "margin" + this)) || 0
                    }
                });
                return n
            }
            b.fn["inner" + g] = function(i) {
                if (i === f) {
                    return m["inner" + g].call(this)
                }
                return this.each(function() {
                    b(this).css(k, l(this, i) + "px")
                })
            };
            b.fn["outer" + g] = function(i, n) {
                if (typeof i !== "number") {
                    return m["outer" + g].call(this, i)
                }
                return this.each(function() {
                    b(this).css(k, l(this, i, true, n) + "px")
                })
            }
        })
    }
    if (!b.fn.addBack) {
        b.fn.addBack = function(g) {
            return this.add(g == null ? this.prevObject : this.prevObject.filter(g))
        }
    }
    if (b("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
        b.fn.removeData = (function(g) {
            return function(h) {
                if (arguments.length) {
                    return g.call(this, b.camelCase(h))
                } else {
                    return g.call(this)
                }
            }
        })(b.fn.removeData)
    }
    b.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    b.support.selectstart = "onselectstart" in document.createElement("div");
    b.fn.extend({disableSelection: function() {
            return this.bind((b.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(g) {
                g.preventDefault()
            })
        },enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }});
    b.extend(b.ui, {plugin: {add: function(h, j, l) {
                var g, k = b.ui[h].prototype;
                for (g in l) {
                    k.plugins[g] = k.plugins[g] || [];
                    k.plugins[g].push([j, l[g]])
                }
            },call: function(g, j, h) {
                var k, l = g.plugins[j];
                if (!l || !g.element[0].parentNode || g.element[0].parentNode.nodeType === 11) {
                    return
                }
                for (k = 0; k < l.length; k++) {
                    if (g.options[l[k][0]]) {
                        l[k][1].apply(g.element, h)
                    }
                }
            }},hasScroll: function(j, h) {
            if (b(j).css("overflow") === "hidden") {
                return false
            }
            var g = (h && h === "left") ? "scrollLeft" : "scrollTop", i = false;
            if (j[g] > 0) {
                return true
            }
            j[g] = 1;
            i = (j[g] > 0);
            j[g] = 0;
            return i
        }})
})(jQuery);
(function(b, e) {
    var a = 0, d = Array.prototype.slice, c = b.cleanData;
    b.cleanData = function(f) {
        for (var g = 0, h; (h = f[g]) != null; g++) {
            try {
                b(h).triggerHandler("remove")
            } catch (j) {
            }
        }
        c(f)
    };
    b.widget = function(f, g, n) {
        var k, l, i, m, h = {}, j = f.split(".")[0];
        f = f.split(".")[1];
        k = j + "-" + f;
        if (!n) {
            n = g;
            g = b.Widget
        }
        b.expr[":"][k.toLowerCase()] = function(o) {
            return !!b.data(o, k)
        };
        b[j] = b[j] || {};
        l = b[j][f];
        i = b[j][f] = function(o, p) {
            if (!this._createWidget) {
                return new i(o, p)
            }
            if (arguments.length) {
                this._createWidget(o, p)
            }
        };
        b.extend(i, l, {version: n.version,_proto: b.extend({}, n),_childConstructors: []});
        m = new g();
        m.options = b.widget.extend({}, m.options);
        b.each(n, function(p, o) {
            if (!b.isFunction(o)) {
                h[p] = o;
                return
            }
            h[p] = (function() {
                var q = function() {
                    return g.prototype[p].apply(this, arguments)
                }, r = function(s) {
                    return g.prototype[p].apply(this, s)
                };
                return function() {
                    var u = this._super, s = this._superApply, t;
                    this._super = q;
                    this._superApply = r;
                    t = o.apply(this, arguments);
                    this._super = u;
                    this._superApply = s;
                    return t
                }
            })()
        });
        i.prototype = b.widget.extend(m, {widgetEventPrefix: l ? m.widgetEventPrefix : f}, h, {constructor: i,namespace: j,widgetName: f,widgetFullName: k});
        if (l) {
            b.each(l._childConstructors, function(p, q) {
                var o = q.prototype;
                b.widget(o.namespace + "." + o.widgetName, i, q._proto)
            });
            delete l._childConstructors
        } else {
            g._childConstructors.push(i)
        }
        b.widget.bridge(f, i)
    };
    b.widget.extend = function(k) {
        var g = d.call(arguments, 1), j = 0, f = g.length, h, i;
        for (; j < f; j++) {
            for (h in g[j]) {
                i = g[j][h];
                if (g[j].hasOwnProperty(h) && i !== e) {
                    if (b.isPlainObject(i)) {
                        k[h] = b.isPlainObject(k[h]) ? b.widget.extend({}, k[h], i) : b.widget.extend({}, i)
                    } else {
                        k[h] = i
                    }
                }
            }
        }
        return k
    };
    b.widget.bridge = function(g, f) {
        var h = f.prototype.widgetFullName || g;
        b.fn[g] = function(k) {
            var i = typeof k === "string", j = d.call(arguments, 1), l = this;
            k = !i && j.length ? b.widget.extend.apply(null, [k].concat(j)) : k;
            if (i) {
                this.each(function() {
                    var n, m = b.data(this, h);
                    if (!m) {
                        return b.error("cannot call methods on " + g + " prior to initialization; attempted to call method '" + k + "'")
                    }
                    if (!b.isFunction(m[k]) || k.charAt(0) === "_") {
                        return b.error("no such method '" + k + "' for " + g + " widget instance")
                    }
                    n = m[k].apply(m, j);
                    if (n !== m && n !== e) {
                        l = n && n.jquery ? l.pushStack(n.get()) : n;
                        return false
                    }
                })
            } else {
                this.each(function() {
                    var m = b.data(this, h);
                    if (m) {
                        m.option(k || {})._init()
                    } else {
                        b.data(this, h, new f(k, this))
                    }
                })
            }
            return l
        }
    };
    b.Widget = function() {
    };
    b.Widget._childConstructors = [];
    b.Widget.prototype = {widgetName: "widget",widgetEventPrefix: "",defaultElement: "<div>",options: {disabled: false,create: null},_createWidget: function(f, g) {
            g = b(g || this.defaultElement || this)[0];
            this.element = b(g);
            this.uuid = a++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.options = b.widget.extend({}, this.options, this._getCreateOptions(), f);
            this.bindings = b();
            this.hoverable = b();
            this.focusable = b();
            if (g !== this) {
                b.data(g, this.widgetFullName, this);
                this._on(true, this.element, {remove: function(h) {
                        if (h.target === g) {
                            this.destroy()
                        }
                    }});
                this.document = b(g.style ? g.ownerDocument : g.document || g);
                this.window = b(this.document[0].defaultView || this.document[0].parentWindow)
            }
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },_getCreateOptions: b.noop,_getCreateEventData: b.noop,_create: b.noop,_init: b.noop,destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },_destroy: b.noop,widget: function() {
            return this.element
        },option: function(j, k) {
            var f = j, l, h, g;
            if (arguments.length === 0) {
                return b.widget.extend({}, this.options)
            }
            if (typeof j === "string") {
                f = {};
                l = j.split(".");
                j = l.shift();
                if (l.length) {
                    h = f[j] = b.widget.extend({}, this.options[j]);
                    for (g = 0; g < l.length - 1; g++) {
                        h[l[g]] = h[l[g]] || {};
                        h = h[l[g]]
                    }
                    j = l.pop();
                    if (k === e) {
                        return h[j] === e ? null : h[j]
                    }
                    h[j] = k
                } else {
                    if (k === e) {
                        return this.options[j] === e ? null : this.options[j]
                    }
                    f[j] = k
                }
            }
            this._setOptions(f);
            return this
        },_setOptions: function(f) {
            var g;
            for (g in f) {
                this._setOption(g, f[g])
            }
            return this
        },_setOption: function(f, g) {
            this.options[f] = g;
            if (f === "disabled") {
                this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!g).attr("aria-disabled", g);
                this.hoverable.removeClass("ui-state-hover");
                this.focusable.removeClass("ui-state-focus")
            }
            return this
        },enable: function() {
            return this._setOption("disabled", false)
        },disable: function() {
            return this._setOption("disabled", true)
        },_on: function(i, h, g) {
            var j, f = this;
            if (typeof i !== "boolean") {
                g = h;
                h = i;
                i = false
            }
            if (!g) {
                g = h;
                h = this.element;
                j = this.widget()
            } else {
                h = j = b(h);
                this.bindings = this.bindings.add(h)
            }
            b.each(g, function(p, o) {
                function m() {
                    if (!i && (f.options.disabled === true || b(this).hasClass("ui-state-disabled"))) {
                        return
                    }
                    return (typeof o === "string" ? f[o] : o).apply(f, arguments)
                }
                if (typeof o !== "string") {
                    m.guid = o.guid = o.guid || m.guid || b.guid++
                }
                var n = p.match(/^(\w+)\s*(.*)$/), l = n[1] + f.eventNamespace, k = n[2];
                if (k) {
                    j.delegate(k, l, m)
                } else {
                    h.bind(l, m)
                }
            })
        },_off: function(g, f) {
            f = (f || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            g.unbind(f).undelegate(f)
        },_delay: function(i, h) {
            function g() {
                return (typeof i === "string" ? f[i] : i).apply(f, arguments)
            }
            var f = this;
            return setTimeout(g, h || 0)
        },_hoverable: function(f) {
            this.hoverable = this.hoverable.add(f);
            this._on(f, {mouseenter: function(g) {
                    b(g.currentTarget).addClass("ui-state-hover")
                },mouseleave: function(g) {
                    b(g.currentTarget).removeClass("ui-state-hover")
                }})
        },_focusable: function(f) {
            this.focusable = this.focusable.add(f);
            this._on(f, {focusin: function(g) {
                    b(g.currentTarget).addClass("ui-state-focus")
                },focusout: function(g) {
                    b(g.currentTarget).removeClass("ui-state-focus")
                }})
        },_trigger: function(f, g, h) {
            var k, j, i = this.options[f];
            h = h || {};
            g = b.Event(g);
            g.type = (f === this.widgetEventPrefix ? f : this.widgetEventPrefix + f).toLowerCase();
            g.target = this.element[0];
            j = g.originalEvent;
            if (j) {
                for (k in j) {
                    if (!(k in g)) {
                        g[k] = j[k]
                    }
                }
            }
            this.element.trigger(g, h);
            return !(b.isFunction(i) && i.apply(this.element[0], [g].concat(h)) === false || g.isDefaultPrevented())
        }};
    b.each({show: "fadeIn",hide: "fadeOut"}, function(g, f) {
        b.Widget.prototype["_" + g] = function(j, i, l) {
            if (typeof i === "string") {
                i = {effect: i}
            }
            var k, h = !i ? g : i === true || typeof i === "number" ? f : i.effect || f;
            i = i || {};
            if (typeof i === "number") {
                i = {duration: i}
            }
            k = !b.isEmptyObject(i);
            i.complete = l;
            if (i.delay) {
                j.delay(i.delay)
            }
            if (k && b.effects && b.effects.effect[h]) {
                j[g](i)
            } else {
                if (h !== g && j[h]) {
                    j[h](i.duration, i.easing, l)
                } else {
                    j.queue(function(m) {
                        b(this)[g]();
                        if (l) {
                            l.call(j[0])
                        }
                        m()
                    })
                }
            }
        }
    })
})(jQuery);
(function(b, c) {
    var a = false;
    b(document).mouseup(function() {
        a = false
    });
    b.widget("ui.mouse", {version: "1.10.2",options: {cancel: "input,textarea,button,select,option",distance: 1,delay: 0},_mouseInit: function() {
            var d = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return d._mouseDown(e)
            }).bind("click." + this.widgetName, function(e) {
                if (true === b.data(e.target, d.widgetName + ".preventClickEvent")) {
                    b.removeData(e.target, d.widgetName + ".preventClickEvent");
                    e.stopImmediatePropagation();
                    return false
                }
            });
            this.started = false
        },_mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            if (this._mouseMoveDelegate) {
                b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            }
        },_mouseDown: function(f) {
            if (a) {
                return
            }
            (this._mouseStarted && this._mouseUp(f));
            this._mouseDownEvent = f;
            var e = this, g = (f.which === 1), d = (typeof this.options.cancel === "string" && f.target.nodeName ? b(f.target).closest(this.options.cancel).length : false);
            if (!g || d || !this._mouseCapture(f)) {
                return true
            }
            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function() {
                    e.mouseDelayMet = true
                }, this.options.delay)
            }
            if (this._mouseDistanceMet(f) && this._mouseDelayMet(f)) {
                this._mouseStarted = (this._mouseStart(f) !== false);
                if (!this._mouseStarted) {
                    f.preventDefault();
                    return true
                }
            }
            if (true === b.data(f.target, this.widgetName + ".preventClickEvent")) {
                b.removeData(f.target, this.widgetName + ".preventClickEvent")
            }
            this._mouseMoveDelegate = function(h) {
                return e._mouseMove(h)
            };
            this._mouseUpDelegate = function(h) {
                return e._mouseUp(h)
            };
            b(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
            f.preventDefault();
            a = true;
            return true
        },_mouseMove: function(d) {
            if (b.ui.ie && (!document.documentMode || document.documentMode < 9) && !d.button) {
                return this._mouseUp(d)
            }
            if (this._mouseStarted) {
                this._mouseDrag(d);
                return d.preventDefault()
            }
            if (this._mouseDistanceMet(d) && this._mouseDelayMet(d)) {
                this._mouseStarted = (this._mouseStart(this._mouseDownEvent, d) !== false);
                (this._mouseStarted ? this._mouseDrag(d) : this._mouseUp(d))
            }
            return !this._mouseStarted
        },_mouseUp: function(d) {
            b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                if (d.target === this._mouseDownEvent.target) {
                    b.data(d.target, this.widgetName + ".preventClickEvent", true)
                }
                this._mouseStop(d)
            }
            return false
        },_mouseDistanceMet: function(d) {
            return (Math.max(Math.abs(this._mouseDownEvent.pageX - d.pageX), Math.abs(this._mouseDownEvent.pageY - d.pageY)) >= this.options.distance)
        },_mouseDelayMet: function() {
            return this.mouseDelayMet
        },_mouseStart: function() {
        },_mouseDrag: function() {
        },_mouseStop: function() {
        },_mouseCapture: function() {
            return true
        }})
})(jQuery);
(function(e, c) {
    e.ui = e.ui || {};
    var j, k = Math.max, o = Math.abs, m = Math.round, d = /left|center|right/, h = /top|center|bottom/, a = /[\+\-]\d+(\.[\d]+)?%?/, l = /^\w+/, b = /%$/, g = e.fn.position;
    function n(r, q, p) {
        return [parseFloat(r[0]) * (b.test(r[0]) ? q / 100 : 1), parseFloat(r[1]) * (b.test(r[1]) ? p / 100 : 1)]
    }
    function i(p, q) {
        return parseInt(e.css(p, q), 10) || 0
    }
    function f(q) {
        var p = q[0];
        if (p.nodeType === 9) {
            return {width: q.width(),height: q.height(),offset: {top: 0,left: 0}}
        }
        if (e.isWindow(p)) {
            return {width: q.width(),height: q.height(),offset: {top: q.scrollTop(),left: q.scrollLeft()}}
        }
        if (p.preventDefault) {
            return {width: 0,height: 0,offset: {top: p.pageY,left: p.pageX}}
        }
        return {width: q.outerWidth(),height: q.outerHeight(),offset: q.offset()}
    }
    e.position = {scrollbarWidth: function() {
            if (j !== c) {
                return j
            }
            var q, p, s = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), r = s.children()[0];
            e("body").append(s);
            q = r.offsetWidth;
            s.css("overflow", "scroll");
            p = r.offsetWidth;
            if (q === p) {
                p = s[0].clientWidth
            }
            s.remove();
            return (j = q - p)
        },getScrollInfo: function(t) {
            var s = t.isWindow ? "" : t.element.css("overflow-x"), r = t.isWindow ? "" : t.element.css("overflow-y"), q = s === "scroll" || (s === "auto" && t.width < t.element[0].scrollWidth), p = r === "scroll" || (r === "auto" && t.height < t.element[0].scrollHeight);
            return {width: p ? e.position.scrollbarWidth() : 0,height: q ? e.position.scrollbarWidth() : 0}
        },getWithinInfo: function(q) {
            var r = e(q || window), p = e.isWindow(r[0]);
            return {element: r,isWindow: p,offset: r.offset() || {left: 0,top: 0},scrollLeft: r.scrollLeft(),scrollTop: r.scrollTop(),width: p ? r.width() : r.outerWidth(),height: p ? r.height() : r.outerHeight()}
        }};
    e.fn.position = function(z) {
        if (!z || !z.of) {
            return g.apply(this, arguments)
        }
        z = e.extend({}, z);
        var A, w, u, y, t, p, v = e(z.of), s = e.position.getWithinInfo(z.within), q = e.position.getScrollInfo(s), x = (z.collision || "flip").split(" "), r = {};
        p = f(v);
        if (v[0].preventDefault) {
            z.at = "left top"
        }
        w = p.width;
        u = p.height;
        y = p.offset;
        t = e.extend({}, y);
        e.each(["my", "at"], function() {
            var D = (z[this] || "").split(" "), C, B;
            if (D.length === 1) {
                D = d.test(D[0]) ? D.concat(["center"]) : h.test(D[0]) ? ["center"].concat(D) : ["center", "center"]
            }
            D[0] = d.test(D[0]) ? D[0] : "center";
            D[1] = h.test(D[1]) ? D[1] : "center";
            C = a.exec(D[0]);
            B = a.exec(D[1]);
            r[this] = [C ? C[0] : 0, B ? B[0] : 0];
            z[this] = [l.exec(D[0])[0], l.exec(D[1])[0]]
        });
        if (x.length === 1) {
            x[1] = x[0]
        }
        if (z.at[0] === "right") {
            t.left += w
        } else {
            if (z.at[0] === "center") {
                t.left += w / 2
            }
        }
        if (z.at[1] === "bottom") {
            t.top += u
        } else {
            if (z.at[1] === "center") {
                t.top += u / 2
            }
        }
        A = n(r.at, w, u);
        t.left += A[0];
        t.top += A[1];
        return this.each(function() {
            var C, L, E = e(this), G = E.outerWidth(), D = E.outerHeight(), F = i(this, "marginLeft"), B = i(this, "marginTop"), K = G + F + i(this, "marginRight") + q.width, J = D + B + i(this, "marginBottom") + q.height, H = e.extend({}, t), I = n(r.my, E.outerWidth(), E.outerHeight());
            if (z.my[0] === "right") {
                H.left -= G
            } else {
                if (z.my[0] === "center") {
                    H.left -= G / 2
                }
            }
            if (z.my[1] === "bottom") {
                H.top -= D
            } else {
                if (z.my[1] === "center") {
                    H.top -= D / 2
                }
            }
            H.left += I[0];
            H.top += I[1];
            if (!e.support.offsetFractions) {
                H.left = m(H.left);
                H.top = m(H.top)
            }
            C = {marginLeft: F,marginTop: B};
            e.each(["left", "top"], function(N, M) {
                if (e.ui.position[x[N]]) {
                    e.ui.position[x[N]][M](H, {targetWidth: w,targetHeight: u,elemWidth: G,elemHeight: D,collisionPosition: C,collisionWidth: K,collisionHeight: J,offset: [A[0] + I[0], A[1] + I[1]],my: z.my,at: z.at,within: s,elem: E})
                }
            });
            if (z.using) {
                L = function(P) {
                    var R = y.left - H.left, O = R + w - G, Q = y.top - H.top, N = Q + u - D, M = {target: {element: v,left: y.left,top: y.top,width: w,height: u},element: {element: E,left: H.left,top: H.top,width: G,height: D},horizontal: O < 0 ? "left" : R > 0 ? "right" : "center",vertical: N < 0 ? "top" : Q > 0 ? "bottom" : "middle"};
                    if (w < G && o(R + O) < w) {
                        M.horizontal = "center"
                    }
                    if (u < D && o(Q + N) < u) {
                        M.vertical = "middle"
                    }
                    if (k(o(R), o(O)) > k(o(Q), o(N))) {
                        M.important = "horizontal"
                    } else {
                        M.important = "vertical"
                    }
                    z.using.call(this, P, M)
                }
            }
            E.offset(e.extend(H, {using: L}))
        })
    };
    e.ui.position = {fit: {left: function(t, s) {
                var r = s.within, v = r.isWindow ? r.scrollLeft : r.offset.left, x = r.width, u = t.left - s.collisionPosition.marginLeft, w = v - u, q = u + s.collisionWidth - x - v, p;
                if (s.collisionWidth > x) {
                    if (w > 0 && q <= 0) {
                        p = t.left + w + s.collisionWidth - x - v;
                        t.left += w - p
                    } else {
                        if (q > 0 && w <= 0) {
                            t.left = v
                        } else {
                            if (w > q) {
                                t.left = v + x - s.collisionWidth
                            } else {
                                t.left = v
                            }
                        }
                    }
                } else {
                    if (w > 0) {
                        t.left += w
                    } else {
                        if (q > 0) {
                            t.left -= q
                        } else {
                            t.left = k(t.left - u, t.left)
                        }
                    }
                }
            },top: function(s, r) {
                var q = r.within, w = q.isWindow ? q.scrollTop : q.offset.top, x = r.within.height, u = s.top - r.collisionPosition.marginTop, v = w - u, t = u + r.collisionHeight - x - w, p;
                if (r.collisionHeight > x) {
                    if (v > 0 && t <= 0) {
                        p = s.top + v + r.collisionHeight - x - w;
                        s.top += v - p
                    } else {
                        if (t > 0 && v <= 0) {
                            s.top = w
                        } else {
                            if (v > t) {
                                s.top = w + x - r.collisionHeight
                            } else {
                                s.top = w
                            }
                        }
                    }
                } else {
                    if (v > 0) {
                        s.top += v
                    } else {
                        if (t > 0) {
                            s.top -= t
                        } else {
                            s.top = k(s.top - u, s.top)
                        }
                    }
                }
            }},flip: {left: function(v, u) {
                var t = u.within, z = t.offset.left + t.scrollLeft, C = t.width, r = t.isWindow ? t.scrollLeft : t.offset.left, w = v.left - u.collisionPosition.marginLeft, A = w - r, q = w + u.collisionWidth - C - r, y = u.my[0] === "left" ? -u.elemWidth : u.my[0] === "right" ? u.elemWidth : 0, B = u.at[0] === "left" ? u.targetWidth : u.at[0] === "right" ? -u.targetWidth : 0, s = -2 * u.offset[0], p, x;
                if (A < 0) {
                    p = v.left + y + B + s + u.collisionWidth - C - z;
                    if (p < 0 || p < o(A)) {
                        v.left += y + B + s
                    }
                } else {
                    if (q > 0) {
                        x = v.left - u.collisionPosition.marginLeft + y + B + s - r;
                        if (x > 0 || o(x) < q) {
                            v.left += y + B + s
                        }
                    }
                }
            },top: function(u, t) {
                var s = t.within, B = s.offset.top + s.scrollTop, C = s.height, p = s.isWindow ? s.scrollTop : s.offset.top, w = u.top - t.collisionPosition.marginTop, y = w - p, v = w + t.collisionHeight - C - p, z = t.my[1] === "top", x = z ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0, D = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0, r = -2 * t.offset[1], A, q;
                if (y < 0) {
                    q = u.top + x + D + r + t.collisionHeight - C - B;
                    if ((u.top + x + D + r) > y && (q < 0 || q < o(y))) {
                        u.top += x + D + r
                    }
                } else {
                    if (v > 0) {
                        A = u.top - t.collisionPosition.marginTop + x + D + r - p;
                        if ((u.top + x + D + r) > v && (A > 0 || o(A) < v)) {
                            u.top += x + D + r
                        }
                    }
                }
            }},flipfit: {left: function() {
                e.ui.position.flip.left.apply(this, arguments);
                e.ui.position.fit.left.apply(this, arguments)
            },top: function() {
                e.ui.position.flip.top.apply(this, arguments);
                e.ui.position.fit.top.apply(this, arguments)
            }}};
    (function() {
        var t, v, q, s, r, p = document.getElementsByTagName("body")[0], u = document.createElement("div");
        t = document.createElement(p ? "div" : "body");
        q = {visibility: "hidden",width: 0,height: 0,border: 0,margin: 0,background: "none"};
        if (p) {
            e.extend(q, {position: "absolute",left: "-1000px",top: "-1000px"})
        }
        for (r in q) {
            t.style[r] = q[r]
        }
        t.appendChild(u);
        v = p || document.documentElement;
        v.insertBefore(t, v.firstChild);
        u.style.cssText = "position: absolute; left: 10.7432222px;";
        s = e(u).offset().left;
        e.support.offsetFractions = s > 10 && s < 11;
        t.innerHTML = "";
        v.removeChild(t)
    })()
}(jQuery));
(function(a, b) {
    a.widget("ui.draggable", a.ui.mouse, {version: "1.10.2",widgetEventPrefix: "drag",options: {addClasses: true,appendTo: "parent",axis: false,connectToSortable: false,containment: false,cursor: "auto",cursorAt: false,grid: false,handle: false,helper: "original",iframeFix: false,opacity: false,refreshPositions: false,revert: false,revertDuration: 500,scope: "default",scroll: true,scrollSensitivity: 20,scrollSpeed: 20,snap: false,snapMode: "both",snapTolerance: 20,stack: false,zIndex: false,drag: null,start: null,stop: null},_create: function() {
            if (this.options.helper === "original" && !(/^(?:r|a|f)/).test(this.element.css("position"))) {
                this.element[0].style.position = "relative"
            }
            if (this.options.addClasses) {
                this.element.addClass("ui-draggable")
            }
            if (this.options.disabled) {
                this.element.addClass("ui-draggable-disabled")
            }
            this._mouseInit()
        },_destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
            this._mouseDestroy()
        },_mouseCapture: function(c) {
            var d = this.options;
            if (this.helper || d.disabled || a(c.target).closest(".ui-resizable-handle").length > 0) {
                return false
            }
            this.handle = this._getHandle(c);
            if (!this.handle) {
                return false
            }
            a(d.iframeFix === true ? "iframe" : d.iframeFix).each(function() {
                a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width: this.offsetWidth + "px",height: this.offsetHeight + "px",position: "absolute",opacity: "0.001",zIndex: 1000}).css(a(this).offset()).appendTo("body")
            });
            return true
        },_mouseStart: function(c) {
            var d = this.options;
            this.helper = this._createHelper(c);
            this.helper.addClass("ui-draggable-dragging");
            this._cacheHelperProportions();
            if (a.ui.ddmanager) {
                a.ui.ddmanager.current = this
            }
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.positionAbs = this.element.offset();
            this.offset = {top: this.offset.top - this.margins.top,left: this.offset.left - this.margins.left};
            a.extend(this.offset, {click: {left: c.pageX - this.offset.left,top: c.pageY - this.offset.top},parent: this._getParentOffset(),relative: this._getRelativeOffset()});
            this.originalPosition = this.position = this._generatePosition(c);
            this.originalPageX = c.pageX;
            this.originalPageY = c.pageY;
            (d.cursorAt && this._adjustOffsetFromHelper(d.cursorAt));
            if (d.containment) {
                this._setContainment()
            }
            if (this._trigger("start", c) === false) {
                this._clear();
                return false
            }
            this._cacheHelperProportions();
            if (a.ui.ddmanager && !d.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(this, c)
            }
            this._mouseDrag(c, true);
            if (a.ui.ddmanager) {
                a.ui.ddmanager.dragStart(this, c)
            }
            return true
        },_mouseDrag: function(c, e) {
            this.position = this._generatePosition(c);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!e) {
                var d = this._uiHash();
                if (this._trigger("drag", c, d) === false) {
                    this._mouseUp({});
                    return false
                }
                this.position = d.position
            }
            if (!this.options.axis || this.options.axis !== "y") {
                this.helper[0].style.left = this.position.left + "px"
            }
            if (!this.options.axis || this.options.axis !== "x") {
                this.helper[0].style.top = this.position.top + "px"
            }
            if (a.ui.ddmanager) {
                a.ui.ddmanager.drag(this, c)
            }
            return false
        },_mouseStop: function(e) {
            var c, d = this, g = false, f = false;
            if (a.ui.ddmanager && !this.options.dropBehaviour) {
                f = a.ui.ddmanager.drop(this, e)
            }
            if (this.dropped) {
                f = this.dropped;
                this.dropped = false
            }
            c = this.element[0];
            while (c && (c = c.parentNode)) {
                if (c === document) {
                    g = true
                }
            }
            if (!g && this.options.helper === "original") {
                return false
            }
            if ((this.options.revert === "invalid" && !f) || (this.options.revert === "valid" && f) || this.options.revert === true || (a.isFunction(this.options.revert) && this.options.revert.call(this.element, f))) {
                a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    if (d._trigger("stop", e) !== false) {
                        d._clear()
                    }
                })
            } else {
                if (this._trigger("stop", e) !== false) {
                    this._clear()
                }
            }
            return false
        },_mouseUp: function(c) {
            a("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            });
            if (a.ui.ddmanager) {
                a.ui.ddmanager.dragStop(this, c)
            }
            return a.ui.mouse.prototype._mouseUp.call(this, c)
        },cancel: function() {
            if (this.helper.is(".ui-draggable-dragging")) {
                this._mouseUp({})
            } else {
                this._clear()
            }
            return this
        },_getHandle: function(c) {
            return this.options.handle ? !!a(c.target).closest(this.element.find(this.options.handle)).length : true
        },_createHelper: function(d) {
            var e = this.options, c = a.isFunction(e.helper) ? a(e.helper.apply(this.element[0], [d])) : (e.helper === "clone" ? this.element.clone().removeAttr("id") : this.element);
            if (!c.parents("body").length) {
                c.appendTo((e.appendTo === "parent" ? this.element[0].parentNode : e.appendTo))
            }
            if (c[0] !== this.element[0] && !(/(fixed|absolute)/).test(c.css("position"))) {
                c.css("position", "absolute")
            }
            return c
        },_adjustOffsetFromHelper: function(c) {
            if (typeof c === "string") {
                c = c.split(" ")
            }
            if (a.isArray(c)) {
                c = {left: +c[0],top: +c[1] || 0}
            }
            if ("left" in c) {
                this.offset.click.left = c.left + this.margins.left
            }
            if ("right" in c) {
                this.offset.click.left = this.helperProportions.width - c.right + this.margins.left
            }
            if ("top" in c) {
                this.offset.click.top = c.top + this.margins.top
            }
            if ("bottom" in c) {
                this.offset.click.top = this.helperProportions.height - c.bottom + this.margins.top
            }
        },_getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var c = this.offsetParent.offset();
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) {
                c.left += this.scrollParent.scrollLeft();
                c.top += this.scrollParent.scrollTop()
            }
            if ((this.offsetParent[0] === document.body) || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && a.ui.ie)) {
                c = {top: 0,left: 0}
            }
            return {top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
        },_getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var c = this.element.position();
                return {top: c.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),left: c.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
            } else {
                return {top: 0,left: 0}
            }
        },_cacheMargins: function() {
            this.margins = {left: (parseInt(this.element.css("marginLeft"), 10) || 0),top: (parseInt(this.element.css("marginTop"), 10) || 0),right: (parseInt(this.element.css("marginRight"), 10) || 0),bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)}
        },_cacheHelperProportions: function() {
            this.helperProportions = {width: this.helper.outerWidth(),height: this.helper.outerHeight()}
        },_setContainment: function() {
            var e, g, d, f = this.options;
            if (f.containment === "parent") {
                f.containment = this.helper[0].parentNode
            }
            if (f.containment === "document" || f.containment === "window") {
                this.containment = [f.containment === "document" ? 0 : a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, f.containment === "document" ? 0 : a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (f.containment === "document" ? 0 : a(window).scrollLeft()) + a(f.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (f.containment === "document" ? 0 : a(window).scrollTop()) + (a(f.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
            }
            if (!(/^(document|window|parent)$/).test(f.containment) && f.containment.constructor !== Array) {
                g = a(f.containment);
                d = g[0];
                if (!d) {
                    return
                }
                e = (a(d).css("overflow") !== "hidden");
                this.containment = [(parseInt(a(d).css("borderLeftWidth"), 10) || 0) + (parseInt(a(d).css("paddingLeft"), 10) || 0), (parseInt(a(d).css("borderTopWidth"), 10) || 0) + (parseInt(a(d).css("paddingTop"), 10) || 0), (e ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(a(d).css("borderRightWidth"), 10) || 0) - (parseInt(a(d).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(a(d).css("borderBottomWidth"), 10) || 0) - (parseInt(a(d).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
                this.relative_container = g
            } else {
                if (f.containment.constructor === Array) {
                    this.containment = f.containment
                }
            }
        },_convertPositionTo: function(f, h) {
            if (!h) {
                h = this.position
            }
            var e = f === "absolute" ? 1 : -1, c = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, g = (/(html|body)/i).test(c[0].tagName);
            return {top: (h.top + this.offset.relative.top * e + this.offset.parent.top * e - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (g ? 0 : c.scrollTop())) * e)),left: (h.left + this.offset.relative.left * e + this.offset.parent.left * e - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : c.scrollLeft()) * e))}
        },_generatePosition: function(d) {
            var c, j, k, f, e = this.options, l = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, i = (/(html|body)/i).test(l[0].tagName), h = d.pageX, g = d.pageY;
            if (this.originalPosition) {
                if (this.containment) {
                    if (this.relative_container) {
                        j = this.relative_container.offset();
                        c = [this.containment[0] + j.left, this.containment[1] + j.top, this.containment[2] + j.left, this.containment[3] + j.top]
                    } else {
                        c = this.containment
                    }
                    if (d.pageX - this.offset.click.left < c[0]) {
                        h = c[0] + this.offset.click.left
                    }
                    if (d.pageY - this.offset.click.top < c[1]) {
                        g = c[1] + this.offset.click.top
                    }
                    if (d.pageX - this.offset.click.left > c[2]) {
                        h = c[2] + this.offset.click.left
                    }
                    if (d.pageY - this.offset.click.top > c[3]) {
                        g = c[3] + this.offset.click.top
                    }
                }
                if (e.grid) {
                    k = e.grid[1] ? this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1] : this.originalPageY;
                    g = c ? ((k - this.offset.click.top >= c[1] || k - this.offset.click.top > c[3]) ? k : ((k - this.offset.click.top >= c[1]) ? k - e.grid[1] : k + e.grid[1])) : k;
                    f = e.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / e.grid[0]) * e.grid[0] : this.originalPageX;
                    h = c ? ((f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2]) ? f : ((f - this.offset.click.left >= c[0]) ? f - e.grid[0] : f + e.grid[0])) : f
                }
            }
            return {top: (g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (i ? 0 : l.scrollTop())))),left: (h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : l.scrollLeft())))}
        },_clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
                this.helper.remove()
            }
            this.helper = null;
            this.cancelHelperRemoval = false
        },_trigger: function(c, d, e) {
            e = e || this._uiHash();
            a.ui.plugin.call(this, c, [d, e]);
            if (c === "drag") {
                this.positionAbs = this._convertPositionTo("absolute")
            }
            return a.Widget.prototype._trigger.call(this, c, d, e)
        },plugins: {},_uiHash: function() {
            return {helper: this.helper,position: this.position,originalPosition: this.originalPosition,offset: this.positionAbs}
        }});
    a.ui.plugin.add("draggable", "connectToSortable", {start: function(d, f) {
            var e = a(this).data("ui-draggable"), g = e.options, c = a.extend({}, f, {item: e.element});
            e.sortables = [];
            a(g.connectToSortable).each(function() {
                var h = a.data(this, "ui-sortable");
                if (h && !h.options.disabled) {
                    e.sortables.push({instance: h,shouldRevert: h.options.revert});
                    h.refreshPositions();
                    h._trigger("activate", d, c)
                }
            })
        },stop: function(d, f) {
            var e = a(this).data("ui-draggable"), c = a.extend({}, f, {item: e.element});
            a.each(e.sortables, function() {
                if (this.instance.isOver) {
                    this.instance.isOver = 0;
                    e.cancelHelperRemoval = true;
                    this.instance.cancelHelperRemoval = false;
                    if (this.shouldRevert) {
                        this.instance.options.revert = this.shouldRevert
                    }
                    this.instance._mouseStop(d);
                    this.instance.options.helper = this.instance.options._helper;
                    if (e.options.helper === "original") {
                        this.instance.currentItem.css({top: "auto",left: "auto"})
                    }
                } else {
                    this.instance.cancelHelperRemoval = false;
                    this.instance._trigger("deactivate", d, c)
                }
            })
        },drag: function(d, f) {
            var e = a(this).data("ui-draggable"), c = this;
            a.each(e.sortables, function() {
                var g = false, h = this;
                this.instance.positionAbs = e.positionAbs;
                this.instance.helperProportions = e.helperProportions;
                this.instance.offset.click = e.offset.click;
                if (this.instance._intersectsWith(this.instance.containerCache)) {
                    g = true;
                    a.each(e.sortables, function() {
                        this.instance.positionAbs = e.positionAbs;
                        this.instance.helperProportions = e.helperProportions;
                        this.instance.offset.click = e.offset.click;
                        if (this !== h && this.instance._intersectsWith(this.instance.containerCache) && a.contains(h.instance.element[0], this.instance.element[0])) {
                            g = false
                        }
                        return g
                    })
                }
                if (g) {
                    if (!this.instance.isOver) {
                        this.instance.isOver = 1;
                        this.instance.currentItem = a(c).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", true);
                        this.instance.options._helper = this.instance.options.helper;
                        this.instance.options.helper = function() {
                            return f.helper[0]
                        };
                        d.target = this.instance.currentItem[0];
                        this.instance._mouseCapture(d, true);
                        this.instance._mouseStart(d, true, true);
                        this.instance.offset.click.top = e.offset.click.top;
                        this.instance.offset.click.left = e.offset.click.left;
                        this.instance.offset.parent.left -= e.offset.parent.left - this.instance.offset.parent.left;
                        this.instance.offset.parent.top -= e.offset.parent.top - this.instance.offset.parent.top;
                        e._trigger("toSortable", d);
                        e.dropped = this.instance.element;
                        e.currentItem = e.element;
                        this.instance.fromOutside = e
                    }
                    if (this.instance.currentItem) {
                        this.instance._mouseDrag(d)
                    }
                } else {
                    if (this.instance.isOver) {
                        this.instance.isOver = 0;
                        this.instance.cancelHelperRemoval = true;
                        this.instance.options.revert = false;
                        this.instance._trigger("out", d, this.instance._uiHash(this.instance));
                        this.instance._mouseStop(d, true);
                        this.instance.options.helper = this.instance.options._helper;
                        this.instance.currentItem.remove();
                        if (this.instance.placeholder) {
                            this.instance.placeholder.remove()
                        }
                        e._trigger("fromSortable", d);
                        e.dropped = false
                    }
                }
            })
        }});
    a.ui.plugin.add("draggable", "cursor", {start: function() {
            var c = a("body"), d = a(this).data("ui-draggable").options;
            if (c.css("cursor")) {
                d._cursor = c.css("cursor")
            }
            c.css("cursor", d.cursor)
        },stop: function() {
            var c = a(this).data("ui-draggable").options;
            if (c._cursor) {
                a("body").css("cursor", c._cursor)
            }
        }});
    a.ui.plugin.add("draggable", "opacity", {start: function(d, e) {
            var c = a(e.helper), f = a(this).data("ui-draggable").options;
            if (c.css("opacity")) {
                f._opacity = c.css("opacity")
            }
            c.css("opacity", f.opacity)
        },stop: function(c, d) {
            var e = a(this).data("ui-draggable").options;
            if (e._opacity) {
                a(d.helper).css("opacity", e._opacity)
            }
        }});
    a.ui.plugin.add("draggable", "scroll", {start: function() {
            var c = a(this).data("ui-draggable");
            if (c.scrollParent[0] !== document && c.scrollParent[0].tagName !== "HTML") {
                c.overflowOffset = c.scrollParent.offset()
            }
        },drag: function(e) {
            var d = a(this).data("ui-draggable"), f = d.options, c = false;
            if (d.scrollParent[0] !== document && d.scrollParent[0].tagName !== "HTML") {
                if (!f.axis || f.axis !== "x") {
                    if ((d.overflowOffset.top + d.scrollParent[0].offsetHeight) - e.pageY < f.scrollSensitivity) {
                        d.scrollParent[0].scrollTop = c = d.scrollParent[0].scrollTop + f.scrollSpeed
                    } else {
                        if (e.pageY - d.overflowOffset.top < f.scrollSensitivity) {
                            d.scrollParent[0].scrollTop = c = d.scrollParent[0].scrollTop - f.scrollSpeed
                        }
                    }
                }
                if (!f.axis || f.axis !== "y") {
                    if ((d.overflowOffset.left + d.scrollParent[0].offsetWidth) - e.pageX < f.scrollSensitivity) {
                        d.scrollParent[0].scrollLeft = c = d.scrollParent[0].scrollLeft + f.scrollSpeed
                    } else {
                        if (e.pageX - d.overflowOffset.left < f.scrollSensitivity) {
                            d.scrollParent[0].scrollLeft = c = d.scrollParent[0].scrollLeft - f.scrollSpeed
                        }
                    }
                }
            } else {
                if (!f.axis || f.axis !== "x") {
                    if (e.pageY - a(document).scrollTop() < f.scrollSensitivity) {
                        c = a(document).scrollTop(a(document).scrollTop() - f.scrollSpeed)
                    } else {
                        if (a(window).height() - (e.pageY - a(document).scrollTop()) < f.scrollSensitivity) {
                            c = a(document).scrollTop(a(document).scrollTop() + f.scrollSpeed)
                        }
                    }
                }
                if (!f.axis || f.axis !== "y") {
                    if (e.pageX - a(document).scrollLeft() < f.scrollSensitivity) {
                        c = a(document).scrollLeft(a(document).scrollLeft() - f.scrollSpeed)
                    } else {
                        if (a(window).width() - (e.pageX - a(document).scrollLeft()) < f.scrollSensitivity) {
                            c = a(document).scrollLeft(a(document).scrollLeft() + f.scrollSpeed)
                        }
                    }
                }
            }
            if (c !== false && a.ui.ddmanager && !f.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(d, e)
            }
        }});
    a.ui.plugin.add("draggable", "snap", {start: function() {
            var c = a(this).data("ui-draggable"), d = c.options;
            c.snapElements = [];
            a(d.snap.constructor !== String ? (d.snap.items || ":data(ui-draggable)") : d.snap).each(function() {
                var f = a(this), e = f.offset();
                if (this !== c.element[0]) {
                    c.snapElements.push({item: this,width: f.outerWidth(),height: f.outerHeight(),top: e.top,left: e.left})
                }
            })
        },drag: function(u, p) {
            var c, z, j, k, s, n, m, A, v, h, g = a(this).data("ui-draggable"), q = g.options, y = q.snapTolerance, x = p.offset.left, w = x + g.helperProportions.width, f = p.offset.top, e = f + g.helperProportions.height;
            for (v = g.snapElements.length - 1; v >= 0; v--) {
                s = g.snapElements[v].left;
                n = s + g.snapElements[v].width;
                m = g.snapElements[v].top;
                A = m + g.snapElements[v].height;
                if (!((s - y < x && x < n + y && m - y < f && f < A + y) || (s - y < x && x < n + y && m - y < e && e < A + y) || (s - y < w && w < n + y && m - y < f && f < A + y) || (s - y < w && w < n + y && m - y < e && e < A + y))) {
                    if (g.snapElements[v].snapping) {
                        (g.options.snap.release && g.options.snap.release.call(g.element, u, a.extend(g._uiHash(), {snapItem: g.snapElements[v].item})))
                    }
                    g.snapElements[v].snapping = false;
                    continue
                }
                if (q.snapMode !== "inner") {
                    c = Math.abs(m - e) <= y;
                    z = Math.abs(A - f) <= y;
                    j = Math.abs(s - w) <= y;
                    k = Math.abs(n - x) <= y;
                    if (c) {
                        p.position.top = g._convertPositionTo("relative", {top: m - g.helperProportions.height,left: 0}).top - g.margins.top
                    }
                    if (z) {
                        p.position.top = g._convertPositionTo("relative", {top: A,left: 0}).top - g.margins.top
                    }
                    if (j) {
                        p.position.left = g._convertPositionTo("relative", {top: 0,left: s - g.helperProportions.width}).left - g.margins.left
                    }
                    if (k) {
                        p.position.left = g._convertPositionTo("relative", {top: 0,left: n}).left - g.margins.left
                    }
                }
                h = (c || z || j || k);
                if (q.snapMode !== "outer") {
                    c = Math.abs(m - f) <= y;
                    z = Math.abs(A - e) <= y;
                    j = Math.abs(s - x) <= y;
                    k = Math.abs(n - w) <= y;
                    if (c) {
                        p.position.top = g._convertPositionTo("relative", {top: m,left: 0}).top - g.margins.top
                    }
                    if (z) {
                        p.position.top = g._convertPositionTo("relative", {top: A - g.helperProportions.height,left: 0}).top - g.margins.top
                    }
                    if (j) {
                        p.position.left = g._convertPositionTo("relative", {top: 0,left: s}).left - g.margins.left
                    }
                    if (k) {
                        p.position.left = g._convertPositionTo("relative", {top: 0,left: n - g.helperProportions.width}).left - g.margins.left
                    }
                }
                if (!g.snapElements[v].snapping && (c || z || j || k || h)) {
                    (g.options.snap.snap && g.options.snap.snap.call(g.element, u, a.extend(g._uiHash(), {snapItem: g.snapElements[v].item})))
                }
                g.snapElements[v].snapping = (c || z || j || k || h)
            }
        }});
    a.ui.plugin.add("draggable", "stack", {start: function() {
            var c, e = this.data("ui-draggable").options, d = a.makeArray(a(e.stack)).sort(function(g, f) {
                return (parseInt(a(g).css("zIndex"), 10) || 0) - (parseInt(a(f).css("zIndex"), 10) || 0)
            });
            if (!d.length) {
                return
            }
            c = parseInt(a(d[0]).css("zIndex"), 10) || 0;
            a(d).each(function(f) {
                a(this).css("zIndex", c + f)
            });
            this.css("zIndex", (c + d.length))
        }});
    a.ui.plugin.add("draggable", "zIndex", {start: function(d, e) {
            var c = a(e.helper), f = a(this).data("ui-draggable").options;
            if (c.css("zIndex")) {
                f._zIndex = c.css("zIndex")
            }
            c.css("zIndex", f.zIndex)
        },stop: function(c, d) {
            var e = a(this).data("ui-draggable").options;
            if (e._zIndex) {
                a(d.helper).css("zIndex", e._zIndex)
            }
        }})
})(jQuery);
(function(b, c) {
    function a(e, d, f) {
        return (e > d) && (e < (d + f))
    }
    b.widget("ui.droppable", {version: "1.10.2",widgetEventPrefix: "drop",options: {accept: "*",activeClass: false,addClasses: true,greedy: false,hoverClass: false,scope: "default",tolerance: "intersect",activate: null,deactivate: null,drop: null,out: null,over: null},_create: function() {
            var e = this.options, d = e.accept;
            this.isover = false;
            this.isout = true;
            this.accept = b.isFunction(d) ? d : function(f) {
                return f.is(d)
            };
            this.proportions = {width: this.element[0].offsetWidth,height: this.element[0].offsetHeight};
            b.ui.ddmanager.droppables[e.scope] = b.ui.ddmanager.droppables[e.scope] || [];
            b.ui.ddmanager.droppables[e.scope].push(this);
            (e.addClasses && this.element.addClass("ui-droppable"))
        },_destroy: function() {
            var e = 0, d = b.ui.ddmanager.droppables[this.options.scope];
            for (; e < d.length; e++) {
                if (d[e] === this) {
                    d.splice(e, 1)
                }
            }
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },_setOption: function(d, e) {
            if (d === "accept") {
                this.accept = b.isFunction(e) ? e : function(f) {
                    return f.is(e)
                }
            }
            b.Widget.prototype._setOption.apply(this, arguments)
        },_activate: function(e) {
            var d = b.ui.ddmanager.current;
            if (this.options.activeClass) {
                this.element.addClass(this.options.activeClass)
            }
            if (d) {
                this._trigger("activate", e, this.ui(d))
            }
        },_deactivate: function(e) {
            var d = b.ui.ddmanager.current;
            if (this.options.activeClass) {
                this.element.removeClass(this.options.activeClass)
            }
            if (d) {
                this._trigger("deactivate", e, this.ui(d))
            }
        },_over: function(e) {
            var d = b.ui.ddmanager.current;
            if (!d || (d.currentItem || d.element)[0] === this.element[0]) {
                return
            }
            if (this.accept.call(this.element[0], (d.currentItem || d.element))) {
                if (this.options.hoverClass) {
                    this.element.addClass(this.options.hoverClass)
                }
                this._trigger("over", e, this.ui(d))
            }
        },_out: function(e) {
            var d = b.ui.ddmanager.current;
            if (!d || (d.currentItem || d.element)[0] === this.element[0]) {
                return
            }
            if (this.accept.call(this.element[0], (d.currentItem || d.element))) {
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass)
                }
                this._trigger("out", e, this.ui(d))
            }
        },_drop: function(e, f) {
            var d = f || b.ui.ddmanager.current, g = false;
            if (!d || (d.currentItem || d.element)[0] === this.element[0]) {
                return false
            }
            this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var h = b.data(this, "ui-droppable");
                if (h.options.greedy && !h.options.disabled && h.options.scope === d.options.scope && h.accept.call(h.element[0], (d.currentItem || d.element)) && b.ui.intersect(d, b.extend(h, {offset: h.element.offset()}), h.options.tolerance)) {
                    g = true;
                    return false
                }
            });
            if (g) {
                return false
            }
            if (this.accept.call(this.element[0], (d.currentItem || d.element))) {
                if (this.options.activeClass) {
                    this.element.removeClass(this.options.activeClass)
                }
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass)
                }
                this._trigger("drop", e, this.ui(d));
                return this.element
            }
            return false
        },ui: function(d) {
            return {draggable: (d.currentItem || d.element),helper: d.helper,position: d.position,offset: d.positionAbs}
        }});
    b.ui.intersect = function(q, j, o) {
        if (!j.offset) {
            return false
        }
        var h, i, f = (q.positionAbs || q.position.absolute).left, e = f + q.helperProportions.width, n = (q.positionAbs || q.position.absolute).top, m = n + q.helperProportions.height, g = j.offset.left, d = g + j.proportions.width, p = j.offset.top, k = p + j.proportions.height;
        switch (o) {
            case "fit":
                return (g <= f && e <= d && p <= n && m <= k);
            case "intersect":
                return (g < f + (q.helperProportions.width / 2) && e - (q.helperProportions.width / 2) < d && p < n + (q.helperProportions.height / 2) && m - (q.helperProportions.height / 2) < k);
            case "pointer":
                h = ((q.positionAbs || q.position.absolute).left + (q.clickOffset || q.offset.click).left);
                i = ((q.positionAbs || q.position.absolute).top + (q.clickOffset || q.offset.click).top);
                return a(i, p, j.proportions.height) && a(h, g, j.proportions.width);
            case "touch":
                return ((n >= p && n <= k) || (m >= p && m <= k) || (n < p && m > k)) && ((f >= g && f <= d) || (e >= g && e <= d) || (f < g && e > d));
            default:
                return false
        }
    };
    b.ui.ddmanager = {current: null,droppables: {"default": []},prepareOffsets: function(g, k) {
            var f, e, d = b.ui.ddmanager.droppables[g.options.scope] || [], h = k ? k.type : null, l = (g.currentItem || g.element).find(":data(ui-droppable)").addBack();
            droppablesLoop: for (f = 0; f < d.length; f++) {
                if (d[f].options.disabled || (g && !d[f].accept.call(d[f].element[0], (g.currentItem || g.element)))) {
                    continue
                }
                for (e = 0; e < l.length; e++) {
                    if (l[e] === d[f].element[0]) {
                        d[f].proportions.height = 0;
                        continue droppablesLoop
                    }
                }
                d[f].visible = d[f].element.css("display") !== "none";
                if (!d[f].visible) {
                    continue
                }
                if (h === "mousedown") {
                    d[f]._activate.call(d[f], k)
                }
                d[f].offset = d[f].element.offset();
                d[f].proportions = {width: d[f].element[0].offsetWidth,height: d[f].element[0].offsetHeight}
            }
        },drop: function(d, e) {
            var f = false;
            b.each((b.ui.ddmanager.droppables[d.options.scope] || []).slice(), function() {
                if (!this.options) {
                    return
                }
                if (!this.options.disabled && this.visible && b.ui.intersect(d, this, this.options.tolerance)) {
                    f = this._drop.call(this, e) || f
                }
                if (!this.options.disabled && this.visible && this.accept.call(this.element[0], (d.currentItem || d.element))) {
                    this.isout = true;
                    this.isover = false;
                    this._deactivate.call(this, e)
                }
            });
            return f
        },dragStart: function(d, e) {
            d.element.parentsUntil("body").bind("scroll.droppable", function() {
                if (!d.options.refreshPositions) {
                    b.ui.ddmanager.prepareOffsets(d, e)
                }
            })
        },drag: function(d, e) {
            if (d.options.refreshPositions) {
                b.ui.ddmanager.prepareOffsets(d, e)
            }
            b.each(b.ui.ddmanager.droppables[d.options.scope] || [], function() {
                if (this.options.disabled || this.greedyChild || !this.visible) {
                    return
                }
                var i, g, f, h = b.ui.intersect(d, this, this.options.tolerance), j = !h && this.isover ? "isout" : (h && !this.isover ? "isover" : null);
                if (!j) {
                    return
                }
                if (this.options.greedy) {
                    g = this.options.scope;
                    f = this.element.parents(":data(ui-droppable)").filter(function() {
                        return b.data(this, "ui-droppable").options.scope === g
                    });
                    if (f.length) {
                        i = b.data(f[0], "ui-droppable");
                        i.greedyChild = (j === "isover")
                    }
                }
                if (i && j === "isover") {
                    i.isover = false;
                    i.isout = true;
                    i._out.call(i, e)
                }
                this[j] = true;
                this[j === "isout" ? "isover" : "isout"] = false;
                this[j === "isover" ? "_over" : "_out"].call(this, e);
                if (i && j === "isout") {
                    i.isout = false;
                    i.isover = true;
                    i._over.call(i, e)
                }
            })
        },dragStop: function(d, e) {
            d.element.parentsUntil("body").unbind("scroll.droppable");
            if (!d.options.refreshPositions) {
                b.ui.ddmanager.prepareOffsets(d, e)
            }
        }}
})(jQuery);
(function(c, d) {
    function b(e) {
        return parseInt(e, 10) || 0
    }
    function a(e) {
        return !isNaN(parseInt(e, 10))
    }
    c.widget("ui.resizable", c.ui.mouse, {version: "1.10.2",widgetEventPrefix: "resize",options: {alsoResize: false,animate: false,animateDuration: "slow",animateEasing: "swing",aspectRatio: false,autoHide: false,containment: false,ghost: false,grid: false,handles: "e,s,se",helper: false,maxHeight: null,maxWidth: null,minHeight: 10,minWidth: 10,zIndex: 90,resize: null,start: null,stop: null},_create: function() {
            var l, f, j, g, e, h = this, k = this.options;
            this.element.addClass("ui-resizable");
            c.extend(this, {_aspectRatio: !!(k.aspectRatio),aspectRatio: k.aspectRatio,originalElement: this.element,_proportionallyResizeElements: [],_helper: k.helper || k.ghost || k.animate ? k.helper || "ui-resizable-helper" : null});
            if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
                this.element.wrap(c("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position: this.element.css("position"),width: this.element.outerWidth(),height: this.element.outerHeight(),top: this.element.css("top"),left: this.element.css("left")}));
                this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable"));
                this.elementIsWrapper = true;
                this.element.css({marginLeft: this.originalElement.css("marginLeft"),marginTop: this.originalElement.css("marginTop"),marginRight: this.originalElement.css("marginRight"),marginBottom: this.originalElement.css("marginBottom")});
                this.originalElement.css({marginLeft: 0,marginTop: 0,marginRight: 0,marginBottom: 0});
                this.originalResizeStyle = this.originalElement.css("resize");
                this.originalElement.css("resize", "none");
                this._proportionallyResizeElements.push(this.originalElement.css({position: "static",zoom: 1,display: "block"}));
                this.originalElement.css({margin: this.originalElement.css("margin")});
                this._proportionallyResize()
            }
            this.handles = k.handles || (!c(".ui-resizable-handle", this.element).length ? "e,s,se" : {n: ".ui-resizable-n",e: ".ui-resizable-e",s: ".ui-resizable-s",w: ".ui-resizable-w",se: ".ui-resizable-se",sw: ".ui-resizable-sw",ne: ".ui-resizable-ne",nw: ".ui-resizable-nw"});
            if (this.handles.constructor === String) {
                if (this.handles === "all") {
                    this.handles = "n,e,s,w,se,sw,ne,nw"
                }
                l = this.handles.split(",");
                this.handles = {};
                for (f = 0; f < l.length; f++) {
                    j = c.trim(l[f]);
                    e = "ui-resizable-" + j;
                    g = c("<div class='ui-resizable-handle " + e + "'></div>");
                    g.css({zIndex: k.zIndex});
                    if ("se" === j) {
                        g.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
                    }
                    this.handles[j] = ".ui-resizable-" + j;
                    this.element.append(g)
                }
            }
            this._renderAxis = function(q) {
                var n, o, m, p;
                q = q || this.element;
                for (n in this.handles) {
                    if (this.handles[n].constructor === String) {
                        this.handles[n] = c(this.handles[n], this.element).show()
                    }
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        o = c(this.handles[n], this.element);
                        p = /sw|ne|nw|se|n|s/.test(n) ? o.outerHeight() : o.outerWidth();
                        m = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join("");
                        q.css(m, p);
                        this._proportionallyResize()
                    }
                    if (!c(this.handles[n]).length) {
                        continue
                    }
                }
            };
            this._renderAxis(this.element);
            this._handles = c(".ui-resizable-handle", this.element).disableSelection();
            this._handles.mouseover(function() {
                if (!h.resizing) {
                    if (this.className) {
                        g = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
                    }
                    h.axis = g && g[1] ? g[1] : "se"
                }
            });
            if (k.autoHide) {
                this._handles.hide();
                c(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    if (k.disabled) {
                        return
                    }
                    c(this).removeClass("ui-resizable-autohide");
                    h._handles.show()
                }).mouseleave(function() {
                    if (k.disabled) {
                        return
                    }
                    if (!h.resizing) {
                        c(this).addClass("ui-resizable-autohide");
                        h._handles.hide()
                    }
                })
            }
            this._mouseInit()
        },_destroy: function() {
            this._mouseDestroy();
            var f, e = function(g) {
                c(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                e(this.element);
                f = this.element;
                this.originalElement.css({position: f.css("position"),width: f.outerWidth(),height: f.outerHeight(),top: f.css("top"),left: f.css("left")}).insertAfter(f);
                f.remove()
            }
            this.originalElement.css("resize", this.originalResizeStyle);
            e(this.originalElement);
            return this
        },_mouseCapture: function(g) {
            var f, h, e = false;
            for (f in this.handles) {
                h = c(this.handles[f])[0];
                if (h === g.target || c.contains(h, g.target)) {
                    e = true
                }
            }
            return !this.options.disabled && e
        },_mouseStart: function(g) {
            var k, h, j, i = this.options, f = this.element.position(), e = this.element;
            this.resizing = true;
            if ((/absolute/).test(e.css("position"))) {
                e.css({position: "absolute",top: e.css("top"),left: e.css("left")})
            } else {
                if (e.is(".ui-draggable")) {
                    e.css({position: "absolute",top: f.top,left: f.left})
                }
            }
            this._renderProxy();
            k = b(this.helper.css("left"));
            h = b(this.helper.css("top"));
            if (i.containment) {
                k += c(i.containment).scrollLeft() || 0;
                h += c(i.containment).scrollTop() || 0
            }
            this.offset = this.helper.offset();
            this.position = {left: k,top: h};
            this.size = this._helper ? {width: e.outerWidth(),height: e.outerHeight()} : {width: e.width(),height: e.height()};
            this.originalSize = this._helper ? {width: e.outerWidth(),height: e.outerHeight()} : {width: e.width(),height: e.height()};
            this.originalPosition = {left: k,top: h};
            this.sizeDiff = {width: e.outerWidth() - e.width(),height: e.outerHeight() - e.height()};
            this.originalMousePosition = {left: g.pageX,top: g.pageY};
            this.aspectRatio = (typeof i.aspectRatio === "number") ? i.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);
            j = c(".ui-resizable-" + this.axis).css("cursor");
            c("body").css("cursor", j === "auto" ? this.axis + "-resize" : j);
            e.addClass("ui-resizable-resizing");
            this._propagate("start", g);
            return true
        },_mouseDrag: function(e) {
            var k, g = this.helper, l = {}, i = this.originalMousePosition, m = this.axis, o = this.position.top, f = this.position.left, n = this.size.width, j = this.size.height, q = (e.pageX - i.left) || 0, p = (e.pageY - i.top) || 0, h = this._change[m];
            if (!h) {
                return false
            }
            k = h.apply(this, [e, q, p]);
            this._updateVirtualBoundaries(e.shiftKey);
            if (this._aspectRatio || e.shiftKey) {
                k = this._updateRatio(k, e)
            }
            k = this._respectSize(k, e);
            this._updateCache(k);
            this._propagate("resize", e);
            if (this.position.top !== o) {
                l.top = this.position.top + "px"
            }
            if (this.position.left !== f) {
                l.left = this.position.left + "px"
            }
            if (this.size.width !== n) {
                l.width = this.size.width + "px"
            }
            if (this.size.height !== j) {
                l.height = this.size.height + "px"
            }
            g.css(l);
            if (!this._helper && this._proportionallyResizeElements.length) {
                this._proportionallyResize()
            }
            if (!c.isEmptyObject(l)) {
                this._trigger("resize", e, this.ui())
            }
            return false
        },_mouseStop: function(h) {
            this.resizing = false;
            var g, e, f, k, n, j, m, i = this.options, l = this;
            if (this._helper) {
                g = this._proportionallyResizeElements;
                e = g.length && (/textarea/i).test(g[0].nodeName);
                f = e && c.ui.hasScroll(g[0], "left") ? 0 : l.sizeDiff.height;
                k = e ? 0 : l.sizeDiff.width;
                n = {width: (l.helper.width() - k),height: (l.helper.height() - f)};
                j = (parseInt(l.element.css("left"), 10) + (l.position.left - l.originalPosition.left)) || null;
                m = (parseInt(l.element.css("top"), 10) + (l.position.top - l.originalPosition.top)) || null;
                if (!i.animate) {
                    this.element.css(c.extend(n, {top: m,left: j}))
                }
                l.helper.height(l.size.height);
                l.helper.width(l.size.width);
                if (this._helper && !i.animate) {
                    this._proportionallyResize()
                }
            }
            c("body").css("cursor", "auto");
            this.element.removeClass("ui-resizable-resizing");
            this._propagate("stop", h);
            if (this._helper) {
                this.helper.remove()
            }
            return false
        },_updateVirtualBoundaries: function(g) {
            var i, h, f, k, e, j = this.options;
            e = {minWidth: a(j.minWidth) ? j.minWidth : 0,maxWidth: a(j.maxWidth) ? j.maxWidth : Infinity,minHeight: a(j.minHeight) ? j.minHeight : 0,maxHeight: a(j.maxHeight) ? j.maxHeight : Infinity};
            if (this._aspectRatio || g) {
                i = e.minHeight * this.aspectRatio;
                f = e.minWidth / this.aspectRatio;
                h = e.maxHeight * this.aspectRatio;
                k = e.maxWidth / this.aspectRatio;
                if (i > e.minWidth) {
                    e.minWidth = i
                }
                if (f > e.minHeight) {
                    e.minHeight = f
                }
                if (h < e.maxWidth) {
                    e.maxWidth = h
                }
                if (k < e.maxHeight) {
                    e.maxHeight = k
                }
            }
            this._vBoundaries = e
        },_updateCache: function(e) {
            this.offset = this.helper.offset();
            if (a(e.left)) {
                this.position.left = e.left
            }
            if (a(e.top)) {
                this.position.top = e.top
            }
            if (a(e.height)) {
                this.size.height = e.height
            }
            if (a(e.width)) {
                this.size.width = e.width
            }
        },_updateRatio: function(g) {
            var h = this.position, f = this.size, e = this.axis;
            if (a(g.height)) {
                g.width = (g.height * this.aspectRatio)
            } else {
                if (a(g.width)) {
                    g.height = (g.width / this.aspectRatio)
                }
            }
            if (e === "sw") {
                g.left = h.left + (f.width - g.width);
                g.top = null
            }
            if (e === "nw") {
                g.top = h.top + (f.height - g.height);
                g.left = h.left + (f.width - g.width)
            }
            return g
        },_respectSize: function(j) {
            var g = this._vBoundaries, m = this.axis, p = a(j.width) && g.maxWidth && (g.maxWidth < j.width), k = a(j.height) && g.maxHeight && (g.maxHeight < j.height), h = a(j.width) && g.minWidth && (g.minWidth > j.width), n = a(j.height) && g.minHeight && (g.minHeight > j.height), f = this.originalPosition.left + this.originalSize.width, l = this.position.top + this.size.height, i = /sw|nw|w/.test(m), e = /nw|ne|n/.test(m);
            if (h) {
                j.width = g.minWidth
            }
            if (n) {
                j.height = g.minHeight
            }
            if (p) {
                j.width = g.maxWidth
            }
            if (k) {
                j.height = g.maxHeight
            }
            if (h && i) {
                j.left = f - g.minWidth
            }
            if (p && i) {
                j.left = f - g.maxWidth
            }
            if (n && e) {
                j.top = l - g.minHeight
            }
            if (k && e) {
                j.top = l - g.maxHeight
            }
            if (!j.width && !j.height && !j.left && j.top) {
                j.top = null
            } else {
                if (!j.width && !j.height && !j.top && j.left) {
                    j.left = null
                }
            }
            return j
        },_proportionallyResize: function() {
            if (!this._proportionallyResizeElements.length) {
                return
            }
            var h, f, l, e, k, g = this.helper || this.element;
            for (h = 0; h < this._proportionallyResizeElements.length; h++) {
                k = this._proportionallyResizeElements[h];
                if (!this.borderDif) {
                    this.borderDif = [];
                    l = [k.css("borderTopWidth"), k.css("borderRightWidth"), k.css("borderBottomWidth"), k.css("borderLeftWidth")];
                    e = [k.css("paddingTop"), k.css("paddingRight"), k.css("paddingBottom"), k.css("paddingLeft")];
                    for (f = 0; f < l.length; f++) {
                        this.borderDif[f] = (parseInt(l[f], 10) || 0) + (parseInt(e[f], 10) || 0)
                    }
                }
                k.css({height: (g.height() - this.borderDif[0] - this.borderDif[2]) || 0,width: (g.width() - this.borderDif[1] - this.borderDif[3]) || 0})
            }
        },_renderProxy: function() {
            var e = this.element, f = this.options;
            this.elementOffset = e.offset();
            if (this._helper) {
                this.helper = this.helper || c("<div style='overflow:hidden;'></div>");
                this.helper.addClass(this._helper).css({width: this.element.outerWidth() - 1,height: this.element.outerHeight() - 1,position: "absolute",left: this.elementOffset.left + "px",top: this.elementOffset.top + "px",zIndex: ++f.zIndex});
                this.helper.appendTo("body").disableSelection()
            } else {
                this.helper = this.element
            }
        },_change: {e: function(f, e) {
                return {width: this.originalSize.width + e}
            },w: function(g, e) {
                var f = this.originalSize, h = this.originalPosition;
                return {left: h.left + e,width: f.width - e}
            },n: function(h, f, e) {
                var g = this.originalSize, i = this.originalPosition;
                return {top: i.top + e,height: g.height - e}
            },s: function(g, f, e) {
                return {height: this.originalSize.height + e}
            },se: function(g, f, e) {
                return c.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [g, f, e]))
            },sw: function(g, f, e) {
                return c.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [g, f, e]))
            },ne: function(g, f, e) {
                return c.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [g, f, e]))
            },nw: function(g, f, e) {
                return c.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [g, f, e]))
            }},_propagate: function(f, e) {
            c.ui.plugin.call(this, f, [e, this.ui()]);
            (f !== "resize" && this._trigger(f, e, this.ui()))
        },plugins: {},ui: function() {
            return {originalElement: this.originalElement,element: this.element,helper: this.helper,position: this.position,size: this.size,originalSize: this.originalSize,originalPosition: this.originalPosition}
        }});
    c.ui.plugin.add("resizable", "animate", {stop: function(h) {
            var m = c(this).data("ui-resizable"), j = m.options, g = m._proportionallyResizeElements, e = g.length && (/textarea/i).test(g[0].nodeName), f = e && c.ui.hasScroll(g[0], "left") ? 0 : m.sizeDiff.height, l = e ? 0 : m.sizeDiff.width, i = {width: (m.size.width - l),height: (m.size.height - f)}, k = (parseInt(m.element.css("left"), 10) + (m.position.left - m.originalPosition.left)) || null, n = (parseInt(m.element.css("top"), 10) + (m.position.top - m.originalPosition.top)) || null;
            m.element.animate(c.extend(i, n && k ? {top: n,left: k} : {}), {duration: j.animateDuration,easing: j.animateEasing,step: function() {
                    var o = {width: parseInt(m.element.css("width"), 10),height: parseInt(m.element.css("height"), 10),top: parseInt(m.element.css("top"), 10),left: parseInt(m.element.css("left"), 10)};
                    if (g && g.length) {
                        c(g[0]).css({width: o.width,height: o.height})
                    }
                    m._updateCache(o);
                    m._propagate("resize", h)
                }})
        }});
    c.ui.plugin.add("resizable", "containment", {start: function() {
            var m, g, q, e, l, h, r, n = c(this).data("ui-resizable"), k = n.options, j = n.element, f = k.containment, i = (f instanceof c) ? f.get(0) : (/parent/.test(f)) ? j.parent().get(0) : f;
            if (!i) {
                return
            }
            n.containerElement = c(i);
            if (/document/.test(f) || f === document) {
                n.containerOffset = {left: 0,top: 0};
                n.containerPosition = {left: 0,top: 0};
                n.parentData = {element: c(document),left: 0,top: 0,width: c(document).width(),height: c(document).height() || document.body.parentNode.scrollHeight}
            } else {
                m = c(i);
                g = [];
                c(["Top", "Right", "Left", "Bottom"]).each(function(p, o) {
                    g[p] = b(m.css("padding" + o))
                });
                n.containerOffset = m.offset();
                n.containerPosition = m.position();
                n.containerSize = {height: (m.innerHeight() - g[3]),width: (m.innerWidth() - g[1])};
                q = n.containerOffset;
                e = n.containerSize.height;
                l = n.containerSize.width;
                h = (c.ui.hasScroll(i, "left") ? i.scrollWidth : l);
                r = (c.ui.hasScroll(i) ? i.scrollHeight : e);
                n.parentData = {element: i,left: q.left,top: q.top,width: h,height: r}
            }
        },resize: function(f) {
            var k, q, j, i, l = c(this).data("ui-resizable"), h = l.options, n = l.containerOffset, m = l.position, p = l._aspectRatio || f.shiftKey, e = {top: 0,left: 0}, g = l.containerElement;
            if (g[0] !== document && (/static/).test(g.css("position"))) {
                e = n
            }
            if (m.left < (l._helper ? n.left : 0)) {
                l.size.width = l.size.width + (l._helper ? (l.position.left - n.left) : (l.position.left - e.left));
                if (p) {
                    l.size.height = l.size.width / l.aspectRatio
                }
                l.position.left = h.helper ? n.left : 0
            }
            if (m.top < (l._helper ? n.top : 0)) {
                l.size.height = l.size.height + (l._helper ? (l.position.top - n.top) : l.position.top);
                if (p) {
                    l.size.width = l.size.height * l.aspectRatio
                }
                l.position.top = l._helper ? n.top : 0
            }
            l.offset.left = l.parentData.left + l.position.left;
            l.offset.top = l.parentData.top + l.position.top;
            k = Math.abs((l._helper ? l.offset.left - e.left : (l.offset.left - e.left)) + l.sizeDiff.width);
            q = Math.abs((l._helper ? l.offset.top - e.top : (l.offset.top - n.top)) + l.sizeDiff.height);
            j = l.containerElement.get(0) === l.element.parent().get(0);
            i = /relative|absolute/.test(l.containerElement.css("position"));
            if (j && i) {
                k -= l.parentData.left
            }
            if (k + l.size.width >= l.parentData.width) {
                l.size.width = l.parentData.width - k;
                if (p) {
                    l.size.height = l.size.width / l.aspectRatio
                }
            }
            if (q + l.size.height >= l.parentData.height) {
                l.size.height = l.parentData.height - q;
                if (p) {
                    l.size.width = l.size.height * l.aspectRatio
                }
            }
        },stop: function() {
            var k = c(this).data("ui-resizable"), f = k.options, l = k.containerOffset, e = k.containerPosition, g = k.containerElement, i = c(k.helper), n = i.offset(), m = i.outerWidth() - k.sizeDiff.width, j = i.outerHeight() - k.sizeDiff.height;
            if (k._helper && !f.animate && (/relative/).test(g.css("position"))) {
                c(this).css({left: n.left - e.left - l.left,width: m,height: j})
            }
            if (k._helper && !f.animate && (/static/).test(g.css("position"))) {
                c(this).css({left: n.left - e.left - l.left,width: m,height: j})
            }
        }});
    c.ui.plugin.add("resizable", "alsoResize", {start: function() {
            var e = c(this).data("ui-resizable"), g = e.options, f = function(h) {
                c(h).each(function() {
                    var i = c(this);
                    i.data("ui-resizable-alsoresize", {width: parseInt(i.width(), 10),height: parseInt(i.height(), 10),left: parseInt(i.css("left"), 10),top: parseInt(i.css("top"), 10)})
                })
            };
            if (typeof (g.alsoResize) === "object" && !g.alsoResize.parentNode) {
                if (g.alsoResize.length) {
                    g.alsoResize = g.alsoResize[0];
                    f(g.alsoResize)
                } else {
                    c.each(g.alsoResize, function(h) {
                        f(h)
                    })
                }
            } else {
                f(g.alsoResize)
            }
        },resize: function(g, i) {
            var f = c(this).data("ui-resizable"), j = f.options, h = f.originalSize, l = f.originalPosition, k = {height: (f.size.height - h.height) || 0,width: (f.size.width - h.width) || 0,top: (f.position.top - l.top) || 0,left: (f.position.left - l.left) || 0}, e = function(m, n) {
                c(m).each(function() {
                    var q = c(this), r = c(this).data("ui-resizable-alsoresize"), p = {}, o = n && n.length ? n : q.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    c.each(o, function(s, u) {
                        var t = (r[u] || 0) + (k[u] || 0);
                        if (t && t >= 0) {
                            p[u] = t || null
                        }
                    });
                    q.css(p)
                })
            };
            if (typeof (j.alsoResize) === "object" && !j.alsoResize.nodeType) {
                c.each(j.alsoResize, function(m, n) {
                    e(m, n)
                })
            } else {
                e(j.alsoResize)
            }
        },stop: function() {
            c(this).removeData("resizable-alsoresize")
        }});
    c.ui.plugin.add("resizable", "ghost", {start: function() {
            var f = c(this).data("ui-resizable"), g = f.options, e = f.size;
            f.ghost = f.originalElement.clone();
            f.ghost.css({opacity: 0.25,display: "block",position: "relative",height: e.height,width: e.width,margin: 0,left: 0,top: 0}).addClass("ui-resizable-ghost").addClass(typeof g.ghost === "string" ? g.ghost : "");
            f.ghost.appendTo(f.helper)
        },resize: function() {
            var e = c(this).data("ui-resizable");
            if (e.ghost) {
                e.ghost.css({position: "relative",height: e.size.height,width: e.size.width})
            }
        },stop: function() {
            var e = c(this).data("ui-resizable");
            if (e.ghost && e.helper) {
                e.helper.get(0).removeChild(e.ghost.get(0))
            }
        }});
    c.ui.plugin.add("resizable", "grid", {resize: function() {
            var r = c(this).data("ui-resizable"), i = r.options, s = r.size, k = r.originalSize, n = r.originalPosition, t = r.axis, f = typeof i.grid === "number" ? [i.grid, i.grid] : i.grid, p = (f[0] || 1), m = (f[1] || 1), h = Math.round((s.width - k.width) / p) * p, g = Math.round((s.height - k.height) / m) * m, l = k.width + h, e = k.height + g, j = i.maxWidth && (i.maxWidth < l), u = i.maxHeight && (i.maxHeight < e), q = i.minWidth && (i.minWidth > l), v = i.minHeight && (i.minHeight > e);
            i.grid = f;
            if (q) {
                l = l + p
            }
            if (v) {
                e = e + m
            }
            if (j) {
                l = l - p
            }
            if (u) {
                e = e - m
            }
            if (/^(se|s|e)$/.test(t)) {
                r.size.width = l;
                r.size.height = e
            } else {
                if (/^(ne)$/.test(t)) {
                    r.size.width = l;
                    r.size.height = e;
                    r.position.top = n.top - g
                } else {
                    if (/^(sw)$/.test(t)) {
                        r.size.width = l;
                        r.size.height = e;
                        r.position.left = n.left - h
                    } else {
                        r.size.width = l;
                        r.size.height = e;
                        r.position.top = n.top - g;
                        r.position.left = n.left - h
                    }
                }
            }
        }})
})(jQuery);
(function(a, b) {
    a.widget("ui.selectable", a.ui.mouse, {version: "1.10.2",options: {appendTo: "body",autoRefresh: true,distance: 0,filter: "*",tolerance: "touch",selected: null,selecting: null,start: null,stop: null,unselected: null,unselecting: null},_create: function() {
            var d, c = this;
            this.element.addClass("ui-selectable");
            this.dragged = false;
            this.refresh = function() {
                d = a(c.options.filter, c.element[0]);
                d.addClass("ui-selectee");
                d.each(function() {
                    var e = a(this), f = e.offset();
                    a.data(this, "selectable-item", {element: this,$element: e,left: f.left,top: f.top,right: f.left + e.outerWidth(),bottom: f.top + e.outerHeight(),startselected: false,selected: e.hasClass("ui-selected"),selecting: e.hasClass("ui-selecting"),unselecting: e.hasClass("ui-unselecting")})
                })
            };
            this.refresh();
            this.selectees = d.addClass("ui-selectee");
            this._mouseInit();
            this.helper = a("<div class='ui-selectable-helper'></div>")
        },_destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item");
            this.element.removeClass("ui-selectable ui-selectable-disabled");
            this._mouseDestroy()
        },_mouseStart: function(e) {
            var d = this, c = this.options;
            this.opos = [e.pageX, e.pageY];
            if (this.options.disabled) {
                return
            }
            this.selectees = a(c.filter, this.element[0]);
            this._trigger("start", e);
            a(c.appendTo).append(this.helper);
            this.helper.css({left: e.pageX,top: e.pageY,width: 0,height: 0});
            if (c.autoRefresh) {
                this.refresh()
            }
            this.selectees.filter(".ui-selected").each(function() {
                var f = a.data(this, "selectable-item");
                f.startselected = true;
                if (!e.metaKey && !e.ctrlKey) {
                    f.$element.removeClass("ui-selected");
                    f.selected = false;
                    f.$element.addClass("ui-unselecting");
                    f.unselecting = true;
                    d._trigger("unselecting", e, {unselecting: f.element})
                }
            });
            a(e.target).parents().addBack().each(function() {
                var f, g = a.data(this, "selectable-item");
                if (g) {
                    f = (!e.metaKey && !e.ctrlKey) || !g.$element.hasClass("ui-selected");
                    g.$element.removeClass(f ? "ui-unselecting" : "ui-selected").addClass(f ? "ui-selecting" : "ui-unselecting");
                    g.unselecting = !f;
                    g.selecting = f;
                    g.selected = f;
                    if (f) {
                        d._trigger("selecting", e, {selecting: g.element})
                    } else {
                        d._trigger("unselecting", e, {unselecting: g.element})
                    }
                    return false
                }
            })
        },_mouseDrag: function(j) {
            this.dragged = true;
            if (this.options.disabled) {
                return
            }
            var g, i = this, e = this.options, d = this.opos[0], h = this.opos[1], c = j.pageX, f = j.pageY;
            if (d > c) {
                g = c;
                c = d;
                d = g
            }
            if (h > f) {
                g = f;
                f = h;
                h = g
            }
            this.helper.css({left: d,top: h,width: c - d,height: f - h});
            this.selectees.each(function() {
                var k = a.data(this, "selectable-item"), l = false;
                if (!k || k.element === i.element[0]) {
                    return
                }
                if (e.tolerance === "touch") {
                    l = (!(k.left > c || k.right < d || k.top > f || k.bottom < h))
                } else {
                    if (e.tolerance === "fit") {
                        l = (k.left > d && k.right < c && k.top > h && k.bottom < f)
                    }
                }
                if (l) {
                    if (k.selected) {
                        k.$element.removeClass("ui-selected");
                        k.selected = false
                    }
                    if (k.unselecting) {
                        k.$element.removeClass("ui-unselecting");
                        k.unselecting = false
                    }
                    if (!k.selecting) {
                        k.$element.addClass("ui-selecting");
                        k.selecting = true;
                        i._trigger("selecting", j, {selecting: k.element})
                    }
                } else {
                    if (k.selecting) {
                        if ((j.metaKey || j.ctrlKey) && k.startselected) {
                            k.$element.removeClass("ui-selecting");
                            k.selecting = false;
                            k.$element.addClass("ui-selected");
                            k.selected = true
                        } else {
                            k.$element.removeClass("ui-selecting");
                            k.selecting = false;
                            if (k.startselected) {
                                k.$element.addClass("ui-unselecting");
                                k.unselecting = true
                            }
                            i._trigger("unselecting", j, {unselecting: k.element})
                        }
                    }
                    if (k.selected) {
                        if (!j.metaKey && !j.ctrlKey && !k.startselected) {
                            k.$element.removeClass("ui-selected");
                            k.selected = false;
                            k.$element.addClass("ui-unselecting");
                            k.unselecting = true;
                            i._trigger("unselecting", j, {unselecting: k.element})
                        }
                    }
                }
            });
            return false
        },_mouseStop: function(d) {
            var c = this;
            this.dragged = false;
            a(".ui-unselecting", this.element[0]).each(function() {
                var e = a.data(this, "selectable-item");
                e.$element.removeClass("ui-unselecting");
                e.unselecting = false;
                e.startselected = false;
                c._trigger("unselected", d, {unselected: e.element})
            });
            a(".ui-selecting", this.element[0]).each(function() {
                var e = a.data(this, "selectable-item");
                e.$element.removeClass("ui-selecting").addClass("ui-selected");
                e.selecting = false;
                e.selected = true;
                e.startselected = true;
                c._trigger("selected", d, {selected: e.element})
            });
            this._trigger("stop", d);
            this.helper.remove();
            return false
        }})
})(jQuery);
(function(b, d) {
    function a(f, e, g) {
        return (f > e) && (f < (e + g))
    }
    function c(e) {
        return (/left|right/).test(e.css("float")) || (/inline|table-cell/).test(e.css("display"))
    }
    b.widget("ui.sortable", b.ui.mouse, {version: "1.10.2",widgetEventPrefix: "sort",ready: false,options: {appendTo: "parent",axis: false,connectWith: false,containment: false,cursor: "auto",cursorAt: false,dropOnEmpty: true,forcePlaceholderSize: false,forceHelperSize: false,grid: false,handle: false,helper: "original",items: "> *",opacity: false,placeholder: false,revert: false,scroll: true,scrollSensitivity: 20,scrollSpeed: 20,scope: "default",tolerance: "intersect",zIndex: 1000,activate: null,beforeStop: null,change: null,deactivate: null,out: null,over: null,receive: null,remove: null,sort: null,start: null,stop: null,update: null},_create: function() {
            var e = this.options;
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.floating = this.items.length ? e.axis === "x" || c(this.items[0].item) : false;
            this.offset = this.element.offset();
            this._mouseInit();
            this.ready = true
        },_destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled");
            this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) {
                this.items[e].item.removeData(this.widgetName + "-item")
            }
            return this
        },_setOption: function(e, f) {
            if (e === "disabled") {
                this.options[e] = f;
                this.widget().toggleClass("ui-sortable-disabled", !!f)
            } else {
                b.Widget.prototype._setOption.apply(this, arguments)
            }
        },_mouseCapture: function(g, h) {
            var e = null, i = false, f = this;
            if (this.reverting) {
                return false
            }
            if (this.options.disabled || this.options.type === "static") {
                return false
            }
            this._refreshItems(g);
            b(g.target).parents().each(function() {
                if (b.data(this, f.widgetName + "-item") === f) {
                    e = b(this);
                    return false
                }
            });
            if (b.data(g.target, f.widgetName + "-item") === f) {
                e = b(g.target)
            }
            if (!e) {
                return false
            }
            if (this.options.handle && !h) {
                b(this.options.handle, e).find("*").addBack().each(function() {
                    if (this === g.target) {
                        i = true
                    }
                });
                if (!i) {
                    return false
                }
            }
            this.currentItem = e;
            this._removeCurrentsFromItems();
            return true
        },_mouseStart: function(h, j, f) {
            var g, e, k = this.options;
            this.currentContainer = this;
            this.refreshPositions();
            this.helper = this._createHelper(h);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.currentItem.offset();
            this.offset = {top: this.offset.top - this.margins.top,left: this.offset.left - this.margins.left};
            b.extend(this.offset, {click: {left: h.pageX - this.offset.left,top: h.pageY - this.offset.top},parent: this._getParentOffset(),relative: this._getRelativeOffset()});
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");
            this.originalPosition = this._generatePosition(h);
            this.originalPageX = h.pageX;
            this.originalPageY = h.pageY;
            (k.cursorAt && this._adjustOffsetFromHelper(k.cursorAt));
            this.domPosition = {prev: this.currentItem.prev()[0],parent: this.currentItem.parent()[0]};
            if (this.helper[0] !== this.currentItem[0]) {
                this.currentItem.hide()
            }
            this._createPlaceholder();
            if (k.containment) {
                this._setContainment()
            }
            if (k.cursor && k.cursor !== "auto") {
                e = this.document.find("body");
                this.storedCursor = e.css("cursor");
                e.css("cursor", k.cursor);
                this.storedStylesheet = b("<style>*{ cursor: " + k.cursor + " !important; }</style>").appendTo(e)
            }
            if (k.opacity) {
                if (this.helper.css("opacity")) {
                    this._storedOpacity = this.helper.css("opacity")
                }
                this.helper.css("opacity", k.opacity)
            }
            if (k.zIndex) {
                if (this.helper.css("zIndex")) {
                    this._storedZIndex = this.helper.css("zIndex")
                }
                this.helper.css("zIndex", k.zIndex)
            }
            if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
                this.overflowOffset = this.scrollParent.offset()
            }
            this._trigger("start", h, this._uiHash());
            if (!this._preserveHelperProportions) {
                this._cacheHelperProportions()
            }
            if (!f) {
                for (g = this.containers.length - 1; g >= 0; g--) {
                    this.containers[g]._trigger("activate", h, this._uiHash(this))
                }
            }
            if (b.ui.ddmanager) {
                b.ui.ddmanager.current = this
            }
            if (b.ui.ddmanager && !k.dropBehaviour) {
                b.ui.ddmanager.prepareOffsets(this, h)
            }
            this.dragging = true;
            this.helper.addClass("ui-sortable-helper");
            this._mouseDrag(h);
            return true
        },_mouseDrag: function(j) {
            var g, h, f, l, k = this.options, e = false;
            this.position = this._generatePosition(j);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.lastPositionAbs) {
                this.lastPositionAbs = this.positionAbs
            }
            if (this.options.scroll) {
                if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
                    if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - j.pageY < k.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = e = this.scrollParent[0].scrollTop + k.scrollSpeed
                    } else {
                        if (j.pageY - this.overflowOffset.top < k.scrollSensitivity) {
                            this.scrollParent[0].scrollTop = e = this.scrollParent[0].scrollTop - k.scrollSpeed
                        }
                    }
                    if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - j.pageX < k.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = e = this.scrollParent[0].scrollLeft + k.scrollSpeed
                    } else {
                        if (j.pageX - this.overflowOffset.left < k.scrollSensitivity) {
                            this.scrollParent[0].scrollLeft = e = this.scrollParent[0].scrollLeft - k.scrollSpeed
                        }
                    }
                } else {
                    if (j.pageY - b(document).scrollTop() < k.scrollSensitivity) {
                        e = b(document).scrollTop(b(document).scrollTop() - k.scrollSpeed)
                    } else {
                        if (b(window).height() - (j.pageY - b(document).scrollTop()) < k.scrollSensitivity) {
                            e = b(document).scrollTop(b(document).scrollTop() + k.scrollSpeed)
                        }
                    }
                    if (j.pageX - b(document).scrollLeft() < k.scrollSensitivity) {
                        e = b(document).scrollLeft(b(document).scrollLeft() - k.scrollSpeed)
                    } else {
                        if (b(window).width() - (j.pageX - b(document).scrollLeft()) < k.scrollSensitivity) {
                            e = b(document).scrollLeft(b(document).scrollLeft() + k.scrollSpeed)
                        }
                    }
                }
                if (e !== false && b.ui.ddmanager && !k.dropBehaviour) {
                    b.ui.ddmanager.prepareOffsets(this, j)
                }
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis !== "y") {
                this.helper[0].style.left = this.position.left + "px"
            }
            if (!this.options.axis || this.options.axis !== "x") {
                this.helper[0].style.top = this.position.top + "px"
            }
            for (g = this.items.length - 1; g >= 0; g--) {
                h = this.items[g];
                f = h.item[0];
                l = this._intersectsWithPointer(h);
                if (!l) {
                    continue
                }
                if (h.instance !== this.currentContainer) {
                    continue
                }
                if (f !== this.currentItem[0] && this.placeholder[l === 1 ? "next" : "prev"]()[0] !== f && !b.contains(this.placeholder[0], f) && (this.options.type === "semi-dynamic" ? !b.contains(this.element[0], f) : true)) {
                    this.direction = l === 1 ? "down" : "up";
                    if (this.options.tolerance === "pointer" || this._intersectsWithSides(h)) {
                        this._rearrange(j, h)
                    } else {
                        break
                    }
                    this._trigger("change", j, this._uiHash());
                    break
                }
            }
            this._contactContainers(j);
            if (b.ui.ddmanager) {
                b.ui.ddmanager.drag(this, j)
            }
            this._trigger("sort", j, this._uiHash());
            this.lastPositionAbs = this.positionAbs;
            return false
        },_mouseStop: function(g, i) {
            if (!g) {
                return
            }
            if (b.ui.ddmanager && !this.options.dropBehaviour) {
                b.ui.ddmanager.drop(this, g)
            }
            if (this.options.revert) {
                var f = this, j = this.placeholder.offset(), e = this.options.axis, h = {};
                if (!e || e === "x") {
                    h.left = j.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)
                }
                if (!e || e === "y") {
                    h.top = j.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)
                }
                this.reverting = true;
                b(this.helper).animate(h, parseInt(this.options.revert, 10) || 500, function() {
                    f._clear(g)
                })
            } else {
                this._clear(g, i)
            }
            return false
        },cancel: function() {
            if (this.dragging) {
                this._mouseUp({target: null});
                if (this.options.helper === "original") {
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else {
                    this.currentItem.show()
                }
                for (var e = this.containers.length - 1; e >= 0; e--) {
                    this.containers[e]._trigger("deactivate", null, this._uiHash(this));
                    if (this.containers[e].containerCache.over) {
                        this.containers[e]._trigger("out", null, this._uiHash(this));
                        this.containers[e].containerCache.over = 0
                    }
                }
            }
            if (this.placeholder) {
                if (this.placeholder[0].parentNode) {
                    this.placeholder[0].parentNode.removeChild(this.placeholder[0])
                }
                if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
                    this.helper.remove()
                }
                b.extend(this, {helper: null,dragging: false,reverting: false,_noFinalSort: null});
                if (this.domPosition.prev) {
                    b(this.domPosition.prev).after(this.currentItem)
                } else {
                    b(this.domPosition.parent).prepend(this.currentItem)
                }
            }
            return this
        },serialize: function(g) {
            var e = this._getItemsAsjQuery(g && g.connected), f = [];
            g = g || {};
            b(e).each(function() {
                var h = (b(g.item || this).attr(g.attribute || "id") || "").match(g.expression || (/(.+)[\-=_](.+)/));
                if (h) {
                    f.push((g.key || h[1] + "[]") + "=" + (g.key && g.expression ? h[1] : h[2]))
                }
            });
            if (!f.length && g.key) {
                f.push(g.key + "=")
            }
            return f.join("&")
        },toArray: function(g) {
            var e = this._getItemsAsjQuery(g && g.connected), f = [];
            g = g || {};
            e.each(function() {
                f.push(b(g.item || this).attr(g.attribute || "id") || "")
            });
            return f
        },_intersectsWith: function(o) {
            var g = this.positionAbs.left, f = g + this.helperProportions.width, n = this.positionAbs.top, m = n + this.helperProportions.height, h = o.left, e = h + o.width, p = o.top, k = p + o.height, q = this.offset.click.top, j = this.offset.click.left, i = (n + q) > p && (n + q) < k && (g + j) > h && (g + j) < e;
            if (this.options.tolerance === "pointer" || this.options.forcePointerForContainers || (this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > o[this.floating ? "width" : "height"])) {
                return i
            } else {
                return (h < g + (this.helperProportions.width / 2) && f - (this.helperProportions.width / 2) < e && p < n + (this.helperProportions.height / 2) && m - (this.helperProportions.height / 2) < k)
            }
        },_intersectsWithPointer: function(g) {
            var h = (this.options.axis === "x") || a(this.positionAbs.top + this.offset.click.top, g.top, g.height), f = (this.options.axis === "y") || a(this.positionAbs.left + this.offset.click.left, g.left, g.width), j = h && f, e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection();
            if (!j) {
                return false
            }
            return this.floating ? (((i && i === "right") || e === "down") ? 2 : 1) : (e && (e === "down" ? 2 : 1))
        },_intersectsWithSides: function(h) {
            var f = a(this.positionAbs.top + this.offset.click.top, h.top + (h.height / 2), h.height), g = a(this.positionAbs.left + this.offset.click.left, h.left + (h.width / 2), h.width), e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection();
            if (this.floating && i) {
                return ((i === "right" && g) || (i === "left" && !g))
            } else {
                return e && ((e === "down" && f) || (e === "up" && !f))
            }
        },_getDragVerticalDirection: function() {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return e !== 0 && (e > 0 ? "down" : "up")
        },_getDragHorizontalDirection: function() {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return e !== 0 && (e > 0 ? "right" : "left")
        },refresh: function(e) {
            this._refreshItems(e);
            this.refreshPositions();
            return this
        },_connectWith: function() {
            var e = this.options;
            return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
        },_getItemsAsjQuery: function(l) {
            var h, g, n, m, e = [], f = [], k = this._connectWith();
            if (k && l) {
                for (h = k.length - 1; h >= 0; h--) {
                    n = b(k[h]);
                    for (g = n.length - 1; g >= 0; g--) {
                        m = b.data(n[g], this.widgetFullName);
                        if (m && m !== this && !m.options.disabled) {
                            f.push([b.isFunction(m.options.items) ? m.options.items.call(m.element) : b(m.options.items, m.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), m])
                        }
                    }
                }
            }
            f.push([b.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options: this.options,item: this.currentItem}) : b(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (h = f.length - 1; h >= 0; h--) {
                f[h][0].each(function() {
                    e.push(this)
                })
            }
            return b(e)
        },_removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = b.grep(this.items, function(g) {
                for (var f = 0; f < e.length; f++) {
                    if (e[f] === g.item[0]) {
                        return false
                    }
                }
                return true
            })
        },_refreshItems: function(e) {
            this.items = [];
            this.containers = [this];
            var k, g, p, l, o, f, r, q, m = this.items, h = [[b.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {item: this.currentItem}) : b(this.options.items, this.element), this]], n = this._connectWith();
            if (n && this.ready) {
                for (k = n.length - 1; k >= 0; k--) {
                    p = b(n[k]);
                    for (g = p.length - 1; g >= 0; g--) {
                        l = b.data(p[g], this.widgetFullName);
                        if (l && l !== this && !l.options.disabled) {
                            h.push([b.isFunction(l.options.items) ? l.options.items.call(l.element[0], e, {item: this.currentItem}) : b(l.options.items, l.element), l]);
                            this.containers.push(l)
                        }
                    }
                }
            }
            for (k = h.length - 1; k >= 0; k--) {
                o = h[k][1];
                f = h[k][0];
                for (g = 0, q = f.length; g < q; g++) {
                    r = b(f[g]);
                    r.data(this.widgetName + "-item", o);
                    m.push({item: r,instance: o,width: 0,height: 0,left: 0,top: 0})
                }
            }
        },refreshPositions: function(e) {
            if (this.offsetParent && this.helper) {
                this.offset.parent = this._getParentOffset()
            }
            var g, h, f, j;
            for (g = this.items.length - 1; g >= 0; g--) {
                h = this.items[g];
                if (h.instance !== this.currentContainer && this.currentContainer && h.item[0] !== this.currentItem[0]) {
                    continue
                }
                f = this.options.toleranceElement ? b(this.options.toleranceElement, h.item) : h.item;
                if (!e) {
                    h.width = f.outerWidth();
                    h.height = f.outerHeight()
                }
                j = f.offset();
                h.left = j.left;
                h.top = j.top
            }
            if (this.options.custom && this.options.custom.refreshContainers) {
                this.options.custom.refreshContainers.call(this)
            } else {
                for (g = this.containers.length - 1; g >= 0; g--) {
                    j = this.containers[g].element.offset();
                    this.containers[g].containerCache.left = j.left;
                    this.containers[g].containerCache.top = j.top;
                    this.containers[g].containerCache.width = this.containers[g].element.outerWidth();
                    this.containers[g].containerCache.height = this.containers[g].element.outerHeight()
                }
            }
            return this
        },_createPlaceholder: function(f) {
            f = f || this;
            var e, g = f.options;
            if (!g.placeholder || g.placeholder.constructor === String) {
                e = g.placeholder;
                g.placeholder = {element: function() {
                        var i = f.currentItem[0].nodeName.toLowerCase(), h = b(f.document[0].createElement(i)).addClass(e || f.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        if (i === "tr") {
                            h.append("<td colspan='99'>&#160;</td>")
                        } else {
                            if (i === "img") {
                                h.attr("src", f.currentItem.attr("src"))
                            }
                        }
                        if (!e) {
                            h.css("visibility", "hidden")
                        }
                        return h
                    },update: function(h, i) {
                        if (e && !g.forcePlaceholderSize) {
                            return
                        }
                        if (!i.height()) {
                            i.height(f.currentItem.innerHeight() - parseInt(f.currentItem.css("paddingTop") || 0, 10) - parseInt(f.currentItem.css("paddingBottom") || 0, 10))
                        }
                        if (!i.width()) {
                            i.width(f.currentItem.innerWidth() - parseInt(f.currentItem.css("paddingLeft") || 0, 10) - parseInt(f.currentItem.css("paddingRight") || 0, 10))
                        }
                    }}
            }
            f.placeholder = b(g.placeholder.element.call(f.element, f.currentItem));
            f.currentItem.after(f.placeholder);
            g.placeholder.update(f, f.placeholder)
        },_contactContainers: function(e) {
            var l, h, p, m, n, r, f, s, k, o, g = null, q = null;
            for (l = this.containers.length - 1; l >= 0; l--) {
                if (b.contains(this.currentItem[0], this.containers[l].element[0])) {
                    continue
                }
                if (this._intersectsWith(this.containers[l].containerCache)) {
                    if (g && b.contains(this.containers[l].element[0], g.element[0])) {
                        continue
                    }
                    g = this.containers[l];
                    q = l
                } else {
                    if (this.containers[l].containerCache.over) {
                        this.containers[l]._trigger("out", e, this._uiHash(this));
                        this.containers[l].containerCache.over = 0
                    }
                }
            }
            if (!g) {
                return
            }
            if (this.containers.length === 1) {
                if (!this.containers[q].containerCache.over) {
                    this.containers[q]._trigger("over", e, this._uiHash(this));
                    this.containers[q].containerCache.over = 1
                }
            } else {
                p = 10000;
                m = null;
                o = g.floating || c(this.currentItem);
                n = o ? "left" : "top";
                r = o ? "width" : "height";
                f = this.positionAbs[n] + this.offset.click[n];
                for (h = this.items.length - 1; h >= 0; h--) {
                    if (!b.contains(this.containers[q].element[0], this.items[h].item[0])) {
                        continue
                    }
                    if (this.items[h].item[0] === this.currentItem[0]) {
                        continue
                    }
                    if (o && !a(this.positionAbs.top + this.offset.click.top, this.items[h].top, this.items[h].height)) {
                        continue
                    }
                    s = this.items[h].item.offset()[n];
                    k = false;
                    if (Math.abs(s - f) > Math.abs(s + this.items[h][r] - f)) {
                        k = true;
                        s += this.items[h][r]
                    }
                    if (Math.abs(s - f) < p) {
                        p = Math.abs(s - f);
                        m = this.items[h];
                        this.direction = k ? "up" : "down"
                    }
                }
                if (!m && !this.options.dropOnEmpty) {
                    return
                }
                if (this.currentContainer === this.containers[q]) {
                    return
                }
                m ? this._rearrange(e, m, null, true) : this._rearrange(e, null, this.containers[q].element, true);
                this._trigger("change", e, this._uiHash());
                this.containers[q]._trigger("change", e, this._uiHash(this));
                this.currentContainer = this.containers[q];
                this.options.placeholder.update(this.currentContainer, this.placeholder);
                this.containers[q]._trigger("over", e, this._uiHash(this));
                this.containers[q].containerCache.over = 1
            }
        },_createHelper: function(f) {
            var g = this.options, e = b.isFunction(g.helper) ? b(g.helper.apply(this.element[0], [f, this.currentItem])) : (g.helper === "clone" ? this.currentItem.clone() : this.currentItem);
            if (!e.parents("body").length) {
                b(g.appendTo !== "parent" ? g.appendTo : this.currentItem[0].parentNode)[0].appendChild(e[0])
            }
            if (e[0] === this.currentItem[0]) {
                this._storedCSS = {width: this.currentItem[0].style.width,height: this.currentItem[0].style.height,position: this.currentItem.css("position"),top: this.currentItem.css("top"),left: this.currentItem.css("left")}
            }
            if (!e[0].style.width || g.forceHelperSize) {
                e.width(this.currentItem.width())
            }
            if (!e[0].style.height || g.forceHelperSize) {
                e.height(this.currentItem.height())
            }
            return e
        },_adjustOffsetFromHelper: function(e) {
            if (typeof e === "string") {
                e = e.split(" ")
            }
            if (b.isArray(e)) {
                e = {left: +e[0],top: +e[1] || 0}
            }
            if ("left" in e) {
                this.offset.click.left = e.left + this.margins.left
            }
            if ("right" in e) {
                this.offset.click.left = this.helperProportions.width - e.right + this.margins.left
            }
            if ("top" in e) {
                this.offset.click.top = e.top + this.margins.top
            }
            if ("bottom" in e) {
                this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top
            }
        },_getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0])) {
                e.left += this.scrollParent.scrollLeft();
                e.top += this.scrollParent.scrollTop()
            }
            if (this.offsetParent[0] === document.body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && b.ui.ie)) {
                e = {top: 0,left: 0}
            }
            return {top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
        },_getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var e = this.currentItem.position();
                return {top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
            } else {
                return {top: 0,left: 0}
            }
        },_cacheMargins: function() {
            this.margins = {left: (parseInt(this.currentItem.css("marginLeft"), 10) || 0),top: (parseInt(this.currentItem.css("marginTop"), 10) || 0)}
        },_cacheHelperProportions: function() {
            this.helperProportions = {width: this.helper.outerWidth(),height: this.helper.outerHeight()}
        },_setContainment: function() {
            var f, h, e, g = this.options;
            if (g.containment === "parent") {
                g.containment = this.helper[0].parentNode
            }
            if (g.containment === "document" || g.containment === "window") {
                this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, b(g.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (b(g.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
            }
            if (!(/^(document|window|parent)$/).test(g.containment)) {
                f = b(g.containment)[0];
                h = b(g.containment).offset();
                e = (b(f).css("overflow") !== "hidden");
                this.containment = [h.left + (parseInt(b(f).css("borderLeftWidth"), 10) || 0) + (parseInt(b(f).css("paddingLeft"), 10) || 0) - this.margins.left, h.top + (parseInt(b(f).css("borderTopWidth"), 10) || 0) + (parseInt(b(f).css("paddingTop"), 10) || 0) - this.margins.top, h.left + (e ? Math.max(f.scrollWidth, f.offsetWidth) : f.offsetWidth) - (parseInt(b(f).css("borderLeftWidth"), 10) || 0) - (parseInt(b(f).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, h.top + (e ? Math.max(f.scrollHeight, f.offsetHeight) : f.offsetHeight) - (parseInt(b(f).css("borderTopWidth"), 10) || 0) - (parseInt(b(f).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },_convertPositionTo: function(g, i) {
            if (!i) {
                i = this.position
            }
            var f = g === "absolute" ? 1 : -1, e = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, h = (/(html|body)/i).test(e[0].tagName);
            return {top: (i.top + this.offset.relative.top * f + this.offset.parent.top * f - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (h ? 0 : e.scrollTop())) * f)),left: (i.left + this.offset.relative.left * f + this.offset.parent.left * f - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : h ? 0 : e.scrollLeft()) * f))}
        },_generatePosition: function(h) {
            var j, i, k = this.options, g = h.pageX, f = h.pageY, e = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, l = (/(html|body)/i).test(e[0].tagName);
            if (this.cssPosition === "relative" && !(this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0])) {
                this.offset.relative = this._getRelativeOffset()
            }
            if (this.originalPosition) {
                if (this.containment) {
                    if (h.pageX - this.offset.click.left < this.containment[0]) {
                        g = this.containment[0] + this.offset.click.left
                    }
                    if (h.pageY - this.offset.click.top < this.containment[1]) {
                        f = this.containment[1] + this.offset.click.top
                    }
                    if (h.pageX - this.offset.click.left > this.containment[2]) {
                        g = this.containment[2] + this.offset.click.left
                    }
                    if (h.pageY - this.offset.click.top > this.containment[3]) {
                        f = this.containment[3] + this.offset.click.top
                    }
                }
                if (k.grid) {
                    j = this.originalPageY + Math.round((f - this.originalPageY) / k.grid[1]) * k.grid[1];
                    f = this.containment ? ((j - this.offset.click.top >= this.containment[1] && j - this.offset.click.top <= this.containment[3]) ? j : ((j - this.offset.click.top >= this.containment[1]) ? j - k.grid[1] : j + k.grid[1])) : j;
                    i = this.originalPageX + Math.round((g - this.originalPageX) / k.grid[0]) * k.grid[0];
                    g = this.containment ? ((i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2]) ? i : ((i - this.offset.click.left >= this.containment[0]) ? i - k.grid[0] : i + k.grid[0])) : i
                }
            }
            return {top: (f - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (l ? 0 : e.scrollTop())))),left: (g - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : l ? 0 : e.scrollLeft())))}
        },_rearrange: function(j, h, f, g) {
            f ? f[0].appendChild(this.placeholder[0]) : h.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? h.item[0] : h.item[0].nextSibling));
            this.counter = this.counter ? ++this.counter : 1;
            var e = this.counter;
            this._delay(function() {
                if (e === this.counter) {
                    this.refreshPositions(!g)
                }
            })
        },_clear: function(f, g) {
            this.reverting = false;
            var e, h = [];
            if (!this._noFinalSort && this.currentItem.parent().length) {
                this.placeholder.before(this.currentItem)
            }
            this._noFinalSort = null;
            if (this.helper[0] === this.currentItem[0]) {
                for (e in this._storedCSS) {
                    if (this._storedCSS[e] === "auto" || this._storedCSS[e] === "static") {
                        this._storedCSS[e] = ""
                    }
                }
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else {
                this.currentItem.show()
            }
            if (this.fromOutside && !g) {
                h.push(function(i) {
                    this._trigger("receive", i, this._uiHash(this.fromOutside))
                })
            }
            if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !g) {
                h.push(function(i) {
                    this._trigger("update", i, this._uiHash())
                })
            }
            if (this !== this.currentContainer) {
                if (!g) {
                    h.push(function(i) {
                        this._trigger("remove", i, this._uiHash())
                    });
                    h.push((function(i) {
                        return function(j) {
                            i._trigger("receive", j, this._uiHash(this))
                        }
                    }).call(this, this.currentContainer));
                    h.push((function(i) {
                        return function(j) {
                            i._trigger("update", j, this._uiHash(this))
                        }
                    }).call(this, this.currentContainer))
                }
            }
            for (e = this.containers.length - 1; e >= 0; e--) {
                if (!g) {
                    h.push((function(i) {
                        return function(j) {
                            i._trigger("deactivate", j, this._uiHash(this))
                        }
                    }).call(this, this.containers[e]))
                }
                if (this.containers[e].containerCache.over) {
                    h.push((function(i) {
                        return function(j) {
                            i._trigger("out", j, this._uiHash(this))
                        }
                    }).call(this, this.containers[e]));
                    this.containers[e].containerCache.over = 0
                }
            }
            if (this.storedCursor) {
                this.document.find("body").css("cursor", this.storedCursor);
                this.storedStylesheet.remove()
            }
            if (this._storedOpacity) {
                this.helper.css("opacity", this._storedOpacity)
            }
            if (this._storedZIndex) {
                this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex)
            }
            this.dragging = false;
            if (this.cancelHelperRemoval) {
                if (!g) {
                    this._trigger("beforeStop", f, this._uiHash());
                    for (e = 0; e < h.length; e++) {
                        h[e].call(this, f)
                    }
                    this._trigger("stop", f, this._uiHash())
                }
                this.fromOutside = false;
                return false
            }
            if (!g) {
                this._trigger("beforeStop", f, this._uiHash())
            }
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            if (this.helper[0] !== this.currentItem[0]) {
                this.helper.remove()
            }
            this.helper = null;
            if (!g) {
                for (e = 0; e < h.length; e++) {
                    h[e].call(this, f)
                }
                this._trigger("stop", f, this._uiHash())
            }
            this.fromOutside = false;
            return true
        },_trigger: function() {
            if (b.Widget.prototype._trigger.apply(this, arguments) === false) {
                this.cancel()
            }
        },_uiHash: function(e) {
            var f = e || this;
            return {helper: f.helper,placeholder: f.placeholder || b([]),position: f.position,originalPosition: f.originalPosition,offset: f.positionAbs,item: f.currentItem,sender: e ? e.element : null}
        }})
})(jQuery);
(function(d, e) {
    var b = 0, c = {}, a = {};
    c.height = c.paddingTop = c.paddingBottom = c.borderTopWidth = c.borderBottomWidth = "hide";
    a.height = a.paddingTop = a.paddingBottom = a.borderTopWidth = a.borderBottomWidth = "show";
    d.widget("ui.accordion", {version: "1.10.2",options: {active: 0,animate: {},collapsible: false,event: "click",header: "> li > :first-child,> :not(li):even",heightStyle: "auto",icons: {activeHeader: "ui-icon-triangle-1-s",header: "ui-icon-triangle-1-e"},activate: null,beforeActivate: null},_create: function() {
            var f = this.options;
            this.prevShow = this.prevHide = d();
            this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
            if (!f.collapsible && (f.active === false || f.active == null)) {
                f.active = 0
            }
            this._processPanels();
            if (f.active < 0) {
                f.active += this.headers.length
            }
            this._refresh()
        },_getCreateEventData: function() {
            return {header: this.active,panel: !this.active.length ? d() : this.active.next(),content: !this.active.length ? d() : this.active.next()}
        },_createIcons: function() {
            var f = this.options.icons;
            if (f) {
                d("<span>").addClass("ui-accordion-header-icon ui-icon " + f.header).prependTo(this.headers);
                this.active.children(".ui-accordion-header-icon").removeClass(f.header).addClass(f.activeHeader);
                this.headers.addClass("ui-accordion-icons")
            }
        },_destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },_destroy: function() {
            var f;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
            this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                if (/^ui-accordion/.test(this.id)) {
                    this.removeAttribute("id")
                }
            });
            this._destroyIcons();
            f = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                if (/^ui-accordion/.test(this.id)) {
                    this.removeAttribute("id")
                }
            });
            if (this.options.heightStyle !== "content") {
                f.css("height", "")
            }
        },_setOption: function(f, g) {
            if (f === "active") {
                this._activate(g);
                return
            }
            if (f === "event") {
                if (this.options.event) {
                    this._off(this.headers, this.options.event)
                }
                this._setupEvents(g)
            }
            this._super(f, g);
            if (f === "collapsible" && !g && this.options.active === false) {
                this._activate(0)
            }
            if (f === "icons") {
                this._destroyIcons();
                if (g) {
                    this._createIcons()
                }
            }
            if (f === "disabled") {
                this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!g)
            }
        },_keydown: function(i) {
            if (i.altKey || i.ctrlKey) {
                return
            }
            var j = d.ui.keyCode, h = this.headers.length, f = this.headers.index(i.target), g = false;
            switch (i.keyCode) {
                case j.RIGHT:
                case j.DOWN:
                    g = this.headers[(f + 1) % h];
                    break;
                case j.LEFT:
                case j.UP:
                    g = this.headers[(f - 1 + h) % h];
                    break;
                case j.SPACE:
                case j.ENTER:
                    this._eventHandler(i);
                    break;
                case j.HOME:
                    g = this.headers[0];
                    break;
                case j.END:
                    g = this.headers[h - 1];
                    break
            }
            if (g) {
                d(i.target).attr("tabIndex", -1);
                d(g).attr("tabIndex", 0);
                g.focus();
                i.preventDefault()
            }
        },_panelKeyDown: function(f) {
            if (f.keyCode === d.ui.keyCode.UP && f.ctrlKey) {
                d(f.currentTarget).prev().focus()
            }
        },refresh: function() {
            var f = this.options;
            this._processPanels();
            if ((f.active === false && f.collapsible === true) || !this.headers.length) {
                f.active = false;
                this.active = d()
            }
            if (f.active === false) {
                this._activate(0)
            } else {
                if (this.active.length && !d.contains(this.element[0], this.active[0])) {
                    if (this.headers.length === this.headers.find(".ui-state-disabled").length) {
                        f.active = false;
                        this.active = d()
                    } else {
                        this._activate(Math.max(0, f.active - 1))
                    }
                } else {
                    f.active = this.headers.index(this.active)
                }
            }
            this._destroyIcons();
            this._refresh()
        },_processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
            this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },_refresh: function() {
            var j, h = this.options, g = h.heightStyle, i = this.element.parent(), f = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++b);
            this.active = this._findActive(h.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
            this.active.next().addClass("ui-accordion-content-active").show();
            this.headers.attr("role", "tab").each(function(n) {
                var o = d(this), m = o.attr("id"), k = o.next(), l = k.attr("id");
                if (!m) {
                    m = f + "-header-" + n;
                    o.attr("id", m)
                }
                if (!l) {
                    l = f + "-panel-" + n;
                    k.attr("id", l)
                }
                o.attr("aria-controls", l);
                k.attr("aria-labelledby", m)
            }).next().attr("role", "tabpanel");
            this.headers.not(this.active).attr({"aria-selected": "false",tabIndex: -1}).next().attr({"aria-expanded": "false","aria-hidden": "true"}).hide();
            if (!this.active.length) {
                this.headers.eq(0).attr("tabIndex", 0)
            } else {
                this.active.attr({"aria-selected": "true",tabIndex: 0}).next().attr({"aria-expanded": "true","aria-hidden": "false"})
            }
            this._createIcons();
            this._setupEvents(h.event);
            if (g === "fill") {
                j = i.height();
                this.element.siblings(":visible").each(function() {
                    var l = d(this), k = l.css("position");
                    if (k === "absolute" || k === "fixed") {
                        return
                    }
                    j -= l.outerHeight(true)
                });
                this.headers.each(function() {
                    j -= d(this).outerHeight(true)
                });
                this.headers.next().each(function() {
                    d(this).height(Math.max(0, j - d(this).innerHeight() + d(this).height()))
                }).css("overflow", "auto")
            } else {
                if (g === "auto") {
                    j = 0;
                    this.headers.next().each(function() {
                        j = Math.max(j, d(this).css("height", "").height())
                    }).height(j)
                }
            }
        },_activate: function(f) {
            var g = this._findActive(f)[0];
            if (g === this.active[0]) {
                return
            }
            g = g || this.active[0];
            this._eventHandler({target: g,currentTarget: g,preventDefault: d.noop})
        },_findActive: function(f) {
            return typeof f === "number" ? this.headers.eq(f) : d()
        },_setupEvents: function(g) {
            var f = {keydown: "_keydown"};
            if (g) {
                d.each(g.split(" "), function(i, h) {
                    f[h] = "_eventHandler"
                })
            }
            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, f);
            this._on(this.headers.next(), {keydown: "_panelKeyDown"});
            this._hoverable(this.headers);
            this._focusable(this.headers)
        },_eventHandler: function(f) {
            var n = this.options, i = this.active, j = d(f.currentTarget), l = j[0] === i[0], g = l && n.collapsible, h = g ? d() : j.next(), k = i.next(), m = {oldHeader: i,oldPanel: k,newHeader: g ? d() : j,newPanel: h};
            f.preventDefault();
            if ((l && !n.collapsible) || (this._trigger("beforeActivate", f, m) === false)) {
                return
            }
            n.active = g ? false : this.headers.index(j);
            this.active = l ? d() : j;
            this._toggle(m);
            i.removeClass("ui-accordion-header-active ui-state-active");
            if (n.icons) {
                i.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header)
            }
            if (!l) {
                j.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
                if (n.icons) {
                    j.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader)
                }
                j.next().addClass("ui-accordion-content-active")
            }
        },_toggle: function(h) {
            var f = h.newPanel, g = this.prevShow.length ? this.prevShow : h.oldPanel;
            this.prevShow.add(this.prevHide).stop(true, true);
            this.prevShow = f;
            this.prevHide = g;
            if (this.options.animate) {
                this._animate(f, g, h)
            } else {
                g.hide();
                f.show();
                this._toggleComplete(h)
            }
            g.attr({"aria-expanded": "false","aria-hidden": "true"});
            g.prev().attr("aria-selected", "false");
            if (f.length && g.length) {
                g.prev().attr("tabIndex", -1)
            } else {
                if (f.length) {
                    this.headers.filter(function() {
                        return d(this).attr("tabIndex") === 0
                    }).attr("tabIndex", -1)
                }
            }
            f.attr({"aria-expanded": "true","aria-hidden": "false"}).prev().attr({"aria-selected": "true",tabIndex: 0})
        },_animate: function(f, n, j) {
            var m, l, i, k = this, o = 0, p = f.length && (!n.length || (f.index() < n.index())), h = this.options.animate || {}, q = p && h.down || h, g = function() {
                k._toggleComplete(j)
            };
            if (typeof q === "number") {
                i = q
            }
            if (typeof q === "string") {
                l = q
            }
            l = l || q.easing || h.easing;
            i = i || q.duration || h.duration;
            if (!n.length) {
                return f.animate(a, i, l, g)
            }
            if (!f.length) {
                return n.animate(c, i, l, g)
            }
            m = f.show().outerHeight();
            n.animate(c, {duration: i,easing: l,step: function(r, s) {
                    s.now = Math.round(r)
                }});
            f.hide().animate(a, {duration: i,easing: l,complete: g,step: function(r, s) {
                    s.now = Math.round(r);
                    if (s.prop !== "height") {
                        o += s.now
                    } else {
                        if (k.options.heightStyle !== "content") {
                            s.now = Math.round(m - n.outerHeight() - o);
                            o = 0
                        }
                    }
                }})
        },_toggleComplete: function(g) {
            var f = g.oldPanel;
            f.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
            if (f.length) {
                f.parent()[0].className = f.parent()[0].className
            }
            this._trigger("activate", null, g)
        }})
})(jQuery);
(function(a, b) {
    var c = 0;
    a.widget("ui.autocomplete", {version: "1.10.2",defaultElement: "<input>",options: {appendTo: null,autoFocus: false,delay: 300,minLength: 1,position: {my: "left top",at: "left bottom",collision: "none"},source: null,change: null,close: null,focus: null,open: null,response: null,search: null,select: null},pending: 0,_create: function() {
            var f, d, g, i = this.element[0].nodeName.toLowerCase(), h = i === "textarea", e = i === "input";
            this.isMultiLine = h ? true : e ? false : this.element.prop("isContentEditable");
            this.valueMethod = this.element[h || e ? "val" : "text"];
            this.isNewMenu = true;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
            this._on(this.element, {keydown: function(j) {
                    if (this.element.prop("readOnly")) {
                        f = true;
                        g = true;
                        d = true;
                        return
                    }
                    f = false;
                    g = false;
                    d = false;
                    var k = a.ui.keyCode;
                    switch (j.keyCode) {
                        case k.PAGE_UP:
                            f = true;
                            this._move("previousPage", j);
                            break;
                        case k.PAGE_DOWN:
                            f = true;
                            this._move("nextPage", j);
                            break;
                        case k.UP:
                            f = true;
                            this._keyEvent("previous", j);
                            break;
                        case k.DOWN:
                            f = true;
                            this._keyEvent("next", j);
                            break;
                        case k.ENTER:
                        case k.NUMPAD_ENTER:
                            if (this.menu.active) {
                                f = true;
                                j.preventDefault();
                                this.menu.select(j)
                            }
                            break;
                        case k.TAB:
                            if (this.menu.active) {
                                this.menu.select(j)
                            }
                            break;
                        case k.ESCAPE:
                            if (this.menu.element.is(":visible")) {
                                this._value(this.term);
                                this.close(j);
                                j.preventDefault()
                            }
                            break;
                        default:
                            d = true;
                            this._searchTimeout(j);
                            break
                    }
                },keypress: function(j) {
                    if (f) {
                        f = false;
                        j.preventDefault();
                        return
                    }
                    if (d) {
                        return
                    }
                    var k = a.ui.keyCode;
                    switch (j.keyCode) {
                        case k.PAGE_UP:
                            this._move("previousPage", j);
                            break;
                        case k.PAGE_DOWN:
                            this._move("nextPage", j);
                            break;
                        case k.UP:
                            this._keyEvent("previous", j);
                            break;
                        case k.DOWN:
                            this._keyEvent("next", j);
                            break
                    }
                },input: function(j) {
                    if (g) {
                        g = false;
                        j.preventDefault();
                        return
                    }
                    this._searchTimeout(j)
                },focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value()
                },blur: function(j) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    clearTimeout(this.searching);
                    this.close(j);
                    this._change(j)
                }});
            this._initSource();
            this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({input: a(),role: null}).hide().data("ui-menu");
            this._on(this.menu.element, {mousedown: function(j) {
                    j.preventDefault();
                    this.cancelBlur = true;
                    this._delay(function() {
                        delete this.cancelBlur
                    });
                    var k = this.menu.element[0];
                    if (!a(j.target).closest(".ui-menu-item").length) {
                        this._delay(function() {
                            var l = this;
                            this.document.one("mousedown", function(m) {
                                if (m.target !== l.element[0] && m.target !== k && !a.contains(k, m.target)) {
                                    l.close()
                                }
                            })
                        })
                    }
                },menufocus: function(k, l) {
                    if (this.isNewMenu) {
                        this.isNewMenu = false;
                        if (k.originalEvent && /^mouse/.test(k.originalEvent.type)) {
                            this.menu.blur();
                            this.document.one("mousemove", function() {
                                a(k.target).trigger(k.originalEvent)
                            });
                            return
                        }
                    }
                    var j = l.item.data("ui-autocomplete-item");
                    if (false !== this._trigger("focus", k, {item: j})) {
                        if (k.originalEvent && /^key/.test(k.originalEvent.type)) {
                            this._value(j.value)
                        }
                    } else {
                        this.liveRegion.text(j.value)
                    }
                },menuselect: function(l, m) {
                    var k = m.item.data("ui-autocomplete-item"), j = this.previous;
                    if (this.element[0] !== this.document[0].activeElement) {
                        this.element.focus();
                        this.previous = j;
                        this._delay(function() {
                            this.previous = j;
                            this.selectedItem = k
                        })
                    }
                    if (false !== this._trigger("select", l, {item: k})) {
                        this._value(k.value)
                    }
                    this.term = this._value();
                    this.close(l);
                    this.selectedItem = k
                }});
            this.liveRegion = a("<span>", {role: "status","aria-live": "polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element);
            this._on(this.window, {beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }})
        },_destroy: function() {
            clearTimeout(this.searching);
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove()
        },_setOption: function(d, e) {
            this._super(d, e);
            if (d === "source") {
                this._initSource()
            }
            if (d === "appendTo") {
                this.menu.element.appendTo(this._appendTo())
            }
            if (d === "disabled" && e && this.xhr) {
                this.xhr.abort()
            }
        },_appendTo: function() {
            var d = this.options.appendTo;
            if (d) {
                d = d.jquery || d.nodeType ? a(d) : this.document.find(d).eq(0)
            }
            if (!d) {
                d = this.element.closest(".ui-front")
            }
            if (!d.length) {
                d = this.document[0].body
            }
            return d
        },_initSource: function() {
            var f, d, e = this;
            if (a.isArray(this.options.source)) {
                f = this.options.source;
                this.source = function(h, g) {
                    g(a.ui.autocomplete.filter(f, h.term))
                }
            } else {
                if (typeof this.options.source === "string") {
                    d = this.options.source;
                    this.source = function(h, g) {
                        if (e.xhr) {
                            e.xhr.abort()
                        }
                        e.xhr = a.ajax({url: d,data: h,dataType: "json",success: function(i) {
                                g(i)
                            },error: function() {
                                g([])
                            }})
                    }
                } else {
                    this.source = this.options.source
                }
            }
        },_searchTimeout: function(d) {
            clearTimeout(this.searching);
            this.searching = this._delay(function() {
                if (this.term !== this._value()) {
                    this.selectedItem = null;
                    this.search(null, d)
                }
            }, this.options.delay)
        },search: function(e, d) {
            e = e != null ? e : this._value();
            this.term = this._value();
            if (e.length < this.options.minLength) {
                return this.close(d)
            }
            if (this._trigger("search", d) === false) {
                return
            }
            return this._search(e)
        },_search: function(d) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.cancelSearch = false;
            this.source({term: d}, this._response())
        },_response: function() {
            var e = this, d = ++c;
            return function(f) {
                if (d === c) {
                    e.__response(f)
                }
                e.pending--;
                if (!e.pending) {
                    e.element.removeClass("ui-autocomplete-loading")
                }
            }
        },__response: function(d) {
            if (d) {
                d = this._normalize(d)
            }
            this._trigger("response", null, {content: d});
            if (!this.options.disabled && d && d.length && !this.cancelSearch) {
                this._suggest(d);
                this._trigger("open")
            } else {
                this._close()
            }
        },close: function(d) {
            this.cancelSearch = true;
            this._close(d)
        },_close: function(d) {
            if (this.menu.element.is(":visible")) {
                this.menu.element.hide();
                this.menu.blur();
                this.isNewMenu = true;
                this._trigger("close", d)
            }
        },_change: function(d) {
            if (this.previous !== this._value()) {
                this._trigger("change", d, {item: this.selectedItem})
            }
        },_normalize: function(d) {
            if (d.length && d[0].label && d[0].value) {
                return d
            }
            return a.map(d, function(e) {
                if (typeof e === "string") {
                    return {label: e,value: e}
                }
                return a.extend({label: e.label || e.value,value: e.value || e.label}, e)
            })
        },_suggest: function(d) {
            var e = this.menu.element.empty();
            this._renderMenu(e, d);
            this.isNewMenu = true;
            this.menu.refresh();
            e.show();
            this._resizeMenu();
            e.position(a.extend({of: this.element}, this.options.position));
            if (this.options.autoFocus) {
                this.menu.next()
            }
        },_resizeMenu: function() {
            var d = this.menu.element;
            d.outerWidth(Math.max(d.width("").outerWidth() + 1, this.element.outerWidth()))
        },_renderMenu: function(e, d) {
            var f = this;
            a.each(d, function(g, h) {
                f._renderItemData(e, h)
            })
        },_renderItemData: function(d, e) {
            return this._renderItem(d, e).data("ui-autocomplete-item", e)
        },_renderItem: function(d, e) {
            return a("<li>").append(a("<a>").text(e.label)).appendTo(d)
        },_move: function(e, d) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, d);
                return
            }
            if (this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e)) {
                this._value(this.term);
                this.menu.blur();
                return
            }
            this.menu[e](d)
        },widget: function() {
            return this.menu.element
        },_value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },_keyEvent: function(e, d) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) {
                this._move(e, d);
                d.preventDefault()
            }
        }});
    a.extend(a.ui.autocomplete, {escapeRegex: function(d) {
            return d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },filter: function(f, d) {
            var e = new RegExp(a.ui.autocomplete.escapeRegex(d), "i");
            return a.grep(f, function(g) {
                return e.test(g.label || g.value || g)
            })
        }});
    a.widget("ui.autocomplete", a.ui.autocomplete, {options: {messages: {noResults: "No search results.",results: function(d) {
                    return d + (d > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }}},__response: function(e) {
            var d;
            this._superApply(arguments);
            if (this.options.disabled || this.cancelSearch) {
                return
            }
            if (e && e.length) {
                d = this.options.messages.results(e.length)
            } else {
                d = this.options.messages.noResults
            }
            this.liveRegion.text(d)
        }})
}(jQuery));
(function(f, b) {
    var k, e, a, h, i = "ui-button ui-widget ui-state-default ui-corner-all", c = "ui-state-hover ui-state-active ", g = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", j = function() {
        var l = f(this).find(":ui-button");
        setTimeout(function() {
            l.button("refresh")
        }, 1)
    }, d = function(m) {
        var l = m.name, n = m.form, o = f([]);
        if (l) {
            l = l.replace(/'/g, "\\'");
            if (n) {
                o = f(n).find("[name='" + l + "']")
            } else {
                o = f("[name='" + l + "']", m.ownerDocument).filter(function() {
                    return !this.form
                })
            }
        }
        return o
    };
    f.widget("ui.button", {version: "1.10.2",defaultElement: "<button>",options: {disabled: null,text: true,label: null,icons: {primary: null,secondary: null}},_create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, j);
            if (typeof this.options.disabled !== "boolean") {
                this.options.disabled = !!this.element.prop("disabled")
            } else {
                this.element.prop("disabled", this.options.disabled)
            }
            this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr("title");
            var o = this, m = this.options, p = this.type === "checkbox" || this.type === "radio", n = !p ? "ui-state-active" : "", l = "ui-state-focus";
            if (m.label === null) {
                m.label = (this.type === "input" ? this.buttonElement.val() : this.buttonElement.html())
            }
            this._hoverable(this.buttonElement);
            this.buttonElement.addClass(i).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                if (m.disabled) {
                    return
                }
                if (this === k) {
                    f(this).addClass("ui-state-active")
                }
            }).bind("mouseleave" + this.eventNamespace, function() {
                if (m.disabled) {
                    return
                }
                f(this).removeClass(n)
            }).bind("click" + this.eventNamespace, function(q) {
                if (m.disabled) {
                    q.preventDefault();
                    q.stopImmediatePropagation()
                }
            });
            this.element.bind("focus" + this.eventNamespace, function() {
                o.buttonElement.addClass(l)
            }).bind("blur" + this.eventNamespace, function() {
                o.buttonElement.removeClass(l)
            });
            if (p) {
                this.element.bind("change" + this.eventNamespace, function() {
                    if (h) {
                        return
                    }
                    o.refresh()
                });
                this.buttonElement.bind("mousedown" + this.eventNamespace, function(q) {
                    if (m.disabled) {
                        return
                    }
                    h = false;
                    e = q.pageX;
                    a = q.pageY
                }).bind("mouseup" + this.eventNamespace, function(q) {
                    if (m.disabled) {
                        return
                    }
                    if (e !== q.pageX || a !== q.pageY) {
                        h = true
                    }
                })
            }
            if (this.type === "checkbox") {
                this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (m.disabled || h) {
                        return false
                    }
                })
            } else {
                if (this.type === "radio") {
                    this.buttonElement.bind("click" + this.eventNamespace, function() {
                        if (m.disabled || h) {
                            return false
                        }
                        f(this).addClass("ui-state-active");
                        o.buttonElement.attr("aria-pressed", "true");
                        var q = o.element[0];
                        d(q).not(q).map(function() {
                            return f(this).button("widget")[0]
                        }).removeClass("ui-state-active").attr("aria-pressed", "false")
                    })
                } else {
                    this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                        if (m.disabled) {
                            return false
                        }
                        f(this).addClass("ui-state-active");
                        k = this;
                        o.document.one("mouseup", function() {
                            k = null
                        })
                    }).bind("mouseup" + this.eventNamespace, function() {
                        if (m.disabled) {
                            return false
                        }
                        f(this).removeClass("ui-state-active")
                    }).bind("keydown" + this.eventNamespace, function(q) {
                        if (m.disabled) {
                            return false
                        }
                        if (q.keyCode === f.ui.keyCode.SPACE || q.keyCode === f.ui.keyCode.ENTER) {
                            f(this).addClass("ui-state-active")
                        }
                    }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                        f(this).removeClass("ui-state-active")
                    });
                    if (this.buttonElement.is("a")) {
                        this.buttonElement.keyup(function(q) {
                            if (q.keyCode === f.ui.keyCode.SPACE) {
                                f(this).click()
                            }
                        })
                    }
                }
            }
            this._setOption("disabled", m.disabled);
            this._resetButton()
        },_determineButtonType: function() {
            var l, n, m;
            if (this.element.is("[type=checkbox]")) {
                this.type = "checkbox"
            } else {
                if (this.element.is("[type=radio]")) {
                    this.type = "radio"
                } else {
                    if (this.element.is("input")) {
                        this.type = "input"
                    } else {
                        this.type = "button"
                    }
                }
            }
            if (this.type === "checkbox" || this.type === "radio") {
                l = this.element.parents().last();
                n = "label[for='" + this.element.attr("id") + "']";
                this.buttonElement = l.find(n);
                if (!this.buttonElement.length) {
                    l = l.length ? l.siblings() : this.element.siblings();
                    this.buttonElement = l.filter(n);
                    if (!this.buttonElement.length) {
                        this.buttonElement = l.find(n)
                    }
                }
                this.element.addClass("ui-helper-hidden-accessible");
                m = this.element.is(":checked");
                if (m) {
                    this.buttonElement.addClass("ui-state-active")
                }
                this.buttonElement.prop("aria-pressed", m)
            } else {
                this.buttonElement = this.element
            }
        },widget: function() {
            return this.buttonElement
        },_destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible");
            this.buttonElement.removeClass(i + " " + c + " " + g).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            if (!this.hasTitle) {
                this.buttonElement.removeAttr("title")
            }
        },_setOption: function(l, m) {
            this._super(l, m);
            if (l === "disabled") {
                if (m) {
                    this.element.prop("disabled", true)
                } else {
                    this.element.prop("disabled", false)
                }
                return
            }
            this._resetButton()
        },refresh: function() {
            var l = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            if (l !== this.options.disabled) {
                this._setOption("disabled", l)
            }
            if (this.type === "radio") {
                d(this.element[0]).each(function() {
                    if (f(this).is(":checked")) {
                        f(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true")
                    } else {
                        f(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                    }
                })
            } else {
                if (this.type === "checkbox") {
                    if (this.element.is(":checked")) {
                        this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true")
                    } else {
                        this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false")
                    }
                }
            }
        },_resetButton: function() {
            if (this.type === "input") {
                if (this.options.label) {
                    this.element.val(this.options.label)
                }
                return
            }
            var p = this.buttonElement.removeClass(g), n = f("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(p.empty()).text(), m = this.options.icons, l = m.primary && m.secondary, o = [];
            if (m.primary || m.secondary) {
                if (this.options.text) {
                    o.push("ui-button-text-icon" + (l ? "s" : (m.primary ? "-primary" : "-secondary")))
                }
                if (m.primary) {
                    p.prepend("<span class='ui-button-icon-primary ui-icon " + m.primary + "'></span>")
                }
                if (m.secondary) {
                    p.append("<span class='ui-button-icon-secondary ui-icon " + m.secondary + "'></span>")
                }
                if (!this.options.text) {
                    o.push(l ? "ui-button-icons-only" : "ui-button-icon-only");
                    if (!this.hasTitle) {
                        p.attr("title", f.trim(n))
                    }
                }
            } else {
                o.push("ui-button-text-only")
            }
            p.addClass(o.join(" "))
        }});
    f.widget("ui.buttonset", {version: "1.10.2",options: {items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create: function() {
            this.element.addClass("ui-buttonset")
        },_init: function() {
            this.refresh()
        },_setOption: function(l, m) {
            if (l === "disabled") {
                this.buttons.button("option", l, m)
            }
            this._super(l, m)
        },refresh: function() {
            var l = this.element.css("direction") === "rtl";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return f(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(l ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(l ? "ui-corner-left" : "ui-corner-right").end().end()
        },_destroy: function() {
            this.element.removeClass("ui-buttonset");
            this.buttons.map(function() {
                return f(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }})
}(jQuery));
(function(f, h) {
    f.extend(f.ui, {datepicker: {version: "1.10.2"}});
    var g = "datepicker", e = new Date().getTime(), c;
    function b() {
        this._curInst = null;
        this._keyEvent = false;
        this._disabledInputs = [];
        this._datepickerShowing = false;
        this._inDialog = false;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {closeText: "Done",prevText: "Prev",nextText: "Next",currentText: "Today",monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],weekHeader: "Wk",dateFormat: "mm/dd/yy",firstDay: 0,isRTL: false,showMonthAfterYear: false,yearSuffix: ""};
        this._defaults = {showOn: "focus",showAnim: "fadeIn",showOptions: {},defaultDate: null,appendText: "",buttonText: "...",buttonImage: "",buttonImageOnly: false,hideIfNoPrevNext: false,navigationAsDateFormat: false,gotoCurrent: false,changeMonth: false,changeYear: false,yearRange: "c-10:c+10",showOtherMonths: false,selectOtherMonths: false,showWeek: false,calculateWeek: this.iso8601Week,shortYearCutoff: "+10",minDate: null,maxDate: null,duration: "fast",beforeShowDay: null,beforeShow: null,onSelect: null,onChangeMonthYear: null,onClose: null,numberOfMonths: 1,showCurrentAtPos: 0,stepMonths: 1,stepBigMonths: 12,altField: "",altFormat: "",constrainInput: true,showButtonPanel: false,autoSize: false,disabled: false};
        f.extend(this._defaults, this.regional[""]);
        this.dpDiv = d(f("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    f.extend(b.prototype, {markerClassName: "hasDatepicker",maxRows: 4,_widgetDatepicker: function() {
            return this.dpDiv
        },setDefaults: function(i) {
            a(this._defaults, i || {});
            return this
        },_attachDatepicker: function(l, i) {
            var m, k, j;
            m = l.nodeName.toLowerCase();
            k = (m === "div" || m === "span");
            if (!l.id) {
                this.uuid += 1;
                l.id = "dp" + this.uuid
            }
            j = this._newInst(f(l), k);
            j.settings = f.extend({}, i || {});
            if (m === "input") {
                this._connectDatepicker(l, j)
            } else {
                if (k) {
                    this._inlineDatepicker(l, j)
                }
            }
        },_newInst: function(j, i) {
            var k = j[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {id: k,input: j,selectedDay: 0,selectedMonth: 0,selectedYear: 0,drawMonth: 0,drawYear: 0,inline: i,dpDiv: (!i ? this.dpDiv : d(f("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))}
        },_connectDatepicker: function(k, j) {
            var i = f(k);
            j.append = f([]);
            j.trigger = f([]);
            if (i.hasClass(this.markerClassName)) {
                return
            }
            this._attachments(i, j);
            i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
            this._autoSize(j);
            f.data(k, g, j);
            if (j.settings.disabled) {
                this._disableDatepicker(k)
            }
        },_attachments: function(k, n) {
            var j, m, i, o = this._get(n, "appendText"), l = this._get(n, "isRTL");
            if (n.append) {
                n.append.remove()
            }
            if (o) {
                n.append = f("<span class='" + this._appendClass + "'>" + o + "</span>");
                k[l ? "before" : "after"](n.append)
            }
            k.unbind("focus", this._showDatepicker);
            if (n.trigger) {
                n.trigger.remove()
            }
            j = this._get(n, "showOn");
            if (j === "focus" || j === "both") {
                k.focus(this._showDatepicker)
            }
            if (j === "button" || j === "both") {
                m = this._get(n, "buttonText");
                i = this._get(n, "buttonImage");
                n.trigger = f(this._get(n, "buttonImageOnly") ? f("<img/>").addClass(this._triggerClass).attr({src: i,alt: m,title: m}) : f("<button type='button'></button>").addClass(this._triggerClass).html(!i ? m : f("<img/>").attr({src: i,alt: m,title: m})));
                k[l ? "before" : "after"](n.trigger);
                n.trigger.click(function() {
                    if (f.datepicker._datepickerShowing && f.datepicker._lastInput === k[0]) {
                        f.datepicker._hideDatepicker()
                    } else {
                        if (f.datepicker._datepickerShowing && f.datepicker._lastInput !== k[0]) {
                            f.datepicker._hideDatepicker();
                            f.datepicker._showDatepicker(k[0])
                        } else {
                            f.datepicker._showDatepicker(k[0])
                        }
                    }
                    return false
                })
            }
        },_autoSize: function(p) {
            if (this._get(p, "autoSize") && !p.inline) {
                var m, k, l, o, n = new Date(2009, 12 - 1, 20), j = this._get(p, "dateFormat");
                if (j.match(/[DM]/)) {
                    m = function(i) {
                        k = 0;
                        l = 0;
                        for (o = 0; o < i.length; o++) {
                            if (i[o].length > k) {
                                k = i[o].length;
                                l = o
                            }
                        }
                        return l
                    };
                    n.setMonth(m(this._get(p, (j.match(/MM/) ? "monthNames" : "monthNamesShort"))));
                    n.setDate(m(this._get(p, (j.match(/DD/) ? "dayNames" : "dayNamesShort"))) + 20 - n.getDay())
                }
                p.input.attr("size", this._formatDate(p, n).length)
            }
        },_inlineDatepicker: function(j, i) {
            var k = f(j);
            if (k.hasClass(this.markerClassName)) {
                return
            }
            k.addClass(this.markerClassName).append(i.dpDiv);
            f.data(j, g, i);
            this._setDate(i, this._getDefaultDate(i), true);
            this._updateDatepicker(i);
            this._updateAlternate(i);
            if (i.settings.disabled) {
                this._disableDatepicker(j)
            }
            i.dpDiv.css("display", "block")
        },_dialogDatepicker: function(p, j, n, k, o) {
            var i, s, m, r, q, l = this._dialogInst;
            if (!l) {
                this.uuid += 1;
                i = "dp" + this.uuid;
                this._dialogInput = f("<input type='text' id='" + i + "' style='position: absolute; top: -100px; width: 0px;'/>");
                this._dialogInput.keydown(this._doKeyDown);
                f("body").append(this._dialogInput);
                l = this._dialogInst = this._newInst(this._dialogInput, false);
                l.settings = {};
                f.data(this._dialogInput[0], g, l)
            }
            a(l.settings, k || {});
            j = (j && j.constructor === Date ? this._formatDate(l, j) : j);
            this._dialogInput.val(j);
            this._pos = (o ? (o.length ? o : [o.pageX, o.pageY]) : null);
            if (!this._pos) {
                s = document.documentElement.clientWidth;
                m = document.documentElement.clientHeight;
                r = document.documentElement.scrollLeft || document.body.scrollLeft;
                q = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [(s / 2) - 100 + r, (m / 2) - 150 + q]
            }
            this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
            l.settings.onSelect = n;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            if (f.blockUI) {
                f.blockUI(this.dpDiv)
            }
            f.data(this._dialogInput[0], g, l);
            return this
        },_destroyDatepicker: function(k) {
            var l, i = f(k), j = f.data(k, g);
            if (!i.hasClass(this.markerClassName)) {
                return
            }
            l = k.nodeName.toLowerCase();
            f.removeData(k, g);
            if (l === "input") {
                j.append.remove();
                j.trigger.remove();
                i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)
            } else {
                if (l === "div" || l === "span") {
                    i.removeClass(this.markerClassName).empty()
                }
            }
        },_enableDatepicker: function(l) {
            var m, k, i = f(l), j = f.data(l, g);
            if (!i.hasClass(this.markerClassName)) {
                return
            }
            m = l.nodeName.toLowerCase();
            if (m === "input") {
                l.disabled = false;
                j.trigger.filter("button").each(function() {
                    this.disabled = false
                }).end().filter("img").css({opacity: "1.0",cursor: ""})
            } else {
                if (m === "div" || m === "span") {
                    k = i.children("." + this._inlineClass);
                    k.children().removeClass("ui-state-disabled");
                    k.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false)
                }
            }
            this._disabledInputs = f.map(this._disabledInputs, function(n) {
                return (n === l ? null : n)
            })
        },_disableDatepicker: function(l) {
            var m, k, i = f(l), j = f.data(l, g);
            if (!i.hasClass(this.markerClassName)) {
                return
            }
            m = l.nodeName.toLowerCase();
            if (m === "input") {
                l.disabled = true;
                j.trigger.filter("button").each(function() {
                    this.disabled = true
                }).end().filter("img").css({opacity: "0.5",cursor: "default"})
            } else {
                if (m === "div" || m === "span") {
                    k = i.children("." + this._inlineClass);
                    k.children().addClass("ui-state-disabled");
                    k.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true)
                }
            }
            this._disabledInputs = f.map(this._disabledInputs, function(n) {
                return (n === l ? null : n)
            });
            this._disabledInputs[this._disabledInputs.length] = l
        },_isDisabledDatepicker: function(k) {
            if (!k) {
                return false
            }
            for (var j = 0; j < this._disabledInputs.length; j++) {
                if (this._disabledInputs[j] === k) {
                    return true
                }
            }
            return false
        },_getInst: function(j) {
            try {
                return f.data(j, g)
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },_optionDatepicker: function(o, j, n) {
            var k, i, m, p, l = this._getInst(o);
            if (arguments.length === 2 && typeof j === "string") {
                return (j === "defaults" ? f.extend({}, f.datepicker._defaults) : (l ? (j === "all" ? f.extend({}, l.settings) : this._get(l, j)) : null))
            }
            k = j || {};
            if (typeof j === "string") {
                k = {};
                k[j] = n
            }
            if (l) {
                if (this._curInst === l) {
                    this._hideDatepicker()
                }
                i = this._getDateDatepicker(o, true);
                m = this._getMinMaxDate(l, "min");
                p = this._getMinMaxDate(l, "max");
                a(l.settings, k);
                if (m !== null && k.dateFormat !== h && k.minDate === h) {
                    l.settings.minDate = this._formatDate(l, m)
                }
                if (p !== null && k.dateFormat !== h && k.maxDate === h) {
                    l.settings.maxDate = this._formatDate(l, p)
                }
                if ("disabled" in k) {
                    if (k.disabled) {
                        this._disableDatepicker(o)
                    } else {
                        this._enableDatepicker(o)
                    }
                }
                this._attachments(f(o), l);
                this._autoSize(l);
                this._setDate(l, i);
                this._updateAlternate(l);
                this._updateDatepicker(l)
            }
        },_changeDatepicker: function(k, i, j) {
            this._optionDatepicker(k, i, j)
        },_refreshDatepicker: function(j) {
            var i = this._getInst(j);
            if (i) {
                this._updateDatepicker(i)
            }
        },_setDateDatepicker: function(k, i) {
            var j = this._getInst(k);
            if (j) {
                this._setDate(j, i);
                this._updateDatepicker(j);
                this._updateAlternate(j)
            }
        },_getDateDatepicker: function(k, i) {
            var j = this._getInst(k);
            if (j && !j.inline) {
                this._setDateFromField(j, i)
            }
            return (j ? this._getDate(j) : null)
        },_doKeyDown: function(l) {
            var j, i, n, m = f.datepicker._getInst(l.target), o = true, k = m.dpDiv.is(".ui-datepicker-rtl");
            m._keyEvent = true;
            if (f.datepicker._datepickerShowing) {
                switch (l.keyCode) {
                    case 9:
                        f.datepicker._hideDatepicker();
                        o = false;
                        break;
                    case 13:
                        n = f("td." + f.datepicker._dayOverClass + ":not(." + f.datepicker._currentClass + ")", m.dpDiv);
                        if (n[0]) {
                            f.datepicker._selectDay(l.target, m.selectedMonth, m.selectedYear, n[0])
                        }
                        j = f.datepicker._get(m, "onSelect");
                        if (j) {
                            i = f.datepicker._formatDate(m);
                            j.apply((m.input ? m.input[0] : null), [i, m])
                        } else {
                            f.datepicker._hideDatepicker()
                        }
                        return false;
                    case 27:
                        f.datepicker._hideDatepicker();
                        break;
                    case 33:
                        f.datepicker._adjustDate(l.target, (l.ctrlKey ? -f.datepicker._get(m, "stepBigMonths") : -f.datepicker._get(m, "stepMonths")), "M");
                        break;
                    case 34:
                        f.datepicker._adjustDate(l.target, (l.ctrlKey ? +f.datepicker._get(m, "stepBigMonths") : +f.datepicker._get(m, "stepMonths")), "M");
                        break;
                    case 35:
                        if (l.ctrlKey || l.metaKey) {
                            f.datepicker._clearDate(l.target)
                        }
                        o = l.ctrlKey || l.metaKey;
                        break;
                    case 36:
                        if (l.ctrlKey || l.metaKey) {
                            f.datepicker._gotoToday(l.target)
                        }
                        o = l.ctrlKey || l.metaKey;
                        break;
                    case 37:
                        if (l.ctrlKey || l.metaKey) {
                            f.datepicker._adjustDate(l.target, (k ? +1 : -1), "D")
                        }
                        o = l.ctrlKey || l.metaKey;
                        if (l.originalEvent.altKey) {
                            f.datepicker._adjustDate(l.target, (l.ctrlKey ? -f.datepicker._get(m, "stepBigMonths") : -f.datepicker._get(m, "stepMonths")), "M")
                        }
                        break;
                    case 38:
                        if (l.ctrlKey || l.metaKey) {
                            f.datepicker._adjustDate(l.target, -7, "D")
                        }
                        o = l.ctrlKey || l.metaKey;
                        break;
                    case 39:
                        if (l.ctrlKey || l.metaKey) {
                            f.datepicker._adjustDate(l.target, (k ? -1 : +1), "D")
                        }
                        o = l.ctrlKey || l.metaKey;
                        if (l.originalEvent.altKey) {
                            f.datepicker._adjustDate(l.target, (l.ctrlKey ? +f.datepicker._get(m, "stepBigMonths") : +f.datepicker._get(m, "stepMonths")), "M")
                        }
                        break;
                    case 40:
                        if (l.ctrlKey || l.metaKey) {
                            f.datepicker._adjustDate(l.target, +7, "D")
                        }
                        o = l.ctrlKey || l.metaKey;
                        break;
                    default:
                        o = false
                }
            } else {
                if (l.keyCode === 36 && l.ctrlKey) {
                    f.datepicker._showDatepicker(this)
                } else {
                    o = false
                }
            }
            if (o) {
                l.preventDefault();
                l.stopPropagation()
            }
        },_doKeyPress: function(k) {
            var j, i, l = f.datepicker._getInst(k.target);
            if (f.datepicker._get(l, "constrainInput")) {
                j = f.datepicker._possibleChars(f.datepicker._get(l, "dateFormat"));
                i = String.fromCharCode(k.charCode == null ? k.keyCode : k.charCode);
                return k.ctrlKey || k.metaKey || (i < " " || !j || j.indexOf(i) > -1)
            }
        },_doKeyUp: function(k) {
            var i, l = f.datepicker._getInst(k.target);
            if (l.input.val() !== l.lastVal) {
                try {
                    i = f.datepicker.parseDate(f.datepicker._get(l, "dateFormat"), (l.input ? l.input.val() : null), f.datepicker._getFormatConfig(l));
                    if (i) {
                        f.datepicker._setDateFromField(l);
                        f.datepicker._updateAlternate(l);
                        f.datepicker._updateDatepicker(l)
                    }
                } catch (j) {
                }
            }
            return true
        },_showDatepicker: function(j) {
            j = j.target || j;
            if (j.nodeName.toLowerCase() !== "input") {
                j = f("input", j.parentNode)[0]
            }
            if (f.datepicker._isDisabledDatepicker(j) || f.datepicker._lastInput === j) {
                return
            }
            var l, p, k, n, o, i, m;
            l = f.datepicker._getInst(j);
            if (f.datepicker._curInst && f.datepicker._curInst !== l) {
                f.datepicker._curInst.dpDiv.stop(true, true);
                if (l && f.datepicker._datepickerShowing) {
                    f.datepicker._hideDatepicker(f.datepicker._curInst.input[0])
                }
            }
            p = f.datepicker._get(l, "beforeShow");
            k = p ? p.apply(j, [j, l]) : {};
            if (k === false) {
                return
            }
            a(l.settings, k);
            l.lastVal = null;
            f.datepicker._lastInput = j;
            f.datepicker._setDateFromField(l);
            if (f.datepicker._inDialog) {
                j.value = ""
            }
            if (!f.datepicker._pos) {
                f.datepicker._pos = f.datepicker._findPos(j);
                f.datepicker._pos[1] += j.offsetHeight
            }
            n = false;
            f(j).parents().each(function() {
                n |= f(this).css("position") === "fixed";
                return !n
            });
            o = {left: f.datepicker._pos[0],top: f.datepicker._pos[1]};
            f.datepicker._pos = null;
            l.dpDiv.empty();
            l.dpDiv.css({position: "absolute",display: "block",top: "-1000px"});
            f.datepicker._updateDatepicker(l);
            o = f.datepicker._checkOffset(l, o, n);
            l.dpDiv.css({position: (f.datepicker._inDialog && f.blockUI ? "static" : (n ? "fixed" : "absolute")),display: "none",left: o.left + "px",top: o.top + "px"});
            if (!l.inline) {
                i = f.datepicker._get(l, "showAnim");
                m = f.datepicker._get(l, "duration");
                l.dpDiv.zIndex(f(j).zIndex() + 1);
                f.datepicker._datepickerShowing = true;
                if (f.effects && f.effects.effect[i]) {
                    l.dpDiv.show(i, f.datepicker._get(l, "showOptions"), m)
                } else {
                    l.dpDiv[i || "show"](i ? m : null)
                }
                if (l.input.is(":visible") && !l.input.is(":disabled")) {
                    l.input.focus()
                }
                f.datepicker._curInst = l
            }
        },_updateDatepicker: function(k) {
            this.maxRows = 4;
            c = k;
            k.dpDiv.empty().append(this._generateHTML(k));
            this._attachHandlers(k);
            k.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var m, i = this._getNumberOfMonths(k), l = i[1], j = 17;
            k.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            if (l > 1) {
                k.dpDiv.addClass("ui-datepicker-multi-" + l).css("width", (j * l) + "em")
            }
            k.dpDiv[(i[0] !== 1 || i[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            k.dpDiv[(this._get(k, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            if (k === f.datepicker._curInst && f.datepicker._datepickerShowing && k.input && k.input.is(":visible") && !k.input.is(":disabled") && k.input[0] !== document.activeElement) {
                k.input.focus()
            }
            if (k.yearshtml) {
                m = k.yearshtml;
                setTimeout(function() {
                    if (m === k.yearshtml && k.yearshtml) {
                        k.dpDiv.find("select.ui-datepicker-year:first").replaceWith(k.yearshtml)
                    }
                    m = k.yearshtml = null
                }, 0)
            }
        },_getBorders: function(i) {
            var j = function(k) {
                return {thin: 1,medium: 2,thick: 3}[k] || k
            };
            return [parseFloat(j(i.css("border-left-width"))), parseFloat(j(i.css("border-top-width")))]
        },_checkOffset: function(n, l, k) {
            var m = n.dpDiv.outerWidth(), q = n.dpDiv.outerHeight(), p = n.input ? n.input.outerWidth() : 0, i = n.input ? n.input.outerHeight() : 0, o = document.documentElement.clientWidth + (k ? 0 : f(document).scrollLeft()), j = document.documentElement.clientHeight + (k ? 0 : f(document).scrollTop());
            l.left -= (this._get(n, "isRTL") ? (m - p) : 0);
            l.left -= (k && l.left === n.input.offset().left) ? f(document).scrollLeft() : 0;
            l.top -= (k && l.top === (n.input.offset().top + i)) ? f(document).scrollTop() : 0;
            l.left -= Math.min(l.left, (l.left + m > o && o > m) ? Math.abs(l.left + m - o) : 0);
            l.top -= Math.min(l.top, (l.top + q > j && j > q) ? Math.abs(q + i) : 0);
            return l
        },_findPos: function(l) {
            var i, k = this._getInst(l), j = this._get(k, "isRTL");
            while (l && (l.type === "hidden" || l.nodeType !== 1 || f.expr.filters.hidden(l))) {
                l = l[j ? "previousSibling" : "nextSibling"]
            }
            i = f(l).offset();
            return [i.left, i.top]
        },_hideDatepicker: function(k) {
            var j, n, m, i, l = this._curInst;
            if (!l || (k && l !== f.data(k, g))) {
                return
            }
            if (this._datepickerShowing) {
                j = this._get(l, "showAnim");
                n = this._get(l, "duration");
                m = function() {
                    f.datepicker._tidyDialog(l)
                };
                if (f.effects && (f.effects.effect[j] || f.effects[j])) {
                    l.dpDiv.hide(j, f.datepicker._get(l, "showOptions"), n, m)
                } else {
                    l.dpDiv[(j === "slideDown" ? "slideUp" : (j === "fadeIn" ? "fadeOut" : "hide"))]((j ? n : null), m)
                }
                if (!j) {
                    m()
                }
                this._datepickerShowing = false;
                i = this._get(l, "onClose");
                if (i) {
                    i.apply((l.input ? l.input[0] : null), [(l.input ? l.input.val() : ""), l])
                }
                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({position: "absolute",left: "0",top: "-100px"});
                    if (f.blockUI) {
                        f.unblockUI();
                        f("body").append(this.dpDiv)
                    }
                }
                this._inDialog = false
            }
        },_tidyDialog: function(i) {
            i.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },_checkExternalClick: function(j) {
            if (!f.datepicker._curInst) {
                return
            }
            var i = f(j.target), k = f.datepicker._getInst(i[0]);
            if (((i[0].id !== f.datepicker._mainDivId && i.parents("#" + f.datepicker._mainDivId).length === 0 && !i.hasClass(f.datepicker.markerClassName) && !i.closest("." + f.datepicker._triggerClass).length && f.datepicker._datepickerShowing && !(f.datepicker._inDialog && f.blockUI))) || (i.hasClass(f.datepicker.markerClassName) && f.datepicker._curInst !== k)) {
                f.datepicker._hideDatepicker()
            }
        },_adjustDate: function(m, l, k) {
            var j = f(m), i = this._getInst(j[0]);
            if (this._isDisabledDatepicker(j[0])) {
                return
            }
            this._adjustInstDate(i, l + (k === "M" ? this._get(i, "showCurrentAtPos") : 0), k);
            this._updateDatepicker(i)
        },_gotoToday: function(l) {
            var i, k = f(l), j = this._getInst(k[0]);
            if (this._get(j, "gotoCurrent") && j.currentDay) {
                j.selectedDay = j.currentDay;
                j.drawMonth = j.selectedMonth = j.currentMonth;
                j.drawYear = j.selectedYear = j.currentYear
            } else {
                i = new Date();
                j.selectedDay = i.getDate();
                j.drawMonth = j.selectedMonth = i.getMonth();
                j.drawYear = j.selectedYear = i.getFullYear()
            }
            this._notifyChange(j);
            this._adjustDate(k)
        },_selectMonthYear: function(m, i, l) {
            var k = f(m), j = this._getInst(k[0]);
            j["selected" + (l === "M" ? "Month" : "Year")] = j["draw" + (l === "M" ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10);
            this._notifyChange(j);
            this._adjustDate(k)
        },_selectDay: function(n, l, i, m) {
            var j, k = f(n);
            if (f(m).hasClass(this._unselectableClass) || this._isDisabledDatepicker(k[0])) {
                return
            }
            j = this._getInst(k[0]);
            j.selectedDay = j.currentDay = f("a", m).html();
            j.selectedMonth = j.currentMonth = l;
            j.selectedYear = j.currentYear = i;
            this._selectDate(n, this._formatDate(j, j.currentDay, j.currentMonth, j.currentYear))
        },_clearDate: function(j) {
            var i = f(j);
            this._selectDate(i, "")
        },_selectDate: function(m, i) {
            var j, l = f(m), k = this._getInst(l[0]);
            i = (i != null ? i : this._formatDate(k));
            if (k.input) {
                k.input.val(i)
            }
            this._updateAlternate(k);
            j = this._get(k, "onSelect");
            if (j) {
                j.apply((k.input ? k.input[0] : null), [i, k])
            } else {
                if (k.input) {
                    k.input.trigger("change")
                }
            }
            if (k.inline) {
                this._updateDatepicker(k)
            } else {
                this._hideDatepicker();
                this._lastInput = k.input[0];
                if (typeof (k.input[0]) !== "object") {
                    k.input.focus()
                }
                this._lastInput = null
            }
        },_updateAlternate: function(m) {
            var l, k, i, j = this._get(m, "altField");
            if (j) {
                l = this._get(m, "altFormat") || this._get(m, "dateFormat");
                k = this._getDate(m);
                i = this.formatDate(l, k, this._getFormatConfig(m));
                f(j).each(function() {
                    f(this).val(i)
                })
            }
        },noWeekends: function(j) {
            var i = j.getDay();
            return [(i > 0 && i < 6), ""]
        },iso8601Week: function(i) {
            var j, k = new Date(i.getTime());
            k.setDate(k.getDate() + 4 - (k.getDay() || 7));
            j = k.getTime();
            k.setMonth(0);
            k.setDate(1);
            return Math.floor(Math.round((j - k) / 86400000) / 7) + 1
        },parseDate: function(y, t, A) {
            if (y == null || t == null) {
                throw "Invalid arguments"
            }
            t = (typeof t === "object" ? t.toString() : t + "");
            if (t === "") {
                return null
            }
            var l, v, j, z = 0, o = (A ? A.shortYearCutoff : null) || this._defaults.shortYearCutoff, k = (typeof o !== "string" ? o : new Date().getFullYear() % 100 + parseInt(o, 10)), r = (A ? A.dayNamesShort : null) || this._defaults.dayNamesShort, C = (A ? A.dayNames : null) || this._defaults.dayNames, i = (A ? A.monthNamesShort : null) || this._defaults.monthNamesShort, m = (A ? A.monthNames : null) || this._defaults.monthNames, n = -1, D = -1, x = -1, q = -1, w = false, B, s = function(F) {
                var G = (l + 1 < y.length && y.charAt(l + 1) === F);
                if (G) {
                    l++
                }
                return G
            }, E = function(H) {
                var F = s(H), I = (H === "@" ? 14 : (H === "!" ? 20 : (H === "y" && F ? 4 : (H === "o" ? 3 : 2)))), J = new RegExp("^\\d{1," + I + "}"), G = t.substring(z).match(J);
                if (!G) {
                    throw "Missing number at position " + z
                }
                z += G[0].length;
                return parseInt(G[0], 10)
            }, p = function(G, H, J) {
                var F = -1, I = f.map(s(G) ? J : H, function(L, K) {
                    return [[K, L]]
                }).sort(function(L, K) {
                    return -(L[1].length - K[1].length)
                });
                f.each(I, function(L, M) {
                    var K = M[1];
                    if (t.substr(z, K.length).toLowerCase() === K.toLowerCase()) {
                        F = M[0];
                        z += K.length;
                        return false
                    }
                });
                if (F !== -1) {
                    return F + 1
                } else {
                    throw "Unknown name at position " + z
                }
            }, u = function() {
                if (t.charAt(z) !== y.charAt(l)) {
                    throw "Unexpected literal at position " + z
                }
                z++
            };
            for (l = 0; l < y.length; l++) {
                if (w) {
                    if (y.charAt(l) === "'" && !s("'")) {
                        w = false
                    } else {
                        u()
                    }
                } else {
                    switch (y.charAt(l)) {
                        case "d":
                            x = E("d");
                            break;
                        case "D":
                            p("D", r, C);
                            break;
                        case "o":
                            q = E("o");
                            break;
                        case "m":
                            D = E("m");
                            break;
                        case "M":
                            D = p("M", i, m);
                            break;
                        case "y":
                            n = E("y");
                            break;
                        case "@":
                            B = new Date(E("@"));
                            n = B.getFullYear();
                            D = B.getMonth() + 1;
                            x = B.getDate();
                            break;
                        case "!":
                            B = new Date((E("!") - this._ticksTo1970) / 10000);
                            n = B.getFullYear();
                            D = B.getMonth() + 1;
                            x = B.getDate();
                            break;
                        case "'":
                            if (s("'")) {
                                u()
                            } else {
                                w = true
                            }
                            break;
                        default:
                            u()
                    }
                }
            }
            if (z < t.length) {
                j = t.substr(z);
                if (!/^\s+/.test(j)) {
                    throw "Extra/unparsed characters found in date: " + j
                }
            }
            if (n === -1) {
                n = new Date().getFullYear()
            } else {
                if (n < 100) {
                    n += new Date().getFullYear() - new Date().getFullYear() % 100 + (n <= k ? 0 : -100)
                }
            }
            if (q > -1) {
                D = 1;
                x = q;
                do {
                    v = this._getDaysInMonth(n, D - 1);
                    if (x <= v) {
                        break
                    }
                    D++;
                    x -= v
                } while (true)
            }
            B = this._daylightSavingAdjust(new Date(n, D - 1, x));
            if (B.getFullYear() !== n || B.getMonth() + 1 !== D || B.getDate() !== x) {
                throw "Invalid date"
            }
            return B
        },ATOM: "yy-mm-dd",COOKIE: "D, dd M yy",ISO_8601: "yy-mm-dd",RFC_822: "D, d M y",RFC_850: "DD, dd-M-y",RFC_1036: "D, d M y",RFC_1123: "D, d M yy",RFC_2822: "D, d M yy",RSS: "D, d M y",TICKS: "!",TIMESTAMP: "@",W3C: "yy-mm-dd",_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),formatDate: function(r, l, m) {
            if (!l) {
                return ""
            }
            var t, u = (m ? m.dayNamesShort : null) || this._defaults.dayNamesShort, j = (m ? m.dayNames : null) || this._defaults.dayNames, p = (m ? m.monthNamesShort : null) || this._defaults.monthNamesShort, n = (m ? m.monthNames : null) || this._defaults.monthNames, s = function(v) {
                var w = (t + 1 < r.length && r.charAt(t + 1) === v);
                if (w) {
                    t++
                }
                return w
            }, i = function(x, y, v) {
                var w = "" + y;
                if (s(x)) {
                    while (w.length < v) {
                        w = "0" + w
                    }
                }
                return w
            }, o = function(v, x, w, y) {
                return (s(v) ? y[x] : w[x])
            }, k = "", q = false;
            if (l) {
                for (t = 0; t < r.length; t++) {
                    if (q) {
                        if (r.charAt(t) === "'" && !s("'")) {
                            q = false
                        } else {
                            k += r.charAt(t)
                        }
                    } else {
                        switch (r.charAt(t)) {
                            case "d":
                                k += i("d", l.getDate(), 2);
                                break;
                            case "D":
                                k += o("D", l.getDay(), u, j);
                                break;
                            case "o":
                                k += i("o", Math.round((new Date(l.getFullYear(), l.getMonth(), l.getDate()).getTime() - new Date(l.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                                break;
                            case "m":
                                k += i("m", l.getMonth() + 1, 2);
                                break;
                            case "M":
                                k += o("M", l.getMonth(), p, n);
                                break;
                            case "y":
                                k += (s("y") ? l.getFullYear() : (l.getYear() % 100 < 10 ? "0" : "") + l.getYear() % 100);
                                break;
                            case "@":
                                k += l.getTime();
                                break;
                            case "!":
                                k += l.getTime() * 10000 + this._ticksTo1970;
                                break;
                            case "'":
                                if (s("'")) {
                                    k += "'"
                                } else {
                                    q = true
                                }
                                break;
                            default:
                                k += r.charAt(t)
                        }
                    }
                }
            }
            return k
        },_possibleChars: function(m) {
            var l, k = "", j = false, i = function(n) {
                var o = (l + 1 < m.length && m.charAt(l + 1) === n);
                if (o) {
                    l++
                }
                return o
            };
            for (l = 0; l < m.length; l++) {
                if (j) {
                    if (m.charAt(l) === "'" && !i("'")) {
                        j = false
                    } else {
                        k += m.charAt(l)
                    }
                } else {
                    switch (m.charAt(l)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            k += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            if (i("'")) {
                                k += "'"
                            } else {
                                j = true
                            }
                            break;
                        default:
                            k += m.charAt(l)
                    }
                }
            }
            return k
        },_get: function(j, i) {
            return j.settings[i] !== h ? j.settings[i] : this._defaults[i]
        },_setDateFromField: function(n, k) {
            if (n.input.val() === n.lastVal) {
                return
            }
            var i = this._get(n, "dateFormat"), p = n.lastVal = n.input ? n.input.val() : null, o = this._getDefaultDate(n), j = o, l = this._getFormatConfig(n);
            try {
                j = this.parseDate(i, p, l) || o
            } catch (m) {
                p = (k ? "" : p)
            }
            n.selectedDay = j.getDate();
            n.drawMonth = n.selectedMonth = j.getMonth();
            n.drawYear = n.selectedYear = j.getFullYear();
            n.currentDay = (p ? j.getDate() : 0);
            n.currentMonth = (p ? j.getMonth() : 0);
            n.currentYear = (p ? j.getFullYear() : 0);
            this._adjustInstDate(n)
        },_getDefaultDate: function(i) {
            return this._restrictMinMax(i, this._determineDate(i, this._get(i, "defaultDate"), new Date()))
        },_determineDate: function(m, j, n) {
            var l = function(p) {
                var o = new Date();
                o.setDate(o.getDate() + p);
                return o
            }, k = function(v) {
                try {
                    return f.datepicker.parseDate(f.datepicker._get(m, "dateFormat"), v, f.datepicker._getFormatConfig(m))
                } catch (u) {
                }
                var p = (v.toLowerCase().match(/^c/) ? f.datepicker._getDate(m) : null) || new Date(), q = p.getFullYear(), t = p.getMonth(), o = p.getDate(), s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, r = s.exec(v);
                while (r) {
                    switch (r[2] || "d") {
                        case "d":
                        case "D":
                            o += parseInt(r[1], 10);
                            break;
                        case "w":
                        case "W":
                            o += parseInt(r[1], 10) * 7;
                            break;
                        case "m":
                        case "M":
                            t += parseInt(r[1], 10);
                            o = Math.min(o, f.datepicker._getDaysInMonth(q, t));
                            break;
                        case "y":
                        case "Y":
                            q += parseInt(r[1], 10);
                            o = Math.min(o, f.datepicker._getDaysInMonth(q, t));
                            break
                    }
                    r = s.exec(v)
                }
                return new Date(q, t, o)
            }, i = (j == null || j === "" ? n : (typeof j === "string" ? k(j) : (typeof j === "number" ? (isNaN(j) ? n : l(j)) : new Date(j.getTime()))));
            i = (i && i.toString() === "Invalid Date" ? n : i);
            if (i) {
                i.setHours(0);
                i.setMinutes(0);
                i.setSeconds(0);
                i.setMilliseconds(0)
            }
            return this._daylightSavingAdjust(i)
        },_daylightSavingAdjust: function(i) {
            if (!i) {
                return null
            }
            i.setHours(i.getHours() > 12 ? i.getHours() + 2 : 0);
            return i
        },_setDate: function(o, l, n) {
            var i = !l, k = o.selectedMonth, m = o.selectedYear, j = this._restrictMinMax(o, this._determineDate(o, l, new Date()));
            o.selectedDay = o.currentDay = j.getDate();
            o.drawMonth = o.selectedMonth = o.currentMonth = j.getMonth();
            o.drawYear = o.selectedYear = o.currentYear = j.getFullYear();
            if ((k !== o.selectedMonth || m !== o.selectedYear) && !n) {
                this._notifyChange(o)
            }
            this._adjustInstDate(o);
            if (o.input) {
                o.input.val(i ? "" : this._formatDate(o))
            }
        },_getDate: function(j) {
            var i = (!j.currentYear || (j.input && j.input.val() === "") ? null : this._daylightSavingAdjust(new Date(j.currentYear, j.currentMonth, j.currentDay)));
            return i
        },_attachHandlers: function(j) {
            var i = this._get(j, "stepMonths"), k = "#" + j.id.replace(/\\\\/g, "\\");
            j.dpDiv.find("[data-handler]").map(function() {
                var l = {prev: function() {
                        window["DP_jQuery_" + e].datepicker._adjustDate(k, -i, "M")
                    },next: function() {
                        window["DP_jQuery_" + e].datepicker._adjustDate(k, +i, "M")
                    },hide: function() {
                        window["DP_jQuery_" + e].datepicker._hideDatepicker()
                    },today: function() {
                        window["DP_jQuery_" + e].datepicker._gotoToday(k)
                    },selectDay: function() {
                        window["DP_jQuery_" + e].datepicker._selectDay(k, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                        return false
                    },selectMonth: function() {
                        window["DP_jQuery_" + e].datepicker._selectMonthYear(k, this, "M");
                        return false
                    },selectYear: function() {
                        window["DP_jQuery_" + e].datepicker._selectMonthYear(k, this, "Y");
                        return false
                    }};
                f(this).bind(this.getAttribute("data-event"), l[this.getAttribute("data-handler")])
            })
        },_generateHTML: function(Y) {
            var B, A, T, L, m, ac, W, P, af, J, aj, t, v, u, j, ab, r, E, ae, R, ak, D, I, s, n, U, N, Q, O, q, G, w, X, aa, l, ad, ah, M, x, Z = new Date(), C = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth(), Z.getDate())), ag = this._get(Y, "isRTL"), ai = this._get(Y, "showButtonPanel"), S = this._get(Y, "hideIfNoPrevNext"), H = this._get(Y, "navigationAsDateFormat"), y = this._getNumberOfMonths(Y), p = this._get(Y, "showCurrentAtPos"), K = this._get(Y, "stepMonths"), F = (y[0] !== 1 || y[1] !== 1), k = this._daylightSavingAdjust((!Y.currentDay ? new Date(9999, 9, 9) : new Date(Y.currentYear, Y.currentMonth, Y.currentDay))), o = this._getMinMaxDate(Y, "min"), z = this._getMinMaxDate(Y, "max"), i = Y.drawMonth - p, V = Y.drawYear;
            if (i < 0) {
                i += 12;
                V--
            }
            if (z) {
                B = this._daylightSavingAdjust(new Date(z.getFullYear(), z.getMonth() - (y[0] * y[1]) + 1, z.getDate()));
                B = (o && B < o ? o : B);
                while (this._daylightSavingAdjust(new Date(V, i, 1)) > B) {
                    i--;
                    if (i < 0) {
                        i = 11;
                        V--
                    }
                }
            }
            Y.drawMonth = i;
            Y.drawYear = V;
            A = this._get(Y, "prevText");
            A = (!H ? A : this.formatDate(A, this._daylightSavingAdjust(new Date(V, i - K, 1)), this._getFormatConfig(Y)));
            T = (this._canAdjustMonth(Y, -1, V, i) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + A + "'><span class='ui-icon ui-icon-circle-triangle-" + (ag ? "e" : "w") + "'>" + A + "</span></a>" : (S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + A + "'><span class='ui-icon ui-icon-circle-triangle-" + (ag ? "e" : "w") + "'>" + A + "</span></a>"));
            L = this._get(Y, "nextText");
            L = (!H ? L : this.formatDate(L, this._daylightSavingAdjust(new Date(V, i + K, 1)), this._getFormatConfig(Y)));
            m = (this._canAdjustMonth(Y, +1, V, i) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + L + "'><span class='ui-icon ui-icon-circle-triangle-" + (ag ? "w" : "e") + "'>" + L + "</span></a>" : (S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + L + "'><span class='ui-icon ui-icon-circle-triangle-" + (ag ? "w" : "e") + "'>" + L + "</span></a>"));
            ac = this._get(Y, "currentText");
            W = (this._get(Y, "gotoCurrent") && Y.currentDay ? k : C);
            ac = (!H ? ac : this.formatDate(ac, W, this._getFormatConfig(Y)));
            P = (!Y.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(Y, "closeText") + "</button>" : "");
            af = (ai) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (ag ? P : "") + (this._isInRange(Y, W) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + ac + "</button>" : "") + (ag ? "" : P) + "</div>" : "";
            J = parseInt(this._get(Y, "firstDay"), 10);
            J = (isNaN(J) ? 0 : J);
            aj = this._get(Y, "showWeek");
            t = this._get(Y, "dayNames");
            v = this._get(Y, "dayNamesMin");
            u = this._get(Y, "monthNames");
            j = this._get(Y, "monthNamesShort");
            ab = this._get(Y, "beforeShowDay");
            r = this._get(Y, "showOtherMonths");
            E = this._get(Y, "selectOtherMonths");
            ae = this._getDefaultDate(Y);
            R = "";
            ak;
            for (D = 0; D < y[0]; D++) {
                I = "";
                this.maxRows = 4;
                for (s = 0; s < y[1]; s++) {
                    n = this._daylightSavingAdjust(new Date(V, i, Y.selectedDay));
                    U = " ui-corner-all";
                    N = "";
                    if (F) {
                        N += "<div class='ui-datepicker-group";
                        if (y[1] > 1) {
                            switch (s) {
                                case 0:
                                    N += " ui-datepicker-group-first";
                                    U = " ui-corner-" + (ag ? "right" : "left");
                                    break;
                                case y[1] - 1:
                                    N += " ui-datepicker-group-last";
                                    U = " ui-corner-" + (ag ? "left" : "right");
                                    break;
                                default:
                                    N += " ui-datepicker-group-middle";
                                    U = "";
                                    break
                            }
                        }
                        N += "'>"
                    }
                    N += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + U + "'>" + (/all|left/.test(U) && D === 0 ? (ag ? m : T) : "") + (/all|right/.test(U) && D === 0 ? (ag ? T : m) : "") + this._generateMonthYearHeader(Y, i, V, o, z, D > 0 || s > 0, u, j) + "</div><table class='ui-datepicker-calendar'><thead><tr>";
                    Q = (aj ? "<th class='ui-datepicker-week-col'>" + this._get(Y, "weekHeader") + "</th>" : "");
                    for (ak = 0; ak < 7; ak++) {
                        O = (ak + J) % 7;
                        Q += "<th" + ((ak + J + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + t[O] + "'>" + v[O] + "</span></th>"
                    }
                    N += Q + "</tr></thead><tbody>";
                    q = this._getDaysInMonth(V, i);
                    if (V === Y.selectedYear && i === Y.selectedMonth) {
                        Y.selectedDay = Math.min(Y.selectedDay, q)
                    }
                    G = (this._getFirstDayOfMonth(V, i) - J + 7) % 7;
                    w = Math.ceil((G + q) / 7);
                    X = (F ? this.maxRows > w ? this.maxRows : w : w);
                    this.maxRows = X;
                    aa = this._daylightSavingAdjust(new Date(V, i, 1 - G));
                    for (l = 0; l < X; l++) {
                        N += "<tr>";
                        ad = (!aj ? "" : "<td class='ui-datepicker-week-col'>" + this._get(Y, "calculateWeek")(aa) + "</td>");
                        for (ak = 0; ak < 7; ak++) {
                            ah = (ab ? ab.apply((Y.input ? Y.input[0] : null), [aa]) : [true, ""]);
                            M = (aa.getMonth() !== i);
                            x = (M && !E) || !ah[0] || (o && aa < o) || (z && aa > z);
                            ad += "<td class='" + ((ak + J + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + ((aa.getTime() === n.getTime() && i === Y.selectedMonth && Y._keyEvent) || (ae.getTime() === aa.getTime() && ae.getTime() === n.getTime()) ? " " + this._dayOverClass : "") + (x ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + ah[1] + (aa.getTime() === k.getTime() ? " " + this._currentClass : "") + (aa.getTime() === C.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!M || r) && ah[2] ? " title='" + ah[2].replace(/'/g, "&#39;") + "'" : "") + (x ? "" : " data-handler='selectDay' data-event='click' data-month='" + aa.getMonth() + "' data-year='" + aa.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : (x ? "<span class='ui-state-default'>" + aa.getDate() + "</span>" : "<a class='ui-state-default" + (aa.getTime() === C.getTime() ? " ui-state-highlight" : "") + (aa.getTime() === k.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + aa.getDate() + "</a>")) + "</td>";
                            aa.setDate(aa.getDate() + 1);
                            aa = this._daylightSavingAdjust(aa)
                        }
                        N += ad + "</tr>"
                    }
                    i++;
                    if (i > 11) {
                        i = 0;
                        V++
                    }
                    N += "</tbody></table>" + (F ? "</div>" + ((y[0] > 0 && s === y[1] - 1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    I += N
                }
                R += I
            }
            R += af;
            Y._keyEvent = false;
            return R
        },_generateMonthYearHeader: function(m, k, u, o, s, v, q, i) {
            var z, j, A, x, n, w, t, p, l = this._get(m, "changeMonth"), B = this._get(m, "changeYear"), C = this._get(m, "showMonthAfterYear"), r = "<div class='ui-datepicker-title'>", y = "";
            if (v || !l) {
                y += "<span class='ui-datepicker-month'>" + q[k] + "</span>"
            } else {
                z = (o && o.getFullYear() === u);
                j = (s && s.getFullYear() === u);
                y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for (A = 0; A < 12; A++) {
                    if ((!z || A >= o.getMonth()) && (!j || A <= s.getMonth())) {
                        y += "<option value='" + A + "'" + (A === k ? " selected='selected'" : "") + ">" + i[A] + "</option>"
                    }
                }
                y += "</select>"
            }
            if (!C) {
                r += y + (v || !(l && B) ? "&#xa0;" : "")
            }
            if (!m.yearshtml) {
                m.yearshtml = "";
                if (v || !B) {
                    r += "<span class='ui-datepicker-year'>" + u + "</span>"
                } else {
                    x = this._get(m, "yearRange").split(":");
                    n = new Date().getFullYear();
                    w = function(E) {
                        var D = (E.match(/c[+\-].*/) ? u + parseInt(E.substring(1), 10) : (E.match(/[+\-].*/) ? n + parseInt(E, 10) : parseInt(E, 10)));
                        return (isNaN(D) ? n : D)
                    };
                    t = w(x[0]);
                    p = Math.max(t, w(x[1] || ""));
                    t = (o ? Math.max(t, o.getFullYear()) : t);
                    p = (s ? Math.min(p, s.getFullYear()) : p);
                    m.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                    for (; t <= p; t++) {
                        m.yearshtml += "<option value='" + t + "'" + (t === u ? " selected='selected'" : "") + ">" + t + "</option>"
                    }
                    m.yearshtml += "</select>";
                    r += m.yearshtml;
                    m.yearshtml = null
                }
            }
            r += this._get(m, "yearSuffix");
            if (C) {
                r += (v || !(l && B) ? "&#xa0;" : "") + y
            }
            r += "</div>";
            return r
        },_adjustInstDate: function(l, o, n) {
            var k = l.drawYear + (n === "Y" ? o : 0), m = l.drawMonth + (n === "M" ? o : 0), i = Math.min(l.selectedDay, this._getDaysInMonth(k, m)) + (n === "D" ? o : 0), j = this._restrictMinMax(l, this._daylightSavingAdjust(new Date(k, m, i)));
            l.selectedDay = j.getDate();
            l.drawMonth = l.selectedMonth = j.getMonth();
            l.drawYear = l.selectedYear = j.getFullYear();
            if (n === "M" || n === "Y") {
                this._notifyChange(l)
            }
        },_restrictMinMax: function(l, j) {
            var k = this._getMinMaxDate(l, "min"), m = this._getMinMaxDate(l, "max"), i = (k && j < k ? k : j);
            return (m && i > m ? m : i)
        },_notifyChange: function(j) {
            var i = this._get(j, "onChangeMonthYear");
            if (i) {
                i.apply((j.input ? j.input[0] : null), [j.selectedYear, j.selectedMonth + 1, j])
            }
        },_getNumberOfMonths: function(j) {
            var i = this._get(j, "numberOfMonths");
            return (i == null ? [1, 1] : (typeof i === "number" ? [1, i] : i))
        },_getMinMaxDate: function(j, i) {
            return this._determineDate(j, this._get(j, i + "Date"), null)
        },_getDaysInMonth: function(i, j) {
            return 32 - this._daylightSavingAdjust(new Date(i, j, 32)).getDate()
        },_getFirstDayOfMonth: function(i, j) {
            return new Date(i, j, 1).getDay()
        },_canAdjustMonth: function(l, n, k, m) {
            var i = this._getNumberOfMonths(l), j = this._daylightSavingAdjust(new Date(k, m + (n < 0 ? n : i[0] * i[1]), 1));
            if (n < 0) {
                j.setDate(this._getDaysInMonth(j.getFullYear(), j.getMonth()))
            }
            return this._isInRange(l, j)
        },_isInRange: function(m, k) {
            var j, p, l = this._getMinMaxDate(m, "min"), i = this._getMinMaxDate(m, "max"), q = null, n = null, o = this._get(m, "yearRange");
            if (o) {
                j = o.split(":");
                p = new Date().getFullYear();
                q = parseInt(j[0], 10);
                n = parseInt(j[1], 10);
                if (j[0].match(/[+\-].*/)) {
                    q += p
                }
                if (j[1].match(/[+\-].*/)) {
                    n += p
                }
            }
            return ((!l || k.getTime() >= l.getTime()) && (!i || k.getTime() <= i.getTime()) && (!q || k.getFullYear() >= q) && (!n || k.getFullYear() <= n))
        },_getFormatConfig: function(i) {
            var j = this._get(i, "shortYearCutoff");
            j = (typeof j !== "string" ? j : new Date().getFullYear() % 100 + parseInt(j, 10));
            return {shortYearCutoff: j,dayNamesShort: this._get(i, "dayNamesShort"),dayNames: this._get(i, "dayNames"),monthNamesShort: this._get(i, "monthNamesShort"),monthNames: this._get(i, "monthNames")}
        },_formatDate: function(l, i, m, k) {
            if (!i) {
                l.currentDay = l.selectedDay;
                l.currentMonth = l.selectedMonth;
                l.currentYear = l.selectedYear
            }
            var j = (i ? (typeof i === "object" ? i : this._daylightSavingAdjust(new Date(k, m, i))) : this._daylightSavingAdjust(new Date(l.currentYear, l.currentMonth, l.currentDay)));
            return this.formatDate(this._get(l, "dateFormat"), j, this._getFormatConfig(l))
        }});
    function d(j) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return j.delegate(i, "mouseout", function() {
            f(this).removeClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                f(this).removeClass("ui-datepicker-prev-hover")
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                f(this).removeClass("ui-datepicker-next-hover")
            }
        }).delegate(i, "mouseover", function() {
            if (!f.datepicker._isDisabledDatepicker(c.inline ? j.parent()[0] : c.input[0])) {
                f(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
                f(this).addClass("ui-state-hover");
                if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                    f(this).addClass("ui-datepicker-prev-hover")
                }
                if (this.className.indexOf("ui-datepicker-next") !== -1) {
                    f(this).addClass("ui-datepicker-next-hover")
                }
            }
        })
    }
    function a(k, j) {
        f.extend(k, j);
        for (var i in j) {
            if (j[i] == null) {
                k[i] = j[i]
            }
        }
        return k
    }
    f.fn.datepicker = function(j) {
        if (!this.length) {
            return this
        }
        if (!f.datepicker.initialized) {
            f(document).mousedown(f.datepicker._checkExternalClick);
            f.datepicker.initialized = true
        }
        if (f("#" + f.datepicker._mainDivId).length === 0) {
            f("body").append(f.datepicker.dpDiv)
        }
        var i = Array.prototype.slice.call(arguments, 1);
        if (typeof j === "string" && (j === "isDisabled" || j === "getDate" || j === "widget")) {
            return f.datepicker["_" + j + "Datepicker"].apply(f.datepicker, [this[0]].concat(i))
        }
        if (j === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
            return f.datepicker["_" + j + "Datepicker"].apply(f.datepicker, [this[0]].concat(i))
        }
        return this.each(function() {
            typeof j === "string" ? f.datepicker["_" + j + "Datepicker"].apply(f.datepicker, [this].concat(i)) : f.datepicker._attachDatepicker(this, j)
        })
    };
    f.datepicker = new b();
    f.datepicker.initialized = false;
    f.datepicker.uuid = new Date().getTime();
    f.datepicker.version = "1.10.2";
    window["DP_jQuery_" + e] = f
})(jQuery);
(function(c, d) {
    var a = {buttons: true,height: true,maxHeight: true,maxWidth: true,minHeight: true,minWidth: true,width: true}, b = {maxHeight: true,maxWidth: true,minHeight: true,minWidth: true};
    c.widget("ui.dialog", {version: "1.10.2",options: {appendTo: "body",autoOpen: true,buttons: [],closeOnEscape: true,closeText: "close",dialogClass: "",draggable: true,hide: null,height: "auto",maxHeight: null,maxWidth: null,minHeight: 150,minWidth: 150,modal: false,position: {my: "center",at: "center",of: window,collision: "fit",using: function(f) {
                    var e = c(this).css(f).offset().top;
                    if (e < 0) {
                        c(this).css("top", f.top - e)
                    }
                }},resizable: true,show: null,title: null,width: 300,beforeClose: null,close: null,drag: null,dragStart: null,dragStop: null,focus: null,open: null,resize: null,resizeStart: null,resizeStop: null},_create: function() {
            this.originalCss = {display: this.element[0].style.display,width: this.element[0].style.width,minHeight: this.element[0].style.minHeight,maxHeight: this.element[0].style.maxHeight,height: this.element[0].style.height};
            this.originalPosition = {parent: this.element.parent(),index: this.element.parent().children().index(this.element)};
            this.originalTitle = this.element.attr("title");
            this.options.title = this.options.title || this.originalTitle;
            this._createWrapper();
            this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
            this._createTitlebar();
            this._createButtonPane();
            if (this.options.draggable && c.fn.draggable) {
                this._makeDraggable()
            }
            if (this.options.resizable && c.fn.resizable) {
                this._makeResizable()
            }
            this._isOpen = false
        },_init: function() {
            if (this.options.autoOpen) {
                this.open()
            }
        },_appendTo: function() {
            var e = this.options.appendTo;
            if (e && (e.jquery || e.nodeType)) {
                return c(e)
            }
            return this.document.find(e || "body").eq(0)
        },_destroy: function() {
            var f, e = this.originalPosition;
            this._destroyOverlay();
            this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
            this.uiDialog.stop(true, true).remove();
            if (this.originalTitle) {
                this.element.attr("title", this.originalTitle)
            }
            f = e.parent.children().eq(e.index);
            if (f.length && f[0] !== this.element[0]) {
                f.before(this.element)
            } else {
                e.parent.append(this.element)
            }
        },widget: function() {
            return this.uiDialog
        },disable: c.noop,enable: c.noop,close: function(f) {
            var e = this;
            if (!this._isOpen || this._trigger("beforeClose", f) === false) {
                return
            }
            this._isOpen = false;
            this._destroyOverlay();
            if (!this.opener.filter(":focusable").focus().length) {
                c(this.document[0].activeElement).blur()
            }
            this._hide(this.uiDialog, this.options.hide, function() {
                e._trigger("close", f)
            })
        },isOpen: function() {
            return this._isOpen
        },moveToTop: function() {
            this._moveToTop()
        },_moveToTop: function(g, e) {
            var f = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            if (f && !e) {
                this._trigger("focus", g)
            }
            return f
        },open: function() {
            var e = this;
            if (this._isOpen) {
                if (this._moveToTop()) {
                    this._focusTabbable()
                }
                return
            }
            this._isOpen = true;
            this.opener = c(this.document[0].activeElement);
            this._size();
            this._position();
            this._createOverlay();
            this._moveToTop(null, true);
            this._show(this.uiDialog, this.options.show, function() {
                e._focusTabbable();
                e._trigger("focus")
            });
            this._trigger("open")
        },_focusTabbable: function() {
            var e = this.element.find("[autofocus]");
            if (!e.length) {
                e = this.element.find(":tabbable")
            }
            if (!e.length) {
                e = this.uiDialogButtonPane.find(":tabbable")
            }
            if (!e.length) {
                e = this.uiDialogTitlebarClose.filter(":tabbable")
            }
            if (!e.length) {
                e = this.uiDialog
            }
            e.eq(0).focus()
        },_keepFocus: function(e) {
            function f() {
                var h = this.document[0].activeElement, g = this.uiDialog[0] === h || c.contains(this.uiDialog[0], h);
                if (!g) {
                    this._focusTabbable()
                }
            }
            e.preventDefault();
            f.call(this);
            this._delay(f)
        },_createWrapper: function() {
            this.uiDialog = c("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({tabIndex: -1,role: "dialog"}).appendTo(this._appendTo());
            this._on(this.uiDialog, {keydown: function(g) {
                    if (this.options.closeOnEscape && !g.isDefaultPrevented() && g.keyCode && g.keyCode === c.ui.keyCode.ESCAPE) {
                        g.preventDefault();
                        this.close(g);
                        return
                    }
                    if (g.keyCode !== c.ui.keyCode.TAB) {
                        return
                    }
                    var f = this.uiDialog.find(":tabbable"), h = f.filter(":first"), e = f.filter(":last");
                    if ((g.target === e[0] || g.target === this.uiDialog[0]) && !g.shiftKey) {
                        h.focus(1);
                        g.preventDefault()
                    } else {
                        if ((g.target === h[0] || g.target === this.uiDialog[0]) && g.shiftKey) {
                            e.focus(1);
                            g.preventDefault()
                        }
                    }
                },mousedown: function(e) {
                    if (this._moveToTop(e)) {
                        this._focusTabbable()
                    }
                }});
            if (!this.element.find("[aria-describedby]").length) {
                this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")})
            }
        },_createTitlebar: function() {
            var e;
            this.uiDialogTitlebar = c("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
            this._on(this.uiDialogTitlebar, {mousedown: function(f) {
                    if (!c(f.target).closest(".ui-dialog-titlebar-close")) {
                        this.uiDialog.focus()
                    }
                }});
            this.uiDialogTitlebarClose = c("<button></button>").button({label: this.options.closeText,icons: {primary: "ui-icon-closethick"},text: false}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
            this._on(this.uiDialogTitlebarClose, {click: function(f) {
                    f.preventDefault();
                    this.close(f)
                }});
            e = c("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
            this._title(e);
            this.uiDialog.attr({"aria-labelledby": e.attr("id")})
        },_title: function(e) {
            if (!this.options.title) {
                e.html("&#160;")
            }
            e.text(this.options.title)
        },_createButtonPane: function() {
            this.uiDialogButtonPane = c("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = c("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
            this._createButtons()
        },_createButtons: function() {
            var f = this, e = this.options.buttons;
            this.uiDialogButtonPane.remove();
            this.uiButtonSet.empty();
            if (c.isEmptyObject(e) || (c.isArray(e) && !e.length)) {
                this.uiDialog.removeClass("ui-dialog-buttons");
                return
            }
            c.each(e, function(g, h) {
                var i, j;
                h = c.isFunction(h) ? {click: h,text: g} : h;
                h = c.extend({type: "button"}, h);
                i = h.click;
                h.click = function() {
                    i.apply(f.element[0], arguments)
                };
                j = {icons: h.icons,text: h.showText};
                delete h.icons;
                delete h.showText;
                c("<button></button>", h).button(j).appendTo(f.uiButtonSet)
            });
            this.uiDialog.addClass("ui-dialog-buttons");
            this.uiDialogButtonPane.appendTo(this.uiDialog)
        },_makeDraggable: function() {
            var g = this, f = this.options;
            function e(h) {
                return {position: h.position,offset: h.offset}
            }
            this.uiDialog.draggable({cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",handle: ".ui-dialog-titlebar",containment: "document",start: function(h, i) {
                    c(this).addClass("ui-dialog-dragging");
                    g._blockFrames();
                    g._trigger("dragStart", h, e(i))
                },drag: function(h, i) {
                    g._trigger("drag", h, e(i))
                },stop: function(h, i) {
                    f.position = [i.position.left - g.document.scrollLeft(), i.position.top - g.document.scrollTop()];
                    c(this).removeClass("ui-dialog-dragging");
                    g._unblockFrames();
                    g._trigger("dragStop", h, e(i))
                }})
        },_makeResizable: function() {
            var j = this, h = this.options, i = h.resizable, e = this.uiDialog.css("position"), g = typeof i === "string" ? i : "n,e,s,w,se,sw,ne,nw";
            function f(k) {
                return {originalPosition: k.originalPosition,originalSize: k.originalSize,position: k.position,size: k.size}
            }
            this.uiDialog.resizable({cancel: ".ui-dialog-content",containment: "document",alsoResize: this.element,maxWidth: h.maxWidth,maxHeight: h.maxHeight,minWidth: h.minWidth,minHeight: this._minHeight(),handles: g,start: function(k, l) {
                    c(this).addClass("ui-dialog-resizing");
                    j._blockFrames();
                    j._trigger("resizeStart", k, f(l))
                },resize: function(k, l) {
                    j._trigger("resize", k, f(l))
                },stop: function(k, l) {
                    h.height = c(this).height();
                    h.width = c(this).width();
                    c(this).removeClass("ui-dialog-resizing");
                    j._unblockFrames();
                    j._trigger("resizeStop", k, f(l))
                }}).css("position", e)
        },_minHeight: function() {
            var e = this.options;
            return e.height === "auto" ? e.minHeight : Math.min(e.minHeight, e.height)
        },_position: function() {
            var e = this.uiDialog.is(":visible");
            if (!e) {
                this.uiDialog.show()
            }
            this.uiDialog.position(this.options.position);
            if (!e) {
                this.uiDialog.hide()
            }
        },_setOptions: function(g) {
            var h = this, f = false, e = {};
            c.each(g, function(i, j) {
                h._setOption(i, j);
                if (i in a) {
                    f = true
                }
                if (i in b) {
                    e[i] = j
                }
            });
            if (f) {
                this._size();
                this._position()
            }
            if (this.uiDialog.is(":data(ui-resizable)")) {
                this.uiDialog.resizable("option", e)
            }
        },_setOption: function(g, h) {
            var f, i, e = this.uiDialog;
            if (g === "dialogClass") {
                e.removeClass(this.options.dialogClass).addClass(h)
            }
            if (g === "disabled") {
                return
            }
            this._super(g, h);
            if (g === "appendTo") {
                this.uiDialog.appendTo(this._appendTo())
            }
            if (g === "buttons") {
                this._createButtons()
            }
            if (g === "closeText") {
                this.uiDialogTitlebarClose.button({label: "" + h})
            }
            if (g === "draggable") {
                f = e.is(":data(ui-draggable)");
                if (f && !h) {
                    e.draggable("destroy")
                }
                if (!f && h) {
                    this._makeDraggable()
                }
            }
            if (g === "position") {
                this._position()
            }
            if (g === "resizable") {
                i = e.is(":data(ui-resizable)");
                if (i && !h) {
                    e.resizable("destroy")
                }
                if (i && typeof h === "string") {
                    e.resizable("option", "handles", h)
                }
                if (!i && h !== false) {
                    this._makeResizable()
                }
            }
            if (g === "title") {
                this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
            }
        },_size: function() {
            var e, g, h, f = this.options;
            this.element.show().css({width: "auto",minHeight: 0,maxHeight: "none",height: 0});
            if (f.minWidth > f.width) {
                f.width = f.minWidth
            }
            e = this.uiDialog.css({height: "auto",width: f.width}).outerHeight();
            g = Math.max(0, f.minHeight - e);
            h = typeof f.maxHeight === "number" ? Math.max(0, f.maxHeight - e) : "none";
            if (f.height === "auto") {
                this.element.css({minHeight: g,maxHeight: h,height: "auto"})
            } else {
                this.element.height(Math.max(0, f.height - e))
            }
            if (this.uiDialog.is(":data(ui-resizable)")) {
                this.uiDialog.resizable("option", "minHeight", this._minHeight())
            }
        },_blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var e = c(this);
                return c("<div>").css({position: "absolute",width: e.outerWidth(),height: e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]
            })
        },_unblockFrames: function() {
            if (this.iframeBlocks) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks
            }
        },_allowInteraction: function(e) {
            if (c(e.target).closest(".ui-dialog").length) {
                return true
            }
            return !!c(e.target).closest(".ui-datepicker").length
        },_createOverlay: function() {
            if (!this.options.modal) {
                return
            }
            var f = this, e = this.widgetFullName;
            if (!c.ui.dialog.overlayInstances) {
                this._delay(function() {
                    if (c.ui.dialog.overlayInstances) {
                        this.document.bind("focusin.dialog", function(g) {
                            if (!f._allowInteraction(g)) {
                                g.preventDefault();
                                c(".ui-dialog:visible:last .ui-dialog-content").data(e)._focusTabbable()
                            }
                        })
                    }
                })
            }
            this.overlay = c("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
            this._on(this.overlay, {mousedown: "_keepFocus"});
            c.ui.dialog.overlayInstances++
        },_destroyOverlay: function() {
            if (!this.options.modal) {
                return
            }
            if (this.overlay) {
                c.ui.dialog.overlayInstances--;
                if (!c.ui.dialog.overlayInstances) {
                    this.document.unbind("focusin.dialog")
                }
                this.overlay.remove();
                this.overlay = null
            }
        }});
    c.ui.dialog.overlayInstances = 0;
    if (c.uiBackCompat !== false) {
        c.widget("ui.dialog", c.ui.dialog, {_position: function() {
                var f = this.options.position, g = [], h = [0, 0], e;
                if (f) {
                    if (typeof f === "string" || (typeof f === "object" && "0" in f)) {
                        g = f.split ? f.split(" ") : [f[0], f[1]];
                        if (g.length === 1) {
                            g[1] = g[0]
                        }
                        c.each(["left", "top"], function(k, j) {
                            if (+g[k] === g[k]) {
                                h[k] = g[k];
                                g[k] = j
                            }
                        });
                        f = {my: g[0] + (h[0] < 0 ? h[0] : "+" + h[0]) + " " + g[1] + (h[1] < 0 ? h[1] : "+" + h[1]),at: g.join(" ")}
                    }
                    f = c.extend({}, c.ui.dialog.prototype.options.position, f)
                } else {
                    f = c.ui.dialog.prototype.options.position
                }
                e = this.uiDialog.is(":visible");
                if (!e) {
                    this.uiDialog.show()
                }
                this.uiDialog.position(f);
                if (!e) {
                    this.uiDialog.hide()
                }
            }})
    }
}(jQuery));
(function(a, b) {
    a.widget("ui.menu", {version: "1.10.2",defaultElement: "<ul>",delay: 300,options: {icons: {submenu: "ui-icon-carat-1-e"},menus: "ul",position: {my: "left top",at: "right top"},role: "menu",blur: null,focus: null,select: null},_create: function() {
            this.activeMenu = this.element;
            this.mouseHandled = false;
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({role: this.options.role,tabIndex: 0}).bind("click" + this.eventNamespace, a.proxy(function(c) {
                if (this.options.disabled) {
                    c.preventDefault()
                }
            }, this));
            if (this.options.disabled) {
                this.element.addClass("ui-state-disabled").attr("aria-disabled", "true")
            }
            this._on({"mousedown .ui-menu-item > a": function(c) {
                    c.preventDefault()
                },"click .ui-state-disabled > a": function(c) {
                    c.preventDefault()
                },"click .ui-menu-item:has(a)": function(c) {
                    var d = a(c.target).closest(".ui-menu-item");
                    if (!this.mouseHandled && d.not(".ui-state-disabled").length) {
                        this.mouseHandled = true;
                        this.select(c);
                        if (d.has(".ui-menu").length) {
                            this.expand(c)
                        } else {
                            if (!this.element.is(":focus")) {
                                this.element.trigger("focus", [true]);
                                if (this.active && this.active.parents(".ui-menu").length === 1) {
                                    clearTimeout(this.timer)
                                }
                            }
                        }
                    }
                },"mouseenter .ui-menu-item": function(c) {
                    var d = a(c.currentTarget);
                    d.siblings().children(".ui-state-active").removeClass("ui-state-active");
                    this.focus(c, d)
                },mouseleave: "collapseAll","mouseleave .ui-menu": "collapseAll",focus: function(e, c) {
                    var d = this.active || this.element.children(".ui-menu-item").eq(0);
                    if (!c) {
                        this.focus(e, d)
                    }
                },blur: function(c) {
                    this._delay(function() {
                        if (!a.contains(this.element[0], this.document[0].activeElement)) {
                            this.collapseAll(c)
                        }
                    })
                },keydown: "_keydown"});
            this.refresh();
            this._on(this.document, {click: function(c) {
                    if (!a(c.target).closest(".ui-menu").length) {
                        this.collapseAll(c)
                    }
                    this.mouseHandled = false
                }})
        },_destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var c = a(this);
                if (c.data("ui-menu-submenu-carat")) {
                    c.remove()
                }
            });
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },_keydown: function(i) {
            var d, h, j, g, f, c = true;
            function e(k) {
                return k.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            switch (i.keyCode) {
                case a.ui.keyCode.PAGE_UP:
                    this.previousPage(i);
                    break;
                case a.ui.keyCode.PAGE_DOWN:
                    this.nextPage(i);
                    break;
                case a.ui.keyCode.HOME:
                    this._move("first", "first", i);
                    break;
                case a.ui.keyCode.END:
                    this._move("last", "last", i);
                    break;
                case a.ui.keyCode.UP:
                    this.previous(i);
                    break;
                case a.ui.keyCode.DOWN:
                    this.next(i);
                    break;
                case a.ui.keyCode.LEFT:
                    this.collapse(i);
                    break;
                case a.ui.keyCode.RIGHT:
                    if (this.active && !this.active.is(".ui-state-disabled")) {
                        this.expand(i)
                    }
                    break;
                case a.ui.keyCode.ENTER:
                case a.ui.keyCode.SPACE:
                    this._activate(i);
                    break;
                case a.ui.keyCode.ESCAPE:
                    this.collapse(i);
                    break;
                default:
                    c = false;
                    h = this.previousFilter || "";
                    j = String.fromCharCode(i.keyCode);
                    g = false;
                    clearTimeout(this.filterTimer);
                    if (j === h) {
                        g = true
                    } else {
                        j = h + j
                    }
                    f = new RegExp("^" + e(j), "i");
                    d = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return f.test(a(this).children("a").text())
                    });
                    d = g && d.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : d;
                    if (!d.length) {
                        j = String.fromCharCode(i.keyCode);
                        f = new RegExp("^" + e(j), "i");
                        d = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return f.test(a(this).children("a").text())
                        })
                    }
                    if (d.length) {
                        this.focus(i, d);
                        if (d.length > 1) {
                            this.previousFilter = j;
                            this.filterTimer = this._delay(function() {
                                delete this.previousFilter
                            }, 1000)
                        } else {
                            delete this.previousFilter
                        }
                    } else {
                        delete this.previousFilter
                    }
            }
            if (c) {
                i.preventDefault()
            }
        },_activate: function(c) {
            if (!this.active.is(".ui-state-disabled")) {
                if (this.active.children("a[aria-haspopup='true']").length) {
                    this.expand(c)
                } else {
                    this.select(c)
                }
            }
        },refresh: function() {
            var e, d = this.options.icons.submenu, c = this.element.find(this.options.menus);
            c.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role: this.options.role,"aria-hidden": "true","aria-expanded": "false"}).each(function() {
                var h = a(this), g = h.prev("a"), f = a("<span>").addClass("ui-menu-icon ui-icon " + d).data("ui-menu-submenu-carat", true);
                g.attr("aria-haspopup", "true").prepend(f);
                h.attr("aria-labelledby", g.attr("id"))
            });
            e = c.add(this.element);
            e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex: -1,role: this._itemRole()});
            e.children(":not(.ui-menu-item)").each(function() {
                var f = a(this);
                if (!/[^\-\u2014\u2013\s]/.test(f.text())) {
                    f.addClass("ui-widget-content ui-menu-divider")
                }
            });
            e.children(".ui-state-disabled").attr("aria-disabled", "true");
            if (this.active && !a.contains(this.element[0], this.active[0])) {
                this.blur()
            }
        },_itemRole: function() {
            return {menu: "menuitem",listbox: "option"}[this.options.role]
        },_setOption: function(c, d) {
            if (c === "icons") {
                this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(d.submenu)
            }
            this._super(c, d)
        },focus: function(d, c) {
            var f, e;
            this.blur(d, d && d.type === "focus");
            this._scrollIntoView(c);
            this.active = c.first();
            e = this.active.children("a").addClass("ui-state-focus");
            if (this.options.role) {
                this.element.attr("aria-activedescendant", e.attr("id"))
            }
            this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
            if (d && d.type === "keydown") {
                this._close()
            } else {
                this.timer = this._delay(function() {
                    this._close()
                }, this.delay)
            }
            f = c.children(".ui-menu");
            if (f.length && (/^mouse/.test(d.type))) {
                this._startOpening(f)
            }
            this.activeMenu = c.parent();
            this._trigger("focus", d, {item: c})
        },_scrollIntoView: function(f) {
            var i, e, g, c, d, h;
            if (this._hasScroll()) {
                i = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0;
                e = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0;
                g = f.offset().top - this.activeMenu.offset().top - i - e;
                c = this.activeMenu.scrollTop();
                d = this.activeMenu.height();
                h = f.height();
                if (g < 0) {
                    this.activeMenu.scrollTop(c + g)
                } else {
                    if (g + h > d) {
                        this.activeMenu.scrollTop(c + g - d + h)
                    }
                }
            }
        },blur: function(d, c) {
            if (!c) {
                clearTimeout(this.timer)
            }
            if (!this.active) {
                return
            }
            this.active.children("a").removeClass("ui-state-focus");
            this.active = null;
            this._trigger("blur", d, {item: this.active})
        },_startOpening: function(c) {
            clearTimeout(this.timer);
            if (c.attr("aria-hidden") !== "true") {
                return
            }
            this.timer = this._delay(function() {
                this._close();
                this._open(c)
            }, this.delay)
        },_open: function(d) {
            var c = a.extend({of: this.active}, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(d.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            d.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
        },collapseAll: function(d, c) {
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                var e = c ? this.element : a(d && d.target).closest(this.element.find(".ui-menu"));
                if (!e.length) {
                    e = this.element
                }
                this._close(e);
                this.blur(d);
                this.activeMenu = e
            }, this.delay)
        },_close: function(c) {
            if (!c) {
                c = this.active ? this.active.parent() : this.element
            }
            c.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },collapse: function(d) {
            var c = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            if (c && c.length) {
                this._close();
                this.focus(d, c)
            }
        },expand: function(d) {
            var c = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            if (c && c.length) {
                this._open(c.parent());
                this._delay(function() {
                    this.focus(d, c)
                })
            }
        },next: function(c) {
            this._move("next", "first", c)
        },previous: function(c) {
            this._move("prev", "last", c)
        },isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },_move: function(f, d, e) {
            var c;
            if (this.active) {
                if (f === "first" || f === "last") {
                    c = this.active[f === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1)
                } else {
                    c = this.active[f + "All"](".ui-menu-item").eq(0)
                }
            }
            if (!c || !c.length || !this.active) {
                c = this.activeMenu.children(".ui-menu-item")[d]()
            }
            this.focus(e, c)
        },nextPage: function(e) {
            var d, f, c;
            if (!this.active) {
                this.next(e);
                return
            }
            if (this.isLastItem()) {
                return
            }
            if (this._hasScroll()) {
                f = this.active.offset().top;
                c = this.element.height();
                this.active.nextAll(".ui-menu-item").each(function() {
                    d = a(this);
                    return d.offset().top - f - c < 0
                });
                this.focus(e, d)
            } else {
                this.focus(e, this.activeMenu.children(".ui-menu-item")[!this.active ? "first" : "last"]())
            }
        },previousPage: function(e) {
            var d, f, c;
            if (!this.active) {
                this.next(e);
                return
            }
            if (this.isFirstItem()) {
                return
            }
            if (this._hasScroll()) {
                f = this.active.offset().top;
                c = this.element.height();
                this.active.prevAll(".ui-menu-item").each(function() {
                    d = a(this);
                    return d.offset().top - f + c > 0
                });
                this.focus(e, d)
            } else {
                this.focus(e, this.activeMenu.children(".ui-menu-item").first())
            }
        },_hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },select: function(c) {
            this.active = this.active || a(c.target).closest(".ui-menu-item");
            var d = {item: this.active};
            if (!this.active.has(".ui-menu").length) {
                this.collapseAll(c, true)
            }
            this._trigger("select", c, d)
        }})
}(jQuery));
(function(a, b) {
    a.widget("ui.progressbar", {version: "1.10.2",options: {max: 100,value: 0,change: null,complete: null},min: 0,_create: function() {
            this.oldValue = this.options.value = this._constrainedValue();
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role: "progressbar","aria-valuemin": this.min});
            this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
            this._refreshValue()
        },_destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.valueDiv.remove()
        },value: function(c) {
            if (c === b) {
                return this.options.value
            }
            this.options.value = this._constrainedValue(c);
            this._refreshValue()
        },_constrainedValue: function(c) {
            if (c === b) {
                c = this.options.value
            }
            this.indeterminate = c === false;
            if (typeof c !== "number") {
                c = 0
            }
            return this.indeterminate ? false : Math.min(this.options.max, Math.max(this.min, c))
        },_setOptions: function(c) {
            var d = c.value;
            delete c.value;
            this._super(c);
            this.options.value = this._constrainedValue(d);
            this._refreshValue()
        },_setOption: function(c, d) {
            if (c === "max") {
                d = Math.max(this.min, d)
            }
            this._super(c, d)
        },_percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },_refreshValue: function() {
            var d = this.options.value, c = this._percentage();
            this.valueDiv.toggle(this.indeterminate || d > this.min).toggleClass("ui-corner-right", d === this.options.max).width(c.toFixed(0) + "%");
            this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate);
            if (this.indeterminate) {
                this.element.removeAttr("aria-valuenow");
                if (!this.overlayDiv) {
                    this.overlayDiv = a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)
                }
            } else {
                this.element.attr({"aria-valuemax": this.options.max,"aria-valuenow": d});
                if (this.overlayDiv) {
                    this.overlayDiv.remove();
                    this.overlayDiv = null
                }
            }
            if (this.oldValue !== d) {
                this.oldValue = d;
                this._trigger("change")
            }
            if (d === this.options.max) {
                this._trigger("complete")
            }
        }})
})(jQuery);
(function(b, c) {
    var a = 5;
    b.widget("ui.slider", b.ui.mouse, {version: "1.10.2",widgetEventPrefix: "slide",options: {animate: false,distance: 0,max: 100,min: 0,orientation: "horizontal",range: false,step: 1,value: 0,values: null,change: null,slide: null,start: null,stop: null},_create: function() {
            this._keySliding = false;
            this._mouseSliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
            this._refresh();
            this._setOption("disabled", this.options.disabled);
            this._animateOff = false
        },_refresh: function() {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue()
        },_createHandles: function() {
            var g, d, e = this.options, j = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), h = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", f = [];
            d = (e.values && e.values.length) || 1;
            if (j.length > d) {
                j.slice(d).remove();
                j = j.slice(0, d)
            }
            for (g = j.length; g < d; g++) {
                f.push(h)
            }
            this.handles = j.add(b(f.join("")).appendTo(this.element));
            this.handle = this.handles.eq(0);
            this.handles.each(function(k) {
                b(this).data("ui-slider-handle-index", k)
            })
        },_createRange: function() {
            var d = this.options, e = "";
            if (d.range) {
                if (d.range === true) {
                    if (!d.values) {
                        d.values = [this._valueMin(), this._valueMin()]
                    } else {
                        if (d.values.length && d.values.length !== 2) {
                            d.values = [d.values[0], d.values[0]]
                        } else {
                            if (b.isArray(d.values)) {
                                d.values = d.values.slice(0)
                            }
                        }
                    }
                }
                if (!this.range || !this.range.length) {
                    this.range = b("<div></div>").appendTo(this.element);
                    e = "ui-slider-range ui-widget-header ui-corner-all"
                } else {
                    this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left: "",bottom: ""})
                }
                this.range.addClass(e + ((d.range === "min" || d.range === "max") ? " ui-slider-range-" + d.range : ""))
            } else {
                this.range = b([])
            }
        },_setupEvents: function() {
            var d = this.handles.add(this.range).filter("a");
            this._off(d);
            this._on(d, this._handleEvents);
            this._hoverable(d);
            this._focusable(d)
        },_destroy: function() {
            this.handles.remove();
            this.range.remove();
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
            this._mouseDestroy()
        },_mouseCapture: function(f) {
            var j, m, e, h, l, n, i, d, k = this, g = this.options;
            if (g.disabled) {
                return false
            }
            this.elementSize = {width: this.element.outerWidth(),height: this.element.outerHeight()};
            this.elementOffset = this.element.offset();
            j = {x: f.pageX,y: f.pageY};
            m = this._normValueFromMouse(j);
            e = this._valueMax() - this._valueMin() + 1;
            this.handles.each(function(o) {
                var p = Math.abs(m - k.values(o));
                if ((e > p) || (e === p && (o === k._lastChangedValue || k.values(o) === g.min))) {
                    e = p;
                    h = b(this);
                    l = o
                }
            });
            n = this._start(f, l);
            if (n === false) {
                return false
            }
            this._mouseSliding = true;
            this._handleIndex = l;
            h.addClass("ui-state-active").focus();
            i = h.offset();
            d = !b(f.target).parents().addBack().is(".ui-slider-handle");
            this._clickOffset = d ? {left: 0,top: 0} : {left: f.pageX - i.left - (h.width() / 2),top: f.pageY - i.top - (h.height() / 2) - (parseInt(h.css("borderTopWidth"), 10) || 0) - (parseInt(h.css("borderBottomWidth"), 10) || 0) + (parseInt(h.css("marginTop"), 10) || 0)};
            if (!this.handles.hasClass("ui-state-hover")) {
                this._slide(f, l, m)
            }
            this._animateOff = true;
            return true
        },_mouseStart: function() {
            return true
        },_mouseDrag: function(f) {
            var d = {x: f.pageX,y: f.pageY}, e = this._normValueFromMouse(d);
            this._slide(f, this._handleIndex, e);
            return false
        },_mouseStop: function(d) {
            this.handles.removeClass("ui-state-active");
            this._mouseSliding = false;
            this._stop(d, this._handleIndex);
            this._change(d, this._handleIndex);
            this._handleIndex = null;
            this._clickOffset = null;
            this._animateOff = false;
            return false
        },_detectOrientation: function() {
            this.orientation = (this.options.orientation === "vertical") ? "vertical" : "horizontal"
        },_normValueFromMouse: function(e) {
            var d, h, g, f, i;
            if (this.orientation === "horizontal") {
                d = this.elementSize.width;
                h = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
            } else {
                d = this.elementSize.height;
                h = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)
            }
            g = (h / d);
            if (g > 1) {
                g = 1
            }
            if (g < 0) {
                g = 0
            }
            if (this.orientation === "vertical") {
                g = 1 - g
            }
            f = this._valueMax() - this._valueMin();
            i = this._valueMin() + g * f;
            return this._trimAlignValue(i)
        },_start: function(f, e) {
            var d = {handle: this.handles[e],value: this.value()};
            if (this.options.values && this.options.values.length) {
                d.value = this.values(e);
                d.values = this.values()
            }
            return this._trigger("start", f, d)
        },_slide: function(h, g, f) {
            var d, e, i;
            if (this.options.values && this.options.values.length) {
                d = this.values(g ? 0 : 1);
                if ((this.options.values.length === 2 && this.options.range === true) && ((g === 0 && f > d) || (g === 1 && f < d))) {
                    f = d
                }
                if (f !== this.values(g)) {
                    e = this.values();
                    e[g] = f;
                    i = this._trigger("slide", h, {handle: this.handles[g],value: f,values: e});
                    d = this.values(g ? 0 : 1);
                    if (i !== false) {
                        this.values(g, f, true)
                    }
                }
            } else {
                if (f !== this.value()) {
                    i = this._trigger("slide", h, {handle: this.handles[g],value: f});
                    if (i !== false) {
                        this.value(f)
                    }
                }
            }
        },_stop: function(f, e) {
            var d = {handle: this.handles[e],value: this.value()};
            if (this.options.values && this.options.values.length) {
                d.value = this.values(e);
                d.values = this.values()
            }
            this._trigger("stop", f, d)
        },_change: function(f, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var d = {handle: this.handles[e],value: this.value()};
                if (this.options.values && this.options.values.length) {
                    d.value = this.values(e);
                    d.values = this.values()
                }
                this._lastChangedValue = e;
                this._trigger("change", f, d)
            }
        },value: function(d) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(d);
                this._refreshValue();
                this._change(null, 0);
                return
            }
            return this._value()
        },values: function(e, h) {
            var g, d, f;
            if (arguments.length > 1) {
                this.options.values[e] = this._trimAlignValue(h);
                this._refreshValue();
                this._change(null, e);
                return
            }
            if (arguments.length) {
                if (b.isArray(arguments[0])) {
                    g = this.options.values;
                    d = arguments[0];
                    for (f = 0; f < g.length; f += 1) {
                        g[f] = this._trimAlignValue(d[f]);
                        this._change(null, f)
                    }
                    this._refreshValue()
                } else {
                    if (this.options.values && this.options.values.length) {
                        return this._values(e)
                    } else {
                        return this.value()
                    }
                }
            } else {
                return this._values()
            }
        },_setOption: function(e, f) {
            var d, g = 0;
            if (e === "range" && this.options.range === true) {
                if (f === "min") {
                    this.options.value = this._values(0);
                    this.options.values = null
                } else {
                    if (f === "max") {
                        this.options.value = this._values(this.options.values.length - 1);
                        this.options.values = null
                    }
                }
            }
            if (b.isArray(this.options.values)) {
                g = this.options.values.length
            }
            b.Widget.prototype._setOption.apply(this, arguments);
            switch (e) {
                case "orientation":
                    this._detectOrientation();
                    this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                    this._refreshValue();
                    break;
                case "value":
                    this._animateOff = true;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = false;
                    break;
                case "values":
                    this._animateOff = true;
                    this._refreshValue();
                    for (d = 0; d < g; d += 1) {
                        this._change(null, d)
                    }
                    this._animateOff = false;
                    break;
                case "min":
                case "max":
                    this._animateOff = true;
                    this._refreshValue();
                    this._animateOff = false;
                    break;
                case "range":
                    this._animateOff = true;
                    this._refresh();
                    this._animateOff = false;
                    break
            }
        },_value: function() {
            var d = this.options.value;
            d = this._trimAlignValue(d);
            return d
        },_values: function(d) {
            var g, f, e;
            if (arguments.length) {
                g = this.options.values[d];
                g = this._trimAlignValue(g);
                return g
            } else {
                if (this.options.values && this.options.values.length) {
                    f = this.options.values.slice();
                    for (e = 0; e < f.length; e += 1) {
                        f[e] = this._trimAlignValue(f[e])
                    }
                    return f
                } else {
                    return []
                }
            }
        },_trimAlignValue: function(g) {
            if (g <= this._valueMin()) {
                return this._valueMin()
            }
            if (g >= this._valueMax()) {
                return this._valueMax()
            }
            var d = (this.options.step > 0) ? this.options.step : 1, f = (g - this._valueMin()) % d, e = g - f;
            if (Math.abs(f) * 2 >= d) {
                e += (f > 0) ? d : (-d)
            }
            return parseFloat(e.toFixed(5))
        },_valueMin: function() {
            return this.options.min
        },_valueMax: function() {
            return this.options.max
        },_refreshValue: function() {
            var i, h, l, j, m, g = this.options.range, f = this.options, k = this, e = (!this._animateOff) ? f.animate : false, d = {};
            if (this.options.values && this.options.values.length) {
                this.handles.each(function(n) {
                    h = (k.values(n) - k._valueMin()) / (k._valueMax() - k._valueMin()) * 100;
                    d[k.orientation === "horizontal" ? "left" : "bottom"] = h + "%";
                    b(this).stop(1, 1)[e ? "animate" : "css"](d, f.animate);
                    if (k.options.range === true) {
                        if (k.orientation === "horizontal") {
                            if (n === 0) {
                                k.range.stop(1, 1)[e ? "animate" : "css"]({left: h + "%"}, f.animate)
                            }
                            if (n === 1) {
                                k.range[e ? "animate" : "css"]({width: (h - i) + "%"}, {queue: false,duration: f.animate})
                            }
                        } else {
                            if (n === 0) {
                                k.range.stop(1, 1)[e ? "animate" : "css"]({bottom: (h) + "%"}, f.animate)
                            }
                            if (n === 1) {
                                k.range[e ? "animate" : "css"]({height: (h - i) + "%"}, {queue: false,duration: f.animate})
                            }
                        }
                    }
                    i = h
                })
            } else {
                l = this.value();
                j = this._valueMin();
                m = this._valueMax();
                h = (m !== j) ? (l - j) / (m - j) * 100 : 0;
                d[this.orientation === "horizontal" ? "left" : "bottom"] = h + "%";
                this.handle.stop(1, 1)[e ? "animate" : "css"](d, f.animate);
                if (g === "min" && this.orientation === "horizontal") {
                    this.range.stop(1, 1)[e ? "animate" : "css"]({width: h + "%"}, f.animate)
                }
                if (g === "max" && this.orientation === "horizontal") {
                    this.range[e ? "animate" : "css"]({width: (100 - h) + "%"}, {queue: false,duration: f.animate})
                }
                if (g === "min" && this.orientation === "vertical") {
                    this.range.stop(1, 1)[e ? "animate" : "css"]({height: h + "%"}, f.animate)
                }
                if (g === "max" && this.orientation === "vertical") {
                    this.range[e ? "animate" : "css"]({height: (100 - h) + "%"}, {queue: false,duration: f.animate})
                }
            }
        },_handleEvents: {keydown: function(h) {
                var i, f, e, g, d = b(h.target).data("ui-slider-handle-index");
                switch (h.keyCode) {
                    case b.ui.keyCode.HOME:
                    case b.ui.keyCode.END:
                    case b.ui.keyCode.PAGE_UP:
                    case b.ui.keyCode.PAGE_DOWN:
                    case b.ui.keyCode.UP:
                    case b.ui.keyCode.RIGHT:
                    case b.ui.keyCode.DOWN:
                    case b.ui.keyCode.LEFT:
                        h.preventDefault();
                        if (!this._keySliding) {
                            this._keySliding = true;
                            b(h.target).addClass("ui-state-active");
                            i = this._start(h, d);
                            if (i === false) {
                                return
                            }
                        }
                        break
                }
                g = this.options.step;
                if (this.options.values && this.options.values.length) {
                    f = e = this.values(d)
                } else {
                    f = e = this.value()
                }
                switch (h.keyCode) {
                    case b.ui.keyCode.HOME:
                        e = this._valueMin();
                        break;
                    case b.ui.keyCode.END:
                        e = this._valueMax();
                        break;
                    case b.ui.keyCode.PAGE_UP:
                        e = this._trimAlignValue(f + ((this._valueMax() - this._valueMin()) / a));
                        break;
                    case b.ui.keyCode.PAGE_DOWN:
                        e = this._trimAlignValue(f - ((this._valueMax() - this._valueMin()) / a));
                        break;
                    case b.ui.keyCode.UP:
                    case b.ui.keyCode.RIGHT:
                        if (f === this._valueMax()) {
                            return
                        }
                        e = this._trimAlignValue(f + g);
                        break;
                    case b.ui.keyCode.DOWN:
                    case b.ui.keyCode.LEFT:
                        if (f === this._valueMin()) {
                            return
                        }
                        e = this._trimAlignValue(f - g);
                        break
                }
                this._slide(h, d, e)
            },click: function(d) {
                d.preventDefault()
            },keyup: function(e) {
                var d = b(e.target).data("ui-slider-handle-index");
                if (this._keySliding) {
                    this._keySliding = false;
                    this._stop(e, d);
                    this._change(e, d);
                    b(e.target).removeClass("ui-state-active")
                }
            }}})
}(jQuery));
(function(b) {
    function a(c) {
        return function() {
            var d = this.element.val();
            c.apply(this, arguments);
            this._refresh();
            if (d !== this.element.val()) {
                this._trigger("change")
            }
        }
    }
    b.widget("ui.spinner", {version: "1.10.2",defaultElement: "<input>",widgetEventPrefix: "spin",options: {culture: null,icons: {down: "ui-icon-triangle-1-s",up: "ui-icon-triangle-1-n"},incremental: true,max: null,min: null,numberFormat: null,page: 10,step: 1,change: null,spin: null,start: null,stop: null},_create: function() {
            this._setOption("max", this.options.max);
            this._setOption("min", this.options.min);
            this._setOption("step", this.options.step);
            this._value(this.element.val(), true);
            this._draw();
            this._on(this._events);
            this._refresh();
            this._on(this.window, {beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }})
        },_getCreateOptions: function() {
            var c = {}, d = this.element;
            b.each(["min", "max", "step"], function(e, f) {
                var g = d.attr(f);
                if (g !== undefined && g.length) {
                    c[f] = g
                }
            });
            return c
        },_events: {keydown: function(c) {
                if (this._start(c) && this._keydown(c)) {
                    c.preventDefault()
                }
            },keyup: "_stop",focus: function() {
                this.previous = this.element.val()
            },blur: function(c) {
                if (this.cancelBlur) {
                    delete this.cancelBlur;
                    return
                }
                this._stop();
                this._refresh();
                if (this.previous !== this.element.val()) {
                    this._trigger("change", c)
                }
            },mousewheel: function(c, d) {
                if (!d) {
                    return
                }
                if (!this.spinning && !this._start(c)) {
                    return false
                }
                this._spin((d > 0 ? 1 : -1) * this.options.step, c);
                clearTimeout(this.mousewheelTimer);
                this.mousewheelTimer = this._delay(function() {
                    if (this.spinning) {
                        this._stop(c)
                    }
                }, 100);
                c.preventDefault()
            },"mousedown .ui-spinner-button": function(d) {
                var c;
                c = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();
                function e() {
                    var f = this.element[0] === this.document[0].activeElement;
                    if (!f) {
                        this.element.focus();
                        this.previous = c;
                        this._delay(function() {
                            this.previous = c
                        })
                    }
                }
                d.preventDefault();
                e.call(this);
                this.cancelBlur = true;
                this._delay(function() {
                    delete this.cancelBlur;
                    e.call(this)
                });
                if (this._start(d) === false) {
                    return
                }
                this._repeat(null, b(d.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, d)
            },"mouseup .ui-spinner-button": "_stop","mouseenter .ui-spinner-button": function(c) {
                if (!b(c.currentTarget).hasClass("ui-state-active")) {
                    return
                }
                if (this._start(c) === false) {
                    return false
                }
                this._repeat(null, b(c.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, c)
            },"mouseleave .ui-spinner-button": "_stop"},_draw: function() {
            var c = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton");
            this.buttons = c.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
            if (this.buttons.height() > Math.ceil(c.height() * 0.5) && c.height() > 0) {
                c.height(c.height())
            }
            if (this.options.disabled) {
                this.disable()
            }
        },_keydown: function(d) {
            var c = this.options, e = b.ui.keyCode;
            switch (d.keyCode) {
                case e.UP:
                    this._repeat(null, 1, d);
                    return true;
                case e.DOWN:
                    this._repeat(null, -1, d);
                    return true;
                case e.PAGE_UP:
                    this._repeat(null, c.page, d);
                    return true;
                case e.PAGE_DOWN:
                    this._repeat(null, -c.page, d);
                    return true
            }
            return false
        },_uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },_buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
        },_start: function(c) {
            if (!this.spinning && this._trigger("start", c) === false) {
                return false
            }
            if (!this.counter) {
                this.counter = 1
            }
            this.spinning = true;
            return true
        },_repeat: function(d, c, e) {
            d = d || 500;
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                this._repeat(40, c, e)
            }, d);
            this._spin(c * this.options.step, e)
        },_spin: function(d, c) {
            var e = this.value() || 0;
            if (!this.counter) {
                this.counter = 1
            }
            e = this._adjustValue(e + d * this._increment(this.counter));
            if (!this.spinning || this._trigger("spin", c, {value: e}) !== false) {
                this._value(e);
                this.counter++
            }
        },_increment: function(c) {
            var d = this.options.incremental;
            if (d) {
                return b.isFunction(d) ? d(c) : Math.floor(c * c * c / 50000 - c * c / 500 + 17 * c / 200 + 1)
            }
            return 1
        },_precision: function() {
            var c = this._precisionOf(this.options.step);
            if (this.options.min !== null) {
                c = Math.max(c, this._precisionOf(this.options.min))
            }
            return c
        },_precisionOf: function(d) {
            var e = d.toString(), c = e.indexOf(".");
            return c === -1 ? 0 : e.length - c - 1
        },_adjustValue: function(e) {
            var d, f, c = this.options;
            d = c.min !== null ? c.min : 0;
            f = e - d;
            f = Math.round(f / c.step) * c.step;
            e = d + f;
            e = parseFloat(e.toFixed(this._precision()));
            if (c.max !== null && e > c.max) {
                return c.max
            }
            if (c.min !== null && e < c.min) {
                return c.min
            }
            return e
        },_stop: function(c) {
            if (!this.spinning) {
                return
            }
            clearTimeout(this.timer);
            clearTimeout(this.mousewheelTimer);
            this.counter = 0;
            this.spinning = false;
            this._trigger("stop", c)
        },_setOption: function(c, d) {
            if (c === "culture" || c === "numberFormat") {
                var e = this._parse(this.element.val());
                this.options[c] = d;
                this.element.val(this._format(e));
                return
            }
            if (c === "max" || c === "min" || c === "step") {
                if (typeof d === "string") {
                    d = this._parse(d)
                }
            }
            if (c === "icons") {
                this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(d.up);
                this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(d.down)
            }
            this._super(c, d);
            if (c === "disabled") {
                if (d) {
                    this.element.prop("disabled", true);
                    this.buttons.button("disable")
                } else {
                    this.element.prop("disabled", false);
                    this.buttons.button("enable")
                }
            }
        },_setOptions: a(function(c) {
            this._super(c);
            this._value(this.element.val())
        }),_parse: function(c) {
            if (typeof c === "string" && c !== "") {
                c = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(c, 10, this.options.culture) : +c
            }
            return c === "" || isNaN(c) ? null : c
        },_format: function(c) {
            if (c === "") {
                return ""
            }
            return window.Globalize && this.options.numberFormat ? Globalize.format(c, this.options.numberFormat, this.options.culture) : c
        },_refresh: function() {
            this.element.attr({"aria-valuemin": this.options.min,"aria-valuemax": this.options.max,"aria-valuenow": this._parse(this.element.val())})
        },_value: function(e, c) {
            var d;
            if (e !== "") {
                d = this._parse(e);
                if (d !== null) {
                    if (!c) {
                        d = this._adjustValue(d)
                    }
                    e = this._format(d)
                }
            }
            this.element.val(e);
            this._refresh()
        },_destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.uiSpinner.replaceWith(this.element)
        },stepUp: a(function(c) {
            this._stepUp(c)
        }),_stepUp: function(c) {
            if (this._start()) {
                this._spin((c || 1) * this.options.step);
                this._stop()
            }
        },stepDown: a(function(c) {
            this._stepDown(c)
        }),_stepDown: function(c) {
            if (this._start()) {
                this._spin((c || 1) * -this.options.step);
                this._stop()
            }
        },pageUp: a(function(c) {
            this._stepUp((c || 1) * this.options.page)
        }),pageDown: a(function(c) {
            this._stepDown((c || 1) * this.options.page)
        }),value: function(c) {
            if (!arguments.length) {
                return this._parse(this.element.val())
            }
            a(this._value).call(this, c)
        },widget: function() {
            return this.uiSpinner
        }})
}(jQuery));
(function(c, e) {
    var a = 0, f = /#.*$/;
    function d() {
        return ++a
    }
    function b(g) {
        return g.hash.length > 1 && decodeURIComponent(g.href.replace(f, "")) === decodeURIComponent(location.href.replace(f, ""))
    }
    c.widget("ui.tabs", {version: "1.10.2",delay: 300,options: {active: null,collapsible: false,event: "click",heightStyle: "content",hide: null,show: null,activate: null,beforeActivate: null,beforeLoad: null,load: null},_create: function() {
            var h = this, g = this.options;
            this.running = false;
            this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", g.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(i) {
                if (c(this).is(".ui-state-disabled")) {
                    i.preventDefault()
                }
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                if (c(this).closest("li").is(".ui-state-disabled")) {
                    this.blur()
                }
            });
            this._processTabs();
            g.active = this._initialActive();
            if (c.isArray(g.disabled)) {
                g.disabled = c.unique(g.disabled.concat(c.map(this.tabs.filter(".ui-state-disabled"), function(i) {
                    return h.tabs.index(i)
                }))).sort()
            }
            if (this.options.active !== false && this.anchors.length) {
                this.active = this._findActive(g.active)
            } else {
                this.active = c()
            }
            this._refresh();
            if (this.active.length) {
                this.load(g.active)
            }
        },_initialActive: function() {
            var h = this.options.active, g = this.options.collapsible, i = location.hash.substring(1);
            if (h === null) {
                if (i) {
                    this.tabs.each(function(j, k) {
                        if (c(k).attr("aria-controls") === i) {
                            h = j;
                            return false
                        }
                    })
                }
                if (h === null) {
                    h = this.tabs.index(this.tabs.filter(".ui-tabs-active"))
                }
                if (h === null || h === -1) {
                    h = this.tabs.length ? 0 : false
                }
            }
            if (h !== false) {
                h = this.tabs.index(this.tabs.eq(h));
                if (h === -1) {
                    h = g ? false : 0
                }
            }
            if (!g && h === false && this.anchors.length) {
                h = 0
            }
            return h
        },_getCreateEventData: function() {
            return {tab: this.active,panel: !this.active.length ? c() : this._getPanelForTab(this.active)}
        },_tabKeydown: function(i) {
            var h = c(this.document[0].activeElement).closest("li"), g = this.tabs.index(h), j = true;
            if (this._handlePageNav(i)) {
                return
            }
            switch (i.keyCode) {
                case c.ui.keyCode.RIGHT:
                case c.ui.keyCode.DOWN:
                    g++;
                    break;
                case c.ui.keyCode.UP:
                case c.ui.keyCode.LEFT:
                    j = false;
                    g--;
                    break;
                case c.ui.keyCode.END:
                    g = this.anchors.length - 1;
                    break;
                case c.ui.keyCode.HOME:
                    g = 0;
                    break;
                case c.ui.keyCode.SPACE:
                    i.preventDefault();
                    clearTimeout(this.activating);
                    this._activate(g);
                    return;
                case c.ui.keyCode.ENTER:
                    i.preventDefault();
                    clearTimeout(this.activating);
                    this._activate(g === this.options.active ? false : g);
                    return;
                default:
                    return
            }
            i.preventDefault();
            clearTimeout(this.activating);
            g = this._focusNextTab(g, j);
            if (!i.ctrlKey) {
                h.attr("aria-selected", "false");
                this.tabs.eq(g).attr("aria-selected", "true");
                this.activating = this._delay(function() {
                    this.option("active", g)
                }, this.delay)
            }
        },_panelKeydown: function(g) {
            if (this._handlePageNav(g)) {
                return
            }
            if (g.ctrlKey && g.keyCode === c.ui.keyCode.UP) {
                g.preventDefault();
                this.active.focus()
            }
        },_handlePageNav: function(g) {
            if (g.altKey && g.keyCode === c.ui.keyCode.PAGE_UP) {
                this._activate(this._focusNextTab(this.options.active - 1, false));
                return true
            }
            if (g.altKey && g.keyCode === c.ui.keyCode.PAGE_DOWN) {
                this._activate(this._focusNextTab(this.options.active + 1, true));
                return true
            }
        },_findNextTab: function(h, i) {
            var g = this.tabs.length - 1;
            function j() {
                if (h > g) {
                    h = 0
                }
                if (h < 0) {
                    h = g
                }
                return h
            }
            while (c.inArray(j(), this.options.disabled) !== -1) {
                h = i ? h + 1 : h - 1
            }
            return h
        },_focusNextTab: function(g, h) {
            g = this._findNextTab(g, h);
            this.tabs.eq(g).focus();
            return g
        },_setOption: function(g, h) {
            if (g === "active") {
                this._activate(h);
                return
            }
            if (g === "disabled") {
                this._setupDisabled(h);
                return
            }
            this._super(g, h);
            if (g === "collapsible") {
                this.element.toggleClass("ui-tabs-collapsible", h);
                if (!h && this.options.active === false) {
                    this._activate(0)
                }
            }
            if (g === "event") {
                this._setupEvents(h)
            }
            if (g === "heightStyle") {
                this._setupHeightStyle(h)
            }
        },_tabId: function(g) {
            return g.attr("aria-controls") || "ui-tabs-" + d()
        },_sanitizeSelector: function(g) {
            return g ? g.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },refresh: function() {
            var h = this.options, g = this.tablist.children(":has(a[href])");
            h.disabled = c.map(g.filter(".ui-state-disabled"), function(i) {
                return g.index(i)
            });
            this._processTabs();
            if (h.active === false || !this.anchors.length) {
                h.active = false;
                this.active = c()
            } else {
                if (this.active.length && !c.contains(this.tablist[0], this.active[0])) {
                    if (this.tabs.length === h.disabled.length) {
                        h.active = false;
                        this.active = c()
                    } else {
                        this._activate(this._findNextTab(Math.max(0, h.active - 1), false))
                    }
                } else {
                    h.active = this.tabs.index(this.active)
                }
            }
            this._refresh()
        },_refresh: function() {
            this._setupDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({"aria-selected": "false",tabIndex: -1});
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded": "false","aria-hidden": "true"});
            if (!this.active.length) {
                this.tabs.eq(0).attr("tabIndex", 0)
            } else {
                this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected": "true",tabIndex: 0});
                this._getPanelForTab(this.active).show().attr({"aria-expanded": "true","aria-hidden": "false"})
            }
        },_processTabs: function() {
            var g = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist");
            this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role: "tab",tabIndex: -1});
            this.anchors = this.tabs.map(function() {
                return c("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({role: "presentation",tabIndex: -1});
            this.panels = c();
            this.anchors.each(function(n, l) {
                var h, j, m, k = c(l).uniqueId().attr("id"), o = c(l).closest("li"), p = o.attr("aria-controls");
                if (b(l)) {
                    h = l.hash;
                    j = g.element.find(g._sanitizeSelector(h))
                } else {
                    m = g._tabId(o);
                    h = "#" + m;
                    j = g.element.find(h);
                    if (!j.length) {
                        j = g._createPanel(m);
                        j.insertAfter(g.panels[n - 1] || g.tablist)
                    }
                    j.attr("aria-live", "polite")
                }
                if (j.length) {
                    g.panels = g.panels.add(j)
                }
                if (p) {
                    o.data("ui-tabs-aria-controls", p)
                }
                o.attr({"aria-controls": h.substring(1),"aria-labelledby": k});
                j.attr("aria-labelledby", k)
            });
            this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },_getList: function() {
            return this.element.find("ol,ul").eq(0)
        },_createPanel: function(g) {
            return c("<div>").attr("id", g).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", true)
        },_setupDisabled: function(j) {
            if (c.isArray(j)) {
                if (!j.length) {
                    j = false
                } else {
                    if (j.length === this.anchors.length) {
                        j = true
                    }
                }
            }
            for (var h = 0, g; (g = this.tabs[h]); h++) {
                if (j === true || c.inArray(h, j) !== -1) {
                    c(g).addClass("ui-state-disabled").attr("aria-disabled", "true")
                } else {
                    c(g).removeClass("ui-state-disabled").removeAttr("aria-disabled")
                }
            }
            this.options.disabled = j
        },_setupEvents: function(h) {
            var g = {click: function(i) {
                    i.preventDefault()
                }};
            if (h) {
                c.each(h.split(" "), function(j, i) {
                    g[i] = "_eventHandler"
                })
            }
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(this.anchors, g);
            this._on(this.tabs, {keydown: "_tabKeydown"});
            this._on(this.panels, {keydown: "_panelKeydown"});
            this._focusable(this.tabs);
            this._hoverable(this.tabs)
        },_setupHeightStyle: function(g) {
            var i, h = this.element.parent();
            if (g === "fill") {
                i = h.height();
                i -= this.element.outerHeight() - this.element.height();
                this.element.siblings(":visible").each(function() {
                    var k = c(this), j = k.css("position");
                    if (j === "absolute" || j === "fixed") {
                        return
                    }
                    i -= k.outerHeight(true)
                });
                this.element.children().not(this.panels).each(function() {
                    i -= c(this).outerHeight(true)
                });
                this.panels.each(function() {
                    c(this).height(Math.max(0, i - c(this).innerHeight() + c(this).height()))
                }).css("overflow", "auto")
            } else {
                if (g === "auto") {
                    i = 0;
                    this.panels.each(function() {
                        i = Math.max(i, c(this).height("").height())
                    }).height(i)
                }
            }
        },_eventHandler: function(g) {
            var p = this.options, k = this.active, l = c(g.currentTarget), j = l.closest("li"), n = j[0] === k[0], h = n && p.collapsible, i = h ? c() : this._getPanelForTab(j), m = !k.length ? c() : this._getPanelForTab(k), o = {oldTab: k,oldPanel: m,newTab: h ? c() : j,newPanel: i};
            g.preventDefault();
            if (j.hasClass("ui-state-disabled") || j.hasClass("ui-tabs-loading") || this.running || (n && !p.collapsible) || (this._trigger("beforeActivate", g, o) === false)) {
                return
            }
            p.active = h ? false : this.tabs.index(j);
            this.active = n ? c() : j;
            if (this.xhr) {
                this.xhr.abort()
            }
            if (!m.length && !i.length) {
                c.error("jQuery UI Tabs: Mismatching fragment identifier.")
            }
            if (i.length) {
                this.load(this.tabs.index(j), g)
            }
            this._toggle(g, o)
        },_toggle: function(m, l) {
            var k = this, g = l.newPanel, j = l.oldPanel;
            this.running = true;
            function i() {
                k.running = false;
                k._trigger("activate", m, l)
            }
            function h() {
                l.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
                if (g.length && k.options.show) {
                    k._show(g, k.options.show, i)
                } else {
                    g.show();
                    i()
                }
            }
            if (j.length && this.options.hide) {
                this._hide(j, this.options.hide, function() {
                    l.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                    h()
                })
            } else {
                l.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                j.hide();
                h()
            }
            j.attr({"aria-expanded": "false","aria-hidden": "true"});
            l.oldTab.attr("aria-selected", "false");
            if (g.length && j.length) {
                l.oldTab.attr("tabIndex", -1)
            } else {
                if (g.length) {
                    this.tabs.filter(function() {
                        return c(this).attr("tabIndex") === 0
                    }).attr("tabIndex", -1)
                }
            }
            g.attr({"aria-expanded": "true","aria-hidden": "false"});
            l.newTab.attr({"aria-selected": "true",tabIndex: 0})
        },_activate: function(h) {
            var g, i = this._findActive(h);
            if (i[0] === this.active[0]) {
                return
            }
            if (!i.length) {
                i = this.active
            }
            g = i.find(".ui-tabs-anchor")[0];
            this._eventHandler({target: g,currentTarget: g,preventDefault: c.noop})
        },_findActive: function(g) {
            return g === false ? c() : this.tabs.eq(g)
        },_getIndex: function(g) {
            if (typeof g === "string") {
                g = this.anchors.index(this.anchors.filter("[href$='" + g + "']"))
            }
            return g
        },_destroy: function() {
            if (this.xhr) {
                this.xhr.abort()
            }
            this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
            this.tabs.add(this.panels).each(function() {
                if (c.data(this, "ui-tabs-destroy")) {
                    c(this).remove()
                } else {
                    c(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }
            });
            this.tabs.each(function() {
                var g = c(this), h = g.data("ui-tabs-aria-controls");
                if (h) {
                    g.attr("aria-controls", h).removeData("ui-tabs-aria-controls")
                } else {
                    g.removeAttr("aria-controls")
                }
            });
            this.panels.show();
            if (this.options.heightStyle !== "content") {
                this.panels.css("height", "")
            }
        },enable: function(g) {
            var h = this.options.disabled;
            if (h === false) {
                return
            }
            if (g === e) {
                h = false
            } else {
                g = this._getIndex(g);
                if (c.isArray(h)) {
                    h = c.map(h, function(i) {
                        return i !== g ? i : null
                    })
                } else {
                    h = c.map(this.tabs, function(i, j) {
                        return j !== g ? j : null
                    })
                }
            }
            this._setupDisabled(h)
        },disable: function(g) {
            var h = this.options.disabled;
            if (h === true) {
                return
            }
            if (g === e) {
                h = true
            } else {
                g = this._getIndex(g);
                if (c.inArray(g, h) !== -1) {
                    return
                }
                if (c.isArray(h)) {
                    h = c.merge([g], h).sort()
                } else {
                    h = [g]
                }
            }
            this._setupDisabled(h)
        },load: function(i, m) {
            i = this._getIndex(i);
            var l = this, j = this.tabs.eq(i), h = j.find(".ui-tabs-anchor"), g = this._getPanelForTab(j), k = {tab: j,panel: g};
            if (b(h[0])) {
                return
            }
            this.xhr = c.ajax(this._ajaxSettings(h, m, k));
            if (this.xhr && this.xhr.statusText !== "canceled") {
                j.addClass("ui-tabs-loading");
                g.attr("aria-busy", "true");
                this.xhr.success(function(n) {
                    setTimeout(function() {
                        g.html(n);
                        l._trigger("load", m, k)
                    }, 1)
                }).complete(function(o, n) {
                    setTimeout(function() {
                        if (n === "abort") {
                            l.panels.stop(false, true)
                        }
                        j.removeClass("ui-tabs-loading");
                        g.removeAttr("aria-busy");
                        if (o === l.xhr) {
                            delete l.xhr
                        }
                    }, 1)
                })
            }
        },_ajaxSettings: function(g, j, i) {
            var h = this;
            return {url: g.attr("href"),beforeSend: function(l, k) {
                    return h._trigger("beforeLoad", j, c.extend({jqXHR: l,ajaxSettings: k}, i))
                }}
        },_getPanelForTab: function(g) {
            var h = c(g).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + h))
        }})
})(jQuery);
(function(d) {
    var b = 0;
    function c(f, g) {
        var e = (f.attr("aria-describedby") || "").split(/\s+/);
        e.push(g);
        f.data("ui-tooltip-id", g).attr("aria-describedby", d.trim(e.join(" ")))
    }
    function a(g) {
        var h = g.data("ui-tooltip-id"), f = (g.attr("aria-describedby") || "").split(/\s+/), e = d.inArray(h, f);
        if (e !== -1) {
            f.splice(e, 1)
        }
        g.removeData("ui-tooltip-id");
        f = d.trim(f.join(" "));
        if (f) {
            g.attr("aria-describedby", f)
        } else {
            g.removeAttr("aria-describedby")
        }
    }
    d.widget("ui.tooltip", {version: "1.10.2",options: {content: function() {
                var e = d(this).attr("title") || "";
                return d("<a>").text(e).html()
            },hide: true,items: "[title]:not([disabled])",position: {my: "left top+15",at: "left bottom",collision: "flipfit flip"},show: true,tooltipClass: null,track: false,close: null,open: null},_create: function() {
            this._on({mouseover: "open",focusin: "open"});
            this.tooltips = {};
            this.parents = {};
            if (this.options.disabled) {
                this._disable()
            }
        },_setOption: function(e, g) {
            var f = this;
            if (e === "disabled") {
                this[g ? "_disable" : "_enable"]();
                this.options[e] = g;
                return
            }
            this._super(e, g);
            if (e === "content") {
                d.each(this.tooltips, function(i, h) {
                    f._updateContent(h)
                })
            }
        },_disable: function() {
            var e = this;
            d.each(this.tooltips, function(h, f) {
                var g = d.Event("blur");
                g.target = g.currentTarget = f[0];
                e.close(g, true)
            });
            this.element.find(this.options.items).addBack().each(function() {
                var f = d(this);
                if (f.is("[title]")) {
                    f.data("ui-tooltip-title", f.attr("title")).attr("title", "")
                }
            })
        },_enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var e = d(this);
                if (e.data("ui-tooltip-title")) {
                    e.attr("title", e.data("ui-tooltip-title"))
                }
            })
        },open: function(f) {
            var e = this, g = d(f ? f.target : this.element).closest(this.options.items);
            if (!g.length || g.data("ui-tooltip-id")) {
                return
            }
            if (g.attr("title")) {
                g.data("ui-tooltip-title", g.attr("title"))
            }
            g.data("ui-tooltip-open", true);
            if (f && f.type === "mouseover") {
                g.parents().each(function() {
                    var i = d(this), h;
                    if (i.data("ui-tooltip-open")) {
                        h = d.Event("blur");
                        h.target = h.currentTarget = this;
                        e.close(h, true)
                    }
                    if (i.attr("title")) {
                        i.uniqueId();
                        e.parents[this.id] = {element: this,title: i.attr("title")};
                        i.attr("title", "")
                    }
                })
            }
            this._updateContent(g, f)
        },_updateContent: function(j, i) {
            var h, e = this.options.content, g = this, f = i ? i.type : null;
            if (typeof e === "string") {
                return this._open(i, j, e)
            }
            h = e.call(j[0], function(k) {
                if (!j.data("ui-tooltip-open")) {
                    return
                }
                g._delay(function() {
                    if (i) {
                        i.type = f
                    }
                    this._open(i, j, k)
                })
            });
            if (h) {
                this._open(i, j, h)
            }
        },_open: function(i, k, h) {
            var j, g, f, l = d.extend({}, this.options.position);
            if (!h) {
                return
            }
            j = this._find(k);
            if (j.length) {
                j.find(".ui-tooltip-content").html(h);
                return
            }
            if (k.is("[title]")) {
                if (i && i.type === "mouseover") {
                    k.attr("title", "")
                } else {
                    k.removeAttr("title")
                }
            }
            j = this._tooltip(k);
            c(k, j.attr("id"));
            j.find(".ui-tooltip-content").html(h);
            function e(m) {
                l.of = m;
                if (j.is(":hidden")) {
                    return
                }
                j.position(l)
            }
            if (this.options.track && i && /^mouse/.test(i.type)) {
                this._on(this.document, {mousemove: e});
                e(i)
            } else {
                j.position(d.extend({of: k}, this.options.position))
            }
            j.hide();
            this._show(j, this.options.show);
            if (this.options.show && this.options.show.delay) {
                f = this.delayedShow = setInterval(function() {
                    if (j.is(":visible")) {
                        e(l.of);
                        clearInterval(f)
                    }
                }, d.fx.interval)
            }
            this._trigger("open", i, {tooltip: j});
            g = {keyup: function(m) {
                    if (m.keyCode === d.ui.keyCode.ESCAPE) {
                        var n = d.Event(m);
                        n.currentTarget = k[0];
                        this.close(n, true)
                    }
                },remove: function() {
                    this._removeTooltip(j)
                }};
            if (!i || i.type === "mouseover") {
                g.mouseleave = "close"
            }
            if (!i || i.type === "focusin") {
                g.focusout = "close"
            }
            this._on(true, k, g)
        },close: function(f) {
            var e = this, h = d(f ? f.currentTarget : this.element), g = this._find(h);
            if (this.closing) {
                return
            }
            clearInterval(this.delayedShow);
            if (h.data("ui-tooltip-title")) {
                h.attr("title", h.data("ui-tooltip-title"))
            }
            a(h);
            g.stop(true);
            this._hide(g, this.options.hide, function() {
                e._removeTooltip(d(this))
            });
            h.removeData("ui-tooltip-open");
            this._off(h, "mouseleave focusout keyup");
            if (h[0] !== this.element[0]) {
                this._off(h, "remove")
            }
            this._off(this.document, "mousemove");
            if (f && f.type === "mouseleave") {
                d.each(this.parents, function(j, i) {
                    d(i.element).attr("title", i.title);
                    delete e.parents[j]
                })
            }
            this.closing = true;
            this._trigger("close", f, {tooltip: g});
            this.closing = false
        },_tooltip: function(e) {
            var g = "ui-tooltip-" + b++, f = d("<div>").attr({id: g,role: "tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            d("<div>").addClass("ui-tooltip-content").appendTo(f);
            f.appendTo(this.document[0].body);
            this.tooltips[g] = e;
            return f
        },_find: function(e) {
            var f = e.data("ui-tooltip-id");
            return f ? d("#" + f) : d()
        },_removeTooltip: function(e) {
            e.remove();
            delete this.tooltips[e.attr("id")]
        },_destroy: function() {
            var e = this;
            d.each(this.tooltips, function(h, f) {
                var g = d.Event("blur");
                g.target = g.currentTarget = f[0];
                e.close(g, true);
                d("#" + h).remove();
                if (f.data("ui-tooltip-title")) {
                    f.attr("title", f.data("ui-tooltip-title"));
                    f.removeData("ui-tooltip-title")
                }
            })
        }})
}(jQuery));
(function(a, c) {
    var b = "ui-effects-";
    a.effects = {effect: {}};
    /*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
    (function(r, g) {
        var n = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", k = /^([\-+])=\s*(\d+\.?\d*)/, j = [{re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse: function(s) {
                    return [s[1], s[2], s[3], s[4]]
                }}, {re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse: function(s) {
                    return [s[1] * 2.55, s[2] * 2.55, s[3] * 2.55, s[4]]
                }}, {re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse: function(s) {
                    return [parseInt(s[1], 16), parseInt(s[2], 16), parseInt(s[3], 16)]
                }}, {re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,parse: function(s) {
                    return [parseInt(s[1] + s[1], 16), parseInt(s[2] + s[2], 16), parseInt(s[3] + s[3], 16)]
                }}, {re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space: "hsla",parse: function(s) {
                    return [s[1], s[2] / 100, s[3] / 100, s[4]]
                }}], h = r.Color = function(t, u, s, v) {
            return new r.Color.fn.parse(t, u, s, v)
        }, m = {rgba: {props: {red: {idx: 0,type: "byte"},green: {idx: 1,type: "byte"},blue: {idx: 2,type: "byte"}}},hsla: {props: {hue: {idx: 0,type: "degrees"},saturation: {idx: 1,type: "percent"},lightness: {idx: 2,type: "percent"}}}}, q = {"byte": {floor: true,max: 255},percent: {max: 1},degrees: {mod: 360,floor: true}}, p = h.support = {}, e = r("<p>")[0], d, o = r.each;
        e.style.cssText = "background-color:rgba(1,1,1,.5)";
        p.rgba = e.style.backgroundColor.indexOf("rgba") > -1;
        o(m, function(s, t) {
            t.cache = "_" + s;
            t.props.alpha = {idx: 3,type: "percent",def: 1}
        });
        function l(t, v, u) {
            var s = q[v.type] || {};
            if (t == null) {
                return (u || !v.def) ? null : v.def
            }
            t = s.floor ? ~~t : parseFloat(t);
            if (isNaN(t)) {
                return v.def
            }
            if (s.mod) {
                return (t + s.mod) % s.mod
            }
            return 0 > t ? 0 : s.max < t ? s.max : t
        }
        function i(s) {
            var u = h(), t = u._rgba = [];
            s = s.toLowerCase();
            o(j, function(z, A) {
                var x, y = A.re.exec(s), w = y && A.parse(y), v = A.space || "rgba";
                if (w) {
                    x = u[v](w);
                    u[m[v].cache] = x[m[v].cache];
                    t = u._rgba = x._rgba;
                    return false
                }
            });
            if (t.length) {
                if (t.join() === "0,0,0,0") {
                    r.extend(t, d.transparent)
                }
                return u
            }
            return d[s]
        }
        h.fn = r.extend(h.prototype, {parse: function(y, w, s, x) {
                if (y === g) {
                    this._rgba = [null, null, null, null];
                    return this
                }
                if (y.jquery || y.nodeType) {
                    y = r(y).css(w);
                    w = g
                }
                var v = this, u = r.type(y), t = this._rgba = [];
                if (w !== g) {
                    y = [y, w, s, x];
                    u = "array"
                }
                if (u === "string") {
                    return this.parse(i(y) || d._default)
                }
                if (u === "array") {
                    o(m.rgba.props, function(z, A) {
                        t[A.idx] = l(y[A.idx], A)
                    });
                    return this
                }
                if (u === "object") {
                    if (y instanceof h) {
                        o(m, function(z, A) {
                            if (y[A.cache]) {
                                v[A.cache] = y[A.cache].slice()
                            }
                        })
                    } else {
                        o(m, function(A, B) {
                            var z = B.cache;
                            o(B.props, function(C, D) {
                                if (!v[z] && B.to) {
                                    if (C === "alpha" || y[C] == null) {
                                        return
                                    }
                                    v[z] = B.to(v._rgba)
                                }
                                v[z][D.idx] = l(y[C], D, true)
                            });
                            if (v[z] && r.inArray(null, v[z].slice(0, 3)) < 0) {
                                v[z][3] = 1;
                                if (B.from) {
                                    v._rgba = B.from(v[z])
                                }
                            }
                        })
                    }
                    return this
                }
            },is: function(u) {
                var s = h(u), v = true, t = this;
                o(m, function(w, y) {
                    var z, x = s[y.cache];
                    if (x) {
                        z = t[y.cache] || y.to && y.to(t._rgba) || [];
                        o(y.props, function(A, B) {
                            if (x[B.idx] != null) {
                                v = (x[B.idx] === z[B.idx]);
                                return v
                            }
                        })
                    }
                    return v
                });
                return v
            },_space: function() {
                var s = [], t = this;
                o(m, function(u, v) {
                    if (t[v.cache]) {
                        s.push(u)
                    }
                });
                return s.pop()
            },transition: function(t, z) {
                var u = h(t), v = u._space(), w = m[v], x = this.alpha() === 0 ? h("transparent") : this, y = x[w.cache] || w.to(x._rgba), s = y.slice();
                u = u[w.cache];
                o(w.props, function(D, F) {
                    var C = F.idx, B = y[C], A = u[C], E = q[F.type] || {};
                    if (A === null) {
                        return
                    }
                    if (B === null) {
                        s[C] = A
                    } else {
                        if (E.mod) {
                            if (A - B > E.mod / 2) {
                                B += E.mod
                            } else {
                                if (B - A > E.mod / 2) {
                                    B -= E.mod
                                }
                            }
                        }
                        s[C] = l((A - B) * z + B, F)
                    }
                });
                return this[v](s)
            },blend: function(v) {
                if (this._rgba[3] === 1) {
                    return this
                }
                var u = this._rgba.slice(), t = u.pop(), s = h(v)._rgba;
                return h(r.map(u, function(w, x) {
                    return (1 - t) * s[x] + t * w
                }))
            },toRgbaString: function() {
                var t = "rgba(", s = r.map(this._rgba, function(u, w) {
                    return u == null ? (w > 2 ? 1 : 0) : u
                });
                if (s[3] === 1) {
                    s.pop();
                    t = "rgb("
                }
                return t + s.join() + ")"
            },toHslaString: function() {
                var t = "hsla(", s = r.map(this.hsla(), function(u, w) {
                    if (u == null) {
                        u = w > 2 ? 1 : 0
                    }
                    if (w && w < 3) {
                        u = Math.round(u * 100) + "%"
                    }
                    return u
                });
                if (s[3] === 1) {
                    s.pop();
                    t = "hsl("
                }
                return t + s.join() + ")"
            },toHexString: function(s) {
                var t = this._rgba.slice(), u = t.pop();
                if (s) {
                    t.push(~~(u * 255))
                }
                return "#" + r.map(t, function(w) {
                    w = (w || 0).toString(16);
                    return w.length === 1 ? "0" + w : w
                }).join("")
            },toString: function() {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
            }});
        h.fn.parse.prototype = h.fn;
        function f(u, t, s) {
            s = (s + 1) % 1;
            if (s * 6 < 1) {
                return u + (t - u) * s * 6
            }
            if (s * 2 < 1) {
                return t
            }
            if (s * 3 < 2) {
                return u + (t - u) * ((2 / 3) - s) * 6
            }
            return u
        }
        m.hsla.to = function(v) {
            if (v[0] == null || v[1] == null || v[2] == null) {
                return [null, null, null, v[3]]
            }
            var t = v[0] / 255, y = v[1] / 255, z = v[2] / 255, B = v[3], A = Math.max(t, y, z), w = Math.min(t, y, z), C = A - w, D = A + w, u = D * 0.5, x, E;
            if (w === A) {
                x = 0
            } else {
                if (t === A) {
                    x = (60 * (y - z) / C) + 360
                } else {
                    if (y === A) {
                        x = (60 * (z - t) / C) + 120
                    } else {
                        x = (60 * (t - y) / C) + 240
                    }
                }
            }
            if (C === 0) {
                E = 0
            } else {
                if (u <= 0.5) {
                    E = C / D
                } else {
                    E = C / (2 - D)
                }
            }
            return [Math.round(x) % 360, E, u, B == null ? 1 : B]
        };
        m.hsla.from = function(x) {
            if (x[0] == null || x[1] == null || x[2] == null) {
                return [null, null, null, x[3]]
            }
            var w = x[0] / 360, v = x[1], u = x[2], t = x[3], y = u <= 0.5 ? u * (1 + v) : u + v - u * v, z = 2 * u - y;
            return [Math.round(f(z, y, w + (1 / 3)) * 255), Math.round(f(z, y, w) * 255), Math.round(f(z, y, w - (1 / 3)) * 255), t]
        };
        o(m, function(t, v) {
            var u = v.props, s = v.cache, x = v.to, w = v.from;
            h.fn[t] = function(C) {
                if (x && !this[s]) {
                    this[s] = x(this._rgba)
                }
                if (C === g) {
                    return this[s].slice()
                }
                var z, B = r.type(C), y = (B === "array" || B === "object") ? C : arguments, A = this[s].slice();
                o(u, function(D, F) {
                    var E = y[B === "object" ? D : F.idx];
                    if (E == null) {
                        E = A[F.idx]
                    }
                    A[F.idx] = l(E, F)
                });
                if (w) {
                    z = h(w(A));
                    z[s] = A;
                    return z
                } else {
                    return h(A)
                }
            };
            o(u, function(y, z) {
                if (h.fn[y]) {
                    return
                }
                h.fn[y] = function(D) {
                    var F = r.type(D), C = (y === "alpha" ? (this._hsla ? "hsla" : "rgba") : t), B = this[C](), E = B[z.idx], A;
                    if (F === "undefined") {
                        return E
                    }
                    if (F === "function") {
                        D = D.call(this, E);
                        F = r.type(D)
                    }
                    if (D == null && z.empty) {
                        return this
                    }
                    if (F === "string") {
                        A = k.exec(D);
                        if (A) {
                            D = E + parseFloat(A[2]) * (A[1] === "+" ? 1 : -1)
                        }
                    }
                    B[z.idx] = D;
                    return this[C](B)
                }
            })
        });
        h.hook = function(t) {
            var s = t.split(" ");
            o(s, function(u, v) {
                r.cssHooks[v] = {set: function(z, A) {
                        var x, y, w = "";
                        if (A !== "transparent" && (r.type(A) !== "string" || (x = i(A)))) {
                            A = h(x || A);
                            if (!p.rgba && A._rgba[3] !== 1) {
                                y = v === "backgroundColor" ? z.parentNode : z;
                                while ((w === "" || w === "transparent") && y && y.style) {
                                    try {
                                        w = r.css(y, "backgroundColor");
                                        y = y.parentNode
                                    } catch (B) {
                                    }
                                }
                                A = A.blend(w && w !== "transparent" ? w : "_default")
                            }
                            A = A.toRgbaString()
                        }
                        try {
                            z.style[v] = A
                        } catch (B) {
                        }
                    }};
                r.fx.step[v] = function(w) {
                    if (!w.colorInit) {
                        w.start = h(w.elem, v);
                        w.end = h(w.end);
                        w.colorInit = true
                    }
                    r.cssHooks[v].set(w.elem, w.start.transition(w.end, w.pos))
                }
            })
        };
        h.hook(n);
        r.cssHooks.borderColor = {expand: function(t) {
                var s = {};
                o(["Top", "Right", "Bottom", "Left"], function(v, u) {
                    s["border" + u + "Color"] = t
                });
                return s
            }};
        d = r.Color.names = {aqua: "#00ffff",black: "#000000",blue: "#0000ff",fuchsia: "#ff00ff",gray: "#808080",green: "#008000",lime: "#00ff00",maroon: "#800000",navy: "#000080",olive: "#808000",purple: "#800080",red: "#ff0000",silver: "#c0c0c0",teal: "#008080",white: "#ffffff",yellow: "#ffff00",transparent: [null, null, null, 0],_default: "#ffffff"}
    })(jQuery);
    (function() {
        var e = ["add", "remove", "toggle"], f = {border: 1,borderBottom: 1,borderColor: 1,borderLeft: 1,borderRight: 1,borderTop: 1,borderWidth: 1,margin: 1,padding: 1};
        a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(h, i) {
            a.fx.step[i] = function(j) {
                if (j.end !== "none" && !j.setAttr || j.pos === 1 && !j.setAttr) {
                    jQuery.style(j.elem, i, j.end);
                    j.setAttr = true
                }
            }
        });
        function g(l) {
            var i, h, j = l.ownerDocument.defaultView ? l.ownerDocument.defaultView.getComputedStyle(l, null) : l.currentStyle, k = {};
            if (j && j.length && j[0] && j[j[0]]) {
                h = j.length;
                while (h--) {
                    i = j[h];
                    if (typeof j[i] === "string") {
                        k[a.camelCase(i)] = j[i]
                    }
                }
            } else {
                for (i in j) {
                    if (typeof j[i] === "string") {
                        k[i] = j[i]
                    }
                }
            }
            return k
        }
        function d(h, j) {
            var l = {}, i, k;
            for (i in j) {
                k = j[i];
                if (h[i] !== k) {
                    if (!f[i]) {
                        if (a.fx.step[i] || !isNaN(parseFloat(k))) {
                            l[i] = k
                        }
                    }
                }
            }
            return l
        }
        if (!a.fn.addBack) {
            a.fn.addBack = function(h) {
                return this.add(h == null ? this.prevObject : this.prevObject.filter(h))
            }
        }
        a.effects.animateClass = function(h, i, l, k) {
            var j = a.speed(i, l, k);
            return this.queue(function() {
                var o = a(this), m = o.attr("class") || "", n, p = j.children ? o.find("*").addBack() : o;
                p = p.map(function() {
                    var q = a(this);
                    return {el: q,start: g(this)}
                });
                n = function() {
                    a.each(e, function(q, r) {
                        if (h[r]) {
                            o[r + "Class"](h[r])
                        }
                    })
                };
                n();
                p = p.map(function() {
                    this.end = g(this.el[0]);
                    this.diff = d(this.start, this.end);
                    return this
                });
                o.attr("class", m);
                p = p.map(function() {
                    var s = this, q = a.Deferred(), r = a.extend({}, j, {queue: false,complete: function() {
                            q.resolve(s)
                        }});
                    this.el.animate(this.diff, r);
                    return q.promise()
                });
                a.when.apply(a, p.get()).done(function() {
                    n();
                    a.each(arguments, function() {
                        var q = this.el;
                        a.each(this.diff, function(r) {
                            q.css(r, "")
                        })
                    });
                    j.complete.call(o[0])
                })
            })
        };
        a.fn.extend({addClass: (function(h) {
                return function(j, i, l, k) {
                    return i ? a.effects.animateClass.call(this, {add: j}, i, l, k) : h.apply(this, arguments)
                }
            })(a.fn.addClass),removeClass: (function(h) {
                return function(j, i, l, k) {
                    return arguments.length > 1 ? a.effects.animateClass.call(this, {remove: j}, i, l, k) : h.apply(this, arguments)
                }
            })(a.fn.removeClass),toggleClass: (function(h) {
                return function(k, j, i, m, l) {
                    if (typeof j === "boolean" || j === c) {
                        if (!i) {
                            return h.apply(this, arguments)
                        } else {
                            return a.effects.animateClass.call(this, (j ? {add: k} : {remove: k}), i, m, l)
                        }
                    } else {
                        return a.effects.animateClass.call(this, {toggle: k}, j, i, m)
                    }
                }
            })(a.fn.toggleClass),switchClass: function(h, j, i, l, k) {
                return a.effects.animateClass.call(this, {add: j,remove: h}, i, l, k)
            }})
    })();
    (function() {
        a.extend(a.effects, {version: "1.10.2",save: function(g, h) {
                for (var f = 0; f < h.length; f++) {
                    if (h[f] !== null) {
                        g.data(b + h[f], g[0].style[h[f]])
                    }
                }
            },restore: function(g, j) {
                var h, f;
                for (f = 0; f < j.length; f++) {
                    if (j[f] !== null) {
                        h = g.data(b + j[f]);
                        if (h === c) {
                            h = ""
                        }
                        g.css(j[f], h)
                    }
                }
            },setMode: function(f, g) {
                if (g === "toggle") {
                    g = f.is(":hidden") ? "show" : "hide"
                }
                return g
            },getBaseline: function(g, h) {
                var i, f;
                switch (g[0]) {
                    case "top":
                        i = 0;
                        break;
                    case "middle":
                        i = 0.5;
                        break;
                    case "bottom":
                        i = 1;
                        break;
                    default:
                        i = g[0] / h.height
                }
                switch (g[1]) {
                    case "left":
                        f = 0;
                        break;
                    case "center":
                        f = 0.5;
                        break;
                    case "right":
                        f = 1;
                        break;
                    default:
                        f = g[1] / h.width
                }
                return {x: f,y: i}
            },createWrapper: function(g) {
                if (g.parent().is(".ui-effects-wrapper")) {
                    return g.parent()
                }
                var h = {width: g.outerWidth(true),height: g.outerHeight(true),"float": g.css("float")}, k = a("<div></div>").addClass("ui-effects-wrapper").css({fontSize: "100%",background: "transparent",border: "none",margin: 0,padding: 0}), f = {width: g.width(),height: g.height()}, j = document.activeElement;
                try {
                    j.id
                } catch (i) {
                    j = document.body
                }
                g.wrap(k);
                if (g[0] === j || a.contains(g[0], j)) {
                    a(j).focus()
                }
                k = g.parent();
                if (g.css("position") === "static") {
                    k.css({position: "relative"});
                    g.css({position: "relative"})
                } else {
                    a.extend(h, {position: g.css("position"),zIndex: g.css("z-index")});
                    a.each(["top", "left", "bottom", "right"], function(l, m) {
                        h[m] = g.css(m);
                        if (isNaN(parseInt(h[m], 10))) {
                            h[m] = "auto"
                        }
                    });
                    g.css({position: "relative",top: 0,left: 0,right: "auto",bottom: "auto"})
                }
                g.css(f);
                return k.css(h).show()
            },removeWrapper: function(f) {
                var g = document.activeElement;
                if (f.parent().is(".ui-effects-wrapper")) {
                    f.parent().replaceWith(f);
                    if (f[0] === g || a.contains(f[0], g)) {
                        a(g).focus()
                    }
                }
                return f
            },setTransition: function(g, i, f, h) {
                h = h || {};
                a.each(i, function(k, j) {
                    var l = g.cssUnit(j);
                    if (l[0] > 0) {
                        h[j] = l[0] * f + l[1]
                    }
                });
                return h
            }});
        function d(g, f, h, i) {
            if (a.isPlainObject(g)) {
                f = g;
                g = g.effect
            }
            g = {effect: g};
            if (f == null) {
                f = {}
            }
            if (a.isFunction(f)) {
                i = f;
                h = null;
                f = {}
            }
            if (typeof f === "number" || a.fx.speeds[f]) {
                i = h;
                h = f;
                f = {}
            }
            if (a.isFunction(h)) {
                i = h;
                h = null
            }
            if (f) {
                a.extend(g, f)
            }
            h = h || f.duration;
            g.duration = a.fx.off ? 0 : typeof h === "number" ? h : h in a.fx.speeds ? a.fx.speeds[h] : a.fx.speeds._default;
            g.complete = i || f.complete;
            return g
        }
        function e(f) {
            if (!f || typeof f === "number" || a.fx.speeds[f]) {
                return true
            }
            if (typeof f === "string" && !a.effects.effect[f]) {
                return true
            }
            if (a.isFunction(f)) {
                return true
            }
            if (typeof f === "object" && !f.effect) {
                return true
            }
            return false
        }
        a.fn.extend({effect: function() {
                var h = d.apply(this, arguments), j = h.mode, f = h.queue, g = a.effects.effect[h.effect];
                if (a.fx.off || !g) {
                    if (j) {
                        return this[j](h.duration, h.complete)
                    } else {
                        return this.each(function() {
                            if (h.complete) {
                                h.complete.call(this)
                            }
                        })
                    }
                }
                function i(m) {
                    var n = a(this), l = h.complete, o = h.mode;
                    function k() {
                        if (a.isFunction(l)) {
                            l.call(n[0])
                        }
                        if (a.isFunction(m)) {
                            m()
                        }
                    }
                    if (n.is(":hidden") ? o === "hide" : o === "show") {
                        n[o]();
                        k()
                    } else {
                        g.call(n[0], h, k)
                    }
                }
                return f === false ? this.each(i) : this.queue(f || "fx", i)
            },show: (function(f) {
                return function(h) {
                    if (e(h)) {
                        return f.apply(this, arguments)
                    } else {
                        var g = d.apply(this, arguments);
                        g.mode = "show";
                        return this.effect.call(this, g)
                    }
                }
            })(a.fn.show),hide: (function(f) {
                return function(h) {
                    if (e(h)) {
                        return f.apply(this, arguments)
                    } else {
                        var g = d.apply(this, arguments);
                        g.mode = "hide";
                        return this.effect.call(this, g)
                    }
                }
            })(a.fn.hide),toggle: (function(f) {
                return function(h) {
                    if (e(h) || typeof h === "boolean") {
                        return f.apply(this, arguments)
                    } else {
                        var g = d.apply(this, arguments);
                        g.mode = "toggle";
                        return this.effect.call(this, g)
                    }
                }
            })(a.fn.toggle),cssUnit: function(f) {
                var g = this.css(f), h = [];
                a.each(["em", "px", "%", "pt"], function(j, k) {
                    if (g.indexOf(k) > 0) {
                        h = [parseFloat(g), k]
                    }
                });
                return h
            }})
    })();
    (function() {
        var d = {};
        a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(f, e) {
            d[e] = function(g) {
                return Math.pow(g, f + 2)
            }
        });
        a.extend(d, {Sine: function(e) {
                return 1 - Math.cos(e * Math.PI / 2)
            },Circ: function(e) {
                return 1 - Math.sqrt(1 - e * e)
            },Elastic: function(e) {
                return e === 0 || e === 1 ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin(((e - 1) * 80 - 7.5) * Math.PI / 15)
            },Back: function(e) {
                return e * e * (3 * e - 2)
            },Bounce: function(g) {
                var e, f = 4;
                while (g < ((e = Math.pow(2, --f)) - 1) / 11) {
                }
                return 1 / Math.pow(4, 3 - f) - 7.5625 * Math.pow((e * 3 - 2) / 22 - g, 2)
            }});
        a.each(d, function(f, e) {
            a.easing["easeIn" + f] = e;
            a.easing["easeOut" + f] = function(g) {
                return 1 - e(1 - g)
            };
            a.easing["easeInOut" + f] = function(g) {
                return g < 0.5 ? e(g * 2) / 2 : 1 - e(g * -2 + 2) / 2
            }
        })
    })()
})(jQuery);
(function(b, d) {
    var a = /up|down|vertical/, c = /up|left|vertical|horizontal/;
    b.effects.effect.blind = function(g, m) {
        var h = b(this), q = ["position", "top", "bottom", "left", "right", "height", "width"], n = b.effects.setMode(h, g.mode || "hide"), r = g.direction || "up", j = a.test(r), i = j ? "height" : "width", p = j ? "top" : "left", t = c.test(r), l = {}, s = n === "show", f, e, k;
        if (h.parent().is(".ui-effects-wrapper")) {
            b.effects.save(h.parent(), q)
        } else {
            b.effects.save(h, q)
        }
        h.show();
        f = b.effects.createWrapper(h).css({overflow: "hidden"});
        e = f[i]();
        k = parseFloat(f.css(p)) || 0;
        l[i] = s ? e : 0;
        if (!t) {
            h.css(j ? "bottom" : "right", 0).css(j ? "top" : "left", "auto").css({position: "absolute"});
            l[p] = s ? k : e + k
        }
        if (s) {
            f.css(i, 0);
            if (!t) {
                f.css(p, k + e)
            }
        }
        f.animate(l, {duration: g.duration,easing: g.easing,queue: false,complete: function() {
                if (n === "hide") {
                    h.hide()
                }
                b.effects.restore(h, q);
                b.effects.removeWrapper(h);
                m()
            }})
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.bounce = function(m, l) {
        var c = a(this), d = ["position", "top", "bottom", "left", "right", "height", "width"], k = a.effects.setMode(c, m.mode || "effect"), j = k === "hide", v = k === "show", w = m.direction || "up", e = m.distance, h = m.times || 5, x = h * 2 + (v || j ? 1 : 0), u = m.duration / x, p = m.easing, f = (w === "up" || w === "down") ? "top" : "left", n = (w === "up" || w === "left"), t, g, s, q = c.queue(), r = q.length;
        if (v || j) {
            d.push("opacity")
        }
        a.effects.save(c, d);
        c.show();
        a.effects.createWrapper(c);
        if (!e) {
            e = c[f === "top" ? "outerHeight" : "outerWidth"]() / 3
        }
        if (v) {
            s = {opacity: 1};
            s[f] = 0;
            c.css("opacity", 0).css(f, n ? -e * 2 : e * 2).animate(s, u, p)
        }
        if (j) {
            e = e / Math.pow(2, h - 1)
        }
        s = {};
        s[f] = 0;
        for (t = 0; t < h; t++) {
            g = {};
            g[f] = (n ? "-=" : "+=") + e;
            c.animate(g, u, p).animate(s, u, p);
            e = j ? e * 2 : e / 2
        }
        if (j) {
            g = {opacity: 0};
            g[f] = (n ? "-=" : "+=") + e;
            c.animate(g, u, p)
        }
        c.queue(function() {
            if (j) {
                c.hide()
            }
            a.effects.restore(c, d);
            a.effects.removeWrapper(c);
            l()
        });
        if (r > 1) {
            q.splice.apply(q, [1, 0].concat(q.splice(r, x + 1)))
        }
        c.dequeue()
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.clip = function(f, i) {
        var g = a(this), m = ["position", "top", "bottom", "left", "right", "height", "width"], l = a.effects.setMode(g, f.mode || "hide"), p = l === "show", n = f.direction || "vertical", k = n === "vertical", q = k ? "height" : "width", j = k ? "top" : "left", h = {}, d, e, c;
        a.effects.save(g, m);
        g.show();
        d = a.effects.createWrapper(g).css({overflow: "hidden"});
        e = (g[0].tagName === "IMG") ? d : g;
        c = e[q]();
        if (p) {
            e.css(q, 0);
            e.css(j, c / 2)
        }
        h[q] = p ? c : 0;
        h[j] = p ? 0 : c / 2;
        e.animate(h, {queue: false,duration: f.duration,easing: f.easing,complete: function() {
                if (!p) {
                    g.hide()
                }
                a.effects.restore(g, m);
                a.effects.removeWrapper(g);
                i()
            }})
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.drop = function(d, h) {
        var e = a(this), j = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], i = a.effects.setMode(e, d.mode || "hide"), l = i === "show", k = d.direction || "left", f = (k === "up" || k === "down") ? "top" : "left", m = (k === "up" || k === "left") ? "pos" : "neg", g = {opacity: l ? 1 : 0}, c;
        a.effects.save(e, j);
        e.show();
        a.effects.createWrapper(e);
        c = d.distance || e[f === "top" ? "outerHeight" : "outerWidth"](true) / 2;
        if (l) {
            e.css("opacity", 0).css(f, m === "pos" ? -c : c)
        }
        g[f] = (l ? (m === "pos" ? "+=" : "-=") : (m === "pos" ? "-=" : "+=")) + c;
        e.animate(g, {queue: false,duration: d.duration,easing: d.easing,complete: function() {
                if (i === "hide") {
                    e.hide()
                }
                a.effects.restore(e, j);
                a.effects.removeWrapper(e);
                h()
            }})
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.explode = function(s, r) {
        var k = s.pieces ? Math.round(Math.sqrt(s.pieces)) : 3, d = k, c = a(this), m = a.effects.setMode(c, s.mode || "hide"), w = m === "show", g = c.show().css("visibility", "hidden").offset(), t = Math.ceil(c.outerWidth() / d), q = Math.ceil(c.outerHeight() / k), h = [], v, u, e, p, n, l;
        function x() {
            h.push(this);
            if (h.length === k * d) {
                f()
            }
        }
        for (v = 0; v < k; v++) {
            p = g.top + v * q;
            l = v - (k - 1) / 2;
            for (u = 0; u < d; u++) {
                e = g.left + u * t;
                n = u - (d - 1) / 2;
                c.clone().appendTo("body").wrap("<div></div>").css({position: "absolute",visibility: "visible",left: -u * t,top: -v * q}).parent().addClass("ui-effects-explode").css({position: "absolute",overflow: "hidden",width: t,height: q,left: e + (w ? n * t : 0),top: p + (w ? l * q : 0),opacity: w ? 0 : 1}).animate({left: e + (w ? 0 : n * t),top: p + (w ? 0 : l * q),opacity: w ? 1 : 0}, s.duration || 500, s.easing, x)
            }
        }
        function f() {
            c.css({visibility: "visible"});
            a(h).remove();
            if (!w) {
                c.hide()
            }
            r()
        }
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.fade = function(f, c) {
        var d = a(this), e = a.effects.setMode(d, f.mode || "toggle");
        d.animate({opacity: e}, {queue: false,duration: f.duration,easing: f.easing,complete: c})
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.fold = function(e, i) {
        var f = a(this), n = ["position", "top", "bottom", "left", "right", "height", "width"], k = a.effects.setMode(f, e.mode || "hide"), r = k === "show", l = k === "hide", t = e.size || 15, m = /([0-9]+)%/.exec(t), s = !!e.horizFirst, j = r !== s, g = j ? ["width", "height"] : ["height", "width"], h = e.duration / 2, d, c, q = {}, p = {};
        a.effects.save(f, n);
        f.show();
        d = a.effects.createWrapper(f).css({overflow: "hidden"});
        c = j ? [d.width(), d.height()] : [d.height(), d.width()];
        if (m) {
            t = parseInt(m[1], 10) / 100 * c[l ? 0 : 1]
        }
        if (r) {
            d.css(s ? {height: 0,width: t} : {height: t,width: 0})
        }
        q[g[0]] = r ? c[0] : t;
        p[g[1]] = r ? c[1] : 0;
        d.animate(q, h, e.easing).animate(p, h, e.easing, function() {
            if (l) {
                f.hide()
            }
            a.effects.restore(f, n);
            a.effects.removeWrapper(f);
            i()
        })
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.highlight = function(h, c) {
        var e = a(this), d = ["backgroundImage", "backgroundColor", "opacity"], g = a.effects.setMode(e, h.mode || "show"), f = {backgroundColor: e.css("backgroundColor")};
        if (g === "hide") {
            f.opacity = 0
        }
        a.effects.save(e, d);
        e.show().css({backgroundImage: "none",backgroundColor: h.color || "#ffff99"}).animate(f, {queue: false,duration: h.duration,easing: h.easing,complete: function() {
                if (g === "hide") {
                    e.hide()
                }
                a.effects.restore(e, d);
                c()
            }})
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.pulsate = function(c, g) {
        var e = a(this), k = a.effects.setMode(e, c.mode || "show"), p = k === "show", l = k === "hide", q = (p || k === "hide"), m = ((c.times || 5) * 2) + (q ? 1 : 0), f = c.duration / m, n = 0, j = e.queue(), d = j.length, h;
        if (p || !e.is(":visible")) {
            e.css("opacity", 0).show();
            n = 1
        }
        for (h = 1; h < m; h++) {
            e.animate({opacity: n}, f, c.easing);
            n = 1 - n
        }
        e.animate({opacity: n}, f, c.easing);
        e.queue(function() {
            if (l) {
                e.hide()
            }
            g()
        });
        if (d > 1) {
            j.splice.apply(j, [1, 0].concat(j.splice(d, m + 1)))
        }
        e.dequeue()
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.puff = function(j, c) {
        var h = a(this), i = a.effects.setMode(h, j.mode || "hide"), f = i === "hide", g = parseInt(j.percent, 10) || 150, e = g / 100, d = {height: h.height(),width: h.width(),outerHeight: h.outerHeight(),outerWidth: h.outerWidth()};
        a.extend(j, {effect: "scale",queue: false,fade: true,mode: i,complete: c,percent: f ? g : 100,from: f ? d : {height: d.height * e,width: d.width * e,outerHeight: d.outerHeight * e,outerWidth: d.outerWidth * e}});
        h.effect(j)
    };
    a.effects.effect.scale = function(c, f) {
        var d = a(this), l = a.extend(true, {}, c), g = a.effects.setMode(d, c.mode || "effect"), h = parseInt(c.percent, 10) || (parseInt(c.percent, 10) === 0 ? 0 : (g === "hide" ? 0 : 100)), j = c.direction || "both", k = c.origin, e = {height: d.height(),width: d.width(),outerHeight: d.outerHeight(),outerWidth: d.outerWidth()}, i = {y: j !== "horizontal" ? (h / 100) : 1,x: j !== "vertical" ? (h / 100) : 1};
        l.effect = "size";
        l.queue = false;
        l.complete = f;
        if (g !== "effect") {
            l.origin = k || ["middle", "center"];
            l.restore = true
        }
        l.from = c.from || (g === "show" ? {height: 0,width: 0,outerHeight: 0,outerWidth: 0} : e);
        l.to = {height: e.height * i.y,width: e.width * i.x,outerHeight: e.outerHeight * i.y,outerWidth: e.outerWidth * i.x};
        if (l.fade) {
            if (g === "show") {
                l.from.opacity = 0;
                l.to.opacity = 1
            }
            if (g === "hide") {
                l.from.opacity = 1;
                l.to.opacity = 0
            }
        }
        d.effect(l)
    };
    a.effects.effect.size = function(l, k) {
        var q, i, j, c = a(this), p = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], n = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], m = ["width", "height", "overflow"], g = ["fontSize"], s = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], h = a.effects.setMode(c, l.mode || "effect"), r = l.restore || h !== "effect", v = l.scale || "both", t = l.origin || ["middle", "center"], u = c.css("position"), e = r ? p : n, f = {height: 0,width: 0,outerHeight: 0,outerWidth: 0};
        if (h === "show") {
            c.show()
        }
        q = {height: c.height(),width: c.width(),outerHeight: c.outerHeight(),outerWidth: c.outerWidth()};
        if (l.mode === "toggle" && h === "show") {
            c.from = l.to || f;
            c.to = l.from || q
        } else {
            c.from = l.from || (h === "show" ? f : q);
            c.to = l.to || (h === "hide" ? f : q)
        }
        j = {from: {y: c.from.height / q.height,x: c.from.width / q.width},to: {y: c.to.height / q.height,x: c.to.width / q.width}};
        if (v === "box" || v === "both") {
            if (j.from.y !== j.to.y) {
                e = e.concat(s);
                c.from = a.effects.setTransition(c, s, j.from.y, c.from);
                c.to = a.effects.setTransition(c, s, j.to.y, c.to)
            }
            if (j.from.x !== j.to.x) {
                e = e.concat(d);
                c.from = a.effects.setTransition(c, d, j.from.x, c.from);
                c.to = a.effects.setTransition(c, d, j.to.x, c.to)
            }
        }
        if (v === "content" || v === "both") {
            if (j.from.y !== j.to.y) {
                e = e.concat(g).concat(m);
                c.from = a.effects.setTransition(c, g, j.from.y, c.from);
                c.to = a.effects.setTransition(c, g, j.to.y, c.to)
            }
        }
        a.effects.save(c, e);
        c.show();
        a.effects.createWrapper(c);
        c.css("overflow", "hidden").css(c.from);
        if (t) {
            i = a.effects.getBaseline(t, q);
            c.from.top = (q.outerHeight - c.outerHeight()) * i.y;
            c.from.left = (q.outerWidth - c.outerWidth()) * i.x;
            c.to.top = (q.outerHeight - c.to.outerHeight) * i.y;
            c.to.left = (q.outerWidth - c.to.outerWidth) * i.x
        }
        c.css(c.from);
        if (v === "content" || v === "both") {
            s = s.concat(["marginTop", "marginBottom"]).concat(g);
            d = d.concat(["marginLeft", "marginRight"]);
            m = p.concat(s).concat(d);
            c.find("*[width]").each(function() {
                var w = a(this), o = {height: w.height(),width: w.width(),outerHeight: w.outerHeight(),outerWidth: w.outerWidth()};
                if (r) {
                    a.effects.save(w, m)
                }
                w.from = {height: o.height * j.from.y,width: o.width * j.from.x,outerHeight: o.outerHeight * j.from.y,outerWidth: o.outerWidth * j.from.x};
                w.to = {height: o.height * j.to.y,width: o.width * j.to.x,outerHeight: o.height * j.to.y,outerWidth: o.width * j.to.x};
                if (j.from.y !== j.to.y) {
                    w.from = a.effects.setTransition(w, s, j.from.y, w.from);
                    w.to = a.effects.setTransition(w, s, j.to.y, w.to)
                }
                if (j.from.x !== j.to.x) {
                    w.from = a.effects.setTransition(w, d, j.from.x, w.from);
                    w.to = a.effects.setTransition(w, d, j.to.x, w.to)
                }
                w.css(w.from);
                w.animate(w.to, l.duration, l.easing, function() {
                    if (r) {
                        a.effects.restore(w, m)
                    }
                })
            })
        }
        c.animate(c.to, {queue: false,duration: l.duration,easing: l.easing,complete: function() {
                if (c.to.opacity === 0) {
                    c.css("opacity", c.from.opacity)
                }
                if (h === "hide") {
                    c.hide()
                }
                a.effects.restore(c, e);
                if (!r) {
                    if (u === "static") {
                        c.css({position: "relative",top: c.to.top,left: c.to.left})
                    } else {
                        a.each(["top", "left"], function(o, w) {
                            c.css(w, function(y, A) {
                                var z = parseInt(A, 10), x = o ? c.to.left : c.to.top;
                                if (A === "auto") {
                                    return x + "px"
                                }
                                return z + x + "px"
                            })
                        })
                    }
                }
                a.effects.removeWrapper(c);
                k()
            }})
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.shake = function(l, k) {
        var c = a(this), d = ["position", "top", "bottom", "left", "right", "height", "width"], j = a.effects.setMode(c, l.mode || "effect"), u = l.direction || "left", e = l.distance || 20, h = l.times || 3, v = h * 2 + 1, q = Math.round(l.duration / v), g = (u === "up" || u === "down") ? "top" : "left", f = (u === "up" || u === "left"), t = {}, s = {}, r = {}, p, m = c.queue(), n = m.length;
        a.effects.save(c, d);
        c.show();
        a.effects.createWrapper(c);
        t[g] = (f ? "-=" : "+=") + e;
        s[g] = (f ? "+=" : "-=") + e * 2;
        r[g] = (f ? "-=" : "+=") + e * 2;
        c.animate(t, q, l.easing);
        for (p = 1; p < h; p++) {
            c.animate(s, q, l.easing).animate(r, q, l.easing)
        }
        c.animate(s, q, l.easing).animate(t, q / 2, l.easing).queue(function() {
            if (j === "hide") {
                c.hide()
            }
            a.effects.restore(c, d);
            a.effects.removeWrapper(c);
            k()
        });
        if (n > 1) {
            m.splice.apply(m, [1, 0].concat(m.splice(n, v + 1)))
        }
        c.dequeue()
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.slide = function(e, i) {
        var f = a(this), k = ["position", "top", "bottom", "left", "right", "width", "height"], j = a.effects.setMode(f, e.mode || "show"), m = j === "show", l = e.direction || "left", g = (l === "up" || l === "down") ? "top" : "left", d = (l === "up" || l === "left"), c, h = {};
        a.effects.save(f, k);
        f.show();
        c = e.distance || f[g === "top" ? "outerHeight" : "outerWidth"](true);
        a.effects.createWrapper(f).css({overflow: "hidden"});
        if (m) {
            f.css(g, d ? (isNaN(c) ? "-" + c : -c) : c)
        }
        h[g] = (m ? (d ? "+=" : "-=") : (d ? "-=" : "+=")) + c;
        f.animate(h, {queue: false,duration: e.duration,easing: e.easing,complete: function() {
                if (j === "hide") {
                    f.hide()
                }
                a.effects.restore(f, k);
                a.effects.removeWrapper(f);
                i()
            }})
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.transfer = function(d, h) {
        var f = a(this), k = a(d.to), n = k.css("position") === "fixed", j = a("body"), l = n ? j.scrollTop() : 0, m = n ? j.scrollLeft() : 0, c = k.offset(), g = {top: c.top - l,left: c.left - m,height: k.innerHeight(),width: k.innerWidth()}, i = f.offset(), e = a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(d.className).css({top: i.top - l,left: i.left - m,height: f.innerHeight(),width: f.innerWidth(),position: n ? "fixed" : "absolute"}).animate(g, d.duration, d.easing, function() {
            e.remove();
            h()
        })
    }
})(jQuery);
(function(c) {
    if (typeof this["loxia"] === "undefined") {
        var d = this;
        this.loxia = {SUCCESS: "success",ERROR: "error",global: d,debug: false,region: "",dateFormat: "yy-mm-dd",timeFormat: "hh:mm:ss",pageLock: true,onionPage: undefined,windowFeatures: "toolbar=no, menubar=no,scrollbars=yes, resizable=no,location=no, status=no",init: function(e) {
                c.extend(this, e);
                c(document).loxiatip();
                if (this.pageLock) {
                    c(document).loxiaonion({layer: this.onionPage})
                }
                this.initContext()
            },initContext: function(e) {
                if (e === undefined) {
                    e = document.body
                }
                if (c(e).attr("loxiaType")) {
                    this.initLoxiaWidget(e)
                } else {
                    c(e).find("div[loxiaType]").each(function() {
                        if (c(this).parents("div[loxiaType]").length > 0) {
                            return
                        }
                        loxia.initLoxiaWidget(this)
                    });
                    c(e).find("[loxiaType]").each(function() {
                        loxia.initLoxiaWidget(this)
                    })
                }
            },initLoxiaWidget: function(e) {
                if (c(e).attr("loxiaType") === "button") {
                    this._initButton(e)
                } else {
                    this.hitch(c(e), "loxia" + c(e).attr("loxiaType"))()
                }
            },isString: function(e) {
                return typeof e === "string" || e instanceof String
            },formatNumber: function(h) {
                h = h + "";
                var e = h.split(".");
                var g = e[0], f = e.length > 1 ? "." + e[1] : "";
                g = g.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                return g + f
            },getViewport: function() {
                var e, f;
                if (typeof window.innerWidth != "undefined") {
                    e = window.innerWidth, f = window.innerHeight
                } else {
                    if (typeof document.documentElement != "undefined" && typeof document.documentElement.clientWidth != "undefined" && document.documentElement.clientWidth != 0) {
                        e = document.documentElement.clientWidth, f = document.documentElement.clientHeight
                    } else {
                        e = document.getElementsByTagName("body")[0].clientWidth, f = document.getElementsByTagName("body")[0].clientHeight
                    }
                }
                return {width: e,height: f}
            },center: function(e, f) {
                var k = {}, i = 0, h = 0, j = 0, g = 0;
                if (f) {
                    k.width = c(f).width();
                    k.height = c(f).height()
                } else {
                    k = this.getViewport();
                    j = c("html").scrollLeft();
                    g = c("html").scrollTop()
                }
                if (f) {
                    h = c(f).offset().left;
                    i = c(f).offset().top
                }
                c(e).css({position: "absolute",left: (j + h + (k.width - c(e).width()) / 2) + "px",top: (g + i + (k.height - c(e).height()) / 2) + "px"})
            },encodeUrl: function(h, f) {
                var g = h.indexOf("?");
                if (g === -1) {
                    if (f === undefined || f) {
                        return this.getTimeUrl(h)
                    } else {
                        return h
                    }
                }
                var e = h.substring(0, g + 1), l = h.substring(g + 1).split("&");
                for (var j = 0; j < l.length; j++) {
                    if (j > 0) {
                        e += "&"
                    }
                    var k = l[j].split("=");
                    e += k[0] + "=" + encodeURIComponent(k[1])
                }
                if (f === undefined || f) {
                    e = this.getTimeUrl(e)
                }
                return e
            },getTimeUrl: function(e) {
                var f = (new Date()).getTime();
                if (e.indexOf("loxiaflag=") >= 0) {
                    e = e.replace(/loxiaflag=\d{13}/, "loxiaflag=" + f.toString());
                    return e
                }
                e += (/\?/.test(e)) ? "&" : "?";
                return (e + "loxiaflag=" + f.toString())
            },getLocaleMsg: function(k, g) {
                var e = this.regional[this.region][k];
                if (e === undefined || e === null) {
                    e = this.regional[this.region][""]
                }
                if (e === undefined || e === null) {
                    return k
                }
                if (!g) {
                    return e
                }
                if (!c.isArray(g)) {
                    g = [g]
                }
                var j = e.match(/\{\d+\}/ig);
                if (!j || j.length === 0) {
                    return e
                }
                e = e.replace(/\{\d+\}/ig, "#");
                for (var h = 0; h < j.length; h++) {
                    var f = parseInt(j[h].replace(/\{/, "").replace(/\}/, ""));
                    e = e.replace(/\#/, (g[f] != undefined && g[f] != null) ? "" + g[f] : "")
                }
                return e
            },getObject: function(h, g) {
                g = g || d;
                var j = h.split(".");
                for (var f = 0, e; g && (e = j[f]); f++) {
                    g = (e in g ? g[e] : undefined)
                }
                return g
            },setObject: function(j, h, g) {
                g = g || d;
                var l = j.split(".");
                var k = l.pop();
                for (var f = 0, e; g && (e = l[f]); f++) {
                    g = (e in g ? g[e] : g[e] = {})
                }
                return (g && k ? (g[k] = h) : undefined)
            },hitch: function(e, f) {
                if (!f) {
                    f = e;
                    e = null
                }
                if (this.isString(f)) {
                    e = e || d;
                    if (!e[f]) {
                        throw (['hitch: scope["', f, '"] is null (scope="', e, '")'].join(""))
                    }
                    return function() {
                        return e[f].apply(e, arguments || [])
                    }
                }
                return !e ? f : function() {
                    return f.apply(e, arguments || [])
                }
            },_ajaxSetValue: function(g, e, f) {
                if (f === null) {
                    return
                }
                var h = g[e];
                if (this.isString(h)) {
                    g[e] = [h, f]
                } else {
                    if (c.isArray(h)) {
                        g[e].push(f)
                    } else {
                        g[e] = f
                    }
                }
            },_ajaxFieldValue: function(g) {
                var e = null, f = (g.type || "").toLowerCase();
                if (g.name && f && !g.disabled) {
                    if (f === "radio" || f === "checkbox") {
                        if (g.checked) {
                            e = g.value
                        }
                    } else {
                        if (g.multiple) {
                            e = [];
                            c("option", g).each(function() {
                                if (this.selected) {
                                    e.push(this.value)
                                }
                            })
                        } else {
                            e = g.value
                        }
                    }
                }
                return e
            },_ajaxFormToObj: function(g) {
                if (!g) {
                    return {}
                }
                g = this.isString(g) ? c("#" + g).get(0) : g;
                var f = {}, h = this, e = "file|submit|image|reset|button|";
                c.each(g.elements, function(k, m) {
                    var j = m.name, l = (m.type || "").toLowerCase();
                    if (j && l && e.indexOf(l) === -1 && !m.disabled) {
                        h._ajaxSetValue(f, j, h._ajaxFieldValue(m))
                    }
                });
                return f
            },_ajaxOptions: function(g, h, f) {
                var e = {};
                if (arguments.length === 1) {
                    e = g
                } else {
                    e = f || {};
                    e.url = g;
                    if (h) {
                        if (this.isString(h)) {
                            c.extend(e, {data: this._ajaxFormToObj(h)})
                        } else {
                            c.extend(e, {data: h})
                        }
                    }
                }
                return e
            },asyncXhr: function(g, h, f) {
                var e = this._ajaxOptions(g, h, f);
                c.extend(e, {success: function(k, m, j) {
                        switch (j.status) {
                            case 200:
                                if (k.exception) {
                                    if (d.ajaxError) {
                                        loxia.hitch(d.ajaxError)(k, m, j)
                                    }
                                } else {
                                    if (this.successHandler) {
                                        loxia.hitch(this.successHandler)(k, m, j)
                                    }
                                }
                                break;
                            default:
                                if (d.ajaxError) {
                                    var l = {};
                                    var i = {};
                                    i.statusCode = j.status;
                                    l.data = k;
                                    l.exception = i;
                                    loxia.hitch(d.ajaxError)(l, m, j)
                                }
                        }
                    },error: function(j, m, l) {
                        var k = {};
                        var i = {};
                        i.statusCode = j.status;
                        i.message = "Error occurs when fetching data from url:" + this.url;
                        i.cause = m ? m : l;
                        k.exception = i;
                        if (d.ajaxError) {
                            loxia.hitch(d.ajaxError)(k, m, j)
                        }
                    }});
                c.ajax(e)
            },asyncXhrGet: function(f, g, e) {
                if (arguments.length === 1) {
                    f.type = "GET"
                } else {
                    e = c.extend({}, e, {type: "GET"})
                }
                this.asyncXhr(f, g, e)
            },asyncXhrPost: function(f, g, e) {
                if (arguments.length === 1) {
                    f.type = "POST"
                } else {
                    e = c.extend({}, e, {type: "POST"})
                }
                this.asyncXhr(f, g, e)
            },syncXhr: function(g, i, f) {
                var h, e = this._ajaxOptions(g, i, f);
                c.extend(e, {async: false,success: function(l, m, k) {
                        switch (k.status) {
                            case 200:
                                h = l;
                                break;
                            default:
                                h = {};
                                var j = {};
                                j.statusCode = k.status;
                                h.data = l;
                                h.exception = j
                        }
                    },error: function(k, m, l) {
                        h = {};
                        var j = {};
                        j.statusCode = k.status;
                        j.message = "Error occurs when fetching data from url:" + this.url;
                        j.cause = m ? m : l;
                        h.exception = j
                    }});
                c.ajax(e);
                return h
            },syncXhrGet: function(f, g, e) {
                if (arguments.length === 1) {
                    f.type = "GET"
                } else {
                    e = c.extend({}, e, {type: "GET"})
                }
                return this.syncXhr(f, g, e)
            },syncXhrPost: function(f, g, e) {
                if (arguments.length === 1) {
                    f.type = "POST"
                } else {
                    e = c.extend({}, e, {type: "POST"})
                }
                return this.syncXhr(f, g, e)
            },openPage: function(e, h, g, f) {
                h = h || "_blank";
                g = g || this.windowFeatures;
                if (f && f.length && f.length === 2) {
                    g = "width=" + f[0] + ",height=" + f[1] + "," + g
                }
                return window.open(this.encodeUrl(e), h, g)
            }}
    }
    loxia.defaults = {required: false,lastRightValue: undefined,checkmaster: "",state: null,errorMessage: null};
    loxia.regional = [];
    loxia.regional[""] = {INVALID_EMPTY_DATA: "Mandatory field",INVALID_DATA: "Invalid input",INVALID_NUMBER: "Input is not a valid number",INVALID_DATE: "Input is not a valid date",DATA_EXCEED_RANGE: "Input data exceeds range",VALIDATE_FIELD_ERROR: "{0} field error(s) found.",VALIDATE_FORM_ERROR: "Form validation failed:"};
    var a = {defaultOnion: '<div class="loxiaOnion"><div class="ui-widget-overlay"></div><div class="inner ui-corner-all"><span>LOADING...</span></div></div>',isShown: false,_create: function() {
            this.onionPage = c(this.defaultOnion).appendTo("body");
            if (this.options.layer) {
                c(".inner", this.onionPage.get(0)).replaceWith(c(this.options.layer).addClass("inner"))
            }
            this.onionPage.hide()
        },_layout: function() {
            c(".loxiaOnion .ui-widget-overlay").css({left: c("html").scrollLeft(),top: c("html").scrollTop()});
            loxia.center(c(".loxiaOnion .inner").get(0))
        },show: function() {
            if (this.isShown) {
                return
            }
            this.onionPage.show();
            this._layout();
            c(window).bind("scroll", this._layout);
            this.isShown = true
        },hide: function() {
            c(window).unbind("scroll", this._layout);
            this.onionPage.hide();
            this.isShown = false
        },destory: function() {
            this.onionPage.remove()
        }};
    c.widget("ui.loxiaonion", a);
    c.ui.loxiaonion.prototype.options = {};
    var b = {defaultTipDiv: '<div class="loxiaTip" style="position:absolute;"><div class="arrow"></div><div class="inner ui-corner-all"  style="padding: .3em .7em; width: auto;"></div></div>',tpSide: "r",isShown: false,_create: function() {
            this.tipDiv = c(this.defaultTipDiv).appendTo("body");
            this.tipDiv.hide()
        },show: function(h, f) {
            this.tipDiv.find(".inner").html(f);
            var e = this.tipDiv.removeClass("loxiaTip-l loxiaTip-r loxiaTip-t loxiaTip-b").addClass("loxiaTip-" + this.tpSide).find(".arrow");
            this.tipDiv.css({opacity: 0});
            this.tipDiv.show();
            this.tipDiv.position({my: "left-3 top",at: "right top",of: h});
            var g = this.tipDiv.position();
            this.tipDiv.animate({opacity: 1,left: g.left + 8,top: g.top}, "fast");
            this.isShown = true
        },hide: function() {
            this.tipDiv.hide();
            this.isShown = false
        },destory: function() {
            this.tipDiv.remove()
        }};
    c.widget("ui.loxiatip", b);
    c.ui.loxiatip.prototype.options = {}
})(jQuery);
loxia.regional['zh_CN'] = {
    "member.login.ValidateCodeError": "验证码错误，请重新输入！",
    "member.login.mynike": "我的NIKE",
    "member.login.UserNamePasswordError": "您输入的用户名与密码不匹配，请重新输入！",
    "member.login.InvalidUser": "该用户无效",
    "emptyInput": "输入框不能为空",
    "member.login.EmptyEmail": "请填写您的Email地址",
    "member.login.InvalidEmail": "请填写有效的Email地址",
    "member.login.usedEmail": "此邮箱已成功订阅，请输入其他邮箱",
    "member.forgot.password.next.EmailError": "邮箱地址与注册时候的邮箱不一致！",
    "emailPatternError": "邮箱格式不正确",
    "member.forgot.password.UserNotExist": "不存在此用户名！",
    "UsernamePattern": "用户名必须在2-40位之间",
    "CheckCodeInputError": "校验码输入不正确！",
    "member.forgot.username.NotExistMailUser": "不存在此邮箱的用户！",
    "RefreshCheckCode": "如看不清可点击校验码刷新",
    "NotExsitEmail": "不存在此邮箱的域名",
    "member.register.UsernamePattern": "用户名必须由字母、数字或下划线组成",
    "member.register.UsernameCorrect": "当前用户名可以使用",
    "member.register.UsernameExist": "用户名已存在",
    "member.register.InputPassword": "请输入密码",
    "member.register.PasswordPattern": "密码必须在6-12个字符之间",
    "member.register.ReInputPassword": "请输入确认密码",
    "member.register.PasswordInconsistent": "两次密码填写不一致",
    "member.register.InputEmail": "请输入电子邮箱！",
    "member.register.EmailExist": "该邮箱已被其他会员登记使用",
    "member.register.EmailPatternError": "注册邮箱格式不正确",
    "member.register.InputSex": "性别不能为空",
    "member.register.InputMobile": "性别不能为空",
    "member.register.MobileEmpty": "手机号码不能为空",
    "member.register.MobileLength": "手机号码长度必须为11位",
    "member.register.MobilePattern": "手机号码格式输入不正确",
    "member.register.BirthdayEmpty": "生日不能为空",
    "member.register.WarningInfo": "很抱歉，您必须年满13岁才可进入本网站。如有任何问题或查询，请联系客户服务。",
    "member.register.AgreeInfo": "同意商城服务协议后才能成为注册会员！",
    "member.replenish.UserNamePattern1": "用户名必须在6-20位之间",
    "member.replenish.UserNamePattern2": "用户名必须以字母开头，且必须由字母、数字或下划线组成，长度在6-40之间。",
    "mynike.add.socialnetwork.PhoneEmpty": "电话/手机不能为空",
    "mynike.add.socialnetwork.PhonePatternError": "电话/手机格式不正确！",
    "mynike.add.socialnetwork.ZipCodePatternError": "邮政编码格式不正确",
    "mynike.add.socialnetwork.ZipCodeEmpty": "邮政编码不能为空",
    "mynike.add.socialnetwork.AddressEmpty": "地址不能为空",
    "mynike.add.socialnetwork.AddressPatternError": "收货地址不能少于两个字",
    "mynike.add.socialnetwork.NamePatternError": "姓名不能少于两个字",
    "mynike.add.socialnetwork.EmailEmpty": "邮箱不能为空",
    "mynike.add.socialnetwork.SelectCity": "省市区必须選擇",
    "mynike.comments.SelectComments": "请先選擇希望操作的评论",
    "mynike.comments.DeleteComments": "您确认删除选中的评论么？",
    "mynike.comments.ContentEmpty": "内容不能为空",
    "mynike.comments.PublishSuccess": "发表成功",
    "mynike.comments.PublishFailure": "发表失败",
    "mynike.edit.myfavorite.InputCharTip1": "您还可以输入140个字",
    "mynike.edit.myfavorite.InputCharTip2": "还可输入{0}字",
    "mynike.edit.myfavorite.ExceedChar": "超出{0}字",
    "mynike.edit.myfavorite.ShareInfo": "商品分享个数不能超过6个",
    "mynike.edit.myfavorite.SelectShareProduct": "请選擇分享的商品",
    "mynike.edit.myfavorite.Exceed": "超出",
    "mynike.edit.myfavorite.ShareChar": "分享字数过长",
    "mynike.edit.myfavorite.TipInfo": "勾选产品左上方的方框，分享一个或者多个收藏产品，让朋友们一起出谋划策，看看谁的运动装备最酷！",
    "mynike.edit.myfavorite.deleteComments": "您是否要删除对该商品的评论？",
    "mynike.edit.myfavorite.DeleteSuccess": "删除成功",
    "mynike.edit.myfavorite.DeleteFavorite": "您是否要删除该收藏？",
    "mynike.edit.myfavorite.InsertInfo": "我的#NikeStore装备库#新增一员猛将，人称:",
    "mynike.edit.myfavorite.InsertInfo1": "发掘更多爱将@nikestore",
    "mynike.edit.myfavorite.Stock": "库存：",
    "mynike.edit.myfavorite.Item": "件",
    "mynike.edit.myfavorite.Input94Char": "还可输入94个字",
    "mynike.edit.myfavorite.bindingWebo": "请先绑定微博后再分享!",
    "mynike.edit.myfavorite.Fmale": "女",
    "mynike.edit.myfavorite.Male": "男",
    "mynike.edit.myfavorite.LimitProduct": "限量款商品不能加入购物车",
    "mynike.edit.myfavorite.ProductStyle": "此商品为男女同款，敬请参考尺寸表进行选购",
    "mynike.edit.myfavorite.AddSuccess": "恭喜您,添加成功!",
    "mynike.edit.myfavorite.AddFailure": "添加失败，请稍后重试",
    "mynike.edit.myfavorite.ComformSize": "请确认尺寸及购买数量",
    "mynike.edit.myfavorite.Size": "尺码",
    "mynike.guestorder.query.EmailPatternError": "邮件格式不正确",
    "mynike.my.socialnetwork.DeleteFailure": "删除失败",
    "mynike.my.socialnetwork.ComfirmDeleteAddress": "您是否要删除该地址？",
    "mynike.order.detail.OrderNotPay": "您的订单处于不可支付状态!",
    "mynike.order.detail.ProductNotStock": "您好，您购买的商品已经无货，无法进行付款，很抱歉给您带来的不便，建议您更换其他商品重新下单。",
    "mynike.order.detail.InputCancelOrderReason": "请输入订单取消原因",
    "mynike.order.detail.OrderError": "订单错误，请稍刷新后再试",
    "mynike.order.detail.MallInfo": "商城提醒",
    "mynike.order.detail.OrderLimitProduct": "您好，您的订单中存在限量商品，取消后将不支持再次购买此商品，请确认是否取消。",
    "mynike.prepaid.card.PrepaidCardNo": "请输入预付卡卡号！",
    "mynike.prepaid.card.PrepaidCardPassword": "请输入预付卡密码！",
    "mynike.prepaid.card.NotMember": "对不起，您不是商城注册会员不能充值预付卡！",
    "mynike.prepaid.card.PrepaidCardNoError": "对不起，您输入的预付卡卡号或者密码有误！",
    "mynike.prepaid.card.PrepaidCardInvalid": "对不起，您输入的预付卡已作废！",
    "mynike.prepaid.card.PrepaidCardRecharge": "对不起，您输入的预付卡已被充值！",
    "mynike.prepaid.card.PrepaidCardExpired": "对不起，您输入的预付卡已过期！",
    "mynike.prepaid.card.PrepaidCardCheck": "对不起，您输入的预付卡审批未通过！",
    "mynike.prepaid.card.PrepaidCardNotCheck": "对不起，您输入的预付卡未审批！",
    "mynike.prepaid.card.PrepaidCard": "恭喜您，预付卡 ：",
    "mynike.prepaid.card.RechargeSuccess": " 充值成功！",
    "mynike.profile.InvalidChar": "不能包含非法字符",
    "mynike.profile.EmailEmpty": "邮箱地址不能为空",
    "mynike.profile.EmailUsed": "抱歉，此邮箱已被使用！",
    "mynike.profile.EmailIncorrect": "邮箱地址不正确",
    "mynike.profile.CurrentPasswordEmpty": "当前密码不能为空",
    "mynike.profile.CurrentPasswordIncorrent": "当前密码不正确",
    "mynike.profile.NewPasswordEmpty": "新密码不能为空",
    "mynike.profile.NewPasswordPattern": "新密码长度应在6-12位",
    "mynike.profile.ReInputNewPassword": "请再次输入新密码",
    "mynike.profile.MobilePattern": "手机格式不正确",
    "mynike.profile.InfoUpdateSuccess": "信息更新成功",
    "mynike.profile.InfoUpdateFailure": "个人基本信息更新失败",
    "mynike.profile.EmailUpdateSuccess": "邮箱更新成功",
    "mynike.profile.ReceiveEmail": "请接受来自NIKESTORE.COM.HK的活动邮件",
    "mynike.profile.LoginPasswordUpdateSuccess": "登录密码修改成功",
    "mynike.profile.LoginPasswordUpdateFailure": "修改失败！",
    "omniture.OneNikeChina.OmnitureCustomLinkFunctions.RegisterPage": "注册页面",
    "omniture.OneNikeChina.OmnitureCustomLinkFunctions.sinaWebo": "新浪微博",
    "qs.super.pdp.comments.UsernameEmpty": "用户名不能为空！",
    "qs.super.pdp.comments.UsernameIncorrect": "请输入正确的用户名！",
    "qs.super.pdp.comments.PasswordEmpty": "密码不能为空！",
    "qs.super.pdp.comments.PasswordIncorrect": "请输入正确的密码！",
    "qs.super.pdp.comments.CheckCodeEmpty": "验证码不能为空！",
    "qs.super.pdp.comments.CheckCodeIncorrect": "请输入正确的验证码！",
    "qs.super.pdp.comments.CommentEmpty": "评论内容不能为空！",
    "qs.super.pdp.comments.CommentIncorrect": "请输入正确的评论！",
    "qs.super.pdp.comments.CommentSuccess": "评论成功！",
    "qs.super.pdp.SelectSize": "请選擇尺码！",
    "qs.super.pdp.UnLogin": "抱歉，您尚未登录或注册，点击下方的按钮进行登录或注册",
    "qs.super.pdp.login": "登录",
    "qs.super.pdp.regist": "注册",
    "qs.super.pdp.serverInfo": "获取服务器信息失败!",
    "qs.transactionCheck.PrepaidCardAmount": "开具的发票不包含使用预付卡的金额",
    "qs.transactionCheck.OrderFailure": "订单创建压力巨大，稍后会为您跳转至我的订单查看订单是否创建成功",
    "qs.transactionCheck.InputCorrectGift": "抱歉，您输入的优惠编号不正确，也许是您输入错误或者您的优惠编号已过期",
    "qs.transactionCheck.PrepaidCardGift": "对不起，预付卡与优惠编号不能同时使用<br/>您输入的优惠编号可以使用",
    "qs.transactionCheck.Discount": "折扣优惠：-HK$",
    "qs.transactionCheck.balance": "您本月的员工折扣剩余额度 ",
    "qs.transactionCheck.notsufficientfunds": "您本月的员工折扣余额不足，请選擇小额商品或等到次月1日更新额度后购买",
    "qs.transactionCheck.GiftCorrect": "您输入的优惠编号可以使用",
    "qs.transactionCheck.Closepage": "付款完成前请不要关闭本页面！<br/>请根据支付情况点击下列的按钮",
    "qs.transactionCheck.PayPage": "请您在新打开的页面中完成付款",
    "qs.transactionCheck.payed": "已完成付款",
    "qs.transactionCheck.payIncorrect": "付款遇到问题",
    "qs.transactionCheck.ExceedAmount": "，商品折后价已超过额度，请選擇小额商品或等到次月1日更新额度后购买</label>",
    "qs.transactionCheck.EmployeeDiscount": "，请确认是否使用员工折扣额度购买本次商品</label>",
    "qs.transactionCheck.PrepaidCardGiftNotUse": "对不起，预付卡与优惠编号不能同时使用",
    "qs.transactionCheckValidator.ConsigneeName": "收货人姓名不能为空",
    "qs.transactionCheckValidator.ConsigneeAddress": "收货人地址不能为空",
    "qs.transactionCheckValidator.Mobile": "手机和电话需必填一项",
    "qs.transactionCheckValidator.EmailEmpty": "电子邮箱不能为空",
    "qs.transactionCheckValidator.ZipCodePattern": "邮编只能为6位纯数字",
    "qs.transactionCheckValidator.MobilePattern": "电话格式不正确",
    "qs.transactionCheckValidator.EmailPattern": "电子邮箱格式不正确",
    "qs.transactionCheckValidator.Phone": "手机和联系电话需必填一项",
    "qs.transactionCheckValidator.PayStyle": "抱歉，请選擇一种支付方式完成订单支付",
    "adv.search.Color": "色",
    "adv.search.Colors": "色",
    "championhall.RefershCheckCode": "如看不清可点击校验码刷新",
    "index.InputEmail": "请填写您的Email地址",
    "index.InputCorrectEmail": "请填写有效的Email地址",
    "index.Subscription": "此邮箱已成功订阅，请输入其他邮箱",
    "kobe.expectancy": "敬请期待！",
    "kobe.buynow": "立即购买",
    "main.Comfirm": "确定",
    "main.Cancel": "取消",
    "main.goshopping": "继续购物",
    "main.completeinfo": "完善个人资料可以获取以下服务内容：",
    "main.completeuserinfo": "完善个人资料",
    "main.gift1": "1、接收来自NIKESTORE.COM.HK的订单发货提醒。",
    "main.gift2": "2、接收来自NIKESTORE.COM.HK的最新活动信息。",
    "main.gift3": "3、填写真实生日信息有机会获得意外惊喜。",
    "main.alipay": "亲爱的支付宝会员",
    "main.logined": "您已经登录NIKESTORE.COM.HK",
    "main.KeyWordSearch": "请输入搜索关键字",
    "main.SaleProduct": "商品已售完,请重新選擇商品",
    "main.NotStock": "很抱歉，您選擇的商品库存不足，不妨看看其它颜色或款式",
    "main.Sorry": "抱歉，请刷新后重试",
    "main.SpeekCheck": "拼写检查返回值： ",
    "main.Test": "测试",
    "main.KeyWord": "关键字： ",
    "mynike.UnbindSuccess": "解除微博绑定成功!",
    "mynike.UnbindFailure": "解除微博绑定失败!",
    "new.detail.Size": "尺码:",
    "new.detail.Qty": "数量:",
    "new.detail.Price": "单价:HK$",
    "new.detail.money": "HK$",
    "new.detail.QueryCart": "查看购物车",
    "new.detail.errornamepass": "(用户名或密码错误)",
    "new.detail.IncludeLimit": "您的购物车中含有限量商品，请使用购物车进行结算",
    "new.detail.NoLogin": "抱歉，您尚未登录或注册，点击下方的按钮进行登录或注册",
    "new.detail.AddRemarkSuccess": "添加备注成功",
    "new.detail.AddRemarkFailure": "添加备注失败",
    "new.detail.Saled": "已售完",
    "new.detail.OffShelf": "已下架",
    "shopingcart.ComfirmDelete": "您是否确定删除该商品？",
    "shopingcart.hotSale": "上周最热卖",
    "shopingcart.recommend": "推荐搭配",
    "shopingcart.CheckCodeError": "验证码输入错误，请重新输入",
    "shopingcart.Tourist": "游客不能购买限量款商品，请使用会员登录或注册会员后再次购买",
    "template.SelectProduct": "请選擇商品！",
    "template.favoriteSuccess": "收藏成功",
    "template.select": "请選擇",
    "template.saleQty": "的购买数量",
    "template.selectSize": "的尺码",
    "template.AddShopingCart": "已成功添加至购物车！",
    "transactionCheck.CheckFailure": "验证失败，请刷新后重试",
    "transactionCheck.limitFailure": "限量商品验证失败,请刷新后重试",
    "transactionCheck.addOrderException": "订单创建异常",
    "weiboShareActivity.ShareChar": "分享字数过多，最多只能分享140字!",
    "weiboShareActivity.Name": "请填写姓名信息",
    "weiboShareActivity.Mobile": "请填写手机号码",
    "weiboShareActivity.IdCrad": "请填写身份证信息",
    "weiboShareActivity.Email": "请填写email",
    "weiboShareActivity.CheckCodeEmpty": "验证码不能为空",
    "weiboShareActivity.AgreeInfo": "请确认是否同意活动规则",
    "favorites": "我的收藏",
    "treamentorder": "我的订单",
    "logout": "登出",
    "mynike.profile.CheckEmail": "Nike会给您的新邮箱地址发送一封验证信，请注意查收，并按照信中提示确认邮箱修改",
    "super_pdp_comment.erroruserpass": "(用户名或密码格式错误)",
    "super_pdp_comment.ValidateCodeError": "(验证码错误)",
    "main.Customimmediately": "立即定制",
    "edit_myfavorite_info3": "#NikeStore装备库# 运动的女生魅力十足！去看看我在 @NikeStore的收藏，姐妹们是时候该动起来了！",
    "edit_myfavorite_info4": "#NikeStore装备库# 女生的衣橱就是要五彩缤纷，包罗万象。去看看我在@NIKESTORE.COM.HK 里的收藏，运动装备一样可爱性感！",
    "edit_myfavorite_info5": "#NikeStore装备库# 时尚运动装备就需要朋友一起来出谋划策。去看看我在@NikeStore里的收藏，来点评一番，看看哪个最炫！",
    "edit_myfavorite_info6": "#NikeStore装备库# 在关键时刻，做好兄弟的就要多给点力。去看看我在 @NIKESTORE.COM.HK 的收藏，该怎么做，你们懂的！",
    "edit_myfavorite_info7": "#NikeStore装备库# 好兄弟就要有福同享，有好东西自然第一时间与你们分享。去看看我在@NikeStore的收藏，带走他们，跟我一起再创辉煌！",
    "edit_myfavorite_info8": "#NikeStore装备库# 要队友，要团队合作，也要独领风骚。去看看我在@NikeStore里的收藏，绝对不会让你失望！",
    "currency": "HK$",
    "main.noinfo": "没有找到符合您的搜索条件的自提站点，请尝试不同的搜索关键字",
    "return.noRoSku": "您还没有选中需要退货的商品!",
    "return.RoReason": "请選擇一个退货理由!",
    "return.RoBank": "请選擇一个银行!",
    "header.search": "还等什么？",
    "header.search1": "搜索",
    "return.RoRefundName": "退款人姓名不能为空!",
    "return.RoTelOrMob": "手机和电话需必填一项",
    "return.RoUserNotNull": "账户名不能为空!",
    "area.SelectArea": "请選擇地区",
    "area.SelectPartition": "请選擇分区",
    "pdp.product.not.exist": "该商品不存在",
    "pdp.favorite.success": "收藏成功",
    "pdp.favorite.already": "你已经收藏过此商品",
    "pdp.member.favorite.product": "只有注册会员才能收藏喜爱的商品",
    "pdp.function.exception": "功能异常，请稍后重试或联系客服人员",
    "pdp.commentary.success": "您的评论已成功提交，感谢分享！ 一段时间后商城才会发表您的评论，你可以到我的nike页面查看。",
    "pdp.commentary.product.notexsit": "评论商品不存在",
    "pdp.commentary.content.count.error": "评论内容不能为空或超过200个字符",
    "pdp.commentary.checkcode.error": "校验码输入不正确",
    "pdp.comment.login": "请登录后评论",
    "pdp.comment.size": "均码",
    "mobile.mynike.mobileEmpty": "电话/手机不能为空",
    "mynike.myrtnorder.title": "我的退单",
    "mobile.mynike.ContactNumberPatternError": "联系电话号码格式不正确",
    "categoryAndSearch.filter.more": "更多",
    "categoryAndSearch.filter.more.sports": "更多運動",
    "categoryAndSearch.filter.less": "收起",
    "categoryAndSearch.filter.less.sports": "收起運動",
    "member.loginName.guest": "游客",
    "mynike.myfavoriteList.quantity": "数量",
    "main.type": "类型",
    "main.number": "编号",
    "main.address": "地址",
    "main.hours": "营业时间",
    "nikeid.dialog.msg": "香港顾客可于NIKE-iD网站内设计、登记及储存自订的货品。在完成设计后，您将会收到一组指定的编码。如果您确认购买，请亲临NIKE LAB。于NIKE LAB的店员会根据您的货品编码，确认是次交易及收取所需款项。<br/><br/>(香港顾客暂时只支援亲身于NIKE LAB付款，不能透过NIKE-iD网站付款)",
    "mynike.myfavoriteList.size": "尺码",
    "return.order.exception.noitem": "退货异常：未搜集到需要退货的商品!"

};
loxia.regional['zh_HK'] = {
    "member.login.ValidateCodeError": "驗證碼錯誤，請重新輸入！",
    "member.login.mynike": "我的NIKE",
    "member.login.UserNamePasswordError": "您輸入的用戶名與密碼不符，請重新輸入！",
    "member.login.InvalidUser": "無此用戶",
    "emptyInput": "輸入欄目必須填寫",
    "member.login.EmptyEmail": "請填寫您的電郵地址",
    "member.login.InvalidEmail": "請填寫有效電郵地址",
    "member.login.usedEmail": "此電郵已訂閱Nike資訊，請輸入其他電郵地址",
    "member.forgot.password.next.EmailError": "電郵地址與註冊電郵不符！",
    "emailPatternError": "電郵地址格式不正確",
    "member.forgot.password.UserNotExist": "無此用戶！",
    "UsernamePattern": "用戶名必須在2-40字元之間",
    "CheckCodeInputError": "驗證碼輸入錯誤！",
    "member.forgot.username.NotExistMailUser": "無此電郵用戶！",
    "RefreshCheckCode": "如不清晰可按此重新整理驗證碼",
    "NotExsitEmail": "此電郵地址不存在",
    "member.register.UsernamePattern": "用戶名必須由字母、數字或底線(underscore)組成",
    "member.register.UsernameCorrect": "此用戶名可以使用",
    "member.register.UsernameExist": "用戶名已存在",
    "member.register.InputPassword": "請輸入密碼",
    "member.register.PasswordPattern": "密碼必須在8-36個字元之間，至少包含數字和大小寫混合的字母，不能和用戶名相同",
    "member.register.PasswordPattern1": "密碼必須在8-36個字元之間，至少包含數字和大小寫混合的字母，不能和用戶名相同",
    "member.register.PasswordWithLoginName": "密碼必須在8-36個字元之間,至少包含數字和大小寫混合的字母,不能和用戶名相同",
    "member.register.ReInputPassword": "請再次輸入密碼",
    "member.register.PasswordInconsistent": "兩次填寫的密碼不一致",
    "member.register.InputEmail": "請輸入電郵地址！",
    "member.register.EmailExist": "該電郵地址已被其他會員登記",
    "member.register.EmailPatternError": "電郵地址格式不正確",
    "member.register.InputSex": "必須填寫性別",
    "member.register.InputMobile": "必須填寫性別",
    "member.register.MobileEmpty": "必須填寫手機號碼",
    "member.register.MobileLength": "手機號碼長度必須為8位",
    "member.register.MobilePattern": "手機號碼格式不正確",
    "member.register.BirthdayEmpty": "必須填寫生日",
    "member.register.WarningInfo": "很抱歉，你必須年滿13歲才可進入本網站。 如有任何問題或查詢，請聯絡客戶服務。",
    "member.register.AgreeInfo": "同意NIKESTORE.COM.HK服務協定後才能註冊成為會員！",
    "member.replenish.UserNamePattern1": "用戶名必須在6-20字元之間",
    "member.replenish.UserNamePattern2": "用戶名必須以字母開頭，且必須由字母、數字或底線(underscore)組成，長度在6-40字元之間。",
    "mynike.add.socialnetwork.PhoneEmpty": "必須填寫電話／手機號碼",
    "mynike.add.socialnetwork.PhonePatternError": "電話／手機號碼格式錯誤！",
    "mynike.add.socialnetwork.ZipCodePatternError": "郵遞區號格式錯誤",
    "mynike.add.socialnetwork.ZipCodeEmpty": "必須填寫郵遞區號",
    "mynike.add.socialnetwork.AddressEmpty": "必須填寫地址",
    "mynike.add.socialnetwork.AddressPatternError": "收貨地址不能少於兩個字",
    "mynike.add.socialnetwork.NamePatternError": "姓名不能少於兩個字",
    "mynike.add.socialnetwork.EmailEmpty": "必須填寫電郵地址",
    "mynike.add.socialnetwork.SelectCity": "必須選擇區域",
    "mynike.pickup": "必須選擇站點",
    "mynike.pickup.item": "必須選擇產品",
    "mynike.comments.SelectComments": "請先選擇需要修改的評論",
    "mynike.comments.DeleteComments": "您確認刪除所選擇的評論嗎？",
    "mynike.comments.ContentEmpty": "必須填寫內容",
    "mynike.comments.PublishSuccess": "已發表",
    "mynike.comments.PublishFailure": "未發表",
    "mynike.edit.myfavorite.InputCharTip1": "您還可以輸入140個字",
    "mynike.edit.myfavorite.InputCharTip2": "還可輸入{0}字",
    "mynike.edit.myfavorite.ExceedChar": "超出{0}字",
    "mynike.edit.myfavorite.ShareInfo": "產品分享個數不能超過6個",
    "mynike.edit.myfavorite.SelectShareProduct": "請選擇分享的產品",
    "mynike.edit.myfavorite.Exceed": "超過",
    "mynike.edit.myfavorite.ShareChar": "超過容許字數",
    "mynike.edit.myfavorite.TipInfo": "點選產品左上方的方格，與朋友分享您的收藏品，看看誰搜羅了最型的運動裝備！",
    "mynike.edit.myfavorite.deleteComments": "您是否要刪除對該產品的評論？",
    "mynike.edit.myfavorite.DeleteSuccess": "刪除成功",
    "mynike.edit.myfavorite.DeleteFavorite": "您是否要刪除該收藏？",
    "mynike.edit.myfavorite.InsertInfo": "我的#NikeStore裝備庫#新增一位成員，人稱：",
    "mynike.edit.myfavorite.InsertInfo1": "發掘更多心儀產品@nikestore",
    "mynike.edit.myfavorite.Stock": "庫存：",
    "mynike.edit.myfavorite.Item": "件",
    "mynike.edit.myfavorite.Input94Char": "還可輸入94個字",
    "mynike.edit.myfavorite.bindingWebo": "請先連結到微博後再分享！",
    "mynike.edit.myfavorite.Fmale": "女",
    "mynike.edit.myfavorite.Male": "男",
    "mynike.edit.myfavorite.LimitProduct": "限量產品不能加入購物車",
    "mynike.edit.myfavorite.ProductStyle": "此產品為男女同款，請參考尺寸後才選購",
    "mynike.edit.myfavorite.AddSuccess": "恭喜您，已成功加入！",
    "mynike.edit.myfavorite.AddFailure": "未能加入，請稍後再試",
    "mynike.edit.myfavorite.ComformSize": "請確認尺寸及購買數量",
    "mynike.edit.myfavorite.Size": "尺碼",
    "mynike.guestorder.query.EmailPatternError": "電郵格式不正確",
    "mynike.my.socialnetwork.DeleteFailure": "無法刪除",
    "mynike.my.socialnetwork.ComfirmDeleteAddress": "您是否要刪除該地址？",
    "mynike.order.detail.OrderNotPay": "您的訂單處於未能付款狀態！",
    "mynike.order.detail.ProductNotStock": "您好，您選購的產品已經售罄，無法付款，抱歉為您造成不便，請選擇其他產品。",
    "mynike.order.detail.InputCancelOrderReason": "請輸入取消訂單原因",
    "mynike.order.detail.OrderError": "訂單錯誤，請稍重新整理後再試",
    "mynike.order.detail.MallInfo": "NIKESTORE.COM.HK提醒",
    "mynike.order.detail.OrderLimitProduct": "您好，您的訂單中包括限量產品，取消後將不能再次購買，請確認是否取消。",
    "mynike.prepaid.card.PrepaidCardNo": "請輸入儲值卡卡號！",
    "mynike.prepaid.card.PrepaidCardPassword": "請輸入儲值卡密碼！",
    "mynike.prepaid.card.NotMember": "對不起，您不是網站會員，無法增值！",
    "mynike.prepaid.card.PrepaidCardNoError": "對不起，您輸入的儲值卡卡號或密碼錯誤！",
    "mynike.prepaid.card.PrepaidCardInvalid": "對不起，您輸入的儲值卡已無效！",
    "mynike.prepaid.card.PrepaidCardRecharge": "對不起，您輸入的儲值卡已經增值！",
    "mynike.prepaid.card.PrepaidCardExpired": "對不起，您輸入的儲值卡已過期！",
    "mynike.prepaid.card.PrepaidCardCheck": "對不起，您輸入的儲值卡審批未通過！",
    "mynike.prepaid.card.PrepaidCardNotCheck": "對不起，您輸入的儲值卡未審批！",
    "mynike.prepaid.card.PrepaidCard": "恭喜您，儲值卡 ：",
    "mynike.prepaid.card.RechargeSuccess": " 增值成功！",
    "mynike.profile.InvalidChar": "不能包含其他字元",
    "mynike.profile.EmailEmpty": "必須填寫電郵地址",
    "mynike.profile.EmailUsed": "抱歉，此電郵已被登記！",
    "mynike.profile.EmailIncorrect": "電郵地址不正確",
    "mynike.profile.CurrentPasswordEmpty": "必須填寫現時使用的密碼",
    "mynike.profile.CurrentPasswordIncorrent": "現時使用的密碼錯誤",
    "mynike.profile.NewPasswordEmpty": "必須填寫新密碼",
    "mynike.profile.NewPasswordPattern": "新密碼必須在8-36個字元之間,至少包含數字和大小寫混合的字母,不能和用戶名相同",
    "mynike.profile.ReInputNewPassword": "請再次輸入新密碼",
    "mynike.profile.MobilePattern": "手機號碼格式不正確",
    "mynike.profile.InfoUpdateSuccess": "資料已更新",
    "mynike.profile.InfoUpdateFailure": "個人資訊未更新",
    "mynike.profile.EmailUpdateSuccess": "電郵已更新",
    "mynike.profile.ReceiveEmail": "請接受來自NIKESTORE.COM.HK的郵件",
    "mynike.profile.LoginPasswordUpdateSuccess": "登入密碼已修改",
    "mynike.profile.LoginPasswordUpdateFailure": "無法修改！",
    "omniture.OneNikeChina.OmnitureCustomLinkFunctions.RegisterPage": "註冊頁面",
    "omniture.OneNikeChina.OmnitureCustomLinkFunctions.sinaWebo": "新浪微博",
    "qs.super.pdp.comments.UsernameEmpty": "必須填寫用戶名！",
    "qs.super.pdp.comments.UsernameIncorrect": "請輸入正確的用戶名！",
    "qs.super.pdp.comments.PasswordEmpty": "必須填寫密碼！",
    "qs.super.pdp.comments.PasswordIncorrect": "請輸入正確的密碼！",
    "qs.super.pdp.comments.CheckCodeEmpty": "必須填寫驗證碼！",
    "qs.super.pdp.comments.CheckCodeIncorrect": "請輸入正確的驗證碼！",
    "qs.super.pdp.comments.CommentEmpty": "必須填寫評論內容！",
    "qs.super.pdp.comments.CommentIncorrect": "請輸入正確的評論！",
    "qs.super.pdp.comments.CommentSuccess": "已發表評論！",
    "qs.super.pdp.comments.CommentEmpty": "必須填寫評論內容！",
    "qs.super.pdp.comments.CommentLength": "評論內容必須在6-200字元之間",
    "qs.super.pdp.SelectSize": "請選擇尺碼！",
    "qs.super.pdp.UnLogin": "抱歉，您尚未登入或註冊，請點擊下方的按鈕登入或註冊",
    "qs.super.pdp.login": "登入",
    "qs.super.pdp.regist": "註冊",
    "qs.super.pdp.serverInfo": "無法讀取伺服器！",
    "qs.transactionCheck.PrepaidCardAmount": "開具的收據不包含使用儲值卡的金額",
    "qs.transactionCheck.OrderFailure": "網站接收過多訂單，稍後會為您跳轉至我的訂單查閱訂單是否已建立",
    "qs.transactionCheck.InputCorrectGift": "抱歉，找不到您輸入的優惠編號，也許是輸入錯誤或者您的優惠編號已過期",
    "qs.transactionCheck.PrepaidCardGift": "對不起，儲值卡與優惠編號不能同時使用<br/>您輸入的優惠編號可以使用",
    "qs.transactionCheck.Discount": "折扣優惠：-HK$",
    "qs.transactionCheck.balance": "您本月的員工折扣剩餘額度 ",
    "qs.transactionCheck.notsufficientfunds": "您本月的員工折扣餘額不足，",
    "qs.transactionCheck.notsufficientfunds2": "請選擇價格較低的產品或待下月1日更新可用額後再購買",
    "qs.transactionCheck.out.promo.code": "若你確定使用員工折扣，促銷碼優惠將被取消。",
    "qs.transactionCheck.GiftCorrect": "您輸入的優惠編號可以使用",
    "qs.transactionCheck.Closepage": "付款完成前請不要關閉本頁面！請根據付款情況點擊以下按鈕",
    "qs.transactionCheck.PayPage": "請您在新打開的頁面中完成付款",
    "qs.transactionCheck.payed": "已完成付款",
    "qs.transactionCheck.payIncorrect": "付款遇到問題",
    "qs.transactionCheck.ExceedAmount": "。",
    "qs.transactionCheck.ExceedAmount2": "產品折扣已超出可用額，請選擇價格較低的產品或待下月1日更新可用額後再購買",
    "qs.transactionCheck.EmployeeDiscount": "。",
    "qs.transactionCheck.EmployeeDiscount2": "請確認是否使用員工折扣購買本次產品",
    "qs.transactionCheck.PrepaidCardGiftNotUse": "對不起，儲值卡與優惠編號不能同時使用",
    "qs.transactionCheckValidator.ConsigneeName": "必須填寫收貨人姓名",
    "qs.transactionCheckValidator.ConsigneeAddress": "必須填寫收貨人地址",
    "qs.transactionCheckValidator.Mobile": "手機號碼必須填",
    "qs.transactionCheckValidator.EmailEmpty": "必須填寫電郵地址",
    "qs.transactionCheckValidator.ZipCodePattern": "郵編只能為6位數字",
    "qs.transactionCheckValidator.MobilePattern": "電話號碼格式不正確",
    "qs.transactionCheckValidator.EmailPattern": "電郵地址格式不正確",
    "qs.transactionCheckValidator.Phone": "手機號碼和聯絡電話必須填一項",
    "qs.transactionCheckValidator.PayStyle": "抱歉，請選擇一種付款方式完成訂購",
    "qs.transactionCheckValidator.Captcha": "驗證碼輸入有誤",
    "adv.search.Color": "色",
    "adv.search.Colors": "色",
    "championhall.RefershCheckCode": "如不清晰可按此重新整理驗證碼",
    "index.InputEmail": "請填寫您的電郵地址",
    "index.InputCorrectEmail": "請填寫有效的電郵地址",
    "index.Subscription": "此電郵已訂閱Nike資訊，請輸入其他電郵",
    "kobe.expectancy": "敬請期待！",
    "kobe.buynow": "立即購買",
    "main.next": "確定",
    "main.Comfirm": "確定",
    "main.Cancel": "取消",
    "main.goshopping": "繼續購物",
    "main.completeinfo": "完善個人資料可以獲取以下服務內容：",
    "main.completeuserinfo": "完善個人資料",
    "main.gift1": "1、接收來自NIKESTORE.COM.HK的訂單發貨提醒。",
    "main.gift2": "2、接收來自NIKESTORE.COM.HK的最新活動信息。",
    "main.gift3": "3、填寫真實生日信息有機會獲得意外驚喜。",
    "main.alipay": "親愛的支付寶會員",
    "main.logined": "您已經登入NIKESTORE.COM.HK",
    "main.KeyWordSearch": "請輸入關鍵字搜尋",
    "main.SaleProduct": "產品已售罄，請重新選擇產品",
    "main.NotStock": "很抱歉，您選擇的產品庫存不足，不妨看看其它顏色或款式",
    "main.Sorry": "抱歉，請重新整理後再試",
    "main.SpeekCheck": "拼寫檢查返回值： ",
    "main.Test": "測試",
    "main.KeyWord": "關鍵字： ",
    "main.more": "更多",
    "main.less": "收起",
    "mynike.UnbindSuccess": "已取消微博連結！",
    "mynike.UnbindFailure": "無法取消微博連結！",
    "new.detail.Size": "尺碼：",
    "new.detail.Qty": "數量：",
    "new.detail.quantity": "數量",
    "new.detail.Price": "零售價:HK$",
    "new.detail.money": "HK$",
    "new.detail.QueryCart": "查看購物車",
    "new.detail.errornamepass": "(用戶名或密碼錯誤)",
    "new.detail.IncludeLimit": "您的購物車中包括限量產品，請使用購物車計算總額",
    "new.detail.NoLogin": "抱歉，您尚未登入或註冊，請點擊下方的按鈕登入或註冊",
    "new.detail.AddRemarkSuccess": "已加入備註",
    "new.detail.AddRemarkFailure": "未加入備註",
    "new.detail.Saled": "已售罄",
    "new.detail.OffShelf": "已下架",
    "shopingcart.ComfirmDelete": "您是否確定刪除該產品？",
    "shopingcart.hotSale": "上周最熱賣",
    "shopingcart.hotSale.noSearch": "您可能會對這些熱賣產品感興趣",
    "shopingcart.recommend": "推薦配搭",
    "shopingcart.CheckCodeError": "驗證碼錯誤，請重新輸入",
    "shopingcart.Tourist": "訪客不能購買限量產品，請登入會員或註冊後再次購買",
    "template.SelectProduct": "請選擇產品！",
    "template.favoriteSuccess": "收藏成功",
    "template.select.area.province": "地域",
    "template.select.area.city": "分區",
    "template.select.area.district": "區域",
    "template.select.area.building": "請選擇屋苑/大廈",
    "template.select": "請選擇",
    "template.saleQty": "的購買數量",
    "template.selectSize": "的尺碼",
    "template.AddShopingCart": "已成功加入購物車！",
    "transactionCheck.CheckFailure": "驗證失敗，請重新整理後再試",
    "transactionCheck.limitFailure": "限量產品驗證失敗，請重新整理後再試",
    "transactionCheck.addOrderException": "系統錯誤，未能訂購有關貨品",
    "weiboShareActivity.ShareChar": "字數過多，最多只能分享140字！",
    "weiboShareActivity.Name": "請填寫姓名",
    "weiboShareActivity.Mobile": "請填寫手機號碼",
    "weiboShareActivity.IdCrad": "請填寫身份證資料",
    "weiboShareActivity.Email": "請填寫電郵地址",
    "weiboShareActivity.CheckCodeEmpty": "必須填寫驗證碼",
    "weiboShareActivity.AgreeInfo": "請確認是否同意活動規則",
    "favorites": "我的收藏",
    "treamentorder": "我的訂單",
    "logout": "登出",
    "mynike.profile.CheckEmail": "Nike會給您的新郵箱地址發送一封驗證信，請注意查收，並按照信中提示確認郵箱修改",
    "super_pdp_comment.erroruserpass": "(用戶名或密碼格式錯誤)",
    "super_pdp_comment.ValidateCodeError": "(驗證碼錯誤)",
    "main.Customimmediately": "立即定制",
    "edit_myfavorite_info3": "#NikeStore裝備庫# 運動的女生魅力十足！去看看我在 @NikeStore的收藏，姐妹們是時候該動起來了！",
    "edit_myfavorite_info4": "#NikeStore裝備庫# 女生的衣櫥就是要五彩繽紛，包羅萬象。去看看我在@NIKESTORE.COM.HK 裡的收藏，運動裝備一樣可愛性感！",
    "edit_myfavorite_info5": "#NikeStore裝備庫# 時尚運動裝備就需要朋友一起來出謀劃策。去看看我在@NikeStore裡的收藏，來點評一番，看看哪個最炫！",
    "edit_myfavorite_info6": "#NikeStore裝備庫# 在關鍵時刻，做好兄弟的就要多給點力。去看看我在 @NIKESTORE.COM.HK 的收藏，該怎麼做，你們懂的！",
    "edit_myfavorite_info7": "#NikeStore裝備庫# 好兄弟就要有福同享，有好東西自然第一時間與你們分享。去看看我在@NikeStore的收藏，帶走他們，跟我一起再創輝煌！",
    "edit_myfavorite_info8": "#NikeStore裝備庫# 要隊友，要團隊合作，也要獨領風騷。去看看我在@NikeStore裡的收藏，絕對不會讓你失望！",
    "currency": "HK$",
    "main.noinfo": "沒有查找到符合要求的便利店。",
    "return.noRoSku": "您還沒有選中需要退貨的產品!",
    "return.RoReason": "請選擇一個退貨理由!",
    "return.RoBank": "請選擇一個銀行!",
    "return.RoRefundName": "退款人姓名不能為空!",
    "return.RoTelOrMob": "手機和電話需必填一項",
    "return.RoUserNotNull": "帳戶名不能為空!",
    "area.SelectArea": "請選擇地域",
    "area.SelectPartition": "請選擇分區",
    "pdp.product.not.exist": "該產品不存在",
    "pdp.favorite.success": "收藏成功",
    "pdp.favorite.already": "你已經收藏過此產品",
    "pdp.member.favorite.product": "只有註冊會員才能收藏喜愛的產品",
    "pdp.function.exception": "功能異常，請稍後重試或聯繫客服人員",
    "pdp.commentary.success": "您的評論已成功提交，感謝分享！ 一段時間後商城才會發表您的評論，你可以到我的nike頁面查看。",
    "pdp.commentary.product.notexsit": "評論產品不存在",
    "pdp.commentary.content.count.error": "評論內容不能為空或超過200個字元",
    "pdp.commentary.checkcode.error": "校驗碼輸入不正確",
    "pdp.comment.login": "請登入後評論",
    "pdp.comment.size": "均碼",
    "mobile.mynike.mobileEmpty": "電話／手機不能留空",
    "mynike.myfavoriteList.quantity": "數量",
    "mynike.myrtnorder.title": "我的退換貨",
    "mobile.mynike.ContactNumberPatternError": "聯絡電話號碼格式不正確",
    "categoryAndSearch.filter.more": "更多",
    "categoryAndSearch.filter.more.sports": "更多運動",
    "categoryAndSearch.filter.less": "收起",
    "categoryAndSearch.filter.less.sports": "收起運動",
    "member.loginName.guest": "訪客",
    "main.order.choosePickup": "請選擇篩選條件或者輸入自提站點關鍵字查找",
    "mynike.myfavoriteList.size": "尺碼",
    "header.search": "搜索NIKE/JORDAN產品",
    "header.search1": "搜索",
    "main.delivery": "送貨",
    "main.pickup": "自取",
    "main.typeshow.sf": "順豐速遞",
    "main.typeshow.okConvenienceStore": "OK便利店",
    "main.typeshow.711convenienceStore": "7-11便利店",
    "main.type": "類型",
    "main.number": "編號",
    "main.address": "地址",
    "main.hours": "營業時間",
    "order.pickup.select": "请選擇自取的站点",
    "nikeid.dialog.msg": "香港顧客暫時只支援親身於NIKE LAB付款，不能透過NIKE-iD網站付款<br/><br/>香港顧客可於NIKE-iD網站內設計、登記及儲存自訂的貨品。在完成設計後，您將會收到一組指定的編碼。如果您確認購買，請親臨NIKE LAB。於NIKE LAB的店員會根據您的貨品編碼，確認是次交易及收取所需款項。",
    "order.free.notice1": "只差",
    "order.free.notice2": "便可免運費",
    "return.order.exception.noitem": "退貨異常：未蒐集到需要退貨的產品!",
    "transaction.shipInfo.instantdelivery.show1": "預計即日15:00前送達",
    "transaction.shipInfo.instantdelivery.show2": "預計即日16:30前送達",
    "transaction.shipInfo.instantdelivery.show3": "預計即日18:00前送達",
    "transaction.shipinfo.plschoose.kicksLounge": "Kicks Lounge",
    "transaction.shipinfo.plschoose.LabPS7": "Nike Lab PS7",
    "transaction.shipinfo.plschoose.Camelpaint": "Camelpaint",
    "transaction.shipinfo.plschoose.HKPC": "North Point",
    "exchange.order.pickon": "查看原產品",
    "exchange.order.pickoff": "點擊收起",
    "exchange.order.exchange.application": "換貨申請 ",
    "exchange.order.exchange.applicationdesc": "如果您需要換貨，請聯繫我們的客服專員。",
    "active.issameday.nopay": "預計當日19:00前送達，請在10:30之前完成付款，否則您的訂單將無法完成",
    "active.issameday.havepay": "預計當日19:00前送達，請在10:30之前完成付款，否則您的訂單將無法完成（如果您選擇了“當日配送”服務，您需要支付HK$38運費）",
    "store.index.ns.chk.sogo": "香港Sogo Nike 專櫃",
    "store.index.nike.kicks.lounge": "海港城Kicks Lounge",
    "new.transactionCheck.save.address.error": "保存收貨地址失敗",
    "facebook.year": "年",
    "facebook.month": "月",
    "facebook.day": "日",
    "facebook.join.success": "FACEBOOK連結成功！",
    "facebook.your.account": "你的NIKESTORE.COM.HK賬戶 ",
    "facebook.join.account": "你可以用Facebook賬戶登入NIKESTORE.COM.HK",
    "facebook.success.confirm": "繼續購物",
    "facebook.join.fair": "很抱歉，FACEBOOK連結失敗",
    "facebook.fair.msg": "請稍後再重試",
    "facebook.fair.confirm": "確定",
    "facebook.replenish.success": "註冊成功！",
    "facebook.replenish.success.msg": "你可以用Facebook賬戶或Nikestore賬戶登入NIKESTORE.COM.HK",
    "facebook.replenish.fair": "很抱歉，註冊失敗",
    "facebook.login.fair": "很抱歉，FACEBOOK登入失敗",
    "facebook.email.EmailPatternError": "請輸入一個有效的電郵地址",
    "facebook.socode.codePatternError": "請輸入有效的訂單編號",
    "facebook.password.passworderror": "請輸入一個密碼",
    "facebook.mobileEmpty": "手機號碼不能留空",
    "pdp.color": "顏色：",
    "quickBuy.SelectSize": "請選擇尺碼",
    "transaction.shipinfo.choose.pickup": "請選擇站點",
    "shoppingcart.sku.offsale": "抱歉，此款產品已售罄"
};
loxia.regional['en_US'] = {
    "member.login.ValidateCodeError": "Verification code error, please re-enter!",
    "member.login.mynike": "My NIKE",
    "member.login.UserNamePasswordError": "The screen name and password you entered do not match, please re-enter!",
    "member.login.InvalidUser": "The user is invalid",
    "emptyInput": "Input box cannot be blank",
    "member.login.EmptyEmail": "Please enter your email address",
    "member.login.InvalidEmail": "Please enter a valid email address",
    "member.login.usedEmail": "This email address is already subscribed, please enter another email address",
    "member.forgot.password.next.EmailError": "Email address is not the same as the email address used for registration!",
    "emailPatternError": "Email address is formatted incorrectly",
    "member.forgot.password.UserNotExist": "This screen name does not exist!",
    "UsernamePattern": "Screen name must be 2–40 characters in length",
    "CheckCodeInputError": "Verification code entered incorrectly!",
    "member.forgot.username.NotExistMailUser": "No user found with this email address!",
    "RefreshCheckCode": "Click the verification code to refresh if you can't read it clearly",
    "NotExsitEmail": "This email address does not have a valid domain name",
    "member.register.UsernamePattern": "The screen name must consist of letters, numbers or underscores",
    "member.register.UsernameCorrect": "Current screen name can be used",
    "member.register.UsernameExist": "Screen name already exists",
    "member.register.InputPassword": "Please enter a password",
    "member.register.PasswordPattern": "Password must be 8–36 characters in length, contain at least digital and mixed-case letters, and cannot be the same as screen name",
    "member.register.PasswordPattern1": "Password must be 8–36 characters in length, contain at least digital and mixed-case letters, and cannot be the same as screen name",
    "member.register.PasswordWithLoginName": "Password must be 8–36 characters in length, contain at least digital and mixed-case letters, and cannot be the same as screen name",
    "member.register.ReInputPassword": "Please confirm password",
    "member.register.PasswordInconsistent": "Passwords are different",
    "member.register.InputEmail": "Please enter an email address!",
    "member.register.EmailExist": "This email address has been registered by another member",
    "member.register.EmailPatternError": "Incorrect email format",
    "member.register.InputSex": "You MUST choose a gender",
    "member.register.InputMobile": "Gender cannot be blank",
    "member.register.MobileEmpty": "Mobile number cannot be blank",
    "member.register.MobileLength": "Mobile number must be 11 digits in length",
    "member.register.MobilePattern": "Mobile number is formatted incorrectly",
    "member.register.BirthdayEmpty": "Date of birth cannot be blank",
    "member.register.WarningInfo": "Sorry, you cannot access this site because you are under the age of 13. Please contact Customer Support or any questions or concerns.",
    "member.register.AgreeInfo": "You must accept the Store Service Agreement to become a registered member!",
    "member.replenish.UserNamePattern1": "Screen name must be 6–20 characters in length",
    "member.replenish.UserNamePattern2": "The screen name must begin with a letter, must consist of letters, numbers or underscores and must be 6–40 characters in length.",
    "mynike.add.socialnetwork.PhoneEmpty": "Phone/mobile number cannot be blank",
    "mynike.add.socialnetwork.PhonePatternError": "Phone/mobile number is formatted incorrectly!",
    "mynike.add.socialnetwork.ZipCodePatternError": "Zip code is formatted incorrectly",
    "mynike.add.socialnetwork.ZipCodeEmpty": "Zip code cannot be blank",
    "mynike.add.socialnetwork.AddressEmpty": "Address cannot be blank",
    "mynike.add.socialnetwork.AddressPatternError": "Delivery address cannot be less than two characters",
    "mynike.add.socialnetwork.NamePatternError": "Name cannot be less than two characters",
    "mynike.add.socialnetwork.EmailEmpty": "Email address cannot be blank",
    "mynike.add.socialnetwork.SelectCity": "You must select an area",
    "mynike.pickup": "You must select a pickup",
    "mynike.pickup.item": "You must select a item",
    "mynike.comments.SelectComments": "Please select a review",
    "mynike.comments.DeleteComments": "Are you sure you want to delete the selected review?",
    "mynike.comments.ContentEmpty": "Content cannot be blank",
    "mynike.comments.PublishSuccess": "Post successful",
    "mynike.comments.PublishFailure": "Post failed",
    "mynike.edit.myfavorite.InputCharTip1": "You have 140 characters remaining",
    "mynike.edit.myfavorite.InputCharTip2": "You have {0} characters remaining",
    "mynike.edit.myfavorite.ExceedChar": "Exceeded {0} characters",
    "mynike.edit.myfavorite.ShareInfo": "The number of shared products cannot be more than 6",
    "mynike.edit.myfavorite.SelectShareProduct": "Please select shared products",
    "mynike.edit.myfavorite.Exceed": "Exceeds",
    "mynike.edit.myfavorite.ShareChar": "Shared message is too long",
    "mynike.edit.myfavorite.TipInfo": "Check the box to the top left of each product to share one or more favorite products, get together with your friends and see who has the coolest sports equipment!",
    "mynike.edit.myfavorite.deleteComments": "Do you want to delete the review for this product?",
    "mynike.edit.myfavorite.DeleteSuccess": "Deleted",
    "mynike.edit.myfavorite.DeleteFavorite": "Do you want to delete this favorite?",
    "mynike.edit.myfavorite.InsertInfo": "My #NikeStoreGearStash# features a new addition called:",
    "mynike.edit.myfavorite.InsertInfo1": "Discover more favorites @nikestore",
    "mynike.edit.myfavorite.Stock": "Stock:",
    "mynike.edit.myfavorite.Item": "items",
    "mynike.edit.myfavorite.Input94Char": "You have 94 characters remaining",
    "mynike.edit.myfavorite.bindingWebo": "Please post to a microblog before sharing!",
    "mynike.edit.myfavorite.Fmale": "Female",
    "mynike.edit.myfavorite.Male": "Male",
    "mynike.edit.myfavorite.LimitProduct": "Limited-edition merchandise cannot be added to cart",
    "mynike.edit.myfavorite.ProductStyle": "This is a unisex product, please make a selection by referring to the size chart",
    "mynike.edit.myfavorite.AddSuccess": "Congratulations, successfully added!",
    "mynike.edit.myfavorite.AddFailure": "Failed to add, please retry later",
    "mynike.edit.myfavorite.ComformSize": "Please confirm the size and purchase quantity",
    "mynike.edit.myfavorite.Size": "Size",
    "mynike.guestorder.query.EmailPatternError": "Email is formatted incorrectly",
    "mynike.my.socialnetwork.DeleteFailure": "Failed to delete",
    "mynike.my.socialnetwork.ComfirmDeleteAddress": "Do you want to delete this address?",
    "mynike.order.detail.OrderNotPay": "The status of your order is unpaid!",
    "mynike.order.detail.ProductNotStock": "Hi, the product you wish to purchase is out of stock so we are unable to complete your payment. Sorry for the inconvenience, we recommend that you place an order for a different product.",
    "mynike.order.detail.InputCancelOrderReason": "Please enter a reason for canceling the order",
    "mynike.order.detail.OrderError": "Order error, please refresh the page and retry",
    "mynike.order.detail.MallInfo": "Store Reminder",
    "mynike.order.detail.OrderLimitProduct": "Hi, there are limited-edition items in your order, after canceling you will no longer be able to purchase this product, please confirm whether you want to cancel.",
    "mynike.prepaid.card.PrepaidCardNo": "Please enter your prepaid card number!",
    "mynike.prepaid.card.PrepaidCardPassword": "Please enter your prepaid card password!",
    "mynike.prepaid.card.NotMember": "Sorry, you are not a registered store member. Cannot top up prepaid card!",
    "mynike.prepaid.card.PrepaidCardNoError": "Sorry, the prepaid card number or password you entered is incorrect!",
    "mynike.prepaid.card.PrepaidCardInvalid": "Sorry, the prepaid card you entered is no longer valid!",
    "mynike.prepaid.card.PrepaidCardRecharge": "Sorry, the prepaid card you entered has already been topped up!",
    "mynike.prepaid.card.PrepaidCardExpired": "Sorry, the prepaid card you entered has expired!",
    "mynike.prepaid.card.PrepaidCardCheck": "Sorry, the prepaid card you entered was rejected!",
    "mynike.prepaid.card.PrepaidCardNotCheck": "Sorry, the prepaid card you entered has not been approved yet!",
    "mynike.prepaid.card.PrepaidCard": "Congratulations, prepaid card:",
    "mynike.prepaid.card.RechargeSuccess": " has been topped up!",
    "mynike.profile.InvalidChar": "Cannot contain illegal characters",
    "mynike.profile.EmailEmpty": "Email address cannot be blank",
    "mynike.profile.EmailUsed": "Sorry, this email address is already in use!",
    "mynike.profile.EmailIncorrect": "Email address is incorrect",
    "mynike.profile.CurrentPasswordEmpty": "Current password cannot be blank",
    "mynike.profile.CurrentPasswordIncorrent": "Current password is incorrect",
    "mynike.profile.NewPasswordEmpty": "New password cannot be blank",
    "mynike.profile.NewPasswordPattern": "New Password must be 8–36 characters in length,contain at least digital and mixed-case letters, and cannot be the same as screen name",
    "mynike.profile.ReInputNewPassword": "Re-enter new password",
    "mynike.profile.MobilePattern": "Mobile number is formatted incorrectly",
    "mynike.profile.InfoUpdateSuccess": "Information successfully updated",
    "mynike.profile.InfoUpdateFailure": "Failed to update basic information",
    "mynike.profile.EmailUpdateSuccess": "Email address successfully updated",
    "mynike.profile.ReceiveEmail": "Please accept promotional emails from NIKE China Store Online",
    "mynike.profile.LoginPasswordUpdateSuccess": "Login password changed successfully",
    "mynike.profile.LoginPasswordUpdateFailure": "Failed to change!",
    "omniture.OneNikeChina.OmnitureCustomLinkFunctions.RegisterPage": "Registration page",
    "omniture.OneNikeChina.OmnitureCustomLinkFunctions.sinaWebo": "Sina Weibo",
    "qs.super.pdp.comments.UsernameEmpty": "Screen name cannot be blank!",
    "qs.super.pdp.comments.UsernameIncorrect": "Please enter a valid screen name!",
    "qs.super.pdp.comments.PasswordEmpty": "Password cannot be blank!",
    "qs.super.pdp.comments.PasswordIncorrect": "Please enter the correct password!",
    "qs.super.pdp.comments.CheckCodeEmpty": "Verification code cannot be blank!",
    "qs.super.pdp.comments.CheckCodeIncorrect": "Please enter the correct verification code!",
    "qs.super.pdp.comments.CommentEmpty": "Review content cannot be blank!",
    "qs.super.pdp.comments.CommentIncorrect": "Please enter a valid review!",
    "qs.super.pdp.comments.CommentSuccess": "Review successful!",
    "qs.super.pdp.comments.CommentLength": "Review content must be 6-200 characters in length",
    "qs.super.pdp.SelectSize": "Please choose a size!",
    "qs.super.pdp.UnLogin": "Sorry, you are not logged in or registered, click on the button below to log in or register",
    "qs.super.pdp.login": "Log In",
    "qs.super.pdp.regist": "Join",
    "qs.super.pdp.serverInfo": "Failed to get server information!",
    "qs.transactionCheck.PrepaidCardAmount": "The invoice does not include the amount paid using the prepaid card",
    "qs.transactionCheck.OrderFailure": "The system is busy right now. Shortly you will be taken to the My Orders page, where you can check whether your order was created successfully or not",
    "qs.transactionCheck.InputCorrectGift": "Sorry, the promotion code you entered is incorrect. Maybe you entered it wrong or your promotion code has expired",
    "qs.transactionCheck.PrepaidCardGift": "Sorry, prepaid cards and promotion code cannot be used simultaneously <br/> The promotion code number you entered cannot be used",
    "qs.transactionCheck.Discount": "Discount: - HK$",
    "qs.transactionCheck.balance": "You have ",
    "qs.transactionCheck.out.promo.code": "If you choose to enjoy your employee discount, your promo code discount will be canceled.",
    "qs.transactionCheck.notsufficientfunds": "You lack the balance of this month's employee discount,",
    "qs.transactionCheck.notsufficientfunds2": "choose a lower-priced product or wait until the first day of next month when the balance will be updated",
    "qs.transactionCheck.GiftCorrect": "The promotion code number you entered can be used",
    "qs.transactionCheck.Closepage": "Do not close this page until payment is complete.",
    "qs.transactionCheck.PayPage": "Please complete payment on the new page that opens",
    "qs.transactionCheck.payed": "Payment completed",
    "qs.transactionCheck.payIncorrect": "A problem occured",
    "qs.transactionCheck.ExceedAmount": ", the discounted product price exceeds the balance.",
    "qs.transactionCheck.ExceedAmount2": "please choose a lower-priced product or wait until the first day of next month when the balance updated",
    "qs.transactionCheck.EmployeeDiscount": " in your monthly employee discount account balance.",
    "qs.transactionCheck.EmployeeDiscount2": "Would you like to pay for this purchase using your employee discount balance?",
    "qs.transactionCheck.PrepaidCardGiftNotUse": "Sorry, prepaid cards and promotion code cannot be used simultaneously",
    "qs.transactionCheckValidator.ConsigneeName": "Recipient name cannot be blank",
    "qs.transactionCheckValidator.ConsigneeAddress": "Address cannot be blank",
    "qs.transactionCheckValidator.Mobile": "You must enter mobile",
    "qs.transactionCheckValidator.EmailEmpty": "Email address cannot be blank",
    "qs.transactionCheckValidator.ZipCodePattern": "Zip code can only be 6 digits",
    "qs.transactionCheckValidator.MobilePattern": "Phone number is formatted incorrectly",
    "qs.transactionCheckValidator.EmailPattern": "Email address is formatted incorrectly",
    "qs.transactionCheckValidator.Phone": "You must enter either a mobile or contact phone number",
    "qs.transactionCheckValidator.PayStyle": "Sorry, please choose a payment form to complete the order payment",
    "qs.transactionCheckValidator.Captcha": "Verification code error, please re-enter!",
    "adv.search.Color": "Color",
    "adv.search.Colors": "Colors",
    "championhall.RefershCheckCode": "Click the verification code to refresh if you can't read it clearly",
    "index.InputEmail": "Please enter your email address",
    "index.InputCorrectEmail": "Please enter a valid email address",
    "index.Subscription": "This email address is already subscribed, please enter another email address",
    "kobe.expectancy": "Stay tuned!",
    "kobe.buynow": "Buy Now",
    "main.next": "NEXT",
    "main.Comfirm": "OK",
    "main.Cancel": "Cancel",
    "main.goshopping": "Continue Shopping",
    "main.completeinfo": "Complete personal information can get the following services：",
    "main.completeuserinfo": "Complete personal information",
    "main.gift1": "1. Get order delivery notice from Nike Hong Kong Store.",
    "main.gift2": "2. Get newest activity information from Nike Hong Kong Store.",
    "main.gift3": "3. Get surprise when fill out the real birthday information.",
    "main.alipay": "Dear Alipay Member",
    "main.logined": "You are already logged in Nike Hong Kong Store",
    "main.KeyWordSearch": "Please enter search keywords",
    "main.SaleProduct": "Product is sold out, please select another product",
    "main.NotStock": "Sorry, the product you selected is low in stock, try another color or style",
    "main.Sorry": "Sorry, please refresh the page and retry",
    "main.SpeekCheck": "Spell check return value: ",
    "main.Test": "Test",
    "main.KeyWord": "Keywords: ",
    "main.more": "More",
    "main.less": "Less",
    "mynike.UnbindSuccess": "Successfully removed from microblog!",
    "mynike.UnbindFailure": "Failed to remove from microblog!",
    "new.detail.Size": "Size:",
    "new.detail.Qty": "Qty:",
    "new.detail.quantity": "Qty",
    "new.detail.Price": "Price: HK$",
    "new.detail.money": "HK$",
    "new.detail.QueryCart": "View Cart",
    "new.detail.errornamepass": "(User name or password error)",
    "new.detail.IncludeLimit": "Your shopping cart contains limited-edition products, please use the shopping cart to checkout",
    "new.detail.NoLogin": "Sorry, you are not logged in or registered, click on the button below to log in or register",
    "new.detail.AddRemarkSuccess": "Added Note",
    "new.detail.AddRemarkFailure": "Failed to Add Note",
    "new.detail.Saled": "Sold Out",
    "new.detail.OffShelf": "Discontinued",
    "shopingcart.ComfirmDelete": "Are you sure you want to delete this product?",
    "shopingcart.hotSale": "Last Week's Top Sellers",
    "shopingcart.hotSale.noSearch": "THESE POPULAR PRODUCTS MIGHT INTEREST YOU",
    "shopingcart.recommend": "Recommended With",
    "shopingcart.CheckCodeError": "Verification code input error, please re-enter",
    "shopingcart.Tourist": "Guests cannot purchase limited-edition products, please use Member Login or register as a member, then retry",
    "template.SelectProduct": "Please select a product!",
    "template.favoriteSuccess": "Add to MyLocker",
    "template.select.area.province": "REGION",
    "template.select.area.city": "DISTRICT",
    "template.select.area.district": "AREA",
    "template.select.area.building": "PLEASE SELECT BUILDING NAME",
    "template.select": "Please Select",
    "template.saleQty": "Purchase Quantity",
    "template.selectSize": "Size",
    "template.AddShopingCart": "Successfully added to shopping cart!",
    "transactionCheck.CheckFailure": "Verification failed, please refresh the page and retry",
    "transactionCheck.limitFailure": "Limited-edition product verification failed, please refresh the page and retry",
    "transactionCheck.addOrderException": "Exception when creating order",
    "weiboShareActivity.ShareChar": "Shared message is too long, you can only share 140 characters!",
    "weiboShareActivity.Name": "Please fill in name information",
    "weiboShareActivity.Mobile": "Please fill in mobile number",
    "weiboShareActivity.IdCrad": "Please fill in ID card information",
    "weiboShareActivity.Email": "Please fill in email address",
    "weiboShareActivity.CheckCodeEmpty": "Verification code cannot be blank",
    "weiboShareActivity.AgreeInfo": "Please confirm that you accept the promotion rules",
    "favorites": "MyLocker",
    "treamentorder": "My Orders",
    "logout": "Logout",
    "mynike.profile.CheckEmail": "Nike will give your new email address to send a verification letter, please note that check and follow the prompts to confirm the mailbox to modify the letter",
    "super_pdp_comment.erroruserpass": "(User name or password format error)",
    "super_pdp_comment.ValidateCodeError": "(Verification code error)",
    "main.Customimmediately": "Custom Now",
    "edit_myfavorite_info3": "#NikeStore装备库# 运动的女生魅力十足！去看看我在 @NikeStore的收藏，姐妹们是时候该动起来了！",
    "edit_myfavorite_info4": "#NikeStore装备库# 女生的衣橱就是要五彩缤纷，包罗万象。去看看我在@NIKESTORE.COM.HK 里的收藏，运动装备一样可爱性感！",
    "edit_myfavorite_info5": "#NikeStore装备库# 时尚运动装备就需要朋友一起来出谋划策。去看看我在@NIKESTORE.COM.HK里的收藏，来点评一番，看看哪个最炫！",
    "edit_myfavorite_info6": "#NikeStore装备库# 在关键时刻，做好兄弟的就要多给点力。去看看我在 @NIKESTORE.COM.HK 的收藏，该怎么做，你们懂的！",
    "edit_myfavorite_info7": "#NikeStore装备库# 好兄弟就要有福同享，有好东西自然第一时间与你们分享。去看看我在@NikeStore的收藏，带走他们，跟我一起再创辉煌！",
    "edit_myfavorite_info8": "#NikeStore装备库# 要队友，要团队合作，也要独领风骚。去看看我在@NikeStore里的收藏，绝对不会让你失望！",
    "currency": "HK$",
    "main.noinfo": "Do not find the requirements of the convenience store.",
    "return.noRoSku": "You should select one item at least!",
    "return.RoReason": "Please select a reason for returning!",
    "return.RoBank": "Please choose a bank!",
    "return.RoRefundName": "Name can not be empty!",
    "return.RoTelOrMob": "Mobile or phone is necessary",
    "return.RoUserNotNull": "Account name can not be empty!",
    "area.SelectArea": "Please select region",
    "area.SelectPartition": "Please select district",
    "pdp.product.not.exist": "product does not exist",
    "pdp.favorite.success": "Add to MyLocker",
    "pdp.favorite.already": "You have already added this product to MyLocker",
    "pdp.member.favorite.product": "You are not logged in or registered",
    "pdp.function.exception": "Exception occurs, please try again later or contact customer service",
    "pdp.commentary.success": "Your review has been successfully submitted, Thanks for sharing! After some time before posting your comment, you can go to myNike to view.",
    "pdp.commentary.product.notexsit": "Review on the product does not exist",
    "pdp.commentary.content.count.error": "Review content can not be empty or more than 200 characters",
    "pdp.commentary.checkcode.error": "Verification code error",
    "pdp.comment.login": "Please login",
    "pdp.comment.size": "one size",
    "mobile.mynike.mobileEmpty": "Phone/mobile number cannot be blank",
    "mynike.myrtnorder.title": "My Returns/Exchange",
    "mobile.mynike.ContactNumberPatternError": "The phone number is not in the correct format",
    "categoryAndSearch.filter.more": "More",
    "categoryAndSearch.filter.more.sports": "More Sports",
    "categoryAndSearch.filter.less": "Fewer",
    "categoryAndSearch.filter.less.sports": "More Sports",
    "member.loginName.guest": "guest",
    "header.search": "WHAT ARE YOU LOOKING FOR?",
    "header.search1": "Search",
    "main.delivery": "Delivery",
    "main.pickup": "Pickup",
    "main.typeshow.sf": "Shun Fung Express Store",
    "main.typeshow.okConvenienceStore": "OK convenience store",
    "main.typeshow.711convenienceStore": "7-11 convenience store",
    "main.type": "Type",
    "main.number": "Code",
    "main.address": "Address",
    "main.hours": "Business Hours",
    "order.pickup.select": "Select the pick up site",
    "nikeid.dialog.msg": "For all Hong Kong customers, you MUST pay at NIKE LAB store instead of NIKEiD.com<br/><br/>You can design, register and save the customized product on NIKEiD.com. Once you finish your design,  you will receive a set of unique product code. NIKE LAB staff will confirm the purchase and complete your payment based on the given unique product code.",
    "order.free.notice1": "Enjoy free shipping by purchasing ",
    "order.free.notice2": " more",
    "main.order.choosePickup": "Please select the conditions or input the keyword search.",
    "mynike.myfavoriteList.size": "Size",
    "mynike.myfavoriteList.quantity": "Qty",
    "return.order.exception.noitem": "Return order excption:no items searched!",
    "transaction.shipInfo.instantdelivery.show1": "Expected to be delivered before 15:00.",
    "transaction.shipInfo.instantdelivery.show2": "Expected to be delivered before 16:30.",
    "transaction.shipInfo.instantdelivery.show3": "Expected to be delivered before 18:00.",
    "transaction.shipinfo.plschoose.kicksLounge": "Kicks Lounge",
    "transaction.shipinfo.plschoose.LabPS7": "Nike Lab PS7",
    "transaction.shipinfo.plschoose.Camelpaint": "Camelpaint",
    "transaction.shipinfo.plschoose.HKPC": "North Point",
    "exchange.order.pickon": "Check",
    "exchange.order.pickoff": "Click away",
    "exchange.order.exchange.application": "Merchandise exchange application",
    "exchange.order.exchange.applicationdesc": "If you want to exchange the item you have purchased, please contact our Customer Service staff.",
    "active.issameday.nopay": "Same day delivery, it will be arrived on or before 19:00. Please make the payment on or before 10:30, otherwise your order could not be completed.",
    "active.issameday.havepay": "Same day delivery, it will be arrived on or before 19:00. Please make the payment on or before 10:30, otherwise your order could not be completed. ( If you choose the 'Same day' service, you need to pay HK$38 for delivery.)",
    "store.index.ns.chk.sogo": "Sogo Nike Store",
    "store.index.nike.kicks.lounge": "Kicks Lounge",
    "new.transactionCheck.save.address.error": "Saving the delivery address failed",
    "facebook.year": "Year",
    "facebook.month": "Month",
    "facebook.day": "Day",
    "facebook.join.success": "LINK TO FACEBOOK SUCCEEDED!",
    "facebook.your.account": "Your NIKESTORE.COM.HK account ",
    "facebook.join.account": " You can now use your Facebook account to login to NIKESTORE.COM.HK",
    "facebook.success.confirm": "CONTINUE SHOPPING",
    "facebook.join.fair": "SORRY, LINK TO FACEBOOK FAILED",
    "facebook.fair.msg": "Please try again later",
    "facebook.fair.confirm": "CONFIRM",
    "facebook.replenish.success": "ACCOUNT SUCCESSFULLY CREATED",
    "facebook.replenish.success.msg": "You can now use your Facebook or Nikestore account to login to NIKESTORE.COM.HK",
    "facebook.replenish.fair": "SORRY, ACCOUNT CREATION FAILED",
    "facebook.login.fair": "SORRY, FACEBOOK LOGIN FAILED",
    "facebook.email.EmailPatternError": "Please enter a valid address",
    "facebook.socode.codePatternError": "Please enter a valid order number",
    "facebook.password.passworderror": "Please enter a password",
    "facebook.mobileEmpty": "Mobile number cannot be blank",
    "pdp.color": "Color:",
    "quickBuy.SelectSize": "Select a Size",
    "transaction.shipinfo.choose.pickup": "Select a Store",
    "shoppingcart.sku.offsale": "Sorry, this product is out of stock."
};
loxia.regional['zh_TW'] = {
    "member.login.ValidateCodeError": "驗證碼錯誤，請重新輸入！",
    "member.login.mynike": "我的NIKE",
    "member.login.UserNamePasswordError": "您輸入的使用者名稱與密碼不相符，請重新輸入！",
    "member.login.InvalidUser": "該使用者無效",
    "emptyInput": "輸入窗格不能留空",
    "member.login.EmptyEmail": "請填寫您的電子郵件地址",
    "member.login.InvalidEmail": "請填寫有效的電子郵件地址",
    "member.login.usedEmail": "此電子信箱已成功訂閱，請輸入其他信箱",
    "member.forgot.password.next.EmailError": "電子郵件地址與註冊時所用的信箱不一致！",
    "emailPatternError": "電子信箱格式不正確",
    "member.forgot.password.UserNotExist": "此使用者名稱不存在！",
    "UsernamePattern": "使用者名稱長度必須介於 2-40 個字元間",
    "CheckCodeInputError": "驗證碼輸入不正確！",
    "member.forgot.username.NotExistMailUser": "此電子信箱的使用者不存在！",
    "RefreshCheckCode": "如果看不清楚可以點選重新整理驗證碼",
    "NotExsitEmail": "此電子信箱的網域名稱不存在",
    "member.register.UsernamePattern": "使用者名稱必須由英數字元或下底線組成",
    "member.register.UsernameCorrect": "目前使用者名稱可以使用",
    "member.register.UsernameExist": "使用者名稱已存在",
    "member.register.InputPassword": "請輸入密碼",
    "member.register.PasswordPattern": "密碼長度必須介於 6-12 個字元之間",
    "member.register.ReInputPassword": "請輸入確認密碼",
    "member.register.PasswordInconsistent": "兩次密碼填寫不一致",
    "member.register.InputEmail": "請輸入電子信箱！",
    "member.register.EmailExist": "該電子信箱已有其他會員登記使用",
    "member.register.EmailPatternError": "註冊電子信箱格式不正確",
    "member.register.InputSex": "性別不能留空",
    "member.register.InputMobile": "性別不能留空",
    "member.register.MobileEmpty": "手機號碼不能留空",
    "member.register.MobileLength": "手機號碼長度必須為 10 位數",
    "member.register.MobilePattern": "手機號碼格式輸入不正確",
    "member.register.BirthdayEmpty": "生日不能留空",
    "member.register.WarningInfo": "很抱歉，你必須年滿13歲才可進入本網站。 如有任何問題或查詢，請聯絡客戶服務。",
    "member.register.AgreeInfo": "同意商店服務協議後才能成為註冊會員！",
    "member.replenish.UserNamePattern1": "使用者名稱長度必須介於 6-20 個字元間",
    "member.replenish.UserNamePattern2": "使用者名稱必須以字母開頭，且必須由英數字元或下底線組成，長度介於 6-40 個字元間。",
    "mynike.add.socialnetwork.PhoneEmpty": "電話 / 手機不能留空",
    "mynike.add.socialnetwork.PhonePatternError": "電話 / 手機格式不正確！",
    "mynike.add.socialnetwork.ZipCodePatternError": "郵遞區號格式不正確",
    "mynike.add.socialnetwork.ZipCodeEmpty": "郵遞區號不能留空",
    "mynike.add.socialnetwork.AddressEmpty": "地址不能留空",
    "mynike.add.socialnetwork.AddressPatternError": "收貨地址不能少於兩個字",
    "mynike.add.socialnetwork.NamePatternError": "姓名不能少於兩個字",
    "mynike.add.socialnetwork.EmailEmpty": "電子信箱不能留空",
    "mynike.add.socialnetwork.SelectCity": "市 / 縣為必選",
    "mynike.comments.SelectComments": "請先選擇希望編輯的評論",
    "mynike.comments.DeleteComments": "確定要刪除所選的評論？",
    "mynike.comments.ContentEmpty": "內容不能留空",
    "mynike.comments.PublishSuccess": "貼文成功",
    "mynike.comments.PublishFailure": "貼文失敗",
    "mynike.edit.myfavorite.InputCharTip1": "您還可以輸入 140 個字元",
    "mynike.edit.myfavorite.InputCharTip2": "還可以輸入 {0} 個字元",
    "mynike.edit.myfavorite.ExceedChar": "超出 {0} 個字元",
    "mynike.edit.myfavorite.ShareInfo": "分享的商品數量以 6 個為限",
    "mynike.edit.myfavorite.SelectShareProduct": "請選擇要分享的商品",
    "mynike.edit.myfavorite.Exceed": "超出",
    "mynike.edit.myfavorite.ShareChar": "分享字數過多",
    "mynike.edit.myfavorite.TipInfo": "勾選產品左上方的方塊，就能分享一個或多個收藏的商品，和好友一起看看誰的運動配備最酷！",
    "mynike.edit.myfavorite.deleteComments": "您是否要刪除對該商品的評論？",
    "mynike.edit.myfavorite.DeleteSuccess": "刪除成功",
    "mynike.edit.myfavorite.DeleteFavorite": "您是否要刪除該收藏？",
    "mynike.edit.myfavorite.InsertInfo": "我的 #NIKESTORE.COM.HK 配備庫中新增了一件酷炫商品，名為：",
    "mynike.edit.myfavorite.InsertInfo1": "發掘更多最愛商品 @nikestore",
    "mynike.edit.myfavorite.Stock": "庫存：",
    "mynike.edit.myfavorite.Item": "件",
    "mynike.edit.myfavorite.Input94Char": "還可輸入 94 個字元",
    "mynike.edit.myfavorite.bindingWebo": "請先綁定 Facebook 後再分享！",
    "mynike.edit.myfavorite.Fmale": "女",
    "mynike.edit.myfavorite.Male": "男",
    "mynike.edit.myfavorite.LimitProduct": "限量款商品不能加入購物車",
    "mynike.edit.myfavorite.ProductStyle": "此商品無男女款之分，請參考尺寸表進行選購",
    "mynike.edit.myfavorite.AddSuccess": "恭喜您，加入成功！",
    "mynike.edit.myfavorite.AddFailure": "加入失敗，請稍後重試",
    "mynike.edit.myfavorite.ComformSize": "請確認尺寸及購買數量",
    "mynike.edit.myfavorite.Size": "尺寸",
    "mynike.guestorder.query.EmailPatternError": "電子郵件格式不正確",
    "mynike.my.socialnetwork.DeleteFailure": "刪除失敗",
    "mynike.my.socialnetwork.ComfirmDeleteAddress": "您是否要刪除該地址？",
    "mynike.order.detail.OrderNotPay": "您的訂單狀態為無法付款！",
    "mynike.order.detail.ProductNotStock": "您好，您購買的商品已經沒有存貨，因此無法付款。很抱歉造成您的不便，建議您改選其他商品重新下單。",
    "mynike.order.detail.InputCancelOrderReason": "請輸入訂單取消原因",
    "mynike.order.detail.OrderError": "訂單錯誤，請稍後重新整理後再試",
    "mynike.order.detail.MallInfo": "商店提醒",
    "mynike.order.detail.OrderLimitProduct": "您好，您的訂單內含限量商品，取消後便不支援再次購買此件商品，請確認是否取消。",
    "mynike.prepaid.card.PrepaidCardNo": "請輸入預付卡卡號！",
    "mynike.prepaid.card.PrepaidCardPassword": "請輸入預付卡密碼！",
    "mynike.prepaid.card.NotMember": "抱歉，您不是商店註冊會員，無法儲值預付卡！",
    "mynike.prepaid.card.PrepaidCardNoError": "抱歉，您輸入的預付卡卡號或密碼有誤！",
    "mynike.prepaid.card.PrepaidCardInvalid": "抱歉，您輸入的預付卡已作廢！",
    "mynike.prepaid.card.PrepaidCardRecharge": "抱歉，您輸入的預付卡已儲值！",
    "mynike.prepaid.card.PrepaidCardExpired": "抱歉，您輸入的預付卡已過期！",
    "mynike.prepaid.card.PrepaidCardCheck": "抱歉，您輸入的預付卡未通過審核！",
    "mynike.prepaid.card.PrepaidCardNotCheck": "抱歉，您輸入的預付卡未審核！",
    "mynike.prepaid.card.PrepaidCard": "恭喜您，預付卡：",
    "mynike.prepaid.card.RechargeSuccess": " 儲值成功！",
    "mynike.profile.InvalidChar": "不能包含非法字元",
    "mynike.profile.EmailEmpty": "電子郵件地址不能留空",
    "mynike.profile.EmailUsed": "抱歉，此電子郵件信箱已有人使用！",
    "mynike.profile.EmailIncorrect": "電子郵件地址不正確",
    "mynike.profile.CurrentPasswordEmpty": "目前密碼不能留空",
    "mynike.profile.CurrentPasswordIncorrent": "目前密碼不正確",
    "mynike.profile.NewPasswordEmpty": "新密碼不能留空",
    "mynike.profile.NewPasswordPattern": "新密碼長度應介於 6-12 個字元間",
    "mynike.profile.ReInputNewPassword": "請再次輸入新密碼",
    "mynike.profile.MobilePattern": "手機格式不正確",
    "mynike.profile.InfoUpdateSuccess": "資訊更新成功",
    "mynike.profile.InfoUpdateFailure": "個人基本資訊更新失敗",
    "mynike.profile.EmailUpdateSuccess": "電子信箱更新成功",
    "mynike.profile.ReceiveEmail": "請接受來自 NIKE 台灣網路商店的活動郵件",
    "mynike.profile.LoginPasswordUpdateSuccess": "登入密碼修改成功",
    "mynike.profile.LoginPasswordUpdateFailure": "修改失敗！",
    "omniture.OneNikeChina.OmnitureCustomLinkFunctions.RegisterPage": "註冊頁面",
    "omniture.OneNikeChina.OmnitureCustomLinkFunctions.sinaWebo": "Facebook",
    "qs.super.pdp.comments.UsernameEmpty": "使用者名稱不能留空！",
    "qs.super.pdp.comments.UsernameIncorrect": "請輸入正確的使用者名稱！",
    "qs.super.pdp.comments.PasswordEmpty": "密碼不能留空！",
    "qs.super.pdp.comments.PasswordIncorrect": "請輸入正確的密碼！",
    "qs.super.pdp.comments.CheckCodeEmpty": "驗證碼不能留空！",
    "qs.super.pdp.comments.CheckCodeIncorrect": "請輸入正確的驗證碼！",
    "qs.super.pdp.comments.CommentEmpty": "評論內容不能留空！",
    "qs.super.pdp.comments.CommentIncorrect": "請輸入正確的評論！",
    "qs.super.pdp.comments.CommentSuccess": "評論成功！",
    "qs.super.pdp.SelectSize": "請選擇尺寸！",
    "qs.super.pdp.UnLogin": "抱歉，您尚未登入或註冊，請點選下方按鈕登入或註冊",
    "qs.super.pdp.login": "登入",
    "qs.super.pdp.regist": "註冊",
    "header.search": "還等什麼？",
    "header.search1": "搜索",
    "qs.super.pdp.serverInfo": "擷取伺服器資訊失敗！",
    "qs.transactionCheck.PrepaidCardAmount": "開立的發票不含使用預付卡支付的金額",
    "qs.transactionCheck.OrderFailure": "訂單建立流量過大，稍後將為您自動轉至「我的訂單」，查看訂單是否成功建立",
    "qs.transactionCheck.InputCorrectGift": "抱歉，您輸入的優惠編号不正確，也許是您輸入錯誤或優惠編号已過期",
    "qs.transactionCheck.PrepaidCardGift": "抱歉，預付卡與優惠編号不能同時使用<br/>您輸入的優惠編号可以使用",
    "qs.transactionCheck.Discount": "折扣優惠：-NT$",
    "qs.transactionCheck.balance": "您本月的員工折扣剩餘額度 ",
    "qs.transactionCheck.notsufficientfunds": "您本月的員工折扣餘額不足，請選擇價格較低的產品或待下月1日更新可用額後再購買",
    "qs.transactionCheck.GiftCorrect": "您輸入的優惠編号可以使用",
    "qs.transactionCheck.Closepage": "付款完成前請不要關閉本頁面！請根據付款狀況點選下面的按鈕",
    "qs.transactionCheck.PayPage": "請您在新開啟的頁面中完成付款",
    "qs.transactionCheck.payed": "已完成付款",
    "qs.transactionCheck.payIncorrect": "付款遇到問題",
    "qs.transactionCheck.ExceedAmount": "，產品折扣後價格已超過額度，請選擇小額商品或等到次月 1 日更新額度後再行購買</label>",
    "qs.transactionCheck.EmployeeDiscount": "，請確認是否使用員工折扣額度購買本次商品</label>",
    "qs.transactionCheck.PrepaidCardGiftNotUse": "抱歉，預付卡與優惠編号不能同時使用",
    "qs.transactionCheckValidator.ConsigneeName": "收貨人姓名不能留空",
    "qs.transactionCheckValidator.ConsigneeAddress": "收貨人地址不能留空",
    "qs.transactionCheckValidator.Mobile": "手機和電話需擇一填寫",
    "qs.transactionCheckValidator.EmailEmpty": "電子信箱不能留空",
    "qs.transactionCheckValidator.ZipCodePattern": "郵遞區號僅能為 3 位數字",
    "qs.transactionCheckValidator.MobilePattern": "電話格式不正確",
    "qs.transactionCheckValidator.EmailPattern": "電子信箱格式不正確",
    "qs.transactionCheckValidator.Phone": "手機和聯絡電話需擇一填寫",
    "qs.transactionCheckValidator.PayStyle": "抱歉，請選擇一種付款方式完成訂單付款",
    "adv.search.Color": "色",
    "adv.search.Colors": "色",
    "championhall.RefershCheckCode": "如果看不清楚可以按一下重新整理驗證碼",
    "index.InputEmail": "請填寫您的電子信箱",
    "index.InputCorrectEmail": "請填寫有效的電子信箱",
    "index.Subscription": "此電子信箱已成功訂閱，請輸入其他信箱",
    "kobe.expectancy": "敬請期待！",
    "kobe.buynow": "立即購買",
    "main.Comfirm": "確定",
    "main.Cancel": "取消",
    "main.goshopping": "繼續購物",
    "main.completeinfo": "完善個人資料可以獲取以下服務內容：",
    "main.completeuserinfo": "完善個人資料",
    "main.gift1": "1、接收來自NIKESTORE.COM.HK的訂單發貨提醒。",
    "main.gift2": "2、接收來自NIKESTORE.COM.HK的最新活動信息。",
    "main.gift3": "3、填寫真實生日信息有機會獲得意外驚喜。",
    "main.alipay": "親愛的支付寶會員",
    "main.logined": "您已經登入NIKESTORE.COM.HK",
    "main.KeyWordSearch": "請輸入搜尋關鍵字",
    "main.SaleProduct": "商品已售完，請重新選擇商品",
    "main.NotStock": "很抱歉，您選擇的商品庫存不足，不妨看看其它顏色或款式",
    "main.Sorry": "抱歉，請重新整理後重試",
    "main.SpeekCheck": "拼字檢查結果： ",
    "main.Test": "測試",
    "main.KeyWord": "關鍵字： ",
    "mynike.UnbindSuccess": "解除 Facebook 綁定成功！",
    "mynike.UnbindFailure": "解除 Facebook 綁定失敗！",
    "new.detail.Size": "尺碼:",
    "new.detail.Qty": "數量：",
    "new.detail.Price": "單價：NT$",
    "new.detail.money": "NT$",
    "new.detail.QueryCart": "查看購物車",
    "new.detail.errornamepass": "(用戶名或密碼錯誤)",
    "new.detail.IncludeLimit": "您的購物車內含限量商品，請使用購物車進行結算",
    "new.detail.NoLogin": "抱歉，您尚未登入或註冊，請按一下下方按鈕登入或註冊",
    "new.detail.AddRemarkSuccess": "加入備註成功",
    "new.detail.AddRemarkFailure": "加入備註失敗",
    "new.detail.Saled": "已售完",
    "new.detail.OffShelf": "已下架",
    "shopingcart.ComfirmDelete": "您是否確定要刪除該商品？",
    "shopingcart.hotSale": "上週最熱賣",
    "shopingcart.recommend": "推薦搭配",
    "shopingcart.CheckCodeError": "驗證碼輸入錯誤，請重新輸入",
    "shopingcart.Tourist": "不能以訪客身分購買限量款商品，請使用會員身分登入或註冊成為會員後再次購買",
    "template.SelectProduct": "請選擇商品！",
    "template.favoriteSuccess": "收藏成功",
    "template.select": "請選擇",
    "template.saleQty": "的購買數量",
    "template.selectSize": "的尺寸",
    "template.AddShopingCart": "已成功加入至購物車！",
    "transactionCheck.CheckFailure": "驗證失敗，請重新整理後重試",
    "transactionCheck.limitFailure": "限量商品驗證失敗，請重新整理後重試",
    "transactionCheck.addOrderException": "訂單建立異常",
    "weiboShareActivity.ShareChar": "分享字數過多，長度以 140 個字元為限！",
    "weiboShareActivity.Name": "請填寫姓名資訊",
    "weiboShareActivity.Mobile": "請填寫手機號碼",
    "weiboShareActivity.IdCrad": "請填寫身份證資訊",
    "weiboShareActivity.Email": "請填寫電子郵件",
    "weiboShareActivity.CheckCodeEmpty": "驗證碼不能留空",
    "weiboShareActivity.AgreeInfo": "請確認是否同意活動規則",
    "favorites": "我的收藏",
    "treamentorder": "我的訂單",
    "logout": "登出",
    "mynike.profile.CheckEmail": "Nike會給您的新郵箱地址發送一封驗證信，請注意查收，並按照信中提示確認郵箱修改",
    "super_pdp_comment.erroruserpass": "(用戶名或密碼格式錯誤)",
    "super_pdp_comment.ValidateCodeError": "(驗證碼錯誤)",
    "main.Customimmediately": "立即定制",
    "edit_myfavorite_info3": "#NikeStore裝備庫# 運動的女生魅力十足！去看看我在 @NikeStore的收藏，姐妹們是時候該動起來了！",
    "edit_myfavorite_info4": "#NikeStore裝備庫# 女生的衣櫥就是要五彩繽紛，包羅萬象。去看看我在@NIKESTORE.COM.HK 裡的收藏，運動裝備一樣可愛性感！",
    "edit_myfavorite_info5": "#NikeStore裝備庫# 時尚運動裝備就需要朋友一起來出謀劃策。去看看我在@NikeStore裡的收藏，來點評一番，看看哪個最炫！",
    "edit_myfavorite_info6": "#NikeStore裝備庫# 在關鍵時刻，做好兄弟的就要多給點力。去看看我在 @NIKESTORE.COM.HK 的收藏，該怎麼做，你們懂的！",
    "edit_myfavorite_info7": "#NikeStore裝備庫# 好兄弟就要有福同享，有好東西自然第一時間與你們分享。去看看我在@NikeStore的收藏，帶走他們，跟我一起再創輝煌！",
    "edit_myfavorite_info8": "#NikeStore裝備庫# 要隊友，要團隊合作，也要獨領風騷。去看看我在@NikeStore裡的收藏，絕對不會讓你失望！",
    "currency": "$",
    "main.noinfo": "暫無相關資訊",
    "return.noRoSku": "您還沒有選中需要退貨的商品!",
    "return.RoReason": "請選擇一個退貨理由!",
    "return.RoBank": "請選擇一個銀行!",
    "return.RoRefundName": "退款人姓名不能為空!",
    "return.RoTelOrMob": "手機和電話需必填一項",
    "return.RoUserNotNull": "帳戶名不能為空!",
    "area.SelectArea": "請選擇地域",
    "area.SelectPartition": "請選擇分區",
    "pdp.product.not.exist": "該商品不存在",
    "pdp.favorite.success": "收藏成功",
    "pdp.favorite.already": "你已經收藏過此商品",
    "pdp.member.favorite.product": "只有註冊會員才能收藏喜愛的商品",
    "pdp.function.exception": "功能異常，請稍後重試或聯繫客服人員",
    "pdp.commentary.success": "您的評論已成功提交，感謝分享！ 一段時間後商城才會發表您的評論，你可以到我的nike頁面查看。",
    "pdp.commentary.product.notexsit": "評論商品不存在",
    "pdp.commentary.content.count.error": "評論內容不能為空或超過200個字元",
    "pdp.commentary.checkcode.error": "校驗碼輸入不正確",
    "pdp.comment.login": "請登入後評論",
    "pdp.comment.size": "均碼",
    "member.loginName.guest": "訪客",
    "mobile.mynike.ContactNumberPatternError": "聯絡電話號碼格式不正確",
    "mobile.mynike.mobileEmpty": "電話 / 手機不能留空",
    "mynike.myrtnorder.title": "我的退單",
    "mynike.myfavoriteList.size": "尺碼",
    "categoryAndSearch.filter.more": "更多",
    "categoryAndSearch.filter.more.sports": "更多運動",
    "categoryAndSearch.filter.less": "收起",
    "categoryAndSearch.filter.less.sports": "收起運動",
    "nikeid.dialog.msg": "香港顧客可於NIKE-iD網站內設計、登記及儲存自訂的貨品。在完成設計後，您將會收到一組指定的編碼。如果您確認購買，請親臨NIKE LAB。於NIKE LAB的店員會根據您的貨品編碼，確認是次交易及收取所需款項。<br/><br/>(香港顧客暫時只支援親身於NIKE LAB付款，不能透過NIKE-iD網站付款)",
    "mynike.myfavoriteList.quantity": "數量",
    "return.order.exception.noitem": "退貨異常：未蒐集到需要退貨的商品!"
};
/* 
SiteCatalyst code version: H.22.1.
Copyright 1996-2010 Adobe, Inc. All Rights Reserved

Last Edit Date: 5 June 2015
Update the s.crossvisitparticipation plugin
*/

/* switchSuite() function is removed, replaced with dynamicAccount */

var s_account = "nikestorehktwdev"
var s = s_gi(s_account)


/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */

/* Account Configuration Section */

s.dynamicAccountSelection = true
s.dynamicAccountList = "nikestorehktwdev=staging.nikestore.com.hk;nikestorehktwdev=staging.nikestore.com.tw;nikestorehktwdev=m-staging.nikestore.com.hk;nikestorehktwdev=m-staging.nikestore.com.tw;nikestorehktw=nikestore.com.hk;nikestorehktw=m.nikestore.com.hk;nikestorehktw=nikestore.com.tw;nikestorehktw=m.nikestore.com.tw;"
s.dynamicAccountMatch = window.location.host + window.location.pathname

/* Regional settings */
s.charSet = "UTF-8"
s.cookieDomainPeriods = 3
s.currencyCode = "HKD"

/* Link Tracking Config */
s.trackDownloadLinks = true
s.trackExternalLinks = true
s.trackInlineStats = true
s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls"
s.linkInternalFilters = "javascript:,nikestore.com.hk,nikestore.com.tw"
s.linkLeaveQueryString = false
s.linkTrackVars = "None"
s.linkTrackEvents = "None"

/* Page Name Plugin Config */
s.siteID = "" // leftmost value in pagename
s.defaultPage = "homepage" // filename to add when none exists
s.queryVarsList = "c1,page,sort" // query parameters to keep
s.pathExcludeDelim = ";" // portion of the path to exclude
s.pathConcatDelim = " > " // page name component separator
s.pathExcludeList = "" // elements to exclude from the path


/* Plugin Config */
s.usePlugins = true;

/* DynamicObjectIDs config */
function s_getObjectID(o) {
    var ID = o.href;
    return ID;
}
s.getObjectID = s_getObjectID

/* CTQ variables */
var i = 1;

function s_doPlugins(s) {

    /* global account Variables - set on every page */
    s.prop13 = "apac";
    s.prop14 = "hk";
    s.prop21 = "ecommerce";

    /* Populate page name using s.getPageName() plugin */
    if (!s.pageType && !s.pageName) {
        s.pageName = s.getPageName()
        s.pageName = s.pageName.toLowerCase();
    }
    
    if (s.pageName && s.pageName != '') 
    {
        var str = s.pageName.split(" > ");
        var nike1 = str[0];
        var nike2 = str[1];
        var nike3 = str[2];
        var nike4 = str[3];
        var nike5 = str[4];
        var nike6 = str[5];
        // Channel
        if (nike1 && !s.channel) {
            s.channel = nike1;
            s.channel = s.channel.toLowerCase();
        }
        ;
        // Content level 2
        if (nike1 && nike2 && !s.prop18) {
            s.prop18 = nike1 + " > " + nike2;
            s.prop18 = s.prop18.toLowerCase();
        }
        ;
        // Content level 3
        if (nike2 && nike3 && !s.prop19) {
            s.prop19 = nike1 + " > " + nike2 + " > " + nike3;
            s.prop19 = s.prop19.toLowerCase();
        }
        ;
    // Hierarchy -- temporarily disabled
    // if (s.pageName)	{s.hier1=s.repl(s.pageName, " > ", "|"); s.hier1=s.hier1.toLowerCase(); };
    }
    
    if (s_account) {
        s.server = s_account;
    }
    s.prop24 = "D=User-Agent";
    s.prop26 = s.eVar5 = document.location;

    /* External Campaign Tracking */
    
    s.eVar50 = s.getValOnce(s.getQueryParam("sitesrc"), "v50");
    
    if (s.getQueryParam('cp')) 
    {
        s.campaign = s.getValOnce(s.getQueryParam('cp', 'cp_cookie', 0));
        s.campaign = s.campaign.toLowerCase();
        s.prop28 = "D=v0";
        s.eVar6 = "D=v0";
        s.eVar17 = s.crossVisitParticipation(s.campaign, 's_cpm', '90', '5', ' > ', '');
        s.clickThruQuality('cp', 'event50', 'event51');
        s.prop29 = s.campaign + "|" + s.pageName;
    }

    /* Start: Code to populate traffic sources */
    function getQueryString() {
        var result = {}, queryString = location.search.substring(1), 
        re = /([^&=]+)=([^&]*)/g, m;
        
        while (m = re.exec(queryString)) {
            result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
        }
        
        return result;
    }
    // Set array of search engines here:
    var searchengine = ["baidu", "sogou", "sohu", "zhongsou", "soso", "yahoo", "google", "bing"];
    // Set array of social media sites here:
    var social = ["kaixin", "renren", "douban", "myspace", "facebook", "51.com", "xici", "daqi", "19lou", "weibo", "bbs.ifeng", "qq", "blog.sina", "t.sina.com.cn"];
    // Set Campaign ID here:
    var myParam = getQueryString()["cp"];
    if (myParam != undefined) {
        switch (myParam) {
            case "eml":
                s.eVar29 = "email";
                break;
            case "ban":
                s.eVar29 = "display";
                break;
            case "sem":
                s.eVar29 = "sem";
                break;
            case "aff ":
                s.eVar29 = "affiliate";
                break;
        }
    } else {
        var exist = false;
        var referrer = document.referrer;
        if (referrer != "") {
            for (var i = 0; i < searchengine.length; i++) {
                if (referrer.indexOf(searchengine[i]) != -1) {
                    s.eVar29 = "seo";
                    exist = true;
                    break;
                }
            }
            if (!exist) {
                for (var i = 0; i < social.length; i++) {
                    if (referrer.indexOf(social[i]) != -1) {
                        s.eVar29 = "social";
                        exist = true;
                        break;
                    }
                }
            }
            if (!exist) {
                s.eVar29 = "referral";
            }
        } else {
            s.eVar29 = "direct";
        }
    }
    
    if (s.eVar29) 
    {
        s.prop6 = s.eVar35 = "D=v29";
        s.eVar8 = s.crossVisitParticipation(s.eVar29, 's_source', '90', '5', ' > ', '');
    }
    /* End: Code to populate traffic sources */

    /* Do dynamic Link tracking */
    s.prop32 = s.eVar36 = "D=oid";

    /* Get the sort option */
    s.prop30 = s.getQueryParam('order');

    /* Get et_rid & et_cid from query string */
    s.eVar37 = s.getQueryParam("et_rid");
    s.eVar38 = s.getQueryParam("et_cid");

    /* Internal Campaign Tracking */
    if (s.getQueryParam('intpromo')) 
    {
        s.eVar14 = s.getValOnce(s.getQueryParam('intpromo', 'int_cookie', 0));
        s.eVar14 = s.eVar14.toLowerCase();
        s.events = s.apl(s.events, 'event42', ',', 1);
    }

    /* Set the internal search variables automatically */
    if (s.prop10) {
        s.events = "event3";
        s.eVar11 = "D=c10";
        s.prop17 = "internal search > no results";
        s.eVar13 = "D=c17";
        s.eVar12 = "+1"
    }
    if (s.prop11) {
        s.events = "event3";
        s.eVar11 = "D=c11";
        s.prop17 = "internal search > results";
        s.eVar13 = "D=c17";
        s.eVar12 = "+1"
    }

    /* Set the visitor ID automatically */
    if (s.prop31) {
        s.eVar1 = "D=c31";
    }

    /* Set eVar10 based on purchaseID */
    if (s.purchaseID) {
        s.eVar10 = s.purchaseID;
    }

    /* Get visitor info */
    s.prop33 = s.getDaysSinceLastVisit('s_lv');
    s.prop34 = s.getNewRepeat();
    s.prop35 = s.getVisitNum();

    /* Persist variables across the session when set */
    if (s.prop33) {
        s.eVar16 = s.getValOnce(s.prop33, 's_var_16', 0);
    }
    if (s.prop34) {
        s.eVar18 = s.getValOnce(s.prop34, 's_var_18', 0);
    }
    if (s.prop35) {
        s.eVar19 = s.getValOnce(s.prop35, 's_var_19', 0);
    }
    //	if(s.eVar34) {s.eVar34=s.getValOnce(s.eVar34, 'e_var_34', 0); }

    /* Call to Time Parting Plugin */
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    s_hour = s.getTimeParting('h', '+8', year); // Set hour
    s_day = s.getTimeParting('d', '+8', year); // Set day
    s.prop8 = s.getTimeParting('w', '+8', year); // Set weekend/weekday
    
    s_daypart = s_day + "|" + s_hour;
    s.prop7 = s_daypart.toLowerCase();
    //copy to eVars
    if (s.prop7) {
        s.eVar31 = "D=c7";
    }
    if (s.prop8) {
        s.eVar30 = "D=c8";
    }

    /* pathing by Returning Visitors */
    if (s.eVar18 == 'Repeat') 
    {
        s.prop1 = s.getAndPersistValue(s.eVar18, 'repeat_path', 0) + ": " + s.pageName;
        s.prop1 = s.prop1.toLowerCase();
    }

    /* pathing by New Visitors */
    if (s.eVar18 == 'New') 
    {
        s.prop2 = s.getAndPersistValue(s.eVar18, 'new_path', 0) + ": " + s.pageName;
        s.prop2 = s.prop2.toLowerCase();
    }

    /* 404 Page */
    if (s.pageType) {
        s.pageName = "";
        s.channel = "";
    }

    /* Persist eVars */
    //	if(s.eVar4) {s.eVar4=s.getValOnce(s.eVar4, 's_var_4', 0); }
    if (s.eVar1) {
        s.eVar1 = s.getValOnce(s.eVar1, 's_var_1', 0);
    }
    //	if(s.eVar34) {s.eVar34=s.getValOnce(s.eVar34, 's_var_34', 0); }

    /* Set Page View Event */
    s.events = s.apl(s.events, 'event1', ',', 1);

    /* Time to Complete Purchase Process */
    if (s.events) 
    {
        if (s.events.indexOf('scOpen') > -1)
            s.ttc = 'start';
        if (s.events.indexOf('purchase') > -1)
            s.ttc = 'stop';
        s.eVar7 = s.getTimeToComplete(s.ttc, 'ttc', 0);
    }

    /* Get Previous Page Value */
    if (s.type == 'load') {
        s.prop5 = s.getPreviousValue(s.pageName, 'gpv_pn');
        //首次访问prop5置为entry(ps:由于cookie，所以关闭浏览器后首次访问网站不是entry，而是上次浏览的url，若要改成关闭浏览器即认为是新的访问，可以使用会话cookie)
        if (!s.prop5) {
            s.prop5 = "entry";
        }
    }


    /* To setup Dynamic Object IDs */
    s.setupDynamicObjectIDs();

    /* Handle the scOpen event gracefully */
    s.events = s.getCartOpen("s_scOpen");
    /* Reset the scOpen event after purchase */
    s.events = s.resetGetCartOpen();

    /* getPercentPageViewed  */
    s.prop37 = s.getPercentPageViewed();

}

s.doPlugins = s_doPlugins

/************************** PLUGINS *********************************/
/*
* Plugin: getPercentPageViewed v1.4
*/
s.handlePPVevents = new Function("", "" 
+ "if(!s.getPPVid)return;var dh=Math.max(Math.max(s.d.body.scrollHeigh" 
+ "t,s.d.documentElement.scrollHeight),Math.max(s.d.body.offsetHeight," 
+ "s.d.documentElement.offsetHeight),Math.max(s.d.body.clientHeight,s." 
+ "d.documentElement.clientHeight)),vph=s.wd.innerHeight||(s.d.documen" 
+ "tElement.clientHeight||s.d.body.clientHeight),st=s.wd.pageYOffset||" 
+ "(s.wd.document.documentElement.scrollTop||s.wd.document.body.scroll" 
+ "Top),vh=st+vph,pv=Math.min(Math.round(vh/dh*100),100),c=s.c_r('s_pp" 
+ "v'),a=(c.indexOf(',')>-1)?c.split(',',4):[],id=(a.length>0)?(a[0]):" 
+ "escape(s.getPPVid),cv=(a.length>1)?parseInt(a[1]):(0),p0=(a.length>" 
+ "2)?parseInt(a[2]):(pv),cy=(a.length>3)?parseInt(a[3]):(0),cn=(pv>0)" 
+ "?(id+','+((pv>cv)?pv:cv)+','+p0+','+((vh>cy)?vh:cy)):'';s.c_w('s_pp" 
+ "v',cn);");
s.getPercentPageViewed = new Function("pid", "" 
+ "pid=pid?pid:'-';var s=this,ist=!s.getPPVid?true:false;if(typeof(s.l" 
+ "inkType)!='undefined'&&s.linkType!='e')return'';var v=s.c_r('s_ppv'" 
+ "),a=(v.indexOf(',')>-1)?v.split(',',4):[];if(a.length<4){for(var i=" 
+ "3;i>0;i--){a[i]=(i<a.length)?(a[i-1]):('');}a[0]='';}a[0]=unescape(" 
+ "a[0]);s.getPPVpid=pid;s.c_w('s_ppv',escape(pid));if(ist){s.getPPVid" 
+ "=(pid)?(pid):(s.pageName?s.pageName:document.location.href);s.c_w('" 
+ "s_ppv',escape(s.getPPVid));if(s.wd.addEventListener){s.wd.addEventL" 
+ "istener('load',s.handlePPVevents,false);s.wd.addEventListener('scro" 
+ "ll',s.handlePPVevents,false);s.wd.addEventListener('resize',s.handl" 
+ "ePPVevents,false);}else if(s.wd.attachEvent){s.wd.attachEvent('onlo" 
+ "ad',s.handlePPVevents);s.wd.attachEvent('onscroll',s.handlePPVevent" 
+ "s);s.wd.attachEvent('onresize',s.handlePPVevents);}}return(pid!='-'" 
+ ")?(a):(a[1]);");


/* Plugin: getPageName v2.1 - parse URL and return */
s.getPageName = new Function("u", "" 
+ "var s=this,v=u?u:''+s.wd.location,x=v.indexOf(':'),y=v.indexOf('/'," 
+ "x+4),z=v.indexOf('?'),c=s.pathConcatDelim,e=s.pathExcludeDelim,g=s." 
+ "queryVarsList,d=s.siteID,n=d?d:'',q=z<0?'':v.substring(z+1),p=v.sub" 
+ "string(y+1,q?z:v.length);z=p.indexOf('#');p=z<0?p:s.fl(p,z);x=e?p.i" 
+ "ndexOf(e):-1;p=x<0?p:s.fl(p,x);p+=!p||p.charAt(p.length-1)=='/'?s.d" 
+ "efaultPage:'';y=c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;" 
+ "z=s.fl(p,x);if(!s.pt(s.pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p." 
+ "substring(x+1)}y=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length:x" 
+ ";z=s.fl(g,x);z=s.pt(q,'&','p_c',z);if(z){n+=n?y+z:z;y=c?c:'&'}g=g.s" 
+ "ubstring(x+1)}return n");

/* Plugin: s.getPreviousValue 1.0 Get Granular Time Spent on Previous Page v.1.0  */
s.getPreviousValue = new Function("v", "c", "el", "" 
+ "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el" 
+ "){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i" 
+ "){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)" 
+ ":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?" 
+ "s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/* Plugin: s.getCartOpen */
s.getCartOpen = new Function("c", "" 
+ "var s=this,t=new Date,e=s.events?s.events:'',i=0;t.setTime(t.getTim" 
+ "e()+1800000);if(s.c_r(c)||e.indexOf('scOpen')>-1){if(!s.c_w(c,1,t))" 
+ "{s.c_w(c,1,0)}}else{if(e.indexOf('scAdd')>-1){if(s.c_w(c,1,t)){i=1}" 
+ "else if(s.c_w(c,1,0)){i=1}}}if(i){e=e+',scOpen'}return e");

/* Plugin: s.resetGetCartOpen */
s.resetGetCartOpen = new Function("" 
+ "var s=this,t=new Date,e=s.events?s.events:'';t.setTime(t.getTime()+" 
+ "10000);if(e.indexOf('purchase')>-1){if(s.c_r('s_scOpen')||e.indexOf" 
+ "('scOpen')>-1){if(!s.c_w('s_scOpen','',t)){s.c_w('s_scOpen','',0);}" 
+ "}}return e");

/* Plugin: s.getAndPersistValue 0.3 - get a value on every page */
s.getAndPersistValue = new Function("v", "c", "e", "" 
+ "var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if(" 
+ "v)s.c_w(c,v,e?a:0);return s.c_r(c);");

/*
 * Plug-in: crossVisitParticipation v1.7 - stacks values from
 * specified variable in cookie and returns value
 */

s.crossVisitParticipation = new Function("v", "cn", "ex", "ct", "dl", "ev", "dv", "" 
+ "var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var" 
+ " ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l" 
+ "ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i" 
+ "f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape(" 
+ "v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()" 
+ ";if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=ar" 
+ "ry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry" 
+ "[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+" 
+ "5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.len" 
+ "gth-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date(" 
+ ").getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new" 
+ " Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td." 
+ "getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0" 
+ "]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:','," 
+ "front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{deli" 
+ "m:dl});if(ce)s.c_w(cn,'');return r;");
/*
 * Plugin Utility: Replace v1.0
 
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");
*/

/* Plugin: s.getTimeToComplete */
s.getTimeToComplete = new Function("v", "cn", "e", "" 
+ "var s=this,d=new Date,x=d,k;if(!s.ttcr){e=e?e:0;if(v=='start'||v=='" 
+ "stop')s.ttcr=1;x.setTime(x.getTime()+e*86400000);if(v=='start'){s.c" 
+ "_w(cn,d.getTime(),e?x:0);return '';}if(v=='stop'){k=s.c_r(cn);if(!s" 
+ ".c_w(cn,'',d)||!k)return '';v=(d.getTime()-k)/1000;var td=86400,th=" 
+ "3600,tm=60,r=5,u,un;if(v>td){u=td;un='days';}else if(v>th){u=th;un=" 
+ "'hours';}else if(v>tm){r=2;u=tm;un='minutes';}else{r=.2;u=1;un='sec" 
+ "onds';}v=v*r/u;return (Math.round(v)/r)+' '+un;}}return '';");

/* Plugin: Utility Functions: apl, p_c, p_gh, split, replace, join */
s.apl = new Function("L", "v", "d", "u", "" 
+ "var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a." 
+ "length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas" 
+ "e()));}}if(!m)L=L?L+d+v:v;return L");
s.p_c = new Function("v", "c", "" 
+ "var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le" 
+ "ngth:x).toLowerCase()?v:0");
s.p_gh = new Function("" 
+ "var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot(" 
+ "o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){" 
+ "o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s." 
+ "ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");
s.split = new Function("l", "d", "" 
+ "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x" 
+ "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
s.repl = new Function("x", "o", "n", "" 
+ "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x." 
+ "substring(i+o.length);i=x.indexOf(o,i+l)}return x");
s.join = new Function("v", "p", "" 
+ "var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back" 
+ ":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0" 
+ ";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el" 
+ "se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

/* Plugin: s.downloadLinkHandler 0.5 - identify and report download links */
s.downloadLinkHandler = new Function("p", "" 
+ "var s=this,h=s.p_gh(),n='linkDownloadFileTypes',i,t;if(!h||(s.linkT" 
+ "ype&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;" 
+ "if(s.lt(h)=='d')s.linkType='d';else h='';s[n]=t;return h;");

/* Plugin: s.linkHandler 0.5 - identify and report custom links */
s.linkHandler = new Function("p", "t", "" 
+ "var s=this,h=s.p_gh(),i,l;t=t?t:'o';if(!h||(s.linkType&&(h||s.linkN" 
+ "ame)))return '';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h." 
+ "substring(0,i);l=s.pt(p,'|','p_gn',h.toLowerCase());if(l){s.linkNam" 
+ "e=l=='[['?'':l;s.linkType=t;return h;}return '';");
s.p_gn = new Function("t", "h", "" 
+ "var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x=" 
+ "t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}" 
+ "return 0;");


/* Plugin: s.setupDynamicObjectIDs v1.4: Setup Dynamic Object IDs based on URL */
s.setupDynamicObjectIDs = new Function("" 
+ "var s=this;if(!s.doi){s.doi=1;if(s.apv>3&&(!s.isie||!s.ismac||s.apv" 
+ ">=5)){if(s.wd.attachEvent)s.wd.attachEvent('onload',s.setOIDs);else" 
+ " if(s.wd.addEventListener)s.wd.addEventListener('load',s.setOIDs,fa" 
+ "lse);else{s.doiol=s.wd.onload;s.wd.onload=s.setOIDs}}s.wd.s_semapho" 
+ "re=1}");
s.setOIDs = new Function("e", "" 
+ "var s=s_c_il[" + s._in + "],b=s.eh(s.wd,'onload'),o='onclick',x,l,u,c,i" 
+ ",a=new Array;if(s.doiol){if(b)s[b]=s.wd[b];s.doiol(e)}if(s.d.links)" 
+ "{for(i=0;i<s.d.links.length;i++){l=s.d.links[i];c=l[o]?''+l[o]:'';b" 
+ "=s.eh(l,o);z=l[b]?''+l[b]:'';u=s.getObjectID(l);if(u&&c.indexOf('s_" 
+ "objectID')<0&&z.indexOf('s_objectID')<0){u=s.repl(u,'\"','');u=s.re" 
+ "pl(u,'\\n','').substring(0,97);l.s_oc=l[o];a[u]=a[u]?a[u]+1:1;x='';" 
+ "if(c.indexOf('.t(')>=0||c.indexOf('.tl(')>=0||c.indexOf('s_gs(')>=0" 
+ ")x='var x=\".tl(\";';x+='s_objectID=\"'+u+'_'+a[u]+'\";return this." 
+ "s_oc?this.s_oc(e):true';if(s.isns&&s.apv>=5)l.setAttribute(o,x);l[o" 
+ "]=new Function('e',x)}}}s.wd.s_semaphore=0;return true");

/* Plugin: s.getVisitNum 2.0 returns the user visit number */
s.getVisitNum = new Function("" 
+ "var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum',c2='s" 
+ "_invisit';e.setTime(ct+30*24*60*60*1000);cval=s.c_r(c);if(cval){var" 
+ " i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}cvis" 
+ "it=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'" 
+ "true',e);return str;}else return 'unknown visit number';}else{if(st" 
+ "r){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e)" 
+ ";e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else{s.c_w" 
+ "(c,ct+30*24*60*60*1000+'&vn=1',e);e.setTime(ct+30*60*1000);s.c_w(c2" 
+ ",'true',e);return 1;}}"
);

/* Plugin: s.getTimeParting 1.4 - Set timeparting values based on time zone (15 min) */
s.getTimeParting = new Function("t", "z", "y", "" 
+ "dc=new Date('1/1/2000');var f=15;var ne=8;if(dc.getDay()!=6||" 
+ "dc.getMonth()!=0){return'Data Not Available'}else{;z=parseInt(z);" 
+ "if(y=='2009'){f=8;ne=1};gmar=new Date('3/1/'+y);dsts=f-gmar.getDay(" 
+ ");gnov=new Date('11/1/'+y);dste=ne-gnov.getDay();spr=new Date('3/'" 
+ "+dsts+'/'+y);fl=new Date('11/'+dste+'/'+y);cd=new Date();" 
+ "if(cd>spr&&cd<fl){z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneO" 
+ "ffset()*60000);tz=new Date(utc + (3600000*z));thisy=tz.getFullYear(" 
+ ");var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Fr" 
+ "iday','Saturday'];if(thisy!=y){return'Data Not Available'}else{;thi" 
+ "sh=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow=" 
+ "days[thisd];var ap='AM';var dt='Weekday';var mint='00';if(thismin>1" 
+ "5&&thismin<30){mint='15'}if(thismin>30&&thismin<45){mint='30'}if(th" 
+ "ismin>45&&thismin<60){mint='45'}" 
+ "if(thish>=12){ap='PM';thish=thish-12};if (thish==0){th" 
+ "ish=12};if(thisd==6||thisd==0){dt='Weekend'};var timestring=thish+'" 
+ ":'+mint+ap;var daystring=dow;var endstring=dt;if(t=='h'){return tim" 
+ "estring}if(t=='d'){return daystring};if(t=='w'){return en" 
+ "dstring}}};"
);

/* Plugin clickThruQuality v1.0 */
s.clickThruQuality = new Function("scp", "tcth_ev", "cp_ev", "cff_ev", "cf_th", "" 
+ "var s=this;if(s.p_fo('clickThruQuality')==1){var ev=s.events?s.even" 
+ "ts+',':'';if(s.getQueryParam&&s.getQueryParam(scp)){s.events=ev+tct" 
+ "h_ev;if(s.c_r('cf')){var tct=parseInt(s.c_r('cf'))+1;s.c_w('cf',tct" 
+ ",0);if(tct==cf_th&&cff_ev){s.events=s.events+','+cff_ev;}}else {s.c" 
+ "_w('cf',1,0);}}else {if(s.c_r('cf')>=1){s.c_w('cf',0,0);s.events=ev" 
+ "+cp_ev;}}}");
s.p_fo = new Function("n", "" 
+ "var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]=" 
+ "new Object;return 1;}else {return 0;}");


/* Plugin: s.getValOnce 0.2 - get a value once per session or number of days */
s.getValOnce = new Function("v", "c", "e", "" 
+ "var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime(" 
+ ")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");

/* Plugin: s.getQueryParam 2.3 gets any parameter from the querystring */
s.getQueryParam = new Function("p", "d", "u", "" 
+ "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati" 
+ "on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p" 
+ ".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-" 
+ "1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i=" 
+ "=p.length?i:i+1)}return v");
s.p_gpv = new Function("k", "u", "" 
+ "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v" 
+ "=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf = new Function("t", "k", "" 
+ "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T" 
+ "rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s." 
+ "epa(v)}return ''");

/* Plugin: s.getDaysSinceLastVisit 1.1.H - capture time from last visit */
s.getDaysSinceLastVisit = new Function("c", "" 
+ "var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT" 
+ "ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s" 
+ "etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f" 
+ "2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f" 
+ "5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);" 
+ "s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da" 
+ "y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day" 
+ "){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s." 
+ "c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c" 
+ "_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c" 
+ "+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur" 
+ "n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s" 
+ "!=f5) return '';else return cval_s;");

/* Plugin: s.getNewRepeat 1.2 - Return whether user is new or repeat */
s.getNewRepeat = new Function("d", "cn", "" 
+ "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:" 
+ "'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length=" 
+ "=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct" 
+ "-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N" 
+ "ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");


/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/

s.dc = "112";
s.visitorNamespace = "nike";
//s.trackingServer="modus.nike.com";//only use in a First Party Cookie implementation
//s.trackingServerSecure="smodus.nike.com";//only use in a First Party Cookie implementation
s.visitorMigrationKey = "4DCC71DA"


/************* CORE JAVASCRIPT FILE                    **************/
/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code = '', s_objectID;
function s_gi(un, pg, ss) {
    var c = "s._c='s_c';s.wd=window;if(!s.wd.s_c_in){s.wd.s_c_il=new Array;s.wd.s_c_in=0;}s._il=s.wd.s_c_il;s._in=s.wd.s_c_in;s._il[s._in]=s;s.wd.s_c_in++;s" 
    + ".an=s_an;s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=func" 
    + "tion(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexO" 
    + "f(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3)" 
    + "return encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%" 
    + "16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}return y}else{x=s.rep(escape(''+x),'+','%2B');if(c&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if" 
    + "(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}}return x};s.epa=function(x){var s=this;if(x){x=''+x;return s.em==3?de" 
    + "codeURIComponent(x):unescape(s.rep(x,'+',' '))}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.l" 
    + "ength;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.f" 
    + "sf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.si=function(){var s=this,i,k,v,c=" 
    + "s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)=='string')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}" 
    + "c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var" 
    + " s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('" 
    + ".',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s." 
    + "epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NON" 
    + "E'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()" 
    + "+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i]." 
    + "o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv" 
    + ">=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd," 
    + "'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s" 
    + ".t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=" 
    + "p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this," 
    + "l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,0,r.t,r.u)}};s.br=function(id,rs){var s=this;if(s.disableBufferedRequests||!s.c_w('s_br',rs))s.brl=rs};s.flushBufferedReques" 
    + "ts=function(){this.fbr(0)};s.fbr=function(id){var s=this,br=s.c_r('s_br');if(!br)br=s.brl;if(br){if(!s.disableBufferedRequests)s.c_w('s_br','');s.mr(0,0,br)}s.brl=0};s.mr=function(sess,q,rs,id,ta,u" 
    + "){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if" 
    + "(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s" 
    + ".ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/H.22.1/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047);if(id){s.br(id,rs);return}}if(s.d.images&&s.apv>=3" 
    + "&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+']." 
    + "mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e'," 
    + "'this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if((!ta||ta=='_self'||ta=" 
    + "='_top'||(s.wd.name&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0" 
    + " alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=" 
    + "function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,l,a,b='',c='',t;if(x){y=''+x;i=y.indexOf('?');if(i>0){a=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase()" 
    + ";i=0;if(h.substring(0,7)=='http://')i+=7;else if(h.substring(0,8)=='https://')i+=8;h=h.substring(i);i=h.indexOf(\"/\");if(i>0){h=h.substring(0,i);if(h.indexOf('google')>=0){a=s.sp(a,'&');if(a.lengt" 
    + "h>1){l=',q,ie,start,search_key,word,kw,cd,';for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c){y+='?'+b+'&'" 
    + "+c;if(''+x!=y)x=y}}}}}}return x};s.hav=function(){var s=this,qs='',fv=s.linkTrackVars,fe=s.linkTrackEvents,mn,i;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].tr" 
    + "ackVars;fe=s[mn].trackEvents}}fv=fv?fv+','+s.vl_l+','+s.vl_l2:'';for(i=0;i<s.va_t.length;i++){var k=s.va_t[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(v&&k!='linkName'&&k!='l" 
    + "inkType'){if(s.pe||s.lnk||s.eo){if(fv&&(','+fv+',').indexOf(','+k+',')<0)v='';if(k=='events'&&fe)v=s.fs(v,fe)}if(v){if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pa" 
    + "geURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigra" 
    + "tionServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em=" 
    + "=2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode" 
    + "')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j" 
    + "';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp'" 
    + ";else if(k=='plugins')q='p';else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+q+'='+(k.substring(0,3)" 
    + "!='pev'?s.ape(v):v)}}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t" 
    + ")return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExt" 
    + "ernalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)" 
    + "!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t" 
    + "();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['+s._in+'],f,tcf;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Functi" 
    + "on(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t()}catch(e){}\");tcf(s);s.eo=0');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.inde" 
    + "xOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'" 
    + "')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE'" 
    + ")t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p" 
    + "=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' '" 
    + ",'');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100" 
    + ");o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&" 
    + "s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,'" 
    + ",','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[u" 
    + "n]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Ob" 
    + "ject.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq" 
    + "[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o" 
    + ".onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie|" 
    + "|!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=func" 
    + "tion(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e)" 
    + ")return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.subst" 
    + "ring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowe" 
    + "rCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};" 
    + "s.sa=function(un){var s=this;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_" 
    + "l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Ar" 
    + "ray('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.le" 
    + "ngth;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0" 
    + ";if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(" 
    + "\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl." 
    + "length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexO" 
    + "f('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadMo" 
    + "dule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else " 
    + "g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+']," 
    + "o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!" 
    + "o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javas" 
    + "cript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1," 
    + "f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.vo1=function(t,a){if(a[t]" 
    + "||a['!'+t])this[t]=a[t]};s.vo2=function(t,a){if(!a[t]){a[t]=this[t];if(!a[t])a['!'+t]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.d" 
    + "ll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.d" 
    + "l=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.pt(s.vl_g,',','vo2',vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.t=fun" 
    + "ction(vo,id){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate(" 
    + ")+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Objec" 
    + "t;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1'" 
    + ";if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try" 
    + "{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=" 
    + "screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWid" 
    + "th;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=" 
    + "tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.f" 
    + "l(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=c" 
    + "t;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.pt(s.vl_g,',','vo2',vb);s.pt(s.vl_g,',','vo1',vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer" 
    + ";if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk;if(!o)return '';var p=s.pageName,w=1,t=s.ot(o)" 
    + ",n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';t=s.ot(o);n=s.oid(o);x=o.s_oidt}oc=o.onclick?''+o.onclick:''" 
    + ";if((oc.indexOf(\"s_gs(\")>=0&&oc.indexOf(\".s_oc(\")<0)||oc.indexOf(\".tl(\")>=0)return ''}if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName" 
    + ";t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l))q+='&pe=lnk_'+(t=='d'||t=='e'?s.ape(t):'o')+(h?'&pev1='+s.ape(h):'')+(l?'&pev2='+s.ape(l):'');else trk=0;if(s.trackInlineStats){if(!p){p=" 
    + "s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot=" 
    + "'+s.ape(t)+(i?'&oi='+i:'')}}if(!trk&&!qs)return '';s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,id,ta);qs='';s.m_m('t');if(s.p_r)s.p_r(" 
    + ");s.referrer=''}s.sq(qs);}else{s.dl(vo);}if(vo)s.pt(s.vl_g,',','vo1',vb);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_link" 
    + "Name=s.wd.s_linkType='';if(!id&&!s.tc){s.tc=1;s.flushBufferedRequests()}return code};s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};if(pg){s.wd.s_co=function(o)" 
    + "{var s=s_gi(\"_\",1,1);return s.co(o)};s.wd.s_gs=function(un){var s=s_gi(un,1,1);return s.t()};s.wd.s_dc=function(un){var s=s_gi(un,1);return s.t()}}s.ssl=(s.wd.location.protocol.toLowerCase().inde" 
    + "xOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var ap" 
    + "n=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isope" 
    + "ra=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=" 
    + "parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i==" 
    + "'%U0100'?1:0))}s.sa(un);s.vl_l='dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLi" 
    + "fetime,pageName,pageURL,referrer,currencyCode';s.va_l=s.sp(s.vl_l,',');s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,products,linkName," 
    + "linkType';for(var n=1;n<76;n++)s.vl_t+=',prop'+n+',eVar'+n+',hier'+n+',list'+n;s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browse" 
    + "rHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests" 
    + ",mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadF" 
    + "ileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,_1_referrer';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);if(!ss)s.wds()", 
    w = window, l = w.s_c_il, n = navigator, u = n.userAgent, v = n.appVersion, e = v.indexOf('MSIE '), m = u.indexOf('Netscape6/'), a, i, s;
    if (un) {
        un = un.toLowerCase();
        if (l)
            for (i = 0; i < l.length; i++) {
                s = l[i];
                if (!s._c || s._c == 's_c') {
                    if (s.oun == un)
                        return s;
                    else if (s.fs && s.sa && s.fs(s.oun, un)) {
                        s.sa(un);
                        return s
                    }
                }
            }
    }
    w.s_an = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    w.s_sp = new Function("x", "d", "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst" 
    + "ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
    w.s_jn = new Function("a", "d", "var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
    w.s_rep = new Function("x", "o", "n", "return s_jn(s_sp(x,o),n)");
    w.s_d = new Function("x", "var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d" 
    + "=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(" 
    + "x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
    w.s_fe = new Function("c", "return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
    w.s_fa = new Function("f", "var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':" 
    + "a");
    w.s_ft = new Function("c", "c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i" 
    + "f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")" 
    + "'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
    c = s_d(c);
    if (e > 0) {
        a = parseInt(i = v.substring(e + 5));
        if (a > 3)
            a = parseFloat(i)
    } else if (m > 0)
        a = parseFloat(u.substring(m + 10));
    else
        a = parseFloat(v);
    if (a >= 5 && v.indexOf('Opera') < 0 && u.indexOf('Opera') < 0) {
        w.s_c = new Function("un", "pg", "ss", "var s=this;" + c);
        return new s_c(un, pg, ss)
    } else
        s = new Function("un", "pg", "ss", "var s=new Object;" + s_ft(c) + ";return s");
    return s(un, pg, ss)
}


var BASE64 = {enKey: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",deKey: new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1),encode: function(e) {
        var d = new Array();
        var c, b, a;
        var f = 0;
        while (f + 3 <= e.length) {
            c = e.charCodeAt(f++);
            b = e.charCodeAt(f++);
            a = e.charCodeAt(f++);
            d.push(this.enKey.charAt(c >> 2), this.enKey.charAt(((c << 4) + (b >> 4)) & 63));
            d.push(this.enKey.charAt(((b << 2) + (a >> 6)) & 63), this.enKey.charAt(a & 63))
        }
        if (f < e.length) {
            c = e.charCodeAt(f++);
            d.push(this.enKey.charAt(c >> 2));
            if (f < e.length) {
                b = e.charCodeAt(f);
                d.push(this.enKey.charAt(((c << 4) + (b >> 4)) & 63));
                d.push(this.enKey.charAt(b << 2 & 63), "=")
            } else {
                d.push(this.enKey.charAt(c << 4 & 63), "==")
            }
        }
        return d.join("")
    },decode: function(f) {
        var e = new Array();
        var d, c, b, a;
        var g = 0;
        f = f.replace(/[^A-Za-z0-9\+\/]/g, "");
        while (g + 4 <= f.length) {
            d = this.deKey[f.charCodeAt(g++)];
            c = this.deKey[f.charCodeAt(g++)];
            b = this.deKey[f.charCodeAt(g++)];
            a = this.deKey[f.charCodeAt(g++)];
            e.push(String.fromCharCode((d << 2 & 255) + (c >> 4), (c << 4 & 255) + (b >> 2), (b << 6 & 255) + a))
        }
        if (g + 1 < f.length) {
            d = this.deKey[f.charCodeAt(g++)];
            c = this.deKey[f.charCodeAt(g++)];
            if (g < f.length) {
                b = this.deKey[f.charCodeAt(g)];
                e.push(String.fromCharCode((d << 2 & 255) + (c >> 4), (c << 4 & 255) + (b >> 2)))
            } else {
                e.push(String.fromCharCode((d << 2 & 255) + (c >> 4)))
            }
        }
        return e.join("")
    }};
(function(a) {
    a.fn.mobileBackfillCountry = function(c) {
        var d = {HK: "+852",TW: "+886",CN: "+86"};
        var c = a.extend(d, c);
        var b = a(this);
        a(b).bind("blur", function() {
            var i = b.val();
            var h = $j.trim(b.attr("ori_value"));
            if (i != h) {
                if (i != "" && i.length > 0) {
                    var f = /^[5689]{1}\d{7}$/;
                    var g = /^[0]{1}[9]{1}\d{8}$/;
                    var e = /^1[3458]{1}\d{9}$/;
                    if (f.test(i)) {
                        b.val(c.HK + " " + i);
                        setValid(b, true, "")
                    } else {
                        if (g.test(i)) {
                            b.val(c.TW + " " + i);
                            setValid(b, true, "")
                        } else {
                            if (e.test(i)) {
                                b.val(c.CN + " " + i);
                                setValid(b, true, "")
                            } else {
                                setValid(b, false, loxia.getLocaleMsg("mynike.profile.MobilePattern"))
                            }
                        }
                    }
                }
            }
        });
        a(b).bind("keydown", function(l) {
            var k = b.val();
            var j = $j.trim(b.attr("ori_value"));
            var i = l || window.event;
            if (i.keyCode == 9) {
                if (k != j) {
                    if (k != "" && k.length > 0) {
                        var g = /^[5689]{1}\d{7}$/;
                        var h = /^[0]{1}[9]{1}\d{8}$/;
                        var f = /^1[3458]{1}\d{9}$/;
                        if (g.test(k)) {
                            b.val(c.HK + " " + k);
                            setValid(b, true, "")
                        } else {
                            if (h.test(k)) {
                                b.val(c.TW + " " + k);
                                setValid(b, true, "")
                            } else {
                                if (f.test(k)) {
                                    b.val(c.CN + " " + k);
                                    setValid(b, true, "")
                                } else {
                                    setValid(b, false, loxia.getLocaleMsg("mynike.profile.MobilePattern"))
                                }
                            }
                        }
                    }
                }
            } else {
                $j(".error_div", b.parents(".olc_line")).hide()
            }
        })
    }
})(jQuery);
$j(function() {
    $j(".close,.closeImg").live("click", function() {
        try {
            if (s.oldPageName) {
                s.pageName = s.oldPageName
            }
            if (oldP3) {
                p3 = oldP3
            }
            if (oldP17) {
                p17 = oldP17
            }
        } catch (a) {
        }
    })
});
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        if (typeof exports === "object") {
            module.exports = a(require("jquery"))
        } else {
            a(jQuery)
        }
    }
}(function(f) {
    var a = /\+/g;
    function d(i) {
        return b.raw ? i : encodeURIComponent(i)
    }
    function g(i) {
        return b.raw ? i : decodeURIComponent(i)
    }
    function h(i) {
        return d(b.json ? JSON.stringify(i) : String(i))
    }
    function c(i) {
        if (i.indexOf('"') === 0) {
            i = i.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
        }
        try {
            i = decodeURIComponent(i.replace(a, " "));
            return b.json ? JSON.parse(i) : i
        } catch (j) {
        }
    }
    function e(j, i) {
        var k = b.raw ? j : c(j);
        return f.isFunction(i) ? i(k) : k
    }
    var b = f.cookie = function(q, p, v) {
        if (arguments.length > 1 && !f.isFunction(p)) {
            v = f.extend({}, b.defaults, v);
            if (typeof v.expires === "number") {
                var r = v.expires, u = v.expires = new Date();
                u.setMilliseconds(u.getMilliseconds() + r * 86400000)
            }
            return (document.cookie = [d(q), "=", h(p), v.expires ? "; expires=" + v.expires.toUTCString() : "", v.path ? "; path=" + v.path : "", v.domain ? "; domain=" + v.domain : "", v.secure ? "; secure" : ""].join(""))
        }
        var w = q ? undefined : {}, s = document.cookie ? document.cookie.split("; ") : [], o = 0, m = s.length;
        for (; o < m; o++) {
            var n = s[o].split("="), j = g(n.shift()), k = n.join("=");
            if (q === j) {
                w = e(k, p);
                break
            }
            if (!q && (k = e(k)) !== undefined) {
                w[j] = k
            }
        }
        return w
    };
    b.defaults = {};
    f.removeCookie = function(j, i) {
        f.cookie(j, "", f.extend({}, i, {expires: -1}));
        return !f.cookie(j)
    }
}));
