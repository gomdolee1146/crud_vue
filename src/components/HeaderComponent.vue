<template>
  <header class="header">
    <h1 class="header__title">Calendar</h1>
    <ul class="header__box">
      <li class="header__link" v-for="(menu, idx) in menuList" :key="idx">
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
export default {
  data() {
    return {
      navMenuList: [
        {
          link: '/calendar',
          txt: '달력으로 보기',
        },
        {
          link: '/',
          txt: '리스트로 보기',
        },
      ],
      menuList: [],
    };
  },
  methods: {
   
  },
  watch:{
    $route(to){
      this.menuList = this.$_.cloneDeep(this.navMenuList)

      this.$_.remove(this.menuList, (i) => {
        return i.link === to.path
      })
    }
  }
};
</script>

<style lang="scss" sceopd>
@import '@/assets/scss/layouts/Header.scss';
</style>
