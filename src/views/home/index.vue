<template lang="pug">
  .p-home(ref='home')
    .p-home__top
      header
        router-link.f-l(to='/home') 人生 · 若只如初见
        svg-icon.f-r(name='menu', color='#fff', width='30px', height='30px', style='cursor: pointer;')

      c-artical-card.p-home__artical(:item='item', width='327px')
    .p-home__mask
    .p-home__mask1
</template>

<script>
import cArticalCard from "@/components/c-artical-card";

export default {
  name: "PHome",
  components: {
    cArticalCard
  },
  data() {
    return {
      item: {
        time: "八月 09, 2019",
        title: "写博客必备神器",
        content: "完成了博客的搭建之后，接下来就是是内容创作了。而创作的过程中，我们又会有一系列的问题，比如： 我们用什么工具来编..."
      }
    };
  },
  methods: {},
  mounted() {}
};
</script>