<template>
  <div class="text-center">
    <v-card>
      <v-card-title class="text-h7 app-ModalTitle">
        {{ mode === "edit" ? "Editar contato" : "Criar Novo contato" }}
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col class="text-left" cols="12" sm="12" md="12">
              <label> Nome</label>
              <v-text-field
                v-model="form.name"
                dense
                outlined
                hide-details
                single-line
              ></v-text-field>
            </v-col>
            <v-col class="text-left" cols="12" sm="12" md="12">
              <label>Email</label>
              <v-text-field
                v-model="form.email"
                type="email"
                dense
                outlined
                hide-details
                single-line
              ></v-text-field>
            </v-col>
            <v-col class="text-left" cols="12" sm="5" md="5">
              <label>Telefone</label>
              <v-text-field
                v-model="form.phone"
                dense
                maxlength="15"
                outlined
                hide-details
                single-line
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn id="app-btnCancel" color="error" text @click="close">
          Cancelar
        </v-btn>
        <v-btn
          class="app-btnSave"
          color="error"
          light
          rounded
          :disabled="valid"
          @click="save"
        >
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    dataform: {
      type: Object,
      default: () => {},
    },
    mode: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      active: false,
      form: {
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  watch: {
    "form.phone"() {
      let v = this.form.phone;
      v = v.replace(/\D/g, "");
      v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
      v = v.replace(/(\d)(\d{4})$/, "$1-$2");
      return (this.form.phone = v);
    },
  },
  computed: {
    valid() {
      return this.form.name || this.form.email || this.form.phone
        ? false
        : true;
    },
  },
  mounted() {
    if (this.mode === "edit") this.form = { ...this.dataform };
  },
  methods: {
    save() {
      if (this.mode !== "") {
        this.$store.dispatch("UPDATE", this.form);
        this.$emit("close");
      } else {
        this.$store.dispatch("SAVE", this.form);
        this.$emit("close");
      }
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss">
@import "@/styles/variables.scss";
.app-btnSave.v-btn.v-btn--disabled.v-btn--has-bg {
  background-color: $text-primary !important;
  opacity: 32%;
  color: #fff !important;
  span {
    text-transform: initial;
    margin-right: 12px !important;
    margin-left: 12px !important;
  }
}
.app-ModalTitle {
  color: $text-dark !important;
  font-size: 16px !important;
  font-weight: normal;
}
</style>
