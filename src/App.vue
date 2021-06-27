<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-6">
        <div class="p-1">
          <h1>Ionic JSON Layout Manager</h1>
        </div>
      </div>
      <div class="col-6 d-flex align-items-center pt-2">
        <b-form-group label="" v-slot="{ ariaDescribedby }">
          <b-form-radio-group
            id="radio-group-1"
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            name="radio-options"
          />
        </b-form-group>
      </div>
    </div>
    <component-list-template
      v-model="configList"
      v-if="selected === 'component' && configList.temp.status === 'list'"
    />
    <component-template
      v-model="config"
      v-bind:view-config="viewConfig"
      v-bind:config-list="configList"
      v-if="selected === 'component' && configList.temp.status === 'component'"
    />
    <menu-template v-if="selected === 'menu'" v-model="menuConfig" />
  </div>
</template>

<script>
import tag from "./mixin/tag";
import appData from "./mixin/app-data";
import helper from "./mixin/helper";
import ComponentListTemplate from "./components/component-list-template";
import ComponentTemplate from "./components/component-template";
import MenuTemplate from "./components/menu-template";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.css";

export default {
  mixins: [tag, appData, helper],
  components: {
    ComponentListTemplate,
    MenuTemplate,
    ComponentTemplate,
  },
  mounted() {
    this.addConfig(this.configList.list);
  },
  computed: {
    config() {
      return this.activeConfig(this.configList);
    },
  },
  data() {
    return {
      selected: "component",
      options: [
        { text: "Menu", value: "menu", disabled: false },
        { text: "Component", value: "component", disabled: false },
      ],
      viewConfig: {
        tags: "tags",
        imports: "",
        fetch: "fetch",
        debug: "",
        tagUid: "",
      },
    };
  },
};
</script>

<style>
h1 {
  font-size: x-large;
}
</style>
