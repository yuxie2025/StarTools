Page({
  data: {
    title: "计算器",
    value: null, // 上次计算后的结果，null表示没有上次计算的结果
    showValue: '0', // 显示数值
    operate: null, // 上次计算符号，null表示没有未完成的计算
    waitingForOperate: false // 前一按键是否为计算符号
  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: this.data.title
    });
    this.calculatorOperations = {
      'key-divide': (prevValue, nextValue) => prevValue / nextValue,
      'key-multiply': (prevValue, nextValue) => prevValue * nextValue,
      'key-add': (prevValue, nextValue) => prevValue + nextValue,
      'key-subtract': (prevValue, nextValue) => prevValue - nextValue,
      'key-equals': (prevValue, nextValue) => nextValue
    }
  },

  /* 清空 */
  clearAll() {
    this.setData({
      value: null,
      showValue: '0',
      operate: null,
      waitingForOperate: false
    })
  },

  /* 仅清空当前显示的输入值 */
  clearDisplay() {
    this.setData({
      showValue: '0'
    })
  },

  onTapFunction: function (event) {
    const key = event.target.dataset.key;
    switch (key) {
      case 'key-clear':
        if (this.data.showValue !== '0') {
          this.clearDisplay();
        } else {
          this.clearAll();
        }
        break;

      case 'key-sign':
        var newValue = parseFloat(this.data.showValue) * -1

        this.setData({
          showValue: String(newValue)
        })

        break;

      case 'key-percent':
        const fixedNum = this.data.showValue.replace(/^-?\d*\.?/, '')
        var newValue = parseFloat(this.data.showValue) / 100

        this.setData({
          showValue: String(newValue.toFixed(fixedNum.length + 2))
        });

        break;

      default:
        break;
    }
  },

  onTapOperate: function (event) {
    const nextOperate = event.target.dataset.key;
    const inputValue = parseFloat(this.data.showValue);

    if (this.data.value == null) {
      this.setData({
        value: inputValue
      });
    } else if (this.data.operate) {
      const currentValue = this.data.value || 0;
      const newValue = this.calculatorOperations[this.data.operate](currentValue, inputValue);

      this.setData({
        value: newValue,
        showValue: String(newValue)
      });
    }

    this.setData({
      waitingForOperate: true,
      operate: nextOperate
    });
  },

  onTapNum: function (event) {
    const key = event.target.dataset.key; // 根据data-key标记按键

    if (key == 'key-dot') {
      // 按下点号
      if (!(/\./).test(this.data.showValue)) {
        this.setData({
          showValue: this.data.showValue + '.',
          waitingForOperate: false
        })
      }
    } else {
      // 按下数字键
      const num = key[key.length - 1];

      if (this.data.waitingForOperate) {
        this.setData({
          showValue: String(num),
          waitingForOperate: false
        })
      } else {
        this.setData({
          showValue: this.data.showValue === '0' ? String(num) : this.data.showValue + num
        })
      }
    }
  }
})