<template>
  <div class="hello" :key="key_index">
    <div v-show="visible" class="defaultImg">
      <img :src="imgUrl" alt="" />
      <div>{{timer}}</div>
    </div>
    <draggable
        class="main"
        ghost-class="ghost"
        :animation="400"
        @end="moveEvent"
    >
      <li
          class="list-group-item"
          v-for="(element, idx) in list"
          :key="idx"
      >
        <!--  <img :src="element.url" alt="" /> -->
        <canvas class="item" :id="'mycnavas_'+element.id" :sortid="element.id" width="100" height="100"></canvas>
      </li>
    </draggable>
    <canvas v-show="false" id="mycnavas" width="100" height="100"></canvas>
    <VanButton v-if="timer <= 0" style="margin-top: 20px;" type="info" plain @click="switchState">
      {{visible ? "了然于胸，继续拼图" : "忘了原图，点击切换"}}
    </VanButton>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { Dialog } from 'vant';
export default {
  props: {
    key_index: Number
  },
  components: {
    draggable,
  },
  name: "allPuzzle",
  data() {
    return {
      imgUrlList: [
        require("@/assets/img/dog.jpg"),
        require("@/assets/img/nana.jpeg"),
        require("@/assets/img/house.jpeg"),
      ],
      msgList: [0, 2, 5],
      timer:"",//计时器
      list: [
        {
          id: 0,
        },
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
        {
          id: 6,
        },
        {
          id: 7,
        },
        {
          id: 8,
        },
      ],
      visible: true
    }
  },
  computed: {
    imgUrl: function() {
      console.log("key", this.key_index);
      return this.imgUrlList[this.key_index];
    }
  },
  watch: {
    key_index(){
      this.start()
    }
  },
  mounted() {
    this.start();
  },
  methods: {
    start(){
      window.clearInterval(timer)
      this.visible=true
      this.step=0;
      this.list = this.randomArray(this.list);
      this.picCut9(this.imgUrl)
      setTimeout(()=>{
        this.visible=false
      },3000)
      this.timer=3;
      let timer = setInterval(()=>{
        this.timer--;
        if(this.timer<=0){
          window.clearInterval(timer)
        }
      },1000)
    },
    //打乱数组的顺序
    randomArray(arr) {
      return arr.sort(function () {
        return Math.random() > 0.5 ? -1 : 1;
      });
    },
    //判断结果
    result(data) {
      let arr = [...data];
      let bool = true;
      arr.sort(function (a, b) {
        if (b > a) {
          bool = false;
        }
      });
      if (bool) {
        const msg = "撒花撒花！密码中含有数字" + this.msgList[this.key_index];
        Dialog({message: msg}).then(() => {
          this.$emit("success")
        });
      }
    },
    //拖动事件
    moveEvent(){
      this.step++;
      let arr =  Array.from(document.getElementsByClassName("item")).map(item=>{
        return parseInt(item.getAttribute("sortid"))
      })
      this.result(arr)
    },
    //九宫格切图
    picCut9(imgurl) {
      let mycnavas = document.getElementById("mycnavas"); //现将图片放上去
      let ctx = mycnavas.getContext("2d");
      ctx.clearRect(0,0,300,300);
      let img = new Image();
      img.onload = function () {
        let imgwidth = img.width
        let len = imgwidth / 3;
        let arr = [];
        for (let i = 0; i < imgwidth; ) {
          for (let j = 0; j < imgwidth; ) {
            arr.push({
              x: j,
              y: i,
            });
            j = j + len;
          }
          i = i + len;
        }
        arr = arr.map((item,k) => {
          let canvas = document.getElementById("mycnavas_"+k); //现将图片放上去
          let ctx = canvas.getContext("2d");
          ctx.drawImage(
              img,
              item.x,
              item.y,
              len,
              len,
              0,
              0,
              100,
              100
          );
          return item
        });
      };
      img.src = imgurl
    },
    switchState() {
      this.visible = !this.visible;
    }
  }
}
</script>

<style  scoped>
.container {
  width: 300px;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.hello {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px 0;
}
.main {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  box-shadow: 0 0 2px 2px #929090;
  border-radius: 3px;
}
.defaultImg{
  position: absolute;
  top: 59px;
}
.defaultImg img{
  width: 300px;
  height: 300px;
}
.defaultImg div{
  position: absolute;
  top: 60px;
  font-size: 100px;
  margin: auto;
  text-align: center;
  left: 0;
  right: 0;
  color: cyan;
}
.list-group-item {
  width: 100px;
  height: 100px;
  list-style: none;
  cursor: move;
}
.list-group-item img {
  width: 100%;
  height: 100%;
}
.note {
  margin: 40px;
  font-size: 12px;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>

