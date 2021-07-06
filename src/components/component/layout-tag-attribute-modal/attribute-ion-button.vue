<template>
  <div v-if="tagTemp.editTag === 'IonButton'">
    <ion-property-color v-model="value" />
    <ion-property-expand v-model="value" />
    <label for="inputIonButton" class="small"
    >Button Title</label
    >
    <div class="col-sm">
      <input
          class="form-control"
          size="sm"
          id="inputIonButton"
          type="text"
          placeholder="A button"
          v-model="value.content"
      />
    </div>
  </div>
</template>

<script>
import IonPropertyColor from "./ion-property/ion-property-color";
import IonPropertyExpand from "./ion-property/ion-property-expand";
export default {
  name: "attribute-ion-button",
  components: {IonPropertyExpand, IonPropertyColor},
  props: {
    value: {},
    tagTemp: {},
    fetchTemp: {}
  },
}
</script>

<style scoped>

</style>
