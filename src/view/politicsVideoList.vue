<template>
  <div class="max-width-class">
    <nav-bar title="政治视频课"/>
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
  name: "politics",
  components: {
    navBar
  },
  data() {
    return {
      typeList: [{
        name: "徐涛-幽默智慧梳理体系",
        id: 7
      }, {
        name: "腿姐-强于技巧及解题公式",
        id: 2
      }, {
        name: "肖秀荣-长于押题，视频不推荐，比较生涩",
        id: 6
      }],
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
