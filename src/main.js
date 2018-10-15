import Vue from 'vue';
import router from './router';
import VueMaterial from 'vue-material';
import App from './App.vue';
import store from './store';
import filters from './filters';
import 'vue-material/dist/vue-material.min.css';
import './assets/styles/base-theme.scss';
import './assets/weather-icons/css/weather-icons.min.css';

import './registerServiceWorker';


Vue.config.productionTip = false;
Vue.use(VueMaterial);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
