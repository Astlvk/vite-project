<template>
  <div>
    {{ msg }}
    <br />
    {{ timer }}
    <br />

    <Button type="primary">
      Hello world
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from '@/store'
import { Button } from 'vant'

const store = useStore()

const msg = 'hello world'
const timer = computed(() => store.state.app.timer)

store.dispatch('app/timing')

</script>
