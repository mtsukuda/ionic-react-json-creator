<template>
  <div>
    <b-form-group
      label-cols-sm="3"
      label-cols-lg="3"
      content-cols-sm="9"
      content-cols-lg="9"
      :description="description"
      :label="label"
      :label-for="id"
    >
      <b-form-checkbox
        id="use-fetch-code"
        name="use-fetch-code"
        value="yes"
        unchecked-value=""
        v-model="value.code"
      >
        <small><strong>Use Fetch Code</strong></small>
      </b-form-checkbox>
      <input
        class="form-control"
        size="sm"
        :id="id"
        type="text"
        :placeholder="placeholder"
        v-model="value.content"
        :list="dataListName"
        onfocus="this.select()"
      />
    </b-form-group>
    <datalist :id="dataListName">
      <option v-for="data in dataList">{{ data }}</option>
    </datalist>
  </div>
</template>

<script>
export default {
  name: "ion-property-content",
  props: {
    value: {},
    label: "",
    id: "",
    description: "",
    placeholder: "",
    dataListName: "",
    dataList: {},
  },
};
</script>

<style scoped></style>
