(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{It9J:function(t,e,n){"use strict";n.r(e),n.d(e,"UxDialogFooter",(function(){return o}));var i=n("P/zd"),o=function(){function t(t){this.controller=t,this.buttons=[],this.useDefaultButtons=!1}return t.isCancelButton=function(t){return"Cancel"===t},t.prototype.close=function(e){t.isCancelButton(e)?this.controller.cancel(e):this.controller.ok(e)},t.prototype.useDefaultButtonsChanged=function(t){t&&(this.buttons=["Cancel","Ok"])},t.inject=[i.d],t.$view='<template>\n  <slot></slot>\n  <template if.bind="buttons.length > 0">\n    <button type="button"\n      class="btn btn-default"\n      repeat.for="button of buttons"\n      click.trigger="close(button)">\n      ${button}\n    </button>\n  </template>\n</template>',t.$resource={name:"ux-dialog-footer",bindables:["buttons","useDefaultButtons"]},t}()},K1pw:function(t,e,n){"use strict";n.r(e),n.d(e,"UxDialogBody",(function(){return i}));var i=function(){function t(){}return t.$view="<template><slot></slot></template>",t.$resource="ux-dialog-body",t}()},MzFQ:function(t,e,n){"use strict";n.r(e),n.d(e,"NativeDialogRenderer",(function(){return s}));var i=n("70NS"),o=n("3U8n"),r=n("yfWE");var a,s=function(){function t(){}var e;return e=t,t.keyboardEventHandler=function(t){var n="Enter"===(t.code||t.key)||13===t.keyCode?"Enter":void 0;if(n){var i=e.dialogControllers[e.dialogControllers.length-1];if(i&&i.settings.keyboard){var o=i.settings.keyboard;"Enter"===n&&(o===n||Array.isArray(o)&&o.indexOf(n)>-1)&&i.ok()}}},t.trackController=function(t){e.dialogControllers.length||i.b.addEventListener("keyup",e.keyboardEventHandler,!1),e.dialogControllers.push(t)},t.untrackController=function(t){var n=e.dialogControllers.indexOf(t);-1!==n&&e.dialogControllers.splice(n,1),e.dialogControllers.length||i.b.removeEventListener("keyup",e.keyboardEventHandler,!1)},t.prototype.getOwnElements=function(t,e){for(var n=t.querySelectorAll(e),i=[],o=0;o<n.length;o++)n[o].parentElement===t&&i.push(n[o]);return i},t.prototype.attach=function(t){t.settings.restoreFocus&&(this.lastActiveElement=i.b.activeElement);var e=i.b.createElement("div");e.appendChild(this.anchor),this.dialogContainer=i.b.createElement("dialog"),window.dialogPolyfill&&window.dialogPolyfill.registerDialog(this.dialogContainer),this.dialogContainer.appendChild(e);var n=this.getOwnElements(this.host,"dialog").pop();n&&n.parentElement?this.host.insertBefore(this.dialogContainer,n.nextSibling):this.host.insertBefore(this.dialogContainer,this.host.firstChild),t.controller.attached(),this.host.classList.add("ux-dialog-open")},t.prototype.detach=function(t){this.dialogContainer.hasAttribute("open")&&this.dialogContainer.close(),this.host.removeChild(this.dialogContainer),t.controller.detached(),e.dialogControllers.length||this.host.classList.remove("ux-dialog-open"),t.settings.restoreFocus&&t.settings.restoreFocus(this.lastActiveElement)},t.prototype.setAsActive=function(){this.dialogContainer.showModal(),this.dialogContainer.classList.add("active")},t.prototype.setAsInactive=function(){this.dialogContainer.classList.remove("active")},t.prototype.setupEventHandling=function(t){this.stopPropagation=function(t){t._aureliaDialogHostClicked=!0},this.closeDialogClick=function(e){t.settings.overlayDismiss&&!e._aureliaDialogHostClicked&&t.cancel()},this.dialogCancel=function(e){var n=t.settings.keyboard;!0===n||"Escape"===n||Array.isArray(n)&&n.indexOf("Escape")>-1?t.cancel():e.preventDefault()};var e=t.settings.mouseEvent||"click";this.dialogContainer.addEventListener(e,this.closeDialogClick),this.dialogContainer.addEventListener("cancel",this.dialogCancel),this.anchor.addEventListener(e,this.stopPropagation)},t.prototype.clearEventHandling=function(t){var e=t.settings.mouseEvent||"click";this.dialogContainer.removeEventListener(e,this.closeDialogClick),this.dialogContainer.removeEventListener("cancel",this.dialogCancel),this.anchor.removeEventListener(e,this.stopPropagation)},t.prototype.awaitTransition=function(t,e){var n=this;return new Promise((function(i){var o=n,a=Object(r.transitionEvent)();e||!Object(r.hasTransition)(n.dialogContainer)?i():n.dialogContainer.addEventListener(a,(function t(e){e.target===o.dialogContainer&&(o.dialogContainer.removeEventListener(a,t),i())})),t()}))},t.prototype.getDialogContainer=function(){return this.anchor||(this.anchor=i.b.createElement("div"))},t.prototype.showDialog=function(t){var n=this;a||(a=i.b.querySelector("body")),t.settings.host?this.host=t.settings.host:this.host=a;var o=t.settings;return this.attach(t),"function"==typeof o.position&&o.position(this.dialogContainer),e.trackController(t),this.setupEventHandling(t),this.awaitTransition((function(){return n.setAsActive()}),t.settings.ignoreTransitions)},t.prototype.hideDialog=function(t){var n=this;return this.clearEventHandling(t),e.untrackController(t),this.awaitTransition((function(){return n.setAsInactive()}),t.settings.ignoreTransitions).then((function(){n.detach(t)}))},t.dialogControllers=[],t=e=
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a}([Object(o.f)()],t)}()},e1DJ:function(t,e,n){"use strict";n.r(e),n.d(e,"AttachFocus",(function(){return o}));var i=n("70NS"),o=function(){function t(t){this.element=t,this.value=!0}return t.inject=function(){return[i.b.Element]},t.prototype.attached=function(){(""===this.value||this.value&&"false"!==this.value)&&this.element.focus()},t.$resource={type:"attribute",name:"attach-focus"},t}()},em5G:function(t,e,n){"use strict";n.r(e);e.default="ux-dialog-overlay{bottom:0;left:0;position:fixed;top:0;right:0;opacity:0}ux-dialog-overlay.active{opacity:1}ux-dialog-container{display:block;transition:opacity .2s linear;opacity:0;overflow-x:hidden;overflow-y:auto;position:fixed;top:0;right:0;bottom:0;left:0;-webkit-overflow-scrolling:touch}ux-dialog-container.active{opacity:1}ux-dialog-container>div{padding:30px}ux-dialog-container>div>div{width:100%;display:block;min-width:300px;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto}ux-dialog-container,ux-dialog-container>div,ux-dialog-container>div>div{outline:0}ux-dialog{width:100%;display:table;box-shadow:0 5px 15px rgba(0,0,0,.5);border:1px solid rgba(0,0,0,.2);border-radius:5px;padding:3;min-width:300px;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto;border-image-source:none;border-image-slice:100%;border-image-width:1;border-image-outset:0;border-image-repeat:initial;background:#fff}ux-dialog>ux-dialog-header{display:block;padding:16px;border-bottom:1px solid #e5e5e5}ux-dialog>ux-dialog-header>button{float:right;border:none;display:block;width:32px;height:32px;background:none;font-size:22px;line-height:16px;margin:-14px -16px 0 0;padding:0;cursor:pointer}ux-dialog>ux-dialog-body{display:block;padding:16px}ux-dialog>ux-dialog-footer{display:block;padding:6px;border-top:1px solid #e5e5e5;text-align:right}ux-dialog>ux-dialog-footer button{color:#333;background-color:#fff;padding:6px 12px;font-size:14px;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid #ccc;border-radius:4px;margin:5px 0 5px 5px}ux-dialog>ux-dialog-footer button:disabled{cursor:default;opacity:.45}ux-dialog>ux-dialog-footer button:hover:enabled{color:#333;background-color:#e6e6e6;border-color:#adadad}.ux-dialog-open{overflow:hidden}"},kAWR:function(t,e,n){"use strict";n.r(e),n.d(e,"UxDialogHeader",(function(){return o}));var i=n("P/zd"),o=function(){function t(t){this.controller=t}return t.prototype.bind=function(){"boolean"!=typeof this.showCloseButton&&(this.showCloseButton=!this.controller.settings.lock)},t.inject=[i.d],t.$view='<template>\n  <button\n    type="button"\n    class="dialog-close"\n    aria-label="Close"\n    if.bind="showCloseButton"\n    click.trigger="controller.cancel()">\n    <span aria-hidden="true">&times;</span>\n  </button>\n\n  <div class="dialog-header-content">\n    <slot></slot>\n  </div>\n</template>',t.$resource={name:"ux-dialog-header",bindables:["showCloseButton"]},t}()},mbV6:function(t,e,n){"use strict";n.r(e),n.d(e,"UxDialog",(function(){return i}));var i=function(){function t(){}return t.$view="<template><slot></slot></template>",t.$resource="ux-dialog",t}()},yfWE:function(t,e,n){"use strict";n.r(e),n.d(e,"DialogRenderer",(function(){return g})),n.d(e,"UxDialogRenderer",(function(){return g})),n.d(e,"hasTransition",(function(){return u})),n.d(e,"transitionEvent",(function(){return d}));var i,o,r,a,s,l=n("70NS"),c=n("3U8n"),d=function(){if(i)return i;var t=l.b.createElement("fakeelement"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in e)if(void 0!==t.style[n])return i=e[n];return""},u=(a=["webkitTransitionDuration","oTransitionDuration"],function(t){return o||(o=l.b.createElement("fakeelement"),r="transitionDuration"in o.style?"transitionDuration":a.find((function(t){return t in o.style}))),!!r&&!!l.b.getComputedStyle(t)[r].split(",").find((function(t){return!!parseFloat(t)}))});var g=function(){function t(){}return t.keyboardEventHandler=function(e){var n=function(t){return"Escape"===(t.code||t.key)||27===t.keyCode?"Escape":"Enter"===(t.code||t.key)||13===t.keyCode?"Enter":void 0}(e);if(n){var i=t.dialogControllers[t.dialogControllers.length-1];if(i&&i.settings.keyboard){var o=i.settings.keyboard;"Escape"===n&&(!0===o||o===n||Array.isArray(o)&&o.indexOf(n)>-1)?i.cancel():"Enter"===n&&(o===n||Array.isArray(o)&&o.indexOf(n)>-1)&&i.ok()}}},t.trackController=function(e){var n=t.dialogControllers;n.length||l.b.addEventListener(e.settings.keyEvent||"keyup",t.keyboardEventHandler,!1),n.push(e)},t.untrackController=function(e){var n=t.dialogControllers,i=n.indexOf(e);-1!==i&&n.splice(i,1),n.length||l.b.removeEventListener(e.settings.keyEvent||"keyup",t.keyboardEventHandler,!1)},t.prototype.getOwnElements=function(t,e){for(var n=t.querySelectorAll(e),i=[],o=0;o<n.length;o++)n[o].parentElement===t&&i.push(n[o]);return i},t.prototype.attach=function(t){t.settings.restoreFocus&&(this.lastActiveElement=l.b.activeElement);var e=l.b.createElement("div");e.appendChild(this.anchor);var n=this.dialogContainer=l.b.createElement("ux-dialog-container");n.appendChild(e);var i=this.dialogOverlay=l.b.createElement("ux-dialog-overlay"),o="number"==typeof t.settings.startingZIndex?t.settings.startingZIndex+"":"auto";i.style.zIndex=o,n.style.zIndex=o;var r=this.host,a=this.getOwnElements(r,"ux-dialog-container").pop();a&&a.parentElement?(r.insertBefore(n,a.nextSibling),r.insertBefore(i,a.nextSibling)):(r.insertBefore(n,r.firstChild),r.insertBefore(i,r.firstChild)),t.controller.attached(),r.classList.add("ux-dialog-open")},t.prototype.detach=function(e){var n=this.host;n.removeChild(this.dialogOverlay),n.removeChild(this.dialogContainer),e.controller.detached(),t.dialogControllers.length||n.classList.remove("ux-dialog-open"),e.settings.restoreFocus&&e.settings.restoreFocus(this.lastActiveElement)},t.prototype.setAsActive=function(){this.dialogOverlay.classList.add("active"),this.dialogContainer.classList.add("active")},t.prototype.setAsInactive=function(){this.dialogOverlay.classList.remove("active"),this.dialogContainer.classList.remove("active")},t.prototype.setupEventHandling=function(t){this.stopPropagation=function(t){t._aureliaDialogHostClicked=!0},this.closeDialogClick=function(e){t.settings.overlayDismiss&&!e._aureliaDialogHostClicked&&t.cancel()};var e=t.settings.mouseEvent||"click";this.dialogContainer.addEventListener(e,this.closeDialogClick),this.anchor.addEventListener(e,this.stopPropagation)},t.prototype.clearEventHandling=function(t){var e=t.settings.mouseEvent||"click";this.dialogContainer.removeEventListener(e,this.closeDialogClick),this.anchor.removeEventListener(e,this.stopPropagation)},t.prototype.centerDialog=function(){var t=this.dialogContainer.children[0],e=Math.max(l.b.querySelectorAll("html")[0].clientHeight,window.innerHeight||0);t.style.marginTop=Math.max((e-t.offsetHeight)/2,30)+"px",t.style.marginBottom=Math.max((e-t.offsetHeight)/2,30)+"px"},t.prototype.awaitTransition=function(t,e){var n=this;return new Promise((function(i){var o=n,r=d();e||!u(n.dialogContainer)?i():n.dialogContainer.addEventListener(r,(function t(e){e.target===o.dialogContainer&&(o.dialogContainer.removeEventListener(r,t),i())})),t()}))},t.prototype.getDialogContainer=function(){return this.anchor||(this.anchor=l.b.createElement("div"))},t.prototype.showDialog=function(e){var n=this;s||(s=l.b.querySelector("body")),e.settings.host?this.host=e.settings.host:this.host=s;var i=e.settings;return this.attach(e),"function"==typeof i.position?i.position(this.dialogContainer,this.dialogOverlay):i.centerHorizontalOnly||this.centerDialog(),t.trackController(e),this.setupEventHandling(e),this.awaitTransition((function(){return n.setAsActive()}),e.settings.ignoreTransitions)},t.prototype.hideDialog=function(e){var n=this;return this.clearEventHandling(e),t.untrackController(e),this.awaitTransition((function(){return n.setAsInactive()}),e.settings.ignoreTransitions).then((function(){n.detach(e)}))},t.dialogControllers=[],t}();Object(c.f)()(g)}}]);
//# sourceMappingURL=vendors.async~3e799143.21e8cab9122c6e660da8.bundle.map