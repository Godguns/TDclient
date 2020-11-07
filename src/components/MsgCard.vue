<template>
    <div class="home">
        <div class="header">
            <div class="avater">
                 <van-image round fit="cover" class="avater" :src="msg.avater" alt=""/>
            </div>
           <div class="title">
                <div class="name"><h3>{{msg.username}}</h3></div>
            <div class="time">{{msg.time}}</div>
           </div>
        </div>
        <div class="content">
            {{msg.content}}
        </div>
        <div class="footer">

        </div>

    </div>
</template>
<script>
export default {
    props:['msg']
}
</script>
<style scoped>

.home{
    margin-top: 5px;
    background-color: white;
    position: relative;
    padding: 3px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 2px 10px 0 rgba(0, 0, 0, 0.02);
    border-radius: 5px;
}
.avater{
    display: block;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    padding: 5px;
   

}
.header{
    display: flex;
    align-items: center;
    justify-content:flex-start;
}
.name{
   
}
.time{
    color: #ccc;
    position: relative;
    top: -5px;
}
.title{
    margin-left: 15px;
    display: flex;
    flex-direction: column;
}
</style>