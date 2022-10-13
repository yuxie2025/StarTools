var t = getApp();

Page({
  data: {
    time: "22:42",
    sec: "13",
    height: 0,
    width: 0,
    diretion: "rotate(90deg)",
    flag: !0,
    changeColor: 0,
    display: "",
    test: ""
  },
  onLoad: function (t) {
    let screenHeight = wx.getSystemInfoSync().screenHeight;
    this.setData({
      height: (screenHeight - 220) / 2,
      width: screenHeight,
    })
  },
  onReady: function () {},
  change: function () {
    var t = this;
    0 == t.data.changeColor ? t.setData({
      changeColor: 1
    }) : 1 == t.data.changeColor && t.setData({
      changeColor: 0
    });
  },
  onShow: function () {
    var t = this;
    t.displayTime(t), t.data.display = setInterval(t.displayTime, 1e3, t), t.data.test = setInterval(t.testState, 500);
  },
  testState: function () {
    var t = this,
      e = Date.now();
    wx.startAccelerometer(), wx.onAccelerometerChange(function (a) {
      var n = Date.now();
      if (!(n - e < 500)) {
        e = n;
        var i = 57.3 * Math.atan2(-a.x, Math.sqrt(a.y * a.y + a.z * a.z));
        if (Math.atan2(a.y, a.z), console.log(i), i > -1 && i <= 180 || i > -360 && i < -180 || -0 == i) {
          if (1 == t.data.flag) return;
          0 == t.data.flag && t.setData({
            diretion: "rotate(90deg)"
          }), t.setData({
            flag: !0
          });
        } else if (i < -1 && i >= -180 || i > 180 && i < 360) {
          if (0 == t.data.flag) return;
          1 == t.data.flag && t.setData({
            diretion: "rotate(-90deg)"
          }), t.setData({
            flag: !1
          });
        }
      }
    });
  },
  displayTime: function (t) {
    var e, a = new Date(),
      n = a.getHours(),
      i = a.getMinutes(),
      o = a.getSeconds();
    n < 10 && (n = "0" + n), i < 10 && (i = "0" + i), o < 10 && (o = "0" + o), e = n + ":" + i,
      t.time = e, t.sec = o, this.setData({
        time: e,
        sec: o
      });
  },
  onHide: function () {
    clearInterval(this.data.display), clearInterval(this.data.test), wx.stopAccelerometer();
  },
  onUnload: function () {
    clearInterval(this.data.display), clearInterval(this.data.test), wx.stopAccelerometer();
  },
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function (t) {
    return {
      title: "全屏时钟",
      path: "/pages/index/index"
    };
  },
  onShareTimeline: function (t) {
    return {
      title: "全屏时钟",
      path: "/pages/index/index"
    };
  }
});