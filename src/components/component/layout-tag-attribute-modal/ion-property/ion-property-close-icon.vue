<template>
<div>
  <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="8"
      description="The color to use from your application's color palette."
      label="Close Icon"
      label-for="input-horizontal"
  >
    <b-form-select v-model="value.readyProps.closeIcon" :options="options" />
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-close-icon",
  props: {
    value: {},
  },
  data() {
    return {
      options: [
        {value: '', text: 'Please select close icon.'},
        {value: "'close'", text: 'close'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
