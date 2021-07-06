<template>
  <div v-if="tagTemp.editTag === 'IonCardHeader'">
    <ion-property-color v-model="value" />
    <ion-property-mode v-model="value" />
  </div>
</template>

<script>
import IonPropertyColor from "./ion-property/ion-property-color";
import IonPropertyMode from "./ion-property/ion-property-mode";
export default {
  name: "attribute-ion-card-header",
  components: {IonPropertyColor, IonPropertyMode},
  props: {
    value: {},
    tagTemp: {},
    fetchTemp: {}
  },
}
</script>

<style scoped>

</style>
