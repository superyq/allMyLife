<template lang="pug">
.p-echarts__bar(style='width: 100%;height: 100vh;')
  c-echarts-card(:option='option')
</template>

<script>
import barData from "./datas/bar"
export default {
  name: 'PBar',
  data() {
    return {
      option: barData
    }
  }
}
</script>