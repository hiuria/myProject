<template>
  <div class="box">
    <div class="header"></div>
    <div class="contant">
      <Row>
        <Col span="5">
          <div class="left">
            <div class="share">
              <i></i>
              <span>分享</span>
            </div>
            <div class="collect">
              <i style="background-position: 0 -43px"></i>
              <span>加入收藏(70)</span>
            </div>
            <div class="stars">
              <span></span>
            </div>
          </div>
        </Col>
        <Col span="13">
          <div class="middle">
            <h1>【男女同款】Chuck 70 中性</h1>
            <h1>价格¥799.00</h1>
            <div class="pic">
              <img src="../assets/img/details/product1_big_1.png" alt="" v-show="num==1">
              <img src="../assets/img/details/product1_big_2.png" alt="" v-show="num==2">
              <img src="../assets/img/details/product1_big_3.png" alt="" v-show="num==3">
              <img src="../assets/img/details/product1_big_4.png" alt="" v-show="num==4">
              <img src="../assets/img/details/product1_big_5.png" alt="" v-show="num==5">
              <img src="../assets/img/details/product1_big_6.png" alt="" v-show="num==6">
            </div>
            <div class="thumbnail">
              <ul>
                <li @click="showPic1()" :class="{line:num==1}"><img src="../assets/img/details/product1_small_1.png" alt=""></li>
                <li @click="showPic2()" :class="{line:num==2}"><img src="../assets/img/details/product1_small_2.png" alt=""></li>
                <li @click="showPic3()" :class="{line:num==3}"><img src="../assets/img/details/product1_small_3.png" alt=""></li>
                <li @click="showPic4()" :class="{line:num==4}"><img src="../assets/img/details/product1_small_4.png" alt=""></li>
                <li @click="showPic5()" :class="{line:num==5}"><img src="../assets/img/details/product1_small_5.png" alt=""></li>
                <li @click="showPic6()" :class="{line:num==6}"><img src="../assets/img/details/product1_small_6.png" alt=""></li>
              </ul>
            </div>
          </div>
        </Col>
        <Col span="6">
          <div class="right">
            <div class="color">
              <div><img src="../assets/img/details/product1_small_1.png" alt=""></div>
            </div>
            <div class="introduce">
              <span>色:黑色</span>
              <span>型号:163087C001</span>
            </div>
            <div class="size_list">
              <Icon type="ios-arrow-forward" class="icon" />
              尺码对照表
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  export default{
    name:'Details',
    data(){
      return{
        num : 1
      }
    },
    methods:{
      showPic1:function(){
        this.num = 1
      },
      showPic2:function(){
        this.num = 2
      },
      showPic3:function(){
        this.num = 3
      },
      showPic4:function(){
        this.num = 4
      },
      showPic5:function(){
        this.num = 5
      },
      showPic6:function(){
        this.num = 6
      }
    }
  }
</script>

<style scoped>
@import '../css/Details.css';
</style>