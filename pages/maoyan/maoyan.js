// pages/maoyan/maoyan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:1,
    movie:[]
  },
  to_details:function(event){
    // console.log(event.currentTarget.dataset.obj)
    
    wx.navigateTo({
      url: `../details/details?obj=${JSON.stringify(event.currentTarget.dataset.obj)}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let a = this;
    wx.request({
      url: 'http://172.20.10.3:8088/hot_films/find', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // console.log(res.data[0])
        // console.log(res.data[0].film_covers[0].film_covers)
        res.data.map((item)=>{
          item.film_covers[0].film_covers = item.film_covers[0].film_covers.replace(/\\/g ,'/');
        })
        a.setData({
          movie: res.data
        })
      }
    })
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