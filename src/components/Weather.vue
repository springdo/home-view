<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">{{ weather.name }}</div>
      </md-card-header>

      <md-card-content>
        LOADING IS {{loading}}

        {{ weather }}
      </md-card-content>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>
    <md-progress-spinner class="md-accent" md-mode="indeterminate" v-show="loading"></md-progress-spinner>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'Weather',
  props: {
    msg: String,
  },
  data: () => {
    return {
      location: 'LONDIN'
    }
  },

  computed: {
    ...mapGetters(['weather', 'loading'])
  },
  created() {
    this.$store.dispatch('getWeatherData');
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
