<template>
  <div>
    <van-contact-card
        v-for="item in typeList"
        :key="item"
        :add-text="item"
        @click="link(item)"
    />
  </div>
</template>

<script>
export default {
  name: "politics",
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
      }
    }
  }
}
</script>

<style scoped>

</style>
