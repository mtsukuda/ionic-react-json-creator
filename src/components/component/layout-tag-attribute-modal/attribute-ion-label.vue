<template>
  <div v-if="tagTemp.editTag === 'IonLabel'">
    <ion-property-color v-model="value" />
    <ion-property-mode v-model="value" />
    <ion-property-position v-model="value" />
    <label for="inputIonLabel" class="small">Label</label>
    <div class="col-sm">
      <input
        class="form-control"
        size="sm"
        id="inputIonLabel"
        type="text"
        placeholder="Label Name"
        v-model="value.content"
      />
    </div>
  </div>
</template>

<script>
import IonPropertyColor from "./ion-property/ion-property-color";
import IonPropertyMode from "./ion-property/ion-property-mode";
import IonPropertyPosition from "./ion-property/ion-property-position";
export default {
  name: "attribute-ion-label",
  components: { IonPropertyPosition, IonPropertyMode, IonPropertyColor },
  props: {
    value: {},
    tagTemp: {},
    fetchTemp: {},
  },
};
</script>

<style scoped></style>
