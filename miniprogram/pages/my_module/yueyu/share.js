Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = getApp(), t = {
    onShareAppMessage: function(t) {
        var a = "menu";
        t.target && (a = t.target.dataset.type);
        var r = [ {
            imgUrl: "",
            text: "这个粤语翻译器太准了，你也来试试吧!"
        }, {
            imgUrl: "",
            text: "呢个粤语翻译器太实咗，你都嚟试啦！"
        } ], s = Math.random() * r.length, n = parseInt(s);
        n = r[n].text;
        var p = getCurrentPages();
        return console.log(p), e.td_app_sdk.event({
            id: "share",
            label: "分享",
            params: {
                deviceType: wx.getSystemInfoSync().system,
                openId: e.globalData.openId,
                shareText: n,
                path: p[p.length - 1].route,
                type: a || "menu"
            }
        }), this.setData({
            showShare: !1
        }), {
            title: n,
            path: "/pages/list/index?shareNumber=" + s + "&shareFrom=" + a
        };
    }
};

exports.default = t;