<template lang='pug'>
  .cate-card(@click='goArtical')
    .cate-card__img
      img(:src='img')
      .cate-card__img-mark 哇哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈

    .cate-card__content
      .cate-card__content-title
      .cate-card__content-meta
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