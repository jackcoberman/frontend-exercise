import Vue from "vue";
import Quiz from "./Quiz.vue";
import questions from "./questions";
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(Quiz, { props: { questions } })
}).$mount("#app");
