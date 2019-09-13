<template lang="pug">
  .c-echarts-card
</template>

<script>
export default {
  name: 'CEchartsCard',
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  mounted() {
    var myChart = this.$echarts.init(this.$el);

    myChart.setOption(this.option);
  }
}
</script>