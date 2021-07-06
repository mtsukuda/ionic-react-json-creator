<template>
<div>
  <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="8"
      description="The color to use from your application's color palette."
      label="color"
      label-for="input-horizontal"
  >
    <b-form-select v-model="value.readyProps.color" :options="options" />
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
        {value: 'primary', text: 'primary'},
        {value: 'secondary', text: 'secondary'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
