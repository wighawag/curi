<template>
  <ul class="breadcrumbs">
    <li v-for="a in ancestors" :key="a.name">
      <curi-link :name="a.name" :params="params">{{ a.title }}</curi-link>
    </li>
  </ul>
</template>

<script>
import { ancestors } from "@curi/interactions";
import title from "../titleInteraction";

export default {
  name: "breadcrumbs",
  props: ["name", "params"],
  computed: {
    ancestors() {
      let route = this.$router.route(this.name);
      return ancestors(route).map(r => ({
        name: r.name,
        title: title(r, this.params)
      }));
    }
  }
};
</script>

<style>
.breadcrumbs {
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  padding: 0;
}
.breadcrumbs li {
  list-style: none;
  margin-right: 10px;
}
</style>
