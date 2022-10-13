var t = Object.assign || function(t) {
    for (var i = 1; i < arguments.length; i++) {
        var e = arguments[i];
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
}, i = require("util.js");

Page({
    data: {
        iPhoneX: getApp().iPhoneX,
        path: "http://sinacloud.net/development/snapshot.5.32.43.png",
        pixels: [],
        dpr: 2,
        toolWidth: 70,
        toolHeight: 70,
        biggerWidth: 36,
        biggerHeight: 36,
        biggerRatio: 2.5,
        sourceImageWidth: 0,
        sourceImageHeight: 0,
        x: 170,
        y: 200,
        color: {
            hex: "#FFFFFF"
        }
    },
    prev: Date.now(),
    onLoad: function(t) {
        var i = this, e = this;
        wx.createSelectorQuery().select("#magnifier").boundingClientRect(function(t) {
            e.setData({
                toolWidth: t.width,
                toolHeight: t.height
            });
        }).exec(), wx.createSelectorQuery().select("#bigger").boundingClientRect(function(t) {
            e.setData({
                biggerWidth: t.width,
                biggerHeight: t.height
            });
        }).exec(), this.setData(t, function() {
            i.loadBoardInfo(function() {
                i.ctx = wx.createCanvasContext("bigger", i), i.loadBiggerInfo(0, 0);
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    shiftSize: function(t) {
        return t / this.data.dpr;
    },
    loadBoardInfo: function(t) {
        var i = this;
        wx.getSystemInfo({
            success: function(e) {
                i.setData({
                    pixelRatio: e.pixelRatio,
                    dpr: 750 / e.windowWidth
                });
                e.pixelRatio;
                var a = e.windowWidth, o = e.windowHeight - i.shiftSize(320) - (i.data.iPhoneX ? i.shiftSize(68) : 0), h = (o - i.data.toolHeight) / (a - i.data.toolWidth);
                wx.getImageInfo({
                    src: i.data.path,
                    success: function(e) {
                        var n = e.height / e.width, g = 0, s = 0;
                        h < n ? (s = parseInt(o - i.data.toolHeight), g = parseInt(s * e.width / e.height)) : (g = parseInt(a - i.data.toolWidth), 
                        s = parseInt(g * e.height / e.width));
                        var r = g + i.data.toolWidth, d = s + i.data.toolHeight;
                        i.setData({
                            path: e.path,
                            width: e.width,
                            height: e.height,
                            imageWidth: g,
                            imageHeight: s,
                            sourceImageHeight: e.height,
                            sourceImageWidth: e.width,
                            movreaWidth: r,
                            movreaHeight: d,
                            x: r / 2 - i.data.toolWidth / 2,
                            y: d / 2 - i.data.toolHeight / 2
                        }, function() {
                            t && t();
                        });
                    }
                });
            }
        });
    },
    loadBiggerInfo: function(t, e) {
        var a = this, o = this.data.biggerWidth / this.data.biggerRatio, h = this.data.biggerHeight / this.data.biggerRatio;
        this.ctx.drawImage(this.data.path, t, e, o, h, 0, 0, this.data.biggerWidth, this.data.biggerHeight), 
        this.ctx.draw(), wx.canvasGetImageData({
            canvasId: "bigger",
            x: this.data.biggerWidth / 2,
            y: this.data.biggerHeight / 2,
            width: 1,
            height: 1,
            success: function(t) {
                console.log(t), a.setData({
                    color: {
                        rgb: t.data,
                        hex: (0, i.rgb2hex)(t.data)
                    }
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    onTouchEnd: function(t) {
        this._touchMove({
            detail: {
                x: this.tx,
                y: this.ty
            }
        }, !0);
    },
    onTouchMove: function(t) {
        this.tx = t.detail.x, this.ty = t.detail.y, this._touchMove(t, !1);
    },
    _touchMove: function(t, i) {
        var e = Date.now();
        if (i || this.prev && e - this.prev >= 10) {
            this.sx = t.detail.x, this.sy = t.detail.y;
            var a = this.data.biggerWidth / this.data.biggerRatio / 2, o = this.data.biggerHeight / this.data.biggerRatio / 2;
            console.log(a), console.log(o);
            var h = this.sy * (this.data.sourceImageHeight / this.data.imageHeight) - o, n = this.sx * (this.data.sourceImageWidth / this.data.imageWidth) - a;
            this.sx = n, this.sy = h, this.loadBiggerInfo(n, h), this.prev = Date.now();
        }
    },
    onSave: function(t) {
        var i = this;
        wx.getStorage({
            key: "colors",
            success: function(e) {
                i.onStorage(e.data, t);
            },
            fail: function(e) {
                i.onStorage([], t);
            }
        });
    },
    onStorage: function(t, i) {
        t.push(i), wx.setStorage({
            key: "colors",
            data: t
        });
    },
    onSubmit: function() {
        var e = this.data.color.rgb, a = (0, i.currentTime)(), o = t({}, this.data.color, {
            rgb: e[0] + "," + e[1] + "," + e[2],
            hsb: (0, i.rgb2hsb)(e),
            cmyk: (0, i.rgb2cmyk)(e),
            id: Number(Math.random().toString().substr(3, 5) + Date.now()).toString(36),
            time: a,
            name: this.data.color.hex
        });
        this.onSave(o), console.log("detail?color=" + JSON.stringify(o)), wx.redirectTo({
            url: "detail?color=" + JSON.stringify(o)
        });
    }
});