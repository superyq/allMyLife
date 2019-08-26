<template lang="pug">
  .c-artical-card-image
    .artical-card-image.u-image-box(:style='styleImage')
      img(:src='item.img')
    .artical-card-image__content(:style='styleContent')
      c-artical-card(
        :item='item',
        width='318px',
        timeC='#999',
        titleC='#333',
        contentC='#555'
      )
</template>

<script>
export default {
  name: "CArticalCardImage",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    styleImage() {
      return this.item.index % 2 ? { right: 0 } : { left: 0 };
    },
    styleContent() {
      return this.item.index % 2 ? { float: "left" } : { float: "right" };
    }
  }
};
</script>

