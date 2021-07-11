<template>
  <div>
    <b-form-group
      label-cols-sm="3"
      label-cols-lg="3"
      content-cols-sm="7"
      content-cols-lg="7"
      description=""
      label="Fill"
    >
      <b-form-select
        v-model="value.readyProps.fill"
        :options="options"
        size="sm"
      />
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: "ion-property-fill",
  props: {
    value: {},
  },
  data() {
    return {
      options: [
        { value: "", text: "Please select fill option." },
        { value: "'clear'", text: "clear" },
        { value: "'outline'", text: "outline" },
        { value: "'solid'", text: "solid" },
      ],
    };
  },
};
</script>

<style scoped></style>
