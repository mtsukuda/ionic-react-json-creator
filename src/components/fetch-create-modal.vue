<template>
  <modal name="fetch-create-modal" :draggable="true" :resizable="true">
    <div class="modal-header">
      <h2>fetch create</h2>
    </div>
    <div class="modal-body">
      <div>Fetch Create Modal💪</div>
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
  name: "fetch-create-modal",
  methods: {
    show: function () {},
    hide: function () {
      this.$modal.hide("fetch-create-modal");
    },
  },
};
</script>

<style scoped></style>
