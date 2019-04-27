import { prepareRoutes } from "@curi/router";
import { preferDefault } from "@curi/helpers";

import { movies as MOVIES, movie as MOVIE } from "./api";

export default prepareRoutes({
    routes: [
  {
    name: "Home",
    path: "",
    resolve() {
      const body = import(/* webpackChunkName: "Home" */ "./pages/Home.svelte")
        .then(preferDefault);
      const movies = MOVIES();
      return Promise.all([ body, movies ]);
    },
    respond({ resolved }) {
      const [body, data] = resolved;
      return { body, data };
    }
  },
  {
    name: "Movie",
    path: "movie/:id",
    resolve({ params }) {
      const body = import(/* webpackChunkName: "Movie" */ "./pages/Movie.svelte")
        .then(module => module.default);
      const movie = MOVIE(params.id)
        .then(
          movie => ({ error: false, movie }),
          e => ({ error: true })
        );
      return Promise.all([ body, movie ]);
    },
    respond({ resolved }) {
      const [body, data] = resolved;
      return {
        body,
        data
      };
    }
  },
  {
    name: "Not Found",
    path: "(.*)",
    resolve() {
      return import(/* webpackChunkName: "NotFound" */ "./pages/NotFound.svelte")
        .then(preferDefault);
    },
    respond({ resolved }) {
      return {
        body: resolved
      };
    }
  }
]
});
