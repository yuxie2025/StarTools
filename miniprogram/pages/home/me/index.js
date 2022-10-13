// pages/home/me/index.js
Page({
  data: {
    bannerUnitId: getApp().globalData.bannerUnitId,
    title: "我的",
    version: "",
    headeSrcPath: "../../../images/ic_user_img.png",
    userName: "微信用户"
  },
  onShareAppMessage: function () {},
  onShareTimeline: function () {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: this.data.title
    });
    let accountInfo = wx.getAccountInfoSync();
    let version = accountInfo.miniProgram.version; // 1.0.0 小程序版本号
    if (version == "") {
      version = getApp().globalData.version;
    }
    this.setData({
      version: version
    })
  },
  onShow() {

  },
  onHide() {

  },
})