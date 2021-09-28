/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "iiU6":
/*!********************************!*\
  !*** ./src/js/human-parser.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var human_parser = __webpack_require__(/*! humanparser */ \"7z+c\");\n\nwindow.HumanParser = human_parser;\n\n//# sourceURL=webpack://yarn-webpack/./src/js/human-parser.js?");

/***/ }),

/***/ "7z+c":
/*!*******************************************!*\
  !*** ./node_modules/humanparser/index.js ***!
  \*******************************************/
/***/ ((module) => {

eval("const parser = module.exports = {};\n\nif (!Array.prototype.hasOwnProperty('diff')) {\n\tObject.defineProperty(Array.prototype, 'diff', {\n\t\tenumerable: false,\n\t\tvalue: function(a2) {\n\t\t\treturn this.concat(a2).filter((val, index, arr) => {\n\t\t\t\treturn arr.indexOf(val) === arr.lastIndexOf(val);\n\t\t\t});\n\t\t}\n\t});\n}\n\nparser.parseName = function (name) {\n\tconst salutations = ['mr', 'master', 'mister', 'mrs', 'miss', 'ms', 'dr', 'prof', 'rev', 'fr', 'judge', 'honorable', 'hon', 'tuan', 'sr', 'srta', 'br', 'pr', 'mx', 'sra'];\n\tconst suffixes = ['i', 'ii', 'iii', 'iv', 'v', 'senior', 'junior', 'jr', 'sr', 'phd', 'apr', 'rph', 'pe', 'md', 'ma', 'dmd', 'cme', 'qc', 'kc'];\n\tconst compound = ['vere', 'von', 'van', 'de', 'del', 'della', 'der', 'di', 'da', 'pietro', 'vanden', 'du', 'st.', 'st', 'la', 'lo', 'ter', 'bin', 'ibn', 'te', 'ten', 'op', 'ben', 'al'];\n\n\tlet parts = name\n\t\t.trim()\n\t\t.replace(/\\b\\s+(,\\s+)\\b/, '$1') // fix name , suffix -> name, suffix\n\t\t.replace(/\\b,\\b/, ', ')         // fix name,suffix -> name, suffix\n\t\t.split(/\\s+/);\n\n\tconst attrs = {};\n\n\tif (!parts.length) {\n\t\treturn attrs;\n\t}\n\n\tif (parts.length === 1) {\n\t\tattrs.firstName = parts[0];\n\t}\n\n\t//handle suffix first always, remove trailing comma if there is one\n\tif (parts.length > 1 && suffixes.indexOf(parts[parts.length - 1].toLowerCase().replace(/\\./g, '')) > -1) {\n\t\tattrs.suffix = parts.pop();\n\t\tparts[parts.length - 1] = parts[parts.length - 1].replace(',', '');\n\t}\n\n\t//look for a comma to know we have last name first format\n\tconst firstNameFirstFormat = parts.every(part => {\n\t\treturn part.indexOf(',') === -1;\n\t});\n\n\tif (!firstNameFirstFormat) {\n\t\t//last name first format\n\t\t//assuming salutations are never used in this format\n\n\t\t//tracker variable for where first name begins in parts array\n\t\tlet firstNameIndex;\n\n\t\t//location of first comma will separate last name from rest\n\t\t//join all parts leading to first comma as last name\n\t\tconst lastName = parts.reduce((lastName, current, index) => {\n\t\t\tif (!Array.isArray(lastName)) {\n\t\t\t\treturn lastName;\n\t\t\t}\n\t\t\tif (current.indexOf(',') === -1) {\n\t\t\t\tlastName.push(current);\n\t\t\t\treturn lastName;\n\t\t\t} else {\n\t\t\t\tcurrent = current.replace(',', '');\n\n\t\t\t\t// handle case where suffix is included in part of last name (ie: 'Hearst Jr., Willian Randolph')\n\t\t\t\tif (suffixes.indexOf(current.toLowerCase().replace(/\\./g, '')) > -1) {\n\t\t\t\t\tattrs.suffix = current;\n\t\t\t\t} else {\n\t\t\t\t\tlastName.push(current);\n\t\t\t\t}\n\n\t\t\t\tfirstNameIndex = index + 1;\n\t\t\t\treturn lastName.join(' ');\n\t\t\t}\n\t\t}, []);\n\n\t\tattrs.lastName = lastName;\n\n\t\tvar remainingParts = parts.slice(firstNameIndex);\n\t\tif (remainingParts.length > 1) {\n\t\t\tattrs.firstName = remainingParts.shift();\n\t\t\tattrs.middleName = remainingParts.join(' ');\n\t\t} else if (remainingParts.length) {\n\t\t\tattrs.firstName = remainingParts[0];\n\t\t}\n\n\t\t//create full name from attrs object\n\t\tconst nameWords = [];\n\t\tif (attrs.firstName) {\n\t\t\tnameWords.push(attrs.firstName);\n\t\t}\n\t\tif (attrs.middleName) {\n\t\t\tnameWords.push(attrs.middleName)\n\t\t}\n\t\tnameWords.push(attrs.lastName)\n\t\tif (attrs.suffix) {\n\t\t\tnameWords.push(attrs.suffix);\n\t\t}\n\t\tattrs.fullName = nameWords.join(' ');\n\n\n\t} else {\n\t\t//first name first format\n\n\n\t\tif (parts.length > 1 && salutations.indexOf(parts[0].toLowerCase().replace(/\\./g, '')) > -1) {\n\t\t\tattrs.salutation = parts.shift();\n\n\t\t\t// if we have a salutation assume 2nd part is last name\n\t\t\tif (parts.length === 1) {\n\t\t\t\tattrs.lastName = parts.shift();\n\t\t\t} else {\n\t\t\t\tattrs.firstName = parts.shift();\n\t\t\t}\n\t\t} else {\n\t\t\tattrs.firstName = parts.shift();\n\t\t}\n\n\t\tif (!attrs.lastName) {\n\t\t\tattrs.lastName = parts.length ? parts.pop() : '';\n\t\t}\n\n\t\t// test for compound last name, we reverse because middle name is last bit to be defined.\n\t\t// We already know lastname, so check next word if its part of a compound last name.\n\t\tconst revParts = parts.slice(0).reverse();\n\t\tconst compoundParts = [];\n\n\t\trevParts.every(part => {\n\t\t\tconst test = part.toLowerCase().replace(/\\./g, '');\n\n\t\t\tif (compound.indexOf(test) > -1) {\n\t\t\t\tcompoundParts.push(part);\n\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t\t//break on first non compound word\n\t\t\treturn false;\n\t\t});\n\n\t\t//join compound parts with known last name\n\t\tif (compoundParts.length) {\n\t\t\tattrs.lastName = compoundParts.reverse().join(' ') + ' ' + attrs.lastName;\n\n\t\t\tparts = parts.diff(compoundParts);\n\t\t}\n\n\t\tif (parts.length) {\n\t\t\tattrs.middleName = parts.join(' ');\n\t\t}\n\n\t\t//remove comma like \"<lastName>, Jr.\"\n\t\tif (attrs.lastName) {\n\t\t\tattrs.lastName = attrs.lastName.replace(',', '');\n\t\t}\n\n\t\t//save a copy of original\n\t\tattrs.fullName = name;\n\n\t}\n\t//console.log('attrs:', JSON.stringify(attrs));\n\treturn attrs;\n};\n\nparser.getFullestName = (str) => {\n\tlet name = str;\n\tlet names = [];\n\n\t//find fullname from strings like 'Jon and Sue Doyle'\n\tif (name.indexOf('&') > -1 || name.toLowerCase().indexOf(' and ') > -1) {\n\t\tnames = name.split(/\\s+(?:and|&)\\s+/gi);\n\n\t\t//pluck the name with the most parts (first, middle, last) from the array.\n\t\t//will grab 'Sue Doyle' in 'Jon & Sue Anne Doyle'\n\t\tif (names.length) {\n\t\t\tname = names.sort(function (a, b) {\n\t\t\t\treturn b.split(/\\s+/).length - a.split(/\\s+/).length;\n\t\t\t})[0];\n\t\t}\n\t}\n\n\treturn name;\n};\n\nparser.parseAddress = (str) => {\n\tstr = str.replace(/\\n/gi, ', ');\n\t//416 W. Manchester Blvd., Inglewood, CA  90301\n\tconst parts = str.split(/,\\s+/).reverse();\n\tlet stateZip;\n\tlet city;\n\tconst address = {};\n\n\tstateZip = parts[0].split(/\\s+/);\n\tparts.shift();\n\n\tcity = parts.shift();\n\n\taddress.address = parts.reverse().join(', ');\n\taddress.city = city;\n\taddress.state = stateZip[0];\n\taddress.zip = stateZip[1];\n\taddress.fullAddress = str;\n\n\treturn address;\n};\n\n\n//# sourceURL=webpack://yarn-webpack/./node_modules/humanparser/index.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("iiU6");
/******/ 	
/******/ })()
;