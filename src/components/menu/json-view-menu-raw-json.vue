<template>
  <div class="bg-light p-3 mt-1 small">
    <pre>{{ raw }}</pre>
  </div>
</template>

<script>
import rawMenuJson from "../../mixin/raw-menu-json";

export default {
  name: "json-view-menu-raw-json",
  mixins: [rawMenuJson],
  props: {
    value: {},
    viewConfig: {},
  },
  computed: {
    raw() {
      console.log(JSON.stringify(this.value));
      return this.finalJson(this.value, this.viewConfig);
    },
  },
};
</script>

<style scoped></style>
