<template>
  <div>
    <nav-bar title="专业课"/>
    <van-contact-card
        v-for="item in typeList"
        :key="item"
        :add-text="item"
        @click="link(item)"
    />
  </div>
</template>

<script>
import navBar from "@/components/nav";

export default {
  name: "professional",
  components: {
    navBar
  },
  data() {
    return {
      typeList: ["新闻与传播全套视频课程"]
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
