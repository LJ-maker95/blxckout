"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/roadmap",{

/***/ "./src/views/art/index.tsx":
/*!*********************************!*\
  !*** ./src/views/art/index.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ArtView\": function() { return /* binding */ ArtView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction _throw(e) {\n    throw e;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ArtView = function(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    _s();\n    var publicKey = useWallet().publicKey;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-8 max-w-4xl items-stretch m-auto pt-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SiteHeading, {\n                children: \"Cookies Inc\"\n            }, void 0, false, {\n                fileName: \"/Users/lukejudges/Desktop/Production/blxckout/src/views/art/index.tsx\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"basis-1/4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WalletMultiButton, {\n                    className: \"!bg-gray-900 hover:scale-105\"\n                }, void 0, false, {\n                    fileName: \"/Users/lukejudges/Desktop/Production/blxckout/src/views/art/index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/lukejudges/Desktop/Production/blxckout/src/views/art/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Products, {\n                submitTarget: \"/checkout\",\n                enabled: publicKey !== null\n            }, void 0, false, {\n                fileName: \"/Users/lukejudges/Desktop/Production/blxckout/src/views/art/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lukejudges/Desktop/Production/blxckout/src/views/art/index.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this));\n};\n_s(ArtView, \"mzyxrHmpp4PnhNILMr6pKoSuMFs=\", true);\n_c = ArtView;\nvar _c;\n$RefreshReg$(_c, \"ArtView\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvYXJ0L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRU8sR0FBSyxDQUFDQSxPQUFPLEdBQU8sUUFBUSxRQUFDLENBQUM7OztJQUVuQyxHQUFLLENBQUdDLFNBQVMsR0FBS0MsU0FBUyxHQUF2QkQsU0FBUztJQUVqQixNQUFNLDZFQUNIRSxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUEwRDs7d0ZBQ3hFQyxXQUFXOzBCQUFDLENBQVc7Ozs7Ozt3RkFHdkJGLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFXO3NHQUN2QkUsaUJBQWlCO29CQUFDRixTQUFTLEVBQUMsQ0FBOEI7Ozs7Ozs7Ozs7O3dGQUk1REcsUUFBUTtnQkFBQ0MsWUFBWSxFQUFDLENBQVc7Z0JBQUNDLE9BQU8sRUFBRVIsU0FBUyxLQUFLLElBQUk7Ozs7Ozs7Ozs7OztBQUdsRSxDQUFDO0dBakJZRCxPQUFPO0tBQVBBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL2FydC9pbmRleC50c3g/ZWM4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgQXJ0VmlldzogRkMgPSAoeyB9KSA9PiB7XG5cbiAgY29uc3QgeyBwdWJsaWNLZXkgfSA9IHVzZVdhbGxldCgpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTggbWF4LXctNHhsIGl0ZW1zLXN0cmV0Y2ggbS1hdXRvIHB0LTI0XCI+XG4gICAgPFNpdGVIZWFkaW5nPkNvb2tpZXMgSW5jPC9TaXRlSGVhZGluZz5cblxuICAgIHsvKiBXZSBhZGQgdGhlIFNvbGFuYSB3YWxsZXQgY29ubmVjdCBidXR0b24gKi99XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYXNpcy0xLzRcIj5cbiAgICAgIDxXYWxsZXRNdWx0aUJ1dHRvbiBjbGFzc05hbWU9JyFiZy1ncmF5LTkwMCBob3ZlcjpzY2FsZS0xMDUnIC8+XG4gICAgPC9kaXY+XG5cbiAgICB7LyogV2UgZGlzYWJsZSBjaGVja2luZyBvdXQgd2l0aG91dCBhIGNvbm5lY3RlZCB3YWxsZXQgKi99XG4gICAgPFByb2R1Y3RzIHN1Ym1pdFRhcmdldD0nL2NoZWNrb3V0JyBlbmFibGVkPXtwdWJsaWNLZXkgIT09IG51bGx9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkFydFZpZXciLCJwdWJsaWNLZXkiLCJ1c2VXYWxsZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJTaXRlSGVhZGluZyIsIldhbGxldE11bHRpQnV0dG9uIiwiUHJvZHVjdHMiLCJzdWJtaXRUYXJnZXQiLCJlbmFibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/views/art/index.tsx\n");

/***/ })

});