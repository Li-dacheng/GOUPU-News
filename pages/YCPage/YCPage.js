var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: "",
    info: null,
    imageUrl: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var thispage = this;
    switch (options.key) {
      case "英超": thispage.setData({ imageUrl: "/images/YC1.jpg" }); break;
      case "西甲": thispage.setData({ imageUrl: "/images/XJ.jpg" }); break;
      case "德甲": thispage.setData({ imageUrl: "/images/DJ1.jpg" }); break;
      case "意甲": thispage.setData({ imageUrl: "/images/YJ.jpg" }); break;
      case "中超": thispage.setData({ imageUrl: "/images/ZC.jpg" }); break;
    }

    thispage.setData({ key: options.key })
    app.getFootball(this.data.key, function (data) {
      console.log(data)
      thispage.setData({ info: data })
    })
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