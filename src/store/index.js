import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalActive: false,
    contactList: [],
    notification: {
      active: false,
      text: "Exemple",
      type: "error",
    },
  },
  getters: {},
  mutations: {
    SET_MODAL(state, val) {
      state.modalActive = val;
    },
    SET_CONTACT(state, data) {
      state.contactList = data;
    },
    SET_CONTACTS(state, data) {
      state.contactList = data;
    },
    SET_NOTIFICATION(state, notify) {
      // state.notification.type = "error";
      // state.notification.active = true;
      // state.notification.text = text;z
      state.notification = { ...notify };
    },
  },
  actions: {
    async SAVE({ commit, dispatch }, value) {
      await fetch("/api/users/", {
        method: "POST",
        body: JSON.stringify(value),
      })
        .then((res) => {
          if (res) {
            commit("SET_NOTIFICATION", {
              type: "success",
              active: true,
              text: "Contato adicionado com sucesso.",
            });
            if (router.currentRoute.name === "home") {
              router.push("/list");
            } else {
              dispatch("GET_CONTACT");
            }
          }
        })
        .catch((err) => console.log(err));
    },
    async UPDATE({ commit, dispatch }, value) {
      await fetch(`/api/users/${value.id}`, {
        method: "POST",
        body: JSON.stringify(value),
      })
        .then((res) => {
          if (res) {
            commit("SET_NOTIFICATION", "Contato Editado com Sucesso");
            commit("SET_MODAL", false);

            dispatch("GET_CONTACT");
          }
        })
        .catch((err) => console.log(err));
    },
    async GET_CONTACT({ commit }) {
      // await fetch("/api/users")
      //   .then((res) => {
      //     console.log(res.json());
      //     const contactList = res.users;
      //     commit("SET_CONTACTS", contactList);
      //   })
      //   .catch((error) => console.log(error));

      await fetch("/api/users")
        .then((response) => {
          const contacts = JSON.parse(response._bodyText);
          commit("SET_CONTACTS", contacts.users);
        })
        .catch((error) => {
          //handle error
          console.log(error);
        });
    },
  },
  modules: {},
});
