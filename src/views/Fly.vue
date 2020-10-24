<template>
  <div class="home">
      
      <div class="tb">
           <notice></notice>
          <span> 学习风采<br>Hi,很高兴认识你</span>
          
          
      </div>
    <div class="header">
       
    </div>
    <div class="content">
       
      <card :msg="msg"></card>
      <test class="tips" :msg="msg"></test>
    </div>
  </div>
</template>
<script>
import card from "../components/LessonCard";
import notice from '../components/NoticeBar ';
import test from '../components/test'
export default {
  data() {
    return {
      msg: {
        title: "大数据开发训练营",
        article:
          "Java,Python等0基础皆可报名预科班+正式班,手把手带你搞定大数据核心技能"
      }
    };
  },
  components: {
    card,
    notice,test
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