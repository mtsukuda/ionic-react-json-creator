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
            v-model="value.internal.responseTypeName"
          />
        </div>
        <label>Response type</label>
        <div class="col-sm mb-2">
          <b-input-group
            class="mb-2"
            v-for="(response, index) in value.internal.responseTypes"
          >
            <b-form-input
              aria-label="Label"
              placeholder="res1"
              v-model="response.label"
            />
            <b-form-input
              aria-label="Type"
              placeholder="string"
              v-model="response.type"
              list="list-type"
            />
            <datalist id="list-type">
              <option v-for="type in types">{{ type }}</option>
            </datalist>
            <b-button variant="outline-danger" class="ml-1"
              ><b-icon
                icon="trash"
                aria-label="Delete"
                v-on:click="deleteResponse(index)"
            /></b-button>
          </b-input-group>
          <b-button variant="outline-primary" v-on:click="addResponse"
            ><b-icon icon="plus" aria-label="append"
          /></b-button>
        </div>
      </div>
    </div>
    <fetch-get-api-internal-mock-modal
      v-model="value"
      v-bind:fetch="fetch"
      @commit="commit"
      @update="update"
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
export default {
  name: "fetch-get-api-internal-modal",
  components: { FetchGetApiInternalMockModal },
  props: {
    value: {},
    fetch: {},
  },
  data() {
    return {
      mode: "create",
      suggestionFunctionName: "",
      types: ["string", "boolean", "number"],
    };
  },
  computed: {
    nextDisable() {
      return (
        !this.value.internal.responseTypeName ||
        this.isResponseTypeBlank() ||
        !this.checkForTypeCorrect()
      );
    },
  },
  methods: {
    addResponse: function () {
      this.value.internal.responseTypes.push({
        label: "",
        type: "",
        content: "",
      });
    },
    deleteResponse: function (index) {
      this.value.internal.responseTypes.splice(index, 1);
    },
    isResponseTypeBlank: function () {
      let responseTypes = this.value.internal.responseTypes;
      for (let i = 0; i < responseTypes.length; i++) {
        if (responseTypes[i].label === "" || responseTypes[i].type === "") {
          return true;
        }
      }
      return false;
    },
    checkForTypeCorrect: function () {
      let result = true;
      this.value.internal.responseTypes.forEach((responseType) => {
        if (!this.types.includes(responseType.type)) {
          result = false;
        }
      });
      return result;
    },
    hide: function () {
      this.$modal.hide("fetch-get-api-internal-modal");
    },
    next: function () {
      this.$modal.show("fetch-get-api-internal-mock-modal");
    },
    commit: function () {
      this.value.apis.push(this.dataSet());
      this.hide();
    },
    update: function () {
      this.value.apis[this.value.editIndex] = this.dataSet();
      this.hide();
    },
    dataSet: function () {
      let responseType = {};
      let mock = {};
      let internal = this.value.internal;
      internal.responseTypes.forEach((response) => {
        responseType[response.label] = response.type;
        mock[response.label] = response.content;
      });
      return {
        uri: internal.uri,
        apiType: "internal",
        responseTypeName: internal.responseTypeName,
        responseTypeStrict: true,
        responseType: responseType,
        config: {
          path: internal.path,
          mock: mock,
        },
      };
    },
  },
};
</script>

<style scoped></style>
