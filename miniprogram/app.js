//app.js
var uuid;
App({
  onLaunch: function () {
    this.globalData = {
      "version": "1.0.0",
      "cacheFileDir": wx.env.USER_DATA_PATH + "/cacheFile",
      "isRelease": false,//可以网络控制 用于上架屏蔽某些页面不显示
      bannerUnitId: "adunit-f0ed408d3a34c414", //banner广告id
      videoUnitId: "adunit-1571d7bdc22be201", //视频广告id
      adUnitId: "adunit-5d0aab0f17052e6d" //激励广告id
    }
  },
  onShow() {
  },
})