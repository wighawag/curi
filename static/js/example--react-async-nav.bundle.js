(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{63:function(e,n,t){"use strict";t.r(n),t.d(n,"component",function(){return s}),t.d(n,"contents",function(){return m});var a=t(0),i=t.n(a),r=t(24),l={title:"Async Navigation"},o={title:"Explanation",hash:"explanation"},c={title:"Live Demo",hash:"demo"},m=[o,c,r.i];function s(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,l.title),i.a.createElement(r.d,{meta:o},i.a.createElement("p",null,"If the ",i.a.createElement(r.a,null,"Link"),"'s ",i.a.createElement(r.e,null,"children")," prop is a render-invoked function, it will be passed a boolean to indicate whether or not it is currently navigating. We can modify what the function returns to render a loading indicator while waiting for the navigation to complete."),i.a.createElement(r.b,{lang:"jsx"},"<Link name=\"Movie\" params={{ id: 'some_movie' }}>\n  {navigating => (\n    <React.Fragment>\n      Some Movie {navigating ? <Spinner /> : null}\n    </React.Fragment>\n  )}\n</Link>")),i.a.createElement(r.d,{meta:c},i.a.createElement(r.c,{id:"github/pshrmn/curi/tree/master/examples/react/async-nav"})),i.a.createElement(r.g,{path:"react/async-nav"}))}}}]);