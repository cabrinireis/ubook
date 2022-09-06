<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="mt-16">
        <v-img
          :src="require('../assets/ic-book.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <p class="subheading font-weight-regular">
          Nenhum contato foi criado ainda.
        </p>
        <app-button-add @click.native="modal" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    AppButtonAdd: () => import("@/components/AppButtonAdd.vue"),
  },
  name: "HelloWorld",

  data: () => ({
    value: false,
  }),
  methods: {
    modal() {
      this.$emit("open", true);
    },
  },
};
</script>
