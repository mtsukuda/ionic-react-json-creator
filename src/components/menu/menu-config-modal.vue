<template>
  <modal
    name="menu-config-modal"
    :draggable="true"
    :resizable="true"
    :scrollable="true"
    height="auto"
  >
    <div class="modal-body">
      <div>
        <menu-config-property-general-input
          v-model="value"
          model-key="strTitle"
          label="Menu Title"
          id="input-menu"
          placeholder="The Menu Title"
        />
        <menu-config-property-general-input
          v-model="value"
          model-key="strUrl"
          label="URL"
          id="input-url"
          placeholder="link-something"
        />
        <menu-config-property-general-input-datalist
          v-model="value"
          model-key="icon"
          label="Menu Icon"
          id="input-icon"
          placeholder="Icon Name"
          data-list-name="list-icon"
          :data-list="ionIcons"
          link-description="Ionic Icon Reference"
          link-description-url="https://ionic.io/ionicons/v4"
        />
        <div>
          <b-form-group
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm="9"
            content-cols-lg="9"
            label="Component"
            label-for="input-component"
          >
            <input
              class="form-control"
              size="sm"
              id="input-component"
              type="text"
              placeholder="Component Name"
              v-model="value.json.menuTemp.component"
              list="list-components"
              onfocus="this.select()"
            />
          </b-form-group>
          <datalist id="list-components">
            <option v-for="component in value.json.components">
              {{ component }}
            </option>
            <option v-for="component in configList.list">
              {{ component.name + "Page" }}
            </option>
          </datalist>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button
        v-on:click="hide"
        @click="$emit('close')"
        class="btn btn-outline-secondary property-btn btn-sm m-1"
      >
        CLOSE
      </button>
      <button
        v-on:click="commit"
        class="btn btn-outline-primary property-btn btn-sm m-1"
        :disabled="okDisable"
      >
        OK
      </button>
    </div>
  </modal>
</template>

<script>
import tag from "../../mixin/tag";
import ion from "../../mixin/ion";
import MenuConfigPropertyGeneralInput from "./menu-config/menu-config-property-general-input";
import MenuConfigPropertyGeneralInputDatalist from "./menu-config/menu-config-property-general-input-datalist";

export default {
  name: "menu-config-modal",
  components: {
    MenuConfigPropertyGeneralInputDatalist,
    MenuConfigPropertyGeneralInput,
  },
  mixins: [tag, ion],
  props: {
    value: {},
    configList: {},
  },
  data() {
    return {};
  },
  computed: {
    okDisable() {
      return !this.value.json.menuTemp.strTitle.length;
    },
  },
  methods: {
    hide: function () {
      this.$modal.hide("menu-config-modal");
    },
    commit: function () {
      let menuTemp = this.value.json.menuTemp;
      let targetMenu = this.targetNode(this.value.json.menu, menuTemp.uid);
      targetMenu.uid = menuTemp.uid;
      targetMenu.strTitle = menuTemp.strTitle;
      targetMenu.strUrl = menuTemp.strUrl;
      targetMenu.icon = menuTemp.icon;
      targetMenu.component = menuTemp.component;
      this.hide();
    },
  },
};
</script>

<style scoped></style>
