<template lang='pug'>
  .c-artical-card(:style='{ width }')
    .artical-card__time(:style='{color: timeC}') {{ item.time }}
    .artical-card__title(:style='{color: titleC}') {{ item.title }}
    .artical-card__content(:style='{color: contentC}') {{ item.content }}
</template>

<script>
export default {
  name: "CArticalCard",
  props: {
    item: {
      type: Object,
      required: true
    },
    width: {
      type: String,
      default: "400px"
    },
    timeC: {
      type: String,
      default: "#fff"
    },
    titleC: {
      type: String,
      default: "#fff"
    },
    contentC: {
      type: String,
      default: "#fff"
    }
  },
  data() {
    return {};
  }
};
</script>