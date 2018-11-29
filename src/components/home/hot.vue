<template>
  <div class="box">
    <div class="title">
      <h1>热卖单品</h1>
    </div>
    <div class="type">
      <div @mouseenter="show_male()">
        <a href="#">男的踩的</a>
        <img src="../../assets/img/type1.jpg" alt="">
      </div>
      <div @mouseenter="show_female()">
        <a href="#">女的踩的</a>
        <img src="../../assets/img/type2.jpg" alt="">
      </div>
      <div @mouseenter="show_clothes()">
        <a href="#">穿的</a>
        <img src="../../assets/img/type3.jpg" alt="">
      </div>
      <div @mouseenter="show_bag()">
        <a href="#">戴的</a>
        <img src="../../assets/img/type4.jpg" alt="">
      </div>
    </div>
    <div class="slider">
      <img src="../../assets/img/active.png" alt="" v-show="num == 1">
      <img src="../../assets/img/active.png" alt="" v-show="num == 2">
      <img src="../../assets/img/active.png" alt="" v-show="num == 3">
      <img src="../../assets/img/active.png" alt="" v-show="num == 4">
    </div>
    <div class="male all" v-show="num == 1">
      <div class="product classical">
        <router-link to="/details" tag="div">
          <img src="../../assets/img/product1.png" alt="">
          <span class="name">【男女同款】Chuck 70</span>
          <span class="price">¥799.00</span>
        </router-link>
        <div>
          <img src="../../assets/img/product2.png" alt="">
          <span class="name">【男女同款】Chuck 70</span>
          <span class="price">¥669.00</span>
        </div>
        <div>
          <img src="../../assets/img/product3.png" alt="">
          <span class="name">【男女同款】Chuck 70 Tech Hiker</span>
          <span class="price">¥769.00</span>
        </div>
        <div>
          <img src="../../assets/img/product4.png" alt="">
          <span class="name">【男女同款】Chuck 70</span>
          <span class="price">¥699.00</span>
        </div>
      </div>
      <div class="product hot">
        <div>
          <img src="../../assets/img/hot1.png" alt="">
          <span class="name">【男女同款】Chuck 70</span>
          <span class="price">¥639.00</span>
        </div>
        <div>
          <img src="../../assets/img/hot2.png" alt="">
          <span class="name">【男女同款】One Star</span>
          <span class="price">¥639.00</span>
        </div>
        <div>
          <img src="../../assets/img/hot3.png" alt="">
          <span class="name">【男女同款】One Star</span>
          <span class="price">¥599.00</span>
        </div>
        <div>
          <img src="../../assets/img/hot4.png" alt="">
          <span class="name">【男女同款】One Star</span>
          <span class="price">¥599.00</span>
        </div>
      </div>
      <div class="more">
        <a href="#">查看所有男的踩的最新商品</a>
      </div>
    </div>
    <div class="female all" v-show="num == 2">
      <div class="product classical">
        <div>
          <img src="../../assets/img/female_product1.png" alt="">
          <span class="name">【男女同款】Chuck 70</span>
          <span class="price">¥799.00</span>
        </div>
        <div>
          <img src="../../assets/img/female_product2.png" alt="">
          <span class="name">【男女同款】Chuck 70 Tech Hiker</span>
          <span class="price">¥769.00</span>
        </div>
        <div>
          <img src="../../assets/img/female_product3.png" alt="">
          <span class="name">【男女同款】Chuck 70</span>
          <span class="price">¥669.00</span>
        </div>
        <div>
          <img src="../../assets/img/female_product4.png" alt="">
          <span class="name">【男女同款】Chuck 70</span>
          <span class="price">¥699.00</span>
        </div>
      </div>
      <div class="product hot">
        <div>
          <img src="../../assets/img/hot1.png" alt="">
          <span class="name">【男女同款】Chuck 70</span>
          <span class="price">¥639.00</span>
        </div>
        <div>
          <img src="../../assets/img/hot2.png" alt="">
          <span class="name">【男女同款】One Star</span>
          <span class="price">¥639.00</span>
        </div>
        <div>
          <img src="../../assets/img/female_hot3.png" alt="">
          <span class="name">【男女同款】Thuck Taylor All Star</span>
          <span class="price">¥469.00</span>
        </div>
        <div>
          <img src="../../assets/img/female_hot4.png" alt="">
          <span class="name">【男女同款】Thuck Taylor All Star</span>
          <span class="price">¥439.00</span>
        </div>
      </div>
      <div class="more">
        <a href="#">查看所有女的踩的最新商品</a>
      </div>
    </div>
    <div class="clothes all" v-show="num == 3">
      <div class="product classical">
        <div>
          <img src="../../assets/img/clothes_product1.png" alt="">
          <span class="name">【男的】Converse Seasonal Down Puffer Jacket</span>
          <span class="price">¥1269.00</span>
        </div>
        <div>
          <img src="../../assets/img/clothes_product2.png" alt="">
          <span class="name">【男的】Converse Star Chevron Track Pullover Hoodie</span>
          <span class="price">¥469.00</span>
        </div>
        <div>
          <img src="../../assets/img/clothes_product3.png" alt="">
          <span class="name">【男的】Converse Down Bomber</span>
          <span class="price">¥1119.00</span>
        </div>
        <div>
          <img src="../../assets/img/clothes_product4.png" alt="">
          <span class="name">【男的】Concerse Essentials Reflective Star Chevron Fullzip Hood</span>
          <span class="price">¥599.00</span>
        </div>
      </div>
      <div class="product hot">
        <div>
          <img src="../../assets/img/clothes_hot1.png" alt="">
          <span class="name">【女的】Converse Lurex Cropped Crew</span>
          <span class="price">¥469.00</span>
        </div>
        <div>
          <img src="../../assets/img/clothes_hot2.png" alt="">
          <span class="name">【女的】Converse Oversize MA-1 Down Jacket</span>
          <span class="price">¥999.00</span>
        </div>
        <div>
          <img src="../../assets/img/clothes_hot3.png" alt="">
          <span class="name">【女的】Converse Lurex Cropped Crew</span>
          <span class="price">¥469.00</span>
        </div>
        <div>
          <img src="../../assets/img/clothes_hot4.png" alt="">
          <span class="name">【女的】Converse Sweater Knit Pant</span>
          <span class="price">¥499.00</span>
        </div>
      </div>
      <div class="more">
        <a href="#">查看所有穿的最新商品</a>
      </div>
    </div>
    <div class="bag all" v-show="num == 4">
      <div class="product classical">
        <div>
          <img src="../../assets/img/bag_product1.png" alt="">
          <span class="name">【男女同款】Go Backpack</span>
          <span class="price">¥469.00</span>
        </div>
        <div>
          <img src="../../assets/img/bag_product2.png" alt="">
          <span class="name">【男女同款】Go Backpack</span>
          <span class="price">¥299.00</span>
        </div>
        <div>
          <img src="../../assets/img/bag_product3.png" alt="">
          <span class="name">【男女同款】Mini Backpack</span>
          <span class="price">¥439.00</span>
        </div>
        <div>
          <img src="../../assets/img/bag_product4.png" alt="">
          <span class="name">【男女同款】Full Ride Backpack</span>
          <span class="price">¥699.00</span>
        </div>
      </div>
      <div class="product hot">
        <div>
          <img src="../../assets/img/bag_hot1.png" alt="">
          <span class="name">【男女同款】Cross Body</span>
          <span class="price">¥219.00</span>
        </div>
        <div>
          <img src="../../assets/img/bag_hot2.png" alt="">
          <span class="name">【男女同款】Graphic Beanie</span>
          <span class="price">¥139.00</span>
        </div>
        <div>
          <img src="../../assets/img/bag_hot3.png" alt="">
          <span class="name">【男女同款】Graphic Baseball</span>
          <span class="price">¥139.00</span>
        </div>
        <div>
          <img src="../../assets/img/bag_hot4.png" alt="">
          <span class="name">【男女同款】Core Beanie</span>
          <span class="price">¥139.00</span>
        </div>
      </div>
      <div class="more">
        <a href="#">查看所有戴的最新商品</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Hot',
    data(){
      return{
        num : 1
      }
    },
    methods:{
      show_male:function(){
        this.num = 1
      },
      show_female:function(){
        this.num = 2
      },
      show_clothes:function(){
        this.num = 3
      },
      show_bag:function(){
        this.num = 4
      }
    }
  }
</script>

<style scoped>
.box{
  margin-top: 80px;
  max-width: 1000px;
  margin: 80px auto 0;
}
.title{
  width: 100%;
  position: relative;
}
.title h1{
  display: inline-block;
  width: 100%;
  font-size: 30px;
  color: #333;
  font-weight: lighter;
  text-align: center;
}
.title:before{
  content: '';
  width: 38%;
  height: 1px;
  border-bottom: 1px solid #b7b7b7;
  position: absolute;
  top:50%;
  margin-left: 20px;
}
.title:after{
  content: '';
  width: 38%;
  height: 1px;
  border-bottom: 1px solid #b7b7b7;
  position: absolute;
  bottom: calc(50% - 1px);
  right: 2%;
}
.type{
  width: 100%;
  overflow: hidden;
  margin-top: 50px;
  min-width: 770px;
}
.type>div{
  float: left;
  width: 24%;
  padding-left: 3%;
  margin-right: 1%;
  min-width: 180px;
}
.type>div>a{
  display: block;
  width: 100%;
  color: #333;
  text-align: center;
  font-size: 24px;
}
.type>div:hover{
  cursor: pointer;
  text-decoration: underline;
}
.slider{
  width: 96%;
  position: relative;
  margin: 20px auto;
}
.slider:before{
  content: '';
  position: absolute;
  top: 0;
  width: 100%; 
  height: 1px;
  border-bottom: 1px solid #b7b7b7;
}
.slider img:nth-child(1){
  position: absolute;
  top: 0;
  left: 8%; /* 8% 34% 62% 90% */
}
.slider img:nth-child(2){
  position: absolute;
  top: 0;
  left: 34%; /* 8% 34% 62% 90% */
}
.slider img:nth-child(3){
  position: absolute;
  top: 0;
  left: 63%; /* 8% 34% 62% 90% */
}
.slider img:nth-child(4){
  position: absolute;
  top: 0;
  left: 90%; /* 8% 34% 62% 90% */
}
.all .product{
  width: 100%;
  overflow: hidden;
  min-width: 770px;
}
.all .product>div{
  float: left;
  position: relative;
  width: 25%;
  height: 300px;
  margin: 20px 0;
  cursor: pointer;
}
.all .product>div>img{
  width: 165px;
  height: 165px;
  display: block;
  margin: 0 auto;
}
.all .product>div>span{
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #333;
}
.all .product>div .name{
  left: 0;
  top: 170px;
}
.all .product>div .price{
  left: 0;
  bottom: 43px;
  font-weight: bold;
}
.all .product>div:hover{
  border: 1px solid #b7b7b7;
}
.all .product>div:hover img{
  margin-top: 1px;
}
.all .product>div:hover .name{
  top: 171px;
}
.all .product>div:hover .price{
  bottom: 40px;
}
.all .classical{
  padding-top: 25px;
}
.all .hot{
  border-top: 1px dashed #b7b7b7;
}
.all .more>a{
  width: 420px;
  height: 48px;
  display: block;
  margin: 0 auto;
  background: #000;
  border: 1px solid #000;
  color: white;
  font-size: 16px;
  text-align: center;
  line-height: 48px;
}
.all .more>a:after{
  display: inline-block;
  vertical-align: middle;
  content: '';
  width: 20px;
  height: 30px;
  background: url("../../assets/img/icons.png") -9px -163px;
  margin-left: 15px;
}
.all .more>a:hover{
  background: #fff;
  color: black;
}
.all .more>a:hover:after{
  background: url("../../assets/img/icons.png") -40px -163px;
}
</style>