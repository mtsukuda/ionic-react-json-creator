<template>
  <div class="container pl-1 pr-1">
    <div class="border rounded fetch-container-div mb-1">
      <div class="h5 m-2 pl-1 mb-1">fetch</div>
      <b-container class="bv-example-row">
        <b-row
          v-for="(fetch, index) in value.fetch"
          class="border rounded m-1 p-2 fetch-api-div"
        >
          <b-col class="p-0">
            <div class="small">
              Method: <strong>{{ fetch.method.toUpperCase() }}</strong
              ><br />Function Name: <strong>{{ fetch.name }}</strong>
            </div>
          </b-col>
          <b-col cols="3" class="text-right p-0 pt-1">
            <b-button
              size="sm"
              variant="outline-primary"
              class="mr-1"
              v-on:click="showFetchEditModal(fetch.method, index)"
            >
              <b-icon icon="pencil" aria-label="Edit"></b-icon>
            </b-button>
            <b-button
              size="sm"
              variant="outline-danger"
              v-on:click="deleteFetch(fetch.name)"
            >
              <b-icon icon="trash" aria-label="Delete"></b-icon>
            </b-button>
          </b-col>
        </b-row>
      </b-container>
      <div class="m-1">
        <button
          v-on:click="showFetchCreateModal"
          class="btn btn-outline-info property-btn btn-sm m-1"
        >
          NEW FETCH
        </button>
        <fetch-create-modal v-model="value"></fetch-create-modal>
        <fetch-get-modal v-model="value" ref="getModal"></fetch-get-modal>
      </div>
    </div>
  </div>
</template>

<script>
import fetchCreateModal from "./fetch-create-modal";
import FetchGetModal from "./fetch-get-modal";
export default {
  name: "fetch-container",
  components: {
    fetchCreateModal,
    FetchGetModal,
  },
  props: {
    value: {},
  },
  methods: {
    showFetchCreateModal: function () {
      this.$modal.show("fetch-create-modal");
    },
    showFetchEditModal: function (method, index) {
      if (method === "get") {
        this.$refs.getModal.editMode(null, index);
        this.value.fetchTemp.mode = "create";
        this.value.fetchTemp.editIndex = index;
        this.value.fetchTemp.fetchName = this.value.fetch[index].name;
        this.value.fetchTemp.apis.splice(0);
        this.value.fetch[index].apis.forEach((api) => {
          this.value.fetchTemp.apis.push(api);
        });
        this.$modal.show("fetch-get-modal");
      }
    },
    deleteFetch: function (name) {
      let targetIndex = 0;
      this.value.fetch.forEach((fetch, index) => {
        if (fetch.name === name) {
          targetIndex = index;
        }
      });
      this.value.fetch.splice(targetIndex, 1);
    },
  },
};
</script>

<style scoped>
.fetch-container-div {
  border-color: grey;
}
</style>
