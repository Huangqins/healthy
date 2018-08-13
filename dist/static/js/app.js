global.webpackJsonp([5],{

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(42);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
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
      }, {
        pagePath: 'pages/recovery/main',
        text: '我的康复',
        iconPath: 'static/png/tabBar/recovery_nor.png',
        selectedIconPath: 'static/png/tabBar/recovery_select.png'
      }, {
        pagePath: 'pages/commeny/main',
        text: '社区',
        iconPath: 'static/png/tabBar/commeny_nor.png',
        selectedIconPath: 'static/png/tabBar/commeny_select.png'
      }, {
        pagePath: 'pages/mine/main',
        text: '我的',
        iconPath: 'static/png/tabBar/ic_mine_nor.png',
        selectedIconPath: 'static/png/tabBar/ic_mine_select.png'
      }]
    }
  }
});

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(44);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(43)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d1554c74", Component.options)
  } else {
    hotAPI.reload("data-v-d1554c74", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 43:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(25);


/* harmony default export */ __webpack_exports__["a"] = ({
  // created () {
  // 调用API从本地缓存中获取数据
  // const logs = wx.getStorageSync('logs') || []
  // logs.unshift(Date.now())
  // wx.setStorageSync('logs', logs)

  // console.log('app created and cache logs by setStorageSync')

  // },
  created: function created() {
    wx.login({
      success: function success(res) {
        if (res.code) {
          console.log(res.code);
          //登陆
          var params = { code: res.code };
          __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].login(params).then(function (res) {
            console.log(res);
          });
          // wx.request({
          //   url: 'http://nf53na.natappfree.cc/prms/associator/login.json',
          //   method: 'POST',
          //   data: {
          //     loginCode: res.code
          //   }
          // })
        }
      }
    });
  }
});

/***/ })

},[41]);
//# sourceMappingURL=app.js.map