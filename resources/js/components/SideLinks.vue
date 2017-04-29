<template>
  <md-list>
    <md-list-item>
    <router-link to="/" exact>
        <md-ink-ripple />
        <md-icon>home</md-icon> <span>Home</span>
      </router-link>
    </md-list-item>

    <md-list-item>
      <router-link to="about">
        <md-ink-ripple />
        <md-icon>info</md-icon> <span>About</span>
      </router-link>
    </md-list-item>

    <md-list-item>
      <router-link to="contact">
        <md-ink-ripple />
        <md-icon>contact_mail</md-icon> <span>Contact</span>
      </router-link>
    </md-list-item>
  </md-list>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>

</style>
