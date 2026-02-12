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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root{\n  --background : #290001;\n  --primary-text : #DBCBBD;\n  --secondary-accent : #87431D;\n  --highlight-accent : #C87941;\n  --space-1: 8px;\n  --space-2: 16px;\n  --space-3: 24px;\n  --space-4: 32px;\n  --space-5: 48px;\n  --space-6: 64px;\n  --space-7: 96px;\n  --space-8: 128px;\n}\n\nh1, h2, h3 {\n  font-family: 'Playfair Display', serif;\n}\n\nbody {\n  font-family: 'Inter', sans-serif;\n  background-color: var(--background);\n}\n\nh1 {\n  margin-bottom: var(--space-4);\n}\n\nh2 {\n  margin-bottom: var(--space-3);\n}\n\nh3 {\n  margin-bottom: var(--space-2);\n}\n\nh1 , h2 , h3 , p, a{\n  color: var(--primary-text);\n}\n\nheader{\n  padding: var(--space-2);\n  display: flex;\n  justify-content: space-between;\n}\n\nnav{\n  display: flex;\n  gap: var(--space-4);\n}\n\nbutton{\n  min-width: var(--space-6);\n  max-height: var(--space-5);\n  border-radius: 8px;\n  border-color: var(--highlight-accent);\n  background-color: transparent;\n  color: var(--primary-text);\n  cursor: pointer;\n  padding: var(--space-1) var(--space-2);\n}\n\nbutton:hover{\n  background-color: var(--highlight-accent);\n  border-color: var(--highlight-accent);\n}\n\nmain{\n  display: flex;\n  flex-direction: column;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: var(--space-6) var(--space-5);\n  gap: var(--space-6);\n}\nsection{\n  padding: var(--space-4) 0;\n}\n\n#hero{\n  text-align: center;\n  padding: var(--space-7) 0;\n}\n\n\n#hero a{\n  display: inline-block;\n  margin-top: var(--space-4);\n  padding: var(--space-2) var(--space-5);\n  background-color: var(--highlight-accent);\n  border-radius: 8px;\n  transition: background-color 0.3s ease;\n}\n\n#hero a:hover{\n  background-color: var(--secondary-accent);\n}\n\n#philosophy{\n  text-align: center;\n  font-style: italic;\n  font-size: 1.2rem;\n  line-height: 1.8;\n}\n\n#details{\n  display: grid;\n  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));\n  gap: var(--space-5);\n  padding: var(--space-5) 0;\n  border-top: 1px solid var(--secondary-accent);\n  border-bottom: 1px solid var(--secondary-accent);\n}\n\n#location, #hours, #cuisine {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n\n#signature {\n  text-align: center;\n  font-size: 1.1rem;\n  font-weight: 300;\n  letter-spacing: 0.5px;\n}\n\na{\n  text-decoration: none;\n}\n\nfooter{\n  display: flex;\n  justify-content: center;\n  padding: var(--space-2);\n  border-top: 1px solid var(--secondary-accent);\n  font-size: 0.9rem;\n  opacity: 0.8;\n}\n\n#menuSection {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: var(--space-6) var(--space-5);\n}\n\n#menuSection h1 {\n  text-align: center;\n  font-size: 3rem;\n  margin-bottom: var(--space-7);\n}\n\n.category {\n  margin-bottom: var(--space-7);\n}\n\n.category h2 {\n  font-size: 2rem;\n  margin-bottom: var(--space-5);\n  padding-bottom: var(--space-2);\n  border-bottom: 1px solid var(--secondary-accent);\n  color: var(--highlight-accent);\n}\n\n.category {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--space-5);\n}\n\n.category > h2 {\n  grid-column: 1 / -1;\n}\n\n/* Dishes grid - 2 columns */\n.dish {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-template-rows: auto auto;\n  gap: var(--space-2);\n  padding: var(--space-4);\n  border: 1px solid var(--secondary-accent);\n  border-radius: 8px;\n  transition: border-color 0.3s ease;\n}\n\n.dish:hover {\n  border-color: var(--highlight-accent);\n}\n\n.dish h3 {\n  grid-column: 1;\n  grid-row: 1;\n  font-size: 1.2rem;\n  margin-bottom: 0;\n}\n\n.dish .price {\n  grid-column: 2;\n  grid-row: 1;\n  font-weight: 600;\n  color: var(--highlight-accent);\n  align-self: start;\n}\n\n.dish p {\n  grid-column: 1 / -1;\n  grid-row: 2;\n  font-size: 0.95rem;\n  line-height: 1.6;\n  opacity: 0.9;\n  margin: 0;\n}\n\n/* Two dishes per row on larger screens */\n@media (min-width: 768px) {\n  .category {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  \n  .category > h2 {\n    grid-column: 1 / -1;\n  }\n}\n\n/* Single column on mobile */\n@media (max-width: 767px) {\n  #menuSection h1 {\n    font-size: 2rem;\n  }\n  \n  .category h2 {\n    font-size: 1.5rem;\n  }\n}\n\n#contactSection{\n  display: flex;\n  flex-direction: column;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: var(--space-6) var(--space-5);\n  align-items: center;\n  text-align: center;\n  gap: var(--space-5);\n}\n\n#contactSection h1 {\n  font-size: 3rem;\n  margin-bottom: var(--space-3);\n}\n\n#contactSection h2 {\n  font-size: 1.8rem;\n  font-weight: 400;\n  margin-bottom: var(--space-5);\n  padding-bottom: var(--space-4);\n  border-bottom: 1px solid var(--secondary-accent);\n  width: 100%;\n}\n\n#addressBlock,\n#reservationBlock {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  padding: var(--space-4);\n  width: 100%;\n}\n\n#addressBlock h3,\n#reservationBlock h3 {\n  color: var(--highlight-accent);\n  font-size: 1.3rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 600;\n}\n\n#addressBlock p,\n#reservationBlock p {\n  font-size: 1.1rem;\n  line-height: 1.8;\n}\n\n#reservationBlock p {\n  margin: var(--space-1) 0;\n}\n\n#contactSection > p:last-child {\n  margin-top: var(--space-4);\n  padding-top: var(--space-4);\n  border-top: 1px solid var(--secondary-accent);\n  font-style: italic;\n  opacity: 0.9;\n  max-width: 600px;\n}\n\n/* Responsive */\n@media (max-width: 767px) {\n  #contactSection h1 {\n    font-size: 2rem;\n  }\n  \n  #contactSection h2 {\n    font-size: 1.5rem;\n  }\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact(){\n    const content = document.getElementById('content')\n    content.textContent = ''\n\n    const main = document.createElement('main')\n    const contactSection = document.createElement('section')\n    contactSection.id = 'contactSection'\n\n    const title = document.createElement('h1')\n    title.textContent = 'Contact'\n\n    const name = document.createElement(\"h2\")\n    name.textContent = 'Ristorante Aurelio'\n\n    const addressBlock = document.createElement(\"div\")\n    addressBlock.id = 'addressBlock'\n\n    const addressTitle = document.createElement(\"h3\")\n    addressTitle.textContent = 'Address'\n\n    const addressText = document.createElement(\"p\")\n    addressText.textContent = '12 rue 2 mars , Casablanca , Morocco'\n    \n    addressBlock.append(addressTitle,addressText)\n\n    const reservationBlock = document.createElement(\"div\")\n    reservationBlock.id = 'reservationBlock'\n    \n    const reservationTitle = document.createElement(\"h3\")\n    reservationTitle.textContent = 'Reservation'\n\n    const phone = document.createElement(\"p\")\n    phone.textContent = '+212 6 12 13 14 15'\n\n    const email = document.createElement(\"p\")\n    email.textContent = 'reservations@ristoranteaurelio.com'\n\n    reservationBlock.append(reservationTitle,phone,email)\n\n    const note = document.createElement(\"p\")\n    note.textContent = \"For private dining and special requests, please contact us by email.\"\n\n    contactSection.append(\n        title,\n        name,\n        addressBlock,\n        reservationBlock,\n        note\n    )\n    main.appendChild(contactSection)\n    content.appendChild(main)\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome(){\n    const content = document.getElementById('content')\n    content.textContent = ''\n\n    const main = document.createElement('main')\n    const footer = document.createElement('footer')\n\n    content.appendChild(main)\n    content.appendChild(footer)\n\n    const hero = document.createElement('section')\n    hero.id = 'hero'\n    \n    const title = document.createElement('h1')\n    title.textContent = 'Ristorante Aurelio'\n\n    const subtitle = document.createElement('p')\n    subtitle.textContent = 'Fine Italian cuisine since 1998'\n\n    const cta = document.createElement('a')\n    cta.textContent = 'Reserve a table'\n    cta.href = '#reservation'\n\n    hero.append(title,subtitle,cta)\n\n    main.appendChild(hero)\n\n    const philosophy = document.createElement('section')\n    philosophy.id = 'philosophy'\n    \n    const philosophyText = document.createElement('p')\n    philosophyText.textContent = 'At Ristorante Aurelio, we celebrate the art of Italian dining—seasonal ingredients, timeless recipes, and quiet excellence.'\n\n    philosophy.appendChild(philosophyText)\n    main.appendChild(philosophy)\n\n    const details = document.createElement('section')\n    details.id = 'details'\n\n    const cuisine = document.createElement('div')\n    cuisine.id = 'cuisine'\n    const cuisineTitle = document.createElement('h3')\n    const cuisineText = document.createElement('p')\n\n    cuisineTitle.textContent = 'Cuisine'\n    cuisineText.textContent = 'Italian Fine Dining'\n\n    cuisine.append(cuisineTitle,cuisineText)\n\n    const location = document.createElement('div')\n    location.id = 'location'\n    const locationTitle = document.createElement('h3')\n    const locationText = document.createElement('p')\n    \n    locationTitle.textContent = 'Location'\n    locationText.textContent = 'Casablanca,Morocco'\n\n    location.append(locationTitle,locationText)\n\n    const hours = document.createElement('div')\n    hours.id = 'hours'\n    const hoursTitle = document.createElement('h3')\n    const hoursText = document.createElement('p')\n\n    hoursTitle.textContent = 'Work Hours'\n    hoursText.textContent = 'Monday - Saturday : 19:00 - 23:30'\n    hours.append(hoursTitle,hoursText)\n\n    details.append(cuisine,location,hours)\n    main.appendChild(details)\n\n    const signature = document.createElement('section')\n    signature.id = 'signature'\n    const signatureText = document.createElement('p')\n\n    signatureText.textContent = 'Where tradition meets discretion'\n\n    signature.appendChild(signatureText)\n\n    main.appendChild(signature)\n\n    const footerText = document.createElement('p')\n\n    footerText.textContent = 'Ristorante Aurelio · Reservations · Instagram'\n\n    footer.appendChild(footerText)\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded',()=>{\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    // Add button event listeners\n    document.getElementById(\"home-btn\").addEventListener(\"click\", _home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    document.getElementById(\"menu-btn\").addEventListener(\"click\", _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    document.getElementById(\"contact-btn\").addEventListener(\"click\", _contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n})\n    \n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu(){\n    const content = document.getElementById('content')\n    content.textContent = ''\n\n    const main = document.createElement('main')\n    const menuSection = document.createElement('section')\n    menuSection.id = 'menuSection'\n    const menuTitle = document.createElement('h1')\n\n    menuTitle.textContent = 'Menu'\n\n    menuSection.appendChild(menuTitle)\n\n    function createMenuCategory(title,items){\n        const category = document.createElement('div')\n        category.classList.add('category')\n        const heading = document.createElement('h2')\n\n        heading.textContent = title\n        category.appendChild(heading)\n\n        items.forEach(item => {\n            const dish = document.createElement('div')\n            dish.classList.add('dish')\n            const name = document.createElement('h3')\n            const description = document.createElement('p')\n            const price = document.createElement('span')\n            price.classList.add('price')\n\n            name.textContent = item.name\n            description.textContent = item.description\n            price.textContent = item.price\n\n            dish.append(name,description,price)\n            category.appendChild(dish)\n        });\n        return category\n    }\n\n    const antipasti = [\n        {\n            name : 'Carpaccio di Manzo',\n            description : 'Thinly sliced beef, lemon, Parmigiano, olive oil',\n            price : '16£'\n        },\n\n        {\n            name : 'Vitello Tonnato',\n            description : 'Veal, tuna cream, capers',\n            price : '18£'\n        },\n\n        {\n            name : 'Insalada di Polpo',\n            description : 'Tender octopus, celery, citrus',\n            price : '19£'\n        },\n\n        {\n            name : 'Burrata di Puglia',\n            description : 'Fresh burrata, basil, olive oil',\n            price : '14£'\n        }\n    ]\n\n    const Primi = [\n        {\n            name : 'Tagliolini al Tartufo',\n            description : 'Fresh pasta, black truffle, butter',\n            price : '28£'\n        },\n\n        {\n            name : 'Risotto allo Zafferano',\n            description : 'Carnaroli rice, saffron, Parmigiano',\n            price : '24£'\n        },\n\n        {\n            name : 'Ravioli di Ricotta e Limone',\n            description : 'Ricotta, lemon zest, sage butter',\n            price : '22£'\n        },\n\n        {\n            name : 'Pappardelle al Ragù di Agnello',\n            description : 'Slow-cooked lamb ragù',\n            price : '26£'\n        }\n    ]\n\n    const Secondi = [\n        {\n            name : 'Filetto di Manzo',\n            description : 'Beef filet, red wine reduction',\n            price : '42£'\n        },\n\n        {\n            name : 'Branzino al Forno',\n            description : 'Oven-roasted sea bass, herbs',\n            price : '38£'\n        },\n\n        {\n            name : 'Petto d’Anatra',\n            description : 'Duck breast, seasonal garnish',\n            price : '36£'\n        },\n\n        {\n            name : 'Costolette di Agnello',\n            description : 'Lamb chops, rosemary, garlic',\n            price : '36£'\n        }\n    ]\n\n    const Dolci = [\n        {\n            name : 'Tiramisu Aurelio',\n            description : 'Espresso, mascarpone, cocoa',\n            price : '12£'\n        },\n\n        {\n            name : 'Panna Cotta alla Vaniglia',\n            description : 'Vanilla, red fruit coulis',\n            price : '11£'\n        },\n\n        {\n            name : 'Affogato al Caffè',\n            description : 'Vanilla gelato, espresso',\n            price : '10£'\n        },\n\n        {\n            name : 'Selezione di Formaggi Italiani',\n            description : 'Aged Italian cheeses',\n            price : '15£'\n        }\n    ]\n    menuSection.append(\n        createMenuCategory('Antipasti',antipasti),\n        createMenuCategory('Primi',Primi),\n        createMenuCategory('Secondi',Secondi),\n        createMenuCategory('Dolci',Dolci)\n    )\n    main.appendChild(menuSection)\n    content.appendChild(main)\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;