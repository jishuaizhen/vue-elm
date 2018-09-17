<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <mynav></mynav>
  </div>
</template>

<script>
import mynav from '@/components/commons/mynav'
export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    mynav
  }
}
</script>

<style>
*{margin:0;padding:0}
ul,li{list-style:none}
a{text-decoration:none}
input,button{
  -webkit-appearance:none;
}
html,body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width:100%;
  height: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
