<template>
<div>
  <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="8"
      description='The type of the button.'
      label="Type"
      label-for="input-type"
  >
    <b-form-select v-model="value.readyProps.type" :options="options" />
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-type",
  props: {
    value: {},
  },
  data() {
    return {
      options: [
        {value: '', text: 'Please select button type.'},
        {value: "'button'", text: 'button'},
        {value: "'reset'", text: 'reset'},
        {value: "'submit'", text: 'submit'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
