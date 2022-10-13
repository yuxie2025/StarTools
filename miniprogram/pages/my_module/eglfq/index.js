var t = wx.createInnerAudioContext();

t.obeyMuteSwitch = !1, t.autoplay = !0, t.onPlay(function () {
  console.log("开始播放");
}), t.onError(function (t) {
  console.log(t);
}), Page({
  data: {
    ad: !1,
    bgimg: "3",
    src: "https://res.wx.qq.com/voice/getvoice?mediaid=Mzg2NzUzODkzNl8xMDAwMDAwODg=",
    src3: "https://res.wx.qq.com/voice/getvoice?mediaid=Mzg2NzUzODkzNl8xMDAwMDAwODk=",
  },
  onLoad: function (t) {
    wx.showToast({
      title: "请按开关",
      icon: "none"
    });
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {
    t.destroy();
  },
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {
    return {
      title: "恶搞理发器",
      path: "/pages/my_module/eglfq/index"
    };
  },
  onShareTimeline: function (t) {
    return {
      title: "恶搞理发器",
      path: "/pages/my_module/eglfq/index"
    };
  },
  start: function () {
    wx.vibrateShort();
    var n = this.data.bgimg;
    console.log(n);
    var o = "";
    "3" == n ? (n = "2", o = encodeURI(this.data.src3), this.setData({
      bgimg: n,
      src: o
    }), t.stop(), t.src = o, t.play()) : "2" == n ? (n = "1", o = encodeURI(this.data.src),
      this.setData({
        bgimg: n,
        src: o
      }), t.stop(), t.src = o, t.play()) : "1" == n && (n = "3", o = "", this.setData({
      bgimg: n,
      src: o
    }), t.stop());
  }
});