// pages/user/privatedetail/privatedetail.js
const app = getApp()
var fileData = require("../../../utils/data.js");
var commonData = require("../../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseData: fileData.getCourseData(),
    incomeDate: fileData.getIncomeData()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  certificateClick: function(){
    var storeRouter = '../../detail/certificate/certificate';
    var storeTitle = '证书';
    commonData.routers(storeRouter, storeTitle);
  },
  caseClick: function () {
    var storeRouter = '../../detail/case/case';
    var storeTitle = '案例';
    commonData.routers(storeRouter, storeTitle);
  },
  photoClick: function () {
    var storeRouter = '../../detail/photo/photo';
    var storeTitle = '相册';
    commonData.routers(storeRouter, storeTitle);
  },

  onLoad: function (options) {
    console.log(options.coach_id)
    var _this=this
    var url_tmp = commonData.getListConfig().url_test;
    wx.request({
      url: url_tmp + '/coach/qryLesson',
      data: {
        coach_id: options.coach_id,
        // reg_date: util.formatTime(new Date()),
        reg_date: '2019-04',
        status: ''
      },
      success(res) {
        console.log(res.data)
        _this.setData({
          incomeData: res.data
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