<template>
<div>
  <b-form-group
      label-cols-sm="3"
      label-cols-lg="3"
      content-cols-sm="7"
      content-cols-lg="7"
      description='The type of the button.'
      label="Type"
  >
    <b-form-select v-model="value.readyProps.type" :options="options" size="sm" />
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
