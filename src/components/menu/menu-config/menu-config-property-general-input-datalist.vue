<template>
  <div>
    <b-form-group
      label-cols-sm="2"
      label-cols-lg="2"
      content-cols-sm="9"
      content-cols-lg="9"
      :description="description"
      :label="label"
      :label-for="id"
    >
      <input
        class="form-control"
        size="sm"
        :id="id"
        type="text"
        :placeholder="placeholder"
        v-model="value.json.menuTemp[modelKey]"
        :list="dataListName"
        onfocus="this.select()"
      />
      <div v-if="linkDescription && linkDescriptionUrl">
        <small
          ><a :href="linkDescriptionUrl" target="_blank">{{
            linkDescription
          }}</a></small
        >
      </div>
    </b-form-group>
    <datalist :id="dataListName">
      <option v-for="data in dataList">{{ data }}</option>
    </datalist>
  </div>
</template>

<script>
export default {
  name: "menu-config-property-general-input-datalist",
  props: {
    value: {},
    modelKey: "",
    label: "",
    id: "",
    description: "",
    linkDescription: "",
    linkDescriptionUrl: "",
    placeholder: "",
    dataListName: "",
    dataList: {},
  },
};
</script>

<style scoped></style>
