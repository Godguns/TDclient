<template>
  <div>

    <div class="pic">
      <img class="image" :src="this.img" alt />
    </div>

    <div class="mos">
      <div class="show">
        <div class="main">
          <van-image round class="logo" fit="cover" :src="this.img" alt />
          
        </div>
        <van-button class="add" @click="addtalk" round type="info">评价课程</van-button>
        <div class="talks">
          <van-divider
            :style="{ color: '#ffe1e1', borderColor: '#ffe1e1', padding: '0 16px' }"
            content-position="left"
          >
            <van-tag color="#ffe1e1" size="large" text-color="#ad0000">{{name}}</van-tag>
             <van-tag @click="addcollect" v-if="iscollect" color="#ffe1e1" size="large" text-color="#ad0000">收藏</van-tag>
          </van-divider>

          <van-cell title="开课时间" :value="this.time" />
          <br />
          <van-cell title="课程简介" :value="this.info" />
          <van-cell  >
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
             <van-tag v-for="(item,index) in tags" :key="index" color="#7232dd" size="large">{{item}}</van-tag>
            
            </template>
          </van-cell>
        </div>
      </div>
      <div class="show1" :style="this.style1"></div>
    <van-popup v-model="show" round position="bottom" :style="{ height: '50%' }">
      <div class="model">
        <van-button @click="fabu" class="sub" round type="info">发布</van-button>
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
    <div class="talklist">
          <talkcard :msg="item" v-for="(item,index) in list" :key="index"></talkcard>
    </div>
  </div>
</template>
<script>
import talkcard from "../components/MsgCard"
export default {
    components:{
        talkcard
    },
  data() {
    return {
        iscollect:true,
        list:[],
        message:"",
        show:false,
      time: "",
      info: "",
      img: "",
      name: "",
      tags:[],
      style1: {
        backgroundImage: ""
      }
    };
  },
  created() {
    console.log(this.style1);
    this.$axios({
      url: "/getmsgbyid",
      method: "get",
      params: {
        _id: this.$route.params.data
      }
    }).then(response => {
      console.log(response.data.data);
      this.img = response.data.data.imgsrc;
      this.info = response.data.data.info;
      this.time = response.data.data.time;
      this.name = response.data.data.title;
      this.tags=response.data.data.tag;
      this.style1.backgroundImage = `url('${response.data.data.imgsrc}')`;
    });
    this.gettalks();
    this.getuserinfo()
 
  },
  methods:{
      getuserinfo(){
          this.$axios({
              url:'/api/v1/auth',
              method:'get',
              params:{
                  username:sessionStorage.getItem('username')
              }
          }).then(response=>{
        sessionStorage.setItem('username',response.data.username)
        sessionStorage.setItem('token',response.data.token)
        sessionStorage.setItem('avater',response.data.avater)
        sessionStorage.setItem('id',response.data._id)
        sessionStorage.setItem('collect',response.data.collect)
        console.log(sessionStorage.getItem('collect').split(','))
               sessionStorage.getItem('collect').split(',').forEach(item => {
                if(item==this.img){
                    this.iscollect=false
                }
    });
          })
      },
      addcollect(){
          this.$axios({
              url:'/tocollect',
              method:'get',
              params:{
                  username:sessionStorage.getItem('username'),
                  img:this.img
              }
          }).then(response=>{
              console.log("收藏数据是：",response.data)
             this.getuserinfo()
          })

      },
      sc(){
          this.$message("收藏成功")
      },
      gettalks(){
          this.$axios({
              url:'/get_talklist',
              method:'get',
              params:{
                  _id:this.$route.params.data
              }
          }).then(response=>{
              this.list=response.data.data
              console.log(response.data.data)
          })
      },
      fabu(){
         
          this.$axios({
              url:'/addtalk',
              method:'get',
              params:{
                  imgsrc:this.img,
		username:sessionStorage.getItem('username'),
		avater:sessionStorage.getItem('avater'),
		content:this.message,
		time:new Date().getMonth()+"月"+new Date().getDay()+"日",
		reback:[]
              }
          }).then(()=>{
             
              this.gettalks()
              this.show=false;
             
          })
      },
      addtalk(){
           this.show=!this.show;
      }
  }
};
</script>
<style scoped>
.talklist{
    margin-top: -60px;
    padding-bottom: 100px;
    transform: scale(.9);
    
   
}
.model {
  width: 100vw;
  display: flex;
  justify-content: flex-end;
}
.sub {
  position: relative;

  margin-top: 10px;
  margin-right: 10px;
}
.add{
    transform: scale(.7);
    background-color: rosybrown;
    border-color: rosybrown;
    float: right;
}
>>> .van-tag {
    margin: 2px 5px;
}
.mos {
  position: absolute;
  top: 60vh;
}
>>> .van-cell {
  background-color: rgba(252, 250, 250, 0.3);
  
  border-bottom: none;
}
>>> .van-cell::after {
  border-bottom: none;
  border-radius: 5px;
}
.show1 {
  width: 100vw;
  height: 37vh;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(3px);
  background-position: center top;
  background-size: cover;
  background-attachment: fixed;
  background-color: darkcyan;

  z-index: -1;
}
.show {
  width: 100vw;
  height: 37vh;
  background-color: #fff;
  background-color: rgba(252, 250, 250, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.pic {
  width: 100vw;
  position: relative;
  z-index: -2;
  background-color: cornsilk;
}
.logo {
  float: left;
  margin-top: -30px;
  margin-left: 20px;
  position: relative;
  z-index: 9;

  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.image {
  height: 100vh;
}
</style>