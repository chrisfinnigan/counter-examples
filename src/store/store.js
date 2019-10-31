import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counterA: 0,
    counterB: 0
  },
  mutations: {
    increment: (state, payload) => {
      state[payload.storeKey] += parseInt(payload.by)
    },
    decrement: (state, payload) => {
      state[payload.storeKey] -= parseInt(payload.by)
    }
  },
  actions: {
    //uses context by default, destructuring the context as we only need commit within it
    incrementCounterVal({ commit }, payload) {
      try {
        commit('increment', payload)
        return Promise.resolve(true)
      } catch (error) {
        return Promise.reject(new Error(error))
      }
    },
    decrementCounterVal({ commit }, payload) {
      try {
        commit('decrement', payload)
        return Promise.resolve(true)
      } catch (error) {
        return Promise.reject(new Error(error))
      }
    }
  },
  getters: {
    getCounterA: state => {
      return state.counterA
    },
    getCounterB: state => {
      //convert state value to binary
      return state.counterB.toString(2)
    },
    stateDump: state => {
      return state
    }
  }
})
