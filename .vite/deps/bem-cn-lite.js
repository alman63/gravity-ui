import {__commonJS} from './chunk-LQ2VYIYD.js';

// node_modules/bem-cn/lib/index.js
var require_lib = __commonJS({
    'node_modules/bem-cn/lib/index.js'(exports, module) {
        !(function (n, t) {
            'object' == typeof exports && 'object' == typeof module
                ? (module.exports = t())
                : 'function' == typeof define && define.amd
                  ? define([], t)
                  : 'object' == typeof exports
                    ? (exports.block = t())
                    : (n.block = t());
        })(exports, function () {
            return (function (n) {
                var t = {};
                function e(r) {
                    if (t[r]) return t[r].exports;
                    var o = (t[r] = {i: r, l: false, exports: {}});
                    return n[r].call(o.exports, o, o.exports, e), (o.l = true), o.exports;
                }
                return (
                    (e.m = n),
                    (e.c = t),
                    (e.d = function (n2, t2, r) {
                        e.o(n2, t2) || Object.defineProperty(n2, t2, {enumerable: true, get: r});
                    }),
                    (e.r = function (n2) {
                        'undefined' != typeof Symbol &&
                            Symbol.toStringTag &&
                            Object.defineProperty(n2, Symbol.toStringTag, {value: 'Module'}),
                            Object.defineProperty(n2, '__esModule', {value: true});
                    }),
                    (e.t = function (n2, t2) {
                        if ((1 & t2 && (n2 = e(n2)), 8 & t2)) return n2;
                        if (4 & t2 && 'object' == typeof n2 && n2 && n2.__esModule) return n2;
                        var r = /* @__PURE__ */ Object.create(null);
                        if (
                            (e.r(r),
                            Object.defineProperty(r, 'default', {enumerable: true, value: n2}),
                            2 & t2 && 'string' != typeof n2)
                        )
                            for (var o in n2)
                                e.d(
                                    r,
                                    o,
                                    function (t3) {
                                        return n2[t3];
                                    }.bind(null, o),
                                );
                        return r;
                    }),
                    (e.n = function (n2) {
                        var t2 =
                            n2 && n2.__esModule
                                ? function () {
                                      return n2.default;
                                  }
                                : function () {
                                      return n2;
                                  };
                        return e.d(t2, 'a', t2), t2;
                    }),
                    (e.o = function (n2, t2) {
                        return Object.prototype.hasOwnProperty.call(n2, t2);
                    }),
                    (e.p = ''),
                    e((e.s = 0))
                );
            })([
                function (n, t, e) {
                    'use strict';
                    Object.defineProperty(t, '__esModule', {value: true});
                    var r = e(1);
                    (t.ERROR_BLOCK_NAME_TYPE = 'Block name should be a string'),
                        (t.ERROR_BLOCK_NAME_EMPTY = 'Block name should be non-empty');
                    var o = {ns: '', el: '__', mod: '_', modValue: '_'},
                        i = function (n2) {
                            return 'string' == typeof n2;
                        },
                        u = function (n2) {
                            return 'string' != typeof n2;
                        },
                        s = function (n2, t2) {
                            for (var e2 = [], o2 = 2; o2 < arguments.length; o2++)
                                e2[o2 - 2] = arguments[o2];
                            var i2 = r.assign({}, t2);
                            return (i2.mixes = i2.mixes.concat(e2)), c(i2, n2);
                        },
                        a = function (n2, t2, e2) {
                            for (var o2 = [], i2 = 3; i2 < arguments.length; i2++)
                                o2[i2 - 3] = arguments[i2];
                            var u2 = r.assign({}, t2),
                                s2 = r.assign({}, u2.states || {});
                            return (
                                (s2[e2] = r.assign.apply(void 0, [{}, s2[e2] || {}].concat(o2))),
                                (u2.states = s2),
                                c(u2, n2)
                            );
                        },
                        l = function (n2, t2, e2, r2) {
                            return String.prototype.split.call(f(n2, t2), e2, r2);
                        },
                        f = function (n2, t2) {
                            var e2 = t2.name,
                                r2 = t2.mods,
                                o2 = t2.mixes,
                                i2 = t2.states,
                                u2 = [e2];
                            if (
                                (r2 &&
                                    (u2 = u2.concat(
                                        Object.keys(r2)
                                            .filter(function (n3) {
                                                return r2[n3];
                                            })
                                            .map(function (t3) {
                                                var o3 = r2[t3];
                                                return true === o3
                                                    ? e2 + n2.mod + t3
                                                    : e2 + n2.mod + t3 + n2.modValue + o3;
                                            }),
                                    )),
                                i2 &&
                                    Object.keys(i2).forEach(function (n3) {
                                        var t3 = i2[n3];
                                        u2 = u2.concat(
                                            Object.keys(t3)
                                                .filter(function (n4) {
                                                    return t3[n4];
                                                })
                                                .map(function (t4) {
                                                    return n3 + t4;
                                                }),
                                        );
                                    }),
                                n2.ns &&
                                    (u2 = u2.map(function (t3) {
                                        return n2.ns + t3;
                                    })),
                                o2 &&
                                    (u2 = u2.concat(
                                        (function (n3) {
                                            return (
                                                void 0 === n3 && (n3 = []),
                                                n3
                                                    .map(function (n4) {
                                                        return Array.isArray(n4)
                                                            ? n4.join(' ')
                                                            : 'object' == typeof n4 && null !== n4
                                                              ? n4.toString()
                                                              : 'function' == typeof n4
                                                                ? n4.toString()
                                                                : 'string' == typeof n4
                                                                  ? n4
                                                                  : '';
                                                    })
                                                    .filter(function (n4) {
                                                        return !!n4;
                                                    })
                                            );
                                        })(o2),
                                    )),
                                n2.classMap)
                            ) {
                                var s2 = n2.classMap;
                                u2 = u2.map(function (n3) {
                                    return s2[n3] || n3;
                                });
                            }
                            return u2.join(' ');
                        },
                        c = function (n2, t2) {
                            return {
                                mix: s.bind(null, t2, n2),
                                split: l.bind(null, t2, n2),
                                is: a.bind(null, t2, n2, 'is-'),
                                has: a.bind(null, t2, n2, 'has-'),
                                state: a.bind(null, t2, n2, 'is-'),
                                toString: f.bind(null, t2, n2),
                            };
                        },
                        d = function (n2, t2) {
                            var e2 = {
                                    name: n2,
                                    mods: {},
                                    mixes: [],
                                    states: {'is-': {}, 'has-': {}},
                                },
                                o2 = function (n3, t3) {
                                    for (var e3 = [], o3 = 2; o3 < arguments.length; o3++)
                                        e3[o3 - 2] = arguments[o3];
                                    if (!e3.length) return f(n3, t3);
                                    var s2 = r.assign({}, t3),
                                        a2 = e3.filter(i).reduce(function (t4, e4) {
                                            return t4 + n3.el + e4;
                                        }, '');
                                    a2 && (s2.name = s2.name + a2);
                                    var l2 = e3.filter(u).reduce(function (n4, t4) {
                                        return r.assign(n4, t4);
                                    }, {});
                                    return (s2.mods = r.assign({}, s2.mods, l2)), c(s2, n3);
                                }.bind(null, t2, e2);
                            return (
                                (o2.mix = s.bind(null, t2, e2)),
                                (o2.split = l.bind(null, t2, e2)),
                                (o2.is = a.bind(null, t2, e2, 'is-')),
                                (o2.has = a.bind(null, t2, e2, 'has-')),
                                (o2.state = a.bind(null, t2, e2, 'is-')),
                                (o2.toString = f.bind(null, t2, e2)),
                                o2
                            );
                        };
                    (t.setup = function (n2) {
                        return (
                            void 0 === n2 && (n2 = {}),
                            function (e2) {
                                if ('string' != typeof e2) throw new Error(t.ERROR_BLOCK_NAME_TYPE);
                                var i2 = e2.trim();
                                if (!i2) throw new Error(t.ERROR_BLOCK_NAME_EMPTY);
                                return d(i2, r.assign({}, o, n2));
                            }
                        );
                    }),
                        (t.block = t.setup()),
                        (t.default = t.block);
                },
                function (n, t, e) {
                    'use strict';
                    Object.defineProperty(t, '__esModule', {value: true}),
                        (t.assign = function (n2) {
                            for (var t2 = [], e2 = 1; e2 < arguments.length; e2++)
                                t2[e2 - 1] = arguments[e2];
                            for (var r = 0; r < t2.length; r++) {
                                var o = t2[r];
                                for (var i in o) o.hasOwnProperty(i) && (n2[i] = o[i]);
                            }
                            return n2;
                        });
                },
            ]);
        });
    },
});

// node_modules/bem-cn-lite/lib/index.js
var require_lib2 = __commonJS({
    'node_modules/bem-cn-lite/lib/index.js'(exports) {
        Object.defineProperty(exports, '__esModule', {value: true});
        var bem_cn_1 = require_lib();
        var block = (0, bem_cn_1.setup)();
        function isString(data) {
            return typeof data === 'string';
        }
        function hasMixinShape(data) {
            return isString(data) || (Array.isArray(data) && data.every(isString));
        }
        function bemClassNameLite(blockName) {
            var b = block(blockName);
            function element() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var elementName = args.shift();
                var modifiers = args[0],
                    mixin = args[1];
                var result;
                if (typeof elementName !== 'string' || hasMixinShape(modifiers)) {
                    mixin = modifiers;
                    modifiers = null;
                }
                result = b(elementName, modifiers);
                if (mixin) {
                    result = result.mix(mixin);
                }
                return result.toString();
            }
            element.builder = function () {
                return b;
            };
            return element;
        }
        bemClassNameLite.setup = function (config) {
            block = (0, bem_cn_1.setup)(config);
        };
        bemClassNameLite.reset = function () {
            block = (0, bem_cn_1.setup)();
        };
        exports.default = bemClassNameLite;
    },
});
export default require_lib2();
/*! Bundled license information:

bem-cn/lib/index.js:
  (*!
   * bem-cn v3.0.1
   * Friendly BEM class names generator, greate for React
   * @author Alexander Burtsev, https://github.com/albburtsev
   *)
*/
//# sourceMappingURL=bem-cn-lite.js.map
