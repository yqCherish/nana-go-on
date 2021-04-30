<template>
  <div class="hello">
    <p>您的礼物，火速送达中~</p>
    <VanButton plain type="primary" @click="working">良辰吉日，自动揭晓</VanButton>
    <VanButton class="not_waiting" @click="imagine" plain type="warning">急不可待，立即打开</VanButton>
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    working() {
      Dialog({ message: '稍安勿躁，正在开发中~' });
    },
    imagine() {
      Dialog({ message: '想的挺美，老老实实等良辰吉日！' });
    }
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
