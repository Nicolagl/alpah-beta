// pages/zixuan/zixuan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: ''
  },
  onLoad: function () {
  },
  chooseimage: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#f6dc34",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
      }
    })

  },

  chooseWxImage: function (type) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        that.setData({
          tempFilePaths: res.tempFilePaths[0],
        })
        console.log(res);
        wx.uploadFile({
          url: 'http://47.106.227.33:4/up_photo',
          filePath: res.tempFilePaths[0],
          name: 'photo',
          success: function (res) {
            _this.setData({
              savedFilePath: res.data,
            });
          }
        });
        console.log(res);

      }
    })
  },

gotopay:function(){
  wx.switchTab({
    url: '../../pages/shopcart/shopcart',
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})