Page({
  data: {
    bannerUnitId: getApp().globalData.bannerUnitId,
    imageInfo: [],
    direction: "vertical",
    canvasWidth: 0,
    canvasHeight: 0,
    systemHeight: 0,
    systemWidth: 0,
    showImage: {
      url: "",
      width: 0,
      height: 0
    },
    hidden: !1
  },
  onShareAppMessage: function () {},
  onShareTimeline: function () {},
  onLoad: function (t) {
    var e = this;
    e.setData({
      imageInfo: JSON.parse(t.imageInfo),
      direction: t.direction
    })
    wx.getSystemInfo({
      success: function (t) {
        e.setData({
          systemWidth: t.windowWidth,
          systemHeight: t.windowHeight
        });
      }
    })
    console.log(e.data.imageInfo)
    wx.showLoading({
      title: "处理中...",
      mask: !0
    }), e.connectImage();
  },
  connectImage: function () {
    var t = this,
      e = wx.createCanvasContext("draw", t),
      a = 0,
      i = 0,
      h = t.data.imageInfo;
    if ("vertical" == t.data.direction) {
      a = t.data.systemWidth;
      for (var n = 0, s = 0; n < h.length; n++) i += s = h[n].height * a / h[n].width;
      t.setData({
        canvasWidth: a,
        canvasHeight: i
      });
      for (var n = 0, s = 0, o = 0; n < h.length; n++) s = h[n].height * a / h[n].width,
        n > 0 && (o += h[n - 1].height * a / h[n - 1].width), e.drawImage(h[n].url, 0, o, a, s);
    } else {
      i = t.data.systemHeight;
      for (var n = 0, g = 0; n < h.length; n++) a += g = h[n].width * i / h[n].height;
      t.setData({
        canvasWidth: a,
        canvasHeight: i
      });
      for (var n = 0, g = 0, d = 0; n < h.length; n++) g = h[n].width * i / h[n].height,
        n > 0 && (d += h[n - 1].width * i / h[n - 1].height), e.drawImage(h[n].url, d, 0, g, i);
    }
    e.draw(), setTimeout(function (e) {
      wx.canvasToTempFilePath({
        canvasId: "draw",
        success: function (e) {
          console.log(e.tempFilePath), t.setData({
            "showImage.url": e.tempFilePath,
            hidden: !0
          }), t.setShowImage(e.tempFilePath), wx.hideLoading();
        }
      }, t);
    }, 500);
  },
  previewImage: function (t) {
    var e = this,
      a = [];
    a.push(e.data.showImage.url), wx.previewImage({
      current: a[0],
      urls: a
    });
  },
  setShowImage: function (t) {
    var e = this,
      a = e.data.direction,
      i = 0,
      h = 0;
    wx.getSystemInfo({
      success: function (n) {
        wx.getImageInfo({
          src: t,
          success: function (t) {
            if ("vertical" == a) {
              s = .93;
              i = n.windowWidth * s, h = n.windowWidth / t.width * t.height * s;
            } else {
              var s = .5;
              h = n.windowHeight * s, i = n.windowHeight / t.height * t.width * s;
            }
            e.setData({
              "showImage.width": i,
              "showImage.height": h
            });
          }
        });
      }
    });
  }
});