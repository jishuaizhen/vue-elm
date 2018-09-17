<template>
    <div class="history" style="background: #F1F1F1;">
       <top>
           <i class="iconfont icon-iconfontyoujiantou" @click="isback"></i>
           <span>历史红包</span>
           <div></div>
       </top>
       <section>
           <div class="content">
               <ul>
                   <li v-for="(item,index) in liList" :key="index">
                       <section class="list-item">
                           <div class="list-item-left">
                               <span>￥</span>
                               <span>{{item.amount}}</span>
                               <p>{{item.description_map.sum_condition}}</p>
                           </div>
                           <div class="list-item-right">
                               <h4>{{item.name}}</h4>
                               <p>{{item.description_map.validity_periods}}</p>
                               <p>{{item.description_map.phone}}</p>
                           </div>
                           <i class="iconfont icon-yiguoqi"></i>
                       </section>
                           <div class="description" v-if="item.limit_map">
                              <span> {{item.limit_map.restaurant_flavor_ids}}</span>
                           </div>
                   </li>
               </ul>
           </div>
       </section>
    </div>
</template>
<script>
import top from '@/components/commons/top'
import {getHisPage} from '@/service/index'
export default{
  async created () {
    this.liList = await getHisPage()
  },
  data () {
    return {
      liList: []
    }
  },
  methods: {
    isback () {
      this.$router.push('./money')
    }
  },
  components: {
    top
  }
}
</script>
<style scoped>

ul{display: flex;flex-direction: column;align-items: center;margin-top: 100px;}
ul li{margin-bottom: 20px;width: 95%;height:200px;border-radius: 7px;background: white url("./2.png") repeat-x;background-size: 0.6rem 0.4rem}
ul li .list-item{position: relative;display:flex; padding: 20px 0; width: 100%;height: 100%;align-items: center;justify-content: space-around;}
ul li .list-item .list-item-left{width: 180px;height: 120px;border-right: 1px dotted #c0c0c0;text-align: left;}
ul li .list-item .list-item-left span{font-size: 30px;color: #C0C0C0;}
ul li .list-item .list-item-left p{font-size: 20px;color: #C0C0C0;padding-left: 5px;width: 100%}
ul li .list-item .list-item-right{text-align: left;height: 120px;}
ul li .list-item .list-item-right h4{color: #666;font-weight: normal;;}
ul li .list-item .list-item-right p{font-size: 30px;color: #C0C0C0;}
ul li .list-item .iconfont{font-size: 60px;color: #C0C0C0}
ul li .description {background: #f9f9f9;font-size: 12px;color: #999;padding: 10px ;text-align: left;}
</style>
