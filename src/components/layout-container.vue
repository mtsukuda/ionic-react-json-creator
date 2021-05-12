<template>
  <div class="container pl-1 pr-1">
    <div v-for="(item, index) in value" :key="index">
      <div class="border rounded layout-container-div mb-1">
        <div>
          <div>
            <div v-if="item.root" class="h5 m-3 mt-2 mb-1">
              {{ item.tag }}
            </div>
            <b-nav-item-dropdown v-else :text="item.tag" class="tag">
              <b-dropdown-item
                v-for="tag in ionTags"
                v-on:click="changeTag(tag, item)"
                class="dropdown-mine small"
                >{{ tag.label }}</b-dropdown-item
              >
            </b-nav-item-dropdown>
            <div v-if="item.content" class="small ml-3 mb-1">
              {{ item.content }}
            </div>
            <div v-if="!item.root" class="ml-1 mb-2">
              <button
                v-on:click="addChildTag(item)"
                class="btn btn-outline-primary property-btn btn-sm m-1"
                v-bind:disabled="hasChild(item)"
              >
                👶
              </button>
              <button
                v-on:click="showModal(index)"
                class="btn btn-outline-info property-btn btn-sm m-1"
              >
                プロパティ
              </button>
              <button
                v-on:click="deleteTag(index)"
                class="btn btn-danger property-btn btn-sm m-1"
              >
                削除
              </button>
            </div>

            <layout-property-modal ref="propertyModal" v-model="value[index]" />

            <layout-container
              v-if="item.child && item.child.tags"
              v-model="item.child.tags"
            ></layout-container>
          </div>
        </div>
      </div>

      <div v-if="!item.root && index + 1 === value.length" class="small">
        <b-nav-item-dropdown text="タグ追加 [+]">
          <b-dropdown-item
            v-for="tag in ionTags"
            v-on:click="addTag(tag)"
            class="dropdown-mine small"
            >{{ tag.label }}</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import layoutPropertyModal from "./layout-property-modal";
import ion from "../mixin/ion";
export default {
  name: "layout-container",
  mixins: [ion],
  components: {
    layoutPropertyModal,
  },
  props: {
    value: {},
  },
  mounted() {
    console.log(this.value);
  },
  methods: {
    changeTag: function (newTag, item) {
      item.tag = newTag.tag;
      this.ionAttributeArrangement(item, newTag);
      this.$forceUpdate();
    },
    hasChild: function (item) {
      if (!item.child) return false;
      return !(item.child && item.child.tags && item.child.tags.length === 0);
    },
    addChildTag: function (item) {
      let child = { tag: "div", props: [], rawProps: "" };
      item["child"] = { tags: [] };
      item.child.tags.push(child);
      this.$forceUpdate();
    },
    addTag: function (newTag) {
      let item = {};
      item["tag"] = newTag.tag;
      item["props"] = [];
      item["rawProps"] = "";
      this.ionAttributeArrangement(item, newTag);
      this.value.push(item);
      this.$forceUpdate();
    },
    deleteTag: function (index) {
      this.value.splice(index, 1);
      this.$forceUpdate();
    },
    showModal: function (index) {
      console.log(this.$refs);
      this.$refs.propertyModal[index].show();
    },
  },
};
</script>

<style scoped>
.layout-container-div {
  border-color: grey;
}
.nav-item {
  list-style: none;
}
.tag {
  font-size: large;
  font-weight: bold;
  padding-right: 0.5em;
}
.property-btn {
  font-size: small;
}
</style>
