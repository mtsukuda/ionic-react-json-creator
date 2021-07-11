<template>
<div>
  <b-form-group
      label-cols-sm="3"
      label-cols-lg="3"
      content-cols-sm="7"
      content-cols-lg="7"
      description="When using a router, it specifies the transition direction when navigating to another page using href."
      label="Router Direction"
  >
    <b-form-select v-model="value.readyProps.routerDirection" :options="options" size="sm" />
  </b-form-group>

</div>
</template>

<script>
export default {
  name: "ion-property-router-direction",
  props: {
    value: {},
  },
  data() {
    return {
      options: [
        {value: '', text: 'Please select animation type.'},
        {value: "'back'", text: 'back'},
        {value: "'forward'", text: 'forward'},
        {value: "'root'", text: 'root'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
