<template>
  <div>
    <nav-bar title="英语"/>
    <van-contact-card
        v-for="item in typeList"
        :key="item"
        :add-text="item"
        @click="link(item)"
    />
  </div>
</template>

<script>
import navBar from "@/components/nav.vue";
export default {
  name: "english",
  components: {
    navBar
  },
  data() {
    return {
      typeList: ["全程学习视频~~~内容很多，建议挑选了看", "近几年真题及完整解析~~~建议做真题之后食用"]
    }
  },
  methods: {
    link() {

    }
  }
}
</script>

<style scoped>

</style>
