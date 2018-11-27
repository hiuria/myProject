<template>
  <div class="box">
    <div class="header"></div>
    <div class="warn" v-show="num == 0">
      <p>尊敬的顾客您好，我们店铺是不会泄露您的消费信息的，请放心。另外我们也不会要求获取、收集、使用任何与消费者金融消费类（如：信用卡）信息，如果接到以上信息电话，是属于诈骗电话，请勿相信，以防钱财损失。如您对订单有疑问，请联系在线客服。</p>
      <span @click="close()"></span>
    </div>
    <div class="process">
      <ul>
        <li>
          <p>我的购物车</p>
          <i></i>
        </li>
        <li>
          <p>填写订单信息</p>
          <i></i>
        </li>
        <li>
          <p>成功提交订单</p>
          <i></i>
        </li>
      </ul>
    </div>
    <div class="null">您的购物车还是空的</div>
    <router-link to="/home" tag="div" class="goshopping">马上去购物</router-link>
  </div>
</template>

<script>
  export default{
    name:'shoppingCart',
    data(){
      return{
        num : 0
      }
    },
    methods:{
      close:function(){
        this.num = 1;
      }
    }
  }
</script>

<style scoped>
@import '../css/shoppingCart.css';
</style>