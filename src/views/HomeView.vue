<template>
  <div>
    <page-home @open="($event) => (dialog = $event)" />
    <v-dialog v-if="dialog" v-model="dialog" width="500">
      <app-form @close="dialog = false" />
    </v-dialog>
  </div>
</template>

<script>
// import pageHome from "../Pages/home.vue";

export default {
  components: {
    pageHome: () => import("@/Pages/home.vue"),
    AppForm: () => import("@/components/AppForm.vue"),
  },

  data() {
    return {
      dialog: false,
    };
  },
};
</script>
