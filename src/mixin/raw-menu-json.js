export default {
  methods: {
    deleteMenuUid: function (tags) {
      tags.forEach((tag) => {
        if (tag.uid !== undefined) {
          delete tag.uid;
        }
      });
    },
    defaultComponent: function (menuConfigJson) {
      for (let i = 0; i < menuConfigJson.length; i++) {
        if (menuConfigJson[i].component === "Default") {
          menuConfigJson[i].strUrl = `/page/${menuConfigJson[i].strUrl}`;
        }
      }
    },
    deleteMenuTemp: function (menuConfigJson) {
      if (menuConfigJson.menuTemp !== undefined) {
        delete menuConfigJson.menuTemp;
      }
    },
    formattedJson: function (menuConfigJson, showSwitch) {
      this.defaultComponent(menuConfigJson.menu);
      if (!showSwitch.debug) this.deleteMenuTemp(menuConfigJson);
      if (!showSwitch.menuUid) this.deleteMenuUid(menuConfigJson.menu);
    },
    finalJson: function (originMenuConfigJson, showSwitch) {
      let clone = require("clone");
      let menuConfigJson = clone(originMenuConfigJson);
      this.formattedJson(menuConfigJson, showSwitch);
      return JSON.stringify(menuConfigJson, null, 2);
    },
  },
};
