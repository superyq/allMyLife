<template lang="pug">
  .p-home
    .p-home__top
      c-header
      c-artical-card.p-home__artical(:item='item', width='327px')
    c-artical-list
    .p-home__mask
    .p-home__mask1
</template>

<script>
export default {
  name: "PHome",
  data() {
    return {
      item: {
        time: "八月 09, 2019",
        title: "写博客必备神器",
        content: "完成了博客的搭建之后，接下来就是是内容创作了。而创作的过程中，我们又会有一系列的问题，比如： 我们用什么工具来编..."
      }
    };
  }
};
</script>