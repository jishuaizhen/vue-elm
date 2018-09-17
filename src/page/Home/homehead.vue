<template>
    <top>
        <li>
            <router-link to="search">
                <i class="iconfont icon-sousuo" style="font-size:25px;"></i>
            </router-link>
        </li>
        <li>
            <router-link to="citylist">
                <span class="location">{{place.name}}</span>
            </router-link>
        </li>
        <li style="text-align:right">
        <router-link to="login">
            登录|注册
        </router-link>
        </li>

    </top>
</template>
<script>
import top from '@/components/commons/top'
import {getOnePlaceData} from '@/service/index.js'
export default {
  data () {
    return {
      place: {}
    }
  },
  created () {
    this.getOnePlace()
    console.log(this.$route.query.geohash)
  },
  methods: {
    async getOnePlace () {
      this.place = await getOnePlaceData(this.$route.query.geohash)
      console.log(this.place)
    }
  },
  components: {
    top
  }
}
</script>
<style scoped>
    li {
        color: white;
        width: 30%;
        overflow: hidden;
        text-align: left;
    }
    li a{color: white;}
    .iconfont,.location {
        color: white;
    }
</style>
