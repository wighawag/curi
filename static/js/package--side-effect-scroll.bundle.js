(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{48:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var r=n(0),o=n.n(r),i=n(27);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,u(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.b,null,o.a.createElement(i.e,null,o.a.createElement("p",null,"When Curi is running in a browser, it relies on the"," ",o.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API"},"History API")," ","to change locations, but this does not trigger scrolling to the top of the page when you navigate. This package provides a side effect function that will scroll to the top of the page whenever those functions are used for navigation."),o.a.createElement("p",null,"Other types of navigation, such as clicking the browser's back and forward buttons, will rely on the browser to correctly restore the scroll position."))),o.a.createElement(i.a,null,o.a.createElement(i.i,{tag:"h3",title:"scrollEffect",id:"scrollEffect"},o.a.createElement(i.d,null,"import { curi } from '@curi/router';\nimport scroll from '@curi/side-effect-scroll';\n\nconst router = curi(history, routes, {\n  sideEffects: [scroll()]\n});"))))}}])&&l(n.prototype,r),c&&l(n,c),t}()}}]);