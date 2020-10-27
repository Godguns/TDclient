<template>
  <div class="home">
    <!-- <van-nav-bar
      title="我"
      
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="content">
      <div class="hero">
        <div class="avater"></div>
        <div class="info"><h3>Godguns</h3></div>
      </div>

      <div class="art">
        <van-cell title="this is a test" value="内容" size="large" />
        <van-divider content-position="left">我的信息</van-divider>
        <van-cell
          title="this is a test"
          @click="showMine"
          size="large"
          label=""
        />

        <van-divider content-position="left">我的课程</van-divider>
        <book></book>

        <van-divider content-position="left">我的收藏</van-divider>
        <van-cell title="this is a test" size="large" label="" />
      </div>
    </div> -->


   <div ref="wrapper" class="wrapper">
          <ul class="con">
            <li>
              
                 <van-nav-bar
      title=""
      
      left-text=""
      right-text=""
      left-arrow
      
    />
    <div class="content">
      <div class="hero">
        <div class="avater"></div>
        <div class="info"><h3>Godguns</h3></div>
      </div>

      <div class="art">
        <van-cell title="this is a test" value="内容" size="large" />
        <van-divider content-position="left">我的信息</van-divider>
        <van-cell
          title="this is a test"
          @click="showMine"
          size="large"
          label=""
        />

        <van-divider content-position="left">我的课程</van-divider>
        <book></book>

        <van-divider content-position="left">我的收藏</van-divider>
        <van-cell title="this is a test" size="large" label="" />
      </div>
    </div>
            </li>
            <li></li>
          </ul>
        </div>

  
  
  
  </div>
</template>
<script>
import book from '../components/BookCard'
import { Dialog } from 'vant';
export default {
  components:{
    book
  },
  methods: {
    showMine() {
      Dialog.alert({
        title: "我的信息",
        message: "这是我的信息的测试内容",
      }).then(() => {
       
      });
    },
  },
};
</script>
<style scoped>
>>> .van-nav-bar{
  background-color: #f1c40f;
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

.avater {
  margin: 12px 0;
  background: #fff;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin-left: 20px;
  background-size: contain;
  background-image: url("/hero.jpg");
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
