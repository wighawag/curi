(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),o=n(20),s={title:"Arguments",hash:"createRouterComponent-arguments"},i={title:"Return Value",hash:"createRouterComponent-return"},c={title:"createRouterComponent",hash:"createRouterComponent",children:[s,i]};function m(){return r.a.createElement(o.e,{meta:c},r.a.createElement("p",null,"A higher-order component that returns a ",r.a.createElement(o.f,null,"Router")," component."),r.a.createElement(o.d,{lang:"jsx"},"import { createRouterComponent } from '@curi/react-native';\n\nconst router = createRouter(browser, routes);\nconst Router = createRouterComponent(router);"),r.a.createElement(o.g,null,r.a.createElement("p",null,"Why a higher-order component not regular component? Props signify values that can change, but an application should only ever have one router. Using a higher-order component hard-codes the provided"," ",r.a.createElement(o.f,null,"router")," as the one and only router.")),r.a.createElement(o.e,{tag:"h3",meta:s},r.a.createElement(o.e,{tag:"h4",meta:{title:"router",hash:"createRouterComponent-router"}},r.a.createElement("p",null,"A Curi"," ",r.a.createElement(l.a,{name:"Package",params:{package:"router",version:"v2"},hash:"curi"},"router"),"."))),r.a.createElement(o.e,{tag:"h3",meta:i},r.a.createElement("p",null,"A component that sets routing context data. Any component that relies on routing data must be a descendant of the ",r.a.createElement(o.f,null,"Router"),"."),r.a.createElement(o.e,{tag:"h4",meta:{title:"children",hash:"createRouterComponent-children"}},r.a.createElement("p",null,"The ",r.a.createElement(o.f,null,"Router")," takes any valid React node (elements, strings, etc.) as its ",r.a.createElement(o.f,null,"children"),"."))))}var u={title:"Props",hash:"Link-props"},h={title:"<Link>",hash:"Link",children:[u]};function p(){return r.a.createElement(o.e,{meta:h},r.a.createElement("p",null,"A ",r.a.createElement(o.f,null,"Link")," is used for navigating within your application. By default, this will render a ",r.a.createElement(o.f,null,"TouchableHighlight"),". When the rendered element is pressed, it will use the router to navigate."),r.a.createElement("p",null,"With the ",r.a.createElement(o.f,null,"Link"),", instead of providing a URI to navigate to, you specify the name of the route that you want to link to. Then, the pathname of the URI you want the component to link to will be automatically generated for you."),r.a.createElement(o.d,{lang:"jsx"},"import { Link } from '@curi/react-native';\n\n<Link name='User' params={{ id: 16 }}>\n  <Text>User 16</Text>\n</Link>\n// <TouchableHighlight>\n//   <Text>User 16</Text>\n// </TouchableHighlight>"),r.a.createElement(o.e,{tag:"h3",meta:u},r.a.createElement(o.e,{tag:"h4",meta:{title:"name",hash:"Link-to"}},r.a.createElement("p",null,"The name of the route that the ",r.a.createElement(o.f,null,"Link")," should navigate to when it is pressed."),r.a.createElement("p",null,"To navigate within the same location, the ",r.a.createElement(o.f,null,"name")," can be skipped. This is useful for linking to hashes within the current page."),r.a.createElement(o.d,{lang:"jsx"},'// Home route is { name: "Home", path: "" }\n<Link name="Home">Home</Link>')),r.a.createElement(o.e,{tag:"h4",meta:{title:"params",hash:"Link-params"}},r.a.createElement("p",null,"If the named route (or any of its parents) include path parameters, they must be provided using the ",r.a.createElement(o.f,null,"params")," prop."),r.a.createElement(o.d,{lang:"jsx"},"// User route is { name: 'User', path: '/user/:id' }\n<Link name='User' params={{ id: 16 }}>User 16</Link>")),r.a.createElement(o.e,{tag:"h4",meta:{title:"hash, query & state",hash:"Link-hash-query-state"}},r.a.createElement("p",null,"The ",r.a.createElement(o.f,null,"query"),", ",r.a.createElement(o.f,null,"hash"),", and ",r.a.createElement(o.f,null,"state")," values for the location to navigate to."),r.a.createElement(o.d,{lang:"jsx"},'<Link\n  name="Products"\n  params={{ type: "vacuums" }}\n  hash="iroomba"\n  query="volume=loud"\n  state={{ owner: "Tom Haverford" }}\n>\n  DJ Roomba\n</Link>')),r.a.createElement(o.e,{tag:"h4",meta:{title:"children",hash:"Link-children"}},r.a.createElement("p",null,"A valid React Node (e.g. a React element, a string, or"," ",r.a.createElement(o.f,null,"null"),")."),r.a.createElement(o.d,{lang:"jsx"},'// a React node\n<Link name="Home">\n  <Text>Home</Text>\n</Link>')),r.a.createElement(o.e,{tag:"h4",meta:{title:"anchor",hash:"Link-anchor"}},r.a.createElement("p",null,"A ",r.a.createElement(o.f,null,"Link")," renders a ",r.a.createElement(o.f,null,"TouchableHighlight")," element by default, but this can be changed using the ",r.a.createElement(o.f,null,"anchor")," prop. This can be useful for using styled components."),r.a.createElement(o.d,{lang:"jsx"},'<Link\n  name="User"\n  params={{ id: 16 }}\n  anchor={TouchableOpacity}\n>\n<Text>User 16</Text>\n</Link>\n// <TouchableOpacity>\n//   <Text>User 16</Text>\n// </TouchableOpacity>')),r.a.createElement(o.e,{tag:"h4",meta:{title:"forward",hash:"Link-forward"}},r.a.createElement("p",null,"The ",r.a.createElement(o.f,null,"forward")," prop is an object of props to pass on to the rendered anchor component."),r.a.createElement(o.d,{lang:"jsx"},'<Link\n  name="Home"\n  forward={{\n    style: {...}\n  }}\n>\n  <Text>Home</Text>\n</Link>\n// <TouchableOpacity style={{...}}>\n//   <Text>Home</Text>\n// </TouchableOpacity>'),r.a.createElement(o.g,null,r.a.createElement("p",null,"Previously, any extra props passed to a ",r.a.createElement(o.f,null,"Link")," would be forwarded to the anchor component. This behavior is now deprecated and will be removed in ",r.a.createElement(o.f,null,"@curi/react-native")," v2. Please use the ",r.a.createElement(o.f,null,"forward")," prop instead.")))))}var E={title:"Props",hash:"AsyncLink-props"},d={title:"<AsyncLink>",hash:"AsyncLink",children:[E]};function g(){return r.a.createElement(o.e,{meta:d},r.a.createElement("p",null,"An ",r.a.createElement(o.f,null,"AsyncLink")," is similar to a"," ",r.a.createElement(l.a,{hash:"Link"},r.a.createElement(o.f,null,"Link")),", but uses a render-invoked function as its ",r.a.createElement(o.f,null,"children")," ","component."),r.a.createElement(o.d,{lang:"jsx"},"import { AsyncLink } from '@curi/react-dom';\n\n<AsyncLink name='User' params={{ id: 16 }}>\n  {navigating => {\n    return navigating\n      ? <Text>Navigating to User 16</Text>\n      : <Text>Go to User 16</Text>\n  }}\n</AsyncLink>\n\n<TouchableHighlight>\n  <Text>Go to User 16</Text>\n</TouchableHighlight>\n// press button\n<TouchableHighlight>\n  <Text>Navigating to User 16</Text>\n</TouchableHighlight>"),r.a.createElement(o.e,{tag:"h3",meta:E},r.a.createElement(o.e,{tag:"h4",meta:{title:"name",hash:"AsyncLink-name"}},r.a.createElement("p",null,"See ",r.a.createElement(l.a,{hash:"Link-name"},"Link name"))),r.a.createElement(o.e,{tag:"h4",meta:{title:"params",hash:"AsyncLink-params"}},r.a.createElement("p",null,"See ",r.a.createElement(l.a,{hash:"Link-params"},"Link params"))),r.a.createElement(o.e,{tag:"h4",meta:{title:"hash, query & state",hash:"AsyncLink-hash-query-state"}},r.a.createElement("p",null,"See"," ",r.a.createElement(l.a,{hash:"Link-hash-query-state"},"Link hash, query & state"))),r.a.createElement(o.e,{tag:"h4",meta:{title:"children",hash:"Link-children"}},r.a.createElement("p",null,"A render-invoked ",r.a.createElement(o.f,null,"children")," function that is called with the ",r.a.createElement(o.f,null,"AsyncLink"),"'s navigation state. The navigation state is"," ",r.a.createElement(o.f,null,"false")," to start, ",r.a.createElement(o.f,null,"true")," when the"," ",r.a.createElement(o.f,null,"AsyncLink")," is clicked, and ",r.a.createElement(o.f,null,"false")," when the the navigation finishes/is cancelled."),r.a.createElement(o.d,{lang:"jsx"},'<AsyncLink name="User" params={{ id: 1 }}>\n  {navigating => (\n    <React.Fragment>\n      <Text>User 1</Text>\n      {navigating ? <Spinner /> : null}\n    </React.Fragment>\n  )}\n</AsyncLink>')),r.a.createElement(o.e,{tag:"h4",meta:{title:"anchor",hash:"AsyncLink-anchor"}},r.a.createElement("p",null,"See ",r.a.createElement(l.a,{hash:"Link-anchor"},"Link anchor"))),r.a.createElement(o.e,{tag:"h4",meta:{title:"forward",hash:"AsyncLink-forward"}},r.a.createElement("p",null,"See ",r.a.createElement(l.a,{hash:"Link-forward"},"Link forward")))))}var f={title:"useResponse",hash:"useResponse"};function v(){return r.a.createElement(o.e,{meta:f},r.a.createElement("p",null,"The ",r.a.createElement(o.f,null,"useResponse")," hook reads the current ",r.a.createElement(o.f,null,"response"),","," ",r.a.createElement(o.f,null,"navigation"),", and ",r.a.createElement(o.f,null,"router")," values from React's context. This will be called every time a new response is emitted."),r.a.createElement(o.d,{lang:"jsx"},"import { useResponse } from '@curi/react-native';\n\nfunction App() {\n  const {\n    response,\n    navigation,\n    router\n  } = useResponse();\n  return (\n    <ThingThatNeedsResponse\n      response={response}\n    />\n  );\n}"))}var y={title:"useRouter",hash:"useRouter"};function k(){return r.a.createElement(o.e,{meta:y},r.a.createElement("p",null,"The ",r.a.createElement(o.f,null,"useRouter")," hook returns the ",r.a.createElement(o.f,null,"router")," object."),r.a.createElement(o.d,{lang:"jsx"},"import { useRouter } from '@curi/react-native';\n\nfunction App() {\n  const router = useRouter();\n  // ...\n}"),r.a.createElement(o.g,null,r.a.createElement("p",null,"The ",r.a.createElement(o.f,null,"router")," can also be accessed using the"," ",r.a.createElement(o.f,null,"useResponse")," hook. The difference is that"," ",r.a.createElement(o.f,null,"useResponse")," is called every time there is a new response. If a component only cares about the ",r.a.createElement(o.f,null,"router"),", the component should use ",r.a.createElement(o.f,null,"useRouter"),", which will not cause extra renders.")))}var b={title:"Options",hash:"useActive-opts"},L={title:"useActive",hash:"useActive",children:[b]};function T(){return r.a.createElement(o.e,{meta:L},r.a.createElement("p",null,"The ",r.a.createElement(o.f,null,"useActive")," hook determines if a route is active by comparing a route name (and possibly params) to a ",r.a.createElement(o.f,null,"response")," ","object."),r.a.createElement(o.d,{lang:"jsx"},'import { useActive, Link } from \'@curi/react-native\';\n\nfunction ActiveLink({\n  name,\n  params,\n  partial,\n  children\n}) {\n  const active = useActive({ name, params, partial });\n  return (\n    <Link\n      name={name}\n      params={params}\n      forward={{ className: active ? "active" : "" }}\n    >\n      {children}\n    </Link>\n  );\n}\n\n<ActiveLink name="Home">Home</ActiveLink>'),r.a.createElement(o.e,{tag:"h3",meta:b},r.a.createElement("p",null,r.a.createElement(o.f,null,"useActive")," takes a single argument, an options object."),r.a.createElement(o.e,{tag:"h4",meta:{title:"name",hash:"useActive-name"}},r.a.createElement("p",null,"The name of the route to compare against the response object.")),r.a.createElement(o.e,{tag:"h4",meta:{title:"params",hash:"useActive-params"}},r.a.createElement("p",null,"An object containing route parameters. These will be compared against the route params of the response object.")),r.a.createElement(o.e,{tag:"h4",meta:{title:"partial",hash:"useActive-partial"}},r.a.createElement("p",null,"Allows ancestor routes to be considered active when true. Defaults to false."),r.a.createElement(o.d,{lang:"jsx"},'// response = { name: "User Album", params: { id: "abcde" }}\n// where "User Album" is a child route of "User"\n\nuseActive({ name: "User" }); // false\nuseActive({ name: "User", partial: true }); // true'))),r.a.createElement(o.e,{tag:"h4",meta:{title:"components",hash:"useActive-components"}},r.a.createElement("p",null,"The base active check only checks that the route (i.e. pathname) is active. ",r.a.createElement(o.f,null,"components")," allows you to check if other components of the location are also active."),r.a.createElement(o.d,{lang:"jsx"},'useActive({\n  name: "Results",\n  components: loc => loc.query === "page=3"\n});\n\n// active for /results?page=3\n// not active for /results?page=1')))}var w={title:"useNavigating",hash:"useNavigating"};function A(){return r.a.createElement(o.e,{meta:w},r.a.createElement("p",null,"The ",r.a.createElement(o.f,null,"useNavigating")," hook is used to determine if the application is currently navigating. It pairs up with"," ",r.a.createElement(o.f,null,"router.cancel")," to enable cancelling asynchronous navigation."),r.a.createElement("p",null,"This is only useful for asynchronous routes because with synchronous routes, navigation happens immediately."),r.a.createElement(o.d,{lang:"jsx"},'import { useNavigating } from "@curi/react-native";\n\nfunction CancelNavigation() {\n  const cancel = useNavigating();\n\n  return cancel\n    ? <button onClick={cancel}>Cancel</button>\n    : null;\n}'),r.a.createElement(o.g,null,r.a.createElement("p",null,"Ideally, browsers would natively handle asynchronous navigation and this would be unnecessary. For the time being, this is the next best solution.")))}var R={title:"Options",hash:"useLocation-opts"},x={title:"useLocation",hash:"useLocation",children:[R]};function j(){return r.a.createElement(o.e,{meta:x},r.a.createElement("p",null,"The ",r.a.createElement(o.f,null,"useLocation")," hook creates a location object."),r.a.createElement(o.d,{lang:"jsx"},'import { useLocation } from \'@curi/react-native\';\n\nconst location = useLocation({\n  name: "Video",\n  params: { id: "jaifeo9" } },\n  hash: "comments",\n  query: "t=15"\n});\n/*\nlocation = {\n  pathname: "/video/jaifeo9",\n  hash: "comments",\n  query: "t=15"\n}\n*/'),r.a.createElement(o.e,{tag:"h3",meta:R},r.a.createElement(o.e,{tag:"h4",meta:{title:"name",hash:"useLocation-name"}},r.a.createElement("p",null,"The name of the route to generate the location's pathname from. If this is not provided, the generated location's pathname will be an empty string (",r.a.createElement(o.f,null,'""'),");")),r.a.createElement(o.e,{tag:"h4",meta:{title:"params",hash:"useLocation-params"}},r.a.createElement("p",null,"An object of params for the named route.")),r.a.createElement(o.e,{tag:"h4",meta:{title:"hash",hash:"useLocation-hash"}},r.a.createElement("p",null,"A hash string for the location.")),r.a.createElement(o.e,{tag:"h4",meta:{title:"query",hash:"useLocation-query"}},r.a.createElement("p",null,"The location's query value."),r.a.createElement("p",null,"By default, this is expected to be a string, but if you configure your history object with the"," ",r.a.createElement("a",{href:"https://github.com/pshrmn/hickory/blob/master/docs/api/browser.md#options"},r.a.createElement(o.f,null,"query"))," ","option, this may be something else.")),r.a.createElement(o.e,{tag:"h4",meta:{title:"state",hash:"useLocation-state"}},r.a.createElement("p",null,"State data to associate with the location. This must be serializable."))))}var C={title:"Options",hash:"useHref-opts"},H={title:"useHref",hash:"useHref",children:[C]};function U(){return r.a.createElement(o.e,{meta:H},r.a.createElement("p",null,"The ",r.a.createElement(o.f,null,"useHref")," hook creates a URL string."),r.a.createElement(o.d,{lang:"jsx"},'import { useHref } from \'@curi/react-dom\';\n\nconst href = useHref({\n  name: "Video",\n  params: { id: "jaifeo9" } },\n  hash: "comments",\n  query: "t=15"\n});\n// href = "/video/jaifeo9?t=15#comments"'),r.a.createElement(o.e,{tag:"h3",meta:C},r.a.createElement(o.e,{tag:"h4",meta:{title:"name",hash:"useHref-name"}},r.a.createElement("p",null,"The name of the route to generate the location's pathname from. If this is not provided, the generated location's pathname will be an empty string (",r.a.createElement(o.f,null,'""'),");")),r.a.createElement(o.e,{tag:"h4",meta:{title:"params",hash:"useHref-params"}},r.a.createElement("p",null,"An object of params for the named route.")),r.a.createElement(o.e,{tag:"h4",meta:{title:"hash",hash:"useHref-hash"}},r.a.createElement("p",null,"A hash string for the location.")),r.a.createElement(o.e,{tag:"h4",meta:{title:"query",hash:"useHref-query"}},r.a.createElement("p",null,"The location's query value."),r.a.createElement("p",null,"By default, this is expected to be a string, but if you configure your history object with the"," ",r.a.createElement("a",{href:"https://github.com/pshrmn/hickory/blob/master/docs/api/browser.md#options"},r.a.createElement(o.f,null,"query"))," ","option, this may be something else."))))}var q={title:"Props",hash:"ResponseConsumer-props"},N={title:"<ResponseConsumer>",hash:"ResponseConsumer",children:[q]};function I(){return r.a.createElement(o.e,{meta:N},r.a.createElement("p",null,"A context consumer component for injecting response values into components. Its primary use case is in class components."),r.a.createElement(o.d,{lang:"jsx"},"import { ResponseConsumer } from '@curi/react-native';\n\nclass MyComponent {\n  render() {\n    return (\n      <ResponseConsumer>\n        {({ router, response, navigation }) => {\n          // pass these props to any components\n          // that needs them\n          return (\n            <ThingThatNeedsResponse\n              response={response}\n            />\n          );\n        }}\n      </ResponseConsumer>\n    );\n  }\n}"),r.a.createElement(o.e,{tag:"h3",meta:q},r.a.createElement(o.e,{tag:"h4",meta:{title:"children",hash:"ResponseConsumer-children"}},r.a.createElement("p",null,"A render-invoked function that returns a React element. This function will receive an object with ",r.a.createElement(o.f,null,"router"),","," ",r.a.createElement(o.f,null,"response")," and ",r.a.createElement(o.f,null,"navigation")," properties."))))}var P={title:"Props",hash:"RouterConsumer-props"},O={title:"<RouterConsumer>",hash:"RouterConsumer",children:[P]};function S(){return r.a.createElement(o.e,{meta:O},r.a.createElement("p",null,"A context consumer component for injecting the router into components. Its primary use case is in class components."),r.a.createElement(o.d,{lang:"jsx"},"import { RouterConsumer } from '@curi/react-native';\n\nclass MyComponent {\n  render() {\n    return (\n      <RouterConsumer>\n        {router => {\n          return (\n            <button onClick={e => {\n              login();\n              router.navigate({ name: \"Home\" });\n            }}>\n              Submit\n            </button>\n          );\n        }}\n      </RouterConsumer>\n    );\n  }\n}"),r.a.createElement(o.e,{tag:"h3",meta:P},r.a.createElement(o.e,{tag:"h4",meta:{title:"children",hash:"RouterConsumer-children"}},r.a.createElement("p",null,"A render-invoked function that returns a React element. This function will receive the application's ",r.a.createElement(o.f,null,"router"),"."))))}var F=r.a.memo(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,null,r.a.createElement("p",null,"The ",r.a.createElement(o.f,null,"@curi/react-native")," package provides components to use Curi routing in a React Native application."),r.a.createElement("p",null,"For more information on using Curi with React Native, please check out the"," ",r.a.createElement(l.a,{name:"Guide",params:{slug:"react-native"}},"React Native guide"),".")),r.a.createElement(o.a,null,r.a.createElement(m,null),r.a.createElement(p,null),r.a.createElement(g,null),r.a.createElement(v,null),r.a.createElement(k,null),r.a.createElement(T,null),r.a.createElement(A,null),r.a.createElement(j,null),r.a.createElement(U,null),r.a.createElement(I,null),r.a.createElement(S,null)))}),B=[{title:"Installation",hash:"installation"},{title:"About",hash:"about"},{title:"API",hash:"API",children:[c,h,d,f,y,L,w,x,H,N,O]}];n.d(t,"component",function(){return F}),n.d(t,"contents",function(){return B})}}]);