<template>
  <div>
    <div class="row">
      <div class="col-6">
        <div class="mt-3">
          <component-list-container v-model="value" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentListContainer from "./component-list/component-list-container";

export default {
  name: "component-list-template",
  components: { ComponentListContainer },
  props: {
    value: {},
  },
};
</script>

<style scoped></style>
