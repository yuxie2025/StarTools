var B = getApp();

Page({
  data: {
    isRelease: true,
    bannerUnitId: getApp().globalData.bannerUnitId,
    b: [0, 0],
    blood: [
      ["A型", "B型", "O型", "AB型"],
      ["A型", "B型", "O型", "AB型"]
    ],
    setBlood: ["A", "B", "O", "AB"],
    dataInfo: [],
    flag: 0
  },
  onLoad: function (B) {
    this.setData({
      isRelease: getApp().globalData.isRelease
    })
  },
  bindPickerChange: function (B) {
    this.setData({
      b: B.detail.value
    });
  },
  formSubmit: function (B) {
    var A = "请选择正确的血型",
      t = this.data.setBlood[this.data.b[0]],
      a = this.data.setBlood[this.data.b[1]];
    "A" == t && "B" == a && (A = "您的孩子的血型可能为 A 型、B 型、AB 型、O 型"), "B" == t && "A" == a && (A = "您的孩子的血型可能为 A 型、B 型、AB 型、O 型"),
      "A" == t && "A" == a && (A = "您的孩子的血型可能为 A 型或 O 型，不可能为 B 型 和 AB 型"), "A" == t && "O" == a && (A = "您的孩子的血型可能为 A 型或 O 型，不可能为 B 型 和 AB 型"),
      "O" == t && "A" == a && (A = "您的孩子的血型可能为 A 型或 O 型，不可能为 B 型 和 AB 型"), "A" == t && "AB" == a && (A = "您的孩子的血型可能为  A 型 、B型 及 AB型之一，不可能为 O 型"),
      "AB" == t && "A" == a && (A = "您的孩子的血型可能为  A 型 、B型 及 AB型之一，不可能为 O 型"), "B" == t && "B" == a && (A = "您的孩子的血型可能为 B 型或 O 型，不可能为 A 型 和 AB 型"),
      "B" == t && "O" == a && (A = "您的孩子的血型可能为 B 型或 O 型，不可能为 A 型 和 AB 型"), "O" == t && "B" == a && (A = "您的孩子的血型可能为 B 型或 O 型，不可能为 A 型 和 AB 型"),
      "B" == t && "AB" == a && (A = "您的孩子的血型可能为  A 型 、B型 及 AB型之一，不可能为 O 型"), "AB" == t && "B" == a && (A = "您的孩子的血型可能为  A 型 、B型 及 AB型之一，不可能为 O 型"),
      "O" == t && "O" == a && (A = "您的孩子的血型可能为 O 型，不可能为 A 型、B 型和 AB 型"), "O" == t && "AB" == a && (A = "您的孩子的血型可能为 A 型或 B 型，不可能为 O 型 和 AB 型"),
      "AB" == t && "O" == a && (A = "您的孩子的血型可能为 A 型或 B 型，不可能为 O 型 和 AB 型"), "AB" == t && "AB" == a && (A = "您的孩子的血型可能为  A 型 、B型 及 AB型之一，不可能为 O 型"),
      this.setData({
        dataInfo: A,
        flag: 1
      });
  },
  onShow: function () {
    B.pages = getCurrentPages();
  },
  onShareAppMessage: function (B) {
    return {
      title: "子女血型查询",
      path: "/pages/my_module/blood/blood"
    };
  },
  onShareTimeline: function (B) {
    return {
      title: "子女血型查询",
      path: "/pages/my_module/blood/blood"
    };
  }
});