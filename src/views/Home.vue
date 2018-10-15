<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item">
      <h4>Weather View</h4>
      <weather></weather>

    </div>
    <div class="md-layout-item"> 
      <h4>Frequently used tiles</h4>
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
