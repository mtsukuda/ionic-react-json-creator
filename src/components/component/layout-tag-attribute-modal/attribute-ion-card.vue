<template>
  <div v-if="tagTemp.editTag === 'IonCard'">
    <ion-property-button v-model="value" />
  </div>
</template>

<script>
import IonPropertyButton from "./ion-property/ion-property-button";
export default {
  name: "attribute-ion-card",
  components: {IonPropertyButton},
  props: {
    value: {},
    tagTemp: {},
    fetchTemp: {}
  },
}
</script>

<style scoped>

</style>
