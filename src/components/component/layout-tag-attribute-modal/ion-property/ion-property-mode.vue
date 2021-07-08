<template>
<div>
  <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="8"
      description="The mode determines which platform styles to use."
      label="Mode"
      label-for="input-mode"
  >
    <b-form-select v-model="value.readyProps.mode" :options="options" />
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-mode",
  props: {
    value: {},
  },
  data() {
    return {
      options: [
        {value: '', text: 'Please select mode.'},
        {value: "'ios'", text: 'ios'},
        {value: "'md'", text: 'md'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
