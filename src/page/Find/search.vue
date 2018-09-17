<template>
    <div class="search">
        <top>
            <i class="iconfont icon-iconfontyoujiantou" @click="back"></i>
            <span>搜索</span>
            <div></div>
        </top>
        <div class="contentwrap">
        <form action="">
            <input type="search" name="search"  v-model="searchValue" placeholder="请输入商家和美食名称" class="search-input">
            <input type="submit" name="" id="" class="search-submit"   @click.prevent="checkInput" value="搜索">
        </form>
    <template v-if="showrestaurant">
      <ul class="searchrest" v-for="(shop,index) in searchrest" :key='index'>
        <li>
              <div class="shopinfowarp">
                <img src="https://elm.cangdu.org/img/164bca5796011.jpeg" alt="">
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
        </li>
      </ul>
    </template>
    <template v-else>
        <template v-if="showHistory">
            <section class="search_history" ref="search" >
                <h4 class="title">搜索历史</h4>
                <ul>
                    <li class="history_list"  v-for="(item, index) in searchHistory" :key="index">
                     <span>{{item}}</span>
                     <i class="iconfont icon-cuowu" @click="deleteHitory(index)"></i>
                    </li>
                </ul>
                <footer class="search-none" @click="clearAllHistory">清空搜索历史</footer>
            </section>
        </template>
        <template v-else>
            <div class="search-sorry" ref="display">很抱歉！无搜索结果</div>
        </template>
    </template>
    </div>
    </div>
</template>
<script>
import top from '@/components/commons/top'
import {getSearchData} from '@/service/index'
export default{
  data () {
    return {
      searchValue: '', // 搜索内容
      searchHistory: [], // 搜索历史记录
      searchrest: [],
      showHistory: true,
      showrestaurant: false
    }
  },
  created () {
    this.searchHistory = JSON.parse(window.localStorage.getItem('searchList'))
  },
  methods: {
    back: function () {
      this.$router.push('/home')
    },
    async checkInput () {
      this.searchrest = await getSearchData(this.searchValue)
      console.log(this.searchrest)
      if (this.searchrest.length === 0) {
        this.showHistory = false
      }
      this.showrestaurant = true
      this.searchHistory.push(this.searchValue)
      window.localStorage.setItem('searchList', JSON.stringify(this.searchHistory))
    },
    deleteHitory (index) {
      this.searchHistory.splice(index, 1)
    },
    clearAllHistory () {
      this.searchHistory = []
    }

  },
  components: {
    top
  },
  watch: {
    searchValue (newValue, oldValue) {
      if (!newValue) {
        this.showHistory = true
      }
    }
  }
}
</script>
<style scoped>
    header{width: 100%;height: 80px;background: #3190E8;display: flex;justify-content: space-between;align-items: center}
    header .iconfont{color: white;font-size: 18px;}
    header span{font-size: 30px;font-weight: blod;color: white;}
    form{margin-top: 10px;width: 100%}
    .search-input{border:1px solid #e4e4e4;width:70%;font-size: 28px;font-weight: bold;height: 80px;padding-left: 8px;border-radius: 5px;background: #f2f2f2}
    .search-submit{width:20%;height: 80px;background: #3190E8;font-size: 28px;color: white;border:none;border-radius:10px;}
    .content{width: 100%;height: 1000px;;background: #F5F5F5;margin-top: 20px}

    .search_history{margin: 20px;}
    .search_history ul>li{display: flex;justify-content: space-between;}
    .search_history ul>li>span{padding:5px 30px;color: #ABABAB;font-size: 30px;}
    .search_history ul>li>.iconfont{padding:5px 10px;color: #ABABAB;font-size: 12px;font-weight: 700px;}

    .search_history .title{width: 100%;height: 46px;text-align: center;line-height: 46px;background:#F5F5F5; color: #C6C6C6;}
    .search-none{background:#fff;color: #3190E8;text-align: center;font-size:30px;height: 60px;line-height:60px;}

    .search-sorry{width: 100%;height: 40px;line-height: 40px;color: grey;}
    .contentwrap{margin-top: 110px;background:white;z-index:5;position: relative;width: 100%;height: auto;}
    .search{width: 100%;height: 100%;}
    .searchrest{width: 100%;}
    .shopinfowarp {
        display: flex;
        flex-direction: row;
        height: 150px;
        padding: 50px 0px;
        border-bottom: 1px solid #F1F1F1;
        width: 95%;
        margin:0px auto;
    }

    .shopinfowarp img {
        width: 150px;
        height: 150px;
        float: left;
        margin-right: 20px;
    }

    .shopinfowarp .shopname {
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
