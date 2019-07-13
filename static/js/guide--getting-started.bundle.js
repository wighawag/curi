(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{36:function(e,t,a){"use strict";a.r(t),a.d(t,"component",function(){return d}),a.d(t,"contents",function(){return p});var n=a(0),r=a.n(n),l=a(3),o=a(27),s={title:"Getting Started"},i={title:"The Router",hash:"router-object"},u={title:"URLs",hash:"urls"},c={title:"Navigation",hash:"navigation"},m={title:"Response Handlers",hash:"response-handlers"},h={title:"Rendering",hash:"rendering"},p=[i,c,m,h];function d(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.g,{title:s.title},r.a.createElement("p",null,"The core of a single-page application is its router. The router is responsible for matching locations to its known routes and for powering navigation within the application.")),r.a.createElement(o.c,{meta:i,tag:"h2"},r.a.createElement("p",null,"A router is created using a"," ",r.a.createElement(l.a,{name:"Guide",params:{slug:"history"}},r.a.createElement(o.d,null,"history")," function")," ","and a"," ",r.a.createElement(l.a,{name:"Guide",params:{slug:"routes"}},r.a.createElement(o.d,null,"routes")," array.")),r.a.createElement(o.b,null,"import { createRouter, prepareRoutes } from '@curi/router';\nimport { browser } from \"@hickory/browser\";\n\nconst routes = prepareRoutes([...]);\nconst router = createRouter(browser, routes);")),r.a.createElement(o.c,{meta:u,tag:"h2"},r.a.createElement("p",null,"Locations are represented using URLs. URLs are a combination of a"," ",r.a.createElement(o.d,null,"pathname")," string, a ",r.a.createElement(o.d,null,"query"),", and a ",r.a.createElement(o.d,null,"hash"),"."),r.a.createElement("p",null,"The router provides a ",r.a.createElement(o.d,null,"url")," method for automatically generating a URL. The method takes the name of the route and the route's params to generate the URL's ",r.a.createElement(o.d,null,"pathname"),". Additionally, ",r.a.createElement(o.d,null,"query")," and ",r.a.createElement(o.d,null,"hash")," values can be provided."),r.a.createElement(o.b,null,'const routes = prepareRoutes([\n  { name: "Home", path: "" },\n  { name: "Contact", path: "contact/:method" }\n]);\nconst router = createRouter(browser, routes);\n\nconst homeURL = router.url({ name: "Home" });\n// "/"\n\nconst phoneURL = router.url({\n  name: "Contact",\n  params: { method: "phone" }\n});\n// "/contact/phone"\n\nconst queryURL = router.url({\n  name: "Home",\n  query: "value=7"\n});\n// "/?value=7"'),r.a.createElement("p",null,"By default, a ",r.a.createElement(o.d,null,"query")," is a string, but you can also configure your history to use a query library."),r.a.createElement(o.b,null,'import { parse, stringify } from "qs";\nconst router = createRouter(browser, routes, {\n  history: {\n    query: { parse, stringify }\n  }\n});\n\nconst queryURL = router.url({\n  name: "Home",\n  query: { value: "6" }\n});\n// "/?value=6"')),r.a.createElement(o.c,{meta:c,tag:"h2"},r.a.createElement("p",null,"There are two types of navigation within a single-page application: in-app navigation (e.g. clicking a link) and platform navigation (e.g. clicking the back button or typing a URL in the address bar and hitting enter)."),r.a.createElement("p",null,"A Curi router object has a ",r.a.createElement(o.d,null,"navigate")," method to let you navigate with code. The function takes an object with a ",r.a.createElement(o.d,null,"url")," ","property of the URL to navigate to; this pairs well with the router's"," ",r.a.createElement(o.d,null,"url")," method described above. There are also a number of"," ",r.a.createElement(l.a,{name:"Package",params:{package:"router",version:"v2"},hash:"navigate"},"other optional arguments to ",r.a.createElement(o.d,null,"navigate")),"."),r.a.createElement(o.b,null,'router.navigate({\n  url: "/photo/1357/02468#comments"\n});'),r.a.createElement(o.e,null,r.a.createElement("p",null,"Render packages, like"," ",r.a.createElement(l.a,{name:"Package",params:{package:"react-dom",version:"v2"}},r.a.createElement(o.d,null,"@curi/react-dom")),", will call ",r.a.createElement(o.d,null,"router.nagivate")," for you when the user clicks a link."))),r.a.createElement(o.c,{meta:m,tag:"h2"},r.a.createElement("p",null,'When Curi matches a location to a route, it creates a "response" object. Respons objects provide information about the route that matched.'),r.a.createElement("p",null,"Response handlers are functions that will be called when there is a new response. There are three types of response handlers: side effects, one time functions, and observers."),r.a.createElement("p",null,"Side effects are passed to the router when you are creating it. These are best suited for non-rendering tasks. You can read more about them in the"," ",r.a.createElement(l.a,{name:"Guide",params:{slug:"side-effects"}},"side effects guide"),"."),r.a.createElement(o.b,null,"const router = createRouter(browser, routes, {\n  sideEffects: [scroll(), title(...)]\n})"),r.a.createElement("p",null,"Response handlers registered with ",r.a.createElement(o.d,null,"router.once")," will only be called one time. This is primarily useful for waiting for asynchronous actions to finish before the initial render."),r.a.createElement(o.b,null,"const router = createRouter(browser, routes);\n// wait for the initial route's async action to complete\nrouter.once(() => {\n  // this is not called until the initial response is ready\n  // so we can safely render in here\n});"),r.a.createElement("p",null,"Observers are passed to the router using ",r.a.createElement(o.d,null,"router.observe"),". Unlike one time functions, these will be called every time there is a new response."),r.a.createElement("p",null,"Render packages, like ",r.a.createElement(o.d,null,"@curi/react-dom"),", use"," ",r.a.createElement(o.d,null,"router.observe")," internally in order to re-render when there is a new response."),r.a.createElement(o.b,null,"router.observe(({ response }) => {\n  console.log('new response!', response);\n});")),r.a.createElement(o.c,{meta:h,tag:"h2"},r.a.createElement("p",null,"Curi adapts its API to work with different UI libraries. You can check out the respective guides for the officially supported libraries to see how to use them."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.a,{name:"Guide",params:{slug:"react-dom"}},"React DOM")),r.a.createElement("li",null,r.a.createElement(l.a,{name:"Guide",params:{slug:"react-native"}},"React Native")),r.a.createElement("li",null,r.a.createElement(l.a,{name:"Guide",params:{slug:"svelte"}},"Svelte")),r.a.createElement("li",null,r.a.createElement(l.a,{name:"Guide",params:{slug:"vue"}},"Vue")))))}}}]);