<template>
  <div>
    <hello-world @open="($event) => (dialog = $event)" />
    <v-dialog v-model="dialog" width="500">
      <app-form @close="dialog = false" />
    </v-dialog>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  components: {
    HelloWorld,
    AppForm: () => import("@/components/AppForm.vue"),
  },

  data() {
    return {
      dialog: false,
    };
  },
};
</script>
