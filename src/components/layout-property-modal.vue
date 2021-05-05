<template>
  <modal :name="modalId" :draggable="true" :resizable="true">
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
export default {
  name: "layout-property-modal",
  props: {
    value: {},
  },
  data() {
    return {
      id: null,
      input: {
        content: "",
      },
    };
  },
  mounted() {
    this.id = this._uid;
  },
  computed: {
    modalId() {
      return `modal-property-${this.id}`;
    },
  },
  methods: {
    show: function () {
      if (this.value.content) this.input.content = this.value.content;
      this.$modal.show(this.modalId);
    },
    commit: function () {
      this.value["content"] = this.input.content;
      this.$modal.hide(this.modalId);
    },
    hide: function () {
      this.$modal.hide(this.modalId);
    },
  },
};
</script>

<style scoped></style>
