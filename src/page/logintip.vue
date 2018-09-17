<template>
    <div class="logintip">
        <top>
            <i class="iconfont icon-iconfontyoujiantou" @click="goback"></i>
            <span>提示</span>
            <div></div>
        </top>
        <div class="content">
            <ul>
                <li class="tip">此页面需要登录才能查看</li>
                <router-link to="login">
                <li class="login">请登录</li>
                </router-link>
                <li class="wait" @click="goback">稍后登录</li>
            </ul>
        </div>
    </div>
</template>
<script>
import top from '@/components/commons/top'
export default{
  components: {
    top
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
    .logintip{
        width:100%;
        height: 100%;
        background: #F5F5F5;
        position:relative;
        z-index:10;
    }
    .content{width: 100%;padding: 300px 0px;font-size:30px;}
    .content ul li{width: 80%;text-align: center;line-height: 80px;height: 80px;margin: 30px auto;}
    .content .tip{font-size:40px;color:#3190E8;}
    .content .wait,.content .login{background:#3190E8;border-radius:10px;color:white;}
</style>
