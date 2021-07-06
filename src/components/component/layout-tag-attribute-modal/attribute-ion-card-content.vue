<template>
  <div v-if="tagTemp.editTag === 'IonCardContent'">
    <ion-property-mode v-model="value" />
    <label for="inputIonCardContent"
    >コンテンツ<b-form-checkbox
        id="use-fetch-code"
        name="use-fetch-code"
        value="yes"
        unchecked-value=""
        v-model="value.code"
    >
      Use Fetch Code
    </b-form-checkbox></label
    >
    <div class="col-sm">
      <input
          class="form-control"
          size="sm"
          id="inputIonCardContent"
          type="text"
          placeholder="コンテンツ：改行させたい場合は<br />で改行"
          v-model="value.content"
          list="list-response"
      />
    </div>
    <datalist id="list-response">
      <option v-for="list in fetchTemp.responseList">{{ list }}</option>
    </datalist>
  </div>
</template>

<script>
import IonPropertyMode from "./ion-property/ion-property-mode";
export default {
  name: "attribute-ion-card-content",
  components: {IonPropertyMode},
  props: {
    value: {},
    tagTemp: {},
    fetchTemp: {}
  },
}
</script>

<style scoped>

</style>
