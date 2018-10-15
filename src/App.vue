<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title center-text"> 👋 Welcome home {{ person }} </span>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Home Switch</span>
      </md-toolbar>

      <md-list>
        <md-list-item @click="toView('lights')">
          <md-icon>wb_incandescent</md-icon>
          <span class="md-list-item-text">Lights</span>
        </md-list-item>

        <md-list-item @click="toView('music')">
          <md-icon>library_music</md-icon>
          <span class="md-list-item-text">Music</span>
        </md-list-item>

        <md-list-item @click="toView('cleaning')">
          <md-icon>brush</md-icon>
          <span class="md-list-item-text">Cleaning</span>
        </md-list-item>

        <md-list-item @click="toView('tv')">
          <md-icon>tv</md-icon>
          <span class="md-list-item-text">TV</span>
        </md-list-item>

        <md-list-item @click="toView('blinds')">
          <md-icon>check_box_outline_blank</md-icon>
          <span class="md-list-item-text">Blinds</span>
        </md-list-item>

        <md-list-item @click="toView('notification')">
          <md-icon>announcement</md-icon>
          <span class="md-list-item-text">Notifications</span>
        </md-list-item>

        <md-list-item @click="toView('home')">
          <md-icon>home</md-icon>
          <span class="md-list-item-text">Home</span>
        </md-list-item>

      </md-list>
    </md-drawer>

    <md-content class="fill-height">
      <router-view/>
    </md-content>
  </div>
</template>

<script>
import Router from './router';

export default {
  name: 'Temporary',
  components: {
    Router,
  },
  data: () => ({
    showNavigation: false,
    showSidepanel: false,
    person: '{{ person }}',
  }),
  methods: {
    toView: (path) => {
      Router.push({ path });
    },
  },
};
</script>

<style lang="scss" scoped>
.page-container {
  border: 1px solid rgba(#000, 0.12);
}
.fill-height{
    top: 64px;
    bottom: 0px;
    position: absolute;
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 140px);
}

.md-content {
  padding: 16px;
}
</style>
