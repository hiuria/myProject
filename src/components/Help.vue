<template>
  <div class="box">
    <div class="header"></div>
    <div class="content">
      <div class="title">
        <h1>帮助和购物指南</h1>
      </div>
      <div class="tips">根据指南找到想要了解的功能，或者点击“联系我们”寻问客服。</div>
      <div class="question_type">
        <ul>
          <router-link to="/home/account" tag="li">
            <i class="one"></i>账户
          </router-link>
          <router-link to="/home/order" tag="li">
            <i class="two"></i>订单
          </router-link>
          <router-link to="/home/size" tag="li">
            <i class="three"></i>尺码
          </router-link>
          <router-link to="/home/payment" tag="li">
            <i class="four"></i>支付方式
          </router-link>
        </ul>
        <ul>
          <router-link to="/home/return" tag="li">
            <i class="five"></i>退货和退款
          </router-link>
          <router-link to="/home/exchange" tag="li">
            <i class="six"></i>换货
          </router-link>
          <router-link to="/home/delivery" tag="li">
            <i class="seven"></i>配送
          </router-link>
          <router-link to="/home/contact" tag="li">
            <i class="eight"></i>联系我们
          </router-link>
        </ul>
        <div class="more">
          <a href="#">查看全部常见问题</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'Help'
  }
</script>

<style scoped>
@import '../css/Help.css';
</style>