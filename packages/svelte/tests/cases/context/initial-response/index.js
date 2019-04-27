import { inMemory } from "@hickory/in-memory";
import { createRouter, prepareRoutes } from "@curi/router";

import app from "./app.svelte";

const routes = prepareRoutes({
  routes: [
    { name: "Home", path: "" },
    { name: "User", path: "u/:id" },
    { name: "Not Found", path: "(.*)" }
  ]
});

const router = createRouter(inMemory, routes);

export default function render() {
  const target = document.createElement("div");

  const { response } = router.current();

  new app.default({
    target,
    props: {
      router,
      check(value) {
        expect(value).toBe(response);
      }
    }
  });
}
