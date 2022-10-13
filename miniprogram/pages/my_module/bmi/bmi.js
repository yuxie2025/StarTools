//index.js
//获取应用实例
var app = getApp();
Page({
  rules: [
    [18.5, 24,27,30],
    [18.5, 25, 30, 35, 40],
    [18.5, 23, 25, 30]
  ],
  standardMax:[23.9,24.9,22.9],
  ruleConfig: ['偏瘦', '正常', '偏胖', '肥胖', '重度肥胖', '极重度肥胖'],
  dangerConfig: ['低（但其它疾病危险性增加）', '平均水平', '增加', '中度增加', '严重增加', '非常严重增加'],
  data: {
    inputValue:'',
    conditionColor:'green',
    color:['lightskyblue','green','goldenrod','darkorange','red','darkred',],
    array: ['中国标准', 'WHO标准', '亚洲标准'],
    index: 0,
    score: 0,
    height: 0,
    weight: 0,
    physicalCondition: '未知',
    weightStandardMin: 0,
    weightStandardMax: 0,
    danger: '未知',
    charLt: '<'
  },
  onLoad: function () {

  },
  copyLink:function(e){
    wx.setClipboardData({
      data: 'https://github.com/caizhenbo/BIM',
    })
  },
  clear:function(e){
    this.setData({
      inputValue:'',
      conditionColor:'green',
      index: 0,
      score: 0,
      height: 0,
      weight: 0,
      physicalCondition: '未知',
      weightStandardMin: 0,
      weightStandardMax: 0,
      danger: '未知',
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindKeyHightInput: function (e) {
    this.setData({
      height: e.detail.value
    })
  },
  bindKeyWeightInput: function (e) {
    this.setData({
      weight: e.detail.value
    })
  },
  calculateBtn: function (e) {
    if (!this.data.height) {
      wx.showToast({
        title: '请输入身高'
      })
      return false;
    }

    if (!this.data.weight) {
      wx.showToast({
        title: '请输入体重'
      })
      return false;
    }
    this.calculate();
    this.weightStandardCalculate();
    this.physicalConditionCalculate();
  },
  //计算IBM值
  calculate: function () {
    let score = 0;
    let height = this.data.height / 100;
    score = (this.data.weight / (height * height)).toFixed(1);
    this.setData({
      score: score
    })
  },
  //计算标准体重
  weightStandardCalculate: function () {
    var max = 23.9;
    let weightMin = 0;
    let weightMax = 0;

    let height = this.data.height / 100;

    weightMin = (18.5 * (height * height)).toFixed(1);
    weightMax = (this.standardMax[this.data.index] * (height * height)).toFixed(1);
    this.setData({
      weightStandardMax: weightMax,
      weightStandardMin: weightMin,
    })
  },
  //身体状况计算
  physicalConditionCalculate: function () {
    let rule = this.rules[this.data.index];
    let value = 0;
    let score = this.data.score;
    let length = rule.length;
    //如果分数大于最高级，则value为该长度
    if (score >= rule[length - 1]) {
    //端点有四个，则区间有五个
      value = length;
    } else {
      for (let length = rule.length, i = length; i >= 1; --i) {
        if (score < rule[i] && score >= rule[i - 1])
          value = i;
      }
    }

    this.setData({
      physicalCondition: this.ruleConfig[value],
      danger: this.dangerConfig[value],
      conditionColor:this.data.color[value]
    })
  },
  onShareAppMessage: function () {
    return {
       title: '来测测你的BMI叭~',
       path: '/pages/bmi/bmi',
       success: function (res) {
          console.log('成功进入分享==========', res);

       },
       fail: function (res) {
          console.log('进入分享失败==========', res);
       }
    }
 },
})
