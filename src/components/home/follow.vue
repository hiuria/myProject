<template>
  <div class="box">
    <h1>关注CONVERSE</h1>
    <p>Converse同时活跃在各类社交网络平台，点击下列你所喜爱的常用社交平台，密切关注Converse的最新产品与资讯。</p>
    <div class="link">
      <a href="https://weibo.com/" target="_blank"></a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="http://page.renren.com/converse?checked=true" target="_blank"></a>
      <a href="https://site.douban.com/converse/" target="_blank"></a>
    </div>
  </div>
</template>

<script>
  export default{
    name:'follow'
  }
</script>

<style scoped>
.box{
  width: 100%;
  height: 359px;
  background: #464646;
  text-align: center;
  color: white;
  margin-top: 80px;
}
.box h1{
  display: inline-block;
  font-size: 30px;
  margin: 78px auto 35px;
}
.box p{
  font-size: 16px;
}
.box .link{
  margin: 37px auto 0;
  width: 525px;
  height: auto;
  overflow: hidden;
}
.box .link a{
  display: block;
  width: 75px;
  height: 75px;
  float: left;
  margin: 0 15px;
  background: url('../../assets/img/share.png');
}
.box .link a:nth-child(1){
  background-position: -75px 0;
}
.box .link a:nth-child(2){
  background-position: -75px -75px;
}
.box .link a:nth-child(3){
  background-position: -75px -150px;
}
.box .link a:nth-child(4){
  background-position: -75px -225px;
}
.box .link a:nth-child(5){
  background-position: -75px -300px;
}
.box .link a:nth-child(1):hover{
  background-position: 0 0;
}
.box .link a:nth-child(2):hover{
  background-position: 0 -75px;
}
.box .link a:nth-child(3):hover{
  background-position: 0 -150px;
}
.box .link a:nth-child(4):hover{
  background-position: 0 -225px;
}
.box .link a:nth-child(5):hover{
  background-position: 0 -300px;
}
</style>