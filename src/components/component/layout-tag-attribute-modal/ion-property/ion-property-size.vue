<template>
<div>
  <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="8"
      description=""
      label="Size"
      label-for="input-horizontal"
  >
    <b-form-select v-model="value.readyProps.size" :options="options" />
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-size",
  props: {
    value: {},
  },
  data() {
    return {
      options: [
        {value: '', text: 'Please select size option.'},
        {value: "'small'", text: 'small'},
        {value: "'default'", text: 'default'},
        {value: "'large'", text: 'large'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
