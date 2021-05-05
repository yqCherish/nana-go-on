<template>
  <div class="hello">
    <div v-if="!success" class="display_flex">
      <Expecting></Expecting>
      <p>您的礼物，火速送达中~</p>
      <VanButton plain type="primary" @click="working">良辰吉日，自动揭晓</VanButton>
      <VanButton
          class="not_waiting"
          @click="imagine"
          plain
          :disabled="times < 1"
          type="warning">急不可待，芝麻开门</VanButton>
      <VanButton type="info" class="not_waiting" plain @click="play">小试牛刀，密码碎片</VanButton>
      <VanButton type="danger" class="not_waiting" plain @click="qrcode">专业顾问，分析解码</VanButton>
      <VanDialog v-model="show" :title="title" show-cancel-button @confirm="confirm">
        <van-field
            v-model="value"
            placeholder="纯数字密码，长度未知"
            input-align="center"
            type="number"
        />
      </VanDialog>
      <van-popup v-model="popUpShow">
        <p style="color: #1989fa;">微信扫码获取您的私人顾问~</p>
        <van-image
            width="300"
            :src="qrcodeImg"
        />
      </van-popup>
    </div>
    <Result v-else></Result>
  </div>
</template>

<script>
import { Dialog } from 'vant';
import Expecting from "../components/Expecting";
import Result from "../components/result";

export default {
  name: 'HelloWorld',
  components: {
    Expecting, Result
  },
  props: {
    msg: String
  },
  data () {
    return {
      show: false,
      value: "",
      times: 5,
      success: false,
      popUpShow: false,
      qrcodeImg: require("@/assets/img/qrcode.jpg"),
      gameShow: false
    }
  },
  computed: {
    title: function() {
      return `您今天还有${this.times}次机会哦`
    }
  },
  methods: {
    working() {
      Dialog({ message: '干哈，老老实实等良辰吉日！' });
    },
    imagine() {
      this.show = true;
    },
    confirm() {
      const current_value = parseFloat(this.value);
      if (current_value === 202155) {
        Dialog({message: "bingo~芝麻开门，太聪明了吧，现在可以点击打开啦"}).then(() => {
          this.success = true;
          localStorage.setItem("passwordSuccess", "1");
        });
      } else {
        let msg = "哈哈，您的密码没对上呢~";
        if (current_value === 831) {
          msg = "就知道你会输入这个，再想想呢~";
        } else if (current_value.toString() === "0503") {
          msg = "哎哟，手机密码也不对呢，再想想~";
        } else if (current_value === 121855) {
          msg = "居然想到了这条，厉害哟，不过还是得再思考思考~"
        }
        Dialog({ message: msg })
        this.times = this.times - 1;
        localStorage.setItem(
            "rest", JSON.stringify({
              times: this.times,
              timestamp: new Date().getTime()
            })
        );
      }
      this.value = "";
    },
    play() {
      this.$router.push({
        name: "gameList"
      })
    },
    qrcode() {
      this.popUpShow = true;
    }
  },
  mounted() {
    const rest = localStorage.getItem("rest");
    const rest_data = rest ? JSON.parse(rest) : null;
    const timestamp = rest_data ? rest_data.timestamp : 0;
    const current_stamp = new Date().getTime();
    const times = rest_data ? rest_data.times : 5;
    const today7 = new Date(new Date().toLocaleDateString()).getTime() + 7 * 60 * 60 * 1000;
    this.times =
        current_stamp < today7 ? times : timestamp > today7 ? times : 5;
    const nowdays = new Date().getTime();
    const isSuccessTime = nowdays > 1620205505000;
    this.success =
        localStorage.getItem("passwordSuccess") ?
            localStorage.getItem("passwordSuccess") :
            isSuccessTime ?
                isSuccessTime :
                false
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.display_flex {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.not_waiting {
  margin-top: 15px;
}

</style>
