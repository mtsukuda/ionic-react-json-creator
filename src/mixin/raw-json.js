export default {
  methods: {
    compressImport: function (tags, importList) {
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
    fetchImport: function (fetch, importList) {
      if (fetch && fetch.length > 0) {
        importList.push({
          name: "* as fetch",
          from: "../components/fetch",
          type: "default",
          props: [],
        });
      }
    },
    deleteRawProps: function (tags) {
      tags.forEach((tag) => {
        if (tag.rawProps !== undefined) {
          delete tag.rawProps;
        }
        if (tag.child && tag.child.tags) {
          this.deleteRawProps(tag.child.tags);
        }
      });
    },
    isIon: function (tag) {
      return !tag.indexOf("Ion");
    },
    ionImport: function (tag) {
      return {
        name: tag,
        from: "@ionic/react",
        type: "package",
        props: [],
      };
    },
    formattedJson: function (configShowJson, showSwitch) {
      delete configShowJson.update;
      if (!showSwitch.tags) delete configShowJson.tags;
      if (!showSwitch.imports) delete configShowJson.import;
      if (!showSwitch.fetch) delete configShowJson.fetch;
      if (showSwitch.tags && !showSwitch.debug)
        this.deleteRawProps(configShowJson.tags);
    },
  },
};
