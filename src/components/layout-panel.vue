<template>
  <div class="container">
    <b-nav-item-dropdown text="追加 [+]">
      <b-dropdown-item href="#" class="dropdown-mine">Card</b-dropdown-item>
      <b-dropdown-item href="#" class="dropdown-mine"
        >Card Header</b-dropdown-item
      >
      <b-dropdown-item href="#" class="dropdown-mine"
        >Card Content</b-dropdown-item
      >
      <b-dropdown-item href="#" class="dropdown-mine">Picture</b-dropdown-item>
    </b-nav-item-dropdown>

    <div class="card box-shadow p-2">
      <div v-for="item in arrs">{{ item.subject }}: {{ item.score }}</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "layoutPanel",
  props: {
    arrs: Array,
  },
};
</script>

<style scoped>
.layout-panel-root {
  width: 100%;
}
</style>
