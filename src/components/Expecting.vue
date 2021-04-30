<template>
  <div>
    <div>123</div>
    <div class="animation-style" ref="animation"></div>
  </div>
</template>

<script>
import * as Trophy from '@/assets/json/Trophy.json';
import lottie from 'lottie-web';
export default {
  name: "expecting",
  mounted () {
    lottie.loadAnimation({
          container: this.$refs.animation,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: Trophy,//动画json
        }
    )
  }
}
</script>

<style scoped>
.animation-style{
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
</style>
