import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import pt from "vuetify/es5/locale/pt";

Vue.use(Vuetify);

export default new Vuetify({
  // customVariables: ["../../variables.scss"],
  theme: {
    themes: {
      light: {
        background: "#343E59",
        primary: "#fa7268",
        secondary: "#f8f9fd",
        accent: "#82B1FF",
        error: "#f44336",
        warning: "#FFDE03",
        success: "#4caf50",
        info: "#2196f3",
        btn: "#dbff90",
      },
    },
  },
  lang: {
    locales: { pt },
    current: "pt",
  },
  icons: {
    iconfont: "mdiSvg",
  },
});
