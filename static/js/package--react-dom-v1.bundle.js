(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{80:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),o=n(20),i={title:"Arguments",hash:"curiProvider-arguments"},c={title:"curiProvider()",hash:"curiProvider",children:[i,{title:"Props",hash:"curiProvider-props"}]};function s(){return l.a.createElement(o.e,{meta:c},l.a.createElement("p",null,"The application needs a component at its root to re-render the application when new responses are emitted and to make routing related available through React's context. This component is created by passing the Curi ",l.a.createElement(o.f,null,"router")," to the ",l.a.createElement(o.f,null,"curiProvider()")," function."),l.a.createElement(o.g,null,l.a.createElement("p",null,"Why does ",l.a.createElement(o.f,null,"@curi/react-dom")," export a function to create a component and not just a component? Props signify values that can change, but an application should only ever have one router. By hard-coding the ",l.a.createElement(o.f,null,"router")," into a component, we avoid having to handle the possibility of switching routers (which should not happen).")),l.a.createElement(o.g,null,l.a.createElement("p",null,"All of the other components provided by ",l.a.createElement(o.f,null,"@curi/react-dom")," ","must be descendants of the component created by"," ",l.a.createElement(o.f,null,"curiProvider()"),".")),l.a.createElement(o.d,{lang:"jsx"},"import { curiProvider } from '@curi/react-dom';\n\nconst router = curi(history, routes);\nconst Router = curiProvider(router);\n\nfunction App() {\n  return (\n    <Router>\n      {({ response, navigation, router }) => {\n        const { body:Body } = response;\n        return <Body response={response} />;\n      }}\n    </Router>\n  );\n}"),l.a.createElement(o.e,{tag:"h3",meta:i},l.a.createElement(o.e,{tag:"h4",meta:{title:"router",hash:"curiProvider-router"}},l.a.createElement("p",null,"A Curi router."),l.a.createElement(o.d,null,'import { curiProvider } from "@curi/react-dom";\n\nconst router = curi(history, routes);\nconst Router = curiProvider(router);'))),l.a.createElement(o.e,{tag:"h3",meta:{title:"Props",hash:"curiProvider-props"}},l.a.createElement(o.e,{tag:"h4",meta:{title:"children",hash:"curiProvider-render"}},l.a.createElement("p",null,l.a.createElement(o.f,null,"children")," is a render-invoked function. When it is called, it will be passed an object with three properties:"),l.a.createElement(o.i,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"property"),l.a.createElement("th",null,"description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"response"),l.a.createElement("td",null,"the response object generated for the current location")),l.a.createElement("tr",null,l.a.createElement("td",null,"navigation"),l.a.createElement("td",null,"the ",l.a.createElement(o.f,null,"action")," of the navigation and the"," ",l.a.createElement(o.f,null,"previous")," response object")),l.a.createElement("tr",null,l.a.createElement("td",null,"router"),l.a.createElement("td",null,"the Curi router")))))))}var u={title:"Props",hash:"Link-props"},m={title:"<Link>",hash:"Link",children:[u]};function h(){return l.a.createElement(o.e,{meta:m},l.a.createElement("p",null,"A ",l.a.createElement(o.f,null,"Link")," is for navigating within your application using an anchor element (",l.a.createElement(o.c,null,"a"),"). When the rendered element is clicked, instead of reloading the page it will use your router object's history object to navigate."),l.a.createElement("p",null,"With the ",l.a.createElement(o.f,null,"Link"),", instead of providing a URI to navigate to, you specify the name of the route that you want to link to. Then, the pathname of the URI you want the component to link to will be automatically generated for you."),l.a.createElement(o.d,{lang:"jsx"},"import { Link } from '@curi/react-dom';\n\n<Link name='User' params={{ id: 16 }}>User 16</Link>\n// <a href='/user/16'>User 16</a>"),l.a.createElement(o.e,{tag:"h3",meta:u},l.a.createElement(o.e,{tag:"h4",meta:{title:"name",hash:"Link-name"}},l.a.createElement("p",null,"The name of the route that you want to navigate to."),l.a.createElement("p",null,"If ",l.a.createElement(o.f,null,"name")," is not provided, the ",l.a.createElement(o.f,null,"Link")," will re-use the current location's ",l.a.createElement(o.f,null,"pathname"),". This is useful for linking to hashes within the current page."),l.a.createElement(o.d,{lang:"jsx"},'// Home route is { name: "Home", path: "" }\n<Link name="Home">Home</Link>'),l.a.createElement(o.g,null,l.a.createElement("p",null,"The ",l.a.createElement(o.f,null,"name")," prop is a replacement for the ",l.a.createElement(o.f,null,"to")," ","prop from previous versions. You can continue to use ",l.a.createElement(o.f,null,"to")," ","in ",l.a.createElement(o.f,null,"@curi/react-dom")," v1, but it will be removed in v2."))),l.a.createElement(o.e,{tag:"h4",meta:{title:"params",hash:"Link-params"}},l.a.createElement("p",null,"If the route that you want to navigate to (or any of its parents) include path parameters, you can specify them using the params prop."),l.a.createElement(o.d,{lang:"jsx"},"// User route is { name: 'User', path: '/user/:id' }\n<Link name='User' params={{ id: 16 }}>User 16</Link>")),l.a.createElement(o.e,{tag:"h4",meta:{title:"hash, query & state",hash:"Link-hash-query-state"}},l.a.createElement("p",null,"While the pathname of the location to navigate to will be generated for you, this does not cover over location properties (query, hash, and state). The ",l.a.createElement(o.f,null,"query"),", ",l.a.createElement(o.f,null,"hash"),", and"," ",l.a.createElement(o.f,null,"state")," props are used to pass these values."),l.a.createElement(o.d,{lang:"jsx"},'<Link\n  name=\'Products\'\n  params={{ type: \'vacuums\' }}\n  hash="iroomba"\n  query="volume=loud"\n  state={{ owner: "Tom Haverford" }}\n>\n  DJ Roomba\n</Link>\n\n// <a href="products/vacuums?volume=loud#iroomba">\n//  DJ Roomba\n// </a>')),l.a.createElement(o.e,{tag:"h4",meta:{title:"children",hash:"Link-children"}},l.a.createElement("p",null,"The ",l.a.createElement(o.f,null,"children")," prop can take two forms: either a valid React Node (e.g. a React element, a string, or ",l.a.createElement(o.f,null,"null"),") or a render-invoked ",l.a.createElement(o.f,null,"children")," function."),l.a.createElement("p",null,"The render-invoked ",l.a.createElement(o.f,null,"children")," function will be called with the ",l.a.createElement(o.f,null,"Link"),"'s navigation state. The navigation state is"," ",l.a.createElement(o.f,null,"false")," to start, ",l.a.createElement(o.f,null,"true")," when the ",l.a.createElement(o.f,null,"Link")," ","is clicked, and ",l.a.createElement(o.f,null,"false")," when the the navigation finishes/is cancelled."),l.a.createElement(o.d,{lang:"jsx"},'// a React node\n<Link name="Home">\n  Home\n</Link>\n\n// a render-invoked function\n<Link name="User" params={{ id: 1 }}>\n  {navigating => (\n    <React.Fragment>\n      User 1\n      {navigating ? <Spinner /> : null}\n    </React.Fragment>\n  )}\n</Link>')),l.a.createElement(o.e,{tag:"h4",meta:{title:"anchor",hash:"Link-anchor"}},l.a.createElement("p",null,"By default, when you render a ",l.a.createElement(o.f,null,"Link"),", an anchor element will be rendered. ",l.a.createElement(o.f,null,"anchor")," lets you provide your own component to be rendered instead. This can be useful for using styled components to navigate."),l.a.createElement(o.j,null,l.a.createElement("p",null,"You can provide any component that you want, but you"," ",l.a.createElement("em",null,"should")," stick with an anchor (or a component that renders an anchor). There are accessibility issues that will occur when you use other DOM elements as links. The component's prop type is func in an attempt to discourage you from making your link render a button, div, span, etc."))),l.a.createElement(o.e,{tag:"h4",meta:{title:"forward",hash:"Link-forward"}},l.a.createElement("p",null,"The ",l.a.createElement(o.f,null,"forward")," prop is an object of props to pass on to the rendered anchor component."),l.a.createElement(o.d,{lang:"jsx"},'<Link\n  name="Home"\n  forward={{\n    className: "home"\n  }}\n>Home</Link>\n// <a href="/" class="home">Home</a>'),l.a.createElement(o.g,null,l.a.createElement("p",null,"Previously, any extra props passed to a ",l.a.createElement(o.f,null,"Link")," would be forwarded to the anchor component. This behavior is now deprecated and will be removed in ",l.a.createElement(o.f,null,"@curi/react-native")," v2. Please use the ",l.a.createElement(o.f,null,"forward")," prop instead.")))))}var d={title:"Props",hash:"Focus-props"},p={title:"<Focus>",hash:"Focus",children:[d]};function f(){return l.a.createElement(o.e,{meta:p},l.a.createElement("p",null,l.a.createElement(o.f,null,"Focus")," lets you focus a DOM element whenever there is a new response."),l.a.createElement("p",null,'The DOM component that gets the ref should either already be "focusable", like an ',l.a.createElement(o.c,null,"input"),", or be given a ",l.a.createElement(o.f,null,"tabIndex")," ","prop (usually with the value of ",l.a.createElement(o.f,null,"-1"),"). If neither of these conditions is met, then the document's"," ",l.a.createElement(o.c,null,"body")," will be focused."),l.a.createElement("p",null,"The focused element will have an outline (the exact style varies by browser). You can remove this visual with a CSS ",l.a.createElement(o.f,null,"outline")," of"," ",l.a.createElement(o.f,null,'"none"'),"."),l.a.createElement(o.g,null,l.a.createElement("p",null,"Only one ",l.a.createElement(o.f,null,"Focus")," should be rendered at a time.")),l.a.createElement(o.d,{lang:"jsx"},'import { Focus } from "@curi/react-dom";\n\n<Focus>\n  {ref => (\n    <div tabIndex={-1} ref={ref}>\n      {/* ... */}\n    </div>\n  )}\n</Focus>'),l.a.createElement(o.e,{tag:"h3",meta:d},l.a.createElement(o.e,{tag:"h4",meta:{title:"children()",hash:"Focus-children"}},l.a.createElement("p",null,"The ",l.a.createElement(o.f,null,"children()")," function is a render-invoked prop that will be passed a ",l.a.createElement(o.f,null,"ref"),". The ",l.a.createElement(o.f,null,"ref")," should be attached to the element that you want focused."),l.a.createElement("p",null,"If you need to pass this through class/functional components, you should use either ",l.a.createElement(o.f,null,"React.forwardRef()")," or pass it as a prop with a name other than ",l.a.createElement(o.f,null,"ref")," (like ",l.a.createElement(o.f,null,"innerRef"),")."),l.a.createElement(o.d,{lang:"jsx"},"<Focus>\n  {ref => (\n    <div tabIndex={-1} ref={ref} />\n  )}\n</Focus>\n\n<Focus>\n  {ref => <SomeComponent innerRef={ref} />}\n</Focus>")),l.a.createElement(o.e,{tag:"h4",meta:{title:"preventScroll",hash:"focus-preventScroll"}},l.a.createElement("p",null,"The default behavior for focusing an element is to scroll to it. If you want to prevent this, pass ",l.a.createElement(o.f,null,"preventScroll={true}")," ","to the ",l.a.createElement(o.f,null,"Focus"),"."),l.a.createElement(o.d,{lang:"jsx"},"// scrolls\n<Focus>{ref => ...}</Focus>\n\n// does not scroll\n<Focus preventScroll={true}>{ref => ...}</Focus>")),l.a.createElement(o.e,{tag:"h4",meta:{title:"preserve",hash:"focus-preserve"}},l.a.createElement("p",null,"The default focus behavior is to always focus the element that the ref is attached to. However, if you want to preserve the focus on some other element (e.g. an autofocused element),"," ",l.a.createElement(o.f,null,"preserve={true}")," will stop the ",l.a.createElement(o.f,null,"ref")," ","element from claiming the focus."),l.a.createElement("p",null,"This only works when the already-focused element is a child of the"," ",l.a.createElement(o.f,null,"ref")," element. If it is not a child, then the"," ",l.a.createElement(o.f,null,"ref")," element will take the focus."),l.a.createElement(o.d,{lang:"jsx"},"// claim focus for the <div>\n<Focus>\n  {ref => (\n    <div tabIndex={-1} ref={ref}>\n      <input autoFocus={true} />\n    </div>\n  )}\n</Focus>\n\n// preserve focus on the <input>\n<Focus preserve={true}>\n  {ref => (\n    <div tabIndex={-1} ref={ref}>\n      <input autoFocus={true} />\n    </div>\n  )}\n</Focus>"))))}var E={title:"Props",hash:"Curious-props"},v={title:"<Curious>",hash:"Curious",children:[E]};function g(){return l.a.createElement(o.e,{meta:v},l.a.createElement("p",null,"A context consumer component for injecting router values into components."),l.a.createElement(o.d,{lang:"jsx"},"import { Curious } from '@curi/react-dom';\n\nfunction MyComponent() {\n  return (\n    <Curious>\n      {({ router, response, navigation }) => {\n        // pass these props to any components\n        // that needs them\n        return (\n          <ThingThatNeedsResponse\n            response={response}\n          />\n        );\n      }}\n    </Curious>\n  );\n}"),l.a.createElement(o.e,{tag:"h3",meta:E},l.a.createElement(o.e,{tag:"h4",meta:{title:"children",hash:"Curious-children"}},l.a.createElement("p",null,"A render-invoked function that returns a React element. This function will receive an object with ",l.a.createElement(o.f,null,"router"),","," ",l.a.createElement(o.f,null,"response")," and ",l.a.createElement(o.f,null,"navigation")," properties."))))}var w={title:"Props",hash:"Active-props"},b={title:"<Active>",hash:"Active",children:[w]};function y(){return l.a.createElement(o.e,{meta:b},l.a.createElement("p",null,"The ",l.a.createElement(o.f,null,"Active"),' component is used to render based on whether or not a route is "active" (its name and params match the current response\'s name and params) using a render-invoked ',l.a.createElement(o.f,null,"children")," ","function."),l.a.createElement(o.d,{lang:"jsx"},'import { Active } from \'@curi/react-dom\';\n\nfunction ActiveLink({\n  name,\n  params,\n  partial,\n  forward,\n  ...rest\n}) {\n  return (\n    <Active name={name} params={params} partial={partial}>\n      {active => (\n        <Link\n          name={name}\n          params={params}\n          {...rest}\n          forward={{\n            ...forward,\n            className: [forward.className || "", active ? "active" : ""].join(" ")\n          }}\n        >\n          {children}\n        </Link>\n      )}\n    </Active>\n  );\n}\n\n<ActiveLink name="Home">Home</ActiveLink>'),l.a.createElement(o.g,null,l.a.createElement("p",null,"This relies on the active route interaction from"," ",l.a.createElement(r.a,{name:"Package",params:{package:"route-active",version:"v1"}},"@curi/route-active")," ","being added to your router."),l.a.createElement(o.d,null,"import active from '@curi/route-active';\n\nconst router = curi(history, routes, {\n  route: [active()]\n});")),l.a.createElement(o.e,{tag:"h3",meta:w},l.a.createElement(o.e,{tag:"h4",meta:{title:"name",hash:"Active-name"}},l.a.createElement("p",null,"The name of the route to compare against the response object.")),l.a.createElement(o.e,{tag:"h4",meta:{title:"params",hash:"Active-params"}},l.a.createElement("p",null,"An object containing route parameters. These will be compared against the route params of the response object.")),l.a.createElement(o.e,{tag:"h4",meta:{title:"children",hash:"Active-children"}},l.a.createElement("p",null,"A render-invoked function whose first argument is whether the route (determined using the ",l.a.createElement(o.f,null,"name")," and ",l.a.createElement(o.f,null,"params"),") is active."),l.a.createElement(o.d,{lang:"jsx"},'// response = { name: "Photo", params: { id: "abcde" }}\n\n<Active name="Photo" params={{ id: "abcde" }}>\n  {active => ( // if active === true\n    <Photo className={active ? "active" : "inactive"} />\n  )}\n</Active>\n// <Photo className="active" />\n\n<Active name="Photo" params={{ id: "qwerty" }}>\n  {active => ( // if active === false\n    <Photo className={active ? "active" : "inactive"} />\n  )}\n</Active>\n// <Photo className="inactive" />'),l.a.createElement("p",null,"The second argument passed to the render-invoked function is the current ",l.a.createElement(o.f,null,"response"),". ",l.a.createElement(o.f,null,"Active")," only checks if the route is active (i.e. matches the current location's"," ",l.a.createElement(o.f,null,"pathname"),"). If you want to check if a ",l.a.createElement(o.f,null,"query")," or"," ",l.a.createElement(o.f,null,"hash")," match the current location, you should do this yourself inside of the render-invoked function. You can compare the"," ",l.a.createElement(o.f,null,"query"),"/",l.a.createElement(o.f,null,"hash")," against the response's"," ",l.a.createElement(o.f,null,"location"),"."),l.a.createElement(o.d,{lang:"jsx"},'<Active name="Home">\n  {(active, response) => {\n    const activeHash = response.hash === "ahoy"\n    // ...\n  }}\n</Active>')),l.a.createElement(o.e,{tag:"h4",meta:{title:"partial",hash:"Active-partial"}},l.a.createElement("p",null,"When ",l.a.createElement(o.f,null,"true"),", ",l.a.createElement(o.f,null,"partial")," allows ancestor routes to be considered active. Defaults to ",l.a.createElement(o.f,null,"false"),"."),l.a.createElement(o.d,{lang:"jsx"},'// response = { name: "Photo", params: { id: "abcde" }}\n// where "Photo" is a child route of "Album"\n\n<Active name="Album">\n  {active => ( // if active === false\n    <Album className={active ? "active" : "inactive"} />\n  )}\n</Active>\n// <Album className="inactive" />\n\n<Active name="Album" partial={true}>\n  {active => ( // if active === true\n    <Album className={active ? "active" : "inactive"} />\n  )}\n</Active>\n// <Album className="active" />'))))}var k={title:"Props",hash:"Navigating-props"},A={title:"<Navigating>",hash:"Navigating",children:[k]};function T(){return l.a.createElement(o.e,{meta:A},l.a.createElement("p",null,"The ",l.a.createElement(o.f,null,"Navigating")," component lets you know when the application is navigating and let users cancel the navigation. Its"," ",l.a.createElement(o.f,null,"children")," prop is a render-invoked function that is passed a function to cancel the navigation."),l.a.createElement("p",null,"When navigation starts, ",l.a.createElement(o.f,null,"children()")," will be called with a function that will cancel navigation when it is called."),l.a.createElement("p",null,"When navigation finishes, ",l.a.createElement(o.f,null,"children()")," will be called with no arguments."),l.a.createElement(o.d,{lang:"jsx"},'import { Navigating } from "@curi/react-dom";\n              \n<Navigating>\n  {cancel => {\n    if (cancel === undefined) {\n      return null;\n    }\n    return (\n      <button onClick={cancel}>\n        Cancel Navigation\n      </button>\n    );\n  }}\n</Navigating>'),l.a.createElement(o.e,{tag:"h3",meta:k},l.a.createElement(o.e,{tag:"h4",meta:{title:"children()",hash:"Navigating-children"}},l.a.createElement("p",null,"A function that returns a React node. The function will be called with a ",l.a.createElement(o.f,null,"cancel")," function when navigation starts and with no arguments when the navigation is finished."),l.a.createElement("p",null,"Calling the ",l.a.createElement(o.f,null,"cancel")," function after the navigation is finished has no effect."))))}var P={title:"Props",hash:"Block-props"},L={title:"<Block>",hash:"Block",children:[P]};function j(){return l.a.createElement(o.e,{meta:L},l.a.createElement("p",null,"The ",l.a.createElement(o.f,null,"Block")," component lets you prevent navigation until a user has confirmed that they want to navigate. This can be useful when the user attempts to navigate away from a partially filled form. This"," ",l.a.createElement("strong",null,"will not")," prevent the user from navigating to another site, it only works for navigation within the application."),l.a.createElement(o.d,{lang:"jsx"},"import { Block } from '@curi/react-dom';"),l.a.createElement(o.e,{tag:"h3",meta:P},l.a.createElement(o.e,{tag:"h4",meta:{title:"active",hash:"Block-active"}},l.a.createElement("p",null,"A boolean, which is true by default. When it is true, the navigation block is active. When it is false, navigation will not be blocked."),l.a.createElement(o.d,{lang:"jsx"},"// will block navigation\n<Block active={true} confirm={confirm} />\n\n// will not block navigation\n<Block active={false} confirm={confirm} />")),l.a.createElement(o.e,{tag:"h4",meta:{title:"confirm",hash:"Block-confirm"}},l.a.createElement("p",null,"The confirm prop is a function that will be called whenever there is navigation."),l.a.createElement(o.i,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"argument"),l.a.createElement("th",null,"description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"location"),l.a.createElement("td",null,"the location that is being navigated to")),l.a.createElement("tr",null,l.a.createElement("td",null,"action"),l.a.createElement("td",null,"the type of navigation")),l.a.createElement("tr",null,l.a.createElement("td",null,"success"),l.a.createElement("td",null,"a function to call when navigation should happen")),l.a.createElement("tr",null,l.a.createElement("td",null,"failure"),l.a.createElement("td",null,"a function to call when navigation should be cancelled.")))),l.a.createElement(o.d,{lang:"jsx"},'<Block\n  confirm={({ location, action }, success, failure) => {\n    const response = window.confirm("Shall we?");\n    if (response) {\n      success();\n    } else {\n      failure();\n    }\n  }}\n/>'))))}var x=l.a.memo(function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.b,null,l.a.createElement("p",null,"The ",l.a.createElement(o.f,null,"@curi/react-dom")," package provides a number of React components that you can use for rendering your application."),l.a.createElement("p",null,"For more information on using Curi with React DOM, please check out the"," ",l.a.createElement(r.a,{name:"Guide",params:{slug:"react-dom"}},"React DOM guide"),".")),l.a.createElement(o.a,null,l.a.createElement(s,null),l.a.createElement(h,null),l.a.createElement(f,null),l.a.createElement(g,null),l.a.createElement(y,null),l.a.createElement(T,null),l.a.createElement(j,null)))}),F=[{title:"Installation",hash:"installation"},{title:"About",hash:"about"},{title:"API",hash:"API",children:[c,m,p,v,b,A,L]}];n.d(t,"component",function(){return x}),n.d(t,"contents",function(){return F})}}]);