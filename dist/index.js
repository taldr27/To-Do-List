"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_addToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addToDo.js */ \"./src/modules/addToDo.js\");\n/* harmony import */ var _modules_removeToDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/removeToDo.js */ \"./src/modules/removeToDo.js\");\n/* harmony import */ var _modules_interfaceClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/interfaceClass.js */ \"./src/modules/interfaceClass.js\");\n// import './style.css';\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', _modules_interfaceClass_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayTasks);\ndocument.querySelector('#form-section').addEventListener('submit', _modules_addToDo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\ndocument.querySelector('#toDoList').addEventListener('click', _modules_removeToDo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _interfaceClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaceClass.js */ \"./src/modules/interfaceClass.js\");\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\");\n/* harmony import */ var _ToDoConstructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDoConstructor.js */ \"./src/modules/ToDoConstructor.js\");\n\n\n\n\nconst add = (e) => {\n  const completed = 'asd';\n  e.preventDefault();\n  const text = document.getElementById('input-task').value;\n\n  if (text === '') {\n    const section = document.getElementById('form-section');\n    const message = document.createElement('p');\n    message.innerHTML = 'Please put something into the fields';\n    section.insertAdjacentElement('afterend', message);\n    setTimeout(() => { message.remove(); }, 2000);\n  } else {\n    const toIndex = _store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getToDos().length + 1;\n\n    const toDo = new _ToDoConstructor_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](text, completed, toIndex);\n\n    _interfaceClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTask(toDo);\n    _store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTask(toDo);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (add);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/addToDo.js?");

/***/ }),

/***/ "./src/modules/interfaceClass.js":
/*!***************************************!*\
  !*** ./src/modules/interfaceClass.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Interface)\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\");\n\n\nclass Interface {\n  static displayTasks() {\n    const toDos = _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getToDos();\n    toDos.forEach((toDo) => Interface.addTask(toDo));\n  }\n\n  static addTask(toDo) {\n    const ulList = document.getElementById('toDoList');\n    const task = document.createElement('li');\n    task.innerHTML = `<input type=\"checkbox\" name=\"completed\" id=\"completed\"> ${toDo.value} <button class=\"edit\">Edit</button>\n        <button id=${toDo.index} class=\"delete\">Delete</button>`;\n    ulList.appendChild(task);\n  }\n\n  static deleteTask(el) {\n    if (el.classList.contains('delete')) {\n      el.parentElement.remove();\n    }\n  }\n}\n\n//# sourceURL=webpack://webpack-demo/./src/modules/interfaceClass.js?");

/***/ }),

/***/ "./src/modules/removeToDo.js":
/*!***********************************!*\
  !*** ./src/modules/removeToDo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _interfaceClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaceClass.js */ \"./src/modules/interfaceClass.js\");\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\");\n\n\n\nconst remove = (e) => {\n  _interfaceClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTask(e.target);\n  // Sending value id to eliminate as \"element\"\n  _store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteTask(parseInt(e.target.id, 10));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (remove);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/removeToDo.js?");

/***/ }),

/***/ "./src/modules/store.js":
/*!******************************!*\
  !*** ./src/modules/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store)\n/* harmony export */ });\nclass Store {\n  static getToDos() {\n    let toDos;\n    if (localStorage.getItem('toDos') === null) {\n      toDos = [];\n    } else {\n      toDos = JSON.parse(localStorage.getItem('toDos'));\n    }\n\n    return toDos;\n  }\n\n  static addTask(toDo) {\n    const toDos = Store.getToDos();\n    toDos.push(toDo);\n    localStorage.setItem('toDos', JSON.stringify(toDos));\n  }\n\n  static deleteTask(element) {\n    const toDos = Store.getToDos();\n    toDos.forEach((toDo, id) => {\n      if (toDo.index === element) {\n        toDos.splice(id, 1);\n        console.log(toDo,id);\n      }\n    });\n    toDos.forEach((toDo, i) => {\n      toDo.index = i + 1;\n    });\n    localStorage.setItem('toDos', JSON.stringify(toDos));\n  }\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/store.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);