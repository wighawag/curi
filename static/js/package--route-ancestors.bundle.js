(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{45:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var r=n(0),o=n.n(r),a=n(28);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,i(t).apply(this,arguments))}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.b,null,o.a.createElement(a.e,null,o.a.createElement("p",null,"The ",o.a.createElement(a.f,null,"@curi/route-ancestors")," route interaction returns the names of ancestor routes, which can be useful for generating breadcrumb links."))),o.a.createElement(a.a,null,o.a.createElement(a.i,{tag:"h3",title:"ancestors",id:"ancestors"},o.a.createElement(a.e,null,o.a.createElement("p",null,"A function to create the ancestors route interaction. When you create your router, the result is passed to the router using the `route` option, which will add an ",o.a.createElement(a.f,null,"ancestors()")," ","function to the router's route interactions."),o.a.createElement("p",null,'The interaction returns the name of an ancestor route a given level "up" from the route. If no level is provided, then it will return an array of the names of all ancestor routes (from most ancient to parent).')),o.a.createElement(a.d,null,"import { curi } from '@curi/router';\nimport ancestors from '@curi/route-ancestors';\n\nconst routes = prepareRoutes([\n  {\n    name: 'Grandparent', path: 'g',\n    children: [\n      {\n        name: 'Parent', path: 'p',\n        children: [\n          { name: 'Child', path: 'c' }\n        ]\n      }\n    ]\n  }\n]);\n\nconst router = curi(history,routes, {\n  route: [ancestors()]\n});"),o.a.createElement(a.i,{title:"Arguments",id:"arguments",tag:"h3"},o.a.createElement(a.e,null,o.a.createElement(a.h,null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"argument"),o.a.createElement("th",null,"description"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"name"),o.a.createElement("td",null,"the name of the route to get ancestors of")),o.a.createElement("tr",null,o.a.createElement("td",null,"level"),o.a.createElement("td",null,'a number of levels "up" to get the ancestor name of. If this argument is not provided, the interaction will return an array of all ancestor routes names (from most ancient to parent).'))))),o.a.createElement(a.d,null,"const parent = router.route.ancestors('Child', 1);\n// parent === 'Parent'\nconst ancestors = router.route.ancestors('Child');\n// ancestors === ['Grandparent', 'Parent']")))))}}])&&u(n.prototype,r),l&&u(n,l),t}()}}]);