import "jest";
import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { inMemory } from "@hickory/in-memory";
import { createRouter, prepareRoutes } from "@curi/router";

import {
  createRouterComponent,
  RouterConsumer,
  useResponse
} from "@curi/react-universal";

describe("<RouterConsumer>", () => {
  let node;
  let router, Router;
  const routes = prepareRoutes([
    { name: "Home", path: "" },
    { name: "About", path: "about" },
    { name: "Catch All", path: "(.*)" }
  ]);

  beforeEach(() => {
    node = document.createElement("div");
    router = createRouter(inMemory, routes);
    Router = createRouterComponent(router);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(node);
  });

  it("provides access to the router object", () => {
    function App() {
      return (
        <RouterConsumer>
          {contextRouter => {
            expect(contextRouter).toBe(router);
            return null;
          }}
        </RouterConsumer>
      );
    }

    act(() => {
      ReactDOM.render(
        <Router>
          <App />
        </Router>,
        node
      );
    });
  });

  it("does not need to re-render when there is a new response", () => {
    const Test = jest.fn(() => {
      return (
        <RouterConsumer>
          {contextRouter => {
            return null;
          }}
        </RouterConsumer>
      );
    });

    const Pure = () => {
      // @ts-ignore
      return <Test />;
    };

    const Memoized = React.memo(Pure);

    const App = jest.fn(() => {
      const { response } = useResponse();
      return (
        <React.Fragment>
          <div>{response.name}</div>
          <Memoized />
        </React.Fragment>
      );
    });

    act(() => {
      ReactDOM.render(
        <Router>
          {/*
          // @ts-ignore */}
          <App />
        </Router>,
        node
      );
    });

    expect(Test.mock.calls.length).toBe(1);
    expect(App.mock.calls.length).toBe(1);

    act(() => {
      const url = router.url({ name: "About" });
      router.navigate({ url });
    });

    expect(Test.mock.calls.length).toBe(1);
    expect(App.mock.calls.length).toBe(2);
  });
});
