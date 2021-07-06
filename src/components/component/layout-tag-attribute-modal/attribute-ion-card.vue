<template>
  <div v-if="tagTemp.editTag === 'IonCard'">
    <b-form-checkbox
        id="use-fetch-code"
        name="use-fetch-code"
        value="true"
        unchecked-value=""
        v-model="value.readyProps.button"
    >
      button
    </b-form-checkbox>
  </div>
</template>

<script>
export default {
  name: "attribute-ion-card",
  props: {
    value: {},
    tagTemp: {},
    fetchTemp: {}
  },
}
</script>

<style scoped>

</style>
