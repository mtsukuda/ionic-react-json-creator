export default {
  methods: {
    deleteMenuUid: function (tags) {
      tags.forEach((tag) => {
        if (tag.uid !== undefined) {
          delete tag.uid;
        }
      });
    },
    formattedJson: function (configShowJson, showSwitch) {
      if (!showSwitch.menuUid) this.deleteMenuUid(configShowJson.tags);
    },
    finalJson: function (originJson, showSwitch) {
      let clone = require("clone");
      let configShowJson = clone(originJson);
      this.formattedJson(configShowJson, showSwitch);
      return JSON.stringify(configShowJson, null, 2);
    },
  },
};
