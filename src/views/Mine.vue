<template>
  <div class="home">
    <van-nav-bar
      title="我"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="content">
      <div class="hero">
          <div class="avater"></div>
          <div class="info"><h4>Godguns</h4></div>
      </div>

      <div class="art">
           <van-cell title="单元格" value="内容" size="large" />
        <van-divider content-position="left">我的课程</van-divider>
        <van-cell title="单元格" value="内容" size="large" label="描述信息" />
         <van-cell title="单元格" value="内容" size="large" />
        <van-divider content-position="left">我的课程</van-divider>
        <van-cell title="单元格" value="内容" size="large" label="描述信息" />
        <van-cell title="单元格" value="内容" size="large" />
        <van-divider content-position="left">我的课程</van-divider>
        <van-cell title="单元格" value="内容" size="large" label="描述信息" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.info{
    margin-left: 20px;
    font-size: 20px;
   
}
.avater{
    margin:12px 0;
    background: #fff;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-left: 20px;
    background-size: contain;
    background-image: url('/hero.jpg');
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