export default {
  methods: {
    deleteMenuUid: function (tags) {
      tags.forEach((tag) => {
        if (tag.uid !== undefined) {
          delete tag.uid;
        }
      });
    },
    formattedJson: function (menuJson, showSwitch) {
      if (!showSwitch.menuUid) this.deleteMenuUid(menuJson);
    },
    finalJson: function (originMenuJson, showSwitch) {
      let clone = require("clone");
      let menuJson = clone(originMenuJson);
      this.formattedJson(menuJson, showSwitch);
      return JSON.stringify(menuJson, null, 2);
    },
  },
};
