// pages/user/myprivate/myprivate.js
const app = getApp()
var fileData = require("../../../utils/data.js");
var commonData = require("../../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // privateData: fileData.getPrivateData()
    privateData:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  privateClick: function(e){
    var storeRouter = '../../user/privatedetail/privatedetail?coach_id=' + e.currentTarget.dataset.coachId;
    var storeTitle = '私教详情';
    commonData.routers(storeRouter, storeTitle);
  },
  onLoad: function (options) {
    var _this = this
    var url_tmp = commonData.getListConfig().url_test;
    
    wx.request({
      url: url_tmp + '/club/qryCoach',
      data: {
        club_id: app.globalData.user_id
      },

      success(res) {
        console.log(res.data)
        _this.setData({
          privateData: res.data
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