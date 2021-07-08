<template>
<div>
  <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="8"
      description='If true, the fab button will be translucent. Only applies when the mode is "ios" and the device supports backdrop-filter.'
      label="Translucent"
      label-for="input-translucent"
  >
    <b-form-select v-model="value.readyProps.translucent" :options="options" />
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-translucent",
  props: {
    value: {},
  },
  data() {
    return {
      options: [
        {value: '', text: 'Please select true/false.'},
        {value: "{true}", text: 'true'},
        {value: "{false}", text: 'false'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
