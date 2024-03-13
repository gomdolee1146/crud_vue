<template>
  <header class="header">{{ this.$route.name }}</header>
</template>

<script>
export default {
  name: 'headerComponent',
  // created(){
  //   console.log(this.$route)
  // }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layouts/Header.scss';
</style>
