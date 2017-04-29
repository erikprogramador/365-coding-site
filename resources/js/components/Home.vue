<template>
  <div class="container">
    <div class="spacer">
      <h1>New Projects</h1>
      <hr>
      <projects :projects="projects" />
    </div>

    <div class="spacer">
      <h1>Finished Projects</h1>
      <hr>
      <projects :projects="projects" />
    </div>

    <div class="spacer">
      <h1>All Projects</h1>
      <hr>
      <projects :projects="projects" />
    </div>
  </div>
</template>

<script>
  import Projects from './Projects.vue'
  export default {
    components: { Projects },
    data () {
      return {
        projects: [
          { id: 1, title: 'Some title', description: 'Some nice description form my project', image: '../../images/card.jpg', links: { repository: 'https://github.com/erikprogramador', live: 'https://salescity.com.br' } },
          { id: 2, title: 'Some title 2', description: 'Some nice description form my new project', image: '../../images/card.jpg', links: { repository: 'https://github.com/erikprogramador', live: 'https://salescity.com.br' } },
          { id: 3, title: 'Some title 3', description: 'Some nice description form my new project again', image: '../../images/card.jpg', links: { repository: 'https://github.com/erikprogramador' } }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
