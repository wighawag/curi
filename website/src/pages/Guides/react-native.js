import React from "react";
import { Link } from "@curi/react-dom";

import {
  PlainSection,
  HashSection,
  CodeBlock,
  Note,
  IJS,
  Cmp
} from "../../components/guide/common";

const meta = {
  title: "React Native"
};

const responseMeta = {
  title: "What to render",
  hash: "render-response"
};
const renderingMeta = {
  title: "Rendering Responses",
  hash: "rendering",
  children: [responseMeta]
};

const navigatingMeta = {
  title: "Navigating",
  hash: "navigating"
};

const backMeta = {
  title: "Back Button",
  hash: "back-button"
};
const tipsMeta = {
  title: "React Native Tips",
  hash: "tips",
  children: [backMeta]
};

const contents = [renderingMeta, navigatingMeta, tipsMeta];

function ReactNativeGuide() {
  return (
    <React.Fragment>
      <PlainSection>
        <h1>{meta.title}</h1>
      </PlainSection>

      <HashSection meta={renderingMeta} tag="h2">
        <p>
          The <IJS>createRouterComponent</IJS> function is used to create the
          component at the root of a Curi + React application. You can call this
          component anything that you want, but here it will be referred to as
          the <IJS>Router</IJS>.
        </p>
        <Note>
          <p>
            Why does <IJS>@curi/react-native</IJS> export a function to create a
            component and not just a component? Props signify values that can
            change, but an application should only ever have one router. By
            hard-coding the <IJS>router</IJS> into a component, we avoid having
            to handle the possibility of switching routers (which should not
            happen).
          </p>
        </Note>

        <p>
          <IJS>createRouterComponent</IJS> is passed the application's Curi
          router to create a <IJS>Router</IJS> component. The <IJS>Router</IJS>{" "}
          will automatically add an{" "}
          <Link
            name="Package"
            params={{ package: "router", version: "v2" }}
            hash="observe"
          >
            observer
          </Link>{" "}
          to the Curi router when it mounts, so that it can re-render when there
          are new responses.
        </p>

        <p>
          Along with setting up an observer to react to new responses, the{" "}
          <IJS>Router</IJS> sets up contexts for routing values. The
          <IJS>response</IJS> and <IJS>navigation</IJS> can be read using the{" "}
          <Link
            name="Package"
            params={{ package: "react-native", version: "v2" }}
            hash="useResponse"
          >
            <IJS>useResponse</IJS> hook
          </Link>
          , while the <IJS>router</IJS> can be read using the{" "}
          <Link
            name="Package"
            params={{ package: "react-native", version: "v2" }}
            hash="useRouter"
          >
            <IJS>useRouter</IJS> hook
          </Link>
          .
        </p>

        <CodeBlock lang="jsx">
          {`import {
  createRouterComponent,
  useRouter,
  useResponse
} from '@curi/react-native';

import router from "./router";
const Router = createRouterComponent(router);

function App() {
  const router = userRouter();
  const {
    response,
    navigation
  } = useResponse();
  const { body:Body } = response;
  return <Body />
}

function MyReactNativeApp = () => (
  <Router>
    <App />
  </Router>
);`}
        </CodeBlock>

        <HashSection meta={responseMeta} tag="h3">
          <p>
            The <IJS>Router</IJS> component sets up the application's routing,
            while its children render the application's content. The Curi router
            generates <IJS>response</IJS> objects from matched locations; those
            are core for figuring out what to render.
          </p>

          <p>
            If you use <IJS>route.respond</IJS> to set React components as the{" "}
            <IJS>body</IJS> properties on your responses, you can create a React
            element for the <IJS>body</IJS> component.
          </p>

          <p>
            The <IJS>Body</IJS> element (it is useful to rename the{" "}
            <IJS>response</IJS>'s <IJS>body</IJS> to <IJS>Body</IJS> for JSX
            transformation) is a placeholder for the "real" component that you
            render for a route. This means that the "real" component will be
            different for every route.
          </p>

          <p>
            While not a strict requirement, it is useful to pass the{" "}
            <IJS>response</IJS> object as a prop to the rendered <IJS>Body</IJS>{" "}
            component.
          </p>

          <CodeBlock lang="jsx">
            {`function App() {
  const { response } = useResponse();
  const { body:Body } = response;
  return <Body response={response} />
}

function MyReactNativeApp() {
  return (
    <Router>
      <NavLinks />
      <App />
    </Router>
  )
}`}
          </CodeBlock>

          <p>
            If your routes use an object to attach multiple components to a
            response, the <IJS>children</IJS> function also provides a good
            place to split these apart.
          </p>

          <Note>
            <p>
              If you do take this approach, please remember that you want every
              route to set the same <IJS>body</IJS> shape. Otherwise, you'll
              have to determine the shape and change how you render in the{" "}
              <IJS>children</IJS> function, which can quickly become messy.
            </p>
          </Note>

          <CodeBlock lang="jsx" data-line="22,26,29">
            {`const routes = prepareRoutes([
  {
    name: "Home",
    path: "",
    respond() {
      return {
        body: {
          Main: HomeMain,
          Menu: HomeMenu
        }
      }
    }
  },
  // ...
]);

function App() {
  const { response } = useResponse();
  const { Main, Menu } = response.body;
  return (
    <React.Fragment>
      <Menu />
      <Main response={response} />
    </React.Fragment>
  );
}`}
          </CodeBlock>
        </HashSection>
      </HashSection>

      <HashSection meta={navigatingMeta} tag="h2">
        <p>
          The <IJS>Link</IJS> component is used to navigate between routes
          within an application. By default, the <IJS>Link</IJS> will render as
          a <IJS>TouchableHighlight</IJS>, but you can specify a different
          component using the <IJS>anchor</IJS> prop.
        </p>
        <p>
          The <IJS>Link</IJS>'s <IJS>name</IJS> prop describes which route
          clicking the link should navigate to. If you pass an invalid route
          name, Curi will warn you.
        </p>
        <p>
          If a route has any params (or if any of a route's ancestors have
          params for nested routes), the <IJS>params</IJS> prop is used to pass
          these to the <IJS>Link</IJS>.
        </p>

        <CodeBlock lang="jsx">
          {`import { Link } from "@curi/react-native";

const NavLinks = () => (
  <View>
    <Link name="Home">
      <Text>Home</Text>
    </Link>
    <Link name="About" anchor={TouchableOpacity}>
      <Text>About</Text>
    </Link>
    <Link name="User" params={{ id: "blue" }}>
      <Text>Blue</Text>
    </Link>
  </View>
);`}
        </CodeBlock>

        <p>
          The <IJS>Link</IJS> also takes <IJS>hash</IJS>, <IJS>query</IJS>, and{" "}
          <IJS>state</IJS> props to attach their values to the location that
          will be navigated to.
        </p>

        <CodeBlock lang="jsx">
          {`<Link name="Home" hash="details">
  <Text>Home</Text>
</Link>`}
        </CodeBlock>
      </HashSection>

      <p>
        Please check out the full{" "}
        <Link
          name="Package"
          params={{ package: "react-dom", version: "v2" }}
          hash="API"
        >
          <IJS>@curi/react-dom</IJS>
        </Link>{" "}
        API documentation to see every component that the package provides.
      </p>

      <HashSection meta={tipsMeta} tag="h2">
        <Note>
          <p>
            This guide assumes that you are already familiar with React Native.
          </p>
        </Note>

        <HashSection meta={backMeta} tag="h3">
          <p>
            To add back button support, you need to use your <IJS>history</IJS>{" "}
            object (which you can access through your router as{" "}
            <IJS>router.history</IJS>).
          </p>
          <p>
            The <IJS>history.go</IJS> method is used for jumping between
            locations, so passing it <IJS>-1</IJS> will jump back to the
            previous location.
          </p>
          <p>
            When the app is at the initial location, you may want to return{" "}
            <IJS>false</IJS> to close the app when the user presses the back
            button.
          </p>

          <CodeBlock>
            {`import { BackHandler } from 'react-native';

// create your router
const router = createRouter(browser, routes);

BackHandler.addEventListener(
  "hardwareBackPress",
  () => {
    // close the app when pressing back button
    // while on the initial screen
    if (router.history.index === 0) {
      return false;
    }
    router.history.go(-1);
    return true;
  }
);`}
          </CodeBlock>
        </HashSection>
      </HashSection>
    </React.Fragment>
  );
}

export { ReactNativeGuide as component, contents };
