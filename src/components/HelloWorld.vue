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
        <v-btn rounded class="app-btn"
          ><v-icon>mdi-plus</v-icon> Criar contato</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>
<style lang="scss">
@import "@/styles/variables.scss";

.v-btn {
  color: $text-primary !important;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px $black-8,
    inset 0 0 0 0.5px $black-8, 0 2px 4px 0.5px $black-8-16 !important;
  background-color: $light-yellowish-green !important;
}
</style>
