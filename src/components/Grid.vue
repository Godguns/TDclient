<template>
  <div>
    <van-grid :column-num="3" :border='false'>
      <van-grid-item icon="live" text="直播" />
      <van-grid-item color="#1989fa" @click="goPublic" icon="new" text="广场" />
      <van-grid-item color="#07c160" icon="send-gift" text="预约" />
    </van-grid>
  </div>
</template>
<script>
export default {
  methods:{
    goPublic(){
        this.$router.push({path:'/public'})
    }
  }
}
</script>