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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ResourceList.js":
/*!************************************!*\
  !*** ./components/ResourceList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`\n  query getProducts($ids: [ID!]!) {\n    nodes(ids: $ids) {\n      ... on Product {\n        title\n        handle\n        descriptionHtml\n        id\n        images(first: 1) {\n          edges {\n            node {\n              originalSrc\n              altText\n            }\n          }\n        }\n        variants(first: 1) {\n          edges {\n            node {\n              price\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n`;\n\nclass ResourceListWithProducts extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  render() {\n    const twoWeeksFromNow = new Date(Date.now() + 12096e5).toDateString();\n    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_apollo__WEBPACK_IMPORTED_MODULE_3__[\"Query\"], {\n      query: GET_PRODUCTS_BY_ID,\n      variables: {\n        ids: store_js__WEBPACK_IMPORTED_MODULE_5___default.a.get(\"ids\")\n      },\n      children: ({\n        data,\n        loading,\n        error\n      }) => {\n        if (loading) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n          children: \"Loading...\"\n        });\n        if (error) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n          children: error.message\n        });\n        console.log(data);\n        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Card\"], {\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"ResourceList\"], {\n            showHeader: true,\n            resourceName: {\n              singular: \"Product\",\n              plural: \"Products\"\n            },\n            items: data.nodes,\n            renderItem: item => {\n              const media = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Thumbnail\"], {\n                source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : \"\",\n                alt: item.images.edges[0] ? item.images.edges[0].node.altText : \"\"\n              });\n\n              const price = item.variants.edges[0].node.price;\n              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"ResourceList\"].Item, {\n                id: item.id,\n                media: media,\n                accessibilityLabel: `View details for ${item.title}`,\n                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Stack\"], {\n                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Stack\"].Item, {\n                    fill: true,\n                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"TextStyle\"], {\n                        variation: \"strong\",\n                        children: item.title\n                      })\n                    })\n                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Stack\"].Item, {\n                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(\"p\", {\n                      children: [\"$\", price]\n                    })\n                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Stack\"].Item, {\n                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(\"p\", {\n                      children: [\"Expires on \", twoWeeksFromNow, \" \"]\n                    })\n                  })]\n                })\n              });\n            }\n          })\n        });\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResourceListWithProducts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc291cmNlTGlzdC5qcz8zZDY1Il0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9JRCIsImdxbCIsIlJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyIsIkNvbXBvbmVudCIsInJlbmRlciIsInR3b1dlZWtzRnJvbU5vdyIsIkRhdGUiLCJub3ciLCJ0b0RhdGVTdHJpbmciLCJpZHMiLCJzdG9yZSIsImdldCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInNpbmd1bGFyIiwicGx1cmFsIiwibm9kZXMiLCJpdGVtIiwibWVkaWEiLCJpbWFnZXMiLCJlZGdlcyIsIm5vZGUiLCJvcmlnaW5hbFNyYyIsImFsdFRleHQiLCJwcmljZSIsInZhcmlhbnRzIiwiaWQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUVBLE1BQU1BLGtCQUFrQixHQUFHQyxrREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0EzQkE7O0FBNkJBLE1BQU1DLHdCQUFOLFNBQXVDQywrQ0FBdkMsQ0FBaUQ7QUFDL0NDLFFBQU0sR0FBRztBQUNQLFVBQU1DLGVBQWUsR0FBRyxJQUFJQyxJQUFKLENBQVNBLElBQUksQ0FBQ0MsR0FBTCxLQUFhLE9BQXRCLEVBQStCQyxZQUEvQixFQUF4QjtBQUNBLHdCQUNFLDhEQUFDLGtEQUFEO0FBQU8sV0FBSyxFQUFFUixrQkFBZDtBQUFrQyxlQUFTLEVBQUU7QUFBRVMsV0FBRyxFQUFFQywrQ0FBSyxDQUFDQyxHQUFOLENBQVUsS0FBVjtBQUFQLE9BQTdDO0FBQUEsZ0JBQ0csQ0FBQztBQUFFQyxZQUFGO0FBQVFDLGVBQVI7QUFBaUJDO0FBQWpCLE9BQUQsS0FBOEI7QUFDN0IsWUFBSUQsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQSxVQUFQO0FBQ2IsWUFBSUMsS0FBSixFQUFXLG9CQUFPO0FBQUEsb0JBQU1BLEtBQUssQ0FBQ0M7QUFBWixVQUFQO0FBQ1hDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaO0FBQ0EsNEJBQ0UsOERBQUMscURBQUQ7QUFBQSxpQ0FDRSw4REFBQyw2REFBRDtBQUNFLHNCQUFVLE1BRFo7QUFFRSx3QkFBWSxFQUFFO0FBQUVNLHNCQUFRLEVBQUUsU0FBWjtBQUF1QkMsb0JBQU0sRUFBRTtBQUEvQixhQUZoQjtBQUdFLGlCQUFLLEVBQUVQLElBQUksQ0FBQ1EsS0FIZDtBQUlFLHNCQUFVLEVBQUVDLElBQUksSUFBSTtBQUNsQixvQkFBTUMsS0FBSyxnQkFDVCw4REFBQywwREFBRDtBQUNFLHNCQUFNLEVBQ0pELElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLElBQ0lILElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLEVBQXFCQyxJQUFyQixDQUEwQkMsV0FEOUIsR0FFSSxFQUpSO0FBTUUsbUJBQUcsRUFDREwsSUFBSSxDQUFDRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsSUFDSUgsSUFBSSxDQUFDRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJDLElBQXJCLENBQTBCRSxPQUQ5QixHQUVJO0FBVFIsZ0JBREY7O0FBY0Esb0JBQU1DLEtBQUssR0FBR1AsSUFBSSxDQUFDUSxRQUFMLENBQWNMLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUJDLElBQXZCLENBQTRCRyxLQUExQztBQUNBLGtDQUNFLDhEQUFDLDZEQUFELENBQWMsSUFBZDtBQUNFLGtCQUFFLEVBQUVQLElBQUksQ0FBQ1MsRUFEWDtBQUVFLHFCQUFLLEVBQUVSLEtBRlQ7QUFHRSxrQ0FBa0IsRUFBRyxvQkFBbUJELElBQUksQ0FBQ1UsS0FBTSxFQUhyRDtBQUFBLHVDQUtFLCtEQUFDLHNEQUFEO0FBQUEsMENBQ0UsOERBQUMsc0RBQUQsQ0FBTyxJQUFQO0FBQVksd0JBQUksTUFBaEI7QUFBQSwyQ0FDRTtBQUFBLDZDQUNFLDhEQUFDLDBEQUFEO0FBQVcsaUNBQVMsRUFBQyxRQUFyQjtBQUFBLGtDQUNHVixJQUFJLENBQUNVO0FBRFI7QUFERjtBQURGLG9CQURGLGVBUUUsOERBQUMsc0RBQUQsQ0FBTyxJQUFQO0FBQUEsMkNBQ0U7QUFBQSxzQ0FBS0gsS0FBTDtBQUFBO0FBREYsb0JBUkYsZUFXRSw4REFBQyxzREFBRCxDQUFPLElBQVA7QUFBQSwyQ0FDRTtBQUFBLGdEQUFldkIsZUFBZjtBQUFBO0FBREYsb0JBWEY7QUFBQTtBQUxGLGdCQURGO0FBdUJEO0FBM0NIO0FBREYsVUFERjtBQWlERDtBQXRESCxNQURGO0FBMEREOztBQTdEOEM7O0FBZ0VsQ0gsdUZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jlc291cmNlTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgUmVzb3VyY2VMaXN0LFxuICBTdGFjayxcbiAgVGV4dFN0eWxlLFxuICBUaHVtYm5haWxcbn0gZnJvbSBcIkBzaG9waWZ5L3BvbGFyaXNcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwic3RvcmUtanNcIjtcblxuY29uc3QgR0VUX1BST0RVQ1RTX0JZX0lEID0gZ3FsYFxuICBxdWVyeSBnZXRQcm9kdWN0cygkaWRzOiBbSUQhXSEpIHtcbiAgICBub2RlcyhpZHM6ICRpZHMpIHtcbiAgICAgIC4uLiBvbiBQcm9kdWN0IHtcbiAgICAgICAgdGl0bGVcbiAgICAgICAgaGFuZGxlXG4gICAgICAgIGRlc2NyaXB0aW9uSHRtbFxuICAgICAgICBpZFxuICAgICAgICBpbWFnZXMoZmlyc3Q6IDEpIHtcbiAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcbiAgICAgICAgICAgICAgYWx0VGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXJpYW50cyhmaXJzdDogMSkge1xuICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY2xhc3MgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHR3b1dlZWtzRnJvbU5vdyA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAxMjA5NmU1KS50b0RhdGVTdHJpbmcoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfUFJPRFVDVFNfQllfSUR9IHZhcmlhYmxlcz17eyBpZHM6IHN0b3JlLmdldChcImlkc1wiKSB9fT5cbiAgICAgICAgeyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pID0+IHtcbiAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PjtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RcbiAgICAgICAgICAgICAgICBzaG93SGVhZGVyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiBcIlByb2R1Y3RcIiwgcGx1cmFsOiBcIlByb2R1Y3RzXCIgfX1cbiAgICAgICAgICAgICAgICBpdGVtcz17ZGF0YS5ub2Rlc31cbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1lZGlhID0gKFxuICAgICAgICAgICAgICAgICAgICA8VGh1bWJuYWlsXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5vcmlnaW5hbFNyY1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5hbHRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3QuSXRlbVxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIG1lZGlhPXttZWRpYX1cbiAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9e2BWaWV3IGRldGFpbHMgZm9yICR7aXRlbS50aXRsZX1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPSdzdHJvbmcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwcmljZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXhwaXJlcyBvbiB7dHdvV2Vla3NGcm9tTm93fSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPC9SZXNvdXJjZUxpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9RdWVyeT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ResourceList.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ResourceList */ \"./components/ResourceList.js\");\n\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst img = \"https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg\";\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      open: false\n    });\n\n    _defineProperty(this, \"handleSelection\", resources => {\n      const idsFromResources = resources.selection.map(product => product.id);\n      this.setState({\n        open: false\n      });\n      console.log(idsFromResources);\n      store_js__WEBPACK_IMPORTED_MODULE_4___default.a.set(\"ids\", idsFromResources);\n    });\n  }\n\n  render() {\n    const emptyState = !store_js__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"ids\");\n    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Page\"], {\n      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__[\"TitleBar\"], {\n        title: \"Sample App\",\n        primaryAction: {\n          content: \"Select products\",\n          onAction: () => this.setState({\n            open: true\n          })\n        }\n      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__[\"ResourcePicker\"], {\n        resourceType: \"Product\",\n        showVariants: false,\n        open: this.state.open,\n        onSelection: resources => this.handleSelection(resources),\n        onCancel: () => this.setState({\n          open: false\n        })\n      }), emptyState ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"EmptyState\"], {\n          heading: \"Discount your products temporarily\",\n          action: {\n            content: \"Select products\",\n            onAction: () => this.setState({\n              open: true\n            })\n          },\n          image: img,\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n            children: \"Select products to change their price temporarily\"\n          })\n        })\n      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_components_ResourceList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {})]\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImltZyIsIkluZGV4IiwiQ29tcG9uZW50Iiwib3BlbiIsInJlc291cmNlcyIsImlkc0Zyb21SZXNvdXJjZXMiLCJzZWxlY3Rpb24iLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZSIsInNldCIsInJlbmRlciIsImVtcHR5U3RhdGUiLCJnZXQiLCJjb250ZW50Iiwib25BY3Rpb24iLCJzdGF0ZSIsImhhbmRsZVNlbGVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsR0FBRyxHQUFHLG1FQUFaOztBQUVBLE1BQU1DLEtBQU4sU0FBb0JDLCtDQUFwQixDQUE4QjtBQUFBO0FBQUE7O0FBQUEsbUNBQ3BCO0FBQ05DLFVBQUksRUFBRTtBQURBLEtBRG9COztBQUFBLDZDQUtWQyxTQUFTLElBQUk7QUFDN0IsWUFBTUMsZ0JBQWdCLEdBQUdELFNBQVMsQ0FBQ0UsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0JDLE9BQU8sSUFBSUEsT0FBTyxDQUFDQyxFQUEzQyxDQUF6QjtBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUFFUCxZQUFJLEVBQUU7QUFBUixPQUFkO0FBQ0FRLGFBQU8sQ0FBQ0MsR0FBUixDQUFZUCxnQkFBWjtBQUNBUSxxREFBSyxDQUFDQyxHQUFOLENBQVUsS0FBVixFQUFpQlQsZ0JBQWpCO0FBQ0QsS0FWMkI7QUFBQTs7QUFZNUJVLFFBQU0sR0FBRztBQUNQLFVBQU1DLFVBQVUsR0FBRyxDQUFDSCwrQ0FBSyxDQUFDSSxHQUFOLENBQVUsS0FBVixDQUFwQjtBQUVBLHdCQUNFLCtEQUFDLHFEQUFEO0FBQUEsOEJBQ0UsOERBQUMsa0VBQUQ7QUFDRSxhQUFLLEVBQUMsWUFEUjtBQUVFLHFCQUFhLEVBQUU7QUFDYkMsaUJBQU8sRUFBRSxpQkFESTtBQUViQyxrQkFBUSxFQUFFLE1BQU0sS0FBS1QsUUFBTCxDQUFjO0FBQUVQLGdCQUFJLEVBQUU7QUFBUixXQUFkO0FBRkg7QUFGakIsUUFERixlQVFFLDhEQUFDLHdFQUFEO0FBQ0Usb0JBQVksRUFBQyxTQURmO0FBRUUsb0JBQVksRUFBRSxLQUZoQjtBQUdFLFlBQUksRUFBRSxLQUFLaUIsS0FBTCxDQUFXakIsSUFIbkI7QUFJRSxtQkFBVyxFQUFFQyxTQUFTLElBQUksS0FBS2lCLGVBQUwsQ0FBcUJqQixTQUFyQixDQUo1QjtBQUtFLGdCQUFRLEVBQUUsTUFBTSxLQUFLTSxRQUFMLENBQWM7QUFBRVAsY0FBSSxFQUFFO0FBQVIsU0FBZDtBQUxsQixRQVJGLEVBZUdhLFVBQVUsZ0JBQ1QsOERBQUMsdURBQUQ7QUFBQSwrQkFJRSw4REFBQywyREFBRDtBQUNFLGlCQUFPLEVBQUMsb0NBRFY7QUFFRSxnQkFBTSxFQUFFO0FBQ05FLG1CQUFPLEVBQUUsaUJBREg7QUFFTkMsb0JBQVEsRUFBRSxNQUFNLEtBQUtULFFBQUwsQ0FBYztBQUFFUCxrQkFBSSxFQUFFO0FBQVIsYUFBZDtBQUZWLFdBRlY7QUFNRSxlQUFLLEVBQUVILEdBTlQ7QUFBQSxpQ0FRRTtBQUFBO0FBQUE7QUFSRjtBQUpGLFFBRFMsZ0JBaUJULDhEQUFDLGdFQUFELEtBaENKO0FBQUEsTUFERjtBQXFDRDs7QUFwRDJCOztBQXVEZkMsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGF5b3V0LCBQYWdlLCBFbXB0eVN0YXRlIH0gZnJvbSBcIkBzaG9waWZ5L3BvbGFyaXNcIjtcbmltcG9ydCB7IFJlc291cmNlUGlja2VyLCBUaXRsZUJhciB9IGZyb20gXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcInN0b3JlLWpzXCI7XG5pbXBvcnQgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIGZyb20gXCIuLi9jb21wb25lbnRzL1Jlc291cmNlTGlzdFwiO1xuXG5jb25zdCBpbWcgPSBcImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzU3Lzk5NTUvZmlsZXMvZW1wdHktc3RhdGUuc3ZnXCI7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3BlbjogZmFsc2VcbiAgfTtcblxuICBoYW5kbGVTZWxlY3Rpb24gPSByZXNvdXJjZXMgPT4ge1xuICAgIGNvbnN0IGlkc0Zyb21SZXNvdXJjZXMgPSByZXNvdXJjZXMuc2VsZWN0aW9uLm1hcChwcm9kdWN0ID0+IHByb2R1Y3QuaWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgICBjb25zb2xlLmxvZyhpZHNGcm9tUmVzb3VyY2VzKTtcbiAgICBzdG9yZS5zZXQoXCJpZHNcIiwgaWRzRnJvbVJlc291cmNlcyk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGVtcHR5U3RhdGUgPSAhc3RvcmUuZ2V0KFwiaWRzXCIpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlPlxuICAgICAgICA8VGl0bGVCYXJcbiAgICAgICAgICB0aXRsZT0nU2FtcGxlIEFwcCdcbiAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XG4gICAgICAgICAgICBjb250ZW50OiBcIlNlbGVjdCBwcm9kdWN0c1wiLFxuICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPFJlc291cmNlUGlja2VyXG4gICAgICAgICAgcmVzb3VyY2VUeXBlPSdQcm9kdWN0J1xuICAgICAgICAgIHNob3dWYXJpYW50cz17ZmFsc2V9XG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgIG9uU2VsZWN0aW9uPXtyZXNvdXJjZXMgPT4gdGhpcy5oYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKX1cbiAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pfVxuICAgICAgICAvPlxuICAgICAgICB7ZW1wdHlTdGF0ZSA/IChcbiAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgey8qIDxUZXh0U3R5bGUgdmFyaWF0aW9uPSdwb3NpdGl2ZSc+XG4gICAgICAgICAgU2FtcGxlIGFwcCB1c2luZyBSZWFjdCBhbmQgTmV4dC5qc1xuICAgICAgICA8L1RleHRTdHlsZT4gKi99XG4gICAgICAgICAgICA8RW1wdHlTdGF0ZVxuICAgICAgICAgICAgICBoZWFkaW5nPSdEaXNjb3VudCB5b3VyIHByb2R1Y3RzIHRlbXBvcmFyaWx5J1xuICAgICAgICAgICAgICBhY3Rpb249e3tcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlNlbGVjdCBwcm9kdWN0c1wiLFxuICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpbWFnZT17aW1nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cD5TZWxlY3QgcHJvZHVjdHMgdG8gY2hhbmdlIHRoZWlyIHByaWNlIHRlbXBvcmFyaWx5PC9wPlxuICAgICAgICAgICAgPC9FbXB0eVN0YXRlPlxuICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/app-bridge-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI/MDY2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/app-bridge-react\n");

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