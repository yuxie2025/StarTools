const CryptoJS = require("utils/aes_util.js")
Page({
  data: {
    bannerUnitId: getApp().globalData.bannerUnitId,
    orgText: "",
    textCount: 0,
    secret: "",
    fullFeature: 0,
    org: 1,
    showPassword: 0
  },
  qjm: function (t) {
    wx.navigateTo({
      url: "./decrypt"
    });
  },
  onLoad: function (t) {
  },
  enc: function (t) {
    var e = this.data.orgText;
    if (0 != e.length) {
      var n = this.data.secret;
      if (n && 0 != n.length)
        if (!n.match(/\d/) && !n.match(/[a-zA-Z]/) && !n.match("_") || n.length < 6 || n.length > 16) wx.showModal({
          title: "提示",
          content: "密钥长度需要6-16个字符，只能包含英文字母，数字或字符'_'",
          showCancel: !1,
          success: function (t) {}
        });
        else {
          for (var o = [], s = 0; s < 16; s++) s < n.length ? o.push(n.charCodeAt(s)) : o.push(0);
          let encrypt = CryptoJS.AesEncryptECB(e, o);
          this.setData({
            encText: encrypt,
            org: 0
          });
        }
      else wx.showModal({
        title: "提示",
        content: "密钥不能为空",
        showCancel: !1,
        success: function (t) {}
      });
    } else wx.showModal({
      title: "提示",
      content: "待加密内容为空",
      showCancel: !1,
      success: function (t) {}
    });
  },
  back: function (t) {
    this.setData({
      org: 1
    });
  },
  copyToClipBoard: function (t) {
    wx.setClipboardData({
      data: this.data.encText,
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
        var a = e.data.orgText + t.data;
        a.length > 500 && (a = a.substr(0, 500)), e.setData({
          orgText: a,
          textCount: a.length
        });
      }
    });
  },
  onClean: function (t) {
    this.setData({
      orgText: "",
      textCount: 0
    });
  },
  onInput: function (t) {
    var e = t.detail.value;
    this.setData({
      orgText: e,
      textCount: e.length
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
      title: "文本加密工具",
      path: "/pages/my_module/crypt/crypt"
    };
  },
  onShareTimeline: function (t) {
    return {
      title: "文本加密工具",
      path: "/pages/my_module/crypt/decrypt"
    };
  },

});