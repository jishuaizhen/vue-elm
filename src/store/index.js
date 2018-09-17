import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'
Vue.use(Vuex)

const state = {
  geohash: '31.22299,121.36025',
  currentUser: null,
  isLogin: false,
  token: ''
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
