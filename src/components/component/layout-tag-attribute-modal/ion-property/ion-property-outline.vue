<template>
<div>
  <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="8"
      description="Display an outline style button."
      label="Outline"
      label-for="input-outline"
  >
    <b-form-select v-model="value.readyProps.outline" :options="options" />
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-outline",
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
