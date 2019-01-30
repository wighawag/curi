(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{57:function(e,t,n){"use strict";n.r(t),n.d(t,"component",function(){return y}),n.d(t,"contents",function(){return g});var a=n(0),r=n.n(a),o=n(3),l=n(25),c={title:"React Router v4"},s={title:"With React Router",hash:"routes-with-react-router"},u={title:"With Curi",hash:"routes-with-curi"},i={title:"Routes",hash:"routes",children:[s,u]},h={title:"Creating the router",hash:"creating-the-router"},m={title:"React Router",hash:"rendering-react-router"},p={title:"Curi",hash:"rendering-with-curi"},d={title:"Rendering",hash:"rendering",children:[m,p]},E={title:"Links",hash:"links"},b={title:"Accessing router props from nested components",hash:"router-props"},g=[i,h,d,E,b];function y(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.f,null,r.a.createElement("h1",null,c.title),r.a.createElement("p",null,"React Router v4 isn't like most other routers because it lacks a centralized configuration. Migrating to Curi mostly involves re-centralizing your routes to simplify route management.")),r.a.createElement(l.c,{meta:i},r.a.createElement("p",null,"Let’s get started with setting up our routes."),r.a.createElement(l.c,{meta:s,tag:"h3"},r.a.createElement("p",null,"With React Router v4, ",r.a.createElement(l.a,null,"Route"),"s are defined in components. They are usually grouped together under a ",r.a.createElement(l.a,null,"Switch")," so that only a single route from a group renders. Nested routes are rendered inside of the compnent rendered by the parent ",r.a.createElement(l.a,null,"Route")),r.a.createElement(l.b,{lang:"jsx"},'import { Route, Switch } from "react-router-dom";\n            \nconst App = () => (\n  <Switch>\n    <Route exact path="/" component={Home} />\n    <Route path="/inbox" component={Inbox} />\n  </Switch>                 \n);\n\n// the <Inbox> matches nested routes (and includes\n// a <Route> for "exact" /inbox matches)\nconst Inbox = ({ match }) => (\n  <Switch>\n    <Route\n      exact\n      path={match.path}\n      component={Messages}\n    />\n    <Route\n      exact\n      path={`${match.path}/:message`}\n      component={Message}\n    />\n  </Switch>\n);')),r.a.createElement(l.c,{meta:u,tag:"h3"},r.a.createElement("p",null,'Routes in Curi are JavaScript objects. They are grouped together in an array of "top-level" routes. Nested routes are grouped under their parent route\'s ',r.a.createElement(l.d,null,"children")," property."),r.a.createElement("p",null,"First, we will define the names and paths for our routes."),r.a.createElement("p",null,"Each route must have a unique name. A route's name will be used for interacting with it. For example, to navigate to a route, you only have to know its name, not its URL."),r.a.createElement("p",null,"The biggest difference between the Curi paths and the React Router paths is that with Curi, you never include a forward slash at the beginning of the path. This means that while the root path for React Router is ",r.a.createElement(l.d,null,"'/'"),", the root path for Curi is ",r.a.createElement(l.d,null,"''"),"."),r.a.createElement(l.b,null,"const routes = prepareRoutes([\n  {\n    name: 'Home',\n    path: ''\n  },\n  {\n    name: 'Inbox',\n    path: 'inbox',\n    children: [\n      {\n        name: 'Message',\n        path: ':message'\n      }\n    ]\n  }\n]);"),r.a.createElement("p",null,"Next, we should add our components to each route."),r.a.createElement("p",null,"Curi routes can have a ",r.a.createElement(l.d,null,"response()")," property, which is a function that returns an object of properties to merge onto the response that we will be using to render. For this React application, we want a response's ",r.a.createElement(l.d,null,"body")," property to be the React component associated with each route."),r.a.createElement(l.b,null,"import { prepareRoutes } from \"@curi/router\";\n            \nimport Home from './pages/Home';\nimport Inbox from './pages/Inbox';\nimport Mesage from './pages/Message';\n\nconst routes = prepareRoutes([\n  {\n    name: 'Home',\n    path: '',\n    response: () => {\n      return {\n        body: Home\n      };\n    }\n  },\n  {\n    name: 'Inbox',\n    path: 'inbox',\n    response: () => {\n      return {\n        body: Inbox\n      };\n    },\n    children: [\n      {\n        name: 'Message',\n        path: ':message',\n        response: () => {\n          return {\n            body: Message\n          };\n        }\n      }\n    ]\n  }\n]);"),r.a.createElement("p",null,"With React Router v4, a component's lifecycle methods are used for loading data, code splitting, and other non-rendering tasks. With Curi, routes can have functions that are called when they match the new location. These are grouped under the route's ",r.a.createElement(l.d,null,"resolve")," ","object. The ",r.a.createElement(l.d,null,"resolve")," functions are called every time that a route matches a location."),r.a.createElement("p",null,"The"," ",r.a.createElement(o.b,{name:"Package",params:{package:"router",version:"v1"},hash:"route-properties"},r.a.createElement(l.d,null,"@curi/router")," route API documentation")," ","covers all of the route properties."),r.a.createElement(l.b,null,"const routes = prepareRoutes([\n  {\n    path: '',\n    response: () => {\n      return {\n        body: Home\n      };\n    }\n  },\n  {\n    path: 'inbox',\n    response: () => {\n      return {\n        body: Inbox\n      };\n    },\n    children: [\n      {\n        path: ':message',\n        response: () => {\n          return {\n            body: Message\n          };\n        },\n        resolve: {\n          body: (route) => { return ... },\n        }\n      }\n    ]\n  }\n]);")),r.a.createElement("p",null,"Once your routes have been defined, you can move on to creating your Curi router.")),r.a.createElement(l.c,{meta:h},r.a.createElement("p",null,"With React Router, you create your router by rendering a"," ",r.a.createElement(l.a,null,"Router")," component. This may be a ",r.a.createElement(l.a,null,"BrowserRouter"),", a"," ",r.a.createElement(l.a,null,"HashRouter"),", a ",r.a.createElement(l.a,null,"MemoryRouter"),", or a plain"," ",r.a.createElement(l.a,null,"Router")," that you pass your own ",r.a.createElement(l.d,null,"history")," instance to. The ",r.a.createElement(l.a,null,"___Router")," components create a ",r.a.createElement(l.d,null,"history")," ","instance for you using props passed to the component."),r.a.createElement(l.b,{lang:"jsx"},"import { BrowserRouter } from 'react-router-dom';\n\nReactDOM.render((\n  <BrowserRouter>\n    <App />\n  </BrowserRouter>\n), holder);"),r.a.createElement("p",null,"With Curi, the router is created prior to rendering. It takes a Hickory history object, your routes array, and possibly an options object. ",r.a.createElement("a",{href:"https://github.com/pshrmn/hickory"},"Hickory")," is similar to the ",r.a.createElement(l.d,null,"history")," package used by React Router, but has a slight modified API (easier navigation blocking and navigation that imitates how anchors work) and more convenient location objects (you can use a ",r.a.createElement(l.d,null,"query")," object instead of having to manually create a ",r.a.createElement(l.d,null,"search")," string)."),r.a.createElement(l.b,null,"import { curi, prepareRoutes } from '@curi/router';\nimport Browser from '@hickory/browser';\nconst history = Browser();\nconst routes = prepareRoutes([...]);\nconst router = curi(history, routes);")),r.a.createElement(l.c,{meta:d},r.a.createElement("p",null,"We will walk through the rendering differences between React Router and Curi by looking at what happens in each when we navigate to the URL with the pathname ",r.a.createElement(l.d,null,"/inbox/test"),"."),r.a.createElement(l.c,{meta:m,tag:"h3"},r.a.createElement("p",null,"React Router matches routes while it renders. It uses the"," ",r.a.createElement(l.a,null,"Router")," component to listen for location changes. Each time that the location changes, the application re-renders."),r.a.createElement("p",null,"The ",r.a.createElement(l.a,null,"Switch")," will iterate over its children"," ",r.a.createElement(l.a,null,"Route"),"s. The first route, ",r.a.createElement(l.d,null,'"/"')," has an"," ",r.a.createElement(l.d,null,"exact")," prop, so it only matches when the pathname is"," ",r.a.createElement(l.d,null,'"/"'),". Since it is not, the next ",r.a.createElement(l.a,null,"Route")," will be checked. The next route, ",r.a.createElement(l.d,null,'"/inbox"')," matches the beginning of the pathname ",r.a.createElement(l.d,null,'"/inbox/test"'),". It is not an exact match, but that route does not do exact matching, so React Router will render its component, ",r.a.createElement(l.a,null,"Inbox"),"."),r.a.createElement("p",null,"The ",r.a.createElement(l.a,null,"Inbox")," has its own ",r.a.createElement(l.a,null,"Switch")," to iterate over. Its first route only matches ",r.a.createElement(l.d,null,'"/inbox"')," exactly, so it moves on to the next route, which has a ",r.a.createElement(l.d,null,"message")," route param. This route matches and stores"," ",r.a.createElement(l.d,null,'"test-message-please-ignore"')," as"," ",r.a.createElement(l.d,null,"match.params.message"),". The ",r.a.createElement(l.a,null,"Message")," component will then be rendered, which has access to the ",r.a.createElement(l.d,null,"message")," ","param."),r.a.createElement(l.b,{lang:"jsx"},'ReactDOM.render((\n  <BrowserRouter>\n    <App />\n  </BrowserRouter>\n), holder);\n\nconst App = () => (\n  <Switch>\n    <Route exact path="/" component={Home} />\n    <Route path="/inbox" component={Inbox} />\n  </Switch>                 \n);\n\nconst Inbox = ({ match }) => (\n  <Switch>\n    <Route\n      exact\n      path={match.path}\n      component={Messages}\n    />\n    <Route\n      exact\n      path={`${match.path}/:message`}\n      component={Message}\n    />\n  </Switch>\n);\n\n/*\n<BrowserRouter>\n  <App>\n    <Inbox>\n      <Message>\n    </Inbox>\n  </App>\n</BrowserRouter>\n*/')),r.a.createElement(l.c,{meta:p,tag:"h3"},r.a.createElement("p",null,"With Curi, we also need to re-render our application every time that the location changes. We will do this by creating a root Curi component by calling the ",r.a.createElement(l.d,null,"curiProvider()")," function, which comes from the ",r.a.createElement(l.d,null,"@curi/react-dom")," package, and passing it our Curi router. While the name of this component is entirely up to you, we will refer to it as the ",r.a.createElement(l.a,null,"Router")," here."),r.a.createElement("p",null,"The ",r.a.createElement(l.a,null,"Router")," will setup an observer on the provided router so that it can re-render your application whenever there is a new"," ",r.a.createElement(l.d,null,"response"),". The ",r.a.createElement(l.a,null,"Router")," expects a function as its"," ",r.a.createElement(l.d,null,"children")," prop (a render-invoked function). This function renders the application using the ",r.a.createElement(l.d,null,"response"),"."),r.a.createElement("p",null,"When the ",r.a.createElement(l.a,null,"Router"),"'s ",r.a.createElement(l.d,null,"children()")," function is called, it will receive an object with three properties:"),r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement(l.d,null,"response")," is the new response object"),r.a.createElement("li",null,r.a.createElement(l.d,null,"navigation")," is an object with additional information about the navigation"),r.a.createElement("li",null,r.a.createElement(l.d,null,"router")," is your Curi router (mostly useful if the function is defined in a separate file)")),r.a.createElement("p",null,"Above, we added ",r.a.createElement(l.d,null,"response()")," functions to each route. The functions set React components as the ",r.a.createElement(l.d,null,"body")," property of responses. We can now use ",r.a.createElement(l.d,null,"response.body")," to render those components."),r.a.createElement("p",null,"In the React Router HashSection, we had three components that were rendered: ",r.a.createElement(l.a,null,"App"),",",r.a.createElement(l.a,null,"Inbox"),", and ",r.a.createElement(l.a,null,"Message"),". With Curi, only the most accurately matched route actually matches. That means that for the URL ",r.a.createElement(l.d,null,"/inbox/test"),", the"," ",r.a.createElement(l.d,null,'"Message"')," route will match, but its parent route,"," ",r.a.createElement(l.d,null,'"Inbox"')," will not, so ",r.a.createElement(l.d,null,"response.body")," will be the"," ",r.a.createElement(l.a,null,"Message")," component. Unlike React Router, we don’t render"," ",r.a.createElement(l.a,null,"Inbox")," because we did not match the ",r.a.createElement(l.d,null,"inbox")," ","route."),r.a.createElement(l.b,{lang:"jsx"},'import { curiProvider } from "@curi/react-dom";\n\nconst router = curi(history, routes);            \nconst Router = curiProvider(router);\n\nReactDOM.render((\n  <Router>\n    {({ response }) => {\n      const { body:Body } = response;\n      return <Body />;\n    }}\n  </Router>\n), holder);\n\n/*\n  <Router>\n    <Message />\n  </Router>\n*/'),r.a.createElement(l.e,null,r.a.createElement("p",null,"Wildcard routes (",r.a.createElement(l.d,null,"{ path: '(.*)' }"),") can be used to easily display a not found page for any location not matched by other routes.")),r.a.createElement(l.b,null,'const routes = prepareRoutes([\n  // ...,\n  {\n    name: "Not Found",\n    path: "(.*)",\n    response() {\n      return { body: NotFound };\n    }\n  }\n]);'),r.a.createElement("p",null,"It was mentioned above that there is no need for the ",r.a.createElement(l.a,null,"App")," ","component with Curi. If you want to have an ",r.a.createElement(l.a,null,"App")," ","component, you can render it either inside of the"," ",r.a.createElement(l.d,null,"children()")," function or as a parent of your"," ",r.a.createElement(l.a,null,"Router"),". This can be useful for rendering content that is unrelated to specific routes, like a page header or menu."),r.a.createElement("p",null,"Rendering the ",r.a.createElement(l.a,null,"App")," inside of the ",r.a.createElement(l.d,null,"children()")," ","function is necessary if any of the components rendered by the"," ",r.a.createElement(l.a,null,"App")," are location aware components, since they need to access the Curi router (through React’s context, which the"," ",r.a.createElement(l.a,null,"Router")," provides)"),r.a.createElement(l.b,{lang:"jsx"},"function render({ response }) {\n  const { body:Body } = response;\n  return (\n    <App>\n      <Body />\n    </App>\n  );\n}\n// or\nfunction render({ response }) {\n  const { body:Body } = response;\n  return (\n    <div>\n      <Header />\n      <Body />\n      <Footer />\n    </div>\n  );\n}"),r.a.createElement("p",null,"What about props that you want to send to your route components? Pass them to the ",r.a.createElement(l.a,null,"Body")," component that you render. Props can be passed individually, but passing the whole"," ",r.a.createElement(l.d,null,"response")," object is recommended."),r.a.createElement(l.b,{lang:"jsx"},"function render({ response }) {\n  const { body:Body } = response;\n  return <Body response={response} />;\n}"))),r.a.createElement(l.c,{meta:E},r.a.createElement("p",null,"You will want to be able to navigate between routes in your application. React Router provides a ",r.a.createElement(l.a,null,"Link")," component to do this, and so does Curi (through the ",r.a.createElement(l.d,null,"@curi/react-dom")," ","package). There are a few differences to note between these two components:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,"React Router expects you to generate the pathname yourself, while Curi expects you to pass the name of the route that you want to navigate to. Any path parameters are passed to Curi’s"," ",r.a.createElement(l.a,null,"Link")," using the ",r.a.createElement(l.d,null,"params")," prop."),r.a.createElement(l.b,{lang:"jsx"},"// React Router\n<Link to='/'>Home</Link>\n<Link to={`/inbox/${message}`}>Hello</Link>\n\n// Curi\n<Link name='Home'>Home</Link>\n<Link name='Message' params={{ message }}>Hello</Link>")),r.a.createElement("li",null,r.a.createElement("p",null,"With React Router, any additional location properties are passed to the ",r.a.createElement(l.a,null,"Link")," using the ",r.a.createElement(l.d,null,"to")," object. With Curi, these properties are passed using the prop name (",r.a.createElement(l.d,null,"hash"),","," ",r.a.createElement(l.d,null,"query")," &",r.a.createElement(l.d,null,"state"),")."),r.a.createElement(l.b,{lang:"jsx"},"// React Router\n<Link to={{ pathname: '/inbox', hash: '#test' }}>\n  Inbox\n</Link>\n\n// Curi\n<Link name='Inbox' hash='test'>Inbox</Link>")),r.a.createElement("li",null,r.a.createElement("p",null,"Active detection with Curi uses an ",r.a.createElement(l.a,null,"Active")," component."," ",r.a.createElement(l.a,null,"Active"),"'s ",r.a.createElement(l.d,null,"children")," prop is a render-invoked function that receives a boolean ",r.a.createElement(l.d,null,"true")," when the named route is active and ",r.a.createElement(l.d,null,"false")," when it is not. You can also pass ",r.a.createElement(l.d,null,"partial={true}")," to partial matches (ancestor routes) be considered active (the opposite of React Router's"," ",r.a.createElement(l.d,null,"onlyActiveOnIndex"),")."),r.a.createElement(l.b,{lang:"jsx"},"// React Router\n<Link\n  to='/'\n  onlyActiveOnIndex\n  activeClassName='active'\n>\n  Home\n</Link>\n\n// Curi\n// You need to add @curi/route-active\n// to your router object\nimport active from '@curi/route-active';\nconst router = curi(history, routes, {\n  route: [active()]\n});\n\n// The <Active> component determines if a route is active\n// and passes true/false to the render-invoked children\n// function\n<Active name=\"Home\">\n  {active => (\n    <Link\n      name='Home'\n      forward={{\n        className: active ? \"active\" : \"\"\n      }}\n    >Home</Link>\n  )}\n</Active>")))),r.a.createElement(l.c,{meta:b},r.a.createElement("p",null,"React Router provides a ",r.a.createElement(l.d,null,"withRouter")," higher-order component that will inject router props into the wrapped component."),r.a.createElement("p",null,"Curi provides similar functionality with the ",r.a.createElement(l.d,null,"Curious")," ","component."),r.a.createElement("p",null,r.a.createElement(l.d,null,"Curious")," has a render-invoked ",r.a.createElement(l.d,null,"children")," function, which you can use to inject the Curi ",r.a.createElement(l.d,null,"router"),", the current"," ",r.a.createElement(l.d,null,"response"),", and the current ",r.a.createElement(l.d,null,"navigation")," object into components."),r.a.createElement(l.b,null,"// React Router\nexport default withRouter(SomeComponent);\n\n// Curi\nexport default () => (\n  <Curious>\n    {({ response }) => (\n      <SomeComponent response={response} />\n    )}\n  </Curious>\n);")),r.a.createElement(l.f,null,r.a.createElement("p",null,"At this point, hopefully you are comfortable with migrating from React Router v4 to Curi. If there are any concepts not covered here that you think should be, please feel free to open up an issue"," ",r.a.createElement("a",{href:"https://github.com/pshrmn/curi/issues"},"on GitHub"),".")))}}}]);