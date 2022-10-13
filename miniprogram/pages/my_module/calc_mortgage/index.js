//index.js
const util = require('./mortgage_util.js')
//获取应用实例
const app = getApp()

Page({
  /**
   * 页面数据
   */
  data: {
    businessTotalLoan: 0,
    gjjTotalLoan: 0,
    loanType: '1',
    startDate: undefined,

    actionsBottom: 50,
    businessTotalLoanStr: '',
    gjjTotalLoanStr: '',
    showGJJ: false,
    showBusiness: true,
    gjjFocus: false,
    businessFocus: false,
    startDateStr: '',
    LPR: true,
    LPRValue: 4.65,
    basePoint: 0,
    LPRValueText: '4.65',
    basePointText: '0',
    LPRRateValue: 4.65,

    paymentMethodIndex: 0,
    paymentYearIndex: 29,
    businessLoanRateTypeIndex: 0,
    businessLoanRateIndex: 6,
    gjjLoanRateIndex: 0,
    loanTypeArr: [{ text: '商业贷款', id: 1 , checked: true }, { text: '公积金贷款', id: 2}, { text: '组合贷款', id: 3 }],
    paymentMethodArr: [{ text: '等额本息(每月等额还款)', id: 1 }, { text: '等额本金(每月递减还款)', id: 2 }],
    paymentYearArr: [],
    businessLoanRateTypeArr: [{ text: 'LPR', value: 1 }, { text: '基准利率', value: 2 }],
    businessLoanRateArr: [],
    gjjLoanRateArr: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    let currentDate = new Date();
    let paymentYearArr = [];
    for (let i = 1; i <= 30; i++) {
      paymentYearArr.push({
        value: i,
        text: `${i}年 (${i * 12}月)`
      });
    }
    let tempArr = util.getBusinessLoanRateArr(this.data.paymentYear);
    this.setData({
      paymentYearArr: paymentYearArr,
      businessLoanRateArr: tempArr,
      gjjLoanRateArr: util.getGJJLoanRateArr(this.data.paymentYear),
      startDate: currentDate,
      startDateStr: util.formatDate(currentDate),
      businessLoanRate: tempArr[this.data.businessLoanRateIndex].value
    })
  },
  // 公共方法
  resetData: function (loanType) {
    let paymentYear = 30;
    let currentDate = new Date();
    this.setData({
      loanType: loanType,
      paymentMethodIndex: 0,
      paymentYearIndex: 29,
      businessLoanRateIndex: 6,
      gjjLoanRateIndex: 0,
      showBusiness: loanType === '1' || loanType === '3',
      showGJJ: loanType === '2' || loanType === '3',
      businessLoanRateArr: util.getBusinessLoanRateArr(paymentYear),
      gjjLoanRateArr: util.getGJJLoanRateArr(paymentYear),
      startDate: currentDate,
      startDateStr: util.formatDate(currentDate),
      // businessFocus: loanType === '1' || loanType === '3',
      // gjjFocus: loanType === '2',

    })
  },
  /**
   * 贷款计算数据
   */
  getMortgageData: function () {
    let data = {
      businessTotalLoan: parseFloat(this.data.businessTotalLoan),
      gjjTotalLoan: parseFloat(this.data.gjjTotalLoan),
      gjjLoanRate: this.data.gjjLoanRateArr[this.data.gjjLoanRateIndex].value,
      paymentMethod: this.data.paymentMethodArr[this.data.paymentMethodIndex].id,
      paymentYear: this.data.paymentYearArr[this.data.paymentYearIndex].value,
      startDate: this.data.startDate,
      loanType: this.data.loanType
    }
    if (this.data.LPR) {
      data.businessLoanRate = this.data.LPRRateValue;
    } else {
      data.businessLoanRate = this.data.businessLoanRateArr[this.data.businessLoanRateIndex].value;
    }
    return data;
  },
  //事件处理函数
  inputFocus: function (e) {
    this.setData({
      actionsBottom: e.detail.height
    })
    return;
  },
  inputBlur: function (e) {
    this.setData({
      actionsBottom: 0
    })
    return;
  },
  /**
   * 商业贷款金额输入
   */
  businessTotalLoanInput: function (e) {
    let value = e.detail.value || 0;
    if (value === 0) {
      this.setData({
        businessTotalLoan: 0,
        businessTotalLoanStr: ''
      })
      return;
    }
    let valueStr = value.toString();
    if (valueStr.indexOf(".") < valueStr.length - 2) {
      value = util.truncate(value);
      this.setData({
        businessTotalLoan: value,
        businessTotalLoanStr: value
      })
    }
  },
  /**
   * 公积金贷款金额输入
   */
  gjjTotalLoanInput: function (e) {
    let value = e.detail.value || 0.0;
    if (value === 0) {
      this.setData({
        gjjTotalLoan: 0,
        gjjTotalLoanStr: ''
      })
      return;
    }
    let valueStr = value.toString();
    if (valueStr.indexOf(".") < valueStr.length - 2) {
      value = util.truncate(value);
      this.setData({
        gjjTotalLoan: value,
        gjjTotalLoanStr: value
      })
    }
  },
  /**
   * 贷款类型切换
   */
  loanTypeChange: function (e) {
    let loanType = e.detail.value;
    this.resetData(loanType);
  },
  /**
   * 还款方式切换
   */
  paymentMethodchange: function (e) {
    let index = e.detail.value;
    this.setData({
      paymentMethodIndex: index
    })
  },
  /**
   * 还款年数
   */
  paymentYearchange: function (e) {
    let index = e.detail.value;
    let paymentYear = this.data.paymentYearArr[index].value;
    let lpr = 4.65;
    if (paymentYear == 1) {
      lpr = 3.85;
    }
    this.setData({
      LPRValue: lpr,
      LPRValueText: '' + lpr
    });
    this.calculateLPRRateValue();

    this.setData({
      paymentYearIndex: index,
      businessLoanRateArr: util.getBusinessLoanRateArr(paymentYear),
      gjjLoanRateArr: util.getBusinessLoanRateArr(paymentYear)
    })
  },
  /**
   * 开始还款日期
   */
  startDateChange: function (e) {
    this.setData({
      startDate: new Date(e.detail.value),
      startDateStr: util.formatDate(new Date(e.detail.value))
    });
  },
  /**
   * 利率类型变更
   */
  businessLoanRateTypeChange: function (e) {
    let index = e.detail.value;
    this.setData({
      businessLoanRateTypeIndex: index,
      LPR: index == 0
    })
  },
  /**
   * LPR提示
   */
  LPRTooltip: function (e) {
    wx.showModal({
      title: 'LPR（贷款市场报价利率）',
      content: '自2019年10月8日起，新发放商业性个人住房贷款利率从以往的贷款基准利率（4.9%）转换为LPR（贷款市场报价利率），最终的商业贷款利率是通过在LPR的基础上增加基点确认。\r\n\r\nLPR分为一年期和五年期，于每月20日（遇节假日顺延）报价，可在中国人民银行网站查询。',
      confirmText: '知道了',
      showCancel: false
    });
  },
  /**
   * LPR
   */
  LPRValueInput: function (e) {
    let value = e.detail.value || 0.0;
    this.setData({
      LPRValue: value,
      LPRValueText: Math.floor(value * 10000) / 10000
    })
    this.calculateLPRRateValue();
  },
  /**
   * 基点
   */
  basePointInput: function (e) {
    let value = e.detail.value || 0;
    this.setData({
      basePoint: value,
      basePointText: Math.floor(value * 100) / 100
    })
    this.calculateLPRRateValue();
  },
  /**
   * 计算LPR 实际利率
   */
  calculateLPRRateValue: function (e) {
    let value = (Math.floor(this.data.LPRValue * 10000) + Math.floor(this.data.basePoint * 100))/ 10000;
    this.setData({
      LPRRateValue: value
    })
  },
  /**
   * 商业贷款基准利率变更
   */
  businessLoanRateChange: function (e) {
    let index = e.detail.value;
    this.setData({
      businessLoanRateIndex: index
    })
  },
  /**
   * 公积金利率选择
   */
  gjjLoanRateChange: function (e) {
    let index = e.detail.value;
    this.setData({
      gjjLoanRateIndex: index
    })
  },
  /**
   * 计算
   */
  calculateLoan: function () {
    let mortgageData = this.getMortgageData();
    switch (mortgageData.loanType) {
      case "1":
        if (!mortgageData.businessTotalLoan) {
          wx.showToast({
            title: '请输入商业贷款金额',
            icon: 'none',
            duration: 2000
          })
          this.setData({
            businessFocus: true
          })
          return;
        }
        break;
      case "2":
        if (!mortgageData.gjjTotalLoan) {
          wx.showToast({
            title: '请输入公积金贷款金额',
            icon: 'none',
            duration: 2000
          })
          this.setData({
            gjjFocus: true
          })
          return;
        }
        break;
      case "3":
        if (!mortgageData.businessTotalLoan) {
          wx.showToast({
            title: '请输入商业贷款金额',
            icon: 'none',
            duration: 2000
          })
          this.setData({
            businessFocus: true
          })
          return;
        }
        if (!mortgageData.gjjTotalLoan) {
          wx.showToast({
            title: '请输入公积金贷款金额',
            icon: 'none',
            duration: 2000
          })
          this.setData({
            gjjFocus: true
          })
          return;
        }
        break;
    }
    app.globalData.mortgageData = mortgageData;
    wx.navigateTo({
      url: '../calc_mortgage/detail'
    });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
})