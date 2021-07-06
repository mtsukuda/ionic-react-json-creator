<template>
<div>
  <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="8"
      description="If true, a button tag will be rendered and the card will be tappable."
      label="button"
      label-for="input-horizontal"
  >
    <b-form-select v-model="value.readyProps.button" :options="[{ value: true, text: 'true' },{ value: false, text: 'false' },]"></b-form-select>
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-button",
  props: {
    value: {},
  },
}
</script>

<style scoped>

</style>
