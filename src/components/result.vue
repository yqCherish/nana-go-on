<template>
  <div class="result">
    <div class="animation-result" ref="animation_result"></div>
    <van-contact-card
        v-for="item in classList"
        :key="item"
        :add-text="item"
        @click="link(item)"
    />
  </div>
</template>

<script>
import lottie from 'lottie-web';
import Trophy from '@/assets/json/Trophy.json';

export default {
  name: 'App',
  components: {},
  data() {
    return {
      classList: ["政治", "英语", "专业课"]
    }
  },
  mounted() {
    this.anim = lottie.loadAnimation({
          container: this.$refs.animation_result,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: Trophy,//动画json
        }
    )
  },
  methods: {
    link(item) {
      if (item === "政治") {
        this.$router.push({
          name: "politics"
        })
      } else if (item === "英语") {
        this.$router.push({
          name: "english"
        })
      } else if (item === "专业课") {
        this.$router.push({
          name: "professional"
        })
      }
    }
  }
}
</script>

<style scoped>
.result {
  max-width: 500px;
  margin: 0 auto;
}
.animation-result {
  max-width: 160px;
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
