require("util.js");

var t, a = require("mutually.js"), e = (getApp(), getApp().globalData.Key, getApp().globalData.isNew, 
getApp().globalData.Appid, getApp().globalData.version, new a.cacheMd(), ""), o = void 0, i = void 0;

Page({
    data: {
        inputValue: "",
        lastTab: "solar",
        dateStr1: "",
        date1: "",
        hour1: "",
        jumpModel: "jumpHide",
        bgcolorList: [ {
            left: "#f056a8",
            right: "#fe7e98"
        }, {
            left: "#f8646d",
            right: "#f88f77"
        }, {
            left: "#32bff7",
            right: "#5ad9ee"
        }, {
            left: "#328df1",
            right: "#8991f6"
        }, {
            left: "#bd43f9",
            right: "#e86ff6"
        }, {
            left: "#2bc8aa",
            right: "#29e592"
        } ],
        bgColor: 0,
        textcolorList: [ "#fff", "#000", "#8a8a8a", "#eae324", "#f053a8", "#f8626d", "#32bef8", "#2f8bf1", "#bb42f9", "#53536f", "#676767", "#2b2130", "#ed7329", "#2bc6ad" ],
        textColor: 0
    },
    onLoad: function(e) {
        t = this, e.id && (o = e.id), wx.getStorageSync("model").includes("iPhone X") && t.setData({
            model: "iPhone X"
        });
        var i = a.formatTime(new Date());
        this.setData({
            date1: i
        }), o ? (console.log(1), function(a) {
            var e = wx.getStorageSync("memorandumList") || [];
            console.log(e[a]), t.setData({
                bgColor: e[a].bgColorIndex,
                textColor: e[a].textColorIndex,
                inputValue: e[a].name,
                lastTab: e[a].lastTab,
                date1: e[a].gongli,
                dateStr1: e[a].nongli
            });
        }(o)) : console.log(2);
    },
    back1: function() {
        wx.navigateBack({
            delta: 1
        }), o = void 0;
    },
    bindKeyInput: function(t) {
        this.setData({
            inputValue: t.detail.value
        });
    },
    tokeFu: function() {
        t.setData({
            jumpModel: "jumpShow"
        });
    },
    showDatepicker3: function(a) {
        e = 1;
        var o = t.data.date1;
        i || (i = o.split(" ")[0].split("/")[0] + "-" + o.split(" ")[0].split("/")[1] + "-" + o.split(" ")[0].split("/")[2]), 
        this.selectComponent("#ruiDatepicker").init({
            date: i,
            hour: "0",
            confirm: !1,
            lunar: !1
        });
    },
    dateConfirm: function(t) {
        var a = {};
        a["date" + e] = t.detail.year + "-" + t.detail.month + "-" + t.detail.day, a["hour" + e] = t.detail.hour + ":00:00", 
        a["dateStr" + e] = t.detail.thisStr, a.lastTab = t.detail.lastTab, this.setData(a);
    },
    clickBgColor: function(a) {
        t.setData({
            bgColor: a.currentTarget.dataset.index
        });
    },
    closeBtn: function() {
        t.setData({
            jumpModel: "jumpHide"
        });
    },
    clickTextColor: function(a) {
        t.setData({
            textColor: a.currentTarget.dataset.index
        });
    },
    finishAdd: function() {
        if (t.data.inputValue) {
            var a = wx.getStorageSync("memorandumList") || [], e = {};
            if (e.lastTab = t.data.lastTab, t.data.hour1) {
                var i = t.data.date1, l = i.split(" ")[0].split("-")[0] + "/" + i.split(" ")[0].split("-")[1] + "/" + i.split(" ")[0].split("-")[2];
                e.gongli = l + " " + t.data.hour1;
            } else e.gongli = t.data.date1;
            e.nongli = t.data.dateStr1 || "暂无农历", e.bgColor = t.data.bgcolorList[t.data.bgColor], 
            e.textColor = t.data.textcolorList[t.data.textColor], e.name = t.data.inputValue || "暂无标题", 
            e.bgColorIndex = t.data.bgColor, e.textColorIndex = t.data.textColor, console.log(t.data), 
            console.log(e), o ? a.splice(o, 1, e) : a.push(e), wx.setStorageSync("memorandumList", a), 
            o ? (wx.navigateTo({
                url: "index"
            }), o = void 0) : (wx.navigateBack({
                delta: 1
            }), o = void 0);
        } else wx.showToast({
            title: "请输入标题",
            icon: "none",
            duration: 1e3
        });
    },
    onShow: function() {},
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