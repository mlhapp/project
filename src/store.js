import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isFootbarShow: true
  },
  mutations: {
    delfootTabbar (state, data) {
      state.isFootbarShow = data
    },
    showfootTabbar (state, data) {
      state.isFootbarShow = data
    }
  },
  actions: {

  }
})
