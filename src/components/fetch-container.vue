<template>
  <div class="container pl-1 pr-1">
    <div class="border rounded fetch-container-div mb-1">
      <div class="h5 m-2 pl-1 mb-1">fetch</div>
      <b-container class="bv-example-row">
        <b-row
          v-for="(fetch, index) in value"
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
            <b-button size="sm" variant="outline-danger">
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
          新規作成
        </button>
        <fetch-create-modal v-model="value"></fetch-create-modal>
        <fetch-edit-get-modal
          v-model="value"
          @commit="commitEditModal"
        ></fetch-edit-get-modal>
      </div>
    </div>
  </div>
</template>

<script>
import fetchCreateModal from "./fetch-create-modal";
import fetchEditGetModal from "./fetch-edit-get-modal";
export default {
  name: "fetch-container",
  components: {
    fetchCreateModal,
    fetchEditGetModal,
  },
  props: {
    value: {},
  },
  methods: {
    showFetchCreateModal: function () {
      this.$modal.show("fetch-create-modal");
    },
    showFetchEditModal: function (method, index) {
      console.log(`fetch-edit-${method}-modal`);
      this.$modal.show(`fetch-edit-${method}-modal`, { index: index });
    },
    commitEditModal: function () {
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped>
.fetch-container-div {
  border-color: grey;
}
</style>
