Page({
  data: {
    isRelease: true,
    wxad: [],
    money: 1,
    time: 0
  },
  components: {},
  props: {},
  onLoad: function (t) {
    this.setData({
      isRelease: getApp().globalData.isRelease
    })
    var _this = this;
    setInterval(function () {
      _this.setData({
        time: _this.data.time + 1
      })
    }, 1000)
    wx.showToast({
      title: "玩法介绍:左右滑动",
      icon: "none",
      duration: 2000
    });
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {
    return {
      title: "数钱",
      path: "/pages/my_module/count_money/money"
    };
  },
  onShareTimeline: function (n) {
    return {
      title: "数钱",
      path: "/pages/my_module/count_money/money"
    };
  },

  moreMoney: function () {
    console.log(123);
    var _this = this;
    _this.setData({
      money: _this.data.money + 1
    })
  }
});