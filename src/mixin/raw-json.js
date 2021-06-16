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
    lifeCycleMethodCalls: function (fetch, lifeCycleMethods) {
      fetch.forEach((fetchSet) => {
        if (fetchSet.lifeCycleMethods) {
          fetchSet.lifeCycleMethods.forEach((line) => {
            for (let i = 0; i < lifeCycleMethods.length; i++) {
              if (lifeCycleMethods[i].methodName === line) {
                lifeCycleMethods[i].code += `this.${fetchSet.name}();`;
                return;
              }
            }
            lifeCycleMethods.push({
              methodName: line,
              code: `this.${fetchSet.name}();`,
            });
          });
        }
      });
    },
    deleteInfoLifeCycleMethods: function (fetch) {
      fetch.forEach((eachFetch) => {
        if (eachFetch.lifeCycleMethods !== undefined) {
          delete eachFetch.lifeCycleMethods;
        }
      });
    },
    deleteFetchTemp: function (value) {
      delete value.fetchTemp;
    },
    deleteTagTemp: function (value) {
      delete value.tagTemp;
    },
    deleteTagUid: function (tags) {
      tags.forEach((tag) => {
        if (tag.uid !== undefined) {
          delete tag.uid;
        }
        if (tag.child && tag.child.tags) {
          this.deleteTagUid(tag.child.tags);
        }
      });
    },
    deleteCodeTag: function (tags) {
      tags.forEach((tag) => {
        if (tag.code !== undefined) {
          delete tag.code;
        }
        if (tag.child && tag.child.tags) {
          this.deleteCodeTag(tag.child.tags);
        }
      });
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
      if (showSwitch.fetch && !showSwitch.debug)
        this.deleteInfoLifeCycleMethods(configShowJson.fetch);
      if (!showSwitch.debug) this.deleteFetchTemp(configShowJson);
      if (!showSwitch.debug) this.deleteTagTemp(configShowJson);
      if (!showSwitch.tagUid) this.deleteTagUid(configShowJson.tags);
      if (!showSwitch.debug) this.deleteCodeTag(configShowJson.tags);
    },
  },
};
