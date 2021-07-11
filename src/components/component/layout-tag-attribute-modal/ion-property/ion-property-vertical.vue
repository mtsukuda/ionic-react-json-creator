<template>
<div>
  <b-form-group
      label-cols-sm="3"
      label-cols-lg="3"
      content-cols-sm="7"
      content-cols-lg="7"
      description="Where to align the fab horizontally in the viewport."
      label="Vertical"
  >
    <b-form-select v-model="value.readyProps.vertical" :options="options" size="sm" />
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-vertical",
  props: {
    value: {},
  },
  data() {
    return {
      options: [
        {value: '', text: 'Please select vertical type.'},
        {value: "'bottom'", text: 'bottom'},
        {value: "'center'", text: 'center'},
        {value: "'top'", text: 'top'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
