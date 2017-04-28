<template>
  <div class="phone-viewport">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">365 Days of code</h2>
    </md-toolbar>

    <main>
      Here goes the main content
    </main>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">365 Days of Code</h3>
        </div>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-ink-ripple />
          <md-icon>move_to_inbox</md-icon> <span>Inbox</span>
        </md-list-item>
      </md-list>
    </md-sidenav>
  </div>
</template>

<script>
  export default {
    methods: {
      toggleLeftSidenav() {
        this.$refs.leftSidenav.toggle();
      },
      open(ref) {
        console.log('Opened: ' + ref);
      },
      close(ref) {
        console.log('Closed: ' + ref);
      }
    }
  }
</script>

<style scoped></style>
