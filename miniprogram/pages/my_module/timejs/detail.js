function t(t) {
    var i = wx.getStorageSync("memorandumList") || [], o = Number(new Date(i[t].gongli));
    o -= new Date().getTime(), e.setData({
        datail: i[t],
        tempTimestamp: o / 1e3
    }), clearInterval(a), function() {
        function t() {
            var t = 0, a = 0, i = 0, o = 0;
            if (e.data.tempTimestamp) {
                var n, l = e.data.tempTimestamp;
                l > 0 ? (t = Math.floor(l / 86400), a = Math.floor(l / 3600) - 24 * t, i = Math.floor(l / 60) - 24 * t * 60 - 60 * a, 
                o = Math.floor(l) - 24 * t * 60 * 60 - 60 * a * 60 - 60 * i, a <= 9 && (a = "0" + a), 
                i <= 9 && (i = "0" + i), o <= 9 && (o = "0" + o), e.data.tempTimestamp--, r = t + "天" + a + "时" + i + "分" + o + "秒", 
                n = !0) : (l *= -1, t = Math.floor(l / 86400), a = Math.floor(l / 3600) - 24 * t, 
                i = Math.floor(l / 60) - 24 * t * 60 - 60 * a, o = Math.floor(l) - 24 * t * 60 * 60 - 60 * a * 60 - 60 * i, 
                a <= 9 && (a = "0" + a), i <= 9 && (i = "0" + i), o <= 9 && (o = "0" + o), e.data.tempTimestamp--, 
                r = t + "天" + a + "时" + i + "分" + o + "秒", n = !1);
            } else var r = "时间已到";
            e.setData({
                difftime: r,
                overTime: n
            });
        }
        t(), a = setInterval(t, 1e3);
    }();
}

require("util.js");

var e, a, i = require("mutually.js"), o = (getApp(), getApp().globalData.Key, getApp().globalData.isNew, 
getApp().globalData.Appid, getApp().globalData.version, void new i.cacheMd());

Page({
    data: {
        datail: {},
        tempTimestamp: 0,
        difftime: ""
    },
    onLoad: function(a) {
        e = this, o = a.id, t(a.id), wx.getStorageSync("model").includes("iPhone X") && e.setData({
            model: "iPhone X"
        }), wx.setNavigationBarTitle({
            title: wx.getStorageSync("memorandumList")[a.id].name
        }), console.log(a, "a2");
    },
    back1: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    tomodification: function() {
        wx.navigateTo({
            url: "add?id=" + o
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "节日倒计时",
            path: "/pages/my_module/timejs/index"
        };
    },
    onShareTimeline: function(t) {
        return {
            title: "节日倒计时",
            path: "/pages/my_module/timejs/index"
        };
    }
});