<template>
    <div class="home">
        <div class="header">
            <div class="avater">
                 <van-image round fit="cover" class="avater" src="http://dongdove.cn/Fh9kDoXIkO_qm30871JoNEMabhpm" alt=""/>
            </div>
           <div class="title">
                <div class="name"><h3>Godguns</h3></div>
            <div class="time">2020-11-01</div>
           </div>
        </div>
        <div class="content">
            又是晴朗的一天，太阳红彤彤，花儿五颜六色☀️
        </div>
        <div class="footer">

        </div>

    </div>
</template>
<script>
export default {
    props:['data']
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