<template>
  <div>
    <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm="9"
      content-cols-lg="9"
      :description="description"
      :label="label"
      :label-for="id"
    >
      <input
        class="form-control"
        size="sm"
        :id="id"
        type="text"
        :placeholder="placeholder"
        v-model="value.json.menuTemp[modelKey]"
        onfocus="this.select()"
      />
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: "menu-config-property-general-input",
  props: {
    value: {},
    modelKey: "",
    label: "",
    id: "",
    description: "",
    placeholder: "",
  },
};
</script>

<style scoped></style>
