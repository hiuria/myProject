<template>
  <div id="app">
    <topNav></topNav>  <!-- 页面卷去一定距离后标题栏高度改变没做出来 -->
    <Type></Type>   <!-- 过渡效果有bug -->
    <router-view/>
    <BottomTab></BottomTab>
    <Chat></Chat>
  </div>
</template>

<script>
import topNav from './components/topNav'
import Type from './components/Type'
import BottomTab from './components/BottomTab.vue'
import Chat from './components/chat.vue'

export default {
  name: 'App',
  components: {
    topNav,
    Type,
    BottomTab,
    Chat
  }
}
</script>

<style>
</style>
