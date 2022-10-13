Page({
    data: {
        goalDate: "",
        date: "",
        day: "",
        hours: "",
        minutes: "",
        seconds: "",
        intervalId: 0
    },
    start: function() {
        var t = this, e = new Date(this.data.date), a = e - new Date();
        this.formate(a), this.setData({
            intervalId: setInterval(function() {
                var a = e - new Date();
                t.formate(a);
            }, 1e3)
        });
    },
    dateChange: function(t) {
        var e = t.detail.value.split("-").map(function(t) {
            return Number(t);
        });
        clearInterval(this.data.intervalId), this.setData({
            date: e[0] + "/" + e[1] + "/" + e[2],
            goalDate: e[0] + "年" + e[1] + "月" + e[2] + "日"
        }), wx.setStorage({
            key: "last",
            data: e[0] + "/" + e[1] + "/" + e[2]
        }), this.start();
    },
    formateDate: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date();
        return t.getFullYear() + "年" + (t.getMonth() + 1) + "月" + t.getDate() + "日";
    },
    formate: function(t) {
        this.setData({
            day: Math.floor(t / 864e5) + "",
            hours: Math.floor(t % 864e5 / 36e5) + "",
            minutes: Math.floor(t % 864e5 % 36e5 / 6e4) + "",
            seconds: Math.floor(t % 864e5 % 36e5 % 6e4 / 1e3) + ""
        });
    },
    onLoad: function(t) {
        var e = new Date().getFullYear() + 1 + "/1/1";
        wx.getStorageSync("last") && (e = wx.getStorageSync("last")), this.setData({
            date: e,
            goalDate: this.formateDate(new Date(e))
        }), this.start();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        clearInterval(this.data.intervalId);
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "日期倒计时",
            path: "/pages/my_module/countDown/countDown"
        };
    },
    onShareTimeline: function(t) {
        return {
            title: "日期倒计时",
            path: "/pages/my_module/countDown/countDown"
        };
    }
});