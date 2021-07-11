<template>
  <div v-if="tagTemp.editTag === 'IonIcon'">
    <b-form-group
      label-cols-sm="3"
      label-cols-lg="3"
      content-cols-sm="7"
      content-cols-lg="7"
      description=""
      label="Icon"
    >
      <b-form-select
        v-model="value.readyProps.icon"
        :options="options"
        size="sm"
      />
      <div>
        <small
          ><a href="https://ionic.io/ionicons/v4" target="_blank"
            >Ionic Icon Reference</a
          ></small
        >
      </div>
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
        const _ = require("lodash");
        let iconValue = _.camelCase(icon);
        result.push({ value: `{${iconValue}}`, text: iconValue });
        if (icon.indexOf("logo") === 0) return;
        result.push({
          value: `{${iconValue}Outline}`,
          text: `${iconValue}Outline`,
        });
        result.push({
          value: `{${iconValue}Sharp}`,
          text: `${iconValue}Sharp`,
        });
      });
      return result;
    },
  },
};
</script>

<style scoped></style>
