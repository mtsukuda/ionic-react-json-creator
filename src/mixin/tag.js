export default {
  methods: {
    numberingTagUID: function (tag) {
      let tagUID = this.uID();
      if (tag.uid) tag.uid = tagUID;
      else tag["uid"] = tagUID;
      if (tag.child && tag.child.tags) {
        for (let i = 0; i < tag.child.tags.length; i++)
          this.numberingTagUID(tag.child.tags[i]);
      }
    },
    targetNode: function (tags, tagUID) {
      let result = null;
      for (let i = 0; i < tags.length; i++) {
        result = this.findNode(tags[i], tagUID);
        if (result) return result;
      }
      if (result === null) throw `Could not find tag object [${tagUID}]`;
    },
    findNode: function (tag, tagUID) {
      let result = null;
      if (!tag.uid) return result;
      if (tag.uid === tagUID) return tag;
      if (tag.child && tag.child.tags) {
        for (let i = 0; i < tag.child.tags.length; i++) {
          result = this.findNode(tag.child.tags[i], tagUID);
          if (result) return result;
        }
      }
      return null;
    },
    responseList: function (fetch) {
      let responseResult = [];
      let _ = require("lodash");
      if (!fetch || !fetch.length) return responseResult;
      fetch.forEach((block) => {
        block.apis.forEach((api) => {
          let responseTypeName = api.responseTypeName;
          _.forEach(api.responseType, (type, label) => {
            responseResult.push(`this.state.${responseTypeName}.data.${label}`);
          });
        });
      });
      return responseResult;
    },
    updateTag: function (tags, tagUID, input) {
      let targetTag = this.targetNode(tags, tagUID);
      targetTag["code"] = input.code;
      targetTag["content"] = input.content;
      targetTag["readyProps"] = { ...input.readyProps };
      targetTag["rawProps"] = input.property;
      if (targetTag.props) targetTag.props.splice(0);
      this.readyPropertyList(targetTag["props"], targetTag.readyProps);
      this.propertyList(targetTag["props"], input.property);
    },
    readyPropertyList: function (props, readyProps) {
      Object.keys(readyProps).forEach((key) => {
        if (readyProps[key] === "" || readyProps[key] === null) return;
        props.push(`${key}=${readyProps[key]}`);
      });
    },
    propertyList: function (props, rawProperty) {
      let splitProperty = rawProperty.split("\n");
      splitProperty.forEach((val) => {
        if (val === "") return;
        props.push(val);
      });
    },
  },
};
