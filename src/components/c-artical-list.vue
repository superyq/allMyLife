<template lang="pug">
  .c-artical-list
    .artical-list__box
      c-artical-card-image(v-for='item in items', :key='item.index', :item='item')

    .artical-list__more
      el-button(type='primary', @click='lookMore') 查看更多
</template>

<script>
import img1 from "@/assets/8.jpg";
import img2 from "@/assets/7.jpg";

export default {
  name: "CArticalList",
  data() {
    return {
      items: [
        {
          index: 0,
          time: "八月 09, 2019",
          title: "写博客必备神器",
          content:
            "完成了博客的搭建之后，接下来就是是内容创作了。而创作的过程中，我们又会有一系列的问题，比如： 我们用什么工具来编...",
          img: img1
        },
        {
          index: 1,
          time: "八月 09, 2019",
          title: "写博客必备神器",
          content:
            "完成了博客的搭建之后，接下来就是是内容创作了。而创作的过程中，我们又会有一系列的问题，比如： 我们用什么工具来编...",
          img: img2
        },
        {
          index: 2,
          time: "八月 09, 2019",
          title: "写博客必备神器",
          content:
            "完成了博客的搭建之后，接下来就是是内容创作了。而创作的过程中，我们又会有一系列的问题，比如： 我们用什么工具来编...",
          img: img2
        }
      ]
    };
  },
  methods: {
    lookMore() {
      this.$router.push({ name: "artical" });
    }
  }
};
</script>