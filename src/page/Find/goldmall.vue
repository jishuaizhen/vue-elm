<template>
    <div class="gmall">
        <!-- 头部 -->
        <top>
            <i class="iconfont icon-iconfontyoujiantou" @click="icon"></i>
            <span>金币商城</span>
            <div></div>
        </top>
        <!-- 农场 -->
        <div class="farm">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535535715918&di=7b61f7683c54494e0ab9ae82776837f3&imgtype=0&src=http%3A%2F%2Fs10.sinaimg.cn%2Fbmiddle%2F4c79e97cx77d61bc10d09%26690" alt="">
        </div>
        <!-- 各类商品 -->
        <section>
            <div class="ware">
                <a href="#">
                    <i class="iconfont icon-huiyuanzhuanqu1" style="background:#8FC31F;"></i>
                    <span>会员专区</span>
                </a>
                <a href="#">
                    <i class="iconfont  icon-liwu" style="background:#FF6D41;"></i>
                    <span>红包专区</span>
                </a>
                <a href="#">
                    <i class="iconfont icon-wodeliquan-" style="background:#AD89FF;"></i>
                    <span>优惠礼券</span>
                </a>
                <a href="#">
                    <i class="iconfont icon-jd" style="background:#34CCFF;"></i>
                    <span>数码家电</span>
                </a>
                <a href="#">
                    <i class="iconfont icon-jiaju" style="background:#F76550;"></i>
                    <span>日常家居</span>
                </a>
                <a href="#">
                    <i class="iconfont icon-yinliao" style="background:#FFB02A;"></i>
                    <span>食品饮料</span>
                </a>
                <a href="#">
                    <i class="iconfont icon-2" style="background:#FF455F;"></i>
                    <span>个性美妆</span>
                </a>
                <a href="#">
                    <i class="iconfont icon-suoyoukeshi" style="background:#65D3FF;"></i>
                    <span>所有商品</span>
                </a>
            </div>
        </section>
        <!-- 轮播 -->
        <section>
             <div class="swiper">
                <mt-swipe :auto="3000">
                <mt-swipe-item v-for="(item,index) in items" :key="index">
                    <img :src="item.url" class="img"/>
                </mt-swipe-item>
                </mt-swipe>
            </div>
        </section>

    </div>
</template>

<script>
import {Swipe, SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'
import top from '@/components/commons/top'
export default {

  data () {
    return {
      items: [
        {
          url: 'http://yun.duiba.com.cn/images/201808/fh9iw1evwk.jpg?x-oss-process=image/format,webp'},
        {
          url: 'http://yun.duiba.com.cn/images/201808/8ccqdgnusz.jpg?x-oss-process=image/format,webp'},
        {
          url: 'http://yun.duiba.com.cn/images/201808/671hdj01zp.jpg?x-oss-process=image/format,webp'},
        {
          url: 'http://yun.duiba.com.cn/images/201808/fdalz438zd.jpg?x-oss-process=image/format,webp'
        }
      ]
    }
  },
  components: {
    'mt-swipe': Swipe,
    'mt-swipe-item': SwipeItem,
    top
  },
  methods: {
    icon: function () {
      this.$router.push('/find')
    }
  }
}
</script>
<style scoped>
/* @import url("../style/conmon.css"); */
.top{color: beige;font-size: 20px;text-align: left;}
 .farm img{width: 100%;}
 /* 各类商品 */
 .ware{display: flex;justify-content: space-around;flex-wrap: wrap;margin:30px 10px;}
.ware a{display: flex;flex-direction: column;width: 25%;justify-content: center;align-items: center;margin-bottom: 30px;}
.ware a .iconfont{width: 100px;height: 100px;line-height: 100px;text-align: center;border-radius: 50%;font-size: 60px;color: beige;}
.ware a span{color: #666;padding: 10px;font-size: 25px;}

.swiper{height: 273px; background: white;}
.swiper .img{width: 100%;height: 300px;}
.mint-swipe {height: 218px;}

</style>
