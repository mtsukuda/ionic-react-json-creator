<template>
  <div v-if="tagTemp.editTag === 'IonCardTitle'">
    <ion-property-color v-model="value" />
    <ion-property-mode v-model="value" />
    <label for="inputIonCardTitle" class="small"
      >Card Title<b-form-checkbox
        id="use-fetch-code"
        name="use-fetch-code"
        value="yes"
        unchecked-value=""
        v-model="value.code"
      >
        Use Fetch Code
      </b-form-checkbox></label
    >
    <div class="col-sm">
      <input
        class="form-control"
        size="sm"
        id="inputIonCardTitle"
        type="text"
        placeholder="Card Title"
        v-model="value.content"
        list="list-response"
      />
    </div>
    <datalist id="list-response">
      <option v-for="list in fetchTemp.responseList">{{ list }}</option>
    </datalist>
  </div>
</template>

<script>
import IonPropertyColor from "./ion-property/ion-property-color";
import IonPropertyMode from "./ion-property/ion-property-mode";
export default {
  name: "attribute-ion-card-title",
  components: { IonPropertyMode, IonPropertyColor },
  props: {
    value: {},
    tagTemp: {},
    fetchTemp: {},
  },
};
</script>

<style scoped></style>
