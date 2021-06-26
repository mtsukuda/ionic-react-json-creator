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
          />
        </b-form-group>
      </div>
    </div>
    <component-list-template
        v-model="configList"
        v-if="selected === 'list' && configList.temp.status === 'list'"
    />
    <component-template
      v-model="configJson"
      v-bind:view-config="viewConfig"
      v-if="selected === 'list' && configList.temp.status === 'component'"
    />
    <menu-template v-if="selected === 'menu'" />
  </div>
</template>

<script>
import tag from "./mixin/tag";
import appData from "./mixin/app-data";
import helper from "./mixin/helper";
import ComponentListTemplate from "./components/component-list-template";
import ComponentTemplate from "./components/component-template";
import MenuTemplate from "./components/menu-template";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.css";

export default {
  mixins: [tag, appData, helper],
  components: {
    ComponentListTemplate,
    MenuTemplate,
    ComponentTemplate,
  },
  mounted() {
    for (let i = 0; i < this.configJson.tags.length; i++) {
      this.numberingTagUID(this.configJson.tags[i]);
    }
    this.addConfig(this.configList.list);
  },
  data() {
    return {
      selected: "list",
      options: [
        { text: "Menu", value: "menu", disabled: false },
        { text: "List", value: "list", disabled: false },
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
};
</script>

<style>
h1 {
  font-size: x-large;
}
</style>
