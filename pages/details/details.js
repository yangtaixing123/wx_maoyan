// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {}
  },
  to_cinema: function (event) {
    let name = this.data.movie.name;
    wx.navigateTo({
      url: `../cinema_path/cinema_path?name=${name}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取上一页传递的参数 options
    let movie = JSON.parse(options.obj);
    // 处理图片路径问题
    movie.film_covers[0].film_covers = movie.film_covers[0].film_covers.replace(/\\/g, '/');
    movie.directorImg[0].directorImg = movie.directorImg[0].directorImg.replace(/\\/g, '/');
    movie.actorsImg.map((item) => {
      item.actorImg = item.actorImg.replace(/\\/g, '/');
      // 处理超出的名字
      if (item.actorName.length > 6) {
        item.actorName = item.actorName.substring(0, 6)+'..';
      }
    })
    this.setData({
      movie
    })

    // 修改当前的title
    // wx.setNavigationBarTitle({ title: '当前页面' });
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