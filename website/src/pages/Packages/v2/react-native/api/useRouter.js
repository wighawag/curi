import React from "react";

import {
  HashSection,
  CodeBlock,
  IJS,
  Note
} from "../../../../../components/package/common";

export const meta = {
  title: "useRouter",
  hash: "useRouter"
};

export function UseRouterAPI() {
  return (
    <HashSection meta={meta}>
      <p>
        The <IJS>useRouter</IJS> hook returns the <IJS>router</IJS> object.
      </p>

      <CodeBlock lang="jsx">
        {`import { useRouter } from '@curi/react-native';

function App() {
  const router = useRouter();
  // ...
}`}
      </CodeBlock>
    </HashSection>
  );
}