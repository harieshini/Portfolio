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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./app/work-section/ProjectCard.tsx\");\n/* harmony import */ var _projectDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectDetails */ \"(app-pages-browser)/./app/work-section/projectDetails.ts\");\n\n\n\nconst ProjectGrid = ()=>{\n    // const [filter, setFilter] = useState(true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedTitle, {\n                    text: \" I  COGNIZE  AND  BUILD  -  COLLABORATIVE  ,  ENGAGING   AND   REVELATING   PROJECTS. \",\n                    className: \"mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]\",\n                    wordSpace: \"mr-[14px]\",\n                    charSpace: \"mr-[0.001em]\"\n                }, void 0, false, {\n                    fileName: \"H:\\\\Projects\\\\folio-v1\\\\app\\\\work-section\\\\ProjectGrid.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined),\n                _projectDetails__WEBPACK_IMPORTED_MODULE_2__.devProjects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        id: project.id,\n                        name: project.name,\n                        description: project.description,\n                        technologies: project.technologies,\n                        github: project.github,\n                        // demo={project.demo}\n                        image: project.image,\n                        available: project.available\n                    }, project.id, false, {\n                        fileName: \"H:\\\\Projects\\\\folio-v1\\\\app\\\\work-section\\\\ProjectGrid.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined))\n            ]\n        }, void 0, true, {\n            fileName: \"H:\\\\Projects\\\\folio-v1\\\\app\\\\work-section\\\\ProjectGrid.tsx\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_c = ProjectGrid;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectGrid);\nvar _c;\n$RefreshReg$(_c, \"ProjectGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93b3JrLXNlY3Rpb24vUHJvamVjdEdyaWQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ3FDO0FBTTdFLE1BQU1FLGNBQWM7SUFDbEIsOENBQThDO0lBRTlDLHFCQUNFO2tCQXFCSSw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2YsOERBQUNDO29CQUNDQyxNQUNFO29CQUVGRixXQUNFO29CQUVGRyxXQUFXO29CQUNYQyxXQUFXOzs7Ozs7Z0JBRVZQLHdEQUFXQSxDQUFDUSxHQUFHLENBQUMsQ0FBQ0Msd0JBQ2hCLDhEQUFDVixvREFBV0E7d0JBQ1ZXLElBQUlELFFBQVFDLEVBQUU7d0JBRWRDLE1BQU1GLFFBQVFFLElBQUk7d0JBQ2xCQyxhQUFhSCxRQUFRRyxXQUFXO3dCQUNoQ0MsY0FBY0osUUFBUUksWUFBWTt3QkFDbENDLFFBQVFMLFFBQVFLLE1BQU07d0JBQ3RCLHNCQUFzQjt3QkFDdEJDLE9BQU9OLFFBQVFNLEtBQUs7d0JBQ3BCQyxXQUFXUCxRQUFRTyxTQUFTO3VCQVB2QlAsUUFBUUMsRUFBRTs7Ozs7Ozs7Ozs7O0FBK0I3QjtLQXRFTVQ7QUF3RU4saUVBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIkg6XFxQcm9qZWN0c1xcZm9saW8tdjFcXGFwcFxcd29yay1zZWN0aW9uXFxQcm9qZWN0R3JpZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3RDYXJkIGZyb20gXCIuL1Byb2plY3RDYXJkXCI7XHJcbmltcG9ydCB7IGRldlByb2plY3RzLCBkZXNpZ25Qcm9qZWN0cywgUHJvamVjdFByb3BzIH0gZnJvbSBcIi4vcHJvamVjdERldGFpbHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFuaW1hdGVkV29yZHMyIGZyb20gXCIuLi9hbmltYXRpb25zL0FuaW1hdGVkV29yZHMyXCI7XHJcbmltcG9ydCB7IG1vbmFTYW5zIH0gZnJvbSBcIi4uL2ZvbnRzL21vbmFTYW5zXCI7XHJcbmltcG9ydCBBbmltYXRlZEJvZHkgZnJvbSBcIi4uL2FuaW1hdGlvbnMvQW5pbWF0ZWRCb2R5XCI7XHJcblxyXG5jb25zdCBQcm9qZWN0R3JpZCA9ICgpID0+IHtcclxuICAvLyBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJtYi0xMCBmbGV4IGdhcC0xNiB0ZXh0LVsjZTRkZWQ3XSBtZDptYi0xNiAgbGc6bWItMjAgXCI+XHJcbiAgICAgICAgPGg0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LVsxNnB4XSBtZDp0ZXh0LVsyMHB4XSBsZzp0ZXh0LVsyNHB4XSAke1xyXG4gICAgICAgICAgICBmaWx0ZXIgPyBcInRleHQtWyNlNGRlZDddXCIgOiBcInRleHQtWyNlNGRlZDddLzMwXCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKHRydWUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIERldmVsb3BtZW50XHJcbiAgICAgICAgPC9oND57XCIgXCJ9XHJcbiAgICAgICAgPGg0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LVsxNnB4XSBtZDp0ZXh0LVsyMHB4XSBsZzp0ZXh0LVsyNHB4XSAke1xyXG4gICAgICAgICAgICBmaWx0ZXIgPyBcInRleHQtWyNlNGRlZDddLzMwXCIgOiBcInRleHQtWyNlNGRlZDddXCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKGZhbHNlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBEZXNpZ25cclxuICAgICAgICA8L2g0PlxyXG4gICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICB7Lyoge2ZpbHRlciA/ICggKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHctWzkwJV0gZ3JpZC1jb2xzLTEgZ3JpZC1yb3dzLTIgZ2FwLXktMTAgZ2FwLXgtNiBsZzptYXgtdy1bMTIwMHB4XSBsZzpncmlkLWNvbHMtMVwiPlxyXG4gICAgICAgIDxBbmltYXRlZFRpdGxlXHJcbiAgICAgICAgICB0ZXh0PXtcclxuICAgICAgICAgICAgXCIgSSAgQ09HTklaRSAgQU5EICBCVUlMRCAgLSAgQ09MTEFCT1JBVElWRSAgLCAgRU5HQUdJTkcgICBBTkQgICBSRVZFTEFUSU5HICAgUFJPSkVDVFMuIFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICBcIm1iLTEwIHRleHQtbGVmdCB0ZXh0LVs0MHB4XSBmb250LWJvbGQgbGVhZGluZy1bMC45ZW1dIHRyYWNraW5nLXRpZ2h0ZXIgdGV4dC1bI2U0ZGVkN10gc206dGV4dC1bNDVweF0gbWQ6bWItMTYgbWQ6dGV4dC1bNjBweF0gbGc6dGV4dC1bODBweF1cIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgd29yZFNwYWNlPXtcIm1yLVsxNHB4XVwifVxyXG4gICAgICAgICAgY2hhclNwYWNlPXtcIm1yLVswLjAwMWVtXVwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgICB7ZGV2UHJvamVjdHMubWFwKChwcm9qZWN0OiBQcm9qZWN0UHJvcHMpID0+IChcclxuICAgICAgICAgICAgPFByb2plY3RDYXJkXHJcbiAgICAgICAgICAgICAgaWQ9e3Byb2plY3QuaWR9XHJcbiAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxyXG4gICAgICAgICAgICAgIG5hbWU9e3Byb2plY3QubmFtZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICB0ZWNobm9sb2dpZXM9e3Byb2plY3QudGVjaG5vbG9naWVzfVxyXG4gICAgICAgICAgICAgIGdpdGh1Yj17cHJvamVjdC5naXRodWJ9XHJcbiAgICAgICAgICAgICAgLy8gZGVtbz17cHJvamVjdC5kZW1vfVxyXG4gICAgICAgICAgICAgIGltYWdlPXtwcm9qZWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgIGF2YWlsYWJsZT17cHJvamVjdC5hdmFpbGFibGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgey8qICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHctWzkwJV0gZ3JpZC1jb2xzLTEgZ3JpZC1yb3dzLTIgZ2FwLXktNiBnYXAteC02IGxnOm1heC13LVsxMjAwcHhdIGxnOmdyaWQtY29scy0xXCI+XHJcbiAgICAgICAgICB7ZGVzaWduUHJvamVjdHMubWFwKChwcm9qZWN0OiBQcm9qZWN0UHJvcHMpID0+IChcclxuICAgICAgICAgICAgPFByb2plY3RDYXJkXHJcbiAgICAgICAgICAgICAgaWQ9e3Byb2plY3QuaWR9XHJcbiAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxyXG4gICAgICAgICAgICAgIG5hbWU9e3Byb2plY3QubmFtZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICB0ZWNobm9sb2dpZXM9e3Byb2plY3QudGVjaG5vbG9naWVzfVxyXG4gICAgICAgICAgICAgIGdpdGh1Yj17cHJvamVjdC5naXRodWJ9XHJcbiAgICAgICAgICAgICAgZGVtbz17cHJvamVjdC5kZW1vfVxyXG4gICAgICAgICAgICAgIGltYWdlPXtwcm9qZWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgIGJnQ29sb3I9e3Byb2plY3QuYmdDb2xvcn1cclxuICAgICAgICAgICAgICBhdmFpbGFibGU9e3Byb2plY3QuYXZhaWxhYmxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RHcmlkO1xyXG4iXSwibmFtZXMiOlsiUHJvamVjdENhcmQiLCJkZXZQcm9qZWN0cyIsIlByb2plY3RHcmlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiQW5pbWF0ZWRUaXRsZSIsInRleHQiLCJ3b3JkU3BhY2UiLCJjaGFyU3BhY2UiLCJtYXAiLCJwcm9qZWN0IiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ0ZWNobm9sb2dpZXMiLCJnaXRodWIiLCJpbWFnZSIsImF2YWlsYWJsZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/work-section/ProjectGrid.tsx\n"));

/***/ })

});