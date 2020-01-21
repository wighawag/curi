import React from "react";

import {
  HashSection,
  CodeBlock,
  IJS
} from "../../../../../components/package/common";

let argumentsMeta = {
  title: "Arguments",
  hash: "pathnames-arguments"
};
export let meta = {
  title: "pathnames",
  hash: "pathnames"
};

export function PathnamesAPI() {
  return (
    <HashSection meta={meta} tag="h2">
      <p>
        The <IJS>pathnames</IJS> function is used to generate pathnames from an
        array of provided page descriptors. This can be useful for generating a
        sitemap.
      </p>

      <HashSection tag="h3" meta={argumentsMeta}>
        <HashSection
          tag="h4"
          meta={{ title: "routes", hash: "pathnames-routes" }}
        >
          <p>The array of route descriptors that is passed to a router.</p>

          <CodeBlock>
            {`routes = prepare_routes([
  {
    name: "Home",
    path: "",
  },
  {
    name: "User",
    path: "u/:id"
  }
]);


let paths = pathnames({
  // ...
  routes
});`}
          </CodeBlock>
        </HashSection>

        <HashSection
          tag="h4"
          meta={{ title: "pages", hash: "pathnames-pages" }}
        >
          <p>
            An array of page descriptors. A page descriptor is an object with a{" "}
            <IJS>name</IJS> property defining which route to generate a page
            for. If the route (or any of its ancestors) has any params, they
            should be passed as an object with the <IJS>params</IJS> property.
          </p>

          <CodeBlock>
            {`let pages = [
  { name: "Home" },
  { name: "User", params: { id: 1 }},
  { name: "User", params: { id: 2 }},
];


let paths = pathnames({
  // ...
  pages
});`}
          </CodeBlock>
        </HashSection>

        <HashSection
          tag="h4"
          meta={{ title: "routerOptions", hash: "pathnames-routerOptions" }}
        >
          <p>
            The options for a router, predominantly useful for passing any route
            interactions the application may need while rendering.
          </p>

          <CodeBlock>
            {`import active from "@curi/active";
let routerOptions = {
  routes: [active()]
};

let paths = pathnames({
  // ...
  routerOptions
});`}
          </CodeBlock>
        </HashSection>
      </HashSection>
    </HashSection>
  );
}
