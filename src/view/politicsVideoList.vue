<template>
  <div class="max-width-class">
    <nav-bar title="政治视频课"/>
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
  name: "politics",
  components: {
    navBar
  },
  data() {
    return {
      typeList: ["徐涛-幽默智慧梳理体系", "腿姐-强于技巧及解题公式", "肖秀荣-长于押题，视频不推荐，比较生涩"]
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
