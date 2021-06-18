<template>
  <div class="bg-light p-3 mt-1 small">
    <pre>{{ raw }}</pre>
  </div>
</template>

<script>
import rawJson from "../mixin/raw-json";
export default {
  name: "json-view-rawjson",
  mixins: [rawJson],
  props: {
    value: {},
    viewConfig: {},
  },
  computed: {
    raw() {
      return this.finalJson(this.value, this.viewConfig);
    },
  },
};
</script>

<style scoped></style>
