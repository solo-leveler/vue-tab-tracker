<template>
    <v-toolbar fixed class="cyan">
        <v-toolbar-title class="mr-4">
            <v-btn flat dark to="/">
                TabTracker
            </v-btn>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn flat dark>
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn v-if="!$store.state.isUserLoggedIn" flat dark to="login">
                Login
            </v-btn>
            <v-btn v-if="!$store.state.isUserLoggedIn" flat dark to="register">
                Sign Up
            </v-btn>
            <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout">
                Logout
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script>
export default{
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }

}
</script>
<style scoped>
</style>
