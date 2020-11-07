<template>
  <div class="lscard">
    <van-card
      
      :price="msg.time"
      :desc="msg.info"
      :title="msg.title"
      :thumb="msg.imgsrc"
    >
      <template #tags>
        <van-tag v-for="(item,index) in msg.tag" :key="index" plain type="danger">{{item}}</van-tag>
       
      </template>
      <template #footer>
        <van-button @click="goinfo(msg._id)" size="mini">详情</van-button>
      </template>
    </van-card>
  </div>
</template>
<script>
export default {
  props:['msg'],
  methods:{
    goinfo(data){
      this.$router.push({
        path:`/info/${data}`
      })
    }
  }
}
</script>
<style scoped>
.lscard{
  padding: 7px;
}

>>> .van-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}
>>> .van-card__price-currency{
  display: none;
}
</style>