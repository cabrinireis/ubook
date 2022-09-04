<template>
  <v-app-bar app color="secondary" elevation="0" class="nav">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        :src="require('../assets/ic-logo.svg')"
        transition="scale-transition"
        width="148"
      />
    </div>
    <v-text-field
      class="input-search"
      flat
      appendIcon="mdi-magnify"
      v-model="last"
      label="Buscar..."
      hide-details
      single-line
      solo
      dense
    ></v-text-field>
  </v-app-bar>
</template>
<style lang="scss">
.nav > .v-toolbar__content {
  gap: calc(24rem - 148px);
}
.input-search > .v-input__control > .v-input__slot {
  background-color: #e4e7f4 !important;
}
</style>
