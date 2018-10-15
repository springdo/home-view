import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
    weather: {},
    forecast: {},
  },
  getters: {
    weather: state => state.weather,
    forecast: state => state.forecast,
    loading: state => state.loading,
  },
  mutations,
  actions,
});
