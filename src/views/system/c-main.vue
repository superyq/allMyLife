<template lang="pug">
  main.c-main
    template(v-if='isIframe')
      iframe.c-main__iframe(frameborder='0', scrolling='yes', :src='$route.meta.iframeUrl')
    keep-alive(v-else)
      router-view
</template>

<script>
export default {
  name: 'CMain',
  computed: {
    isIframe() {
      const { meta } = this.$route;
      return meta && meta.isIframe;
    }
  }
}
</script>