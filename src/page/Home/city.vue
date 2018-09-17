<template>
    <div class="city">
        <top>
            <li @click="goback"><i class="iconfont icon-iconfontyoujiantou"></i>返回</li>
            <li>{{city.name}}</li>
            <li @click="goback"><i class="iconfont icon-suoyoukeshi"></i>切换城市</li>
        </top>
        <form class="address" v-on:submit.prevent>
            <input type="search" name="city" placeholder="输入学校、商务楼、地址" required v-model='inputVaule' class="inp">
            <input type="submit" class="sub" @click='postpois'>
        </form>
        <ul class="getpois_ul" v-for="(place,index) in placelist" :key="index">
            <li>
                <router-link :to="{name:'home',query:{geohash:place.geohash}}">
                    <h4 class="pois_name ellipsis">{{place.name}}</h4>
                    <p class="pois_address ellipsis">{{place.address}}</p>
                </router-link>
            </li>
        </ul>
        <div class="history" v-if="placeHistory.length">
            <header v-if="historytitle" class="search_history">搜索历史</header>
            <ul v-for="(place,index) in placeHistory" :key="index">
                <li @click="setInputValue" class="historyvalue" v-focus>
                   {{place}}
                </li>
            </ul>
            <footer class="clear_all_history" @click="clearAll">清空所有</footer>
        </div>

        <div class="search_none_place" v-if="placeNone">很抱歉！无搜索结果</div>
    </div>
</template>
<script>
import top from '@/components/commons/top'
import { getOneCityData, getPlaceListData } from '@/service/index.js'
export default {
  data () {
    return {
      city: {},
      inputVaule: '', // 搜索地址
      cityname: '', // 当前城市名字
      placelist: [], // 搜索城市列表
      placeHistoryKey: 'searchList', // 历史搜索记录key值
      placeHistory: [], // 历史搜索记录
      historytitle: true, // 默认显示搜索历史头部，点击搜索后隐藏
      placeNone: false // 搜索无结果，显示提示信息
    }
  },
  //   mounted () {
  //     console.log(this.$route.params.id)
  //   },
  created () {
    this.getOneCity()
  },
  mounted () {
    //   获取历史搜索
    this.initData()
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    //  存储localStorage历史搜索记录
    setStore (name, content) {
      if (!name) return
      if (typeof content !== 'string') {
        content = JSON.stringify(content)
      }

      var arr = JSON.parse(window.localStorage.getItem(name)) ? JSON.parse(window.localStorage.getItem(name)) : []
      arr.push(content)

      window.localStorage.setItem(name, JSON.stringify(arr))
    },
    // 获取localStorage历史搜索记录
    getStore (name) {
      if (!name) return
      return window.localStorage.getItem(name)
    },
    // 删除localStorage历史搜索记录
    removeStore (name) {
      if (!name) return
      window.localStorage.removeItem(name)
    },
    // 获取城市的名字
    async getOneCity () {
      this.city = await getOneCityData(this.$route.params.id)
      //   console.log(this.city)
    },
    // 发送搜索信息inputVaule
    async postpois () {
      // 输入值不为空时才发送信息
      if (this.inputVaule) {
        this.placelist = await getPlaceListData(this.city.id, this.inputVaule)
        console.log(this.placelist)
        if (this.placelist.length === 0) { this.placeNone = true }
        this.setStore('searchList', this.inputVaule)
      }
    },
    initData () {
      if (this.getStore(this.placeHistoryKey)) {
        this.placeHistory = JSON.parse(window.localStorage.getItem(this.placeHistoryKey))
      } else {
        this.placeHistory = []
      }
    },
    clearAll () {
      this.removeStore('searchList')
      this.initData()
    },
    // 点击历史记录中的某一项之后给input赋值
    setInputValue (event) {
      this.inputVaule = event.target.innerHTML.replace(/\s/ig, '')
      console.log(this.inputVaule)
    }
  },
  components: {
    top
  },
  directives: {
    focus (el, bingdings) {

    }
  }
}
</script>
<style scoped>
    .city {
        width: 100%;
        height: 100%;
        background: #F5F5F5;
        z-index: 10;
        position: relative;
    }

    .city .top {
        display: flex;
        justify-content: space-between;
        color: white;
    }

    .address {
        margin-top: 100px;
        height: 200px;
        width: 100%;
        background: white;
    }

    .address .inp {
        border: 1px solid #F1F1F1;
        height: 70px;
        width: 90%;
        margin: 10px auto;
        background: #FAFFBD;
        outline: none;
    }

    .address .sub {
        border: 1px solid #F5F5F5;
        height: 70px;
        width: 90%;
        margin: 10px auto;
        background: #3190E8;
        color: white;
    }

    .search_history {
        height: 40px;
        line-height: 40px;
        margin: 20px auto;
        border: 1px solid #F5F5F5;
    }

    .getpois_ul {
        width: 100%;
        height: 160px;
        background: white;
        font-size: 25px;
        color: gray;
        border: 1px solid #F5F5F5;
    }

    .getpois_ul li {
        width: 95%;
        padding: 30px;
        text-align: left;
    }
    .getpois_ul li a{
        color:gray;
        font-size: 30px;
    }
    .getpois_ul li h4 {
        margin-bottom: 20px;
    }
    .history{
        width:100%;
        height: auto;
        background: #F5F5F5;
    }
    .historyvalue{
        height: 80px;
        line-height: 80px;
        font-size: 30px;
        border:1px solid #F5F5F5;
        /* background: #FAFFBD; */
    }
    .clear_all_history {
        width: 100%;
        height: 100px;
        font-size: 30px;
        line-height: 100px;
        background: white;
        color:#3190E8;
    }
</style>
