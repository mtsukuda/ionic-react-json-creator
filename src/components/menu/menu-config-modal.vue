<template>
  <modal
    name="menu-config-modal"
    :draggable="true"
    :resizable="true"
    :scrollable="true"
    height="auto"
  >
    <div class="modal-body">
      <div>
        <label for="inputMenuCaption">Menu caption</label>
        <div class="col-sm mb-2">
          <input
            class="form-control input-sm"
            id="inputMenuCaption"
            type="text"
            placeholder="Menu Caption"
            v-model=""
          />
          <label for="inputMenuIcon">Menu icon</label>
          <div class="col-sm mb-2">
            <input
              class="form-control input-sm"
              id="inputMenuIcon"
              type="text"
              placeholder="Menu Icon"
              v-model=""
            />
          </div>
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
        v-on:click=""
        class="btn btn-outline-primary property-btn btn-sm m-1"
      >
        OK
      </button>
    </div>
  </modal>
</template>

<script>
export default {
  name: "menu-config-modal",
  props: {
    value: {},
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    hide: function () {
      this.$modal.hide("menu-config-modal");
    },
    commit: function () {
      // this.value.apis.push(this.dataSet());
      this.hide();
    },
    update: function () {
      // this.value.apis[this.value.editIndex] = this.dataSet();
      this.hide();
    },
    dataSet: function () {},
  },
};
</script>

<style scoped></style>
