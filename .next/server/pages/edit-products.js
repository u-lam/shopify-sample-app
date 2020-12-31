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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/edit-products.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/edit-products.js":
/*!********************************!*\
  !*** ./pages/edit-products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst UPDATE_PRICE = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`\n  mutation productVariantUpdate($input: ProductVariantInput!) {\n    productVariantUpdate(input: $input) {\n      product {\n        title\n      }\n      productVariant {\n        id\n        price\n      }\n    }\n  }\n`;\n\nclass EditProduct extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      discount: \"\",\n      price: \"\",\n      variantId: \"\",\n      showToast: false\n    });\n\n    _defineProperty(this, \"itemToBeConsumed\", () => {\n      const item = store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"item\");\n      const price = item.variants.edges[0].node.price;\n      const variantId = item.variants.edges[0].node.id;\n      const discounter = price * 0.1;\n      this.setState({\n        price,\n        variantId\n      });\n      return (price - discounter).toFixed(2);\n    });\n\n    _defineProperty(this, \"handleChange\", field => {\n      return value => this.setState({\n        [field]: value\n      });\n    });\n  }\n\n  componentDidMount() {\n    this.setState({\n      discount: this.itemToBeConsumed()\n    });\n  }\n\n  render() {\n    const {\n      name,\n      discount,\n      price,\n      variantId\n    } = this.state;\n    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_apollo__WEBPACK_IMPORTED_MODULE_5__[\"Mutation\"], {\n      mutation: UPDATE_PRICE,\n      children: (handleSubmit, {\n        error,\n        data\n      }) => {\n        const showError = error && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Banner\"], {\n          status: \"critical\",\n          children: error.message\n        });\n\n        const showToast = data && data.productVariantUpdate && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Toast\"], {\n          content: \"Successfully updated\",\n          onDismiss: () => this.setState({\n            showToast: false\n          })\n        });\n\n        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Frame\"], {\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Page\"], {\n            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n              children: [showToast, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n                children: showError\n              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"DisplayText\"], {\n                  size: \"large\",\n                  children: name\n                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n                    sectioned: true,\n                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"FormLayout\"], {\n                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"FormLayout\"].Group, {\n                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n                          prefix: \"$\",\n                          value: price,\n                          disabled: true,\n                          label: \"Original Price\",\n                          type: \"price\"\n                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n                          prefix: \"$\",\n                          value: discount,\n                          onChange: this.handleChange(\"discount\"),\n                          label: \"Discounted Price\",\n                          type: \"discount\"\n                        })]\n                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n                        children: \"This sale price will expire in 2 weeks\"\n                      })]\n                    })\n                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"PageActions\"], {\n                    primaryAction: [{\n                      content: \"Save\",\n                      onAction: () => {\n                        const productVariableInput = {\n                          id: variantId,\n                          price: discount\n                        };\n                        handleSubmit({\n                          variables: {\n                            input: productVariableInput\n                          }\n                        });\n                      }\n                    }],\n                    secondaryActions: [{\n                      content: \"Remove discount\"\n                    }]\n                  })]\n                })]\n              })]\n            })\n          })\n        });\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditProduct);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lZGl0LXByb2R1Y3RzLmpzPzg4MzIiXSwibmFtZXMiOlsiVVBEQVRFX1BSSUNFIiwiZ3FsIiwiRWRpdFByb2R1Y3QiLCJDb21wb25lbnQiLCJkaXNjb3VudCIsInByaWNlIiwidmFyaWFudElkIiwic2hvd1RvYXN0IiwiaXRlbSIsInN0b3JlIiwiZ2V0IiwidmFyaWFudHMiLCJlZGdlcyIsIm5vZGUiLCJpZCIsImRpc2NvdW50ZXIiLCJzZXRTdGF0ZSIsInRvRml4ZWQiLCJmaWVsZCIsInZhbHVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJpdGVtVG9CZUNvbnN1bWVkIiwicmVuZGVyIiwibmFtZSIsInN0YXRlIiwiaGFuZGxlU3VibWl0IiwiZXJyb3IiLCJkYXRhIiwic2hvd0Vycm9yIiwibWVzc2FnZSIsInByb2R1Y3RWYXJpYW50VXBkYXRlIiwiaGFuZGxlQ2hhbmdlIiwiY29udGVudCIsIm9uQWN0aW9uIiwicHJvZHVjdFZhcmlhYmxlSW5wdXQiLCJ2YXJpYWJsZXMiLCJpbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBR0Msa0RBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBWkE7O0FBY0EsTUFBTUMsV0FBTixTQUEwQkMsK0NBQTFCLENBQW9DO0FBQUE7QUFBQTs7QUFBQSxtQ0FDMUI7QUFDTkMsY0FBUSxFQUFFLEVBREo7QUFFTkMsV0FBSyxFQUFFLEVBRkQ7QUFHTkMsZUFBUyxFQUFFLEVBSEw7QUFJTkMsZUFBUyxFQUFFO0FBSkwsS0FEMEI7O0FBQUEsOENBUWYsTUFBTTtBQUN2QixZQUFNQyxJQUFJLEdBQUdDLCtDQUFLLENBQUNDLEdBQU4sQ0FBVSxNQUFWLENBQWI7QUFDQSxZQUFNTCxLQUFLLEdBQUdHLElBQUksQ0FBQ0csUUFBTCxDQUFj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K0JBQUssRUFBRUQ7QUFGb0IseUJBQTdCO0FBSUFxQixvQ0FBWSxDQUFDO0FBQ1hVLG1DQUFTLEVBQUU7QUFBRUMsaUNBQUssRUFBRUY7QUFBVDtBQURBLHlCQUFELENBQVo7QUFHRDtBQVZILHFCQURhLENBRGpCO0FBZUUsb0NBQWdCLEVBQUUsQ0FDaEI7QUFDRUYsNkJBQU8sRUFBRTtBQURYLHFCQURnQjtBQWZwQixvQkF0QkY7QUFBQSxrQkFGRjtBQUFBLGdCQUhGO0FBQUE7QUFERjtBQURGLFVBREY7QUF5REQ7QUFwRUgsTUFERjtBQXdFRDs7QUFuR2lDOztBQXNHckI5QiwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2VkaXQtcHJvZHVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEJhbm5lcixcbiAgRnJhbWUsXG4gIFRvYXN0LFxuICBDYXJkLFxuICBEaXNwbGF5VGV4dCxcbiAgRm9ybSxcbiAgRm9ybUxheW91dCxcbiAgUGFnZSxcbiAgUGFnZUFjdGlvbnMsXG4gIFRleHRGaWVsZCxcbiAgTGF5b3V0XG59IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcInN0b3JlLWpzXCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5cbmNvbnN0IFVQREFURV9QUklDRSA9IGdxbGBcbiAgbXV0YXRpb24gcHJvZHVjdFZhcmlhbnRVcGRhdGUoJGlucHV0OiBQcm9kdWN0VmFyaWFudElucHV0ISkge1xuICAgIHByb2R1Y3RWYXJpYW50VXBkYXRlKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIHByb2R1Y3Qge1xuICAgICAgICB0aXRsZVxuICAgICAgfVxuICAgICAgcHJvZHVjdFZhcmlhbnQge1xuICAgICAgICBpZFxuICAgICAgICBwcmljZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY2xhc3MgRWRpdFByb2R1Y3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBkaXNjb3VudDogXCJcIixcbiAgICBwcmljZTogXCJcIixcbiAgICB2YXJpYW50SWQ6IFwiXCIsXG4gICAgc2hvd1RvYXN0OiBmYWxzZVxuICB9O1xuXG4gIGl0ZW1Ub0JlQ29uc3VtZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IHN0b3JlLmdldChcIml0ZW1cIik7XG4gICAgY29uc3QgcHJpY2UgPSBpdGVtLnZhcmlhbnRzLmVkZ2VzWzBdLm5vZGUucHJpY2U7XG4gICAgY29uc3QgdmFyaWFudElkID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLmlkO1xuICAgIGNvbnN0IGRpc2NvdW50ZXIgPSBwcmljZSAqIDAuMTtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2UsIHZhcmlhbnRJZCB9KTtcbiAgICByZXR1cm4gKHByaWNlIC0gZGlzY291bnRlcikudG9GaXhlZCgyKTtcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSBmaWVsZCA9PiB7XG4gICAgcmV0dXJuIHZhbHVlID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlzY291bnQ6IHRoaXMuaXRlbVRvQmVDb25zdW1lZCgpIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgZGlzY291bnQsIHByaWNlLCB2YXJpYW50SWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNdXRhdGlvbiBtdXRhdGlvbj17VVBEQVRFX1BSSUNFfT5cbiAgICAgICAgeyhoYW5kbGVTdWJtaXQsIHsgZXJyb3IsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNob3dFcnJvciA9IGVycm9yICYmIChcbiAgICAgICAgICAgIDxCYW5uZXIgc3RhdHVzPSdjcml0aWNhbCc+e2Vycm9yLm1lc3NhZ2V9PC9CYW5uZXI+XG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBzaG93VG9hc3QgPSBkYXRhICYmIGRhdGEucHJvZHVjdFZhcmlhbnRVcGRhdGUgJiYgKFxuICAgICAgICAgICAgPFRvYXN0XG4gICAgICAgICAgICAgIGNvbnRlbnQ9J1N1Y2Nlc3NmdWxseSB1cGRhdGVkJ1xuICAgICAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93VG9hc3Q6IGZhbHNlIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RnJhbWU+XG4gICAgICAgICAgICAgIDxQYWdlPlxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICB7c2hvd1RvYXN0fVxuICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPntzaG93RXJyb3J9PC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9J2xhcmdlJz57bmFtZX08L0Rpc3BsYXlUZXh0PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQuR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PSckJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nT3JpZ2luYWwgUHJpY2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdwcmljZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD0nJCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaXNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZShcImRpc2NvdW50XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0Rpc2NvdW50ZWQgUHJpY2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdkaXNjb3VudCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQuR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoaXMgc2FsZSBwcmljZSB3aWxsIGV4cGlyZSBpbiAyIHdlZWtzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8UGFnZUFjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlBY3Rpb249e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiU2F2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0VmFyaWFibGVJbnB1dCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHZhcmlhbnRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGRpc2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IGlucHV0OiBwcm9kdWN0VmFyaWFibGVJbnB1dCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlBY3Rpb25zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlJlbW92ZSBkaXNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgPC9GcmFtZT5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9NdXRhdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRQcm9kdWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/edit-products.js\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-apollo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIj8yMGU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWFwb2xsby5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-apollo\n");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiPzMyZTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QvanN4LXJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-runtime\n");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"store-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiP2QxYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3RvcmUtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///store-js\n");

/***/ })

/******/ });