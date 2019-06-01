//index.js
//获取应用实例
const app = getApp()
var fileData = require("../../../utils/data.js");
var util = require("../../../utils/util.js");

Page({
  data: {
    index_dots: true,
    index_color: "#646967",
    index_activeColor: "#FFFFFF",
    index_interval: 3000,
    index_duration: 1000,
    circular: true,

    swiperImg: null,
    // listData: fileData.getListData(),
    listData:null,
    date: '2019-04-01'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
    this.getClubLess();
  },
  onLoad: function () {
    this.getClubLess();
    this.getBanner();
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getClubLess:function(){
    var _this = this
    var url_tmp = util.getListConfig().url_test;
    console.log('user_id====' + app.globalData.user_id)
    wx.request({
      url: url_tmp + '/club/qryLesson',
      data: {
        club_id: app.globalData.user_id,
        start_time: _this.data.date,
        status: ''
      },

      success(res) {
        console.log(res.data)
        _this.setData({
          listData: res.data
        })
      }
    })
  },
  getBanner:function(){
    var _this = this
    var url_tmp = util.getListConfig().url_test;
    wx.request({
      // url: url_tmp + '/coach/qry',
      url: url_tmp + '/img/load1',
      data: {
        //6为轮播图
        type: 6
      },
      success(res) {
        console.log(res.data)
        _this.setData({
          swiperImg: res.data
        })
      }
    }) 
  }
})
