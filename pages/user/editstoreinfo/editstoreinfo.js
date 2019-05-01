// pages/user/editstoreinfo/editstoreinfo.js
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
    inputVal: '',
    actionHidden: true,
    addImg: '',
    club_id: app.globalData.user_id,
    storeData: null,
    open_time: null,
    close_time: null,
    latitude: null,
    longitude: null,
    jcss: null,
    club_name_in:null,
    addr_in:null,
    area_in:null,
    tel:null,
    mobileLocation: {//移动选择位置数据
      longitude: 0,
      latitude: 0,
      address: '',
    }
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
  club_name_in: function (res) {
    this.setData({
      club_name_in: res.detail.value
    })
  },
  addr_in: function (res) {
    this.setData({
      addr_in: res.detail.value
    })
  },
  area_in: function (res) {
    this.setData({
      area_in: res.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  finishClick: function(){
    console.log("开始上传门店信息！！")
    var url_tmp = util.getListConfig().url_test;
    var _this = this;
    console.log('club_id===' + _this.data.club_id)
    console.log('addr===' + _this.data.mobileLocation.address)
    wx.request({
      url: url_tmp + '/club/update',
      data:({
        club_id: app.globalData.user_id,
        name:_this.data.club_name_in,
        la: _this.data.mobileLocation.latitude,
        lo: _this.data.mobileLocation.longitude,
        addr: _this.data.mobileLocation.address,
        tel:_this.data.tel,
        area:_this.data.area_in,
        open_time:_this.data.open_time,
        close_time:_this.data.close_time,
        jcss:_this.data.jcss
      }),
      success(res) {
        console.log(res.data)
      }
    })

    var storeRouter = '../../user/storedetail/storedetail';
    var storeTitle = '门店信息';
    util.routers(storeRouter, storeTitle);
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
          tel:res.data.tel,
          jcss: res.data.jcss.split('、')
        })
        console.log("jcss====" + _this.data.jcss)
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

  },
  //移动选点
  moveToLocation: function () {
    var that = this;
    wx.chooseLocation({
      success: function (res) {

        let mobileLocation = {
          longitude: res.longitude,
          latitude: res.latitude,
          address: res.address,
        };
        that.setData({
          mobileLocation: mobileLocation,
          addr_in: mobileLocation.address
        });
        console.log(mobileLocation)
      },
      fail: function (err) {
        console.log(err)
      }
    });
},

})