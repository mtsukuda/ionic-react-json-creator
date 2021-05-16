<template>
  <div class="container pl-1 pr-1">
    <div class="border rounded fetch-container-div mb-1">
      <div class="h5 m-2 pl-1 mb-1">fetch</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fetch-container",
  props: {
    value: {},
  },
};
</script>

<style scoped>
.fetch-container-div {
  border-color: grey;
}
</style>
