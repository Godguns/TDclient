<template>
  <div>
    <van-card
      num="2"
      :price="msg.author"
      :desc="msg.info"
      :title="msg.title"
      :thumb="msg.avater"
    >
      <template #tags>
        <van-tag v-for="(item,index) in msg.tag" :key="index" plain type="danger">{{item}}</van-tag>
       
      </template>
      <template #footer>
        <van-button size="mini">试看 ></van-button>
      </template>
    </van-card>
  </div>
</template>
<script>
export default {
  props:['msg']
}
</script>
<style scoped>
>>> .van-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}
</style>