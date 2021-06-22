<template>
  <div class="container pl-1 pr-1">
    <div v-for="menu in value">
      <div class="border rounded layout-container-div mb-1">
        <div class="p-1">
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
            v-on:click=""
            class="btn btn-outline-danger property-btn btn-sm m-1"
          >
            <b-icon icon="trash" aria-label="Delete"></b-icon>
          </button>
        </div>
      </div>
    </div>
    <b-button variant="outline-primary" v-on:click=""
      ><b-icon icon="plus" aria-label="append"></b-icon
    ></b-button>
  </div>
</template>

<script>
export default {
  name: "menu-container",
  props: {
    value: {},
    configJson: {},
  },
};
</script>

<style scoped></style>
