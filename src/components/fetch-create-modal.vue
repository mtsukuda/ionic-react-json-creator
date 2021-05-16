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
          v-on:click="showFetchExistApiModal"
          class="btn btn-outline-info property-btn btn-sm m-1"
        >
          既存API
        </button>
        <fetch-exist-api-modal></fetch-exist-api-modal>
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
import fetchExistApiModal from "./fetch-exist-api-modal";
export default {
  name: "fetch-create-modal",
  components: {
    fetchExistApiModal,
  },
  methods: {
    show: function () {},
    hide: function () {
      this.$modal.hide("fetch-create-modal");
    },
    showFetchExistApiModal: function () {
      this.$modal.show("fetch-exist-api-modal");
    },
  },
};
</script>

<style scoped></style>
