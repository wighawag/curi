(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{70:function(e,n,t){"use strict";t.r(n),t.d(n,"component",function(){return m}),t.d(n,"contents",function(){return s});var a=t(0),i=t.n(a),l=t(20),r={title:"Async Navigation"},o={title:"Explanation",hash:"explanation"},c={title:"Live Demo",hash:"demo"},s=[o,c,l.i];function m(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,r.title),i.a.createElement(l.d,{meta:o},i.a.createElement("p",null,"Use the ",i.a.createElement(l.a,null,"curi-link"),"'s ",i.a.createElement(l.e,null,"slot")," as scoped-slot so you can know whether or not the link is currently navigating."),i.a.createElement(l.b,{lang:"jsx"},'<curi-link to="Movie" :params="{ id: \'some_movie\' }">\n  <template slot-scope="{ navigating }">\n    Some Movie\n    <Spinner v-if="navigating" />\n  </template>\n</curi-link>')),i.a.createElement(l.d,{meta:c},i.a.createElement(l.c,{id:"github/pshrmn/curi/tree/master/examples/vue/async-nav"})),i.a.createElement(l.g,{path:"vue/async-nav"}))}}}]);