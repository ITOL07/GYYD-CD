// pages/user/storedetail/storedetail.js
const app = getApp()
var fileData = require("../../../utils/data.js");
var util = require("../../../utils/util.js"); 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true,
    }],

    storeImg: fileData.getStoreImgData(),
    club_id: app.globalData.user_id,
    storeData:null,
    open_time: null,
    close_time: null,
    storeImg: null,
    latitude: null,
    longitude: null,
    jcss:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  editClick: function(){
    var storeRouter = '../../user/editstoreinfo/editstoreinfo';
    var storeTitle = '编辑门店信息';
    util.routers(storeRouter, storeTitle);
  },

	previewImg: function (e) {
		let imgs = []
		let list = this.data.storeImg
		for (let i = 0; i < list.length; i++) {
			imgs.push(list[i].img_url)
		}
		util.previewImg(e, imgs)
	},

  onLoad: function (options) {
    console.log("开始请求门店信息！！")
    var url_tmp = util.getListConfig().url_test;
    var _this = this;
    _this.setData({
      club_id: app.globalData.user_id
    })
    console.log('club_id===' + _this.data.club_id)
    wx.request({
      url: url_tmp + '/club/qry?club_id=' + _this.data.club_id,
      success(res) {
        console.log(res.data)
        _this.setData({
          storeData: res.data,
          open_time: res.data.openTime.substring(9, 14),
          close_time: res.data.closeTime.substring(9, 14),
          latitude: res.data.la,
          longitude: res.data.lo,
          jcss: res.data.jcss.split('、')
        })
        console.log("jcss===="+_this.data.jcss)
      }
    }) 
    wx.request({
      url: url_tmp + '/img/load2',
      data: {
        user_id: app.globalData.user_id,
        type: 32
      },
      success(res) {
        _this.setData({
          storeImg: res.data
        })
        console.log(_this.data.storeImg)
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