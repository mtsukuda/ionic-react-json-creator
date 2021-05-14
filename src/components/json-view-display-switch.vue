<template>
  <div class="mt-2">
    <form>
      <input type="checkbox" id="tags" value="tags" v-model="value.tags" />
      <label for="tags" class="p-1">tags</label>
      <input
        type="checkbox"
        id="imports"
        value="Jack"
        v-model="value.imports"
        class="ml-2"
      />
      <label for="imports" class="p-1">Imports</label>
      <input
        type="checkbox"
        id="fetch"
        value="fetch"
        v-model="value.fetch"
        class="ml-2"
      />
      <label for="fetch" class="p-1">fetch</label>
      <input
        type="checkbox"
        id="debug"
        value="debug"
        v-model="value.debug"
        class="ml-2"
      />
      <label for="debug" class="p-1 text-danger">debug</label>
    </form>
  </div>
</template>

<script>
export default {
  name: "json-view-display-switch",
  props: {
    value: {},
  },
};
</script>

<style scoped></style>
