module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: linkStyle
  }, "Home")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/about"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: linkStyle
  }, "About")));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__(2);


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: layoutStyle
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], null), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(4);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__(3);

// CONCATENATED MODULE: ./components/PostLink.js




var PostLink_PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return external__react__default.a.createElement("li", {
    className: "jsx-3950785544"
  }, external__react__default.a.createElement(link__default.a, {
    as: "/p/".concat(post.id),
    href: "/post?title=".concat(post.title)
  }, external__react__default.a.createElement("a", {
    className: "jsx-3950785544"
  }, post.title)), external__react__default.a.createElement(style__default.a, {
    styleId: "3950785544",
    css: ["li.jsx-3950785544{list-style:none;margin:5px 0;}", "a.jsx-3950785544{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:\"Arial\";}", "a.jsx-3950785544:hover{opacity:0.6;}"]
  }));
};

/* harmony default export */ var components_PostLink = (PostLink_PostLink);
// CONCATENATED MODULE: ./pages/index.js






function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  }, {
    id: 'learn-nextjs',
    title: 'Learn Next.js is awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy apps with ZEIT'
  }];
}

/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external__react__default.a.createElement(Layout["a" /* default */], null, external__react__default.a.createElement("h1", {
    className: "jsx-2987328901"
  }, "My Blog"), external__react__default.a.createElement("ul", {
    className: "jsx-2987328901"
  }, getPosts().map(function (post) {
    return external__react__default.a.createElement(components_PostLink, {
      key: post.id,
      post: post
    });
  })), external__react__default.a.createElement(style__default.a, {
    styleId: "2987328901",
    css: ["h1.jsx-2987328901,a.jsx-2987328901{font-family:\"Arial\";}", "ul.jsx-2987328901{padding:0;}", "li.jsx-2987328901{list-style:none;margin:5px 0;}", "a.jsx-2987328901{-webkit-text-decoration:none;text-decoration:none;color:blue;}", "a.jsx-2987328901:hover{opacity:0.6;}"]
  }));
});

/***/ })
/******/ ]);