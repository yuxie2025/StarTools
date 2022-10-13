var t = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}, n = function(t) {
    var n = parseInt(t).toString(16);
    return 1 == n.length ? "0" + n : n.toUpperCase();
};

module.exports = {
    rgb2hex: function(t) {
        return "#" + n(t[0]) + n(t[1]) + n(t[2]);
    },
    rgb2hsb: function(t) {
        var n = t[0] / 255, r = t[1] / 255, e = t[2] / 255, a = Math.max(n, Math.max(r, e)), u = Math.min(n, Math.min(r, e)), o = 0;
        a == n && r >= e ? o = a - u == 0 ? 0 : 60 * (r - e) / (a - u) : a == n && r < e ? o = 60 * (r - e) / (a - u) + 360 : a == r ? o = 60 * (e - n) / (a - u) + 120 : a == e && (o = 60 * (n - r) / (a - u) + 240);
        var i = 0 == a ? 0 : 1 - u / a, h = a;
        return Math.round(100 * o) / 100 + "," + Math.round(100 * i) / 100 + "," + Math.round(100 * h) / 100;
    },
    rgb2cmyk: function(t) {
        var n = (255 - t[0]) / 255, r = (255 - t[1]) / 255, e = (255 - t[2]) / 255, a = Math.min(n, Math.min(r, e));
        return 1 == a ? n = r = e = 0 : (n = (n - a) / (1 - a), r = (r - a) / (1 - a), e = (e - a) / (1 - a)), 
        Math.round(100 * n) / 100 + "," + Math.round(100 * r) / 100 + "," + Math.round(100 * e) / 100 + "," + Math.round(100 * a) / 100;
    },
    formatTime: function(n) {
        var r = n.getFullYear(), e = n.getMonth() + 1, a = n.getDate(), u = n.getHours(), o = n.getMinutes(), i = n.getSeconds();
        return [ r, e, a ].map(t).join("/") + " " + [ u, o, i ].map(t).join(":");
    },
    currentTime: function() {
        var n = new Date();
        return [ n.getFullYear(), n.getMonth() + 1, n.getDate() ].map(t).join(".");
    }
};