<template>
<div>
  <b-form-group
      label-cols-sm="3"
      label-cols-lg="3"
      content-cols-sm="7"
      content-cols-lg="7"
      description=""
      label="Expand"
  >
    <b-form-select v-model="value.readyProps.expand" :options="options" size="sm" />
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
        {value: '', text: 'Please select expand option.'},
        {value: "'block'", text: 'block'},
        {value: "'full'", text: 'full'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
