(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{100:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(23),c={title:"scrollEffect()",hash:"scrollEffect"};function l(){return r.a.createElement(i.e,{meta:c},r.a.createElement(i.d,null,"import { curi } from '@curi/router';\nimport scroll from '@curi/side-effect-scroll';\n\nconst router = curi(history, routes, {\n  sideEffects: [scroll()]\n});"))}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,f(t).apply(this,arguments))}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r.a.PureComponent),n=t,(o=[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,null,r.a.createElement("p",null,"When Curi is running in a browser, it relies on the"," ",r.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API"},"History API")," ","to change locations, but this does not trigger scrolling to the top of the page when you navigate. This package provides a side effect function that will scroll to the top of the page whenever those functions are used for navigation."),r.a.createElement("p",null,"Other types of navigation, such as clicking the browser's back and forward buttons, will rely on the browser to correctly restore the scroll position.")),r.a.createElement(i.a,null,r.a.createElement(l,null)))}}])&&u(n.prototype,o),c&&u(n,c),t}(),b=[{title:"Installation",hash:"installation"},{title:"About",hash:"about"},{title:"API",hash:"API",children:[c]}];n.d(t,"component",function(){return h}),n.d(t,"contents",function(){return b})}}]);