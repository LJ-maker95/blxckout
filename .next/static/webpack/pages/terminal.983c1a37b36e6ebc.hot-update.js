"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/terminal",{

/***/ "./src/pages/terminal.tsx":
/*!********************************!*\
  !*** ./src/pages/terminal.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views */ \"./src/views/index.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar Terminal = function(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"BLXCKOUT\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lukejudges/Desktop/Production/blxckout/src/pages/terminal.tsx\",\n                            lineNumber: 10,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {}, void 0, false, {\n                            fileName: \"/Users/lukejudges/Desktop/Production/blxckout/src/pages/terminal.tsx\",\n                            lineNumber: 11,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                            src: \"https://code.jquery.com/jquery-3.2.1.min.js\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lukejudges/Desktop/Production/blxckout/src/pages/terminal.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                            src: \"https://cdnjs.cloudflare.com/ajax/libs/jquery.terminal/2.32.1/js/jquery.terminal.min.js\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lukejudges/Desktop/Production/blxckout/src/pages/terminal.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            href: \"https://cdnjs.cloudflare.com/ajax/libs/jquery.terminal/2.32.1/css/jquery.terminal.min.css\",\n                            rel: \"stylesheet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lukejudges/Desktop/Production/blxckout/src/pages/terminal.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 7\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lukejudges/Desktop/Production/blxckout/src/pages/terminal.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views__WEBPACK_IMPORTED_MODULE_2__.TerminalView, {}, void 0, false, {\n                    fileName: \"/Users/lukejudges/Desktop/Production/blxckout/src/pages/terminal.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"terminal()\"\n                }, void 0, false, {\n                    fileName: \"/Users/lukejudges/Desktop/Production/blxckout/src/pages/terminal.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lukejudges/Desktop/Production/blxckout/src/pages/terminal.tsx\",\n            lineNumber: 8,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/lukejudges/Desktop/Production/blxckout/src/pages/terminal.tsx\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, _this));\n};\n_c = Terminal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Terminal);\nfunction terminal() {\n    jQuery(function($, undefined) {\n        $('#term_demo').terminal(function(command) {\n            if (command !== '') {\n                var result = window.eval(command);\n                if (result != undefined) {\n                    this.echo(String(result));\n                }\n            }\n        }, {\n            greetings: 'Javascript Interpreter',\n            name: 'js_demo',\n            height: 200,\n            width: 450,\n            prompt: 'js> '\n        });\n    });\n}\nvar _c;\n$RefreshReg$(_c, \"Terminal\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGVybWluYWwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzRCO0FBQ1c7O0FBRXZDLEdBQUssQ0FBQ0UsUUFBUSxHQUFhLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7SUFDckMsTUFBTSw2RUFDTEMsQ0FBRzs4RkFDREEsQ0FBRzs7NEZBQ0RKLGtEQUFJOztvR0FDRkssQ0FBSztzQ0FBQyxDQUFROzs7Ozs7b0dBQ2RDLENBQUk7Ozs7O29HQUNOQyxDQUFNOzRCQUFDQyxHQUFHLEVBQUMsQ0FBNkM7Ozs7OztvR0FDeERELENBQU07NEJBQUNDLEdBQUcsRUFBQyxDQUF5Rjs7Ozs7O29HQUNwR0MsQ0FBSTs0QkFBQ0MsSUFBSSxFQUFDLENBQTJGOzRCQUFDQyxHQUFHLEVBQUMsQ0FBWTs7Ozs7Ozs7Ozs7OzRGQUV0SFYsZ0RBQVk7Ozs7OzRGQUNaRyxDQUFHOzhCQUFDLENBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSU4sQ0FBQztLQWxCS0YsUUFBUTtBQW9CZCwrREFBZUEsUUFBUSxFQUFDO1NBR2ZVLFFBQVEsR0FBRyxDQUFDO0lBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUNDLENBQUMsRUFBRUMsU0FBUyxFQUFFLENBQUM7UUFDbkRELENBQUMsQ0FBQyxDQUFZLGFBQUVGLFFBQVEsQ0FBQyxRQUFRLENBQUNJLE9BQU8sRUFBRSxDQUFDO1lBQ3hDLEVBQUUsRUFBRUEsT0FBTyxLQUFLLENBQUUsR0FBRSxDQUFDO2dCQUNqQixHQUFHLENBQUNDLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUNILE9BQU87Z0JBQ2hDLEVBQUUsRUFBRUMsTUFBTSxJQUFJRixTQUFTLEVBQUUsQ0FBQztvQkFDdEIsSUFBSSxDQUFDSyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0osTUFBTTtnQkFDM0IsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDLEVBQUUsQ0FBQztZQUNBSyxTQUFTLEVBQUUsQ0FBd0I7WUFDbkNDLElBQUksRUFBRSxDQUFTO1lBQ2ZDLE1BQU0sRUFBRSxHQUFHO1lBQ1hDLEtBQUssRUFBRSxHQUFHO1lBQ1ZDLE1BQU0sRUFBRSxDQUFNO1FBQ2xCLENBQUM7SUFDSCxDQUFDO0FBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdGVybWluYWwudHN4PzU3NGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBUZXJtaW5hbFZpZXcgfSBmcm9tIFwiLi4vdmlld3NcIjtcblxuY29uc3QgVGVybWluYWw6IE5leHRQYWdlID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gIDxkaXY+XG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QkxYQ0tPVVQ8L3RpdGxlPlxuICAgICAgICA8bWV0YS8+XG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjIuMS5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvanF1ZXJ5LnRlcm1pbmFsLzIuMzIuMS9qcy9qcXVlcnkudGVybWluYWwubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvanF1ZXJ5LnRlcm1pbmFsLzIuMzIuMS9jc3MvanF1ZXJ5LnRlcm1pbmFsLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFRlcm1pbmFsVmlldyAvPlxuICAgICAgPGRpdj5cbiAgICAgIHRlcm1pbmFsKClcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm1pbmFsO1xuXG5cbmZ1bmN0aW9uIHRlcm1pbmFsKCkgeyBqUXVlcnkoZnVuY3Rpb24oJCwgdW5kZWZpbmVkKSB7XG4gICQoJyN0ZXJtX2RlbW8nKS50ZXJtaW5hbChmdW5jdGlvbihjb21tYW5kKSB7XG4gICAgICBpZiAoY29tbWFuZCAhPT0gJycpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gd2luZG93LmV2YWwoY29tbWFuZCk7XG4gICAgICAgICAgaWYgKHJlc3VsdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5lY2hvKFN0cmluZyhyZXN1bHQpKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH0sIHtcbiAgICAgIGdyZWV0aW5nczogJ0phdmFzY3JpcHQgSW50ZXJwcmV0ZXInLFxuICAgICAgbmFtZTogJ2pzX2RlbW8nLFxuICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICB3aWR0aDogNDUwLFxuICAgICAgcHJvbXB0OiAnanM+ICdcbiAgfSk7XG59KTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiVGVybWluYWxWaWV3IiwiVGVybWluYWwiLCJwcm9wcyIsImRpdiIsInRpdGxlIiwibWV0YSIsInNjcmlwdCIsInNyYyIsImxpbmsiLCJocmVmIiwicmVsIiwidGVybWluYWwiLCJqUXVlcnkiLCIkIiwidW5kZWZpbmVkIiwiY29tbWFuZCIsInJlc3VsdCIsIndpbmRvdyIsImV2YWwiLCJlY2hvIiwiU3RyaW5nIiwiZ3JlZXRpbmdzIiwibmFtZSIsImhlaWdodCIsIndpZHRoIiwicHJvbXB0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/terminal.tsx\n");

/***/ })

});