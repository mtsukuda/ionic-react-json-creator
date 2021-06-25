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
        <label for="inputMenuCaption">Menu Title</label>
        <div class="col-sm mb-2">
          <input
            class="form-control input-sm"
            id="inputMenuCaption"
            type="text"
            placeholder="Menu Title"
            v-model="value.menuTemp.strTitle"
          />
        </div>
        <label for="inputMenuURL">URL</label>
        <div class="col-sm mb-2">
          <input
            class="form-control input-sm"
            id="inputMenuURL"
            type="text"
            placeholder="myPage"
            v-model="value.menuTemp.strUrl"
          />
        </div>
        <label for="inputMenuIcon">Menu Icon</label>
        <div class="col-sm mb-2">
          <input
            class="form-control input-sm"
            id="inputMenuIcon"
            type="text"
            placeholder="Menu Icon"
            v-model="value.menuTemp.icon"
            list="list-icon"
          />
          <datalist id="list-icon">
            <option v-for="icon in value.icons">{{ icon }}</option>
          </datalist>
        </div>
        <label for="inputMenuComponent">Component</label>
        <div class="col-sm mb-2">
          <input
            class="form-control input-sm"
            id="inputMenuComponent"
            type="text"
            placeholder="Component Name"
            v-model="value.menuTemp.component"
            list="list-component"
          />
          <datalist id="list-component">
            <option v-for="component in value.components">
              {{ component }}
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

export default {
  name: "menu-config-modal",
  mixins: [tag],
  props: {
    value: {},
  },
  data() {
    return {};
  },
  computed: {
    okDisable() {
      return !this.value.menuTemp.strTitle.length;
    },
  },
  methods: {
    hide: function () {
      this.$modal.hide("menu-config-modal");
    },
    commit: function () {
      let menuTemp = this.value.menuTemp;
      let targetMenu = this.targetNode(this.value.menu, menuTemp.uid);
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
