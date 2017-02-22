var app = getApp()
var page =0;
var page_size = 20;
var sort = "last";
var is_easy = 0;
var lange_id = 0;
var pos_id = 0;
var unlearn = 0;
var flag = false;
var url = 'https://www.magicpenart.com/develop/campaign/toGet'
var windowHeight = app.getHeight();
console.info("detail.js------------"+windowHeight);
// 获取数据的方法，具体怎么获取列表数据大家自行发挥
var GetList = function(that){
    that.setData({
        hidden:false
    });
    wx.request({
        url:url,
        data:{
        },
        success:function(res){
            schoolcoment:res.data.comment;
            console.log('getlist() data='+res.data.comment);
            that.setData({
                hidden:true
            });
        }
    });
}
Page({
  
  data: {
    toptoshow:false,
    commenthidden:true,
    hidden:true,
    scrollTop : 0,
    scrollHeight:0,


//1. 轮播图片数据
    imgUrl:'../../../image/home_banner1.png',
    shijianUrl:'../../../image/shijian.png',
    dizhiUrl:'../../../image/dizhi.png',
    jiageUrl:'../../../image/jiage.png',
    title:'【北京站】单人油画DIY课程，北京站倾情献出',
    xingzhongxinUrl:'../../../image/xingzhongxin.png',
    duigouUrl:'../../../image/duigou.png',
    jiaguanzhuUrl:'../../../image/jiaguanzhu.png',
    yiguanzhuUrl:'../../../image/yiguanzhu.png',

//2. 轮播配置
    autoplay:true,
    interval: 3000,
    duration: 1200,
schoolcoment:{},
    //活动
    campaign:{},
    comment:[
      {text:'关注人数'},
      {text:'全部活动'},
      {text:'团队成员'}
    ],
    commentnum:[
      {text:'243'},
      {text:'21'},
      {text:'5'}
    ]
   
  
  },
  ditu:function(){  
    //加限制防止多次点击
    if(flag)
      return
    else
      flag = true
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
        flag = false;
        console.log("latitude"+res.latitude+"longitude"+res.longitude)
      },
      fail: function() {
      },
      complete: function() {
        flag = false;
      }
    })
    wx.openLocation({
      latitude: 39.980400,
      longitude: 116.476530,
      name:'佳境天城',
      address:'北京市朝阳区望京佳境天城A座1楼大厅(近望京医院)',
      scale: 28
    })
  },
  onLoad: function () {
     //   这里要非常注意，微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值
      var that = this;
      // wx.getSystemInfo({
      //     success:function(res){
      //         console.info(res.windowHeight);
      //         that.setData({
      //             scrollHeight:res.windowHeight
      //         });
      //     }
      // });
     that.setData({
        hidden:false
    });
 
    console.info("logger------into onlaod,request data");
       var that = this;
      wx.request({
        url:url,
        data: {
            id:1,
            name:2
        },
        method: 'POST', 
        header: {'content-type':'application/x-www-form-urlencoded'},
        success: function(res){
          console.info("logger------success");
          that.setData({ 
            schoolcoment:res.data.comment
           })
        },
        fail: function() {
          // fail
        },
        complete: function() {
           that.setData({
             hidden:true
          });
        }
      })
    },
    scroll:function(event){
    //   该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。
     this.setData({
         scrollTop : event.detail.scrollTop
     });
  },
      onShow: function () {
   //   在页面展示之后先获取一次数据
    var that = this;
    this.setData({
        scrollHeight:app.getHeight()-30
    });
    },
   bindDownLoad:function(){
    //   该方法绑定了页面滑动到底部的事件
      var that = this;
      this.setData({
        commenthidden:false,
        toptoshow:true
      });
      GetList(that);
      
  }

})