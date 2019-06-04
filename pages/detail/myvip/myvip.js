// pages/student/student.js
const app = getApp()
var util = require("../../../utils/util.js");

Page({

	/**
	 * 页面的初始数据
	 */
  data: {
    inputtext: "搜索学员昵称或手机号",
    input_tmp: null
  },

  changeflag: function (e) {
    console.log(e)
    var data = this.data.student
    for (var index in data) {
      data.pop(data[index])
      if (data[index].id == e.target.id) {
        data[index].flag = true
      } else {
        data[index].flag = false
      }
    }
    this.setData({
      student: data
    })
  },

  navigate: function (e) {
    console.log("e.currentTarget.id====" + e.currentTarget.id)
    wx.navigateTo({
      url: "../studentindex/studentindex?id=" + e.currentTarget.id
    })
  },

	/**
	 * 生命周期函数--监听页面加载
	 */
  onLoad: function (options) {
    var _this = this
    var url_tmp = util.getListConfig().url_test;
    wx.request({
      url: url_tmp + '/club/qryMember',
      data: {
        club_id: app.globalData.user_id,
        
      },
      success(res) {
        console.log(res.data)
        _this.setData({
          student: res.data
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

  },
  search_in: function (e) {
    console.log(e.detail)
    this.setData({
      input_tmp: e.detail.value
    })
  },
  search: function () {
    console.log("过滤学员。。。。")
    console.log(this.data.student[2].MemInfo)
  }
})