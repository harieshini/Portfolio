"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_app_work-section_Work_tsx",{

/***/ "(app-pages-browser)/./app/work-section/ProjectGrid.tsx":
/*!******************************************!*\
  !*** ./app/work-section/ProjectGrid.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./app/work-section/ProjectCard.tsx\");\n/* harmony import */ var _projectDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectDetails */ \"(app-pages-browser)/./app/work-section/projectDetails.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _animations_AnimatedWords2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations/AnimatedWords2 */ \"(app-pages-browser)/./app/animations/AnimatedWords2.tsx\");\n/* harmony import */ var _fonts_monaSans__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/monaSans */ \"(app-pages-browser)/./app/fonts/monaSans.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProjectGrid = ()=>{\n    _s();\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-10 flex gap-16 text-[#e4ded7] md:mb-16  lg:mb-20 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-[16px] md:text-[20px] lg:text-[24px] \".concat(filter ? \"text-[#e4ded7]\" : \"text-[#e4ded7]/30\"),\n                        onClick: ()=>setFilter(true),\n                        children: \"Development\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Projects\\\\folio-v1\\\\app\\\\work-section\\\\ProjectGrid.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-[16px] md:text-[20px] lg:text-[24px] \".concat(filter ? \"text-[#e4ded7]/30\" : \"text-[#e4ded7]\"),\n                        onClick: ()=>setFilter(false),\n                        children: \"Design\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Projects\\\\folio-v1\\\\app\\\\work-section\\\\ProjectGrid.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Projects\\\\folio-v1\\\\app\\\\work-section\\\\ProjectGrid.tsx\",\n                lineNumber: 13,\n                columnNumber: 8\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animations_AnimatedWords2__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        title: \"PROJECTS\",\n                        style: \"flex max-w-[500px] pr-5 flex-col items-start text-left \".concat(_fonts_monaSans__WEBPACK_IMPORTED_MODULE_5__.monaSans.className, \" font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,10vw,155.04px)]\")\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Projects\\\\folio-v1\\\\app\\\\work-section\\\\ProjectGrid.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    _projectDetails__WEBPACK_IMPORTED_MODULE_2__.devProjects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            id: project.id,\n                            name: project.name,\n                            description: project.description,\n                            technologies: project.technologies,\n                            github: project.github,\n                            // demo={project.demo}\n                            image: project.image,\n                            available: project.available\n                        }, project.id, false, {\n                            fileName: \"H:\\\\Projects\\\\folio-v1\\\\app\\\\work-section\\\\ProjectGrid.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Projects\\\\folio-v1\\\\app\\\\work-section\\\\ProjectGrid.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ProjectGrid, \"EUtzs8xqfYNgCdPOtgeYPdWJ790=\");\n_c = ProjectGrid;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectGrid);\nvar _c;\n$RefreshReg$(_c, \"ProjectGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93b3JrLXNlY3Rpb24vUHJvamVjdEdyaWQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDcUM7QUFDNUM7QUFDeUI7QUFDYjtBQUc3QyxNQUFNSyxjQUFjOztJQUNqQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUM7SUFFdEMscUJBQ0U7OzBCQUNHLDhEQUFDTTtnQkFBSUMsV0FBVTs7a0NBQ2QsOERBQUNDO3dCQUNDRCxXQUFXLDZDQUVWLE9BRENILFNBQVMsbUJBQW1CO3dCQUU5QkssU0FBUyxJQUFNSixVQUFVO2tDQUMxQjs7Ozs7O29CQUVLO2tDQUNOLDhEQUFDRzt3QkFDQ0QsV0FBVyw2Q0FFVixPQURDSCxTQUFTLHNCQUFzQjt3QkFFakNLLFNBQVMsSUFBTUosVUFBVTtrQ0FDMUI7Ozs7Ozs7Ozs7OzswQkFNRCw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNmLDhEQUFDTixrRUFBY0E7d0JBQ2JTLE9BQU87d0JBQ1BDLE9BQU8sMERBQTZFLE9BQW5CVCxxREFBUUEsQ0FBQ0ssU0FBUyxFQUFDOzs7Ozs7b0JBRW5GUix3REFBV0EsQ0FBQ2EsR0FBRyxDQUFDLENBQUNDLHdCQUNoQiw4REFBQ2Ysb0RBQVdBOzRCQUNWZ0IsSUFBSUQsUUFBUUMsRUFBRTs0QkFFZEMsTUFBTUYsUUFBUUUsSUFBSTs0QkFDbEJDLGFBQWFILFFBQVFHLFdBQVc7NEJBQ2hDQyxjQUFjSixRQUFRSSxZQUFZOzRCQUNsQ0MsUUFBUUwsUUFBUUssTUFBTTs0QkFDdEIsc0JBQXNCOzRCQUN0QkMsT0FBT04sUUFBUU0sS0FBSzs0QkFDcEJDLFdBQVdQLFFBQVFPLFNBQVM7MkJBUHZCUCxRQUFRQyxFQUFFOzs7Ozs7Ozs7Ozs7O0FBK0I3QjtHQWhFTVg7S0FBQUE7QUFrRU4saUVBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIkg6XFxQcm9qZWN0c1xcZm9saW8tdjFcXGFwcFxcd29yay1zZWN0aW9uXFxQcm9qZWN0R3JpZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3RDYXJkIGZyb20gXCIuL1Byb2plY3RDYXJkXCI7XHJcbmltcG9ydCB7IGRldlByb2plY3RzLCBkZXNpZ25Qcm9qZWN0cywgUHJvamVjdFByb3BzIH0gZnJvbSBcIi4vcHJvamVjdERldGFpbHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFuaW1hdGVkV29yZHMyIGZyb20gXCIuLi9hbmltYXRpb25zL0FuaW1hdGVkV29yZHMyXCI7XHJcbmltcG9ydCB7IG1vbmFTYW5zIH0gZnJvbSBcIi4uL2ZvbnRzL21vbmFTYW5zXCI7XHJcbmltcG9ydCBBbmltYXRlZEJvZHkgZnJvbSBcIi4uL2FuaW1hdGlvbnMvQW5pbWF0ZWRCb2R5XCI7XHJcblxyXG5jb25zdCBQcm9qZWN0R3JpZCA9ICgpID0+IHtcclxuICAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTAgZmxleCBnYXAtMTYgdGV4dC1bI2U0ZGVkN10gbWQ6bWItMTYgIGxnOm1iLTIwIFwiPlxyXG4gICAgICAgIDxoNFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1bMTZweF0gbWQ6dGV4dC1bMjBweF0gbGc6dGV4dC1bMjRweF0gJHtcclxuICAgICAgICAgICAgZmlsdGVyID8gXCJ0ZXh0LVsjZTRkZWQ3XVwiIDogXCJ0ZXh0LVsjZTRkZWQ3XS8zMFwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcih0cnVlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBEZXZlbG9wbWVudFxyXG4gICAgICAgIDwvaDQ+e1wiIFwifVxyXG4gICAgICAgIDxoNFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1bMTZweF0gbWQ6dGV4dC1bMjBweF0gbGc6dGV4dC1bMjRweF0gJHtcclxuICAgICAgICAgICAgZmlsdGVyID8gXCJ0ZXh0LVsjZTRkZWQ3XS8zMFwiIDogXCJ0ZXh0LVsjZTRkZWQ3XVwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcihmYWxzZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgRGVzaWduXHJcbiAgICAgICAgPC9oND5cclxuICAgICAgPC9kaXY+IFxyXG5cclxuICAgICAgey8qIHtmaWx0ZXIgPyAoICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCB3LVs5MCVdIGdyaWQtY29scy0xIGdyaWQtcm93cy0yIGdhcC15LTEwIGdhcC14LTYgbGc6bWF4LXctWzEyMDBweF0gbGc6Z3JpZC1jb2xzLTFcIj5cclxuICAgICAgICA8QW5pbWF0ZWRXb3JkczJcclxuICAgICAgICAgIHRpdGxlPXtcIlBST0pFQ1RTXCJ9XHJcbiAgICAgICAgICBzdHlsZT17YGZsZXggbWF4LXctWzUwMHB4XSBwci01IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IHRleHQtbGVmdCAke21vbmFTYW5zLmNsYXNzTmFtZX0gZm9udC1leHRyYWJvbGQgdXBwZXJjYXNlIGxlYWRpbmctWzAuOWVtXSB0ZXh0LVsjZTRkZWQ3XSBzbTptYXgtdy1mdWxsIHNtOmZsZXgtcm93IHNtOml0ZW1zLWNlbnRlciBzbTpqdXN0aWZ5LWNlbnRlciBzbTp0ZXh0LWNlbnRlciBsZzp0ZXh0LWNlbnRlciB0ZXh0LVtjbGFtcCg3MHB4LDEwdncsMTU1LjA0cHgpXWB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICAgIHtkZXZQcm9qZWN0cy5tYXAoKHByb2plY3Q6IFByb2plY3RQcm9wcykgPT4gKFxyXG4gICAgICAgICAgICA8UHJvamVjdENhcmRcclxuICAgICAgICAgICAgICBpZD17cHJvamVjdC5pZH1cclxuICAgICAgICAgICAgICBrZXk9e3Byb2plY3QuaWR9XHJcbiAgICAgICAgICAgICAgbmFtZT17cHJvamVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIHRlY2hub2xvZ2llcz17cHJvamVjdC50ZWNobm9sb2dpZXN9XHJcbiAgICAgICAgICAgICAgZ2l0aHViPXtwcm9qZWN0LmdpdGh1Yn1cclxuICAgICAgICAgICAgICAvLyBkZW1vPXtwcm9qZWN0LmRlbW99XHJcbiAgICAgICAgICAgICAgaW1hZ2U9e3Byb2plY3QuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgYXZhaWxhYmxlPXtwcm9qZWN0LmF2YWlsYWJsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgdy1bOTAlXSBncmlkLWNvbHMtMSBncmlkLXJvd3MtMiBnYXAteS02IGdhcC14LTYgbGc6bWF4LXctWzEyMDBweF0gbGc6Z3JpZC1jb2xzLTFcIj5cclxuICAgICAgICAgIHtkZXNpZ25Qcm9qZWN0cy5tYXAoKHByb2plY3Q6IFByb2plY3RQcm9wcykgPT4gKFxyXG4gICAgICAgICAgICA8UHJvamVjdENhcmRcclxuICAgICAgICAgICAgICBpZD17cHJvamVjdC5pZH1cclxuICAgICAgICAgICAgICBrZXk9e3Byb2plY3QuaWR9XHJcbiAgICAgICAgICAgICAgbmFtZT17cHJvamVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIHRlY2hub2xvZ2llcz17cHJvamVjdC50ZWNobm9sb2dpZXN9XHJcbiAgICAgICAgICAgICAgZ2l0aHViPXtwcm9qZWN0LmdpdGh1Yn1cclxuICAgICAgICAgICAgICBkZW1vPXtwcm9qZWN0LmRlbW99XHJcbiAgICAgICAgICAgICAgaW1hZ2U9e3Byb2plY3QuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgYmdDb2xvcj17cHJvamVjdC5iZ0NvbG9yfVxyXG4gICAgICAgICAgICAgIGF2YWlsYWJsZT17cHJvamVjdC5hdmFpbGFibGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX0gKi99XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdEdyaWQ7XHJcbiJdLCJuYW1lcyI6WyJQcm9qZWN0Q2FyZCIsImRldlByb2plY3RzIiwidXNlU3RhdGUiLCJBbmltYXRlZFdvcmRzMiIsIm1vbmFTYW5zIiwiUHJvamVjdEdyaWQiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsIm9uQ2xpY2siLCJ0aXRsZSIsInN0eWxlIiwibWFwIiwicHJvamVjdCIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidGVjaG5vbG9naWVzIiwiZ2l0aHViIiwiaW1hZ2UiLCJhdmFpbGFibGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/work-section/ProjectGrid.tsx\n"));

/***/ })

});