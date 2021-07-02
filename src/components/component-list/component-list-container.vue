<template>
  <div class="container pl-1 pr-1">
    <div v-for="(component, index) in value.list">
      <div class="border rounded layout-container-div mb-1">
        <div class="p-2">
          Component Name: <strong>{{ component.name }}</strong>
        </div>
        <div class="ml-1">
          <button
            v-on:click="editComponent(component)"
            class="btn btn-outline-info property-btn btn-sm m-1"
          >
            EDIT COMPONENT
          </button>
          <button
            v-on:click="deleteComponent(index)"
            class="btn btn-outline-danger property-btn btn-sm m-1"
          >
            <b-icon icon="trash" aria-label="Delete"></b-icon>
          </button>
        </div>
      </div>
    </div>
    <div class="mt-2">
      <b-button variant="outline-primary" v-on:click="addComponent"
        ><b-icon icon="plus" aria-label="append"
      /></b-button>
    </div>
  </div>
</template>

<script>
import appData from "../../mixin/app-data";
import helper from "../../mixin/helper";

export default {
  name: "component-list-container",
  mixins: [appData, helper],
  props: {
    value: {},
  },
  methods: {
    editComponent: function (component) {
      this.value.temp.status = "component";
      this.value.temp.activeConfigUID = component.uid;
    },
    deleteComponent: function (index) {
      this.value.list.splice(index, 1);
    },
    addComponent: function () {
      this.addConfig(this.value.list);
    },
  },
};
</script>

<style scoped></style>
