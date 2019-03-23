import React from "react";
import ReactDOM from "react-dom";
import { Browser } from "@hickory/browser";
import { create_router } from "@curi/router";
import { create_router_component } from "@curi/react-dom";
import ancestors from "@curi/route-ancestors";

import routes from "./routes";
import App from "./components/App";

/*
 * A simple router interaction that will enable adding a dynamic title
 * to routes, which can be useful for creating links. This
 * relies on the user adding a "title" property to their routes,
 * which is a function that receives parameters and returns
 * a string. This is most likely route params, but you can pass
 * an object containing any values that you want.
 */
function titleText() {
  let routes = {};
  return {
    name: "title",
    register: route => {
      let { name, extra } = route;
      routes[name] = extra && extra.title;
    },
    get: (name, params) => {
      const titleFn = routes[name];
      return titleFn ? titleFn(params) : name;
    },
    reset: () => {
      routes = {};
    }
  };
}

const router = create_router(Browser, routes, {
  route: [ancestors(), titleText()]
});
const Router = create_router_component(router);
const root = document.getElementById("root");

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
