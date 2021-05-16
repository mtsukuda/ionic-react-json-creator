<template>
  <modal
    :name="modalId"
    :draggable="true"
    :resizable="true"
    :scrollable="true"
    height="auto"
  >
    <div class="modal-header">
      <h2>{{ value.tag }}</h2>
    </div>
    <div class="modal-body">
      <div v-if="value.tag === 'IonCardTitle'">
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
      <div v-else-if="value.tag === 'IonCardSubtitle'">
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
      <div v-else-if="value.tag === 'IonCardContent'">
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
      <div v-else-if="value.tag === 'div'">
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
      <div class="mt-3 mx-auto text-center">
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
          OK
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
import layoutAttributeModalProperty from "./layout-attribute-modal-property";
export default {
  name: "layout-attribute-modal",
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
      return `modal-attribute-${this.id}`;
    },
  },
  methods: {
    show: function () {
      if (this.value.content) this.input.content = this.value.content;
      if (this.value.rawProps) this.input.property = this.value.rawProps;
      this.$modal.show(this.modalId);
    },
    commit: function () {
      this.value["content"] = this.input.content;
      this.value["rawProps"] = this.input.property;
      this.value["props"] = this.propertyList(this.input.property);
      this.$modal.hide(this.modalId);
    },
    propertyList: function (rawProperty) {
      return rawProperty.split("\n");
    },
    hide: function () {
      this.$modal.hide(this.modalId);
    },
  },
};
</script>

<style scoped></style>
