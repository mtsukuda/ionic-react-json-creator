<template>
  <div v-if="tagTemp.editTag === 'IonChip'">
    <ion-property-color v-model="value" />
    <ion-property-disable v-model="value" />
    <ion-property-mode v-model="value" />
    <ion-property-outline v-model="value" />
  </div>
</template>

<script>
import IonPropertyColor from "./ion-property/ion-property-color";
import IonPropertyMode from "./ion-property/ion-property-mode";
import IonPropertyDisable from "./ion-property/ion-property-disable";
import IonPropertyOutline from "./ion-property/ion-property-outline";
export default {
  name: "attribute-ion-chip",
  components: {IonPropertyOutline, IonPropertyDisable, IonPropertyColor, IonPropertyMode},
  props: {
    value: {},
    tagTemp: {},
    fetchTemp: {}
  },
}
</script>

<style scoped>

</style>
