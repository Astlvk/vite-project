import { StoreOptions } from "vuex"

export interface appState {
  appName: string
}

const app: StoreOptions<appState> = {
  state: {
    appName: 'Hello World and Vue3',
  },

  mutations: {

  },

  actions: {

  }
}

export default app