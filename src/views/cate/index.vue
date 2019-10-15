<template lang="pug">
  .p-cate
    .p-cate__box
      cate-card(v-for='item in items', :key='item.id', :item='item')

</template>

<script>
import cateCard from "./cate-card.vue";

export default {
  name: "PCate",
  data() {
    return {
      number: 1,
      items: [
        {
          id: 1,
          title: "文章1"
        },
        {
          id: 2,
          title: "文章2"
        }
      ]
    };
  },
  components: {
    cateCard
  },
  methods: {}
};
</script>