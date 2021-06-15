<template>
  <modal
    :name="modalId"
    :draggable="true"
    :resizable="true"
    :scrollable="true"
    height="auto"
  >
    <div class="modal-header">
      <h2>{{ value.tagTemp.editTag }}</h2>
    </div>
    <div class="modal-body">
      <div v-if="value.tagTemp.editTag === 'IonCardTitle'">
        <label for="inputIonCardTitle">カードタイトル</label>
        <div class="col-sm">
          <input
            class="form-control"
            id="inputIonCardTitle"
            type="text"
            placeholder="カードタイトル"
            v-model="input.content"
          />
        </div>
      </div>
      <div v-else-if="value.tagTemp.editTag === 'IonCardSubtitle'">
        <label for="inputIonCardSubTitle">サブタイトル</label>
        <div class="col-sm">
          <input
            class="form-control"
            id="inputIonCardSubTitle"
            type="text"
            placeholder="サブタイトル"
            v-model="input.content"
          />
        </div>
      </div>
      <div v-else-if="value.tagTemp.editTag === 'IonCardContent'">
        <label for="inputIonCardContent">コンテンツ</label>
        <div class="col-sm">
          <input
            class="form-control"
            id="inputIonCardContent"
            type="text"
            placeholder="コンテンツ：改行させたい場合は<br />で改行"
            v-model="input.content"
          />
        </div>
      </div>
      <div v-else-if="value.tagTemp.editTag === 'div'">
        <label for="inputDiv">コンテンツ</label>
        <div class="col-sm">
          <input
            class="form-control"
            id="inputDiv"
            type="text"
            placeholder="コンテンツ"
            v-model="input.content"
          />
        </div>
      </div>
      <div v-else>
        <p>プロパティはありません</p>
      </div>
      <layout-attribute-modal-property
        v-model="input"
      ></layout-attribute-modal-property>
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
      >
        OK
      </button>
    </div>
  </modal>
</template>

<script>
import layoutAttributeModalProperty from "./layout-attribute-modal-property";
import tag from "../mixin/tag";
export default {
  name: "layout-tag-attribute-modal",
  mixins: [tag],
  components: {
    layoutAttributeModalProperty,
  },
  props: {
    value: {},
  },
  data() {
    return {
      id: null,
      input: {
        content: "",
        property: "",
      },
    };
  },
  mounted() {
    this.id = this._uid;
  },
  computed: {
    modalId() {
      return `modal-tag-attribute-${this.id}`;
    },
  },
  methods: {
    show: function () {
      let targetTag = this.targetTag(
        this.value.tags,
        this.value.tagTemp.editTagUID
      );
      if (targetTag === null)
        throw `Could not find tag object [${this.value.tagTemp.editTagUID}]`;
      if (targetTag.content) this.input.content = targetTag.content;
      if (targetTag.rawProps) this.input.property = targetTag.rawProps;
      this.$modal.show(this.modalId);
    },
    commit: function () {
      this.updateTag(
        this.value.tags,
        this.value.tagTemp.editTagUID,
        this.input
      );
      this.$modal.hide(this.modalId);
    },
    hide: function () {
      this.$modal.hide(this.modalId);
    },
  },
};
</script>

<style scoped></style>
