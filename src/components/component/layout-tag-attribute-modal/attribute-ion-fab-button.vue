<template>
  <div v-if="tagTemp.editTag === 'IonFabButton'">
    <ion-property-activated v-model="value" />
    <ion-property-close-icon v-model="value" />
    <ion-property-color v-model="value" />
    <ion-property-disabled v-model="value" />
    <ion-property-general-input
      v-model="value"
      model-key="download"
      label="Download"
      id="input-download-url"
      placeholder="http://something.com"
    />
    <ion-property-general-input
      v-model="value"
      model-key="href"
      label="href"
      id="input-download-href"
      placeholder="href"
    />
    <ion-property-mode v-model="value" />
    <ion-property-general-input
      v-model="value"
      model-key="rel"
      label="rel"
      id="input-download-rel"
      placeholder="link type"
    />
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
import IonPropertyGeneralInput from "./ion-property/ion-property-general-input";
export default {
  name: "attribute-ion-fab-button",
  components: {
    IonPropertyGeneralInput,
    IonPropertyType,
    IonPropertyTranslucent,
    IonPropertyTarget,
    IonPropertySize,
    IonPropertyShow,
    IonPropertyRouterDirection,
    IonPropertyRouterAnimation,
    IonPropertyMode,
    IonPropertyDisabled,
    IonPropertyColor,
    IonPropertyCloseIcon,
    IonPropertyActivated,
  },
  props: {
    value: {},
    tagTemp: {},
    fetchTemp: {},
  },
};
</script>

<style scoped></style>
