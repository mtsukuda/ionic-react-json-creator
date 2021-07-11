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
      <attribute-ion-card
        v-model="input"
        v-bind:tag-temp="value.tagTemp"
        v-bind:fetch-temp="value.fetchTemp"
      />
      <attribute-ion-card-header
        v-model="input"
        v-bind:tag-temp="value.tagTemp"
        v-bind:fetch-temp="value.fetchTemp"
      />
      <attribute-ion-card-title
        v-model="input"
        v-bind:tag-temp="value.tagTemp"
        v-bind:fetch-temp="value.fetchTemp"
      />
      <attribute-ion-card-subtitle
        v-model="input"
        v-bind:tag-temp="value.tagTemp"
        v-bind:fetch-temp="value.fetchTemp"
      />
      <attribute-ion-card-content
        v-model="input"
        v-bind:tag-temp="value.tagTemp"
        v-bind:fetch-temp="value.fetchTemp"
      />
      <attribute-ion-button
        v-model="input"
        v-bind:tag-temp="value.tagTemp"
        v-bind:fetch-temp="value.fetchTemp"
      />
      <attribute-ion-label
        v-model="input"
        v-bind:tag-temp="value.tagTemp"
        v-bind:fetch-temp="value.fetchTemp"
      />
      <attribute-ion-chip
        v-model="input"
        v-bind:tag-temp="value.tagTemp"
        v-bind:fetch-temp="value.fetchTemp"
      />
      <attribute-ion-fab
        v-model="input"
        v-bind:tag-temp="value.tagTemp"
        v-bind:fetch-temp="value.fetchTemp"
      />
      <attribute-ion-fab-button
        v-model="input"
        v-bind:tag-temp="value.tagTemp"
        v-bind:fetch-temp="value.fetchTemp"
      />
      <attribute-ion-fab-list
        v-model="input"
        v-bind:tag-temp="value.tagTemp"
        v-bind:fetch-temp="value.fetchTemp"
      />
      <div v-if="value.tagTemp.editTag === 'div'">
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
      <!--      <div v-else>-->
      <!--        <p class="small">プロパティはありません</p>-->
      <!--      </div>-->
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
import tag from "../../mixin/tag";
import AttributeIonCard from "./layout-tag-attribute-modal/attribute-ion-card";
import AttributeIonCardHeader from "./layout-tag-attribute-modal/attribute-ion-card-header";
import AttributeIonCardTitle from "./layout-tag-attribute-modal/attribute-ion-card-title";
import AttributeIonCardSubtitle from "./layout-tag-attribute-modal/attribute-ion-card-subtitle";
import AttributeIonCardContent from "./layout-tag-attribute-modal/attribute-ion-card-content";
import AttributeIonButton from "./layout-tag-attribute-modal/attribute-ion-button";
import AttributeIonLabel from "./layout-tag-attribute-modal/attribute-ion-label";
import AttributeIonChip from "./layout-tag-attribute-modal/attribute-ion-chip";
import AttributeIonFab from "./layout-tag-attribute-modal/attribute-ion-fab";
import AttributeIonFabButton from "./layout-tag-attribute-modal/attribute-ion-fab-button";
import AttributeIonFabList from "./layout-tag-attribute-modal/attribute-ion-fab-list";
export default {
  name: "layout-tag-attribute-modal",
  mixins: [tag],
  components: {
    AttributeIonFabList,
    AttributeIonFabButton,
    AttributeIonFab,
    AttributeIonChip,
    AttributeIonLabel,
    AttributeIonCard,
    AttributeIonCardHeader,
    AttributeIonCardTitle,
    AttributeIonCardSubtitle,
    AttributeIonCardContent,
    AttributeIonButton,
    layoutTagAttributeModalProperty,
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
      if (targetTag.readyProps)
        this.input.readyProps = { ...targetTag.readyProps };
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
