<template>
  <div class="hello">
    <p>您的礼物，火速送达中~</p>
    <VanButton plain type="primary" @click="working">良辰吉日，自动揭晓</VanButton>
    <VanButton
        class="not_waiting"
        @click="imagine"
        plain
        :disabled="times < 1"
        type="warning">急不可待，芝麻开门</VanButton>
    <VanDialog v-model="show" :title="title" show-cancel-button @confirm="confirm">
      <van-field
          v-model="value"
          placeholder="纯数字密码，长度未知"
          input-align="center"
      />
    </VanDialog>
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      show: false,
      value: "",
      times: 5
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
      Dialog({ message: '哈哈，您的密码没对上呢~' })
      this.times = this.times - 1;
      localStorage.setItem("times", this.times);
    }
  },
  mounted() {
    this.times = localStorage.getItem("times") ? localStorage.getItem("times") : 5;
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
.hello {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.not_waiting {
  margin-top: 15px;
}

</style>
