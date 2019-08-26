<template lang="pug">
  header
    router-link.f-l(to='/home') 人生 · 若只如初见
    svg-icon.f-r(
      name='menu',
      width='30px',
      height='30px',
      style='cursor: pointer;',
      @clickIcon='toggleMenu'
    )

    ul(:style='{ width: width }')
      li(@click='go("cate")') 文章分类
</template>

<script>
export default {
  name: "CHeader",
  data() {
    return {
      width: 0
    };
  },
  methods: {
    toggleMenu() {
      const { width } = this;
      this.width = width ? 0 : "90px";
    },
    go(path) {
      const { name } = this.$route;
      if(name === path) return;

      this.$router.push(`/${path}`);
    }
  }
};
</script>