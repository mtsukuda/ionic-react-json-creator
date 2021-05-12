<template>
  <div class="bg-light p-3 mt-1 small">
    <pre>{{ raw }}</pre>
  </div>
</template>

<script>
const clone = require("clone");
export default {
  name: "law-view-json",
  props: {
    value: {},
    viewConfig: {},
  },
  computed: {
    raw() {
      let importList = [];
      this.compressImport(this.value.tags, importList);
      this.value.import = importList;
      let configShowJson = clone(this.value);
      if (!this.viewConfig.tags) delete configShowJson.tags;
      if (!this.viewConfig.imports) delete configShowJson.import;
      if (!this.viewConfig.fetch) delete configShowJson.fetch;
      if (!this.viewConfig.debug) this.deleteRawProps(configShowJson.tags);
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
    deleteRawProps(tags) {
      tags.forEach((tag) => {
        if (tag.rawProps !== undefined) {
          delete tag.rawProps;
        }
        if (tag.child && tag.child.tags) {
          this.deleteRawProps(tag.child.tags);
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
};
</script>

<style scoped></style>
