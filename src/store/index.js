import Vue from 'vue'
import Vuex from 'vuex'
import localForage from "localforage";
import VuexPersistence from "vuex-persist";
import products from '../modules/products'
import cart from '../modules/cart'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    //storage: window.localStorage, //esto es para pequenyas cosas, para pwa la siguiente linea con localForage
    storage: localForage,
    modules: ['cart'] //Solo guardaria el modulo cart
})

export default new Vuex.Store({
  /*state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }*/
    modules: {
        products,
        cart
    },
    plugins: [vuexLocal.plugin]
})
