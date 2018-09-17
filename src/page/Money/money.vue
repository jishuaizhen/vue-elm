<template>
    <div class="page">
        <top>
            <i class="iconfont icon-iconfontyoujiantou" @click="isback"> </i>
            <span>红包专区</span>
            <div></div>
        </top>
        <div class="cash">
           <span @click="rpage" :class="isShow?'active':''">红包</span>
           <span @click="seller" :class="!isShow?'active':''">我的红包</span>
        </div>
        <template v-if="isShow">
            <section style="background:#F5F5F5;">
                <div class="head">
                    <span>
                        有<em style="color:red;padding:0 5px;">6</em>个红包即将到期
                    </span>
                    <router-link :to="{name:'rpaged'}">
                            <i class="iconfont icon-iconfontquestion"></i>
                            <span>红包说明</span>
                    </router-link>
                </div>
                <ul>
                    <li class="hongbao-li" v-for="(item,index) in liList" :key="index">
                        <section class="list-item">
                            <div class="list-item-left">
                                <span>￥</span>
                                <span>{{item.amount}}</span>
                                <p>{{item.description_map.sum_condition}}</p>
                            </div>
                            <div class="list-item-right">
                                <h4>{{item.name}}</h4>
                                <p>2017-05-23到期</p>
                                <p>{{item.description_map.phone}}</p>
                            </div>
                            <div class="item-time">{{item.description_map.validity_delta}}</div>
                        </section>
                        <div class="description" v-if="item.limit_map">
                            <span>{{item.limit_map.restaurant_flavor_ids}}</span>
                        </div>
                    </li>
                </ul>
                        <router-link :to="{name:'hispage'}">
                            <div class="foot">
                        <span>点击查看我的红包</span>
                        <i class="iconfont icon-arrow-right"></i>

                            </div>
                        </router-link>
            </section>

        </template>
        <template v-else>
            <section class="mcash">
                <div class="dowload">
                    <i class="iconfont icon-wufalianjie"></i>
                    <p>未登录，无法查看</p>
                    <router-link to="login">登录</router-link>
                </div>
            </section>
        </template>
    </div>
</template>
<script>
import top from '@/components/commons/top'
import {getUser} from '@/service/index'
export default{
  async created () {
    this.liList = await getUser()
  },
  data () {
    return {
      isShow: true,
      liList: []
    }
  },
  methods: {

    isback () {
      this.$router.push('./goldmall')
    },
    rpage () {
      this.isShow = true
    },
    seller () {
      this.isShow = false
    }
  },
  components: {
    top
  }
}
</script>

<style scoped>
.page{height: 1028px;}
header{width: 100%;height: 52px; background: #3190E8;display: flex;justify-content: space-around;align-items: center}
header>i.iconfont,header>span{color: white;font-size: 20px;}
header>span{font-weight: 700}

.cash{margin-top:100px;color: #333;font-size: 30px;display: flex;width: 100%;height: 90px;justify-content: space-around;align-items: center;}
.active{color: #3190E8;border-bottom: 3px solid #3190E8}

.head{width: 100%;height: 100px;display: flex;justify-content: space-between;font-size: 30px;align-items: center}
.head>span{padding-left: 20px;color:#C0C0C0; }
.head>a{padding-right: 20px;color: #3190E8}

ul{display: flex;flex-direction: column;align-items: center;}
.hongbao-li{margin-bottom: 22px;width: 95%;border-radius: 17px;background: white url("./1.png") repeat-x;background-size: 0.6rem 0.4rem}
.hongbao-li .list-item{display:flex; padding: 40px 0; width: 100%;height: 100%;align-items: center;justify-content: space-around;}
.hongbao-li .list-item .list-item-left{width: 160px;height: 120px;border-right: 1px solid yellow;}
.hongbao-li .list-item .list-item-left span{font-size: 40px;color: #ff5340;}
.hongbao-li .list-item .list-item-left p{font-size: 30px;color: #C0C0C0}
.hongbao-li .list-item .list-item-right{text-align: left}
.hongbao-li .list-item .list-item-right p{font-size: 30px;color: #C0C0C0;}
.hongbao-li .list-item .item-time{color: #ff5340;font-size: 30px;}

.description {
    background: #f9f9f9;
    font-size: 20px;
    color: #999;
    padding: 20px 0;
}

.mcash{width: 100%;height: 100%;background: #F5F5F5;}
.explain{width: 100%;height: 52px;line-height: 52px;color: #3190E8;margin-left:130px;}
.dowload{display: flex;flex-direction: column;justify-content: center;align-items: center;;width: 100%;height: 500px;}
.dowload i{font-size: 50px;color: #3190E8;}
.dowload p{font-size: 30px;color: #666;}
.dowload a{width: 150px;height: 80px;line-height: 80px;font-size: 30px;border-radius: 5px;color: #fff;background: #3190E8;}

div.foot{height: 50px;width: 100%;color: #666;display: flex;align-items: center;justify-content: center;margin-bottom: 120px;}
div.foot .iconfont{font-size: 24px;}
div.foot span{font-size: 30px;color:#3190E8;}

</style>
