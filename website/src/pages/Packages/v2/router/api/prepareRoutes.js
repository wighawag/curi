import React from "react";
import { Link } from "@curi/react-dom";

import {
  HashSection,
  CodeBlock,
  IJS
} from "../../../../../components/package/common";

const routesArgMeta = { title: "routes", hash: "options-routes" };

const argumentsMeta = {
  title: "Arguments",
  hash: "prepareRoutes-arguments",
  children: [routesArgMeta]
};

export const meta = {
  title: "prepareRoutes",
  hash: "prepareRoutes",
  children: [argumentsMeta]
};

export function PrepareRoutesAPI() {
  return (
    <HashSection meta={meta}>
      <p>
        The <IJS>prepareRoutes</IJS> function takes an application's routes and
        route interactions and returns an object. The returned object will be
        passed to <IJS>createRouter</IJS>.
      </p>

      <CodeBlock>
        {`import { prepareRoutes } from '@curi/router';

const routes = prepareRoutes([
  { name: "Home", path: "" },
  // ...
  { name: "Not Found", path: "(.*)" }
]);`}
      </CodeBlock>

      <p>
        <IJS>prepareRoutes</IJS> creates a reusable routing object, which means
        that it can be reused on the server instead of recompiling it for every
        request.
      </p>

      <HashSection tag="h4" meta={argumentsMeta}>
        <HashSection tag="h5" meta={routesArgMeta}>
          An array of <Link hash="route-objects">route objects</Link>.
        </HashSection>
      </HashSection>
    </HashSection>
  );
}