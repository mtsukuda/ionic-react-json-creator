<template>
  <div id="app" class="container-fluid">
    <div class="p-1">
      <h1>Ionic JSON Layout Manager</h1>
    </div>
    <component-name v-model="configJson"></component-name>
    <div class="row">
      <div class="col-6">
        <div class="mt-3">
          <layout-container
            v-model="configJson.tags[0].child.tags"
          ></layout-container>
        </div>
      </div>
      <div class="col-6">
        <law-view-selection v-model="viewConfig"></law-view-selection>
        <div class="bg-light p-3 mt-1 small">
          <pre>{{ raw }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import layoutContainer from "./components/layout-container.vue";
import componentName from "./components/component-name";
import lawViewSelection from "./components/law-view-selection";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  components: {
    layoutContainer,
    componentName,
    lawViewSelection,
  },
  mounted() {
    console.log(this.configJson.tags[0].child.tags);
  },
  computed: {
    raw() {
      let importList = [];
      this.compressImport(this.configJson.tags, importList);
      this.configJson.import = importList;
      let configShowJson = { ...this.configJson };
      if (!this.viewConfig.tags) delete configShowJson.tags;
      if (!this.viewConfig.imports) delete configShowJson.import;
      if (!this.viewConfig.fetch) delete configShowJson.fetch;
      return JSON.stringify(configShowJson, null, 2);
    },
  },
  methods: {
    compressImport(tags, importList) {
      tags.forEach((tag) => {
        if (this.isIon(tag.tag)) {
          if (!importList.find((value) => value.name === tag.tag))
            importList.push(this.ionImport(tag.tag));
        }
        if (tag.child && tag.child.tags) {
          this.compressImport(tag.child.tags, importList);
        }
      });
    },
    isIon(tag) {
      return !tag.indexOf("Ion");
    },
    ionImport(tag) {
      return {
        name: tag,
        from: "@ionic/react",
        type: "package",
        props: [],
      };
    },
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
                              props: [],
                            },
                            {
                              tag: "IonCardSubtitle",
                              content: "サブタイトル 2021",
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
