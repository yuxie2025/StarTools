// miniprogram/pages/bigWheel/chooseItem/chooseItem.js
var util = require('../util')
var xiaojueding = require('../xiaojueding');
const imgUrl = require("../imgUrl")

const Base64 = require("../../../utils/Base64")

var app = getApp()
Page({
  data: {
    bannerUnitId: getApp().globalData.bannerUnitId,
    bigWheel_close_list:imgUrl.bigWheel_close_list,
    bigWheel_open_list:imgUrl.bigWheel_open_list,
    bigWheel_add:imgUrl.bigWheel_add,
    bigWheel_edit:imgUrl.bigWheel_edit,
    bigWheel_love:imgUrl.bigWheel_love,
    bigWheel_delete:imgUrl.bigWheel_delete,
    bigWheel_wheel:imgUrl.bigWheel_wheel,

    xiaojueding: xiaojueding,
    myxiaojueding: [],
    tab_index: 2,
  },
  onLoad: function (options) {

  },
  toWheel:function(e){
    wx.redirectTo({
      url: '../bigWheel',
    })
  },
  onShow: function () {

    var myJueding = wx.getStorageSync('myJueding');
    app.globalData.fromDefaultJueding = false,
    app.globalData.fromMyjueding = false;

    //创建的个人小决定
    if (!util.isNull(myJueding)) {
      this.setData({
        myxiaojueding: myJueding
      })
    }
    wx.removeStorageSync('id_fromChoose')
  },
  tabSwitch(e) {
    var flg = e.currentTarget.dataset.flg

    //刷新下个人决定里的数据
    if (flg == 2) {
      this.setData({
        myxiaojueding: wx.getStorageSync('myJueding')
      })
    }
    this.setData({
      tab_index: flg + ''
    })
  },
  //热门决定的转一转
  officialQToRun(e) {
    var id = e.currentTarget.dataset.id;
    app.globalData.fromDefaultJueding = true;

    // console.log(id+'id')
    wx.setStorageSync('id_fromChoose', id);
    wx.redirectTo({
      url: '../bigWheel',
    })
  },

  //收藏
  officialQToKeep(e) {
    var that = this,
      index = e.currentTarget.dataset.index,
      myJueding = wx.getStorageSync('myJueding'),
      xiaojueding = that.data.xiaojueding,
      flag = true;
    //可能此时myJueding不存在
    myJueding = util.isNull(myJueding) ? [] : myJueding;

    for (let x in xiaojueding) {
      if (x == index) {
        //若myjueding为空
        if (myJueding.length == 0) {
          myJueding.push(xiaojueding[x]);
          wx.setStorageSync('myJueding', myJueding);
          wx.showToast({
            title: '收藏成功',
            icon: 'success',
            mask: false
          })
        } else {
          for (let i in myJueding) {

            //判断是不是重复收藏了
            if (myJueding[i].id == xiaojueding[x].id) {
              wx.showToast({
                title: '已收藏',
                icon: 'success',
                mask: false
              })
              flag = false;
              break;
            }
          }
          if (flag) {
            myJueding.push(xiaojueding[x]);
            wx.setStorageSync('myJueding', myJueding);
            wx.showToast({
              title: '收藏成功',
              icon: 'success',
              mask: false
            })
          }
        }
        break;
      }
    }
    that.setData({
      xiaojueding: xiaojueding
    })
  },

  //个人决定的转一转
  personalQToRun(e) {
    var id = e.currentTarget.dataset.id;
    app.globalData.fromMyjueding = true;
    wx.setStorageSync('id_fromChoose', id);
    wx.redirectTo({
      url: '../bigWheel',
    })
  },

  //删除
  personalQToDelete(e) {
    var index = e.currentTarget.dataset.index,
      myJueding = wx.getStorageSync('myJueding');
    for (let i in myJueding) {
      if (index == i) {
        myJueding.splice(i, 1);
        wx.showToast({
          title: '删除成功',
          icon: 'success',
          mask: false
        })
        break;
      }
    }
    this.setData({
      myxiaojueding: myJueding
    })
    wx.setStorageSync('myJueding', myJueding);
  },

  //个人决定右边的图片
  personalQToControl(e) {
    var that = this,
      index = e.currentTarget.dataset.index,
      idx, myxiaojueding = that.data.myxiaojueding;
    for (let x in myxiaojueding) {
      if (x == index) {
        idx = myxiaojueding[x].num1 == undefined ? index : undefined;
        myxiaojueding[x].num1 = idx;
      } else {
        myxiaojueding[x].num1 = undefined;
      }
    }
    that.setData({
      myxiaojueding: myxiaojueding
    })
  },

  //热门决定右边的图片
  officialQToControl(e) {
    var that = this,
      index = e.currentTarget.dataset.index,
      idx;
    for (let x in xiaojueding) {
      if (x == index) {
        idx = xiaojueding[x].num == undefined ? index : undefined;
        xiaojueding[x].num = idx;
      } else {
        xiaojueding[x].num = undefined;
      }
    }
    that.setData({
      xiaojueding: xiaojueding
    })
  },

  //热门编辑
  officialQToRevise(e) {
    var that = this,
      xiaojueding = that.data.xiaojueding,
      index = e.currentTarget.dataset.index;
    for (let i in xiaojueding) {
      if (i == index) {
        wx.navigateTo({
          url: '../edit/edit?flg=1&item=' + Base64.encode(JSON.stringify(xiaojueding[i]))
        })
        return;
      }
    }
  },



  //热门、个人小决定

  //添加个人小决定
  addPersonalQ(e) {
    wx.navigateTo({
      url: '../edit/edit?flg=2',
    })
  },

  //个人编辑
  personalQToRevise(e) {
    var that = this,
      myJueding = wx.getStorageSync('myJueding'),
      index = e.currentTarget.dataset.index;
    console.log(myJueding)
    console.log(index)
    for (let i in myJueding) {
      if (i == index) {
        wx.navigateTo({
          url: '../edit/edit?item=' + Base64.encode(JSON.stringify(myJueding[i]))
        })
        return;
      }
    }
  },







  onShareAppMessage: function () {
    let that = this;
    return {
      title: util.isNull(app.globalData.shareTitle) ? ("一起来玩'" + app.globalData.title + "'吧") : app.globalData.shareTitle,
      path: '/pages/index/index',
      success: function (res) {
        console.log('成功进入分享==========', res);

      },
      fail: function (res) {
        console.log('进入分享失败==========', res);
      }
    }
  }
})