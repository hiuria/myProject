<template>
  <div class="box">
    <div class="full">
      <div class="title">
        <div class="logo">
          <router-link to="/home" tag="div">
            <img src="../assets/img/logo-icon1.png" alt="">
          </router-link>
        </div>
        <router-link to="/help" tag="div" class="right">
          <div class="help icon"></div>
        </router-link>
        <div class="right">
          <div class="search icon" @click="openSearchBar()"></div>
        </div>
        <div class="right">
          <div class="chat icon"></div>
        </div>
        <div class="right">
          <router-link to="/shoppingcart" tag="div" class="word fl shoppingcart">购物车</router-link>
          <div class="num icon fl">0</div>
        </div>
        <div class="right">
          <div class="word fl">
            <span @click="openLoginBar()">登录</span>
            <span class="separation">/</span>
            <span @click="openSignupBar()">注册</span>
          </div>
          <div class="login icon fl" @click="openLoginBar()"></div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="search_bar" v-show="num == 1">
        <div class="center">
          <input type="text" placeholder="想找什么随便搜">
        </div>
        <div class="icon">
          <div class="search_btn"></div>
          <div class="close_btn" @click="closeSearchBar()"></div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="login_bar" v-show="num == 2">
        <div class="center">
          <Row>
            <Col span="5" class="gotosignup">
              <h1>还未注册?</h1>
              <div class="more">
                <a href="#" @click="openSignupBar()">注册账户</a>
              </div>
            </Col>
            <Col span="10" class="otherway">
              <h1>您可以直接登录</h1>
              <div class="link">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </Col>
            <Col span="9" class="login">
              <h1>已经成为会员?</h1>
              <input type="text" placeholder="邮箱/手机">
              <input type="text" placeholder="账户密码">
              <input type="button" value="点击按钮进行验证" class="btn">
              <div class="warn">
                一旦登录,即表明您同意匡威的<span>法律声明</span>和<span>使用规则</span>
              </div>
              <div class="more">
                <a href="#">登录</a>
              </div>
              <Checkbox v-model="single" size="large" class="checkbox">记住登录名</Checkbox>
              <span class="forget">忘记密码?</span>
            </Col>
          </Row>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="signup_bar" v-show="num == 3">
        <div class="center">
          <Row>
            <Col span="8">
              <div class="content">
                <span>手机号码</span>
                <span style="color: red">*</span><br>
                <input type="text" placeholder="135×××3333">
              </div>
              <div class="content">
                <span>输入密码</span>
                <span style="color: red">*</span><br>
                <input type="text" placeholder="密码至少为六位字符">
              </div>
              <input type="button" value="点击按钮进行验证" class="btn">
            </Col>
            <Col span="8">
              <div class="content">
                <span>邮箱</span>
                <span style="color: red">*</span><br>
                <input type="text" placeholder="example@converse.com">
              </div>
              <div class="content">
                <span>确认密码</span>
                <span style="color: red">*</span><br>
                <input type="text" placeholder="请再次输入密码">
              </div>
              <div class="content">
                <span>短信验证码</span>
                <span style="color: red">*</span><br>
                <div class="code">
                  <input type="text">
                  <input type="button" value="发送短信验证码" class="btn1">
                </div>
              </div>
            </Col>
            <Col span="8">
              <div class="content">
                <span>性别</span>
                <span style="color: red">*</span><br>
                <div class="choose">
                  <div class="male choice" @click="addmale()" :class="{chosen:current == 1}"><span>男的</span></div>
                  <div class="female choice" @click="addfemale()" :class="{chosen:current == 2}"><span>女的</span></div>
                </div>
              </div>
              <div class="content">
                <span>生日(年-月-日)</span>
                <span style="color: red">*</span><br>
                <DatePicker type="date" placement="bottom-end" placeholder="选择日期" class="date" size="large"></DatePicker>
              </div>
              <div class="warn">
                一旦创建账户,即表明您同意匡威的<span>法律声明</span>和<span>使用规则</span>
              </div>
              <div class="more">
                <a href="#">注册账户</a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </transition>
    <div class="bg" v-show="num != 0" @click="closeSearchBar()"></div>
  </div>
</template>

<script>
  export default {
    name:'topNav',
    data(){
      return{
        num : 0,
        single : false,
        current: 1
      }
    },
    methods:{
      openSearchBar:function(){
        this.num = 1
        /*if(this.num = 0){
          this.num = 1
          console.log(this.num) 
        }else{
          this.num = 0
        }*/
      },
      openLoginBar:function(){
        this.num = 2
      },
      openSignupBar:function(){
        this.num = 3
      },
      closeSearchBar:function(){
        this.num = 0
      },
      addmale:function(){
        this.current = 1
      },
      addfemale:function(){
        this.current = 2
      }
    }
  }
</script>

<style scoped>
@import '../css/topNav.css';
</style>