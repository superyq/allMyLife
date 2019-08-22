<template lang="pug">
  canvas(id='baseColor', width='800', height='800')
</template>

<script>
import baseColor from "@/canvas/base-color.js";

export default {
  name: 'BaseColor',
  mixins: [baseColor]
}
</script>
