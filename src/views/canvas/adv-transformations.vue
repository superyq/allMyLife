<template lang="pug">
  canvas(id='advTransformations', width='800', height='800')
</template>

<script>
import advTransformations from "@/canvas/adv-transformations.js";

export default {
  name: 'AdvTransformations',
  mixins: [advTransformations]
}
</script>