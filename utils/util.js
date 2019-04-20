var app=getApp()

function routers(routers, title) {
  wx.navigateTo({
    url: routers,
    success: function () {
      wx.setNavigationBarTitle({
        title: title
      })
    }
  })
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//获取系统配置
function getListConfig() {
  var arr =
  {
    url_sc: 'http://39.106.156.239:80',
    // url_test: 'https://www.guyueyundong.com',
    url_test: 'http://localhost:8099'
  }
  return arr;
}

function wxlogin() {
  // 登录
  wx.login({
    success: res => {
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      var _this = this
      var url_tmp = _this.getListConfig().url_test;
      wx.request({
        // url: 'https://www.guyueyundong.com/wxuser/login',
        url: url_tmp + '/wxuser/login',
        data: {
          code: res.code,
          type: 3
        },
        method: 'POST',
        // dataType: 'json',
        header: {
          'content-type': 'application/x-www-form-urlencoded'  //发送post请求
        },
        success: function (res) {
          //请求成功的处理
          //console.log(code);
          app.globalData.openid = res.data.openid
          app.globalData.user_id = res.data.id
          console.log("发送code成功", res.data);
          console.log("发送code成功", res.data.openid);
        }  
      })
      wx.switchTab({
        url: '../../index/index/index',
        success: function () {
          wx.setNavigationBarTitle({
            title: '首页'
          })
        }
      })
    }
  })
}

module.exports = {
  formatTime: formatTime,
  getListConfig: getListConfig,
  routers,
  wxlogin: wxlogin
}
