// app.js
let videoAd = null
Page({
  data: {
    isRelease: true,
    bannerUnitId: getApp().globalData.bannerUnitId,
    title: "随机一张图",
    imageSrc: ''
  },
  launchAppError(e) {
    console.log(e.detail.errMsg)
  },

  onShareAppMessage: function () {},
  onShareTimeline: function () {},
  onLoad() {
    this.setData({
      isRelease: getApp().globalData.isRelease
    })
    console.log("onLoad---")
    wx.setNavigationBarTitle({
      title: this.data.title
    });
    this.downloadFile(3)
  },

  saveImage() {
    let _this = this;
    if (_this.data.imageSrc == "") {
      wx.showToast({
        title: '请先上传图片!',
        icon: 'none'
      })
      return
    }
    wx.saveImageToPhotosAlbum({
      filePath: _this.data.imageSrc,
      fail(err) {
        wx.showToast({
          title: err.errMsg,
          icon: 'none'
        })
      }
    })
  },
  getPic(event) {
    let type = event.currentTarget.dataset.id;
    this.downloadFile(type)
  },
  downloadFile(type) {
    let _this = this;
    wx.showLoading({
      title: '加载中...',
    })
    let url="";
    if(type==3){
      url="https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302";
    }else if(type==4){
      url="https://img.xjh.me/random_img.php?type=bg&ctype=acg&return=302";
    }else if(type==2){
      url="https://api.btstu.cn/sjbz/api.php";
    }
    const filePath = getApp().globalData.cacheFileDir + "/" + "RandomPic_" + new Date().getTime() + ".jpg";
    wx.downloadFile({
      url: url,
      filePath: filePath,
      success(res) {
        if (res.statusCode === 200) {
          _this.setData({
            imageSrc: res.filePath
          })
        }
      },
      complete() {
        wx.hideLoading()
      }
    })
  },
})