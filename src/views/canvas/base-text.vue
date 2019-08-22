<template lang="pug">
  canvas(id='baseText', width='800', height='800')
</template>

<script>
import baseText from "@/canvas/base-text.js";

export default {
  name: 'BaseText',
  mixins: [baseText]
}
</script>