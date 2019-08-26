<template lang='pug'>
  .cate-card(@click='goArtical')
    .cate-card__top
      .cate-card__img-box
        img
      .cate-card__img-remark
      p
    label  {{ item.title }}
</template>

<script>
export default {
  name: "cateCard",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    goArtical() {
      this.$router.push(`/artical/${this.item.id}`);
    }
  }
};
</script>