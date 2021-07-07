<template>
  <div v-if="tagTemp.editTag === 'IonLabel'">
    <ion-property-color v-model="value" />
    <ion-property-mode v-model="value" />
    <label for="inputIonLabel" class="small"
    >Label</label
    >
    <div class="col-sm">
      <input
          class="form-control"
          size="sm"
          id="inputIonLabel"
          type="text"
          placeholder="Card Title"
          v-model="value.content"
      />
    </div>
  </div>
</template>

<script>
import IonPropertyColor from "./ion-property/ion-property-color";
import IonPropertyMode from "./ion-property/ion-property-mode";
export default {
  name: "attribute-ion-label",
  components: {IonPropertyMode, IonPropertyColor},
  props: {
    value: {},
    tagTemp: {},
    fetchTemp: {}
  },
}
</script>

<style scoped>

</style>
