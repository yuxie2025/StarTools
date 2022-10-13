Page({
  data: {
    bannerUnitId: getApp().globalData.bannerUnitId,
    result: ""
  },
  onLoad: function (t) {},
  chooseImage: function (t) {
    var s = this;
    wx.scanCode({
      success: function (t) {
        console.log("扫描结果为：" + t.result)
        wx.showToast({
          title: "扫描成功",
          icon: "success"
        }), s.setData({
          result: t.result
        });
      },
      fail: function (t) {
        wx.showToast({
          title: "没有扫描到二维码!",
          icon: "none"
        });
      }
    });
  },
  copy: function (t) {
    var s = this;
    wx.setClipboardData({
      data: s.data.result,
      success: function (t) {
        wx.showToast({
          title: "已复制",
          icon: "none"
        });
      }
    });
  },
  onShareAppMessage: function (t) {
    return {
      title: "明星工具箱--二维码转字符",
      path: "/pages/my_module/scanQrcode/scanQrcode"
    };
  },
  onShareTimeline: function () {},
});