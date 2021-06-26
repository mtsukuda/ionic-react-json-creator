<template>
  <div>
    <div class="row">
      <div class="col-5">
        <layout-component-name v-model="value" />
      </div>
      <div class="col-1" style="padding-top: 2.4em">
        <b-button
          block
          variant="outline-primary"
          v-on:click="backToComponentList"
          ><b-icon icon="arrow-up"
        /></b-button>
      </div>
      <div class="col-6 d-flex align-items-center">
        <layout-page-download v-model="value" />
        <layout-component-download v-model="value" />
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="mt-3">
          <fetch-container v-model="value" />
          <layout-container v-model="value" v-bind:config-json="value" />
        </div>
      </div>
      <div class="col-6">
        <json-view-display-switch v-model="viewConfig" />
        <json-view-rawjson v-model="value" v-bind:view-config="viewConfig" />
      </div>
    </div>
  </div>
</template>

<script>
import tag from "../mixin/tag";
import fetchContainer from "./component/fetch-container";
import layoutContainer from "./component/layout-container.vue";
import layoutComponentName from "./component/layout-component-name";
import layoutComponentDownload from "./component/layout-component-download";
import LayoutPageDownload from "./component/layout-page-download";
import jsonViewDisplaySwitch from "./component/json-view-display-switch";
import jsonViewRawjson from "./component/json-view-rawjson";
import saveAs from "file-saver";

export default {
  name: "component-template",
  mixins: [tag],
  components: {
    fetchContainer,
    layoutContainer,
    layoutComponentName,
    layoutComponentDownload,
    LayoutPageDownload,
    jsonViewDisplaySwitch,
    jsonViewRawjson,
    saveAs,
  },
  props: {
    value: {},
    viewConfig: {},
    configList: {},
  },
  methods: {
    backToComponentList: function () {
      this.configList.temp.status = "list";
    },
  },
};
</script>

<style scoped></style>
