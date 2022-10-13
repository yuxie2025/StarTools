// pages/my_module/eat/edit_eat.js
Page({
  data: {
    title: "编辑",
    name: "",
    itemsList: [],
    key: "KEY_MyDishListInfo"
  },

  async onLoad(options) {
    let _this = this;
    wx.setNavigationBarTitle({
      title: this.data.title
    });
    wx.getStorage({
      key: _this.data.key,
      success(res) {
        if (res.data) {
          var items = JSON.parse(res.data)
          _this.setData({
            itemsList: items
          })
        }
      }
    })
  },

  bindKeyInput(e) {
    this.setData({
      name: e.detail.value
    })
  },

  delete(event) {
    let _this = this;
    let _id = event.currentTarget.dataset.id._id;

    var newItemsList = _this.data.itemsList.filter(item => item._id != _id)
    console.log(newItemsList)
    _this.setData({
      itemsList: newItemsList
    })
    wx.setStorage({
      key: _this.data.key,
      data: JSON.stringify(newItemsList)
    })
  },

  add() {
    let _this = this;
    if (!_this.data.name) {
      wx.showToast({
        title: '请输入菜名!',
        icon: "none"
      })
      return
    }

    if (_this.data.name.length > 20) {
      wx.showToast({
        title: '太长了!',
        icon: "none"
      })
      return
    }

    let isExist = _this.isExist(_this.data.itemsList, _this.data.name)
    if (isExist) {
      wx.showToast({
        title: '已经添加了!',
        icon: "none"
      })
      return
    }
    let itemsList = _this.data.itemsList;
    let item = {
      _id: new Date().getTime(),
      name: _this.data.name
    }
    itemsList.push(item);
    _this.setData({
      itemsList: itemsList
    })
    
    wx.setStorage({
      key: _this.data.key,
      data: JSON.stringify(itemsList)
    })
  },

  isExist(arr, name) {
    let re = false;
    arr.forEach(element => {
      if (element.name == name) {
        console.log(element.name)
        re = true;
        return;
      }
    });
    return re;
  }

})