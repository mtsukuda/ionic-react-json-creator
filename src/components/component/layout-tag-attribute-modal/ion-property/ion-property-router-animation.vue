<template>
<div>
  <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="8"
      description="When using a router, it specifies the transition animation when navigating to another page using href."
      label="Router Animation"
      label-for="input-router-animation"
  >
    <b-form-select v-model="value.readyProps.routerAnimation" :options="options" />
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-vertical",
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
