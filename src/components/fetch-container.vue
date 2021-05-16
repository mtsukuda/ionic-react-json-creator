<template>
  <div class="container pl-1 pr-1">
    <div class="border rounded fetch-container-div mb-1">
      <div class="h5 m-2 pl-1 mb-1">fetch</div>
      <div class="m-1">
        <button
          v-on:click="showFetchCreateModal"
          class="btn btn-outline-info property-btn btn-sm m-1"
        >
          新規作成
        </button>
        <fetch-create-modal></fetch-create-modal>
      </div>
    </div>
  </div>
</template>

<script>
import fetchCreateModal from "./fetch-create-modal";
export default {
  name: "fetch-container",
  components: {
    fetchCreateModal,
  },
  props: {
    value: {},
  },
  methods: {
    showFetchCreateModal: function () {
      this.$modal.show("fetch-create-modal");
    },
  },
};
</script>

<style scoped>
.fetch-container-div {
  border-color: grey;
}
</style>
