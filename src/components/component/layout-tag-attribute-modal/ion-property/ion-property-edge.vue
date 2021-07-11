<template>
  <div>
    <b-form-group
      label-cols-sm="3"
      label-cols-lg="3"
      content-cols-sm="7"
      content-cols-lg="7"
      description='If true, the fab will display on the edge of the header if vertical is "top", and on the edge of the footer if it is "bottom". Should be used with a fixed slot.'
      label="Edge"
    >
      <b-form-select
        v-model="value.readyProps.edge"
        :options="options"
        size="sm"
      />
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: "ion-property-edge",
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
