<template>
  <div class="home">
    <div class="hero">
      <van-image fit="cover" :src="msg.avater" />
    </div>
    <div class="title">
      <p>{{msg.content}}</p>
      <span>{{msg.username}}</span>
    </div>
  </div>
</template>
<style scoped>
.home {
   margin-top: 10px;
  position: relative;
overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  width: 38vw;
  height: 25vh;
}
.hero {
  height: 100%;
}
img {
  width: 38vw;
  max-height: 70%;
}

.title {
  width: 38vw;
  height: 10vh;
  background-color: rgba(216, 213, 213, 0.3);
  position: absolute;
  bottom: 0;
  left: 0;

  z-index: 1;
}
.title::after {
  content: "";
  background-color: rgba(255, 255, 255, 0.8);
  background-position: center top;
  background-size: cover;
  background-attachment: fixed;
  filter: blur(26px);
  position: absolute;
  width: 38vw;
  height: 10vh;
  left: 0;

  bottom: 0;

  z-index: -1;
}
</style>
<script>
export default {
    props:['msg'],
  data() {
    return {
      imgsrc: sessionStorage.getItem("avater")
    };
  }
};
</script>