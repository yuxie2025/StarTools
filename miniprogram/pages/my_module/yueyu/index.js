function t(t) {
  return t && t.__esModule ? t : {
    default: t
  };
}

function a(t, a, e) {
  return a in t ? Object.defineProperty(t, a, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[a] = e, t;
}

var e = Object.assign || function (t) {
    for (var a = 1; a < arguments.length; a++) {
      var e = arguments[a];
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
  },
  o = t(require("./md5.js")),
  n = t(require("./share.js")),
  i = require("./tools.js");

getApp();

Page(e({}, n.default, {
  data: {
    isRelease: true,
    bannerUnitId: getApp().globalData.bannerUnitId,
    translatedWord: "",
    oldWord: "",
    textLength: 0,
    translateType: ["zh", "yue"],
    originAudioPlaying: !1,
    resultAudioPlaying: !1,
    showShare: !1
  },
  audioContext: null,
  onLoad: function (t) {
    this.setData({
      isRelease: getApp().globalData.isRelease
    })
  },
  onReady: function () {
    this.audioContext = wx.createInnerAudioContext(), this.audioContext.autoplay = !0;
  },
  hideShare: function () {
    this.setData({
      showShare: !1
    });
  },
  onHide: function () {},
  onUnload: function () {},
  textAreaInput: function (t) {
    this.setData({
      textLength: t.detail.value.length,
      oldWord: t.detail.value
    });
  },
  clearWord: function () {
    this.setData({
      translatedWord: "",
      oldWord: "",
      textLength: 0
    });
  },
  changeTranslateType: function () {
    var t = this.data.translateType;
    t.reverse(), this.setData({
      translateType: t
    });
  },
  translateWord: function (t) {
    wx.showLoading({
      title: "翻译中"
    });
    var a = this,
      e = t.detail.value.translateWord,
      n = "20191013000341080",
      i = new Date().getTime(),
      s = n + e + i + "OZWYScaZxGfXm1CWuPKB",
      d = (0,
        o.default)(s);
    wx.request({
      url: "https://api.fanyi.baidu.com/api/trans/vip/translate",
      dataType: "POST",
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      data: {
        q: e,
        appid: n,
        salt: i,
        from: a.data.translateType[0],
        to: a.data.translateType[1],
        sign: d
      },
      success: function (t) {
        wx.hideLoading({
          complete: function (t) {}
        });
        var e = JSON.parse(t.data);
        a.setData({
          translatedWord: e.trans_result[0].dst
        }), a.handleSoundPlay1();
      },
      fail: function (t) {
        wx.showToast({
          title: "请稍后再重试",
          icon: "none"
        });
      }
    });
  },
  translateMap: {
    zh: {
      lan: "zh",
      spd: 5,
      source: "web"
    },
    yue: {
      lan: "cte",
      spd: 3,
      source: "web"
    }
  },
  handleSoundPlay1: function (t) {
    var e = this,
      o = "result",
      n = this.data,
      s = n.translateType,
      d = n.translatedWord,
      r = (n.oldWord, {});
    if ((r = this.translateMap[s[1]]).text = encodeURI(d), !r.text) return !1;
    var u = "https://fanyi.baidu.com/gettts?" + (0, i.assemblyObjToStr)(r);
    this.audioContext.src === u ? this.audioContext.play() : this.audioContext.src = u;
    var l = this;
    this.audioContext.play(), this.audioContext.onPlay(function () {
      console.log(o), e.setData(a({}, o + "AudioPlaying", !0), function () {
        wx.vibrateLong({}), l.audioContext.offPlay();
      });
    }), this.audioContext.onEnded(function () {
      e.setData(a({}, o + "AudioPlaying", !1), function () {
        e.audioContext.src = "", e.audioContext.stop(), l.audioContext.offEnded();
      });
    }), this.audioContext.onStop(function () {
      e.setData(a({}, o + "AudioPlaying", !1), function () {
        e.audioContext.src = "", e.audioContext.stop(), l.audioContext.offStop();
      });
    });
  },
  handleSoundPlay: function (t) {
    var e = this,
      o = t.currentTarget.dataset.type,
      n = this.data,
      s = n.translateType,
      d = n.translatedWord,
      r = n.oldWord,
      u = {};
    switch (o) {
      case "origin":
        (u = this.translateMap[s[0]]).text = encodeURI(r);
        break;

      case "result":
        (u = this.translateMap[s[1]]).text = encodeURI(d);
    }
    if (!u.text) return !1;
    var l = "https://fanyi.baidu.com/gettts?" + (0, i.assemblyObjToStr)(u);
    this.audioContext.src === l ? this.audioContext.play() : this.audioContext.src = l;
    var c = this;
    this.audioContext.play(), this.audioContext.onPlay(function () {
      console.log(o), e.setData(a({}, o + "AudioPlaying", !0), function () {
        wx.vibrateLong({}), c.audioContext.offPlay();
      });
    }), this.audioContext.onEnded(function () {
      e.setData(a({}, o + "AudioPlaying", !1), function () {
        e.audioContext.src = "", e.audioContext.stop(), c.audioContext.offEnded();
      });
    }), this.audioContext.onStop(function () {
      e.setData(a({}, o + "AudioPlaying", !1), function () {
        e.audioContext.src = "", e.audioContext.stop(), c.audioContext.offStop();
      });
    });
  },
  copyTranslatedWord: function () {
    console.log(this.data.translatedWord), this.data.translatedWord && wx.setClipboardData({
      data: this.data.translatedWord,
      success: function () {
        wx.showToast({
          title: "已复制至粘贴板"
        });
      }
    });
  },
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {
    return {
      title: "粤语翻译",
      path: "/pages/my_module/yueyu/index"
    };
  },
  onShareTimeline: function (t) {
    return {
      title: "粤语翻译",
      path: "/pages/my_module/yueyu/index"
    };
  }
}));