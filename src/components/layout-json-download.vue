<template>
  <div class="pt-4">
    <button
      v-on:click="jsonDownload()"
      v-bind:disabled="existComponentName()"
      class="btn btn-outline-info property-btn btn-sm m-1"
    >
      <b-icon-download></b-icon-download>
      JSON出力
    </button>
  </div>
</template>

<script>
import rawJson from "../mixin/raw-json";
const clone = require("clone");
export default {
  name: "layout-json-download",
  mixins: [rawJson],
  props: {
    value: {},
  },
  methods: {
    existComponentName: function () {
      return this.value.name.length <= 3;
    },
    jsonDownload: function () {
      let importList = [];
      this.compressImport(this.value.tags, importList);
      this.value.import = importList;
      let configShowJson = clone(this.value);
      this.formattedJson(configShowJson, {
        tags: true,
        imports: true,
        fetch: true,
        debug: false,
      });
      const blob = new Blob([JSON.stringify(configShowJson, null, 2)], {
        type: "application/json",
      });
      saveAs(blob, `${this.value.name}.json`);
    },
  },
};
</script>

<style scoped></style>
