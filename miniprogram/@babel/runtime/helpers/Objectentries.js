Object.entries || (Object.entries = function(e) {
    for (var r = Object.keys(e), t = r.length, n = new Array(t); t--; ) n[t] = [ r[t], e[r[t]] ];
    return n;
});