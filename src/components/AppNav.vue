<template>
  <v-app-bar app color="secondary" elevation="0" class="nav">
    <div class="d-flex align-center">
      <router-link to="/">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('../assets/ic-logo.svg')"
          transition="scale-transition"
          width="148"
        />
      </router-link>
    </div>
    <app-button-add v-if="routerName !== 'home'" @click.native="modal" />
    <div class="search">
      <v-text-field
        class="input-search"
        flat
        appendIcon="mdi-magnify"
        v-model="search"
        label="Buscar..."
        hide-details
        single-line
        solo
        dense
      ></v-text-field>
    </div>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  components: {
    AppButtonAdd: () => import("./AppButtonAdd.vue"),
  },
  watch: {
    search(val) {
      this.$store.dispatch("GET_CONTACT", val);
    },
  },
  methods: {
    modal() {
      this.$store.commit("SET_MODAL", true);
    },
  },
  computed: {
    routerName() {
      return this.$route.name;
    },
  },
};
</script>
<style lang="scss">
.nav > .v-toolbar__content {
  // gap: calc(24rem - 148px);
  justify-content: space-between;
}
.search {
  width: 70%;
  .input-search > .v-input__control > .v-input__slot {
    background-color: #e4e7f4 !important;
  }
}
</style>
