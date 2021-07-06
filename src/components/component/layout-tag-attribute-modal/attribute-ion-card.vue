<template>
  <div v-if="tagTemp.editTag === 'IonCard'">
    <b-form-checkbox
        id="use-fetch-code"
        name="use-fetch-code"
        value="yes"
        unchecked-value=""
        v-model="value.code"
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
