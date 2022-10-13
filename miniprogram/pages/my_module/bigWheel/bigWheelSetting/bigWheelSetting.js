// miniprogram/pages/bigWheel/bigWheelSetting/bigWheelSetting.js
var imgUrl = require('../imgUrl')

Page({

  data: {
    bannerUnitId: getApp().globalData.bannerUnitId,
    showLove:imgUrl.showLove,
    bigWheel_sound:imgUrl.bigWheel_sound,
    bigWheel_repeat:imgUrl.bigWheel_repeat,
    bigWheel_speed:imgUrl.bigWheel_speed,
    speed: 1,
    isSound: '',
    isRepeat: '',
    isLove: '',
    isShowPianxin: '',
    gdhw: [ //更多好玩的参数设置死的
      {
      }
    ]
  },
  sliderChange: function (e) {
    var value = e.detail.value
    wx.setStorageSync('speed', value)
    this.setData({
      speed: value
    })
  },

  onLoad: function (options) {
    var isRepeat = wx.getStorageSync('isRepeat')
    var isSound = wx.getStorageSync('isSound')
    var isLove = wx.getStorageSync('isLove')
    var speed = wx.getStorageSync('speed')
    var isShowPianxin = wx.getStorageSync('isShowPianxin')
    if (isShowPianxin === '') {
      wx.setStorageSync('isShowPianxin', true)
      isShowPianxin = true
    }
    if (isRepeat == '') {
      wx.setStorageSync('isRepeat', false)
      isRepeat = false
    }
    if (isSound == '') {
      wx.setStorageSync('isSound', false)
      isSound = false
    }
    if (isLove == '') {
      wx.setStorageSync('isLove', false)
      isLove = false
    }
    if (speed == '') {
      wx.setStorageSync('speed', 3)
      speed = 3
    }
    this.setData({
      isSound: isSound,
      isLove: isLove,
      isRepeat: isRepeat,
      speed: speed,
      isShowPianxin
    })
  },

  //声音
  switchChangeSound() {

    var isSound = this.data.isSound
    isSound = isSound ? false : true;
    wx.setStorageSync('isSound', isSound)
    this.setData({
      isSound: isSound,
    })
  },

  //偏心
  switchChangeFastSelect() {
    var that = this
    var isLove = this.data.isLove
    var isShowPianxin = this.data.isShowPianxin
    isLove = isLove ? false : true;
    if (isLove && isShowPianxin) {
      wx.showModal({
        title: '偏心模式',
        content: '偏心模式开启后可以在编辑中设置每个选项的偏心指数，就是设置权重，权重越大，被选中的概率就越大',
        cancelText: '不再提醒',
        confirmText: '我知道了',
        confirmColor: '#3CC51F',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
            isShowPianxin = false    
            console.log(isShowPianxin)
            that.setData({
              isShowPianxin
            })
            wx.setStorageSync('isShowPianxin', isShowPianxin)
          }
        },
        fail: function (res) {},
        complete: function (res) {},
      })
      
    }

    wx.setStorageSync('isLove', isLove)
    this.setData({
      isLove: isLove,
      isShowPianxin
    })
  },

  //不重复抽取
  switchChangeNoRepetitionSelect() {
    var isRepeat = this.data.isRepeat
    isRepeat = isRepeat ? false : true;
    wx.setStorageSync('isRepeat', isRepeat)
    this.setData({
      isRepeat: isRepeat
    })
  },

  onShareAppMessage: function () {

  }
})