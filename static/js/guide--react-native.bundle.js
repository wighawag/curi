(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{45:function(e,t,n){"use strict";n.r(t),n.d(t,"component",function(){return d}),n.d(t,"contents",function(){return h});var a=n(0),r=n.n(a),o=n(3),l=n(27),s={title:"React Native"},c={title:"What to render",hash:"render-response"},u={title:"Rendering Responses",hash:"rendering",children:[c]},i={title:"Navigating",hash:"navigating"},m={title:"Back Button",hash:"back-button"},p={title:"React Native Tips",hash:"tips",children:[m]},h=[u,i,p];function d(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.g,{title:s.title}),r.a.createElement(l.c,{meta:u,tag:"h2"},r.a.createElement("p",null,"The ",r.a.createElement(l.d,null,"createRouterComponent")," function is used to create the component at the root of a Curi + React application. You can call this component anything that you want, but here it will be referred to as the ",r.a.createElement(l.d,null,"Router"),"."),r.a.createElement(l.e,null,r.a.createElement("p",null,"Why does ",r.a.createElement(l.d,null,"@curi/react-native")," export a function to create a component and not a component? Props signify values that can change, but an application should only ever have one router. By hard-coding the ",r.a.createElement(l.d,null,"router")," into a component, we avoid having to handle the possibility of switching routers (which should not happen).")),r.a.createElement("p",null,r.a.createElement(l.d,null,"createRouterComponent")," is passed the application's Curi router to create a ",r.a.createElement(l.d,null,"Router")," component. The ",r.a.createElement(l.d,null,"Router")," ","will automatically add an"," ",r.a.createElement(o.a,{name:"Package",params:{package:"router",version:"v2"},hash:"observe"},"observer")," ","to the Curi router when it mounts, so that it can re-render when there are new responses."),r.a.createElement("p",null,"Along with setting up an observer to react to new responses, the"," ",r.a.createElement(l.d,null,"Router")," sets up contexts for routing values. The",r.a.createElement(l.d,null,"response")," and ",r.a.createElement(l.d,null,"navigation")," can be read using the"," ",r.a.createElement(o.a,{name:"Package",params:{package:"react-native",version:"v2"},hash:"useResponse"},r.a.createElement(l.d,null,"useResponse")," hook"),", while the ",r.a.createElement(l.d,null,"router")," can be read using the"," ",r.a.createElement(o.a,{name:"Package",params:{package:"react-native",version:"v2"},hash:"useRouter"},r.a.createElement(l.d,null,"useRouter")," hook"),"."),r.a.createElement(l.b,{lang:"jsx"},"import {\n  createRouterComponent,\n  useRouter,\n  useResponse\n} from '@curi/react-native';\n\nimport router from \"./router\";\nconst Router = createRouterComponent(router);\n\nfunction App() {\n  const router = userRouter();\n  const {\n    response,\n    navigation\n  } = useResponse();\n  const { body:Body } = response;\n  return <Body />\n}\n\nfunction MyReactNativeApp = () => (\n  <Router>\n    <App />\n  </Router>\n);"),r.a.createElement(l.c,{meta:c,tag:"h3"},r.a.createElement("p",null,"The ",r.a.createElement(l.d,null,"Router")," component sets up the application's routing, while its children render the application's content. The Curi router generates ",r.a.createElement(l.d,null,"response")," objects from matched locations; those are core for figuring out what to render."),r.a.createElement("p",null,"If you use ",r.a.createElement(l.d,null,"route.respond")," to set React components as the"," ",r.a.createElement(l.d,null,"body")," properties on your responses, you can create a React element for the ",r.a.createElement(l.d,null,"body")," component."),r.a.createElement("p",null,"The ",r.a.createElement(l.d,null,"Body")," element (it is useful to rename the"," ",r.a.createElement(l.d,null,"response"),"'s ",r.a.createElement(l.d,null,"body")," to ",r.a.createElement(l.d,null,"Body"),' for JSX transformation) is a placeholder for the "real" component that you render for a route. This means that the "real" component will be different for every route.'),r.a.createElement("p",null,"While not a strict requirement, it is useful to pass the"," ",r.a.createElement(l.d,null,"response")," object as a prop to the rendered ",r.a.createElement(l.d,null,"Body")," ","component."),r.a.createElement(l.b,{lang:"jsx"},"function App() {\n  const { response } = useResponse();\n  const { body:Body } = response;\n  return <Body response={response} />\n}\n\nfunction MyReactNativeApp() {\n  return (\n    <Router>\n      <NavLinks />\n      <App />\n    </Router>\n  )\n}"),r.a.createElement("p",null,"If your routes use an object to attach multiple components to a response, the ",r.a.createElement(l.d,null,"children")," function also provides a good place to split these apart."),r.a.createElement(l.e,null,r.a.createElement("p",null,"If you do take this approach, please remember that you want every route to set the same ",r.a.createElement(l.d,null,"body")," shape. Otherwise, you'll have to determine the shape and change how you render in the"," ",r.a.createElement(l.d,null,"children")," function, which can quickly become messy.")),r.a.createElement(l.b,{lang:"jsx","data-line":"22,26,29"},'const routes = prepareRoutes([\n  {\n    name: "Home",\n    path: "",\n    respond() {\n      return {\n        body: {\n          Main: HomeMain,\n          Menu: HomeMenu\n        }\n      }\n    }\n  },\n  // ...\n]);\n\nfunction App() {\n  const { response } = useResponse();\n  const { Main, Menu } = response.body;\n  return (\n    <React.Fragment>\n      <Menu />\n      <Main response={response} />\n    </React.Fragment>\n  );\n}'))),r.a.createElement(l.c,{meta:i,tag:"h2"},r.a.createElement("p",null,"The ",r.a.createElement(l.d,null,"Link")," component is used to navigate between routes within an application. By default, the ",r.a.createElement(l.d,null,"Link")," will render as a ",r.a.createElement(l.d,null,"TouchableHighlight"),", but you can specify a different component using the ",r.a.createElement(l.d,null,"anchor")," prop."),r.a.createElement("p",null,"The ",r.a.createElement(l.d,null,"Link"),"'s ",r.a.createElement(l.d,null,"name")," prop describes which route clicking the link should navigate to. If you pass an invalid route name, Curi will warn you."),r.a.createElement("p",null,"If a route has any params (or if any of a route's ancestors have params for nested routes), the ",r.a.createElement(l.d,null,"params")," prop is used to pass these to the ",r.a.createElement(l.d,null,"Link"),"."),r.a.createElement(l.b,{lang:"jsx"},'import { Link } from "@curi/react-native";\n\nconst NavLinks = () => (\n  <View>\n    <Link name="Home">\n      <Text>Home</Text>\n    </Link>\n    <Link name="About" anchor={TouchableOpacity}>\n      <Text>About</Text>\n    </Link>\n    <Link name="User" params={{ id: "blue" }}>\n      <Text>Blue</Text>\n    </Link>\n  </View>\n);'),r.a.createElement("p",null,"The ",r.a.createElement(l.d,null,"Link")," also takes ",r.a.createElement(l.d,null,"hash"),", ",r.a.createElement(l.d,null,"query"),", and"," ",r.a.createElement(l.d,null,"state")," props to attach their values to the location that will be navigated to."),r.a.createElement(l.b,{lang:"jsx"},'<Link name="Home" hash="details">\n  <Text>Home</Text>\n</Link>')),r.a.createElement("p",null,"Please check out the full"," ",r.a.createElement(o.a,{name:"Package",params:{package:"react-dom",version:"v2"},hash:"API"},r.a.createElement(l.d,null,"@curi/react-dom"))," ","API documentation to see every component that the package provides."),r.a.createElement(l.c,{meta:p,tag:"h2"},r.a.createElement(l.e,null,r.a.createElement("p",null,"This guide assumes that you are already familiar with React Native.")),r.a.createElement(l.c,{meta:m,tag:"h3"},r.a.createElement("p",null,"To add back button support, you need to use your ",r.a.createElement(l.d,null,"history")," ","object (which you can access through your router as"," ",r.a.createElement(l.d,null,"router.history"),")."),r.a.createElement("p",null,"The ",r.a.createElement(l.d,null,"history.go")," method is used for jumping between locations, so passing it ",r.a.createElement(l.d,null,"-1")," will jump back to the previous location."),r.a.createElement("p",null,"When the app is at the initial location, you may want to return"," ",r.a.createElement(l.d,null,"false")," to close the app when the user presses the back button."),r.a.createElement(l.b,null,"import { BackHandler } from 'react-native';\n\n// create your router\nconst router = createRouter(browser, routes);\n\nBackHandler.addEventListener(\n  \"hardwareBackPress\",\n  () => {\n    // close the app when pressing back button\n    // while on the initial screen\n    if (router.history.index === 0) {\n      return false;\n    }\n    router.history.go(-1);\n    return true;\n  }\n);"))))}}}]);