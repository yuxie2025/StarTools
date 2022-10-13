getApp(), Page({
  data: {
    isRelease: true,
    isTake: !1,
    show: !1,
    isAuth: wx.getStorageSync("isAuth")
  },
  move: function (t) {
    var a = this.cxt,
      i = this.w,
      e = this.h,
      s = t.touches[0].y;
    a.clearRect(0, 0, i, e);
    var h = Math.atan((s - e / 2) / t.touches[0].x);
    this.n = h / Math.PI * 180, a.translate(.04 * i, e / 2), a.moveTo(0, 0), a.lineTo(.84 * i * Math.cos(h), .84 * i * Math.sin(h)),
      a.stroke(), a.beginPath(), a.arc(.87 * i * Math.cos(h), .87 * i * Math.sin(h), .03 * i, 0, 2 * Math.PI),
      a.stroke(), a.fillStyle = "rgba(255, 255, 255, 0.5)", a.fill(), a.moveTo(.9 * i * Math.cos(h), .9 * i * Math.sin(h)),
      a.lineTo(.95 * i * Math.cos(h), .95 * i * Math.sin(h)), a.stroke(), a.rotate(.5 * Math.PI),
      a.textAlign = "center", a.fillStyle = "#000", a.font = "bold 30px Arial", a.fillText((90 + this.n).toFixed(1) + "°", 0, .4 * -i),
      a.font = "bold 20px Arial", a.fillText("(" + (90 - this.n).toFixed(1) + "°)", 0, .3 * -i),
      a.draw();
  },
  drawbg: function () {
    var t = this.bgcanvas,
      a = this.w,
      i = this.h;
    t.save(), t.translate(.04 * a, i / 2), t.fillStyle = "rgba(255,255,255,0.5)", t.arc(0, 0, .8 * a, .5 * Math.PI, 1.5 * Math.PI, !0),
      t.closePath(), t.stroke(), t.fill(), t.beginPath(), t.fillStyle = "#000", t.arc(0, 0, 5, 0, 2 * Math.PI, !0),
      t.fill();
    for (var e = Math.PI / 180, s = 1; s < 181; s++) t.beginPath(), t.rotate(e), s % 10 == 0 && 180 !== s ? (t.moveTo(0, .73 * -a),
        t.textAlign = "center", t.font = "bold 12px Arial", t.fillText(s, 0, .68 * -a)) : s % 5 == 0 ? t.moveTo(0, .75 * -a) : t.moveTo(0, .77 * -a),
      t.lineTo(0, .8 * -a), t.stroke();
    t.restore(), t.draw();
  },
  drawPointer: function () {
    var t = this.cxt,
      a = this.w,
      i = this.n;
    t.moveTo(0, 0), t.lineTo(.84 * a * Math.cos(i / 180 * Math.PI), .84 * a * Math.sin(i / 180 * Math.PI)),
      t.stroke(), t.beginPath(), t.arc(.87 * a * Math.cos(i / 180 * Math.PI), .87 * a * Math.sin(i / 180 * Math.PI), .03 * a, 0, 2 * Math.PI),
      t.stroke(), t.fillStyle = "rgba(255, 255, 255, 0.5)", t.fill(), t.moveTo(.9 * a * Math.cos(i / 180 * Math.PI), .9 * a * Math.sin(i / 180 * Math.PI)),
      t.lineTo(.95 * a * Math.cos(i / 180 * Math.PI), .95 * a * Math.sin(i / 180 * Math.PI)),
      t.stroke(), t.font = "bold 30px Arial", t.textAlign = "center", t.fillStyle = "#000",
      t.rotate(.5 * Math.PI), t.fillText((90 + i).toFixed(1) + "°", 0, .4 * -a), t.font = "bold 20px Arial",
      t.fillText("(" + (90 - i).toFixed(1) + "°)", 0, .3 * -a), t.draw();
  },
  reset: function () {
    this.bgcanvas.drawImage("BackGround.jpg", 0, 0, 400, 1e3, 0, 0, this.width, this.h),
      this.drawbg(), this.setData({
        show: !1,
        isTake: !1
      });
  },
  close: function () {
    this.setData({
        show: !1
      }), this.bgcanvas.drawImage("BackGround.jpg", 0, 0, 400, 1e3, 0, 0, this.width, this.h),
      this.drawbg();
  },
  show: function () {
    var t = this;
    !1 !== wx.getStorageSync("isAuth") ? (!0 === wx.getStorageSync("isAuth") && (this.setData({
      show: !0
    }), this.bgcanvas.clearRect(0, 0, this.width, this.h), this.drawbg()), "" === wx.getStorageSync("isAuth") && wx.authorize({
      scope: "scope.camera",
      success: function () {
        t.setData({
          show: !0,
          isAuth: !0
        }), wx.getSetting({
          success: function (t) {
            wx.setStorageSync("isAuth", t.authSetting["scope.camera"]);
          }
        }), t.bgcanvas.clearRect(0, 0, t.width, t.h), t.drawbg();
      },
      fail: function () {
        wx.setStorageSync("isAuth", !1);
      }
    })) : wx.openSetting({
      success: function (t) {
        wx.setStorageSync("isAuth", t.authSetting["scope.camera"]);
      }
    });
  },
  takePhoto: function (t) {
    var a = this;
    this.data.isTake ? (this.bgcanvas.clearRect(0, 0, this.width, this.h), this.drawbg(),
      this.setData({
        show: !0,
        isTake: !1
      })) : wx.createCameraContext().takePhoto({
      quality: "high",
      success: function (t) {
        a.bgcanvas.drawImage(t.tempImagePath, 0, 0, a.width, a.h), a.drawbg(), a.setData({
          show: !1,
          isTake: !0
        });
      }
    });
  },
  toint: function (t) {
    var a = this.cxt,
      i = this.w,
      e = this.h;
    this.n = Math.round(this.n), a.clearRect(0, 0, i, e), a.translate(.04 * i, e / 2),
      this.drawPointer();
  },
  onLoad: function () {
    this.setData({
      isRelease: getApp().globalData.isRelease
    })
    wx.showShareMenu(), this.n = 0;
    var t = wx.getSystemInfoSync();
    t.windowHeight > 1.6 * t.windowWidth ? this.w = .8 * t.windowWidth : this.w = t.windowHeight / 2,
      this.h = t.windowHeight, this.width = t.windowWidth, this.cxt = wx.createCanvasContext("secCanvas"),
      this.bgcanvas = wx.createCanvasContext("firstCanvas"), this.bgcanvas.drawImage("BackGround.jpg", 0, 0, 400, 1e3, 0, 0, this.width, this.h),
      this.cxt.translate(.04 * this.w, this.h / 2), this.drawbg(), this.drawPointer();
  },
  jumpMeasure: function () {
    wx.navigateBack();
  },
  onShareAppMessage: function () {
    return {
      title: "量角器",
      path: "/pages/my_module/protractor/protractor"
    };
  },
  onShareTimeline: function (t) {
    return {
      title: "量角器",
      path: "/pages/my_moduleprotractor/protractor"
    };
  }
});