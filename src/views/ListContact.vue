<template>
  <div class="pa-5">
    <template>
      <v-data-table
        :headers="headers"
        :items="list"
        :items-per-page="10"
        class="elevation-1 app-list"
        hide-default-footer
      >
        <template #[`item.phone`]="{ item }">
          <td>{{ item.phone }}</td>
        </template>
        <template #[`item.actions`]="{ item }">
          <v-icon small class="mr-2" data-test="update" @click="edit(item)">
            mdi-pencil
          </v-icon>
          <v-icon small data-test="delete"> mdi-delete :id="item"</v-icon>
        </template>
      </v-data-table>
      <v-dialog v-if="active" v-model="active" width="500">
        <app-form :dataform="formEdit" :mode="mode" @close="close" />
      </v-dialog>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  components: {
    AppForm: () => import("@/components/AppForm.vue"),
  },
  data() {
    return {
      users: [],
      mode: "",
      dialog: false,
      formEdit: {},
      headers: [
        {
          text: "Contatos",
          width: "30%",
          class: "aaa",
          value: "name",
        },
        { text: "Email", class: "aaa", value: "email" },
        { text: "Telefone", class: "aaa", value: "phone" },
        {
          text: "Ações",
          value: "actions",
          sortable: false,
          align: "center",
          width: "150",
        },
      ],
    };
  },
  methods: {
    edit(edit) {
      this.mode = "edit";
      this.formEdit = edit;
      this.$store.commit("SET_MODAL", true);
    },
    save() {
      const data = {
        name: "Alves",
      };
      fetch("/api/users/", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res) this.list();
        })
        .catch((err) => console.log(err));
    },
    close() {
      this.formEdit = null;
      this.$store.commit("SET_MODAL", false);
    },
    ...mapActions({
      getList: "GET_CONTACT",
    }),
  },

  computed: {
    ...mapState({
      active: (state) => state.modalActive,
      list: (state) => state.contactList,
    }),
  },
  created() {
    this.getList();
  },
};
</script>
<style lang="scss">
.app-list {
  tbody {
    tr:hover {
      cursor: pointer;
      background-color: #fff3f2 !important;
    }
  }
}
.aaa {
  color: #9198af !important;
  font-weight: normal;
}
</style>
