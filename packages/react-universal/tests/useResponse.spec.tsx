import "jest";
import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { inMemory } from "@hickory/in-memory";
import { createRouter, prepareRoutes } from "@curi/router";

import { createRouterComponent, useResponse } from "@curi/react-universal";

describe("useResponse", () => {
  let node;
  let routes = prepareRoutes([
    { name: "Home", path: "" },
    { name: "About", path: "about" },
    { name: "Catch All", path: "(.*)" }
  ]);

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(node);
  });

  it("returns response, and navigation objects", () => {
    let router = createRouter(inMemory, routes);
    let Router = createRouterComponent(router);
    let { response, navigation } = router.current();
    function App() {
      let result = useResponse();
      expect(result.response).toBe(response);
      expect(result.navigation).toBe(navigation);
      return null;
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

  it("is called when there is a new response", () => {
    let router = createRouter(inMemory, routes);
    let Router = createRouterComponent(router);
    let fromContext;
    function App() {
      fromContext = useResponse();
      return <div>{fromContext.response.name}</div>;
    }

    act(() => {
      ReactDOM.render(
        <Router>
          <App />
        </Router>,
        node
      );
    });

    let first = router.current();
    expect(fromContext.response).toBe(first.response);
    expect(fromContext.navigation).toBe(first.navigation);

    act(() => {
      let url = router.url({ name: "About" });
      router.navigate({ url });
    });

    let second = router.current();
    expect(fromContext.response).toBe(second.response);
    expect(fromContext.navigation).toBe(second.navigation);
  });
});
