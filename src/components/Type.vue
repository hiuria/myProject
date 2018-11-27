<template>
  <div class="box">
    <div class="title">
      <ul>
        <li @mouseenter="test1()" @mouseleave="remove()">
          <router-link to="/male" tag="a" href="#">
            男的
            <Icon class="icon" type="md-arrow-dropdown" />
          </router-link>
        </li>
        <li @mouseenter="test2()" @mouseleave="remove()">
          <a href="#">
            女的
            <Icon class="icon" type="md-arrow-dropdown" />
          </a>
        </li>
        <li @mouseenter="test3()" @mouseleave="remove()">
          <a href="#">
            儿童
            <Icon class="icon" type="md-arrow-dropdown" />
          </a>
        </li>
        <li>
          <a href="#">
            型人搭配
            <Icon class="icon" type="md-arrow-dropdown" />
          </a>
        </li>
        <li>
          <a href="#">
            联名合作款
            <Icon class="icon" type="md-arrow-dropdown" />
          </a>
        </li>
        <li>
          <a href="#">
            店铺分布
            <Icon class="icon" type="md-arrow-dropdown" />
          </a>
        </li>
      </ul>
    </div>
    <transition name="fade" mode="out-in">
      <div class="details male" v-show="num == 1" @mouseenter="test1()" @mouseleave="remove()">
        <ul>
          <li>
            <img src="../assets/img/male1.jpg" alt="">
            <span>踩的</span>
          </li>
          <li>
            <img src="../assets/img/male2.jpg" alt="">
            <span>穿的</span>
          </li>
          <li>
            <img src="../assets/img/male3.jpg" alt="">
            <span>T恤</span>
          </li>
          <li>
            <img src="../assets/img/male4.jpg" alt="">
            <span>戴的</span>
          </li>
          <li>
            <img src="../assets/img/male5.jpg" alt="">
            <span>新产品</span>
          </li>
          <li>
            <img src="../assets/img/male6.jpg" alt="">
            <span>优惠</span>
          </li>
        </ul>
        <div class="line"></div>
        <ul>
          <li>
            <img src="../assets/img/shoes1.jpg" alt="">
            <span>经典款</span>
          </li>
          <li>
            <img src="../assets/img/shoes2.jpg" alt="">
            <span>CHUCK 70</span>
          </li>
          <li>
            <img src="../assets/img/shoes3.jpg" alt="">
            <span>ONE STAR</span>
          </li>
          <li>
            <img src="../assets/img/shoes4.jpg" alt="">
            <span>ALL STAR</span>
          </li>
          <li>
            <img src="../assets/img/shoes5.jpg" alt="">
            <span>CONS</span>
          </li>
          <li>
            <img src="../assets/img/shoes6.jpg" alt="">
            <span>JACK PURCELL</span>
          </li>
          <li>
            <img src="../assets/img/shoes7.jpg" alt="">
            <span>CHUCK II</span>
          </li>
        </ul>
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div class="details female" v-show="num == 2" @mouseenter="test2()" @mouseleave="remove()">
        <ul>
          <li>
            <img src="../assets/img/female1.jpg" alt="">
            <span>踩的</span>
          </li>
          <li>
            <img src="../assets/img/female2.jpg" alt="">
            <span>穿的</span>
          </li>
          <li>
            <img src="../assets/img/female3.jpg" alt="">
            <span>T恤</span>
          </li>
          <li>
            <img src="../assets/img/female4.jpg" alt="">
            <span>戴的</span>
          </li>
          <li>
            <img src="../assets/img/male5.jpg" alt="">
            <span>新产品</span>
          </li>
          <li>
            <img src="../assets/img/male6.jpg" alt="">
            <span>优惠</span>
          </li>
        </ul>
        <div class="line"></div>
        <ul>
          <li>
            <img src="../assets/img/shoes1.jpg" alt="">
            <span>经典款</span>
          </li>
          <li>
            <img src="../assets/img/shoes2.jpg" alt="">
            <span>CHUCK 70</span>
          </li>
          <li>
            <img src="../assets/img/shoes3.jpg" alt="">
            <span>ONE STAR</span>
          </li>
          <li>
            <img src="../assets/img/shoes4.jpg" alt="">
            <span>ALL STAR</span>
          </li>
          <li>
            <img src="../assets/img/shoes5.jpg" alt="">
            <span>CONS</span>
          </li>
          <li>
            <img src="../assets/img/shoes6.jpg" alt="">
            <span>JACK PURCELL</span>
          </li>
          <li>
            <img src="../assets/img/shoes7.jpg" alt="">
            <span>CHUCK II</span>
          </li>
        </ul>
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div class="details child" v-show="num == 3" @mouseenter="test3()" @mouseleave="remove()">
        <ul>
          <li>
            <img src="../assets/img/child1.jpg" alt="">
            <span>踩的</span>
          </li>
          <li>
            <img src="../assets/img/male5.jpg" alt="">
            <span>新产品</span>
          </li>
          <li>
            <img src="../assets/img/male6.jpg" alt="">
            <span>优惠</span>
          </li>
        </ul>
        <div class="line"></div>
        <ul>
          <li>
            <img src="../assets/img/shoes1.jpg" alt="">
            <span>经典款</span>
          </li>
          <li>
            <img src="../assets/img/shoes4.jpg" alt="">
            <span>ALL STAR</span>
          </li>
          <li>
            <img src="../assets/img/shoes5.jpg" alt="">
            <span>CONS</span>
          </li>
        </ul>
      </div>
    </transition>
    <div class="bg" v-show="num !== 0"></div>
  </div>
</template>

<script>
  export default {
    name:'Type',
    data(){
      return{
        num: 0
      }
    },
    methods:{
      test1:function(){
        this.num = 1
      },
      test2:function(){
        this.num = 2
      },
      test3:function(){
        this.num = 3
      },
      remove:function(){
        this.num = 0
      }
    }
  }
</script>

<style scoped>
@import '../css/Type.css';
</style>