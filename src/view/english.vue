<template>
  <div class="max-width-class">
    <nav-bar title="英语"/>
    <van-contact-card
        v-for="item in typeList"
        :key="item.id"
        :add-text="item.name"
        @click="link(item.id)"
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
      typeList: [{
        name: "全程学习视频~~~内容很多，建议挑选了看",
        id: 1
      }, {
        name: "近几年真题及完整解析~~~建议做真题之后食用",
        id: 3
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
