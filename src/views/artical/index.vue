<template lang="pug">
  .p-artical__wrapper
    .p-artical
      label 文章详情
      el-button(type='primary', @click='goArtical(3)') 下一篇
</template>

<script>
export default {
  name: "PArtical",
  props: ['id'],
  methods: {
    goArtical(id) {
      this.$router.push(`/artical/${id}`);
    }
  }
};
</script>
