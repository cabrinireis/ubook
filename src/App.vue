<template>
  <v-app>
    <app-nav></app-nav>
    <v-main class="app-container">
      <v-alert
        class="app-notification"
        v-if="notification.active"
        shaped
        prominent
        :type="notification.type"
      >
        {{ notification.text }}
      </v-alert>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppNav from "./components/AppNav.vue";
import { mapState } from "vuex";
export default {
  components: { AppNav },
  name: "App",

  data: () => ({
    //
  }),
  computed: {
    ...mapState({
      notification: (state) => state.notification,
    }),
  },
  watch: {
    notification(newValue) {
      if (newValue.active) {
        var temp = setTimeout(() => {
          this.$store.commit("SET_NOTIFICATION", false);
        }, 5000);
      } else {
        clearTimeout(temp);
      }
    },
  },
};
</script>
<style lang="scss">
.app-notification {
  width: 300px;
  display: flex;
  right: 0;
  position: absolute;
}
.app-container {
  background-color: #f8f9fd !important;
}
</style>
