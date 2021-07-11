<template>
<div>
  <b-form-group
      label-cols-sm="3"
      label-cols-lg="3"
      content-cols-sm="7"
      content-cols-lg="7"
      description="The position determines where and how the label behaves inside an item."
      label="Position"
  >
    <b-form-select v-model="value.readyProps.position" :options="options" size="sm" />
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
