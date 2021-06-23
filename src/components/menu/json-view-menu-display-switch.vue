<template>
  <div class="mt-2">
    <form>
      <input
        type="checkbox"
        id="debug"
        value="debug"
        v-model="value.viewConfig.debug"
        class="ml-2"
      />
      <label for="debug" class="p-1 text-danger">debug</label>
      <input
        type="checkbox"
        id="tag-uid"
        value="tagUid"
        v-model="value.viewConfig.menuUid"
        class="ml-2"
      />
      <label for="tag-uid" class="p-1 text-danger">menu uid</label>
    </form>
  </div>
</template>

<script>
export default {
  name: "json-view-menu-display-switch",
  props: {
    value: {},
  },
};
</script>

<style scoped></style>
