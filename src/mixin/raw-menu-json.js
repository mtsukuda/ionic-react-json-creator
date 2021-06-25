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
    formattedJson: function (menuConfig, showSwitch) {
      this.defaultComponent(menuConfig.menu);
      if (!showSwitch.menuUid) this.deleteMenuUid(menuConfig.menu);
    },
    finalJson: function (originMenuConfig, showSwitch) {
      let clone = require("clone");
      let menuConfig = clone(originMenuConfig);
      this.formattedJson(menuConfig, showSwitch);
      return JSON.stringify(menuConfig, null, 2);
    },
  },
};
