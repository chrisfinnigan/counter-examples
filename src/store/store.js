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
    asyncIncrement({ commit }, payload) {
      try {
        //using timeout to simulate an async action such as an API call
        setTimeout(() => {
          commit('increment', payload)
        }, payload.duration)
        return Promise.resolve(true)
      } catch (error) {
        return Promise.reject(new Error(error))
      }
    },
    asyncDecrement({ commit }, payload) {
      try {
        //using timeout to simulate an async action such as an API call
        setTimeout(() => {
          commit('decrement', payload)
        }, payload.duration)
        return Promise.resolve(true)
      } catch (error) {
        return Promise.reject(new Error(error))
      }
    }
  },
  getters: {
    getCounterAInteger: state => {
      return state.counterA
    },
    getCounterBBinary: state => {
      return state.counterB.toString(2)
    },
    stateDump: state => {
      return state
    }
  }
})
