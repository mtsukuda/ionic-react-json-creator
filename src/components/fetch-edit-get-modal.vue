<template>
  <modal
    name="fetch-edit-get-modal"
    @before-open="beforeOpen"
    :draggable="true"
    :resizable="true"
    :scrollable="true"
    height="auto"
  >
    <div class="modal-body">
      <div>
        <div>Fetch method type</div>
        <div class="m-2 font-weight-bold">GET</div>
        <label for="inputFetchName">Fetch function name</label>
        <div class="col-sm input-sm">
          <input
            class="form-control"
            id="inputFetchName"
            type="text"
            placeholder="Fetch Name"
            v-model="input.name"
          />
        </div>
      </div>
      <div class="mt-1 mb-1">APIs</div>
      <div class="border rounded fetch-apis-div mt-1 ml-3 mr-3">
        <div class="small mb-2">
          <b-nav-item-dropdown text="Add API [+]" class="list-unstyled pt-2">
            <b-dropdown-item
              v-for="api in apiSelect"
              v-on:click="addApi(api.type)"
              class="dropdown-mine small"
              >{{ api.label }}</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </div>
        <div>
          <b-container class="p-0">
            <b-row
              v-for="api in apis"
              class="border rounded m-2 p-2 fetch-api-div"
            >
              <b-col class="p-0">
                <div class="small">
                  {{ api.responseTypeName }}<br />
                  {{ api.uri }}
                </div>
              </b-col>
              <b-col cols="3" class="p-0 pt-1 text-right">
                <b-button size="sm" variant="outline-primary" class="mr-1">
                  <b-icon icon="pencil" aria-label="Edit"></b-icon>
                </b-button>
                <b-button size="sm" variant="outline-danger">
                  <b-icon icon="trash" aria-label="Delete"></b-icon>
                </b-button>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <fetch-create-get-api-external-modal
          v-model="apis"
          @close="closeModal"
          @commit="commitModal"
        ></fetch-create-get-api-external-modal>
      </div>
    </div>
    <div class="modal-footer">
      <button
        v-on:click="hide"
        class="btn btn-outline-secondary property-btn btn-sm m-1"
      >
        CLOSE
      </button>
      <button
        v-on:click="commit"
        class="btn btn-outline-primary property-btn btn-sm m-1"
        :disabled="createDisable"
      >
        UPDATE
      </button>
    </div>
  </modal>
</template>

<script>
import FetchCreateGetApiExternalModal from "./fetch-create-get-api-external-modal";
export default {
  name: "fetch-edit-get-modal",
  components: { FetchCreateGetApiExternalModal },
  props: {
    value: {},
  },
  data() {
    return {
      input: {
        name: "",
        method: "",
      },
      apiSelect: [
        { type: "external", label: "External API" },
        { type: "internal", label: "Internal API" },
      ],
      valueIndex: 0,
      apis: [],
    };
  },
  computed: {
    createDisable() {
      return !this.apis.length || !this.input.name;
    },
  },
  methods: {
    beforeOpen: function (event) {
      this.valueIndex = event.params.index;
      console.log(event.params.index);
      this.input.name = this.value[this.valueIndex].name;
      this.apis = this.value[this.valueIndex].apis;
    },
    hide: function () {
      this.$modal.hide("fetch-edit-get-modal");
    },
    addApi: function (apiType) {
      if (apiType === "external") {
        this.$modal.show("fetch-create-get-api-external-modal");
      }
      console.log(apiType);
    },
    closeModal: function () {
      console.log("close");
    },
    commitModal: function () {
      console.log("commit");
    },
    commit: function () {
      this.value[this.valueIndex] = {
        method: "get",
        name: this.input.name,
        apis: this.apis,
      };
      this.$emit("commit");
      this.hide();
    },
  },
};
</script>

<style scoped>
.fetch-apis-div {
  border-color: grey;
}
.fetch-api-div {
  color: #6f6f6f;
}
</style>
