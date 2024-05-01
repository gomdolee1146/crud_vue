<template>
  <div id="app">
    <headerComponent></headerComponent>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: { HeaderComponent },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layouts/DefaultLayout.scss';
</style>
