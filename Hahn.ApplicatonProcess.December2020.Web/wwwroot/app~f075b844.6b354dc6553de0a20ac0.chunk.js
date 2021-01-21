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

/***/ "app":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var aurelia_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-i18n */ \"aurelia-i18n\");\n\r\nvar App = (function () {\r\n    function App(i18n) {\r\n        this.i18n = i18n;\r\n        this.message = 'Hello World!';\r\n        this.i18n = i18n;\r\n        this.i18n\r\n            .setLocale('en')\r\n            .then(function () {\r\n            console.log('locale is set');\r\n        });\r\n    }\r\n    App.inject = [aurelia_i18n__WEBPACK_IMPORTED_MODULE_0__[\"I18N\"]];\r\n    return App;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cz8wNjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEkxOE4gfSBmcm9tICdhdXJlbGlhLWkxOG4nO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgc3RhdGljIGluamVjdCA9IFtJMThOXTtcbiAgcHVibGljIG1lc3NhZ2UgPSAnSGVsbG8gV29ybGQhJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IEkxOE4pIHtcbiAgICB0aGlzLmkxOG4gPSBpMThuO1xuICAgIHRoaXMuaTE4blxuICAgICAgLnNldExvY2FsZSgnZW4nKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnbG9jYWxlIGlzIHNldCcpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBQUE7QUFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFXQTtBQUFBO0FBWkE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///app\n");

/***/ }),

/***/ "app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Module\nvar code = \"<template>\\n  <require from=\\\"./components/layout/main/layout-main\\\"></require>\\n  <layout-main></layout-main>\\n\\n\\n  <h1>${message}</h1>\\n  <button class=\\\"btn btn-primary\\\">${ 'home' & t }</button>\\n</template>\\n\";\n// Exports\nmodule.exports = code;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmh0bWw/MmY0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8dGVtcGxhdGU+XFxuICA8cmVxdWlyZSBmcm9tPVxcXCIuL2NvbXBvbmVudHMvbGF5b3V0L21haW4vbGF5b3V0LW1haW5cXFwiPjwvcmVxdWlyZT5cXG4gIDxsYXlvdXQtbWFpbj48L2xheW91dC1tYWluPlxcblxcblxcbiAgPGgxPiR7bWVzc2FnZX08L2gxPlxcbiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj4keyAnaG9tZScgJiB0IH08L2J1dHRvbj5cXG48L3RlbXBsYXRlPlxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///app.html\n");

/***/ }),

/***/ "components/layout/header/layout-header":
/*!*******************************************************!*\
  !*** ./src/components/layout/header/layout-header.ts ***!
  \*******************************************************/
/*! exports provided: LayoutHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayoutHeader\", function() { return LayoutHeader; });\n/* harmony import */ var aurelia_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-i18n */ \"aurelia-i18n\");\n\r\nvar LayoutHeader = (function () {\r\n    function LayoutHeader(i18n) {\r\n        this.i18n = i18n;\r\n    }\r\n    LayoutHeader.prototype.changeLang = function (val) {\r\n        this.i18n.setLocale(val)\r\n            .then(function () {\r\n        });\r\n    };\r\n    LayoutHeader.inject = [aurelia_i18n__WEBPACK_IMPORTED_MODULE_0__[\"I18N\"]];\r\n    return LayoutHeader;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2xheW91dC1oZWFkZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2xheW91dC1oZWFkZXIudHM/YTYyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJMThOIH0gZnJvbSBcImF1cmVsaWEtaTE4blwiO1xuXG5leHBvcnQgY2xhc3MgTGF5b3V0SGVhZGVyIHtcblxuICBzdGF0aWMgaW5qZWN0ID0gW0kxOE5dO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IEkxOE4pIHtcblxuICB9XG5cbiAgcHVibGljIGNoYW5nZUxhbmcodmFsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4uc2V0TG9jYWxlKHZhbClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgLy9cbiAgICAgIH0pO1xuICB9XG5cblxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVZBO0FBYUE7QUFBQTtBQWZBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///components/layout/header/layout-header\n");

/***/ }),

/***/ "components/layout/header/layout-header.html":
/*!*********************************************************!*\
  !*** ./src/components/layout/header/layout-header.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<template>\\n  <nav class=\\\"navbar navbar-expand-lg navbar-light bg-light\\\">\\n    <a class=\\\"navbar-brand\\\" href=\\\"#\\\">Navbar</a>\\n    <button class=\\\"navbar-toggler\\\" type=\\\"button\\\" data-toggle=\\\"collapse\\\" data-target=\\\"#navbarNavAltMarkup\\\" aria-controls=\\\"navbarNavAltMarkup\\\" aria-expanded=\\\"false\\\" aria-label=\\\"Toggle navigation\\\">\\n      <span class=\\\"navbar-toggler-icon\\\"></span>\\n    </button>\\n    <div class=\\\"collapse navbar-collapse\\\" id=\\\"navbarNavAltMarkup\\\">\\n      <div class=\\\"navbar-nav\\\">\\n        <a class=\\\"nav-item nav-link active\\\" href=\\\"#\\\">Home <span class=\\\"sr-only\\\">(current)</span></a>\\n        <li class=\\\"nav-item dropdown\\\">\\n          <a class=\\\"nav-link dropdown-toggle\\\" href=\\\"#\\\" id=\\\"navbarDropdown\\\" role=\\\"button\\\" data-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">\\n            Lang\\n          </a>\\n          <div class=\\\"dropdown-menu\\\" aria-labelledby=\\\"navbarDropdown\\\">\\n            <a class=\\\"dropdown-item\\\" href=\\\"#\\\" onclick.call=\\\"changeLang('en')\\\">En</a>\\n            <a class=\\\"dropdown-item\\\" href=\\\"#\\\" onclick.call=\\\"changeLang('tr')\\\">Tr</a>\\n          </div>\\n        </li>\\n        <a class=\\\"nav-item nav-link\\\" href=\\\"/swagger\\\" target=\\\"_blank\\\">Swagger UI</a>\\n      </div>\\n    </div>\\n  </nav>\\n</template>\\n\";\n// Exports\nmodule.exports = code;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2xheW91dC1oZWFkZXIuaHRtbC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvbGF5b3V0LWhlYWRlci5odG1sP2MxNmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPHRlbXBsYXRlPlxcbiAgPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XFxcIj5cXG4gICAgPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCIgaHJlZj1cXFwiI1xcXCI+TmF2YmFyPC9hPlxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlclxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGRhdGEtdGFyZ2V0PVxcXCIjbmF2YmFyTmF2QWx0TWFya3VwXFxcIiBhcmlhLWNvbnRyb2xzPVxcXCJuYXZiYXJOYXZBbHRNYXJrdXBcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIiBhcmlhLWxhYmVsPVxcXCJUb2dnbGUgbmF2aWdhdGlvblxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcIm5hdmJhci10b2dnbGVyLWljb25cXFwiPjwvc3Bhbj5cXG4gICAgPC9idXR0b24+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVxcXCIgaWQ9XFxcIm5hdmJhck5hdkFsdE1hcmt1cFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLW5hdlxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwibmF2LWl0ZW0gbmF2LWxpbmsgYWN0aXZlXFxcIiBocmVmPVxcXCIjXFxcIj5Ib21lIDxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj4oY3VycmVudCk8L3NwYW4+PC9hPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbSBkcm9wZG93blxcXCI+XFxuICAgICAgICAgIDxhIGNsYXNzPVxcXCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcXFwiIGhyZWY9XFxcIiNcXFwiIGlkPVxcXCJuYXZiYXJEcm9wZG93blxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtaGFzcG9wdXA9XFxcInRydWVcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXG4gICAgICAgICAgICBMYW5nXFxuICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJuYXZiYXJEcm9wZG93blxcXCI+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIGhyZWY9XFxcIiNcXFwiIG9uY2xpY2suY2FsbD1cXFwiY2hhbmdlTGFuZygnZW4nKVxcXCI+RW48L2E+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIGhyZWY9XFxcIiNcXFwiIG9uY2xpY2suY2FsbD1cXFwiY2hhbmdlTGFuZygndHInKVxcXCI+VHI8L2E+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9saT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJuYXYtaXRlbSBuYXYtbGlua1xcXCIgaHJlZj1cXFwiL3N3YWdnZXJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5Td2FnZ2VyIFVJPC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvbmF2PlxcbjwvdGVtcGxhdGU+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///components/layout/header/layout-header.html\n");

/***/ }),

/***/ "components/layout/main/layout-main":
/*!***************************************************!*\
  !*** ./src/components/layout/main/layout-main.ts ***!
  \***************************************************/
/*! exports provided: LayoutMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayoutMain\", function() { return LayoutMain; });\nvar LayoutMain = (function () {\r\n    function LayoutMain() {\r\n    }\r\n    return LayoutMain;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9sYXlvdXQvbWFpbi9sYXlvdXQtbWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9tYWluL2xheW91dC1tYWluLnRzP2UxYTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIExheW91dE1haW57XG5cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///components/layout/main/layout-main\n");

/***/ }),

/***/ "components/layout/main/layout-main.html":
/*!*****************************************************!*\
  !*** ./src/components/layout/main/layout-main.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Module\nvar code = \"<template>\\n  <require from=\\\"../header/layout-header\\\"></require>\\n  <layout-header></layout-header>\\n  this is layout main\\n</template>\\n\";\n// Exports\nmodule.exports = code;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9sYXlvdXQvbWFpbi9sYXlvdXQtbWFpbi5odG1sLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L21haW4vbGF5b3V0LW1haW4uaHRtbD8wNDUyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjx0ZW1wbGF0ZT5cXG4gIDxyZXF1aXJlIGZyb209XFxcIi4uL2hlYWRlci9sYXlvdXQtaGVhZGVyXFxcIj48L3JlcXVpcmU+XFxuICA8bGF5b3V0LWhlYWRlcj48L2xheW91dC1oZWFkZXI+XFxuICB0aGlzIGlzIGxheW91dCBtYWluXFxuPC90ZW1wbGF0ZT5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///components/layout/main/layout-main.html\n");

/***/ }),

/***/ "main":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\n/* harmony import */ var _config_environment_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/environment.json */ \"BEPO\");\nvar _config_environment_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/environment.json */ \"BEPO\", 1);\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ \"70NS\");\n/* harmony import */ var aurelia_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-i18n */ \"aurelia-i18n\");\n/* harmony import */ var i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next-xhr-backend */ \"/oNK\");\n\r\n\r\n\r\n\r\nfunction configure(aurelia) {\r\n    aurelia.use\r\n        .standardConfiguration()\r\n        .feature('resources/index');\r\n    aurelia.use\r\n        .developmentLogging(_config_environment_json__WEBPACK_IMPORTED_MODULE_0__[\"debug\"] ? 'debug' : 'warn')\r\n        .plugin('aurelia-i18n', function (instance) {\r\n        var aliases = ['t', 'i18n'];\r\n        aurelia_i18n__WEBPACK_IMPORTED_MODULE_2__[\"TCustomAttribute\"].configureAliases(aliases);\r\n        instance.i18next.use(i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n        return instance.setup({\r\n            backend: {\r\n                loadPath: './assets/i18n/locales/{{lng}}/{{ns}}.json',\r\n            },\r\n            attributes: aliases,\r\n            lng: 'en',\r\n            debug: false\r\n        });\r\n    });\r\n    if (_config_environment_json__WEBPACK_IMPORTED_MODULE_0__[\"testing\"]) {\r\n        aurelia.use.plugin('aurelia-testing');\r\n    }\r\n    aurelia.start().then(function () { return aurelia.setRoot('app'); });\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLnRzP2NkNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVyZWxpYSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCAqIGFzIGVudmlyb25tZW50IGZyb20gJy4uL2NvbmZpZy9lbnZpcm9ubWVudC5qc29uJztcbmltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5pbXBvcnQgeyBJMThOLCBUQ3VzdG9tQXR0cmlidXRlIH0gZnJvbSAnYXVyZWxpYS1pMThuJztcbmltcG9ydCBCYWNrZW5kIGZyb20gJ2kxOG5leHQteGhyLWJhY2tlbmQnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWE6IEF1cmVsaWEpOiB2b2lkIHtcbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAuZmVhdHVyZShQTEFURk9STS5tb2R1bGVOYW1lKCdyZXNvdXJjZXMvaW5kZXgnKSk7XG5cbiAgYXVyZWxpYS51c2VcbiAgICAuZGV2ZWxvcG1lbnRMb2dnaW5nKGVudmlyb25tZW50LmRlYnVnID8gJ2RlYnVnJyA6ICd3YXJuJylcbiAgICAucGx1Z2luKFBMQVRGT1JNLm1vZHVsZU5hbWUoJ2F1cmVsaWEtaTE4bicpLCAoaW5zdGFuY2UpID0+IHtcbiAgICAgIGNvbnN0IGFsaWFzZXMgPSBbJ3QnLCAnaTE4biddO1xuICAgICAgLy8gYWRkIGFsaWFzZXMgZm9yICd0JyBhdHRyaWJ1dGVcbiAgICAgIFRDdXN0b21BdHRyaWJ1dGUuY29uZmlndXJlQWxpYXNlcyhhbGlhc2VzKTtcblxuICAgICAgLy8gcmVnaXN0ZXIgYmFja2VuZCBwbHVnaW5cbiAgICAgIGluc3RhbmNlLmkxOG5leHQudXNlKEJhY2tlbmQpO1xuXG4gICAgICAvLyBhZGFwdCBvcHRpb25zIHRvIHlvdXIgbmVlZHMgKHNlZSBodHRwOi8vaTE4bmV4dC5jb20vZG9jcy9vcHRpb25zLylcbiAgICAgIC8vIG1ha2Ugc3VyZSB0byByZXR1cm4gdGhlIHByb21pc2Ugb2YgdGhlIHNldHVwIG1ldGhvZCwgaW4gb3JkZXIgdG8gZ3VhcmFudGVlIHByb3BlciBsb2FkaW5nXG4gICAgICByZXR1cm4gaW5zdGFuY2Uuc2V0dXAoe1xuICAgICAgICBiYWNrZW5kOiB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtLSBjb25maWd1cmUgYmFja2VuZCBzZXR0aW5nc1xuICAgICAgICAgIGxvYWRQYXRoOiAnLi9hc3NldHMvaTE4bi9sb2NhbGVzL3t7bG5nfX0ve3tuc319Lmpzb24nLCAvLyA8LS0gWEhSIHNldHRpbmdzIGZvciB3aGVyZSB0byBnZXQgdGhlIGZpbGVzIGZyb21cbiAgICAgICAgfSxcbiAgICAgICAgYXR0cmlidXRlczogYWxpYXNlcyxcbiAgICAgICAgbG5nOiAnZW4nLFxuICAgICAgICBkZWJ1ZzogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKFBMQVRGT1JNLm1vZHVsZU5hbWUoJ2F1cmVsaWEtdGVzdGluZycpKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdChQTEFURk9STS5tb2R1bGVOYW1lKCdhcHAnKSkpO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///main\n");

/***/ }),

/***/ "resources/index":
/*!********************************!*\
  !*** ./src/resources/index.ts ***!
  \********************************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"+eM2\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.js */ \"SYky\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nfunction configure(config) {\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzL2luZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9pbmRleC50cz83NDBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uKTogdm9pZCB7XG4gIC8vY29uZmlnLmdsb2JhbFJlc291cmNlcyhbXSk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///resources/index\n");

/***/ })

},[[0,"runtime~app","vendors~253ae210","vendors~556c66f2","vendors~540a8aca","vendors~e302ef32","vendors~50e8d500","vendors~5ea1390f","vendors~ecff2e3d","vendors~9e0f4621","vendors~0f421c3d","vendors~f0dd280a","vendors~7d359b94","vendors~00cb062a"]]]);