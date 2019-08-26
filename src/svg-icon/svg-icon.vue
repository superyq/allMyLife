<template lang="pug">
  svg(:class='className', :style='{ color, width, height }', @click='clickIcon')
    use(:xlink:href='`#${name}`')
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    color: String,
    width: String,
    height: String
  },
  computed: {
    className() {
      return ["svg-icon", `svg-icon-${this.name}`];
    }
  },
  methods: {
    clickIcon() {
      this.$emit("clickIcon");
    }
  }
};
</script>
