(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{104:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(16),l=n(2),c=n(8);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){b(e,t,n[t])})}return e}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];return r=this,a=(e=p(t)).call.apply(e,[this].concat(l)),n=!a||"object"!==u(a)&&"function"!=typeof a?g(r):a,b(g(g(n)),"goToVersion",function(e){n.props.router.navigate({name:"Package",params:s({},n.props.params,{version:e.target.value})})}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.versions,n=e.major;return a.a.createElement("select",{value:n,onChange:this.goToVersion},Object.keys(t).map(function(e){return a.a.createElement("option",{key:e,value:e},"v",t[e])}))}}])&&m(n.prototype,r),o&&m(n,o),t}(),y=function(e){return a.a.createElement(c.b,null,function(t){var n=t.router;return a.a.createElement(v,i({},e,{router:n}))})};function h(e){var t=e.versions,n=e.major,r=e.params;return Object.keys(t).length>1?a.a.createElement(y,{versions:t,major:n,params:r}):a.a.createElement("div",null,"v",t[n])}var d=n(11),E=n(29),O=n(4);function j(e){var t=e.name;return a.a.createElement(a.a.Fragment,null,a.a.createElement(O.b,null,a.a.createElement("p",null,"The package can be installed through ",a.a.createElement(d.b,null,"npm")," (you need to have Node & NPM installed).")),a.a.createElement(O.a,{lang:"bash"},"npm install @curi/".concat(t)))}var w=function(e){var t=e.name,n=e.version,r=e.globalName;return a.a.createElement(O.b,null,a.a.createElement("p",null,"Prefer inline scripts? A full (",a.a.createElement(d.b,null,".umd.js"),") and minified (",a.a.createElement(d.b,null,".min.js"),") script is available for every version through"," ",a.a.createElement("a",{href:"https://unpkg.com/@curi/".concat(t,"@").concat(n,"/dist/")},"Unpkg"),". You can access the package's exports through"," ",a.a.createElement(d.b,null,"window.",r),"."))};function k(e){var t=e.name,n=e.version,r=e.globalName,o=e.script;return a.a.createElement(E.a,{title:"Installation",id:"installation"},a.a.createElement(j,{name:t}),o?a.a.createElement(w,{name:t,version:n,globalName:r}):null)}function P(e){var t=e.name,n=e.dir;return a.a.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/packages/".concat(n?n+"/":"").concat(t)},a.a.createElement("img",{style:{height:16,marginRight:5},src:"/static/img/github-logo.png",alt:"GitHub logo"}),"GitHub Repo")}function N(e){var t=e.name;return a.a.createElement("a",{href:"https://npmjs.com/package/@curi/".concat(t)},a.a.createElement("img",{style:{height:16,marginRight:5},src:"/static/img/npm-logo.png",alt:"NPM logo"}),"NPM Package")}var x=Object(l.a)("div",{target:"e1yyl7510",label:"StyledPackageInfo"})({name:"1tgs534",styles:"display:flex;flex-flow:column nowrap;align-items:flex-start;> *{margin-right:5px;margin-bottom:5px;}"});function S(e){return 0===e.indexOf("route-")?"interactions":0===e.indexOf("side-effect-")?"side-effects":void 0}function _(e){var t=e.name,n=e.params,r=e.versions,o=e.latest,l=e.globalName,c=e.children,i=e.script,u=void 0===i||i;if(void 0!==t){var s=void 0!==n.version?n.version:o,m=r[s];return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"@curi/",t),a.a.createElement(x,null,a.a.createElement(h,{major:s,versions:r,params:n}),a.a.createElement(P,{name:t,dir:S(t)}),a.a.createElement(N,{name:t})),a.a.createElement(k,{name:t,version:m,globalName:l,script:u}),c||null)}return c}function T(e){var t=e.response,n=t.data.content;return a.a.createElement(o.a,null,a.a.createElement(_,{name:t.data.name,params:t.params,versions:t.data.versions,latest:t.data.latest,globalName:t.data.globalName,script:t.data.script},a.a.createElement(n,null)))}n.d(t,"default",function(){return T})}}]);