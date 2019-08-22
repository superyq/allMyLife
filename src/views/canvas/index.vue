<template lang="pug">
  .canvas-box
    //- base-color
    //- base-control
    //- base-text
    //- base-image
    //- adv-Transformations
    //- adv-compositing
    //- adv-animation
    //- adv-high-animation
    adv-image-data
</template>

<script>
import advTransformations from "@/views/canvas/adv-transformations.vue";
import advHighAnimation from "@/views/canvas/adv-high-animation.vue";
import advCompositing from "@/views/canvas/adv-compositing.vue";
import advAnimation from "@/views/canvas/adv-animation.vue";
import baseControl from "@/views/canvas/base-control.vue";
import advImageData from "@/views/canvas/adv-image-data";
import baseColor from "@/views/canvas/base-color.vue";
import baseImage from "@/views/canvas/base-image.vue";
import baseText from "@/views/canvas/base-text.vue";

export default {
  name: 'canvasBox',
  components: {
    advTransformations,
    advHighAnimation,
    advCompositing,
    advAnimation,
    advImageData,
    baseControl,
    baseColor,
    baseImage,
    baseText
  }
}
</script>

<style lang="scss">
.canvas-box {
  width: 800px;
  height: 800px;
  border: 1px solid;
  margin: 0 auto;
}
</style>