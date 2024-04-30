<template>
  <div id="app">
    <v-app>
        <page-header />

      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import songService from './services/songService'
export default {
  name: 'App',
  components: {
    PageHeader
  },
  mounted: async function () {
    try {
      const response = await songService.getToken()
      if (response && response.access_token) {
        this.$store.dispatch('setTokenForSongs', response.access_token)
      } else {
        console.error('Failed to get access token:', response)
      }
    } catch (error) {
      console.error('Error:', error.message)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
