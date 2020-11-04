<template>
  <div>
    <van-image class="image" src="http://dongdove.cn/FliAzzsfBUAGC4y0fQCQfoZmqiz4" />
    <div class="heeader">
      <van-image round fit="cover" class="avater" :src="avater" alt />
    </div>
    <div ref="wrapper" class="wrapper">
      <ul class="con">
        <li>
          <msgcard  :msg="item" v-for="(item ,index) in list" :key="index"></msgcard>
          
        </li>
        <li></li>
      </ul>
    </div>
    <van-button @click="addNews" style=" margin-top: 30px;" :class="show===false?'addbt':'addbt-active'" round type="info">说点什么</van-button>
    <van-popup  v-model="show" round position="bottom" :style="{ height: '50%' }" >
   
    <div class="model">
       <van-button @click="fabu" class="sub" round type="info">圆形按钮</van-button>
    </div>
  
     <van-field
  v-model="message"
  rows="2"
  autosize
  
  type="textarea"
  maxlength="50"
  placeholder="请输入留言"
  show-word-limit
/>

    </van-popup>
  </div>
</template>
<script>
import msgcard from "../components/MsgCard";
import BScroll from "better-scroll";
export default {
  components: {
    msgcard
  },
  mounted() {
    this.$nextTick(() => {
      //$refs绑定元素
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          //开启点击事件 默认为false
          click: true
        });
        this.scroll.refresh();
        // console.log(this.scroll)
      } else if (!this.$refs.wrapper) {
        this.scroll.refresh();
        return;
      } else {
        this.scroll.refresh();
      }
    });

    this.$axios({
      method: "get",
      url: "/api/v1/spit"
    }).then(response => {
      console.log(response.data);
      this.list=response.data.data
    });
  
  },
  data() {
    return {
      avater: sessionStorage.getItem("avater"),
      username: sessionStorage.getItem("username"),
      show: false,
      showmodel:false,
      message:"",
      list:[]
    };
  },
  methods: {
    addNews() {
      this.show = !this.show;
      this.showmodel=!this.showmodel;
    },
    fabu(){
      this.$axios({
        method:'get',
        url:'/api/v1/spit2',
        params:{
          username:sessionStorage.getItem('username'),
          avater:sessionStorage.getItem('avater'),
          content:this.message,
          time:new Date(),
          img:""
        }
      }).then(response=>{
        console.log(response.data)
      })
    }

  }
};
</script>
<style scoped>
.model{
  width: 100vw;
  display: flex;
  justify-content: flex-end;
}
.sub{
  position: relative;

  margin-top: 10px;
  margin-right: 10px;
}
.addbt-active {
  position: fixed;
  transform: translateX(0px);
  transition: 0.6s;
  bottom: 50px;
  right: 10px;
   z-index: 99;
}
.addbt {
  position: fixed;
  transform: translateX(30px);
  bottom: 50px;
  right: 10px;
  transition: 0.6s;
  z-index: 99;
}
.header {
  width: 30vw;
}

.avater {
  display: block;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid #ccc;
  position: absolute;
  top: 120px;
  left: 10px;
}
.image {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 2px 10px 0 rgba(0, 0, 0, 0.02);
  width: 100vw;
  height: 35vh;
}
.wrapper {
  width: 100vw;
  height: 60vh;
  position: absolute;
  
  overflow: hidden;
  z-index: 1;
}
.con {
}
</style>