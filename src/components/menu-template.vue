<template>
  <div class="row">
    <div class="col-6">
      <menu-container v-model="menu" />
    </div>
    <div class="col-6">
      <json-view-menu-display-switch v-model="viewConfig" />
      <json-view-menu-raw-json v-model="menu" />
    </div>
  </div>
</template>

<script>
import MenuContainer from "./menu/menu-container";
import JsonViewMenuDisplaySwitch from "./menu/json-view-menu-display-switch";
import JsonViewMenuRawJson from "./menu/json-view-menu-raw-json";
import tag from "../mixin/tag";
export default {
  name: "menu-template",
  mixins: [tag],
  components: { MenuContainer, JsonViewMenuDisplaySwitch, JsonViewMenuRawJson },
  props: {
    value: {},
  },
  data() {
    return {
      menu: [
        {
          uid: "",
          strTitle: "ダッシュボード",
          strUrl: "/page/Dashboard",
          icon: "extensionPuzzle",
          component: "Default",
          redirect: "yes",
        },
        {
          uid: "",
          strTitle: "BASE アプリ",
          strUrl: "/page/Base",
          icon: "storefront",
          component: "Default",
        },
        {
          uid: "",
          strTitle: "その他",
          strUrl: "/page/Others",
          icon: "layers",
          component: "Default",
        },
        {
          uid: "",
          strTitle: "Sample",
          strUrl: "/sample",
          icon: "planet",
          component: "SamplePage",
        },
        {
          uid: "",
          strTitle: "Sample2",
          strUrl: "/sample2",
          icon: "basketball",
          component: "SamplePage2",
        },
      ],
      viewConfig: {
        debug: "",
        menuUid: "",
      },
    };
  },
  mounted() {
    for (let i = 0; i < this.menu.length; i++) {
      this.numberingTagUID(this.menu[i]);
    }
  },
};
</script>

<style scoped></style>
