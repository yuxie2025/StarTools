Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.assemblyObjToStr = function(e) {
    var t = "", r = Object.keys(e);
    return r.map(function(s, n) {
        t += s + "=" + e[s], n !== r.length - 1 && (t += "&");
    }), t;
};