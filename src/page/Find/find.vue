<template>
    <div class='find'>
            <top>发现</top>
        <section>
            <router-link :to="{name:'goldmall'}">
            <ul>
                <li>
                    <a href="#">
                        <div>
                            <p class="title" style="color: rgb(255, 153, 0);">金币商城</p>
                            <p class="tips">0元好物在这里</p>
                        </div>
                        <img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" alt="">
                    </a>
                </li>
                <li>
                     <a href="#">
                        <div>
                            <p class="title" style="color: rgb(27, 169, 225);">推荐有奖</p>
                            <p class="tips">10元现金拿不停</p>
                        </div>
                        <img src="https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/" alt="">
                    </a>
                </li>
                <li>
                     <a href="#">
                        <div>
                            <p class="title" style="color: rgb(237, 102, 96);">周边优惠</p>
                            <p class="tips">领取口碑好券</p>
                        </div>
                        <img src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/" alt="">
                    </a>
                </li>
                <li>
                     <a href="#">
                        <div>
                            <p class="title" style="color: rgb(237, 102, 96);">免费流量</p>
                            <p class="tips">每月最高500M</p>
                        </div>
                        <img src="http://img2.imgtn.bdimg.com/it/u=465593708,4158730492&fm=26&gp=0.jpg" alt="">
                    </a>
                </li>
            </ul>
            </router-link>
        </section>
    <!-- 轮播 -->
    <myswiper></myswiper>
    <!-- 限时好礼 -->
    <section>
        <div class="activity-header">
            <span class="line left"></span>
            <i class="iconfont icon-daojishi"></i>
            <h1>限时好礼</h1>
            <span class="line right"></span>
        </div>
        <p class="activity-sub-title">金币换豪礼</p>
        <div class="activity-body">
            <a href="#" class="discover-food">
                <img src="https://fuss10.elemecdn.com/c/66/89cc6ef54261bbd98b94deeff2546jpeg.jpeg?imageMogr/format/webp/" alt="">
                <div>
                    <p class="food-name">3元饿了么红包 </p>
                    <div class="food-price">
                        <span class="price">90金币</span>
                        <span class="del">￥3</span>
                    </div>
                </div>
                <span class="discount">限时优惠</span>
            </a>
            <a href="#" class="discover-food">
                            <img src="https://fuss10.elemecdn.com/5/78/5c1ca7ceca079926933ca418c9eb7jpeg.jpeg?imageMogr/format/webp/" alt="">
                            <div>
                                <p class="food-name">扫地机器人 </p>
                                <div class="food-price">
                                    <span class="price">9金币</span>
                                    <span class="del">￥99</span>
                                </div>
                            </div>
                            <span class="discount">特价换购</span>
            </a>
            <a href="#" class="discover-food">
                <img src="https://fuss10.elemecdn.com/7/ad/f0132ee0fee6c57253ada4573364ejpeg.jpeg?imageMogr/format/webp/" alt="">
                <div>
                    <p class="food-name">机械手感键鼠套装 </p>
                    <div class="food-price">
                        <span class="price">9金币</span>
                        <span class="del">￥129</span>
                    </div>
                </div>
                <span class="discount">特价换购</span>
            </a>
        </div>
    </section>
    <router-link :to="{name:'goldmall'}">
        <div class="more">
        <p>点击查看金币商城</p>
        <i class="iconfont icon-arrow-right"></i>
    </div>
    </router-link>

    </div>
</template>
<script>
import myswiper from './myswiper.vue'
import top from '@/components/commons/top'
export default{
  async created () {
  },
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    myswiper,
    top
  }
}
</script>
<style scoped>
    .find{height: 100%;width:100%;margin-top:90px;}
    ul{display: flex;flex-direction: row;width: 100%;height: 100%;flex-wrap: wrap;}
    ul li{width: 49%;height: 49%}
    ul li a{display: flex;flex-direction: row;justify-content: space-between;align-items: center;padding:30px;}
    ul li a div{height: 150px;display: flex;flex-direction: column;justify-content: center;align-items: flex-start;padding-left: 10px;}
    ul li a img{width: 80px;height: 80px;border-radius: 50%}
    ul li{border-bottom: 1px solid #ededed;}
    ul li:nth-child(2n-1){border-right: 1px solid #ededed;}
    ul li a div p{margin-bottom: 5px;}
    ul li a div p.title{font-size: 30px;overflow: hidden; white-space: nowrap;text-overflow: ellipsis;}
    ul li a div p.tips{font-size: 20px;color: #999;overflow: hidden; white-space: nowrap;text-overflow: ellipsis;}

    .activity-header{display: flex;flex-direction: row;margin-top: 20px;width: 100%;height: 30px;justify-content: center;text-align: center;color: #333;font-size: 18px}
    .line{position: relative;width: 15px;height: 2px;background: #333;margin-top: 10px;}
    .line:after{content: '';position: absolute;left: 15px;top: -1px;width: 5px;height: 5px;background: #333;}
    .left{margin-right: 10px;}
    .right{margin-left: 10px;}
    .right:after{content: '';position: absolute;left: 0px;top: -1px;width: 5px;height: 5px;background: #333;}
    .iconfont{width: 14px;height: 14px;color: #ff5339;margin-right: 10px;font-size: 24px;}
    .activity-sub-title{width: 100%;height: 42px;font-size: 20px;color: #999;margin:20px auto;}

    .swiper{height: 200px;width: 100%;background: red;}
    .activity-body{width: 100%;height: 100%;display: flex;flex-direction: row;}
    .discover-food{position: relative;width: 33%;}
    .discover-food img{width:120px;height: 138px;}
    .discover-food .discount{position: absolute;top:0;left:30px;background: #413d3c;color: #fff;font-size: 20px;padding:5px;box-sizing: border-box;}
    .discover-food>div{display: flex;flex-direction: column;align-items: flex-start;padding-left: 10px;}
    .food-name{color: #333;font-size: 25px;}
    .food-price{padding-top: 10px;}
    .food-price .price{color: #ff5339;}
    .food-price  .del{color: #aaa;text-decoration:line-through}

    .more{width: 100%;height: 60px;display: flex;justify-content: center;margin-top:30px;color: #aaa;font-size:30px;color:#3190E8;}
    .more .iconfont{color: #aaa}
</style>
