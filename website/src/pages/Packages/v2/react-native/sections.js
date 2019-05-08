import React from "react";
import { Link } from "@curi/react-dom";

import { About, APIBlock, IJS } from "../../../../components/package/common";
import { CreateRouterComponentAPI } from "./api/createRouterComponent";
import { LinkAPI } from "./api/link";
import { AsyncLinkAPI } from "./api/asynclink";
import { UseResponseAPI } from "./api/useResponse";
import { UseRouterAPI } from "./api/useRouter";
import { UseActiveAPI } from "./api/useActive";
import { UseNavigatingAPI } from "./api/useNavigating";
import { UseURLAPI } from "./api/useURL";
import { ResponseConsumerAPI } from "./api/responseconsumer";
import { RouterConsumerAPI } from "./api/routerconsumer";

export default {
  about: (
    <About>
      <p>
        The <IJS>@curi/react-native</IJS> package provides components to use
        Curi routing in a React Native application.
      </p>
      <p>
        For more information on using Curi with React Native, please check out
        the{" "}
        <Link name="Guide" params={{ slug: "react-native" }}>
          React Native guide
        </Link>
        .
      </p>
    </About>
  ),
  api: (
    <APIBlock>
      <CreateRouterComponentAPI />
      <LinkAPI />
      <AsyncLinkAPI />
      <UseResponseAPI />
      <UseRouterAPI />
      <UseActiveAPI />
      <UseNavigatingAPI />
      <UseURLAPI />
      <ResponseConsumerAPI />
      <RouterConsumerAPI />
    </APIBlock>
  )
};