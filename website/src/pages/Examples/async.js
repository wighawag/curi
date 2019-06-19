import React from "react";

import {
  HashSection,
  MultiSandbox,
  IJS
} from "../../components/example/common";

const meta = {
  title: "Asynchronous Routes & Navigation"
};

const explanationMeta = {
  title: "Explanation",
  hash: "explanation"
};
const demoMeta = {
  title: "Live Demo",
  hash: "demo"
};

const contents = [explanationMeta, demoMeta];

function AsyncExample() {
  return (
    <React.Fragment>
      <h1>{meta.title}</h1>

      <HashSection meta={explanationMeta} tag="h2">
        <p>
          Route's with a <IJS>resolve</IJS> property are asynchronous. When they
          match, a response will not be emitted until the <IJS>resolve</IJS>{" "}
          function's asynchronous actions complete. While waiting, the links can
          render loading notifications.
        </p>
      </HashSection>

      <HashSection meta={demoMeta} tag="h2">
        <MultiSandbox
          sandboxes={[
            {
              id: "github/pshrmn/curi/tree/master/examples/react/async-nav",
              name: "React"
            },
            {
              id: "github/pshrmn/curi/tree/master/examples/vue/async-nav",
              name: "Vue"
            },
            {
              id: "github/pshrmn/curi/tree/master/examples/svelte/async-nav",
              name: "Svelte"
            }
          ]}
        />
      </HashSection>
    </React.Fragment>
  );
}

export { AsyncExample as component, contents };
