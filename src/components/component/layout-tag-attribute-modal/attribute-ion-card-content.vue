<template>
  <div v-if="tagTemp.editTag === 'IonCardContent'">
    <ion-property-mode v-model="value" />
    <ion-property-content
      v-model="value"
      id="input-content"
      label="Content"
      description="If you want to start a new line, use <br /> to start a new line."
      placeholder="The Content."
      dataListName="responseList"
      :data-list="fetchTemp.responseList"
    />
  </div>
</template>

<script>
import IonPropertyMode from "./ion-property/ion-property-mode";
import IonPropertyContent from "./ion-property/ion-property-content";
export default {
  name: "attribute-ion-card-content",
  components: { IonPropertyContent, IonPropertyMode },
  props: {
    value: {},
    tagTemp: {},
    fetchTemp: {},
  },
};
</script>

<style scoped></style>
