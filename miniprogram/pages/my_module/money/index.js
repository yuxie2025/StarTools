Page({
  data: {
    setInter: '',
    title: "插电充钱",
    num: 100.00, //起始值
  },

  onShareAppMessage: function () {},
  onShareTimeline: function () {},

  onShow() {
    wx.setNavigationBarTitle({
      title: this.data.title
    });
    try {
      let money = wx.getStorageSync('wx_money')
      this.setData({
        num: money ? money : 100.00
      })
    } catch (e) {}
    this.time();
  },
  time() {
    var _this = this;
    _this.data.setInter = setInterval(
      function () {
        wx.getBatteryInfo({
          success(res) {
            if (res.isCharging == true) {
              var numVal = _this.data.num + (Math.floor(Math.random() * 100)) / 100;
              _this.setData({
                num: numVal
              });
            }
          }
        })
      }, 300);
  },
  onUnload() {
    try {
      wx.setStorageSync('wx_money', this.data.num)
    } catch (e) {}
    clearInterval(this.data.setInter)
  },
  toast() {
    wx.showToast({
      title: '仅供娱乐!',
      icon: "none"
    })
  }
});