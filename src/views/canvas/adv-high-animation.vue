<template lang="pug">
  canvas(id='advHighAnimation', width='800', height='800')
</template>

<script>
import AdvHighAnimation from "@/canvas/adv-high-animation.js";
export default {
  name: 'AdvHighAnimation',
  mixins: [AdvHighAnimation]
}
</script>