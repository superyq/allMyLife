<template lang="pug">
  canvas(id='baseControl', width='800', height='800') Your browser does not support the Canvas API, Please upgrade your browser.
</template>

<script>
import baseControl from "@/canvas/base-control.js";

export default {
  name: 'baseControl',
  mixins: [baseControl]
}
</script>