<template>
    <div class="nav">
        <router-link :to="{name:'home',query:{geohash:this.geohash}}">
            <i class="iconfont icon-elm--active"></i>
            <span>外卖</span>
        </router-link>
        <router-link to="/find">
            <i class="iconfont icon-elm2"></i>
            <span>发现</span>
        </router-link>
        <router-link to="/money">
            <i class="iconfont icon-elm"></i>
            <span>红包</span>
        </router-link>
        <router-link to="/mine">
            <i class="iconfont icon-elm1"></i>
            <span>我的</span>
        </router-link>
    </div>
</template>
<script>
export default{
  data () {
    return {
      geohash: '31.22967,121.4762'
    }
  }
}
</script>
<style scoped>
    .nav{
        position:fixed;
        bottom:-1px;
        left:0;
        height:100px;
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
        box-shadow:0 -5px 10px #999;
        background:white;
    }
    .nav a{
        display:flex;
        flex:1;
        flex-direction:column;
        color:#999;
    }
    .nav a i{
        font-size:35px;
    }
    .nav a span{
        font-size:30px;
    }
    a.router-link-active{
        color:#3190E8;
    }

</style>
