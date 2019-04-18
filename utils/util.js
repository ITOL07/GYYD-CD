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

module.exports = {
  formatTime: formatTime,
  getListConfig: getListConfig,
  routers
}
