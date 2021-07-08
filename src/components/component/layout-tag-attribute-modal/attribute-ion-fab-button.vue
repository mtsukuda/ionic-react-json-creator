<template>
  <div v-if="tagTemp.editTag === 'IonFabButton'">
    <ion-property-activated v-model="value" />
    <ion-property-close-icon v-model="value" />
    <ion-property-color v-model="value" />
    <ion-property-disable v-model="value" />

    <label for="inputIonCardSubTitle" class="small"
    >Sub Title<b-form-checkbox
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
          id="inputIonCardSubTitle"
          type="text"
          placeholder="Sub Title"
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
import IonPropertyActivated from "./ion-property/ion-property-activated";
import IonPropertyCloseIcon from "./ion-property/ion-property-close-icon";
import IonPropertyColor from "./ion-property/ion-property-color";
import IonPropertyDisable from "./ion-property/ion-property-disabled";
export default {
  name: "attribute-ion-fab-button",
  components: {IonPropertyDisable, IonPropertyColor, IonPropertyCloseIcon, IonPropertyActivated},
  props: {
    value: {},
    tagTemp: {},
    fetchTemp: {}
  },
}
</script>

<style scoped>

</style>
