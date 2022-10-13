function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

function t(e, t, a, o, n, s, u, d) {
    e || (e = p), t || (t = g);
    var D = r.createGUID();
    if (n) w = r.hex_sha1(e + t + a + o + n + D + c); else var w = r.hex_sha1(e + t + a + o + D + c);
    wx.request({
        url: l,
        data: {
            C: e,
            M: t,
            A: a,
            F: o,
            D: n,
            U: D,
            S: w,
            AV: f,
            AID: i
        },
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        success: s,
        fail: u,
        complete: d
    });
}

function a(e) {
    wx.login({
        success: function(t) {
            if (t.code) {
                var a = "WxSmall", o = "RedPackage", l = JSON.stringify({
                    Code: t.code,
                    isNew: !0
                }), u = r.createGUID(), d = r.hex_sha1(a + o + "UserLogin" + l + u + c);
                wx.request({
                    url: "https://doc.goodguagua.com/ArticleSystem/Api.php",
                    data: {
                        V: s,
                        C: a,
                        M: o,
                        A: "User",
                        F: "Login",
                        D: l,
                        U: u,
                        S: d,
                        AV: "1",
                        AID: i
                    },
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    method: "POST",
                    success: function(t) {
                        if (0 == t.data.ReturnCode) if (console.log(t), console.log("发送请求openID成功"), 0 == t.data.ReturnData.ResultCode) {
                            console.log("请求openID响应成功,openID为:", t.data.ReturnData.ResultData.openid);
                            var a = Date.parse(new Date()) / 1e3;
                            n = t.data.ReturnData.ResultData.openid;
                            var o = {
                                openID: t.data.ReturnData.ResultData.openid,
                                date: a,
                                write: !0
                            };
                            console.log("获取本地时间戳:", a, "s"), console.log("获取的openID是否写入:", !0), console.log("缓存的数据:", o), 
                            wx.setStorage({
                                key: "loginStorage",
                                data: o
                            });
                            var r = wx.getStorageSync("loginStorage");
                            e(r);
                        } else console.log("请求openID响应失败:", t.data.ReturnData.ResultMsg); else console.log("发送请求openID失败：", t.data.ReturnMsg);
                    },
                    fail: function(e) {
                        console.log(e.data);
                    }
                });
            }
        }
    });
}

function o(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}

var n, r = require("./util.js"), c = getApp().globalData.Key, i = getApp().globalData.Appid, l = getApp().globalData.address, s = (getApp().globalData.findAdvertising, 
getApp().globalData.version), u = [], d = {}, p = "WxSmall", g = "AllroundPig", f = "1";

d.miniApp = function(e, t, a, o, n) {
    wx.navigateToMiniProgram({
        appId: e,
        path: t,
        extraData: {
            extraData: a
        },
        envVersion: "release",
        success: function(e) {
            o(e);
        },
        fail: function(e) {
            n("跳转失败，请稍后重试");
        }
    });
}, d.jumping = function(e, t) {
    wx.showLoading({
        title: "跳转中",
        success: function(a) {
            wx.navigateTo({
                url: e,
                fail: function(e) {
                    t("跳转失败，请稍后重试");
                }
            }), wx.hideLoading();
        }
    });
}, module.exports = {
    req: function(t, a, o, n, r, c, u, d) {
        var p;
        wx.request({
            url: l,
            data: (p = {
                V: s,
                C: t,
                M: a,
                A: o,
                F: n
            }, e(p, "V", s), e(p, "U", r), e(p, "S", c), e(p, "AV", "1"), e(p, "AID", i), p),
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(e) {
                u(e);
            },
            fail: function(e) {
                d(e), wx.showToast({
                    title: "请求失败，请稍后重试"
                });
            }
        });
    },
    reqD: function(e, t, a, o, n, r, c, u, d) {
        wx.request({
            url: l,
            data: {
                V: s,
                C: e,
                M: t,
                A: a,
                F: o,
                D: n,
                U: r,
                S: c,
                AV: "1",
                AID: i
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(e) {
                u(e);
            },
            fail: function(e) {
                d(e);
            },
            complete: function(e) {}
        });
    },
    User: function(e, t) {
        wx.login({
            success: function(a) {
                var o = "WxSmall", u = "UserDraw", d = r.createGUID(), p = JSON.stringify({
                    Code: a.code
                }), g = r.hex_sha1(o + u + "UserLogin" + p + d + c);
                wx.request({
                    url: l,
                    data: {
                        V: s,
                        C: o,
                        M: u,
                        A: "User",
                        F: "Login",
                        U: d,
                        D: p,
                        S: g,
                        AV: "1",
                        AID: i
                    },
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    method: "POST",
                    success: function(t) {
                        n = t.data.ReturnData.ResultData.openid, wx.setStorageSync("openID", n), e(t);
                    },
                    fail: function(e) {
                        t(e);
                    }
                });
            }
        });
    },
    FormID: function(e, t, a) {
        if (e.hasOwnProperty("detail")) {
            var o = e.detail.formId, u = "WxSmall", d = "TemplateMsg", p = r.createGUID(), g = JSON.stringify({
                OpenID: n,
                FormID: o,
                Type: "Default"
            }), f = r.hex_sha1(u + d + "FormIDCreate" + g + p + c);
            wx.request({
                url: l,
                data: {
                    V: s,
                    C: u,
                    M: d,
                    A: "FormID",
                    F: "Create",
                    U: p,
                    D: g,
                    S: f,
                    AV: "1",
                    AID: i
                },
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                success: function(e) {
                    t(e);
                }
            });
        } else a("obj有误");
    },
    cacheMd: function() {
        this.putCache = function(e, t, a) {
            wx.setStorage({
                key: e,
                data: t
            });
            var o = parseInt(a);
            if (o > 0) {
                var n = Date.parse(new Date());
                n = new Date().getTime() / 1e3 + o, wx.setStorage({
                    key: e + "default",
                    data: n
                });
            }
            u.push(e);
        }, this.getCache = function(e, t) {
            if (!u.find(function(t) {
                return t == e;
            })) return "undefined";
            var a = wx.getStorageSync(e + "default");
            if (a) {
                var o = Date.parse(new Date()) / 1e3;
                if (parseInt(a) < o) return "已超时";
            }
            return wx.getStorageSync(e) || t;
        }, this.remove = function(e) {
            wx.removeStorageSync(e), wx.removeStorageSync(e + "default");
        }, this.clear = function() {
            wx.clearStorageSync();
        };
    },
    UpdateUserData: function(e, t, a, o) {
        var u = "WxSmall", d = "RedPackage", p = "UpdateUserData", g = r.createGUID(), f = JSON.stringify({
            OpenID: n,
            EncryptedData: encodeURIComponent(e),
            IV: encodeURIComponent(t)
        }), D = r.hex_sha1(u + d + "User" + p + f + g + c);
        wx.request({
            url: l,
            data: {
                V: s,
                C: u,
                M: d,
                A: "User",
                F: p,
                U: g,
                D: f,
                S: D,
                AV: "1",
                AID: i
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(e) {
                e.data.ReturnData, a(e);
            },
            fail: function(e) {
                console.log(e), o(e);
            }
        });
    },
    Article: function(e, t, a, o, n) {
        console.log("11");
        var u = "WxSmall", d = "Article", p = "AppPosts", g = "SelectForApp", f = r.createGUID(), D = JSON.stringify({
            PageCount: e,
            PageSize: t,
            Fine: a
        }), w = r.hex_sha1(u + d + p + g + D + f + c);
        wx.request({
            url: l,
            data: {
                V: s,
                C: u,
                M: d,
                A: p,
                F: g,
                U: f,
                D: D,
                S: w,
                AV: "1",
                AID: i
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(e) {
                console.log(e), o(e);
            },
            fail: function(e) {
                console.log(e), n(e);
            }
        });
    },
    SelectForID: function(e, t, a) {
        var o = "WxSmall", n = "Article", l = "SelectForID", u = JSON.stringify({
            ID: e
        }), d = r.createGUID(), p = r.hex_sha1(o + n + "Post" + l + u + d + c);
        wx.request({
            url: "https://doc.goodguagua.com/ArticleSystem/Api.php",
            data: {
                V: s,
                C: o,
                M: n,
                A: "Post",
                F: l,
                U: d,
                D: u,
                S: p,
                AV: "1",
                AID: i
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(e) {
                t(e);
            },
            fail: function(e) {
                a(e);
            }
        });
    },
    SelectAll: function(e, t) {
        var a = "WxSmall", o = "Headline", n = "SelectAll", l = r.createGUID(), u = r.hex_sha1(a + "Ad" + o + n + l + c);
        wx.request({
            url: "https://doc.goodguagua.com/ArticleSystem/Api.php",
            data: {
                V: s,
                C: a,
                M: "Ad",
                A: o,
                F: n,
                U: l,
                S: u,
                AV: "1",
                AID: i
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(t) {
                console.log(t), e(t);
            },
            fail: function(t) {
                e(t);
            }
        });
    },
    userLogin: function(e) {
        var t = wx.getStorageSync("loginStorage");
        t ? t.openID && t.date && null != t.write ? (n = t.openID, Date.parse(new Date()) / 1e3 - t.date > 86400 ? (console.log("缓存超过1天，已过期。重新申请"), 
        a(e)) : (console.log("openID缓存没有超过1天，可以使用"), e(wx.getStorageSync("loginStorage")))) : a(e) : (console.log("没有openID缓存"), 
        a(e));
    },
    advertisingObj: d,
    defaultRequest: function(e, a, o, n, r, c) {
        t(null, null, e, a, o, n, r, c);
    },
    formatTime: function(e) {
        var t = e.getFullYear(), a = e.getMonth() + 1, n = e.getDate(), r = e.getHours(), c = e.getMinutes(), i = e.getSeconds();
        return [ t, a, n ].map(o).join("/") + " " + [ r, c, i ].map(o).join(":");
    }
};