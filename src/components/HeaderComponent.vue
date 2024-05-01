<template>
  <header class="header">
    <h1 class="header__title">Calendar</h1>
    <ul class="header__box">
      <li class="header__link" v-for="(menu, idx) in navMenuList" :key="idx">
        <router-link :to="menu.link">
          <div class="header__link_box">
            {{ menu.txt }}
          </div>
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import navMenuList from '@/data/layouts/navMenuList';

export default {
  data() {
    return {
      navMenuList: navMenuList,
    };
  },
};
</script>

<style lang="scss" sceopd>
@import '@/assets/scss/layouts/Header.scss';
</style>
