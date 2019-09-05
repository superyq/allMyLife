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
import { asideMenuList, dynamicMenuRoutes } from "@/datas/menu.js";
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
      asideMenuList,
      dynamicMenuRoutes
    };
  },
  computed: {
    ...mapState("system", ["asideFold", "asideMenuActive"])
  },
  methods: {
    ...mapMutations("system", ["updateAsideFold"]),
    gotoRouteHandle(menu) {
      const route = this.dynamicMenuRoutes.filter(
        item => item.meta.id === menu.id
      );

      route.length
        ? this.$router.push({ name: route[0].name })
        : this.$alert(
            `未匹配到路由地址(${menu.name}[${menu.url}]), 请联系开发人员`,
            "提示"
          ).catch(() => {});
    }
  }
};
</script>
