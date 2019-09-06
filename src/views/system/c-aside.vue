<template lang="pug">
  aside.c-aside
    .c-aside__hd
      router-link.c-brand(:to='{ name: $config.routeHomeName }', title='人生若只如初见')
        span.c-brand--lg 人生 · 若只如初见
        span.c-brand--sm 初 · 见

    .c-aside__bd
      .c-aside__menu-wrapper
        el-menu.c-aside__menu(
          :unique-opened='true',
          :collapse='asideFold',
          :collapse-transition='true',
          :default-active='asideMenuActive'
        )
          c-menu-item(v-for='menu in asideMenuList', :key='menu.id', :menu='menu')

    .c-aside__tool(@click='updateAsideFold(!asideFold)')
      .c-aside__tool-bg
      .c-aside__tool-btn
        svg-icon(name='outdent')
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { asideMenuList } from "@/datas/menu.js";
import CMenuItem from "./c-menu-item";

export default {
  name: "CAside",
  provide() {
    return {
      gotoRouteHandle: this.gotoRouteHandle
    };
  },
  components: {
    CMenuItem
  },
  data() {
    return {
      asideMenuList
    };
  },
  computed: {
    ...mapState("system", ["asideFold", "asideMenuActive"])
  },
  methods: {
    ...mapMutations("system", ["updateAsideFold"]),
    gotoRouteHandle(menu) {
      const { name = 'home' } = menu;
      this.$router.push({ name });
    }
  }
};
</script>
