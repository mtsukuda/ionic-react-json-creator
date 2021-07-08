<template>
<div>
  <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="8"
      description="If true, the user cannot interact with the component."
      label="Disabled"
      label-for="input-disabled"
  >
    <b-form-select v-model="value.readyProps.disabled" :options="options" />
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-disabled",
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
