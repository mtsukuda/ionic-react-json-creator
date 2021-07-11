<template>
  <div v-if="tagTemp.editTag === 'IonFab'">
    <ion-property-activated v-model="value" />
    <ion-property-edge v-model="value" />
    <ion-property-horizontal v-model="value" />
    <ion-property-vertical v-model="value" />
  </div>
</template>

<script>
import IonPropertyActivated from "./ion-property/ion-property-activated";
import IonPropertyEdge from "./ion-property/ion-property-edge";
import IonPropertyHorizontal from "./ion-property/ion-property-horizontal";
import IonPropertyVertical from "./ion-property/ion-property-vertical";
export default {
  name: "attribute-ion-fab",
  components: {
    IonPropertyVertical,
    IonPropertyHorizontal,
    IonPropertyEdge,
    IonPropertyActivated,
  },
  props: {
    value: {},
    tagTemp: {},
    fetchTemp: {},
  },
};
</script>

<style scoped></style>
