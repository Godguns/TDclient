<template>
  <div class="card">
    <div class="header">{{msg.name}}</div>
    <div class="content">
      <p>{{msg.content}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["msg"]
};
</script>
<style scoped>
p {
  text-align: left;
  color: #fff;
  font-weight: 500;
  padding-bottom: 50px;
 
}
.card {
  transform: scale(0.9);
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 2px 10px 0 rgba(0, 0, 0, 0.02);
}
.header {
  font-size: 15px;
  font-weight: 900;
  color: white;
  box-shadow: .5 .5px 0px 0 rgba(0, 0, 0, 0.05);

  border-radius: 8px;
  height: 30px;
  padding-top: 10px;
  padding-left: 10px;
  background-color: #ff976a;
  text-align: left;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-right-radius: 8px;
}
.content {
  padding: 5px;
  padding-top: 2px;
  background-color: #ff976a;
   border-bottom-left-radius: 8px;
  border-bottom-right-radius:8px ;
}
</style>