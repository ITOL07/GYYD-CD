// pages/user/user/user.js
const app = getApp(); 
var commonData = require("../../../utils/util.js"); 

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  detailClick: function(){
    var storeRouter = '../../user/storedetail/storedetail';
    var storeTitle = '门店信息';
    commonData.routers(storeRouter, storeTitle);
  },
  myincomeClick: function(){
    var storeRouter = '../../user/myincome/myincome';
    var storeTitle = '我的收入';
    commonData.routers(storeRouter, storeTitle);
  },

  myprivate: function() {
    var storeRouter = '../../user/myprivate/myprivate';
    var storeTitle = '我的私教';
    commonData.routers(storeRouter, storeTitle);
  },
  myvip: function () {
    var storeRouter = '../../detail/myvip/myvip';
    var storeTitle = '我的会员';
    commonData.routers(storeRouter, storeTitle);
  },
  mymessage: function () {
    var storeRouter = '../../detail/message/message';
    var storeTitle = '我的消息';
    commonData.routers(storeRouter, storeTitle);
  },
  myset: function () {
    var storeRouter = '../../detail/set/set';
    var storeTitle = '设置';
    commonData.routers(storeRouter, storeTitle);
  },
  agreement: function () {
    var storeRouter = '../../detail/agreement/agreement';
    var storeTitle = '用户协议';
    commonData.routers(storeRouter, storeTitle);
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