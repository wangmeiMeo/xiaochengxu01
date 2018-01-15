// pages/products/products.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {
        url: '/images/product01.jpg'
      }, {
        url: '/images/product01.jpg'
      }, {
        url: '/images/product01.jpg'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    hasList: false,
    sizetext:'36',
    tab:0,
    color:"",
    haoma: [{
      message: '36',
    }, {
      message: '37'
    }, {
      message: '38'
    }, {
      message: '39'
    }, {
      message: '40'
    }],
    info:'',
    price: ''
  },
  Func: function (e) {//点击tab切换  
    var that = this;
    if (that.data.tab === e.target.dataset.current) {
      return false;
      sizetext: e.currentTarget.dataset.text
    } else {
      that.setData({
        tab: e.target.dataset.current,
        sizetext: e.currentTarget.dataset.text
      })
    }
  },
  // 增加数量
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = parseInt(carts[index].num);
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
  },
  // 减少数量
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    console.log(num)
  },
  onLoad: function (options) {
    var that = this;
    console.info(options)
    var product_id = options.id;
    wx.request({
      method: 'post',
      url: "https://www.tukuchina.cn/index.php?r=ApiRightPic/TestIndex&api=sign_api&uid=1231581&key=67f3f03e51c2e7ebaf51ca365426d0cf0fe0aa90&sec=1210cde88eedd183c7e3a8f7609f0c028dbd4687",
      data: { 'product_id': product_id },
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        that.setData({
          info: res.data.name,
          price:res.data.price,
          sizeinfo:res.data.sizeinfo,
          caizhi:res.data.caizhi,
          color: res.data.color,
          place: res.data.place,
          textdes: res.data.textdes,
          payway: res.data.payway,
          num: res.data.num
        })
        console.log(res.data.sizeinfo)
      }
    })
  },
   onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },
  onShow: function () {
    this.setData({
      hasList: false,        // 既然有数据了，那设为true吧
      carts: [
        {num: 5},                                                                   ]
    });
  }
})