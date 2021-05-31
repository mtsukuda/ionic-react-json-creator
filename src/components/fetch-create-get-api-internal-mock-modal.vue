<template>
  <modal
    name="fetch-create-get-api-internal-mock-modal"
    :draggable="true"
    :resizable="true"
    :scrollable="true"
    height="auto"
  >
    <div class="modal-body">
      <div>
        <hr class="hr-text" data-content="Front API Configure" />
        <label for="inputPath">Path</label>
        <div class="col-sm mb-2">
          <input
            class="form-control input-sm"
            id="inputPath"
            type="text"
            placeholder="myMock"
            v-model="input.path"
          />
        </div>
        <label>Mock</label>
        <div class="col-sm mb-2">
          <b-input-group class="mb-2" v-for="param in mockParams">
            <b-form-input
              aria-label="Label"
              placeholder="resTitle"
              v-model="param.label"
            ></b-form-input>
            <b-form-input
              aria-label="Content"
              placeholder="This is the Title"
              v-model="param.content"
            ></b-form-input>
          </b-input-group>
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
  name: "fetch-create-get-api-internal-mock-modal",
  props: {
    value: {},
    mockParams: {},
  },
  data() {
    return {
      input: {
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
    addResponse: function () {
      this.responseTypes.push({
        label: "",
        content: "",
      });
    },
    deleteResponse: function (index) {
      this.responseTypes.splice(index, 1);
    },
    hide: function () {
      this.$modal.hide("fetch-create-get-api-internal-mock-modal");
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
