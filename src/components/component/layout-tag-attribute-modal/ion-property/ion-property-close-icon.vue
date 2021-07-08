<template>
<div>
  <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="8"
      description="The icon name to use for the close icon. This will appear when the fab button is pressed. Only applies if it is the main button inside of a fab containing a fab list."
      label="Close Icon"
      label-for="input-close-icon"
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
