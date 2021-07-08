<template>
<div>
  <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="8"
      description="If true, a button tag will be rendered and the card will be tappable."
      label="Button"
      label-for="input-horizontal"
  >
    <b-form-select v-model="value.readyProps.button" :options="options" />
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-button",
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
