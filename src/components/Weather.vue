<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title title-color">{{ weather.name }}</div>
      </md-card-header>

      <md-card-content>
        <div class="weather-summary"> {{ weather.weather[0].description | capitalize }} </div>
        DateTime = {{ weather.dt }}
        temp = {{ weather.main.temp }}
        pressure =  {{ weather.main.pressure }}
        weather0 =  {{ weather.weather[0].description }}
        weather1 =  {{ weather.weather[1].description }}
        humidity =  {{ weather.main.humidity }}
        temp_min =  {{ weather.main.temp_min }}
        temp_max =  {{ weather.main.temp_max }}
        wind =  {{ weather.wind.speed }}

        <!-- ALL DATA IS {{ weather }} -->
      </md-card-content>
      <div>
        DateTime = {{ weather.dt }}
        temp = {{ weather.main.temp }}
        pressure =  {{ weather.main.pressure }}
        weather0 =  {{ weather.weather[0].description }}
        weather1 =  {{ weather.weather[1].description }}
        humidity =  {{ weather.main.humidity }}
        temp_min =  {{ weather.main.temp_min }}
        temp_max =  {{ weather.main.temp_max }}
        wind =  {{ weather.wind.speed }}
      </div>
    </md-card>
    <md-progress-spinner class="md-accent" md-mode="indeterminate" v-show="loading"></md-progress-spinner>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Weather',
  props: {
    msg: String,
  },
  data: () => ({
    location: 'LONDIN',
  }),

  computed: {
    ...mapGetters(['weather', 'loading']),
  },
  beforeCreate() {
    this.$store.dispatch('getWeatherData');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.md-card-header {
  padding: 16px 0;
  width: 33%;
  color: white;
}

.weather-summary {

}

.title-color {
  background-color: $secondary;
}
</style>
