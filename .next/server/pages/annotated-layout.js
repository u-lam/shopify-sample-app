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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass AnnotatedLayout extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      discount: \"10%\",\n      enabled: false\n    });\n\n    _defineProperty(this, \"handleSubmit\", () => {\n      this.setState({\n        discount: this.state.discount\n      });\n      console.log(\"submission\", this.state);\n    });\n\n    _defineProperty(this, \"handleChange\", field => {\n      return value => this.setState({\n        [field]: value\n      });\n    });\n\n    _defineProperty(this, \"handleToggle\", () => {\n      this.setState(({\n        enabled\n      }) => {\n        return {\n          enabled: !enabled\n        };\n      });\n    });\n  }\n\n  render() {\n    const {\n      discount,\n      enabled\n    } = this.state;\n    const contentStatus = enabled ? \"Disable\" : \"Enable\";\n    const textStatus = enabled ? \"enabled\" : \"disabled\";\n    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Page\"], {\n      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].AnnotatedSection, {\n          title: \"Default discount\",\n          description: \"Add a product to Sample App, it will automatically be DISCOUNTED.\",\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n            sectioned: true,\n            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n              onSubmit: this.handleSubmit,\n              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"FormLayout\"], {\n                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n                  value: discount,\n                  onChange: this.handleChange(\"discount\"),\n                  label: \"Discount PERCENTAGE\",\n                  type: \"discount\"\n                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n                  distribution: \"trailing\",\n                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n                    primary: true,\n                    submit: true,\n                    children: \"Save\"\n                  })\n                })]\n              })\n            })\n          })\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].AnnotatedSection, {\n          title: \"Price updates\",\n          description: \"Temporarily disable all Sample App price updates\",\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"SettingToggle\"], {\n            action: {\n              content: contentStatus,\n              onAction: this.handleToggle\n            },\n            enabled: enabled,\n            children: [\"This setting is\", \" \", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"TextStyle\"], {\n              variation: \"strong\",\n              children: textStatus\n            })]\n          })\n        })]\n      })\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnnotatedLayout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hbm5vdGF0ZWQtbGF5b3V0LmpzPzAxNzciXSwibmFtZXMiOlsiQW5ub3RhdGVkTGF5b3V0IiwiQ29tcG9uZW50IiwiZGlzY291bnQiLCJlbmFibGVkIiwic2V0U3RhdGUiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJmaWVsZCIsInZhbHVlIiwicmVuZGVyIiwiY29udGVudFN0YXR1cyIsInRleHRTdGF0dXMiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJjb250ZW50Iiwib25BY3Rpb24iLCJoYW5kbGVUb2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBYUEsTUFBTUEsZUFBTixTQUE4QkMsK0NBQTlCLENBQXdDO0FBQUE7QUFBQTs7QUFBQSxtQ0FDOUI7QUFDTkMsY0FBUSxFQUFFLEtBREo7QUFFTkMsYUFBTyxFQUFFO0FBRkgsS0FEOEI7O0FBQUEsMENBTXZCLE1BQU07QUFDbkIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pGLGdCQUFRLEVBQUUsS0FBS0csS0FBTCxDQUFXSDtBQURULE9BQWQ7QUFHQUksYUFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQixLQUFLRixLQUEvQjtBQUNELEtBWHFDOztBQUFBLDBDQWF2QkcsS0FBSyxJQUFJO0FBQ3RCLGFBQU9DLEtBQUssSUFBSSxLQUFLTCxRQUFMLENBQWM7QUFBRSxTQUFDSSxLQUFELEdBQVNDO0FBQVgsT0FBZCxDQUFoQjtBQUNELEtBZnFDOztBQUFBLDBDQWlCdkIsTUFBTTtBQUNuQixXQUFLTCxRQUFMLENBQWMsQ0FBQztBQUFFRDtBQUFGLE9BQUQsS0FBaUI7QUFDN0IsZUFBTztBQUFFQSxpQkFBTyxFQUFFLENBQUNBO0FBQVosU0FBUDtBQUNELE9BRkQ7QUFHRCxLQXJCcUM7QUFBQTs7QUF1QnRDTyxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVSLGNBQUY7QUFBWUM7QUFBWixRQUF3QixLQUFLRSxLQUFuQztBQUNBLFVBQU1NLGFBQWEsR0FBR1IsT0FBTyxHQUFHLFNBQUgsR0FBZSxRQUE1QztBQUNBLFVBQU1TLFVBQVUsR0FBR1QsT0FBTyxHQUFHLFNBQUgsR0FBZSxVQUF6QztBQUVBLHdCQUNFLDhEQUFDLHFEQUFEO0FBQUEsNkJBQ0UsK0RBQUMsdURBQUQ7QUFBQSxnQ0FDRSw4REFBQyx1REFBRCxDQUFRLGdCQUFSO0FBQ0UsZUFBSyxFQUFDLGtCQURSO0FBRUUscUJBQVcsRUFBQyxtRUFGZDtBQUFBLGlDQUlFLDhEQUFDLHFEQUFEO0FBQU0scUJBQVMsTUFBZjtBQUFBLG1DQUNFLDhEQUFDLHFEQUFEO0FBQU0sc0JBQVEsRUFBRSxLQUFLVSxZQUFyQjtBQUFBLHFDQUNFLCtEQUFDLDJEQUFEO0FBQUEsd0NBQ0UsOERBQUMsMERBQUQ7QUFDRSx1QkFBSyxFQUFFWCxRQURUO0FBRUUsMEJBQVEsRUFBRSxLQUFLWSxZQUFMLENBQWtCLFVBQWxCLENBRlo7QUFHRSx1QkFBSyxFQUFDLHFCQUhSO0FBSUUsc0JBQUksRUFBQztBQUpQLGtCQURGLGVBT0UsOERBQUMsc0RBQUQ7QUFBTyw4QkFBWSxFQUFDLFVBQXBCO0FBQUEseUNBQ0UsOERBQUMsdURBQUQ7QUFBUSwyQkFBTyxNQUFmO0FBQWdCLDBCQUFNLE1BQXRCO0FBQUE7QUFBQTtBQURGLGtCQVBGO0FBQUE7QUFERjtBQURGO0FBSkYsVUFERixlQXVCRSw4REFBQyx1REFBRCxDQUFRLGdCQUFSO0FBQ0UsZUFBSyxFQUFDLGVBRFI7QUFFRSxxQkFBVyxFQUFDLGtEQUZkO0FBQUEsaUNBSUUsK0RBQUMsOERBQUQ7QUFDRSxrQkFBTSxFQUFFO0FBQUVDLHFCQUFPLEVBQUVKLGFBQVg7QUFBMEJLLHNCQUFRLEVBQUUsS0FBS0M7QUFBekMsYUFEVjtBQUVFLG1CQUFPLEVBQUVkLE9BRlg7QUFBQSwwQ0FJa0IsR0FKbEIsZUFLRSw4REFBQywwREFBRDtBQUFXLHVCQUFTLEVBQUMsUUFBckI7QUFBQSx3QkFBK0JTO0FBQS9CLGNBTEY7QUFBQTtBQUpGLFVBdkJGO0FBQUE7QUFERixNQURGO0FBd0NEOztBQXBFcUM7O0FBdUV6QlosOEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9hbm5vdGF0ZWQtbGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENhcmQsXG4gIEZvcm0sXG4gIEZvcm1MYXlvdXQsXG4gIExheW91dCxcbiAgUGFnZSxcbiAgU2V0dGluZ1RvZ2dsZSxcbiAgU3RhY2ssXG4gIFRleHRGaWVsZCxcbiAgVGV4dFN0eWxlXG59IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XG5cbmNsYXNzIEFubm90YXRlZExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGRpc2NvdW50OiBcIjEwJVwiLFxuICAgIGVuYWJsZWQ6IGZhbHNlXG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGlzY291bnQ6IHRoaXMuc3RhdGUuZGlzY291bnRcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcInN1Ym1pc3Npb25cIiwgdGhpcy5zdGF0ZSk7XG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gZmllbGQgPT4ge1xuICAgIHJldHVybiB2YWx1ZSA9PiB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHsgZW5hYmxlZCB9KSA9PiB7XG4gICAgICByZXR1cm4geyBlbmFibGVkOiAhZW5hYmxlZCB9O1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRpc2NvdW50LCBlbmFibGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGNvbnRlbnRTdGF0dXMgPSBlbmFibGVkID8gXCJEaXNhYmxlXCIgOiBcIkVuYWJsZVwiO1xuICAgIGNvbnN0IHRleHRTdGF0dXMgPSBlbmFibGVkID8gXCJlbmFibGVkXCIgOiBcImRpc2FibGVkXCI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2U+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXG4gICAgICAgICAgICB0aXRsZT0nRGVmYXVsdCBkaXNjb3VudCdcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPSdBZGQgYSBwcm9kdWN0IHRvIFNhbXBsZSBBcHAsIGl0IHdpbGwgYXV0b21hdGljYWxseSBiZSBESVNDT1VOVEVELidcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XG4gICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaXNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKFwiZGlzY291bnRcIil9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEaXNjb3VudCBQRVJDRU5UQUdFJ1xuICAgICAgICAgICAgICAgICAgICB0eXBlPSdkaXNjb3VudCdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPSd0cmFpbGluZyc+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBzdWJtaXQ+XG4gICAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cbiAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cbiAgICAgICAgICAgIHRpdGxlPSdQcmljZSB1cGRhdGVzJ1xuICAgICAgICAgICAgZGVzY3JpcHRpb249J1RlbXBvcmFyaWx5IGRpc2FibGUgYWxsIFNhbXBsZSBBcHAgcHJpY2UgdXBkYXRlcydcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2V0dGluZ1RvZ2dsZVxuICAgICAgICAgICAgICBhY3Rpb249e3sgY29udGVudDogY29udGVudFN0YXR1cywgb25BY3Rpb246IHRoaXMuaGFuZGxlVG9nZ2xlIH19XG4gICAgICAgICAgICAgIGVuYWJsZWQ9e2VuYWJsZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFRoaXMgc2V0dGluZyBpc3tcIiBcIn1cbiAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249J3N0cm9uZyc+e3RleHRTdGF0dXN9PC9UZXh0U3R5bGU+XG4gICAgICAgICAgICA8L1NldHRpbmdUb2dnbGU+XG4gICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbm5vdGF0ZWRMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/annotated-layout.js\n");

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