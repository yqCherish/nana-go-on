<template>
  <div id="app">
    <router-view class="router-view" />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  mounted() {
    //
  }
}
</script>

<style>
.animation-style {
  max-width: 460px;
  margin: 0 auto;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
