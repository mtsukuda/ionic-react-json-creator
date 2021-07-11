<template>
<div>
  <b-form-group
      label-cols-sm="3"
      label-cols-lg="3"
      content-cols-sm="7"
      content-cols-lg="7"
      description="If true, the user cannot interact with the component."
      label="Disabled"
  >
    <b-form-select v-model="value.readyProps.disabled" :options="options" size="sm" />
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
