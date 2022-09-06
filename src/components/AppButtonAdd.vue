<template>
  <v-btn rounded class="app-btn"><v-icon>mdi-plus</v-icon> Criar contato</v-btn>
</template>
<style scoped lang="scss">
@import "@/styles/variables.scss";

.app-btn {
  color: $text-primary !important;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px $black-8,
    inset 0 0 0 0.5px $black-8, 0 2px 4px 0.5px $black-8-16 !important;
  background-color: $light-yellowish-green !important;
}
</style>
