<template>
<div>
  <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="8"
      description="Where to align the fab horizontally in the viewport."
      label="Horizontal"
      label-for="input-horizontal"
  >
    <b-form-select v-model="value.readyProps.horizontal" :options="options" />
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
