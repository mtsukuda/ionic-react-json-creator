<template>
  <modal
    name="fetch-create-get-modal"
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
                <b-button
                  size="sm"
                  variant="outline-primary"
                  class="mr-1"
                  v-on:click="editApi(api.responseTypeName)"
                >
                  <b-icon icon="pencil" aria-label="Edit"></b-icon>
                </b-button>
                <b-button
                  size="sm"
                  variant="outline-danger"
                  v-on:click="deleteApi(api.responseTypeName)"
                >
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
        <fetch-create-get-api-internal-modal
          v-model="apis"
          @close="closeModal"
          @commit="commitModal"
          ref="internal"
        ></fetch-create-get-api-internal-modal>
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
        CREATE
      </button>
    </div>
  </modal>
</template>

<script>
import FetchCreateGetApiExternalModal from "./fetch-create-get-api-external-modal";
import FetchCreateGetApiInternalModal from "./fetch-create-get-api-internal-modal";
export default {
  name: "fetch-create-get-modal",
  components: {
    FetchCreateGetApiExternalModal,
    FetchCreateGetApiInternalModal,
  },
  props: {
    value: {},
  },
  data() {
    return {
      input: {
        name: "",
        method: "",
        called: ["componentDidMount"],
      },
      apiSelect: [
        { type: "external", label: "External API" },
        { type: "internal", label: "Internal API" },
      ],
      apis: [],
    };
  },
  mounted() {
    this.input.name = "hogeHoge";
  },
  computed: {
    createDisable() {
      return !this.apis.length || !this.input.name;
    },
  },
  methods: {
    hide: function () {
      this.$modal.hide("fetch-create-get-modal");
    },
    addApi: function (apiType) {
      if (apiType === "internal") {
        this.$refs.internal.createMode(this.input.name);
      }
      this.$modal.show(`fetch-create-get-api-${apiType}-modal`);
    },
    editApi: function (responseTypeName) {
      let targetIndex = this.findApi(responseTypeName);
      let apiType = this.apis[targetIndex].apiType;
      if (apiType === "internal") {
        this.$refs.internal.editMode(this.apis[targetIndex]);
      }
      this.$modal.show(`fetch-create-get-api-${apiType}-modal`);
    },
    closeModal: function () {
      console.log("close");
    },
    commitModal: function () {
      console.log("commit");
    },
    commit: function () {
      this.value.fetch.push({
        method: "get",
        name: this.input.name,
        lifeCycleMethods: this.input.called,
        apis: this.apis,
      });
      this.$emit("commit");
      this.hide();
    },
    deleteApi: function (responseTypeName) {
      let targetIndex = this.findApi(responseTypeName);
      this.apis.splice(targetIndex, 1);
    },
    findApi: function (responseTypeName) {
      let targetIndex = 0;
      this.apis.forEach((api, index) => {
        if (api.responseTypeName === responseTypeName) {
          targetIndex = index;
        }
      });
      return targetIndex;
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
