<template>
  <div class="home">
    <div>
      <div class="top">
        
        <div class="swipe">
          <img
            class="swip-img"
            src="https://pic5.40017.cn/i/ori/UD4oAmvC6c.jpg"
            alt=""
          />
        </div>
        
      </div>

      <div class="content">
        <grid class="grid"></grid>
        <!-- <p class="tip-msg-zl">全部课程</p> -->
        <div ref="wrapper" class="wrapper">
          <ul class="con">
            <li>
              
                <book :msg="item" v-for="(item,index ) in list" :key="index">

                </book>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
import book from "../components/BookCard";
import BScroll from "better-scroll";
import grid from "../components/Grid";

export default {
  components: {
    book,

    grid,
  },
  mounted() {
    this.$nextTick(() => {
      //$refs绑定元素
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          //开启点击事件 默认为false
          click: true,
        });
        this.scroll.refresh();
        // console.log(this.scroll)
      } else if (!this.$refs.wrapper) {
        this.scroll.refresh();
        return;
      } else {
        this.scroll.refresh();
      }
    });
    this.$axios({
      method:"get",
      url:"/getpics"
    }).then(response=>{
      this.list=response.data.data
      console.log(response.data.data)
    })
  },
  data() {
    return {
      list:[]
    };

  },
};
</script>
<style scoped>
>>> .van-grid-item__text {
  color: white;
}
>>> .van-grid-item__icon {
  color: white;
}
>>> .van-grid-item__content {
  background-color: #00c777;
}
>>> .van-grid-item {
  background-color: #00c777;
}
>>> .grid {
  width: 100vw;
  background-color: #00c777;
}
.book {
  margin-top: 10px;
  transform: scale(0.9);
}
.home {
  width: 100vw;
  min-height: 100vh;
   /* background: #00c777; */
}
.wrapper {
  width: 100vw;
  height: 70vh;
  overflow: hidden;
  padding-top: 50px;
  z-index: 1;
}

.swip-img {
  width: 100vw;
  height: auto;
  transform: scale(0.9);
  border-radius: 8px;
}
.swipe {
  width: 100vw;
  height: 400px;
  background-size: percentage;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
}
>>> .van-nav-bar__text {
  color: white;
  font-size: 18px;
  font-weight: 900;
}
.tap {
  padding-top: 10px;
  background: #00c777;
  border: #00c777;
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
.tip-msg-zl {
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
