"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/1.jpg */ \"./src/images/1.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --clr-primary: #000;\\r\\n  --clr-secondary: #fff;\\r\\n  --clr-background: hsl(0, 0%, 96%);\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n  font-family: 'Source Sans Pro', sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  min-height: 100vh;\\r\\n  background: linear-gradient(rgb(0 0 0 / 25%), rgb(7 0 0 / 14%)), url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n  color: white;\\r\\n  background-position: center;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  background-color: #2b3b11db;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  max-width: 100%;\\r\\n  border-radius: 1em;\\r\\n  padding: 1em;\\r\\n  margin: 1.5em;\\r\\n}\\r\\n\\r\\n.input-task {\\r\\n  width: 100%;\\r\\n  color: white;\\r\\n  background-color: #cddf2d12;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  padding-block: 1em;\\r\\n  margin-block: 1em;\\r\\n  border-radius: 1em;\\r\\n  padding: 1em;\\r\\n  font-size: 1em;\\r\\n}\\r\\n\\r\\n.input-task:focus {\\r\\n  border: 2px solid black;\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n#addBtn {\\r\\n  width: 5%;\\r\\n  background-color: transparent;\\r\\n  border-color: transparent;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.fa-solid {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 1em;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\nli {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  margin-bottom: 0.8em;\\r\\n  justify-content: space-evenly;\\r\\n}\\r\\n\\r\\n.text-area {\\r\\n  width: 70%;\\r\\n  height: auto;\\r\\n  margin-inline: 0.5em;\\r\\n  padding: 0.7em;\\r\\n  outline: none;\\r\\n  background-color: #cddf2d12;\\r\\n  border: none;\\r\\n  border-radius: 1em;\\r\\n  color: white;\\r\\n  font-size: 1em;\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  text-decoration: line-through;\\r\\n  background-color: #cddf2d47;\\r\\n}\\r\\n\\r\\n.edit-active {\\r\\n  border: 2px solid black;\\r\\n}\\r\\n\\r\\n.edit {\\r\\n  padding: 0.5em;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  border-radius: 0.3em;\\r\\n  margin-right: 0.5em;\\r\\n}\\r\\n\\r\\n.delete {\\r\\n  padding: 0.5em;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  border-radius: 0.3em;\\r\\n}\\r\\n\\r\\n.clearCompleted {\\r\\n  padding: 1em;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nbutton,\\r\\ninput[type='button'] {\\r\\n  font-size: 0.9em;\\r\\n  border-radius: 1em;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\nbutton:hover,\\r\\ninput[type='button']:hover {\\r\\n  background-color: #bfbd19;\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"] {\\r\\n  appearance: none;\\r\\n  background-color: white;\\r\\n  font: inherit;\\r\\n  color: white;\\r\\n  width: 1.2em;\\r\\n  height: 1em;\\r\\n  border: 0.1em solid white;\\r\\n  border-radius: 0.25em;\\r\\n  transform: translateY(-0.075em);\\r\\n  display: grid;\\r\\n  place-content: center;\\r\\n  margin-right: -0.1em;\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"]::before {\\r\\n  content: \\\"\\\";\\r\\n  width: 0.65em;\\r\\n  height: 0.65em;\\r\\n  transform: scale(0);\\r\\n  border-radius: 0.1em;\\r\\n  transition: 120ms transform ease-in-out;\\r\\n  transform-origin: bottom left;\\r\\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"]:checked::before {\\r\\n  transform: scale(1);\\r\\n  background-color: #848207;\\r\\n}\\r\\n\\r\\n@media only screen and (min-width: 768px) {\\r\\n  .container {\\r\\n    min-width: 40%;\\r\\n    margin: 1.5em;\\r\\n  }\\r\\n\\r\\n  input[type=\\\"checkbox\\\"] {\\r\\n    max-width: 1.5em;\\r\\n    height: 1.2em;\\r\\n  }\\r\\n\\r\\n  input[type=\\\"checkbox\\\"]::before {\\r\\n    max-width: 0.75em;\\r\\n    min-height: 0.75em;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_addToDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addToDo.js */ \"./src/modules/addToDo.js\");\n/* harmony import */ var _modules_interfaceClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/interfaceClass.js */ \"./src/modules/interfaceClass.js\");\n/* harmony import */ var _modules_store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/store.js */ \"./src/modules/store.js\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', _modules_interfaceClass_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayTasks);\ndocument.querySelector('#form-section').addEventListener('submit', (e) => {\n  const text = document.getElementById('input-task').value;\n  e.preventDefault();\n  (0,_modules_addToDo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(text);\n});\ndocument.querySelector('#addBtn').addEventListener('click', (e) => {\n  const text = document.getElementById('input-task').value;\n  e.preventDefault();\n  (0,_modules_addToDo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(text);\n});\n\nconst clearAll = document.querySelector('.clearCompleted');\nclearAll.addEventListener('click', () => {\n  _modules_store_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].clearAll();\n  window.location.reload();\n});\n\ndocument.querySelector('.fa-solid').addEventListener('click', () => {\n  window.location.reload();\n});\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/ToDoConstructor.js":
/*!****************************************!*\
  !*** ./src/modules/ToDoConstructor.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDos)\n/* harmony export */ });\nclass ToDos {\n  constructor(value, completed, index) {\n    this.value = value;\n    this.completed = false;\n    this.index = index;\n  }\n}\n\n//# sourceURL=webpack://webpack-demo/./src/modules/ToDoConstructor.js?");

/***/ }),

/***/ "./src/modules/addToDo.js":
/*!********************************!*\
  !*** ./src/modules/addToDo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ add)\n/* harmony export */ });\n/* harmony import */ var _interfaceClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaceClass.js */ \"./src/modules/interfaceClass.js\");\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\");\n/* harmony import */ var _ToDoConstructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDoConstructor.js */ \"./src/modules/ToDoConstructor.js\");\n\n\n\n\nfunction add(task) {\n  const form = document.getElementById('form-section');\n  const inputText = document.getElementById('input-task');\n  const message = document.createElement('p');\n  message.className = 'error-input';\n  message.innerHTML = 'Please insert something into the field';\n  if (inputText.value === '') {\n    form.insertAdjacentElement('afterend', message);\n    setTimeout(() => {\n      message.remove();\n    }, 1000);\n  } else {\n    const completed = 'asd';\n    const toIndex = _store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getToDos().length + 1;\n    const toDo = new _ToDoConstructor_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](task, completed, toIndex);\n    _interfaceClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTask(toDo);\n    _store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTask(toDo);\n    inputText.value = '';\n  }\n}\n\n//# sourceURL=webpack://webpack-demo/./src/modules/addToDo.js?");

/***/ }),

/***/ "./src/modules/interfaceClass.js":
/*!***************************************!*\
  !*** ./src/modules/interfaceClass.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Interface)\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\");\n\n\nclass Interface {\n  static displayTasks() {\n    const toDos = _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getToDos();\n    toDos.forEach((toDo) => Interface.addTask(toDo));\n  }\n\n  static addTask(toDo) {\n    const ulList = document.getElementById('toDoList');\n    const task = document.createElement('li');\n\n    const check = document.createElement('input');\n    check.type = 'checkbox';\n    check.id = 'completed';\n    check.checked = toDo.completed;\n\n    const text = document.createElement('input');\n    text.id = 'task-value';\n    text.readOnly = true;\n    text.classList.add('text-area');\n    text.value = toDo.value;\n\n    if (check.checked) {\n      text.classList.add('completed');\n    }\n\n    check.addEventListener('click', (e) => {\n      if (e.target.checked) {\n        text.classList.add('completed');\n        toDo.completed = e.target.checked;\n        _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].check(toDo.completed, toDo.index);\n      } else {\n        text.classList.remove('completed');\n        toDo.completed = e.target.checked;\n        _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].check(toDo.completed, toDo.index);\n      }\n    });\n\n    const editBtn = document.createElement('button');\n    editBtn.id = toDo.index;\n    editBtn.classList.add('edit');\n    editBtn.innerHTML = 'Edit';\n\n    task.appendChild(check);\n    task.appendChild(text);\n    task.appendChild(editBtn);\n\n    editBtn.addEventListener('click', () => {\n      if (text.hasAttribute('readonly')) {\n        text.removeAttribute('readonly');\n        editBtn.innerHTML = 'Save';\n        text.focus();\n        text.classList.toggle('edit-active');\n      } else {\n        text.setAttribute('readonly', true);\n        editBtn.innerHTML = 'Edit';\n        text.classList.toggle('edit-active');\n        _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].editTask(text.value, toDo.index);\n      }\n    });\n\n    const deleteBtn = document.createElement('button');\n    deleteBtn.id = `Delete-${toDo.index}`;\n    deleteBtn.innerHTML = 'Delete';\n    deleteBtn.classList = 'delete';\n    ulList.appendChild(task);\n    task.appendChild(deleteBtn);\n    deleteBtn.addEventListener('click', () => {\n      text.value = 'Deleting';\n      setTimeout(() => {\n        _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTask(toDo.index);\n        window.location.reload();\n      }, 500);\n    });\n  }\n}\n\n//# sourceURL=webpack://webpack-demo/./src/modules/interfaceClass.js?");

/***/ }),

/***/ "./src/modules/store.js":
/*!******************************!*\
  !*** ./src/modules/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store)\n/* harmony export */ });\nclass Store {\n  static getToDos() {\n    let toDos;\n    if (localStorage.getItem('toDos') === null) {\n      toDos = [];\n    } else {\n      toDos = JSON.parse(localStorage.getItem('toDos'));\n    }\n\n    return toDos;\n  }\n\n  static addTask(toDo) {\n    const toDos = Store.getToDos();\n    toDos.push(toDo);\n    localStorage.setItem('toDos', JSON.stringify(toDos));\n  }\n\n  static deleteTask(element) {\n    const toDos = Store.getToDos();\n    toDos.forEach((toDo, id) => {\n      if (toDo.index === element) {\n        toDos.splice(id, 1);\n      }\n    });\n    toDos.forEach((t, i) => {\n      if (t.index !== element) {\n        t.index = i + 1;\n      }\n    });\n    const elimi = document.getElementById(`Delete-${element}`);\n    elimi.parentElement.remove();\n    localStorage.setItem('toDos', JSON.stringify(toDos));\n  }\n\n  static editTask(value, idx) {\n    const toDos = Store.getToDos();\n    toDos.forEach((toDo) => {\n      if (toDo.index === parseInt(idx, 10)) {\n        toDo.value = value;\n      }\n    });\n    localStorage.setItem('toDos', JSON.stringify(toDos));\n  }\n\n  static check(check, idx) {\n    const toDos = Store.getToDos();\n    toDos.forEach((toDo) => {\n      if (toDo.index === parseInt(idx, 10)) {\n        toDo.completed = check;\n      }\n    });\n    localStorage.setItem('toDos', JSON.stringify(toDos));\n  }\n\n  static clearAll() {\n    const toDos = Store.getToDos();\n    const filter = toDos.filter((toDo) => toDo.completed === false);\n\n    toDos.forEach((toDo, i) => {\n      toDo.index = i + 1;\n    });\n    localStorage.setItem('toDos', JSON.stringify(filter));\n  }\n}\n\n//# sourceURL=webpack://webpack-demo/./src/modules/store.js?");

/***/ }),

/***/ "./src/images/1.jpg":
/*!**************************!*\
  !*** ./src/images/1.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/1.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/1.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);