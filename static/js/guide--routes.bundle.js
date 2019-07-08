(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{36:function(e,t,a){"use strict";a.r(t),a.d(t,"component",function(){return w}),a.d(t,"contents",function(){return b});var n=a(0),r=a.n(n),l=a(3),o=a(21),s={title:"Routes"},h={title:"Route path",hash:"route-path"},u={title:"Route names",hash:"route-names"},c={title:"Asynchronous Routes",hash:"async"},i={title:"The Response Function",hash:"route-response"},m={title:"Route Properties",hash:"properties",children:[h,u,c,,i]},p={title:"Preparing Routes",hash:"prepareRoutes"},d={title:"No Matching Route",hash:"no-match"},E={title:"Route Matching Walkthrough",hash:"match-walkthrough"},g={title:"Path Matching Options",hash:"options"},f={title:"Matching Routes",hash:"matching-routes",children:[d,E]},b=[m,f,p];function w(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.f,null,r.a.createElement("h1",null,s.title),r.a.createElement("p",null,"Routes are JavaScript objects that describe valid locations within an application.")),r.a.createElement(o.c,{meta:m,tag:"h2"},r.a.createElement("p",null,"Routes have two required properties—",r.a.createElement(o.d,null,"name")," and ",r.a.createElement(o.d,null,"path"),"—and a number of"," ",r.a.createElement(l.a,{name:"Package",params:{package:"router",version:"v2"},hash:"route-objects"},"optional properties"),"."),r.a.createElement(o.c,{meta:h,tag:"h3"},r.a.createElement("p",null,"A route's ",r.a.createElement(o.d,null,"path")," is used to determine if a route matches a location. Path strings use"," ",r.a.createElement("a",{href:"https://github.com/pillarjs/path-to-regexp"},r.a.createElement(o.d,null,"path-to-regexp"))," ","formatting, which allows you to define dynamic path parameters that a route should match."),r.a.createElement(o.b,null,'const routes = prepareRoutes([\n  {\n    path: "" // matches the root "/"\n  },\n  {\n    // the "id" segment can be any value\n    path: "a/:id"\n  }\n]);')),r.a.createElement(o.c,{meta:u,tag:"h3"},r.a.createElement("p",null,"A route's ",r.a.createElement(o.d,null,"name")," is a unique identifier for a route."),r.a.createElement(o.b,null,'const routes = prepareRoutes([\n  {\n    name: "Home",\n    path: ""\n  },\n  {\n    name: "Album",\n    // the "id" segment can be any value\n    path: "a/:id"\n  }\n]);'),r.a.createElement("p",null,"The uniqueness of names is important so that you can interact with routes. The router's ",r.a.createElement(o.d,null,"route")," method is used for getting data about a route using its name. Curi also has a concept of"," ",r.a.createElement(l.a,{name:"Guide",params:{slug:"route-interactions"}},"route interactions")," ","for working with this route data. For example, Curi provides a"," ",r.a.createElement(o.d,null,"pathname")," route interaction to generate the pathname of a URL. This is particularly useful for routes with path params, since the ",r.a.createElement(o.d,null,"pathname")," interaction will automatically insert these for you."),r.a.createElement(o.b,null,'const route = router.route("Album");\nconst path = pathname(route, { id: "abcd" });\n// pathname = "/a/abcd"')),r.a.createElement(o.c,{meta:c,tag:"h3"},r.a.createElement("p",null,"When a route matches, you might want to perform some actions before the application re-renders. This can include validating that a user is authorized to navigate to a route and loading data based on the path parameters parsed from the location."),r.a.createElement("p",null,"A route's ",r.a.createElement(o.d,null,"resolve")," property is a function that runs asynchronous actions and returns a Promise. A response will not be emitted until after a route's ",r.a.createElement(o.d,null,"resolve")," function has resolved."),r.a.createElement(o.b,null,'{\n  name: "User",\n  path: "u/:id",\n  resolve({ params }) {\n    // run code to verify the user can view the page\n    const authorized = Promise.resolve(true);\n\n    // import the User component using the import() API\n    const body = import("./components/User");\n\n    // get specific data using the route\'s params\n    const data = UserAPI.get(params.id);\n    return Promise.all([ authorized, body, data ]);\n  }\n}'),r.a.createElement("p",null,"A route with ",r.a.createElement(o.d,null,"resolve")," properties is asynchronous, which has some effects to be aware of. You can read about these in the"," ",r.a.createElement(l.a,{name:"Guide",params:{slug:"sync-or-async"}},"Sync or Async")," ","guide.")),r.a.createElement(o.c,{meta:i,tag:"h3"},r.a.createElement("p",null,"Each route can have a ",r.a.createElement(o.d,null,"respond"),' function. When a route matches, a response object with "match" properties is generated. An object returned by the ',r.a.createElement(o.d,null,"respond")," function gets merged with the match response object*. The"," ",r.a.createElement(l.a,{name:"Guide",params:{slug:"responses"}},"responses guide")," ","covers all of the response properties."),r.a.createElement("p",null,r.a.createElement("em",null,"* Only valid properties are merged.")),r.a.createElement("p",null,"The ",r.a.createElement(o.d,null,"respond")," function receives an object with a number of properties."),r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement(o.d,null,"match")," is an object of properties based on the matched route."),r.a.createElement("li",null,r.a.createElement(o.d,null,"resolved")," is an object with the results of the route's"," ",r.a.createElement(o.d,null,"resolve")," functions."),r.a.createElement("li",null,r.a.createElement(o.d,null,"error")," is only defined when the ",r.a.createElement(o.d,null,"resolve")," ","function has an uncaught error.")),r.a.createElement(o.b,null,'import User from "./components/User";\n\nconst routes = prepareRoutes([\n  {\n    name: "User",\n    path: "u/:id",\n    resolve({ params }) {\n      return UserAPI.get(params.id);\n    },\n    respond({ match, resolved, error }) {\n      if (error) {\n        // ...\n      }\n      return {\n        body: User,\n        data: resolved.data,\n        title: `User ${match.params.id}`\n      };\n    }\n  }\n]);'))),r.a.createElement(o.c,{meta:f,tag:"h2"},r.a.createElement("p",null,"When you create a router, you pass an array of all of the valid routes for the application. Whenever Curi receives a new location, it matches the new location's ",r.a.createElement(o.d,null,"pathname")," against the valid routes to determine which one matches."),r.a.createElement("p",null,"Route matching tests the route objects in the order that they are defined in the array. If a route partially matches (i.e. it matches the beginning of the pathname, but there are leftover unmatched segments of the pathname), and it has ",r.a.createElement(o.d,null,"children")," routes, those will be checked before moving to the route's next sibling."),r.a.createElement(o.b,{lang:"js"},'const routes = prepareRoutes([\n  { name: "One", path: "one" },\n  { name: "Two", path: "two", children: [\n    { name: "And a half", path: "point-five" },\n    // matches /two/point-five\n  ]},\n  { name: "Three", path: "three" },\n]);\n\n// route match order:\n// 1. One\n// 2. Two\n// 3. And a half (only if Two partially matches)\n// 4. Three\n'),r.a.createElement(o.c,{meta:d,tag:"h3"},r.a.createElement("p",null,'If none of your routes match a location, Curi will do nothing! Your routes should include a "catch all" route to match these locations. The path ',r.a.createElement(o.d,null,'"(.*)"')," matches every pathname, so using that as the path of the last route will catch every location."),r.a.createElement(o.g,null,r.a.createElement("p",null,"The catch all path should be used on the last route, otherwise it will match locations that might have a better match.")),r.a.createElement(o.b,null,"{\n  name: 'Not Found',\n  path: '(.*)',\n}")),r.a.createElement(o.c,{meta:E,tag:"h3"},r.a.createElement(o.b,null,"const routes = prepareRoutes([\n  {\n    name: 'Home',\n    path: '',\n  },\n  {\n    name: 'Album',\n    path: 'a/:album'\n  },\n  {\n    name: 'Not Found',\n    path: '(.*)'\n  }\n]);"),r.a.createElement(o.e,null,r.a.createElement("p",null,"Curi's default matching behavior is to match locations exactly. This means that when the route only matches part of the pathname, it does not consider that a match. Routes can be configured to allow partial matching, but exact matching is usually preferable.")),r.a.createElement("p",null,"If the user navigates to a location with the pathname"," ",r.a.createElement(o.d,null,'"/a/red/yellow"'),", the ",r.a.createElement(o.d,null,"Album")," route will only partially match, so Curi will move on to the next route,"," ",r.a.createElement(o.d,null,"Not Found"),". ",r.a.createElement(o.d,null,"Not Found")," has a catch all"," ",r.a.createElement(o.d,null,"path")," that matches every pathname, so it will match the location."),r.a.createElement("p",null,"If a route has children, Curi will check if any of those routes form a complete match before moving on to the next route in the routes array."),r.a.createElement(o.b,null,"const routes = prepareRoutes([\n  {\n    name: 'Home',\n    path: '',\n  },\n  {\n    name: 'Album',\n    path: 'a/:album',\n    children: [\n      {\n        name: 'Song',\n        path: ':title'\n      }\n    ]\n  },\n  {\n    name: 'Not Found',\n    path: '(.*)'\n  }\n]);"),r.a.createElement("p",null,"If the pathname is ",r.a.createElement(o.d,null,"'/a/Coloring+Book/All+Night'"),", the"," ",r.a.createElement(o.d,null,"Album")," route will partially match the pathname (",r.a.createElement(o.d,null,'"/a/Coloring+Book"'),"). That route has children routes, so the unmatched segments (",r.a.createElement(o.d,null,'"/All+Night"'),") will be checked against those routes. The ",r.a.createElement(o.d,null,"Song")," route matches the remaining segments, so the router matches the ",r.a.createElement(o.d,null,"Song")," route to the location.")),r.a.createElement(o.c,{meta:g,tag:"h3"},r.a.createElement("p",null,"You can control whether a route does exact or partial matching with"," ",r.a.createElement(l.a,{hash:"pathOptions"},r.a.createElement(o.d,null,"pathOptions"))," ","property. If you set ",r.a.createElement(o.d,null,"{ end: false }"),", a route that partially matches will consider itself matched."),r.a.createElement(o.b,null,"// when the pathname is\n// '/a/Good+Kid,+M.A.A.D+City/Poetic+Justice',\n// the Album route will partially match, but because\n// it sets \"end\" to false, the partial match will still be used.\n{\n  name: 'Album',\n  path: 'a/:albumID',\n  pathOptions: {\n    parse: {\n      end: false\n    }\n  }\n}"))),r.a.createElement(o.c,{meta:p,tag:"h2"},r.a.createElement("p",null,"The routes array should be wrapped in a ",r.a.createElement(o.d,null,"prepareRoutes")," call. This will pre-build the routes for the router, which is especially useful for server rendering, where a new router is created for every request."),r.a.createElement(o.b,null,'import { prepareRoutes } from "@curi/router";\n\n// plain routes\nconst routes = [...]\n\n// prepared routes\nexport default prepareRoutes(routes);')))}}}]);