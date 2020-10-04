<template>
  <v-app class="main_container">
    <v-app-bar
      app
      color="green accent-4 yellow--text"
      dark
    >
     <h1 >ABI</h1>
    </v-app-bar>

    <Cube/>

    <v-footer class='green accent-4 yellow--text app'>
    </v-footer>
  </v-app>
</template>

<script>
    import Cube from "@/components/Cube";

    export default {
      name: 'App',
      components: {
        Cube,
      },
    };
</script>

<style>
</style>