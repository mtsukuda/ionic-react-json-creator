<template>
<div>
  <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="8"
      description='If true, the fab will display on the edge of the header if vertical is "top", and on the edge of the footer if it is "bottom". Should be used with a fixed slot.'
      label="Edge"
      label-for="input-edge"
  >
    <b-form-select v-model="value.readyProps.edge" :options="options" />
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-edge",
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
