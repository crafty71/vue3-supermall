import { createStore } from 'vuex'

import { SET_TABBAR_SHOW } from './types'

export default createStore({
  state: {
    // 默认tabBar显示
    tabBarShow: true,
    cartGoods: []
  },
  getters: {
    tabBarShow: (state) => {
      return state.tabBarShow
    },
    cartLength (state) {
      // return 必须写
      return state.cartGoods.length
    },
    cartGoodsList (state) {
      return state.cartGoods
    }
  },
  mutations: {
    [SET_TABBAR_SHOW] (state, bol) {
      state.tabBarShow = bol
    },
    addCount (state, payload) {
      payload.count += 1
    },
    pushCartGoods (state, payload) {
      payload.isCheck = true
      payload.count = 1
      state.cartGoods.push(payload)
    }
  },
  actions: {
    addCart (context, payload) {
      return new Promise((resolve) => {
        const product = context.state.cartGoods.find((item) => {
          return item.iid === payload.iid
        })
        if (product) {
          context.commit('addCount', product)
          resolve('数量加一')
        } else {
          context.commit('pushCartGoods', payload)
          resolve('添加商品')
        }
      })
    },
    setGargetUser ({ commit }, targetUser) {
      commit('SET_TARGET_USER', targetUser)
      // localStorage.setItem("SET_TARGET_USER", JSON.stringify(targetUser));
    }
  },
  modules: {}
})
