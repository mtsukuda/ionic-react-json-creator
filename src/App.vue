<template>
  <div id="app" class="container-fluid">
    <div class="p-1">
      <h1>Ionic JSON Layout Manager</h1>
    </div>
    <component-name v-model="configJson"></component-name>
    <div class="row">
      <div class="col-6">
        <div class="mt-3">
          <layout-container v-model="configJson.tags"></layout-container>
        </div>
      </div>
      <div class="col-6">
        <law-view-selection v-model="viewConfig"></law-view-selection>
        <law-view-json v-model="configJson"></law-view-json>
      </div>
    </div>
  </div>
</template>

<script>
import layoutContainer from "./components/layout-container.vue";
import componentName from "./components/component-name";
import lawViewSelection from "./components/law-view-selection";
import lawViewJson from "./components/law-view-json";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  components: {
    layoutContainer,
    componentName,
    lawViewSelection,
    lawViewJson,
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
};
</script>

<style></style>
