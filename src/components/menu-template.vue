<template>
  <div>
    <div class="row">
      <div class="col-6">
        <menu-header v-model="value" />
      </div>
      <div class="col-6 d-flex align-items-center">
        <menu-download v-model="value" />
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <menu-container v-model="value" v-bind:config-list="configList" />
      </div>
      <div class="col-6">
        <json-view-menu-display-switch v-model="value" />
        <json-view-menu-raw-json v-model="value" />
      </div>
    </div>
  </div>
</template>

<script>
import tag from "../mixin/tag";
import helper from "../mixin/helper";
import MenuContainer from "./menu/menu-container";
import MenuHeader from "./menu/menu-header";
import MenuDownload from "./menu/menu-download";
import JsonViewMenuDisplaySwitch from "./menu/json-view-menu-display-switch";
import JsonViewMenuRawJson from "./menu/json-view-menu-raw-json";

export default {
  name: "menu-template",
  mixins: [tag, helper],
  components: {
    MenuContainer,
    MenuHeader,
    MenuDownload,
    JsonViewMenuDisplaySwitch,
    JsonViewMenuRawJson,
  },
  props: {
    value: {},
    configList: {},
  },
  mounted() {
    for (let i = 0; i < this.value.json.menu.length; i++) {
      this.numberingTagUID(this.value.json.menu[i]);
    }
  },
};
</script>

<style scoped></style>
