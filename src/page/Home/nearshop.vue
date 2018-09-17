<template>
    <div class="shops">
        <ul class="shoplist">
            <span class="title"><i class="iconfont icon-shangdian"></i>附近商家</span>
            <li class="shop" v-for="(shop,index) in nearshop" :key="index">
                <router-link :to="{name:'nearshopinfo',params:{shop:shop}}">
                <div class="shopinfowarp">
                <img :src="shop.image_path | myfilter" alt="">
                <div class="shopinfo">
                    <p class="shopname">{{shop.name}}</p>
                    <ul class="shopdetail">
                        <li class="left">
                            <p><span class="score">评分：{{shop.rating}}</span><span>月售{{shop.rating_count}}单</span></p>
                            <p>￥20起送/{{shop.piecewise_agent_fee.tips}}</p>
                        </li>
                        <li class="right">
                            <p><span class="feng">蜂鸟专送</span><span class="time">准时达</span></p>
                            <p>{{shop.distance}}/{{shop.order_lead_time}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import {getNearshopData} from '@/service/index.js'
export default {
  data () {
    return {
      nearshop: []
    }
  },
  created () {
    this.getNearshop()
  },
  methods: {
    async getNearshop () {
      this.nearshop = await getNearshopData()
    }
  },
  filters: {
    myfilter (val) {
      return 'https://elm.cangdu.org/img/' + val
    }
  }
}
</script>
<style scoped>
    .shops {
        width: 100%;
        margin-top: 20px;
    }

    .shoplist {
        width: 95%;
        margin: 0px auto;
        display: flex;
        flex-direction: column;
    }

    .shoplist .title {
        color: gray;
        text-align: left;
        font-size: 20px;
    }

    .shoplist .title i {
        padding: 10px;
    }

    .shoplist .shopinfowarp {
        display: flex;
        flex-direction: row;
        height: 150px;
        padding: 50px 0px;
        border-bottom: 1px solid #F1F1F1;
    }

    .shoplist .shopinfowarp img {
        width: 150px;
        height: 150px;
        float: left;
        margin-right: 20px;
    }

    .shoplist .shopinfowarp .shopname {
        font-size: 30px;
        font-weight: bold;
        color: black;
        text-align: left;
    }
    .shopinfo{
        width:100%;
        display: flex;
        flex-direction: column;
        color: gray;
    }
    .shopdetail .left {
        float: left;
        line-height: 60px;
    }
    .shopdetail .left .score{
        color:#FF9A0D;
    }
    .shopdetail .right {
        float: right;
        line-height: 60px;
    }
    .shopdetail .right .feng{
        background:#3190E8;
        color: white;
        border-radius:5px;
        padding: 5px;
    }
    .shopdetail .right .time{
        border:1px solid #3190E8;
        color: #3190E8;
        border-radius:5px;
        padding: 5px;
    }
</style>
