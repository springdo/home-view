import Vue from 'vue';
// filters
Vue.filter('capitalize', (value) => {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1);
  });
  
Vue.filter('round', (value, decimals) => {
    if (!value) {
        value = 0;
    }
    if (!decimals) {
        decimals = 0;
    }
    return Math.round(value * (10 ** decimals)) / (10 ** decimals);
});

Vue.filter('toDate', (value) => {
    if (!value) return '';
    let date = new Date(value*1000);
    return date.toLocaleString('en-GB');
});