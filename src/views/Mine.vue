<template>
  <div :style="bg" class="home">
<van-popup v-model="showpop">
<el-upload
  class="avatar-uploader"
 action="http://upload-z2.qiniup.com"
                                   
:data="{token: token}"
  :show-file-list="false"
  :on-success="handleAvatarSuccess">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
</van-popup>
<van-share-sheet
  v-model="show"
  title="操作"
  :options="options"
  @select="onSelect"
/>

 
              
  
    <div class="content">
      <div class="hero">
        <van-image @click="showUploaad" round fit="cover" :src="avater" class="avater1"/>
        <div class="info"><h3>{{username}}</h3></div>
      </div>

      <div class="art">
          <van-divider content-position="left">用户ID</van-divider>
        <van-cell  :title="id" size="large" />
        <van-divider content-position="left">我的信息</van-divider>
        <van-cell
          title="这个人很懒，什么也没留下"
         
          size="large"
          label=""
        />

        <van-divider content-position="left">我的课程</van-divider>
        <div class="imgs">
          <!-- <img src="http://dongdove.cn/FqJQKsw41YzNNdUVKgEr4n7ut_I6" alt=""> -->
           <van-image v-for="(item,index) in collect" :key="index" round fit="cover" :src="item" class="avater1"/>
           
        </div>

        <van-divider content-position="left">我的收藏</van-divider>
        <van-cell title="this is a test" size="large" label="" />
      </div>
    </div>
     

  
  
  
  </div>
</template>
<script>
//import book from '../components/BookCard'

export default {
  components:{
   
  },
  data(){
    return {
      collect:sessionStorage.getItem('collect').split(','),
      id:sessionStorage.getItem('id'),
      imageUrl:"",
      token:"",
      showpop:false,
      show:false,
      username:sessionStorage.getItem('username'),
      avater:sessionStorage.getItem('avater'),
      bg:{
         backgroundImage: `url('${sessionStorage.getItem('avater')}')`,
         backgroundPosition: 'cente'
         
      },
       options: [
       
        { name: '复制链接', icon: 'link' },
        { name: '更换头像', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],

    }
  },
  mounted(){
    this.getQiniuToken()
  },
  methods: {
    handleAvatarSuccess(res){
      console.log("hhh")
           //this.$message.success('嗯呐,上传已经完成了！');
        this.imageUrl = 'http://dongdove.cn/'+res.hash;
        this.$axios({
          url:'/api/v1/auth/change_info',
          method:'get',
          params:{
            username:sessionStorage.getItem('username'),
            avater:this.imageUrl
          }
        }).then(response=>{
          console.log(response.data)
           this.showpop=false;
           this.show=false;

           sessionStorage.setItem('avater',response.data.data.avater)
           this.avater=sessionStorage.getItem('avater')
           this.bg.backgroundImage=`url('${sessionStorage.getItem('avater')}')`
        })
    },
        onSelect(option) {
      console.log(option.name)
      if(option.name=="更换头像"){
        this.showpop=!this.showpop
      }
      
    },
    showUploaad(){
      this.show=!this.show
    },
    getQiniuToken(){
      this.$axios({
        url:'/api/v1/file/token',
        meethod:"get",

      }).then(response=>{
        console.log(response.data)
        this.token=response.data.token
      })
    }
  },
};
</script>
<style scoped>
.imgs {
  display: flex;
  justify-content: flex-start;
}
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

>>> .van-nav-bar__text{
  color: black;
}
>>> .van-icon-arrow-left::before {
    content: '\F008';
    display: none;
}
.info {
  margin-left: 20px;
  
  font-size: 20px;
}
.wrapper {
  width: 100vw;
  height: 70vh;
  overflow: hidden;
  z-index: 1;
}
.content {
  position: absolute;
  top: 25vh;
  z-index: 9;
}

.avater1 {
  margin: 12px 0;
  background: #fff;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin-left: 20px;
  background-size: contain;
 
}
.home {
  background: #f1c40f;
  height: 100vh;
}
.art {
  padding: 10px;
  border-radius: 7px;
  background-color: #fff;
}
.hero {
  padding-top: 30px;
  width: 100vw;
  height: 20vh;
  display: flex;
}
.msg {
  font-size: 15px;
  text-align: left;
  display: block;
  padding: 10px;
}
</style>
