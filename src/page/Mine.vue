<template>
    <div class="mine">
        <top>
            <i></i>
            <span>个人中心</span>
            <div></div>
        </top>
      <div class="login">
            <div class="left">
              <i class="iconfont icon-elm--active"></i>
            </div>
            <div class="main">
              <router-link to="/login" >
              <span class="login-now" v-if="this.$store.state.isLogin">立即登录<p>登陆后可享受更多特权</p></span>
              <span class="login-now" v-else>你好,{{this.$store.state.userInfo.username}}!</span>
            </router-link>

            </div>
            <div class="right">
              <router-link to="/login" >
              <i class="iconfont icon-arrow-right"></i>
            </router-link>
            </div>
      </div>
      <div class="wallet">
          <div class="qianbao">
              <router-link to="convert">
            <i class="iconfont icon-qianbao"></i>
            <p>钱包</p>
          </router-link>
          </div>
          <div class="hongbao">
            <router-link to="convert">
            <i class="iconfont icon-hongbao"></i>
            <p>红包兑换</p>
          </router-link>
          </div>
          <div class="jinbi">
              <router-link to="convert">
            <i class="iconfont icon-jinbi"></i>
            <p>金币</p>
          </router-link>
          </div>
      </div>
      <ul class="order">
        <li>我的订单</li>
        <li>积分商城</li>
        <li>饿了么会员卡</li>
        <li>服务中心</li>
        <li>饿了么消息</li>
        <li v-show="!this.loginshow" @click="outLogin">退出登录</li>
      </ul>

    </div>
</template>
<script>
import top from '@/components/commons/top'
export default {
  data () {
    return {
    }
  },
  components: {
    top
  },
  computed: {
    isLogin () {
      // 通过sessionStorage获取vuex里的isLogin状态
      if (sessionStorage.getItem('userName') && sessionStorage.getItem('userToken')) {
        this.$store.commit('userStatus', sessionStorage.getItem('userName'))
      } else {
        this.$store.commit('userStatus', null)
      }
      return this.$store.state.isLogin
    }
  },
  methods: {
    outLogin () {
      this.$store.dispath('setUser', null)
      this.$router.push('/home')
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../style/common.less";
  @import '../style/mine.less';
</style>
<style>
.login{margin-top:90px;}
.login .right a i.icon-arrow-right{font-size:100px;}
.order li{margin-left:40px;font-size: 30px;line-height: 100px;height: 120px;}
.wallet{margin:40px 30px;height: 120px;line-height:50px;}
.wallet a{color: black;}
</style>
