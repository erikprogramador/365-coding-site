<template>
  <side-nav>
    <md-layout>
        <router-view />
    </md-layout>
  </side-nav>
</template>

<script>
  import SideNav from './SideNav.vue'
  export default {
    components: { SideNav }
  }
</script>

<style scoped></style>
