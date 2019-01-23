(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var a=n(0),r=n.n(a),l=n(26),o={title:"Redirects"};function i(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,o.title),r.a.createElement(l.h,{title:"Explanation",id:"explanation"},r.a.createElement(l.d,null,r.a.createElement("p",null,"Sometimes you will want to redirect based on the results of your"," ",r.a.createElement(l.e,null,"resolve")," functions. For instance, you might see that a user is not authenticated and shouldn't be able to view a page."),r.a.createElement("p",null,"A ",r.a.createElement(l.e,null,"response()")," function can modify the response by setting a ",r.a.createElement(l.e,null,"redirectTo")," property on its return object. Curi will automatically (unless configured not to) redirect to that location.")),r.a.createElement(l.b,{lang:"javascript"},"const routes = prepareRoutes([\n  // ...,\n  {\n    name: 'Protected',\n    path: 'super-secret',\n    response: () => {\n      if (!store.userIsAuthenticated) {\n        // tell Curi to redirect to the Login route\n        return {\n          redirectTo: { name: \"Login\" },\n          status: 302\n        };\n      }\n    }\n  },\n  {\n    name: 'Login',\n    path: 'login',\n    ...\n  }\n]);")),r.a.createElement(l.h,{title:"Live Demo",id:"demo"},r.a.createElement(l.c,{id:"github/pshrmn/curi/tree/master/examples/react/redirects"})),r.a.createElement(l.g,{path:"react/redirects"}))}}}]);