
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
    test: false
}

const mutations = {}

export default new Vuex.Store({
    state,
    mutations
})