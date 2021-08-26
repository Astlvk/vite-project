<template>
  <div>
    {{ msg }}
    <br />
    {{ timer }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup () {
    const store = useStore()

    const timer = computed(() => store.state.app.timer)
    store.dispatch('app/timing')

    return {
      msg: 'hello world',
      timer
    }
  }
})
</script>
