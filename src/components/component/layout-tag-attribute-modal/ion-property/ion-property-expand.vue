<template>
<div>
  <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="8"
      description=""
      label="expand"
      label-for="input-horizontal"
  >
    <b-form-select v-model="value.readyProps.expand" :options="options" />
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-expand",
  props: {
    value: {},
  },
  data() {
    return {
      options: [
        {value: '', text: 'Please select expand.'},
        {value: "'block'", text: 'block'},
        {value: "'full'", text: 'full'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
