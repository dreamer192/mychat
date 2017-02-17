
//  不要在 onLaunch 的时候调用 getCurrentPage()此时 page 还没有生成。 
// getCurrentPage是获取当前页面的实例对象。

Page({
  
    data:{

    
picture: "../../image/0414couser.png",
name: "Wong",
      
// 1.菜单栏数据
  items:[
      {
       icon:'../../image/jiage.png',
       text:'我的票券'
    },

    {
        icon:'../../image/shijian.png',
       text:'收藏的活动'
    },

      {
        icon:'../../image/shijian.png',
       text:'关注主办方'
    }
    
    
  ],

    }
})
