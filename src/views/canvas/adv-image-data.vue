<template lang="pug">
  canvas(id='advImageData', width='800', height='800')
</template>

<script>
import advImageData from "@/canvas/adv-image-data.js";

export default {
  name: 'AdvImageData',
  mixins: [advImageData]
}
</script>