webpackJsonp([0],{100:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=a(l),i=n(54),o=a(i),u=n(6),s=n(53);t.default=function(e){var t=e.name;return r.default.createElement(o.default,null,r.default.createElement("h1",null,t),r.default.createElement(s.Section,{title:"Explanation",id:"explanation"},r.default.createElement("p",null,"This example uses unbundled JavaScript and script tags to serve its content.If you want to use ",r.default.createElement(u.InlineComponent,null,"script")," tags in your application, Curi does provide builds for that. You can easily use ",r.default.createElement("a",{href:"https://unpkg.com"},"unpkg")," to load the scripts, or download and serve them yourself."),r.default.createElement("p",null,"The global variable names for each package is upper camel case, so the ",r.default.createElement(u.InlineJS,null,"curi")," ","package is globally available as ",r.default.createElement(u.InlineJS,null,"Curi")," and the ",r.default.createElement(u.InlineJS,null,"curi-react")," ","package is globally available as ",r.default.createElement(u.InlineJS,null,"CuriReact"),".")),r.default.createElement(s.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",r.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/umd-example"},"here"),"."))}},101:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=a(l),i=n(54),o=a(i),u=n(6),s=n(53);t.default=function(e){var t=e.name;return r.default.createElement(o.default,null,r.default.createElement("h1",null,t),r.default.createElement(s.Section,{title:"Explanation",id:"explanation"},r.default.createElement("p",null,"Server rendering with Curi is fairly straightforward. You should have a catch all route handler that will respond to all (non-static file) requests."),r.default.createElement(u.PrismBlock,{lang:"javascript"},"function catchAll(req, res) {\n  // 1. Create a memory history using the requested location\n  const history = InMemory({ locations: [req.url]});\n\n  // 2. Create a config\n  const config = createConfig(history, routes);\n\n  // 3. Wait for the initial location's response to finish\n  config.ready()\n    .then(response => {\n      // 4. Generate the HTML markup by rendering a <Navigator> and\n      // passing it the response\n      const markup = renderToString(\n        <Navigator response={response} config={config} children={renderFunction} />\n      );\n      // 5. Insert the markup into the page's html and send it\n      res.send(renderFullPage(markup));\n    })\n    .catch(err => {\n      // 6. You should also handle any errors that might occur\n    });\n}"),r.default.createElement("p",null,"The above example is very basic. Some other things that you might need to consider are:"),r.default.createElement("ul",null,r.default.createElement("li",null,"redirects — You should redirect instead of rendering markup when redirectTo is set.",r.default.createElement(u.PrismBlock,{lang:"javascript"},"config.ready()\n  .then(response => {\n    if (response.redirectTo) {\n      res.redirect(response.redirectTo);\n    }\n    // ...\n  });")),r.default.createElement("li",null,"Data loading — You would need to maintain two copies of your routes if you want to handle data fetching on the server differently than it works on the client side. This is not something that I have explored very closely yet, so I don't have any recommendations on exactly how to approach this."),r.default.createElement("li",null,"Code splitting — In order to use dynamic imports on the server, you will probably need to use a Babel plugin like dynamic-import-node. Unfortunately, dynamic-import-node breaks Webpack's code splitting. In order for your code to be split into multiple bundles, you should ensure that dynamic-import-node isn't being run when building your client side bundle. The solution used in this experiment is to use the env property.",r.default.createElement(u.PrismBlock,{lang:"javascript"},'{\n  "presets": [ "es2015", "react" ],\n  "plugins": [\n    "syntax-dynamic-import"\n  ],\n  "env": {\n    "server": {\n      "plugins": ["dynamic-import-node"]\n    }\n  }\n}'),"Then, when starting the server, make sure that BABEL_ENV=server.",r.default.createElement(u.PrismBlock,{lang:"markup"},"cross-env BABEL_ENV=server npm start")))),r.default.createElement(s.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",r.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/server-rendering"},"here"),"."))}},102:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=a(l),i=n(54),o=a(i),u=n(6),s=n(53),c=n(55),d=a(c);t.default=function(e){var t=e.name;return r.default.createElement(o.default,null,r.default.createElement("h1",null,t),r.default.createElement(s.Section,{title:"Explanation",id:"explanation"},r.default.createElement("p",null,"Side effects are pretty straightforward. Once a response has completed (any preload and load functions have resolved), the response's properties are used to create a JavaScript object. Then, any subscribed functions are called and passed that JavaScript object as their argument. Between those two steps, side effect functions can be run. They receive the new response as well as the action type used to trigger the navigation (POP, PUSH, or REPLACE)."),r.default.createElement("p",null,"A side effect function just does something using its arguments. It is basically a subscriber, but a permanent one (cannot be removed)."),r.default.createElement("p",null,"You pass any side effect functions that you want to use to the ",r.default.createElement(u.InlineJS,null,"createConfig")," call, using the ",r.default.createElement(u.InlineJS,null,"sideEffects")," property of the options object."),r.default.createElement(u.PrismBlock,{lang:"javascript"},"import createConfig from 'curi';\nimport mySideEffect from './mySideEffect';\n\nconst config = createConfig(history, routes, {\n  sideEffects: [mySideEffect]\n});")),r.default.createElement(s.Section,{title:"Live Demo",id:"demo"},r.default.createElement(d.default,{id:"github/pshrmn/curi/tree/master/examples/side-effect"})),r.default.createElement(s.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",r.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/side-effect"},"here"),"."))}},103:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=a(l),i=n(54),o=a(i),u=n(6),s=n(53),c=n(55),d=a(c);t.default=function(e){var t=e.name;return r.default.createElement(o.default,null,r.default.createElement("h1",null,t),r.default.createElement(s.Section,{title:"Explanation",id:"explanation"},r.default.createElement("p",null,"This example uses ",r.default.createElement(u.InlineJS,null,"react-transition-group")," (v1) to animate navigation transitions, but it should be relatively straightforward to adapt this for other animation packages (e.g. react-motion)."),r.default.createElement("p",null,"All that this does is to render a ",r.default.createElement(u.InlineComponent,null,"CSSTransitionGroup")," around the response's body. The only other thing that you need to do is to set a key on the rendered component, which is necessary for ",r.default.createElement(u.InlineComponent,null,"CSSTransitionGroup")," to know which of its children are entering/leaving/staying."),r.default.createElement(u.PrismBlock,{lang:"jsx"},"function render(response) {\n  return (\n    <CSSTransitionGroup>\n      <response.body key={response.location.pathname} />\n    </CSSTransitionGroup>\n  );\n}")),r.default.createElement(s.Section,{title:"Live Demo",id:"demo"},r.default.createElement(d.default,{id:"github/pshrmn/curi/tree/master/examples/transitions"})),r.default.createElement(s.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",r.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/transitions"},"here"),"."))}},52:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=a(l),i=n(87),o=a(i);t.default=function(e){var t=e.params,n=e.data;if(!n)return r.default.createElement("div",null,"The requested example could not be found.");var a=o.default[t.slug];return r.default.createElement(a,{name:n.name})}},53:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}Object.defineProperty(t,"__esModule",{value:!0}),t.Subsection=t.Section=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(r),o=n(1),u=function(e){var t=e.title,n=e.id,a=e.children,l=e.tag,r=e.type,u=void 0===r?"section":r;return i.default.createElement("div",{className:u},i.default.createElement(l,{id:n},t,i.default.createElement(o.Link,{className:"header-link",details:{hash:n}},"#")),a)},s=function(e){var t=e.tag,n=void 0===t?"h2":t,r=a(e,["tag"]);return i.default.createElement(u,l({type:"section",tag:n},r))};t.Section=s;var c=function(e){var t=e.tag,n=void 0===t?"h3":t,r=a(e,["tag"]);return i.default.createElement(u,l({type:"subsection",tag:n},r))};t.Subsection=c},54:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=a(l),i=n(89),o=a(i);t.default=function(e){var t=e.children;return r.default.createElement("div",{className:"example"},r.default.createElement("div",{className:"content"},t||null),r.default.createElement("div",{className:"sidebar"},r.default.createElement("h2",null,"Examples"),r.default.createElement(o.default,null)))}},55:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(a),r=function(e){var t=e.id;return l.default.createElement("div",{className:"demo"},l.default.createElement("iframe",{src:"https://codesandbox.io/embed/"+t,width:"100%",height:"600px",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),l.default.createElement("p",null,"Use the three buttons at the top of the Sandbox to toggle view modes. Clicking the menu button in the top left corner opens a menu that allows you to switch between files."))};t.default=r},87:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(88),r=a(l),i=n(90),o=a(i),u=n(91),s=a(u),c=n(92),d=a(c),f=n(93),m=a(f),h=n(94),p=a(h),g=n(95),b=a(g),E=n(96),y=a(E),v=n(97),w=a(v),S=n(98),x=a(S),_=n(99),k=a(_),I=n(100),j=a(I),O=n(101),M=a(O),T=n(102),P=a(T),C=n(103),G=a(C);t.default={"active-links":r.default,"basic-vue":o.default,"basic-svelte":s.default,"blocking-navigation":d.default,breadcrumbs:m.default,"breadcrumbs-vue":p.default,"code-splitting":b.default,"data-loading":y.default,modal:w.default,redirecting:x.default,redux:k.default,"script-tags":j.default,"server-rendering":M.default,"side-effect":P.default,transitions:G.default}},88:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=a(l),i=n(54),o=a(i),u=n(6),s=n(53),c=n(55),d=a(c);t.default=function(e){var t=e.name;return r.default.createElement(o.default,null,r.default.createElement("h1",null,t),r.default.createElement(s.Section,{title:"Explanation",id:"explanation"},r.default.createElement("p",null,'You may want to style a link differently when it is "active" (based on the current response object). You can do so using the active prop of ',r.default.createElement(u.InlineComponent,null,"Link"),"."),r.default.createElement("p",null,"The active prop must be an object with a ",r.default.createElement(u.InlineJS,null,"merge")," function as one of its properties. The merge function is responsible for updating the props that will be passed to the anchor (",r.default.createElement(u.InlineComponent,null,"a"),")."),r.default.createElement("p",null,"You can also pass a ",r.default.createElement(u.InlineJS,null,"partial")," property to the active object. partial should be a boolean, and when it is true (the Link's ",r.default.createElement(u.InlineJS,null,"to")," property is in the response's partials array) it can be \"active\" if its params match the response's params.")),r.default.createElement(s.Section,{title:"Live Demo",id:"demo"},r.default.createElement(d.default,{id:"github/pshrmn/curi/tree/master/examples/active-links"})),r.default.createElement(s.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",r.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/active-links"},"here"),"."))}},89:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=a(l),i=n(1),o=n(8),u=a(o),s=n(7),c=a(s);t.default=function(e){var t=e.withDescription,n=void 0!==t&&t;return r.default.createElement("ul",{className:"link-list"},u.default.map(function(e){return r.default.createElement("li",{key:e.slug,className:n?"with":"solo"},r.default.createElement(i.Link,{to:"Example",params:{slug:e.slug},active:{merge:c.default}},e.name),n&&r.default.createElement("p",null,e.description))}))}},90:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=a(l),i=n(54),o=a(i),u=n(55),s=a(u),c=n(6),d=n(12),f=n(53);t.default=function(e){var t=e.name;return r.default.createElement(o.default,null,r.default.createElement("h1",null,t),r.default.createElement(f.Section,{title:"Explanation",id:"explanation"},r.default.createElement("p",null,"While Vue does have an official router, this project shows how you could use Curi as the router for a Vue project instead. It uses ",r.default.createElement(c.InlineComponent,null,"curi-link")," ","component provided by the the curi-vue package. Unlike the React examples, which use a ",r.default.createElement(c.InlineComponent,null,"Navigator")," component to automatically subscribe, here we are manually subscribing to navigation changes. We keep a reactive response object on our view model in order to automatically re-render when a new response is generated.")),r.default.createElement(f.Section,{title:"Live Demo",id:"demo"},r.default.createElement(s.default,{id:"github/pshrmn/curi/tree/master/examples/basic-vue"})),r.default.createElement(f.Section,{title:"On GitHub",id:"source"},r.default.createElement("p",null,"If you want to run this code locally, the source code is available on GitHub"," ",r.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/basic-vue"},"here"),"."),r.default.createElement(d.Note,null,"If you are experienced with Vue, you will probably notice that the layout of this application is not optimal. That is a just testament to my lack of familiarity with Vue. Hopefully will be fixed as I learn the best practices. Please feel free to point out any issues and I will update this example.")))}},91:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=a(l),i=n(54),o=a(i),u=n(55),s=a(u),c=n(6),d=(n(12),n(53));t.default=function(e){var t=e.name;return r.default.createElement(o.default,null,r.default.createElement("h1",null,t),r.default.createElement(d.Section,{title:"Explanation",id:"explanation"},r.default.createElement("p",null,"There are a couple things to keep in mind when using Svelte:"),r.default.createElement("p",null,"The first is that ",r.default.createElement(c.InlineComponent,null,"Link"),"s need to access your Curi configuration object in order to navigate/create ",r.default.createElement(c.InlineJS,null,"href"),"s. In theory you can pass this purely through component attributes, but that can get old quite quickly. Instead,"," ",r.default.createElement(c.InlineJS,null,"@curi/svelte")," provides a ",r.default.createElement(c.InlineJS,null,"setConfig")," function to store your configuration object, allowing the ",r.default.createElement(c.InlineComponent,null,"Link")," to just import it. Once you have created your configuration object, you should call ",r.default.createElement(c.InlineJS,null,"setConfig(config)")," ","(where config is your configuration object)."),r.default.createElement("p",null,"The second thing is how to re-render your application when the location changes. By having the route's ",r.default.createElement(c.InlineJS,null,"body")," functions return Svelte render functions, we can just call ",r.default.createElement(c.InlineJS,null,"response.body")," to render our view. Of course, we will want to destroy the current view before doing this. All of this should be done in a subscription function (",r.default.createElement(c.InlineJS,null,"config.subscribe(fn)"),").")),r.default.createElement(d.Section,{title:"Live Demo",id:"demo"},r.default.createElement(s.default,{id:"github/pshrmn/curi/tree/master/examples/basic-svelte"})),r.default.createElement(d.Section,{title:"On GitHub",id:"source"},r.default.createElement("p",null,"If you want to run this code locally, the source code is available on GitHub"," ",r.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/basic-svelte"},"here"),".")))}},92:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=a(l),i=n(54),o=a(i),u=n(6),s=n(53),c=n(55),d=a(c);t.default=function(e){var t=e.name;return r.default.createElement(o.default,null,r.default.createElement("h1",null,t),r.default.createElement(s.Section,{title:"Explanation",id:"explanation"},r.default.createElement("p",null,"Sometimes, you don't want the user to leave the page. Ideally, this is for their own good, such as when a form is half filled out, and not becacuse you're running a spam site."),r.default.createElement("p",null,"When you want to do this, you can use the ",r.default.createElement(u.InlineComponent,null,"Block")," component from react-curi to display a user confirmation that requires user input before navigation will occur.")),r.default.createElement(s.Section,{title:"Live Demo",id:"demo"},r.default.createElement(d.default,{id:"github/pshrmn/curi/tree/master/examples/blocking-navigation"})),r.default.createElement(s.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",r.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/blocking-navigation"},"here"),"."))}},93:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=a(l),i=n(54),o=a(i),u=n(53),s=n(55),c=a(s);t.default=function(e){var t=e.name;return r.default.createElement(o.default,null,r.default.createElement("h1",null,t),r.default.createElement(u.Section,{title:"Explanation",id:"explanation"},r.default.createElement("p",null,"You can easily generate breadcrumb navigation links for the current route using the curi-addon-ancestors package. This allows you to get the route names for the current route. Using these names you can render a Link for each one (passing the parameters if necessary).")),r.default.createElement(u.Section,{title:"Live Demo",id:"demo"},r.default.createElement(c.default,{id:"github/pshrmn/curi/tree/master/examples/breadcrumbs"})),r.default.createElement(u.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",r.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/breadcrumbs"},"here"),"."))}},94:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=a(l),i=n(54),o=a(i),u=n(53),s=n(55),c=a(s);t.default=function(e){var t=e.name;return r.default.createElement(o.default,null,r.default.createElement("h1",null,t),r.default.createElement(u.Section,{title:"Explanation",id:"explanation"},r.default.createElement("p",null,"You can easily generate breadcrumb navigation links for the current route using the curi-addon-ancestors package. This allows you to get the route names for the current route. Using these names you can render a Link for each one (passing the parameters if necessary).")),r.default.createElement(u.Section,{title:"Live Demo",id:"demo"},r.default.createElement(c.default,{id:"github/pshrmn/curi/tree/master/examples/breadcrumbs-vue"})),r.default.createElement(u.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",r.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/breadcrumbs-vue"},"here"),"."))}},95:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=a(l),i=n(54),o=a(i),u=n(1),s=n(53);t.default=function(e){var t=e.name;return r.default.createElement(o.default,null,r.default.createElement("h1",null,t),r.default.createElement(s.Section,{title:"Explanation",id:"explanation"},r.default.createElement("p",null,"Code splitting with curi routes is done using the preload property. The"," ",r.default.createElement(u.Link,{to:"Guide",params:{slug:"code-splitting"}},"code splitting")," guide covers the basic principles for how to do this. This example just provides you with code that actually implements what is explained there.")),r.default.createElement(s.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",r.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/code-splitting"},"here"),"."))}},96:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=a(l),i=n(54),o=a(i),u=n(6),s=n(53),c=n(55),d=a(c);t.default=function(e){var t=e.name;return r.default.createElement(o.default,null,r.default.createElement("h1",null,t),r.default.createElement(s.Section,{title:"Explanation",id:"explanation"},r.default.createElement("p",null,"When a user navigates to one of your routes, the re-rendering will not be triggered until a response has been created. If the route that matches has a `load` function that has to make a request to the server, the re-render will be delayed, possibly giving the user the impression that nothing is happening. One way that you can attempt to show that something is happening is by adding a loading bar to your page that will demonstrate to the user that their request is going through."),r.default.createElement("p",null,"The `nprogress` package allows you to render a loading bar that will run across the top of your page. There are many possible solutions, but this one is very easy to use, so it works well for our example. The basis of what we will do is to tell `nprogress` to start when the user clicks a link, and then when we re-render, we tell `nprogres` that we are done loading."),r.default.createElement(u.PrismBlock,{lang:"javascript"},"// when the user clicks a <Link>\nnprogress.start();\n// when we are re-rendering\nnprogress.done();\n"),r.default.createElement("p",null,"The example implementation can definitely be improved. Currently we are calling"," ",r.default.createElement(u.InlineJS,null,"nprogress.done()")," as a side-effect of our render function. This is not ideal, but again, this is just a minimum viable example. In your own application, you could add a subscriber or use a Curi side-effect.")),r.default.createElement(s.Section,{title:"Live Demo",id:"demo"},r.default.createElement(d.default,{id:"github/pshrmn/curi/tree/master/examples/data-loading"})),r.default.createElement(s.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",r.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/prefetch-data"},"here"),"."))}},97:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=a(l),i=n(54),o=a(i),u=n(6),s=n(53),c=n(55),d=a(c);t.default=function(e){var t=e.name;return r.default.createElement(o.default,null,r.default.createElement("h1",null,t),r.default.createElement(s.Section,{title:"Explanation",id:"explanation"},r.default.createElement("p",null,"This example mimics the way that Pinterest works. Whether or not this is a good design pattern is up for debate, but at the very least it is helpful to see one way that you can do this with Curi."),r.default.createElement("p",null,'If you are unfamiliar with the Pinterest model, this is how it works: when you navigate to a "modal route" from within the application, the route will open in a modal window (preserving the background content from the page that the user navigated from). However, if you load the same location manually, it will render the location in a full window.'),r.default.createElement("p",null,"You will have to take a number of things into consideration when implementing this:"),r.default.createElement("p",null,"The first is how to know whether to render a modal window or a full page. The easiest way to do his is to use ",r.default.createElement(u.InlineJS,null,"location.state")," to attach a value to the location that indicates that you want to render a modal. State is persistent across refreshes and the user clicking the browser's forward/back buttons, so you will also have to take that into consideration."),r.default.createElement("p",null,"Second, you will also have to implement some mechanism to render the base layer (under the modal) using the previous location. In a React application, you can do this by storing the previous"," ",r.default.createElement(u.InlineJS,null,"props.children"),"."),r.default.createElement("p",null)),r.default.createElement(s.Section,{title:"Live Demo",id:"demo"},r.default.createElement(d.default,{id:"github/pshrmn/curi/tree/master/examples/modal"})),r.default.createElement(s.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",r.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/modal"},"here"),"."))}},98:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=a(l),i=n(54),o=a(i),u=n(6),s=n(53),c=n(55),d=a(c);t.default=function(e){var t=e.name;return r.default.createElement(o.default,null,r.default.createElement("h1",null,t),r.default.createElement(s.Section,{title:"Explanation",id:"explanation"},r.default.createElement("p",null,"Sometimes you will want to redirect based on the results of your load function. For instance, you might see that a user is not authenticated and shouldn't be able to view a page."),r.default.createElement("p",null,"When this happens, your load function should modify the response by calling its redirect method."),r.default.createElement(u.PrismBlock,{lang:"javascript"},"const routes = [\n  // ...,\n  {\n    name: 'Protected',\n    path: 'super-secret',\n    load: (resp) => {\n      if (!store.userIsAuthenticated) {\n        resp.redirect('/login', 302);\n      }\n    }\n  }\n];"),r.default.createElement("p",null,"Then, in your render function (the ",r.default.createElement(u.InlineComponent,null,"Navigator"),"'s children prop), you would check the if the response's ",r.default.createElement(u.InlineJS,null,"redirectTo")," property is set. If it is, you could manually redirect using"," ",r.default.createElement(u.InlineJS,null,"config.history")," or just render a ",r.default.createElement(u.InlineComponent,null,"Redirect")," and that will be handled for you."),r.default.createElement(u.PrismBlock,{lang:"javascript"},"function render(response, config) {\n  if (response.redirectTo) {\n    return <Redirect to={response.redirectTo} />\n  }\n  // ...\n}")),r.default.createElement(s.Section,{title:"Live Demo",id:"demo"},r.default.createElement(d.default,{id:"github/pshrmn/curi/tree/master/examples/redirecting"})),r.default.createElement(s.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",r.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/redirecting"},"here"),"."))}},99:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=a(l),i=n(54),o=a(i),u=n(6),s=n(53),c=n(55),d=a(c);t.default=function(e){var t=e.name;return r.default.createElement(o.default,null,r.default.createElement("h1",null,t),r.default.createElement(s.Section,{title:"Explanation",id:"explanation"},r.default.createElement("p",null,"Redux is straightforward to integrate with a Curi project."),r.default.createElement("p",null,"You will most likely want to export your store from its own module so that it can be imported throughout your project. Then, any routes that need data to be loaded prior to rendering would dispatch to the store from their load function."),r.default.createElement(u.PrismBlock,{lang:"javascript"},"import store from './store';\nimport setData from './actions';\nconst routes = [\n  // ...,\n  {\n    name: 'Data',\n    path: 'data/:id'\n    value: Data,\n    load: (resp) => {\n      const { id } = resp.params;\n      // get the data associated with the id\n      return fetch(`/api/data/${id}`)\n        .then(data => {\n          store.dispatch(setData(data));\n        });\n    }\n  }\n  // ...\n];")),r.default.createElement(s.Section,{title:"Live Demo",id:"demo"},r.default.createElement(d.default,{id:"github/pshrmn/curi/tree/master/examples/redux"})),r.default.createElement(s.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",r.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/redux"},"here"),"."))}}});