(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{35:function(e,t,a){"use strict";a.r(t),a.d(t,"component",function(){return E}),a.d(t,"contents",function(){return g});var n=a(0),r=a.n(n),o=a(21),l={title:"History"},i={title:"Browser History",hash:"browser"},s={title:"Hash History",hash:"hash"},c={title:"In Memory History",hash:"in-memory"},h={title:"Types of History",hash:"types",children:[i,s,c]},u={title:"Query Objects",hash:"query-objects"},m={title:"Locations",hash:"locations",children:[u]},p={title:"pop",hash:"pop"},y={title:"push, replace, anchor",hash:"push-replace-anchor"},d={title:"Navigation",hash:"navigation",children:[p,y]},g=[h,m,d];function E(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.f,null,r.a.createElement("h1",null,l.title),r.a.createElement("p",null,"A router's history object powers navigation behind the scenes. Besides creating the object and passing it the the ",r.a.createElement(o.d,null,"curi")," function to create a router, you likely will not directly interact with it."),r.a.createElement("p",null,"Curi uses ",r.a.createElement("a",{href:"https://github.com/pshrmn/hickory"},"Hickory")," ","packages for its history implementations. Hickory is designed with asynchronous navigation in mind. This means that when a user clicks a link, your application can load data for the mastched route before updating the location."),r.a.createElement(o.b,null,"const history = Browser();\nconst router = curi(history, routes);")),r.a.createElement(o.c,{meta:h},r.a.createElement("p",null,"There are three Hickory packages to choose from for an application. W hich one you use depends on where your application is running."),r.a.createElement(o.c,{meta:i,tag:"h3"},r.a.createElement(o.b,null,'import Browser from "@hickory/browser";\nconst browserHistory = Browser();'),r.a.createElement("p",null,"The browser history is used for applications running in a browser."),r.a.createElement("p",null,"If you use the browser history, your application should be hosted on a server that can handle dynamic requests. This either means:"),r.a.createElement("ol",null,r.a.createElement("li",null,"A server with real time route matching (like an Express server)."),r.a.createElement("li",null,"Configuring the server to respond with a fallback page when the request doesn't map to a real file on the server (e.g. with NGINX or Apache)."),r.a.createElement("li",null,"Using a static file host that can be configured to respond with a fallback page."))),r.a.createElement(o.c,{meta:s,tag:"h3"},r.a.createElement(o.b,null,'import Hash from "@hickory/hash";\nconst hashHistory = Hash();'),r.a.createElement("p",null,"The hash history is a fallback history for applications running in a browser. It should only be used if you cannot configure the server to respond to requests that don't match files on the server."),r.a.createElement(o.h,null,r.a.createElement("p",null,"This should only be used as a last resort. The browser history is almost always a better choice."))),r.a.createElement(o.c,{meta:c,tag:"h3"},r.a.createElement(o.b,null,'import InMemory from "@hickory/in-memory";\nconst inMemoryHistory = InMemory();'),r.a.createElement("p",null,"The in memory history is used for applications not running in a browser. For example, the in memory history is used on the server, in a React Native app, and during testing.")),r.a.createElement(o.e,null,r.a.createElement("p",null,"If you are not familiar with how single-page applications interact with a server, this article should help:"," ",r.a.createElement("a",{href:"https://medium.com/@pshrmn/single-page-applications-and-the-server-32a23d67936"},"Single-Page Applications and the Server"),"."))),r.a.createElement(o.c,{meta:m},r.a.createElement("p",null,"The history object will map URL strings into location objects. Only the ",r.a.createElement(o.d,null,"pathname"),", ",r.a.createElement(o.d,null,"query")," (search), and"," ",r.a.createElement(o.d,null,"hash")," components of a URL are used; locations ignore a URL's domain and protocol."),r.a.createElement("p",null,"Matching locations to routes only uses the location's"," ",r.a.createElement(o.d,null,"pathname"),"."),r.a.createElement(o.b,null,'// https://www.example.com/page?key=value#trending\nlocation = {\n  pathname: "/page",\n  query: "key=value"\n  hash: "trending"\n}'),r.a.createElement(o.c,{meta:u,tag:"h3"},r.a.createElement("p",null,"The ",r.a.createElement(o.d,null,"query")," value of a location is a string by default, but the history object can be configured to automatically parse it into an object."),r.a.createElement("p",null,"You can choose whichever query parsing/stringifying package you prefer. Some of the most popular are"," ",r.a.createElement("a",{href:"http://npmjs.com/package/qs"},r.a.createElement(o.d,null,"qs")),","," ",r.a.createElement("a",{href:"http://npmjs.com/package/query-string"},r.a.createElement(o.d,null,"query-string")),", and"," ",r.a.createElement("a",{href:"https://www.npmjs.com/package/querystring"},r.a.createElement(o.d,null,"querystring")),"."),r.a.createElement(o.b,null,'import { parse, stringify } from "qs";\nimport Browser from "@hickory/browser";\n\nconst history = Browser({\n  query: { parse, stringify }\n});\n\n// https://www.example.com/page?key=value#trending\nlocation = {\n  pathname: "/page",\n  query: { key: "value" }\n  hash: "trending"\n}'))),r.a.createElement(o.c,{meta:d},r.a.createElement("p",null,"The history object supports four kinds of navigation."),r.a.createElement("p",null,"When a user navigates to your application, this starts a new session. A session is essentially an array of locations that have been visited (but isn't directly accessible in the browser)."),r.a.createElement(o.c,{tag:"h3",meta:p},r.a.createElement("p",null,"Pop navigation is either performed by calling"," ",r.a.createElement(o.d,null,"history.go(n)")," (where ",r.a.createElement(o.d,null,"n")," is the number of locations forward/backward to go) or happens natively (e.g. clicking the browser's back button)."),r.a.createElement(o.b,null,"history.go(-1); // go back to the previous location")),r.a.createElement(o.c,{tag:"h3",meta:y},r.a.createElement("p",null,"Push navigation adds a new location after the current location."),r.a.createElement("p",null,"Replace navigation replaces the current location with a new location."),r.a.createElement("p",null,"Anchor navigation is a mix between push and replace. If the new location is the same as the current location, it replaces; otherwise, it pushes. This behavior is the same as how clicking an"," ",r.a.createElement(o.a,null,"a"),' in a multi-page application works, hence the name "anchor".'),r.a.createElement("p",null,"Push, replace, and anchor navigation are performed using the history object's ",r.a.createElement(o.d,null,"navigate()")," method. That said, the Curi router has a wrapper implementation, so you shouldn't need to call"," ",r.a.createElement(o.d,null,"history.navigate()")," yourself."),r.a.createElement(o.b,null,'history.navigate({ pathname: "/test" }, "PUSH");'))),r.a.createElement(o.f,null,r.a.createElement("p",null,"For more details on the history objects and their APIs, please check out the"," ",r.a.createElement("a",{href:"https://github.com/pshrmn/hickory/tree/master/docs"},"Hickory documentation"),".")))}}}]);