<template>
  <div class="container pl-1 pr-1">
    <div v-for="menu in value">
      {{ menu.strTitle }}
    </div>
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
