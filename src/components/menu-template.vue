<template>
  <div class="row">
    <div class="col-6">
      <menu-container v-model="menu" />
    </div>
    <div class="col-6">
      <json-view-menu-raw-json v-model="menu" />
    </div>
  </div>
</template>

<script>
import JsonViewMenuRawJson from "./menu/json-view-menu-raw-json";
import MenuContainer from "./menu/menu-container";
export default {
  name: "menu-template",
  components: { MenuContainer, JsonViewMenuRawJson },
  props: {
    value: {},
  },
  data() {
    return {
      menu: [
        {
          strTitle: "ダッシュボード",
          strUrl: "/page/Dashboard",
          icon: "extensionPuzzle",
          component: "Default",
          redirect: "yes",
        },
        {
          strTitle: "BASE アプリ",
          strUrl: "/page/Base",
          icon: "storefront",
          component: "Default",
        },
        {
          strTitle: "その他",
          strUrl: "/page/Others",
          icon: "layers",
          component: "Default",
        },
        {
          strTitle: "Sample",
          strUrl: "/sample",
          icon: "planet",
          component: "SamplePage",
        },
        {
          strTitle: "Sample2",
          strUrl: "/sample2",
          icon: "basketball",
          component: "SamplePage2",
        },
        {
          strTitle: "MyCard",
          strUrl: "/mycard",
          icon: "basketball",
          component: "MyCardComponentPage",
        },
        {
          strTitle: "MyOmanko",
          strUrl: "/omanko",
          icon: "basketball",
          component: "OmankoComponentPage",
        },
        {
          strTitle: "MyTakosuke",
          strUrl: "/takosuke",
          icon: "basketball",
          component: "TakosukeComponentPage",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
