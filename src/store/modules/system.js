export default {
  namespaced: true,
  state: {
    asideFold: false,
    asideMenuActive: '',
    mainTabs: [],
    mainTabsActive: "home",
    contentIsNeedRefresh: false,
  },
  mutations: {
    updateAsideFold(state, status) {
      state.asideFold = status;
    },
    updateMainTabs(state, tabs) {
      state.mainTabs = tabs;
    },
    updateMainTabsActive(state, status) {
      state.mainTabsActive = status;
    },
    updateContentIsNeedRefresh(state, status) {
      state.contentIsNeedRefresh = status;
    },
    updateAsideMenuActive(state, status) {
      state.asideMenuActive = status;
    }
  }
};
