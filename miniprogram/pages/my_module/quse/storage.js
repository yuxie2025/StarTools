var t = function() {
    return wx.getStorageSync("colors") || [];
}, o = function(t, o) {
    wx.setStorage({
        key: "colors",
        data: t,
        success: function(t) {
            o && o();
        }
    });
};

module.exports = {
    getStorage: t,
    setStorage: o,
    putStorage: function(e, n) {
        var u = !1, r = [];
        t().map(function(t) {
            t.id == e.id ? (u = !0, r.push(e)) : r.push(t);
        }), u || r.push(e), o(r, n);
    },
    delStorage: function(e, n) {
        var u = [];
        t().map(function(t) {
            t.id != e.id && u.push(t);
        }), o(u, n);
    }
};