<template>
  <modal
    name="fetch-create-api-get-modal"
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
        <div class="col-sm">
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
      </div>
    </div>
    <div class="modal-footer">
      <button
        v-on:click="hide"
        class="btn btn-outline-secondary property-btn btn-sm m-1"
      >
        閉じる
      </button>
      <button
        v-on:click="commit"
        class="btn btn-outline-primary property-btn btn-sm m-1"
      >
        作成
      </button>
    </div>
  </modal>
</template>

<script>
export default {
  name: "fetch-create-api-get-modal",
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
      apis: [],
    };
  },
  mounted() {
    this.input.name = "12345";
  },
  methods: {
    hide: function () {
      this.$modal.hide("fetch-create-api-get-modal");
    },
    addApi: function (apiType) {
      console.log(apiType);
    },
    commit: function () {
      this.hide();
    },
  },
};
</script>

<style scoped>
.fetch-apis-div {
  border-color: grey;
}
</style>
