<template>
  <div class="bg-light p-3 mt-1 small">
    <pre>{{ raw }}</pre>
  </div>
</template>

<script>
import rawJson from "../mixin/raw-json";
const clone = require("clone");
export default {
  name: "json-view-rawjson",
  mixins: [rawJson],
  props: {
    value: {},
    viewConfig: {},
  },
  computed: {
    raw() {
      let importList = [];
      this.compressImport(this.value.tags, importList);
      this.fetchImport(this.value.fetch, importList);
      this.value.import = importList;
      let lifeCycleMethods = [];
      this.lifeCycleMethodCalls(this.value.fetch, lifeCycleMethods);
      this.value.lifeCycleMethods = lifeCycleMethods;
      let configShowJson = clone(this.value);
      this.formattedJson(configShowJson, this.viewConfig);
      return JSON.stringify(configShowJson, null, 2);
    },
  },
};
</script>

<style scoped></style>
