import React from "react";

import {
  HashSection,
  CodeBlock,
  IJS
} from "../../../../../components/package/common";

const optsMeta = {
  title: "Options",
  hash: "useURL-opts"
};
export const meta = {
  title: "useURL",
  hash: "useURL"
};

export function UseURLAPI() {
  return (
    <HashSection meta={meta} tag="h2">
      <p>
        The <IJS>useURL</IJS> hook creates a URL string.
      </p>

      <CodeBlock lang="jsx">
        {`import { useURL } from '@curi/react-dom';

const href = useURL({
  name: "Video",
  params: { id: "jaifeo9" } },
  hash: "comments",
  query: "t=15"
});
// href = "/video/jaifeo9?t=15#comments"`}
      </CodeBlock>

      <HashSection tag="h3" meta={optsMeta}>
        <HashSection tag="h4" meta={{ title: "name", hash: "useURL-name" }}>
          <p>
            The name of the route to generate the location's pathname from. If
            this is not provided, the generated location's pathname will be an
            empty string (<IJS>""</IJS>);
          </p>
        </HashSection>

        <HashSection tag="h4" meta={{ title: "params", hash: "useURL-params" }}>
          <p>An object of params for the named route.</p>
        </HashSection>

        <HashSection tag="h4" meta={{ title: "hash", hash: "useURL-hash" }}>
          <p>A hash string for the location.</p>
        </HashSection>

        <HashSection tag="h4" meta={{ title: "query", hash: "useURL-query" }}>
          <p>The location's query value.</p>

          <p>
            By default, this is expected to be a string, but if you configure
            your history object with the{" "}
            <a href="https://github.com/pshrmn/hickory/blob/master/docs/api/browser.md#options">
              <IJS>query</IJS>
            </a>{" "}
            option, this may be something else.
          </p>
        </HashSection>
      </HashSection>
    </HashSection>
  );
}
