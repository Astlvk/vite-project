import { Module } from 'vuex'
import { RootState } from '../../interface'
import { AppState } from './interface'

const app: Module<AppState, RootState> = {
  namespaced: true,

  state: {
    appName: 'Hello World and Vue3',
    timer: 0
  },

  mutations: {
    setTimer (state, timer: number) {
      state.timer = timer
    },

    accumulateTimer (state, timer: number) {
      state.timer += timer
    }
  },

  actions: {
    timing ({ commit }) {
      setInterval(() => {
        commit('accumulateTimer', 1)
      }, 1000)
    }
  }
}

export default app
