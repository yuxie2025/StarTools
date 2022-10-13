Page({
  data: {
    width: 0,
    height: 0,
    coefficient: 56.3
  },
  onLoad: function (e) {
    var t = this;
    wx.getStorage({
      key: "coefficient",
      success: function (e) {
        t.setData({
          coefficient: e.data
        });
      }
    }), wx.getSystemInfo({
      success: function (e) {
        t.setData({
          width: e.windowWidth,
          height: e.windowHeight
        }), t.drawRuler(e.windowWidth, e.windowHeight, t.data.coefficient);
      }
    });
  },
  drawRuler: function (e, t, i) {
    for (var a = this, o = t / i + 1, s = wx.createCanvasContext("ruler", a), n = 0; n < 2; n++) {
      1 == n && (s.translate(e, t), s.rotate(180 * Math.PI / 180)), s.setStrokeStyle("#08e037"),
        s.setLineWidth(1);
      for (var r = 0; r < o; r++) {
        var c = 10 + r * i;
        s.save(), s.moveTo(0, c), s.lineTo(30, c), s.setFontSize(10), s.setTextBaseline("middle"),
          s.setFillStyle("#08e037"), s.fillText(r, 35, c), s.moveTo(0, c + i / 2), s.lineTo(20, c + i / 2),
          s.restore();
        for (var f = 0; f < 10; f++) 4 != f && (s.save(), s.moveTo(0, c + (f + 1) * i / 10),
          s.lineTo(10, c + (f + 1) * i / 10), s.restore());
      }
      s.stroke();
    }
    s.draw();
  },
  changeCoefficient: function (e) {
    this.setData({
      coefficient: e.detail.value
    }), wx.setStorage({
      key: "coefficient",
      data: e.detail.value
    }), this.drawRuler(this.data.width, this.data.height, e.detail.value);
  },
  reset: function (e) {
    this.setData({
      coefficient: 56.3
    })
    wx.setStorage({
      key: "coefficient",
      data: 56.3
    }), this.drawRuler(this.data.width, this.data.height, 56.3);
  },
  onShareAppMessage: function (e) {
    return {
      title: "明星工具箱--尺子",
      path: "/pages/my_module/ruler/ruler"
    };
  },
  onShareTimeline: function () {},
});