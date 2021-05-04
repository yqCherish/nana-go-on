<template>
  <div class="max-width-class">
    <nav-bar title="游戏列表"/>
    <van-grid>
      <van-grid-item
          v-for="(item, index) in gameList"
          :key="item"
          icon="photo-o"
          @click="gameStart(index)"
          :text="item"
      />
    </van-grid>
    <van-popup v-model="gameShow">
      <div v-if="game_index!==3">
        <p>成功拖拽还原原图即可获取密码碎片</p>
        <all-puzzle :key_index="game_index" @success="successGame"/>
      </div>
      <div v-else>
        <p>成功正序排列即可获取重要提示~</p>
        <vue-puzzle @success="successGame"/>
      </div>
    </van-popup>
  </div>
</template>

<script>
import navBar from "@/components/nav.vue";
import vuePuzzle from "@/components/vuePuzzle";
import allPuzzle from "@/components/allPuzzle";
export default {
  name: "gameList",
  components: {
    navBar, vuePuzzle, allPuzzle
  },
  data() {
    return {
      gameShow: false,
      game_index: 0,
      gameList: ["拼图-萨摩耶", "拼图-nab", "拼图-taste", "空缺排序"]
    }
  },
  methods: {
    gameStart(index) {
      this.game_index = index;
      this.gameShow = true;
    },
    successGame() {
      this.gameShow = false;
    }
  }
}
</script>

<style scoped>

</style>
