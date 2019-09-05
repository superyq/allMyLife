<template lang="pug">
  .c-tabs__wrapper
    .c-tabs
      .c-tabs__refresh.fz-lg(@click='refresh()')
        i.el-icon-refresh.va-middle
        span.va-middle(style='margin-left: 0.5em;margin-right: 2em;') 刷新

      el-dropdown.c-tabs__tool
        i.el-icon-arrow-down
        el-dropdown-menu(slot="dropdown")
          el-dropdown-item(@click.native="tabsCloseCurrentHandle()") 关闭当前标签页
          el-dropdown-item(@click.native="tabsCloseOtherHandle()") 关闭其它标签页
          el-dropdown-item(@click.native="tabsCloseAllHandle()") 关闭全部标签页

      el-tabs(v-model='mainTabsActive', @tab-click='selectedTabHandle', @tab-remove='removeTabHandle')
        el-tab-pane(:lazy='true', :closeable='false', name='home', lable='首页')
          svg-icon(name='home', slot='label')
        el-tab-pane(
          v-for="item in mainTabs",
          :lazy="true",
          :closable="true",
          :key="item.name",
          :name="item.name",
          :label="item.title"
        )

</template>

<script>
import { deepCloneObject } from "@/utils";

export default {
  name: "CTabs",
  inject: ["refresh"],
  computed: {
    mainTabsActive: {
      get() {
        return this.$store.state.system.mainTabsActive;
      },
      set(val) {
        this.$store.commit("system/updateMainTabsActive", val);
      }
    },
    mainTabs: {
      get() {
        return this.$store.state.system.mainTabs;
      },
      set(val) {
        this.$store.commit("system/updateMainTabs", val);
      }
    },
    asideMenuActive: {
      get() {
        return this.$store.state.system.asideMenuActive;
      },
      set(val) {
        this.$store.commit("system/updateAsideMenuActive", val);
      }
    }
  },
  watch: {
    $route: "routeChangeHandle"
  },
  methods: {
    routeChangeHandle(route) {
      if (route.meta.isTab) {
        const mainTabs = deepCloneObject(this.mainTabs);
        let tab = mainTabs.filter(item => item.name === route.name)[0];

        if (!tab) {
          tab = {
            name: route.name,
            title: route.meta.title,
            id: route.meta.id || route.name
          };

          mainTabs.push(tab);
        }

        this.mainTabs = mainTabs;
        this.mainTabsActive = tab.name;
        this.asideMenuActive = tab.name;
      }
    },
    selectedTabHandle(tab) {
      if (tab.name === "home") {
        return this.$router.push({ name: "home" });
      }
      tab = this.mainTabs.filter(item => item.name === tab.name);
      if (tab.length) {
        this.$router.push({
          name: tab[0].name,
          query: tab[0].query,
          params: tab[0].query
        });
      }
    },
    removeTabHandle(tabName) {
      this.mainTabs = this.mainTabs.filter(item => item.name !== tabName);
      if (this.mainTabs.length) {
        if (tabName === this.mainTabsActive) {
          const { name, query, params } = this.mainTabs[
            this.mainTabs.length - 1
          ];
          this.$router.push({ name, query, params }, () => {
            this.mainTabsActive = name;
          });
        }
      } else {
        this.asideMenuActive = "";
        this.mainTabsActive = "home";
        this.$router.push({ name: "home" });
      }
    },
    tabsCloseCurrentHandle() {
      this.removeTabHandle(this.mainTabsActive);
    },
    tabsCloseOtherHandle() {
      this.mainTabs = this.mainTabs.filter(
        item => item.name === this.mainTabsActive
      );
    },
    tabsCloseAllHandle() {
      this.mainTabs = [];
      this.asideMenuActive = "";
      this.mainTabsActive = "home";
      this.$router.push({ name: "home" });
    },
    tabsRefreshCurrentHandle() {
      const { name, query, params } = this.$route;
      this.removeTabHandle(name);
      this.$nextTick(() => {
        this.$router.push({
          name,
          query,
          params
        });
      });
    }
  },
  created() {
    this.routeChangeHandle(this.$route);
  }
};
</script>