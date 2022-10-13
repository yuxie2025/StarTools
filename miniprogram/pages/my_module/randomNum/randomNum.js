var t = null;

Page({
  data: {
    num1: 1,
    num2: 100,
    result: "?",
    hideBtn: !1
  },
  onLoad: function (a) {
    this.timer = null, this.t = 50, this.count = 0;
    wx.getStorageSync("num1") && this.setData({
      num1: wx.getStorageSync("num1")
    });
    wx.getStorageSync("num2") && this.setData({
      num2: wx.getStorageSync("num2")
    })
  },
  onHide: function () {
    clearInterval(this.timer), this.t = 50, this.count = 0;
  },
  setNum1: function (t) {
    var a = 0;
    t.detail.value && (a = parseInt(t.detail.value)), this.setData({
      num1: a
    }), wx.setStorageSync("num1", a);
  },
  setNum2: function (t) {
    var a = 0;
    t.detail.value && (a = parseInt(t.detail.value)), this.setData({
      num2: a
    }), wx.setStorageSync("num2", a);
  },
  start: function () {
    clearTimeout(this.timer);
    this.setData({
      hideBtn: true
    });
    this.roll();
  },
  roll: function () {
    var t, a;
    this.data.num1 < this.data.num2 ? (a = this.data.num1, t = this.data.num2) : (a = this.data.num2,
      t = this.data.num1);
    var n = a + Math.round(Math.random() * (t - a));
    this.setData({
      result: n,
      hideBtn: false
    });
  },
  onShareAppMessage: function () {
    return {
      title: "随机数字",
      path: "/pages/my_module/randomNum/randomNum"
    };
  },
  onShareTimeline: function (t) {
    return {
      title: "随机数字",
      path: "/pages/my_module/randomNum/randomNum"
    };
  }
});