<template>
  <Carousel
    v-model="value2"
    :loop="setting.loop"
    :autoplay="setting.autoplay"
    :autoplay-speed="setting.autoplaySpeed"
    :dots="setting.dots"
    :trigger="setting.trigger"
    :arrow="setting.arrow"
    :height="setting.height">
    <CarouselItem>
      <div class="demo-carousel">
        <img src="../../assets/img/broadcast1.jpg" alt="">
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img src="../../assets/img/broadcast2.jpg" alt="">
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img src="../../assets/img/broadcast3.jpg" alt="">
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img src="../../assets/img/broadcast4.jpg" alt="">
      </div>
    </CarouselItem>
  </Carousel>
</template>

<script>
  export default {
    name:'BroadCast',
    data () {
      return {
        value2: 0,
        setting:{
          loop:true,
          autoplay: true,
          autoplaySpeed: 5000,
          dots: 'outside',
          trigger: 'hover',
          arrow: 'always',
          height: 'auto'
        }
      }
    }
  }
</script>

<style scoped>
div>img{
  width: 100%;
  height: 100%; 
}
</style>