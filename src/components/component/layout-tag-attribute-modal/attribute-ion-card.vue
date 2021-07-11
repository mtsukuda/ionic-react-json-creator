<template>
  <div v-if="tagTemp.editTag === 'IonCard'">
    <ion-property-color v-model="value" />
  </div>
</template>

<script>
import IonPropertyButton from "./ion-property/ion-property-button";
import IonPropertyColor from "./ion-property/ion-property-color";
export default {
  name: "attribute-ion-card",
  components: { IonPropertyColor, IonPropertyButton },
  props: {
    value: {},
    tagTemp: {},
    fetchTemp: {},
  },
};
</script>

<style scoped></style>
