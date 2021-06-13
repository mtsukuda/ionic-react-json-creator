<template>
  <modal
    name="fetch-get-api-external-modal"
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
            v-model="value.external.uri"
          />
        </div>
        <label for="inputApiResponseTypeName">Response type name</label>
        <div class="col-sm mb-2">
          <input
            class="form-control input-sm"
            id="inputApiResponseTypeName"
            type="text"
            placeholder="ResponseTypeName"
            v-model="value.external.responseTypeName"
          />
        </div>
        <label for="inputResponseType">Response type</label>
        <div class="col-sm mb-2">
          <input
            class="form-control input-sm"
            id="inputResponseType"
            type="text"
            placeholder="res1: string"
            v-model="value.external.responseType"
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
        CLOSE
      </button>
      <button
        v-on:click="commit"
        @click="$emit('commit')"
        class="btn btn-outline-primary property-btn btn-sm m-1"
        :disabled="createDisable"
      >
        CREATE
      </button>
    </div>
  </modal>
</template>

<script>
export default {
  name: "fetch-get-api-external-modal",
  props: {
    value: {},
  },
  computed: {
    createDisable() {
      return (
        !this.value.external.uri ||
        !this.value.external.responseTypeName ||
        !this.value.external.responseType
      );
    },
  },
  methods: {
    hide: function () {
      this.$modal.hide("fetch-get-api-external-modal");
    },
    commit: function () {
      this.value.apis.push({
        uri: this.value.external.uri,
        apiType: "external",
        responseTypeName: this.value.external.responseTypeName,
        responseType: this.value.external.responseType,
      });
      this.hide();
    },
  },
};
</script>

<style scoped></style>
