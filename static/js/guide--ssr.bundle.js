(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{45:function(e,t,r){"use strict";r.r(t),r.d(t,"component",function(){return w}),r.d(t,"contents",function(){return g});var n=r(0),a=r.n(n),l=r(20),o={title:"Server-Side Rendering"},s={title:"Reusing Code",hash:"reuse"},i={title:"Web Framework",hash:"framework"},c={title:"Client-Side Routes",hash:"client-side-routes"},u={title:"Static Assets",hash:"static-assets"},d={title:"Path Order",hash:"path-order"},h={title:"Request Matching",hash:"request-matching",children:[c,u,d]},m={title:"Render Handler",hash:"handler"},p={title:"History",hash:"history"},f={title:"Routes",hash:"routes"},E={title:"Router",hash:"router",children:[p,f]},b={title:"Redirect Responses",hash:"redirect-responses"},y={title:"Handling the Response",hash:"handling-response",children:[b]},g=[s,i,h,m,E,y];function w(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.h,{title:o.title},a.a.createElement(l.f,null,"Server-side rendering (SSR) is used to generate the HTML for pages when the server receives a request for them. While not strictly necessary for single-page applications, server-side rendering can potentially be beneficial by:"),a.a.createElement("ol",null,a.a.createElement("li",null,"Speeding up the initial render time."),a.a.createElement("li",null,"Making it easier for web crawlers to view the application's content (which ",a.a.createElement("em",null,"may")," improve SEO).")),a.a.createElement(l.f,null,"This guide will cover how to setup server-side rendering and some of the issues that you may run into.")),a.a.createElement(l.c,{meta:s,tag:"h2"},a.a.createElement(l.f,null,"Being able to reuse code on the client and server is one of the benefits of JavaScript. If you are using syntax in your client-side code that Node doesn't know how to parse, such as import/export or JSX, you may run into issues."),a.a.createElement(l.f,null,"The ",a.a.createElement("a",{href:"https://babeljs.io/"},"Babel")," package"," ",a.a.createElement(l.d,null,"@babel/node")," lets Babel compile your code on the fly to syntax that Node understands. Anywhere that you would call"," ",a.a.createElement(l.d,null,"node <command>"),", you should call"," ",a.a.createElement(l.d,null,"babel-node <command>")," instead."),a.a.createElement(l.b,{lang:"bash"},"npm install --save-dev @babel/node"),a.a.createElement(l.i,null,a.a.createElement(l.f,null,a.a.createElement(l.d,null,"@babel/node")," should only be used in development. For production, the server's modules should be pre-compiled (using Babel)."))),a.a.createElement(l.c,{meta:i,tag:"h2"},a.a.createElement(l.f,null,"In order to render JavaScript on the server, you will need to use Node. This guide will be using the"," ",a.a.createElement("a",{href:"https://expressjs.com/"},"Express")," web framework."),a.a.createElement(l.e,null,a.a.createElement(l.f,null,"There are ways to mix Node server-side rendering with non-Node frameworks, but that is outside the scope of this guide.")),a.a.createElement(l.f,null,"Familiarity with Express is not expected, so to get you started, this guide will provide some code snippets for a basic setup."),a.a.createElement(l.b,{lang:"bash"},"npm install express"),a.a.createElement(l.f,null,"The server's setup code can be placed anywhere, but we will follow Node's convention and save it in a ",a.a.createElement(l.d,null,"server.js")," file."),a.a.createElement(l.b,null,'// server.js\nlet express = require("express");\n\nlet app = express();\n\n// ...\n\napp.listen("8080", () => {\n  console.log("Server is running.");\n});'),a.a.createElement(l.b,{lang:"bash"},"# tell node to start the server\n# (development only!)\nbabel-node server.js"),a.a.createElement(l.f,null,"With the server ready to go, we can start configuring it to render a single-page application.")),a.a.createElement(l.c,{meta:h,tag:"h2"},a.a.createElement(l.f,null,"A web framework receives requests from the client and returns responses."),a.a.createElement(l.f,null,"In the client-side application, we define the routes that are valid for the application. Similarly, the server needs to define which request paths are valid so that it can properly respond to them."),a.a.createElement(l.f,null,"Server paths are given handler functions. These can do a variety of things, but we will only be using them to send responses."),a.a.createElement(l.b,null,'app.use("/hi", function(req, res) {\n  res.send("Hey!");\n})'),a.a.createElement(l.c,{tag:"h3",meta:c},a.a.createElement(l.f,null,"Instead of telling the server about every single valid client-side route, a wildcard path is used to match every request. Determining what to render for the request will be done by Curi."),a.a.createElement(l.b,null,'// the wildcard matches every GET request\napp.get("*", renderHandler);'),a.a.createElement(l.e,null,a.a.createElement(l.f,null,"The ",a.a.createElement(l.d,null,"*")," wildcard handler is similar to the Curi path"," ",a.a.createElement(l.d,null,"(.*)"),". Express and Curi both use"," ",a.a.createElement(l.d,null,"path-to-regexp")," for path matching. However, Express uses an old version. ",a.a.createElement(l.d,null,"path-to-regexp")," removed support for the barebones ",a.a.createElement(l.d,null,"*")," pattern in the version that Curi uses, which is why we have to use ",a.a.createElement(l.d,null,"(.*)")," in Curi routes."))),a.a.createElement(l.c,{tag:"h3",meta:u},a.a.createElement(l.f,null,"Page requests aren't the only requests that the framework will handle. Requests for static resources, like scripts, stylesheet, and images shouldn't be handled by Curi. Express provides a"," ",a.a.createElement(l.d,null,"static"),' method to map request locations "real" (files exist on the server) locations.'),a.a.createElement(l.b,null,'app.use("/static", express.static());'),a.a.createElement(l.f,null,"Using the above static file handler, all static file requests in HTML/JavaScript should begin with ",a.a.createElement(l.d,null,"/static"),"."),a.a.createElement(l.b,{lang:"html"},'<img src="/static/img/circle.png" />')),a.a.createElement(l.c,{tag:"h3",meta:d},a.a.createElement(l.f,null,"Express matches against paths in the order that they are registered, so the static files path needs to be defined before the wildcard path."),a.a.createElement(l.f,null,"Any other non-page paths, like APIs, would also need to be defined before the catch-all."),a.a.createElement(l.b,null,'app.use("/static", express.static());\napp.use("/api", dataHandler);\napp.get("*", renderHandler);'))),a.a.createElement(l.c,{meta:m,tag:"h2"},a.a.createElement(l.f,null,"The render handler function receives the request object and a response object. The response object is used to build and send a response to the user."),a.a.createElement(l.b,null,'// renderer.js\nfunction renderHandler(req, res) {\n\n}\n\n// server.js\nlet renderHandler = require("./renderer");\n\napp.get("*", renderHandler)'),a.a.createElement(l.e,null,a.a.createElement(l.f,null,"If you are setting up a server without server-side rendering, the"," ",a.a.createElement(l.d,null,"renderHandler")," function could use ",a.a.createElement(l.d,null,"res.sendFile")," ","to return a universal HTML file for every route.")),a.a.createElement(l.b,null,'let index = path.join(__dirname, "public", "index.html");\n\nfunction renderHandler(req, res) {\n  res.sendFile(index);\n}')),a.a.createElement(l.c,{meta:E,tag:"h2"},a.a.createElement(l.f,null,"A router instance will be created for every single request. The router will match the requested location to its routes and generate a response, which can be used to render the HTML."),a.a.createElement(l.f,null,"Curi has two optimizations to make this more efficient:"),a.a.createElement("ol",null,a.a.createElement("li",null,"By wrapping the routes array in a ",a.a.createElement(l.d,null,"prepareRoutes")," call, all of an application's routes are pre-compiled. Without"," ",a.a.createElement(l.d,null,"prepareRoutes"),", the route pathes would need to be re-compiled for every request!"),a.a.createElement("li",null,"We will use a lightweight history type created specifically for server-side rendering.")),a.a.createElement(l.b,null,'// renderer.js\nimport { createRouter } from "@curi/router";\nimport { createReusable } from "@hickory/in-memory";\n\nlet reusable = createReusable();\n\nfunction handler(req, res) {\n  let router = createRouter(reusable, routes, {\n    history: { location: req.url }\n  });\n  router.once(({ response }) => {\n    // render the response\n  })\n}'),a.a.createElement(l.c,{tag:"h3",meta:p},a.a.createElement(l.f,null,"On the client-side, a single-page application uses"," ",a.a.createElement(l.d,null,"@hickory/browser")," to create a history instance. However, that uses browser only APIs. On the server, the"," ",a.a.createElement(l.d,null,"@hickory/in-memory")," package is used to create a history instance that only exists in memory."),a.a.createElement(l.b,{lang:"bash"},"npm install @hickory/in-memory"),a.a.createElement(l.f,null,"The server doesn't need a fully functional history object. Instead, the server only needs a history object that knows its location and how to generate URLs."),a.a.createElement(l.f,null,"The ",a.a.createElement(l.d,null,"createReusable")," function exported by"," ",a.a.createElement(l.d,null,"@hickory/in-memory")," is made specifically for this job."," ",a.a.createElement(l.d,null,"createReusable")," takes history options and returns a history function."),a.a.createElement(l.f,null,a.a.createElement(l.d,null,"createReusable")," creates internal functions for location parsing/stringifying ahead of time so that they don't need to be recreated for every request."),a.a.createElement(l.b,null,'// handler.js\nimport { createRouter } from "@curi/router";\nimport { createReusable } from "@hickory/in-memory";\n\nlet reusable = createReusable();'),a.a.createElement(l.f,null,"When creating the router, we must pass a ",a.a.createElement(l.d,null,"history")," option with the location of the request."),a.a.createElement(l.b,null,"function handler(req, res) {\n  let router = createRouter(reusable, routes, {\n    history: { location: req.url }\n  });\n  // ...\n}")),a.a.createElement(l.c,{tag:"h3",meta:f},a.a.createElement(l.f,null,"As stated above, the ",a.a.createElement(l.d,null,"prepareRoutes")," function is used to pre-compile routes, which means that they don't end up being re-compiled for every single request. If all of an application's routes are synchronous (they don't use ",a.a.createElement(l.d,null,"route.resolve"),"), then they don't need to do anything else for server-side rendering."),a.a.createElement(l.f,null,"Ideally, you will be able to re-use your client side routes on the server, but if the client routes use browser only APIs, you may need to adapt the routes to work on the server."),a.a.createElement(l.b,null,'// handler.js\nimport routes from "../client/routes";'),a.a.createElement(l.f,null,"One approach to client/server routes is to keep two copies: one for the client and one for the server. However, this should be a last resort because it can lead to inconsistencies if you update one file but not the other."),a.a.createElement(l.f,null,'A more reusable approach would be to use "universal" wrappers around any environment specific APIs. For example, the'," ",a.a.createElement("a",{href:"https://github.com/matthew-andrews/isomorphic-fetch"},a.a.createElement(l.d,null,"isomorphic-fetch"))," ","package could be used to support ",a.a.createElement(l.d,null,"fetch")," in the browser and Node."),a.a.createElement(l.b,null,'// routes.js\nimport fetch from "isomorphic-fetch";\nimport { prepareRoutes } from "@curi/router";\n\nexport default prepareRoutes([\n  {\n    name: "Test",\n    path: "test",\n    resolve() {\n      return fetch("/test-data");\n    }\n  }\n]);'))),a.a.createElement(l.c,{meta:y,tag:"h2"},a.a.createElement(l.f,null,"When the router is created, it will start generating a response by matching its ",a.a.createElement(l.d,null,"history")," object's current location. If the application has any asynchronous routes, the ",a.a.createElement(l.d,null,"response")," may not be ready immediately. The safest approach is to use"," ",a.a.createElement(l.d,null,"router.once")," to wait for the ",a.a.createElement(l.d,null,"response"),"."),a.a.createElement(l.b,{"data-line":"5-7"},"function renderHandler(req, res) {\n  let router = createRouter(reusable, routes, {\n    history: { location: req.url }\n  });\n  router.once(({ response }) => {\n    // ...\n  });\n}"),a.a.createElement(l.f,null,"Once the response is generated, we are ready to render. This step will generate the HTML string for the application. How exactly you do this depends on what UI renderer you are using, but the process is approximately the same for most renderering libraries."),a.a.createElement(l.f,null,"Here, we will assume that you are using React. The"," ",a.a.createElement(l.d,null,"react-dom/server")," module provides a"," ",a.a.createElement(l.d,null,"renderToString")," method, which will render an application as a string."),a.a.createElement(l.f,null,"Rendering with React on the server is essentially the same as rendering on the client. We create a ",a.a.createElement(l.d,null,"Router")," and use"," ",a.a.createElement(l.d,null,"renderToString")," (instead of ",a.a.createElement(l.d,null,"ReactDOM.render"),") to render the component."),a.a.createElement(l.b,{"data-line":"1-2,9-14"},'import { renderToString } from "react-dom/server";\nimport { createRouterComponent } from "@curi/react-dom";\n\nfunction renderHandler(req, res) {\n  let router = createRouter(reusable, routes, {\n    history: { location: req.url }\n  });\n  router.once(({ response }) => {\n    let Router = createRouterComponent(router);\n    let markup = renderToString(\n      <Router>\n        <App />\n      </Router>\n    );\n  });\n}'),a.a.createElement(l.f,null,"Rendering with ",a.a.createElement(l.d,null,"renderToString")," only generates an HTML string for the application. We are missing the ",a.a.createElement(l.a,null,"html"),","," ",a.a.createElement(l.a,null,"head"),",",a.a.createElement(l.a,null,"body"),", ",a.a.createElement(l.a,null,"script"),", etc. tags that are required for the full HTML page to properly function."),a.a.createElement(l.f,null,"We can write a function that takes the string created by"," ",a.a.createElement(l.d,null,"renderToString"),"and inserts it into the full HTML string for a page."),a.a.createElement(l.f,null,"For a React application, the markup string should be set as the child of its container element. If you render into the ",a.a.createElement(l.d,null,"#root")," ","element on the client, the HTML should have a ",a.a.createElement(l.d,null,"#root")," ","element."),a.a.createElement(l.f,null,"Any JavaScript scripts that need to be rendered should also be included in the HTML. Make sure that their paths are absolute; if the path is relative, then you will run into errors resolving the location for nested routes!"),a.a.createElement(l.f,null,"The ",a.a.createElement(l.d,null,"meta")," property of a ",a.a.createElement(l.d,null,"response")," is useful for server-side rendering. For example, routes can set"," ",a.a.createElement(l.d,null,"meta.title")," to be the page's title, which can be inserted into the generated HTML."),a.a.createElement(l.b,{"data-line":"4-15,28-29"},'import { renderToString } from "react-dom/server";\nimport { createRouterComponent } from "@curi/react-dom";\n\nfunction insertMarkup(markup, title) {\n  return `<!doctype html>\n<html>\n  <head>\n    <title>${title} | My Site</title>\n  </head>\n  <body>\n    <div id="root">${markup}</div>\n    <script src="/static/js/bundle.js"><\/script>\n  </body>\n</html>`;\n}\n\nfunction renderHandler(req, res) {\n  let router = createRouter(reusable, routes, {\n    history: { location: req.url }\n  });\n  router.once(({ response }) => {\n    let Router = createRouterComponent(router);\n    let markup = renderToString(\n      <Router>\n        <App />\n      </Router>\n    );\n    let html = insertMarkup(markup, response.meta.title);\n    res.send(html);\n  });\n}'),a.a.createElement(l.e,null,a.a.createElement(l.f,null,"If you server render a React application, you should use"," ",a.a.createElement(l.d,null,"ReactDOM.hydrate")," instead of ",a.a.createElement(l.d,null,"ReactDOM.render")," on the client.")),a.a.createElement(l.c,{tag:"h3",meta:b},a.a.createElement(l.f,null,"If a route matches and it redirects, you can handle it without rendering the application. A ",a.a.createElement(l.d,null,"response")," is a redirect if it has a ",a.a.createElement(l.d,null,"redirect")," property. ",a.a.createElement(l.d,null,"redirect.url")," is that full URL (",a.a.createElement(l.d,null,"pathname"),", ",a.a.createElement(l.d,null,"query"),", and ",a.a.createElement(l.d,null,"hash"),")."),a.a.createElement(l.b,{"data-line":"9-12"},'import { renderToString } from "react-dom/server";\nimport { createRouterComponent } from "@curi/react-dom";\n\nfunction renderHandler(req, res) {\n  let router = createRouter(reusable, routes, {\n    history: { location: req.url }\n  });\n  router.once(({ response }) => {\n    if (response.redirect) {\n      res.redirect(301);\n      return;\n    }\n    // otherwise, render\n  });\n}'))))}}}]);