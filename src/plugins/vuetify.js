import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#0066FF",
        secondary: "#5297FF",
        accent: "#C0C0C0",
        error: "#FF4500",
        info: "#00BBFF",
        success: "#8BC34A",
        warning: "#FFC107"
      },
      dark: {
        primary: "#0066FF",
        secondary: "#5297FF",
        accent: "#C0C0C0",
        error: "#FF4500",
        info: "#00BBFF",
        success: "#8BC34A",
        warning: "#FFC107"
      }
    }
  }
});
