<template>
  <div class="home">
      
      <div class="tb">
           <notice></notice>
          <span> 学习风采<br>Hi,很高兴认识你</span>
          
          
      </div>
    <div class="header">
       
    </div>
    <div class="content">
       
      <card v-for="(item,index) in datas" :key="index" :msg="item"></card>
     
    </div>
  </div>
</template>
<script>
import card from "../components/LessonCard";
import notice from '../components/NoticeBar ';

export default {
  data() {
    return {
      
          datas:""
      
    };
  },
  components: {
    card,
    notice,
  },
  mounted(){
    this.$axios({
      method:'get',
      url:'/getproject'
    }).then(response=>{
      console.log(response.data)
      this.datas=response.data.data
    })
  }
};
</script>
<style scoped>
.tips{
    position: relative;
    
}
span{
    font-size: 18px;
    font-weight: 900;
    text-align: left;
    display: block;
    padding: 20px;
    color: white;
}
.tb{
    width: 100vw;
    height: 20vh;
    background-color: #f1c40f;
}
.header{
    width: 100vw;
    height: 20vh;
    
    background: linear-gradient(to bottom,#f1c40f,#f4f4f4);
   
}
.content{
    margin-top: 45px;
    border-radius: 5px;
    padding-top: 20px;
    transform: scale(.93);
    width: 100vw;
    min-height: 80vh;
    background-color: #fff;
    position: absolute;
    top: 50px;
}
</style>