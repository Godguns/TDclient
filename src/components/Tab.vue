<template>
  <div>
    <van-tabbar active-color="#646566"   v-model="active">
      <van-tabbar-item @click="gohome"  icon="home-o">课程</van-tabbar-item>
      <van-tabbar-item @click="gofly"  icon="friends-o">风采</van-tabbar-item>
      <van-tabbar-item @click="gomine" icon="manager-o">我</van-tabbar-item>
     
    </van-tabbar>
  </div>
</template>
<script>
export default {
    data(){
        return{
            active:0
        }
    },
    methods:{
        gofly(){
            this.$router.push({path:'/fly'})
        }, 
        gohome(){
            this.$router.push({path:'/'})
        },
        gomine(){
            this.$router.push({path:'/mine'})
        }

    }
}
</script>