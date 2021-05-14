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
      this.value.import = importList;
      let configShowJson = clone(this.value);
      if (!this.viewConfig.tags) delete configShowJson.tags;
      if (!this.viewConfig.imports) delete configShowJson.import;
      if (!this.viewConfig.fetch) delete configShowJson.fetch;
      if (!this.viewConfig.debug) this.deleteRawProps(configShowJson.tags);
      return JSON.stringify(configShowJson, null, 2);
    },
  },
};
</script>

<style scoped></style>
