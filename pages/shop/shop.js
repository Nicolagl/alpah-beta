var app = getApp();



Page({
  data: {
    isHaveAddress: false,
    isHaveCoupons: false,
    addressInfo: null,
    allPrice: 0,//总共需要支付的价格
    cartShopList: [
      {
        shopImg: "../../img/1001.jpg",
        shopTitle: "面夫子",
        shopSelectInfo: "馅料饱满",
        shopPrice: "人均￥12.00元",
        shopCount: 1,
      },
      {
        shopImg: "../../img/1002.jpg",
        shopTitle: "天上掉馅饼",
        shopSelectInfo: "好吃极了",
        shopPrice: "人均￥12.00元",
        shopCount: 1,
      },
      {
        shopImg: "../../img/1003.jpg",
        shopTitle: "兰州拉面",
        shopSelectInfo: "正宗兰州",
        shopPrice: "人均￥14.00元",
        shopCount: 1,
      },
      {
        shopImg: "../../img/1004.jpg",
        shopTitle: "麻辣香锅",
        shopSelectInfo: "好吃不贵",
        shopPrice: "人均￥20.00元",
        shopCount: 1,
      },
      {
        shopImg: "../../img/1005.jpg",
        shopTitle: "上海大混沌",
        shopSelectInfo: "福州最好吃的拌面",
        shopPrice: "人均￥5.00元",
        shopCount: 1,
      }
    ]

  },

  addAdress: function () {
    wx.navigateTo({
      url: '../../pages/address/address',

    })
  },
  selectToherAdress: function () {
    wx.navigateTo({
      url: '../../pages/addresslist/addresslist',

    })
  },

  //商品数量减少
  itemCountSub: function (e) {
    var index = e.currentTarget.dataset.index;
    var list = this.data.cartShopList;
    if (list[index].shopCount > 0) {
      list[index].shopCount = --list[index].shopCount;
      this.setData({
        cartShopList: list,
      });
    }
    //计算总价格
    this.allShopPrice();

  },

  //商品数量增加
  itemCountAdd: function (e) {
    var index = e.currentTarget.dataset.index;
    var list = this.data.cartShopList;
    list[index].shopCount = ++list[index].shopCount;

    this.setData({
      cartShopList: list,
    });
    //计算总价格
    this.allShopPrice();
  },


  /**
   * 计算总价格
   */
  gotodian: function () {
    wx.navigateTo({
      url: '../../pages/shop/dianpu',
    })
  },


  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    var otherAddressInfo = getApp().globalData.otherAddressInfo;
    if (otherAddressInfo == null) {
      var addressList = wx.getStorageSync('address');
      for (var key in addressList) {
        if (addressList[key].isDefult) {
          this.setData({
            addressInfo: addressList[key],
            isHaveAddress: true,
          });
        }
      }
      if (this.data.addressInfo == null && addressList.length > 0) {
        this.setData({
          addressInfo: addressList[0],
          isHaveAddress: true,
        });
      }
    } else {
      this.setData({
        addressInfo: otherAddressInfo,
        isHaveAddress: true,
      });
    }


    //计算总价格
    this.allShopPrice();



  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
    getApp().globalData.otherAddressInfo = null;
  },
  onShareAppMessage: function () {
    return {
      title: '我的购物车',
      desc: '好多好多东西，没钱了',
      path: 'www.baidu.com'
    }
  }



})