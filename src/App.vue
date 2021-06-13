<template>
  <div id="app" class="container-fluid">
    <div class="p-1">
      <h1>Ionic JSON Layout Manager</h1>
    </div>
    <div class="row">
      <div class="col-10">
        <layout-component-name v-model="configJson"></layout-component-name>
      </div>
      <div class="col-2 d-flex align-items-center">
        <layout-json-download v-model="configJson"></layout-json-download>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="mt-3">
          <fetch-container v-model="configJson"></fetch-container>
          <layout-container v-model="configJson.tags"></layout-container>
        </div>
      </div>
      <div class="col-6">
        <json-view-display-switch
          v-model="viewConfig"
        ></json-view-display-switch>
        <json-view-rawjson
          v-model="configJson"
          v-bind:view-config="viewConfig"
        ></json-view-rawjson>
      </div>
    </div>
  </div>
</template>

<script>
import fetchContainer from "./components/fetch-container";
import layoutContainer from "./components/layout-container.vue";
import layoutComponentName from "./components/layout-component-name";
import layoutJsonDownload from "./components/layout-json-download";
import jsonViewDisplaySwitch from "./components/json-view-display-switch";
import jsonViewRawjson from "./components/json-view-rawjson";
import saveAs from "file-saver";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.css";

export default {
  components: {
    fetchContainer,
    layoutContainer,
    layoutComponentName,
    layoutJsonDownload,
    jsonViewDisplaySwitch,
    jsonViewRawjson,
    saveAs,
  },
  mounted() {
    console.log(this.configJson.tags[0].child.tags);
  },
  data() {
    return {
      configJson: {
        update: 1,
        name: "myComponent",
        import: [],
        lifeCycleMethods: [],
        fetchTemp: {
          mode: "create",
          editIndex: 0,
          fetchName: "",
          apis: [],
          external: {
            uri: "",
            responseTypeName: "",
            responseType: "",
          },
          internal: {
            uri: "https://sls-front-api.io/",
            responseTypeName: "",
            path: "",
            responseTypes: [],
          },
        },
        fetch: [],
        renderBeforeReturn: [],
        defaultProps: [],
        tags: [
          {
            tag: "div",
            root: true,
            child: {
              tags: [
                {
                  tag: "IonCard",
                  props: [],
                  rawProps: "",
                  child: {
                    tags: [
                      {
                        tag: "IonCardHeader",
                        props: [],
                        rawProps: "",
                        child: {
                          tags: [
                            {
                              tag: "IonCardTitle",
                              content: "カードタイトルだよぉ",
                              noCR: "yes",
                              props: [],
                              rawProps: "",
                            },
                            {
                              tag: "IonCardSubtitle",
                              content: "サブタイトル 2021",
                              noCR: "yes",
                              props: [],
                              rawProps: "",
                            },
                          ],
                        },
                      },
                      {
                        tag: "IonCardContent",
                        content:
                          "おぎやはぎの矢作兼が５日、ＴＢＳ系「水曜日のダウンタウン」に出演。過去の「やらせ体験」を明かした。",
                        props: [],
                        rawProps: "",
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      viewConfig: {
        tags: "tags",
        imports: "",
        fetch: "fetch",
        debug: "",
      },
    };
  },
};
</script>

<style></style>
