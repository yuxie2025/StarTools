Page({
  data: {
    isRelease: true,
    block: {},
    randNum: "",
    score: 0,
    time: 30,
    isHidden: !0
  },
  onLoad: function (t) {
    this.setData({
      isRelease: getApp().globalData.isRelease
    })
    this.createBlock(0);
    this.stop();
  },
  main: function () {
    wx.switchTab({
      url: "../main/main"
    });
  },
  again: function () {
    wx.redirectTo({
      url: "../blind/blind"
    });
  },
  stop: function () {
    var t = this,
      n = setInterval(function () {
        if (t.data.time > 0) {
          var a = t.data.time;
          a -= 1, t.setData({
            time: a
          });
        } else clearInterval(n), t.setData({
          isHidden: !1
        });
      }, 1e3);
  },
  createBlock: function (t) {
    var n = [2, 3, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9],
      a = t < n.length ? n[t] : 9,
      o = Math.pow(a, 2),
      e = this.createColor(a),
      i = e[1],
      r = e[0];
    r = "rgb(" + (r = r.map(function (t) {
      return t + 15 * Math.max(9 - a, 1);
    })).join(",") + ")";
    var c = new Array(o).fill(i),
      d = Math.floor(Math.random() * o);
    c[d] = r, this.setData({
      block: {
        lv: a,
        color: c
      },
      randNum: d
    });
  },
  createColor: function (t) {
    var n;
    n = 15 * Math.max(9 - t, 1);
    var a = [Math.round(Math.random() * (255 - n)), Math.round(Math.random() * (255 - n)), Math.round(Math.random() * (255 - n))];
    return [a, "rgb(" + a.join(",") + ")"];
  },
  nextBlock: function (t) {
    if (t.currentTarget.dataset.id == this.data.randNum) {
      var n = this.data.score + 1;
      this.setData({
        score: n
      }), this.createBlock(n);
    }
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {
    return {
      title: "色盲测试",
      path: "/pages/my_module/blind/blind"
    };
  },
  onShareTimeline: function (t) {
    return {
      title: "色盲测试",
      path: "/pages/my_module/blind/blind"
    };
  }
});