import Vue from 'vue';
import router from './router';
import VueMaterial from 'vue-material';
import App from './App.vue';
import store from './store';
import 'vue-material/dist/vue-material.min.css';
import './assets/styles/base-theme.scss';

import './registerServiceWorker';


Vue.config.productionTip = false;
Vue.use(VueMaterial);

// filters
Vue.filter('capitalize', (value) => {
  if (!value) return '';
  return value.charAt(0).toUpperCase() + value.slice(1);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
