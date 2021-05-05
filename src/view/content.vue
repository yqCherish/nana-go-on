<template>
  <div class="max-width-class">
    <nav-bar :title="name"/>
    <van-cell-group>
      <van-cell title-class="cell-cs" title="链接：" :value="value" />
      <van-cell title-class="cell-cs" title="密码：" value-class="cell-va" :value="password" />
    </van-cell-group>
  </div>
</template>

<script>
import navBar from "@/components/nav.vue";
export default {
  name: "content",
  components: {
    navBar
  },
  data() {
    return {
      valueList: [{
        id: 1,
        value: "https://pan.baidu.com/s/1L9wAp7C8U18rHTbJ8NOimg",
        password: "i2s8",
        name: "考研英语视频"
      }, {
        id: 2,
        value: "https://pan.baidu.com/s/1Sn8GPrdLfwSXdySWIX40VQ",
        password: "bn2j",
        name: "考研政治腿姐"
      }, {
        id: 3,
        value: "https://pan.baidu.com/s/1WN8uvLFzPKSNUG4We7sNMw",
        password: "8fm6",
        name: "英语真题及解析"
      }, {
        id: 4,
        value: "https://pan.baidu.com/s/1YiDlR-Ui4rRdHarZf6RGuA",
        password: "52a0",
        name: "政治真题及解析"
      }, {
        id: 5,
        value: "https://pan.baidu.com/s/1kQL7f2HDMAcgHxe8lpf9JQ",
        password: "lkk7",
        name: "专业课"
      }, {
        id: 6,
        value: "https://pan.baidu.com/s/1v1uocv88eDvjxmF65zSQow",
        password: "j0do",
        name: "考研政治肖秀荣"
      }, {
        id: 7,
        value: "https://pan.baidu.com/s/1SQSprwRC2oxARl5yOMs5vg",
        password: "2amf",
        name: "考研政治徐涛"
      }],
      value: "",
      password: "",
      name: ""
    }
  },
  mounted() {
    const id = parseInt(this.$route.query.id);
    const item = this.valueList.find((v) => v.id === id);
    this.value = item.value;
    this.password = item.password;
    this.name = item.name;
  }
}
</script>

<style scoped>

</style>
