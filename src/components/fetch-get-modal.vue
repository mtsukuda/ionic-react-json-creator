<template>
  <modal
    name="fetch-get-modal"
    :draggable="true"
    :resizable="true"
    :scrollable="true"
    height="auto"
  >
    <div class="modal-body">
      <div>
        <div>Fetch method type</div>
        <div class="m-2 font-weight-bold">GET</div>
        <label>Fetch function name</label>
        <div class="col-sm input-sm">
          <input
            class="form-control"
            id="inputFetchName"
            type="text"
            placeholder="Fetch Name"
            v-model="value.fetchTemp.fetchName"
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
              v-for="api in value.fetchTemp.apis"
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
        <fetch-get-api-external-modal
          v-model="value.fetchTemp"
          @close="closeModal"
          @commit="commitModal"
          @update="updateModal"
        ></fetch-get-api-external-modal>
        <fetch-get-api-internal-modal
          v-model="value.fetchTemp"
          @close="closeModal"
          @commit="commitModal"
          @update="updateModal"
        ></fetch-get-api-internal-modal>
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
        v-if="value.fetchTemp.mode === 'create'"
        v-on:click="commit"
        class="btn btn-outline-primary property-btn btn-sm m-1"
        :disabled="createDisable"
      >
        CREATE
      </button>
      <button
        v-if="value.fetchTemp.mode === 'edit'"
        v-on:click="update"
        class="btn btn-outline-primary property-btn btn-sm m-1"
        :disabled="createDisable"
      >
        UPDATE
      </button>
    </div>
  </modal>
</template>

<script>
import FetchGetApiExternalModal from "./fetch-get-api-external-modal";
import FetchGetApiInternalModal from "./fetch-get-api-internal-modal";
export default {
  name: "fetch-get-modal",
  components: {
    FetchGetApiExternalModal,
    FetchGetApiInternalModal,
  },
  props: {
    value: {},
  },
  data() {
    return {
      input: {
        method: "",
        called: ["componentDidMount"],
      },
      apiSelect: [
        { type: "external", label: "External API" },
        { type: "internal", label: "Internal API" },
      ],
      editIndex: 0,
    };
  },
  computed: {
    createDisable() {
      return (
        !this.value.fetchTemp.apis.length || !this.value.fetchTemp.fetchName
      );
    },
  },
  methods: {
    hide: function () {
      this.$modal.hide("fetch-get-modal");
    },
    addApi: function (apiType) {
      if (apiType === "internal") {
        let internal = this.value.fetchTemp.internal;
        let fetchName = this.value.fetchTemp.fetchName;
        internal.mode = "create";
        internal.responseTypeName = this.suggestionName("res", fetchName);
        internal.path = this.suggestionName("lambda", fetchName);
        internal.responseTypes.splice(0);
        internal.responseTypes.push({
          label: "",
          type: "",
          content: "",
        });
      } else {
        let external = this.value.fetchTemp.external;
        external.mode = "create";
        external.uri = "";
        external.responseTypeName = "";
        external.responseType = "";
      }
      this.$modal.show(`fetch-get-api-${apiType}-modal`);
    },
    suggestionName: function (prefix, name) {
      return prefix + name[0].toUpperCase() + name.slice(1);
    },
    editApi: function (responseTypeName) {
      let targetIndex = this.findApi(responseTypeName);
      let apiType = this.value.fetchTemp.apis[targetIndex].apiType;
      if (apiType === "internal") {
        let internal = this.value.fetchTemp.internal;
        let api = this.value.fetchTemp.apis[targetIndex];
        internal.mode = "edit";
        internal.editIndex = targetIndex;
        internal.responseTypeName = api.responseTypeName;
        internal.responseTypes.splice(0);
        _.forEach(api.responseType, (type, label) => {
          let content = this.findMockData(api, label);
          internal.responseTypes.push({
            label: label,
            type: type,
            content: content,
          });
        });
        if (api.config && api.config.path) {
          internal.path = api.config.path;
        }
      } else {
        let external = this.value.fetchTemp.external;
        let targetApi = this.value.fetchTemp.apis[targetIndex];
        external.mode = "edit";
        external.editIndex = targetIndex;
        external.uri = targetApi.uri;
        external.responseTypeName = targetApi.responseTypeName;
        external.responseType = targetApi.responseType;
      }
      this.$modal.show(`fetch-get-api-${apiType}-modal`);
    },
    closeModal: function () {
      console.log("close");
    },
    commitModal: function () {
      console.log("commit");
    },
    updateModal: function () {
      console.log("update");
    },
    commit: function () {
      this.value.fetch.push(this.dataSet());
      this.$emit("commit");
      this.hide();
    },
    update: function () {
      let fetchTemp = this.value.fetchTemp;
      this.value.fetch[fetchTemp.editIndex] = this.dataSet();
      this.$emit("update");
      this.hide();
    },
    dataSet: function () {
      let fetchTemp = this.value.fetchTemp;
      return {
        method: "get",
        name: fetchTemp.fetchName,
        lifeCycleMethods: this.input.called,
        apis: fetchTemp.apis.slice(),
      };
    },
    deleteApi: function (responseTypeName) {
      let targetIndex = this.findApi(responseTypeName);
      this.value.fetchTemp.apis.splice(targetIndex, 1);
    },
    findMockData: function (api, label) {
      if (api.config && api.config.mock && api.config.mock[label]) {
        return api.config.mock[label];
      }
      return "";
    },
    findApi: function (responseTypeName) {
      let targetIndex = 0;
      this.value.fetchTemp.apis.forEach((api, index) => {
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
