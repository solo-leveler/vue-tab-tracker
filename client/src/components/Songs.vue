<template lang="">
  <v-layout justify-center>
    <v-flex xs7 offset-x3>
      <div class="white-elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Songs</v-toolbar-title>
        </v-toolbar>
        <div v-for="song in songs" :key="song.id">
          <v-layout class="pa-3">
            <v-flex xs6>
            <div class="song-title">
              {{ song.name }}
            </div>
            <div
              v-for="item in song.artists"
              :key="item.id"
              class="song-artist"
            >
              {{ item.name }}
            </div>
            <div class="song-genre">
              {{ song.genre }}
            </div>

            <!-- <v-btn
                  dark
                  class="cyan"
                  :to="{
                    name: 'song',
                    params: {
                      songId: song.id
                    }
                  }">
                  View
                </v-btn> -->
              </v-flex>
              <v-flex xs6>
                <img class="album-image" :src="song.images[0].url" />
              </v-flex>
            </v-layout>
          </div>
      </div>
    </v-flex>
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
