<template lang="pug">
  .c-user__warpper
    .c-user__avatar.u-image-box
      img(:src='avatar')

    //- .c-user__info
    //-   p {{ name }}
    //-   p {{ age }}
</template>

<script>
export default {
  name: 'CUserCard',
  computed: {
    name() {
      return this.$store.state.name
    },
    avatar() {
      return this.$store.state.avatar
    },
    age() {
      return this.$store.state.age
    }
  }
}
</script>