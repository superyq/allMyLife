<template lang='pug'>
  #app
    c-user-card(v-if='!isSystem')
    transition(name='fade')
      router-view
</template>

<script>
import CUserCard from "@/components/c-user-card";

export default {
  name: "app",
  components: {
    CUserCard
  },
  data() {
    return {
      isSystem: false
    }
  },
  watch: {
    $route(to) {
      const { meta: { isSystem = false } } = to;

      this.isSystem = isSystem;
    }
  }
};
</script>
