module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/annotated-layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/annotated-layout.js":
/*!***********************************!*\
  !*** ./pages/annotated-layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass AnnotatedLayout extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      discount: \"10%\"\n    });\n\n    _defineProperty(this, \"handleSubmit\", () => {\n      this.setState({\n        discount: this.state.discount\n      });\n      console.log(\"submission\", this.state);\n    });\n\n    _defineProperty(this, \"handleChange\", field => {\n      return value => this.setState({\n        [field]: value\n      });\n    });\n  }\n\n  render() {\n    const {\n      discount\n    } = this.state;\n    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Page\"], {\n      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].AnnotatedSection, {\n          title: \"Default discount\",\n          description: \"Add a product to Sample App, it will automatically be DISCOUNTED.\",\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n            sectioned: true,\n            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n              onSubmit: this.handleSubmit,\n              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"FormLayout\"], {\n                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n                  value: discount,\n                  onChange: this.handleChange(\"discount\"),\n                  label: \"Discount PERCENTAGE\",\n                  type: \"discount\"\n                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n                  distribution: \"trailing\",\n                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n                    primary: true,\n                    submit: true,\n                    children: \"Save\"\n                  })\n                })]\n              })\n            })\n          })\n        })\n      })\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnnotatedLayout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hbm5vdGF0ZWQtbGF5b3V0LmpzPzAxNzciXSwibmFtZXMiOlsiQW5ub3RhdGVkTGF5b3V0IiwiQ29tcG9uZW50IiwiZGlzY291bnQiLCJzZXRTdGF0ZSIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImZpZWxkIiwidmFsdWUiLCJyZW5kZXIiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBV0EsTUFBTUEsZUFBTixTQUE4QkMsK0NBQTlCLENBQXdDO0FBQUE7QUFBQTs7QUFBQSxtQ0FDOUI7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FEOEI7O0FBQUEsMENBR3ZCLE1BQU07QUFDbkIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pELGdCQUFRLEVBQUUsS0FBS0UsS0FBTCxDQUFXRjtBQURULE9BQWQ7QUFHQUcsYUFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQixLQUFLRixLQUEvQjtBQUNELEtBUnFDOztBQUFBLDBDQVV2QkcsS0FBSyxJQUFJO0FBQ3RCLGFBQU9DLEtBQUssSUFBSSxLQUFLTCxRQUFMLENBQWM7QUFBRSxTQUFDSSxLQUFELEdBQVNDO0FBQVgsT0FBZCxDQUFoQjtBQUNELEtBWnFDO0FBQUE7O0FBY3RDQyxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVQO0FBQUYsUUFBZSxLQUFLRSxLQUExQjtBQUNBLHdCQUNFLDhEQUFDLHFEQUFEO0FBQUEsNkJBQ0UsOERBQUMsdURBQUQ7QUFBQSwrQkFDRSw4REFBQyx1REFBRCxDQUFRLGdCQUFSO0FBQ0UsZUFBSyxFQUFDLGtCQURSO0FBRUUscUJBQVcsRUFBQyxtRUFGZDtBQUFBLGlDQUlFLDhEQUFDLHFEQUFEO0FBQU0scUJBQVMsTUFBZjtBQUFBLG1DQUNFLDhEQUFDLHFEQUFEO0FBQU0sc0JBQVEsRUFBRSxLQUFLTSxZQUFyQjtBQUFBLHFDQUNFLCtEQUFDLDJEQUFEO0FBQUEsd0NBQ0UsOERBQUMsMERBQUQ7QUFDRSx1QkFBSyxFQUFFUixRQURUO0FBRUUsMEJBQVEsRUFBRSxLQUFLUyxZQUFMLENBQWtCLFVBQWxCLENBRlo7QUFHRSx1QkFBSyxFQUFDLHFCQUhSO0FBSUUsc0JBQUksRUFBQztBQUpQLGtCQURGLGVBT0UsOERBQUMsc0RBQUQ7QUFBTyw4QkFBWSxFQUFDLFVBQXBCO0FBQUEseUNBQ0UsOERBQUMsdURBQUQ7QUFBUSwyQkFBTyxNQUFmO0FBQWdCLDBCQUFNLE1BQXRCO0FBQUE7QUFBQTtBQURGLGtCQVBGO0FBQUE7QUFERjtBQURGO0FBSkY7QUFERjtBQURGLE1BREY7QUE0QkQ7O0FBNUNxQzs7QUErQ3pCWCw4RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Fubm90YXRlZC1sYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgRm9ybSxcbiAgRm9ybUxheW91dCxcbiAgTGF5b3V0LFxuICBQYWdlLFxuICBTdGFjayxcbiAgVGV4dEZpZWxkXG59IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XG5cbmNsYXNzIEFubm90YXRlZExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0geyBkaXNjb3VudDogXCIxMCVcIiB9O1xuXG4gIGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc2NvdW50OiB0aGlzLnN0YXRlLmRpc2NvdW50XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJzdWJtaXNzaW9uXCIsIHRoaXMuc3RhdGUpO1xuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IGZpZWxkID0+IHtcbiAgICByZXR1cm4gdmFsdWUgPT4gdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRpc2NvdW50IH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8UGFnZT5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cbiAgICAgICAgICAgIHRpdGxlPSdEZWZhdWx0IGRpc2NvdW50J1xuICAgICAgICAgICAgZGVzY3JpcHRpb249J0FkZCBhIHByb2R1Y3QgdG8gU2FtcGxlIEFwcCwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIERJU0NPVU5URUQuJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cbiAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rpc2NvdW50fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoXCJkaXNjb3VudFwiKX1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0Rpc2NvdW50IFBFUkNFTlRBR0UnXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J2Rpc2NvdW50J1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249J3RyYWlsaW5nJz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IHN1Ym1pdD5cbiAgICAgICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XG4gICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFubm90YXRlZExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/annotated-layout.js\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiPzMyZTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QvanN4LXJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-runtime\n");

/***/ })

/******/ });