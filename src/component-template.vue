<template>
  <div>
    <div class="row">
      <div class="col-6">
        <layout-component-name v-model="value"></layout-component-name>
      </div>
      <div class="col-6 d-flex align-items-center">
        <layout-json-download v-model="value"></layout-json-download>
        <layout-page-download v-model="value"></layout-page-download>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="mt-3">
          <fetch-container v-model="value"></fetch-container>
          <layout-container
            v-model="value"
            v-bind:config-json="value"
          ></layout-container>
        </div>
      </div>
      <div class="col-6">
        <json-view-display-switch
          v-model="viewConfig"
        ></json-view-display-switch>
        <json-view-rawjson
          v-model="value"
          v-bind:view-config="viewConfig"
        ></json-view-rawjson>
      </div>
    </div>
  </div>
</template>

<script>
import tag from "./mixin/tag";
import fetchContainer from "./components/component/fetch-container";
import layoutContainer from "./components/component/layout-container.vue";
import layoutComponentName from "./components/component/layout-component-name";
import layoutJsonDownload from "./components/component/layout-json-download";
import LayoutPageDownload from "./components/component/layout-page-download";
import jsonViewDisplaySwitch from "./components/component/json-view-display-switch";
import jsonViewRawjson from "./components/component/json-view-rawjson";
import saveAs from "file-saver";

export default {
  name: "component-template",
  mixins: [tag],
  components: {
    fetchContainer,
    layoutContainer,
    layoutComponentName,
    layoutJsonDownload,
    LayoutPageDownload,
    jsonViewDisplaySwitch,
    jsonViewRawjson,
    saveAs,
  },
  props: {
    value: {},
    viewConfig: {},
  },
};
</script>

<style scoped></style>
