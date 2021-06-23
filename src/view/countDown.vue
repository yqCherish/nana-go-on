<template>
  <div class="max-width-class">
    <nav-bar :title="title"/>
    <van-count-down style="font-size: 24px;line-height: 60px;color: #1989fa;" :time="time" format="DD 天 HH 时 mm 分 ss 秒"/>
    <van-calendar
        title="today"
        :show-title="false"
        :poppable="false"
        :show-confirm="false"
        :max-date="maxDate"
        :style="{ height: '400px' }"
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
      maxDate: 0,
      time: 0,
      title: ""
    }
  },
  created() {
    this.time = parseInt(this.$route.query.value) - new Date().getTime();
    this.title = this.$route.query.title;
    this.maxDate =
        this.title === "考研倒计时" ?
            new Date(2021, 11, 24) :
            new Date(2021, 10, 26)
  }
}
</script>

<style scoped>

</style>
