<template>
  <div>
    <b-form-group
      label-cols-sm="3"
      label-cols-lg="3"
      content-cols-sm="7"
      content-cols-lg="7"
      description=""
      label="Size"
    >
      <b-form-select
        v-model="value.readyProps.size"
        :options="options"
        size="sm"
      />
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: "ion-property-size",
  props: {
    value: {},
  },
  data() {
    return {
      options: [
        { value: "", text: "Please select size option." },
        { value: "'small'", text: "small" },
        { value: "'default'", text: "default" },
        { value: "'large'", text: "large" },
      ],
    };
  },
};
</script>

<style scoped></style>
