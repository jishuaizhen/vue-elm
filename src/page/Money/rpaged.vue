<template>
    <div class="rdpage">
       <top>
           <i class="iconfont icon-iconfontyoujiantou" @click="isBack"></i>
           <span>红包说明</span>
           <div></div>
       </top>
       <section>
           <div class="content">
               <h3>Q1: 怎么获得红包？</h3>
               <ul>
                   <li>通过邀请好友获得</li>
                   <li>在下单返红包的商家下单获得</li>
                   <li>抢微信朋友分享的红包获得</li>
               </ul>
                <h3>Q2: 红包可以做什么？</h3>
                <p>可以抵扣在线支付时的实际支付金额。</p>
                <h3>Q3: 红包的门槛金额按照什么金额计算？</h3>
                <p>红包的的门槛金额按照（选购菜品折后价＋餐盒费）的金额作为计算门槛，即购物车显示的金额（7.3以上版本）。假设红包满30可用，只要选购的菜品现价（折后价）＋餐盒费超过30，就可以使用红包。</p>
                <h3>Q4: 一个红包能拆开多次使用吗？</h3>
                <p>不能，一个红包只能一次性使用，不能分开使用。</p>
                <h3>Q5: 下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？</h3>
                <p>会的，订单无效后红包会自动返还到您的账户里。</p>
                <h3>Q6: 红包兑换码怎样兑换成红包，怎样查看红包？</h3>
                <p>在个人中心 > 我的红包 > 兑换红包，输入兑换码进行兑换。</p>
           </div>
       </section>
    </div>
</template>
<script>
import top from '@/components/commons/top'
export default{
  data () {
    return {

    }
  },
  methods: {
    isBack () {
      this.$router.push('/money')
    }
  },
  components: {
    top
  }
}
</script>
<style scoped>
.rdpage{position:relative;background: white;z-index: 100;}
.rdpage .content{margin-top:100px;text-align: left;padding: 20px;color: #666;}
.rdpage h3{color:#3190E8;font-weight: normal;font-size:30px;}
.rdpage ul li{padding:10px 0;font-size:20px;}
.rdpage p{padding: 30px 0;font-size:25px;}
</style>
