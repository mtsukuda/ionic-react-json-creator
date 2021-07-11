<template>
  <div v-if="tagTemp.editTag === 'div'">
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
import IonPropertyContent from "./ion-property/ion-property-content";
export default {
  name: "attribute-html-div",
  components: { IonPropertyContent },
  props: {
    value: {},
    tagTemp: {},
    fetchTemp: {},
  },
};
</script>

<style scoped></style>
