function r(r, n, t, e) {
    return r < 20 ? n & t | ~n & e : r < 40 ? n ^ t ^ e : r < 60 ? n & t | n & e | t & e : n ^ t ^ e;
}

function n(r) {
    return r < 20 ? 1518500249 : r < 40 ? 1859775393 : r < 60 ? -1894007588 : -899497514;
}

function t(r, n) {
    var t = (65535 & r) + (65535 & n);
    return (r >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t;
}

function e(r, n) {
    return r << n | r >>> 32 - n;
}

var o = 0;

module.exports = {
    createGUID: function() {
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(r) {
            var n = 16 * Math.random() | 0;
            return ("x" == r ? n : 3 & n | 8).toString(16);
        });
    },
    hex_sha1: function(x) {
        return function(r) {
            for (var n, t = o ? "0123456789ABCDEF" : "0123456789abcdef", e = "", x = 0; x < r.length; x++) n = r.charCodeAt(x), 
            e += t.charAt(n >>> 4 & 15) + t.charAt(15 & n);
            return e;
        }(function(o) {
            return function(r) {
                for (var n = "", t = 0; t < 32 * r.length; t += 8) n += String.fromCharCode(r[t >> 5] >>> 24 - t % 32 & 255);
                return n;
            }(function(o, x) {
                o[x >> 5] |= 128 << 24 - x % 32, o[15 + (x + 64 >> 9 << 4)] = x;
                for (var a = Array(80), u = 1732584193, f = -271733879, c = -1732584194, h = 271733878, i = -1009589776, g = 0; g < o.length; g += 16) {
                    for (var C = u, d = f, l = c, v = h, A = i, m = 0; m < 80; m++) {
                        a[m] = m < 16 ? o[g + m] : e(a[m - 3] ^ a[m - 8] ^ a[m - 14] ^ a[m - 16], 1);
                        var S = t(t(e(u, 5), r(m, f, c, h)), t(t(i, a[m]), n(m)));
                        i = h, h = c, c = e(f, 30), f = u, u = S;
                    }
                    u = t(u, C), f = t(f, d), c = t(c, l), h = t(h, v), i = t(i, A);
                }
                return Array(u, f, c, h, i);
            }(function(r) {
                for (var n = Array(r.length >> 2), t = 0; t < n.length; t++) n[t] = 0;
                for (t = 0; t < 8 * r.length; t += 8) n[t >> 5] |= (255 & r.charCodeAt(t / 8)) << 24 - t % 32;
                return n;
            }(o), 8 * o.length));
        }(function(r) {
            for (var n, t, e = "", o = -1; ++o < r.length; ) n = r.charCodeAt(o), t = o + 1 < r.length ? r.charCodeAt(o + 1) : 0, 
            55296 <= n && n <= 56319 && 56320 <= t && t <= 57343 && (n = 65536 + ((1023 & n) << 10) + (1023 & t), 
            o++), n <= 127 ? e += String.fromCharCode(n) : n <= 2047 ? e += String.fromCharCode(192 | n >>> 6 & 31, 128 | 63 & n) : n <= 65535 ? e += String.fromCharCode(224 | n >>> 12 & 15, 128 | n >>> 6 & 63, 128 | 63 & n) : n <= 2097151 && (e += String.fromCharCode(240 | n >>> 18 & 7, 128 | n >>> 12 & 63, 128 | n >>> 6 & 63, 128 | 63 & n));
            return e;
        }(x)));
    }
};