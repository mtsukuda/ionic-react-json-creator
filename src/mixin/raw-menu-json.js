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
    urlCorrection: function (menuConfigJsonMenu) {
      for (let i = 0; i < menuConfigJsonMenu.length; i++) {
        if (menuConfigJsonMenu[i].strUrl[0] !== "/") {
          menuConfigJsonMenu[i].strUrl = `/${menuConfigJsonMenu[i].strUrl}`;
        }
        menuConfigJsonMenu[i].strUrl = menuConfigJsonMenu[
          i
        ].strUrl = menuConfigJsonMenu[i].strUrl.replaceAll(" ", "-");
      }
    },
    deleteMenuTemp: function (menuConfigJson) {
      if (menuConfigJson.menuTemp !== undefined) {
        delete menuConfigJson.menuTemp;
      }
    },
    deleteComponents: function (menuConfigJson) {
      if (menuConfigJson.components !== undefined) {
        delete menuConfigJson.components;
      }
    },
    formattedJson: function (menuConfigJson, showSwitch) {
      this.defaultComponent(menuConfigJson.menu);
      this.urlCorrection(menuConfigJson.menu);
      if (!showSwitch.debug) this.deleteMenuTemp(menuConfigJson);
      if (!showSwitch.debug) this.deleteComponents(menuConfigJson);
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
