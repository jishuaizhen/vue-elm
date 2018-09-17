<template>
    <div class="nearshopinfo">
        <top>
            <i class="iconfont icon-iconfontyoujiantou" @click="goback"></i>
            <li>{{shop.name}}</li>
            <li></li>
        </top>
        <header>
          <ul class="head">
            <li><img :src="shop.image_path | myfilter" alt=""></li>
            <li class="tips"><h3>{{shop.name}}</h3><p>商家配送/{{shop.order_lead_time}}分钟到达/配送费￥{{shop.float_delivery_fee}}</p><p>公告：{{shop.promotion_info}}</p></li>
          </ul>
        </header>
        <section class="content">
          <ul class="content_top">
            <li @click="shopshow=true"><span :class="shopshow?'active':''">商品</span></li>
            <li @click="shopshow=false"><span :class="!shopshow?'active':''">评价</span></li>
          </ul>
          <template v-if="shopshow">
            <div class="menu">
                <ul class="menu_left">
                    <li @click="menu1">热销榜</li>
                    <li>热搜榜</li>
                    <li>面包</li>
                    <li>肯德基</li>
                    <li>测试1</li>
                    <li>测试2</li>
                    <li>测试3</li>
                    <li>测试4</li>
                  </ul>
                  <ul class="menu_right">
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li id="menu1">1111</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                  </ul>
            </div>
          </template>
          <template v-else>

          </template>
        </section>
        <footer>
          <ul>
            <li class="iconfont icon-gouwuche1"></li>
            <li>购物车：￥0.00</li>
            <li>还差￥20元起送</li>
          </ul>
        </footer>
    </div>
</template>
<script>
import top from '@/components/commons/top'
export default {
  data () {
    return {
      shop: this.$route.params.shop,
      shopshow: true
    }
  },
  components: {
    top
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    menu1 () {
      document.querySelector('#menu1').scrollIntoView(true)
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
  .nearshopinfo{
    width: 100%;
    height: 100%;
    position: relative;
    z-index:10;
    background: white;
  }
  header{
    width: 100%;
    background:#F5F5F5;
  }
  header .head{
    width: 95%;
    margin:0px auto;
    padding-top:90px;
    height: 200px;
    display:flex;
  }
  header .head img{
    width: 150px;
    height:150px;
    margin:20px;
  }
  header .head .tips{
    text-align: left;
    color: gray;
    font-size:25px;
    margin:20px 0px;
  }
  header .head .tips p{
    margin-top:20px;
  }
  .content .content_top{
    width:100%;
    height: 100px;
    font-size:30px;
    line-height: 100px;
    display: flex;
  }
  .content .content_top li{
    width: 50%;
    border:1px solid #F5F5F5;
  }
  .content_top li span.active{
    border-bottom: 2px solid #3190E8;
    padding:10px 0px;
    color: #3190E8;
  }
  footer ul{
    display: flex;
    width:100%;
    height:100px;
    position: absolute;
    left: 0px;
    bottom:0px;
    background: #F5F5F5;
    font-size:30px;
  }
  .menu{
    width:100%;
  background: red;
  height: 850px;
  display: flex;
  }

  .menu_left{
    width:25%;
    background: #F5F5F5;
    }
  .menu_left li{
    height: 105px;
    font-size:30px;
    line-height: 105px;
    border-bottom:1px solid #a9a9a9;
  }
  .menu_right{
    width: 75%;
    height: 100%;
    overflow: auto;
  }
  .menu_right li{
    height: 100px;
  }
</style>
