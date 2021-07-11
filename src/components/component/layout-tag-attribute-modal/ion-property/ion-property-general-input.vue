<template>
<div>
  <b-form-group
      label-cols-sm="3"
      label-cols-lg="3"
      content-cols-sm="7"
      content-cols-lg="7"
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
        v-model="value.readyProps[modelKey]"
    />
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-general-input",
  props: {
    value: {},
    modelKey: "",
    label: "",
    id: "",
    description: "",
    placeholder: ""
  },
}
</script>

<style scoped>

</style>
