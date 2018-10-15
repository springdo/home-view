import axios from 'axios';
import config from '@/config';

export default {
  getWeatherData({ commit }) {
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
          console.info('ERROR - ', err);
          commit('SET_LOADING', false);
        }
      });
  },
  getForecastData({ commit }) {
    commit('SET_LOADING', true);
    return axios
      .get(`${config.apiEndpoint}/api/forecast`)
      .then(r => r.data)
      .then((forecast) => {
        commit('SET_FORECAST', forecast);
        commit('SET_LOADING', false);
      })
      .catch((err) => {
        if (err) {
          // TODO - something interesting here for error state
          console.info('ERROR - ', err);
          commit('SET_LOADING', false);
        }
      });
  },
};
