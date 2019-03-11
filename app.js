App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },

  getInformation: function (key, cb) {
    wx.request({
      url: 'http://v.juhe.cn/toutiao/index?type=' + key,
      data: {
        key: '69369e10151ff985097c7558641b962c'
      },
      header: {
      },
      success: function (res) {
        cb(res.data)
      }
    })
  },

  getFootball: function (key, cb) {
    wx.request({
      url: 'http://op.juhe.cn/onebox/football/league?league=' + key,
      data: {
        key: '4d1c8a340903b96f508fbdc3d6cea928'
      },
      header: {
      },
      success: function (res) {
        cb(res.data)
      }
    })
  },

  getNBA: function (cb) {
    wx.request({
      url: 'http://op.juhe.cn/onebox/basketball/nba',
      data: {
        key: 'a15ec27494152fd5fc9d7036f37f1fba'
      },
      header: {
      },
      success: function (res) {
        cb(res.data)
      }
    })
  }
  
})
