export default {
  methods: {
    deleteMenuUid: function (menuConfigJsonMenu) {
      menuConfigJsonMenu.forEach((menu) => {
        if (menu.uid !== undefined) {
          delete menu.uid;
        }
      });
    },
    defaultComponent: function (menuConfigJsonMenu) {
      for (let i = 0; i < menuConfigJsonMenu.length; i++) {
        if (menuConfigJsonMenu[i].component === "Default") {
          menuConfigJsonMenu[
            i
          ].strUrl = `/page/${menuConfigJsonMenu[i].strUrl}`;
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
