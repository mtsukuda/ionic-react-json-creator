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
              aria-label="Content"
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
            <b-button variant="outline-danger" class="ml-1"
              ><b-icon icon="trash" aria-label="Delete"></b-icon
            ></b-button>
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
      responseTypes: [
        {
          label: "",
          type: "",
        },
      ],
      mockParams: [
        {
          label: "",
          content: "",
        },
      ],
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
