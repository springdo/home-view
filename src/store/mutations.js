export default {
  SET_LOADING(state, bool) {
    console.log('INFO - Setting loading wheel');
    state.loading = bool;
  },
  SET_WEATHER(state, todos) {
    console.log('INFO - Setting todos');
    state.todos = todos;
  },
};
