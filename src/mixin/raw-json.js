export default {
  data() {
    return {
      unUseTargets: ["content", "noCR"],
    };
  },
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
    loadingImport: function (fetch, importList) {
      let loading = false;
      fetch.forEach((fetchSet) => {
        if (fetchSet.lifeCycleMethods) {
          loading = true;
        }
      });
      if (loading) {
        importList.push({
          name: "Loading",
          from: "../components/loading",
          type: "package",
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
          fetchSet.apis.forEach((api) => {
            returnCondition +=
              (returnCondition ? "||" : "") +
              `this.state.${api.responseTypeName}.isLoading`;
          });
        }
      });
      if (returnCondition) {
        renderBeforeReturn.push(`if(${returnCondition}){return <Loading />;}`);
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
    deleteUnUseItem: function (tags) {
      tags.forEach((tag) => {
        for (let i = 0; i < this.unUseTargets.length; i++) {
          if (tag[this.unUseTargets[i]] === "") {
            delete tag[this.unUseTargets[i]];
          }
        }
        if (tag.child && tag.child.tags) {
          this.deleteUnUseItem(tag.child.tags);
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
      if (!showSwitch.debug) this.deleteUnUseItem(configShowJson.tags);
    },
    finalJson: function (originJson, showSwitch) {
      let importList = [];
      this.compressImport(originJson.tags, importList);
      originJson.import = importList;
      originJson.lifeCycleMethods.splice(0);
      this.lifeCycleMethodCalls(originJson.fetch, originJson.lifeCycleMethods);
      this.fetchImport(originJson.fetch, originJson.import);
      originJson.renderBeforeReturn.splice(0);
      this.renderBeforeReturnCalls(
        originJson.fetch,
        originJson.renderBeforeReturn
      );
      this.loadingImport(originJson.fetch, originJson.import);
      let clone = require("clone");
      let configShowJson = clone(originJson);
      this.formattedJson(configShowJson, showSwitch);
      return JSON.stringify(configShowJson, null, 2);
    },
  },
};
