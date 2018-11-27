<template>
  <div class="box">
    <Warn></Warn>
    <BroadCast></BroadCast>  <!-- 用的是iview的组件,跟原页面不一样 -->
    <Hot></Hot>  <!--有一个动画没做出来-->
    <Follow></Follow>
  </div>
</template>

<script>
import Warn from './home/warn'
import BroadCast from './home/BroadCast'
import Hot from './home/hot'
import Follow from './home/follow'

export default {
  name:'Home',
  components:{
    Warn,
    BroadCast,
    Hot,
    Follow
  }
}
</script>

<style scoped>
  
</style>