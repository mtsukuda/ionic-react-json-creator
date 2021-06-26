<template>
  <div class="container pl-1 pr-1">
    <div v-for="component in value">{{ component.name }}</div>
  </div>
</template>

<script>
export default {
  name: "component-list-container",
  props: {
    value: {},
  },
  methods: {},
};
</script>

<style scoped></style>
