Page({
  data: {
    art: {},
  },
  onReady () {
    wx.setNavigationBarTitle({
      title: '详情页面'
    })
  },
  onLoad (options) {
    var that = this
    wx.request({
      url: 'https://www.magicpenart.com/develop/articleController/toArtile?id=' + options.id,
      headers: {
        'Content-Type': 'application/json'
      },
      success (res) {
         that.setData({
           art: res.data
         })
      }
    })
  }
})