// store入口管理
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from './plugins/logger'
//import rootAction from './rootAction'
import rootMutation from './rootMutation' 

Vue.use(Vuex)

const state = {

}

export default new Vuex.Store({
    mutations: rootMutation,
    modules: { 
    },
    strict: true,
    plugins: false ? [createLogger()] : []
})