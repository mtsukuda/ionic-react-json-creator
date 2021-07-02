<template>
  <div class="container pl-1 pr-1">
    <div v-for="(item, index) in value.tags" :key="index">
      <div class="border rounded layout-container-div mb-1">
        <div>
          <div>
            <div v-if="item.root" class="h5 m-2 pl-1 mb-1">
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
            <div v-if="!item.root" class="ml-1">
              <button
                v-on:click="showModal(item.uid, item.tag)"
                class="btn btn-outline-secondary property-btn btn-sm m-1"
                v-b-tooltip.hover
                title="Property"
              >
                <b-icon icon="card-list" aria-label="CardList"></b-icon>
              </button>
              <button
                v-on:click=""
                class="btn btn-outline-secondary property-btn btn-sm m-1"
                v-b-tooltip.hover
                title="Duplicate"
              >
                <b-icon icon="files" aria-label="Duplicate"></b-icon>
              </button>
              <button
                v-on:click="deleteTag(index)"
                class="btn btn-outline-danger property-btn btn-sm m-1"
                v-b-tooltip.hover
                title="Delete"
              >
                <b-icon icon="trash" aria-label="Delete"></b-icon>
              </button>
            </div>
            <div v-if="!item.root" class="small mb-2">
              <b-nav-item-dropdown
                text="CHILD [+]"
                v-bind:disabled="hasChild(item)"
              >
                <b-dropdown-item
                  v-for="tag in ionTags"
                  v-on:click="addChildTag(item, tag)"
                  class="dropdown-mine small"
                  >{{ tag.label }}</b-dropdown-item
                >
              </b-nav-item-dropdown>
            </div>

            <layout-container
              v-if="item.child && item.child.tags"
              v-model="item.child"
              v-bind:config-json="configJson"
            />
          </div>
        </div>
      </div>

      <div v-if="!item.root && index + 1 === value.tags.length" class="small">
        <b-nav-item-dropdown text="TAG [+]">
          <b-dropdown-item
            v-for="tag in ionTags"
            v-on:click="addTag(tag)"
            class="dropdown-mine small"
            >{{ tag.label }}</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </div>
    </div>
    <layout-tag-attribute-modal ref="tagAttributeModal" v-model="configJson" />
  </div>
</template>

<script>
import ion from "../../mixin/ion";
import tag from "../../mixin/tag";
import helper from "../../mixin/helper";
import LayoutTagAttributeModal from "./layout-tag-attribute-modal";
const clone = require("clone");
export default {
  name: "layout-container",
  mixins: [ion, tag, helper],
  components: {
    LayoutTagAttributeModal,
  },
  props: {
    value: {},
    configJson: {},
  },
  methods: {
    changeTag: function (newTag, item) {
      item.tag = newTag.tag;
      this.ionAttributeArrangement(item, newTag);
    },
    hasChild: function (item) {
      if (!item.child) return false;
      return !(item.child && item.child.tags && item.child.tags.length === 0);
    },
    addChildTag: function (item, newTag) {
      let child = {
        uid: this.uID(),
        tag: newTag.tag,
        props: [],
        rawProps: "",
      };
      let targetTag = this.targetNode(this.configJson.tags, item.uid);
      this.$set(targetTag, "child", { tags: [] });
      targetTag.child.tags.push(child);
    },
    addTag: function (newTag) {
      let item = {
        uid: this.uID(),
        tag: newTag.tag,
        props: [],
        rawProps: "",
      };
      this.ionAttributeArrangement(item, newTag);
      this.value.tags.push(item);
    },
    deleteTag: function (index) {
      this.value.tags.splice(index, 1);
    },
    showModal: function (uid, tag) {
      this.configJson.tagTemp.editTagUID = uid;
      this.configJson.tagTemp.editTag = tag;
      this.$refs.tagAttributeModal.show();
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
