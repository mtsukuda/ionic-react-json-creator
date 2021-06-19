<template>
  <div class="pt-4">
    <button
      v-on:click="jsonDownload()"
      v-bind:disabled="existComponentName()"
      class="btn btn-outline-info property-btn btn-sm m-1"
    >
      <b-icon-download></b-icon-download>
      PAGE
    </button>
  </div>
</template>

<script>
import rawJson from "../../mixin/raw-json";
const clone = require("clone");
export default {
  name: "layout-page-download",
  mixins: [rawJson],
  props: {
    value: {},
  },
  data() {
    return {
      configPageJson: {
        name: "SamplePage",
        import: [
          {
            name: "IonPage",
            from: "@ionic/react",
            type: "package",
            props: [],
          },
          {
            name: "IonHeader",
            from: "@ionic/react",
            type: "package",
            props: [],
          },
          {
            name: "IonToolbar",
            from: "@ionic/react",
            type: "package",
            props: [],
          },
          {
            name: "IonButtons",
            from: "@ionic/react",
            type: "package",
            props: [],
          },
          {
            name: "IonMenuButton",
            from: "@ionic/react",
            type: "package",
            props: [],
          },
          {
            name: "IonTitle",
            from: "@ionic/react",
            type: "package",
            props: [],
          },
          {
            name: "IonContent",
            from: "@ionic/react",
            type: "package",
            props: [],
          },
        ],
        tags: [
          {
            tag: "IonPage",
            props: [],
            child: {
              tags: [
                {
                  tag: "IonHeader",
                  props: [],
                  child: {
                    tags: [
                      {
                        tag: "IonToolbar",
                        props: [],
                        child: {
                          tags: [
                            {
                              tag: "IonButtons",
                              props: ['slot="start"'],
                              child: {
                                tags: [
                                  {
                                    tag: "IonMenuButton",
                                    single: "yes",
                                    props: [],
                                  },
                                ],
                              },
                            },
                            {
                              tag: "IonTitle",
                              noCR: "yes",
                              props: [],
                              content: "Sample Page",
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  tag: "IonContent",
                  props: ["fullscreen"],
                  child: {
                    tags: [
                      {
                        tag: "IonHeader",
                        props: ['collapse="condense"'],
                        child: {
                          tags: [
                            {
                              tag: "IonToolbar",
                              props: [],
                              child: {
                                tags: [
                                  {
                                    tag: "IonTitle",
                                    noCR: "yes",
                                    props: ['size="large"'],
                                    content: "Sample Page",
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
          },
        ],
      },
    };
  },
  methods: {
    existComponentName: function () {
      return this.value.name.length <= 3;
    },
    jsonDownload: function () {
      let configPageJson = clone(this.configPageJson);
      let componentName =
        this.value.name[0].toUpperCase() + this.value.name.slice(1);
      let pageName = `${componentName}Page`;
      let _ = require("lodash");
      let downloadFileName = _.snakeCase(pageName).replaceAll("_", "-");
      configPageJson.name = pageName;
      configPageJson.import.push({
        name: `${componentName}`,
        from: `../user-components/${componentName}`,
        type: "default",
        props: [],
      });
      configPageJson.tags[0].child.tags[1].child.tags.push({
        tag: `${componentName}`,
        props: [],
        single: "yes",
      });
      const blob = new Blob([JSON.stringify(configPageJson, null, 2)], {
        type: "application/json",
      });
      saveAs(blob, `${downloadFileName}.json`);
    },
  },
};
</script>

<style scoped></style>
