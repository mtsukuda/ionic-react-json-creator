<template>
<div>
  <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="8"
      description="Specifies where to display the linked URL. Only applies when an href is provided. "
      label="Target"
      label-for="input-target"
  >
    <b-form-select v-model="value.readyProps.target" :options="options" />
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-target",
  props: {
    value: {},
  },
  data() {
    return {
      options: [
        {value: '', text: 'Please select keyword.'},
        {value: "'_blank'", text: '_blank'},
        {value: "'_self'", text: '_self'},
        {value: "'_parent'", text: '_parent'},
        {value: "'_top'", text: '_top'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
