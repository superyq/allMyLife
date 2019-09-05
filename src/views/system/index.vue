<template lang="pug">
  .p-system(v-cloak, ref='cui-wrapper', v-loading.fullscreen.lock="loading", :class='wrapperClassNames')
    c-header
    c-tabs
    c-aside
    c-main(v-if='!contentIsNeedRefresh')
    c-footer
</template>

<script>
import CHeader from "./c-header";
import CTabs from "./c-tabs";
import CAside from "./c-aside";
import CMain from "./c-main";
import CFooter from "./c-footer";

import { mapState } from "vuex";
export default {
  name: "PSystem",
  components: {
    CHeader,
    CTabs,
    CAside,
    CMain,
    CFooter
  },
  provide() {
    return {
      refresh() {
        this.$store.commit("system/updateContentIsNeedRefresh", true);
        this.$nextTick(() => {
          this.$store.commit("system/updateContentIsNeedRefresh", false);
        });
      }
    };
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapState("system", ["asideFold", 'contentIsNeedRefresh']),
    wrapperClassNames() {
      return {
        "c-aside--fold": this.asideFold
      };
    }
  }
};
</script>