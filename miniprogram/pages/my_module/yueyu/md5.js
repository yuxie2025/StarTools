Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(r) {
    function n(r, n) {
        return r << n | r >>> 32 - n;
    }
    function t(r, n) {
        var t, e, o, u, f;
        return o = 2147483648 & r, u = 2147483648 & n, f = (1073741823 & r) + (1073741823 & n), 
        (t = 1073741824 & r) & (e = 1073741824 & n) ? 2147483648 ^ f ^ o ^ u : t | e ? 1073741824 & f ? 3221225472 ^ f ^ o ^ u : 1073741824 ^ f ^ o ^ u : f ^ o ^ u;
    }
    function e(r, e, o, u, f, i, a) {
        return r = t(r, t(t(function(r, n, t) {
            return r & n | ~r & t;
        }(e, o, u), f), a)), t(n(r, i), e);
    }
    function o(r, e, o, u, f, i, a) {
        return r = t(r, t(t(function(r, n, t) {
            return r & t | n & ~t;
        }(e, o, u), f), a)), t(n(r, i), e);
    }
    function u(r, e, o, u, f, i, a) {
        return r = t(r, t(t(function(r, n, t) {
            return r ^ n ^ t;
        }(e, o, u), f), a)), t(n(r, i), e);
    }
    function f(r, e, o, u, f, i, a) {
        return r = t(r, t(t(function(r, n, t) {
            return n ^ (r | ~t);
        }(e, o, u), f), a)), t(n(r, i), e);
    }
    function i(r) {
        var n, t = "", e = "";
        for (n = 0; n <= 3; n++) t += (e = "0" + (r >>> 8 * n & 255).toString(16)).substr(e.length - 2, 2);
        return t;
    }
    var a, c, C, g, h, d, l, s, v, S = Array();
    for (S = function(r) {
        for (var n, t = r.length, e = t + 8, o = 16 * ((e - e % 64) / 64 + 1), u = Array(o - 1), f = 0, i = 0; i < t; ) f = i % 4 * 8, 
        u[n = (i - i % 4) / 4] = u[n] | r.charCodeAt(i) << f, i++;
        return f = i % 4 * 8, u[n = (i - i % 4) / 4] = u[n] | 128 << f, u[o - 2] = t << 3, 
        u[o - 1] = t >>> 29, u;
    }(r = function(r) {
        r = r.replace(/\r\n/g, "\n");
        for (var n = "", t = 0; t < r.length; t++) {
            var e = r.charCodeAt(t);
            e < 128 ? n += String.fromCharCode(e) : e > 127 && e < 2048 ? (n += String.fromCharCode(e >> 6 | 192), 
            n += String.fromCharCode(63 & e | 128)) : (n += String.fromCharCode(e >> 12 | 224), 
            n += String.fromCharCode(e >> 6 & 63 | 128), n += String.fromCharCode(63 & e | 128));
        }
        return n;
    }(r)), d = 1732584193, l = 4023233417, s = 2562383102, v = 271733878, a = 0; a < S.length; a += 16) c = d, 
    C = l, g = s, h = v, l = f(l = f(l = f(l = f(l = u(l = u(l = u(l = u(l = o(l = o(l = o(l = o(l = e(l = e(l = e(l = e(l, s = e(s, v = e(v, d = e(d, l, s, v, S[a + 0], 7, 3614090360), l, s, S[a + 1], 12, 3905402710), d, l, S[a + 2], 17, 606105819), v, d, S[a + 3], 22, 3250441966), s = e(s, v = e(v, d = e(d, l, s, v, S[a + 4], 7, 4118548399), l, s, S[a + 5], 12, 1200080426), d, l, S[a + 6], 17, 2821735955), v, d, S[a + 7], 22, 4249261313), s = e(s, v = e(v, d = e(d, l, s, v, S[a + 8], 7, 1770035416), l, s, S[a + 9], 12, 2336552879), d, l, S[a + 10], 17, 4294925233), v, d, S[a + 11], 22, 2304563134), s = e(s, v = e(v, d = e(d, l, s, v, S[a + 12], 7, 1804603682), l, s, S[a + 13], 12, 4254626195), d, l, S[a + 14], 17, 2792965006), v, d, S[a + 15], 22, 1236535329), s = o(s, v = o(v, d = o(d, l, s, v, S[a + 1], 5, 4129170786), l, s, S[a + 6], 9, 3225465664), d, l, S[a + 11], 14, 643717713), v, d, S[a + 0], 20, 3921069994), s = o(s, v = o(v, d = o(d, l, s, v, S[a + 5], 5, 3593408605), l, s, S[a + 10], 9, 38016083), d, l, S[a + 15], 14, 3634488961), v, d, S[a + 4], 20, 3889429448), s = o(s, v = o(v, d = o(d, l, s, v, S[a + 9], 5, 568446438), l, s, S[a + 14], 9, 3275163606), d, l, S[a + 3], 14, 4107603335), v, d, S[a + 8], 20, 1163531501), s = o(s, v = o(v, d = o(d, l, s, v, S[a + 13], 5, 2850285829), l, s, S[a + 2], 9, 4243563512), d, l, S[a + 7], 14, 1735328473), v, d, S[a + 12], 20, 2368359562), s = u(s, v = u(v, d = u(d, l, s, v, S[a + 5], 4, 4294588738), l, s, S[a + 8], 11, 2272392833), d, l, S[a + 11], 16, 1839030562), v, d, S[a + 14], 23, 4259657740), s = u(s, v = u(v, d = u(d, l, s, v, S[a + 1], 4, 2763975236), l, s, S[a + 4], 11, 1272893353), d, l, S[a + 7], 16, 4139469664), v, d, S[a + 10], 23, 3200236656), s = u(s, v = u(v, d = u(d, l, s, v, S[a + 13], 4, 681279174), l, s, S[a + 0], 11, 3936430074), d, l, S[a + 3], 16, 3572445317), v, d, S[a + 6], 23, 76029189), s = u(s, v = u(v, d = u(d, l, s, v, S[a + 9], 4, 3654602809), l, s, S[a + 12], 11, 3873151461), d, l, S[a + 15], 16, 530742520), v, d, S[a + 2], 23, 3299628645), s = f(s, v = f(v, d = f(d, l, s, v, S[a + 0], 6, 4096336452), l, s, S[a + 7], 10, 1126891415), d, l, S[a + 14], 15, 2878612391), v, d, S[a + 5], 21, 4237533241), s = f(s, v = f(v, d = f(d, l, s, v, S[a + 12], 6, 1700485571), l, s, S[a + 3], 10, 2399980690), d, l, S[a + 10], 15, 4293915773), v, d, S[a + 1], 21, 2240044497), s = f(s, v = f(v, d = f(d, l, s, v, S[a + 8], 6, 1873313359), l, s, S[a + 15], 10, 4264355552), d, l, S[a + 6], 15, 2734768916), v, d, S[a + 13], 21, 1309151649), s = f(s, v = f(v, d = f(d, l, s, v, S[a + 4], 6, 4149444226), l, s, S[a + 11], 10, 3174756917), d, l, S[a + 2], 15, 718787259), v, d, S[a + 9], 21, 3951481745), 
    d = t(d, c), l = t(l, C), s = t(s, g), v = t(v, h);
    return (i(d) + i(l) + i(s) + i(v)).toLowerCase();
};