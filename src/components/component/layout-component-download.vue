<template>
  <div class="pt-4">
    <button
      v-on:click="jsonDownload()"
      v-bind:disabled="existComponentName()"
      class="btn btn-outline-info property-btn btn-sm m-1"
    >
      <b-icon-download />
      COMPONENT
    </button>
  </div>
</template>

<script>
import rawJson from "../../mixin/raw-json";
const clone = require("clone");
export default {
  name: "layout-component-download",
  mixins: [rawJson],
  props: {
    value: {},
  },
  methods: {
    existComponentName: function () {
      return this.value.name.length <= 2;
    },
    jsonDownload: function () {
      let componentName = `${
        this.value.name[0].toUpperCase() + this.value.name.slice(1)
      }`;
      let _ = require("lodash");
      let downloadFileName = _.snakeCase(componentName).replaceAll("_", "-");
      let configShowJson = this.finalJson(this.value, {
        tags: true,
        imports: true,
        fetch: true,
        debug: false,
        tagUid: false,
      });
      const blob = new Blob([configShowJson], {
        type: "application/json",
      });
      saveAs(blob, `${downloadFileName}.json`);
    },
  },
};
</script>

<style scoped></style>
