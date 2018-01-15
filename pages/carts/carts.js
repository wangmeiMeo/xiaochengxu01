Page({
  data: {
    numbers:3,
  },
  onLoad: function (options) {
    var that = this;
    // 生命周期函数--监听页面加载
    showView: (options.showView == "true" ? true : false);
    wx.request({
      method: 'post',
      url: 'https://www.tukuchina.cn/index.php?r=ApiRightPic/TestIndex&api=sign_api&uid=1231581&key=67f3f03e51c2e7ebaf51ca365426d0cf0fe0aa90&sec=1210cde88eedd183c7e3a8f7609f0c028dbd4687',
      data: { 'num': 123 },
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        that.setData({
          name: res.data.name,
          price: res.data.price,
          num: res.data.num
        })
        console.log(res.data.name)        
      }
    })
  }
  , onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  }
  
})