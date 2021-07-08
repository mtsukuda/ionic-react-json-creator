<template>
<div>
  <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="8"
      description="When using a router, it specifies the transition direction when navigating to another page using href."
      label="Router Direction"
      label-for="input-router-direction"
  >
    <b-form-select v-model="value.readyProps.routerDirection" :options="options" />
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
