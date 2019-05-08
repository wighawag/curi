(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),o={title:"Arguments",hash:"arguments"},u={title:"pathname",hash:"pathname"};function s(){return r.a.createElement(l.e,{meta:u},r.a.createElement("p",null,"An interaction function to generate a pathname string for a route."),r.a.createElement("p",null,"If the route requires an params, they should be provided as the second argument to the function call."),r.a.createElement(l.d,null,'import { pathname } from "@curi/router";\n\nconst routes = prepareRoutes([\n  {\n    name: "Home",\n    path: ""\n  },\n  {\n    name: "User",\n    path: "u/:id",\n  }\n]);\n\nconst route = router.route("Home");\nconst parent = pathname(route); // "/"'),r.a.createElement(l.e,{meta:o,tag:"h3"},r.a.createElement(l.e,{tag:"h4",meta:{title:"route",hash:"pathname-arguments-route"}},r.a.createElement("p",null,"The route to generate a pathname string for.")),r.a.createElement(l.e,{tag:"h4",meta:{title:"params",hash:"pathname-arguments-params"}},r.a.createElement("p",null,"An object of params used to generate the pathname. If the route and/or any of its ancestor routes require params, then this argument must be provided.")),r.a.createElement(l.d,null,'const route = router.route("User");\nconst parent = pathname(route, { id: "1" }); // "/u/1"')))}var c={title:"Arguments",hash:"arguments"},m={title:"active",hash:"active"};function h(){return r.a.createElement(l.e,{meta:m},r.a.createElement("p",null,'An interaction function that uses a response object to determine if a route is "active".'),r.a.createElement("p",null,"The interaction requires two arguments, the first being the route data and the second being a response object."),r.a.createElement(l.d,null,'import { active } from "@curi/router";\n\nconst routes = prepareRoutes([\n  {\n    name: "User",\n    path: "u/:id",\n  }\n]);\n\nconst route = router.route("User");\nconst isActive = active(route, response, { id: "1" });'),r.a.createElement(l.e,{meta:c,tag:"h3"},r.a.createElement(l.e,{tag:"h4",meta:{title:"route",hash:"active-arguments-route"}},r.a.createElement("p",null,"The route to determine if it is active.")),r.a.createElement(l.e,{tag:"h4",meta:{title:"response",hash:"active-arguments-response"}},r.a.createElement("p",null,"A response object emitted by the router."),r.a.createElement(l.d,null,"const { response } = router.current();\nactive(route, response);")),r.a.createElement(l.e,{tag:"h4",meta:{title:"options",hash:"active-arguments-options"}},r.a.createElement("p",null,"An object with additional options"),r.a.createElement(l.d,null,"active(route, response, options);"),r.a.createElement(l.e,{tag:"h4",meta:{title:"params",hash:"active-arguments-params"}},r.a.createElement("p",null,"If the route requires params, these are the params that should be compared against the response's params.")),r.a.createElement(l.e,{tag:"h4",meta:{title:"partial",hash:"active-arguments-partial"}},r.a.createElement("p",null,"When true (defaults to false), a route that is an ancestor of the response's route can be considered active if its params match the response's params.")),r.a.createElement(l.e,{tag:"h4",meta:{title:"components",hash:"active-arguments-components"}},r.a.createElement("p",null,"A function to compare the other location components (",r.a.createElement(l.f,null,"hash")," and ",r.a.createElement(l.f,null,"query"),") against the response's location.")))))}var i={title:"Arguments",hash:"arguments"},p={title:"ancestors",hash:"ancestors"};function f(){return r.a.createElement(l.e,{meta:p},r.a.createElement("p",null,"An interaction function to get the ancestors of a route."),r.a.createElement("p",null,"The interaction returns the public route data for each of the route's ancestors. The first item in the array is the root-most ancestor, while the last item in the array is the route's parent."),r.a.createElement(l.d,null,'import { ancestors } from "@curi/router";\n\nconst routes = prepareRoutes([\n  {\n    name: "Grandparent", path: "g",\n    children: [\n      {\n        name: "Parent", path: "p",\n        children: [\n          { name: "Child", path: "c" }\n        ]\n      }\n    ]\n  }\n]);\n\nconst route = router.route("Child");\nconst family = ancestors(route);\n// [\n//   { meta: { name: "Grandparent", ... }, ... },\n//   { meta: { name: "Parent", ... }, ... },\n// ]'),r.a.createElement(l.e,{meta:i,tag:"h3"},r.a.createElement(l.e,{tag:"h4",meta:{title:"route",hash:"ancestor-arguments-route"}},r.a.createElement("p",null,"The route to get the ancestors of."))))}var E=a(3),g={title:"Arguments",hash:"arguments"},d={title:"prefetch",hash:"prefetch"};function v(){return r.a.createElement(l.e,{meta:d},r.a.createElement("p",null,"A function that will call a route's ",r.a.createElement(l.f,null,"resolve")," method."),r.a.createElement(l.d,null,"\nimport { prefetch } from '@curi/router';\n\nconst route = router.route(\"Async Route\");\nprefetch(route).then(...);"),r.a.createElement(l.e,{meta:g,tag:"h3"},r.a.createElement(l.e,{tag:"h4",meta:{title:"route",hash:"prefetch-arguments-route"}},r.a.createElement("p",null,"The route to prefetch.")),r.a.createElement(l.e,{tag:"h4",meta:{title:"optional",hash:"prefetch-arguments-optional"}},r.a.createElement("p",null,"A route's resolve function is called with two arguments: the"," ",r.a.createElement(l.f,null,"match")," object for the matched route and an"," ",r.a.createElement(E.a,{name:"Package",params:{package:"router",version:"v2"},hash:"router-external"},r.a.createElement(l.f,null,"external")),"value. You can provide filler values for these with the"," ",r.a.createElement(l.f,null,"optional")," object argument."),r.a.createElement(l.d,null,"const router = createRouter(browser, routes, {\n  external\n});\n\nprefetch(route, {\n  match: { params: {...} },\n  external: router.external\n});"),r.a.createElement(l.e,{tag:"h5",meta:{title:"match",hash:"prefetch-arguments-match"}},r.a.createElement("p",null,'An object of "match" properties for the ',r.a.createElement(l.f,null,"resolve")," ","function. The possible properties are ",r.a.createElement(l.f,null,"name"),","," ",r.a.createElement(l.f,null,"params"),", ",r.a.createElement(l.f,null,"location"),", and ",r.a.createElement(l.f,null,"partials"),".")),r.a.createElement(l.e,{tag:"h5",meta:{title:"external",hash:"prefetch-arguments-external"}},r.a.createElement("p",null,"Any external values passed to the ",r.a.createElement(l.f,null,"resolve")," function."),r.a.createElement("p",null,"To access the ",r.a.createElement(l.f,null,"external")," values set on the router when it was created, you can use ",r.a.createElement(l.f,null,"router.external"),"."),r.a.createElement(l.d,null,"const router = createRouter(browser, routes, {\n  external: {...}\n});\n\nprefetch(\n  route,\n  { external: router.external }\n);"))),r.a.createElement(l.g,null,r.a.createElement("p",null,"This route interaction will only register routes that have a"," ",r.a.createElement(l.f,null,"resolve")," function. If you try calling this for any routes without a ",r.a.createElement(l.f,null,"resolve")," function, ",r.a.createElement(l.f,null,"prefetch")," will resolve an object with an ",r.a.createElement(l.f,null,"error")," property and a"," ",r.a.createElement(l.f,null,"null")," ",r.a.createElement(l.f,null,"resolved")," property."))))}var b=r.a.memo(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.b,null,r.a.createElement("p",null,"The ",r.a.createElement(l.f,null,"@curi/interactions")," package provides a number of functions for interacting with Curi routes.")),r.a.createElement(l.a,null,r.a.createElement(s,null),r.a.createElement(h,null),r.a.createElement(f,null),r.a.createElement(v,null)))}),w=[{title:"Installation",hash:"installation"},{title:"About",hash:"about"},{title:"API",hash:"API",children:[u,m,p,d]}];a.d(t,"component",function(){return b}),a.d(t,"contents",function(){return w})}}]);