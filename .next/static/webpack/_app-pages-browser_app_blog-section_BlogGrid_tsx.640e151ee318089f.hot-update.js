"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_app_blog-section_BlogGrid_tsx",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"46d3c4188268\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIkg6XFxQcm9qZWN0c1xcZm9saW8tdjFcXGFwcFxcZ2xvYmFscy5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI0NmQzYzQxODgyNjhcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/blog-section/BlogCard.tsx":
/*!***************************************!*\
  !*** ./app/blog-section/BlogCard.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals.css */ \"(app-pages-browser)/./app/globals.css\");\n\n\n\n\n\n\n\nconst BlogCard = (param)=>{\n    let { title, image, url, date, available, index } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        initial: {\n            opacity: 0,\n            y: 10\n        },\n        whileInView: {\n            opacity: 1,\n            y: 0,\n            transition: {\n                duration: 0.7,\n                delay: 0.1 * index,\n                ease: [\n                    0.44,\n                    0,\n                    0.22,\n                    0.99\n                ]\n            }\n        },\n        viewport: {\n            amount: \"some\",\n            once: true\n        },\n        className: \"relative flex h-[430px] w-[100%] max-w-[400px] flex-col items-center justify-start rounded-2xl bg-[#212531]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 h-[100%] w-[90%] lg:mt-5 lg:w-[92%]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-[60%] w-full md:h-[56%]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: image,\n                            alt: title,\n                            width: 1600,\n                            height: 840,\n                            className: \"h-full w-full rounded-lg bg-contain bg-center object-cover\"\n                        }, void 0, false, {\n                            fileName: \"H:\\\\Projects\\\\folio-v1\\\\app\\\\blog-section\\\\BlogCard.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Projects\\\\folio-v1\\\\app\\\\blog-section\\\\BlogCard.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"mt-2 break-all uppercase text-[19px] leading-[1em] tracking-tight line-clamp-2\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Projects\\\\folio-v1\\\\app\\\\blog-section\\\\BlogCard.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Projects\\\\folio-v1\\\\app\\\\blog-section\\\\BlogCard.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-0 mb-5 flex w-[90%] items-center justify-between text-[14px] font-bold text-[#95979D]\",\n                children: available ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: date\n                        }, void 0, false, {\n                            fileName: \"H:\\\\Projects\\\\folio-v1\\\\app\\\\blog-section\\\\BlogCard.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, undefined),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: url,\n                            target: \"_blank\",\n                            className: \"rounded-full\",\n                            \"aria-label\": \"view certificate\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faArrowRight,\n                                className: \" w-[16px] rounded-full bg-[#0E1016] p-3 text-[16px] text-[#fff] md:w-[20px] md:text-[20px] lg:w-[18px] lg:p-4 lg:text-[18px]\",\n                                \"data-blobity\": true,\n                                \"data-blobity-radius\": \"30\",\n                                \"data-blobity-offset-x\": \"4\",\n                                \"data-blobity-offset-y\": \"4\",\n                                \"data-blobity-magnetic\": \"false\"\n                            }, void 0, false, {\n                                fileName: \"H:\\\\Projects\\\\folio-v1\\\\app\\\\blog-section\\\\BlogCard.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"H:\\\\Projects\\\\folio-v1\\\\app\\\\blog-section\\\\BlogCard.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Coming soon\"\n                        }, void 0, false, {\n                            fileName: \"H:\\\\Projects\\\\folio-v1\\\\app\\\\blog-section\\\\BlogCard.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-10 md:mb-14\"\n                        }, void 0, false, {\n                            fileName: \"H:\\\\Projects\\\\folio-v1\\\\app\\\\blog-section\\\\BlogCard.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"H:\\\\Projects\\\\folio-v1\\\\app\\\\blog-section\\\\BlogCard.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Projects\\\\folio-v1\\\\app\\\\blog-section\\\\BlogCard.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_c = BlogCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCard);\nvar _c;\n$RefreshReg$(_c, \"BlogCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9nLXNlY3Rpb24vQmxvZ0NhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDaUU7QUFDQTtBQUNsQztBQUNGO0FBQ1U7QUFDZjtBQUV4QixNQUFNSyxXQUFXO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBYTtJQUN4RSxxQkFDRSw4REFBQ1AsaURBQU1BLENBQUNRLEdBQUc7UUFDVEMsU0FBUztZQUFFQyxTQUFTO1lBQUdDLEdBQUc7UUFBRztRQUM3QkMsYUFBYTtZQUNYRixTQUFTO1lBQ1RDLEdBQUc7WUFDSEUsWUFBWTtnQkFDVkMsVUFBVTtnQkFDVkMsT0FBTyxNQUFNUjtnQkFDYlMsTUFBTTtvQkFBQztvQkFBTTtvQkFBRztvQkFBTTtpQkFBSztZQUM3QjtRQUNGO1FBQ0FDLFVBQVU7WUFDUkMsUUFBUTtZQUNSQyxNQUFNO1FBQ1I7UUFDQUMsV0FBVTs7MEJBRVYsOERBQUNaO2dCQUFJWSxXQUFVOztrQ0FDYiw4REFBQ1o7d0JBQUlZLFdBQVU7a0NBQ2IsNEVBQUN0QixrREFBS0E7NEJBQ0p1QixLQUFLbEI7NEJBQ0xtQixLQUFLcEI7NEJBQ0xxQixPQUFPOzRCQUNQQyxRQUFROzRCQUNSSixXQUFVOzs7Ozs7Ozs7OztrQ0FJZCw4REFBQ0s7d0JBQUdMLFdBQVU7a0NBQ25CbEI7Ozs7Ozs7Ozs7OzswQkFLRyw4REFBQ007Z0JBQUlZLFdBQVU7MEJBQ1pkLDBCQUNDOzt3QkFDRztzQ0FDRCw4REFBQ29CO3NDQUFHckI7Ozs7Ozt3QkFBVTtzQ0FDZCw4REFBQ04sa0RBQUlBOzRCQUNINEIsTUFBTXZCOzRCQUNOd0IsUUFBTzs0QkFDUFIsV0FBVTs0QkFDVlMsY0FBVztzQ0FFWCw0RUFBQ2pDLDJFQUFlQTtnQ0FDZGtDLE1BQU1qQywyRUFBWUE7Z0NBQ2xCdUIsV0FBVTtnQ0FDVlcsY0FBWTtnQ0FDWkMsdUJBQW9CO2dDQUNwQkMseUJBQXNCO2dDQUN0QkMseUJBQXNCO2dDQUN0QkMseUJBQXNCOzs7Ozs7Ozs7Ozs7aURBSzVCOztzQ0FDRSw4REFBQ1Q7c0NBQUU7Ozs7OztzQ0FDSCw4REFBQ2xCOzRCQUFJWSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNCO0tBbkVNbkI7QUFxRU4saUVBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIkg6XFxQcm9qZWN0c1xcZm9saW8tdjFcXGFwcFxcYmxvZy1zZWN0aW9uXFxCbG9nQ2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmxvZ1Byb3BzIH0gZnJvbSBcIi4vYmxvZ0RldGFpbHNcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYUFycm93UmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBcIi4uL2dsb2JhbHMuY3NzXCI7XHJcblxyXG5jb25zdCBCbG9nQ2FyZCA9ICh7IHRpdGxlLCBpbWFnZSwgdXJsLCBkYXRlLCBhdmFpbGFibGUsIGluZGV4IH06IGJsb2dQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDEwIH19XHJcbiAgICAgIHdoaWxlSW5WaWV3PXt7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIGR1cmF0aW9uOiAwLjcsXHJcbiAgICAgICAgICBkZWxheTogMC4xICogaW5kZXgsXHJcbiAgICAgICAgICBlYXNlOiBbMC40NCwgMCwgMC4yMiwgMC45OV0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfX1cclxuICAgICAgdmlld3BvcnQ9e3tcclxuICAgICAgICBhbW91bnQ6IFwic29tZVwiLFxyXG4gICAgICAgIG9uY2U6IHRydWUsXHJcbiAgICAgIH19XHJcbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaC1bNDMwcHhdIHctWzEwMCVdIG1heC13LVs0MDBweF0gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgcm91bmRlZC0yeGwgYmctWyMyMTI1MzFdXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IGgtWzEwMCVdIHctWzkwJV0gbGc6bXQtNSBsZzp3LVs5MiVdXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVs2MCVdIHctZnVsbCBtZDpoLVs1NiVdXCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgICAgYWx0PXt0aXRsZX1cclxuICAgICAgICAgICAgd2lkdGg9ezE2MDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17ODQwfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtbGcgYmctY29udGFpbiBiZy1jZW50ZXIgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJtdC0yIGJyZWFrLWFsbCB1cHBlcmNhc2UgdGV4dC1bMTlweF0gbGVhZGluZy1bMWVtXSB0cmFja2luZy10aWdodCBsaW5lLWNsYW1wLTJcIj5cclxuICB7dGl0bGV9XHJcbjwvaDM+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbWItNSBmbGV4IHctWzkwJV0gaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LVsxNHB4XSBmb250LWJvbGQgdGV4dC1bIzk1OTc5RF1cIj5cclxuICAgICAgICB7YXZhaWxhYmxlID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICA8cD57ZGF0ZX08L3A+e1wiIFwifVxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9e3VybH1cclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInZpZXcgY2VydGlmaWNhdGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFBcnJvd1JpZ2h0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctWzE2cHhdIHJvdW5kZWQtZnVsbCBiZy1bIzBFMTAxNl0gcC0zIHRleHQtWzE2cHhdIHRleHQtWyNmZmZdIG1kOnctWzIwcHhdIG1kOnRleHQtWzIwcHhdIGxnOnctWzE4cHhdIGxnOnAtNCBsZzp0ZXh0LVsxOHB4XVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJsb2JpdHlcclxuICAgICAgICAgICAgICAgIGRhdGEtYmxvYml0eS1yYWRpdXM9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJsb2JpdHktb2Zmc2V0LXg9XCI0XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmxvYml0eS1vZmZzZXQteT1cIjRcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1ibG9iaXR5LW1hZ25ldGljPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8cD5Db21pbmcgc29vbjwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMCBtZDptYi0xNFwiPjwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dDYXJkO1xyXG4iXSwibmFtZXMiOlsiRm9udEF3ZXNvbWVJY29uIiwiZmFBcnJvd1JpZ2h0IiwiSW1hZ2UiLCJMaW5rIiwibW90aW9uIiwiQmxvZ0NhcmQiLCJ0aXRsZSIsImltYWdlIiwidXJsIiwiZGF0ZSIsImF2YWlsYWJsZSIsImluZGV4IiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5Iiwid2hpbGVJblZpZXciLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsImVhc2UiLCJ2aWV3cG9ydCIsImFtb3VudCIsIm9uY2UiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgzIiwicCIsImhyZWYiLCJ0YXJnZXQiLCJhcmlhLWxhYmVsIiwiaWNvbiIsImRhdGEtYmxvYml0eSIsImRhdGEtYmxvYml0eS1yYWRpdXMiLCJkYXRhLWJsb2JpdHktb2Zmc2V0LXgiLCJkYXRhLWJsb2JpdHktb2Zmc2V0LXkiLCJkYXRhLWJsb2JpdHktbWFnbmV0aWMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blog-section/BlogCard.tsx\n"));

/***/ })

});