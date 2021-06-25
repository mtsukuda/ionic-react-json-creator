export default {
  methods: {
    deleteMenuUid: function (tags) {
      tags.forEach((tag) => {
        if (tag.uid !== undefined) {
          delete tag.uid;
        }
      });
    },
    defaultComponent: function (menuJson) {
      for (let i = 0; i < menuJson.length; i++) {
        if (menuJson[i].component === "Default") {
          menuJson[i].strUrl = `/page/${menuJson[i].strUrl}`;
        }
      }
    },
    formattedJson: function (menuJson, showSwitch) {
      this.defaultComponent(menuJson);
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
