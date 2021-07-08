<template>
  <div v-if="tagTemp.editTag === 'IonFabButton'">
    <ion-property-activated v-model="value" />
    <ion-property-close-icon v-model="value" />
    <ion-property-color v-model="value" />
    <ion-property-disabled v-model="value" />
    <label for="inputIonFabButtonDownload" class="small">Download</label>
    <div class="col-sm">
      <input
          class="form-control"
          size="sm"
          id="inputIonFabButtonDownload"
          type="text"
          placeholder="Download URL"
          v-model="value.download"
      />
    </div>
    <label for="inputIonFabButtonHref" class="small">href</label>
    <div class="col-sm">
      <input
          class="form-control"
          size="sm"
          id="inputIonFabButtonHref"
          type="text"
          placeholder="href"
          v-model="value.href"
      />
    </div>
    <ion-property-mode v-model="value" />
    <label for="inputIonFabButtonRel" class="small">rel</label>
    <div class="col-sm">
      <input
          class="form-control"
          size="sm"
          id="inputIonFabButtonRel"
          type="text"
          placeholder="link type"
          v-model="value.rel"
      />
    </div>
    <ion-property-router-animation v-model="value" />
    <ion-property-router-direction v-model="value" />
    <ion-property-show v-model="value" />
    <ion-property-size v-model="value" />
    <ion-property-target v-model="value" />
    <ion-property-translucent v-model="value" />
    <ion-property-type v-model="value" />
  </div>
</template>

<script>
import IonPropertyActivated from "./ion-property/ion-property-activated";
import IonPropertyCloseIcon from "./ion-property/ion-property-close-icon";
import IonPropertyColor from "./ion-property/ion-property-color";
import IonPropertyDisabled from "./ion-property/ion-property-disabled";
import IonPropertyMode from "./ion-property/ion-property-mode";
import IonPropertyRouterAnimation from "./ion-property/ion-property-router-animation";
import IonPropertyRouterDirection from "./ion-property/ion-property-router-direction";
import IonPropertyShow from "./ion-property/ion-property-show";
import IonPropertySize from "./ion-property/ion-property-size";
import IonPropertyTarget from "./ion-property/ion-property-target";
import IonPropertyTranslucent from "./ion-property/ion-property-translucent";
import IonPropertyType from "./ion-property/ion-property-type";
export default {
  name: "attribute-ion-fab-button",
  components: {
    IonPropertyType,
    IonPropertyTranslucent,
    IonPropertyTarget,
    IonPropertySize,
    IonPropertyShow,
    IonPropertyRouterDirection,
    IonPropertyRouterAnimation,
    IonPropertyMode, IonPropertyDisabled, IonPropertyColor, IonPropertyCloseIcon, IonPropertyActivated},
  props: {
    value: {},
    tagTemp: {},
    fetchTemp: {}
  },
}
</script>

<style scoped>

</style>
