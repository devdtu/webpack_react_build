/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "QAR2":
/*!******************************************!*\
  !*** ./src/js/react-content-editable.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_contenteditable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-contenteditable */ \"UiDi\");\n/* harmony import */ var react_contenteditable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_contenteditable__WEBPACK_IMPORTED_MODULE_0__);\n\nwindow.ReactContenteditable = (react_contenteditable__WEBPACK_IMPORTED_MODULE_0___default());\n\n//# sourceURL=webpack://yarn-webpack/./src/js/react-content-editable.js?");

/***/ }),

/***/ "UiDi":
/*!*************************************************************************!*\
  !*** ./node_modules/react-contenteditable/lib/react-contenteditable.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar React = __importStar(__webpack_require__(/*! react */ \"xIFI\"));\nvar fast_deep_equal_1 = __importDefault(__webpack_require__(/*! fast-deep-equal */ \"FSK0\"));\nvar PropTypes = __importStar(__webpack_require__(/*! prop-types */ \"17x9\"));\nfunction normalizeHtml(str) {\n    return str && str.replace(/&nbsp;|\\u202F|\\u00A0/g, ' ');\n}\nfunction replaceCaret(el) {\n    // Place the caret at the end of the element\n    var target = document.createTextNode('');\n    el.appendChild(target);\n    // do not move caret if element was not focused\n    var isTargetFocused = document.activeElement === el;\n    if (target !== null && target.nodeValue !== null && isTargetFocused) {\n        var sel = window.getSelection();\n        if (sel !== null) {\n            var range = document.createRange();\n            range.setStart(target, target.nodeValue.length);\n            range.collapse(true);\n            sel.removeAllRanges();\n            sel.addRange(range);\n        }\n        if (el instanceof HTMLElement)\n            el.focus();\n    }\n}\n/**\n * A simple component for an html element with editable contents.\n */\nvar ContentEditable = /** @class */ (function (_super) {\n    __extends(ContentEditable, _super);\n    function ContentEditable() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.lastHtml = _this.props.html;\n        _this.el = typeof _this.props.innerRef === 'function' ? { current: null } : React.createRef();\n        _this.getEl = function () { return (_this.props.innerRef && typeof _this.props.innerRef !== 'function' ? _this.props.innerRef : _this.el).current; };\n        _this.emitChange = function (originalEvt) {\n            var el = _this.getEl();\n            if (!el)\n                return;\n            var html = el.innerHTML;\n            if (_this.props.onChange && html !== _this.lastHtml) {\n                // Clone event with Object.assign to avoid\n                // \"Cannot assign to read only property 'target' of object\"\n                var evt = Object.assign({}, originalEvt, {\n                    target: {\n                        value: html\n                    }\n                });\n                _this.props.onChange(evt);\n            }\n            _this.lastHtml = html;\n        };\n        return _this;\n    }\n    ContentEditable.prototype.render = function () {\n        var _this = this;\n        var _a = this.props, tagName = _a.tagName, html = _a.html, innerRef = _a.innerRef, props = __rest(_a, [\"tagName\", \"html\", \"innerRef\"]);\n        return React.createElement(tagName || 'div', __assign(__assign({}, props), { ref: typeof innerRef === 'function' ? function (current) {\n                innerRef(current);\n                _this.el.current = current;\n            } : innerRef || this.el, onInput: this.emitChange, onBlur: this.props.onBlur || this.emitChange, onKeyUp: this.props.onKeyUp || this.emitChange, onKeyDown: this.props.onKeyDown || this.emitChange, contentEditable: !this.props.disabled, dangerouslySetInnerHTML: { __html: html } }), this.props.children);\n    };\n    ContentEditable.prototype.shouldComponentUpdate = function (nextProps) {\n        var props = this.props;\n        var el = this.getEl();\n        // We need not rerender if the change of props simply reflects the user's edits.\n        // Rerendering in this case would make the cursor/caret jump\n        // Rerender if there is no element yet... (somehow?)\n        if (!el)\n            return true;\n        // ...or if html really changed... (programmatically, not by user edit)\n        if (normalizeHtml(nextProps.html) !== normalizeHtml(el.innerHTML)) {\n            return true;\n        }\n        // Handle additional properties\n        return props.disabled !== nextProps.disabled ||\n            props.tagName !== nextProps.tagName ||\n            props.className !== nextProps.className ||\n            props.innerRef !== nextProps.innerRef ||\n            !fast_deep_equal_1.default(props.style, nextProps.style);\n    };\n    ContentEditable.prototype.componentDidUpdate = function () {\n        var el = this.getEl();\n        if (!el)\n            return;\n        // Perhaps React (whose VDOM gets outdated because we often prevent\n        // rerendering) did not update the DOM. So we update it manually now.\n        if (this.props.html !== el.innerHTML) {\n            el.innerHTML = this.props.html;\n        }\n        this.lastHtml = this.props.html;\n        replaceCaret(el);\n    };\n    ContentEditable.propTypes = {\n        html: PropTypes.string.isRequired,\n        onChange: PropTypes.func,\n        disabled: PropTypes.bool,\n        tagName: PropTypes.string,\n        className: PropTypes.string,\n        style: PropTypes.object,\n        innerRef: PropTypes.oneOfType([\n            PropTypes.object,\n            PropTypes.func,\n        ])\n    };\n    return ContentEditable;\n}(React.Component));\nexports.default = ContentEditable;\n\n\n//# sourceURL=webpack://yarn-webpack/./node_modules/react-contenteditable/lib/react-contenteditable.js?");

/***/ }),

/***/ "FSK0":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-contenteditable/node_modules/fast-deep-equal/index.js ***!
  \**********************************************************************************/
/***/ ((module) => {

eval("\n\nvar isArray = Array.isArray;\nvar keyList = Object.keys;\nvar hasProp = Object.prototype.hasOwnProperty;\n\nmodule.exports = function equal(a, b) {\n  if (a === b) return true;\n\n  if (a && b && typeof a == 'object' && typeof b == 'object') {\n    var arrA = isArray(a)\n      , arrB = isArray(b)\n      , i\n      , length\n      , key;\n\n    if (arrA && arrB) {\n      length = a.length;\n      if (length != b.length) return false;\n      for (i = length; i-- !== 0;)\n        if (!equal(a[i], b[i])) return false;\n      return true;\n    }\n\n    if (arrA != arrB) return false;\n\n    var dateA = a instanceof Date\n      , dateB = b instanceof Date;\n    if (dateA != dateB) return false;\n    if (dateA && dateB) return a.getTime() == b.getTime();\n\n    var regexpA = a instanceof RegExp\n      , regexpB = b instanceof RegExp;\n    if (regexpA != regexpB) return false;\n    if (regexpA && regexpB) return a.toString() == b.toString();\n\n    var keys = keyList(a);\n    length = keys.length;\n\n    if (length !== keyList(b).length)\n      return false;\n\n    for (i = length; i-- !== 0;)\n      if (!hasProp.call(b, keys[i])) return false;\n\n    for (i = length; i-- !== 0;) {\n      key = keys[i];\n      if (!equal(a[key], b[key])) return false;\n    }\n\n    return true;\n  }\n\n  return a!==a && b!==b;\n};\n\n\n//# sourceURL=webpack://yarn-webpack/./node_modules/react-contenteditable/node_modules/fast-deep-equal/index.js?");

/***/ }),

/***/ "xIFI":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"react_contenteditable_bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkyarn_webpack"] = self["webpackChunkyarn_webpack"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["webpack_common_chunk"], () => (__webpack_require__("QAR2")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;