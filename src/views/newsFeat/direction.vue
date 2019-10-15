<template lang="pug">
  .p-direction(v-color, v-if='show') {{ number }}
    el-button(@click='changeHandle') aa
</template>

<script>
export default {
  name: "p-direction",
  data() {
    return {
      number: 1,
      show: true
    };
  },
  methods: {
    changeHandle() {
      this.number += 1;
      this.show = false;
    }
  }
};
</script>