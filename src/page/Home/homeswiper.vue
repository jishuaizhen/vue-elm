<!-- 未使用组件 -->

<template>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img v-lazy="slide" alt="" class="img">
      </swiper-slide>

    </swiper>
  </template>

<script>
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperSlides: [
        'http://img4.imgtn.bdimg.com/it/u=3014349566,2800742520&fm=26&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=144303946,1319220363&fm=26&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=2083755631,43138174&fm=26&gp=0.jpg']
    }
  },
  mounted () {
    setInterval(() => {

    }, 3000)
  }
}
</script>
<style scoped>
.img{
  width:95%;
  height: 150px;
  margin:20px auto 0px;
}
</style>
