<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Home Vue</span>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Home Switch</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>wb_incandescent</md-icon>
          <span class="md-list-item-text">Lights</span>
        </md-list-item>

        <md-list-item>
          <md-icon>library_music</md-icon>
          <span class="md-list-item-text">Music</span>
        </md-list-item>

        <md-list-item>
          <md-icon>brush</md-icon>
          <span class="md-list-item-text">Cleaning</span>
        </md-list-item>

        <md-list-item>
          <md-icon>tv</md-icon>
          <span class="md-list-item-text">TV</span>
        </md-list-item>

        <md-list-item>
          <md-icon>check_box_outline_blank</md-icon>
          <span class="md-list-item-text">Blinds</span>
        </md-list-item>

        <md-list-item>
          <md-icon>announcement</md-icon>
          <span class="md-list-item-text">Notifications</span>
        </md-list-item>
        
        <md-list-item>
          <md-icon>bug_report</md-icon>
          <span class="md-list-item-text">Report</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <md-content>
      <router-view/>
    </md-content>
  </div>
</template>

<script>
  export default {
    name: 'Temporary',
    data: () => ({
      showNavigation: false,
      showSidepanel: false
    })
  }
</script>

<style lang="scss" scoped>
  .page-container {
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    padding: 16px;
  }
</style>