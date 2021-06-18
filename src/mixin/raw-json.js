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
    renderBeforeReturnCalls: function (fetch, renderBeforeReturn) {
      let returnCondition = "";
      fetch.forEach((fetchSet) => {
        if (fetchSet.lifeCycleMethods) {
          returnCondition +=
            (returnCondition ? "||" : "") +
            `this.state.${fetchSet.name}.isLoading`;
        }
      });
      if (returnCondition) {
        renderBeforeReturn.push(
          `if(${returnCondition}){return <Loading />;}`
        );
      }
    },
    contentToCode: function (tags) {
      tags.forEach((tag) => {
        if (tag.code !== undefined) {
          if (tag.code) {
            tag.content = `{${tag.content}}`;
          }
        }
        if (tag.child && tag.child.tags) {
          this.contentToCode(tag.child.tags);
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
      this.contentToCode(configShowJson.tags);
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
    finalJson: function (originJson, showSwitch) {
      let importList = [];
      this.compressImport(originJson.tags, importList);
      this.fetchImport(originJson.fetch, importList);
      originJson.import = importList;
      let lifeCycleMethods = [];
      this.lifeCycleMethodCalls(originJson.fetch, lifeCycleMethods);
      originJson.lifeCycleMethods = lifeCycleMethods;
      originJson.renderBeforeReturn.splice(0);
      this.renderBeforeReturnCalls(originJson.fetch, originJson.renderBeforeReturn);
      let clone = require("clone");
      let configShowJson = clone(originJson);
      this.formattedJson(configShowJson, showSwitch);
      return JSON.stringify(configShowJson, null, 2);
    },
  },
};
