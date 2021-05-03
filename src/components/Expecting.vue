<template>
  <div id="app">
    <div class="animation-style" ref="animation"></div>
  </div>
</template>

<script>
import lottie from 'lottie-web';
import manFlowers from '@/assets/json/manFlowers.json';

export default {
  name: 'App',
  components: {},
  mounted() {
    this.anim = lottie.loadAnimation({
          container: this.$refs.animation,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: manFlowers,//动画json
        }
    )
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
