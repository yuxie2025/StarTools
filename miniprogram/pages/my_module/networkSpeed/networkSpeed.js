var e = getApp();

Page({
  data: {
    bannerUnitId: getApp().globalData.bannerUnitId,
    speed: 0,
    speedAsMb: 0,
    speedAsType: "0M宽带",
    testUrl: "https://apps.bdimg.com/libs/angular.js/1.4.6/angular.min.js",
    size: 143,
    speedTypeList: [{
      name: "0M宽带",
      min: 0,
      max: 77
    }, {
      name: "1M宽带",
      min: 77,
      max: 128
    }, {
      name: "2M宽带",
      min: 154,
      max: 256
    }, {
      name: "3M宽带",
      min: 231,
      max: 384
    }, {
      name: "4M宽带",
      min: 307,
      max: 512
    }, {
      name: "6M宽带",
      min: 462,
      max: 620
    }, {
      name: "8M宽带",
      min: 614,
      max: 1024
    }, {
      name: "12M宽带",
      min: 922,
      max: 1536
    }, {
      name: "20M宽带",
      min: 1537,
      max: 2560
    }, {
      name: "30M宽带",
      min: 2561,
      max: 3840
    }, {
      name: "50M宽带",
      min: 3841,
      max: 6400
    }, {
      name: "100M宽带",
      min: 7680,
      max: 12800
    }],
    systemInfo: {
      mobilePhone: "锤子",
      mobileModel: "R10 plus",
      systemVersion: "Smartisan OS",
      networkType: "4G",
      wechatVersion: "6.6.6"
    }
  },
  onLoad: function (e) {
    this.startSpeedMeasure();
  },
  onShow: function () {
    e.pages = getCurrentPages();
  },
  startSpeedMeasure: function (e) {
    var n = this;
    n.getSystemInfo(), n.getSpeed(n.data.testUrl, 1692);
  },
  getSpeed: function (e, n) {
    var t = this,
      s = n,
      a = new Date(),
      o = 0;
    wx.showLoading({
      title: "测速中....",
      mask: !0
    }), wx.downloadFile({
      url: e,
      success: function (e) {
        var n = new Date();
        o = Math.round(1e3 * s / (n - a)), console.log("start:" + a + "\nend:" + n + "\nspeed:" + o),
          t.setData({
            speed: o
          }), t.speedConversion(o), wx.hideLoading();
      },
      fail: function (e) {
        wx.hideLoading(), wx.showToast({
          title: "恭喜你，遇到bug了",
          icon: "none"
        });
      }
    });
  },
  getSystemInfo: function (e) {
    var n = this;
    wx.getSystemInfo({
      success: function (e) {
        console.log(e), n.setData({
          "systemInfo.mobilePhone": e.brand,
          "systemInfo.mobileModel": e.model,
          "systemInfo.systemVersion": e.system,
          "systemInfo.wechatVersion": e.version
        });
      },
      fail: function (e) {
        console.log("get system info fail!!!");
      }
    }), wx.getNetworkType({
      success: function (e) {
        n.setData({
          "systemInfo.networkType": e.networkType
        });
      },
      fail: function (e) {
        n.setData({
          "systemInfo.networkType": "无法获取"
        });
      }
    });
  },
  speedConversion: function (e) {
    var n = this,
      t = n.data.speedTypeList,
      s = "0M宽带",
      a = (e / 1024).toFixed(2);
    n.setData({
      speedAsMb: a
    });
    for (var o = 0; o < t.length; o++) e >= t[o].min && (s = t[o].name);
    n.setData({
      speedAsType: s
    });
  },
  onShareAppMessage: function (e) {
    return {
      title: "网速测试工具",
      path: "/pages/my_module/networkSpeed/networkSpeed"
    };
  },
  onShareTimeline: function (e) {
    return {
      title: "网速测试工具",
      path: "/pages/my_module/networkSpeed/networkSpeed"
    };
  }
});