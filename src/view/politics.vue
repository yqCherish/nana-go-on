<template>
  <div class="max-width-class">
    <nav-bar title="政治"/>
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
import {Dialog} from "vant";
export default {
  name: "politics",
  components: {
    navBar
  },
  data() {
    return {
      typeList: ["全程视频", "近10年真题及解析", "押题"]
    }
  },
  methods: {
    link(item) {
      if (item === "全程视频") {
        this.$router.push({
          name: "politicsVideoList"
        })
      } else if (item === "近10年真题及解析") {
        this.$router.push({
          name: "content",
          query: {
            id: 4
          }
        })
      } else {
        Dialog({ message: '机构持续更新中，请等待~' });
      }
    }
  }
}
</script>

<style scoped>

</style>
