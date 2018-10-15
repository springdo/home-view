import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import './assets/styles/base-theme.scss';

import './registerServiceWorker';


Vue.config.productionTip = false;
Vue.use(VueMaterial);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
