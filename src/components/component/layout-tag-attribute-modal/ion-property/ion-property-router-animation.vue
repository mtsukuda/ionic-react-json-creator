<template>
<div>
  <b-form-group
      label-cols-sm="3"
      label-cols-lg="3"
      content-cols-sm="7"
      content-cols-lg="7"
      description="When using a router, it specifies the transition animation when navigating to another page using href."
      label="Router Animation"
  >
    <b-form-select v-model="value.readyProps.routerAnimation" :options="options" size="sm" />
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-router-animation",
  props: {
    value: {},
  },
  data() {
    return {
      options: [
        {value: '', text: 'Please select animation type.'},
        {value: "((baseEl: any, opts?: any) => Animation)", text: 'Animation'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
