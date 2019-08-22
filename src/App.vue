<template lang='pug'>
  #app
    transition(name='fade')
      router-view
</template>

<script>
import canvasBox from "@/views/canvas";

export default {
  name: "app",
  components: {
    canvasBox
  }
};
</script>
