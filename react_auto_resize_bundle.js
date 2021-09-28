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

/***/ "Sof3":
/*!********************************************!*\
  !*** ./src/js/react-auto-resize-bundle.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-textarea-autosize */ \"o5PN\");\n\nwindow.TextareaAutosize = react_textarea_autosize__WEBPACK_IMPORTED_MODULE_0__.default;\n\n//# sourceURL=webpack://yarn-webpack/./src/js/react-auto-resize-bundle.js?");

/***/ }),

/***/ "o5PN":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"wx14\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"zLVn\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"JX7q\");\n/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ \"dI71\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"xIFI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar isIE =  !!document.documentElement.currentStyle ;\nvar HIDDEN_TEXTAREA_STYLE = {\n  'min-height': '0',\n  'max-height': 'none',\n  height: '0',\n  visibility: 'hidden',\n  overflow: 'hidden',\n  position: 'absolute',\n  'z-index': '-1000',\n  top: '0',\n  right: '0'\n};\nvar SIZING_STYLE = ['letter-spacing', 'line-height', 'font-family', 'font-weight', 'font-size', 'font-style', 'tab-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width', 'box-sizing'];\nvar computedStyleCache = {};\nvar hiddenTextarea =  document.createElement('textarea');\n\nvar forceHiddenStyles = function forceHiddenStyles(node) {\n  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function (key) {\n    node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], 'important');\n  });\n};\n\n{\n  hiddenTextarea.setAttribute('tab-index', '-1');\n  hiddenTextarea.setAttribute('aria-hidden', 'true');\n  forceHiddenStyles(hiddenTextarea);\n}\n\nfunction calculateNodeHeight(uiTextNode, uid, useCache, minRows, maxRows) {\n  if (useCache === void 0) {\n    useCache = false;\n  }\n\n  if (minRows === void 0) {\n    minRows = null;\n  }\n\n  if (maxRows === void 0) {\n    maxRows = null;\n  }\n\n  if (hiddenTextarea.parentNode === null) {\n    document.body.appendChild(hiddenTextarea);\n  } // Copy all CSS properties that have an impact on the height of the content in\n  // the textbox\n\n\n  var nodeStyling = calculateNodeStyling(uiTextNode, uid, useCache);\n\n  if (nodeStyling === null) {\n    return null;\n  }\n\n  var paddingSize = nodeStyling.paddingSize,\n      borderSize = nodeStyling.borderSize,\n      boxSizing = nodeStyling.boxSizing,\n      sizingStyle = nodeStyling.sizingStyle; // Need to have the overflow attribute to hide the scrollbar otherwise\n  // text-lines will not calculated properly as the shadow will technically be\n  // narrower for content\n\n  Object.keys(sizingStyle).forEach(function (key) {\n    hiddenTextarea.style[key] = sizingStyle[key];\n  });\n  forceHiddenStyles(hiddenTextarea);\n  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || 'x';\n  var minHeight = -Infinity;\n  var maxHeight = Infinity;\n  var height = hiddenTextarea.scrollHeight;\n\n  if (boxSizing === 'border-box') {\n    // border-box: add border, since height = content + padding + border\n    height = height + borderSize;\n  } else if (boxSizing === 'content-box') {\n    // remove padding, since height = content\n    height = height - paddingSize;\n  } // measure height of a textarea with a single row\n\n\n  hiddenTextarea.value = 'x';\n  var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize; // Stores the value's rows count rendered in `hiddenTextarea`,\n  // regardless if `maxRows` or `minRows` props are passed\n\n  var valueRowCount = Math.floor(height / singleRowHeight);\n\n  if (minRows !== null) {\n    minHeight = singleRowHeight * minRows;\n\n    if (boxSizing === 'border-box') {\n      minHeight = minHeight + paddingSize + borderSize;\n    }\n\n    height = Math.max(minHeight, height);\n  }\n\n  if (maxRows !== null) {\n    maxHeight = singleRowHeight * maxRows;\n\n    if (boxSizing === 'border-box') {\n      maxHeight = maxHeight + paddingSize + borderSize;\n    }\n\n    height = Math.min(maxHeight, height);\n  }\n\n  var rowCount = Math.floor(height / singleRowHeight);\n  return {\n    height: height,\n    minHeight: minHeight,\n    maxHeight: maxHeight,\n    rowCount: rowCount,\n    valueRowCount: valueRowCount\n  };\n}\n\nfunction calculateNodeStyling(node, uid, useCache) {\n  if (useCache === void 0) {\n    useCache = false;\n  }\n\n  if (useCache && computedStyleCache[uid]) {\n    return computedStyleCache[uid];\n  }\n\n  var style = window.getComputedStyle(node);\n\n  if (style === null) {\n    return null;\n  }\n\n  var sizingStyle = SIZING_STYLE.reduce(function (obj, name) {\n    obj[name] = style.getPropertyValue(name);\n    return obj;\n  }, {});\n  var boxSizing = sizingStyle['box-sizing']; // probably node is detached from DOM, can't read computed dimensions\n\n  if (boxSizing === '') {\n    return null;\n  } // IE (Edge has already correct behaviour) returns content width as computed width\n  // so we need to add manually padding and border widths\n\n\n  if (isIE && boxSizing === 'border-box') {\n    sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(style['border-right-width']) + parseFloat(style['border-left-width']) + parseFloat(style['padding-right']) + parseFloat(style['padding-left']) + 'px';\n  }\n\n  var paddingSize = parseFloat(sizingStyle['padding-bottom']) + parseFloat(sizingStyle['padding-top']);\n  var borderSize = parseFloat(sizingStyle['border-bottom-width']) + parseFloat(sizingStyle['border-top-width']);\n  var nodeInfo = {\n    sizingStyle: sizingStyle,\n    paddingSize: paddingSize,\n    borderSize: borderSize,\n    boxSizing: boxSizing\n  };\n\n  if (useCache) {\n    computedStyleCache[uid] = nodeInfo;\n  }\n\n  return nodeInfo;\n}\n\nvar purgeCache = function purgeCache(uid) {\n  delete computedStyleCache[uid];\n};\n\nvar noop = function noop() {};\n\nvar uid = 0;\n\nvar TextareaAutosize =\n/*#__PURE__*/\nfunction (_React$Component) {\n  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__.default)(TextareaAutosize, _React$Component);\n\n  function TextareaAutosize(props) {\n    var _this;\n\n    _this = _React$Component.call(this, props) || this;\n\n    _this._onRef = function (node) {\n      _this._ref = node;\n      var inputRef = _this.props.inputRef;\n\n      if (typeof inputRef === 'function') {\n        inputRef(node);\n        return;\n      }\n\n      inputRef.current = node;\n    };\n\n    _this._onChange = function (event) {\n      if (!_this._controlled) {\n        _this._resizeComponent();\n      }\n\n      _this.props.onChange(event, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));\n    };\n\n    _this._resizeComponent = function (callback) {\n      if (callback === void 0) {\n        callback = noop;\n      }\n\n      var nodeHeight = calculateNodeHeight(_this._ref, _this._uid, _this.props.useCacheForDOMMeasurements, _this.props.minRows, _this.props.maxRows);\n\n      if (nodeHeight === null) {\n        callback();\n        return;\n      }\n\n      var height = nodeHeight.height,\n          minHeight = nodeHeight.minHeight,\n          maxHeight = nodeHeight.maxHeight,\n          rowCount = nodeHeight.rowCount,\n          valueRowCount = nodeHeight.valueRowCount;\n      _this.rowCount = rowCount;\n      _this.valueRowCount = valueRowCount;\n\n      if (_this.state.height !== height || _this.state.minHeight !== minHeight || _this.state.maxHeight !== maxHeight) {\n        _this.setState({\n          height: height,\n          minHeight: minHeight,\n          maxHeight: maxHeight\n        }, callback);\n\n        return;\n      }\n\n      callback();\n    };\n\n    _this.state = {\n      height: props.style && props.style.height || 0,\n      minHeight: -Infinity,\n      maxHeight: Infinity\n    };\n    _this._uid = uid++;\n    _this._controlled = props.value !== undefined;\n    _this._resizeLock = false;\n    return _this;\n  }\n\n  var _proto = TextareaAutosize.prototype;\n\n  _proto.render = function render() {\n    var _this$props = this.props,\n        _inputRef = _this$props.inputRef,\n        _maxRows = _this$props.maxRows,\n        _minRows = _this$props.minRows,\n        _onHeightChange = _this$props.onHeightChange,\n        _useCacheForDOMMeasurements = _this$props.useCacheForDOMMeasurements,\n        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(_this$props, [\"inputRef\", \"maxRows\", \"minRows\", \"onHeightChange\", \"useCacheForDOMMeasurements\"]);\n\n    props.style = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props.style, {\n      height: this.state.height\n    });\n    var maxHeight = Math.max(props.style.maxHeight || Infinity, this.state.maxHeight);\n\n    if (maxHeight < this.state.height) {\n      props.style.overflow = 'hidden';\n    }\n\n    return (0,react__WEBPACK_IMPORTED_MODULE_4__.createElement)(\"textarea\", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {\n      onChange: this._onChange,\n      ref: this._onRef\n    }));\n  };\n\n  _proto.componentDidMount = function componentDidMount() {\n    var _this2 = this;\n\n    this._resizeComponent(); // Working around Firefox bug which runs resize listeners even when other JS is running at the same moment\n    // causing competing rerenders (due to setState in the listener) in React.\n    // More can be found here - facebook/react#6324\n\n\n    this._resizeListener = function () {\n      if (_this2._resizeLock) {\n        return;\n      }\n\n      _this2._resizeLock = true;\n\n      _this2._resizeComponent(function () {\n        _this2._resizeLock = false;\n      });\n    };\n\n    window.addEventListener('resize', this._resizeListener);\n  };\n\n  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {\n    if (prevProps !== this.props) {\n      this._resizeComponent();\n    }\n\n    if (this.state.height !== prevState.height) {\n      this.props.onHeightChange(this.state.height, this);\n    }\n  };\n\n  _proto.componentWillUnmount = function componentWillUnmount() {\n    window.removeEventListener('resize', this._resizeListener);\n    purgeCache(this._uid);\n  };\n\n  return TextareaAutosize;\n}(react__WEBPACK_IMPORTED_MODULE_4__.Component);\n\nTextareaAutosize.defaultProps = {\n  inputRef: noop,\n  onChange: noop,\n  onHeightChange: noop,\n  useCacheForDOMMeasurements: false\n};\n true ? TextareaAutosize.propTypes = {\n  inputRef: (0,prop_types__WEBPACK_IMPORTED_MODULE_5__.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_5__.func, (0,prop_types__WEBPACK_IMPORTED_MODULE_5__.shape)({\n    current: prop_types__WEBPACK_IMPORTED_MODULE_5__.any\n  })]),\n  maxRows: prop_types__WEBPACK_IMPORTED_MODULE_5__.number,\n  minRows: prop_types__WEBPACK_IMPORTED_MODULE_5__.number,\n  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5__.func,\n  onHeightChange: prop_types__WEBPACK_IMPORTED_MODULE_5__.func,\n  style: prop_types__WEBPACK_IMPORTED_MODULE_5__.object,\n  useCacheForDOMMeasurements: prop_types__WEBPACK_IMPORTED_MODULE_5__.bool,\n  value: prop_types__WEBPACK_IMPORTED_MODULE_5__.string\n} : 0;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextareaAutosize);\n\n\n//# sourceURL=webpack://yarn-webpack/./node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 			"react_auto_resize_bundle": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["webpack_common_chunk"], () => (__webpack_require__("Sof3")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;