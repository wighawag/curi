(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{52:function(e,t,n){"use strict";n.r(t),n.d(t,"component",function(){return R}),n.d(t,"contents",function(){return g});var a=n(0),o=n.n(a),r=n(3),l=n(21),s={title:"React Router v2/3"},u={title:"With React Router",hash:"routes-with-react-router"},c={title:"With Curi",hash:"routes-with-curi"},i={title:"Routes",hash:"routes",children:[u,c]},h={title:"Creating the router",hash:"creating-the-router"},m={title:"React Router v2/3",hash:"rendering-react-router"},p={title:"Curi",hash:"rendering-with-curi"},d={title:"Rendering",hash:"rendering",children:[m,p]},E={title:"Links",hash:"links"},b={title:"Accessing router props from nested components",hash:"router-props"},g=[i,h,d,E,b];function R(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.f,null,o.a.createElement("h1",null,s.title),o.a.createElement("p",null,"Curi is mostly conceptually similar to React Router versions 2 and 3."),o.a.createElement("ol",null,o.a.createElement("li",null,"Both use a centralized router."),o.a.createElement("li",null,"Both routers are made up of route objects (although with React Router some of these are disguised as JSX with ",o.a.createElement(l.d,null,"Route")," ","components)."),o.a.createElement("li",null,"With both Reaft Router and Curi, routes can be nested. This can be used to specify child routes that build off of the paths from their parent routes.")),o.a.createElement("p",null,"Migration from React Router v2/3 to Curi should not require a complete reworking of your application, but there are some key differences."),o.a.createElement("ol",null,o.a.createElement("li",null,"Curi's routing is handled entirely outside of React; there are no"," ",o.a.createElement(l.d,null,"Route")," components."),o.a.createElement("li",null,"With Curi, when a nested route matches, only that route renders. Any ancestor routes that also (partially) match are not rendered. This is different from React Router, where ancestors of the best matched route also render."))),o.a.createElement(l.c,{meta:i,tag:"h2"},o.a.createElement("p",null,"Let’s get started with setting up our routes."),o.a.createElement(l.c,{meta:u,tag:"h3"},o.a.createElement("p",null,"In React Router v2/3, there are two ways to define routes. You can either use JavaScript objects or JSX ",o.a.createElement(l.d,null,"Route"),"s (which React Router converts to JavaScript objects)."),o.a.createElement("p",null,"Both styles described above define the same route structure for three routes: ",o.a.createElement(l.d,null,"/"),", ",o.a.createElement(l.d,null,"/inbox"),", and"," ",o.a.createElement(l.d,null,"/inbox/:message"),". Each one of these has a component that will be rendered when it matches. The ",o.a.createElement(l.d,null,"/inbox/:message")," ","route has some methods defined to describe its behavior when the route enters, updates, and leaves."),o.a.createElement(l.b,{lang:"jsx"},"// JavaScript objects\n{\n  path: '/',\n  component: App,\n  indexRoute: Home,\n  childRoutes: [\n    {\n      path: 'inbox',\n      component: Inbox,\n      childRoutes: [\n        {\n          path: ':message',\n          component: Message,\n          onEnter: (next) => {...},\n          onChange: (prev, next) => {...},\n          onLeave: (prev) => {...}\n        }\n      ]\n    }\n  ]\n// JSX\n<Route path='/' component={App}>\n  <IndexRoute component={Home} />\n  <Route path='inbox' component={Inbox}>\n    <Route\n      path=':message'\n      component={Message}\n      onEnter={next => {...}}\n      onChange={(prev, next) => {...}}\n      onLeave={prev => {...}}\n    />\n  </Route>\n</Route>")),o.a.createElement(l.c,{meta:c,tag:"h3"},o.a.createElement("p",null,"Routes in Curi are always JavaScript objects. Like React Router, each route object has a path property that describes the path segments that the route matches. React Router v2/3 uses a custom path matcher, but Curi uses ",o.a.createElement(l.d,null,"path-to-regexp"),". You can read learn how to format paths from the"," ",o.a.createElement("a",{href:"https://github.com/pillarjs/path-to-regexp"},o.a.createElement(l.d,null,"path-to-regexp")," repo"),"."),o.a.createElement("p",null,"First, we will define the names and paths for our routes."),o.a.createElement("p",null,"Each route must also have a unique name. A route's name will be used for interacting with it. For example, to navigate to a route, you only have to know its name, not its URL."),o.a.createElement("p",null,"The biggest difference between the Curi paths and the React Router paths is that with Curi, you never include a forward slash at the beginning of the path. This means that while the root path for React Router is ",o.a.createElement(l.d,null,"'/'"),", the root path for Curi is ",o.a.createElement(l.d,null,"''"),"."),o.a.createElement(l.b,null,"const routes = prepareRoutes([\n  {\n    name: 'Home',\n    path: ''\n  },\n  {\n    name: 'Inbox',\n    path: 'inbox',\n    children: [\n      {\n        name: 'Message',\n        path: ':message'\n      }\n    ]\n  }\n]);"),o.a.createElement("p",null,"Next, we should add our components to each route. We will ignore the"," ",o.a.createElement(l.d,null,"App")," component that is used in the React Router routes. That is not route specific and will be rendered by our application (assuming we actually need it)."),o.a.createElement("p",null,'With Curi, the router creates a "response" object when it matches locations. Some of the properties of the response are automatically set based on the location and the matching route. Others can be set by a route. This is done using the ',o.a.createElement(l.d,null,"respond")," property, which is a function that returns an object whose properties will be added to the response. For this React application, we want a response's ",o.a.createElement(l.d,null,"body")," property to be the React component associated with each route."),o.a.createElement(l.e,null,o.a.createElement("p",null,"Only known properties will be merged onto the response.")),o.a.createElement(l.b,null,"import { prepareRoutes } from \"@curi/router\";\n\nimport Home from './pages/Home';\nimport Inbox from './pages/Inbox';\nimport Mesage from './pages/Message';\n\nconst routes = prepareRoutes([\n  {\n    name: 'Home',\n    path: '',\n    respond: () => {\n      return {\n        body: Home\n      };\n    }\n  },\n  {\n    name: 'Inbox',\n    path: 'inbox',\n    respond: () => {\n      return {\n        body: Inbox\n      };\n    },\n    children: [\n      {\n        name: 'Message',\n        path: ':message',\n        respond: () => {\n          return {\n            body: Message\n          };\n        }\n      }\n    ]\n  }\n]);"),o.a.createElement("p",null,"We are close to replicating our React Router routes, but we still need to implement the ",o.a.createElement(l.d,null,"on___")," methods for our ",o.a.createElement(l.d,null,":message")," route. With Curi, routes can have a"," ",o.a.createElement(l.d,null,"resolve")," function that is called when the route matches the new location."),o.a.createElement("p",null,"With React Router, ",o.a.createElement(l.d,null,"onEnter")," is called when the route first matches, while ",o.a.createElement(l.d,null,"onChange")," is called when the same route matches a new location (e.g. with new path parameters)."," ",o.a.createElement(l.d,null,"onEnter")," and ",o.a.createElement(l.d,null,"onChange")," are nearly the same; the big difference between the two is that ",o.a.createElement(l.d,null,"onChange")," will receive the previous props, which could be used to determine which props changed. The functionality for both ",o.a.createElement(l.d,null,"onEnter")," and"," ",o.a.createElement(l.d,null,"onChange")," can be covered using a ",o.a.createElement(l.d,null,"resolve")," ","function."),o.a.createElement("p",null,"There is no equivalent to ",o.a.createElement(l.d,null,"onLeave")," with Curi. If you have something you need this functionality for, please open up an issue in the GitHub repo."),o.a.createElement("p",null,"The"," ",o.a.createElement(r.a,{name:"Package",params:{package:"router",version:"v2"},hash:"route-objects"},o.a.createElement(l.d,null,"@curi/router")," route API documentation")," ","covers all of the route properties."),o.a.createElement(l.b,null,"const routes = prepareRoutes([\n  {\n    name: 'Home',\n    path: '',\n    respond: () => {\n      return {\n        body: Home\n      };\n    }\n  },\n  {\n    name: 'Inbox',\n    path: 'inbox',\n    respond: () => {\n      return {\n        body: Inbox\n      };\n    },\n    children: [\n      {\n        name: 'Message',\n        path: ':message',\n        respond: () => {\n          return {\n            body: Message\n          };\n        },\n        resolve(match) { return ... },\n      }\n    ]\n  }\n]);")),o.a.createElement("p",null,"Once your routes have been defined, you can move on to creating your Curi router.")),o.a.createElement(l.c,{meta:h,tag:"h2"},o.a.createElement("p",null,"With React Router, you create your router by rendering a"," ",o.a.createElement(l.d,null,"Router"),". That either takes the ",o.a.createElement(l.d,null,"Route")," components as props or the route objects through its ",o.a.createElement(l.d,null,"routes")," prop. The"," ",o.a.createElement(l.d,null,"Router")," also takes a ",o.a.createElement(l.d,null,"history")," prop, which is either one of the pre-routerured objects (",o.a.createElement(l.d,null,"browserHistory")," or"," ",o.a.createElement(l.d,null,"hashHistory"),") or one that you create yourself."),o.a.createElement(l.b,{lang:"jsx"},"import { Router, browserHistory } from 'react-router';\nconst routes = prepareRoutes([...]);\nReactDOM.render((\n  <Router history={browserHistory} routes={routes} />\n), holder);"),o.a.createElement("p",null,"With Curi, the router is created prior to rendering. It takes a Hickory history function, your routes array, and possibly an options object. ",o.a.createElement("a",{href:"https://github.com/pshrmn/hickory"},"Hickory")," is similar to the ",o.a.createElement(l.d,null,"history")," package used by React Router, but has an API tailored for asynchronous applications."),o.a.createElement(l.b,null,"import { curi, prepareRoutes } from '@curi/router';\nimport { browser } from '@hickory/browser';\nconst routes = prepareRoutes([...]);\nconst router = createRouter(browser, routes);")),o.a.createElement(l.c,{meta:d,tag:"h2"},o.a.createElement("p",null,"We will walk through the rendering differences between React Router and Curi by looking at what happens in each when we navigate to the URI ",o.a.createElement(l.d,null,"/inbox/test"),"."),o.a.createElement(l.c,{meta:m,tag:"h3"},o.a.createElement("p",null,"React Router uses the ",o.a.createElement(l.d,null,"Router")," component to subscribe to location changes. Each time that the location changes, it walks over its routes and determines which route(s!) match."),o.a.createElement("p",null,"React Router starts by rendering the root component. In the above router, that is the ",o.a.createElement(l.d,null,"App"),". Next, our ",o.a.createElement(l.d,null,"inbox")," route also matches, so React Router also renders our ",o.a.createElement(l.d,null,"Inbox")," ","component. Finally, the URI ",o.a.createElement(l.d,null,"/inbox/test")," also matches our ",o.a.createElement(l.d,null,":message")," route (which is concatenated with its parents to form the path ",o.a.createElement(l.d,null,"/inbox/:message"),"), so ",o.a.createElement(l.d,null,"Message")," is rendered as well. Each child component is rendered by its parent, so we end up with a component tree that looks something like this:"),o.a.createElement("p",null,"With this structure, any routes with children will be rendered when one of the children matches. That means that those routes need to know how to render based on what type of match they have. For example, ",o.a.createElement(l.d,null,"Inbox")," needs to know how to render for an exact match (the URI is ",o.a.createElement(l.d,null,"/inbox"),") and for a partial match (",o.a.createElement(l.d,null,"/inbox/test"),"). Also, if the ",o.a.createElement(l.d,null,"Inbox")," needs to pass any props to ",o.a.createElement(l.d,null,"Message"),", it has to use"," ",o.a.createElement(l.d,null,"React.cloneElement"),", which works but is not the cleanest looking code."),o.a.createElement(l.b,{lang:"jsx"},"<App>\n  <Inbox>\n    <Message>\n  </Inbox>\n</App>")),o.a.createElement(l.c,{meta:p,tag:"h3"},o.a.createElement("p",null,"With Curi, we also need to re-render our application every time that the location changes. We will do this by creating a root Curi component by calling the ",o.a.createElement(l.d,null,"createRouterComponent")," function, which comes from the ",o.a.createElement(l.d,null,"@curi/react-dom")," package, and passing it our Curi router. While the name of this component is entirely up to you, we will refer to it as the ",o.a.createElement(l.d,null,"Router")," here."),o.a.createElement("p",null,"The ",o.a.createElement(l.d,null,"Router")," will setup an observer on the provided router so that it can re-render your application whenever there is a new"," ",o.a.createElement(l.d,null,"response"),". The ",o.a.createElement(l.d,null,"Router")," uses a context provider that makes a response available to other components in the application using the ",o.a.createElement(l.d,null,"useResponse")," hook."),o.a.createElement("p",null,"The ",o.a.createElement(l.d,null,"useResponse")," hook returns an object with two properties:"),o.a.createElement("ol",null,o.a.createElement("li",null,o.a.createElement(l.d,null,"response")," is the new response object"),o.a.createElement("li",null,o.a.createElement(l.d,null,"navigation")," is an object with additional information about the navigation")),o.a.createElement("p",null,"The router can also be accessed throughout the application using the"," ",o.a.createElement(l.d,null,"useRouter")," hook."),o.a.createElement("p",null,"Above, we added ",o.a.createElement(l.d,null,"respond")," functions to each route. The functions set React components as the ",o.a.createElement(l.d,null,"body")," property of responses. We can now use ",o.a.createElement(l.d,null,"response.body")," to render those components."),o.a.createElement("p",null,"In the React Router section, we had three components that were rendered: ",o.a.createElement(l.d,null,"App"),",",o.a.createElement(l.d,null,"Inbox"),", and ",o.a.createElement(l.d,null,"Message"),". With Curi, only the most accurately matched route actually matches. That means that for the URL ",o.a.createElement(l.d,null,"/inbox/test"),", the"," ",o.a.createElement(l.d,null,'"Message"')," route will match, but its parent route,"," ",o.a.createElement(l.d,null,'"Inbox"')," will not, so ",o.a.createElement(l.d,null,"response.body")," will be the"," ",o.a.createElement(l.d,null,"Message")," component. Unlike React Router, we don’t render"," ",o.a.createElement(l.d,null,"Inbox")," because we did not match the ",o.a.createElement(l.d,null,"inbox")," ","route."),o.a.createElement(l.b,{lang:"jsx"},'import { createRouterComponent, useResponse } from "@curi/react-dom";\n\nconst router = createRouter(browser, routes);\nconst Router = createRouterComponent(router);\n\nfunction App() {\n  const { response } = useResponse();\n  const { body:Body } = response;\n  return <Body response={response} />;\n}\n\nReactDOM.render((\n  <Router>\n    <App />\n  </Router>\n), holder);\n\n/*\n<Router>\n  <App>\n    <Message />\n  </App>\n</Router>\n*/'),o.a.createElement(l.e,null,o.a.createElement("p",null,"Wildcard routes (",o.a.createElement(l.d,null,"{ path: '(.*)' }"),") can be used to easily display a not found page for any location not matched by other routes.")),o.a.createElement(l.b,null,'const routes = prepareRoutes([\n  // ...,\n  {\n    name: "Not Found",\n    path: "(.*)",\n    respond() {\n      return { body: NotFound };\n    }\n  }\n]);'),o.a.createElement("p",null,"It was mentioned above that there is no need for the ",o.a.createElement(l.d,null,"App")," ","component with Curi. If you want to have an ",o.a.createElement(l.d,null,"App")," ","component, you can render it either inside of the"," ",o.a.createElement(l.d,null,"children")," function or as a parent of your"," ",o.a.createElement(l.d,null,"Router"),". This can be useful for rendering content that is unrelated to specific routes, like a page header or menu."),o.a.createElement("p",null,"Rendering the ",o.a.createElement(l.d,null,"App")," inside of the ",o.a.createElement(l.d,null,"children")," ","function is necessary if any of the components rendered by the"," ",o.a.createElement(l.d,null,"App")," are location aware components, since they need to access the Curi router (through React’s context, which the"," ",o.a.createElement(l.d,null,"Router")," provides)"),o.a.createElement(l.b,{lang:"jsx"},"function render({ response }) {\n  const { body:Body } = response;\n  return (\n    <App>\n      <Body />\n    </App>\n  );\n}\n// or\nfunction render({ response }) {\n  const { body:Body } = response;\n  return (\n    <React.Fragment>\n      <Header />\n      <Body />\n      <Footer />\n    </React.Fragment>\n  );\n}"),o.a.createElement("p",null,"What about props that you want to send to your route components? Pass them to the ",o.a.createElement(l.d,null,"Body")," component that you render. Props can be passed individually, but passing the whole"," ",o.a.createElement(l.d,null,"response")," object is recommended."),o.a.createElement(l.b,{lang:"jsx"},"function render({ response }) {\n  const { body:Body } = response;\n  return <Body response={response} />;\n}"))),o.a.createElement(l.c,{meta:E,tag:"h2"},o.a.createElement("p",null,"You will want to be able to navigate between routes in your application. React Router provides a ",o.a.createElement(l.d,null,"Link")," component to do this, and so does Curi (through the ",o.a.createElement(l.d,null,"@curi/react-dom")," ","package). There are a few differences to note between these two components:"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("p",null,"React Router expects you to generate the pathname yourself, while Curi expects you to pass the name of the route that you want to navigate to. Any path parameters are passed to Curi’s"," ",o.a.createElement(l.d,null,"Link")," using the ",o.a.createElement(l.d,null,"params")," prop."),o.a.createElement(l.b,{lang:"jsx"},"// React Router\n<Link to='/'>Home</Link>\n<Link to={`/inbox/${message}`}>Hello</Link>\n\n// Curi\n<Link name='Home'>Home</Link>\n<Link name='Message' params={{ message }}>Hello</Link>")),o.a.createElement("li",null,o.a.createElement("p",null,"With React Router, any additional location properties are passed to the ",o.a.createElement(l.d,null,"Link")," using the ",o.a.createElement(l.d,null,"to")," object. With Curi, these properties are passed using the prop name (",o.a.createElement(l.d,null,"hash"),","," ",o.a.createElement(l.d,null,"query")," &",o.a.createElement(l.d,null,"state"),")."),o.a.createElement(l.b,{lang:"jsx"},"// React Router\n<Link to={{ pathname: '/inbox', hash: '#test' }}>\n  Inbox\n</Link>\n\n// Curi\n<Link name='Inbox' hash='test'>Inbox</Link>")),o.a.createElement("li",null,o.a.createElement("p",null,"Active detection with Curi is done using the ",o.a.createElement(l.d,null,"useActive")," ","hook. The hook takes the name of the route (and any required params) and returns a boolean to indicate if the route is active. You can also use its ",o.a.createElement(l.d,null,"partial")," option to detect when ancestor routes are active (the opposite of React Router's"," ",o.a.createElement(l.d,null,"onlyActiveOnIndex"),")."),o.a.createElement(l.b,{lang:"jsx"},"// React Router\n<Link\n  to='/'\n  onlyActiveOnIndex\n  activeClassName='active'\n>\n  Home\n</Link>\n\n// Curi\n\n// The useActive hook returns a boolean indicating\n// if a route is active\nconst active = useActive(\"Home\");\n<Link name='Home' className={active ? \"active\" : \"\"}>\n  Home\n</Link>")))),o.a.createElement(l.c,{meta:b,tag:"h2"},o.a.createElement("p",null,"React Router provides a ",o.a.createElement(l.d,null,"withRouter")," higher-order component that will inject router props into the wrapped component."),o.a.createElement("p",null,"The best way to get router data with Curi is to use the"," ",o.a.createElement(r.a,{name:"Package",params:{package:"react-dom",version:"v2"},hash:"useResponse"},o.a.createElement(l.d,null,"useResponse")," hook"),"."),o.a.createElement(l.b,null,"// React Router\nexport default withRouter(SomeComponent);\n\n// Curi\nfunction SomeComponent() {\n  const { response } = useResponse();\n  return ...\n}")),o.a.createElement(l.f,null,o.a.createElement("p",null,"At this point, hopefully you are comfortable with migrating from React Router v2/3 to Curi. If there are any concepts not covered here that you think should be, please feel free to open up an issue"," ",o.a.createElement("a",{href:"https://github.com/pshrmn/curi/issues"},"on GitHub"),".")))}}}]);