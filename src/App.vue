<template>
  <div id="app" class="container-fluid">
    <div class="p-1">
      <h1>Ionic JSON Layout Manager</h1>
    </div>
    <div class="row">
      <div class="col-10">
        <component-name v-model="configJson"></component-name>
      </div>
      <div class="col-2 d-flex align-items-center">
        <button
          v-on:click="jsonDownload()"
          class="btn btn-outline-info property-btn btn-sm m-1"
        >
          <b-icon-download></b-icon-download>
          JSON出力
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="mt-3">
          <layout-container v-model="configJson.tags"></layout-container>
        </div>
      </div>
      <div class="col-6">
        <law-view-selection v-model="viewConfig"></law-view-selection>
        <law-view-json
          v-model="configJson"
          v-bind:view-config="viewConfig"
        ></law-view-json>
      </div>
    </div>
  </div>
</template>

<script>
import layoutContainer from "./components/layout-container.vue";
import componentName from "./components/component-name";
import lawViewSelection from "./components/law-view-selection";
import lawViewJson from "./components/law-view-json";
import saveAs from "file-saver";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.css";

export default {
  components: {
    layoutContainer,
    componentName,
    lawViewSelection,
    lawViewJson,
    saveAs,
  },
  mounted() {
    console.log(this.configJson.tags[0].child.tags);
  },
  data() {
    return {
      configJson: {
        name: "",
        import: [],
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
                  child: {
                    tags: [
                      {
                        tag: "IonCardHeader",
                        props: [],
                        child: {
                          tags: [
                            {
                              tag: "IonCardTitle",
                              content: "カードタイトルだよぉ",
                              noCR: "yes",
                              props: [],
                            },
                            {
                              tag: "IonCardSubtitle",
                              content: "サブタイトル 2021",
                              noCR: "yes",
                              props: [],
                            },
                          ],
                        },
                      },
                      {
                        tag: "IonCardContent",
                        content:
                          "おぎやはぎの矢作兼が５日、ＴＢＳ系「水曜日のダウンタウン」に出演。過去の「やらせ体験」を明かした。",
                        props: [],
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
        fetch: "",
      },
    };
  },
  methods: {
    jsonDownload() {
      const blob = new Blob([JSON.stringify(this.configJson, null, 2)], {
        type: "application/json",
      });
      saveAs(blob, "answer_log.json");
    },
  },
};
</script>

<style></style>
