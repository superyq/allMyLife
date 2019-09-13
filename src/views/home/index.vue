<template lang="pug">
  .p-system-home
    .p-system-home__user-number
      header-card(title='用户总量')
        .all-user.header-card__number {{ allUser | changeNumber }}

      header-card(hasFooter, title='新用户量')
        .news-user.header-card__number {{ newsUser | changeNumber}}

      header-card(hasFooter, title='社区/社群创建数')
        .group-number.header-card__number {{ groupNumber | changeNumber }}

      header-card(hasFooter, title='流失用户率')
        .lose-user.header-card__number {{ loseUser | changeNumber }}

    .p-system-home__dynamic-or-task
      .p-system-home__dynamic-or-task-header
        ul.p-system-home__dynamic-or-task-header-title
          li.p-system-home__dynamic-or-task-header-title--active 动态发布数
          li 广场任务数

        ul.p-system-home__dynamic-or-task-header-time
          li 今日
          li 本周
          li 本月
          li 全年

      .p-system-home__dynamic-or-task-content
        .p-system-home__dynamic-or-task-content-echarts
          c-echarts-card(:option='option')


</template>

<script>
import headerCard from "./header-card";

export default {
  name: "PSystemHome",
  components: {
    headerCard
  },
  data() {
    return {
      allUser: 1000,
      newsUser: 1000,
      loseUser: 1000,
      groupNumber: 1000,

      activeName: "first",
      option: {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      }
    };
  },
  filters: {
    changeNumber(val) {
      return parseFloat(val).toLocaleString();
    }
  }
};
</script>