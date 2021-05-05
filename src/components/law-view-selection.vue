<template>
  <div class="mt-2">
    <form>
      <input type="checkbox" id="tags" value="Jack" v-model="value.tags" />
      <label for="tags" class="p-1">tags</label>
      <input
        type="checkbox"
        id="imports"
        value="Jack"
        v-model="value.imports"
      />
      <label for="imports" class="p-1">Imports</label>
      <input type="checkbox" id="fetch" value="Jack" v-model="value.fetch" />
      <label for="fetch" class="p-1">fetch</label>
    </form>
  </div>
</template>

<script>
export default {
  name: "law-view-selection",
  props: {
    value: {},
  },
};
</script>

<style scoped></style>
