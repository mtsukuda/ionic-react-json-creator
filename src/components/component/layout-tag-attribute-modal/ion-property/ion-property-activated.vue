<template>
  <div>
    <b-form-group
      label-cols-sm="3"
      label-cols-lg="3"
      content-cols-sm="7"
      content-cols-lg="7"
      description="If true, both the ion-fab-button and all ion-fab-list inside ion-fab will become active. That means ion-fab-button will become a close icon and ion-fab-list will become visible."
      label="Activated"
    >
      <b-form-select
        v-model="value.readyProps.activated"
        :options="options"
        size="sm"
      />
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: "ion-property-activated",
  props: {
    value: {},
  },
  data() {
    return {
      options: [
        { value: "", text: "Please select true/false." },
        { value: "{true}", text: "true" },
        { value: "{false}", text: "false" },
      ],
    };
  },
};
</script>

<style scoped></style>
