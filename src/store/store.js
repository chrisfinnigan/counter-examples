import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload
    },
    decrement: (state, payload) => {
      state.counter -= payload
    }
  },
  actions: {
    //uses context by default, destructuring the context as we only need commit within it
    asyncIncrement: ({ commit }, payload) => {
      try {
        //using timeout to simulate an async action such as an API call
        setTimeout(() => {
          commit('increment', payload.by)
        }, payload.duration)
      } catch (err) {
        console.log(err)
      }
    },
    asyncDecrement: ({ commit }, payload) => {
      try {
        //using timeout to simulate an async action such as an API call
        setTimeout(() => {
          commit('decrement', payload.by)
        }, payload.duration)
      } catch (err) {
        console.log(err)
      }
    }
  },
  getters: {
    getCounterInteger: state => {
      return state.counter
    },
    getCounterBinary: state => {
      return state.counter.toString(2)
    },
    stateDump: state => {
      return state
    }
  }
})
