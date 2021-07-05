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
        <attribute-ion-card-title
          v-model="input"
          v-bind:fetch-temp="value.fetchTemp"
        />
      </div>
      <div v-else-if="value.tagTemp.editTag === 'IonCardSubtitle'">
        <attribute-ion-card-subtitle
          v-model="input"
          v-bind:fetch-temp="value.fetchTemp"
        />
      </div>
      <div v-else-if="value.tagTemp.editTag === 'IonCardContent'">
        <label for="inputIonCardContent"
          >コンテンツ<b-form-checkbox
            id="use-fetch-code"
            name="use-fetch-code"
            value="yes"
            unchecked-value=""
            v-model="input.code"
          >
            Use Fetch Code
          </b-form-checkbox></label
        >
        <div class="col-sm">
          <input
            class="form-control"
            size="sm"
            id="inputIonCardContent"
            type="text"
            placeholder="コンテンツ：改行させたい場合は<br />で改行"
            v-model="input.content"
            list="list-response"
          />
        </div>
      </div>
      <div v-else-if="value.tagTemp.editTag === 'div'">
        <label for="inputDiv">コンテンツ</label>
        <div class="col-sm">
          <input
            class="form-control"
            size="sm"
            id="inputDiv"
            type="text"
            placeholder="コンテンツ"
            v-model="input.content"
          />
        </div>
      </div>
      <div v-else>
        <p class="small">プロパティはありません</p>
      </div>
      <layout-tag-attribute-modal-property v-model="input" />
    </div>
    <datalist id="list-response">
      <option v-for="list in value.fetchTemp.responseList">{{ list }}</option>
    </datalist>
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
import layoutTagAttributeModalProperty from "./layout-tag-attribute-modal-property";
import AttributeIonCardTitle from "./layout-tag-attribute-modal/attribute-ion-card-title";
import AttributeIonCardSubtitle from "./layout-tag-attribute-modal/attribute-ion-card-subtitle";
import tag from "../../mixin/tag";
export default {
  name: "layout-tag-attribute-modal",
  mixins: [tag],
  components: {
    layoutTagAttributeModalProperty,
    AttributeIonCardTitle,
    AttributeIonCardSubtitle,
  },
  props: {
    value: {},
  },
  data() {
    return {
      id: null,
      input: {
        code: "",
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
      let targetTag = this.targetNode(
        this.value.tags,
        this.value.tagTemp.editTagUID
      );
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
