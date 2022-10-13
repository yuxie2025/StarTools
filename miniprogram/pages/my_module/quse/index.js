Page({
    data: {
        items: []
    },
    onLoad: function(e) {},
    onReady: function() {},
    onShow: function() {
        this.getItems();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "给你推荐一个很好用的小工具，快试试看",
            path: "/pages/index/index",
            imageUrl: "/assets/share.jpg"
        };
    },
    getItems: function(e) {
        var n = this;
        wx.getStorage({
            key: "colors",
            success: function(e) {
                n.setData({
                    items: e.data.reverse()
                });
            }
        });
    },
    onTakeImage: function(e, n) {
        wx.chooseImage({
            count: 1,
            sourceType: [ e ],
            success: function(e) {
                console.log(e.tempFilePaths[0]), wx.navigateTo({
                    url: "color?path=" + e.tempFilePaths[0]
                });
            }
        });
    },
    onPhotoTap: function() {
        this.onTakeImage("camera");
    },
    onAlbumTap: function() {
        this.onTakeImage("album");
    },
    onItemTap: function(e) {
        wx.navigateTo({
            url: "detail?color=" + JSON.stringify(e.currentTarget.dataset.color)
        });
    }
});