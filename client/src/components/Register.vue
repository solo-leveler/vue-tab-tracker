<template>
    <div>
        <h1> Register</h1>
        <input type="email" v-model="email" name="email" id="email" placeholder="email">
        <br>
        <input type="password" v-model="password" name="password" id="password" placeholder="password">
        <br>
        <button type="submit">Register</button>
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
