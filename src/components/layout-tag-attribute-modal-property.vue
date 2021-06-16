<template>
  <div>
    <label class="small">プロパティ</label>
    <div class="col-sm">
      <b-form-textarea
        id="inputProperty"
        size="sm"
        v-model="value.property"
        placeholder="shape='round'"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "layout-tag-attribute-modal-property",
  props: {
    value: {},
  },
};
</script>

<style scoped></style>
