<template>
<div>
  <b-form-group
      label-cols-sm="3"
      label-cols-lg="3"
      content-cols-sm="7"
      content-cols-lg="7"
      description="Where to align the fab horizontally in the viewport."
      label="Horizontal"
  >
    <b-form-select v-model="value.readyProps.horizontal" :options="options" size="sm" />
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-horizontal",
  props: {
    value: {},
  },
  data() {
    return {
      options: [
        {value: '', text: 'Please select horizontal type.'},
        {value: "'center'", text: 'center'},
        {value: "'end'", text: 'end'},
        {value: "'start'", text: 'start'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
