<template lang="pug">
  header.c-header
    el-dropdown.f-r(@command='adminActionHandle')
      .c-userbox
        img.c-userbox__avatar(src='@/assets/6.jpg')
        h2.c-userbox__name 人生若只如初见
        i.el-icon-arrow-right
      el-dropdown-menu(slot='dropdown')
        el-dropdown-item(command='logout')
          | 退出登录
</template>

<script>
export default {
  name: "CHeader",
  methods: {
    adminActionHandle() {}
  }
};
</script>
