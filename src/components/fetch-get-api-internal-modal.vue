<template>
  <modal
    name="fetch-get-api-internal-modal"
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
    <fetch-get-api-internal-mock-modal
      v-model="value"
      v-bind:mock-params="responseTypes"
      v-bind:input="input"
      @commit="commit"
      ref="internalMock"
    ></fetch-get-api-internal-mock-modal>
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
import FetchGetApiInternalMockModal from "./fetch-get-api-internal-mock-modal";
const _ = require("lodash");
export default {
  name: "fetch-get-api-internal-modal",
  components: { FetchGetApiInternalMockModal },
  props: {
    value: {},
  },
  data() {
    return {
      mode: "create",
      suggestionFunctionName: "",
      input: {
        uri: "https://sls-front-api.io/",
        responseTypeName: "",
        path: "",
      },
      responseTypes: [],
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
      this.suggestionFunctionName = suggestionFunctionName;
    },
    clearResponse: function () {
      this.responseTypes.splice(0);
      this.responseTypes.push({
        label: "",
        type: "",
        content: "",
      });
    },
    editMode: function (api) {
      this.mode = "edit";
      this.input.responseTypeName = api.responseTypeName;
      this.responseTypes.splice(0);
      _.forEach(api.responseType, (type, label) => {
        let content = this.findMockData(api, label);
        this.responseTypes.push({ label: label, type: type, content: content });
      });
      if (api.config && api.config.path) {
        this.input.path = api.config.path;
      }
    },
    findMockData: function (api, label) {
      if (api.config && api.config.mock && api.config.mock[label]) {
        return api.config.mock[label];
      }
      return "";
    },
    addResponse: function () {
      this.responseTypes.push({
        label: "",
        type: "",
        content: "",
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
      this.$modal.hide("fetch-get-api-internal-modal");
    },
    next: function () {
      if (this.mode === "create") {
        this.$refs.internalMock.createMode(this.suggestionFunctionName);
      } else {
        this.$refs.internalMock.editMode();
      }
      this.$modal.show("fetch-get-api-internal-mock-modal");
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

<style scoped></style>
