<template lang="pug">
  //- 单栏目
  el-menu-item(v-if='!isDirectory', :index='menuIndex', @click='gotoRouteHandle(menu)')
    svg-icon.el-icon--xxx(v-if='menu.icon', :name='menu.icon')
    i.el-icon--xxx(v-else) {{ menu.name[0].toUpperCase() }}
    span(slot='title') {{ menu.name }}

  //- 单个子栏目
  c-menu-item(v-else-if='subMenus.length === 1', :menu='subMenus[0]')

  //- 多栏目且存在多个子栏目
  el-submenu(v-else, :index='menuIndex', :popper-append-to-body="false")
    template(slot='title')
      svg-icon.el-icon--xxx(v-if='menu.icon', :name='menu.icon')
      i.el-icon--xxx(v-else) {{ menu.name[0].toUpperCase() }}
      span(slot='title') {{ menu.name }}
    c-menu-item(v-for='subMenu in subMenus', :menu='subMenu', :key='subMenu.id')
</template>

<script>
export default {
  name: "CMenuItem",
  inject: ['gotoRouteHandle'],
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  computed: {
    menuIndex() {
      const { name } = this.menu;
      return `${name}`;
    },
    isDirectory() {
      return this.menu.type === 0;
    },
    subMenus() {
      const { list = [] } = this.menu;
      return (list && list.filter(m => m.show && m.compiled)) || [];
    }
  }
};
</script>