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
    var storeTitle = '场地信息';
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
    var storeRouter = '../../user/set/set';
    var storeTitle = '设置';
    commonData.routers(storeRouter, storeTitle);
  },
  agreement: function () {
    var storeRouter = '../../detail/agreement/agreement';
    var storeTitle = '用户协议';
    commonData.routers(storeRouter, storeTitle);
  },
  show: function () {

    console.log("开始请求门店信息！！")
    var url_tmp = commonData.getListConfig().url_test;
    var _this = this;
    // console.log('options.id===' + options.id)
    //获取门店信息
    wx.request({
      url: url_tmp + '/club/qry',
      data:{
        club_id:app.globalData.user_id
      },
      success(res) {
        console.log("门店信息：。。。"+res.data)

        _this.setData({
          storeListData: res.data
        })
      }
    }) 
    //获取授课总收
    wx.request({
      url: url_tmp + '/club/qrySum',
      data:{
        club_id: app.globalData.user_id,
        reg_date:'2019-04-19'
      },
      success(res) {
        console.log(res.data)
        app.globalData.clubIncomeData=res.data
        _this.setData({
          clubIncomeData:app.globalData.clubIncomeData
        })
      }
    }) 

  },
  getPhoneNo: function () {
    var url_tmp = commonData.getListConfig().url_test;
    var _this = this
    console.log('get phoneNo')
    wx.request({
      url: url_tmp + '/user/qry',
      data: {
        mem_id: app.globalData.user_id
      },
      success(res) {
        console.log('phoneno info'+res.data.userName)
        app.globalData.phoneNo = res.data.userName
        _this.setData({
          tel: res.data.userName
        })
      }
    })
  },
  onLoad:function(){
    this.getPhoneNo();
    this.show();
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
    this.show();
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