<template>
  <div class="page-1">
    {{ msg }}
    <br />
    {{ timer }}
    <br />

    <div class="block">

    </div>

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

<style lang="scss">
.page-1 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .block {
    width: 100px;
    height: 100px;
    background-color: aqua;
  }
}
</style>
