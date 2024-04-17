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
            <v-btn flat dark to="register">
                Login
            </v-btn>
            <v-btn flat dark to="login">
                Sign Up
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script>
export default{

}
</script>
<style scoped>
</style>
