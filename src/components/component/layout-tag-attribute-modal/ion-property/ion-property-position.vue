<template>
<div>
  <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="8"
      description="The position determines where and how the label behaves inside an item."
      label="Position"
      label-for="input-position"
  >
    <b-form-select v-model="value.readyProps.position" :options="options" />
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-position",
  props: {
    value: {},
  },
  data() {
    return {
      options: [
        {value: '', text: 'Please select position.'},
        {value: "'fixed'", text: 'fixed'},
        {value: "'floating'", text: 'floating'},
        {value: "'stacked'", text: 'stacked'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
