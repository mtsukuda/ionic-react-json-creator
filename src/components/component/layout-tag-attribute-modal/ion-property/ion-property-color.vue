<template>
<div>
  <b-form-group
      label-cols-sm="3"
      label-cols-lg="3"
      content-cols-sm="7"
      content-cols-lg="7"
      description="The color to use from your application's color palette."
      label="Color"
  >
    <b-form-select v-model="value.readyProps.color" :options="options" size="sm" />
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-color",
  props: {
    value: {},
  },
  data() {
    return {
      options: [
        {value: '', text: 'Please select color.'},
        {value: "'primary'", text: 'primary'},
        {value: "'secondary'", text: 'secondary'},
        {value: "'tertiary'", text: 'tertiary'},
        {value: "'success'", text: 'success'},
        {value: "'warning'", text: 'warning'},
        {value: "'danger'", text: 'danger'},
        {value: "'light'", text: 'light'},
        {value: "'medium'", text: 'medium'},
        {value: "'dark'", text: 'dark'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
