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
        <b-form-group label="Select method type:" v-slot="{ ariaDescribedby }">
          <b-form-radio-group
            id="radio-group-1"
            v-model="method.selected"
            :options="method.options"
            :aria-describedby="ariaDescribedby"
            name="radio-options"
          ></b-form-radio-group>
        </b-form-group>
        <label for="inputFetchName">Name</label>
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
      <div class="small mb-2">
        <b-nav-item-dropdown text="👶 [+]">
          <b-dropdown-item
            v-for="api in apiSelect"
            v-on:click="addApi(api.type)"
            class="dropdown-mine small"
            >{{ api.label }}</b-dropdown-item
          >
        </b-nav-item-dropdown>
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
      method: {
        selected: "get",
        options: [
          { text: "GET", value: "get" },
          { text: "POST", value: "post" },
          { text: "PUT", value: "put", disabled: true },
          { text: "DELETE", value: "delete", disabled: true },
        ],
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

<style scoped></style>
