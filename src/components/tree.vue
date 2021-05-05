<template>
  <draggable
    :list="list"
    :value="value"
    tag="ul"
    @input="emitter"
    :group="{
      name: 'dates',
    }"
  >
    <li class="form-check" v-for="(item, index) in realValue" :key="index">
      <div>
        <div class="border" style="padding: 4px">{{ item.tag }}</div>
        <input
          type="checkbox"
          name="items"
          class="form-check-input"
          v-model="item.checked"
        />
        <input
          id="name"
          type="text"
          class="form-control my-3"
          v-model="item.name"
        />
        <tree-child :list="item.child"></tree-child>
      </div>
    </li>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "tree-child",
  components: { draggable },
  props: {
    list: {},
    value: {},
  },
  computed: {
    realValue() {
      return this.value ? this.value : this.list;
    },
  },
  methods: {
    emitter(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
input[type="checkbox"] {
  margin-top: 13px;
}
input[type="text"] {
  max-width: 200px;
}
</style>
