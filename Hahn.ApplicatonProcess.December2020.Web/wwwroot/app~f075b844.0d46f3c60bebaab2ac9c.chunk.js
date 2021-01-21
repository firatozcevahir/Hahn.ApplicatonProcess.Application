(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app~f075b844"],{

/***/ 0:
/*!*****************************************************************************************************************************!*\
  !*** multi aurelia-webpack-plugin/runtime/empty-entry aurelia-webpack-plugin/runtime/pal-loader-entry aurelia-bootstrapper ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! aurelia-webpack-plugin/runtime/empty-entry */"GAND");
__webpack_require__(/*! aurelia-webpack-plugin/runtime/pal-loader-entry */"GmYv");
module.exports = __webpack_require__(/*! aurelia-bootstrapper */"b9nV");


/***/ }),

/***/ "BEPO":
/*!*********************************!*\
  !*** ./config/environment.json ***!
  \*********************************/
/*! exports provided: debug, testing, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"debug\\\":true,\\\"testing\\\":true}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkVQTy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///BEPO\n");

/***/ }),

/***/ "X4a2":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ \"70NS\");\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\r\n    {\r\n        route: ['', 'home'],\r\n        name: 'home',\r\n        moduleId: './components/home/home',\r\n        nav: true,\r\n        title: 'header.routes.home'\r\n    },\r\n    {\r\n        route: 'about',\r\n        name: 'about',\r\n        moduleId: './components/about/about',\r\n        nav: true,\r\n        title: 'header.routes.about'\r\n    }\r\n]);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWDRhMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yb3V0ZXIudHM/NWY4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQTEFURk9STSB9IGZyb20gJ2F1cmVsaWEtcGFsJztcblxuZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgcm91dGU6IFsnJywgJ2hvbWUnXSxcbiAgICBuYW1lOiAnaG9tZScsXG4gICAgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vY29tcG9uZW50cy9ob21lL2hvbWUnKSxcbiAgICBuYXY6IHRydWUsXG4gICAgdGl0bGU6ICdoZWFkZXIucm91dGVzLmhvbWUnXG4gIH0sXG4gIHtcbiAgICByb3V0ZTogJ2Fib3V0JyxcbiAgICBuYW1lOiAnYWJvdXQnLFxuICAgIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKCcuL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQnKSxcbiAgICBuYXY6IHRydWUsXG4gICAgdGl0bGU6ICdoZWFkZXIucm91dGVzLmFib3V0J1xuICB9XG5dO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///X4a2\n");

/***/ }),

/***/ "app":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var aurelia_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-i18n */ \"aurelia-i18n\");\n/* harmony import */ var router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! router */ \"X4a2\");\n\r\n\r\nvar App = (function () {\r\n    function App(i18n) {\r\n        this.i18n = i18n;\r\n        this.message = 'Hello World!';\r\n        this.i18n = i18n;\r\n        this.i18n\r\n            .setLocale('en')\r\n            .then(function () {\r\n            console.log('locale is set');\r\n        });\r\n    }\r\n    App.prototype.configureRouter = function (config, router) {\r\n        config.title = 'Aurelia';\r\n        config.map(router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n        this.router = router;\r\n    };\r\n    App.inject = [aurelia_i18n__WEBPACK_IMPORTED_MODULE_0__[\"I18N\"]];\r\n    return App;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cz8wNjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEkxOE4gfSBmcm9tICdhdXJlbGlhLWkxOG4nO1xuaW1wb3J0IHJvdXRlcyBmcm9tICdyb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgc3RhdGljIGluamVjdCA9IFtJMThOXTtcbiAgcHVibGljIG1lc3NhZ2UgPSAnSGVsbG8gV29ybGQhJztcbiAgcHVibGljIHJvdXRlcjogUm91dGVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogSTE4Tikge1xuICAgIHRoaXMuaTE4biA9IGkxOG47XG4gICAgdGhpcy5pMThuXG4gICAgICAuc2V0TG9jYWxlKCdlbicpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2NhbGUgaXMgc2V0Jyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uLCByb3V0ZXI6IFJvdXRlcik6IHZvaWQge1xuICAgIGNvbmZpZy50aXRsZSA9ICdBdXJlbGlhJztcbiAgICBjb25maWcubWFwKHJvdXRlcyk7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFLQTtBQUFBO0FBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFrQkE7QUFBQTtBQW5CQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///app\n");

/***/ }),

/***/ "app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Module\nvar code = \"<template>\\n  <!-- <require from=\\\"./components/layout/main/layout-main\\\"></require> -->\\n  <require from=\\\"./styles.css\\\"></require>\\n  \\n  <require from=\\\"./components/layout/main/layout-main\\\"></require>\\n  <layout-main router.bind=\\\"router\\\"></layout-main>\\n  <router-view></router-view>  \\n</template>\\n\";\n// Exports\nmodule.exports = code;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmh0bWw/MmY0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8dGVtcGxhdGU+XFxuICA8IS0tIDxyZXF1aXJlIGZyb209XFxcIi4vY29tcG9uZW50cy9sYXlvdXQvbWFpbi9sYXlvdXQtbWFpblxcXCI+PC9yZXF1aXJlPiAtLT5cXG4gIDxyZXF1aXJlIGZyb209XFxcIi4vc3R5bGVzLmNzc1xcXCI+PC9yZXF1aXJlPlxcbiAgXFxuICA8cmVxdWlyZSBmcm9tPVxcXCIuL2NvbXBvbmVudHMvbGF5b3V0L21haW4vbGF5b3V0LW1haW5cXFwiPjwvcmVxdWlyZT5cXG4gIDxsYXlvdXQtbWFpbiByb3V0ZXIuYmluZD1cXFwicm91dGVyXFxcIj48L2xheW91dC1tYWluPlxcbiAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+ICBcXG48L3RlbXBsYXRlPlxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///app.html\n");

/***/ }),

/***/ "components/about/about":
/*!***************************************!*\
  !*** ./src/components/about/about.ts ***!
  \***************************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"About\", function() { return About; });\nvar About = (function () {\r\n    function About() {\r\n    }\r\n    return About;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9hYm91dC9hYm91dC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Fib3V0L2Fib3V0LnRzPzkxZDEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgQWJvdXQge1xuXG59XG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///components/about/about\n");

/***/ }),

/***/ "components/about/about.html":
/*!*****************************************!*\
  !*** ./src/components/about/about.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<template>\\n  <h1>ABOUT</h1>\\n</template>\\n\";\n// Exports\nmodule.exports = code;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9hYm91dC9hYm91dC5odG1sLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuaHRtbD8yYWVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjx0ZW1wbGF0ZT5cXG4gIDxoMT5BQk9VVDwvaDE+XFxuPC90ZW1wbGF0ZT5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///components/about/about.html\n");

/***/ }),

/***/ "components/home/home":
/*!*************************************!*\
  !*** ./src/components/home/home.ts ***!
  \*************************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return Home; });\nvar Home = (function () {\r\n    function Home() {\r\n    }\r\n    return Home;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL2hvbWUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL2hvbWUudHM/YTRmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBIb21lIHtcblxufVxuIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///components/home/home\n");

/***/ }),

/***/ "components/home/home.html":
/*!***************************************!*\
  !*** ./src/components/home/home.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<template>\\n  <h1>HOME</h1>\\n</template>\\n\";\n// Exports\nmodule.exports = code;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL2hvbWUuaHRtbC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUvaG9tZS5odG1sPzg5NjgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPHRlbXBsYXRlPlxcbiAgPGgxPkhPTUU8L2gxPlxcbjwvdGVtcGxhdGU+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///components/home/home.html\n");

/***/ }),

/***/ "components/layout/header/layout-header":
/*!*******************************************************!*\
  !*** ./src/components/layout/header/layout-header.ts ***!
  \*******************************************************/
/*! exports provided: LayoutHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayoutHeader\", function() { return LayoutHeader; });\n/* harmony import */ var aurelia_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-i18n */ \"aurelia-i18n\");\n/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ \"aurelia-framework\");\n/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-router */ \"4ysu\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\n\r\n\r\n\r\nvar LayoutHeader = (function () {\r\n    function LayoutHeader(i18n) {\r\n        this.i18n = i18n;\r\n    }\r\n    LayoutHeader.prototype.changeLang = function (val) {\r\n        this.i18n.setLocale(val)\r\n            .then(function () {\r\n        });\r\n    };\r\n    LayoutHeader.inject = [aurelia_i18n__WEBPACK_IMPORTED_MODULE_0__[\"I18N\"]];\r\n    __decorate([\r\n        aurelia_framework__WEBPACK_IMPORTED_MODULE_1__[\"bindable\"],\r\n        __metadata(\"design:type\", aurelia_router__WEBPACK_IMPORTED_MODULE_2__[\"Router\"])\r\n    ], LayoutHeader.prototype, \"router\", void 0);\r\n    return LayoutHeader;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2xheW91dC1oZWFkZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2xheW91dC1oZWFkZXIudHM/YTYyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJMThOIH0gZnJvbSBcImF1cmVsaWEtaTE4blwiO1xuaW1wb3J0IHsgYmluZGFibGUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5cbmV4cG9ydCBjbGFzcyBMYXlvdXRIZWFkZXIge1xuXG4gIEBiaW5kYWJsZSByb3V0ZXI6IFJvdXRlcjtcbiAgc3RhdGljIGluamVjdCA9IFtJMThOXTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBJMThOKSB7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlTGFuZyh2YWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaTE4bi5zZXRMb2NhbGUodmFsKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyBcbiAgICAgIH0pO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBVEE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFiQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///components/layout/header/layout-header\n");

/***/ }),

/***/ "components/layout/header/layout-header.html":
/*!*********************************************************!*\
  !*** ./src/components/layout/header/layout-header.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<template>\\n  <nav class=\\\"navbar navbar-expand-lg navbar-light bg-light\\\">\\n    <a class=\\\"navbar-brand\\\" href=\\\"#\\\">Navbar</a>\\n    <button class=\\\"navbar-toggler\\\" type=\\\"button\\\" data-toggle=\\\"collapse\\\" data-target=\\\"#navbarSupportedContent\\\"\\n      aria-controls=\\\"navbarSupportedContent\\\" aria-expanded=\\\"false\\\" aria-label=\\\"Toggle navigation\\\">\\n      <span class=\\\"navbar-toggler-icon\\\"></span>\\n    </button>\\n    <div class=\\\"collapse navbar-collapse\\\" id=\\\"navbarSupportedContent\\\">\\n      <ul class=\\\"navbar-nav mr-auto\\\">\\n        <li class=\\\"nav-item\\\" class=\\\"${route.isActive ? 'active' : ''}\\\" repeat.for=\\\"route of router.navigation\\\">\\n          <a class=\\\"nav-link\\\" href=\\\"#\\\" href.bind=\\\"route.href\\\">${route.title & t}</a>\\n        </li>\\n      </ul>\\n      <ul class=\\\"navbar-nav\\\">\\n        <li class=\\\"nav-item\\\">\\n          <div class=\\\"dropdown\\\">\\n            <button class=\\\"btn btn-light dropdown-toggle\\\" type=\\\"button\\\" id=\\\"langdropdown\\\" data-toggle=\\\"dropdown\\\"\\n              aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">\\n              <span class=\\\"iconify\\\" data-icon=\\\"flat-color-icons:globe\\\" data-inline=\\\"false\\\"></span>\\n            </button>\\n            <div class=\\\"dropdown-menu\\\" aria-labelledby=\\\"langdropdown\\\">\\n              <button class=\\\"dropdown-item\\\" type=\\\"button\\\" onclick.call=\\\"changeLang('de')\\\">\\n                ${ 'header.lang.german' & t}\\n              </button>\\n              <button class=\\\"dropdown-item\\\" type=\\\"button\\\" onclick.call=\\\"changeLang('en')\\\">\\n                ${ 'header.lang.english' & t}\\n              </button>\\n              <button class=\\\"dropdown-item\\\" type=\\\"button\\\" onclick.call=\\\"changeLang('tr')\\\">\\n                ${ 'header.lang.turkish' & t}\\n              </button>\\n            </div>\\n          </div>\\n        </li>\\n        <li class=\\\"nav-item\\\">\\n          <a class=\\\"nav-link\\\" href=\\\"/swagger\\\" target=\\\"_blank\\\">${ 'header.swaggerui' & t}</a>\\n        </li>\\n      </ul>\\n    </div>\\n  </nav>\\n\\n  \\n</template>\\n\\n\";\n// Exports\nmodule.exports = code;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2xheW91dC1oZWFkZXIuaHRtbC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvbGF5b3V0LWhlYWRlci5odG1sP2MxNmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPHRlbXBsYXRlPlxcbiAgPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XFxcIj5cXG4gICAgPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCIgaHJlZj1cXFwiI1xcXCI+TmF2YmFyPC9hPlxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlclxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGRhdGEtdGFyZ2V0PVxcXCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFxcXCJcXG4gICAgICBhcmlhLWNvbnRyb2xzPVxcXCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCIgYXJpYS1sYWJlbD1cXFwiVG9nZ2xlIG5hdmlnYXRpb25cXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlci1pY29uXFxcIj48L3NwYW4+XFxuICAgIDwvYnV0dG9uPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcXFwiIGlkPVxcXCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XFxcIj5cXG4gICAgICA8dWwgY2xhc3M9XFxcIm5hdmJhci1uYXYgbXItYXV0b1xcXCI+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIiBjbGFzcz1cXFwiJHtyb3V0ZS5pc0FjdGl2ZSA/ICdhY3RpdmUnIDogJyd9XFxcIiByZXBlYXQuZm9yPVxcXCJyb3V0ZSBvZiByb3V0ZXIubmF2aWdhdGlvblxcXCI+XFxuICAgICAgICAgIDxhIGNsYXNzPVxcXCJuYXYtbGlua1xcXCIgaHJlZj1cXFwiI1xcXCIgaHJlZi5iaW5kPVxcXCJyb3V0ZS5ocmVmXFxcIj4ke3JvdXRlLnRpdGxlICYgdH08L2E+XFxuICAgICAgICA8L2xpPlxcbiAgICAgIDwvdWw+XFxuICAgICAgPHVsIGNsYXNzPVxcXCJuYXZiYXItbmF2XFxcIj5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1saWdodCBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcImxhbmdkcm9wZG93blxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIlxcbiAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cXFwidHJ1ZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb25pZnlcXFwiIGRhdGEtaWNvbj1cXFwiZmxhdC1jb2xvci1pY29uczpnbG9iZVxcXCIgZGF0YS1pbmxpbmU9XFxcImZhbHNlXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJsYW5nZHJvcGRvd25cXFwiPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBvbmNsaWNrLmNhbGw9XFxcImNoYW5nZUxhbmcoJ2RlJylcXFwiPlxcbiAgICAgICAgICAgICAgICAkeyAnaGVhZGVyLmxhbmcuZ2VybWFuJyAmIHR9XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgb25jbGljay5jYWxsPVxcXCJjaGFuZ2VMYW5nKCdlbicpXFxcIj5cXG4gICAgICAgICAgICAgICAgJHsgJ2hlYWRlci5sYW5nLmVuZ2xpc2gnICYgdH1cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBvbmNsaWNrLmNhbGw9XFxcImNoYW5nZUxhbmcoJ3RyJylcXFwiPlxcbiAgICAgICAgICAgICAgICAkeyAnaGVhZGVyLmxhbmcudHVya2lzaCcgJiB0fVxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9saT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcbiAgICAgICAgICA8YSBjbGFzcz1cXFwibmF2LWxpbmtcXFwiIGhyZWY9XFxcIi9zd2FnZ2VyXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+JHsgJ2hlYWRlci5zd2FnZ2VydWknICYgdH08L2E+XFxuICAgICAgICA8L2xpPlxcbiAgICAgIDwvdWw+XFxuICAgIDwvZGl2PlxcbiAgPC9uYXY+XFxuXFxuICBcXG48L3RlbXBsYXRlPlxcblxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///components/layout/header/layout-header.html\n");

/***/ }),

/***/ "components/layout/main/layout-main":
/*!***************************************************!*\
  !*** ./src/components/layout/main/layout-main.ts ***!
  \***************************************************/
/*! exports provided: LayoutMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayoutMain\", function() { return LayoutMain; });\n/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ \"aurelia-framework\");\n/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-router */ \"4ysu\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\n\r\n\r\nvar LayoutMain = (function () {\r\n    function LayoutMain() {\r\n    }\r\n    __decorate([\r\n        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__[\"bindable\"],\r\n        __metadata(\"design:type\", aurelia_router__WEBPACK_IMPORTED_MODULE_1__[\"Router\"])\r\n    ], LayoutMain.prototype, \"router\", void 0);\r\n    return LayoutMain;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9sYXlvdXQvbWFpbi9sYXlvdXQtbWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9tYWluL2xheW91dC1tYWluLnRzP2UxYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5cbmV4cG9ydCBjbGFzcyBMYXlvdXRNYWlue1xuICBAYmluZGFibGUgcm91dGVyOiBSb3V0ZXI7XG4gIFxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFHQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUhBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///components/layout/main/layout-main\n");

/***/ }),

/***/ "components/layout/main/layout-main.html":
/*!*****************************************************!*\
  !*** ./src/components/layout/main/layout-main.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Module\nvar code = \"<template>\\n  <require from=\\\"../header/layout-header\\\"></require>\\n  <layout-header router.bind=\\\"router\\\"></layout-header>\\n</template>\\n\";\n// Exports\nmodule.exports = code;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9sYXlvdXQvbWFpbi9sYXlvdXQtbWFpbi5odG1sLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L21haW4vbGF5b3V0LW1haW4uaHRtbD8wNDUyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjx0ZW1wbGF0ZT5cXG4gIDxyZXF1aXJlIGZyb209XFxcIi4uL2hlYWRlci9sYXlvdXQtaGVhZGVyXFxcIj48L3JlcXVpcmU+XFxuICA8bGF5b3V0LWhlYWRlciByb3V0ZXIuYmluZD1cXFwicm91dGVyXFxcIj48L2xheW91dC1oZWFkZXI+XFxuPC90ZW1wbGF0ZT5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///components/layout/main/layout-main.html\n");

/***/ }),

/***/ "main":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\n/* harmony import */ var _config_environment_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/environment.json */ \"BEPO\");\nvar _config_environment_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/environment.json */ \"BEPO\", 1);\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ \"70NS\");\n/* harmony import */ var aurelia_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-i18n */ \"aurelia-i18n\");\n/* harmony import */ var i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next-xhr-backend */ \"/oNK\");\n/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-router */ \"4ysu\");\n/* harmony import */ var aurelia_event_aggregator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aurelia-event-aggregator */ \"aurelia-event-aggregator\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction configure(aurelia) {\r\n    aurelia.use\r\n        .standardConfiguration()\r\n        .feature('resources/index');\r\n    aurelia.use\r\n        .developmentLogging(_config_environment_json__WEBPACK_IMPORTED_MODULE_0__[\"debug\"] ? 'debug' : 'warn')\r\n        .plugin('aurelia-i18n', function (instance) {\r\n        var aliases = ['t', 'i18n'];\r\n        aurelia_i18n__WEBPACK_IMPORTED_MODULE_2__[\"TCustomAttribute\"].configureAliases(aliases);\r\n        instance.i18next.use(i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n        return instance.setup({\r\n            backend: {\r\n                loadPath: './assets/i18n/locales/{{lng}}/{{ns}}.json',\r\n            },\r\n            attributes: aliases,\r\n            lng: 'en',\r\n            fallbackLng: 'en',\r\n            debug: false\r\n        }).then(function () {\r\n            var router = aurelia.container.get(aurelia_router__WEBPACK_IMPORTED_MODULE_4__[\"AppRouter\"]);\r\n            router.transformTitle = function (title) { return instance.tr(title); };\r\n            var eventAggregator = aurelia.container.get(aurelia_event_aggregator__WEBPACK_IMPORTED_MODULE_5__[\"EventAggregator\"]);\r\n            eventAggregator.subscribe('i18n:locale:changed', function () {\r\n                router.updateTitle();\r\n                console.log('title updated');\r\n            });\r\n        });\r\n    });\r\n    if (_config_environment_json__WEBPACK_IMPORTED_MODULE_0__[\"testing\"]) {\r\n        aurelia.use.plugin('aurelia-testing');\r\n    }\r\n    aurelia.start().then(function () { return aurelia.setRoot('app'); });\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLnRzP2NkNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVyZWxpYSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCAqIGFzIGVudmlyb25tZW50IGZyb20gJy4uL2NvbmZpZy9lbnZpcm9ubWVudC5qc29uJztcbmltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5pbXBvcnQgeyBJMThOLCBUQ3VzdG9tQXR0cmlidXRlIH0gZnJvbSAnYXVyZWxpYS1pMThuJztcbmltcG9ydCBCYWNrZW5kIGZyb20gJ2kxOG5leHQteGhyLWJhY2tlbmQnO1xuXG5pbXBvcnQge0FwcFJvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSk6IHZvaWQge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKFBMQVRGT1JNLm1vZHVsZU5hbWUoJ3Jlc291cmNlcy9pbmRleCcpKTtcblxuICBhdXJlbGlhLnVzZVxuICAgIC5kZXZlbG9wbWVudExvZ2dpbmcoZW52aXJvbm1lbnQuZGVidWcgPyAnZGVidWcnIDogJ3dhcm4nKVxuICAgIC5wbHVnaW4oUExBVEZPUk0ubW9kdWxlTmFtZSgnYXVyZWxpYS1pMThuJyksIChpbnN0YW5jZTogSTE4TikgPT4ge1xuICAgICAgY29uc3QgYWxpYXNlcyA9IFsndCcsICdpMThuJ107XG4gICAgICAvLyBhZGQgYWxpYXNlcyBmb3IgJ3QnIGF0dHJpYnV0ZVxuICAgICAgVEN1c3RvbUF0dHJpYnV0ZS5jb25maWd1cmVBbGlhc2VzKGFsaWFzZXMpO1xuXG4gICAgICAvLyByZWdpc3RlciBiYWNrZW5kIHBsdWdpblxuICAgICAgaW5zdGFuY2UuaTE4bmV4dC51c2UoQmFja2VuZCk7XG5cbiAgICAgIC8vIGFkYXB0IG9wdGlvbnMgdG8geW91ciBuZWVkcyAoc2VlIGh0dHA6Ly9pMThuZXh0LmNvbS9kb2NzL29wdGlvbnMvKVxuICAgICAgLy8gbWFrZSBzdXJlIHRvIHJldHVybiB0aGUgcHJvbWlzZSBvZiB0aGUgc2V0dXAgbWV0aG9kLCBpbiBvcmRlciB0byBndWFyYW50ZWUgcHJvcGVyIGxvYWRpbmdcbiAgICAgIHJldHVybiBpbnN0YW5jZS5zZXR1cCh7XG4gICAgICAgIGJhY2tlbmQ6IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0tIGNvbmZpZ3VyZSBiYWNrZW5kIHNldHRpbmdzXG4gICAgICAgICAgbG9hZFBhdGg6ICcuL2Fzc2V0cy9pMThuL2xvY2FsZXMve3tsbmd9fS97e25zfX0uanNvbicsIC8vIDwtLSBYSFIgc2V0dGluZ3MgZm9yIHdoZXJlIHRvIGdldCB0aGUgZmlsZXMgZnJvbVxuICAgICAgICB9LFxuICAgICAgICBhdHRyaWJ1dGVzOiBhbGlhc2VzLFxuICAgICAgICBsbmc6ICdlbicsXG4gICAgICAgIGZhbGxiYWNrTG5nOiAnZW4nLFxuICAgICAgICBkZWJ1ZzogZmFsc2VcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBhdXJlbGlhLmNvbnRhaW5lci5nZXQoQXBwUm91dGVyKTtcbiAgICAgICAgcm91dGVyLnRyYW5zZm9ybVRpdGxlID0gdGl0bGUgPT4gaW5zdGFuY2UudHIodGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50QWdncmVnYXRvciA9IGF1cmVsaWEuY29udGFpbmVyLmdldChFdmVudEFnZ3JlZ2F0b3IpO1xuICAgICAgICBldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKCdpMThuOmxvY2FsZTpjaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICAgIHJvdXRlci51cGRhdGVUaXRsZSgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0aXRsZSB1cGRhdGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgaWYgKGVudmlyb25tZW50LnRlc3RpbmcpIHtcbiAgICBhdXJlbGlhLnVzZS5wbHVnaW4oUExBVEZPUk0ubW9kdWxlTmFtZSgnYXVyZWxpYS10ZXN0aW5nJykpO1xuICB9XG5cbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KFBMQVRGT1JNLm1vZHVsZU5hbWUoJ2FwcCcpKSk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///main\n");

/***/ }),

/***/ "resources/index":
/*!********************************!*\
  !*** ./src/resources/index.ts ***!
  \********************************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"+eM2\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.js */ \"SYky\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nfunction configure(config) {\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzL2luZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9pbmRleC50cz83NDBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uKTogdm9pZCB7XG4gIC8vY29uZmlnLmdsb2JhbFJlc291cmNlcyhbXSk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///resources/index\n");

/***/ }),

/***/ "styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ \"denP\");\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"JPst\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".iconify {\\n  width: 24px;\\n  height: 24px;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./src/styles.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,WAAW;EACX,YAAY;AACd\",\"sourcesContent\":[\".iconify {\\n  width: 24px;\\n  height: 24px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzLmNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzPzhkOTgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaWNvbmlmeSB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pY29uaWZ5IHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styles.css\n");

/***/ })

},[[0,"runtime~app","vendors~253ae210","vendors~556c66f2","vendors~540a8aca","vendors~e302ef32","vendors~50e8d500","vendors~5ea1390f","vendors~ecff2e3d","vendors~9e0f4621","vendors~7274e1de","vendors~0f421c3d","vendors~00cb062a","vendors~f9ca8911"]]]);