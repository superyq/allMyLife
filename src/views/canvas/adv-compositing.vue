<template lang="pug">
  canvas(id='advCompositing', width='800', height='800')
</template>

<script>
import advCompositing from "@/canvas/adv-compositing.js";
export default {
  name: 'AdvCompositing',
  mixins: [advCompositing]
}
</script>