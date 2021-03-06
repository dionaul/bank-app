webpackHotUpdate("static\\development\\pages\\AddBankData.js",{

/***/ "./app/lib/AddBankDataToLocal.js":
/*!***************************************!*\
  !*** ./app/lib/AddBankDataToLocal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);


var AddBankDataToLocal = function AddBankDataToLocal(payload) {
  var id = payload.id,
      accountName = payload.accountName,
      accountNumber = payload.accountNumber,
      swiftCode = payload.swiftCode,
      address = payload.address,
      city = payload.city,
      country = payload.country,
      firstName = payload.firstName,
      lastName = payload.lastName,
      companyName = payload.companyName,
      type = payload.type,
      currency = payload.currency;
  var bankItem = {
    id: id,
    accountName: accountName,
    accountNumber: accountNumber,
    swiftCode: swiftCode,
    address: address,
    city: city,
    country: country,
    firstName: firstName,
    lastName: lastName,
    companyName: companyName,
    type: type,
    currency: currency
  };
  var bankLS = JSON.parse(localStorage.getItem('bank')) || [];
  var prevItem = bankLS.find(function (p) {
    return p.id === id;
  });

  if (prevItem) {
    prevItem.id++;
    bankLS.push(bankItem);
    bankLS = bankLS.filter(function (item) {
      return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(item).length !== 0;
    });
  } else {
    bankLS.push(bankItem);
    bankLS = bankLS.filter(function (item) {
      return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(item).length !== 0;
    });
  }

  localStorage.removeItem('bank');
};

/* harmony default export */ __webpack_exports__["default"] = (AddBankDataToLocal);

/***/ })

})
//# sourceMappingURL=AddBankData.js.5290bb2a0073cfd2585d.hot-update.js.map