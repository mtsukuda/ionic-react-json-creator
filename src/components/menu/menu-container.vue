<template>
  <div class="container pl-1 pr-1">
    <div v-for="(menu, index) in value">
      <div class="border rounded layout-container-div mb-1">
        <div class="p-2">
          {{ menu.strTitle }}
        </div>
        <div class="ml-1">
          <button
            v-on:click=""
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
        ><b-icon icon="plus" aria-label="append"></b-icon
      ></b-button>
    </div>
  </div>
</template>

<script>
import tag from "../../mixin/tag";

export default {
  name: "menu-container",
  mixins: [tag],
  props: {
    value: {},
    configJson: {},
  },
  methods: {
    deleteTag: function (index) {
      this.value.splice(index, 1);
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
