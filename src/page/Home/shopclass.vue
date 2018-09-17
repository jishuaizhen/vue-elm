<template>
    <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in shopclass" :key="index">
            <ul class="shop">
                <li v-for="(inerItem, key) in item.list" :key="key">
                    <router-link :to="{name:'shopclassinfo',params:{title:inerItem.title}}">
                    <img :src="inerItem.image_url | myfilter" alt="">
                    </router-link>
                    <a href="javascript:void(0)">{{inerItem.title}}</a>
                </li>
            </ul>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import {getShopclassData} from '@/service/index.js'
// https://fuss10.elemecdn.com
export default {
  created () {
    this.getShopclass()
  },
  data () {
    return {
      shopclass: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  methods: {
    async getShopclass () {
      var myshopclass = await getShopclassData()
      // console.log(this.shopclass)
      var obj = [
        {
          page: 1,
          list: myshopclass.slice(0, 8)
        },
        {
          page: 2,
          list: myshopclass.slice(8, myshopclass.length)
        }
      ]
      this.shopclass = obj
    }
  },
  filters: {
    myfilter (val) {
      return 'https://fuss10.elemecdn.com' + val
    }
  }
}
</script>
<style scoped>
    .shop {
        width: 95%;
        height: 350px;
        margin: auto;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
        align-content: center;
        margin-top:90px;
    }

    .shop li {
        display: flex;
        flex-direction: column;
        width: 25%;
        justify-content: center;
        align-items: center;
        padding: 10px 0px;
    }
    .shop li a{
        color: gray;
        font-size: 20px;
    }
    .shop li img {
        height: 100px;
        width: 100px;
    }
</style>
