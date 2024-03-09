<template>
    <div>
        <h1> Register</h1>
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
    </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {

    }
  }
}
</script>
