<template>
  <div v-if="tagTemp.editTag === 'IonButton'">
    <ion-property-color v-model="value" />
    <ion-property-expand v-model="value" />
    <ion-property-fill v-model="value" />
    <ion-property-size v-model="value" />
    <label for="inputIonButton" class="small">Button Title</label>
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
import IonPropertyFill from "./ion-property/ion-property-fill";
import IonPropertySize from "./ion-property/ion-property-size";
export default {
  name: "attribute-ion-button",
  components: {
    IonPropertySize,
    IonPropertyFill,
    IonPropertyExpand,
    IonPropertyColor,
  },
  props: {
    value: {},
    tagTemp: {},
    fetchTemp: {},
  },
};
</script>

<style scoped></style>
