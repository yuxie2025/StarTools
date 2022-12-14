for (var a = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("./solarlunar")), t = new Date().getFullYear() + 1, r = [], e = 1940; e <= t; e++) r.push(e);

var n = a.default.solar2lunar(t, 12, 31), h = n.lMonth, o = n.lDay, s = {
    confirm: !0,
    date: "1991-1-6",
    hour: "-1",
    showHour: !0,
    lunar: !0
};

Component({
    data: {
        config: {},
        returnDate: {
            lastTab: "lunar",
            year: "",
            month: "",
            day: "",
            lYear: "",
            lMonth: "",
            lDay: "",
            isLeap: "",
            lunarStr: "",
            solarStr: "",
            thisStr: "",
            hour: ""
        },
        selectArr: [],
        yearArr: r,
        monthArr: [],
        dayArr: [],
        hourArr: [],
        lunarTab: !0,
        isShow: !1,
        hiddenConfirm: !0
    },
    methods: {
        confirm: function() {
            this.data.config.confirm ? !1 === this.data.hiddenConfirm ? (this.setData({
                isShow: !1,
                hiddenConfirm: !0
            }), this.triggerEvent("confirm", this.data.returnDate)) : this.setData({
                hiddenConfirm: !1
            }) : (this.setData({
                isShow: !1,
                hiddenConfirm: !0
            }), this.triggerEvent("confirm", this.data.returnDate));
        },
        init: function(a) {
            var t = Object.assign({}, s, a);
            1 == (t = this._checkConfig(t)).lunar ? this._initlunar(t.date, t.hour) : this._initsolar(t.date, t.hour), 
            this.setData({
                lunarTab: !0 === t.lunar,
                config: t,
                isShow: !0
            }), this._setReturnDate();
        },
        _cancel: function() {
            !1 === this.data.hiddenConfirm ? this.setData({
                hiddenConfirm: !0
            }) : this.setData({
                isShow: !1
            });
        },
        _checkConfig: function(a) {
            "boolean" != typeof a.confirm && (a.confirm = s.confirm), "boolean" != typeof a.showHour && (a.showHour = s.showHour), 
            "boolean" != typeof a.lunar && (a.lunar = s.lunar), (parseInt(a.hour) < -1 || parseInt(a.hour) > 24 || "" == a.hour) && (a.hour = s.hour);
            var t = new Date(a.date);
            return ("Invalid Date" == t || t.getFullYear() < 1940 || t.getFullYear() > 2030) && (a.date = s.date), 
            a;
        },
        _solarLunarChange: function(a) {
            var t = a.currentTarget.dataset.type, r = this.data.returnDate;
            !0 !== this.data.lunarTab && "lunar" == t && (this.setData({
                lunarTab: !0
            }), this._initlunar(r.year + "-" + r.month + "-" + r.day, r.hour)), !0 === this.data.lunarTab && "solar" == t && (this.setData({
                lunarTab: !1
            }), this._initsolar(r.year + "-" + r.month + "-" + r.day, r.hour)), this._setReturnDate();
        },
        _pickerChange: function(r) {
            var e = r.detail.value;
            if (!0 === this.data.lunarTab) {
                for (var n = a.default.leapMonth(e[0] + 1940), s = this.data.monthArr, l = [], i = 1; i <= 12; i++) l.push(this._getLunarName("month", i)), 
                n > 0 && i == n && l.push("???" + this._getLunarName("month", i));
                var u = [], d = void 0;
                if (n > 0) d = e[1] < n ? a.default.monthDays(e[0] + 1940, e[1] + 1) : e[1] == n ? a.default.leapDays(e[0] + 1940, n) : a.default.monthDays(e[0] + 1940, e[1]); else {
                    var f = e[1] + 1 > l.length ? l.length : e[1] + 1;
                    d = a.default.monthDays(e[0] + 1940, f);
                }
                for (var m = 1; m <= d; m++) u.push(this._getLunarName("day", m));
                if (s.length > l.length) {
                    for (var y = 0, D = 0, c = s.length; D < c; D++) "" + s[D].indexOf("???") >= 0 && (y = D);
                    e[1] = e[1] + 1 > y ? e[1] - 1 : e[1];
                }
                s.length < l.length && (e[1] = e[1] + 1 > n ? e[1] + 1 : e[1]), e[1] = e[1] >= l.length ? l.length - 1 : e[1], 
                e[2] = e[2] >= d ? d - 1 : e[2], e[0] == t - 1940 && (n > 0 ? (e[1] = e[1] > h ? h : e[1], 
                e[1] == h && e[2] + 1 > o && (e[2] = o - 1)) : (e[1] = e[1] > h - 1 ? h - 1 : e[1], 
                e[1] == h - 1 && e[2] + 1 > o && (e[2] = o - 1))), this.setData({
                    monthArr: l,
                    dayArr: u,
                    selectArr: e
                });
            } else {
                for (var g = [], p = a.default.solarDays(e[0] + 1940, e[1] + 1), _ = 1; _ <= p; _++) g.push(_);
                e[2] = e[2] >= p ? p - 1 : e[2], 0 == e[0] && e[1] + 1 < 2 && (e[1] = 1), 0 == e[0] && e[1] + 1 == 2 && e[2] + 1 < 8 && (e[2] = 7), 
                this.setData({
                    selectArr: e,
                    dayArr: g
                });
            }
            this._setReturnDate();
        },
        _setReturnDate: function() {
            this.setData({
                selectArr: this.data.selectArr
            });
            var t = this.data.selectArr, r = {};
            if (r.hour = !1 === this.data.config.showHour ? "" : t[3] - 1, !0 === this.data.lunarTab) {
                r.lastTab = "lunar", r.lYear = t[0] + 1940;
                var e = a.default.leapMonth(t[0] + 1940);
                r.lMonth = e > 0 && t[1] >= e ? t[1] : t[1] + 1, r.lDay = t[2] + 1, r.isLeap = e > 0 && t[1] == e, 
                1 == r.isLeap ? r.lunarStr = "??????:" + r.lYear + "??????" + this._getLunarName("month", r.lMonth) + this._getLunarName("day", r.lDay) : r.lunarStr = "??????:" + r.lYear + "???" + this._getLunarName("month", r.lMonth) + this._getLunarName("day", r.lDay);
                var n = a.default.lunar2solar(r.lYear, r.lMonth, r.lDay, r.isLeap);
                r.year = n.cYear, r.month = n.cMonth, r.day = n.cDay, r.solarStr = "??????:" + r.year + "???" + r.month + "???" + r.day + "???";
            } else {
                r.lastTab = "solar", r.year = t[0] + 1940, r.month = t[1] + 1, r.day = t[2] + 1, 
                r.solarStr = "??????:" + r.year + "???" + r.month + "???" + r.day + "???";
                var h = a.default.solar2lunar(r.year, r.month, r.day);
                r.lYear = h.lYear, r.lMonth = h.lMonth, r.lDay = h.lDay, r.isLeap = h.isLeap, 1 == r.isLeap ? r.lunarStr = "??????:" + r.lYear + "??????" + this._getLunarName("month", r.lMonth) + this._getLunarName("day", r.lDay) : r.lunarStr = "??????:" + r.lYear + "???" + this._getLunarName("month", r.lMonth) + this._getLunarName("day", r.lDay);
            }
            "" !== r.hour && (r.solarStr += " " + (r.hour < 0 ? "????????????" : r.hour + "???"), r.lunarStr += " " + (r.hour < 0 ? "????????????" : this._getLunarName("hour", r.hour) + "???")), 
            !0 === this.data.lunarTab ? r.thisStr = r.lunarStr : r.thisStr = r.solarStr, this.setData({
                returnDate: r
            });
        },
        _getLunarName: function(a, t) {
            return "month" === a ? [ "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "?????????", "??????" ][t - 1] : "day" === a ? [ "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "?????????" ][t - 1] : "hour" === a ? [ "0???", "1???", "2???", "3???", "4???", "5???", "6???", "7???", "8???", "9???", "10???", "11???", "12???", "13???", "14???", "15???", "16???", "17???", "18???", "19???", "20???", "21???", "22???", "23???" ][t] : void 0;
        },
        _initlunar: function(t, r) {
            for (var e = t.split("-"), n = a.default.solar2lunar(e[0], e[1], e[2]), h = a.default.leapMonth(n.lYear), o = [], s = 1; s <= 12; s++) o.push(this._getLunarName("month", s)), 
            h > 0 && s == h && o.push("???" + this._getLunarName("month", s));
            var l, i = [];
            l = n.isLeap ? a.default.leapDays(e[0], e[1]) : a.default.monthDays(e[0], e[1]);
            for (var u = 1; u <= l; u++) i.push(this._getLunarName("day", u));
            for (var d = [ "??????" ], f = 0; f <= 23; f++) d.push(this._getLunarName("hour", f) + "???");
            var m = [ n.lYear - 1940, h > 0 && h <= n.lMonth ? n.lMonth : n.lMonth - 1, n.lDay - 1, parseInt(r) + 1 ];
            this.setData({
                lunarTab: !0,
                monthArr: o,
                dayArr: i,
                hourArr: d,
                selectArr: m
            });
        },
        _initsolar: function(t, r) {
            for (var e = t.split("-"), n = [], h = 1; h <= 12; h++) n.push(h);
            for (var o = [], s = a.default.solarDays(e[0], e[1]), l = 1; l <= s; l++) o.push(l);
            for (var i = [ "??????" ], u = 0; u <= 23; u++) i.push(u + "???");
            var d = [ e[0] - 1940, e[1] - 1, e[2] - 1, parseInt(r) + 1 ];
            this.setData({
                lunarTab: !1,
                monthArr: n,
                dayArr: o,
                hourArr: i,
                selectArr: d
            });
        },
        handleStop: function() {
            return !1;
        }
    }
});