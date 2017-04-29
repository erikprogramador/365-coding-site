<template>
  <div class="row">
    <project
      v-for="project in projects"
      :project="project"
      key="project.id"
    />
  </div>
</template>

<script>
  import Project from './Project.vue'
  export default {
    props: ['projects'],
    components: { Project }
  }
</script>

<style lang="scss" scoped></style>
