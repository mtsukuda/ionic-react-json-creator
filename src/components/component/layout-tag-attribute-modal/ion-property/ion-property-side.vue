<template>
<div>
  <b-form-group
      label-cols-sm="3"
      label-cols-lg="3"
      content-cols-sm="7"
      content-cols-lg="7"
      description=""
      label="Side"
  >
    <b-form-select v-model="value.readyProps.side" :options="options" size="sm" />
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-side",
  props: {
    value: {},
  },
  data() {
    return {
      options: [
        {value: '', text: 'Please select side property.'},
        {value: "'start'", text: 'start'},
        {value: "'end'", text: 'end'},
        {value: "'top'", text: 'top'},
        {value: "'bottom'", text: 'bottom'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
