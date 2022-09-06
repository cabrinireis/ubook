<template>
  <div class="pa-5">
    <template>
      <v-data-table
        :headers="headers"
        :items="list"
        :items-per-page="10"
        class="elevation-1 app-list"
        :item-key="'id'"
        :item-class="() => classrow"
        hide-default-footer
      >
        <!-- <template #item="props">
          <tr data-test="item" class="rowtemp">
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.email }}</td>
            <td>{{ props.item.phone }}</td>
          </tr>
        </template> -->

        <template #[`item.phone`]="{ item }">
          <td>{{ item.phone }}</td>
        </template>
        <template #[`item.actions`]="{ item }">
          <v-icon small class="mr-2" data-test="update" @click="edit(item)">
            mdi-pencil
          </v-icon>
          <v-icon small data-test="delete" @click="remove(item)">
            mdi-delete
          </v-icon>
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
      classrow: "",
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
    remove(remove) {
      this.mode = "remove";
      this.formEdit = remove;
      this.$store.commit("SET_MODAL", true);
    },
    edit(edit) {
      this.mode = "edit";
      this.formEdit = edit;
      this.$store.commit("SET_MODAL", true);
    },

    close() {
      this.formEdit = null;
      this.$store.commit("SET_MODAL", false);
    },

    ...mapActions({
      getList: "GET_CONTACT",
    }),
  },
  watch: {
    notification(val) {
      if (val) {
        console.log(val);
        this.classrow = "classrow";
      }
    },
  },
  computed: {
    ...mapState({
      notification: (state) => state.notification.active,
      active: (state) => state.modalActive,
      list: (state) => state.contactList,
    }),
  },
  created() {
    this.getList();
    if (this.notification) this.classrow = "classrow";
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
tbody .classrow:last-child {
  background: #fce97f;
  animation: fadeBackground 10s;
  animation-fill-mode: forwards;
}

@keyframes fadeBackground {
  from {
    background-color: #fff3f2;
  }
  to {
    background-color: #ffff;
  }
}
</style>
