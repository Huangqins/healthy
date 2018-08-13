import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/commeny/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#41BEEC',
      navigationBarTitleText: '重塑',
      navigationBarTextStyle: '#fff'
    },
    tabBar: {
      selectedColor: '#41BEEC',
      list: [{
          pagePath: 'pages/index/main',
          text: '首页',
          iconPath: 'static/png/tabBar/ic_home_nor.png',
          selectedIconPath: 'static/png/tabBar/ic_home_select.png'
        },
        {
          pagePath: 'pages/recovery/main',
          text: '我的康复',
          iconPath: 'static/png/tabBar/recovery_nor.png',
          selectedIconPath: 'static/png/tabBar/recovery_select.png'
        },
        {
          pagePath: 'pages/commeny/main',
          text: '社区',
          iconPath: 'static/png/tabBar/commeny_nor.png',
          selectedIconPath: 'static/png/tabBar/commeny_select.png'
        },
        {
          pagePath: 'pages/mine/main',
          text: '我的',
          iconPath: 'static/png/tabBar/ic_mine_nor.png',
          selectedIconPath: 'static/png/tabBar/ic_mine_select.png'
        }
      ]
    }
  }
}
