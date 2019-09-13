<template lang="pug">
  .header-card
    label {{ title }}
    slot
    slot(name='footer', v-if='hasFooter')
      .header-card__time-box
        .header-card__time
          | 日
          .header-card__time-triangle.triangle
          | {{ numbers.day }}

        .header-card__time
          | 周
          .header-card__time-triangle.triangle
          | {{ numbers.week }}

        .header-card__time
          | 月
          .header-card__time-triangle.triangle
          | {{ numbers.mounth }}
</template>

<script>
export default {
  name: "HeaderCard",
  props: {
    hasFooter: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "this is title"
    },
    numbers: {
      type: Object,
      default: function() {
        return {
          day: "10%",
          week: "10%",
          mounth: "10%"
        };
      }
    }
  }
};
</script>