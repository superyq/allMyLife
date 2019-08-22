<template lang="pug">
  canvas(id='baseImage', width='800', height='800')
</template>

<script>
import baseImage from "@/canvas/base-image.js";

export default {
  name: 'BaseImage',
  mixins: [baseImage]
}
</script>