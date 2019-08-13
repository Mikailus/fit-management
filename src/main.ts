import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import store from './store';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { LocalForage } from './plugins/local-forage';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(LocalForage);

new Vue({
  store,
  router,
  vuetify: new Vuetify(),
  render: (h) => h(App),
}).$mount('#app');
