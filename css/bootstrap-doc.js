! function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : (t.AnchorJS = e(), t.anchors = new t.AnchorJS)
}(this, function () {
    "use strict";
    return function (t) {
        function d(t) {
            t.icon = t.hasOwnProperty("icon") ? t.icon : "РѕВ§вЂ№", t.visible = t.hasOwnProperty("visible") ? t.visible : "hover", t.placement = t.hasOwnProperty("placement") ? t.placement : "right", t.ariaLabel = t.hasOwnProperty("ariaLabel") ? t.ariaLabel : "Anchor", t.class = t.hasOwnProperty("class") ? t.class : "", t.base = t.hasOwnProperty("base") ? t.base : "", t.truncate = t.hasOwnProperty("truncate") ? Math.floor(t.truncate) : 64, t.titleText = t.hasOwnProperty("titleText") ? t.titleText : ""
        }

        function p(t) {
            var e;
            if ("string" == typeof t || t instanceof String) e = [].slice.call(document.querySelectorAll(t));
            else {
                if (!(Array.isArray(t) || t instanceof NodeList)) throw new Error("The selector provided to AnchorJS was invalid.");
                e = [].slice.call(t)
            }
            return e
        }
        this.options = t || {}, this.elements = [], d(this.options), this.isTouchDevice = function () {
            return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
        }, this.add = function (t) {
            var e, n, o, i, r, A, a, l, s, c, u, f, h = [];
            if (d(this.options), "touch" === (u = this.options.visible) && (u = this.isTouchDevice() ? "always" : "hover"), 0 === (e = p(t = t || "h2, h3, h4, h5, h6")).length) return this;
            for (! function () {
                    if (null !== document.head.querySelector("style.anchorjs")) return;
                    var t, e = document.createElement("style");
                    e.className = "anchorjs", e.appendChild(document.createTextNode("")), void 0 === (t = document.head.querySelector('[rel="stylesheet"], style')) ? document.head.appendChild(e) : document.head.insertBefore(e, t);
                    e.sheet.insertRule(" .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }", e.sheet.cssRules.length), e.sheet.insertRule(" *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }", e.sheet.cssRules.length), e.sheet.insertRule(" [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }", e.sheet.cssRules.length), e.sheet.insertRule(' @font-face {   font-family: "anchorjs-icons";   src: url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype"); }', e.sheet.cssRules.length)
                }(), n = document.querySelectorAll("[id]"), o = [].map.call(n, function (t) {
                    return t.id
                }), r = 0; r < e.length; r++)
                if (this.hasAnchorJSLink(e[r])) h.push(r);
                else {
                    if (e[r].hasAttribute("id")) i = e[r].getAttribute("id");
                    else if (e[r].hasAttribute("data-anchor-id")) i = e[r].getAttribute("data-anchor-id");
                    else {
                        for (s = l = this.urlify(e[r].textContent), a = 0; void 0 !== A && (s = l + "-" + a), a += 1, -1 !== (A = o.indexOf(s)););
                        A = void 0, o.push(s), e[r].setAttribute("id", s), i = s
                    }(c = document.createElement("a")).className = "anchorjs-link " + this.options.class, c.setAttribute("aria-label", this.options.ariaLabel), c.setAttribute("data-anchorjs-icon", this.options.icon), this.options.titleText && (c.title = this.options.titleText), f = document.querySelector("base") ? window.location.pathname + window.location.search : "", f = this.options.base || f, c.href = f + "#" + i, "always" === u && (c.style.opacity = "1"), "РѕВ§вЂ№" === this.options.icon && (c.style.font = "1em/1 anchorjs-icons", "left" === this.options.placement && (c.style.lineHeight = "inherit")), "left" === this.options.placement ? (c.style.position = "absolute", c.style.marginLeft = "-1em", c.style.paddingRight = "0.5em", e[r].insertBefore(c, e[r].firstChild)) : (c.style.paddingLeft = "0.375em", e[r].appendChild(c))
                } for (r = 0; r < h.length; r++) e.splice(h[r] - r, 1);
            return this.elements = this.elements.concat(e), this
        }, this.remove = function (t) {
            for (var e, n, o = p(t), i = 0; i < o.length; i++)(n = o[i].querySelector(".anchorjs-link")) && (-1 !== (e = this.elements.indexOf(o[i])) && this.elements.splice(e, 1), o[i].removeChild(n));
            return this
        }, this.removeAll = function () {
            this.remove(this.elements)
        }, this.urlify = function (t) {
            return this.options.truncate || d(this.options), t.trim().replace(/\'/gi, "").replace(/[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\\n\t\b\v]/g, "-").replace(/-{2,}/g, "-").substring(0, this.options.truncate).replace(/^-+|-+$/gm, "").toLowerCase()
        }, this.hasAnchorJSLink = function (t) {
            var e = t.firstChild && -1 < (" " + t.firstChild.className + " ").indexOf(" anchorjs-link "),
                n = t.lastChild && -1 < (" " + t.lastChild.className + " ").indexOf(" anchorjs-link ");
            return e || n || !1
        }
    }
});
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT Р’В© Zeno Rocha
 */
! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, function () {
    return function (n) {
        var o = {};

        function i(t) {
            if (o[t]) return o[t].exports;
            var e = o[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return n[t].call(e.exports, e, e.exports, i), e.l = !0, e.exports
        }
        return i.m = n, i.c = o, i.d = function (t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }, i.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, i.t = function (e, t) {
            if (1 & t && (e = i(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) i.d(n, o, function (t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, i.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return i.d(e, "a", e), e
        }, i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.p = "", i(i.s = 0)
    }([function (t, e, n) {
        "use strict";
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            r = function () {
                function o(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var o = e[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                    }
                }
                return function (t, e, n) {
                    return e && o(t.prototype, e), n && o(t, n), t
                }
            }(),
            A = o(n(1)),
            a = o(n(3)),
            l = o(n(4));

        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var s = function (t) {
            function o(t, e) {
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, o);
                var n = function (t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));
                return n.resolveOptions(e), n.listenClick(t), n
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(o, a.default), r(o, [{
                key: "resolveOptions",
                value: function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === i(t.container) ? t.container : document.body
                }
            }, {
                key: "listenClick",
                value: function (t) {
                    var e = this;
                    this.listener = (0, l.default)(t, "click", function (t) {
                        return e.onClick(t)
                    })
                }
            }, {
                key: "onClick",
                value: function (t) {
                    var e = t.delegateTarget || t.currentTarget;
                    this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new A.default({
                        action: this.action(e),
                        target: this.target(e),
                        text: this.text(e),
                        container: this.container,
                        trigger: e,
                        emitter: this
                    })
                }
            }, {
                key: "defaultAction",
                value: function (t) {
                    return c("action", t)
                }
            }, {
                key: "defaultTarget",
                value: function (t) {
                    var e = c("target", t);
                    if (e) return document.querySelector(e)
                }
            }, {
                key: "defaultText",
                value: function (t) {
                    return c("text", t)
                }
            }, {
                key: "destroy",
                value: function () {
                    this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                }
            }], [{
                key: "isSupported",
                value: function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                        e = "string" == typeof t ? [t] : t,
                        n = !!document.queryCommandSupported;
                    return e.forEach(function (t) {
                        n = n && !!document.queryCommandSupported(t)
                    }), n
                }
            }]), o
        }();

        function c(t, e) {
            var n = "data-clipboard-" + t;
            if (e.hasAttribute(n)) return e.getAttribute(n)
        }
        t.exports = s
    }, function (t, e, n) {
        "use strict";
        var o, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            r = function () {
                function o(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var o = e[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                    }
                }
                return function (t, e, n) {
                    return e && o(t.prototype, e), n && o(t, n), t
                }
            }(),
            A = n(2),
            a = (o = A) && o.__esModule ? o : {
                default: o
            };
        var l = function () {
            function e(t) {
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.resolveOptions(t), this.initSelection()
            }
            return r(e, [{
                key: "resolveOptions",
                value: function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                }
            }, {
                key: "initSelection",
                value: function () {
                    this.text ? this.selectFake() : this.target && this.selectTarget()
                }
            }, {
                key: "selectFake",
                value: function () {
                    var t = this,
                        e = "rtl" == document.documentElement.getAttribute("dir");
                    this.removeFake(), this.fakeHandlerCallback = function () {
                        return t.removeFake()
                    }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                    var n = window.pageYOffset || document.documentElement.scrollTop;
                    this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, a.default)(this.fakeElem), this.copyText()
                }
            }, {
                key: "removeFake",
                value: function () {
                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                }
            }, {
                key: "selectTarget",
                value: function () {
                    this.selectedText = (0, a.default)(this.target), this.copyText()
                }
            }, {
                key: "copyText",
                value: function () {
                    var e = void 0;
                    try {
                        e = document.execCommand(this.action)
                    } catch (t) {
                        e = !1
                    }
                    this.handleResult(e)
                }
            }, {
                key: "handleResult",
                value: function (t) {
                    this.emitter.emit(t ? "success" : "error", {
                        action: this.action,
                        text: this.selectedText,
                        trigger: this.trigger,
                        clearSelection: this.clearSelection.bind(this)
                    })
                }
            }, {
                key: "clearSelection",
                value: function () {
                    this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                }
            }, {
                key: "destroy",
                value: function () {
                    this.removeFake()
                }
            }, {
                key: "action",
                set: function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";
                    if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                },
                get: function () {
                    return this._action
                }
            }, {
                key: "target",
                set: function (t) {
                    if (void 0 !== t) {
                        if (!t || "object" !== (void 0 === t ? "undefined" : i(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                        if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        this._target = t
                    }
                },
                get: function () {
                    return this._target
                }
            }]), e
        }();
        t.exports = l
    }, function (t, e) {
        t.exports = function (t) {
            var e;
            if ("SELECT" === t.nodeName) t.focus(), e = t.value;
            else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                var n = t.hasAttribute("readonly");
                n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
            } else {
                t.hasAttribute("contenteditable") && t.focus();
                var o = window.getSelection(),
                    i = document.createRange();
                i.selectNodeContents(t), o.removeAllRanges(), o.addRange(i), e = o.toString()
            }
            return e
        }
    }, function (t, e) {
        function n() {}
        n.prototype = {
            on: function (t, e, n) {
                var o = this.e || (this.e = {});
                return (o[t] || (o[t] = [])).push({
                    fn: e,
                    ctx: n
                }), this
            },
            once: function (t, e, n) {
                var o = this;

                function i() {
                    o.off(t, i), e.apply(n, arguments)
                }
                return i._ = e, this.on(t, i, n)
            },
            emit: function (t) {
                for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, i = n.length; o < i; o++) n[o].fn.apply(n[o].ctx, e);
                return this
            },
            off: function (t, e) {
                var n = this.e || (this.e = {}),
                    o = n[t],
                    i = [];
                if (o && e)
                    for (var r = 0, A = o.length; r < A; r++) o[r].fn !== e && o[r].fn._ !== e && i.push(o[r]);
                return i.length ? n[t] = i : delete n[t], this
            }
        }, t.exports = n
    }, function (t, e, n) {
        var f = n(5),
            h = n(6);
        t.exports = function (t, e, n) {
            if (!t && !e && !n) throw new Error("Missing required arguments");
            if (!f.string(e)) throw new TypeError("Second argument must be a String");
            if (!f.fn(n)) throw new TypeError("Third argument must be a Function");
            if (f.node(t)) return c = e, u = n, (s = t).addEventListener(c, u), {
                destroy: function () {
                    s.removeEventListener(c, u)
                }
            };
            if (f.nodeList(t)) return A = t, a = e, l = n, Array.prototype.forEach.call(A, function (t) {
                t.addEventListener(a, l)
            }), {
                destroy: function () {
                    Array.prototype.forEach.call(A, function (t) {
                        t.removeEventListener(a, l)
                    })
                }
            };
            if (f.string(t)) return o = t, i = e, r = n, h(document.body, o, i, r);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            var o, i, r, A, a, l, s, c, u
        }
    }, function (t, n) {
        n.node = function (t) {
            return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
        }, n.nodeList = function (t) {
            var e = Object.prototype.toString.call(t);
            return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]))
        }, n.string = function (t) {
            return "string" == typeof t || t instanceof String
        }, n.fn = function (t) {
            return "[object Function]" === Object.prototype.toString.call(t)
        }
    }, function (t, e, n) {
        var A = n(7);

        function r(t, e, n, o, i) {
            var r = function (e, n, t, o) {
                return function (t) {
                    t.delegateTarget = A(t.target, n), t.delegateTarget && o.call(e, t)
                }
            }.apply(this, arguments);
            return t.addEventListener(n, r, i), {
                destroy: function () {
                    t.removeEventListener(n, r, i)
                }
            }
        }
        t.exports = function (t, e, n, o, i) {
            return "function" == typeof t.addEventListener ? r.apply(null, arguments) : "function" == typeof n ? r.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) {
                return r(t, e, n, o, i)
            }))
        }
    }, function (t, e) {
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var n = Element.prototype;
            n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
        }
        t.exports = function (t, e) {
            for (; t && 9 !== t.nodeType;) {
                if ("function" == typeof t.matches && t.matches(e)) return t;
                t = t.parentNode
            }
        }
    }])
});
/*!
 * bsCustomFileInput v1.3.2 (https://github.com/Johann-S/bs-custom-file-input)
 * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>
 * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
 */
! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).bsCustomFileInput = e()
}(this, function () {
    "use strict";
    var f = {
            CUSTOMFILE: '.custom-file input[type="file"]',
            CUSTOMFILELABEL: ".custom-file-label",
            FORM: "form",
            INPUT: "input"
        },
        o = function (t) {
            if (0 < t.childNodes.length)
                for (var e = [].slice.call(t.childNodes), n = 0; n < e.length; n++) {
                    var o = e[n];
                    if (3 !== o.nodeType) return o
                }
            return t
        },
        a = function (t) {
            var e = t.bsCustomFileInput.defaultText,
                n = t.parentNode.querySelector(f.CUSTOMFILELABEL);
            n && (o(n).innerHTML = e)
        },
        n = !!window.File,
        i = function (t) {
            if (t.hasAttribute("multiple") && n) return [].slice.call(t.files).map(function (t) {
                return t.name
            }).join(", ");
            if (-1 === t.value.indexOf("fakepath")) return t.value;
            var e = t.value.split("\\");
            return e[e.length - 1]
        };

    function h() {
        var t = this.parentNode.querySelector(f.CUSTOMFILELABEL);
        if (t) {
            var e = o(t),
                n = i(this);
            n.length ? e.innerHTML = n : a(this)
        }
    }

    function d() {
        for (var t = [].slice.call(this.querySelectorAll(f.INPUT)).filter(function (t) {
                return !!t.bsCustomFileInput
            }), e = 0, n = t.length; e < n; e++) a(t[e])
    }
    var p = "bsCustomFileInput",
        y = "reset",
        m = "change";
    return {
        init: function (t, e) {
            void 0 === t && (t = f.CUSTOMFILE), void 0 === e && (e = f.FORM);
            for (var n, o, i, r = [].slice.call(document.querySelectorAll(t)), A = [].slice.call(document.querySelectorAll(e)), a = 0, l = r.length; a < l; a++) {
                var s = r[a];
                Object.defineProperty(s, p, {
                    value: {
                        defaultText: (n = s, o = void 0, void 0, o = "", i = n.parentNode.querySelector(f.CUSTOMFILELABEL), i && (o = i.innerHTML), o)
                    },
                    writable: !0
                }), h.call(s), s.addEventListener(m, h)
            }
            for (var c = 0, u = A.length; c < u; c++) A[c].addEventListener(y, d), Object.defineProperty(A[c], p, {
                value: !0,
                writable: !0
            })
        },
        destroy: function () {
            for (var t = [].slice.call(document.querySelectorAll(f.FORM)).filter(function (t) {
                    return !!t.bsCustomFileInput
                }), e = [].slice.call(document.querySelectorAll(f.INPUT)).filter(function (t) {
                    return !!t.bsCustomFileInput
                }), n = 0, o = e.length; n < o; n++) {
                var i = e[n];
                a(i), i[p] = void 0, i.removeEventListener(m, h)
            }
            for (var r = 0, A = t.length; r < A; r++) t[r].removeEventListener(y, d), t[r][p] = void 0
        }
    }
});
/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */
(function (i) {
    "use strict";
    i(function () {
        i(".tooltip-demo").tooltip({
            selector: '[data-toggle="tooltip"]',
            container: "body"
        });
        i('[data-toggle="popover"]').popover();
        i(".toast").toast({
            autohide: false
        }).toast("show");
        i(".tooltip-test").tooltip();
        i(".popover-test").popover();
        i('.bd-example-indeterminate [type="checkbox"]').prop("indeterminate", true);
        i('.bd-content [href="#"]').click(function (t) {
            t.preventDefault()
        });
        i("#exampleModal").on("show.bs.modal", function (t) {
            var e = i(t.relatedTarget);
            var n = e.data("whatever");
            var o = i(this);
            o.find(".modal-title").text("New message to " + n);
            o.find(".modal-body input").val(n)
        });
        i(".bd-toggle-animated-progress").on("click", function () {
            i(this).siblings(".progress").find(".progress-bar-striped").toggleClass("progress-bar-animated")
        });
        i("figure.highlight, div.highlight").each(function () {
            var t = '<div class="bd-clipboard"><button type="button" class="btn-clipboard" title="РЎРєРѕРїРёСЂРѕРІР°С‚СЊ РІ Р±СѓС„РµСЂ РѕР±РјРµРЅР°">РљРѕРїРёСЂРѕРІР°С‚СЊ</button></div>';
            i(this).before(t);
            i(".btn-clipboard").tooltip().on("mouseleave", function () {
                i(this).tooltip("hide")
            })
        });
        var t = new ClipboardJS(".btn-clipboard", {
            target: function (t) {
                return t.parentNode.nextElementSibling
            }
        });
        t.on("success", function (t) {
            i(t.trigger).attr("title", "РЎРєРѕРїРёСЂРѕРІР°РЅРѕ!").tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle");
            t.clearSelection()
        });
        t.on("error", function (t) {
            var e = /Mac/i.test(navigator.userAgent) ? "РІРЉВ" : "Ctrl-";
            var n = "Press " + e + "C to copy";
            i(t.trigger).attr("title", n).tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle")
        });
        anchors.options = {
            icon: "#"
        };
        anchors.add(".bd-content > h2, .bd-content > h3, .bd-content > h4, .bd-content > h5");
        i(".bd-content").children("h2, h3, h4, h5").wrapInner('<span class="bd-content-title"></span>');
        bsCustomFileInput.init()
    })
})(jQuery);
(function () {
    "use strict";

    function t() {
        var t = /MSIE ([0-9.]+)/.exec(window.navigator.userAgent);
        if (t === null) {
            return null
        }
        var e = parseInt(t[1], 10);
        var n = Math.floor(e);
        return n
    }

    function e() {
        var t = new Function("/*@cc_on return @_jscript_version; @*/")();
        if (typeof t === "undefined") {
            return 11
        }
        if (t < 9) {
            return 8
        }
        return t
    }
    var n = window.navigator.userAgent;
    if (n.indexOf("Opera") > -1 || n.indexOf("Presto") > -1) {
        return
    }
    var o = t();
    if (o === null) {
        return
    }
    var i = e();
    if (o !== i) {
        window.alert("WARNING: You appear to be using IE" + i + " in IE" + o + " emulation mode.\nIE emulation modes can behave significantly differently from ACTUAL older versions of IE.\nPLEASE DON'T FILE BOOTSTRAP BUGS based on testing in IE emulation modes!")
    }
})();
(function () {
    "use strict";
    if (!window.docsearch) {
        return
    }
    var t = document.getElementById("search-input");
    var e = t.getAttribute("data-docs-version");

    function o() {
        var t = window.location;
        var e = t.origin;
        if (!e) {
            var n = t.port ? ":" + t.port : "";
            e = t.protocol + "//" + t.hostname + n
        }
        return e
    }
    window.docsearch({
        apiKey: "5dd1d832bae5df82312f5ec94348d0f9",
        indexName: "bootstrap-v4-ru",
        inputSelector: "#search-input",
        algoliaOptions: {
            facetFilters: ["version:" + e]
        },
        transformData: function (t) {
            return t.map(function (t) {
                var e = o();
                var n = "https://bootstrap-4.ru";
                t.url = e.indexOf(n) !== -1 ? t.url : t.url.replace(n, "");
                if (t.anchor === "content") {
                    t.url = t.url.replace(/#content$/, "");
                    t.anchor = null
                }
                return t
            })
        },
        debug: false
    })
})();