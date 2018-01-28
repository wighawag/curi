import React from "react";
import ReactDOM from "react-dom";
import Browser from "@hickory/browser";
import curi from "@curi/core";
import { ResponsiveBase } from "@curi/react";
import createAncestorsAddon from "@curi/addon-ancestors";
import routes from "./routes";
import renderFunction from "./renderFunction";

/*
 * A simple addon that will enable adding a dynamic title
 * to routes, which can be useful for creating links. This
 * relies on the user adding a "title" property to their routes,
 * which is a function that receives parameters and returns
 * a string. This is most likely route params, but you can pass
 * an object containing any values that you want.
 */
function createTitleTextAddon() {
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

const history = Browser();
const router = curi(history, routes, {
  addons: [createAncestorsAddon(), createTitleTextAddon()]
});
const root = document.getElementById("root");

router.respond(
  () => {
    ReactDOM.render(
      <ResponsiveBase router={router} render={renderFunction} />,
      root
    );
  },
  { once: true }
);
