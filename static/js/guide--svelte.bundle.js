(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{38:function(e,n,t){"use strict";t.r(n),t.d(n,"component",function(){return p}),t.d(n,"contents",function(){return u});var a=t(0),r=t.n(a),l=t(3),o=t(22),s={title:"Svelte"},i={title:"Rendering with the response",hash:"rendering-response"},m={title:"Store Integration",hash:"store",children:[i]},c={title:"Navigating",hash:"navigating"},u=[m,c];function p(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.f,null,r.a.createElement("h1",null,s.title)),r.a.createElement(o.c,{meta:m},r.a.createElement("p",null,"Curi relies on Svelte's store to interface with an application. By adding the ",r.a.createElement(o.d,null,"response")," (plus the ",r.a.createElement(o.d,null,"router")," and"," ",r.a.createElement(o.d,null,"navigation")," objects) to the store, they are accessible throughout the application."),r.a.createElement("p",null,r.a.createElement(o.d,null,"@curi/svelte")," provides a function to link the router to the store. This sets up an"," ",r.a.createElement(l.a,{name:"Guide",params:{slug:"navigating"},hash:"observer"},"observer"),", so that whenever there is a new response, the parts of your application that use the response will be re-rendered."),r.a.createElement(o.b,{lang:"jsx"},'import store from "svelte/store";\nimport { curiStore } from "@curi/svelte";\n\nimport router from "./router";\n\nconst store = new Store();\ncuriStore(router, store);'),r.a.createElement(o.c,{meta:i,tag:"h3"},r.a.createElement("p",null,"Svelte allows you to render dynamic components using the"," ",r.a.createElement(o.a,null,"svelte:component this")," syntax. If you set Svelte components as the ",r.a.createElement(o.d,null,"body")," properties on your responses, you can combine ",r.a.createElement(o.a,null,"svelte:component this")," and"," ",r.a.createElement(o.d,null,"response.body")," to render the appropriate component for a"," ",r.a.createElement(o.d,null,"response"),"."),r.a.createElement("p",null,"A root component is a good place to perform general application layout, like menus, in addition to rendering the response's"," ",r.a.createElement(o.d,null,"body"),"."),r.a.createElement(o.b,{lang:"html"},'<template>\n  <header>\n    <NavLinks />\n  </header>\n  <main>\n    <svelte:component this={$curi.response.body} />\n  </main>\n</template>\n\n<script>\n  import NavLinks from "./NavLinks";\n  export default {\n    components: { NavLinks }\n  };\n<\/script>'),r.a.createElement("p",null,"If your routes use an object to attach multiple components to a response, splitting them apart in computed properties may give your templates a cleaner look."),r.a.createElement("p",null,"If you do attach multiple components to a response, please remember that you want every route to set the same ",r.a.createElement(o.d,null,"body")," shape. Otherwise, you'll have to determine the shape and change how you render, which can quickly become messy."),r.a.createElement(o.b,{lang:"html"},'<script>\nconst routes = prepare_routes([\n  {\n    name: "Home",\n    path: "",\n    response() {\n      return {\n        body: {\n          main: HomeMain,\n          menu: HomeMenu\n        }\n      }\n    }\n  },\n  // ...\n]);\n<\/script>\n\n<template>\n  <header>\n    <svelte:component this={menu} />\n  </header>\n  <main>\n  <svelte:component this={main} />\n  </main>\n</template>\n\n<script>\n  export default {\n    computed: {\n      main({ $curi }) {\n        return $curi.response.body.main;\n      },\n      menu({ $curi }) {\n        return $curi.response.body.menu;\n      }\n    }\n  }\n<\/script>'))),r.a.createElement(o.c,{meta:c},r.a.createElement("p",null,"The ",r.a.createElement(o.d,null,"Link")," component is used to navigate between routes within an application. When it renders in the DOM, it will render as an anchor (",r.a.createElement(o.a,null,"a"),") element."),r.a.createElement("p",null,"The ",r.a.createElement(o.d,null,"Link"),"'s ",r.a.createElement(o.d,null,"to")," prop describes which route clicking the link should navigate to. If you pass an invalid route name, Curi will warn you."),r.a.createElement("p",null,"If a route has any params (or if any of a route's ancestors have params for nested routes), the ",r.a.createElement(o.d,null,"params")," prop is used to pass these to the ",r.a.createElement(o.d,null,"Link"),"."),r.a.createElement(o.b,{lang:"html"},'<template>\n  <nav>\n    <ul>\n      <li>\n        <Link name="Home">Home</Link>\n      </li>\n      <li>\n        <Link name="About">About</Link>\n      </li>\n      <li>\n        <Link name="User" params={{ id: \'blue\' }}>\n          Blue\n        </Link>\n      </li>\n    </ul>\n  </nav>\n</template>\n\n<script>\n  import Link from "@curi/svelte/components/Link.html";\n\n  export default {\n    components: { Link }\n  };\n<\/script>'),r.a.createElement("p",null,"The ",r.a.createElement(o.d,null,"Link")," also takes ",r.a.createElement(o.d,null,"hash"),", ",r.a.createElement(o.d,null,"query"),", and"," ",r.a.createElement(o.d,null,"state")," props to attach their values to the location that will be navigated to."),r.a.createElement(o.b,{lang:"jsx"},'<Link name="Home" hash="details">Home</Link>\n// renders\n<a href="/#details">Home</a>')),r.a.createElement(o.f,null,r.a.createElement("p",null,"Please check out the full"," ",r.a.createElement(l.a,{name:"Package",params:{package:"svelte",version:"v1"},hash:"API"},r.a.createElement(o.d,null,"@curi/svelte"))," ","API documentation to see every component that the package provides.")))}}}]);