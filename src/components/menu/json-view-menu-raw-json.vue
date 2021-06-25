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
  },
  computed: {
    raw() {
      return this.finalJson(this.value.json, this.value.viewConfig);
    },
  },
};
</script>

<style scoped></style>
