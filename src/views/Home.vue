<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-45">
      <weather></weather>
    </div>
    <div class="md-layout-item">
      <div class="md-layout-item">
        <h4>Weather forecast</h4>
      </div>
      <div class="md-layout-item">
        <h4>Frequently used tiles</h4>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Weather from '@/components/Weather.vue';

export default {
  name: 'home',
  components: {
    Weather,
  },
};
</script>
