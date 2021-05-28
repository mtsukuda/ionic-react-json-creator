<template>
  <modal
    name="fetch-create-get-api-internal-modal"
    :draggable="true"
    :resizable="true"
    :scrollable="true"
    height="auto"
  >
    <div class="modal-body">
      <div>
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
      <div>
        <hr class="hr-text" data-content="Front API Configure" />
        <label for="inputPath">Path</label>
        <div class="col-sm mb-2">
          <input
            class="form-control input-sm"
            id="inputPath"
            type="text"
            placeholder="Path"
            v-model="input.path"
          />
        </div>
        <label>Mock</label>
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
  name: "fetch-create-get-api-internal-modal",
  props: {
    value: {},
  },
  data() {
    return {
      input: {
        uri: "",
        responseTypeName: "",
        responseType: "",
        path: "",
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
      this.$modal.hide("fetch-create-get-api-internal-modal");
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

<style scoped>
.hr-text {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: left;
  height: 1.5em;
  opacity: 0.5;
}
.hr-text:before {
  content: "";
  border-top: 1px solid #999;
  border-bottom: 1px solid #fff;
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
}
.hr-text:after {
  content: attr(data-content);
  position: relative;
  display: inline-block;
  padding: 0 0.5em 0 0;
  line-height: 1.5em;
  color: #111;
  background-color: #fcfcfa;
}
</style>
