<template>
<div class="login">
    <top>
        <i class="iconfont icon-iconfontyoujiantou" @click="goback"></i>
        <span>登录</span>
        <div></div>
    </top>
    <div class="content">
<mt-field label="用户名" placeholder="用户名" v-model="username" ref="user"></mt-field>
<mt-field label="密码" placeholder="密码" :type="value?'password':'text'" v-model="password" ref="pwd" >
  <mt-switch v-model="value"></mt-switch>
</mt-field>
<mt-field label="验证码" placeholder="验证码" type="text" v-model="code" ref='code'>
  <img :src="imgURL" class="tuxing" >
  <mt-button size="small" type="default" @click="getCode">获取验证码</mt-button>
  </mt-field>
<mt-button size="large" type="primary" @click="login">登录</mt-button>
<div class="tips">温馨提示:未注册过的用户将通过登录功能自动注册</div>
</div>
    </div>
</template>
<script>
import top from '@/components/commons/top'
import {deng, getCaptchas} from '@/service/index.js'
export default {
  data () {
    return {
      username: null,
      password: null,
      code: null,
      imgURL: null,
      value: true
    }
  },
  mounted () {

  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    async login () {
      let loginInfo = await deng(this.username, this.password, this.code)
      if (loginInfo.id) {
        // 将信息放在sessionStorage中
        sessionStorage.setItem('userName', loginInfo.username)
        sessionStorage.setItem('userToken', loginInfo._id)
        // 将信息放在vuex中
        this.$store.dispatch('setUser', loginInfo.username)
        this.$store.dispatch('setToken', loginInfo._id)
        console.log(this.$store.state.isLogin)
        this.$router.push({path: '/mine'})
      }
    },
    async getCode () {
      let data = await getCaptchas()
      this.imgURL = data.code
    }
  },
  created () {
    // created 是页面（组件）创建完成之后就执行
    this.getCode()
  },
  components: {
    top
  }

}
</script>
<style scoped>
.login{height: 100%;background: #F5F5F5;position:relative;z-index:10;}
.content{margin-top:100px;height: 90px;font-size:30px;line-height: 90px;}
.mint-cell{height: 100px;}
button.mint-button[data-v-25116fc2] {height: 80px;}

</style>
