webpackHotUpdate_N_E("pages/annotated-layout",{

/***/ "./pages/annotated-layout.js":
/*!***********************************!*\
  !*** ./pages/annotated-layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n\n\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar AnnotatedLayout = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(AnnotatedLayout, _Component);\n\n  var _super = _createSuper(AnnotatedLayout);\n\n  function AnnotatedLayout() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, AnnotatedLayout);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      discount: \"10%\"\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleSubmit\", function () {\n      _this.setState({\n        discount: _this.state.discount\n      });\n\n      console.log(\"submission\", _this.state);\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleChange\", function (field) {\n      return function (value) {\n        return _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, field, value));\n      };\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(AnnotatedLayout, [{\n    key: \"render\",\n    value: function render() {\n      var discount = this.state.discount;\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Page\"], {\n        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Layout\"], {\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Layout\"].AnnotatedSection, {\n            title: \"Default discount\",\n            description: \"Add a product to Sample App, it will automatically be DISCOUNTED.\",\n            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Card\"], {\n              sectioned: true,\n              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Form\"], {\n                onSubmit: this.handleSubmit,\n                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"FormLayout\"], {\n                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"TextField\"], {\n                    value: discount,\n                    onChange: this.handleChange(\"discount\"),\n                    label: \"Discount PERCENTAGE\",\n                    type: \"discount\"\n                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Stack\"], {\n                    distribution: \"trailing\",\n                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n                      primary: true,\n                      submit: true,\n                      children: \"Save\"\n                    })\n                  })]\n                })\n              })\n            })\n          })\n        })\n      });\n    }\n  }]);\n\n  return AnnotatedLayout;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnnotatedLayout);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5ub3RhdGVkLWxheW91dC5qcz8wMTc3Il0sIm5hbWVzIjpbIkFubm90YXRlZExheW91dCIsImRpc2NvdW50Iiwic2V0U3RhdGUiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJmaWVsZCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQVdNQSxlOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEs7O3VOQUVPLFlBQU07QUFDbkIsWUFBS0MsUUFBTCxDQUFjO0FBQ1pELGdCQUFRLEVBQUUsTUFBS0UsS0FBTCxDQUFXRjtBQURULE9BQWQ7O0FBR0FHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEIsTUFBS0YsS0FBL0I7QUFDRCxLOzt1TkFFYyxVQUFBRyxLQUFLLEVBQUk7QUFDdEIsYUFBTyxVQUFBQyxLQUFLO0FBQUEsZUFBSSxNQUFLTCxRQUFMLCtGQUFpQkksS0FBakIsRUFBeUJDLEtBQXpCLEVBQUo7QUFBQSxPQUFaO0FBQ0QsSzs7Ozs7Ozs2QkFFUTtBQUFBLFVBQ0NOLFFBREQsR0FDYyxLQUFLRSxLQURuQixDQUNDRixRQUREO0FBRVAsMEJBQ0UsOERBQUMscURBQUQ7QUFBQSwrQkFDRSw4REFBQyx1REFBRDtBQUFBLGlDQUNFLDhEQUFDLHVEQUFELENBQVEsZ0JBQVI7QUFDRSxpQkFBSyxFQUFDLGtCQURSO0FBRUUsdUJBQVcsRUFBQyxtRUFGZDtBQUFBLG1DQUlFLDhEQUFDLHFEQUFEO0FBQU0sdUJBQVMsTUFBZjtBQUFBLHFDQUNFLDhEQUFDLHFEQUFEO0FBQU0sd0JBQVEsRUFBRSxLQUFLTyxZQUFyQjtBQUFBLHVDQUNFLCtEQUFDLDJEQUFEO0FBQUEsMENBQ0UsOERBQUMsMERBQUQ7QUFDRSx5QkFBSyxFQUFFUCxRQURUO0FBRUUsNEJBQVEsRUFBRSxLQUFLUSxZQUFMLENBQWtCLFVBQWxCLENBRlo7QUFHRSx5QkFBSyxFQUFDLHFCQUhSO0FBSUUsd0JBQUksRUFBQztBQUpQLG9CQURGLGVBT0UsOERBQUMsc0RBQUQ7QUFBTyxnQ0FBWSxFQUFDLFVBQXBCO0FBQUEsMkNBQ0UsOERBQUMsdURBQUQ7QUFBUSw2QkFBTyxNQUFmO0FBQWdCLDRCQUFNLE1BQXRCO0FBQUE7QUFBQTtBQURGLG9CQVBGO0FBQUE7QUFERjtBQURGO0FBSkY7QUFERjtBQURGLFFBREY7QUE0QkQ7Ozs7RUE1QzJCQywrQzs7QUErQ2ZWLDhFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYW5ub3RhdGVkLWxheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBGb3JtLFxuICBGb3JtTGF5b3V0LFxuICBMYXlvdXQsXG4gIFBhZ2UsXG4gIFN0YWNrLFxuICBUZXh0RmllbGRcbn0gZnJvbSBcIkBzaG9waWZ5L3BvbGFyaXNcIjtcblxuY2xhc3MgQW5ub3RhdGVkTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IGRpc2NvdW50OiBcIjEwJVwiIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGlzY291bnQ6IHRoaXMuc3RhdGUuZGlzY291bnRcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcInN1Ym1pc3Npb25cIiwgdGhpcy5zdGF0ZSk7XG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gZmllbGQgPT4ge1xuICAgIHJldHVybiB2YWx1ZSA9PiB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGlzY291bnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlPlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxuICAgICAgICAgICAgdGl0bGU9J0RlZmF1bHQgZGlzY291bnQnXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj0nQWRkIGEgcHJvZHVjdCB0byBTYW1wbGUgQXBwLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgRElTQ09VTlRFRC4nXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxuICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlzY291bnR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZShcImRpc2NvdW50XCIpfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGlzY291bnQgUEVSQ0VOVEFHRSdcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nZGlzY291bnQnXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj0ndHJhaWxpbmcnPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc3VibWl0PlxuICAgICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5ub3RhdGVkTGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/annotated-layout.js\n");

/***/ })

})