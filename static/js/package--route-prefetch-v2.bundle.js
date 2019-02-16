(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{92:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(20),o=n(3),u={title:"Arguments",hash:"arguments"},c={title:"prefetch()",hash:"prefetch",children:[u]};function i(){return a.a.createElement(l.e,{meta:c},a.a.createElement("p",null,"A function to create the prefetch route interaction. When you create your router, the result is passed to the router using the `route` option, which will add a ",a.a.createElement(l.f,null,"prefetch()")," function to the router's route interactions."),a.a.createElement(l.d,null,"import { curi } from '@curi/router';\nimport prefetch from '@curi/route-prefetch';\n\nconst router = curi(history, routes, {\n  route: [prefetch()]\n});\n\nrouter.route.prefetch(\"Some Route\");"),a.a.createElement(l.e,{meta:u,tag:"h3"},a.a.createElement(l.e,{tag:"h4",meta:{title:"name",hash:"name"}},a.a.createElement("p",null,"The name of the route to prefetch.")),a.a.createElement(l.e,{tag:"h4",meta:{title:"optional",hash:"optional"}},a.a.createElement("p",null,"A route's resolve function is called with two arguments: the"," ",a.a.createElement(l.f,null,"match")," object for the matched route and an"," ",a.a.createElement(o.a,{name:"Package",params:{package:"router",version:"v2"},hash:"router-external"},a.a.createElement(l.f,null,"external")),"value. You can provide filler values for these with the"," ",a.a.createElement(l.f,null,"optional")," object argument."),a.a.createElement(l.d,null,'const router = curi(history, routes, {\n  external\n});\n\nrouter.route.prefetch("Some Route", {\n  match: { params: {...} },\n  external: router.external\n});'),a.a.createElement(l.e,{tag:"h5",meta:{title:"match",hash:"match"}},a.a.createElement("p",null,'An object of "match" properties for the ',a.a.createElement(l.f,null,"resolve")," ","function. The possible properties are ",a.a.createElement(l.f,null,"name"),","," ",a.a.createElement(l.f,null,"params"),", ",a.a.createElement(l.f,null,"location"),", and ",a.a.createElement(l.f,null,"partials"),".")),a.a.createElement(l.e,{tag:"h5",meta:{title:"external",hash:"external"}},a.a.createElement("p",null,"Any external values passed to the ",a.a.createElement(l.f,null,"resolve")," function."),a.a.createElement("p",null,"To access the ",a.a.createElement(l.f,null,"external")," values set on the router when it was created, you can use ",a.a.createElement(l.f,null,"router.external"),"."),a.a.createElement(l.d,null,'const router = curi(history, routes, {\n  external: {...}\n});\n\nrouter.route.prefetch(\n  "Some Route",\n  { external: router.external }\n);'))),a.a.createElement(l.g,null,a.a.createElement("p",null,"This route interaction will only register routes that have a"," ",a.a.createElement(l.f,null,"resolve")," function. If you try calling this for any routes without a ",a.a.createElement(l.f,null,"resolve")," function, ",a.a.createElement(l.f,null,"prefetch()")," will resolve an object with an ",a.a.createElement(l.f,null,"error")," property and a"," ",a.a.createElement(l.f,null,"null")," ",a.a.createElement(l.f,null,"resolved")," property."))))}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,m(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a.a.PureComponent),n=t,(r=[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.b,null,a.a.createElement("p",null,"The prefetch route interaction can be used fetch data for a route prior to navigating. The interaction will call a route's"," ",a.a.createElement(l.f,null,"resolve")," functions (if they exist on the route)."),a.a.createElement("p",null,"Prefetching data means results in faster renders after navigation because you don't have to wait for the data to load.")),a.a.createElement(l.h,null,a.a.createElement(l.g,null,a.a.createElement("p",null,"Prefetching ",a.a.createElement(l.f,null,"resolve")," function calls is only beneficial if you cache the results because the function will be re-called when the user navigates to that route. Functions wrapped by the"," ",a.a.createElement(l.f,null,"once()")," wrapper (from ",a.a.createElement(l.f,null,"@curi/helpers"),") will automatically re-use the results from their first call."))),a.a.createElement(l.a,null,a.a.createElement(i,null)))}}])&&f(n.prototype,r),o&&f(n,o),t}(),y=[{title:"Installation",hash:"installation"},{title:"About",hash:"about"},{title:"API",hash:"API",children:[c]}];n.d(t,"component",function(){return E}),n.d(t,"contents",function(){return y})}}]);