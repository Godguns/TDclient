<template>
  <div class="home">
    <div>
      <div class="top">
        <van-nav-bar
          left-text="游学天下"
         class="tap"
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
        <div class="swipe">
          <img class="swip-img" src="https://pic5.40017.cn/i/ori/UD4oAmvC6c.jpg" alt="">
        </div>
      </div>
      <div class="topbg"></div>

      <div class="content">
        <p class="tip-msg">专栏</p>
        <grid class="grid"></grid>
        <!-- <card :msg="msg" class="card"></card> -->
         <p class="tip-msg-zl">全部课程</p>
         <!-- <noticebar></noticebar> -->
         <book class="book"></book>
      </div>
      <div class="footer"></div>
    </div>

  </div>
</template>

<script>
//import card from "../components/LessonCard";
import book from '../components/BookCard';
//import noticebar from '../components/NoticeBar ';
import grid from '../components/Grid';


export default {
  components: {
    
    book,
    
    grid
    
  },
  data() {
    return{}
  }
};
</script>
<style scoped>
>>> .van-grid-item__text{
  color: white;
}
>>> .van-grid-item__icon{
  color: white;
}
>>> .van-grid-item__content{
  background-color: #00c777;}
>>> .van-grid-item{
  background-color: #00c777;
}
>>> .grid{
  width: 100vw;
  background-color: #00c777;

}
.book{
  margin-top: 10px;
  transform: scale(.9);
}
.home{
  width: 100vw;
  min-height: 100vw;

  
}

.swip-img{
 width: 100vw;
 height: auto;
 transform: scale(.9);
 border-radius: 8px;
}
.swipe{
  /* background-image: url('https://pic5.40017.cn/i/ori/UD4oAmvC6c.jpg'); */
  width: 100vw;
  height: 400px;
  background-size: percentage;
  background-repeat: no-repeat;
  position: relative;
}
>>> .van-nav-bar__text{
  color: white;
  font-size: 18px;
  font-weight: 900;
}
.tap{
  padding-top: 10px;
  background: #00c777;
  border:#00c777;
}

.van-hairline--bottom::after {
    border-bottom-width: 0px;
}
.tip-msg {
  text-align: left;
  padding-left: 6%;
  font-size: 15px;
  box-sizing: border-box;
  color: white;
  font-weight: 900;
  position: relative;
  top: 10px;
}
.tip-msg-zl{
  text-align: left;
  padding-left: 6%;
  font-size: 15px;
  box-sizing: border-box;
  font-weight: 900;
  margin-top: 50px;
  padding-bottom: 10px;
  padding-top: 8px;

}
.card {
  margin: 0 auto;
}
.top {
  width: 100vw;
  height: 30vh;
  background: #00c777;
}
.topbg {
  width: 100vw;
  height: 30vh;
  background-image: url("/topbg.png");
  background-size: contain;
  background-repeat: no-repeat;
 

}
.content {
  position: absolute;
  top: 25vh;
  z-index: 9;
 
}
</style>
