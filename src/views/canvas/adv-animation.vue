<template lang="pug">
  canvas(id='advAnimation', width='800', height='800')
</template>

<script>
import advAnimation from "@/canvas/adv-animation.js";

export default {
  name: 'AdvAnimation',
  mixins: [advAnimation]
}
</script>