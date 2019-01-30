(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{38:function(e,t,n){"use strict";n.r(t),n.d(t,"component",function(){return d}),n.d(t,"contents",function(){return m});var a=n(0),r=n.n(a),l=n(3),o=n(22),i={title:"Getting Started"},s={title:"The Router",hash:"router-object"},c={title:"Navigation",hash:"navigation"},u={title:"Response Handlers",hash:"response-handlers"},h={title:"Rendering",hash:"rendering"},m=[s,c,u,h];function d(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.f,null,r.a.createElement("h1",null,i.title)),r.a.createElement(o.c,{meta:s},r.a.createElement("p",null,"The router is the controller of the single-page application. A router is created using a ",r.a.createElement(o.d,null,"history")," object and a ",r.a.createElement(o.d,null,"routes")," ","array."),r.a.createElement(o.b,null,"import { curi, prepareRoutes } from '@curi/router';\n\nconst history = Browser();\nconst routes = prepareRoutes([...]);\nconst router = curi(history, routes);"),r.a.createElement("p",null,"The"," ",r.a.createElement(l.b,{name:"Guide",params:{slug:"history"}},"history")," ","object is used to navigate between locations within an application. The"," ",r.a.createElement(l.b,{name:"Guide",params:{slug:"routes"}},"routes")," ","array describes valid locations in an application.")),r.a.createElement(o.c,{meta:c},r.a.createElement("p",null,"Navigation within a single-page application can either be caused by in-app navigation (e.g. clicking a link) or platform navigation (e.g. clicking the back button or typing URL in the address bar and hitting enter)."),r.a.createElement("p",null,"The router has a ",r.a.createElement(o.d,null,"navigate()")," method to let you navigate with code. The function takes the ",r.a.createElement(o.d,null,"name")," of the route you want to navigate to and any route ",r.a.createElement(o.d,null,"params"),". The navigation"," ",r.a.createElement(o.d,null,"method")," controls how the history changes locations, with the default behavior acting like clicking a link."),r.a.createElement(o.b,null,'router.navigate({\n  name: "Photo",\n  params: { albumID: 1357, photoID: 02468 },\n  hash: "comments"\n});\n// /photos/1357/02468#comments\n\nrouter.navigate({\n  name: "Login",\n  state: { next: location.pathname },\n  // replace the current location with the Login location\n  // "REPLACE" is ideal for redirects\n  method: "REPLACE"\n});'),r.a.createElement(o.e,null,r.a.createElement("p",null,"Render interfaces, like"," ",r.a.createElement(l.b,{name:"Package",params:{package:"react-dom",version:"v1"}},r.a.createElement(o.d,null,"@curi/react-dom")),", will call ",r.a.createElement(o.d,null,"router.nagivate()")," for you when the user clicks a link."))),r.a.createElement(o.c,{meta:u},r.a.createElement("p",null,'When Curi matches a location to a route, it creates a "response" object, which provides information about the route that matched.'),r.a.createElement("p",null,"Response handlers are functions that will be called when there is a new response. There are three types of response handlers: observers, one time functions, and side effects."),r.a.createElement("p",null,"Side effects are passed to the router when you are creating it. These are best suited for non-rendering tasks. You can read more about them in the"," ",r.a.createElement(l.b,{name:"Guide",params:{slug:"side-effects"}},"side effects guide"),"."),r.a.createElement(o.b,null,"const router = curi(history, routes, {\n  sideEffects: [scroll, title]\n})"),r.a.createElement("p",null,'"One time" response handlers, registered with ',r.a.createElement(o.d,null,"router.once()"),", will only be called one time. If a response already exists, then the response handler will be called immediately (unless configured not to). Otherwise, the one time response handler will be called after the next response is emitted."),r.a.createElement("p",null,"The primary use case for one time functions is to wait for the initial response to be generated before rendering."),r.a.createElement(o.b,null,"const router = cur(history, routes);\nrouter.once(() => {\n  // this is not called until the initial response is ready\n  // so we can safely render now\n});"),r.a.createElement("p",null,"Observers are passed to the router using ",r.a.createElement(o.d,null,"router.observe()"),". Unlike one time functions, these will be called for every response emitted by the router (until you tell the router to stop calling it). You most likely will not need to call this yourself because the renderer implementations setup observers for you."),r.a.createElement(o.b,null,"const stop = router.observe(({ response }) => {\n  console.log('new response!', response);\n});\n// ...\nstop();\n// no longer observing"),r.a.createElement("p",null,"If you have any asynchronous routes (routes with ",r.a.createElement(o.d,null,"resolve")," ","functions), ",r.a.createElement(o.d,null,"router.once()")," should be used to delay the initial render until after the initial response is ready."),r.a.createElement(o.b,null,"// wait for initial response to be ready\nrouter.once(() => {\n  // safe to render async routes now\n});")),r.a.createElement(o.c,{meta:h},r.a.createElement("p",null,"How Curi integrates with UI libraries depends on which one you are using. The way that Curi interfaces with each of them varies, but they all use observers to be notified when there is a new response."),r.a.createElement("p",null,"For the UI libraries that Curi natively supports, you can check out their respective guides to see how to use them."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{name:"Guide",params:{slug:"react-dom"}},"React DOM")),r.a.createElement("li",null,r.a.createElement(l.b,{name:"Guide",params:{slug:"react-native"}},"React Native")),r.a.createElement("li",null,r.a.createElement(l.b,{name:"Guide",params:{slug:"svelte"}},"Svelte")),r.a.createElement("li",null,r.a.createElement(l.b,{name:"Guide",params:{slug:"vue"}},"Vue")))))}}}]);