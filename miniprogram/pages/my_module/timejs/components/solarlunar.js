var b, f = require("../../../../@babel/runtime/helpers/typeof"), e = "function" == typeof Symbol && "symbol" == f(Symbol.iterator) ? function(b) {
    return f(b);
} : function(b) {
    return b && "function" == typeof Symbol && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : f(b);
};

b = function() {
    return function(b) {
        function f(c) {
            if (e[c]) return e[c].exports;
            var t = e[c] = {
                i: c,
                l: !1,
                exports: {}
            };
            return b[c].call(t.exports, t, t.exports, f), t.l = !0, t.exports;
        }
        var e = {};
        return f.m = b, f.c = e, f.d = function(b, e, c) {
            f.o(b, e) || Object.defineProperty(b, e, {
                configurable: !1,
                enumerable: !0,
                get: c
            });
        }, f.n = function(b) {
            var e = b && b.__esModule ? function() {
                return b.default;
            } : function() {
                return b;
            };
            return f.d(e, "a", e), e;
        }, f.o = function(b, f) {
            return Object.prototype.hasOwnProperty.call(b, f);
        }, f.p = "", f(f.s = 0);
    }([ function(b, f, e) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var c = function(b) {
            return b && b.__esModule ? b : {
                default: b
            };
        }(e(1));
        f.default = c.default, b.exports = f.default;
    }, function(b, f, e) {
        function c(b) {
            return b && b.__esModule ? b : {
                default: b
            };
        }
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var t = c(e(2)), a = c(e(3)), r = c(e(4)), n = c(e(5)), d = c(e(6)), u = c(e(7)), o = c(e(8)), s = c(e(9)), l = c(e(10)), i = c(e(11)), p = c(e(12)), y = {
            lunarInfo: t.default,
            solarMonth: a.default,
            gan: r.default,
            zhi: n.default,
            animals: d.default,
            lunarTerm: u.default,
            lTermInfo: o.default,
            nStr1: s.default,
            nStr2: l.default,
            nStr3: i.default,
            nStr4: p.default,
            lYearDays: function(b) {
                var f, e = 348;
                for (f = 32768; f > 8; f >>= 1) e += y.lunarInfo[b - 1900] & f ? 1 : 0;
                return e + y.leapDays(b);
            },
            leapMonth: function(b) {
                return 15 & y.lunarInfo[b - 1900];
            },
            leapDays: function(b) {
                return y.leapMonth(b) ? 65536 & y.lunarInfo[b - 1900] ? 30 : 29 : 0;
            },
            monthDays: function(b, f) {
                return f > 12 || f < 1 ? -1 : y.lunarInfo[b - 1900] & 65536 >> f ? 30 : 29;
            },
            solarDays: function(b, f) {
                if (f > 12 || f < 1) return -1;
                var e = f - 1;
                return 1 == e ? b % 4 == 0 && b % 100 != 0 || b % 400 == 0 ? 29 : 28 : y.solarMonth[e];
            },
            toGanZhi: function(b) {
                return y.gan[b % 10] + y.zhi[b % 12];
            },
            getTerm: function(b, f) {
                if (b < 1900 || b > 2100) return -1;
                if (f < 1 || f > 24) return -1;
                var e = y.lTermInfo[b - 1900], c = [ parseInt("0x" + e.substr(0, 5)).toString(), parseInt("0x" + e.substr(5, 5)).toString(), parseInt("0x" + e.substr(10, 5)).toString(), parseInt("0x" + e.substr(15, 5)).toString(), parseInt("0x" + e.substr(20, 5)).toString(), parseInt("0x" + e.substr(25, 5)).toString() ], t = [ c[0].substr(0, 1), c[0].substr(1, 2), c[0].substr(3, 1), c[0].substr(4, 2), c[1].substr(0, 1), c[1].substr(1, 2), c[1].substr(3, 1), c[1].substr(4, 2), c[2].substr(0, 1), c[2].substr(1, 2), c[2].substr(3, 1), c[2].substr(4, 2), c[3].substr(0, 1), c[3].substr(1, 2), c[3].substr(3, 1), c[3].substr(4, 2), c[4].substr(0, 1), c[4].substr(1, 2), c[4].substr(3, 1), c[4].substr(4, 2), c[5].substr(0, 1), c[5].substr(1, 2), c[5].substr(3, 1), c[5].substr(4, 2) ];
                return parseInt(t[f - 1]);
            },
            toChinaYear: function(b) {
                var f = parseInt(b / 1e3), e = parseInt(b % 1e3 / 100), c = parseInt(b % 100 / 10), t = b % 10;
                return y.nStr4[f] + y.nStr4[e] + y.nStr4[c] + y.nStr4[t] + "年";
            },
            toChinaMonth: function(b) {
                return b > 12 || b < 1 ? -1 : y.nStr3[b - 1] + "月";
            },
            toChinaDay: function(b) {
                var f;
                switch (b) {
                  case 10:
                    f = "初十";
                    break;

                  case 20:
                    f = "二十";
                    break;

                  case 30:
                    f = "三十";
                    break;

                  default:
                    f = y.nStr2[Math.floor(b / 10)], f += y.nStr1[b % 10];
                }
                return f;
            },
            getAnimal: function(b) {
                return y.animals[(b - 4) % 12];
            },
            solar2lunar: function(b, f, e) {
                if (b < 1900 || b > 2100) return -1;
                if (1900 == b && 1 == f && e < 31) return -1;
                if (b) c = new Date(b, parseInt(f) - 1, e); else var c = new Date();
                var t, a = 0, r = (b = c.getFullYear(), f = c.getMonth() + 1, e = c.getDate(), (Date.UTC(c.getFullYear(), c.getMonth(), c.getDate()) - Date.UTC(1900, 0, 31)) / 864e5);
                for (t = 1900; t < 2101 && r > 0; t++) r -= a = y.lYearDays(t);
                r < 0 && (r += a, t--);
                var n = new Date(), d = !1;
                n.getFullYear() == b && n.getMonth() + 1 == f && n.getDate() == e && (d = !0);
                var u = c.getDay(), o = y.nStr1[u];
                0 == u && (u = 7);
                var s = t, l = y.leapMonth(t), i = !1;
                for (t = 1; t < 13 && r > 0; t++) l > 0 && t == l + 1 && 0 == i ? (--t, i = !0, 
                a = y.leapDays(s)) : a = y.monthDays(s, t), 1 == i && t == l + 1 && (i = !1), r -= a;
                0 == r && l > 0 && t == l + 1 && (i ? i = !1 : (i = !0, --t)), r < 0 && (r += a, 
                --t);
                var p = t, h = r + 1, v = f - 1, m = y.getTerm(s, 3), M = y.toGanZhi(s - 4);
                M = v < 2 && e < m ? y.toGanZhi(s - 5) : y.toGanZhi(s - 4);
                var g = y.getTerm(b, 2 * f - 1), _ = y.getTerm(b, 2 * f), D = y.toGanZhi(12 * (b - 1900) + f + 11);
                e >= g && (D = y.toGanZhi(12 * (b - 1900) + f + 12));
                var x = !1, S = "";
                g == e && (x = !0, S = y.lunarTerm[2 * f - 2]), _ == e && (x = !0, S = y.lunarTerm[2 * f - 1]);
                var j = Date.UTC(b, v, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, I = y.toGanZhi(j + e - 1);
                return {
                    lYear: s,
                    lMonth: p,
                    lDay: h,
                    animal: y.getAnimal(s),
                    yearCn: y.toChinaYear(s),
                    monthCn: (i ? "闰" : "") + y.toChinaMonth(p),
                    dayCn: y.toChinaDay(h),
                    cYear: b,
                    cMonth: f,
                    cDay: e,
                    gzYear: M,
                    gzMonth: D,
                    gzDay: I,
                    isToday: d,
                    isLeap: i,
                    nWeek: u,
                    ncWeek: "星期" + o,
                    isTerm: x,
                    term: S
                };
            },
            lunar2solar: function(b, f, e, c) {
                var t = y.leapMonth(b);
                if (y.leapDays(b), c && t != f) return -1;
                if (2100 == b && 12 == f && e > 1 || 1900 == b && 1 == f && e < 31) return -1;
                var a = y.monthDays(b, f);
                if (b < 1900 || b > 2100 || e > a) return -1;
                for (var r = 0, n = 1900; n < b; n++) r += y.lYearDays(n);
                var d = 0, u = !1;
                for (n = 1; n < f; n++) d = y.leapMonth(b), u || d <= n && d > 0 && (r += y.leapDays(b), 
                u = !0), r += y.monthDays(b, n);
                c && (r += a);
                var o = Date.UTC(1900, 1, 30, 0, 0, 0), s = new Date(864e5 * (r + e - 31) + o), l = s.getUTCFullYear(), i = s.getUTCMonth() + 1, p = s.getUTCDate();
                return y.solar2lunar(l, i, p);
            }
        };
        f.default = y, b.exports = f.default;
    }, function(b, f, e) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        }), f.default = [ 19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19415, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560 ], 
        b.exports = f.default;
    }, function(b, f, e) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        }), f.default = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ], b.exports = f.default;
    }, function(b, f, e) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        }), f.default = [ "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸" ], b.exports = f.default;
    }, function(b, f, e) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        }), f.default = [ "子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥" ], 
        b.exports = f.default;
    }, function(b, f, e) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        }), f.default = [ "鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪" ], 
        b.exports = f.default;
    }, function(b, f, e) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        }), f.default = [ "小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至" ], 
        b.exports = f.default;
    }, function(b, f, e) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        }), f.default = [ "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722" ], 
        b.exports = f.default;
    }, function(b, f, e) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        }), f.default = [ "日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十" ], b.exports = f.default;
    }, function(b, f, e) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        }), f.default = [ "初", "十", "廿", "卅" ], b.exports = f.default;
    }, function(b, f, e) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        }), f.default = [ "正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊" ], 
        b.exports = f.default;
    }, function(b, f, e) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        }), f.default = [ "零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十" ], b.exports = f.default;
    } ]);
}, "object" == ("undefined" == typeof exports ? "undefined" : e(exports)) && "object" == ("undefined" == typeof module ? "undefined" : e(module)) ? module.exports = b() : "function" == typeof define && define.amd ? define("solarlunar", [], b) : "object" == ("undefined" == typeof exports ? "undefined" : e(exports)) ? exports.solarlunar = b() : (void 0).solarlunar = b();