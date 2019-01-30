(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{91:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),o=n(20),i={title:"CuriPlugin",hash:"CuriPlugin"};function c(){return l.a.createElement(o.e,{meta:i},l.a.createElement("p",null,"What does the plugin do?"),l.a.createElement("ol",null,l.a.createElement("li",null,"Register ",l.a.createElement(o.c,null,"curi-link")," and ",l.a.createElement(o.c,null,"curi-block")," components with Vue so they can be used anywhere within your application without manually importing."),l.a.createElement("li",null,"Makes the Curi router globally available to Vue components as"," ",l.a.createElement(o.f,null,"$router"),"."),l.a.createElement("li",null,"Makes responses and navigations available to components through the"," ",l.a.createElement(o.f,null,"$curi")," property. ",l.a.createElement(o.f,null,"$curi")," is responsive, so when a new response is emitted, ",l.a.createElement(o.f,null,"$curi.response")," and"," ",l.a.createElement(o.f,null,"$curi.navigation")," will automatically be updated.")),l.a.createElement(o.d,null,"import { CuriPlugin } from '@curi/vue';\n\nconst router = curi(history, routes);\nVue.use(CuriPlugin, { router });"))}var u={title:"Props",hash:"props"},s={title:"<curi-link>",hash:"link",children:[u]};function m(){return l.a.createElement(o.e,{meta:s},l.a.createElement("p",null,"The ",l.a.createElement(o.c,null,"curi-link")," component will render an anchor (",l.a.createElement(o.c,null,"a"),") element."),l.a.createElement(o.e,{tag:"h3",meta:u},l.a.createElement(o.e,{tag:"h4",meta:{title:"to",hash:"Link-to"}},l.a.createElement("p",null,l.a.createElement(o.f,null,"to")," - The name of the route to navigate to."," ",l.a.createElement("em",null,"This is required"),"."),l.a.createElement(o.d,{lang:"html"},"<curi-link to='Home'>Home</curi-link>\n\x3c!-- <a href=\"/\">Home</a> --\x3e")),l.a.createElement(o.e,{tag:"h4",meta:{title:"params",hash:"Link-params"}},l.a.createElement("p",null,l.a.createElement(o.f,null,"params")," - An object containing the key-value params for the route. For example, if you are linking to a route with the path"," ",l.a.createElement(o.f,null,"album/:title"),", the params object should have a"," ",l.a.createElement(o.f,null,"title")," property."),l.a.createElement(o.d,{lang:"html"},"<curi-link\n  to='Album'\n  :params=\"{ title: 'Coloring Book' }\"\n  >\n  Coloring Book\n</curi-link>")),l.a.createElement(o.e,{tag:"h4",meta:{title:"hash",hash:"Link-hash"}},l.a.createElement("p",null,l.a.createElement(o.f,null,"hash")," - the hash for the location to link to"),l.a.createElement(o.d,{lang:"html"},'<curi-link to="Home" hash="test">Home</curi-link>\n\x3c!-- <a href="/#test">Home</a> --\x3e')),l.a.createElement(o.e,{tag:"h4",meta:{title:"query",hash:"Link-query"}},l.a.createElement("p",null,l.a.createElement(o.f,null,"query")," - the query for the location to link to"),l.a.createElement(o.d,{lang:"html"},'<curi-link to="Home" query="one=1">Home</curi-link>\n\x3c!-- <a href="/?one=1">Home</a> --\x3e')),l.a.createElement(o.e,{tag:"h4",meta:{title:"state",hash:"Link-state"}},l.a.createElement(o.f,null,"state")," - the state to associated with the location"),l.a.createElement(o.e,{tag:"h4",meta:{title:"slots",hash:"Link-slots"}},l.a.createElement("p",null,"The ",l.a.createElement(o.c,null,"curi-link"),"'s can take either a regular slot or a scoped slot."),l.a.createElement("p",null,"When given a scoped slot, the ",l.a.createElement(o.c,null,"curi-link")," will inject the link's navigation state (a ",l.a.createElement(o.f,null,"navigating")," property). The navigation state is ",l.a.createElement(o.f,null,"false")," by default, ",l.a.createElement(o.f,null,"true")," ","when the ",l.a.createElement(o.c,null,"curi-link")," is clicked, and ",l.a.createElement(o.f,null,"false")," when the the navigation finishes/is cancelled."),l.a.createElement(o.d,{lang:"html"},'\x3c!-- a regular slot --\x3e\n<curi-link to="Home">\n  Home\n</curi-link>\n\n\x3c!-- a scoped slot --\x3e\n<curi-link to="User" :params="{ id: 1 }">\n  <template slot-scope="{ navigating }">\n    User 1\n    <spinner v-if="navigating" />\n  </template>\n</curi-ink>'))))}var h={title:"<curi-block>",hash:"block"};function p(){return l.a.createElement(o.e,{meta:h},l.a.createElement("p",null,"The ",l.a.createElement(o.c,null,"curi-block")," component can be used to automatically block navigation from a page. This will only block in-app navigation. If the user attempts to leave your application, they will not be blocked."),l.a.createElement("p",null,"The ",l.a.createElement(o.c,null,"curi-block")," expects two props: ",l.a.createElement(o.f,null,"active")," and"," ",l.a.createElement(o.f,null,"confirm"),"."),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.f,null,"active")," - When this is true, navigation will be blocked and when it is false, navigation will be allowed. If you do not provide this prop, it will default to ",l.a.createElement(o.f,null,"true"),"."),l.a.createElement("li",null,l.a.createElement(o.f,null,"confirm")," - The function that will be called to confirm/deny the navigation.")),l.a.createElement(o.d,{lang:"html"},'<template>\n  <div>\n    \x3c!-- ... --\x3e\n    <curi-block :active="active" :confirm="confirm" />\n  </div>\n</template>\n\n<script>\n  export default {\n    data: {\n      active: true\n    },\n    methods: {\n      confirm(information, go, stay) {\n        const confirmed = window.confirm(\'Navigate?\');\n        if (confirmed) {\n          go();\n        } else {\n          stay();\n        }\n      }\n    }\n  }\n<\/script>'))}var f={title:"Properties",hash:"focus-properties"},E={title:"<curi-focus>",hash:"focus",children:[f]};function d(){return l.a.createElement(o.e,{meta:E},l.a.createElement("p",null,"The ",l.a.createElement(o.f,null,"curi-focus")," directive is used to specify an element that should be focused when a new response is emitted."),l.a.createElement("p",null,'The DOM component that gets the ref should either already be "focusable", like an ',l.a.createElement(o.c,null,"input"),", or be given a ",l.a.createElement(o.f,null,"tabIndex")," ","prop (usually with the value of ",l.a.createElement(o.f,null,"-1"),"). If neither of these conditions is met, then the document's"," ",l.a.createElement(o.c,null,"body")," will be focused."),l.a.createElement("p",null,"The focused element will have an outline (the exact style varies by browser). You can remove this visual with a CSS outline of"," ",l.a.createElement(o.f,null,'"none"'),"."),l.a.createElement(o.g,null,l.a.createElement("p",null,"You should only have one focused element rendered at a time.")),l.a.createElement(o.d,{lang:"html"},'<template>\n  <main :tabIndex="-1" v-curi-focus="{ key: $curi.response }">\n    <component :is="$curi.response.body" />\n  </main>\n</template>'),l.a.createElement(o.e,{tag:"h3",meta:f},l.a.createElement(o.e,{tag:"h4",meta:{title:"key",hash:"focus-key"}},l.a.createElement("p",null,"A value that changes when there is a new response; the"," ",l.a.createElement(o.f,null,"response")," is usually fine for this.")),l.a.createElement(o.e,{tag:"h4",meta:{title:"preserve",hash:"focus-preserve"}},l.a.createElement("p",null,"When ",l.a.createElement(o.f,null,"true")," (",l.a.createElement(o.f,null,"false")," by default), the element will not be focused if one of its children elements is already focused."),l.a.createElement("p",null,"This is useful if the element has children that are automatically focused (",l.a.createElement(o.c,null,"input autofocus"),")."),l.a.createElement(o.d,{lang:"html"},'\x3c!-- <input> will be focused --\x3e\n<template>\n  <main\n    :tabIndex="-1"\n    v-curi-focus="{ key: $curi.response, preserve: true}"\n  >\n    <input autofocus />\n  </main>\n</template>\n\n\x3c!-- <main> will be focused --\x3e\n<template>\n  <main :tabIndex="-1" v-curi-focus="{ key: $curi.response }">\n    <input autofocus />\n  </main>\n</template>')),l.a.createElement(o.e,{tag:"h4",meta:{title:"preventScroll",hash:"focus-preventScroll"}},l.a.createElement("p",null,"When ",l.a.createElement(o.f,null,"true")," (",l.a.createElement(o.f,null,"false")," by default), the element will not be scrolled to when it is focused."),l.a.createElement("p",null,"This only works in browsers that support the"," ",l.a.createElement(o.f,null,"preventScroll")," option for ",l.a.createElement(o.f,null,"focus()"),"."),l.a.createElement(o.d,{lang:"html"},'<template>\n  <main\n    :tabIndex="-1"\n    v-curi-focus="{ key: $curi.response, preventScroll: true}"\n  >\n  <component :is="$curi.response.body" />\n  </main>\n</template>'))))}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,v(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,l.a.PureComponent),n=t,(a=[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.b,null,l.a.createElement("p",null,"This package enables you to use Curi alongside VueJS."),l.a.createElement("p",null,"For more information on using Curi with Vue, please check out the"," ",l.a.createElement(r.b,{name:"Guide",params:{slug:"vue"}},"Vue guide"),".")),l.a.createElement(o.a,null,l.a.createElement(c,null),l.a.createElement(m,null),l.a.createElement(p,null),l.a.createElement(d,null)))}}])&&y(n.prototype,a),i&&y(n,i),t}(),x=[{title:"Installation",hash:"installation"},{title:"About",hash:"about"},{title:"API",hash:"API",children:[i,s,h,E]}];n.d(t,"component",function(){return w}),n.d(t,"contents",function(){return x})}}]);