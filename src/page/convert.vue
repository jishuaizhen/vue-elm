<template>
<div>
    <top>
        <i class="iconfont icon-iconfontyoujiantou" @click="goback"></i>
        <span>红包兑换</span>
        <div></div>
    </top>
    <form action="" class="convert">
        <input type="text" placeholder="请输入兑换码" class="convert-input " v-model="exchangeCode">
        <section class="input-container">
        <input type="验证码" name="" id="" placeholder="验证码" maxlength="4" v-model="codeNumber">
        <div>
            <img :src="obj.code" alt="" class="img">
            <div class="convert-img" @click="getcaptcha">
                <p>看不清</p>
                <p class="change">换一张</p>
            </div>
        </div>
        </section>
        <div class="foot" @click="exchange" :class="{'active': status}" >兑换</div>
    </form>
    <div class="alert animated rubberBand" v-if="showAlert" >
        <i class="iconfont icon-tanhao1"></i>
        <span>{{alertText}}</span>
        <p  @click="showAlert = false,exchangeCode = null,codeNumber = null">确认</p>
    </div>
</div>

</template>

<script>
import top from '@/components/commons/top'
import {getcaptchas, exChangeHongbao} from '@/service/index'
export default{
  created () {
    this.getcaptcha()
  },
  computed: {
    status: function () {
      let status = (/^\d+$/gi.test(this.exchangeCode)) && (/^\w{4}$/gi.test(this.codeNumber))
      return status
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    async getcaptcha () {
      this.obj = await getcaptchas()
    },
    async exchange () {
      if (this.status) {
        let res = await exChangeHongbao(this.id, this.exchangeCode, this.codeNumber)
        if (res.message) {
          this.showAlert = true
          this.alertText = res.message
          this.getcaptcha()
        }
      }
    }
  },
  data () {
    return {
      obj: {},
      exchangeCode: null,
      codeNumber: '',
      honbao: {},
      id: '2128',
      showAlert: false,
      alertText: ''
    }
  },
  components: {
    top
  }

}
</script>
<style scoped>
.convert{background: #F1F1F1;margin-top:100px;height: 350px;padding: 20px;}
.convert .convert-input{margin: 20px auto;width: 90%;height: 80px;border: none;font-size: 18px;border-radius: 6px}
.convert  .input-container{display: flex;width: 90%;justify-content: space-between}
.convert  .input-container>input{margin-left: 30px;width: 80%;height: 80px;border: none;font-size: 18px;padding-left: 10px;border-radius: 6px}
.convert  .input-container>div{display: flex;align-items: center;justify-content: center;}
.convert  .input-container>div .convert-img{width: 280px;height: 80px;border-radius: 6px;background: white;}
.convert  .input-container>div p{padding-bottom: 5px}
.convert  .input-container img.img{margin-left: 5px;width: 200%;height: 80px;background: white;border-radius: 6px;}
.change{color: #3B95E9}
.foot{width: 92%;margin: 30px 18px;color:white;background-color: #ccc;border-radius: 6px;height: 80px;line-height: 80px;}
.active{background-color: #4cd964;color: white;}

.alert{display: flex;flex-direction: column;align-items: center;border-radius: 6px;justify-content: center;position: fixed;left: 54px;top: 193px;;width: 310px;height: 203px;background: white;}
.alert .iconfont{font-size: 64px;color: orange}
.alert span{margin: 15px 0;font-size: 16px;}
.alert p{background: #4cd964;width: 310px;height: 46px;color: white;font-weight: 700;line-height: 46px;font-size: 20px;border-radius: 6px;}
</style>
