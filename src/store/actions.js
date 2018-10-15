import axios from 'axios';
import config from '@/config';

export default {
  loadWeatherData({ commit }) {
    commit('SET_LOADING', true);
    return axios
      .get(`${config.apiEndpoint}/api/weather`)
      .then(r => r.data)
      .then((weather) => {
        commit('SET_WEATHER', weather);
        commit('SET_LOADING', false);
      })
      .catch((err) => {
        if (err) {
          console.info('INFO - setting dummy data because of ', err);
          commit('SET_LOADING', false);
        }
      });
  },
};
