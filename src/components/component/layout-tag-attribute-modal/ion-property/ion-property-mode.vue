<template>
<div>
  <b-form-group
      label-cols-sm="3"
      label-cols-lg="3"
      content-cols-sm="7"
      content-cols-lg="7"
      description="The mode determines which platform styles to use."
      label="Mode"
  >
    <b-form-select v-model="value.readyProps.mode" :options="options" size="sm" />
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
