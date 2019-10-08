<template lang='pug'>
  .cate-card(@click='goArtical')
    .cate-card__img.u-image-box
      img(:src='img')
      //- .cate-card__img-mark 哇哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈

    .cate-card__content
      .cate-card__content-title  可道云插件：PSD 看图、全景图查看器以及 X 探针
      .cate-card__content-meta
        svg-icon(name='outdent')
        span  2个月前 (08-22)
        svg-icon(name='outdent')
        span  100
        svg-icon(name='outdent')
        span  100
</template>

<script>
import img from "@/assets/6.jpg";

export default {
  name: "cate-card",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      img
    };
  },
  methods: {
    goArtical() {
      this.$router.push(`/artical/${this.item.id}`);
    }
  }
};
</script>