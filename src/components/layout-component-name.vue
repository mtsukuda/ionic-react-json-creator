<template>
  <form>
    <div class="form-group mt-2">
      <label for="inputComponentName">Component Name</label>
      <div class="col-sm">
        <input
          class="form-control"
          id="inputComponentName"
          type="text"
          placeholder="myComponent"
          v-model="value.name"
        />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "layout-component-name",
  props: {
    value: {},
  },
};
</script>

<style scoped></style>
