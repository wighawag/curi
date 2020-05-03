(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{71:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),i=a(19),u={title:"CuriPlugin",hash:"CuriPlugin"};var o={title:"Props",hash:"props"},c={title:"curi-link",hash:"link"};var s={title:"Properties",hash:"focus-properties"},m={title:"curi-focus",hash:"focus"};var h={about:l.a.createElement(i.b,null,l.a.createElement(i.h,null,"This package enables you to use Curi alongside VueJS."),l.a.createElement(i.h,null,"For more information on using Curi with Vue, please check out the"," ",l.a.createElement(r.a,{name:"Guide",params:{slug:"vue"}},"Vue guide"),".")),api:l.a.createElement(i.a,null,l.a.createElement(function(){return l.a.createElement(i.e,{meta:u,tag:"h2"},l.a.createElement(i.h,null,"What does the plugin do?"),l.a.createElement("ol",null,l.a.createElement("li",null,"Register ",l.a.createElement(i.f,null,"curi-link")," and ",l.a.createElement(i.f,null,"curi-block")," components with Vue so they can be used anywhere within your application without manually importing."),l.a.createElement("li",null,"Makes the Curi router globally available to Vue components as"," ",l.a.createElement(i.f,null,"$router"),"."),l.a.createElement("li",null,"Makes responses and navigations available to components through the"," ",l.a.createElement(i.f,null,"$curi")," property. ",l.a.createElement(i.f,null,"$curi")," is responsive, so when a new response is emitted, ",l.a.createElement(i.f,null,"$curi.response")," and"," ",l.a.createElement(i.f,null,"$curi.navigation")," will automatically be updated.")),l.a.createElement(i.d,null,"import { CuriPlugin } from '@curi/vue';\n\nlet router = createRouter(history, routes);\nVue.use(CuriPlugin, { router });"))},null),l.a.createElement(function(){return l.a.createElement(i.e,{meta:c,tag:"h2"},l.a.createElement(i.h,null,"The ",l.a.createElement(i.f,null,"curi-link")," component will render an anchor (",l.a.createElement(i.c,null,"a"),") element."),l.a.createElement(i.e,{tag:"h3",meta:o},l.a.createElement(i.e,{tag:"h4",meta:{title:"to",hash:"Link-to"}},l.a.createElement(i.h,null,l.a.createElement(i.f,null,"name")," - The name of the route to navigate to."," ",l.a.createElement("em",null,"This is required"),"."),l.a.createElement(i.d,{lang:"html"},"<curi-link name='Home'>Home</curi-link>\n\x3c!-- <a href=\"/\">Home</a> --\x3e")),l.a.createElement(i.e,{tag:"h4",meta:{title:"params",hash:"Link-params"}},l.a.createElement(i.h,null,l.a.createElement(i.f,null,"params")," - An object containing the key-value params for the route. For example, if you are linking to a route with the path"," ",l.a.createElement(i.f,null,"album/:title"),", the params object should have a"," ",l.a.createElement(i.f,null,"title")," property."),l.a.createElement(i.d,{lang:"html"},"<curi-link\n  name='Album'\n  :params=\"{ title: 'Coloring Book' }\"\n  >\n  Coloring Book\n</curi-link>")),l.a.createElement(i.e,{tag:"h4",meta:{title:"hash",hash:"Link-hash"}},l.a.createElement(i.h,null,l.a.createElement(i.f,null,"hash")," - the hash for the location to link to"),l.a.createElement(i.d,{lang:"html"},'<curi-link name="Home" hash="test">Home</curi-link>\n\x3c!-- <a href="/#test">Home</a> --\x3e')),l.a.createElement(i.e,{tag:"h4",meta:{title:"query",hash:"Link-query"}},l.a.createElement(i.h,null,l.a.createElement(i.f,null,"query")," - the query for the location to link to"),l.a.createElement(i.d,{lang:"html"},'<curi-link name="Home" query="one=1">Home</curi-link>\n\x3c!-- <a href="/?one=1">Home</a> --\x3e')),l.a.createElement(i.e,{tag:"h4",meta:{title:"state",hash:"Link-state"}},l.a.createElement(i.f,null,"state")," - the state to associated with the location"),l.a.createElement(i.e,{tag:"h4",meta:{title:"slots",hash:"Link-slots"}},l.a.createElement(i.h,null,"The ",l.a.createElement(i.f,null,"curi-link"),"'s can take either a regular slot or a scoped slot."),l.a.createElement(i.h,null,"When given a scoped slot, the ",l.a.createElement(i.f,null,"curi-link")," will inject the link's navigation state (a ",l.a.createElement(i.f,null,"navigating")," property). The navigation state is ",l.a.createElement(i.f,null,"false")," by default, ",l.a.createElement(i.f,null,"true")," ","when the ",l.a.createElement(i.f,null,"curi-link")," is clicked, and ",l.a.createElement(i.f,null,"false")," when the the navigation finishes/is cancelled."),l.a.createElement(i.d,{lang:"html"},'\x3c!-- a regular slot --\x3e\n<curi-link name="Home">\n  Home\n</curi-link>\n\n\x3c!-- a scoped slot --\x3e\n<curi-link name="User" :params="{ id: 1 }">\n  <template slot-scope="{ navigating }">\n    User 1\n    <spinner v-if="navigating" />\n  </template>\n</curi-ink>'))))},null),l.a.createElement(function(){return l.a.createElement(i.e,{meta:m,tag:"h2"},l.a.createElement(i.h,null,"The ",l.a.createElement(i.f,null,"curi-focus")," directive is used to specify an element that should be focused when a new response is emitted."),l.a.createElement(i.h,null,'The DOM component that gets the ref should either already be "focusable", like an ',l.a.createElement(i.c,null,"input"),", or be given a ",l.a.createElement(i.f,null,"tabIndex")," ","prop (usually with the value of ",l.a.createElement(i.f,null,"-1"),"). If neither of these conditions is met, then the document's"," ",l.a.createElement(i.c,null,"body")," will be focused."),l.a.createElement(i.h,null,"The focused element will have an outline (the exact style varies by browser). You can remove this visual with a CSS outline of"," ",l.a.createElement(i.f,null,'"none"'),"."),l.a.createElement(i.g,null,l.a.createElement(i.h,null,"You should only have one focused element rendered at a time.")),l.a.createElement(i.d,{lang:"html"},'<template>\n  <main :tabIndex="-1" v-curi-focus="{ key: $curi.response }">\n    <component :is="$curi.response.body" />\n  </main>\n</template>'),l.a.createElement(i.e,{tag:"h3",meta:s},l.a.createElement(i.e,{tag:"h4",meta:{title:"key",hash:"focus-key"}},l.a.createElement(i.h,null,"A value that changes when there is a new response; the"," ",l.a.createElement(i.f,null,"response")," is usually fine for this.")),l.a.createElement(i.e,{tag:"h4",meta:{title:"preserve",hash:"focus-preserve"}},l.a.createElement(i.h,null,"When ",l.a.createElement(i.f,null,"true")," (",l.a.createElement(i.f,null,"false")," by default), the element will not be focused if one of its children elements is already focused."),l.a.createElement(i.h,null,"This is useful if the element has children that are automatically focused (",l.a.createElement(i.c,null,"input autofocus"),")."),l.a.createElement(i.d,{lang:"html"},'\x3c!-- <input> will be focused --\x3e\n<template>\n  <main\n    :tabIndex="-1"\n    v-curi-focus="{ key: $curi.response, preserve: true}"\n  >\n    <input autofocus />\n  </main>\n</template>\n\n\x3c!-- <main> will be focused --\x3e\n<template>\n  <main :tabIndex="-1" v-curi-focus="{ key: $curi.response }">\n    <input autofocus />\n  </main>\n</template>')),l.a.createElement(i.e,{tag:"h4",meta:{title:"preventScroll",hash:"focus-preventScroll"}},l.a.createElement(i.h,null,"When ",l.a.createElement(i.f,null,"true")," (",l.a.createElement(i.f,null,"false")," by default), the element will not be scrolled to when it is focused."),l.a.createElement(i.h,null,"This only works in browsers that support the"," ",l.a.createElement(i.f,null,"preventScroll")," option for ",l.a.createElement(i.f,null,"focus"),"."),l.a.createElement(i.d,{lang:"html"},'<template>\n  <main\n    :tabIndex="-1"\n    v-curi-focus="{ key: $curi.response, preventScroll: true}"\n  >\n  <component :is="$curi.response.body" />\n  </main>\n</template>'))))},null))},f=[{title:"Installation",hash:"installation"},{title:"About",hash:"about"},{title:"API",hash:"API",children:[u,c,m]}];a.d(t,"sections",function(){return h}),a.d(t,"contents",function(){return f})}}]);