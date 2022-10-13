getApp();
Page({
  data: {
    bannerUnitId: getApp().globalData.bannerUnitId,
    l1: 0,
    l2: 0,
    l3: "1990年1月",
    l4: "1990-01",
    l5: "life_time",
    l6: 0
  },
  onLoad: function (t) {
    var i = this;
    wx.getStorage({
      key: this.data.l5,
      success: function (t) {
        i.setData({
          l6: t.data
        });
      }
    });
    var e = 74 * wx.getSystemInfoSync().windowWidth / 75,
      n = parseInt((e - 2) / 30);
    e = 30 * n + 2, this.setData({
      l1: e,
      singleWidth: n
    });
  },
  onReady: function () {
    var t = wx.getStorageSync("lift_time_birth_date");
    t && t.length > 0 ? this.processDate(t, !1) : this.drawGrid(0);
  },
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {
    this.currentNum = this.monthNum, this.isAnimating = !1;
  },
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {
    return {
      title: "一生时间",
      path: "/pages/my_module/life_time/life_time"
    };
  },
  onShareTimeline: function (t) {
    return {
      title: "一生时间",
      path: "/pages/my_module/life_time/life_time"
    };
  },
  drawGrid: function (t) {
    var i = this.data.l1,
      e = this.data.singleWidth,
      n = wx.createCanvasContext("canvas-grid");
    if (n.setFillStyle("#8ac6d1"), t > 0)
      for (var a = 0; a < 30; a++) {
        for (var r = !1, s = 0; s < 30; s++)
          if (n.fillRect(s * e + 1, a * e + 1, e, e),
            30 * a + s >= t - 1) {
            r = !0;
            break;
          }
        if (r) break;
      }
    for (n.setStrokeStyle("#999"), n.strokeRect(0, 0, i, i), a = 0; a < 30; a++)
      for (s = 0; s < 30; s++) n.strokeRect(s * e + 1, a * e + 1, e, e);
    n.draw();
  },
  drawGridWithAnim: function () {
    var t = this;
    this.drawGrid(this.currentNum), this.currentNum != this.monthNum ? setTimeout(function () {
      t.isAnimating = !0, t.currentNum > t.monthNum ? t.currentNum = t.currentNum - 1 : t.currentNum = t.currentNum + 1,
        t.drawGridWithAnim();
    }, 40) : this.isAnimating = !1;
  },
  bindDateChange: function (t) {
    console.log("picker value=", t.detail.value), this.processDate(t.detail.value, !0);
  },
  processDate: function (t, i) {
    var e = new Date(),
      n = e.getFullYear(),
      a = e.getMonth() + 1;
    console.log(n + ":" + a);
    var r = t.split("-"),
      s = parseInt(r[0]),
      o = parseInt(r[1]);
    if (console.log(s + ":" + o), s > n || s == n && o > a) this.showModal("所选时间超过当前时间");
    else {
      var h = 12 * (n - s) + (a - o);
      console.log(h), h >= 720 && i && !this.shownWish && (this.showModal("祝愿身体健康"), this.shownWish = !0),
        h > 900 && (h = 900), i ? (this.currentNum || (this.currentNum = 0), this.monthNum = h,
          this.isAnimating || this.drawGridWithAnim()) : (this.monthNum = this.currentNum = h,
          this.drawGrid(h)), this.setData({
          l4: t,
          l3: this.formatDateText(t)
        }), wx.setStorage({
          key: "lift_time_birth_date",
          data: t
        });
    }
  },
  formatDateText: function (t) {
    return (t = t.split("-"))[0] + "年" + parseInt(t[1]) + "月";
  },
  showModal: function (t) {
    wx.showModal({
      title: "温馨提示",
      content: t,
      showCancel: !1
    });
  }
});