// pages/order/order.js
Page({
  data: {
    imgUrls: [
      {
        url: '/images/banner01.jpg'
      }, {
        url: '/images/banner02.jpg'
      }, {
        url: '/images/banner03.jpg'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    tab: 0,
    prices:1088,
    index: 1
  },
  tab_slide: function (e) {//滑动切换tab   
    var that = this;
    that.setData({ tab: e.detail.current });
  },
  tab_click: function (e) {//点击tab切换  
    var that = this;
    if (that.data.tab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        tab: e.target.dataset.current
      })
    }
  },
  onLoad: function (options) {
    var that = this;
    //前后台数据的交互
    wx.request({
      method: 'post',
      url:"https://www.tukuchina.cn/index.php?r=ApiRightPic/TestIndexFirst&api=sign_api&uid=1231581&key=67f3f03e51c2e7ebaf51ca365426d0cf0fe0aa90&sec=1210cde88eedd183c7e3a8f7609f0c028dbd4687",
      data: {},
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.info(res);
        that.setData({
          product: res.data,
        })
      }
    }),
    // swiper的高度自适应
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    });
  },
    // 请求后台
    request_index:function(e){
      console.info(e);
      var product_id = e.currentTarget.dataset.product_id;
      wx.navigateTo({
        url: "../products/products?id=" + product_id
      })
    }
})