// pages/user/myincome/myincome.js
const app = getApp()
const date = new Date()
var fileData = require("../../../utils/data.js");
var commonData = require("../../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    incomeDate: fileData.getIncomeData(),
    date: commonData.formatTime(date)
  },

  bindDateChange: function (e) {
    var _this=this
    console.log('picker发送选择改变，携带值为', e.detail.value)
    _this.setData({
      date: e.detail.value
    })
    var url_tmp = commonData.getListConfig().url_test;
    var _this = this;
    wx.request({
      url: url_tmp + '/club/qryLessReg',
      data: {
        club_id: app.globalData.user_id,
        reg_date: e.detail.value
        // status: 1
      },
      success(res) {
        console.log(res.data)
        _this.setData({
          clubIncomeData: res.data
        })
      }
    }) 
    //获取授课总收
    var that = this
    wx.request({
      url: url_tmp + '/club/qrySum',
      data: {
        club_id: app.globalData.user_id,
        reg_date: commonData.formatDate(date)
      },
      success(res) {
        console.log(res.data)
        that.setData({
          clubIncomeSum: res.data
        })
      }
    }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  cashClick: function () {
    var storeRouter = '../../user/cash/cash';
    var storeTitle = '提现';
    commonData.routers(storeRouter, storeTitle);
  },
  onLoad: function (options) {
    var url_tmp = commonData.getListConfig().url_test;
    var _this = this;
    console.log("onload this")
    //获取授课总收
    wx.request({
      url: url_tmp + '/club/qryLessReg',
      data: {
        club_id: app.globalData.user_id,
        reg_date: _this.data.date,
        // status: 1
      },
      success(res) {
        console.log(res.data)
        _this.setData({
          clubIncomeData:res.data
        })     
      }
    }) 
    //获取授课总收

    wx.request({
      url: url_tmp + '/club/qrySum',
      data: {
        club_id: app.globalData.user_id,
        reg_date: commonData.formatDate(date)
      },
      success(res) {
        console.log(res.data)
        // app.globalData.clubIncomeData=res.data
        _this.setData({
          clubIncomeSum: res.data
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