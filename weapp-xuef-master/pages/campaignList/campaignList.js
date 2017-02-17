var app = getApp()
var url = 'https://www.magicpenart.com/develop/campaign/toList'
var page = 1;
var windowHeight = app.getHeight();
console.info("campaignList.js------------"+windowHeight);
var GetList = function(that){
    that.setData({
        hidden:false
    });
    wx.request({
url:url,
        data: {
             page:page
        },
        method: 'POST', 
        header: {'content-type':'application/x-www-form-urlencoded'},
        success: function(res){
          var list = that.data.campaign;
          if(res.data.length == 0)
            return
          for(var i = 0; i < res.data.length; i++){
                list.push(res.data[i]);
            }
          that.setData({ 
            campaign:list
           })
            page++;
        },
        fail: function() {
          // fail
        },
        complete: function() {
            that.setData({
        hidden:true
    });
        }
    });
}
Page({
  data: {
 scrollTop : 0,
    scrollHeight:windowHeight,

//1. 轮播图片数据
    imgUrls: [
      '../../image/home_banner1.png',
      '../../image/home_banner2.png'
    ],
    dianzanimg:'../../image/dianzan.png',
    guanzhuUrl:'../../image/guanzhu.png',

//2. 轮播配置
    autoplay:true,
    interval: 2000,
    duration: 800,
  
    //活动
    campaign:[],

  },
  
  onLoad: function () {
    //   这里要非常注意，微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值
      var that = this;
      // wx.getSystemInfo({
      //     success:function(res){
      //         console.info("scrollHeight:"+res.windowHeight);
      //         that.setData({
      //             scrollHeight:res.windowHeight
      //         });
      //     }
      // });
     that.setData({
        hidden:false
    });
  
    },
    onShow: function () {
   //   在页面展示之后先获取一次数据
    var that = this;
    GetList(that);
    },
  refresh:function(event){
    //   该方法绑定了页面滑动到顶部的事件，然后做上拉刷新
      page = 1;
      this.setData({
        campaign:[],
          scrollTop : 0,
           page : 1
      });
      console.info("page="+page);
      GetList(this);
  },
   bindDownLoad:function(){
    //   该方法绑定了页面滑动到底部的事件
     
      console.info("page="+page);
      var that = this;
      GetList(that);
      
  },
  scroll:function(event){
    //   该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。
     this.setData({
         scrollTop : event.detail.scrollTop
     });
  },
})