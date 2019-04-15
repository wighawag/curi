(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"component",function(){return u}),n.d(t,"contents",function(){return l});var r=n(0),a=n.n(r),i=n(21),o={title:"Side Effects"},c={title:"Explanation",hash:"explanation"},s={title:"Live Demo",hash:"demo"},l=[c,s,i.i];function u(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,o.title),a.a.createElement(i.d,{meta:c},a.a.createElement("p",null,"Side effects are observer functions that are run when a new response is created. They are called after other response handlers (observers that were set using ",a.a.createElement(i.e,null,"router.observe")," and one time functions that were set using ",a.a.createElement(i.e,null,"router.once"),"). They receive the new response and an object with information about the navigation."),a.a.createElement("p",null,"Side effect functions are registered when creating a router using the"," ",a.a.createElement(i.e,null,"sideEffects")," property of the options object."),a.a.createElement(i.b,{lang:"javascript"},"import { createRouter } from \"@curi/router\";\nimport mySideEffect from './mySideEffect';\n\nconst router = createRouter(browser, routes, {\n  sideEffects: [mySideEffect]\n});")),a.a.createElement(i.d,{meta:s},a.a.createElement(i.c,{id:"github/pshrmn/curi/tree/master/examples/misc/side-effect",title:"Curi side effect demo"})),a.a.createElement(i.g,{path:"misc/side-effect"}))}}}]);