<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item"> BAR ONE </div>
    <div class="md-layout-item"> BAR TWO</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
