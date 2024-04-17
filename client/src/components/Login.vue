<template>
  <v-container fluid column>
    <v-flex xs6 offset-x3>
      <div class="white-elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>login</v-toolbar-title>
        </v-toolbar>
      </div>
      <div class="px-4 py-2">
        <form
          name="tab-tracker-form"
          autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          dark
          class="cyan"
          @click="login">
          Login
        </v-btn>
      </div>
    </v-flex>
  </v-container>
</template>

<script>
import AuthencationService from '../services/AuthencationService'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login () {
      try {
        AuthencationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
.error {
  color : red;
}
</style>
