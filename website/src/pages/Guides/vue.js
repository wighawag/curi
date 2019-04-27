import React from "react";
import { Link } from "@curi/react-dom";

import {
  PlainSection,
  HashSection,
  CodeBlock,
  IJS,
  Cmp
} from "../../components/guide/common";

const meta = {
  title: "Vue"
};

const renderingMeta = {
  title: "Rendering with the response",
  hash: "rendering-response"
};
const a11yMeta = {
  title: "Accessibility",
  hash: "accessibility"
};
const pluginMeta = {
  title: "The Curi Plugin",
  hash: "plugin",
  children: [renderingMeta]
};

const navigatingMeta = {
  title: "Navigating",
  hash: "navigating"
};

const contents = [pluginMeta, navigatingMeta];

function VueGuide() {
  return (
    <React.Fragment>
      <PlainSection>
        <h1>{meta.title}</h1>
      </PlainSection>

      <HashSection meta={pluginMeta}>
        <p>
          The <IJS>CuriPlugin</IJS> for Vue allows you to interface your router
          with a Vue application. The plugin sets up a reactive object for
          tracking responses using an{" "}
          <Link name="Guide" params={{ slug: "navigating" }} hash="observer">
            observer
          </Link>
          , so whenever there is a new response, the parts of your application
          that use the response will be re-rendered.
        </p>
        <p>
          The plugin also makes the <IJS>response</IJS> accessible to every
          component in your application through the <IJS>$curi</IJS> property.
        </p>

        <CodeBlock lang="jsx">
          {`import Vue from "vue";
import { CuriPlugin } from "@curi/vue";

import router from "./router";

Vue.use(CuriPlugin, { router });`}
        </CodeBlock>

        <HashSection meta={renderingMeta} tag="h3">
          <p>
            Vue allows you to render dynamic components using the{" "}
            <Cmp>component :is</Cmp> syntax. If you set Vue components as the{" "}
            <IJS>body</IJS> properties on your responses, you can combine{" "}
            <Cmp>component :is</Cmp> and <IJS>response.body</IJS> to render the
            appropriate component for a <IJS>response</IJS>.
          </p>
          <p>
            A root component is a good place to perform general application
            layout, like menus, in addition to rendering the response's{" "}
            <IJS>body</IJS>.
          </p>

          <CodeBlock lang="html">
            {`<template>
  <header>
    <NavLinks />
  </header>
  <main>
    <component :is="$curi.response.body" />
  </main>
</template>

<script>
  import NavLinks from "./NavLinks";
  export default {
    components: { NavLinks }
  };
</script>`}
          </CodeBlock>

          <p>
            If your routes use an object to attach multiple components to a
            response, splitting them apart in computed properties may give your
            templates a cleaner look.
          </p>
          <p>
            If you do attach multiple components to a response, please remember
            that you want every route to set the same <IJS>body</IJS> shape.
            Otherwise, you'll have to determine the shape and change how you
            render, which can quickly become messy.
          </p>

          <CodeBlock lang="html">
            {`<script>
const routes = prepareRoutes({
  routes: [
    {
      name: "Home",
      path: "",
      respond() {
        return {
          body: {
            main: HomeMain,
            menu: HomeMenu
          }
        }
      }
    },
    // ...
  ]
});
</script>

<template>
  <header>
    <component :is="menu" />
  </header>
  <main>
    <component :is="main" />
  </main>
</template>

<script>
  export default {
    computed: {
      main() {
        return this.$curi.response.body.main;
      },
      menu() {
        return this.$curi.response.body.menu;
      }
    }
  }
</script>`}
          </CodeBlock>

          <p>
            In addition to the <IJS>response</IJS>, the current{" "}
            <IJS>navigation</IJS> object (the <IJS>previous</IJS> response and
            the navigation <IJS>action</IJS>) is globally available through{" "}
            <IJS>$curi.navigation</IJS>
          </p>
          <p>
            The router is globally available as <IJS>$router</IJS>.
          </p>
        </HashSection>

        <HashSection meta={a11yMeta} tag="h3">
          <p>
            Managing the application's focus when navigating is useful for users
            who use screen readers. The <IJS>curi-focus</IJS> directive provides
            a convenient way to focus a page's main content when it renders a
            new response.
          </p>
          <p>
            You can read some more about accessibility in the{" "}
            <Link name="Guide" params={{ slug: "accessibility" }}>
              accessibility
            </Link>{" "}
            guide.
          </p>

          <CodeBlock lang="html" data-line="5">
            {`<template>
  <header>
    <NavLinks />
  </header>
  <main :tabIndex="-1" v-curi-focus="$curi.response">
    <component :is="$curi.response.body" />
  </main>
</template>

<script>
  import NavLinks from "./NavLinks";
  export default {
    components: { NavLinks }
  };
</script>`}
          </CodeBlock>
        </HashSection>
      </HashSection>

      <HashSection meta={navigatingMeta}>
        <p>
          The <IJS>curi-link</IJS> component is used to navigate between routes
          within an application. When it renders in the DOM, it will render as
          an anchor (<Cmp>a</Cmp>) element.
        </p>
        <p>
          The <IJS>curi-link</IJS>'s <IJS>name</IJS> prop describes which route
          clicking the link should navigate to. If you pass an invalid route
          name, Curi will warn you.
        </p>
        <p>
          If a route has any params (or if any of a route's ancestors have
          params for nested routes), the <IJS>params</IJS> prop is used to pass
          these to the <IJS>curi-link</IJS>.
        </p>

        <CodeBlock lang="html">
          {`<template>
  <nav>
    <ul>
      <li>
        <curi-link name="Home">Home</curi-link>
      </li>
      <li>
        <curi-link name="About">About</curi-link>
      </li>
      <li>
        <curi-link name="User" :params="{ id: 'blue' }">
          Blue
        </curi-link>
      </li>
    </ul>
  </nav>
</template>`}
        </CodeBlock>

        <p>
          The <IJS>curi-link</IJS> also takes <IJS>hash</IJS>, <IJS>query</IJS>,
          and <IJS>state</IJS> props to attach their values to the location that
          will be navigated to.
        </p>

        <CodeBlock lang="jsx">
          {`<curi-link name="Home" hash="details">Home</curi-link>
// renders
<a href="/#details">Home</a>`}
        </CodeBlock>
      </HashSection>

      <PlainSection>
        <p>
          Please check out the full{" "}
          <Link
            name="Package"
            params={{ package: "vue", version: "v1" }}
            hash="API"
          >
            <IJS>@curi/vue</IJS>
          </Link>{" "}
          API documentation to see every component that the package provides.
        </p>
      </PlainSection>
    </React.Fragment>
  );
}

export { VueGuide as component, contents };
