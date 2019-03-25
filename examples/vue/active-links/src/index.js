import Vue from "vue";
import { browser } from "@hickory/browser";
import { create_router } from "@curi/router";
import { CuriPlugin } from "@curi/vue";
import active from "@curi/route-active";

import routes from "./routes";
import App from "./components/App";

const router = create_router(browser, routes, {
  route: [active()]
});

Vue.use(CuriPlugin, { router });

const vm = new Vue({
  el: "#app",
  template: "<app />",
  components: { app: App }
});
