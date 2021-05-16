<template>
  <modal
    name="fetch-create-modal"
    :draggable="true"
    :resizable="true"
    :scrollable="true"
    height="auto"
  >
    <div class="modal-header">
      <h2>fetch create</h2>
    </div>
    <div class="modal-body">
      <div class="m-1">
        <button
          v-on:click="showFetchCreateApiGetModal"
          class="btn btn-outline-info property-btn btn-sm m-1"
        >
          既存API
        </button>
        <fetch-create-api-get-modal></fetch-create-api-get-modal>
      </div>
    </div>
    <div class="modal-footer">
      <button
        v-on:click="hide"
        class="btn btn-outline-secondary property-btn btn-sm m-1"
      >
        閉じる
      </button>
    </div>
  </modal>
</template>

<script>
import fetchCreateApiGetModal from "./fetch-create-api-get-modal";
export default {
  name: "fetch-create-modal",
  components: {
    fetchCreateApiGetModal,
  },
  methods: {
    show: function () {},
    hide: function () {
      this.$modal.hide("fetch-create-modal");
    },
    showFetchCreateApiGetModal: function () {
      this.$modal.show("fetch-create-api-get-modal");
    },
  },
};
</script>

<style scoped></style>
