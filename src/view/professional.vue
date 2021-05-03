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
  name: "professional",
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
