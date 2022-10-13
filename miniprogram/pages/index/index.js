let jsonData = require('data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: "Key_Home_Info_List_NEW",
    bannerUnitId: getApp().globalData.bannerUnitId,
    videoUnitId: getApp().globalData.videoUnitId,
    title: "主页",
    listDataSuccess: false,
    isShowBottomAd: false,
    classlist: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: this.data.title
    });
    const fs = wx.getFileSystemManager()
    const cacheFileDir = getApp().globalData.cacheFileDir
    try {
      fs.rmdirSync(cacheFileDir, true)
    } catch (e) {}
    try {
      fs.mkdirSync(cacheFileDir, true)
    } catch (e) {}

    // try {
    //   let value = wx.getStorageSync(this.data.key);
    //   let item = JSON.parse(value);
    //   this.setData({
    //     classlist: item
    //   })
    // } catch (error) {}
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getListInfo()
  },

  onShareAppMessage: function () {},
  onShareTimeline: function () {},

  //点击列表跳转
  async selectTop(event) {

    let item = event.currentTarget.dataset.id;
    let path = item.path
    // path = "/pages/my_module/forbes/index";

    if (path == null || path == "") {
      wx.showToast({
        title: item.name + ",模块已下线!",
        icon: "none"
      })
    }
    this.update(item.type);

    if (path == "chickenSoup") {
      this.getChickenSoup();
      return
    }

    wx.navigateTo({
      url: path,
      fail(err) {
        wx.showToast({
          title: '上线中...',
          icon: "none"
        })
      }
    })
  },

  //获取功能列表
  getListInfo() {
    let _this = this;
    console.log(jsonData.data.result)
    _this.setData({
      classlist: jsonData.data.result,
      listDataSuccess: true
    })
  },

  update(type) {
    let key = type;
    let oTime = 0;
    try {
      oTime = wx.getStorageSync(key)
    } catch (e) {}
    let cTime = new Date().getTime();
    if (cTime - oTime <= 5 * 60 * 1000) {
      return
    }
    try {
      wx.setStorageSync(key, cTime)
    } catch (e) {}

    wx.request({
      url: 'https://www.meiaile.com:8088/static/public/countAdd',
      data: {
        "type": type
      },
      success: res => {},
      fail: err => {}
    })
  },

  bannerError(event) {
    var errCode = event.detail.errCode;
    console.log("errCode:" + errCode)
    if (errCode == 1004) {
      this.setData({
        isShowBottomAd: true
      })
    }
  },

  getChickenSoup() {
    let _this = this;
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: 'https://www.meiaile.com:8088/static/public/chickenSoup',
      success: res => {
        wx.hideLoading();
        if (res.data.success) {
          wx.showModal({
            showCancel: false,
            title: "每日鸡汤",
            content: res.data.result.text,
            success(res) {}
          })
        } else {
          wx.showToast({
            title: res.data.message,
            icon: 'none'
          })
        }
      },
      fail: res => {
        wx.showToast({
          title: "服务器繁忙,请稍后再试!",
          icon: 'none'
        })
      }
    });
  },
  onTabsChange(event) {
    // console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
  },
  onTabsClick(event) {
    // console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
  },

})