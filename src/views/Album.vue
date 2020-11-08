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



<div v-for="(item,index) in albums" :key="index" class="block">
  <el-timeline>
    <el-timeline-item :timestamp="item.Album_time" placement="top">
      <el-card>
        <h4>{{item.Album_name}}</h4>
        <p>{{item.Album_info}}</p>
        <div class="box">
             <van-image
             @click="show(index2,index)"
             v-for="(item,index2) in item.Album_imgs"
             :key="index2"
          width="60px"
          height="60px"
          class="imga"
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
import { ImagePreview } from 'vant';

Vue.use(Lazyload);
export default {
  data() {
    return {
      images: [
       
      ],
      albums:[],
      albumings:[]
      
    };
  },
  created(){
   this.getAlbum()
   this.getBanner()
  },
  methods:{
   show(e,i){
     
   
     console.log(e)
      ImagePreview({images:this.albums[i].Album_imgs, closeable: true})
   },
      getAlbum(){
             this.$axios({
          url:'/get_album',
          method:'get',

      }).then(res=>{
          console.log(res.data.data)
          this.albums=res.data.data
          
      })
      },
      getBanner(){
          this.$axios({
              url:'/get_banner',
              method:"get",
          }).then(res=>{
             
              res.data.data.forEach((item) => {
                  this.images.push(item.banner)
              }); 
          })
      }
  }
};
</script>
<style scoped>
.imga{
  margin: 5px ;
}
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
    justify-content: center;
    flex-wrap: wrap;
}
</style>