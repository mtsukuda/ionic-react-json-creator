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
      <div class="m-2">Select fetch type.</div>
      <div
        class="btn-group m-1 pr-2"
        role="group"
        aria-label="fetch type"
        style="width: 100%"
      >
        <button
          v-on:click="showFetchCreateApiGetModal"
          class="btn btn-outline-info property-btn"
          style="width: 25%"
        >
          GET
        </button>
        <fetch-get-modal v-model="value" @commit="hide"></fetch-get-modal>
        <button
          v-on:click="showFetchCreateApiGetModal"
          class="btn btn-outline-info property-btn"
          style="width: 25%"
        >
          POST
        </button>
        <button
          disabled
          v-on:click="showNoImplement"
          class="btn btn-outline-info property-btn"
          style="width: 25%"
        >
          PUT
        </button>
        <button
          disabled
          v-on:click="showNoImplement"
          class="btn btn-outline-info property-btn"
          style="width: 25%"
        >
          DELETE
        </button>
      </div>
    </div>
    <div class="modal-footer">
      <button
        v-on:click="hide"
        class="btn btn-outline-secondary property-btn btn-sm m-1"
      >
        CLOSE
      </button>
    </div>
  </modal>
</template>

<script>
import fetchGetModal from "./fetch-get-modal";
export default {
  name: "fetch-create-modal",
  components: {
    fetchGetModal,
  },
  props: {
    value: {},
  },
  methods: {
    hide: function () {
      this.$modal.hide("fetch-create-modal");
    },
    showFetchCreateApiGetModal: function () {
      let fetchTemp = this.value.fetchTemp;
      fetchTemp.mode = "create";
      fetchTemp.editIndex = 0;
      fetchTemp.fetchName = this.suggestionName();
      fetchTemp.apis.splice(0);
      this.$modal.show("fetch-get-modal");
    },
    showNoImplement: function () {
      console.log("Sorry, we are out of service...");
    },
    suggestionName: function () {
      let S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let N = 8;
      return Array.from(Array(N))
        .map(() => S[Math.floor(Math.random() * S.length)])
        .join("");
    },
  },
};
</script>

<style scoped></style>
