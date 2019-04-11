(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{78:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),i=n(20),c={title:"Arguments",hash:"curiProvider-arguments"},o={title:"Props",hash:"curiProvider-props"},u={title:"curiProvider()",hash:"curiProvider",children:[c,o]};function s(){return l.a.createElement(i.e,{meta:u},l.a.createElement("p",null,"The application needs a component at its root to re-render the application when new responses are emitted and to make routing related available through React's context. This component is created by passing the Curi ",l.a.createElement(i.f,null,"router")," to the ",l.a.createElement(i.f,null,"curiProvider()")," function."),l.a.createElement(i.g,null,l.a.createElement("p",null,"Why does ",l.a.createElement(i.f,null,"@curi/react-native")," export a function to create a component and not just a component? Props signify values that can change, but an application should only ever have one router. By hard-coding the ",l.a.createElement(i.f,null,"router")," into a component, we avoid having to handle the possibility of switching routers (which should not happen).")),l.a.createElement(i.g,null,l.a.createElement("p",null,"All of the other components provided by ",l.a.createElement(i.f,null,"@curi/react-native")," ","must be descendants of the component created by"," ",l.a.createElement(i.f,null,"curiProvider()"),".")),l.a.createElement(i.d,{lang:"jsx"},"import { curiProvider } from '@curi/react-native';\n\nconst router = curi(history, routes);\nconst Router = curiProvider(router);\n\nfunction App() {\n  return (\n    <Router>\n      {({ response, navigation, router }) => {\n        const { body:Body } = response;\n        return <Body response={response} />;\n      }}\n    </Router>\n  );\n}"),l.a.createElement(i.e,{tag:"h3",meta:c},l.a.createElement(i.e,{tag:"h4",meta:{title:"router",hash:"curiProvider-router"}},l.a.createElement("p",null,"A Curi router."),l.a.createElement(i.d,null,'import { curiProvider } from "@curi/react-native";\n\nconst router = curi(history, routes);\nconst Router = curiProvider(router);'))),l.a.createElement(i.e,{tag:"h3",meta:o},l.a.createElement(i.e,{tag:"h4",meta:{title:"children",hash:"curiProvider-render"}},l.a.createElement("p",null,l.a.createElement(i.f,null,"children")," is a render-invoked function. When it is called, it will be passed an object with three properties:"),l.a.createElement(i.i,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"property"),l.a.createElement("th",null,"description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"response"),l.a.createElement("td",null,"the response object generated for the current location")),l.a.createElement("tr",null,l.a.createElement("td",null,"navigation"),l.a.createElement("td",null,"the ",l.a.createElement(i.f,null,"action")," of the navigation and the"," ",l.a.createElement(i.f,null,"previous")," response object")),l.a.createElement("tr",null,l.a.createElement("td",null,"router"),l.a.createElement("td",null,"the Curi router")))))))}var m={title:"Props",hash:"Link-props"},h={title:"<Link>",hash:"Link",children:[m]};function p(){return l.a.createElement(i.e,{meta:h},l.a.createElement("p",null,"A ",l.a.createElement(i.f,null,"Link")," is used for navigating within your application. By default, this will render a ",l.a.createElement(i.f,null,"TouchableHighlight"),", but you can also provide another component. When the rendered element is touched, it will use the router's ",l.a.createElement(i.f,null,"history")," object to change locations, which will trigger a re-render."),l.a.createElement("p",null,"With the ",l.a.createElement(i.f,null,"Link"),", instead of providing a URI to navigate to, you specify the name of the route that you want to link to. Then, the pathname of the URI you want the component to link to will be automatically generated for you."),l.a.createElement(i.d,{lang:"jsx"},"import { Link } from '@curi/react-native';\n  \n<Link name='User' params={{ id: 16 }}>\n  <Text>User 16</Text>\n</Link>\n// <TouchableHighlight>\n//   <Text>User 16</Text>\n// </TouchableHighlight>"),l.a.createElement(i.e,{tag:"h3",meta:m},l.a.createElement(i.e,{tag:"h4",meta:{title:"name",hash:"Link-to"}},l.a.createElement("p",null,"The name of the route that you want to navigate to."),l.a.createElement("p",null,"If ",l.a.createElement(i.f,null,"name")," is not provided, the ",l.a.createElement(i.f,null,"Link")," will re-use the current location's ",l.a.createElement(i.f,null,"pathname"),". This is useful for linking to hashes within the current page."),l.a.createElement(i.d,{lang:"jsx"},'// Home route is { name: "Home", path: "" }\n<Link name="Home">Home</Link>'),l.a.createElement(i.g,null,l.a.createElement("p",null,"The ",l.a.createElement(i.f,null,"name")," prop is a replacement for the ",l.a.createElement(i.f,null,"to")," ","prop from previous versions. You can continue to use ",l.a.createElement(i.f,null,"to")," ","in ",l.a.createElement(i.f,null,"@curi/react-dom")," v1, but it will be removed in v2."))),l.a.createElement(i.e,{tag:"h4",meta:{title:"params",hash:"Link-params"}},l.a.createElement("p",null,"If the route that you want to navigate to (or any of its parents) include path parameters, you can specify them using the params prop."),l.a.createElement(i.d,{lang:"jsx"},"// User route is { name: 'User', path: '/user/:id' }\n<Link name='User' params={{ id: 16 }}>User 16</Link>")),l.a.createElement(i.e,{tag:"h4",meta:{title:"hash, query & state",hash:"Link-hash-query-state"}},l.a.createElement("p",null,"While the pathname of the location to navigate to will be generated for you, this does not cover over location properties (query, hash, and state). The ",l.a.createElement(i.f,null,"query"),", ",l.a.createElement(i.f,null,"hash"),", and"," ",l.a.createElement(i.f,null,"state")," props are used to pass these values."),l.a.createElement(i.d,{lang:"jsx"},'<Link\n  name="Products"\n  params={{ type: "vacuums" }}\n  hash="iroomba"\n  query="volume=loud"\n  state={{ owner: "Tom Haverford" }}\n>\n  DJ Roomba\n</Link>')),l.a.createElement(i.e,{tag:"h4",meta:{title:"children",hash:"Link-children"}},l.a.createElement("p",null,"The ",l.a.createElement(i.f,null,"children")," prop can take two forms: either a valid React Node (e.g. a React element, a string, or ",l.a.createElement(i.f,null,"null"),") or a render-invoked ",l.a.createElement(i.f,null,"children")," function."),l.a.createElement("p",null,"The render-invoked ",l.a.createElement(i.f,null,"children")," function will be called with the ",l.a.createElement(i.f,null,"Link"),"'s navigation state. The navigation state is"," ",l.a.createElement(i.f,null,"false")," to start, ",l.a.createElement(i.f,null,"true")," when the ",l.a.createElement(i.f,null,"Link")," ","is clicked, and ",l.a.createElement(i.f,null,"false")," when the the navigation finishes/is cancelled."),l.a.createElement(i.d,{lang:"jsx"},'// a React node\n<Link name="Home">\n  <Text>Home</Text>\n</Link>\n\n// a render-invoked function\n<Link name="User" params={{ id: 1 }}>\n  {navigating => (\n    <React.Fragment>\n      <Text>User 1</Text>\n      {navigating ? <Spinner /> : null}\n    </React.Fragment>\n  )}\n</Link>')),l.a.createElement(i.e,{tag:"h4",meta:{title:"anchor",hash:"Link-anchor"}},l.a.createElement("p",null,"By default, when you render a ",l.a.createElement(i.f,null,"Link"),", a"," ",l.a.createElement(i.f,null,"TouchableHighlight")," element will be rendered."," ",l.a.createElement(i.f,null,"anchor")," lets you provide your own component to be rendered instead."),l.a.createElement(i.d,{lang:"jsx"},'<Link\n  name="User"\n  params={{ id: 16 }}\n  anchor={TouchableOpacity}\n>\n<Text>User 16</Text>\n</Link>\n// <TouchableOpacity>\n//   <Text>User 16</Text>\n// </TouchableOpacity>')),l.a.createElement(i.e,{tag:"h4",meta:{title:"forward",hash:"Link-forward"}},l.a.createElement("p",null,"The ",l.a.createElement(i.f,null,"forward")," prop is an object of props to pass on to the rendered anchor component."),l.a.createElement(i.d,{lang:"jsx"},'<Link\n  name="Home"\n  forward={{\n    style: {...}\n  }}\n>\n  <Text>Home</Text>\n</Link>\n// <TouchableOpacity style={{...}}>\n//   <Text>Home</Text>\n// </TouchableOpacity>'),l.a.createElement(i.g,null,l.a.createElement("p",null,"Previously, any extra props passed to a ",l.a.createElement(i.f,null,"Link")," would be forwarded to the anchor component. This behavior is now deprecated and will be removed in ",l.a.createElement(i.f,null,"@curi/react-native")," v2. Please use the ",l.a.createElement(i.f,null,"forward")," prop instead.")))))}var d={title:"Props",hash:"Curious-props"},f={title:"<Curious>",hash:"Curious",children:[d]};function E(){return l.a.createElement(i.e,{meta:f},l.a.createElement("p",null,"A context consumer component for injecting router values into components."),l.a.createElement(i.d,{lang:"jsx"},"import { Curious } from '@curi/react-native';\n\nconst  MyComponent = () => (\n  <Curious>\n    {({ router, response, navigation }) => {\n      // pass these props to any components that need them\n      return (\n        <ThingThatNeedsResponse response={response} />\n      );\n    }}\n  </Curious>\n);"),l.a.createElement(i.e,{tag:"h3",meta:d},l.a.createElement(i.e,{tag:"h4",meta:{title:"children",hash:"Curious-children"}},l.a.createElement("p",null,"A render-invoked function that returns a React element. This function will receive an object with ",l.a.createElement(i.f,null,"router"),","," ",l.a.createElement(i.f,null,"response")," and ",l.a.createElement(i.f,null,"navigation")," properties."))))}var v={title:"Props",hash:"Active-props"},g={title:"<Active>",hash:"Active",children:[v]};function w(){return l.a.createElement(i.e,{meta:g},l.a.createElement("p",null,"The ",l.a.createElement(i.f,null,"Active"),' component is used to render based on whether or not a route is "active" (its name and params match the current response\'s name and params) using a render-invoked ',l.a.createElement(i.f,null,"children")," ","function."),l.a.createElement(i.d,{lang:"jsx"},"import { Active } from '@curi/react-native';\n\nfunction ActiveLink({\n  name,\n  params,\n  partial,\n  forward,\n  ...rest\n}) {\n  return (\n    <Active name={name} params={params} partial={partial}>\n      {active => (\n        <Link\n          name={name}\n          params={params}\n          {...rest}\n          forward={{\n            ...forward,\n            style: [...forward.style, activeStyle]\n          }}\n        />\n      )}\n    </Active>\n  );\n}\n\n<ActiveLink name=\"Home\">Home</ActiveLink>"),l.a.createElement(i.g,null,l.a.createElement("p",null,"This relies on the active route interaction from"," ",l.a.createElement(r.a,{name:"Package",params:{package:"route-active",version:"v1"}},"@curi/route-active")," ","being added to your router."),l.a.createElement(i.d,null,"import active from '@curi/route-active';\n\nconst router = curi(history, routes, {\n  route: [active()]\n});")),l.a.createElement(i.e,{tag:"h3",meta:v},l.a.createElement(i.e,{tag:"h4",meta:{title:"name",hash:"Active-name"}},l.a.createElement("p",null,"The name of the route to compare against the response object.")),l.a.createElement(i.e,{tag:"h4",meta:{title:"params",hash:"Active-params"}},l.a.createElement("p",null,"An object containing route parameters. These will be compared against the route params of the response object.")),l.a.createElement(i.e,{tag:"h4",meta:{title:"children",hash:"Active-children"}},l.a.createElement("p",null,"A render-invoked function whose first argument is whether the route (determined using the ",l.a.createElement(i.f,null,"name")," and ",l.a.createElement(i.f,null,"params"),") is active."),l.a.createElement(i.d,{lang:"jsx"},'// response = { name: "Photo", params: { id: "abcde" }}\n\n<Active name="Photo" params={{ id: "abcde" }}>\n  {active => ( // if active === true\n    <Photo className={active ? "active" : "inactive"} />\n  )}\n</Active>\n// <Photo className="active" />\n\n<Active name="Photo" params={{ id: "qwerty" }}>\n  {active => ( // if active === false\n    <Photo className={active ? "active" : "inactive"} />\n  )}\n</Active>\n// <Photo className="inactive" />'),l.a.createElement("p",null,"The second argument passed to the render-invoked function is the current ",l.a.createElement(i.f,null,"response"),". ",l.a.createElement(i.f,null,"Active")," only checks if the route is active (i.e. matches the current location's"," ",l.a.createElement(i.f,null,"pathname"),"). If you want to check if the ",l.a.createElement(i.f,null,"query")," ","or ",l.a.createElement(i.f,null,"hash"),", you should do this yourself inside of the render-invoked function. You can compare the ",l.a.createElement(i.f,null,"query"),"/",l.a.createElement(i.f,null,"hash")," against the response's ",l.a.createElement(i.f,null,"location"),"."),l.a.createElement(i.d,{lang:"jsx"},'<Active name="Home">\n  {(active, response) => {\n    const activeHash = response.hash === "ahoy"\n    // ...\n  }}\n</Active>')),l.a.createElement(i.e,{tag:"h4",meta:{title:"partial",hash:"Active-partial"}},l.a.createElement("p",null,"When ",l.a.createElement(i.f,null,"true"),", ",l.a.createElement(i.f,null,"partial")," allows ancestor routes to be considered active. Defaults to ",l.a.createElement(i.f,null,"false"),"."),l.a.createElement(i.d,{lang:"jsx"},'// response = { name: "Photo", params: { id: "abcde" }}\n// where "Photo" is a child route of "Album"\n\n<Active name="Album">\n  {active => ( // if active === false\n    <Album className={active ? "active" : "inactive"} />\n  )}\n</Active>\n// <Album className="inactive" />\n\n<Active name="Album" partial={true}>\n  {active => ( // if active === true\n    <Album className={active ? "active" : "inactive"} />\n  )}\n</Active>\n// <Album className="active" />'))))}var b={title:"Props",hash:"Navigating-props"},k={title:"<Navigating>",hash:"Navigating",children:[b]};function y(){return l.a.createElement(i.e,{meta:k},l.a.createElement("p",null,"The ",l.a.createElement(i.f,null,"Navigating")," component lets you know when the application is navigating and let users cancel the navigation. Its"," ",l.a.createElement(i.f,null,"children")," prop is a render-invoked function that is passed a function to cancel the navigation."),l.a.createElement("p",null,"When navigation starts, ",l.a.createElement(i.f,null,"children()")," will be called with a function that will cancel navigation when it is called."),l.a.createElement("p",null,"When navigation finishes, ",l.a.createElement(i.f,null,"children()")," will be called with no arguments."),l.a.createElement(i.d,{lang:"jsx"},'import { Navigating } from "@curi/react-native";\n              \n<Navigating>\n  {cancel => {\n    if (cancel === undefined) {\n      return null;\n    }\n    return (\n      <TouchableHighlight onPress={cancel}>\n        <Text>Cancel Navigation</Text>\n      </TouchableHighlight>\n    );\n  }}\n</Navigating>'),l.a.createElement(i.e,{tag:"h3",meta:b},l.a.createElement(i.e,{tag:"h4",meta:{title:"children()",hash:"Navigating-children"}},l.a.createElement("p",null,"A function that returns a React node. The function will be called with a ",l.a.createElement(i.f,null,"cancel")," function when navigation starts and with no arguments when the navigation is finished."),l.a.createElement("p",null,"Calling the ",l.a.createElement(i.f,null,"cancel")," function after the navigation is finished has no effect."))))}var T={title:"Props",hash:"Block-props"},A={title:"<Block>",hash:"Block",children:[T]};function x(){return l.a.createElement(i.e,{meta:A},l.a.createElement("p",null,"The ",l.a.createElement(i.f,null,"Block")," component lets you prevent navigation until a user has confirmed that they want to navigate. This can be useful when the user attempts to navigate away from a partially filled form."),l.a.createElement(i.d,null,"import { Block } from '@curi/react-native';"),l.a.createElement(i.e,{tag:"h3",meta:T},l.a.createElement(i.e,{tag:"h4",meta:{title:"active",hash:"Block-active"}},l.a.createElement("p",null,"A boolean, which is ",l.a.createElement(i.f,null,"true")," by default. When it is"," ",l.a.createElement(i.f,null,"true"),", the navigation will be blocked. When it is"," ",l.a.createElement(i.f,null,"false"),", navigation will not be blocked."),l.a.createElement(i.d,{lang:"jsx"},"// will block navigation\n<Block active={true} confirm={confirm} />\n\n// will not block navigation\n<Block active={false} confirm={confirm} />")),l.a.createElement(i.e,{tag:"h4",meta:{title:"confirm",hash:"Block-confirm"}},l.a.createElement("p",null,"The confirm prop is a function that will be called whenever there is navigation."),l.a.createElement(i.i,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"argument"),l.a.createElement("th",null,"description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"location"),l.a.createElement("td",null,"the location that is being navigated to")),l.a.createElement("tr",null,l.a.createElement("td",null,"action"),l.a.createElement("td",null,"the type of navigation")),l.a.createElement("tr",null,l.a.createElement("td",null,"success"),l.a.createElement("td",null,"a function to call when navigation should happen")),l.a.createElement("tr",null,l.a.createElement("td",null,"failure"),l.a.createElement("td",null,"a function to call when navigation should be cancelled.")))),l.a.createElement(i.d,{lang:"jsx"},'<Block\n  confirm={({ location, action }, success, failure) => {\n    const response = window.confirm("Shall we?");\n    if (response) {\n      success();\n    } else {\n      failure();\n    }\n  }}\n/>'))))}var L=l.a.memo(function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.b,null,l.a.createElement("p",null,"The ",l.a.createElement(i.f,null,"@curi/react-native")," package provides components to use Curi routing in a React Native application."),l.a.createElement("p",null,"For more information on using Curi with React Native, please check out the"," ",l.a.createElement(r.a,{name:"Guide",params:{slug:"react-native"}},"React Native guide"),".")),l.a.createElement(i.a,null,l.a.createElement(s,null),l.a.createElement(p,null),l.a.createElement(E,null),l.a.createElement(w,null),l.a.createElement(y,null),l.a.createElement(x,null)))}),P=[{title:"Installation",hash:"installation"},{title:"About",hash:"about"},{title:"API",hash:"API",children:[u,h,f,g,k,A]}];n.d(t,"component",function(){return L}),n.d(t,"contents",function(){return P})}}]);