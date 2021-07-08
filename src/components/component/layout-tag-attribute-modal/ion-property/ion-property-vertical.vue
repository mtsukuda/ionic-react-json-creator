<template>
<div>
  <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="8"
      description="Where to align the fab horizontally in the viewport."
      label="Vertical"
      label-for="input-vertical"
  >
    <b-form-select v-model="value.readyProps.vertical" :options="options" />
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
