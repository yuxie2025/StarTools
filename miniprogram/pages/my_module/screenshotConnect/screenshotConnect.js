Page({
  data: {
    isRelease: true,
    bannerUnitId: getApp().globalData.bannerUnitId,
    imageInfo: [],
    imageUrls: []
  },
  onLoad(){
    this.setData({
      isRelease: getApp().globalData.isRelease
    })
  },
  onReady: function () {},
  previewImage: function (e) {
    var a = this;
    wx.chooseImage({
      count: 9,
      success: function (e) {
        for (var t = 0; t < e.tempFilePaths.length; t++) a.getImageInfo(e.tempFilePaths[t]);
      }
    });
  },
  getImageInfo: function (e) {
    var a = this;
    wx.getImageInfo({
      src: e,
      success: function (t) {
        var n = a.data.imageInfo,
          i = a.data.imageUrls,
          s = new Object();
        s.url = e, s.width = t.width, s.height = t.height, n.push(s), i.push(e), a.setData({
          imageInfo: n,
          imageUrls: i
        });
      }
    });
  },
  changePreview: function (e) {
    var a = this;
    wx.previewImage({
      current: e.currentTarget.dataset.src,
      urls: a.data.imageUrls
    });
  },
  removeImage: function (e) {
    var a = this,
      t = a.data.imageInfo,
      n = a.data.imageUrls,
      i = e.currentTarget.dataset.index;
    t.splice(i, 1), n.splice(i, 1), a.setData({
      imageInfo: t,
      imageUrls: n
    });
  },
  goToPage: function (e) {
    var a = this,
      t = e.currentTarget.dataset.direction;
    void 0 == a.data.imageInfo[1] ? wx.showToast({
      title: "至少要选两张图！",
      icon: "none"
    }) : wx.navigateTo({
      url: "./showImage?imageInfo=" + JSON.stringify(a.data.imageInfo) + "&direction=" + t
    });
  },
  onShareAppMessage: function () {
    return {
      title: "明星工具箱--图片拼接",
      path: "/pages/my_module/screenshotConnect/screenshotConnect"
    };
  },
  onShareTimeline: function () {},
});