<template>
  <div>
    <van-grid :column-num="3" :border='false'>
      <van-grid-item @click="goTJ" icon="live" text="推荐学员" />
      <van-grid-item color="#1989fa" @click="goPublic" icon="new" text="广场" />
      <van-grid-item color="#07c160" @click="goAlbum" icon="send-gift" text="专辑" />
    </van-grid>
  </div>
</template>
<script>
export default {
  methods:{
    goPublic(){
        this.$router.push({path:'/public'})
    },
    goTJ(){
      this.$router.push({
        path:'/tuijian'
      })
    },
     goAlbum(){
      this.$router.push({
        path:'/album'
      })
    }
  }
}
</script>