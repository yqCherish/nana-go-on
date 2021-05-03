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
  name: "english",
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
