<template>
  <div class="page"> 
            <van-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
    <van-pull-refresh success-text="刷新成功" v-model="isLoading">
       <div class="bg"></div>
       
        <div class="content">
               <TJCard :msg=item v-for="(item) in list" :key="item._id"></TJCard>
              
              
              
        </div>
    </van-pull-refresh>
  </div>
</template>
<script>
import TJCard from '../components/TuiJianCard'
export default {
    components:{
        TJCard

    },
  data() {
    return {
      isLoading: false,
      list:[]
    };
  },
  mounted(){
      this.$axios({
          url:'/get_TJ',
          method:'get'
      }).then(response=>{
          console.log(response.data.data)
          this.list=response.data.data

      })
  },
  methods: {
      
  }
};
</script>
<style scoped>
p{
   
}
.bg{
     background-color: cornflowerblue;
     width: 100vw;
     height: 20vh;
     filter: blur(16px);
    
}

.content{
    position: relative;
    top: -20vh;
    padding: 10px;
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>