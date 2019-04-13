// pages/user/editstoreinfo/editstoreinfo.js
const app = getApp()
var fileData = require("../../../utils/data.js");
var commonData = require("../../../utils/util.js"); 

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
    inputVal: '',
    actionHidden: true,
    addImg: ''
  },
  cancel: function () {
    this.setData({
      actionHidden: true
    })
  },

  confirm: function (res) {
    var This = this;
    
    if (This.data.inputVal == '') {
      wx.showToast({
        title: '内容不能为空',
        icon: 'fail',
        duration: 1500
      })
    } else {
      This.setData({
        actionHidden: true
      })
      wx.showToast({
        title: '添加成功',
        icon: 'success',
        duration: 2000
      })
    }

  },
  inputValue: function (res) {
    this.setData({
      inputVal: res.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  finishClick: function(){
    var storeRouter = '../../user/storedetail/storedetail';
    var storeTitle = '门店信息';
    commonData.routers(storeRouter, storeTitle);
  },
  addClick: function () {
    this.setData({
      actionHidden: false
    })
  },
  uploadImage: function () {
    var This = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        This.setData({
          addImg: res.tempFilePaths[0]
        })
      },
    })
  },
  onLoad: function (options) {

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