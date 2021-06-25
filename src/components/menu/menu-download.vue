<template>
  <div class="pt-4">
    <button
      v-on:click="jsonDownload()"
      class="btn btn-outline-info property-btn btn-sm m-1"
    >
      <b-icon-download />
      MENU
    </button>
  </div>
</template>

<script>
import rawMenuJson from "../../mixin/raw-menu-json";
const clone = require("clone");
export default {
  name: "menu-download",
  mixins: [rawMenuJson],
  props: {
    value: {},
  },
  methods: {
    jsonDownload: function () {
      let downloadFileName = "menu";
      let downloadJson = this.finalJson(this.value, {
        debug: false,
        tagUid: false,
      });
      const blob = new Blob([downloadJson], {
        type: "application/json",
      });
      saveAs(blob, `${downloadFileName}.json`);
    },
  },
};
</script>

<style scoped></style>
