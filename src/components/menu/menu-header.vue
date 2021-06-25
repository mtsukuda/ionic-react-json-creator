<template>
  <form>
    <div class="form-group mt-2">
      <label for="inputMenuHeaderTitle">Menu Header Title</label>
      <div class="col-sm">
        <input
          class="form-control"
          id="inputMenuHeaderTitle"
          type="text"
          placeholder="MyComponent"
          v-model="value.json.header.strTitle"
        />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "menu-header",
  props: {
    value: {},
  },
};
</script>

<style scoped></style>
