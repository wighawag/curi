import { create_router } from "@curi/router";
import { in_memory } from "@hickory/in-memory";

import { PathnamesConfiguration } from "./types";

export default function pathnames(
  config: PathnamesConfiguration
): Array<string> {
  const { routes, pages, router_options } = config;

  const router = create_router(in_memory, routes, router_options);

  return pages.map(page => {
    const pathname = router.route.pathname(page.name, page.params);
    if (process.env.NODE_ENV !== "production") {
      if (pathname == null) {
        console.warn(
          `Failed to create page URL for "${
            page.name
          }" with params ${JSON.stringify(page.params)}`
        );
      }
    }
    return pathname;
  });
}
