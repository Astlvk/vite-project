<template>
  <div>
    {{ msg }}
    <br />
    {{ timer }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const timer = ref(0)

    setInterval(() => {
      timer.value += 1
    }, 1000)

    return {
      msg: 'hello world',
      timer
    }
  }
})
</script>
