export default {
  SET_LOADING(state, bool) {
    console.log('INFO - Setting loading wheel ', bool);
    state.loading = bool;
  },
  SET_WEATHER(state, weather) {
    console.log('INFO - Setting weather');
    state.weather = weather;
  },
  SET_FORECAST(state, forecast) {
    console.log('INFO - Setting forecast');
    state.forecast = forecast;
  },
};
