<template>
  <div class="container pl-1 pr-1">
    <div v-for="(menu, index) in value.menu">
      <div class="border rounded layout-container-div mb-1">
        <div class="p-2">
          {{ menu.strTitle }}
        </div>
        <div class="ml-1">
          <button
            v-on:click="showConfigModal(menu)"
            class="btn btn-outline-info property-btn btn-sm m-1"
          >
            PROPERTY
          </button>
          <button
            v-on:click="deleteTag(index)"
            class="btn btn-outline-danger property-btn btn-sm m-1"
          >
            <b-icon icon="trash" aria-label="Delete"></b-icon>
          </button>
        </div>
      </div>
    </div>
    <div class="mt-2">
      <b-button variant="outline-primary" v-on:click="addMenu"
        ><b-icon icon="plus" aria-label="append"
      /></b-button>
    </div>
    <menu-config-modal v-model="value" />
  </div>
</template>

<script>
import tag from "../../mixin/tag";
import MenuConfigModal from "./menu-config-modal";

export default {
  name: "menu-container",
  components: { MenuConfigModal },
  mixins: [tag],
  props: {
    value: {},
  },
  methods: {
    deleteTag: function (index) {
      this.value.menu.splice(index, 1);
    },
    showConfigModal: function (menu) {
      let targetMenu = this.targetNode(this.value.menu, menu.uid);
      let menuTemp = this.value.menuTemp;
      menuTemp.strTitle = targetMenu.strTitle;
      menuTemp.icon = targetMenu.icon;
      this.$modal.show("menu-config-modal");
    },
    addMenu: function () {
      this.value.push({
        uid: this.tagUID(),
        strTitle: "Sample Menu",
        strUrl: "/page/sampleMenu",
        icon: "extensionPuzzle",
        component: "Default",
      });
    },
  },
};
</script>

<style scoped></style>
