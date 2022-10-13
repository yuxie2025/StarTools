// pages/guoqing/guoqing.js
const ctx = wx.createCanvasContext('shareImg');
const app = getApp();
Page({
  data: {
    isRelease: true,
    title: "国旗头像",
    videoUnitId: getApp().globalData.videoUnitId,
    prurl: '',
    defaultImg: 0,
    avatarUrl: '',
    hasUserInfo: false,
    list: [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
    ]
  },
  onLoad: function (options) {
    this.setData({
      isRelease: getApp().globalData.isRelease
    })
    wx.setNavigationBarTitle({
      title: this.data.title
    });
    this.initCanvas(this.data.defaultImg);
  },

  onShareAppMessage: function () {
    return {
      title: '领取你的国庆专属头像',
      success: function (res) {
      },
      fail: function (res) {
      }
    }
  },
  onShareTimeline() {},

  selectImg: function (e) {
    var current = e.target.dataset.id;
    this.setData({
      defaultImg: current,
      prurl: ''
    });
    if (this.data.avatarUrl != '') {
      this.drawImg(this.data.avatarUrl);
    } else {
      this.initCanvas(this.data.defaultImg);
    }
  },

  // 初始化
  initCanvas(index) {
    let that = this;
    //主要就是计算好各个图文的位置
    let num = 150;
    //清除后重画
    ctx.clearRect(0, 0, num, num);
    ctx.drawImage(`../../../images/hat${index}.png`, 0, 0, num, num)
    ctx.stroke()
    ctx.draw(false, () => {
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: num,
        height: num,
        destWidth: 960,
        destHeight: 960,
        canvasId: 'shareImg',
        success: function (res) {
          that.setData({
            prurl: res.tempFilePath
          })
        },
        fail: function (res) {
        }
      })
    })
  },

  chooseImage(e) {
    let that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success(res) {
        that.setData({
          avatarUrl: res.tempFilePaths[0],
          hasUserInfo: true
        })
        that.drawImg(that.data.avatarUrl);
      }
    })
  },

  drawImg(avatarUrl) {
    let that = this;
    console.log("-- drawImg --");
    let promiseImg = new Promise(function (resolve, reject) {
      wx.getImageInfo({
        src: avatarUrl,
        success: function (res) {
          console.log("promiseImg", res)
          resolve(res);
        }
      })
    });
    var index = that.data.defaultImg;
    let promiseDefaultImg = new Promise(function (resolve, reject) {
      wx.getImageInfo({
        src: `../../../images/hat${index}.png`,
        success: function (res) {
          console.log("promiseDefaultImg", res)
          resolve(res);
        }
      })
    });
    Promise.all([
      promiseImg, promiseDefaultImg
    ]).then(res => {
      console.log("Promise.all", res)
      //主要就是计算好各个图文的位置
      let num = 150;
      ctx.drawImage(res[0].path, 0, 0, num, num)
      ctx.drawImage('../../../' + res[1].path, 0, 0, num, num)
      ctx.stroke()
      ctx.draw(false, () => {
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: num,
          height: num,
          destWidth: 960,
          destHeight: 960,
          canvasId: 'shareImg',
          success: function (res) {
            console.log("---canvasToTempFilePath---")
            console.log(res)
            that.setData({
              prurl: res.tempFilePath
            })
            wx.hideLoading()
          },
          fail: function (res) {
            wx.hideLoading()
          }
        })
      })
    })

  },

  handleShare: function () {
    this.onShareAppMessage();
  },

  save: function () {
    var that = this;
    if (!that.data.prurl) {
      wx.showToast({
        title: '请先生成头像!',
      })
      return;
    }
    wx.saveImageToPhotosAlbum({
      filePath: that.data.prurl,
      success(res) {
      }
    })
  },
})