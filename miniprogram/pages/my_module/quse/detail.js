var t = Object.assign || function (t) {
    for (var o = 1; o < arguments.length; o++) {
      var n = arguments[o];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  },
  o = require("storage.js");

! function (t) {
  t && t.__esModule;
}(require("lodash.js"));

Page({
  data: {
    iPhoneX: getApp().iPhoneX,
    collected: !1,
    visible: !1
  },
  onLoad: function (n) {
    var a = this;
    this.setData(t({}, n, {
      color: JSON.parse(n.color)
    }), function () {
      var t = (0, o.getStorage)(),
        n = a.data.color.id;
      t.map(function (t) {
        t.id == n && a.setData({
          collected: !0
        });
      });
    });
  },
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {
    return {
      title: "点击即可复制该颜色",
      path: "detail?color=" + JSON.stringify(this.data.color) + "&share=1"
    };
  },
  onCopyTap: function (t) {
    wx.setClipboardData({
      data: t.currentTarget.dataset.item
    });
  },
  onDeleteTap: function () {
    var t = this;
    wx.showModal({
      content: "确定删除该颜色吗？",
      success: function (n) {
        n.confirm && (0, o.delStorage)(t.data.color, function () {
          wx.switchTab({
            url: "/pages/index/index"
          });
        });
      }
    });
  },
  onCollectTap: function () {
    var t = this;
    (0, o.putStorage)(this.data.color, function () {
      t.setData({
        collected: !0
      });
    });
  },
  onGoHomeTap: function () {
    wx.switchTab({
      url: "/pages/index/index"
    });
  }
});