// pages/my_module/ip_info/index.js
Page({

  data: {
    title: "ip信息",
    bannerUnitId: getApp().globalData.bannerUnitId,
    name: "",
    item: {
      ip: "",
      src: "",
      latLong: ""
    }
  },
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: this.data.title
    });
    this.getItem();
  },

  bindKeyInput(e) {
    this.setData({
      name: e.detail.value
    })
  },

  bindTap() {
    let _this = this;
    if (!_this.data.name && _this.data.name.length > 20) {
      wx.showToast({
        title: '太长了!',
        icon: "none"
      })
      return
    }
    _this.setData({
      item: {}
    })
    this.getItem()
  },

  getItem() {
    let _this = this;
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: 'https://whois.pconline.com.cn/ipJson.jsp?json=true&ip=' + _this.data.name,
      success: res => {
        console.log(res)
        wx.hideLoading();
        if (res.statusCode==200) {
          _this.setData({
            item: {
              ip: res.data["ip"],
              src: res.data["addr"]
            }
          })
        } else {
          wx.showToast({
            title: "服务器繁忙,请稍后再试!",
            icon: 'none'
          })
        }
      },
      fail: res => {
        wx.showToast({
          title: "网络繁忙,请稍后再试!",
          icon: 'none'
        })
      }
    });
  },

})