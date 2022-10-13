const CryptoJS = require("utils/aes_util.js")
Page({
  data: {
    bannerUnitId: getApp().globalData.bannerUnitId,
    encText: "",
    secret: "",
    org: 1,
    showPassword: 0
  },
  onLoad: function (t) {
    t.enctext && this.setData({
      encText: t.enctext
    });
  },
  qjm: function (t) {
    wx.navigateTo({
      url: "./crypt"
    });
  },
  dec: function (t) {
    var e = this.data.encText;
    if (0 != e.length) {
      var n = this.data.secret;
      if (n && 0 != n.length) {
        for (var o = [], s = 0; s < 16; s++) s < n.length ? o.push(n.charCodeAt(s)) : o.push(0);
        let dncrypt = CryptoJS.AesDecryptECB(e, o);
        this.setData({
          decText: dncrypt,
          org: 0
        });
      } else {
        wx.showModal({
          title: "提示",
          content: "密钥不能为空",
          showCancel: !1,
          success: function (t) {}
        })
      };
    } else {
      wx.showModal({
        title: "提示",
        content: "待解密内容为空",
        showCancel: !1,
        success: function (t) {}
      })
    };
  },
  showPassword: function (t) {
    var e = this.data.showPassword;
    this.setData({
      showPassword: !e
    });
  },
  copyToClipBoard: function (t) {
    wx.setClipboardData({
      data: this.data.decText,
      success: function (t) {
        wx.getClipboardData({
          success: function (t) {
            console.log(t.data);
          }
        });
      }
    });
  },
  onPaste: function (t) {
    var e = this;
    wx.getClipboardData({
      success: function (t) {
        var a = e.data.encText + t.data;
        e.setData({
          encText: a
        });
      }
    });
  },
  onClean: function (t) {
    this.setData({
      encText: ""
    });
  },
  onInput: function (t) {
    var e = t.detail.value;
    this.setData({
      encText: e
    });
  },
  onSecret: function (t) {
    var e = t.detail.value;
    this.setData({
      secret: e
    });
  },
  showPassword: function (t) {
    var e = this.data.showPassword;
    this.setData({
      showPassword: !e
    });
  },
  onShareAppMessage: function () {
    return {
      title: "文本解密工具",
      path: "/pages/my_module/crypt/decrypt"
    };
  },
  onShareTimeline: function (t) {
    return {
      title: "文本解密工具",
      path: "/pages/my_module/crypt/decrypt"
    };
  },
});