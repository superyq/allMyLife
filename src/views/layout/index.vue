<template lang="pug">
  .p-layout
    .p-layout__header
      .p-layout__header-bg
      .p-layout__header-box
        c-header
    router-view
</template>

<script>
export default {
  name: 'PLayout'
}
</script>