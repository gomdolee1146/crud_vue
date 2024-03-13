<template>
  <div id="app">
    <sidePanel></sidePanel>
    
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import sidePanel from '@/components/layouts/SidePanel.vue';

export default {
  name: 'App',
  components: { sidePanel },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layouts/DefaultLayout.scss';
</style>
