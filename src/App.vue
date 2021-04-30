<template>
  <div id="app">
    <div class="animation-style" ref="animation"></div>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import lottie from 'lottie-web';
// import Trophy from '@/assets/json/bulb.json';
import manFlowers from '@/assets/json/manFlowers.json';
// import Trophy from '@/assets/json/Trophy.json';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
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
  width: 100%;
  margin: 0 auto;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
