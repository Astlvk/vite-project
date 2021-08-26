import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { AllState, RootState } from './interface'
import app from './modules/app'

export const key: InjectionKey<Store<RootState>> = Symbol()

export default createStore<RootState>({
  modules: {
    app
  }
})

export function useStore<T = AllState> () {
  return baseUseStore<T>(key)
}
