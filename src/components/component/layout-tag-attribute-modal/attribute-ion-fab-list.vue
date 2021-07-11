<template>
  <div v-if="tagTemp.editTag === 'IonFabList'">
    <ion-property-side v-model="value" />
  </div>
</template>

<script>
import IonPropertySide from "./ion-property/ion-property-side";
export default {
  name: "attribute-ion-fab-list",
  components: {
    IonPropertySide,
  },
  props: {
    value: {},
    tagTemp: {},
    fetchTemp: {},
  },
};
</script>

<style scoped></style>
