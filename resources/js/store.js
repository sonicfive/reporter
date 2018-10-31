import Vue from 'vue'
import Vuex from 'vuex'
import report from './store-modules/report'


Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    report,
    global
  }
})

