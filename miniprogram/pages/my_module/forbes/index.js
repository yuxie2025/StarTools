Page({

  data: {
    isRelease: true,
    key: "Key_Forbes_Info",
    bannerUnitId: getApp().globalData.bannerUnitId,
    title: "福布斯",
    itemsList: [],
    showModal: false,
    dialogTitle: "",
    dialogContent: "",
    defPic: "ic_blank.png"
  },

  onLoad(options) {
    this.setData({
      isRelease: getApp().globalData.isRelease
    })
    wx.setNavigationBarTitle({
      title: this.data.title
    });
    try {
      let value = wx.getStorageSync(this.data.key);
      let item = JSON.parse(value);
      this.setData({
        itemsList: item
      })
    } catch (error) {}
  },

  onShareAppMessage: function () {},
  onShareTimeline: function () {},

  onShow() {
    this.netWork();
  },

  imageOnloadError(e) {
    var index = e.currentTarget.dataset.index; //获取加载出错的图片下标
    var _imgUrlList = this.data.itemsList; //后台返回的图片路径数组
    var img = this.data.defPic //图片加载失败时展示的默认图
    _imgUrlList[index].squareImage = img;
    this.setData({
      itemsList: _imgUrlList
    })
  },

  hideModal(event) {
    this.setData({
      showModal: false
    })
  },

  clickItem(event) {
    let _this = this;
    let item = event.currentTarget.dataset.id;
    let content = "太神秘了,没有介绍!";

    if (item.abouts) {
      content = "";
      for (let index = 0; index < item.abouts.length; index++) {
        const element = (index + 1) + "、" + item.abouts[index];
        if (index != item.abouts.length - 1) {
          element = element + "\n"
        }
        content = content + element
      }
    }
    _this.setData({
      dialogTitle: item.personName,
      dialogContent: content,
      showModal: true
    })

  },

  netWork() {
    var _this = this;
    wx.request({
      url: 'https://forbes400.herokuapp.com/api/forbes400?limit=100',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: res => {
        if (res.data.length > 0) {
          let newResult = res.data;
          newResult.map(item => {
            item['age'] = _this.getAge(item.birthDate)
            if (item.squareImage) {
              let squareImage = item.squareImage.replace("416x416", "80x80");
              if (squareImage.indexOf("http") != 0) {
                squareImage = "https:" + squareImage
              }
              item.squareImage = squareImage
            } else {
              item.squareImage = _this.data.defPic
            }
            return item;
          })

          try {
            wx.setStorageSync(_this.data.key, JSON.stringify(res.data))
          } catch (error) {}
          _this.setData({
            itemsList: res.data
          })
        } else {
          wx.showToast({
            title: res.data.message == "" ? "服务器繁忙,请稍后再试!" : res.data.message,
            icon: 'none',
            duration: 3000
          })
        }
      },
      fail: err => {
        wx.showToast({
          title: '服务器繁忙,请稍后再试!',
          icon: 'none',
          duration: 3000
        })
      }
    })
  },
  getAge(birthday) {
    if (birthday == null || birthday.length == 0) {
      return 0;
    }
    try {
      //出生时间 毫秒
      var birthDayTime = new Date(birthday).getTime();
      //当前时间 毫秒
      var nowTime = new Date().getTime();
      //一年毫秒数(365 * 86400000 = 31536000000)
      return Math.ceil((nowTime - birthDayTime) / 31536000000);
    } catch (error) {
      return 0;
    }
  }
})