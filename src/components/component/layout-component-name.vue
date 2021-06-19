<template>
  <form>
    <div class="form-group mt-2">
      <label for="inputComponentName">Component Name</label>
      <div class="col-sm">
        <input
          class="form-control"
          id="inputComponentName"
          type="text"
          placeholder="MyComponent"
          v-model="value.name"
          @blur="setCapitalize"
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
  methods: {
    setCapitalize: function () {
      this.value.name =
        this.value.name.charAt(0).toUpperCase() + this.value.name.slice(1);
    },
  },
};
</script>

<style scoped></style>
