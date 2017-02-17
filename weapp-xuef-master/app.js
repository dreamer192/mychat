  //app.js
App({

// 1.程序启动完毕
  onLaunch:function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

// 2.当小程序启动，或从后台进入前台显示会触发
    onShow: function() {
      //console.log(this.getHeight()+"------------");
     //  var that = this
     // wx.getSystemInfo({
     //      success:function(res){
     //          console.info("app.js-windowHeight:"+res.windowHeight);
     //          that.globalData.windowHeight = res.windowHeight;
     //      }
     //  });
      // Do something when show.
  },

  // 3.当小程序从前台进入后台，会触发 
  onHide: function() {
      // Do something when hide.
  },

// 4.获取用户信息
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

// 5.全局数据
  globalData:{
    userInfo:null,
    //url:'http://localhost:8081/develop/',
    url:'https://weixin.magicpenart.com/develop/'
  },
  getHeight:function(){
    var h;
     wx.getSystemInfo({
          success:function(res){
              console.info("app.js-windowHeight:"+res.windowHeight);
              h = res.windowHeight;
          }
      });
     return h;
  }
})