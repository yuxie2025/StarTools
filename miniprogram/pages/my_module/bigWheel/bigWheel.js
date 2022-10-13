var util = require('./util')
const imgUrl = require("./imgUrl")
var app = getApp();

var xiaojuedingArr = require('./xiaojueding')
wx.setStorageSync('all', xiaojuedingArr);

//当 sort() 函数比较两个值时，会将值发送到比较函数，并根据所返回的值（负、零或正值）对这些值进行排序
//下面正负随机出现，也就是每比较一次，按照随机的正序逆序
/* function randomsort(a, b) {
   //return a - b   从大到小，正序
   return Math.random() > .5 ? -1 : 1;
}
 */
var page = {
  data: {
    bannerUnitId: getApp().globalData.bannerUnitId,
    bigWheel_edit_circle: imgUrl.bigWheel_edit_circle,
    bigWheel_setting: imgUrl.bigWheel_setting,
    size: { //转盘大小可配置
      w: 500,
      h: 500
    },
    resAnimation: {},
    isBigWheel: true,
    musicflg: false,
    rotateTime: 3000,
    isLove: true,
    repeat: false,
    xiaojuedingArr: xiaojuedingArr.sort(util.randomsort),
    s_awards: '???', //结果
    myJueding: [],
    share: true,

    //画布--------------------------------
    canvasWidth: 400,
    canvasHeight: 650,
    showCanvasFlag: false,

    colorArr: [
      '#EE534F',
      '#FF7F50',
      '#FFC928',
      '#66BB6A',
      '#42A5F6',
      '#5C6BC0',
      '#AA47BC',
      '#EC407A',
      '#FFB6C1',
      '#FFA827'
    ],
    fontArr: ['italic', 'oblique', 'normal'],
    sizeArr: [12, 14, 16, 18, 20, 22, 24, 26, 28],

    eweimaUrl: '../../images/erweima.jpg',

    shengchengUrl: '',

    saveFrameFlag: false,
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
  //================================下面是大转盘的处理函数============================
  setting: function (e) {
    wx.navigateTo({
      url: '../bigWheel/bigWheelSetting/bigWheelSetting',
    })
  },
  reset: function (e) {
    if (this.data.s_awards != '???' && !this.data.zhuanflg) {
      this.zhuanpan.reset();
    }
  },
  toChoose: function (e) {
    wx.redirectTo({
      url: '../bigWheel/chooseItem/chooseItem',
    })
  },

  //接收当前转盘初始化时传来的参数
  getData(e) {
    this.setData({
      awardsConfig: e.detail,
    })
    // console.log(this.data.awardsConfig,'index.js')
  },

  //接收当前转盘结束后的答案选项
  getAwards(e) {
    this.setData({
      s_awards: e.detail.end ? "???" : e.detail.s_awards,
      share: e.detail.end ? true : false,
    })
    //  console.log(this.data.s_awards,'index.js')
  },

  //开始转
  startZhuan(e) {
    this.setData({
      zhuanflg: e.detail ? true : false
    })
    //console.log(this.data.zhuanflg,'index.js')
    if (!e.detail) {
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })

      animation.scale(2, 2).rotate(360).step();

      animation.scale(1).step()
      this.setData({
        resAnimation: animation.export()
      })
    }
  },

  onLoad: function (options) {
    //  console.log('=========onload============');
    //父组件还可以通过 this.selectComponent 方法获取子组件实例对象，这样就可以直接访问组件的任意数据和方法
    this.zhuanpan = this.selectComponent("#zhuanpan");
  },

  //点击切换转盘选项
  xiaojueding(e) {
    var that = this,
      idx = e.currentTarget.dataset.idx,
      myJueding = that.data.myJueding;

    if (!that.data.zhuanflg && myJueding.length > 0) {
      for (let x in myJueding) {
        if (idx == x && myJueding[x].id != that.data.awardsConfig.id) {
          that.zhuanpan.switchZhuanpan(myJueding[x]); //切换当前转盘数据选项 
          return;
        }
      }
    }
  },

  onShow: function (e) {
    //  console.log('============onShow============');
    var that = this,
      id_fromChoose = wx.getStorageSync('id_fromChoose'),
      all = wx.getStorageSync('all'),
      xiaojuedingArr = that.data.xiaojuedingArr,
      myJueding = wx.getStorageSync('myJueding')
    // console.log(all)
    // console.log(myJueding)


    //判断从热门小决定 还是个人小决定跳转过来的 还是编辑页面跳过来的
    all = app.globalData.fromDefaultJueding ? xiaojuedingArr : app.globalData.fromMyjueding ? myJueding : xiaojuedingArr;

    console.log(all, '**************')

    var isRepeat = wx.getStorageSync('isRepeat')
    var isSound = wx.getStorageSync('isSound')
    var isLove = wx.getStorageSync('isLove')
    var speed = wx.getStorageSync('speed')
    console.log(speed, 'speed')
    that.setData({
      rotateTime: (7 - speed) * 1000,
      musicflg: isSound,
      isLove: isLove,
      repeat: isRepeat,
      myJueding: myJueding
    })

    //跳转过来的
    if (!util.isNull(id_fromChoose)) {

      /*           wx.showLoading({
                  title: '加载中',
               })  */
      setTimeout(function () {
        for (let i in all) {
          if (all[i].id == id_fromChoose) {
            that.zhuanpan.switchZhuanpan(all[i], true); //切换当前转盘数据选项 
            that.setData({
              zhuanflg: false
            })
            break;
          }
        }
        //  wx.hideLoading();
      }, 500)
    }
  },
  onShareAppMessage: function () {
    return {
      title: '偏心，大转盘~',
      path: '/pages/my_module/bigWheel/bigWheel'
    }
  },
  onShareTimeline: function () {},

}
Page(page);