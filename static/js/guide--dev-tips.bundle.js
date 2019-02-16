(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{47:function(e,t,n){"use strict";n.r(t),n.d(t,"component",function(){return u}),n.d(t,"contents",function(){return s});var r=n(0),a=n.n(r),o=n(22),l={title:"Development Tips"},i={title:"Hot Module Replacement",hash:"hmr"},s=[i];function u(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.f,null,a.a.createElement("h1",null,l.title)),a.a.createElement(o.c,{meta:i},a.a.createElement("p",null,"Hot module replacement (HMR) can make development more convenient by automatically updating page content without refreshing the page. With Webpack, there are only a few steps required to get this working with Curi."),a.a.createElement("p",null,"The first step is to get your Webpack configuration setup for hot module replacement. Webpack's"," ",a.a.createElement("a",{href:"https://webpack.js.org/guides/hot-module-replacement/"},"hot module replacement guide")," ","is a good resource to learn how to do this."),a.a.createElement("p",null,"The next step is identifying what file(s) you want to watch. A watched file will be notified when it, any of its dependencies, or any dependencies depndencies (and so on down the line) are updated. The best way to do this with a Curi application is to watch the file where your routes are defined."),a.a.createElement("p",null,"The ",a.a.createElement(o.d,null,"router")," has a ",a.a.createElement(o.d,null,"refresh()")," method that is used for providing new routes to the router. When it is called, it will also generate and emit a new response."),a.a.createElement("p",null,a.a.createElement(o.d,null,"module.hot.accept()")," is used for watching a file and calling a callback when that files or any files in its dependency chain are updated. In the callback, we can re-import the routes and pass them to the router's ",a.a.createElement(o.d,null,"refresh()")," method. This will in turn emit a new response, which will automatically be rendered."),a.a.createElement("p",null,"With that, your application should be setup to support hot module replacement."),a.a.createElement(o.b,{"data-line":"9-14"},'// index.js\nimport { curi } from "@curi/core";\nimport Browser from "@hickory/browser";\nimport routes from "./routes";\n\nconst history = Browser();\nconst router = curi(history, routes);\n\nif (module.hot) {\n  module.hot.accept("./routes.js", function() {\n    const nextRoutes = require("./routes").default;\n    router.refresh(nextRoutes);\n  });\n}')))}}}]);