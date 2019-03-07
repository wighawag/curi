(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{30:function(e,t,a){"use strict";a.r(t),a.d(t,"component",function(){return E}),a.d(t,"contents",function(){return y});var n=a(0),r=a.n(n),o=a(22),l={title:"History"},i={title:"Browser History",hash:"browser"},s={title:"Hash History",hash:"hash"},c={title:"In Memory History",hash:"in-memory"},h={title:"Types of History",hash:"types",children:[i,s,c]},u={title:"Query Objects",hash:"query-objects"},m={title:"Locations",hash:"locations",children:[u]},p={title:"go",hash:"go"},d={title:"navigate",hash:"navigate"},g={title:"Navigation",hash:"navigation",children:[p,d]},y=[h,m,g];function E(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.f,null,r.a.createElement("h1",null,l.title),r.a.createElement("p",null,"A router's history enables navigation. It is responsible for creating the location objects, interfacing with its native environment (e.g. a browser) to perform navigation, and telling the router that navigation has occured."),r.a.createElement("p",null,"Curi uses ",r.a.createElement("a",{href:"https://github.com/pshrmn/hickory"},"Hickory")," ","packages for its history implementations. Hickory is designed with asynchronous navigation in mind. This means that when a user clicks a link, your application can load data for the matched route before updating the location."),r.a.createElement(o.b,null,'import { Browser } from "@hickory/browser";\nconst router = curi(Browser, routes);'),r.a.createElement("p",null,"You most likely will not need to interact directly with the application's ",r.a.createElement(o.d,null,"history"),", but you should be familiar with the different choices.")),r.a.createElement(o.c,{meta:h},r.a.createElement("p",null,"There are three Hickory packages to choose from for an application. Which one you use depends on where your application is running."),r.a.createElement(o.c,{meta:i,tag:"h3"},r.a.createElement(o.b,null,'import { Browser } from "@hickory/browser";\nconst router = curi(Browser, routes);'),r.a.createElement("p",null,"The browser history is used for applications running in a browser."),r.a.createElement("p",null,"If you use the browser history, your application should be hosted on a server that can handle dynamic requests. This either means:"),r.a.createElement("ol",null,r.a.createElement("li",null,"A server with real time route matching (like an Express server)."),r.a.createElement("li",null,"Configuring the server to respond with a fallback page when the request doesn't map to a real file on the server (e.g. with NGINX or Apache)."),r.a.createElement("li",null,"Using a static file host that can be configured to respond with a fallback page."))),r.a.createElement(o.c,{meta:s,tag:"h3"},r.a.createElement(o.b,null,'import { Hash } from "@hickory/hash";\nconst router = curi(Hash, routes);'),r.a.createElement("p",null,"The hash history is a fallback history for applications running in a browser. It should only be used if you cannot configure the server to respond to requests that don't match files on the server."),r.a.createElement(o.h,null,r.a.createElement("p",null,"This should only be used as a last resort. The browser history is almost always a better choice."))),r.a.createElement(o.c,{meta:c,tag:"h3"},r.a.createElement(o.b,null,'import { InMemory, createServerHistory } from "@hickory/in-memory";\n\nconst router = curi(InMemory, routes);\n// or\nconst ServerHistory = createServerHistory();\nconst router = curi(ServerHistory, routes);'),r.a.createElement("p",null,"An in-memory history is used for applications not running in a browser. For example, the in memory history is used on the server, in a React Native app, and during testing."),r.a.createElement("p",null,"The ",r.a.createElement(o.d,null,"InMemory")," function is a full history object, capable of in-app navigation."),r.a.createElement("p",null,"The ",r.a.createElement(o.d,null,"createServerHistory")," function returns lightweight history function for server-side rendering. The returned history cannot navigate, which is fine for server rendering.")),r.a.createElement(o.e,null,r.a.createElement("p",null,"If you are not familiar with how single-page applications interact with a server, this article should help:"," ",r.a.createElement("a",{href:"https://medium.com/@pshrmn/single-page-applications-and-the-server-32a23d67936"},"Single-Page Applications and the Server"),"."))),r.a.createElement(o.c,{meta:m},r.a.createElement("p",null,"The history object will map URL strings into location objects. Only the ",r.a.createElement(o.d,null,"pathname"),", ",r.a.createElement(o.d,null,"query")," (search), and"," ",r.a.createElement(o.d,null,"hash")," components of a URL are used; locations ignore a URL's domain and protocol."),r.a.createElement("p",null,"Matching locations to routes only uses the location's"," ",r.a.createElement(o.d,null,"pathname"),"."),r.a.createElement(o.b,null,'// https://www.example.com/page?key=value#trending\nlocation = {\n  pathname: "/page",\n  query: "key=value"\n  hash: "trending"\n}'),r.a.createElement(o.c,{meta:u,tag:"h3"},r.a.createElement("p",null,"The ",r.a.createElement(o.d,null,"query")," value of a location is a string by default, but the history object can be configured to automatically parse it into an object."),r.a.createElement("p",null,"You can choose whichever query parsing/stringifying package you prefer. Some of the most popular are"," ",r.a.createElement("a",{href:"http://npmjs.com/package/qs"},r.a.createElement(o.d,null,"qs")),","," ",r.a.createElement("a",{href:"http://npmjs.com/package/query-string"},r.a.createElement(o.d,null,"query-string")),", and"," ",r.a.createElement("a",{href:"https://www.npmjs.com/package/querystring"},r.a.createElement(o.d,null,"querystring")),"."),r.a.createElement(o.b,null,'import { parse, stringify } from "qs";\nimport { Browser } from "@hickory/browser";\n\nconst router = curi(Browser, routes, {\n  history: {\n    query: { parse, stringify }\n  }\n});\n\n// https://www.example.com/page?key=value#trending\nlocation = {\n  pathname: "/page",\n  query: { key: "value" }\n  hash: "trending"\n}'))),r.a.createElement(o.c,{meta:g},r.a.createElement("p",null,"A history object has two methods for navigation: ",r.a.createElement(o.d,null,"navigate")," ","and ",r.a.createElement(o.d,null,"go"),"."),r.a.createElement(o.e,null,r.a.createElement("p",null,"Curi wraps the ",r.a.createElement(o.d,null,"navigate")," method and exposes its own"," ",r.a.createElement(o.d,null,"router.navigate")," method. You should use that instead of"," ",r.a.createElement(o.d,null,"history.navigate"),".")),r.a.createElement(o.c,{tag:"h3",meta:p},r.a.createElement("p",null,"The ",r.a.createElement(o.d,null,"go")," method allows you to jump to another, already visited. ",r.a.createElement(o.d,null,"go")," takes one argument, the number of locations forward (positive numbers) or backward (negative numbers) to go."),r.a.createElement(o.b,null,"history.go(-1); // go back to the previous location"),r.a.createElement("p",null,'In browsers, there is "external" navigation. This includes the user typing a URL in the address bar and clicking the browser\'s forward and back buttons. These navigations are all treated similarly to the'," ",r.a.createElement(o.d,null,"go")," method."),r.a.createElement(o.e,null,r.a.createElement("p",null,r.a.createElement(o.d,null,"go")," is asynchronous, meaning that the navigation happens before the router knows about it. This should not affect your application, but it is useful to be aware of."))),r.a.createElement(o.c,{tag:"h3",meta:d},r.a.createElement("p",null,"There are three types of navigation with ",r.a.createElement(o.d,null,"navigate"),": push, replace, and anchor."),r.a.createElement("p",null,"Push navigation adds a new location after the current location. Any locations that existed after the current location are wiped out by push navigation."),r.a.createElement("p",null,"Replace navigation replaces the current location with a new location. This has no effect on any locations after the current location."),r.a.createElement("p",null,"Anchor navigation is a mix between push and replace. If the new location is the same as the current location, it replaces; otherwise, it pushes. This behavior is the same as how clicking an"," ",r.a.createElement(o.a,null,"a"),' in a multi-page application works, hence the name "anchor".'))),r.a.createElement(o.f,null,r.a.createElement("p",null,"For more details on the history objects and their APIs, please check out the"," ",r.a.createElement("a",{href:"https://github.com/pshrmn/hickory/tree/master/docs"},"Hickory documentation"),".")))}}}]);