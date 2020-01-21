import React from "react";

import {
  HashSection,
  CodeBlock,
  IJS
} from "../../../../../components/package/common";

export let meta = {
  title: "getNavigation",
  hash: "getNavigation"
};

export function GetNavigationAPI() {
  return (
    <HashSection meta={meta} tag="h2">
      <p>
        The <IJS>getNavigation</IJS> function is used to read the{" "}
        <IJS>navigation</IJS> store from Svelte's context. The value will update
        whenever there is a new navigation.
      </p>

      <CodeBlock lang="html">
        {`<h1>{$navigation.action}</h1>

<script>
  import { getNavigation } from "@curi/svelte";

  let navigation = getNavigation();
</script>`}
      </CodeBlock>
    </HashSection>
  );
}
