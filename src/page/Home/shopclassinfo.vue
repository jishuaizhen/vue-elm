<template>
    <div class="shopclassinfo">
    <top>
        <i class="iconfont icon-iconfontyoujiantou" @click="goback"></i>
        <li>{{title}}</li>
        <li></li>
    </top>
    <div class="nav">
        <li>预定早餐</li>
        <li>排序</li>
        <li>筛选</li>
    </div>
    <nearshop></nearshop>
    </div>
</template>
<script>
import top from '@/components/commons/top'
import nearshop from './nearshop'
export default{
  data () {
    return {
      title: this.$route.params.title
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  },
  components: {
    top,
    nearshop
  }
}
</script>
<style scoped>
.shopclassinfo{
    width:100%;
    height: auto;
}
.shopclassinfo .nav{
    display: flex;
    width:100%;
}
.shopclassinfo .nav li{
    width: 33%;
    text-align: center;
    height: 80px;
    font-size: 30px;
    line-height: 80px;
    border: 1px solid #F5F5F5;
}
.shops{
    position:relative;
    z-index:9;
    background:white;
}
</style>
