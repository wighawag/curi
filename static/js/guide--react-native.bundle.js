(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{60:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var a=n(0),r=n.n(a),l=n(3),o=n(27),c={title:"React Native"};function s(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,c.title),r.a.createElement(o.g,{title:"Rendering Responses",id:"rendering"},r.a.createElement(o.c,null,r.a.createElement("p",null,"The ",r.a.createElement(o.d,null,"curiProvider()")," function is used to create the component at the root of a Curi + React application. You can call this component anything that you want, but here it will be referred to as the ",r.a.createElement(o.a,null,"Router"),"."),r.a.createElement(o.e,null,r.a.createElement("p",null,"Why does ",r.a.createElement(o.d,null,"@curi/react-native")," export a function to create a component and not just a component? Props signify values that can change, but an application should only ever have one router. By hard-coding the ",r.a.createElement(o.d,null,"router")," into a component, we avoid having to handle the possibility of switching routers (which should not happen).")),r.a.createElement("p",null,r.a.createElement(o.d,null,"curiProvider()")," is passed the application's Curi router. The returned component will automatically add an"," ",r.a.createElement(l.b,{name:"Guide",params:{slug:"navigating"},hash:"observer"},"observer")," ","to the Curi router when it mounts, so that it can re-render when there are new responses."),r.a.createElement("p",null,"The ",r.a.createElement(o.a,null,"Router")," takes a render-invoked function as its"," ",r.a.createElement(o.d,null,"children")," prop. This function will be called with an object that has three properties— ",r.a.createElement(o.d,null,"response"),","," ",r.a.createElement(o.d,null,"router"),", and ",r.a.createElement(o.d,null,"navigation"),"—and returns the React element(s) that form the root of the application.")),r.a.createElement(o.b,{lang:"jsx"},"import { curiProvider } from '@curi/react-native';\n\nimport router from \"./router\";\nconst Router = curiProvider(router);\n\nconst App = () => (\n  <Router>\n    {({ response, router, navigation }) => {\n      return <response.body />;\n    }}\n  </Router>\n);"),r.a.createElement(o.g,{title:"What to return from children()",id:"children-return",tag:"h3"},r.a.createElement(o.c,null,r.a.createElement("p",null,"The render-invoked ",r.a.createElement(o.d,null,"children()")," is responsible for rendering the root elements for an application."),r.a.createElement("p",null,"Unlike with the DOM, React Native cannot have its initial render delayed with a ",r.a.createElement(o.d,null,"router.once()")," call. Instead, the"," ",r.a.createElement(o.d,null,"children()")," function should check if the"," ",r.a.createElement(o.d,null,"response")," exists, and rendering a loading component when it does not."),r.a.createElement("p",null,"If you set React components as the ",r.a.createElement(o.d,null,"body")," properties on your responses, you can create a React element for the"," ",r.a.createElement(o.d,null,"body")," component in this function."),r.a.createElement("p",null,"The ",r.a.createElement(o.a,null,"Body")," element (it is useful to rename the"," ",r.a.createElement(o.d,null,"response"),"'s ",r.a.createElement(o.d,null,"body")," to ",r.a.createElement(o.d,null,"Body"),' for JSX transformation) is a placeholder for the "real" component that you render for a route. This means that the "real" component will be different for every route. When it comes to passing props to the'," ",r.a.createElement(o.a,null,"Body"),", you ",r.a.createElement("em",null,"could")," use ",r.a.createElement(o.d,null,"response.name")," ","to determine what props to pass based on which route matched, but passing the same props to every route's ",r.a.createElement(o.a,null,"Body")," is usually sufficient. Passing the entire ",r.a.createElement(o.d,null,"response")," is generally useful so that the route components can access any"," ",r.a.createElement(o.d,null,"params"),", ",r.a.createElement(o.d,null,"data"),", and other properties of the"," ",r.a.createElement(o.d,null,"response"),".")),r.a.createElement(o.b,{lang:"jsx"},"const App = () => (\n  <Router>\n    {({ response, router, navigation }) => {\n      // async route protection\n      if (!response) {\n        return <Loading />;\n      }\n\n      // rename body to Body for JSX transformation\n      const { body:Body } = response;\n      return (\n        <React.Fragment>\n          <NavLinks />\n          <Body response={response} />\n        </React.Fragment>\n      );\n    }}\n  </Router>\n);"),r.a.createElement(o.c,null,r.a.createElement("p",null,"If your routes use an object to attach multiple components to a response, the ",r.a.createElement(o.d,null,"children()")," function also provides a good place to split these apart."),r.a.createElement("p",null,"If you do take this approach, please remember that you want every route to set the same ",r.a.createElement(o.d,null,"body")," shape. Otherwise, you'll have to determine the shape and change how you render in the"," ",r.a.createElement(o.d,null,"children()")," function, which can quickly become messy.")),r.a.createElement(o.b,{lang:"jsx","data-line":"20,24,27"},'const routes = prepareRoutes([\n  {\n    name: "Home",\n    path: "",\n    response() {\n      return {\n        body: {\n          Main: HomeMain,\n          Menu: HomeMenu\n        }\n      }\n    }\n  },\n  // ...\n]);\n\nconst App = () => (\n  <Router>\n    {({ response, router, navigation }) => {\n      const { Main, Menu } = response.body;\n      return (\n        <React.Fragment>\n          <Menu />\n          <Main response={response} />\n        </React.Fragment>\n      );\n    }}\n  </Router>\n);'),r.a.createElement(o.c,null,r.a.createElement(o.e,null,r.a.createElement("p",null,"There is a ",r.a.createElement(o.a,null,"Curious")," component that you can render to access the ",r.a.createElement(o.d,null,"response"),", ",r.a.createElement(o.d,null,"router"),", and"," ",r.a.createElement(o.d,null,"navigation")," objects anywhere* in your application. This can help prevent having to pass props through multiple layers of components."),r.a.createElement("p",null,"* anywhere that is a child of your ",r.a.createElement(o.a,null,"Router"),"."))),r.a.createElement(o.b,{lang:"jsx"},'import { Curious } from "@curi/react-native";\n            \nconst BaseRouteName = ({ response }) => (\n  <Text>{response.name}</Text>\n);\n\nexport default function RouteName() {\n  return (\n    <Curious>\n      {({ response }) => <BaseRouteName response={response} />}\n    </Curious>\n  );\n}'))),r.a.createElement(o.g,{title:"Navigating",id:"navigating"},r.a.createElement(o.c,null,r.a.createElement("p",null,"The ",r.a.createElement(o.a,null,"Link")," component is used to navigate between routes within an application. By default, the ",r.a.createElement(o.a,null,"Link")," will render as a ",r.a.createElement(o.a,null,"TouchableHighlight"),", but you can specify a different component using the ",r.a.createElement(o.d,null,"anchor")," prop."),r.a.createElement("p",null,"The ",r.a.createElement(o.a,null,"Link"),"'s ",r.a.createElement(o.d,null,"to")," prop describes which route clicking the link should navigate to. If you pass an invalid route name, Curi will warn you."),r.a.createElement("p",null,"If a route has any params (or if any of a route's ancestors have params for nested routes), the ",r.a.createElement(o.d,null,"params")," prop is used to pass these to the ",r.a.createElement(o.a,null,"Link"),".")),r.a.createElement(o.b,{lang:"jsx"},'import { Link } from "@curi/react-native";\n          \nconst NavLinks = () => (\n  <View>\n    <Link name="Home">\n      <Text>Home</Text>\n    </Link>\n    <Link name="About" anchor={TouchableOpacity}>\n      <Text>About</Text>\n    </Link>\n    <Link name="User" params={{ id: "blue" }}>\n      <Text>Blue</Text>\n    </Link>\n  </View>\n);'),r.a.createElement(o.c,null,r.a.createElement("p",null,"The ",r.a.createElement(o.a,null,"Link")," also takes ",r.a.createElement(o.d,null,"hash"),", ",r.a.createElement(o.d,null,"query"),", and ",r.a.createElement(o.d,null,"state")," props to attach their values to the location that will be navigated to.")),r.a.createElement(o.b,{lang:"jsx"},'<Link name="Home" hash="details">\n  <Text>Home</Text>\n</Link>')),r.a.createElement(o.c,null,r.a.createElement("p",null,"Please check out the full"," ",r.a.createElement(l.b,{name:"Package",params:{package:"react-dom",version:"v1"},hash:"API"},r.a.createElement(o.d,null,"@curi/react-dom"))," ","API documentation to see every component that the package provides.")),r.a.createElement(o.g,{title:"React Native Tips",id:"tips"},r.a.createElement(o.c,null,r.a.createElement(o.e,null,"This guide assumes that you are already familiar with React Native.")),r.a.createElement(o.g,{title:"Back Button",id:"back-button",tag:"h3"},r.a.createElement(o.c,null,r.a.createElement("p",null,"To add back button support, you need to use your"," ",r.a.createElement(o.d,null,"history")," object (which you can use directly or access through your router)."),r.a.createElement("p",null,"The ",r.a.createElement(o.d,null,"history.go()")," method is used for jumping between locations, so passing it ",r.a.createElement(o.d,null,"-1")," will jump back to the previous location."),r.a.createElement("p",null,"When the app is at the initial location, you may want to return"," ",r.a.createElement(o.d,null,"false")," to close the app when the user presses the back button.")),r.a.createElement(o.b,null,"import { BackHandler } from 'react-native';\n\n// create your router\nconst router = curi(history, routes);\n\nBackHandler.addEventListener(\n  \"hardwareBackPress\",\n  () => {\n    // close the app when pressing back button\n    // while on the initial screen\n    if (router.history.index === 0) {\n      return false;\n    }\n    router.history.go(-1);\n    return true;\n  }\n);"))))}}}]);