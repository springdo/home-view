<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="title-color md-title">{{ weather.name }}</div>
      </md-card-header>

      <md-card-content>
        <div class="weather-summary">
           {{ weather.weather[0].description | capitalize }} and {{ weather.weather[1].description | capitalize }}
        </div>
        <span class="weather-icon">
          <i class="wi wi-owm-741"></i>
        </span>
        <span class="weather-temp"> {{ weather.main.temp | round}}°C </span>

    <!-- todo -->
        humidity =  {{ weather.main.humidity }}
        temp_min =  {{ weather.main.temp_min }}
        temp_max =  {{ weather.main.temp_max }}
        wind =  {{ weather.wind.speed }}        
        
        <!-- todo footer -->
        Last Checked at {{ weather.dt | toDate}}

        <!-- ALL DATA IS {{ weather }} -->
      </md-card-content>
      <div>
        pressure =  {{ weather.main.pressure }}
        weather0 =  {{ weather.weather[0].description }}
        weather1 =  {{ weather.weather[1].description }}

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
  font-size: 2.2em;
  letter-spacing: 0;
  padding: 1.1em 0.1em;
  color: $font-grey
}

.weather-icon {
  margin: 1.7rem 0.2rem;
  font-size: 10em;
  color: $font-grey

}

.weather-temp {
  font-size: 6em;
  color: $font-grey
}
.md-title{
  font-size: 2.6rem!important;
  line-height: 3.0rem!important;
}

.title-color {
  background-color: $secondary;
}
</style>
