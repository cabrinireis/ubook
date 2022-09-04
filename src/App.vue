<template>
  <v-app>
    <app-nav></app-nav>
    <v-main class="app-container">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppNav from "./components/AppNav.vue";
export default {
  components: { AppNav },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.app-container {
  background-color: #f8f9fd !important;
}
</style>
