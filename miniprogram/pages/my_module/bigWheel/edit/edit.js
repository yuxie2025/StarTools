// pages/edit/edit.js
var util = require('../util.js')
const imgUrl = require("../imgUrl")
const Base64 = require("../../../utils/Base64")
var app = getApp()

Page({
  data: {
    bigWheel_questionMark: imgUrl.bigWheel_questionMark,
    bigWheel_sub: imgUrl.bigWheel_sub,
    bigWheel_add: imgUrl.bigWheel_add,
    isLove: false,
    probability: 1,
    input_answer_list: [],
    default_input_answer_list: {},
    name: '',
    flg: 0,
    colorArr: [ //增加选项的默认颜色排序
      '#EE534F',
      '#FF7F50',
      '#FFC928',
      '#66BB6A',
      '#42A5F6',
      '#FF7F50',
      '#AA47BC',
      '#EC407A',
      '#DA70D6',
      '#FFA827',
      '#AA47BC',
      '#EE534F',
      '#42A5F6',
      '#66BB6A',
      '#FFC928',
      '#42A5F6',
      '#5C6BC0',
    ]
  },
  changeProbability: function (e) {
    var that = this,
      val = e.detail.value,
      index = e.currentTarget.dataset.index,
      input_answer_list = that.data.input_answer_list,
      default_input_answer_list = that.data.default_input_answer_list;

    for (let i in input_answer_list) {
      if (index == i) {
        input_answer_list[i].probability = val
      }
    }
    default_input_answer_list.awards = input_answer_list;
    that.setData({
      input_answer_list: input_answer_list,
      default_input_answer_list: default_input_answer_list
    })

  },

  onLoad: function (options) {
    console.log("1111")
    console.log(options)
    var that = this,
      obj = {},
      myJueding = wx.getStorageSync('myJueding'),
      idArr = []

    var isLove = wx.getStorageSync('isLove')
    this.setData({
      isLove: isLove
    })
    //做一个id是否重复的判断

    //获取id
    for (let index = 0; index < myJueding.length; index++) {
      idArr.push(myJueding[index].id)
    }
    console.log(idArr)

    if (options != undefined) {
      //添加个人小决定
      if (options.flg == 2) {
        return;
      }
      console.log(options)

      let item = Base64.decode(options.item);
      if (item[item.length-1] != "}") {
        item = item.substring(0, item.length - 1)
      }
      if (item[item.length-1] != "}") {
        item = item.substring(0, item.length - 1)
      }
      obj = JSON.parse(item);
      //从热门决定编辑跳过来的
      //个人决定编辑跳过来的
      that.setData({
        input_answer_list: obj.awards,
        default_input_answer_list: obj,
        name: obj.option
      })
    }
  },

  //小决定的名称
  checkQuestion(e) {
    var that = this,
      val = e.detail.value,
      default_input_answer_list = that.data.default_input_answer_list;

    default_input_answer_list.option = val

    that.setData({
      name: val,
      default_input_answer_list: default_input_answer_list
    })
  },

  //小决定选项
  checkAnswer(e) {
    var that = this,
      val = e.detail.value,
      index = e.currentTarget.dataset.index,
      input_answer_list = that.data.input_answer_list,
      default_input_answer_list = that.data.default_input_answer_list;

    for (let i in input_answer_list) {
      if (index == i) {
        input_answer_list[i].name = val
      }
    }
    default_input_answer_list.awards = input_answer_list;
    that.setData({
      input_answer_list: input_answer_list,
      default_input_answer_list: default_input_answer_list
    })
  },

  //增加
  addAnswer() {
    var that = this,
      input_answer_list = that.data.input_answer_list,
      colorArr = that.data.colorArr,
      obj = {};
    if (input_answer_list.length == 17) {
      wx.showToast({
        title: '选项长度最多17项',
        icon: 'none',
        mask: false
      })
      return;
    }
    obj = {
      probability: 1,
      name: '',
      color: colorArr[input_answer_list.length]
    };
    input_answer_list.push(obj);
    that.setData({
      input_answer_list: input_answer_list
    })
  },

  //删除
  subAnswer(e) {
    var that = this,
      index = e.currentTarget.dataset.index,
      input_answer_list = that.data.input_answer_list,
      default_input_answer_list = that.data.default_input_answer_list,
      colorArr = that.data.colorArr;
    for (let i in input_answer_list) {
      if (i == index) {
        input_answer_list.splice(i, 1);
        break;
      }
    }

    for (let x in input_answer_list) {
      input_answer_list[x].color = colorArr[x];
    }

    default_input_answer_list.awards = input_answer_list;
    that.setData({
      input_answer_list: input_answer_list,
      default_input_answer_list: default_input_answer_list
    })
  },


  //关键问题
  //保存
  saveQA() {
    var that = this,
      myJueding = wx.getStorageSync('myJueding'),
      default_input_answer_list = that.data.default_input_answer_list,
      input_answer_list = that.data.input_answer_list,
      all = wx.getStorageSync('all'),
      arr = [];

    //取id以后需要再改进
    default_input_answer_list.id = myJueding.length + Math.ceil(Math.random() * 1000) + 10;
    //default_input_answer_list.num = myJueding.length + Math.ceil(Math.random() * 100) + 10;
    that.setData({
      default_input_answer_list: default_input_answer_list
    })

    if (that.data.name == '') {
      wx.showToast({
        title: '名称不能为空',
        icon: 'none',
        mask: false
      })
    } else {
      for (let y in input_answer_list) {

        /*            var ppp = input_answer_list[y].name.split('*')
                   if (isNaN(ppp[1])) {
                      input_answer_list[y].probability = 1
                   } else {
                      input_answer_list[y].probability = Number(ppp[1])
                   }
                   input_answer_list[y].name = ppp[0]

                   default_input_answer_list.awards = input_answer_list;
                   that.setData({
                      input_answer_list: input_answer_list,
                      default_input_answer_list: default_input_answer_list
                   }) */
        if (input_answer_list[y].name == '') {

          wx.showToast({
            title: '选项不能为空',
            icon: 'none',
            mask: false
          })
          return;
        }
      }

      if (input_answer_list.length < 2) {
        wx.showToast({
          title: '选项最少填2个',
          icon: 'none',
          mask: false
        })
        return;
      }

      //如果我的决定是空的
      if (util.isNull(myJueding)) {
        app.globalData.fromMyjueding = true;
        //就把当前数据直接存到myJueding中
        arr.push(default_input_answer_list);
        wx.setStorageSync('myJueding', arr);
        //把id也存进去
        wx.setStorageSync('id_fromChoose', default_input_answer_list.id);

        //all里面放的是所有的东西
        all.push(default_input_answer_list);
        wx.setStorageSync('all', all);
        //wx.setStorageSync('num', wx.getStorageSync('num') + 1);
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          mask: false,
          success: function () {
            setTimeout(function () {
              wx.redirectTo({
                url: '../bigWheel',
              })
            }, 1500)
          }
        })
        return;
      } else {

        //没有相同的num
        //个人决定添加的
        app.globalData.fromMyjueding = true;
        wx.setStorageSync('id_fromChoose', default_input_answer_list.id);
        //把数据加进来
        myJueding.push(default_input_answer_list);

        wx.setStorageSync('myJueding', myJueding);
        console.log('-id不相同')
        all.push(default_input_answer_list);
        wx.setStorageSync('all', all);

        //wx.setStorageSync('num', wx.getStorageSync('num') + 1);
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          mask: false,
          success: function () {
            setTimeout(function () {
              wx.redirectTo({
                url: '../bigWheel',
              })
            }, 1500)
          }
        })
      }
    }
  },


  onShareAppMessage: function () {
    let that = this;
    mta.Event.stat("share", {
      'time': '1'
    });
    var picNum = Math.floor(Math.random() * 4 + 1); //获取1-4的随机数，用于随机展示分享图片
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