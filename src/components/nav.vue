<template>
  <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
  />
</template>

<script>
export default {
  name: "navBar",
  props: {
    title: String
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>

</style>
