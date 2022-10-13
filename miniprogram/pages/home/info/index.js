// pages/home/info/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerUnitId: getApp().globalData.bannerUnitId,
    key: "Key_Info_NEW",
    title: "资讯",
    itemsList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: this.data.title
    });

  },

  onShareAppMessage: function () {},
  onShareTimeline: function () {},

  onShow() {
  },


})