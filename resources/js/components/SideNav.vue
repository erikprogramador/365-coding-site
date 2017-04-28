<template>
  <div class="phone-viewport">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">365 Days of code</h2>
    </md-toolbar>

    <slot></slot>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">365 Days of Code</h3>
        </div>
      </md-toolbar>

      <side-links />
    </md-sidenav>
  </div>
</template>

<script>
  import SideLinks from './SideLinks.vue'
  export default {
    components: { SideLinks },
    methods: {
      toggleLeftSidenav() {
        this.$refs.leftSidenav.toggle();
      }
    }
  }
</script>

<style scoped></style>
