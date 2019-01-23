(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{54:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return i});var n=a(0),r=a.n(n),l=a(27),o={title:"History"};function i(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,o.title),r.a.createElement(l.c,null,r.a.createElement("p",null,"The ",r.a.createElement(l.d,null,"history")," object manages navigation between locations within an application."),r.a.createElement("p",null,"Curi uses ",r.a.createElement("a",{href:"https://github.com/pshrmn/hickory"},"Hickory")," for its history implementation."),r.a.createElement("p",null,"You should almost never have to interact directly with Hickory, but you do have to create your own ",r.a.createElement(l.d,null,"history")," object for your application and use it when creating the router.")),r.a.createElement(l.b,null,"const history = Browser();\nconst router = curi(history, routes);"),r.a.createElement(l.g,{title:"Types of History",id:"types"},r.a.createElement(l.c,null,r.a.createElement("p",null,"There are three types of ",r.a.createElement(l.d,null,"history")," to choose from; which one you use depends on where your application is running.")),r.a.createElement(l.g,{title:"Browser History",id:"browser",tag:"h3"},r.a.createElement(l.c,null,r.a.createElement(l.b,null,'import Browser from "@hickory/browser";\nconst browserHistory = Browser();'),r.a.createElement("p",null,"The ",r.a.createElement(l.d,null,"browser")," history is used for applications running in a browser."),r.a.createElement("p",null,"If you use the ",r.a.createElement(l.d,null,"browser")," history, your application should be hosted on a server that can handle dynamic requests. This either means:"),r.a.createElement("ol",null,r.a.createElement("li",null,"A server with real time route matching (like an Express server)."),r.a.createElement("li",null,"Configuring the server to respond with a fallback page when the request doesn't map to a real file on the server (e.g. with NGINX or Apache)."),r.a.createElement("li",null,"Using a static file host that can be configured to respond with a fallback page.")))),r.a.createElement(l.g,{title:"Hash History",id:"hash",tag:"h3"},r.a.createElement(l.b,null,'import Hash from "@hickory/hash";\nconst hashHistory = Hash();'),r.a.createElement(l.c,null,r.a.createElement("p",null,"The ",r.a.createElement(l.d,null,"hash")," history is a fallback history for applications running in a browser. It should only be used if you cannot configure the server to respond to requests that don't match files on the server."),r.a.createElement(l.h,null,"This should only be used as a last resort. The ",r.a.createElement(l.d,null,"browser")," ","history is almost always a better choice."))),r.a.createElement(l.g,{title:"In Memory History",id:"in-memory",tag:"h3"},r.a.createElement(l.b,null,'import InMemory from "@hickory/in-memory";\nconst inMemoryHistory = InMemory();'),r.a.createElement(l.c,null,r.a.createElement("p",null,"The ",r.a.createElement(l.d,null,"in-memory")," history is used for applications not running in a browser. For example, the ",r.a.createElement(l.d,null,"in-memory")," ","history is used on the server, in a React Native app, and during testing."))),r.a.createElement(l.c,null,r.a.createElement(l.e,null,"If you are not familiar with how single-page applications interact with a server, this article should help:"," ",r.a.createElement("a",{href:"https://medium.com/@pshrmn/single-page-applications-and-the-server-32a23d67936"},"Single-Page Applications and the Server"),"."))),r.a.createElement(l.g,{title:"Locations",id:"locations"},r.a.createElement(l.c,null,r.a.createElement("p",null,"The ",r.a.createElement(l.d,null,"history")," object will map URLs into location objects. Only the ",r.a.createElement(l.d,null,"pathname"),", ",r.a.createElement(l.d,null,"query")," (search), and"," ",r.a.createElement(l.d,null,"hash")," segments are used; locations ignore the domain and protocol segments of a URL."),r.a.createElement("p",null,"When matching loactions to routes, only the ",r.a.createElement(l.d,null,"pathname")," is used.")),r.a.createElement(l.b,null,'// https://www.example.com/page?key=value#trending\nlocation = {\npathname: "/page",\nquery: "key=value"\nhash: "trending"\n}'),r.a.createElement(l.g,{title:"Query Objects",id:"query-objects",tag:"h3"},r.a.createElement(l.c,null,r.a.createElement("p",null,"The ",r.a.createElement(l.d,null,"query")," value of a location is a string by default, but the history object can be configured to automatically parse it into an object."),r.a.createElement("p",null,"You can choose whichever query parsing/stringifying package you prefer. Some of the most popular are"," ",r.a.createElement("a",{href:"http://npmjs.com/package/qs"},r.a.createElement(l.d,null,"qs")),","," ",r.a.createElement("a",{href:"http://npmjs.com/package/query-string"},r.a.createElement(l.d,null,"query-string")),", and"," ",r.a.createElement("a",{href:"https://www.npmjs.com/package/querystring"},r.a.createElement(l.d,null,"querystring")),".")),r.a.createElement(l.b,null,'import { parse, stringify } from "qs";\nimport Browser from "@hickory/browser";\n\nconst history = Browser({\nquery: { parse, stringify }\n});\n\n// https://www.example.com/page?key=value#trending\nlocation = {\npathname: "/page",\nquery: { key: "value" }\nhash: "trending"\n}'))),r.a.createElement(l.g,{title:"Navigation",id:"navigation"},r.a.createElement(l.c,null,r.a.createElement("p",null,"The ",r.a.createElement(l.d,null,"history")," object supports four kinds of navigation. You can think of the ",r.a.createElement(l.d,null,"history")," as storing an array of locations and keeping an index of which location in the array is the current location."),r.a.createElement("p",null,"Pop navigation is either performed by calling"," ",r.a.createElement(l.d,null,"history.go(n)")," (where ",r.a.createElement(l.d,null,"n")," is the number of locations forward/backward to go) or happens natively (e.g. clicking the browser's back button).")),r.a.createElement(l.b,null,"history.go(-1); // go back to the previous location"),r.a.createElement(l.c,null,r.a.createElement("p",null,"Push navigation adds a new location after the current location."),r.a.createElement("p",null,"Replace navigation replaces the current location with a new location."),r.a.createElement("p",null,"Anchor navigation is a mix between push and replace. If the new location is the same as the current location, it replaces; otherwise, it pushes. This behavior is the same as how clicking an"," ",r.a.createElement(l.a,null,"a"),' in a multi-page application works, hence the name "anchor".'),r.a.createElement("p",null,"Push, replace, and anchor navigation are performed using the"," ",r.a.createElement(l.d,null,"history")," object's ",r.a.createElement(l.d,null,"navigate()")," method. That said, the Curi router has a wrapper implementation, so you shouldn't need to call ",r.a.createElement(l.d,null,"history.navigate()")," yourself.")),r.a.createElement(l.b,null,'history.navigate({ pathname: "/test" }, "PUSH");')),r.a.createElement(l.c,null,r.a.createElement("p",null,"For more details on the history objects and their APIs, please check out the"," ",r.a.createElement("a",{href:"https://github.com/pshrmn/hickory/tree/master/docs"},"Hickory documentation"),".")))}}}]);