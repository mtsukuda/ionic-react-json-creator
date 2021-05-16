<template>
  <modal name="fetch-exist-api-modal" :draggable="true" :resizable="true">
    <div class="modal-header">
      <h2>Exist API</h2>
    </div>
    <div class="modal-body">
      <div>Exist API Modal💪</div>
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
export default {
  name: "fetch-exist-api-modal",
  methods: {
    show: function () {},
    hide: function () {
      this.$modal.hide("fetch-exist-api-modal");
    },
  },
};
</script>

<style scoped></style>
