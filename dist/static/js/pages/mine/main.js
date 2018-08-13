global.webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(101);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_63553668_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(104);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(102)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-63553668"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_63553668_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/mine/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63553668", Component.options)
  } else {
    hotAPI.reload("data-v-63553668", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 102:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      userInfo: {},
      arrowIcon: '../../../static/png/ic_gray_arrow_right.png',
      noUserInfo: {
        avatarUrl: '../../../static/png/mine/mess_head.png'
      },
      navList: [{
        iconUrl: '../../../static/png/mine/mess_doc.png',
        navUrl: '',
        navTitle: '我的预约'
      }, {
        iconUrl: '../../../static/png/mine/mess_collect.png',
        navUrl: '',
        navTitle: '收藏记录'
      }, {
        iconUrl: '../../../static/png/mine/mess_history.png',
        navUrl: '',
        navTitle: '浏览记录'
      }, {
        iconUrl: '../../../static/png/mine/mess_pay.png',
        navUrl: '',
        navTitle: '我的支付'
      }, {
        iconUrl: '../../../static/png/mine/mess_feedback.png',
        navUrl: '',
        navTitle: '系统反馈'
      }]
    };
  },
  created: function created() {
    this.userInfo = wx.getStorageSync("userInfo");
    console.log(this.userInfo);
  }
});

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mine container-common"
  }, [_c('div', {
    staticClass: "mine-user"
  }, [_c('div', {
    staticClass: "mine-user-avatar"
  }, [_c('img', {
    attrs: {
      "src": _vm.userInfo.openId ? _vm.userInfo.avatarUrl : _vm.noUserInfo.avatarUrl,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mine-user-info"
  }, [_c('h2', [_vm._v(_vm._s(_vm.userInfo.openId ? _vm.userInfo.nickName : '尚未登录'))]), _vm._v(" "), _c('p', [_vm._v("普通用户哦")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "mine-fun"
  }, [_c('ul', _vm._l((_vm.navList), function(item, index) {
    return _c('li', {
      key: index,
      class: {
        'liver': index === 2
      }
    }, [_c('img', {
      attrs: {
        "src": item.iconUrl
      }
    }), _vm._v("\n          " + _vm._s(item.navTitle) + "\n          "), _c('img', {
      staticClass: "fr",
      staticStyle: {
        "margin-right": "10px"
      },
      attrs: {
        "src": _vm.arrowIcon
      }
    })])
  }))], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-63553668", esExports)
  }
}

/***/ })

},[100]);
//# sourceMappingURL=main.js.map