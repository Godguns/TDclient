<template>
  <div class="home">
    
        
          <div class="topbg">
            
          </div>
            <NoticeBar></NoticeBar>
  </div>
</template>

<script>
import NoticeBar from '../components/NoticeBar '


export default {
    components:{
      NoticeBar
    }
};
</script>
<style scoped>
.topbg{
  width: 100vw;
  height: 35vh;
  background-image: url('/topbg.png');
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
