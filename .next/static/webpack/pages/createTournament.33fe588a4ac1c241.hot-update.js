"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/createTournament",{

/***/ "./pages/createTournament.js":
/*!***********************************!*\
  !*** ./pages/createTournament.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ createTournamentForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction createTournamentForm() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        action: \"/api/form\",\n        method: \"post\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"tournamentName\",\n                children: \"Tournament Name\"\n            }, void 0, false, {\n                fileName: \"/Users/khargrove/Desktop/development/pbt-reviews/pages/createTournament.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"tournamentName\",\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/khargrove/Desktop/development/pbt-reviews/pages/createTournament.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/khargrove/Desktop/development/pbt-reviews/pages/createTournament.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"date\",\n                children: \"Tournament Start Date\"\n            }, void 0, false, {\n                fileName: \"/Users/khargrove/Desktop/development/pbt-reviews/pages/createTournament.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"date\",\n                id: \"tournamentDate\",\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/khargrove/Desktop/development/pbt-reviews/pages/createTournament.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/khargrove/Desktop/development/pbt-reviews/pages/createTournament.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGVUb3VybmFtZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUVBO0FBQWUsU0FBU0Esb0JBQW9CLEdBQUc7SUFDM0MscUJBQ0ksOERBQUNDLE1BQUk7UUFBQ0MsTUFBTSxFQUFDLFdBQVc7UUFBQ0MsTUFBTSxFQUFDLE1BQU07OzBCQUNsQyw4REFBQ0MsT0FBSztnQkFBQ0MsT0FBTyxFQUFDLGdCQUFnQjswQkFBQyxpQkFBZTs7Ozs7b0JBQVE7MEJBQ3ZELDhEQUFDQyxPQUFLO2dCQUFDQyxJQUFJLEVBQUMsTUFBTTtnQkFBQ0MsRUFBRSxFQUFDLGdCQUFnQjtnQkFBQ0MsUUFBUTs7Ozs7b0JBQUc7MEJBQ2xELDhEQUFDQyxJQUFFOzs7O29CQUFHOzBCQUNOLDhEQUFDTixPQUFLO2dCQUFDQyxPQUFPLEVBQUMsTUFBTTswQkFBQyx1QkFBcUI7Ozs7O29CQUFROzBCQUNuRCw4REFBQ0MsT0FBSztnQkFBQ0MsSUFBSSxFQUFDLE1BQU07Z0JBQUNDLEVBQUUsRUFBQyxnQkFBZ0I7Z0JBQUNDLFFBQVE7Ozs7O29CQUFHOzs7Ozs7WUFHL0MsQ0FDVjtBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlVG91cm5hbWVudC5qcz82NmY0Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb3VybmFtZW50Rm9ybSgpIHtcbiAgICByZXR1cm4gKCBcbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2FwaS9mb3JtXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b3VybmFtZW50TmFtZVwiPlRvdXJuYW1lbnQgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRvdXJuYW1lbnROYW1lXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkYXRlXCI+VG91cm5hbWVudCBTdGFydCBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwidG91cm5hbWVudERhdGVcIiByZXF1aXJlZCAvPlxuXG5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn0iXSwibmFtZXMiOlsiY3JlYXRlVG91cm5hbWVudEZvcm0iLCJmb3JtIiwiYWN0aW9uIiwibWV0aG9kIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZXF1aXJlZCIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/createTournament.js\n"));

/***/ })

});