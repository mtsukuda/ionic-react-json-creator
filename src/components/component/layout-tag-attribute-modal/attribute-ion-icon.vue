<template>
  <div v-if="tagTemp.editTag === 'IonIcon'">
    <b-form-group
      label-cols-sm="3"
      label-cols-lg="3"
      content-cols-sm="7"
      content-cols-lg="7"
      description=""
      label="Icons"
    >
      <b-form-select
        v-model="value.readyProps.icons"
        :options="options"
        size="sm"
      />
    </b-form-group>
  </div>
</template>

<script>
import ion from "../../../mixin/ion";
export default {
  name: "attribute-ion-icon",
  mixins: [ion],
  components: {},
  props: {
    value: {},
    tagTemp: {},
    fetchTemp: {},
  },
  computed: {
    options() {
      let result = [];
      this.ionIcons.forEach((icon) => {
        result.push({ value: `'${icon}'`, text: icon });
      });
      return result;
    },
  },
};
</script>

<style scoped></style>
