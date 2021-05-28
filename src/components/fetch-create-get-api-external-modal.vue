<template>
  <modal
    name="fetch-create-get-api-external-modal"
    :draggable="true"
    :resizable="true"
    :scrollable="true"
    height="auto"
  >
    <div class="modal-body">
      <div>
        <label for="inputApiUri">URI</label>
        <div class="col-sm mb-2">
          <input
            class="form-control input-sm"
            id="inputApiUri"
            type="text"
            placeholder="URI"
            v-model="input.uri"
          />
        </div>
        <label for="inputApiResponseTypeName">Response type name</label>
        <div class="col-sm mb-2">
          <input
            class="form-control input-sm"
            id="inputApiResponseTypeName"
            type="text"
            placeholder="ResponseTypeName"
            v-model="input.responseTypeName"
          />
        </div>
        <label for="inputResponseType">Response type</label>
        <div class="col-sm mb-2">
          <input
            class="form-control input-sm"
            id="inputResponseType"
            type="text"
            placeholder="res1: string"
            v-model="input.responseType"
          />
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button
        v-on:click="hide"
        @click="$emit('close')"
        class="btn btn-outline-secondary property-btn btn-sm m-1"
      >
        閉じる
      </button>
      <button
        v-on:click="commit"
        @click="$emit('commit')"
        class="btn btn-outline-primary property-btn btn-sm m-1"
        :disabled="createDisable"
      >
        作成
      </button>
    </div>
  </modal>
</template>

<script>
export default {
  name: "fetch-create-get-api-external-modal",
  props: {
    value: {},
  },
  data() {
    return {
      input: {
        uri: "",
        responseTypeName: "",
        responseType: "",
      },
    };
  },
  computed: {
    createDisable() {
      return (
        !this.input.uri ||
        !this.input.responseTypeName ||
        !this.input.responseType
      );
    },
  },
  methods: {
    hide: function () {
      this.$modal.hide("fetch-create-get-api-external-modal");
    },
    commit: function () {
      this.value.push({
        uri: this.input.uri,
        responseTypeName: this.input.responseTypeName,
        responseType: this.input.responseType,
      });
      this.hide();
    },
  },
};
</script>

<style scoped></style>
