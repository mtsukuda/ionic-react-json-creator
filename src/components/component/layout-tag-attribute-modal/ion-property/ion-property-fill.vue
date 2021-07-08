<template>
<div>
  <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="8"
      description=""
      label="Fill"
      label-for="input-fill"
  >
    <b-form-select v-model="value.readyProps.fill" :options="options" />
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-fill",
  props: {
    value: {},
  },
  data() {
    return {
      options: [
        {value: '', text: 'Please select fill option.'},
        {value: "'clear'", text: 'clear'},
        {value: "'outline'", text: 'outline'},
        {value: "'solid'", text: 'solid'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
