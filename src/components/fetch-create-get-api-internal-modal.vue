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
        <label>Response type</label>
        <div class="col-sm mb-2">
          <b-input-group
            class="mb-2"
            v-for="(response, index) in responseTypes"
          >
            <b-form-input
              aria-label="Label"
              placeholder="res1"
              v-model="response.label"
            ></b-form-input>
            <b-form-input
              aria-label="Type"
              placeholder="string"
              v-model="response.type"
            ></b-form-input>
            <b-dropdown text="Type" variant="outline-secondary">
              <b-dropdown-item>string</b-dropdown-item>
              <b-dropdown-item>boolean</b-dropdown-item>
              <b-dropdown-item>number</b-dropdown-item>
            </b-dropdown>
            <b-button variant="outline-danger" class="ml-1"
              ><b-icon
                icon="trash"
                aria-label="Delete"
                v-on:click="deleteResponse(index)"
              ></b-icon
            ></b-button>
          </b-input-group>
          <b-button variant="outline-primary" v-on:click="addResponse"
            ><b-icon icon="plus" aria-label="append"></b-icon
          ></b-button>
        </div>
      </div>
    </div>
    <fetch-create-get-api-internal-mock-modal
      v-model="value"
      v-bind:suggestion="suggestion"
      v-bind:mock-params="responseTypes"
      v-bind:input="input"
      @commit="commit"
      ref="internalMock"
    ></fetch-create-get-api-internal-mock-modal>
    <div class="modal-footer">
      <button
        v-on:click="hide"
        @click="$emit('close')"
        class="btn btn-outline-secondary property-btn btn-sm m-1"
      >
        CLOSE
      </button>
      <button
        v-on:click="next"
        class="btn btn-outline-primary property-btn btn-sm m-1"
        :disabled="nextDisable"
      >
        NEXT
      </button>
    </div>
  </modal>
</template>

<script>
import FetchCreateGetApiInternalMockModal from "./fetch-create-get-api-internal-mock-modal";
const _ = require("lodash");
export default {
  name: "fetch-create-get-api-internal-modal",
  components: { FetchCreateGetApiInternalMockModal },
  props: {
    value: {},
  },
  data() {
    return {
      mode: "init",
      input: {
        uri: "https://sls-front-api.io/",
        responseTypeName: "",
        path: "",
      },
      responseTypes: [
        {
          label: "",
          type: "",
          content: "",
        },
      ],
    };
  },
  computed: {
    nextDisable() {
      return !this.input.responseTypeName || this.isResponseTypeBlank();
    },
  },
  methods: {
    createMode: function (suggestionFunctionName) {
      this.mode = "create";
      this.setSuggestion(suggestionFunctionName);
      this.clearResponse();
    },
    setSuggestion: function (suggestionFunctionName) {
      if (!this.input.responseTypeName) {
        this.input.responseTypeName =
          "res" +
          suggestionFunctionName[0].toUpperCase() +
          suggestionFunctionName.slice(1);
      }
    },
    clearResponse: function () {
      this.responseTypes.splice(0);
      this.responseTypes.push({
        label: "",
        type: "",
      });
    },
    editMode: function (api) {
      this.mode = "edit";
      this.input.responseTypeName = api.responseTypeName;
      this.responseTypes.splice(0);
      _.forEach(api.responseType, (type, label) => {
        this.responseTypes.push({ label: label, type: type });
      });
    },
    addResponse: function () {
      this.responseTypes.push({
        label: "",
        type: "",
      });
    },
    deleteResponse: function (index) {
      this.responseTypes.splice(index, 1);
    },
    isResponseTypeBlank: function () {
      for (let i = 0; i < this.responseTypes.length; i++) {
        if (
          this.responseTypes[i].label === "" ||
          this.responseTypes[i].type === ""
        ) {
          return true;
        }
      }
      return false;
    },
    hide: function () {
      this.$modal.hide("fetch-create-get-api-internal-modal");
    },
    next: function () {
      this.$refs.internalMock.setSuggestion();
      this.$modal.show("fetch-create-get-api-internal-mock-modal");
    },
    commit: function () {
      let responseType = {};
      let mock = {};
      this.responseTypes.forEach((response) => {
        responseType[response.label] = response.type;
        mock[response.label] = response.content;
      });
      this.value.push({
        uri: this.input.uri,
        apiType: "internal",
        responseTypeName: this.input.responseTypeName,
        responseTypeStrict: true,
        responseType: responseType,
        config: {
          path: this.input.path,
          mock: mock,
        },
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
