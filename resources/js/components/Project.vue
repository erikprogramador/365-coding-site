<template>
  <md-card class="spacer">
    <md-card-media-cover md-text-scrim>
      <md-card-media md-ratio="16:9">
        <img :src="project.image">
      </md-card-media>

      <md-card-area>
        <md-card-header>
          <div class="md-title">{{ project.title }}</div>
          <div class="md-subhead">{{ project.description }}</div>
        </md-card-header>

        <md-card-actions>
          <md-button>
            <a :href="project.links.repository">Github</a>
          </md-button>
          <md-button v-if="project.links.live">
            <a :href="project.links.live">Live version</a>
          </md-button>
        </md-card-actions>
      </md-card-area>
    </md-card-media-cover>
  </md-card>
</template>

<script>
  export default {
    props: ['project']
  }
</script>

<style lang="scss" scoped></style>
