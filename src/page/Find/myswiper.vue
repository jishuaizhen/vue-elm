<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img :src="slide" alt="" class="img">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        initialSlide: 0,
        loop: true,
        speed: 400,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperSlides: ['http://img.mp.itc.cn/upload/20170711/48abca8846ef437e9d56a7152596047d_th.jpg',
        'http://img4.imgtn.bdimg.com/it/u=498320823,3723090409&fm=26&gp=0.jpg']
    }
  },
  mounted () {

  }
}
</script>
<style scoped>
 .img{width: 100%;height: 300px;}
</style>
