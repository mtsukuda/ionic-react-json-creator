<template>
  <div class="bg-light p-3 mt-1 small">
    <pre>{{ raw }}</pre>
  </div>
</template>

<script>
export default {
  name: "json-view-menu-raw-json",
  props: {
    value: {},
  },
  computed: {
    raw() {
      return JSON.stringify(this.value, null, 2);
    },
  },
};
</script>

<style scoped></style>
