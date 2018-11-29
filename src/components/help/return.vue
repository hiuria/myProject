<template>
  <div class="box">
    <div class="header"></div>
    <div class="content">
      <Row>
        <Col span="8">
          <div class="catalog">
            <ul class="above">
              <router-link to="/home/account" tag="li">
                <i class="img" style="background-position: 0 -4px;"></i>
                账户
                <Icon type="ios-arrow-forward" class="icon" />
              </router-link>
              <router-link to="/home/order" tag="li">
                <i class="img" style="background-position: 0 -33px;"></i>
                订单
                <Icon type="ios-arrow-forward" class="icon" />
              </router-link>
              <router-link to="/home/size" tag="li">
                <i class="img" style="background-position: 0 -60px;"></i>
                尺码
                <Icon type="ios-arrow-forward" class="icon" />
              </router-link>
              <router-link to="/home/payment" tag="li">
                <i class="img" style="background-position: 0 -88px;"></i>
                支付
                <Icon type="ios-arrow-forward" class="icon" />
              </router-link>
              <router-link to="/home/return" tag="li">
                <i class="img" style="background-position: 0 -120px;"></i>
                退货和退款
                <Icon type="ios-arrow-forward" class="icon" />
              </router-link>
              <router-link to="/home/exchange" tag="li">
                <i class="img" style="background-position: 0 -148px;"></i>
                换货
                <Icon type="ios-arrow-forward" class="icon" />
              </router-link>
              <router-link to="/home/delivery" tag="li">
                <i class="img" style="background-position: 0 -182px;"></i>
                配送
                <Icon type="ios-arrow-forward" class="icon" />
              </router-link>
              <router-link to="/home/contact" tag="li">
                <i class="img" style="background-position: 0 -214px;"></i>
                联系我们
                <Icon type="ios-arrow-forward" class="icon" />
              </router-link>
            </ul>
            <div class="bottom">
              <span>需要帮助吗</span>
              <ul>
                <li>尺码表</li>
                <li>如何退换货?</li>
                <li>我何时能收到货品</li>
              </ul>
              <div>
                <Icon type="ios-arrow-forward" class="icon1" />
                <span class="all">看所全部</span>
              </div>
            </div>
          </div>
        </Col>
        <Col span="16">return</Col>
      </Row>
    </div>
  </div>
</template>

<script>
  export default{
    name:'return'
  }
</script>

<style scoped>
.header{
  width: 100%;
  height: 130px;
  background: white;
}
.content{
  width: 1000px;
  margin: 0 auto;
  margin-top: 33px;
  min-width: 1020px;
}
.catalog{
  width: 242px;
  border: 1px solid #b7b7b7;
  color: #333;
  margin-left: 20px;
}
.above,.above li{
  list-style: none;
}
.catalog .above{
  margin: 0 20px;
}
.catalog .above li{
  height: 60px;
  border-bottom: 1px solid #b7b7b7;
  font-size: 14px;
  line-height: 60px;
  cursor: pointer;
}
.catalog .above li:hover{
  color: #999;
}
.catalog .above li .img{
  display: inline-block;
  width: 30px;
  height: 30px;
  vertical-align: middle;
  margin-right: 5px;
  background: url('../../assets/img/help-sprites.png');
}
.catalog .above li .icon{
  float: right;
  margin-top: 15px;
  font-size: 30px;
}
.catalog .above li:hover .icon{
  color: #333;
}
.catalog .bottom{
  width: 200px;
  margin: 20px auto;
  font-size: 14px;
}
.catalog .bottom>span{
  font-size: 18px;
}
.catalog .bottom>ul{
  margin: 10px 0 10px 20px;
}
.catalog .bottom>ul li{
  cursor: pointer;
  text-decoration: underline;
}
.catalog .bottom>ul li:hover{
  color: #999;
}
.catalog .bottom .icon1{
  font-size: 30px;
}
.catalog .bottom .all{
  cursor: pointer;
}
.catalog .bottom .all:hover{
  color: #999;
}
</style>