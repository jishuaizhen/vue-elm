<template>
    <div class="citylist">
        <top class="top">
            <li class="logo">elm</li>
            <li class="login">登录|注册</li>
        </top>
        <div class="content">
            <ul class="precity">
                <li class="precity_top"><span>当前定位城市：</span><span>定位不准时，请在城市列表中选择</span></li>
            <router-link :to="{name:'city',params:{id:guesscity.id}}">
                <li class="precity_down"><span>{{guesscity.name}}</span><i class="iconfont icon-zuobiao-copy"></i></li>
            </router-link>
            </ul>
            <div class="hotcity">
                <p>热门城市</p>
                <ul class="citywrap">

                    <li class="city" v-for="(city,index) in hotcity" :key="index">
                        <router-link :to="{name:'city',params:{id:city.id}}">{{city.name}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="listcity" v-for="(value,key,index) in sortgroupcity" :key="key">
                <p>{{key}}<span v-if="index == 0">（按字母排序）</span></p>
                <ul class="citygroup">
                    <li class="city" v-for="(city,index) in value" :key="index">
                        <router-link :to="{name:'city',params:{id:city.id}}">{{city.name}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>
<script>
import top from '@/components/commons/top'
import {getGuessCityData, getHotCityData, getGroupCityData} from '@/service/index.js'
export default {
  data () {
    return {
      guesscity: {},
      hotcity: [],
      groupcity: {}
    }
  },
  computed: {
    // 将获取的数据按照A-Z字母开头排序
    sortgroupcity () {
      let sortobj = {}
      for (let i = 65; i <= 90; i++) {
        if (this.groupcity[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)]
        }
      }
      return sortobj
    }
  },
  created () {
    this.getGuessCity()
    this.getHotCity()
    this.getGroupCity()
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    async getGuessCity () {
      this.guesscity = await getGuessCityData()
    },
    async getHotCity () {
      this.hotcity = await getHotCityData()
    },
    async getGroupCity () {
      this.groupcity = await getGroupCityData()
    //   console.log(this.groupcity)
    }
  },
  components: {
    top
  }
}
</script>
<style scoped>
    .citylist{
        width:100%;
        background:#F5F5F5;
        z-index: 10;
        position:relative;
        padding-top:110px;
    }
    .citylist .top{
        position:fixed;
        left: 0px;
        top: 0px;
    }
    .logo,.login {
        color: white;
    }
    .content .precity{
        background:white;
        width: 100%;
        height: auto;
        line-height: 90px;
        font-size: 30px;
        border-bottom: 1px solid #F1F1F1;
    }
    .content .precity .precity_top{
        width: 95%;
        margin:0px auto;
        color:gray;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid #F1F1F1;
    }
    .content .precity .precity_down{
        width: 95%;
        margin:0px auto;
        color:#3190E8;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .content .precity .precity_down .iconfont{
        color:#3190E8;
    }
    .hotcity{
        background:white;
        margin-top:20px;
        height:auto;
        width: 100%;
    }
    .hotcity a{
        color: #3190E8;
    }
    .hotcity p{
        width: 95%;
        margin: 0px auto;
        font-size:30px;
        text-align: left;
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #F1F1F1;
    }
    .citywrap{
        width:100%;
        height: 200px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        /* justify-content: flex-start; */
    }
    .citywrap .city{
        width: 25%;
        height: 90px;
        box-sizing: border-box;
        line-height: 90px;
        font-size:30px;
        color: #3190E8;
        border-right:1px solid #F1F1F1;
        border-bottom:1px solid #F1F1F1;
    }
    .listcity{
        background:white;
        margin-top:20px;
        height:auto;
        width: 100%;
        color: gray;
    }
    .listcity p{
        width: 95%;
        margin: 0px auto;
        font-size:30px;
        text-align: left;
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #F1F1F1;
    }
    .citygroup{
        height:auto;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .citygroup .city{
        height: 90px;
        width:25%;
        box-sizing: border-box;
        font-size: 30px;
        line-height: 70px;
        text-align: center;
        border-right:1px solid #F1F1F1;
        border-bottom:1px solid #F1F1F1;
        overflow: hidden;
        padding: 10px;
    }
    .citygroup .city a{
        color: #3190E8;
    }
</style>
