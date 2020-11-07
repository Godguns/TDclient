<template>
  <div >
    <van-swipe class="swip" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <van-image
          width="10rem"
          height="10rem"
          fit="cover"
          :src="image"
        />
      </van-swipe-item>
    </van-swipe>



<div class="block">
  <el-timeline>
    <el-timeline-item timestamp="2018/4/12" placement="top">
      <el-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/12 20:46</p>
        <div class="box">
             <van-image
             v-for="(item,index) in images"
             :key="index"
          width="60px"
          height="60px"
          fit="cover"
          :src="item"
        />
        </div>
      </el-card>
    </el-timeline-item>


  </el-timeline>
</div>



  </div>
</template>
<script>
import Vue from "vue";
import { Lazyload } from "vant";

Vue.use(Lazyload);
export default {
  data() {
    return {
      images: [
        "http://dongdove.cn/Fop1GN8dc3NYVhDlnLfNKEybsTXB",
        "https://pic5.40017.cn/i/ori/UD4oAmvC6c.jpg",
         "http://dongdove.cn/Fop1GN8dc3NYVhDlnLfNKEybsTXB",
        "https://pic5.40017.cn/i/ori/UD4oAmvC6c.jpg",
         "http://dongdove.cn/Fop1GN8dc3NYVhDlnLfNKEybsTXB",
        "https://pic5.40017.cn/i/ori/UD4oAmvC6c.jpg"
      ],
      
    };
  },
  created(){
   this.getAlbum()
   this.getBanner()
  },
  methods:{
      getAlbum(){
             this.$axios({
          url:'/get_album',
          method:'get',

      }).then(res=>{
          console.log(res.data.data)
          
      })
      },
      getBanner(){
          this.$axios({
              url:'/get_banner',
              method:"get",
          }).then(res=>{
              console.log(res.data.data)
          })
      }
  }
};
</script>
<style scoped>
.swip {
  width: 100vw;
    max-height: 39vh;
  overflow: hidden;
}
.block{
    transform: scale(.95);
}
.box{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
</style>