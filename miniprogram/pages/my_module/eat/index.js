// app.js
let jsonData = require('data.js');
Page({
  data: {
    bannerUnitId: getApp().globalData.bannerUnitId,
    title: "今天吃什么",
    btnName: "准备开始",
    dishName: "",
    keyIsCustom: "keyIsCustom",
    imagePath: '',
    itemsBean: [],
    MyDishList: [],
    DishList: {},
    timer: '',
    delayTimer: "",
    isFirst: true,
    isShowMoreTools: false,
    isCustom: false,
    key: "KEY_MyDishListInfo",
    keyIndex: "KEY_EAT_INDEX",
    index: 0,
    buttons: [{
      id: 0,
      name: "吃什么",
      checked: true
    }, {
      id: 1,
      name: "买啥菜",
      checked: false
    }, {
      id: 2,
      name: "喝什么",
      checked: false
    }, {
      id: 3,
      name: "减脂餐",
      checked: false
    }, {
      id: 4,
      name: "自定义",
      checked: false
    }],
    KEY_LISTS_KEYS: []
  },

  onLoad() {
    let _this = this
    wx.setNavigationBarTitle({
      title: this.data.title
    });

    //选项
    wx.getStorage({
      key: _this.data.keyIndex,
      success(res) {
        _this.setData({
          index: res.data,
        })
        _this.getDishListInfo()
        _this.getMyDishListInfo()
      },
      fail(err){
        _this.getDishListInfo()
        _this.getMyDishListInfo()
      }
    })

    setTimeout(function () {
      _this.exec()
    }, 2000)
  },

  clickItem(event) {
    let _this = this;
    let index = event.currentTarget.dataset.id.id;
    let newButtons = _this.data.buttons
    newButtons.map(item => {
      if (item.id == index) {
        item.checked = true
      } else {
        item.checked = false
      }
      return item;
    })
    wx.setStorage({
      'key': _this.data.keyIndex,
      'data': index
    })
    _this.setData({
      buttons: newButtons,
      index: index,
      isCustom: index == newButtons.length - 1,
      dishName: ""
    })
  },

  exec() {
    let _this = this;

    let key = _this.data.KEY_LISTS_KEYS[_this.data.index]
    if (_this.data.isCustom) {
      _this.setData({
        itemsBean: _this.data.MyDishList
      })
    } else {
      if (!_this.data.DishList || _this.data.DishList.length == 0) {
        _this.getDishListInfo();
      }
      _this.setData({
        itemsBean: _this.data.DishList[key]
      })
    }

    if (!_this.data.itemsBean || _this.data.itemsBean.length == 0) {
      if (!_this.data.isFirst) {
        wx.showToast({
          title: '没有数据,请先添加!',
          icon: "none"
        })
      }
      _this.setData({
        isFirst: false
      })
      return
    }

    if (_this.data.timer) {
      clearInterval(_this.data.timer);
      clearTimeout(_this.data.delayTimer)
      _this.setData({
        timer: '',
        delayTimer: '',
        btnName: "重新选择",
      })
      return
    }

    let timer = setInterval(function () {
      let number = Math.round(Math.random() * (_this.data.itemsBean.length - 1))
      _this.setData({
        dishName: _this.data.itemsBean[number].name
      })
    }, 50)

    let delayTimer = setTimeout(function () {
      if (_this.data.timer) {
        clearInterval(_this.data.timer);
        _this.setData({
          timer: '',
          delayTimer: '',
          btnName: "重新选择"
        })
      }
    }, 3000)

    _this.setData({
      timer: timer,
      delayTimer: delayTimer,
      btnName: "停止"
    })
  },

  custom() {
    wx.navigateTo({
      url: "./edit_eat"
    })
  },

  //获取自定义列表
  getMyDishListInfo() {
    let _this = this;
    wx.getStorage({
      key: _this.data.key,
      success(res) {
        if (res.data) {
          _this.setData({
            MyDishList: JSON.parse(res.data)
          })
        }
      }
    })
  },

  getDishListInfo() {
    let _this = this;

    let result = jsonData.data.result
    let array = result["KEY_LISTS"]
    let buttons = new Array();
    for (let index = 0; index < array.length; index++) {
      let button = {
        name: array[index],
        checked: index == _this.data.index,
        id: index
      }
      buttons.push(button)
    }
    _this.setData({
      buttons: buttons,
      KEY_LISTS_KEYS: result["KEY_LISTS_KEYS"],
      DishList: result
    })
    _this.setData({
      isCustom: _this.data.index == _this.data.buttons.length - 1
    })
  },

  add() {
    let _this = this;
    let isExist = _this.isExist(_this.data.MyDishList, _this.data.dishName)
    if (isExist) {
      wx.showToast({
        title: '已经添加了!',
        icon: "none"
      })
      return
    }
    let itemsList = _this.data.MyDishList;
    let item = {
      _id: new Date().getTime(),
      name: _this.data.dishName
    }
    itemsList.push(item);
    _this.setData({
      MyDishList: itemsList
    })

    wx.setStorage({
      key: _this.data.key,
      data: JSON.stringify(itemsList)
    })

    wx.showToast({
      title: '添加完成!',
      icon: "none"
    })
  },
  isExist(arr, name) {
    let re = false;
    arr.forEach(element => {
      if (element.name == name) {
        re = true;
        return;
      }
    });
    return re;
  },
  onShareAppMessage: function (e) {
    return {
      title: "吃什么,不再纠结,快来试试吧！",
      imageUrl: "share.png"
    };
  },
  onShareTimeline: function () {
    return {
      title: "今天吃什么,不再纠结,快来试试吧！"
    };
  },

})