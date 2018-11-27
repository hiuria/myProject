<template>
  <div class="box"></div>
</template>

<script>
  export default{
    name:'chat'
  }
</script>

<style scoped>
  .box{
    width: 88px;
    height: 88px;
    background: url('../assets/img/talk.gif');
    position: fixed;
    top: 200px;
    right: 0;
    cursor: pointer;
  }
</style>