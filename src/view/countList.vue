<template>
  <div class="max-width-class">
    <nav-bar title="倒计时"/>
    <van-contact-card
        v-for="item in typeList"
        :key="item.name"
        :add-text="item.name"
        @click="link(item)"
    />
  </div>
</template>

<script>
import navBar from "@/components/nav.vue";
export default {
  name: "politics",
  components: {
    navBar
  },
  data() {
    return {
      typeList: [{
        name: "考研倒计时",
        value: 1640394000000
      }, {
        name: "考公倒计时",
        value: 1637974800000
      }]
    }
  },
  methods: {
    link(item) {
      this.$router.push({
        name: "countDown",
        query: {
          title: item.name,
          value: item.value
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
