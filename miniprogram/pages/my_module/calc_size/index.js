//获取应用实例
var app = getApp()
Page({
  data: {
    banquan: app.globalData.banquan,
    motto: 'Hello World',
    userInfo: {},
    showLoading: false,
    my_shengao: "",
    my_tizhong: "",
    index: 0,
    show_no: 0, //是否显示计算框
    kdgs: [{
      id: "3",
      name: "女装"
    }, {
      id: "7",
      name: "男装"
    }, {
      id: "4",
      name: "女衬衫"
    }, {
      id: "5",
      name: "连衣裙"
    }, {
      id: "6",
      name: "女裤子"
    }, {
      id: "8",
      name: "男衬衫"
    }, {
      id: "9",
      name: "男西装"
    }, {
      id: "10",
      name: "男裤子"
    }, {
      id: "11",
      name: "童装"
    }, {
      id: "12",
      name: "婴童装(0-1.5岁)"
    }, {
      id: "13",
      name: "中童装(1.5-10岁)"
    }, {
      id: "14",
      name: "大童装(10-15岁)"
    }, {
      id: "15",
      name: "文胸"
    }, {
      id: "16",
      name: "内裤"
    }, {
      id: "17",
      name: "鞋码"
    }],
    ci: "",
    tishi1: "您的身高，单位：厘米",
    tishi2: "您的体重，单位：斤"
  },

  banquan: function () {
    wx.navigateTo({
      url: '../about/index'
    })
  },
  //输入框事件
  get_shengao: function (e) {
    //console.log(e);
    this.setData({
      my_shengao: e.detail.value
    });
  },
  //输入框事件
  get_tizhong: function (e) {
    //console.log(e);
    this.setData({
      my_tizhong: e.detail.value
    });
  },

  bindPickerChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)    
    this.setData({
      index: e.detail.value
    })
    this.data.ci = this.data.kdgs[this.data.index].id;
    this.set_conbiao(this.data.ci);
    console.log('picker发送选择改变，携带值为', this.data.ci)
    this.setData({
      ci: this.data.ci
    })
    this.set_conbiao(this.data.ci);
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据

    this.data.ci = this.data.kdgs[this.data.index].id;
    this.set_conbiao(this.data.ci);

  },

  //点击查询事件
  btnClick: function () {
    var thispage = this;
    this.calSize(this.data.my_shengao, this.data.my_tizhong, this.data.kdgs[this.data.index].id, function (data) {
      //console.log(data);      
      thispage.setData({
        chimaInfo: data
      });
    });
  },

  //设置页面内容
  set_conbiao: function (ci) {
    if (ci == 3) {
      this.data.show_no = 0;
      var cm_title = "女装标准尺码对照表";
      var cm_shuoming = "\n说明：\n上述提供的计算公式是根据经验得到的数据参数，适用于绝大多数人群，不适用于特殊体型要求。\n国内比较普遍的一个判断胖瘦的公式是：\n女性之标准体重（千克）＝身长（厘米）－102\n注意：身高体重与尺寸没有绝对的关系，155CM丰腴和168CM瘦高的女生也许会穿同一个尺寸。胸围是影响上衣尺寸选择的关键因素，建议你可以以胸围选择。";
    } else if (ci == 4) {
      this.data.show_no = 0;
      var cm_title = "女衬衫标准尺码对照表";
      var cm_shuoming = "\n国家服装号型的含义 号型定义：\n\"号\"指人体的身高，以cm为单位，是设计和选购服装长短的依据；\"型\"指人体的胸围和腰围，以cm为单位，是设计和选购服装肥瘦的依据。体型分类：以人体的胸围与腰围的差数为依据来划分体型，并将体型分为四类，体型分类代号分别为Y(偏瘦) 、A（正常）、B（偏胖）、C（肥胖）\n本尺码对照表仅作参考之用。请您在试穿之后量身选择适合自己的尺寸。";
    } else if (ci == 5) {
      this.data.show_no = 0;
      var cm_title = "连衣裙尺码对照表";
      var cm_shuoming = "\n服装号型标志：\n号型的表示方法为号与型之间用斜线分开，后接体型分类代号。例如：上装160 / 84A，其中160为身高，代表号，84为胸围，代表型，A代表体型代号；下装160 / 68A，其中160为身高，代表号，68为腰围，代表型，A代表体型代号。\n本尺码对照表仅作参考之用。请您在试穿之后量身选择适合自己的尺寸。";
    } else if (ci == 6) {
      this.data.show_no = 0;
      var cm_title = "女裤子尺码对照表";
      var cm_shuoming = "注意：上表中，裤子尺码的单位：英寸，臀围和胸围的单位：CM\n\n如何测量裤侧长：从腰部开始测量一直到脚裸的长度就是裤侧长。\n如何测量腰围：经脐点(om)的腰部水平围长\n标准腰围计算方法：腰围 = 身高的1 / 2减19厘米(如:身高160cm的标准腰围 = 160cm / 2 - 19=61cm )\n本尺码对照表仅作参考之用。请您在试穿之后量身选择适合自己的尺寸。";
    } else if (ci == 7) {
      this.data.show_no = 0;
      var cm_title = "男装标准尺码对照表";
      var cm_shuoming = "\n说明：\n上述提供的计算公式是根据经验得到的数据参数，试用于绝大多数人群，不适用于特殊体型要求。\n国内比较普遍的一个判断胖瘦的公式是：\n    男性标准体重：身高（厘米）－105 = 标准体重（千克）\n本尺码对照表仅作参考之用。请您在试穿之后量身选择适合自己的尺寸。";
    } else if (ci == 8) {
      this.data.show_no = 0;
      var cm_title = "男衬衫尺码对照表";
      var cm_shuoming = "\n注意：\n男式西服按照男士体型可分为偏瘦型、标准型、偏胖型。但这只是标准尺码，实际生活中因个人体型差异较大，本尺码仅作参考之用。请您在试穿之后量身选择适合自己的尺寸。";
    } else if (ci == 9) {
      this.data.show_no = 0;
      var cm_title = "西装尺码对照表";
      var cm_shuoming = "\n注意：\n男式西服按照男士体型可分为偏瘦型、标准型、偏胖型。但这只是标准尺码，实际生活中因个人体型差异较大，本尺码仅作参考之用。请您在试穿之后量身选择适合自己的尺寸。";
    } else if (ci == 10) {
      this.data.show_no = 0;
      var cm_title = "男裤子尺码对照表";
      var cm_shuoming = "\n注意：\n本尺码仅作参考之用。请您在试穿之后量身选择适合自己裤子尺码。";
    } else if (ci == 11) {
      this.data.show_no = 0;
      var cm_title = "童装尺码对照表";
      var cm_shuoming = "\n说明：\n上述提供的计算公式是根据经验得到的数据参数，试用于绝大多数人群，不适用于特殊体型要求。注意：表格中尺码项即为小孩身高，请顾客按照尺码项选择合适的码数，宝贝幼嫩肌肤。";
    } else if (ci == 12) {
      this.data.show_no = 0;
      var cm_title = "婴童尺码对照表";
      var cm_shuoming = "\n说明：\n上述提供的计算公式是根据经验得到的数据参数，试用于绝大多数人群，不适用于特殊体型要求。\n注意：表格中尺码项即为小孩身高，请顾客按照尺码项选择合适的码数。宝贝幼嫩肌肤，需要用心呵护。童装与成人服饰最大的区别在于用料和印染技术，童装需要精选上等环保面料，采用最新最环保的印染技术，保证毎一件衣服都对宝贝的皮肤无任何刺激。";
    } else if (ci == 13) {
      this.data.show_no = 0;
      var cm_title = "中童尺码对照表";
      var cm_shuoming = "\n说明：\n上述提供的计算公式是根据经验得到的数据参数，试用于绝大多数人群，不适用于特殊体型要求。\n注意：表格中尺码项即为小孩身高，请顾客按照尺码项选择合适的码数。\n吊牌上的执行标准的含义：\nA类，B类，C类的含义：这是国标中对甲醛含量的规定，A类是婴糼儿用品，B类是直接接触皮肤，C类是非直接接触皮肤。";
    } else if (ci == 14) {
      this.data.show_no = 0;
      var cm_title = "大童尺码对照表";
      var cm_shuoming = "\n说明：\n上述提供的计算公式是根据经验得到的数据参数，试用于绝大多数人群，不适用于特殊体型要求。\n注意：表格中尺码项即为小孩身高，请顾客按照尺码项选择合适的码数。\n宝贝幼嫩肌肤，需要用心呵护。童装与成人服饰最大的区别在于用料和印染技术，童装需要精选上等环保面料，采用最新最环保的印染技术，保证毎一件衣服都对宝贝的皮肤无任何刺激。";
    } else if (ci == 15) {
      this.data.show_no = 0;
      var cm_title = "文胸尺码对照表";
      var cm_shuoming = "\n注意：\n本尺码仅作参考之用。请您在试穿之后量身选择适合自己的尺码。";
      this.data.tishi1 = "上胸围，单位：厘米";
      this.data.tishi2 = "下胸围，单位：厘米"
    } else if (ci == 16) {
      var cm_title = "内裤尺码对照表";
      var cm_shuoming = "\n备注：\n按贴身腰围为准。相同码数，但因款式不同、材料不同等因素，会有2cm左右偏差，购买时最好咨询相关人员为准。\n本尺码仅作参考之用。请您在试穿之后量身选择适合自己的尺寸。";
      this.data.show_no = 1;
    } else if (ci == 17) {
      var cm_title = "鞋码尺码对照表";
      var cm_shuoming = "\n选购时请综合参考尺码表中的各项参数，这有助您选择到更好的尺码。\n(仅供参考，测量脚时请注意用适当力度轻踩水平面上。因测量方法不同，测量出来的数据也会不一样。)\n国际标准鞋号表示的是脚长的毫米数。中国标准采用毫米数或厘米数。如：245是毫米数，24 1/ 2是厘米数，表示一样的尺码。";
      this.data.show_no = 1;
    }
    this.setData({
      ci: ci,
      cm_title: cm_title,
      cm_shuoming: cm_shuoming,
      tishi1: this.data.tishi1,
      tishi2: this.data.tishi2,
      show_no: this.data.show_no
    })
  },

  //计算尺码
  calSize: function (height, wight, ci, cb) {
    if (height == "" || wight == "" || isNaN(height) || isNaN(wight)) {
      cb("请输入有效的数据");
      return;
    }
    var size;
    var sarr = new Array();
    if (ci >= 3 && ci <= 6) {
      sarr = ["S", 80, 99, 145, 149, "S", 90, 99, 150, 169, "S", 80, 89, 160, 169, "M", 80, 99, 170, 172, "M", 90, 99, 173, 175, "M", 100, 109, 145, 149, "M", 100, 109, 155, 179, "L", 110, 119, 145, 149, "L", 110, 119, 155, 179, "L", 120, 129, 155, 159, "L", 120, 129, 170, 179, "XS", 80, 89, 150, 159, "XL", 110, 119, 150, 154, "XL", 120, 129, 145, 154, "XL", 120, 129, 160, 169, "XL", 130, 139, 160, 179, "XL", 140, 149, 173, 179, "XXL", 130, 139, 150, 159, "XXL", 140, 149, 155, 172];
    } else if (ci <= 10) {
      sarr = [44, 85, 115, 153, 163, 44, 85, 105, 163, 168, 44, 85, 95, 168, 173, 46, 115, 135, 153, 163, 46, 135, 145, 153, 158, 46, 105, 125, 163, 168, 46, 95, 115, 168, 173, 46, 95, 105, 173, 178, 48, 145, 165, 153, 158, 48, 135, 155, 158, 163, 48, 125, 145, 163, 168, 48, 115, 145, 168, 173, 48, 105, 125, 173, 178, 48, 105, 115, 178, 183, 50, 165, 185, 153, 158, 50, 155, 175, 158, 163, 50, 145, 165, 163, 168, 50, 145, 155, 168, 173, 50, 125, 155, 173, 178, 50, 115, 135, 178, 183, 50, 115, 125, 183, 188, 52, 175, 195, 158, 163, 52, 165, 185, 163, 168, 52, 155, 175, 168, 173, 52, 155, 165, 173, 183, 52, 135, 155, 178, 183, 52, 125, 145, 183, 188, 52, 125, 135, 188, 193, 54, 185, 195, 163, 173, 54, 175, 185, 168, 178, 54, 165, 175, 173, 188, 54, 145, 165, 183, 188, 54, 135, 155, 188, 193, 56, 195, 215, 168, 183, 56, 185, 195, 173, 193, 56, 175, 185, 178, 193, 56, 155, 175, 188, 193, 58, 195, 215, 183, 193];
    } else if (ci <= 14) {
      sarr = [59, 6, 11, 55, 62, 66, 12, 14, 55, 62, 66, 8, 16, 63, 69, 73, 17, 20, 63, 69, 73, 12, 20, 70, 76, 80, 21, 24, 70, 76, 80, 16, 24, 77, 83, 90, 23, 28, 77, 83, 90, 20, 30, 84, 94, 100, 31, 36, 84, 94, 100, 22, 38, 95, 104, 110, 39, 44, 95, 104, 110, 26, 42, 105, 114, 120, 43, 52, 105, 114, 120, 34, 52, 115, 124, 130, 53, 60, 115, 124, 130, 40, 60, 125, 134, 140, 61, 80, 125, 134, 140, 52, 76, 135, 144, 150, 77, 90, 135, 144, 150, 70, 84, 145, 154, 160, 85, 100, 145, 154, 160, 80, 110, 155, 164, 165, 111, 130, 155, 164];
    } else if (ci == 15) {
      sarr = ["32/70A", 68, 72, 80, 82, "32/70B", 68, 72, 83, 84, "32/70C", 68, 72, 85, 87, "32/70D", 68, 72, 88, 88, "34/75A", 73, 77, 85, 87, "34/75B", 73, 77, 88, 89, "34/75C", 73, 77, 90, 94, "34/75D", 73, 77, 95, 97, "34/75E", 73, 77, 98, 98, "36/80A", 78, 82, 90, 92, "36/80B", 78, 82, 93, 94, "36/80C", 78, 82, 95, 97, "36/80D", 78, 82, 98, 102, "36/80E", 78, 82, 103, 103, "38/85A", 83, 87, 95, 97, "38/85B", 83, 87, 99, 101, "38/85C", 83, 87, 101, 103, "38/85D", 83, 87, 103, 105, "40/90B", 88, 92, 103, 104, "40/90C", 88, 92, 105, 107, "40/90D", 88, 92, 108, 112, "40/90E", 88, 92, 113, 113];
    }
    for (var i = 0; i < sarr.length / 5; i++) {
      if (wight >= sarr[5 * i + 1] && wight <= sarr[5 * i + 2] && height >= sarr[5 * i + 3] && height <= sarr[5 * i + 4]) {
        size = sarr[5 * i];
        break;
      }
      if (i == sarr.length / 5 - 1) {
        cb("亲！你的身材实在是太棒了，已经超出了普通人的范畴！");
        return;
      }
    }
    if (ci == 6) {
      switch (size) {
        case "XS":
          size = "24/25";
          break;
        case "S":
          size = "25/26";
          break;
        case "M":
          size = "27/28";
          break;
        case "L":
          size = "29/30";
          break;
        case "XL":
          size = "31/32";
          break;
        case "XXL":
          size = "33/34";
          break;
      }
    }
    if (ci == 7) {
      switch (size) {
        case 44:
          size = "XS";
          break;
        case 46:
          size = "S";
          break;
        case 48:
          size = "M";
          break;
        case 50:
          size = "L";
          break;
        case 52:
          size = "XL";
          break;
        case 54:
          size = "XXL";
          break;
        case 56:
          size = "XXXL";
          break;
      }
    }
    if (ci == 8) {
      switch (size) {
        case 44:
          size = "37";
          break;
        case 46:
          size = "38";
          break;
        case 48:
          size = "39";
          break;
        case 50:
          size = "40";
          break;
        case 52:
          size = "41";
          break;
        case 54:
          size = "42";
          break;
        case 56:
          size = "43";
          break;
      }
    }
    if (ci == 10) {
      switch (size) {
        case 44:
          size = "27";
          break;
        case 46:
          size = "28/29/30";
          break;
        case 48:
          size = "30/31/32";
          break;
        case 50:
          size = "33/34";
          break;
        case 52:
          size = "35/36";
          break;
        case 54:
          size = "38";
          break;
        case 56:
          size = "40";
          break;
      }
    }
    cb("您适合的尺码为：" + size);
    return;
  },

  onShareAppMessage: function (e) {
    return {
      title: "明星工具箱--尺码计算器",
      path: "/pages/my_module/calc_size/index"
    };
  },
  onShareTimeline: function () {},

})