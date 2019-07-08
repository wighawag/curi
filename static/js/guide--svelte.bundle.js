(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{44:function(e,n,t){"use strict";t.r(n),t.d(n,"component",function(){return u}),t.d(n,"contents",function(){return p});var a=t(0),o=t.n(a),l=t(3),r=t(21),s={title:"Svelte"},i={title:"Rendering with the response",hash:"rendering-response"},m={title:"Store Integration",hash:"store",children:[i]},c={title:"Navigating",hash:"navigating"},p=[m,c];function u(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.f,null,o.a.createElement("h1",null,s.title)),o.a.createElement(r.c,{meta:m,tag:"h2"},o.a.createElement("p",null,"Curi's Svelte integration relies on stores and context. These are setup automatically if you pass a Curi router to the ",o.a.createElement(r.d,null,"Router")," ","component."),o.a.createElement(r.b,null,'import App from "./components/App.svelte";\n\nconst router = createRouter(browser, routes);\nnew App({ target, props: { router } });'),o.a.createElement("p",null,"The ",o.a.createElement(r.d,null,"Router")," component makes router related data available throughout the application."),o.a.createElement(r.b,{lang:"html"},'\x3c!-- /components/App.svelte --\x3e\n<Router {router}>\n  <Content />\n</Router>\n\n<script>\n  import Router from "@curi/svelte/components/Router.svelte";\n  import Content from "./components/Content.svelte";\n\n  export let router;\n<\/script>'),o.a.createElement("p",null,"Components that need to access the ",o.a.createElement(r.d,null,"router"),","," ",o.a.createElement(r.d,null,"response"),", or ",o.a.createElement(r.d,null,"navigation")," can do so with their corresponding getter functions."),o.a.createElement(r.b,{lang:"html"},'<script>\n  import { getRouter, getResponse, getNavigation } from "@curi/svelte";\n\n  const router = getRouter();\n  const response = getResponse();\n  const navigation = getNavigation();\n<\/script>'),o.a.createElement("p",null,"The ",o.a.createElement(r.d,null,"getRouter")," function returns the actual router, while"," ",o.a.createElement(r.d,null,"getResponse")," and ",o.a.createElement(r.d,null,"getNavigation")," return stores that update whenever the application navigates."),o.a.createElement(r.c,{meta:i,tag:"h3"},o.a.createElement("p",null,"Svelte allows you to render dynamic components using the"," ",o.a.createElement(r.a,null,"svelte:component this")," syntax. If you set Svelte components as the ",o.a.createElement(r.d,null,"body")," properties on your responses, you can combine ",o.a.createElement(r.a,null,"svelte:component this")," and"," ",o.a.createElement(r.d,null,"response.body")," to render the appropriate component for a"," ",o.a.createElement(r.d,null,"response"),"."),o.a.createElement("p",null,"A root component is a good place to perform general application layout, like menus, in addition to rendering the response's"," ",o.a.createElement(r.d,null,"body"),"."),o.a.createElement(r.b,{lang:"html"},'\x3c!-- components/Content.svelte --\x3e\n<template>\n  <header>\n    <NavLinks />\n  </header>\n  <main>\n    <svelte:component this={$response.body} />\n  </main>\n</template>\n\n<script>\n  import { getResponse } from "@curi/svelte";\n  import NavLinks from "./NavLinks";\n\n  const response = getResponse();\n<\/script>'),o.a.createElement("p",null,"If your routes use an object to attach multiple components to a response, splitting them apart in computed properties may give your templates a cleaner look."),o.a.createElement("p",null,"If you do attach multiple components to a response, please remember that you want every route to set the same ",o.a.createElement(r.d,null,"body")," shape. Otherwise, you'll have to determine the shape and change how you render, which can quickly become messy."),o.a.createElement(r.b,null,'const routes = prepareRoutes([\n  {\n    name: "Home",\n    path: "",\n    respond() {\n      return {\n        body: {\n          main: HomeMain,\n          menu: HomeMenu\n        }\n      }\n    }\n  },\n  // ...\n]);'),o.a.createElement(r.b,{lang:"html"},'<header>\n  <svelte:component this={menu} />\n</header>\n<main>\n  <svelte:component this={main} />\n</main>\n\n<script>\n  import { getResponse } from "@curi/svelte";\n\n  const response = getResponse();\n  $: main = $response.body.main;\n  $: menu = $response.body.menu;\n<\/script>'))),o.a.createElement(r.c,{meta:c,tag:"h2"},o.a.createElement("p",null,"The ",o.a.createElement(r.d,null,"Link")," component is used to navigate between routes within an application. When it renders in the DOM, it will render as an anchor (",o.a.createElement(r.a,null,"a"),") element."),o.a.createElement("p",null,"The ",o.a.createElement(r.d,null,"Link"),"'s ",o.a.createElement(r.d,null,"name")," prop describes which route clicking the link should navigate to. If you pass an invalid route name, Curi will warn you."),o.a.createElement("p",null,"If a route has any params (or if any of a route's ancestors have params for nested routes), the ",o.a.createElement(r.d,null,"params")," prop is used to pass these to the ",o.a.createElement(r.d,null,"Link"),"."),o.a.createElement(r.b,{lang:"html"},'<template>\n  <nav>\n    <ul>\n      <li>\n        <Link name="Home">Home</Link>\n      </li>\n      <li>\n        <Link name="About">About</Link>\n      </li>\n      <li>\n        <Link name="User" params={{ id: \'blue\' }}>\n          Blue\n        </Link>\n      </li>\n    </ul>\n  </nav>\n</template>\n\n<script>\n  import Link from "@curi/svelte/components/Link.svelte";\n<\/script>'),o.a.createElement("p",null,"The ",o.a.createElement(r.d,null,"Link")," also takes ",o.a.createElement(r.d,null,"hash"),", ",o.a.createElement(r.d,null,"query"),", and"," ",o.a.createElement(r.d,null,"state")," props to attach their values to the location that will be navigated to."),o.a.createElement(r.b,{lang:"jsx"},'<Link name="Home" hash="details">Home</Link>\n// renders\n<a href="/#details">Home</a>')),o.a.createElement(r.f,null,o.a.createElement("p",null,"Please check out the full"," ",o.a.createElement(l.a,{name:"Package",params:{package:"svelte",version:"v1"},hash:"API"},o.a.createElement(r.d,null,"@curi/svelte"))," ","API documentation to see every component that the package provides.")))}}}]);