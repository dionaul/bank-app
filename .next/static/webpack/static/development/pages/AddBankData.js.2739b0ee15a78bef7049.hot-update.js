webpackHotUpdate("static\\development\\pages\\AddBankData.js",{

/***/ "./app/lib/AddBankDataToLocal.js":
/*!***************************************!*\
  !*** ./app/lib/AddBankDataToLocal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);


var AddBankDataToLocal = function AddBankDataToLocal(payload) {
  var bankItem = {
    payload: payload
  };
  console.log(bankItem); // let oldItems = [];
  // oldItems = localStorage.getItem('bank')
  // oldItems.push(bankItem);

  localStorage.setItem('bank', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(bankItem));
};

/* harmony default export */ __webpack_exports__["default"] = (AddBankDataToLocal);

/***/ })

})
//# sourceMappingURL=AddBankData.js.2739b0ee15a78bef7049.hot-update.js.map