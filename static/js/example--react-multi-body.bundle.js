(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{61:function(e,n,t){"use strict";t.r(n),t.d(n,"component",function(){return i}),t.d(n,"contents",function(){return m});var a=t(0),o=t.n(a),r=t(20),l={title:"Multiple Body Components"},u={title:"Explanation",hash:"explanation"},s={title:"Live Demo",hash:"demo"},m=[u,s,r.i];function i(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,l.title),o.a.createElement(r.d,{meta:u},o.a.createElement("p",null,"The ",o.a.createElement(r.e,null,"body")," property of a response doesn't have to be a single component/function; the ",o.a.createElement(r.e,null,"body")," can be anything you want it to be."),o.a.createElement("p",null,"For example, you might want to provide the main and menu content for a route."),o.a.createElement(r.b,{lang:"javascript"},"response() {\n  return {\n    body: {\n      main: MainComponent,\n      menu: MenuComponent\n    }\n  };\n}"),o.a.createElement("p",null,"Another use case is when you have multiple routes that may share the same root component, but may have different nested components. If the root has state that you want preserved when navigating, rendering a common root component means that React will re-use the existing component."),o.a.createElement(r.b,{lang:"javascript"},"response() {\n  return {\n    body: {\n      // multiple routes may use this root\n      root: StatefulComponent,\n      content: MainComponent\n    }\n  };\n}"),o.a.createElement(r.f,null,o.a.createElement("p",null,"One thing to remember when attaching multiple components to a route is that all of your routes should have the same structure. Otherwise, when you render you will have to adapt your code to deal with different ",o.a.createElement(r.e,null,"response.body")," layouts.")),o.a.createElement(r.b,{lang:"javascript"},"// be consistent, don't use\n// different body types\nconst routes = prepareRoutes([\n  {\n    ...,\n    response() {\n      return {\n        body: OneLayout\n      };\n    }\n  },\n  {\n    ...,\n    response() {\n      return {\n        body: { another: Layout }\n      };\n    }\n  }\n]);")),o.a.createElement(r.d,{meta:s},o.a.createElement(r.c,{id:"github/pshrmn/curi/tree/master/examples/react/multi-body"})),o.a.createElement(r.g,{path:"react/multi-body"}))}}}]);