var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: "",//窗口高度
    info1:null,
    info:[],
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置

  },
  btnClick:function(){
    wx.redirectTo({
      url: '/pages/homepage/homepage'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var thispage = this;
    var info = new Array();
    app.getInformation("top", function (data) {
      thispage.setData({ info1: data })
    })
    app.getInformation("tiyu", function (data) {
      thispage.setData({ info2: data })
    })
    app.getInformation("shehui", function (data) {
      thispage.setData({ info3: data })
      info[0] = thispage.data.info3
      thispage.setData({ info: info })
    })
    app.getInformation("guonei", function (data) {
      thispage.setData({ info4: data })
      info[1] = thispage.data.info4
      thispage.setData({ info: info })
    })
    app.getInformation("guoji", function (data) {
      thispage.setData({ info5: data })
      info[2] = thispage.data.info5
      thispage.setData({ info: info })
    })
    app.getInformation("yule", function (data) {
      thispage.setData({ info6: data })
      info[3] = thispage.data.info6
      thispage.setData({ info: info })
    })
    app.getInformation("junshi", function (data) {
      thispage.setData({ info7: data })
      info[4] = thispage.data.info7
      thispage.setData({ info: info })
    })
    app.getInformation("keji", function (data) {
      thispage.setData({ info8: data })
      info[5] = thispage.data.info8
      thispage.setData({ info: info })
    })
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 80;
        thispage.setData({
          winHeight: calc
        });
        // console.log(thispage.data.winHeight)
      }
    });
  },
  
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();

  },

  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var thispage = this
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },

  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
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