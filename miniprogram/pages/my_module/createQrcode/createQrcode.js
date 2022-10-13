var t = function (t) {
  return t && t.__esModule ? t : {
    default: t
  };
}(require("./weapp.qrcode.js"));

Page({
  data: {
    bannerUnitId: getApp().globalData.bannerUnitId,
    canvasInfo: {
      id: "mycanvas",
      width: 200,
      height: 200
    },
    QrcodeInfo: {
      text: "",
      background: "#ffffff",
      foreground: "#000000"
    },
    systemInfo: {
      width: 320,
      height: 568
    },
    color_array: ["白", "黑", "红", "橙", "黄", "绿", "青", "蓝", "紫"],
    color: ["#ffffff", "#000000", "#ff0000", "#ff8800", "#ffff00", "#00ff00", "#00fff0", "#0000ff", "#ff00ff"],
    foreColorIndex: 1,
    bgColorIndex: 0
  },
  onLoad: function (t) {
    var e = this;
    wx.getSystemInfo({
      success: function (t) {
        e.setData({
          "systemInfo.width": t.windowWidth,
          "systemInfo.height": t.windowHeight,
          "canvasInfo.width": t.windowWidth / 2,
          "canvasInfo.height": t.windowWidth / 2
        });
      }
    }), this.saveAndGetData("", !0);
  },
  onShow: function (e) {
    var a = this;
    this.saveAndGetData("", !0);
    var o = a.data.QrcodeInfo,
      n = a.data.canvasInfo;
    "" == o.text && (o.text = "一个木函"), (0, t.default)({
      width: n.width,
      height: n.height,
      canvasId: n.id,
      text: o.text,
      foreground: o.foreground,
      background: o.background
    });
  },
  selectForeColor: function (t) {
    var e = this,
      a = e.data.color;
    e.setData({
      foreColorIndex: t.detail.value,
      "QrcodeInfo.foreground": a[t.detail.value]
    });
  },
  selectBgColor: function (t) {
    var e = this,
      a = e.data.color;
    e.setData({
      bgColorIndex: t.detail.value,
      "QrcodeInfo.background": a[t.detail.value]
    });
  },
  createQrcode: function (e) {
    var a = this,
      o = e.detail.value.canvasWidth,
      n = a.data.QrcodeInfo,
      d = a.data.canvasInfo,
      r = e.detail.value.text;
    d.width = o, d.height = o, a.setData({
      canvasInfo: d,
      "QrcodeInfo.text": r
    }), (0, t.default)({
      width: d.width,
      height: d.height,
      canvasId: d.id,
      text: r,
      foreground: n.foreground,
      background: n.background
    }), this.saveAndGetData(r, !1);
  },
  saveAndGetData: function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      e = this;
    0 == (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) ? wx.setStorage({
      key: "createQrcode_text",
      data: t
    }) : wx.getStorage({
      key: "createQrcode_text",
      success: function (t) {
        e.setData({
          "QrcodeInfo.text": t.data
        });
      }
    });
  },
  inputSave: function (t) {
    this.saveAndGetData(t.detail.value, !1);
  },
  previewImage: function (t) {
    var e = this,
      a = e.data.canvasInfo;
    wx.canvasToTempFilePath({
      canvasId: a.id,
      success: function (t) {
        var e = t.tempFilePath,
          a = [];
        a.push(e), wx.previewImage({
          urls: a
        });
      }
    }, e);
  },
  onShareAppMessage: function (t) {
    return {
      title: "明星工具箱--二维码生成器",
      path: "/pages/my_module/createQrcode/createQrcode"
    };
  },
  onShareTimeline: function () {},
});