<template>
  <div>
    <div class="row">
      <div class="col-6">
        <menu-header v-model="menuConfig" />
      </div>
      <div class="col-6 d-flex align-items-center">
        <menu-download v-model="menuConfig" />
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <menu-container v-model="menuConfig" />
      </div>
      <div class="col-6">
        <json-view-menu-display-switch v-model="menuConfig" />
        <json-view-menu-raw-json v-model="menuConfig" />
      </div>
    </div>
  </div>
</template>

<script>
import MenuContainer from "./menu/menu-container";
import MenuHeader from "./menu/menu-header";
import MenuDownload from "./menu/menu-download";
import JsonViewMenuDisplaySwitch from "./menu/json-view-menu-display-switch";
import JsonViewMenuRawJson from "./menu/json-view-menu-raw-json";
import tag from "../mixin/tag";
export default {
  name: "menu-template",
  mixins: [tag],
  components: {
    MenuContainer,
    MenuHeader,
    MenuDownload,
    JsonViewMenuDisplaySwitch,
    JsonViewMenuRawJson,
  },
  props: {
    value: {},
  },
  data() {
    return {
      menuConfig: {
        json: {
          menuTemp: {
            uid: "",
            strTitle: "",
            strUrl: "",
            icon: "",
            component: "",
          },
          header: {
            strTitle: "Ionic Admin Panel",
          },
          menu: [
            {
              uid: "",
              strTitle: "ダッシュボード",
              strUrl: "Dashboard",
              icon: "extensionPuzzle",
              component: "Default",
              redirect: "yes",
            },
            {
              uid: "",
              strTitle: "BASE アプリ",
              strUrl: "Base",
              icon: "storefront",
              component: "Default",
            },
            {
              uid: "",
              strTitle: "その他",
              strUrl: "Others",
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
          signOut: {
            strCaption: "Sign Out",
          },
          menuBottom: {
            parameters: [
              'const labels = ["ToDo", "大事なこと", "友達", "家族", "旅行"];',
            ],
            tags: [
              {
                tag: "IonList",
                props: ['id="labels-list"'],
                child: {
                  tags: [
                    {
                      tag: "IonListHeader",
                      noCR: "yes",
                      content: "ラベル",
                    },
                    {
                      tag: "{labels.map((label, index) => (",
                      close: "))}",
                      type: "raw",
                      child: {
                        tags: [
                          {
                            tag: "IonItem",
                            props: ['lines="none"', "key={index}"],
                            child: {
                              tags: [
                                {
                                  tag: "IonIcon",
                                  props: [
                                    'slot="start"',
                                    "icon={bookmarkOutline}",
                                  ],
                                  single: "yes",
                                },
                                {
                                  tag: "IonLabel",
                                  props: [],
                                  content: "{label}",
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
          components: ["Default"],
        },
        viewConfig: {
          debug: "",
          menuUid: "",
        },
      },
    };
  },
  mounted() {
    for (let i = 0; i < this.menuConfig.json.menu.length; i++) {
      this.numberingTagUID(this.menuConfig.json.menu[i]);
    }
  },
};
</script>

<style scoped></style>
