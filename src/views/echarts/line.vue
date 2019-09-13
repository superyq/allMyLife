<template lang="pug">
  .p-echarts
    .p-echarts__box(v-for='(option, index) in lineData', :key='index')
      .p-echarts__box-seize
      c-echarts-card(:option='option')

</template>

<script>
import lineData from "./datas/line";

export default {
  name: "PLine",
  data() {
    return {
      lineData
    };
  }
};
</script>