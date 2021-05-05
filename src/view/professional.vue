<template>
  <div class="max-width-class">
    <nav-bar title="专业课"/>
    <van-contact-card
        v-for="item in typeList"
        :key="item.id"
        :add-text="item.name"
        @click="link(item.id)"
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
      typeList: [{
        name: "新闻与传播全套视频课程",
        id: 5
      }]
    }
  },
  methods: {
    link(id) {
      this.$router.push({
        name: "content",
        query: {
          id
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
