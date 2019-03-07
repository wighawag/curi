import React from "react";

import {
  HashSection,
  CodeSandboxDemo,
  OnGithub,
  onGitHubMeta
} from "../../../components/example/common";

const meta = {
  title: "Basics"
};

const explanationMeta = {
  title: "Explanation",
  hash: "explanation"
};
const demoMeta = {
  title: "Live Demo",
  hash: "demo"
};

const contents = [explanationMeta, demoMeta, onGitHubMeta];

function BasicExample() {
  return (
    <React.Fragment>
      <h1>{meta.title}</h1>

      <HashSection meta={explanationMeta}>
        <p>
          While Vue does have an official router, this project shows how you
          could use Curi as the router for a Vue project instead.
        </p>
      </HashSection>

      <HashSection meta={demoMeta}>
        <CodeSandboxDemo
          id="github/pshrmn/curi/tree/master/examples/vue/basic"
          title="Curi Vue basic demo"
        />
      </HashSection>

      <OnGithub path="vue/basic" />
    </React.Fragment>
  );
}

export { BasicExample as component, contents };