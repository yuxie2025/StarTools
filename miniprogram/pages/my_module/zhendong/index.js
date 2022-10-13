getApp(), Page({
  data: {
    isRelease: true,
    an: !1,
    botton: !1,
    timer: "",
    timer1: "",
    timer2: "",
    timer3: "",
    isCollect1: !1,
    isCollect2: !1,
    isCollect3: !1
  },
  toCollect1: function () {
    var t = this.data.isCollect1;
    console.log(t), 0 == t ? (this.data.isCollect1 = !0, this.data.isCollect2 = !1,
      this.data.isCollect3 = !1, clearTimeout(this.data.timer2), clearTimeout(this.data.timer3),
      0 == this.data.an && (this.data.an = !0, this.an(), this.setData({
        bottonStatus: "开"
      })), this.setData({
        isCollect1: this.data.isCollect1,
        isCollect2: this.data.isCollect2,
        isCollect3: this.data.isCollect3
      }), this.startBtn1()) : (this.data.isCollect1 = !1, this.setData({
      isCollect1: this.data.isCollect1
    }), this.pauseBtn(), wx.redirectTo({
      url: "index?id=1"
    }));
  },
  toCollect2: function () {
    var t = this.data.isCollect2;
    console.log(t), 0 == t ? (this.data.isCollect2 = !0, this.data.isCollect1 = !1,
      this.data.isCollect3 = !1, clearTimeout(this.data.timer1), clearTimeout(this.data.timer3),
      0 == this.data.an && (this.data.an = !0, this.an(), this.setData({
        bottonStatus: "开"
      })), this.setData({
        isCollect1: this.data.isCollect1,
        isCollect2: this.data.isCollect2,
        isCollect3: this.data.isCollect3
      }), this.startBtn2()) : (this.data.isCollect2 = !1, this.setData({
      isCollect2: this.data.isCollect2
    }), this.pauseBtn(), wx.redirectTo({
      url: "index?id=1"
    }));
  },
  toCollect3: function () {
    var t = this.data.isCollect3;
    console.log(t), 0 == t ? (this.data.isCollect3 = !0, this.data.isCollect1 = !1,
      this.data.isCollect2 = !1, clearTimeout(this.data.timer1), clearTimeout(this.data.timer2),
      0 == this.data.an && (this.data.an = !0, this.an(), this.setData({
        bottonStatus: "开"
      })), this.setData({
        isCollect1: this.data.isCollect1,
        isCollect2: this.data.isCollect2,
        isCollect3: this.data.isCollect3
      }), this.startBtn3()) : (this.data.isCollect3 = !1, this.setData({
      isCollect3: this.data.isCollect3
    }), this.pauseBtn(), wx.redirectTo({
      url: "index?id=1"
    }));
  },
  onLoad: function (t) {
    this.setData({
      isRelease: getApp().globalData.isRelease
    })
    wx.setKeepScreenOn({
      keepScreenOn: !0
    }), this.setData({
      bottonStatus: "关"
    });
  },
  onUnload() {
    this.pauseBtn()
  },
  vibrate: function (t) {
    var a = this;
    if (console.log(a.data.botton), 1 == a.data.botton) a.data.botton = !1, a.setData({
      bottonStatus: "关"
    }), a.pauseBtn(), wx.redirectTo({
      url: "index?id=1"
    });
    else {
      a.data.botton = !0;
      var i = wx.createAnimation({
        duration: 500,
        timingFunction: "ease"
      });
      a.animation = i;
      var o = !0;
      setInterval(function () {
        o ? (i.translateX(5).step(), o = !o) : (i.translateX(-5).step(), o = !o), a.setData({
          animation: i.export()
        });
      }.bind(a), 100), a.setData({
        bottonStatus: "开"
      }), a.startBtn();
    }
  },
  an: function () {
    var t = this,
      a = wx.createAnimation({
        duration: 500,
        timingFunction: "ease"
      });
    t.animation = a;
    var i = !0;
    setInterval(function () {
      i ? (a.translateX(5).step(), i = !i) : (a.translateX(-5).step(), i = !i), t.setData({
        animation: a.export()
      });
    }.bind(t), 100);
  },
  startBtn: function () {
    console.log("开始按钮"), this.Countdown();
  },
  startBtn1: function () {
    console.log("开始按钮"), this.Countdown1();
  },
  Countdown1: function () {
    var t = this;
    this.data.timer1 = setTimeout(function () {
      console.log("----Countdown----"), wx.vibrateLong(), t.Countdown1();
    }, 600);
  },
  startBtn2: function () {
    console.log("开始按钮"), this.Countdown2();
  },
  Countdown2: function () {
    var t = this;
    this.data.timer2 = setTimeout(function () {
      console.log("----Countdown----"), wx.vibrateLong(), t.Countdown2();
    }, 400);
  },
  startBtn3: function () {
    console.log("开始按钮"), this.Countdown3();
  },
  Countdown3: function () {
    var t = this;
    this.data.timer3 = setTimeout(function () {
      console.log("----Countdown----"), wx.vibrateLong(), t.Countdown3();
    }, 300);
  },
  pauseBtn: function () {
    console.log("暂停按钮");
    clearTimeout(this.data.timer);
    clearTimeout(this.data.timer1);
    clearTimeout(this.data.timer2);
    clearTimeout(this.data.timer3);
    this.onLoad();
  },
  Countdown: function () {
    var t = this;
    this.data.timer = setTimeout(function () {
      console.log("----Countdown----"), wx.vibrateLong(), t.Countdown();
    }, 350);
  },
  onShareAppMessage: function (t) {
    return {
      title: "震动",
      path: "/pages/my_module/zhendong/index"
    };
  },
  onShareTimeline: function (t) {
    return {
      title: "震动",
      path: "/pages/my_module/zhendong/index"
    };
  }
});