<template>
  <v-layout justify-center>
    <v-container fluid grid-list-md>
      <v-toolbar flat dense class="cyan mb-3" dark>
          <v-toolbar-title>Songs</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-text-field
              append-icon="mdi-magnify"
              hide-details
              single-line
            ></v-text-field>
          </v-toolbar-items>
      </v-toolbar>
      <v-layout row wrap>
          <v-flex v-for="item in songs" :key="item.id" xs12 md6 lg3>
              <v-card hover width="95%">
                  <v-card-media fill-height :src="item.images[0].url" height="300px"></v-card-media>
                  <v-card-title primary-title>
                      <div>
                          <h3 class="headline mb-0" v-text="item.name"></h3>
                      </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>favorite</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>bookmark</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>share</v-icon>
                    </v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
  </v-layout>
</template>
<script>
import songService from '../services/songService'
export default {
  data () {
    return {
      songs: null
    }
  },
  mounted: async function () {
    this.songs = await songService.getNewReleases(this.$store.state.SpotToken)
    console.log(this.songs)
  }
}
</script>
<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}
</style>
