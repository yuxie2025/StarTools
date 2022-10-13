require("util.js");

var e, t, a = require("mutually.js"), o = (getApp(), getApp().globalData.Key, getApp().globalData.isNew, 
getApp().globalData.Appid, getApp().globalData.version, new a.cacheMd(), !0), n = void 0, i = void 0;

Page({
    data: {
        memorandumList: [],
        moveX: 0
    },
    onLoad: function(t) {
        e = this, wx.getSystemInfo({
            success: function(e) {
                wx.setStorageSync("model", e.model);
            }
        }), wx.getStorageSync("model").includes("iPhone X") && e.setData({
            model: "iPhone X"
        });
    },
    back1: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    addItem: function() {
        wx.navigateTo({
            url: "add"
        });
    },
    longTapDel: function(e) {
        o = !1, setTimeout(function(e) {
            o = !0;
        }, 1e3);
    },
    toDetail: function(e) {
        o && wx.navigateTo({
            url: "detail?id=" + e.currentTarget.dataset.index
        });
    },
    moveEnd: function(e) {},
    moveStart: function(t) {
        n = t.changedTouches[0].pageX, e.setData({
            delIndex: t.currentTarget.dataset.index
        });
    },
    moveing: function(t) {
        (i = n - t.changedTouches[0].pageX) > 0 && i < 120 && e.setData({
            moveX: i
        }), i < 0 && i > -120 && e.setData({
            moveX: i
        });
    },
    del: function() {
        var t = wx.getStorageSync("memorandumList");
        t.splice(e.data.delIndex, 1), e.setData({
            memorandumList: t
        }), wx.setStorageSync("memorandumList", t), e.onShow();
    },
    onShow: function() {
        function a() {
            for (var t = 0; t < n.length; t++) {
                var a = new Date().getTime(), o = Number(new Date(n[t].gongli));
                n[t].tempTimestamp = (o - a) / 1e3;
                var i = 0, r = 0, m = 0, l = 0;
                if (n[t].tempTimestamp || 0 == n[t].tempTimestamp) {
                    var s = n[t].tempTimestamp;
                    s > 0 ? (i = Math.floor(s / 86400), r = Math.floor(s / 3600) - 24 * i, m = Math.floor(s / 60) - 24 * i * 60 - 60 * r, 
                    l = Math.floor(s) - 24 * i * 60 * 60 - 60 * r * 60 - 60 * m, r <= 9 && (r = "0" + r), 
                    m <= 9 && (m = "0" + m), l <= 9 && (l = "0" + l), n[t].tempTimestamp--, g = i + "天" + r + "时" + m + "分" + l + "秒", 
                    n[t].overTime = !0) : (s *= -1, i = Math.floor(s / 86400), r = Math.floor(s / 3600) - 24 * i, 
                    m = Math.floor(s / 60) - 24 * i * 60 - 60 * r, l = Math.floor(s) - 24 * i * 60 * 60 - 60 * r * 60 - 60 * m, 
                    r <= 9 && (r = "0" + r), m <= 9 && (m = "0" + m), l <= 9 && (l = "0" + l), n[t].tempTimestamp--, 
                    g = i + "天" + r + "时" + m + "分" + l + "秒", n[t].overTime = !1);
                } else var g = "时间已到";
                n[t].tempTimestamp = g;
            }
            e.setData({
                memorandumList: n
            });
        }
        clearInterval(t);
        var o = new Date().getMonth() + 1;
        new Date().getDate() > 14 && (o += 1);
        var n = wx.getStorageSync("memorandumList") || [ {
            bgColor: {
                left: "#f056a8",
                right: "#fe7e98"
            },
            bgColorIndex: 0,
            gongli: "2022/" + o + "/14 00:00:00",
            lastTab: "solar",
            name: "情人节(左滑删除)",
            nongli: "暂无农历",
            textColor: "#fff",
            textColorIndex: 0
        } ];
        wx.setStorageSync("memorandumList", n), a(), t = setInterval(a, 1e3);
    },
    onReady: function() {},
    onPageScroll: function(e) {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "节日倒计时",
            path: "/pages/my_module/timejs/index"
        };
    },
    onShareTimeline: function(e) {
        return {
            title: "节日倒计时",
            path: "/pages/my_module/timejs/index"
        };
    }
});