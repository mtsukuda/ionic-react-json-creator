<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-6">
        <div class="p-1">
          <h1>Ionic JSON Layout Manager</h1>
        </div>
      </div>
      <div class="col-6 d-flex align-items-center pt-2">
        <b-form-group label="" v-slot="{ ariaDescribedby }">
          <b-form-radio-group
            id="radio-group-1"
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            name="radio-options"
          ></b-form-radio-group>
        </b-form-group>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <layout-component-name v-model="configJson"></layout-component-name>
      </div>
      <div class="col-6 d-flex align-items-center">
        <layout-json-download v-model="configJson"></layout-json-download>
        <layout-page-download v-model="configJson"></layout-page-download>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="mt-3">
          <fetch-container v-model="configJson"></fetch-container>
          <layout-container
            v-model="configJson"
            v-bind:config-json="configJson"
          ></layout-container>
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
import tag from "./mixin/tag";
import fetchContainer from "./components/component/fetch-container";
import layoutContainer from "./components/component/layout-container.vue";
import layoutComponentName from "./components/component/layout-component-name";
import layoutJsonDownload from "./components/component/layout-json-download";
import LayoutPageDownload from "./components/component/layout-page-download";
import jsonViewDisplaySwitch from "./components/component/json-view-display-switch";
import jsonViewRawjson from "./components/component/json-view-rawjson";
import saveAs from "file-saver";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.css";

export default {
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
  mounted() {
    for (let i = 0; i < this.configJson.tags.length; i++) {
      this.numberingTagUID(this.configJson.tags[i]);
    }
  },
  data() {
    return {
      selected: "component",
      options: [
        { text: "Menu", value: "menu", disabled: false },
        { text: "Component", value: "component", disabled: false },
      ],
      configJson: {
        update: 1,
        name: "MyCardComponent",
        import: [],
        lifeCycleMethods: [],
        fetchTemp: {
          mode: "create",
          editIndex: 0,
          fetchName: "",
          apis: [],
          external: {
            mode: "create",
            editIndex: 0,
            uri: "",
            responseTypeName: "",
            responseType: "",
          },
          internal: {
            mode: "create",
            editIndex: 0,
            uri: "https://sls-front-api.io/",
            responseTypeName: "",
            path: "",
            responseTypes: [],
          },
          responseList: [
            "this.state.resCardData.data.title",
            "this.state.resCardData.data.subtitle",
            "this.state.resCardData.data.content",
          ],
        },
        fetch: [
          {
            method: "get",
            name: "cardData",
            lifeCycleMethods: ["componentDidMount"],
            apis: [
              {
                uri: "https://sls-front-api.io/",
                apiType: "internal",
                responseTypeName: "resCardData",
                responseTypeStrict: true,
                responseType: {
                  title: "string",
                  subtitle: "string",
                  content: "string",
                },
                config: {
                  path: "lambdaTwWEOMDy",
                  mock: {
                    title: "カードタイトルだよぉ",
                    subtitle: "カードの「サブ」タイトルだよぉ",
                    content:
                      "おぎやはぎの矢作兼が５日、ＴＢＳ系「水曜日のダウンタウン」に出演。過去の「やらせ体験」を明かした。",
                  },
                },
              },
            ],
          },
        ],
        renderBeforeReturn: [],
        defaultProps: [],
        tagTemp: {
          editTagUID: "",
          editTag: "",
        },
        tags: [
          {
            uid: "",
            tag: "div",
            root: true,
            child: {
              tags: [
                {
                  uid: "",
                  tag: "IonCard",
                  props: [],
                  rawProps: "",
                  child: {
                    tags: [
                      {
                        uid: "",
                        tag: "IonCardHeader",
                        props: [],
                        rawProps: "",
                        child: {
                          tags: [
                            {
                              uid: "",
                              tag: "IonCardTitle",
                              code: "yes",
                              content: "this.state.resCardData.data.title",
                              noCR: "yes",
                              props: [],
                              rawProps: "",
                            },
                            {
                              uid: "",
                              tag: "IonCardSubtitle",
                              code: "yes",
                              content: "this.state.resCardData.data.subtitle",
                              noCR: "yes",
                              props: [],
                              rawProps: "",
                            },
                          ],
                        },
                      },
                      {
                        uid: "",
                        tag: "IonCardContent",
                        code: "yes",
                        content: "this.state.resCardData.data.content",
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
        tagUid: "",
      },
    };
  },
  methods: {
    numberingTagUID: function (tag) {
      let tagUID = this.tagUID();
      if (tag.uid) tag.uid = tagUID;
      else tag["uid"] = tagUID;
      if (tag.child && tag.child.tags) {
        for (let i = 0; i < tag.child.tags.length; i++)
          this.numberingTagUID(tag.child.tags[i]);
      }
    },
  },
};
</script>

<style>
h1 {
  font-size: x-large;
}
</style>
